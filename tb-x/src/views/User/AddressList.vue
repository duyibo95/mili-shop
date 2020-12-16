<template>
  <div class="addressList">
    <header class="header">
      <div class="header-left" @click="clickLeft">
        <van-icon name="arrow-left" size="22px" color="#fff" />
      </div>
      <div class="header-title">
        <h3>地址列表</h3>
      </div>
    </header>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    clickLeft() {
      this.$router.back(-1);
    },
  },
};
</script>
<style scoped>
html,
body,
.addressList {
  width: 100%;
  height: 100%;
  background: #ebebeb;
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