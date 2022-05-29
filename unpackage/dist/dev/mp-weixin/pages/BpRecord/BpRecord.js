"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bpRecord: {
        record_date_time: "",
        low: 80,
        high: 120,
        heart_rate: 75
      }
    };
  },
  methods: {
    submit() {
      console.log(this.$data.bpRecord.record_date_time);
      this.$http.sendRequest("http://1.117.222.119/v1/user/bprecord", "POST", {
        "RecordDateTime": this.bpRecord.record_date_time,
        "low": this.bpRecord.low,
        "high": this.bpRecord.high,
        "heart_rate": this.bpRecord.heart_rate
      }).then((res) => {
        console.log(res);
        common_vendor.index.showToast({
          title: "\u5F55\u5165\u6210\u529F",
          icon: "none"
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u5931\u8D25",
          icon: "none"
        });
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
      title: "\u65E5\u671F\u65F6\u95F4\uFF1A" + $data.bpRecord.record_date_time,
      type: "line"
    }),
    b: common_vendor.o(($event) => $data.bpRecord.record_date_time = $event),
    c: common_vendor.p({
      type: "datetime",
      modelValue: $data.bpRecord.record_date_time
    }),
    d: common_vendor.o(($event) => $data.bpRecord.low = $event),
    e: common_vendor.p({
      min: 0,
      max: 500,
      modelValue: $data.bpRecord.low
    }),
    f: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.bpRecord.low,
      type: "line",
      padding: true
    }),
    g: common_vendor.o(($event) => $data.bpRecord.high = $event),
    h: common_vendor.p({
      min: 0,
      max: 500,
      modelValue: $data.bpRecord.high
    }),
    i: common_vendor.p({
      title: "\u9AD8\u538B\u8BB0\u5F55: " + $data.bpRecord.high,
      type: "line",
      padding: true
    }),
    j: common_vendor.o(($event) => $data.bpRecord.heart_rate = $event),
    k: common_vendor.p({
      min: 0,
      max: 500,
      modelValue: $data.bpRecord.heart_rate
    }),
    l: common_vendor.p({
      title: "\u5FC3\u7387\u8BB0\u5F55 : " + $data.bpRecord.heart_rate,
      type: "line",
      padding: true
    }),
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/BpRecord/BpRecord.vue"]]);
wx.createPage(MiniProgramPage);
