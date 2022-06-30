"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [
        "../../static/swiper/swiper2.png"
      ]
    };
  },
  created() {
    console.log("create\u89E6\u53D1");
    this.tester();
  },
  methods: {
    login() {
      common_vendor.index.getUserProfile({
        desc: "\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55",
        success: (res) => {
          console.log("\u7528\u6237\u4FE1\u606F: " + JSON.stringify(res.userInfo));
          let userInfo = res.userInfo;
          common_vendor.index.login({
            provider: "weixin",
            success: (res2) => {
              common_vendor.index.showLoading({
                title: "\u767B\u9646\u4E2D"
              });
              var code = res2.code;
              console.log("\u7528\u6237code\u83B7\u53D6:" + JSON.stringify(res2));
              console.log("UserInfo:", JSON.stringify(userInfo));
              common_vendor.index.request({
                url: "https://www.lyhxxcx.cn/wxlogin",
                method: "POST",
                header: {
                  "content-type": "application/json"
                },
                data: {
                  "code": code
                },
                success: (res3) => {
                  console.log("\u767B\u9646:" + JSON.stringify(res3.data));
                  if (res3.data.err_code == 0) {
                    var token = res3.data.data.token;
                    common_vendor.index.setStorageSync("token", token);
                    console.log("Token:" + token);
                    common_vendor.index.hideLoading();
                    common_vendor.index.switchTab({
                      url: "/pages/index/index",
                      animationType: "pop-in",
                      animationDuration: 200
                    });
                  } else if (res3.data.err_code == 40003) {
                    common_vendor.index.hideLoading();
                    common_vendor.index.showToast({
                      title: "\u767B\u9646\u5931\u8D25-\u8BF7\u5148\u6CE8\u518C",
                      icon: "none",
                      duration: 2e3
                    });
                  } else {
                    common_vendor.index.hideLoading();
                    common_vendor.index.showToast({
                      title: "\u767B\u9646\u5931\u8D25-\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898",
                      icon: "none",
                      duration: 2e3
                    });
                  }
                },
                fail: (err) => {
                  console.log("\u8BBF\u95EE\u540E\u7AEF\u5730\u5740\u9519\u8BEF:" + err.errMsg);
                  common_vendor.index.hideLoading();
                  common_vendor.index.showToast({
                    title: "\u767B\u9646\u5931\u8D25",
                    icon: "none",
                    duration: 2e3
                  });
                }
              });
            }
          });
        }
      });
    },
    register() {
      common_vendor.index.getUserProfile({
        desc: "\u7B2C\u4E00\u6B21\u4F7F\u7528\u81EA\u52A8\u6CE8\u518C",
        success: (res) => {
          console.log("\u7528\u6237\u4FE1\u606F: " + JSON.stringify(res.userInfo));
          let userInfo = res.userInfo;
          common_vendor.index.login({
            provider: "weixin",
            success: (res2) => {
              common_vendor.index.showLoading({
                title: "\u6CE8\u518C\u4E2D"
              });
              var code = res2.code;
              console.log("\u7528\u6237code\u83B7\u53D6\u6210\u529F:" + JSON.stringify(res2));
              console.log("UserInfo:", JSON.stringify(userInfo));
              common_vendor.index.request({
                url: "https://www.lyhxxcx.cn/wxregister",
                method: "POST",
                header: {
                  "content-type": "application/json"
                },
                data: {
                  "code": code,
                  "username": userInfo.nickName,
                  "sex": userInfo.gender == 0 ? "\u7537" : "\u5973",
                  "avatarUrl": userInfo.avatarUrl
                },
                success: (res3) => {
                  console.log("\u6CE8\u518C:" + JSON.stringify(res3.data));
                  common_vendor.index.hideLoading();
                  common_vendor.index.showToast({
                    title: "\u6CE8\u518C\u6210\u529F",
                    icon: "none"
                  });
                },
                fail: (err) => {
                  console.log("\u6CE8\u518C \u540E\u7AEF\u9519\u8BEF:" + err.errMsg);
                  common_vendor.index.hideLoading();
                  common_vendor.index.showToast({
                    title: "\u6CE8\u518C\u5931\u8D25",
                    icon: "none"
                  });
                }
              });
            }
          });
        }
      });
    },
    tester() {
      console.log("target tester!");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/wechatLogin/wechatLogin.vue"]]);
wx.createPage(MiniProgramPage);
