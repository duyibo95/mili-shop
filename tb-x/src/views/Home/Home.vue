<template>
  <div class="home">
    <div id="top"></div>
    <!-- 首页顶部搜索栏 -->
    <van-sticky>
      <div class="homeNav">
        <van-button type="default" to="/" class="vbtti"
          ><img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607943406818&di=d5c5321a4f651de840dfe75697fe7ada&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F9%2F2%2F4%2F922429.gif%3FimageMogr2%2Fauto-orient%2Fstrip%2Fthumbnail%2F%25211800%253E"
            alt=""
        /></van-button>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
        <van-button type="default" class="vbtti" @click="onClickRight"
          ><van-icon name="contact" size="25px"
        /></van-button>
      </div>
    </van-sticky>
    <!-- 首页轮播部分 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        offset="50"
        @load="onLoad"
        direction="down"
      >
        <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
          <van-swipe-item v-for="item in banners" :key="item">
            <img :src="item" alt="" class="vsiic" />
          </van-swipe-item>
        </van-swipe>
        <!-- 商品分类部分 -->
        <van-grid :border="false" :column-num="5">
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb4cbd9dabf2c2aef15e43f5bcab5cb9.jpg?f=webp&w=216&h=228&bg=FFFFFF"
            />
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :column-num="5">
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
            />
          </van-grid-item>
          <van-grid-item to="/user">
            <van-image
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
            />
          </van-grid-item>
        </van-grid>
        <!-- 分类下商品介绍 -->

        <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between" class="vrtj">
          <van-col span="12"
            ><img
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
              alt=""
          /></van-col>
          <van-col span="11">
            <img
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9"
              alt=""
              style="margin-bottom: 20px"
            />
            <img
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2dd638ceb36697af693973ff85a7a9b.jpg?f=webp&w=537&h=378&bg=E0FCFF"
              alt=""
            />
          </van-col>
        </van-row>

        <van-button type="default" to="index" class="hsyy"
          ><img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
            alt=""
            class="hsyy"
        /></van-button>
        <van-button type="default" to="index" class="hsyy"
          ><img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10d5e0e2a319079549175a8831417edc.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
            alt=""
            class="hsyy"
        /></van-button>

        <!-- 每日精选 -->
        <div class="mrjx">
          <div v-for="(v, i) in list" :key="v._id + i" class="mrjxd">
            <router-link :to="{ name: 'Details', query: { id: v._id } }">
              <img :src="v.coverImg | dalImg" alt="" />
            </router-link>
            <p>{{ v.name }}</p>
            <div class="mr">
              <b>{{ v.price }}</b> <van-icon name="cart-o" size="30px" />
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="top">
      <a href="#top"><van-icon name="back-top" /></a>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { loadProducts } from "../../services/cart/products";
export default {
  data() {
    return {
      list: [],
      banners: [
        "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bd3dde9e8c82e87e3f4342de038d897.jpg?thumb=1&w=720&h=360",
        "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fcfc2e1245bbf972d4eb29a4528488d2.jpg?thumb=1&w=720&h=360",
      ],
      value: "",
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
      this.list = [...this.list, ...res.products].sort(function () {
        return Math.random() > 0.5 ? -1 : 1;
      });
      this.pages = res.pages;
      this.page++;
      console.log(this.list);
      this.refreshing = false;
      this.loading = false;
    },
    onLoad() {
      if (this.pages < this.page) {
        console.log(1);
        this.finished = true;
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

    onSearch(val) {
      this.$router.push({
        path: "/searchList",
        query: {
          val,
        },
      }),
        Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    onClickRight() {
      this.$router.replace("/user");
    },
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.home {
  width: 100%;
  height: 100%;
}
.homeNav {
  display: flex;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 15px;
  text-align: center;
  background-color: #39a9ed;
}
.vsiic {
  width: 100%;
}
.vrtj img {
  width: 100%;
}
.vbtti {
  width: 60px;
  height: 60px;
  border: #ffffff;
}
.vbtti img {
  width: 100%;
  height: 100%;
}
.hsyy {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.mrjx {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  overflow: hidden;
}
.mrjxd {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mrjxd img {
  width: 100%;
}
.mrjxd p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mr {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.top {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 15%;
  right: 10%;
  font-size: 1.6rem;
  border: 2px solid #c1e4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #eaf4fc;
}
</style>