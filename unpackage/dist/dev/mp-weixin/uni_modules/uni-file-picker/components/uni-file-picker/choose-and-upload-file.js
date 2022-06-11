"use strict";
var common_vendor = require("../../../../common/vendor.js");
const ERR_MSG_OK = "chooseAndUploadFile:ok";
const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
function chooseImage(opts) {
  const {
    count,
    sizeType = ["original", "compressed"],
    sourceType = ["album", "camera"],
    extension
  } = opts;
  return new Promise((resolve, reject) => {
    common_vendor.index.chooseImage({
      count,
      sizeType,
      sourceType,
      extension,
      success(res) {
        resolve(normalizeChooseAndUploadFileRes(res, "image"));
      },
      fail(res) {
        reject({
          errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseVideo(opts) {
  const {
    camera,
    compressed,
    maxDuration,
    sourceType = ["album", "camera"],
    extension
  } = opts;
  return new Promise((resolve, reject) => {
    common_vendor.index.chooseVideo({
      camera,
      compressed,
      maxDuration,
      sourceType,
      extension,
      success(res) {
        const {
          tempFilePath,
          duration,
          size,
          height,
          width
        } = res;
        resolve(normalizeChooseAndUploadFileRes({
          errMsg: "chooseVideo:ok",
          tempFilePaths: [tempFilePath],
          tempFiles: [
            {
              name: res.tempFile && res.tempFile.name || "",
              path: tempFilePath,
              size,
              type: res.tempFile && res.tempFile.type || "",
              width,
              height,
              duration,
              fileType: "video",
              cloudPath: ""
            }
          ]
        }, "video"));
      },
      fail(res) {
        reject({
          errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseAll(opts) {
  const {
    count,
    extension
  } = opts;
  return new Promise((resolve, reject) => {
    let chooseFile = common_vendor.index.chooseFile;
    if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
      chooseFile = wx.chooseMessageFile;
    }
    if (typeof chooseFile !== "function") {
      return reject({
        errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
      });
    }
    chooseFile({
      type: "all",
      count,
      extension,
      success(res) {
        resolve(normalizeChooseAndUploadFileRes(res));
      },
      fail(res) {
        reject({
          errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
        });
      }
    });
  });
}
function normalizeChooseAndUploadFileRes(res, fileType) {
  res.tempFiles.forEach((item, index) => {
    if (!item.name) {
      item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
    }
    if (fileType) {
      item.fileType = fileType;
    }
    item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
  });
  if (!res.tempFilePaths) {
    res.tempFilePaths = res.tempFiles.map((file) => file.path);
  }
  return res;
}
function uploadCloudFiles(files, max = 5, onUploadProgress) {
  files = JSON.parse(JSON.stringify(files));
  const len = files.length;
  let count = 0;
  let self = this;
  return new Promise((resolve) => {
    while (count < max) {
      next();
    }
    function next() {
      let cur = count++;
      if (cur >= len) {
        !files.find((item) => !item.url && !item.errMsg) && resolve(files);
        return;
      }
      const fileItem = files[cur];
      const index = self.files.findIndex((v) => v.uuid === fileItem.uuid);
      fileItem.url = "";
      delete fileItem.errMsg;
      common_vendor.Rt.uploadFile({
        filePath: fileItem.path,
        cloudPath: fileItem.cloudPath,
        fileType: fileItem.fileType,
        onUploadProgress: (res) => {
          res.index = index;
          onUploadProgress && onUploadProgress(res);
        }
      }).then((res) => {
        fileItem.url = res.fileID;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      }).catch((res) => {
        fileItem.errMsg = res.errMsg || res.message;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      });
    }
  });
}
function uploadFiles(choosePromise, {
  onChooseFile,
  onUploadProgress
}) {
  return choosePromise.then((res) => {
    if (onChooseFile) {
      const customChooseRes = onChooseFile(res);
      if (typeof customChooseRes !== "undefined") {
        return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
      }
    }
    return res;
  }).then((res) => {
    if (res === false) {
      return {
        errMsg: ERR_MSG_OK,
        tempFilePaths: [],
        tempFiles: []
      };
    }
    return res;
  });
}
function chooseAndUploadFile(opts = {
  type: "all"
}) {
  if (opts.type === "image") {
    return uploadFiles(chooseImage(opts), opts);
  } else if (opts.type === "video") {
    return uploadFiles(chooseVideo(opts), opts);
  }
  return uploadFiles(chooseAll(opts), opts);
}
exports.chooseAndUploadFile = chooseAndUploadFile;
exports.uploadCloudFiles = uploadCloudFiles;