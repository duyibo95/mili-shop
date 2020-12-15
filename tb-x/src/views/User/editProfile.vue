<template>
  <div class="epe">
    <img :src="avatar" alt="" />
    <van-uploader :after-read="afterRead" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickName"
        name="用户名"
        label="用户名"
        placeholder="请填写新的用户名"
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
import { loadUserInfo, modifyUserInfo } from "../../utils/userInfo";
import { Toast } from "vant";
export default {
  data() {
    return {
      avatar: "",
      nickName: "",
    };
  },
  created() {
    this.info();
  },
  methods: {
    async info() {
      const res = await loadUserInfo();
      this.nickName = res.nickName;
      this.avatar = res.avatar;
    },
    async onSubmit() {
      const result = await modifyUserInfo(this.nickName, this.avatar);
      if (result.code == "success") {
        Toast.success("保存成功!");
        setTimeout(() => {
          this.$router.back(); //保存成功后直接后退一步，至个人界面
        }, 2000);
      }
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.avatar = file.content;
    },
  },
};
</script>

<style scoped>
.epe {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.epe > img {
  width: 100px;
}
</style>