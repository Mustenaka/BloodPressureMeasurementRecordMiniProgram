"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      version: "v0.1.7",
      swiperList: [
        "../../static/swiper/swiper1.png",
        "../../static/swiper/swiper2.png"
      ]
    };
  },
  methods: {
    toTestPage() {
      common_vendor.index.navigateTo({
        url: "/pages/functionTest/functionTest",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toBpRecord() {
      common_vendor.index.navigateTo({
        url: "/pages/BpRecord/BpRecord",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toBpChart() {
      common_vendor.index.navigateTo({
        url: "/pages/BpChart/BpChart",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toTreatmentPlan() {
      common_vendor.index.navigateTo({
        url: "/pages/TreatmentPlanHistory/TreatmentPlanHistory",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toMyMedicalReport() {
      common_vendor.index.navigateTo({
        url: "/pages/MyMedicalReport/MyMedicalReport",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toUploadPhoto() {
      common_vendor.index.navigateTo({
        url: "/pages/uploadPhoto/uploadPhoto",
        animationType: "pop-in",
        animationDuration: 200
      });
    },
    toTongueDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/TongueDetail/TongueDetail",
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
    b: common_vendor.o($options.toBpRecord),
    c: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatwrite",
      size: "30"
    }),
    d: common_vendor.o($options.toBpChart),
    e: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatziyuan",
      size: "30"
    }),
    f: common_vendor.o($options.toTreatmentPlan),
    g: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatjiankangfangan",
      size: "30"
    }),
    h: common_vendor.o($options.toMyMedicalReport),
    i: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatbaogao-copy",
      size: "30"
    }),
    j: common_vendor.o($options.toUploadPhoto),
    k: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechatpaizhao",
      size: "30"
    }),
    l: common_vendor.o($options.toTongueDetail),
    m: common_vendor.p({
      customPrefix: "iconfont",
      type: "icon-bpr-wechattongue",
      size: "30"
    }),
    n: common_vendor.t($data.version)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
