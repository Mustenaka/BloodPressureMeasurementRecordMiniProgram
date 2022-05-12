"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [
        "../../static/swiper/swiper1.png"
      ]
    };
  },
  onLoad() {
  },
  methods: {
    gonavigate() {
      common_vendor.index.navigateTo({
        url: "/pages/functionTest/functionTest",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: common_vendor.o($options.gonavigate),
    c: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatwrite",
      size: "30"
    }),
    d: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatziyuan",
      size: "30"
    }),
    e: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatjiankangfangan",
      size: "30"
    }),
    f: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatbaogao-copy",
      size: "30"
    }),
    g: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatpaizhao",
      size: "30"
    }),
    h: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechattongue",
      size: "30"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
