"use strict";
var common_vendor = require("../../common/vendor.js");
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
    toTestPage() {
      common_vendor.index.navigateTo({
        url: "/pages/functionTest/functionTest",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toMyselfDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/myself-detail/myself-detail",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toPatientInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/PatientInfo/PatientInfo",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toMyselfSettingPush() {
      common_vendor.index.navigateTo({
        url: "/pages/myself-setting-push/myself-setting-push",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.toMyselfDetail && $options.toMyselfDetail(...args)),
    c: common_vendor.o((...args) => $options.toPatientInfo && $options.toPatientInfo(...args)),
    d: common_vendor.o((...args) => $options.toMyselfSettingPush && $options.toMyselfSettingPush(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/myself/myself.vue"]]);
wx.createPage(MiniProgramPage);
