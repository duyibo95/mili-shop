<template>
  <div class="homeList">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      finished-text="没有更多了"
    >
      <div class="mrjx">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          error-text="加载失败"
          @load="onLoad"
        >
          <div v-for="(v, i) in list" :key="v._id + i" class="mrjxd">
            <img :src="v.coverImg | dalImg" alt="" />
            <p>{{ v.name }}</p>
            <div
              style="width: 80%; display: flex; justify-content: space-between"
            >
              <b>{{ v.price }}</b> <van-icon name="cart-o" size="30px" />
            </div>
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { loadProducts } from "../services/cart/products";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pages: 1,
      page: 1,
      id: "",
      refreshing: false,
    };
  },
  created() {
    this.productList();
  },
  methods: {
    async productList() {
      this.loading = true;
      const res = await loadProducts(this.page);
      this.list = [...this.list, ...res.products];
      this.pages = res.pages;
      this.page++;
      console.log(this.list);
      this.refreshing = false;
      this.loading = false;
    },
    onLoad() {
      if (this.pages < this.page) {
        this.refreshing = true;
      } else {
        this.productList();
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style>
</style>