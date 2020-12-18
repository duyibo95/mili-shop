<template>
  <!-- 个人中心 -->
  <div class="user">
    <!-- 头像 -->
    <div class="udt">
      <div class="box-img">
        <img :src="avatar" alt="" />
      </div>
      <span>{{ nickName }}</span>
      <div class="box-x" v-show="show">
        <img src="../../assets/min/avatar.76a75b8f17.png" alt="" />
        <p @click="log">登录/注册</p>
      </div>
    </div>
    <!-- 用户 -->
    <van-cell class="vciti" title="我的订单" is-link to="/" />
    <van-grid clickable :column-num="4">
      <van-grid-item icon="send-gift-o" text="待付款" to="/" />
      <van-grid-item icon="gift-card-o" text="待收货" to="/" />
      <van-grid-item icon="smile-comment-o" text="评价" to="/" />
      <van-grid-item icon="balance-list-o" text="退款/售后" to="/" />
    </van-grid>
    <van-cell
      class="vciti"
      icon="edit"
      title="修改个人信息"
      is-link
      :to="{ name: 'EditProfile' }"
    />
    <van-cell
      class="vciti"
      icon="info-o"
      title="修改密码"
      is-link
      :to="{ name: 'ChangePassword' }"
    />
    <van-cell
      icon="delete"
      title="清除缓存"
      :value="cache"
      @click="eliminate"
    />

    <van-cell
      class="vciti"
      icon="coupon-o"
      title="优惠券"
      is-link
      to="/couponList"
    />
    <van-cell
      class="vciti"
      icon="label-o"
      title="我的收藏"
      is-link
      to="/cart"
    />
    <van-cell
      class="vciti"
      icon="location-o"
      title="地址管理"
      is-link
      to="/addressList"
    />
    <van-cell class="vciti" icon="manager-o" title="关于我们" is-link to="/" />
    <van-button plain type="primary" @click="quit" class="vbpt"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import { loadUserInfo } from "../../utils/userInfo";
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      nickName: "",
      id: "",
      avatar: "",
      show: false,
      cache: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async loadUser() {
      const res = await loadUserInfo();
      this.id = res._id;
      this.nickName = res.nickName;
      this.userName = res.userName;
      this.avatar = res.avatar;
    },
    caches() {
      this.cache = (Math.random() * 9.7).toFixed(2) + "M";
    },
    eliminate() {
      Toast.loading({
        duration: 4000,
        message: "正在清除...",
        forbidClick: true,
        overlay: true,
      });
      setTimeout(() => {
        this.cache = 0 + "M";
        Toast.success("清除成功");
      }, 500);
    },
    quit() {
      Dialog.confirm({
        title: "退出登录",
        message: "确定要退出登录吗",
      })
        .then(() => {
          // on confirm
          Toast.loading({
            duration: 1000,
            message: "正在安全退出",
            forbidClick: true,
            loadingType: "spinner",
          });
          setTimeout(() => {
            Toast.success({
              message: "退出成功",
            });
            localStorage.clear();
            this.$router.push({
              name: "Login",
            });
          }, 1000);
        })
        .catch(() => {
          // on cancel
        });
    },
    log() {
      Toast.success({
        message: "即将进入登陆界面",
      });
      setTimeout(() => {
        this.$router.push({
          name: "Login",
        });
      }, 2000);
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.show = false;
    } else {
      this.show = true;
    }

    this.loadUser();
    this.caches();
  },
};
</script>

<style scoped>
.user {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.vciti {
  margin-bottom: 0.125rem;
}
.vbpt {
  width: 6.25rem;
  height: 2.8125rem;
  display: block;
  margin: 0 auto;
}
.udt {
  width: 100%;
  height: 5rem;
  background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0
    #f37d0f;
  background-size: 100% 100%;
  padding-top: 1.2rem;
  padding-left: 1.2rem;
  display: flex;
  position: relative;
}
.box-img {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.box-img > img {
  width: 4.5rem;
  border: #ffff6f;
}
.udt span {
  margin-left: 1.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
}
.box-x {
  position: absolute;
  top: 15%;
  left: 5%;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.box-x > img {
  width: 4.5rem;
  height: 4.5rem;
}
.box-x > p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-left: 10%;
}
</style>