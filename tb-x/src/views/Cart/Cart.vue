<template>
  <div class="cart">
    <van-sticky>
      <div class="cart-head">
        <van-icon name="arrow-left" />
        <p>购物车</p>
        <van-icon name="search" />
      </div>
    </van-sticky>
    <div class="goods-list">
      <div class="goods" v-for="(data, i) in list" :key="data._id + i">
        <van-checkbox
          v-model="data.checked"
          checked-color="#00CCFF"
          icon-size="24px"
          :id="data.product._id"
          aria-checked="true"
        ></van-checkbox>
        <div class="goods-img">
          <img :src="data.product.coverImg | dalImg" alt="" />
        </div>

        <div class="goods-info">
          <p>{{ data.product.name }}</p>
          <span>￥{{ data.product.price }}</span>
          <div class="num-btn">
            <span @click="data.quantity > 1 && updatePro(data.product._id, -1)"
              >-</span
            >{{ data.quantity
            }}<span @click="updatePro(data.product._id, 1)">+</span>
          </div>
        </div>
        <div class="del" @click="delatePro(data._id, i)">
          <van-icon name="delete" />
        </div>
      </div>

      <van-submit-bar
        :price="sumPrice * 100"
        button-text="立即结算"
        v-show="!kong"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <van-icon name="delete" v-show="checked" @click="dels" />
      </van-submit-bar>

      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />

      <van-notice-bar color="#949494" background="#FFFFFF" v-show="show">
        温馨提示:产品是否购买成功，以最终下单为准，请尽快结算。
      </van-notice-bar>
    </div>
    <div class="Address" v-for="i in Address" :key="i._id" v-show="!kong">
      <van-cell
        icon="logistics"
        :title="i.address"
        value="修改"
        @click="goAddress"
      />
    </div>
    <van-cell
      title="登陆后享受更多优惠"
      value="去登陆>"
      @click="log"
      v-show="!show"
    />
    <div class="cart-kong" v-show="kong">
      <van-icon name="shopping-cart-o" />
      <span>购物车还是空的</span>
      <p @click="stroll">去逛逛</p>
    </div>

    <div class="guess">
      <img src="../../assets/min/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" />
    </div>
    <van-password-input
      :value="value"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
      v-show="isShow"
    />
    <!-- 底部商品推荐 -->
    <div class="cartTuiJian">
      <div v-for="item in rmdList" :key="item.gid" class="cartTuiJianDiv">
        <img :src="item.pic_url" alt="" class="ctjdi" />
        <b class="ctjdb">{{ item.name }}</b
        ><br />
        <p class="ctjdp">${{ item.price_min }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations, mapGetters } from "vuex";
import { Dialog, Toast } from "vant";
import { gerToken } from "../../utils/tools";
import {
  loadCarts,
  addToCart,
  delpro,
  delpros,
  submit,
} from "../../utils/carts";
import { addList } from "../../utils/userInfo";

export default {
  data() {
    return {
      show: "",
      rmdList: [],
      list: [],
      kong: "",
      ids: [],
      orderDetails: [],
      Address: [],

      value: "",
      errorInfo: "",
      showKeyboard: false,
      isShow: false,
    };
  },

  methods: {
    // 加载购物车列表
    async addCarts() {
      let res = await loadCarts();
      this.list = res;
      // this.AddQuantity(this.list.length);
      console.log(this.list);
      // this.dels();
      if (this.list.length === 0) {
        this.kong = true;
      }
    },
    // 更新购物车列表。这里指的是通过增加减少按键触发事件。传入的是对应的商品id和+1或-1
    async updatePro(id, op) {
      await addToCart(id, op);
      this.list.forEach((data) => {
        if (data.product._id == id) {
          data.quantity = data.quantity + op;
        }
      });
    },
    // ...mapMutations(["AddQuantity"]),

    // 根据id删除购物车商品
    delatePro(id) {
      Dialog.confirm({
        title: "删除",
        message: "你确定要删除吗？",
      })
        .then(async () => {
          // on confirm
          await delpro(id);
          this.list.forEach((v, i) => {
            if (v._id == id) {
              this.list.splice(i, 1);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    // 删除购物车全部商品
    async dels() {
      this.ids = this.list.map((item) => {
        return item._id;
      });
      console.log(this.ids);
      Dialog.confirm({
        title: "删除",
        message: "你确定要删除全部商品吗？",
      })
        .then(async () => {
          // on confirm
          await delpros(this.ids);
          this.addCarts();
        })
        .catch(() => {
          // on cancel
        });
    },
    // 获取收货地址
    async getaddressList() {
      const res = await addList();
      let aList = res.addresses;
      console.log(aList);
      this.Address.push(aList.find((item) => item.isDefault == true));
      console.log(this.Address);
      console.log(this.Address[0].address);
    },
    // 提交订单
    onSubmit() {
      this.showKeyboard = true;
      this.isShow = true;
    },
    async submits() {
      let m = [];
      m = this.list.filter((v) => v.checked);
      this.orderDetails = m.map((item) => {
        return {
          quantity: item.quantity,
          product: item._id,
          price: item.product.price,
          id: item._id,
        };
      });
      console.log(this.orderDetails);

      const res = await submit({
        receiver: this.Address[0].receiver,
        regions: this.Address[0].regions,
        address: this.Address[0].address,
        orderDetails: this.orderDetails,
      });
      console.log(res);
      if (res.code == "success") {
        this.showKeyboard = false;
        this.isShow = false;
        Toast.success("订单提交成功");

        this.$router.push({
          name: "Order",
        });
      }
      this.ids = this.list.map((item) => {
        return item._id;
      });
    },

    // 修改地址
    goAddress() {
      this.$router.push({
        name: "AddressList",
      });
    },
    // 返回首页购物
    stroll() {
      this.$router.push({
        name: "Home",
      });
    },
    // 跳转登录
    log() {
      this.$router.push({
        name: "Login",
      });
    },
  },

  watch: {
    value(value) {
      if (value.length === 6 && value == "336699") {
        this.submits();
        this.errorInfo = "密码正确";
      } else {
        this.errorInfo = "密码错误";
      }
    },
  },
  computed: {
    // ...mapGetters(["getQuantity"]),
    checked: {
      set(flag) {
        return this.list.forEach((item) => (item.checked = flag));
      },
      get() {
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
    sumPrice() {
      return this.list
        .filter((item) => {
          //通过过滤，筛选出被选中的商品
          return item.checked;
        })
        .reduce(function (pre, cur) {
          //.reduce是js的方法，是一个累加器。pre指的是数据改变之前的初始值，cur是指当前元素
          return pre + cur.product.price * cur.quantity;
        }, 0);
    },
  },
  created() {
    if (gerToken()) {
      console.log("已登录");
      this.show = true;
    } else {
      this.show = false;
      console.log(1);
    }
    this.addCarts();
    this.getaddressList();
    fetch("https://www.xiaomiyoupin.com/homepage/main/v1002?platform=pc")
      .then((res) => res.json())
      .then((res) => (this.rmdList = res.data.recommend.floors[0].data));
  },
};
</script>

<style scoped>
html,
body,
.cart {
  width: 100%;
  height: 100%;
  background: #ebebeb;
}
.van-submit-bar {
  bottom: 50px;
}
.cart {
  position: relative;
}
.cart-head {
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  background: #f2f2f2;
  align-items: center;
}
.cart-head > i {
  font-size: 2rem;
  color: #a1a1a1;
}
.goods-list {
  margin-bottom: 15px;
  overflow: auto;
}
.goods {
  height: 100px;
  width: 100%;
  display: flex;
  background: white;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
}
.goods-img {
  width: 80px;
  height: 80px;
  border: 1px dotted #cccccc;
}
.goods-img > img {
  width: 100%;
}
.goods-info {
  width: 55%;
}
.goods-info p {
  font-size: 0.5rem;
  margin: 0;
}
.del {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.5rem;
}
.cart-kong {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-kong i {
  font-size: 2.5rem;
  color: #a4a4a4;
}
.cart-kong span {
  color: #a4a4a4;
  margin: 0 2%;
}
.cart-kong p {
  width: 4rem;
  height: 1.5rem;
  border: 1px solid #a4a4a4;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.num-btn span {
  display: inline-block;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}
.guess {
  width: 100%;
}
.guess img {
  width: 100%;
}
.van-cell {
  height: 60px;
}
.van-cell__title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}
.van-cell__value {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.cartTuiJian {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  background-color: #ffffff;
  font-size: 0.875rem;
}
.cartTuiJianDiv {
  width: 46%;
}
.ctjdi {
  width: 100%;
}
.ctjdb {
  display: block;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ctjdp {
  width: 100%;
  display: block;
  margin: 0 auto;
  color: red;
  text-align: center;
}
.van-submit-bar__bar i {
  font-size: 1.5rem;
  margin-left: 2%;
}
.van-cell {
  margin: 0;
  padding: 0;
  height: 40px;
  align-items: center;
}
.van-cell i {
  font-size: 1.5rem;
}
.van-cell__title span {
  font-size: 0.8rem;
}
.van-cell__title {
  line-height: 0.8rem;
}
.van-password-input {
  position: absolute;
  bottom: 37%;
  background: white;
  width: 100%;
  margin: 0;
}
</style>