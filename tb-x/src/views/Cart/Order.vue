<template>
  <div class="order">
    <!-- 顶部用户结算 -->
    <van-sticky>
      <van-nav-bar
        title="订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <!-- 顶部通知 -->
    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar mode="closeable">
      您购买的商品中包含须安装产品,订单签收后,安装师傅会联系您预约上门安装时间.
    </van-notice-bar>
    <van-empty description="暂无订单" v-show="show" />
    <!-- 个人信息及地址部分 -->
    <div class="box" v-for="(data, i) in list" :key="data._id + i">
      <div class="zffs">
        <div class="xzzffs">
          <b>{{ data.receiver }}</b>
          <p>{{ data.regions }}</p>
          <p>{{ data.address }}</p>
        </div>
      </div>
      <!-- 选择支付方式部分 -->

      <!-- 运费及发票介绍部分 -->
      <div class="yfjfpjsbf zffs">
        <ul>
          <li>运费</li>
          <li>包邮</li>
        </ul>

        <van-cell class="vciti" icon="info-o" title="电子普通发票" is-link />
        <van-cell class="vciti" icon="info-o" title="优惠券" is-link />
      </div>

      <!-- 订单产品规格详情 -->

      <!-- 商品价格及配送费用计算 -->
      <div class="box-x">
        <div class="ddcpggxq zffs">
          <p><b>商品价格:</b>{{ data.price }}</p>
          <p><b>配送费用</b>0.00</p>
        </div>
        <van-icon name="delete" @click="delOrder(data._id, i)" />
      </div>
    </div>
  </div>
</template>

<script>
import { orderList, delateOrder } from "../../utils/carts";
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      radio: "1",
      activeNames: "",
      onSubmit: "",
      list: [],
      show: true,
    };
  },

  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 获取订单列表
    async addList() {
      const res = await orderList();
      console.log(res.orders);

      this.list = res.orders;
      if (this.list.length == 0) {
        console.log("有订单");
      } else {
        this.show = false;
      }
    },
    // 删除订单列表
    delOrder(id) {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容",
      })
        .then(async () => {
          // on confirm
          await delateOrder(id);

          this.list.forEach((v, i) => {
            if (v._id == id) {
              this.list.splice(i, 1);
            }
          });
          Toast.success("删除成功");
          this.addList();
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  created() {
    this.addList();
  },
};
</script>

<style scoped>
html,
body,
.order {
  background: #e7e7eb;
}
.site {
  width: 100%;
  height: 4.75rem;

  display: flex;
  padding: 0 3%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.site-s {
  width: 80%;
}
.site i {
  font-size: 2rem;
}
.site-s p {
  margin: 0;
}

.yfjfpjsbf > ul {
  height: 2rem;
  display: block;
  margin: 0 0.9375rem 0rem 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box {
  margin-bottom: 10px;
  border-radius: 10px;
  background: white;
}
.box-x {
  border-top: 1px dotted #c8c2c6;
  box-sizing: border-box;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-x i {
  font-size: 2rem;
}
</style>























