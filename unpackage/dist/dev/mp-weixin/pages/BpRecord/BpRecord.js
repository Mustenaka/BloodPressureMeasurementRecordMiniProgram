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
    highChange(value) {
      this.bpRecord.high = value;
    },
    lowChange(value) {
      this.bpRecord.low = value;
    },
    heartRateChange(value) {
      this.bpRecord.heart_rate = value;
    },
    submit() {
      if (this.validation() == false) {
        common_vendor.index.showToast({
          title: "\u672A\u586B\u5199\u65F6\u95F4 | \u65F6\u95F4\u683C\u5F0F\u9519\u8BEF",
          icon: "none"
        });
        return;
      }
      this.$http.sendRequest("v1/user/bprecord", "POST", {
        "record_date_time": this.bpRecord.record_date_time,
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
    },
    validation() {
      if (this.bpRecord.record_date_time.length != 19) {
        return false;
      }
      if (this.bpRecord.low <= 0 || this.bpRecord.low > 300) {
        return false;
      }
      if (this.bpRecord.high <= 0 || this.bpRecord.high > 300) {
        return false;
      }
      if (this.bpRecord.heart_rate <= 0 || this.bpRecord.heart_rate > 500) {
        return false;
      }
      return true;
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
    d: common_vendor.o($options.lowChange),
    e: common_vendor.p({
      value: $data.bpRecord.low,
      min: 0,
      max: 300
    }),
    f: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.bpRecord.low,
      type: "line",
      padding: true
    }),
    g: common_vendor.o($options.highChange),
    h: common_vendor.p({
      value: $data.bpRecord.high,
      min: 0,
      max: 300
    }),
    i: common_vendor.p({
      title: "\u9AD8\u538B\u8BB0\u5F55: " + $data.bpRecord.high,
      type: "line",
      padding: true
    }),
    j: common_vendor.o($options.heartRateChange),
    k: common_vendor.p({
      value: $data.bpRecord.heart_rate,
      min: 0,
      max: 300
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
