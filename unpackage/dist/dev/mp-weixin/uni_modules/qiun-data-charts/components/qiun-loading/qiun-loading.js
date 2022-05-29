"use strict";
var common_vendor = require("../../../../common/vendor.js");
const Loading1 = () => "./loading1.js";
const Loading2 = () => "./loading2.js";
const Loading3 = () => "./loading3.js";
const Loading4 = () => "./loading4.js";
const Loading5 = () => "./loading5.js";
const _sfc_main = {
  components: { Loading1, Loading2, Loading3, Loading4, Loading5 },
  name: "qiun-loading",
  props: {
    loadingType: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _component_Loading1 = common_vendor.resolveComponent("Loading1");
  const _component_Loading2 = common_vendor.resolveComponent("Loading2");
  const _component_Loading3 = common_vendor.resolveComponent("Loading3");
  const _component_Loading4 = common_vendor.resolveComponent("Loading4");
  const _component_Loading5 = common_vendor.resolveComponent("Loading5");
  (_component_Loading1 + _component_Loading2 + _component_Loading3 + _component_Loading4 + _component_Loading5)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.loadingType == 1
  }, $props.loadingType == 1 ? {} : {}, {
    b: $props.loadingType == 2
  }, $props.loadingType == 2 ? {} : {}, {
    c: $props.loadingType == 3
  }, $props.loadingType == 3 ? {} : {}, {
    d: $props.loadingType == 4
  }, $props.loadingType == 4 ? {} : {}, {
    e: $props.loadingType == 5
  }, $props.loadingType == 5 ? {} : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading.vue"]]);
wx.createComponent(Component);
