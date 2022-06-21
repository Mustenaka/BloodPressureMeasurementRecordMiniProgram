"use strict";
var common_vendor = require("../vendor.js");
const redirectPages = "/pages/wechatLogin/wechatLogin";
const sendRequest = (url, method = "GET", data = {}, contentType = "application/json") => {
  var temp = common_vendor.index.getStorageSync("token");
  console.log("token status:" + temp);
  if (temp == null || temp == "") {
    common_vendor.index.showModal({
      title: "\u767B\u5F55\u63D0\u793A",
      content: "\u8EAB\u4EFD\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u518D\u6765\u64CD\u4F5C\uFF01",
      success: (ress) => {
        if (ress.confirm) {
          common_vendor.index.redirectTo({
            url: redirectPages
          });
        }
      }
    });
    throw new Error("\u65E0\u6CD5\u5F55\u5165-\u56E0\u4E3A\u6CA1\u6709\u767B\u5F55");
  }
  var token = "Bearer " + common_vendor.index.getStorageSync("token") || "";
  console.log("get Token:" + token);
  return new Promise(function(resolve, reject) {
    common_vendor.index.request({
      url,
      data,
      method,
      header: {
        "Content-Type": contentType,
        "Accept": "*/*",
        "Authorization": token
      },
      success(res) {
        if (res.header.authorization || res.header.Authorization) {
          common_vendor.index.setStorageSync("token", res.header.authorization || res.header.Authorization);
        }
        var code = res.statusCode;
        switch (code) {
          case 401:
            common_vendor.index.showModal({
              title: "\u767B\u5F55\u63D0\u793A",
              content: "\u8EAB\u4EFD\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u518D\u6765\u64CD\u4F5C\uFF01",
              success: (ress) => {
                if (ress.confirm) {
                  common_vendor.index.redirectTo({
                    url: redirectPages
                  });
                }
              }
            });
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
var http = {
  sendRequest
};
exports.http = http;
