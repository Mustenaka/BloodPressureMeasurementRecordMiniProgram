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
      },
      daysCount: 60,
      limit_days: 1
    };
  },
  onReady() {
    this.submit();
  },
  methods: {
    valueChange(value) {
      this.daysCount = value;
    },
    submit7days() {
      this.limit_days = 7;
      this.submit();
    },
    submit30days() {
      this.limit_days = 30;
      this.submit();
    },
    submitCustomizedays() {
      this.limit_days = this.daysCount;
      this.submit();
    },
    submit() {
      const url = "v1/user/bprecord?limit_days=" + this.limit_days;
      console.log(this.limit_days);
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        var categories = [];
        var series = [
          {
            name: "\u4F4E\u538B",
            data: []
          },
          {
            name: "\u9AD8\u538B",
            data: []
          }
        ];
        for (var item of res.data.data) {
          var date = item.record_date.split("T")[0];
          var simpledate = date.split("-")[1] + "-" + date.split("-")[2];
          var datetime = simpledate + " " + item.record_time;
          categories.push(datetime);
          series[0].data.push(item.low_pressure);
          series[1].data.push(item.high_pressure);
        }
        var res2 = {
          categories,
          series
        };
        this.chartData = JSON.parse(JSON.stringify(res2));
      }).catch((err) => {
        console.log(err);
      });
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
      ontouch: true,
      canvas2d: true
    }),
    b: common_vendor.o((...args) => $options.submit7days && $options.submit7days(...args)),
    c: common_vendor.o((...args) => $options.submit30days && $options.submit30days(...args)),
    d: common_vendor.o((...args) => $options.submitCustomizedays && $options.submitCustomizedays(...args)),
    e: common_vendor.o($options.valueChange),
    f: common_vendor.p({
      value: $data.daysCount,
      min: 0,
      max: 360
    }),
    g: common_vendor.p({
      title: "\u81EA\u5B9A\u4E49\u5929\u6570: " + $data.daysCount,
      type: "line",
      padding: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/BpChart/BpChart.vue"]]);
wx.createPage(MiniProgramPage);
