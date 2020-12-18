<template>
  <div class="details">
    <div class="head">
      <van-icon name="arrow-left" @click="gobackHandle()" />
    </div>

    <div class="middle">
      <div class="ban">
        <div class="cent">
          <img :src="detList.coverImg | dalImg" alt="" />
        </div>
        <div class="message">
          <b>￥{{ detList.price }}.00</b>
          <p>{{ detList.name }}</p>
        </div>
        <div class="tail">
          <span>全国免邮</span>
          <span>月销1000w</span>
          <span>珠穆拉玛峰</span>
        </div>
      </div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <div class="inf">
        <van-notice-bar
          left-icon="volume-o"
          text="我陈保安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！。"
        />
      </div>
      <div class="w-box">
        <div class="w-left">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1700815525,401269334&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <div class="w-right">
          <p><b>王源的小卖部</b><span>24h在线</span></p>
          <h6>快点来吧！我们家什么都卖</h6>
          <div class="w-bottom"><b>进入小卖部</b> <span>收藏小卖部</span></div>
        </div>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="getQuantity" />
      <van-goods-action-icon icon="star" text="收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart(detList)"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        :to="{ name: 'Cart', query: { id: detList._id } }"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Toast } from "vant";
import { Dialog } from "vant";
import { loadProductDetails } from "../../services/cart/products";
import { addToCart } from "../../utils/carts";
import { gerToken } from "../../utils/tools";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠1200元",
  reason: "",
  value: 100000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1000",
  unitDesc: "元",
};
export default {
  data() {
    return {
      detList: {},
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      id: this.$route.query.id,
    };
  },
  created() {
    this.LoadDetails();
    console.log(this.id);
  },
  methods: {
    // 加载商品详情
    async LoadDetails() {
      const res = await loadProductDetails(this.id);
      this.detList = res;
    },
    async addCart(detList) {
      if (gerToken()) {
        const result = await addToCart(detList._id, 1);
        if (result.code == "success") {
          Toast.success("加入成功");
          this.$store.commit("getCardCount", 1);
        }
      } else {
        Dialog({ message: "请登录后再使用哦" });
        setTimeout(() => {
          this.$router.push({
            name: "Login",
          });
        }, 1000);
      }
    },
    // 通知栏
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
      console.log(code);
    },
    // 规格栏
    particulars() {
      this.show = true;
    },
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },
    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },

    // 返回上一级
    gobackHandle() {
      this.$router.back();
    },
  },

  beforeMount() {
    this.$store.commit("HideMaizuoTab", false);
  },
  beforeDestroy() {
    this.$store.commit("HideMaizuoTab", true);
  },
  computed: {
    ...mapGetters(["getQuantity"]),
  },
};
</script>

<style scoped>
html,
body,
.details {
  width: 100%;
  height: 100%;
}
.details {
  background: #f3f3f3;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.head {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.head i {
  color: #000;
  font-size: 2rem;
  line-height: 2rem;
}
.head h4 {
  color: #ff6666;
  margin-left: 35%;
}

.middle {
  height: 630px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.cent {
  width: 100%;
}
.cent img {
  width: 100%;
}
.tail,
.message {
  background: white;
}
.message {
  width: 100%;
  height: 120px;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.message b {
  color: #ff6200;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 3.2rem;
}
.message p {
  font-size: 1rem;
  margin: 0;
}

.tail {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  box-sizing: border-box;
  color: #999999;
}
.demo-sku .sku-container {
  padding: 0 15px;
}
::-webkit-scrollbar {
  display: none;
}
.w-box {
  width: 89%;
  display: flex;
  padding: 1.2rem;
  background: white;
  border-bottom: 1px solid darkgrey;
  border-radius: 5px;
  justify-content: space-between;
}
.w-left {
  width: 15%;
  height: 100%;
}
.w-left img {
  width: 100%;
}
.w-right {
  width: 100%;
}
.w-right p {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.w-right > p > b {
  font-size: 1.1rem;
}
.w-right > p > span {
  color: #f2270c;
}
.w-right h6 {
  margin-left: 10px;
  line-height: 2rem;
  margin: 0;
  font-size: 0.8rem;
}
.w-bottom {
  display: flex;
  width: 60%;
  font-size: 12px;
  justify-content: space-between;
  margin-left: 10px;
  font-weight: 600;
}
.w-bottom b,
.w-bottom span {
  font-weight: 500;
  display: block;
  width: 40%;
  height: 30px;
  border: 1px solid dimgrey;
  border-radius: 25px;
  line-height: 30px;
  text-align: center;
}
</style>
<style>
.detail-b {
  width: 100%;
  height: 100%;
}
.detail-b p {
  width: 100%;
}
.detail-b img {
  width: 100%;
}
</style>