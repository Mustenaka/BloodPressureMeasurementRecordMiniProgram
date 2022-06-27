"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      RealName: "",
      userName: "\u9F99\u533B\u62A4\u5FC3",
      Tellphone: "-",
      Email: "-",
      Avatar_Url: "/static/project-logo.png"
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "v1/user";
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        var data = res.data.data;
        this.userName = data.user_name;
        this.RealName = data.real_name;
        this.Tellphone = data.tel;
        this.Email = data.email;
        this.Avatar_Url = data.avatarUrl;
      }).catch((err) => {
        console.log(err);
      });
    },
    submit() {
      const url = "http://1.117.222.119/v1/user/user";
      this.$http.sendRequest(url, "PUT", {
        "username": this.userName,
        "realname": this.RealName,
        "telephone": this.Tellphone,
        "email": this.Email,
        "avatarUrl": this.Avatar_Url
      }).then((res) => {
        console.log(res);
        common_vendor.index.showToast({
          title: "\u4FEE\u6539\u6210\u529F",
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
    a: $data.Avatar_Url,
    b: common_vendor.o(_ctx.input),
    c: common_vendor.o(($event) => $data.userName = $event),
    d: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.userName
    }),
    e: common_vendor.p({
      title: "\u9ED8\u8BA4",
      type: "line",
      padding: true
    }),
    f: common_vendor.o(_ctx.input),
    g: common_vendor.o(($event) => $data.RealName = $event),
    h: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    i: common_vendor.p({
      title: "\u9ED8\u8BA4",
      type: "line",
      padding: true
    }),
    j: common_vendor.o(_ctx.input),
    k: common_vendor.o(($event) => $data.Tellphone = $event),
    l: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.Tellphone
    }),
    m: common_vendor.p({
      title: "\u9ED8\u8BA4",
      type: "line",
      padding: true
    }),
    n: common_vendor.o(_ctx.input),
    o: common_vendor.o(($event) => $data.Email = $event),
    p: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.Email
    }),
    q: common_vendor.p({
      title: "\u9ED8\u8BA4",
      type: "line",
      padding: true
    }),
    r: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/myself-detail/myself-detail.vue"]]);
wx.createPage(MiniProgramPage);
