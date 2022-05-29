"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      RealName: "",
      Sex: "",
      Birthday: "",
      Tel: "",
      IsMarried: "",
      HbpYears: "",
      Anamnesis: "",
      IsSmoking: "",
      SmokingHistory: "",
      SmokingDaily: "",
      IsDrink: "",
      DrinkHistory: "",
      DrinkDaily: "",
      PatientHeight: "",
      PatientWeight: "",
      PatientWaistCircumference: "",
      PatientChestCircumference: "",
      PatientHipCircumference: "",
      IsTakeChineseMedicine: "",
      AntihypertensivePlan: "",
      IsNondrugControlPlan: "",
      NondrugControlPlan: ""
    };
  },
  methods: {
    changeLog(e) {
      console.log("change\u4E8B\u4EF6:", e);
    },
    submit() {
      console.log("target submit");
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_easyinput2 + _component_uni_section + _easycom_uni_datetime_picker2 + _easycom_uni_number_box2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_datetime_picker + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => $data.RealName = $event),
    c: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    d: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => $data.RealName = $event),
    g: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    h: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    i: common_vendor.o($options.changeLog),
    j: common_vendor.o(($event) => _ctx.datetimesingle = $event),
    k: common_vendor.p({
      type: "date",
      modelValue: _ctx.datetimesingle
    }),
    l: common_vendor.o(_ctx.blur),
    m: common_vendor.o(_ctx.focus),
    n: common_vendor.o(_ctx.changeValue),
    o: common_vendor.o(($event) => _ctx.lowBP = $event),
    p: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    q: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    r: common_vendor.o(_ctx.input),
    s: common_vendor.o(($event) => $data.RealName = $event),
    t: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    v: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    w: common_vendor.o(_ctx.blur),
    x: common_vendor.o(_ctx.focus),
    y: common_vendor.o(_ctx.changeValue),
    z: common_vendor.o(($event) => _ctx.lowBP = $event),
    A: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    B: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    C: common_vendor.o(_ctx.blur),
    D: common_vendor.o(_ctx.focus),
    E: common_vendor.o(_ctx.changeValue),
    F: common_vendor.o(($event) => _ctx.lowBP = $event),
    G: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    H: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    I: common_vendor.o(_ctx.blur),
    J: common_vendor.o(_ctx.focus),
    K: common_vendor.o(_ctx.changeValue),
    L: common_vendor.o(($event) => _ctx.lowBP = $event),
    M: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    N: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    O: common_vendor.o(_ctx.blur),
    P: common_vendor.o(_ctx.focus),
    Q: common_vendor.o(_ctx.changeValue),
    R: common_vendor.o(($event) => _ctx.lowBP = $event),
    S: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    T: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    U: common_vendor.o(_ctx.blur),
    V: common_vendor.o(_ctx.focus),
    W: common_vendor.o(_ctx.changeValue),
    X: common_vendor.o(($event) => _ctx.lowBP = $event),
    Y: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    Z: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    aa: common_vendor.o(_ctx.blur),
    ab: common_vendor.o(_ctx.focus),
    ac: common_vendor.o(_ctx.changeValue),
    ad: common_vendor.o(($event) => _ctx.lowBP = $event),
    ae: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    af: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    ag: common_vendor.o(_ctx.blur),
    ah: common_vendor.o(_ctx.focus),
    ai: common_vendor.o(_ctx.changeValue),
    aj: common_vendor.o(($event) => _ctx.lowBP = $event),
    ak: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    al: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    am: common_vendor.o(_ctx.blur),
    an: common_vendor.o(_ctx.focus),
    ao: common_vendor.o(_ctx.changeValue),
    ap: common_vendor.o(($event) => _ctx.lowBP = $event),
    aq: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    ar: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    as: common_vendor.o(_ctx.blur),
    at: common_vendor.o(_ctx.focus),
    av: common_vendor.o(_ctx.changeValue),
    aw: common_vendor.o(($event) => _ctx.lowBP = $event),
    ax: common_vendor.p({
      modelValue: _ctx.lowBP
    }),
    ay: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + _ctx.lowBP,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    az: common_vendor.o(_ctx.input),
    aA: common_vendor.o(($event) => $data.RealName = $event),
    aB: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    aC: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    aD: common_vendor.o(_ctx.input),
    aE: common_vendor.o(($event) => $data.RealName = $event),
    aF: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.RealName
    }),
    aG: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    aH: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/PatientInfo/PatientInfo.vue"]]);
wx.createPage(MiniProgramPage);
