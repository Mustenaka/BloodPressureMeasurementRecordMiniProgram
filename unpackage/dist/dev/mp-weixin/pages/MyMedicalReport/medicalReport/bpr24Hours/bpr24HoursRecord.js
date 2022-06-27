"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      record: {
        day_high: 0,
        day_low: 0,
        night_high: 0,
        night_low: 0,
        max_high: 0,
        max_high_time: "",
        max_low: 0,
        max_low_time: "",
        createAt: ""
      }
    };
  },
  methods: {
    day_high_Change(value) {
      this.record.day_high = value;
    },
    day_low_Change(value) {
      this.record.day_low = value;
    },
    night_high_Change(value) {
      this.record.night_high = value;
    },
    night_low_Change(value) {
      this.record.night_low = value;
    },
    max_high_Change(value) {
      this.record.max_high = value;
    },
    max_low_Change(value) {
      this.record.max_low = value;
    },
    submit() {
      this.$http.sendRequest("v1/user/mr24hoursbpr", "POST", {
        "day_high": this.record.day_high,
        "day_low": this.record.day_low,
        "night_high": this.record.night_high,
        "night_low": this.record.night_low,
        "max_high": this.record.max_high,
        "max_high_time": this.record.max_high_time,
        "max_low": this.record.max_low,
        "max_low_time": this.record.max_low_time,
        "create_at": this.record.createAt
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
const _easycom_uni_datetime_picker = () => "../../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_number_box = () => "../../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u65E5\u671F\u65F6\u95F4\uFF1A" + $data.record.createAt,
      type: "line"
    }),
    b: common_vendor.o(($event) => $data.record.createAt = $event),
    c: common_vendor.p({
      type: "date",
      modelValue: $data.record.createAt
    }),
    d: common_vendor.o($options.day_high_Change),
    e: common_vendor.p({
      value: $data.record.day_high,
      min: 0,
      max: 5e4
    }),
    f: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.average,
      type: "line",
      padding: true
    }),
    g: common_vendor.o($options.day_low_Change),
    h: common_vendor.p({
      value: $data.record.day_low,
      min: 0,
      max: 5e4
    }),
    i: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.average,
      type: "line",
      padding: true
    }),
    j: common_vendor.o($options.night_high_Change),
    k: common_vendor.p({
      value: $data.record.night_high,
      min: 0,
      max: 5e4
    }),
    l: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.night_high,
      type: "line",
      padding: true
    }),
    m: common_vendor.o($options.night_low_Change),
    n: common_vendor.p({
      value: $data.record.night_low,
      min: 0,
      max: 5e4
    }),
    o: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.night_low,
      type: "line",
      padding: true
    }),
    p: common_vendor.o($options.max_high_Change),
    q: common_vendor.p({
      value: $data.record.max_high,
      min: 0,
      max: 5e4
    }),
    r: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.max_high,
      type: "line",
      padding: true
    }),
    s: common_vendor.p({
      title: "\u65E5\u671F\u65F6\u95F4\uFF1A" + $data.record.max_high_time,
      type: "line"
    }),
    t: common_vendor.o(($event) => $data.record.max_high_time = $event),
    v: common_vendor.p({
      type: "datetime",
      modelValue: $data.record.max_high_time
    }),
    w: common_vendor.o($options.max_low_Change),
    x: common_vendor.p({
      value: $data.record.max_low,
      min: 0,
      max: 5e4
    }),
    y: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.max_low,
      type: "line",
      padding: true
    }),
    z: common_vendor.p({
      title: "\u65E5\u671F\u65F6\u95F4\uFF1A" + $data.record.max_low_time,
      type: "line"
    }),
    A: common_vendor.o(($event) => $data.record.max_low_time = $event),
    B: common_vendor.p({
      type: "datetime",
      modelValue: $data.record.max_low_time
    }),
    C: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/medicalReport/bpr24Hours/bpr24HoursRecord.vue"]]);
wx.createPage(MiniProgramPage);
