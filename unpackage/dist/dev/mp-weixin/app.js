"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/wechatLogin/wechatLogin.js";
  "./pages/index/index.js";
  "./pages/BpRecord/BpRecord.js";
  "./pages/BpChart/BpChart.js";
  "./pages/TreatmentPlan/TreatmentPlan.js";
  "./pages/TreatmentPlanHistory/TreatmentPlanHistory.js";
  "./pages/medicalReport/medicalReport.js";
  "./pages/uploadPhoto/uploadPhoto.js";
  "./pages/TongueDetail/TongueDetail.js";
  "./pages/report-CreatinineWithBnp/report-CreatinineWithBnp.js";
  "./pages/report-ECG/report-ECG.js";
  "./pages/report-BPWithHeart/report-BPWithHeart.js";
  "./pages/myself/myself.js";
  "./pages/PatientInfo/PatientInfo.js";
  "./pages/myself-setting-push/myself-setting-push.js";
  "./pages/functionTest/functionTest.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
