"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      TreatmentArray: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "v1/user/treatmentplan?limit_count=0";
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        for (var item of res.data.data) {
          var create_time = item.create_datetime.slice(0, 10) + " " + item.create_datetime.slice(11, 16);
          var detail = {
            date: create_time,
            value: item.plan
          };
          this.TreatmentArray.push(detail);
        }
        var res2 = {
          categories,
          series
        };
        this.chartData = JSON.parse(JSON.stringify(res2));
      }).catch((err) => {
        console.log(err);
      });
    },
    submit() {
      common_vendor.index.navigateTo({
        url: "/pages/TreatmentPlan/TreatmentPlan",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.TreatmentArray, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.date),
        c: common_vendor.t(item.value)
      };
    }),
    b: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TreatmentPlanHistory/TreatmentPlanHistory.vue"]]);
wx.createPage(MiniProgramPage);
