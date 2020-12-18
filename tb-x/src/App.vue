<template>
  <div id="app">
    <transition name="bounce" mode="out-in">
      <router-view class="content" />
    </transition>
    <div id="nav" v-show="isTabShow">
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
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    ...mapMutations(["getCardCount"]),
  },
  computed: {
    ...mapState(["isTabShow"]),
    ...mapGetters(["getQuantity"]),
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
