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
    toPatientInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/PatientInfo/PatientInfo",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toBPWithHeart() {
      common_vendor.index.navigateTo({
        url: "/pages/report-BPWithHeart/report-BPWithHeart",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toCreatinineWithBnp() {
      common_vendor.index.navigateTo({
        url: "/pages/report-CreatinineWithBnp/report-CreatinineWithBnp",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toECG() {
      common_vendor.index.navigateTo({
        url: "/pages/report-ECG/report-ECG",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.toMyselfDetail && _ctx.toMyselfDetail(...args)),
    b: common_vendor.o((...args) => $options.toPatientInfo && $options.toPatientInfo(...args)),
    c: common_vendor.o((...args) => _ctx.toMyselfSettingPush && _ctx.toMyselfSettingPush(...args)),
    d: common_vendor.o((...args) => _ctx.toMyselfSettingPush && _ctx.toMyselfSettingPush(...args)),
    e: common_vendor.o((...args) => _ctx.toMyselfSettingPush && _ctx.toMyselfSettingPush(...args)),
    f: common_vendor.o((...args) => _ctx.toMyselfSettingPush && _ctx.toMyselfSettingPush(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/medicalReport/medicalReport.vue"]]);
wx.createPage(MiniProgramPage);
