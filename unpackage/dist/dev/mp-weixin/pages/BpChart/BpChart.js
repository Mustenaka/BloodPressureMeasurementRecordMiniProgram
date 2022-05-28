"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartData: {},
      opts: {
        color: [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc"
        ],
        padding: [15, 10, 0, 15],
        enableScroll: true,
        legend: {},
        xAxis: {
          axisLine: true,
          disableGrid: true,
          scrollShow: true,
          itemCount: 4,
          rotateLabel: true
        },
        yAxis: {
          disabled: false,
          min: 0,
          max: 200,
          splitNumber: 1,
          gridType: "dash",
          dashLength: 2,
          padding: 20
        },
        extra: {
          markLine: {
            data: [{
              value: 130,
              showLabel: true,
              lineColor: "#E8FA43",
              labelText: "130"
            }, {
              value: 80,
              showLabel: true,
              lineColor: "#E8FA43",
              labelText: "80"
            }, {
              value: 140,
              showLabel: true,
              lineColor: "#FF1C6B",
              labelText: "140"
            }, {
              value: 90,
              showLabel: true,
              lineColor: "#FF1C6B",
              labelText: "90"
            }]
          },
          line: {
            type: "straight",
            width: 2
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    changeLog(e) {
      console.log("change\u4E8B\u4EF6:", e);
    },
    submit() {
      console.log("target submit");
    },
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["13", "14", "15", "16", "17", "18"],
          series: [
            {
              name: "\u4F4E\u538B",
              data: [65, 35, 81, 75, 73, 72]
            },
            {
              name: "\u9AD8\u538B",
              data: [110, 145, 155, 121, 122, 112]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_qiun_data_charts2 + _easycom_uni_number_box2 + _component_uni_section)();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_qiun_data_charts + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "line",
      opts: $data.opts,
      chartData: $data.chartData,
      ontouch: true
    }),
    b: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    c: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    d: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    e: common_vendor.o(_ctx.blur),
    f: common_vendor.o(_ctx.focus),
    g: common_vendor.o(_ctx.changeValue),
    h: common_vendor.o(($event) => _ctx.heartRate = $event),
    i: common_vendor.p({
      modelValue: _ctx.heartRate
    }),
    j: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.heartRate,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/BpChart/BpChart.vue"]]);
wx.createPage(MiniProgramPage);
