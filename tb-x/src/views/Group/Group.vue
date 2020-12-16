// 分类页面
<template>
  <div class="group">
    <!-- 顶部返回及搜索定位 -->
    <van-sticky>
      <van-nav-bar
        title="分类"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="group">
      <ul class="wrap">
        <li>小米手机</li>
        <li>Redmi手机</li>
        <li>黑鲨手机</li>
        <li>电视</li>
        <li>大家电</li>
        <li>电脑办公</li>
        <li>小爱音箱</li>
        <li>路由器</li>
        <li>小米手机</li>
        <li>Redmi手机</li>
        <li>黑鲨手机</li>
        <li>电视</li>
        <li>大家电</li>
        <li>电脑办公</li>
        <li>小爱音箱</li>
        <li>路由器</li>
        <li>路由器</li>
        <li>小米手机</li>
        <li>Redmi手机</li>
        <li>黑鲨手机</li>
        <li>电视</li>
        <li>大家电</li>
        <li>电脑办公</li>
        <li>小爱音箱</li>
        <li>路由器</li>
      </ul>
      <div class="groupdd"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 6.25rem;
  position: absolute;
  left: 0;
  top: 50px;
  font-size: 1.1rem;
  line-height: 2.7rem;
  text-align: center;
  flex: 1;
  border-right: 0.0625rem solid #9999;
}
</style>