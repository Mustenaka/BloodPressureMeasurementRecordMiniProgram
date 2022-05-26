"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      datetimesingle: "",
      lowBP: 60,
      HighBP: 110,
      heartRate: 70
    };
  },
  methods: {
    changeLog(e) {
      console.log("change\u4E8B\u4EF6:", e);
    },
    submit() {
      console.log("target submit");
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
      title: "\u65E5\u671F\u65F6\u95F4\u7528\u6CD5\uFF1A" + $data.datetimesingle,
      type: "line"
    }),
    b: common_vendor.o($options.changeLog),
    c: common_vendor.o(($event) => $data.datetimesingle = $event),
    d: common_vendor.p({
      type: "datetime",
      modelValue: $data.datetimesingle
    }),
    e: common_vendor.o(_ctx.blur),
    f: common_vendor.o(_ctx.focus),
    g: common_vendor.o(_ctx.changeValue),
    h: common_vendor.o(($event) => $data.lowBP = $event),
    i: common_vendor.p({
      modelValue: $data.lowBP
    }),
    j: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    k: common_vendor.o(_ctx.blur),
    l: common_vendor.o(_ctx.focus),
    m: common_vendor.o(_ctx.changeValue),
    n: common_vendor.o(($event) => $data.HighBP = $event),
    o: common_vendor.p({
      modelValue: $data.HighBP
    }),
    p: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.HighBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    q: common_vendor.o(_ctx.blur),
    r: common_vendor.o(_ctx.focus),
    s: common_vendor.o(_ctx.changeValue),
    t: common_vendor.o(($event) => $data.heartRate = $event),
    v: common_vendor.p({
      modelValue: $data.heartRate
    }),
    w: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.heartRate,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    x: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/BpRecord/BpRecord.vue"]]);
wx.createPage(MiniProgramPage);
