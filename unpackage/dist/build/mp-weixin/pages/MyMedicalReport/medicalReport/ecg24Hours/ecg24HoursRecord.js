"use strict";var e=require("../../../../common/vendor.js");const t={data:()=>({record:{data:"",average:0,createAt:""}}),methods:{dataChange(e){this.record.average=e},submit(){console.log("数据"+this.record.data),this.$http.sendRequest("v1/user/mr24hoursecg","POST",{data:this.record.data,average:this.record.average}).then((t=>{console.log(t),e.index.showToast({title:"录入成功",icon:"none"})})).catch((t=>{console.log(t),e.index.showToast({title:"请求失败",icon:"none"})}))}}};if(!Array){(e.resolveComponent("uni-section")+e.resolveComponent("uni-datetime-picker")+e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-number-box"))()}Math||((()=>"../../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js")+(()=>"../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js"))();var o=e._export_sfc(t,[["render",function(t,o,n,a,r,i){return{a:e.p({title:"日期时间："+r.record.createAt,type:"line"}),b:e.o((e=>r.record.createAt=e)),c:e.p({type:"date",modelValue:r.record.createAt}),d:e.o((e=>r.record.data=e)),e:e.p({type:"textarea",autoHeight:!0,placeholder:"请输入内容",modelValue:r.record.data}),f:e.p({title:"创建新的心电图数据",type:"line",padding:!0}),g:e.o(i.dataChange),h:e.p({value:r.record.average,min:0,max:5e4}),i:e.p({title:"低压记录: "+r.record.average,type:"line",padding:!0}),j:e.o(((...e)=>i.submit&&i.submit(...e)))}}]]);wx.createPage(o);
