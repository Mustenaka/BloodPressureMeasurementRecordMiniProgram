"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      patientInfo: {
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
      },
      sex: [{
        text: "\u7537",
        value: "\u7537"
      }, {
        text: "\u5973",
        value: "\u5973"
      }, {
        text: "\u5176\u4ED6",
        value: "\u5176\u4ED6"
      }],
      marriage: [{
        text: "\u5DF2\u5A5A",
        value: true
      }, {
        text: "\u672A\u5A5A",
        value: false
      }],
      isSmoke: [{
        text: "\u5438\u70DF",
        value: true
      }, {
        text: "\u4E0D\u5438\u70DF",
        value: false
      }],
      isDrink: [{
        text: "\u996E\u9152",
        value: true
      }, {
        text: "\u4E0D\u996E\u9152",
        value: false
      }],
      isUseChineseMedical: [{
        text: "\u670D\u7528",
        value: true
      }, {
        text: "\u4E0D\u670D\u7528",
        value: false
      }],
      isUseNondrugTreatments: [{
        text: "\u91C7\u7528",
        value: true
      }, {
        text: "\u4E0D\u91C7\u7528",
        value: false
      }]
    };
  },
  onLoad() {
    console.log("\u52A0\u8F7D\u9875\u9762\u524D\u89E6\u53D1");
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
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_easyinput2 + _component_uni_section + _easycom_uni_data_checkbox2 + _easycom_uni_datetime_picker2 + _easycom_uni_number_box2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_data_checkbox + _easycom_uni_datetime_picker + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => $data.patientInfo.RealName = $event),
    c: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.RealName
    }),
    d: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    e: common_vendor.o(($event) => $data.patientInfo.Sex = $event),
    f: common_vendor.p({
      localdata: $data.sex,
      modelValue: $data.patientInfo.Sex
    }),
    g: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    h: common_vendor.o($options.changeLog),
    i: common_vendor.o(($event) => $data.patientInfo.Birthday = $event),
    j: common_vendor.p({
      type: "date",
      modelValue: $data.patientInfo.Birthday
    }),
    k: common_vendor.o(_ctx.input),
    l: common_vendor.o(($event) => $data.patientInfo.Tel = $event),
    m: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.Tel
    }),
    n: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    o: common_vendor.o(($event) => $data.patientInfo.IsMarried = $event),
    p: common_vendor.p({
      localdata: $data.marriage,
      modelValue: $data.patientInfo.IsMarried
    }),
    q: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    r: common_vendor.o(_ctx.blur),
    s: common_vendor.o(_ctx.focus),
    t: common_vendor.o(_ctx.changeValue),
    v: common_vendor.o(($event) => $data.patientInfo.HbpYears = $event),
    w: common_vendor.p({
      modelValue: $data.patientInfo.HbpYears
    }),
    x: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.HbpYears,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    y: common_vendor.o(_ctx.input),
    z: common_vendor.o(($event) => $data.patientInfo.Anamnesis = $event),
    A: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.Anamnesis
    }),
    B: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    C: common_vendor.o(($event) => $data.patientInfo.IsSmoking = $event),
    D: common_vendor.p({
      localdata: $data.isSmoke,
      modelValue: $data.patientInfo.IsSmoking
    }),
    E: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    F: common_vendor.o(_ctx.blur),
    G: common_vendor.o(_ctx.focus),
    H: common_vendor.o(_ctx.changeValue),
    I: common_vendor.o(($event) => $data.patientInfo.SmokingHistory = $event),
    J: common_vendor.p({
      modelValue: $data.patientInfo.SmokingHistory
    }),
    K: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.SmokingHistory,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    L: common_vendor.o(_ctx.blur),
    M: common_vendor.o(_ctx.focus),
    N: common_vendor.o(_ctx.changeValue),
    O: common_vendor.o(($event) => $data.patientInfo.SmokingDaily = $event),
    P: common_vendor.p({
      modelValue: $data.patientInfo.SmokingDaily
    }),
    Q: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.SmokingDaily,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    R: common_vendor.o(($event) => $data.patientInfo.IsDrink = $event),
    S: common_vendor.p({
      localdata: $data.isDrink,
      modelValue: $data.patientInfo.IsDrink
    }),
    T: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    U: common_vendor.o(_ctx.blur),
    V: common_vendor.o(_ctx.focus),
    W: common_vendor.o(_ctx.changeValue),
    X: common_vendor.o(($event) => $data.patientInfo.DrinkHistory = $event),
    Y: common_vendor.p({
      modelValue: $data.patientInfo.DrinkHistory
    }),
    Z: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.DrinkHistory,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    aa: common_vendor.o(_ctx.blur),
    ab: common_vendor.o(_ctx.focus),
    ac: common_vendor.o(_ctx.changeValue),
    ad: common_vendor.o(($event) => $data.patientInfo.DrinkDaily = $event),
    ae: common_vendor.p({
      modelValue: $data.patientInfo.DrinkDaily
    }),
    af: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.DrinkDaily,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    ag: common_vendor.o(_ctx.blur),
    ah: common_vendor.o(_ctx.focus),
    ai: common_vendor.o(_ctx.changeValue),
    aj: common_vendor.o(($event) => $data.patientInfo.PatientHeight = $event),
    ak: common_vendor.p({
      modelValue: $data.patientInfo.PatientHeight
    }),
    al: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.PatientHeight,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    am: common_vendor.o(_ctx.blur),
    an: common_vendor.o(_ctx.focus),
    ao: common_vendor.o(_ctx.changeValue),
    ap: common_vendor.o(($event) => $data.patientInfo.PatientWeight = $event),
    aq: common_vendor.p({
      modelValue: $data.patientInfo.PatientWeight
    }),
    ar: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.PatientWeight,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    as: common_vendor.o(_ctx.blur),
    at: common_vendor.o(_ctx.focus),
    av: common_vendor.o(_ctx.changeValue),
    aw: common_vendor.o(($event) => $data.patientInfo.PatientWaistCircumference = $event),
    ax: common_vendor.p({
      modelValue: $data.patientInfo.PatientWaistCircumference
    }),
    ay: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.PatientWaistCircumference,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    az: common_vendor.o(_ctx.blur),
    aA: common_vendor.o(_ctx.focus),
    aB: common_vendor.o(_ctx.changeValue),
    aC: common_vendor.o(($event) => $data.patientInfo.PatientChestCircumference = $event),
    aD: common_vendor.p({
      modelValue: $data.patientInfo.PatientChestCircumference
    }),
    aE: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.PatientChestCircumference,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    aF: common_vendor.o(_ctx.blur),
    aG: common_vendor.o(_ctx.focus),
    aH: common_vendor.o(_ctx.changeValue),
    aI: common_vendor.o(($event) => $data.patientInfo.PatientHipCircumference = $event),
    aJ: common_vendor.p({
      modelValue: $data.patientInfo.PatientHipCircumference
    }),
    aK: common_vendor.p({
      title: "\u4F7F\u7528v-model : " + $data.patientInfo.PatientHipCircumference,
      subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
      type: "line",
      padding: true
    }),
    aL: common_vendor.o(($event) => $data.patientInfo.IsTakeChineseMedicine = $event),
    aM: common_vendor.p({
      localdata: $data.isUseChineseMedical,
      modelValue: $data.patientInfo.IsTakeChineseMedicine
    }),
    aN: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    aO: common_vendor.o(_ctx.input),
    aP: common_vendor.o(($event) => $data.patientInfo.AntihypertensivePlan = $event),
    aQ: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.AntihypertensivePlan
    }),
    aR: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    aS: common_vendor.o(($event) => $data.patientInfo.IsNondrugControlPlan = $event),
    aT: common_vendor.p({
      localdata: $data.isUseNondrugTreatments,
      modelValue: $data.patientInfo.IsNondrugControlPlan
    }),
    aU: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    aV: common_vendor.o(_ctx.input),
    aW: common_vendor.o(($event) => $data.patientInfo.NondrugControlPlan = $event),
    aX: common_vendor.p({
      errorMessage: true,
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.NondrugControlPlan
    }),
    aY: common_vendor.p({
      title: "\u9ED8\u8BA4",
      subTitle: "\u4F7F\u7528 focus \u5C5E\u6027\u81EA\u52A8\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9",
      type: "line",
      padding: true
    }),
    aZ: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/PatientInfo/PatientInfo.vue"]]);
wx.createPage(MiniProgramPage);
