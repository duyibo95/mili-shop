<template>
  <div class="group">
    <!-- 顶部返回及搜索定位 -->
    <van-sticky>
      <van-nav-bar title="分类" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <van-sidebar
      v-model="activeKey"
      style="width: 100px; font-size: 0.34rem; text-align: center"
    >
      <van-sidebar-item title="小米手机" />
      <van-sidebar-item title="Redmi手机" />
      <van-sidebar-item title="黑鲨手机" />
      <van-sidebar-item title="电视" />
      <van-sidebar-item title="大家电" />
      <van-sidebar-item title="电脑办公" />
      <van-sidebar-item title="小爱音箱" />
      <van-sidebar-item title="路由器" />
      <van-sidebar-item title="生活电器" />
      <van-sidebar-item title="厨房电器" />
      <van-sidebar-item title="智能穿戴" />
      <van-sidebar-item title="智能家居" />
      <van-sidebar-item title="车载出行" />
      <van-sidebar-item title="个护健康" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>

<style>
</style>