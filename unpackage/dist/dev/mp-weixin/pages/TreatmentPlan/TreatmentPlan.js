"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    input(e) {
      console.log("\u8F93\u5165\u5185\u5BB9\uFF1A", e);
    },
    iconClick(type) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB\u4E86${type === "prefix" ? "\u5DE6\u4FA7" : "\u53F3\u4FA7"}\u7684\u56FE\u6807`,
        icon: "none"
      });
    },
    toHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/TreatmentPlanHistory/TreatmentPlanHistory",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _component_uni_section)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.value = $event),
    b: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.value
    }),
    c: common_vendor.p({
      title: "\u591A\u884C\u6587\u672C\u81EA\u52A8\u9AD8\u5EA6",
      subTitle: "\u4F7F\u7528\u5C5E\u6027 autoHeight \u4F7F\u591A\u884C\u6587\u672C\u6846\u81EA\u52A8\u589E\u9AD8",
      type: "line",
      padding: true
    }),
    d: common_vendor.o((...args) => _ctx.submit && _ctx.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TreatmentPlan/TreatmentPlan.vue"]]);
wx.createPage(MiniProgramPage);
