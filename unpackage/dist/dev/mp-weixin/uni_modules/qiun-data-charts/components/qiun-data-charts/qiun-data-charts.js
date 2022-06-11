"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_qiunDataCharts_js_sdk_uCharts_uCharts = require("../../js_sdk/u-charts/u-charts.js");
var uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts = require("../../js_sdk/u-charts/config-ucharts.js");
function deepCloneAssign(origin = {}, ...args) {
  for (let i in args) {
    for (let key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        origin[key] = args[i][key] && typeof args[i][key] === "object" ? deepCloneAssign(Array.isArray(args[i][key]) ? [] : {}, origin[key], args[i][key]) : args[i][key];
      }
    }
  }
  return origin;
}
function formatterAssign(args, formatter) {
  for (let key in args) {
    if (args.hasOwnProperty(key) && args[key] !== null && typeof args[key] === "object") {
      formatterAssign(args[key], formatter);
    } else if (key === "format" && typeof args[key] === "string") {
      args["formatter"] = formatter[args[key]] ? formatter[args[key]] : void 0;
    }
  }
  return args;
}
function getFormatDate(date) {
  var seperator = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator + month + seperator + strDate;
  return currentdate;
}
var lastMoveTime = null;
function debounce(fn, wait) {
  let timer = false;
  return function() {
    clearTimeout(timer);
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = false;
      fn.apply(this, arguments);
    }, wait);
  };
}
const _sfc_main = {
  name: "qiun-data-charts",
  mixins: [common_vendor.Rt.mixinDatacom],
  props: {
    type: {
      type: String,
      default: null
    },
    canvasId: {
      type: String,
      default: "uchartsid"
    },
    canvas2d: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    animation: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default() {
        return {
          categories: [],
          series: []
        };
      }
    },
    opts: {
      type: Object,
      default() {
        return {};
      }
    },
    eopts: {
      type: Object,
      default() {
        return {};
      }
    },
    loadingType: {
      type: Number,
      default: 2
    },
    errorShow: {
      type: Boolean,
      default: true
    },
    errorReload: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: null
    },
    inScrollView: {
      type: Boolean,
      default: false
    },
    reshow: {
      type: Boolean,
      default: false
    },
    reload: {
      type: Boolean,
      default: false
    },
    disableScroll: {
      type: Boolean,
      default: false
    },
    optsWatch: {
      type: Boolean,
      default: true
    },
    onzoom: {
      type: Boolean,
      default: false
    },
    ontap: {
      type: Boolean,
      default: true
    },
    ontouch: {
      type: Boolean,
      default: false
    },
    onmouse: {
      type: Boolean,
      default: true
    },
    onmovetip: {
      type: Boolean,
      default: false
    },
    echartsH5: {
      type: Boolean,
      default: false
    },
    echartsApp: {
      type: Boolean,
      default: false
    },
    tooltipShow: {
      type: Boolean,
      default: true
    },
    tooltipFormat: {
      type: String,
      default: void 0
    },
    tooltipCustom: {
      type: Object,
      default: void 0
    },
    startDate: {
      type: String,
      default: void 0
    },
    endDate: {
      type: String,
      default: void 0
    },
    textEnum: {
      type: Array,
      default() {
        return [];
      }
    },
    groupEnum: {
      type: Array,
      default() {
        return [];
      }
    },
    pageScrollTop: {
      type: Number,
      default: 0
    },
    directory: {
      type: String,
      default: "/"
    },
    tapLegend: {
      type: Boolean,
      default: true
    },
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      cid: "uchartsid",
      inWx: false,
      inAli: false,
      inTt: false,
      inBd: false,
      inH5: false,
      inApp: false,
      inWin: false,
      type2d: true,
      disScroll: false,
      openmouse: false,
      pixel: 1,
      cWidth: 375,
      cHeight: 250,
      showchart: false,
      echarts: false,
      echartsResize: {
        state: false
      },
      uchartsOpts: {},
      echartsOpts: {},
      drawData: {},
      lastDrawTime: null
    };
  },
  created() {
    this.cid = this.canvasId;
    if (this.canvasId == "uchartsid" || this.canvasId == "") {
      let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let len = t.length;
      let id = "";
      for (let i = 0; i < 32; i++) {
        id += t.charAt(Math.floor(Math.random() * len));
      }
      this.cid = id;
    }
    const systemInfo = common_vendor.index.getSystemInfoSync();
    if (systemInfo.platform === "windows" || systemInfo.platform === "mac") {
      this.inWin = true;
    }
    this.inWx = true;
    if (this.canvas2d === false || systemInfo.platform === "windows" || systemInfo.platform === "mac") {
      this.type2d = false;
    } else {
      this.type2d = true;
      this.pixel = systemInfo.pixelRatio;
    }
    this.disScroll = this.disableScroll;
  },
  mounted() {
    this.$nextTick(() => {
      this.beforeInit();
    });
    const time = this.inH5 ? 500 : 200;
    const _this = this;
    common_vendor.index.onWindowResize(debounce(function(res) {
      if (_this.mixinDatacomLoading == true) {
        return;
      }
      let errmsg = _this.mixinDatacomErrorMessage;
      if (errmsg !== null && errmsg !== "null" && errmsg !== "") {
        return;
      }
      if (_this.echarts) {
        _this.echartsResize.state = !_this.echartsResize.state;
      } else {
        _this.resizeHandler();
      }
    }, time));
  },
  destroyed() {
    if (this.echarts === true) {
      delete cfe.option[this.cid];
      delete cfe.instance[this.cid];
    } else {
      delete uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[this.cid];
      delete uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[this.cid];
    }
    common_vendor.index.offWindowResize(() => {
    });
  },
  watch: {
    chartDataProps: {
      handler(val, oldval) {
        if (typeof val === "object") {
          if (JSON.stringify(val) !== JSON.stringify(oldval)) {
            this._clearChart();
            if (val.series && val.series.length > 0) {
              this.beforeInit();
            } else {
              this.mixinDatacomLoading = true;
              this.showchart = false;
              this.mixinDatacomErrorMessage = null;
            }
          }
        } else {
          this.mixinDatacomLoading = false;
          this._clearChart();
          this.showchart = false;
          this.mixinDatacomErrorMessage = "\u53C2\u6570\u9519\u8BEF\uFF1AchartData\u6570\u636E\u7C7B\u578B\u9519\u8BEF";
        }
      },
      immediate: false,
      deep: true
    },
    localdata: {
      handler(val, oldval) {
        if (JSON.stringify(val) !== JSON.stringify(oldval)) {
          if (val.length > 0) {
            this.beforeInit();
          } else {
            this.mixinDatacomLoading = true;
            this._clearChart();
            this.showchart = false;
            this.mixinDatacomErrorMessage = null;
          }
        }
      },
      immediate: false,
      deep: true
    },
    optsProps: {
      handler(val, oldval) {
        if (typeof val === "object") {
          if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === false && this.optsWatch == true) {
            this.checkData(this.drawData);
          }
        } else {
          this.mixinDatacomLoading = false;
          this._clearChart();
          this.showchart = false;
          this.mixinDatacomErrorMessage = "\u53C2\u6570\u9519\u8BEF\uFF1Aopts\u6570\u636E\u7C7B\u578B\u9519\u8BEF";
        }
      },
      immediate: false,
      deep: true
    },
    eoptsProps: {
      handler(val, oldval) {
        if (typeof val === "object") {
          if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === true) {
            this.checkData(this.drawData);
          }
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = "\u53C2\u6570\u9519\u8BEF\uFF1Aeopts\u6570\u636E\u7C7B\u578B\u9519\u8BEF";
        }
      },
      immediate: false,
      deep: true
    },
    reshow(val, oldval) {
      if (val === true && this.mixinDatacomLoading === false) {
        setTimeout(() => {
          this.mixinDatacomErrorMessage = null;
          this.echartsResize.state = !this.echartsResize.state;
          this.checkData(this.drawData);
        }, 200);
      }
    },
    reload(val, oldval) {
      if (val === true) {
        this.showchart = false;
        this.mixinDatacomErrorMessage = null;
        this.reloading();
      }
    },
    mixinDatacomErrorMessage(val, oldval) {
      if (val) {
        this.emitMsg({ name: "error", params: { type: "error", errorShow: this.errorShow, msg: val, id: this.cid } });
        if (this.errorShow) {
          console.log("[\u79CB\u4E91\u56FE\u8868\u7EC4\u4EF6]" + val);
        }
      }
    },
    errorMessage(val, oldval) {
      if (val && this.errorShow && val !== null && val !== "null" && val !== "") {
        this.showchart = false;
        this.mixinDatacomLoading = false;
        this.mixinDatacomErrorMessage = val;
      } else {
        this.showchart = false;
        this.mixinDatacomErrorMessage = null;
        this.reloading();
      }
    }
  },
  computed: {
    optsProps() {
      return JSON.parse(JSON.stringify(this.opts));
    },
    eoptsProps() {
      return JSON.parse(JSON.stringify(this.eopts));
    },
    chartDataProps() {
      return JSON.parse(JSON.stringify(this.chartData));
    }
  },
  methods: {
    beforeInit() {
      this.mixinDatacomErrorMessage = null;
      if (typeof this.chartData === "object" && this.chartData != null && this.chartData.series !== void 0 && this.chartData.series.length > 0) {
        this.drawData = deepCloneAssign({}, this.chartData);
        this.mixinDatacomLoading = false;
        this.showchart = true;
        this.checkData(this.chartData);
      } else if (this.localdata.length > 0) {
        this.mixinDatacomLoading = false;
        this.showchart = true;
        this.localdataInit(this.localdata);
      } else if (this.collection !== "") {
        this.mixinDatacomLoading = false;
        this.getCloudData();
      } else {
        this.mixinDatacomLoading = true;
      }
    },
    localdataInit(resdata) {
      if (this.groupEnum.length > 0) {
        for (let i = 0; i < resdata.length; i++) {
          for (let j = 0; j < this.groupEnum.length; j++) {
            if (resdata[i].group === this.groupEnum[j].value) {
              resdata[i].group = this.groupEnum[j].text;
            }
          }
        }
      }
      if (this.textEnum.length > 0) {
        for (let i = 0; i < resdata.length; i++) {
          for (let j = 0; j < this.textEnum.length; j++) {
            if (resdata[i].text === this.textEnum[j].value) {
              resdata[i].text = this.textEnum[j].text;
            }
          }
        }
      }
      let needCategories = false;
      let tmpData = { categories: [], series: [] };
      let tmpcategories = [];
      let tmpseries = [];
      if (this.echarts === true) {
        needCategories = cfe.categories.includes(this.type);
      } else {
        needCategories = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.categories.includes(this.type);
      }
      if (needCategories === true) {
        if (this.chartData && this.chartData.categories && this.chartData.categories.length > 0) {
          tmpcategories = this.chartData.categories;
        } else {
          if (this.startDate && this.endDate) {
            let idate = new Date(this.startDate);
            let edate = new Date(this.endDate);
            while (idate <= edate) {
              tmpcategories.push(getFormatDate(idate));
              idate = idate.setDate(idate.getDate() + 1);
              idate = new Date(idate);
            }
          } else {
            let tempckey = {};
            resdata.map(function(item, index) {
              if (item.text != void 0 && !tempckey[item.text]) {
                tmpcategories.push(item.text);
                tempckey[item.text] = true;
              }
            });
          }
        }
        tmpData.categories = tmpcategories;
      }
      let tempskey = {};
      resdata.map(function(item, index) {
        if (item.group != void 0 && !tempskey[item.group]) {
          tmpseries.push({ name: item.group, data: [] });
          tempskey[item.group] = true;
        }
      });
      if (tmpseries.length == 0) {
        tmpseries = [{ name: "\u9ED8\u8BA4\u5206\u7EC4", data: [] }];
        if (needCategories === true) {
          for (let j = 0; j < tmpcategories.length; j++) {
            let seriesdata = 0;
            for (let i = 0; i < resdata.length; i++) {
              if (resdata[i].text == tmpcategories[j]) {
                seriesdata = resdata[i].value;
              }
            }
            tmpseries[0].data.push(seriesdata);
          }
        } else {
          for (let i = 0; i < resdata.length; i++) {
            tmpseries[0].data.push({ "name": resdata[i].text, "value": resdata[i].value });
          }
        }
      } else {
        for (let k = 0; k < tmpseries.length; k++) {
          if (tmpcategories.length > 0) {
            for (let j = 0; j < tmpcategories.length; j++) {
              let seriesdata = 0;
              for (let i = 0; i < resdata.length; i++) {
                if (tmpseries[k].name == resdata[i].group && resdata[i].text == tmpcategories[j]) {
                  seriesdata = resdata[i].value;
                }
              }
              tmpseries[k].data.push(seriesdata);
            }
          } else {
            for (let i = 0; i < resdata.length; i++) {
              if (tmpseries[k].name == resdata[i].group) {
                tmpseries[k].data.push(resdata[i].value);
              }
            }
          }
        }
      }
      tmpData.series = tmpseries;
      this.drawData = deepCloneAssign({}, tmpData);
      this.checkData(tmpData);
    },
    reloading() {
      if (this.errorReload === false) {
        return;
      }
      this.showchart = false;
      this.mixinDatacomErrorMessage = null;
      if (this.collection !== "") {
        this.mixinDatacomLoading = false;
        this.onMixinDatacomPropsChange(true);
      } else {
        this.beforeInit();
      }
    },
    checkData(anyData) {
      let cid = this.cid;
      if (this.echarts === true) {
        cfe.option[cid] = deepCloneAssign({}, this.eopts);
        cfe.option[cid].id = cid;
        cfe.option[cid].type = this.type;
      } else {
        if (this.type && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.type.includes(this.type)) {
          uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] = deepCloneAssign({}, uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu[this.type], this.opts);
          uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].canvasId = cid;
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = "\u53C2\u6570\u9519\u8BEF\uFF1Aprops\u53C2\u6570\u4E2Dtype\u7C7B\u578B\u4E0D\u6B63\u786E";
        }
      }
      let newData = deepCloneAssign({}, anyData);
      if (newData.series !== void 0 && newData.series.length > 0) {
        this.mixinDatacomErrorMessage = null;
        if (this.echarts === true) {
          cfe.option[cid].chartData = newData;
          this.$nextTick(() => {
            this.init();
          });
        } else {
          uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].categories = newData.categories;
          uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].series = newData.series;
          this.$nextTick(() => {
            this.init();
          });
        }
      }
    },
    resizeHandler() {
      let currTime = Date.now();
      let lastDrawTime = this.lastDrawTime ? this.lastDrawTime : currTime - 3e3;
      let duration = currTime - lastDrawTime;
      if (duration < 1e3)
        return;
      common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + this.cid).boundingClientRect((data) => {
        this.showchart = true;
        if (data.width > 0 && data.height > 0) {
          if (data.width !== this.cWidth || data.height !== this.cHeight) {
            this.checkData(this.drawData);
          }
        }
      }).exec();
    },
    getCloudData() {
      if (this.mixinDatacomLoading == true) {
        return;
      }
      this.mixinDatacomLoading = true;
      this.mixinDatacomGet().then((res) => {
        this.mixinDatacomResData = res.result.data;
        this.localdataInit(this.mixinDatacomResData);
      }).catch((err) => {
        this.mixinDatacomLoading = false;
        this.showchart = false;
        this.mixinDatacomErrorMessage = "\u8BF7\u6C42\u9519\u8BEF\uFF1A" + err;
      });
    },
    onMixinDatacomPropsChange(needReset, changed) {
      if (needReset == true && this.collection !== "") {
        this.showchart = false;
        this.mixinDatacomErrorMessage = null;
        this._clearChart();
        this.getCloudData();
      }
    },
    _clearChart() {
      let cid = this.cid;
      if (this.echarts !== true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context) {
        const ctx = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context;
        if (typeof ctx === "object" && !!!uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update) {
          ctx.clearRect(0, 0, this.cWidth * this.pixel, this.cHeight * this.pixel);
          ctx.draw();
        }
      }
    },
    init() {
      let cid = this.cid;
      common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + cid).boundingClientRect((data) => {
        if (data.width > 0 && data.height > 0) {
          this.mixinDatacomLoading = false;
          this.showchart = true;
          this.lastDrawTime = Date.now();
          this.cWidth = data.width;
          this.cHeight = data.height;
          if (this.echarts !== true) {
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].background = this.background == "rgba(0,0,0,0)" ? "#FFFFFF" : this.background;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].canvas2d = this.type2d;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].pixelRatio = this.pixel;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].animation = this.animation;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].width = data.width * this.pixel;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].height = data.height * this.pixel;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onzoom = this.onzoom;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].ontap = this.ontap;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].ontouch = this.ontouch;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onmouse = this.openmouse;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onmovetip = this.onmovetip;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipShow = this.tooltipShow;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat = this.tooltipFormat;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipCustom = this.tooltipCustom;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].inScrollView = this.inScrollView;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].lastDrawTime = this.lastDrawTime;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tapLegend = this.tapLegend;
          }
          if (this.inH5 || this.inApp) {
            if (this.echarts == true) {
              cfe.option[cid].ontap = this.ontap;
              cfe.option[cid].onmouse = this.openmouse;
              cfe.option[cid].tooltipShow = this.tooltipShow;
              cfe.option[cid].tooltipFormat = this.tooltipFormat;
              cfe.option[cid].tooltipCustom = this.tooltipCustom;
              cfe.option[cid].lastDrawTime = this.lastDrawTime;
              this.echartsOpts = deepCloneAssign({}, cfe.option[cid]);
            } else {
              uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
              this.uchartsOpts = deepCloneAssign({}, uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
            }
          } else {
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] = formatterAssign(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid], uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter);
            this.mixinDatacomErrorMessage = null;
            this.mixinDatacomLoading = false;
            this.showchart = true;
            this.$nextTick(() => {
              if (this.type2d === true) {
                const query = common_vendor.index.createSelectorQuery().in(this);
                query.select("#" + cid).fields({ node: true, size: true }).exec((res) => {
                  if (res[0]) {
                    const canvas = res[0].node;
                    const ctx = canvas.getContext("2d");
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context = ctx;
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
                    if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update === true) {
                      this._updataUChart(cid);
                    } else {
                      canvas.width = data.width * this.pixel;
                      canvas.height = data.height * this.pixel;
                      canvas._width = data.width * this.pixel;
                      canvas._height = data.height * this.pixel;
                      setTimeout(() => {
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.restore();
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.save();
                        this._newChart(cid);
                      }, 100);
                    }
                  } else {
                    this.showchart = false;
                    this.mixinDatacomErrorMessage = "\u53C2\u6570\u9519\u8BEF\uFF1A\u5F00\u542F2d\u6A21\u5F0F\u540E\uFF0C\u672A\u83B7\u53D6\u5230dom\u8282\u70B9\uFF0Ccanvas-id:" + cid;
                  }
                });
              } else {
                if (this.inAli) {
                  uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
                }
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context = common_vendor.index.createCanvasContext(cid, this);
                if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update === true) {
                  this._updataUChart(cid);
                } else {
                  setTimeout(() => {
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.restore();
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.save();
                    this._newChart(cid);
                  }, 100);
                }
              }
            });
          }
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          if (this.reshow == true) {
            this.mixinDatacomErrorMessage = "\u5E03\u5C40\u9519\u8BEF\uFF1A\u672A\u83B7\u53D6\u5230\u7236\u5143\u7D20\u5BBD\u9AD8\u5C3A\u5BF8\uFF01canvas-id:" + cid;
          }
        }
      }).exec();
    },
    saveImage() {
      common_vendor.index.canvasToTempFilePath({
        canvasId: this.cid,
        success: (res) => {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function() {
              common_vendor.index.showToast({
                title: "\u4FDD\u5B58\u6210\u529F",
                duration: 2e3
              });
            }
          });
        }
      }, this);
    },
    getImage() {
      if (this.type2d == false) {
        common_vendor.index.canvasToTempFilePath({
          canvasId: this.cid,
          success: (res) => {
            this.emitMsg({ name: "getImage", params: { type: "getImage", base64: res.tempFilePath } });
          }
        }, this);
      } else {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("#" + this.cid).fields({ node: true, size: true }).exec((res) => {
          if (res[0]) {
            const canvas = res[0].node;
            this.emitMsg({ name: "getImage", params: { type: "getImage", base64: canvas.toDataURL("image/png") } });
          }
        });
      }
    },
    _newChart(cid) {
      if (this.mixinDatacomLoading == true) {
        return;
      }
      this.showchart = true;
      uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] = new uni_modules_qiunDataCharts_js_sdk_uCharts_uCharts.uCharts(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
      uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("renderComplete", () => {
        this.emitMsg({ name: "complete", params: { type: "complete", complete: true, id: cid } });
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].delEventListener("renderComplete");
      });
      uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("scrollLeft", () => {
        this.emitMsg({ name: "scrollLeft", params: { type: "scrollLeft", scrollLeft: true, id: cid } });
      });
      uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("scrollRight", () => {
        this.emitMsg({ name: "scrollRight", params: { type: "scrollRight", scrollRight: true, id: cid } });
      });
    },
    _updataUChart(cid) {
      uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].updateData(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
    },
    _tooltipDefault(item, category, index, opts) {
      if (category) {
        let data = item.data;
        if (typeof item.data === "object") {
          data = item.data.value;
        }
        return category + " " + item.name + ":" + data;
      } else {
        if (item.properties && item.properties.name) {
          return item.properties.name;
        } else {
          return item.name + ":" + item.data;
        }
      }
    },
    _showTooltip(e) {
      let cid = this.cid;
      let tc = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipCustom;
      if (tc && tc !== void 0 && tc !== null) {
        let offset = void 0;
        if (tc.x >= 0 && tc.y >= 0) {
          offset = { x: tc.x, y: tc.y + 10 };
        }
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].showToolTip(e, {
          index: tc.index,
          offset,
          textList: tc.textList,
          formatter: (item, category, index, opts) => {
            if (typeof uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat === "string" && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat]) {
              return uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this._tooltipDefault(item, category, index, opts);
            }
          }
        });
      } else {
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].showToolTip(e, {
          formatter: (item, category, index, opts) => {
            if (typeof uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat === "string" && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat]) {
              return uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this._tooltipDefault(item, category, index, opts);
            }
          }
        });
      }
    },
    _tap(e, move) {
      let cid = this.cid;
      let currentIndex = null;
      let legendIndex = null;
      if (this.inScrollView === true || this.inAli) {
        common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + cid).boundingClientRect((data) => {
          e.changedTouches = [];
          if (this.inAli) {
            e.changedTouches.unshift({ x: e.detail.clientX - data.left, y: e.detail.clientY - data.top });
          } else {
            e.changedTouches.unshift({ x: e.detail.x - data.left, y: e.detail.y - data.top - this.pageScrollTop });
          }
          if (move) {
            if (this.tooltipShow === true) {
              this._showTooltip(e);
            }
          } else {
            currentIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getCurrentDataIndex(e);
            legendIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getLegendDataIndex(e);
            if (this.tapLegend === true) {
              uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].touchLegend(e);
            }
            if (this.tooltipShow === true) {
              this._showTooltip(e);
            }
            this.emitMsg({ name: "getIndex", params: { type: "getIndex", event: { x: e.detail.x - data.left, y: e.detail.y - data.top }, currentIndex, legendIndex, id: cid, opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts } });
          }
        }).exec();
      } else {
        if (move) {
          if (this.tooltipShow === true) {
            this._showTooltip(e);
          }
        } else {
          e.changedTouches = [];
          e.changedTouches.unshift({ x: e.detail.x - e.currentTarget.offsetLeft, y: e.detail.y - e.currentTarget.offsetTop });
          currentIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getCurrentDataIndex(e);
          legendIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getLegendDataIndex(e);
          if (this.tapLegend === true) {
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].touchLegend(e);
          }
          if (this.tooltipShow === true) {
            this._showTooltip(e);
          }
          this.emitMsg({ name: "getIndex", params: { type: "getIndex", event: { x: e.detail.x, y: e.detail.y - e.currentTarget.offsetTop }, currentIndex, legendIndex, id: cid, opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts } });
        }
      }
    },
    _touchStart(e) {
      let cid = this.cid;
      lastMoveTime = Date.now();
      if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.touches.length == 1) {
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scrollStart(e);
      }
      this.emitMsg({ name: "getTouchStart", params: { type: "touchStart", event: e.changedTouches[0], id: cid } });
    },
    _touchMove(e) {
      let cid = this.cid;
      let currMoveTime = Date.now();
      let duration = currMoveTime - lastMoveTime;
      let touchMoveLimit = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].touchMoveLimit || 24;
      if (duration < Math.floor(1e3 / touchMoveLimit))
        return;
      lastMoveTime = currMoveTime;
      if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.changedTouches.length == 1) {
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scroll(e);
      }
      if (this.ontap === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === false && this.onmovetip === true) {
        this._tap(e, true);
      }
      if (this.ontouch === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && this.onzoom === true && e.changedTouches.length == 2) {
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].dobuleZoom(e);
      }
      this.emitMsg({ name: "getTouchMove", params: { type: "touchMove", event: e.changedTouches[0], id: cid } });
    },
    _touchEnd(e) {
      let cid = this.cid;
      if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.touches.length == 0) {
        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scrollEnd(e);
      }
      this.emitMsg({ name: "getTouchEnd", params: { type: "touchEnd", event: e.changedTouches[0], id: cid } });
      if (this.ontap === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === false && this.onmovetip === true) {
        this._tap(e, true);
      }
    },
    _error(e) {
      this.mixinDatacomErrorMessage = e.detail.errMsg;
    },
    emitMsg(msg) {
      this.$emit(msg.name, msg.params);
    },
    getRenderType() {
      if (this.echarts === true && this.mixinDatacomLoading === false) {
        this.beforeInit();
      }
    },
    toJSON() {
      return this;
    }
  }
};
if (!Array) {
  const _easycom_qiun_loading2 = common_vendor.resolveComponent("qiun-loading");
  const _easycom_qiun_error2 = common_vendor.resolveComponent("qiun-error");
  (_easycom_qiun_loading2 + _easycom_qiun_error2)();
}
const _easycom_qiun_loading = () => "../qiun-loading/qiun-loading.js";
const _easycom_qiun_error = () => "../qiun-error/qiun-error.js";
if (!Math) {
  (_easycom_qiun_loading + _easycom_qiun_error)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.mixinDatacomLoading
  }, _ctx.mixinDatacomLoading ? {
    b: common_vendor.p({
      loadingType: $props.loadingType
    })
  } : {}, {
    c: _ctx.mixinDatacomErrorMessage && $props.errorShow
  }, _ctx.mixinDatacomErrorMessage && $props.errorShow ? {
    d: common_vendor.p({
      errorMessage: $props.errorMessage
    }),
    e: common_vendor.o((...args) => $options.reloading && $options.reloading(...args))
  } : {}, {
    f: $data.type2d
  }, $data.type2d ? common_vendor.e({
    g: $props.ontouch
  }, $props.ontouch ? {
    h: $data.cid,
    i: $data.cid,
    j: $data.cWidth + "px",
    k: $data.cHeight + "px",
    l: $props.background,
    m: $data.disScroll,
    n: common_vendor.o((...args) => $options._touchStart && $options._touchStart(...args)),
    o: common_vendor.o((...args) => $options._touchMove && $options._touchMove(...args)),
    p: common_vendor.o((...args) => $options._touchEnd && $options._touchEnd(...args)),
    q: common_vendor.o((...args) => $options._error && $options._error(...args)),
    r: $data.showchart,
    s: common_vendor.o((...args) => $options._tap && $options._tap(...args))
  } : {}, {
    t: !$props.ontouch
  }, !$props.ontouch ? {
    v: $data.cid,
    w: $data.cid,
    x: $data.cWidth + "px",
    y: $data.cHeight + "px",
    z: $props.background,
    A: $data.disScroll,
    B: common_vendor.o((...args) => $options._error && $options._error(...args)),
    C: $data.showchart,
    D: common_vendor.o((...args) => $options._tap && $options._tap(...args))
  } : {}) : {}, {
    E: !$data.type2d
  }, !$data.type2d ? common_vendor.e({
    F: $props.ontouch
  }, $props.ontouch ? common_vendor.e({
    G: $data.showchart
  }, $data.showchart ? {
    H: $data.cid,
    I: $data.cid,
    J: $data.cWidth + "px",
    K: $data.cHeight + "px",
    L: $props.background,
    M: common_vendor.o((...args) => $options._touchStart && $options._touchStart(...args)),
    N: common_vendor.o((...args) => $options._touchMove && $options._touchMove(...args)),
    O: common_vendor.o((...args) => $options._touchEnd && $options._touchEnd(...args)),
    P: $data.disScroll,
    Q: common_vendor.o((...args) => $options._error && $options._error(...args))
  } : {}, {
    R: common_vendor.o((...args) => $options._tap && $options._tap(...args))
  }) : {}, {
    S: !$props.ontouch
  }, !$props.ontouch ? common_vendor.e({
    T: $data.showchart
  }, $data.showchart ? {
    U: $data.cid,
    V: $data.cid,
    W: $data.cWidth + "px",
    X: $data.cHeight + "px",
    Y: $props.background,
    Z: $data.disScroll,
    aa: common_vendor.o((...args) => $options._tap && $options._tap(...args)),
    ab: common_vendor.o((...args) => $options._error && $options._error(...args))
  } : {}) : {}) : {}, {
    ac: "ChartBoxId" + $data.cid
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fe947b98"], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"]]);
wx.createComponent(Component);
