"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPatientInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/PatientInfo/PatientInfo",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toTestIndicator() {
      common_vendor.index.navigateTo({
        url: "testIndicator/testIndicator",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toMedicalReport() {
      common_vendor.index.navigateTo({
        url: "medicalReport/medicalReport",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPatientInfo && $options.toPatientInfo(...args)),
    b: common_vendor.o((...args) => $options.toTestIndicator && $options.toTestIndicator(...args)),
    c: common_vendor.o((...args) => $options.toMedicalReport && $options.toMedicalReport(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/MyMedicalReport.vue"]]);
wx.createPage(MiniProgramPage);
