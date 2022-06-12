"use strict";
var common_vendor = require("../../../../common/vendor.js");
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
      const url = "http://1.117.222.119/v1/user/mr24hoursbpr?limit_count=0";
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        var Array = res.data.data;
        Array.forEach((item, index, arr) => {
          item.create_at = item.create_at.slice(0, 10);
          item.max_high_time = item.max_high_time.slice(11, 16);
          item.max_low_time = item.max_low_time.slice(11, 16);
        });
        this.Array = Array;
        console.log(this.Array);
      }).catch((err) => {
        console.log(err);
      });
    },
    submit() {
      common_vendor.index.navigateTo({
        url: "bpr24HoursRecord",
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
        c: common_vendor.t(value.day_high),
        d: common_vendor.t(value.day_low),
        e: common_vendor.t(value.night_high),
        f: common_vendor.t(value.night_low),
        g: common_vendor.t(value.max_high),
        h: common_vendor.t(value.max_high_time),
        i: common_vendor.t(value.max_low),
        j: common_vendor.t(value.max_low_time),
        k: key
      };
    }),
    b: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/medicalReport/bpr24Hours/bpr24Hours.vue"]]);
wx.createPage(MiniProgramPage);
