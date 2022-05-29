"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userName: "Andrew",
      Tellphone: "18222221111",
      Email: "Cuwa@outlook.com"
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
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => $data.userName = $event),
    c: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.userName
    }),
    d: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => $data.Tellphone = $event),
    g: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.Tellphone
    }),
    h: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    i: common_vendor.o(_ctx.input),
    j: common_vendor.o(($event) => $data.Email = $event),
    k: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.Email
    }),
    l: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/myself-detail/myself-detail.vue"]]);
wx.createPage(MiniProgramPage);
