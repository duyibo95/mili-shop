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
      <div class="goods">
        <van-checkbox></van-checkbox>
        <div class="goods-img">
          <img
            src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2594657626,4286773499&fm=26&gp=0.jpg"
            alt=""
          />
        </div>

        <div class="goods-info">
          <p>撒打撒打撒十大士大士</p>
          <span>￥1000</span>
          <div class="num-btn"><span>-</span>0<span>+</span></div>
        </div>
        <div class="del">
          <van-icon name="delete" />
        </div>
      </div>
    </div>
    <van-notice-bar color="#949494" background="#FFFFFF" v-show="show">
      温馨提示:产品是否购买成功，以最终下单为准，请尽快结算。
    </van-notice-bar>
    <van-cell
      title="登陆后享受更多优惠"
      value="去登陆>"
      @click="log"
      v-show="!show"
    />
    <div class="cart-kong">
      <van-icon name="shopping-cart-o" />
      <span>购物车还是空的</span>
      <p @click="stroll">去逛逛</p>
    </div>
    <div class="guess">
      <img src="../../assets/min/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" />
    </div>
    <!-- 底部商品推荐 -->
    <div class="cartTuiJian">
      <div v-for="item in list" :key="item.gid" class="cartTuiJianDiv">
        <img :src="item.pic_url" alt="" class="ctjdi" />
        <b class="ctjdb">{{ item.name }}</b
        ><br />
        <p class="ctjdp">${{ item.price_min }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gerToken } from "../../utils/tools";
export default {
  data() {
    return {
      show: "",
      list: [],
    };
  },
  methods: {
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
  created() {
    if (gerToken()) {
      console.log("已登录");
      this.show = true;
    } else {
      this.show = false;
      console.log(1);
    }
    fetch("https://www.xiaomiyoupin.com/homepage/main/v1002?platform=pc")
      .then((res) => res.json())
      .then((res) => (this.list = res.data.recommend.floors[0].data));
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
  border: 1px solid black;
}
.goods-img > img {
  width: 100%;
}
.goods-info {
  width: 55%;
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
</style>