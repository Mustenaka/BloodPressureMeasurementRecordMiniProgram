"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bpRecord: {
        datetimesingle: "",
        lowBP: 60,
        HighBP: 110,
        heartRate: 70
      }
    };
  },
  methods: {
    submit() {
      this.$http.sendRequest("http://1.117.222.119/bprecord", "POST", {
        data: bpRecord
      }).then((res2) => {
        console.log(res2);
      }).catch((err) => {
        console.log(res);
      });
    }
  }
};
if (!Array) {
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_component_uni_section + _easycom_uni_datetime_picker2 + _easycom_uni_number_box2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u65E5\u671F\u65F6\u95F4\u7528\u6CD5\uFF1A" + $data.bpRecord.datetimesingle,
      type: "line"
    }),
    b: common_vendor.o(($event) => $data.bpRecord.datetimesingle = $event),
    c: common_vendor.p({
      type: "datetime",
      modelValue: $data.bpRecord.datetimesingle
    }),
    d: common_vendor.o(($event) => $data.bpRecord.lowBP = $event),
    e: common_vendor.p({
      modelValue: $data.bpRecord.lowBP
    }),
    f: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.bpRecord.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    g: common_vendor.o(($event) => $data.bpRecord.HighBP = $event),
    h: common_vendor.p({
      modelValue: $data.bpRecord.HighBP
    }),
    i: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.bpRecord.HighBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    j: common_vendor.o(($event) => $data.bpRecord.heartRate = $event),
    k: common_vendor.p({
      modelValue: $data.bpRecord.heartRate
    }),
    l: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.bpRecord.heartRate,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/BpRecord/BpRecord.vue"]]);
wx.createPage(MiniProgramPage);
