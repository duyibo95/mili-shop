<template>
  <div class="editAddress">
    <div class="addressAdd">
      <header class="header">
        <div class="header-left" @click="clickLeft">
          <van-icon name="arrow-left" size="22px" color="#fff" />
        </div>
        <div class="header-title">
          <h3>修改</h3>
        </div>
      </header>

      <van-address-edit
        :area-list="areaList"
        show-postal
        :address-info="addressInfo"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onEdit"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "../../utils/address";
import { AnAddress, editAddress } from "../../utils/userInfo";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {
        addressDetail: "",
        areaCode: "",
        city: "",
        country: "",
        county: "",
        isDefault: false,
        name: "",
        postalCode: "",
        province: "",
        tel: "",
      },
    };
  },
  created() {
    this.getThisAddress();
  },

  methods: {
    clickLeft() {
      this.$router.back(-1);
    },

    async getThisAddress() {
      let res = await AnAddress(this.$route.query.id);
      console.log(res);
      this.addressInfo.id = res._id;
      this.addressInfo.addressDetail = res.address;
      this.addressInfo.isDefault = res.isDefault;
      this.addressInfo.tel = res.mobile;
      this.addressInfo.name = res.receiver;
      this.addressInfo.postalCode = "451150";
      this.addressInfo.areaCode = "410102";
    },

    async onEdit(res) {
      console.log(res);
      await editAddress(res.id, {
        receiver: res.name,
        mobile: res.tel,
        regions: res.province + "-" + res.county,
        address: res.addressDetail,
        isDefault: res.isDefault,
      });

      Toast("修改地址成功");
      this.$router.back();
    },

    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "郑州市高新区",
            address: "威科姆千锋教育",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
.header {
  height: 48px;
  width: 100%;
  background: #ff4e20;
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

.header-title {
  color: #fff;
  flex: 1;
  padding-left: 30%;
  padding-top: 2.5%;
}
</style>