<template>
  <div class="cpd">
    <van-form @submit="onSubmit">
      <van-field
        v-model="oldPassword"
        type="password"
        name="原密码"
        label="原密码"
        placeholder="请输入原密码"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入新密码"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loadUserInfo, modifyUserPassword } from "../../utils/userInfo";
import { Dialog } from "vant";
export default {
  data() {
    return {
      password: "",
      oldPassword: "",
      oldPasswords: "",
    };
  },
  created() {
    this.loadInfo();
  },
  methods: {
    async loadInfo() {
      const res = await loadUserInfo();
      this.oldPasswords = res.password;
      // this.password = res.
      console.log(res);
    },
    async onSubmit() {
      const result = await modifyUserPassword(this.oldPassword, this.password);
      if (result.code == "success") {
        Dialog({ message: "密码修改成功！请重新登录" });
        setTimeout(() => {
          this.$router.push({
            name: "Login",
          });
        }, 1500);
      } else {
        Dialog({ message: "原密码输入错误，请重新输入" });
      }
    },
  },
};
</script>

<style scoped>
.cpd {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>