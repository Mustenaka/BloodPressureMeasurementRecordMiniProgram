"use strict";var e=require("../../common/vendor.js");const t={data:()=>({value:""}),methods:{submit(){this.$http.sendRequest("http://1.117.222.119/v1/user/treatmentplan","POST",{plan:this.value,note:"无"}).then((t=>{console.log(t),e.index.showToast({title:"录入成功",icon:"none"}),this.toHistory()})).catch((t=>{console.log(t),e.index.showToast({title:"请求失败",icon:"none"})}))},toHistory(){e.index.navigateTo({url:"/pages/TreatmentPlanHistory/TreatmentPlanHistory",animationType:"pop-in",animationDuration:200})}}};if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-section"))()}Math;var n=e._export_sfc(t,[["render",function(t,n,o,a,i,s){return{a:e.o((e=>i.value=e)),b:e.p({type:"textarea",autoHeight:!0,placeholder:"请输入内容",modelValue:i.value}),c:e.p({title:"创建新的治疗方案",type:"line",padding:!0}),d:e.o(((...e)=>s.submit&&s.submit(...e)))}}]]);wx.createPage(n);