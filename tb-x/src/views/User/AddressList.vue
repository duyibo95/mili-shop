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
    <div class="addList" v-for="item in list" :key="item._id">
      <div class="pin">
        <b>{{ item.receiver }}</b>
        <p>{{ item.mobile }}<i v-show="item.isDefault">默认</i></p>
        <van-icon name="delete" @click="delAdd(item._id)" />
      </div>
      <div class="das">
        <div>
          <p>{{ item.regions }}</p>
          <p>{{ item.address }}</p>
        </div>
        <router-link
          tag="div"
          :to="{ name: 'EditAddress', query: { id: item._id } }"
        >
          <van-icon name="edit" />
        </router-link>
      </div>
    </div>
    <footer class="footer">
      <button @click="ToAddresses">新增收货地址</button>
    </footer>
  </div>
</template> 

<script>
import { Dialog } from "vant";
import { addList, delAddress } from "../../utils/userInfo";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getaddressList();
  },
  methods: {
    // 获取地址列表
    async getaddressList() {
      const res = await addList();
      this.list = res.addresses;
      console.log(this.list);
    },
    // 删除地址
    delAdd(id) {
      Dialog.confirm({
        title: "删除",
        message: "是否要删除这个地址",
      })
        .then(async () => {
          // on confirm
          await delAddress(id);
          this.list.forEach((v, i) => {
            if (v._id == id) {
              this.list.splice(i, 1);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },

    clickLeft() {
      this.$router.back(-1);
    },
    ToAddresses() {
      this.$router.push({
        name: "Address",
      });
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
  background: #f05654;
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
.addList {
  width: 100%;
  border: 1px dotted #a1afc9;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  background: white;
  margin-bottom: 10px;
}
.addList i {
  font-size: 1.5rem;
}
.pin {
  display: flex;
  justify-content: space-between;
}
.pin p {
  margin: 0;
}
.addList p i {
  margin-left: 10px;
  background: #ff2121;
  color: white;
  font-size: 1rem;
}
.das {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.das p {
  margin: 0;
}
.footer {
  width: 100%;
  height: 40px;
  position: sticky;
  bottom: 0;
  text-align: center;
}

.footer button {
  display: inline;
  width: 70%;
  height: 100%;
  background-color: red;
  color: white;
  border: 0;
  border-radius: 22px;
  outline: none;
}
</style>