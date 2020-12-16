<template>
  <div class="reg">
    <van-form @submit="onSubmit">
      <p>
        <img :src="avatar" alt="" />
        <van-uploader :after-read="afterRead" preview-size="100px" />
      </p>
      <van-field
        v-model="nickname"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="username"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repwd"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="请重新输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="link">
      <router-link :to="{ name: 'Login' }"
        >主人有账号点击这里登录吧</router-link
      >
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { regApi } from "../../services/user/auth";
import { setToken } from "../../utils/tools";
export default {
  name: "Reg",
  data() {
    return {
      username: "",
      password: "",
      repwd: "",
      nickname: "",
      avatar: "",
    };
  },

  methods: {
    async onSubmit() {
      if (this.password === this.repwd) {
        // 这里没有使用正则验证，是直接通过判断两次输入的密码是否相同，然后向数据库直接请求存入账号信息
        const result = await regApi({
          userName: this.username,
          password: this.password,
          nickName: this.nickname,
          avatar: this.avatar,
        });
        // 通过从数据库返回回的数据判断是否注册成功，然后将账号信息以token的形式存入localStorage
        if (result.code === "success") {
          // localStorage.setItem("token", result.token);
          setToken(result.token);
          Dialog.alert({
            message: "注册成功",
          });
          this.$router.push({
            name: "Login",
          });
        } else {
          Dialog.alert({
            message: "账号已存在",
          });
        }
      } else {
        Dialog.alert({
          message: "两次输入密码不一致",
        });
      }
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.avatar = file.content;
      console.log(file.content);
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
.reg {
  width: 100%;
  height: 100%;
}
.reg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 700px;
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
p {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100px;
}
</style>