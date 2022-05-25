"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login() {
      common_vendor.index.getUserProfile({
        desc: "\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55",
        success: (res) => {
          console.log("\u7528\u6237\u4FE1\u606F: " + JSON.stringify(res.userInfo));
          res.userInfo;
          common_vendor.index.login({
            provider: "weixin",
            success: (res2) => {
              common_vendor.index.showLoading({
                title: "\u767B\u9646\u4E2D"
              });
              var code = res2.code;
              console.log("\u7528\u6237code\u83B7\u53D6\u6210\u529F:" + JSON.stringify(res2));
              common_vendor.index.request({
                url: "http://1.117.222.119/wxlogin",
                method: "POST",
                header: {
                  "content-type": "application/json"
                },
                data: {
                  "code": code
                },
                success: (res3) => {
                  console.log("\u767B\u9646\u6210\u529F:" + JSON.stringify(res3.data));
                  if (res3.data.err_code == 0) {
                    var token = res3.data.data.token;
                    common_vendor.index.setStorageSync("token", token);
                    common_vendor.index.hideLoading();
                    common_vendor.index.switchTab({
                      url: "/pages/index/index",
                      animationType: "pop-in",
                      animationDuration: 200
                    });
                  } else if (res3.data.err_code == 40003) {
                    common_vendor.index.request({
                      url: "http://1.117.222.119/wxregister",
                      method: "POST",
                      header: {
                        "content-type": "application/json"
                      },
                      data: {
                        "code": code
                      }
                    });
                  } else {
                    common_vendor.index.hideLoading();
                    common_vendor.index.showToast({
                      title: "\u767B\u9646\u5931\u8D25",
                      icon: "none"
                    });
                  }
                },
                fail: (err) => {
                  common_vendor.index.hideLoading();
                  common_vendor.index.showToast({
                    title: "\u767B\u9646\u5931\u8D25",
                    icon: "none"
                  });
                }
              });
            }
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/wechatLogin/wechatLogin.vue"]]);
wx.createPage(MiniProgramPage);
