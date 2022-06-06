"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_file_picker2 + _component_uni_section)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_file_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    b: common_vendor.p({
      limit: "9",
      title: "\u6700\u591A\u9009\u62E99\u5F20\u56FE\u7247"
    }),
    c: common_vendor.p({
      title: "\u53EA\u9009\u62E9\u56FE\u7247",
      type: "line"
    }),
    d: common_vendor.o((...args) => _ctx.submit && _ctx.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/uploadPhoto/uploadPhoto.vue"]]);
wx.createPage(MiniProgramPage);
