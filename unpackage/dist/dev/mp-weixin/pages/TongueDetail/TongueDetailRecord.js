"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      record: {
        tongue: "",
        tongue_coating: "",
        pulse: "",
        createAt: ""
      }
    };
  },
  methods: {
    dataChange(value) {
      this.record.average = value;
    },
    submit() {
      console.log("\u6570\u636E" + this.record.data);
      this.$http.sendRequest("v1/user/tonguedetail", "POST", {
        "tongue": this.record.tongue,
        "tongue_coating": this.record.tongue_coating,
        "pulse": this.record.pulse,
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
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_component_uni_section + _easycom_uni_datetime_picker2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_easyinput)();
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
    d: common_vendor.o(($event) => $data.record.tongue = $event),
    e: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.record.tongue
    }),
    f: common_vendor.p({
      title: "\u521B\u5EFA\u65B0\u6570\u636E",
      type: "line",
      padding: true
    }),
    g: common_vendor.o(($event) => $data.record.tongue_coating = $event),
    h: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.record.tongue_coating
    }),
    i: common_vendor.p({
      title: "\u521B\u5EFA\u65B0\u6570\u636E",
      type: "line",
      padding: true
    }),
    j: common_vendor.o(($event) => $data.record.pulse = $event),
    k: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.record.pulse
    }),
    l: common_vendor.p({
      title: "\u521B\u5EFA\u65B0\u6570\u636E",
      type: "line",
      padding: true
    }),
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TongueDetail/TongueDetailRecord.vue"]]);
wx.createPage(MiniProgramPage);
