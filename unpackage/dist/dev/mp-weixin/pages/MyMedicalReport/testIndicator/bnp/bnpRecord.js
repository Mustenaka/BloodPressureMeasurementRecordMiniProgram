"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      record: {
        data: 0,
        createAt: ""
      }
    };
  },
  methods: {
    dataChange(value) {
      this.record.data = value;
    },
    submit() {
      console.log("\u6570\u636E" + this.record.data);
      this.$http.sendRequest("http://1.117.222.119/v1/user/tibnp", "POST", {
        "data": this.record.data,
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
    d: common_vendor.o($options.dataChange),
    e: common_vendor.p({
      value: $data.record.data,
      min: 0,
      max: 5e4
    }),
    f: common_vendor.p({
      title: "\u4F4E\u538B\u8BB0\u5F55: " + $data.record.data,
      type: "line",
      padding: true
    }),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/MyMedicalReport/testIndicator/bnp/bnpRecord.vue"]]);
wx.createPage(MiniProgramPage);
