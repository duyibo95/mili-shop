<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <van-tabbar route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="wap-home" :to="{ name: 'Home' }"
          >主页</van-tabbar-item
        >
        <van-tabbar-item icon="cluster" :to="{ name: 'Group' }"
          >分类</van-tabbar-item
        >
        <van-tabbar-item icon="shopping-cart" :to="{ name: 'Cart' }"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item icon="smile" :to="{ name: 'User' }"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>
