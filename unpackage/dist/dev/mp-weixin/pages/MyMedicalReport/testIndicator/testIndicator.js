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
    toPatientInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/PatientInfo/PatientInfo",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toBPWithHeart() {
      common_vendor.index.navigateTo({
        url: "",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toCreatinineWithBnp() {
      common_vendor.index.navigateTo({
        url: "",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPatientInfo && $options.toPatientInfo(...args)),
    b: common_vendor.o((...args) => $options.toPatientInfo && $options.toPatientInfo(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/testIndicator/testIndicator.vue"]]);
wx.createPage(MiniProgramPage);
