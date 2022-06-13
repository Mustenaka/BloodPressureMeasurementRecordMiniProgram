"use strict";var e=require("../../../../common/vendor.js");const o="chooseAndUploadFile:fail";function i(e,o){return e.tempFiles.forEach(((e,i)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),o&&(e.fileType=o),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function t(e,{onChooseFile:o,onUploadProgress:i}){return e.then((e=>{if(o){const i=o(e);if(void 0!==i)return Promise.resolve(i).then((o=>void 0===o?e:o))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}exports.chooseAndUploadFile=function(s={type:"all"}){return"image"===s.type?t(function(t){const{count:s,sizeType:n=["original","compressed"],sourceType:r=["album","camera"],extension:a}=t;return new Promise(((t,l)=>{e.index.chooseImage({count:s,sizeType:n,sourceType:r,extension:a,success(e){t(i(e,"image"))},fail(e){l({errMsg:e.errMsg.replace("chooseImage:fail",o)})}})}))}(s),s):"video"===s.type?t(function(t){const{camera:s,compressed:n,maxDuration:r,sourceType:a=["album","camera"],extension:l}=t;return new Promise(((t,c)=>{e.index.chooseVideo({camera:s,compressed:n,maxDuration:r,sourceType:a,extension:l,success(e){const{tempFilePath:o,duration:s,size:n,height:r,width:a}=e;t(i({errMsg:"chooseVideo:ok",tempFilePaths:[o],tempFiles:[{name:e.tempFile&&e.tempFile.name||"",path:o,size:n,type:e.tempFile&&e.tempFile.type||"",width:a,height:r,duration:s,fileType:"video",cloudPath:""}]},"video"))},fail(e){c({errMsg:e.errMsg.replace("chooseVideo:fail",o)})}})}))}(s),s):t(function(t){const{count:s,extension:n}=t;return new Promise(((t,r)=>{let a=e.index.chooseFile;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!=typeof a)return r({errMsg:o+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:s,extension:n,success(e){t(i(e))},fail(e){r({errMsg:e.errMsg.replace("chooseFile:fail",o)})}})}))}(s),s)},exports.uploadCloudFiles=function(o,i=5,t){const s=(o=JSON.parse(JSON.stringify(o))).length;let n=0,r=this;return new Promise((a=>{for(;n<i;)l();function l(){let i=n++;if(i>=s)return void(!o.find((e=>!e.url&&!e.errMsg))&&a(o));const c=o[i],u=r.files.findIndex((e=>e.uuid===c.uuid));c.url="",delete c.errMsg,e.Rt.uploadFile({filePath:c.path,cloudPath:c.cloudPath,fileType:c.fileType,onUploadProgress:e=>{e.index=u,t&&t(e)}}).then((e=>{c.url=e.fileID,c.index=u,i<s&&l()})).catch((e=>{c.errMsg=e.errMsg||e.message,c.index=u,i<s&&l()}))}}))};
