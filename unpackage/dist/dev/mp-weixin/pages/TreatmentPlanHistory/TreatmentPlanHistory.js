"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: "\u9002\u5408\u6CBB\u7597\u9AD8\u8840\u538B\u7684\u65B9\u5242\u6709\u5F88\u591A\uFF0C\u4F8B\u5982\u5E38\u7528\u7684\u6709\u5929\u9EBB\u94A9\u85E4\u996E\uFF0C\u64C5\u6CBB\u809D\u9633\u4E0A\u4EA2\u578B\u9AD8\u8840\u538B\uFF0C\u8FD8\u6709\u9547\u809D\u7184\u98CE\u6C64\u3001\u7F9A\u89D2\u94A9\u85E4\u6C64\uFF0C\u64C5\u6CBB\u809D\u9633\u4E0A\u4EA2\u3001\u9633\u5316\u98CE\u52A8\u578B\u9AD8\u8840\u538B\u3002\u9F99\u80C6\u6CFB\u809D\u6C64\u64C5\u4E8E\u6CBB\u7597\u809D\u9633\u5316\u706B\u578B\u9AD8\u8840\u538B\uFF0C\u534A\u590F\u767D\u672F\u5929\u9EBB\u6C64\u64C5\u4E8E\u6CBB\u7597\u75F0\u6D4A\u4E2D\u963B\u578B\u9AD8\u8840\u538B\uFF0C\u8840\u5E9C\u9010\u7600\u6C64\u9002\u5408\u6CBB\u7597\u7600\u8840\u963B\u6EDE\u5BFC\u81F4\u7684\u9AD8\u8840\u538B\u3002\r\n\u5982\u679C\u9AD8\u8840\u538B\u662F\u8840\u865A\u706B\u76DB\u800C\u5BFC\u81F4\uFF0C\u9002\u5408\u9009\u7528\u828E\u5F52\u828D\u836F\u6C64\u8FDB\u884C\u6CBB\u7597\uFF0C\u77E5\u67CF\u5730\u9EC4\u4E38\u64C5\u4E8E\u6CBB\u7597\u80BE\u9634\u4E8F\u865A\u3001\u865A\u706B\u4E0A\u6270\u6240\u81F4\u7684\u9AD8\u8840\u538B\uFF0C\u4EE5\u4E0A\u4EC5\u662F\u4E34\u5E8A\u4E2A\u4EBA\u5E38\u7528\u7684\u6CBB\u7597\u9AD8\u8840\u538B\u7684\u65B9\u5242\u3002"
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
    submit() {
      common_vendor.index.navigateTo({
        url: "/pages/TreatmentPlan/TreatmentPlan",
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
      disabled: true,
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
    d: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TreatmentPlanHistory/TreatmentPlanHistory.vue"]]);
wx.createPage(MiniProgramPage);
