<template>
  <div class="list">
    <header class="header">
      <div class="back">
        <div class="go-back-btn-warp" @click="gobackHandle">
          <van-icon name="arrow-left" />
        </div>
      </div>
      <div class="header-rigth">
        <p class="sign">
          {{ $route.query.class }}
        </p>
      </div>
    </header>

    <div class="list-content">
      <van-card
        v-for="(v, i) in classPros"
        :key="v._id + i"
        :price="v.price + '.00'"
        :title="v.name"
        :thumb="v.coverImg | dalImg"
        :thumb-link="'./index.html#/details?id=' + v._id"
      >
        <template #footer>
          <img src="../../assets/defq.png" alt="" @click="addProduct(v._id)" />
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { addToCart } from "../../utils/carts";
import { Toast } from "vant";
import { Notify } from "vant";
export default {
  data() {
    return {
      classPros: [],
    };
  },

  created() {
    this.getClassPro();
  },

  methods: {
    gobackHandle() {
      this.$router.back(-1);
    },
    async getClassPro() {
      let res = await get(
        "/api/v1/products?product_category=" +
          this.$route.query.product_category
      );
      this.classPros = res.products;
    },

    async addProduct(id) {
      try {
        if (localStorage.getItem("token")) {
          await addToCart(id);
          this.$bus.$emit("updateBadge");
          Toast.success("加入购物车！");
        } else {
          Notify({
            type: "warning",
            message: "登录后就可以尽情购买啦~",
          });
          setTimeout(() => {
            this.$router.push({
              name: "Login",
            });
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style  scoped>
.list {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.header {
  width: 100%;
  height: 48px;
  display: flex;
  position: sticky;
  z-index: 2200;
  top: 0;
  background: linear-gradient(#e66465, #ff461f);
  box-shadow: 0 2px 2px rgba(5, 16, 20, 0.24), 0 0 4px rgba(10, 16, 20, 0.12);
}

.back {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.go-back-btn-warp {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  color: white;
  font-size: 22px;
}

.header-rigth {
  flex: 1;
  height: 100%;
  font-size: 18px;
  text-align: center;
  line-height: 45px;
  font-weight: 600;
}
.sign {
  width: 40%;
  margin-left: 20%;
  color: white;
  font-size: 1.2rem;
  font-weight: 600 !important;
}
.list-content {
  width: 100%;
}
.van-card__title {
  font-size: 14px;
  font-weight: 600;
}
.van-card__price {
  color: #f0250f;
}
.van-card {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
}

.van-card__footer {
  width: 30%;
  position: absolute;
  bottom: 6%;
  right: 4%;
}
.van-card__footer img {
  width: 24px;
}
</style>