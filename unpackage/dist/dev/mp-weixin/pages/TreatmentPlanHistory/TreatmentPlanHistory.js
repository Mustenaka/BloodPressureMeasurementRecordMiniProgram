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
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _component_uni_section)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.TreatmentArray, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.date),
        c: "2f54c680-1-" + i0 + "," + ("2f54c680-0-" + i0),
        d: common_vendor.o(($event) => item.value = $event),
        e: common_vendor.p({
          disabled: true,
          type: "textarea",
          autoHeight: true,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          modelValue: item.value
        }),
        f: "2f54c680-0-" + i0
      };
    }),
    b: common_vendor.p({
      title: "\u6211\u7684\u5386\u53F2\u6CBB\u7597\u65B9\u6848",
      type: "line",
      padding: true
    }),
    c: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/TreatmentPlanHistory/TreatmentPlanHistory.vue"]]);
wx.createPage(MiniProgramPage);
