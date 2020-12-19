<template>
  <div class="group">
    <header class="header">
      <div class="header-left" @click="clickLeft">
        <van-icon name="arrow-left" size="22px" color="#fff" />
      </div>
      <div class="header-right">
        <input type="text" placeholder="请输入要搜索的商品" /><van-icon
          name="search"
          color="#fff"
          size="22"
        />
      </div>
    </header>
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-row type="flex" justify="space-around">
          <h4 v-if="active === 0">热门品牌</h4>

          <van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: '小米手机',
                  product_category: '5fcf69c07fc5aa239cd5d68a',
                },
              }"
            >
              <img src="../../assets/ClassPic/xm.png" alt="" /></router-link
            >小米</van-col
          >

          <van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: '华为手机',
                },
              }"
            >
              <img src="../../assets/ClassPic/hw.jpg" alt="" />
            </router-link>
            华为</van-col
          >
          <van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: '荣耀手机',
                },
              }"
            >
              <img src="../../assets/ClassPic/iphome.jpg" alt="" />
            </router-link>
            荣耀</van-col
          >
          <van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: 'iphome',
                },
              }"
            >
              <img src="../../assets/ClassPic/vivo.png" alt="" />
            </router-link>
            banana</van-col
          >
          <van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: 'vivi手机',
                },
              }"
            >
              <img src="../../assets/ClassPic/sj2.png" alt="" />
            </router-link>
            vivi</van-col
          ><van-col span="7" v-if="active === 0">
            <router-link
              :to="{
                name: 'List',
                query: {
                  class: 'oddo手机',
                },
              }"
            >
              <img src="../../assets/ClassPic/oppo.png" alt="" />
            </router-link>
            oppo
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <h4 v-if="active === 1">热门分类</h4>
          <van-col span="7" v-if="active === 1"
            ><img src="../../assets/ClassPic/qbb.png" alt="" />轻薄本</van-col
          >
          <van-col span="7" v-if="active === 1"
            ><img src="../../assets/ClassPic/yxb.png" alt="" />游戏本</van-col
          >
          <van-col span="7" v-if="active === 1"
            ><img
              src="../../assets/ClassPic/jxjp.jpg"
              alt=""
            />机械键盘</van-col
          >
          <van-col span="7" v-if="active === 1"
            ><img
              src="../../assets/ClassPic/zzdn.jpg"
              alt=""
            />组装电脑</van-col
          >
          <van-col span="7" v-if="active === 1"
            ><img
              src="../../assets/ClassPic/ydyp.jpg"
              alt=""
            />移动硬盘</van-col
          >
          <van-col span="7" v-if="active === 1"
            ><img src="../../assets/ClassPic/xkk.jpg" alt="" />显卡</van-col
          >
        </van-row>
        <van-row type="flex" justify="space-around">
          <h4 v-if="active === 2">厨房小电</h4>
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/ylg.jpg" alt="" />电压力锅</van-col
          >
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/dsh.jpg" alt="" />电热水壶</van-col
          >
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/dfb.jpg" alt="" />电饭煲</van-col
          >
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/dfb.jpg" alt="" />电磁炉</van-col
          >
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/ylg.jpg" alt="" />微波炉</van-col
          >
          <van-col span="7" v-if="active === 2"
            ><img src="../../assets/ClassPic/dfb.jpg" alt="" />电饼铛</van-col
          >
        </van-row>
        <van-row type="flex" justify="space-around">
          <h4 v-if="active === 3">热卖产品</h4>
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/byt.jpg" alt="" />避孕套</van-col
          >
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/fjb.jpg" alt="" />飞机杯</van-col
          >
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/rhj.jpg" alt="" />润滑液</van-col
          >
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/fjb.jpg" alt="" />震动棒</van-col
          >
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/lyq.jpg" alt="" />情趣内衣</van-col
          >
          <van-col span="7" v-if="active === 3"
            ><img src="../../assets/ClassPic/fjb.jpg" alt="" />充气娃娃</van-col
          >
        </van-row>
        <van-row type="flex" justify="space-around">
          <h4 v-if="active === 4">畅销推荐</h4>
          <van-col span="7" v-if="active === 4"
            ><img src="../../assets/ClassPic/ghg.jpg" alt="" />个护馆</van-col
          >
          <van-col span="7" v-if="active === 4"
            ><img src="../../assets/ClassPic/jy.jpg" alt="" />清洁馆</van-col
          >
          <van-col span="7" v-if="active === 4"
            ><img
              src="../../assets/ClassPic/jkqj.jpg"
              alt=""
            />进口清洁</van-col
          >
          <van-col span="7" v-if="active === 4"
            ><img src="../../assets/ClassPic/fss.jpg" alt="" />卫生棉条</van-col
          >
          <van-col span="7" v-if="active === 4"
            ><img src="../../assets/ClassPic/zqsj.jpg" alt="" />湿厕纸</van-col
          >
          <van-col span="7" v-if="active === 4"
            ><img src="../../assets/ClassPic/rhj.jpg" alt="" />花露水</van-col
          >
        </van-row>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "手机数码" },
        { text: "电脑办公" },
        { text: "家用电器" },
        { text: "计生情趣" },
        { text: "个人清洁" },
        { text: "美妆护肤" },
        { text: "汽车生活" },
        { text: "京东超市" },
        { text: "男装" },
        { text: "男鞋" },
        { text: "女装" },
        { text: "女鞋" },
      ],
    };
  },
  methods: {
    clickLeft() {
      this.$router.back(-1);
    },
  },
};
</script>

<style  scoped>
.group {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header {
  height: 48px;
  width: 100%;
  background: linear-gradient(#e66465, #ff461f);
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

.header-right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-right input {
  width: 75%;
  height: 62%;
  border-radius: 18px;
  border: 0;
  outline: none;
  padding-left: 23px;
}

.van-sidebar {
  flex: 0.7;
}
.van-col {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
}
.van-nav-bar {
  width: 10%;
  float: left;
  height: 54px;
  font-size: 30px;
  color: #000;
}
.van-search__content {
  border-radius: 27px;
}
.van-nav-bar__left > i {
  font-size: 30px;
  color: #000;
}
h4 {
  width: 100%;
  display: block;
  height: 40px;
  line-height: 48px;
}

img {
  width: 81px;
  height: 81px;
}
</style>