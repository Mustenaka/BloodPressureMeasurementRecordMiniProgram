"use strict";
var common_vendor = require("../vendor.js");
const redirectPages = "/pages/wechatLogin/wechatLogin";
const baseUrl = "https://www.lyhxxcx.cn/";
const sendRequest = (url, method = "GET", data = {}, contentType = "application/json") => {
  var baseToken = common_vendor.index.getStorageSync("token");
  if (baseToken == null || baseToken == "") {
    redirectToLogin();
    throw new Error("\u65E0\u6CD5\u64CD\u4F5C - \u56E0\u4E3A\u6CA1\u6709\u767B\u5F55");
  }
  var token = "Bearer " + baseToken || "";
  console.log("Get Token Information: " + token);
  return new Promise(function(resolve, reject) {
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        "Content-Type": contentType,
        "Accept": "*/*",
        "Authorization": token
      },
      success(res) {
        var authorization = res.header.authorization || res.header.Authorization;
        if (authorization) {
          common_vendor.index.setStorageSync("token", authorization);
        }
        var code = res.statusCode;
        switch (code) {
          case 401:
            redirectToLogin();
            break;
          case 404:
            error404page();
            break;
          default:
            resolve(res);
            break;
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
};
function redirectToLogin() {
  common_vendor.index.showModal({
    title: "\u767B\u5F55\u63D0\u793A",
    content: "\u8EAB\u4EFD\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u518D\u6765\u64CD\u4F5C\uFF01",
    success: (ress) => {
      if (ress.confirm) {
        common_vendor.index.redirectTo({
          url: redirectPages
        });
      }
    },
    fail(err) {
      common_vendor.index.showToast({
        title: "\u672A\u767B\u5F55",
        icon: "none"
      });
    }
  });
}
function error404page() {
  common_vendor.index.showToast({
    title: "\u670D\u52A1\u5668\u8D44\u6E90\u9519\u8BEF - 404",
    icon: "none",
    duration: 2e3
  });
}
var http = {
  sendRequest
};
exports.http = http;
