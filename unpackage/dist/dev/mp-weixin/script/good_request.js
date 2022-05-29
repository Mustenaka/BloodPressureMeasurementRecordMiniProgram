"use strict";
var common_vendor = require("../common/vendor.js");
var apiUrl = "http://1.117.222.119";
const sendRequest = (url, method = "GET", data = {}, contentType) => {
  let types = "";
  if (method == "POST" && !contentType) {
    types = "application/x-www-form-urlencoded";
  } else if (method == "POST" && contentType) {
    types = contentType;
  } else {
    types = "application/json";
  }
  var bases = apiUrl + "/" + url;
  var token = common_vendor.index.getStorageSync("token") || "";
  return new Promise(function(resolve, reject) {
    common_vendor.index.request({
      url: bases,
      data,
      method,
      header: {
        "Content-Type": types,
        "Accept": "application/json, text/javascript, */*; q=0.01",
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
                    url: "/pages/wechatLogin/wechatLogin"
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
module.exports.sendRequest = sendRequest;
