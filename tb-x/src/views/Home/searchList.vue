<template>
  <div class="searchList">
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
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" @change="sort" />
    </van-dropdown-menu>
    <div class="box">
      <div class="mrjx">
        <div v-for="(v, i) in lista" :key="v._id + i" class="mrjxd">
          <router-link :to="{ name: 'Details', query: { id: v._id } }">
            <img :src="v.coverImg | dalImg" alt="" />
          </router-link>
          <p>{{ v.name }}</p>
          <div class="mr">
            <b>{{ v.price }}</b> <van-icon name="cart-o" size="30px" />
          </div>
        </div>
      </div>
    </div>
    <div class="box">
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
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { loadProducts } from "../../services/cart/products";
export default {
  data() {
    return {
      value: "",
      list: [],
      lists: [],
      lista: [],
      page: 1,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "从高到底", value: "b" },
        { text: "从低到高", value: "c" },
      ],
    };
  },
  created() {
    this.productList();
    this.value = this.$route.query.val;
    console.log(this.value);
  },
  methods: {
    async productList() {
      this.loading = true;
      for (var i = 1; i < 10; i++) {
        const res = await loadProducts((this.page = i));
        this.lists = [...this.lists, ...res.products];
      }

      console.log(this.lists);
    },
    onSearch(val) {
      return (this.list = this.lists.filter(
        (item) => item.name.indexOf(val) > -1
      ));
    },
    sort() {
      console.log(this.value2);
      if (this.value2 == "b") {
        console.log(1);
        this.list.sort((a, b) => {
          console.log(2);
          return a.price - b.price;
        });
      } else {
        this.list.sort((a, b) => {
          console.log(2);
          return b.price - a.price;
        });
      }
      console.log(this.list);
      this.lista = this.list;
      // this.onSearch(this.val);
    },
    onCancel() {
      Toast("取消");
    },
    onClickRight() {
      this.$router.replace("/user");
    },
  },
  computed: {},
};
</script>

<style>
.searchList {
  width: 100%;
  height: 100%;
}
.homeNav {
  display: flex;
  align-items: center;
  height: 50px;
  background: white;
  overflow: hidden;
}
.van-button__text img {
  height: 50px;
}
.vbtti {
  width: 60px;
  height: 50px;
  border: #ffffff;
}

.mrjx {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  overflow: auto;
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
</style>