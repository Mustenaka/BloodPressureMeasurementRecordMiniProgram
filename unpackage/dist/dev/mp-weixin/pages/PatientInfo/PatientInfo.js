"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      placeholderStyle: "color:#5BBD8C;font-size:14px",
      styles: {
        color: "#000000",
        borderColor: "#2979FF"
      },
      patientInfo: {
        RealName: "",
        Sex: "",
        Birthday: "",
        Tel: "",
        IsMarried: "",
        HbpYears: 0,
        Anamnesis: "\u6682\u65E0",
        IsSmoking: "",
        SmokingHistory: 0,
        SmokingDaily: 0,
        IsDrink: "",
        DrinkHistory: 0,
        DrinkDaily: 0,
        PatientHeight: 0,
        PatientWeight: 0,
        PatientWaistCircumference: 0,
        PatientChestCircumference: 0,
        PatientHipCircumference: 0,
        IsTakeChineseMedicine: "",
        AntihypertensivePlan: "\u65E0\u65B9\u6848",
        IsNondrugControlPlan: "",
        NondrugControlPlan: "\u65E0\u65B9\u6848"
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
    this.getData();
  },
  methods: {
    changeValue_HbpYears(value) {
      this.patientInfo.HbpYears = value;
    },
    changeValue_SmokingHistory(value) {
      this.patientInfo.SmokingHistory = value;
    },
    changeValue_SmokingDaily(value) {
      this.patientInfo.SmokingDaily = value;
    },
    changeValue_DrinkHistory(value) {
      this.patientInfo.DrinkHistory = value;
    },
    changeValue_DrinkDaily(value) {
      this.patientInfo.DrinkDaily = value;
    },
    changeValue_PatientHeight(value) {
      this.patientInfo.PatientHeight = value;
    },
    changeValue_PatientWeight(value) {
      this.patientInfo.PatientWeight = value;
    },
    changeValue_PatientWaistCircumference(value) {
      this.patientInfo.PatientWaistCircumference = value;
    },
    changeValue_PatientChestCircumference(value) {
      this.patientInfo.PatientChestCircumference = value;
    },
    changeValue_PatientHipCircumference(value) {
      this.patientInfo.DrinkDaily = value;
    },
    submitTest() {
      console.log("Test button:" + this.patientInfo.SmokingHistory);
    },
    getData() {
      const url = "v1/user/patientinfo";
      this.$http.sendRequest(url, "GET", {}).then((res) => {
        console.log(res);
        var data = res.data.data;
        this.patientInfo.RealName = data.real_name;
        this.patientInfo.Sex = data.sex;
        this.patientInfo.Birthday = data.birthday.slice(0, 10);
        this.patientInfo.Tel = data.tel;
        this.patientInfo.IsMarried = data.is_married;
        this.patientInfo.HbpYears = data.hbp_years;
        this.patientInfo.Anamnesis = data.anamnesis;
        this.patientInfo.IsSmoking = data.is_smoking;
        this.patientInfo.SmokingHistory = data.smoking_history;
        this.patientInfo.SmokingDaily = data.smoking_daily;
        this.patientInfo.IsDrink = data.is_drink;
        this.patientInfo.DrinkHistory = data.drink_history;
        this.patientInfo.DrinkDaily = data.drink_daily;
        this.patientInfo.PatientHeight = data.patient_height;
        this.patientInfo.PatientWeight = data.patient_weight;
        this.patientInfo.PatientWaistCircumference = data.patient_waist_circumference;
        this.patientInfo.PatientChestCircumference = data.patient_chest_circumference;
        this.patientInfo.PatientHipCircumference = data.patient_hip_circumference;
        this.patientInfo.IsTakeChineseMedicine = data.is_take_chinese_medicine;
        this.patientInfo.AntihypertensivePlan = data.antihypertensive_plan;
        this.patientInfo.IsNondrugControlPlan = data.is_nondrug_control_plan;
        this.patientInfo.NondrugControlPlan = data.nondrug_control_plan;
      }).catch((err) => {
        console.log(err);
        console.log("\u8BF7\u6C42\u5931\u8D25\uFF0C\u672C\u9875\u9762\u5C06\u8BA4\u4E3A\u662F\u7B2C\u4E00\u6B21\u83B7\u53D6");
      });
    },
    submit() {
      const url = "v1/user/wxpatientinfo";
      var submitData = {
        "real_name": this.patientInfo.RealName,
        "sex": this.patientInfo.Sex,
        "birthday": this.patientInfo.Birthday,
        "tel": this.patientInfo.Tel,
        "is_married": this.patientInfo.IsMarried,
        "hbp_years": this.patientInfo.HbpYears,
        "anamnesis": this.patientInfo.Anamnesis,
        "is_smoking": this.patientInfo.IsSmoking,
        "smoking_history": this.patientInfo.SmokingHistory,
        "smoking_daily": this.patientInfo.SmokingDaily,
        "is_drink": this.patientInfo.IsDrink,
        "drink_history": this.patientInfo.DrinkHistory,
        "drink_daily": this.patientInfo.DrinkDaily,
        "patient_height": this.patientInfo.PatientHeight,
        "patient_weight": this.patientInfo.PatientWeight,
        "patient_waist_circumference": this.patientInfo.PatientWaistCircumference,
        "patient_chest_circumference": this.patientInfo.PatientChestCircumference,
        "patient_hip_circumference": this.patientInfo.PatientHipCircumference,
        "is_take_chinese_medicine": this.patientInfo.IsTakeChineseMedicine,
        "antihypertensive_plan": this.patientInfo.AntihypertensivePlan,
        "is_nondrug_control_plan": this.patientInfo.IsNondrugControlPlan,
        "nondrug_control_plan": this.patientInfo.NondrugControlPlan
      };
      this.$http.sendRequest(url, "POST", submitData).then((res) => {
        console.log(res);
        if (res.statusCode == 400) {
          common_vendor.index.showToast({
            title: "\u65B0\u589E\u60A3\u8005\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u4FE1\u606F\u662F\u5426\u586B\u5199\u5B8C\u6574",
            icon: "none"
          });
          return;
        }
        common_vendor.index.showToast({
          title: "\u5F55\u5165\u6210\u529F",
          icon: "none"
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u5931\u8D25",
          icon: "none"
        });
      });
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
    a: common_vendor.o(($event) => $data.patientInfo.RealName = $event),
    b: common_vendor.p({
      styles: $data.styles,
      placeholderStyle: $data.placeholderStyle,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.RealName
    }),
    c: common_vendor.p({
      title: "\u60A3\u8005\u59D3\u540D",
      type: "line",
      padding: true
    }),
    d: common_vendor.o(($event) => $data.patientInfo.Sex = $event),
    e: common_vendor.p({
      localdata: $data.sex,
      modelValue: $data.patientInfo.Sex
    }),
    f: common_vendor.p({
      title: "\u6027\u522B",
      type: "line"
    }),
    g: common_vendor.o(($event) => $data.patientInfo.Birthday = $event),
    h: common_vendor.p({
      type: "date",
      modelValue: $data.patientInfo.Birthday
    }),
    i: common_vendor.o(($event) => $data.patientInfo.IsMarried = $event),
    j: common_vendor.p({
      localdata: $data.marriage,
      modelValue: $data.patientInfo.IsMarried
    }),
    k: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    l: common_vendor.o($options.changeValue_HbpYears),
    m: common_vendor.p({
      value: $data.patientInfo.HbpYears
    }),
    n: common_vendor.p({
      title: _ctx.\u9AD8\u8840\u538B\u5E74\u4EFD,
      type: "line",
      padding: true
    }),
    o: common_vendor.o(($event) => $data.patientInfo.Anamnesis = $event),
    p: common_vendor.p({
      styles: $data.styles,
      placeholderStyle: $data.placeholderStyle,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.Anamnesis
    }),
    q: common_vendor.p({
      title: "\u65E2\u5F80\u75C5\u53F2",
      type: "line",
      padding: true
    }),
    r: common_vendor.o(($event) => $data.patientInfo.IsSmoking = $event),
    s: common_vendor.p({
      localdata: $data.isSmoke,
      modelValue: $data.patientInfo.IsSmoking
    }),
    t: common_vendor.p({
      title: "\u5355\u9009",
      type: "line"
    }),
    v: common_vendor.o($options.changeValue_SmokingHistory),
    w: common_vendor.p({
      value: $data.patientInfo.SmokingHistory
    }),
    x: common_vendor.p({
      title: "\u5438\u70DF\u53F2\uFF08\u5E74\u4EFD\uFF09",
      type: "line",
      padding: true
    }),
    y: common_vendor.o($options.changeValue_SmokingDaily),
    z: common_vendor.p({
      value: $data.patientInfo.SmokingDaily
    }),
    A: common_vendor.p({
      title: "\u65E5\u5438\u70DF\u6570",
      type: "line",
      padding: true
    }),
    B: common_vendor.o(($event) => $data.patientInfo.IsDrink = $event),
    C: common_vendor.p({
      localdata: $data.isDrink,
      modelValue: $data.patientInfo.IsDrink
    }),
    D: common_vendor.p({
      title: "\u662F\u5426\u996E\u9152",
      type: "line"
    }),
    E: common_vendor.o($options.changeValue_DrinkHistory),
    F: common_vendor.p({
      value: $data.patientInfo.DrinkHistory
    }),
    G: common_vendor.p({
      title: "\u996E\u9152\u53F2\uFF08\u5E74\u4EFD\uFF09",
      type: "line",
      padding: true
    }),
    H: common_vendor.o($options.changeValue_DrinkDaily),
    I: common_vendor.p({
      value: $data.patientInfo.DrinkDaily
    }),
    J: common_vendor.p({
      title: "\u6BCF\u65E5\u996E\u9152\u91CF",
      type: "line",
      padding: true
    }),
    K: common_vendor.o($options.changeValue_PatientHeight),
    L: common_vendor.p({
      value: $data.patientInfo.PatientHeight,
      min: 0,
      max: 1e3
    }),
    M: common_vendor.p({
      title: "\u8EAB\u9AD8",
      type: "line",
      padding: true
    }),
    N: common_vendor.o($options.changeValue_PatientWeight),
    O: common_vendor.p({
      value: $data.patientInfo.PatientWeight,
      min: 0,
      max: 1e3
    }),
    P: common_vendor.p({
      title: "\u4F53\u91CD",
      type: "line",
      padding: true
    }),
    Q: common_vendor.o($options.changeValue_PatientWaistCircumference),
    R: common_vendor.p({
      value: $data.patientInfo.PatientWaistCircumference,
      min: 0,
      max: 1e3
    }),
    S: common_vendor.p({
      title: "\u8170\u56F4",
      type: "line",
      padding: true
    }),
    T: common_vendor.o($options.changeValue_PatientChestCircumference),
    U: common_vendor.p({
      value: $data.patientInfo.PatientChestCircumference,
      min: 0,
      max: 1e3
    }),
    V: common_vendor.p({
      title: "\u80F8\u56F4",
      type: "line",
      padding: true
    }),
    W: common_vendor.o($options.changeValue_PatientHipCircumference),
    X: common_vendor.p({
      value: $data.patientInfo.PatientHipCircumference,
      min: 0,
      max: 1e3
    }),
    Y: common_vendor.p({
      title: "\u81C0\u56F4",
      type: "line",
      padding: true
    }),
    Z: common_vendor.o(($event) => $data.patientInfo.IsTakeChineseMedicine = $event),
    aa: common_vendor.p({
      localdata: $data.isUseChineseMedical,
      modelValue: $data.patientInfo.IsTakeChineseMedicine
    }),
    ab: common_vendor.p({
      title: "\u662F\u5426\u670D\u7528\u4E2D\u836F",
      type: "line"
    }),
    ac: common_vendor.o(($event) => $data.patientInfo.AntihypertensivePlan = $event),
    ad: common_vendor.p({
      styles: $data.styles,
      placeholderStyle: $data.placeholderStyle,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.AntihypertensivePlan
    }),
    ae: common_vendor.p({
      title: "\u964D\u538B\u65B9\u6848",
      type: "line",
      padding: true
    }),
    af: common_vendor.o(($event) => $data.patientInfo.IsNondrugControlPlan = $event),
    ag: common_vendor.p({
      localdata: $data.isUseNondrugTreatments,
      modelValue: $data.patientInfo.IsNondrugControlPlan
    }),
    ah: common_vendor.p({
      title: "\u662F\u5426\u975E\u836F\u7269\u63A7\u5236\u624B\u6BB5",
      type: "line"
    }),
    ai: common_vendor.o(($event) => $data.patientInfo.NondrugControlPlan = $event),
    aj: common_vendor.p({
      styles: $data.styles,
      placeholderStyle: $data.placeholderStyle,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.patientInfo.NondrugControlPlan
    }),
    ak: common_vendor.p({
      title: "\u975E\u836F\u7269\u63A7\u5236\u624B\u6BB5",
      padding: true
    }),
    al: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/Go/BloodPressureMeasurementRecordMiniProgram/pages/PatientInfo/PatientInfo.vue"]]);
wx.createPage(MiniProgramPage);
