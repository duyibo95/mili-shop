<template>
  <div class="cpd">
    <van-form @submit="onSubmit">
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
export default {
  data() {
    return {
      password: "",
    };
  },
  created() {
    this.loadInfo();
  },
  methods: {
    async loadInfo() {
      const res = await loadUserInfo();
      this.password = res.console.log(res);
    },
    onSubmit(values) {
      modifyUserPassword();
      console.log("submit", values);
    },
  },
};
</script>

<style>
.cpd {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>