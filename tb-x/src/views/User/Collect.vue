<template>
  <div class="collect">
    <div class="head">
      <van-icon name="arrow-left" @click="onClickLeft" />
      <h6>我的收藏</h6>
      <span> </span>
    </div>
    <div class="lists">
      <div class="list" v-for="data in collectList" :key="data._id">
        <img :src="data.coverImg | dalImg" alt="" />
        <p>{{ data.name }}</p>
        <van-button
          type="primary"
          size="mini"
          color="#9d2933"
          @click="delCollect(data._id)"
          >删除收藏</van-button
        >
      </div>
    </div>
    <van-empty
      v-show="kk"
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="收藏夹是空的，快去添加吧"
    />
  </div>
</template>

<script>
import { loadProducts } from "../../services/cart/products";
import { loadFavs, addToFav } from "../../utils/fav";
export default {
  data() {
    return {
      list: [],
      favs: loadFavs(),
    };
  },
  created() {
    this.productList();
  },
  methods: {
    // 加载商品数据
    async productList() {
      this.loading = true;
      const res = await loadProducts((this.per = 210));
      this.list = [...this.list, ...res.products];
      console.log(this.list);
    },
    // 后退
    onClickLeft() {
      this.$router.back();
    },
    // 删除
    delCollect(id) {
      addToFav(id);
      this.favs = loadFavs();
    },
  },

  computed: {
    collectList() {
      return this.list.filter((item) => this.favs.indexOf(item._id) > -1);
    },

    kk() {
      if (this.favs[0]) {
        return false;
      } else {
        return true;
      }
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
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 1.8rem;
  background: #ff4c00;
}
h6 {
  margin: 0;
  color: #ffffff;
}
.lists {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
}
.list {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list img {
  width: 100%;
}
.list p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>