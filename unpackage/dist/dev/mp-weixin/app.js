"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var common_js_request = require("./common/js/request.js");
if (!Math) {
  "./pages/wechatLogin/wechatLogin.js";
  "./pages/index/index.js";
  "./pages/BpRecord/BpRecord.js";
  "./pages/BpChart/BpChart.js";
  "./pages/TreatmentPlan/TreatmentPlan.js";
  "./pages/TreatmentPlanHistory/TreatmentPlanHistory.js";
  "./pages/MyMedicalReport/MyMedicalReport.js";
  "./pages/uploadPhoto/uploadPhoto.js";
  "./pages/TongueDetail/TongueDetail.js";
  "./pages/myself/myself.js";
  "./pages/PatientInfo/PatientInfo.js";
  "./pages/myself-setting-push/myself-setting-push.js";
  "./pages/functionTest/functionTest.js";
  "./pages/myself-detail/myself-detail.js";
  "./pages/MyMedicalReport/testIndicator/bnp/bnp.js";
  "./pages/MyMedicalReport/testIndicator/creatinine/creatinine.js";
  "./pages/MyMedicalReport/medicalReport/bpr24Hours/bpr24Hours.js";
  "./pages/MyMedicalReport/medicalReport/ecg24Hours/ecg24Hours.js";
  "./pages/MyMedicalReport/medicalReport/ecg/ecg.js";
  "./pages/MyMedicalReport/medicalReport/echocardiography/echocardiography.js";
  "./pages/MyMedicalReport/medicalReport/medicalReport.js";
  "./pages/MyMedicalReport/testIndicator/testIndicator.js";
  "./pages/MyMedicalReport/testIndicator/bnp/bnpRecord.js";
  "./pages/MyMedicalReport/testIndicator/creatinine/creatinineRecord.js";
  "./pages/MyMedicalReport/medicalReport/echocardiography/echocardiographyRecord.js";
  "./pages/MyMedicalReport/medicalReport/ecg/ecgRecord.js";
  "./pages/MyMedicalReport/medicalReport/ecg24Hours/ecg24HoursRecord.js";
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
  app.config.globalProperties.$http = common_js_request.http;
  app.config.globalProperties.$hello = "Hello World";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
