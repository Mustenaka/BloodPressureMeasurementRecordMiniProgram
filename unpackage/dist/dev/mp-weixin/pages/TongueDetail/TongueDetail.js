"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      Array: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "v1/user/tonguedetail?limit_count=0";
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        var Array = res.data.data;
        Array.forEach((item, index, arr) => {
          item.create_at = item.create_at.slice(0, 10);
        });
        this.Array = Array;
        console.log(this.Array);
      }).catch((err) => {
        console.log(err);
      });
    },
    submit() {
      common_vendor.index.navigateTo({
        url: "TongueDetailRecord",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(this.Array, (value, key, index) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(value.create_at),
        c: common_vendor.t(value.tongue),
        d: common_vendor.t(value.tongue_coating),
        e: common_vendor.t(value.pulse),
        f: key
      };
    }),
    b: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TongueDetail/TongueDetail.vue"]]);
wx.createPage(MiniProgramPage);
