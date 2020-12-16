<template>
  <div class="login">
    <img
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=24871252,3864260746&fm=26&gp=0.jpg"
      alt=""
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="link">
      <router-link :to="{ name: 'Reg' }">主人没有账号就快来注册吧</router-link>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { loginApi } from "../../services/user/auth";
import { setToken } from "../../utils/tools";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      // console.log("登录");
      const result = await loginApi({
        userName: this.username,
        password: this.password,
      });
      if (result.code === "success") {
        //
        setToken(result.token);
        Dialog.alert({
          message: "登录成功",
        });
        this.$router.push({
          name: "User",
        });
      } else {
        Dialog.alert({
          message: result.message,
        });
      }
    },
  },
  beforeMount() {
    this.$store.commit("HideMaizuoTab", false);
  },
  beforeDestroy() {
    this.$store.commit("HideMaizuoTab", true);
  },
};
</script>

<style scoped>
html,
body,
.login {
  width: 100%;
  height: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 700px;
}
.login img {
  width: 140px;
  height: 180px;
}
.link {
  width: 100%;
}
.link a {
  float: right;
  height: 20px;
  font-size: 12px;
  color: #b2c9f3;
  margin-right: 10%;
}
</style>