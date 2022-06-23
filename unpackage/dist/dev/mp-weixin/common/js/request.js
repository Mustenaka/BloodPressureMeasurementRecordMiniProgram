"use strict";
var common_vendor = require("../vendor.js");
const baseUrl = "https://www.lyhxxcx.cn/";
const sendRequest = (url, method = "GET", data = {}, contentType = "application/json") => {
  var baseToken = common_vendor.index.getStorageSync("token");
  if (baseToken == null || baseToken == "") {
    globalThis.redirectToLogin();
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
            this.redirectToLogin();
            break;
          case 404:
            this.error404page();
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
