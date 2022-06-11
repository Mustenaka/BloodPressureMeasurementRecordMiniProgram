"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [
        "../../static/swiper/swiper1.png",
        "../../static/swiper/swiper2.png"
      ]
    };
  },
  methods: {
    toBpr24Hours() {
      common_vendor.index.navigateTo({
        url: "bpr24Hours/bpr24Hours",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toEcg24Hours() {
      common_vendor.index.navigateTo({
        url: "ecg24Hours/ecg24Hours",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toEcg() {
      common_vendor.index.navigateTo({
        url: "ecg/ecg",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toEchocardiography() {
      common_vendor.index.navigateTo({
        url: "echocardiography/echocardiography",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toBpr24Hours && $options.toBpr24Hours(...args)),
    b: common_vendor.o((...args) => $options.toEcg24Hours && $options.toEcg24Hours(...args)),
    c: common_vendor.o((...args) => $options.toEcg && $options.toEcg(...args)),
    d: common_vendor.o((...args) => $options.toEchocardiography && $options.toEchocardiography(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/medicalReport/medicalReport.vue"]]);
wx.createPage(MiniProgramPage);
