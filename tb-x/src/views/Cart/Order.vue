<template>
  <div class="order">
    <!-- 顶部用户结算 -->
    <van-sticky>
      <van-nav-bar
        title="用户结算"
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
    <!-- 个人信息及地址部分 -->
    <div class="grxxjdzbf"></div>
    <!-- 选择支付方式部分 -->
    <div class="zffs">
      <div class="xzzffs">
        <img src="@/assets/zfb.png" alt="" />
        <p>支付宝</p>
        <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/qb.png" alt="" />
        <p>小米钱包</p>
        <van-checkbox v-model="checked1" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/wxzf.png" alt="" />
        <p>微信支付</p>
        <van-checkbox v-model="checked2" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/ylzfpt.png" alt="" />
        <p>银联支付</p>
        <van-checkbox v-model="checked3" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/xyk.png" alt="" />
        <p>信用卡分期</p>
        <van-checkbox v-model="checked4" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/defq.png" alt="" />
        <p>小米分期</p>
        <van-checkbox v-model="checked5" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <img src="@/assets/hb.png" alt="" />
        <p>花呗分期</p>
        <van-checkbox v-model="checked6" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="xzzffs">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="更多其他支付方式" name="1"
            >内容</van-collapse-item
          >
        </van-collapse>
      </div>
    </div>
    <!-- 运费及发票介绍部分 -->
    <div class="yfjfpjsbf zffs">
      <ul>
        <li>运费</li>
        <li>包邮</li>
      </ul>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="电子普通发票" name="2"
          >内容</van-collapse-item
        >
        <van-collapse-item title="优惠券" name="3">内容</van-collapse-item>
      </van-collapse>
    </div>

    <!-- 订单产品规格详情 -->
    <div class="ddcpggxq zffs">
      <div class="xzzffs">
        <img src="@/assets/hstcej.png" alt="" />
        <p>黑鲨游戏 Type-C 耳机 黑色</p>
        <b>2X99.00</b>
      </div>
      <div class="xzzffs">
        <img src="@/assets/znrqz.png" alt="" />
        <p>米家互联网燃气灶 (天然气)</p>
        <b>799.00</b>
      </div>
    </div>
    <!-- 商品价格及配送费用计算 -->
    <div class="ddcpggxq zffs">
      <p><b>商品价格:</b>997.00</p>
      <p><b>配送费用</b>0.00</p>
    </div>
    <!-- 底部填充部分 -->
    <div class="dbtcbf"></div>
    <!-- 底部支付部分 -->
    <div class="dbzfbf">
      <van-submit-bar :price="0.0" button-text="去支付" @submit="onSubmit">
        <van-checkbox v-model="checked7">全选</van-checkbox>
        <template #tip>
          配送至:河南 郑州市 新郑市 中心城区新区建设管理委员会
          <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      activeNames: "",
      onSubmit: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickEditAddress() {},
    onClickLeft() {},
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
.grxxjdzbf {
  width: 100%;
  height: 3.75rem;
  background-color: aqua;
}
.zffs {
  width: 100%;
  margin-top: 1rem;
  border-top: #aaaaaa solid 1px;
  border-bottom: #aaaaaa solid 1px;
}
.xzzffs {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #eceaea;
  margin: 0rem 1.25rem;
}
.xzzffs > img {
  width: 3rem;
  height: 3rem;
}
.xzzffs > p {
  width: 80%;
  text-align: left;
}
.yfjfpjsbf > ul {
  height: 3.125rem;
  display: block;
  margin: 0 0.9375rem 0rem 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dbtcbf {
  width: 100%;
  height: 4.325rem;
}
</style>