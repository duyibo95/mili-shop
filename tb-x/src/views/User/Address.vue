<template>
  <div class="address">
    <header class="header">
      <div class="header-left" @click="clickLeft">
        <van-icon name="arrow-left" size="22px" color="#fff" />
      </div>
      <div class="header-title">
        <h3>地址编辑</h3>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickLeft() {
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
.header {
  height: 48px;
  width: 100%;
  background: #ff4e20;
  z-index: 9999;
  margin-bottom: 3px;
  box-shadow: 0 2px 2px rgba(5, 16, 20, 0.24), 0 0 4px rgba(10, 16, 20, 0.12);
  display: flex;
  overflow: hidden;
}

.header-left {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-title {
  color: #fff;
  flex: 1;
}
.header-title h3 {
  margin: 0;
  line-height: 48px;
  text-align: center;
}
</style>