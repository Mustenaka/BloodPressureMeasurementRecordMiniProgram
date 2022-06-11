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
    toBnp() {
      common_vendor.index.navigateTo({
        url: "bnp/bnp",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toCreatinine() {
      common_vendor.index.navigateTo({
        url: "creatinine/creatinine",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toBnp && $options.toBnp(...args)),
    b: common_vendor.o((...args) => $options.toCreatinine && $options.toCreatinine(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/testIndicator/testIndicator.vue"]]);
wx.createPage(MiniProgramPage);
