"use strict";var e=require("../../../../common/vendor.js"),t=require("./i18n/index.js");const{t:a}=e.initVueI18n(t.messages),i={name:"UniDatetimePicker",components:{calendar:()=>"./calendar.js",timePicker:()=>"./time-picker.js"},data:()=>({isRange:!1,hasTime:!1,mobileRange:!1,singleVal:"",tempSingleDate:"",defSingleDate:"",time:"",caleRange:{startDate:"",startTime:"",endDate:"",endTime:""},range:{startDate:"",endDate:""},tempRange:{startDate:"",startTime:"",endDate:"",endTime:""},startMultipleStatus:{before:"",after:"",data:[],fulldate:""},endMultipleStatus:{before:"",after:"",data:[],fulldate:""},visible:!1,popup:!1,popover:null,isEmitValue:!1,isPhone:!1,isFirstShow:!0}),props:{type:{type:String,default:"datetime"},value:{type:[String,Number,Array,Date],default:""},modelValue:{type:[String,Number,Array,Date],default:""},start:{type:[Number,String],default:""},end:{type:[Number,String],default:""},returnType:{type:String,default:"string"},placeholder:{type:String,default:""},startPlaceholder:{type:String,default:""},endPlaceholder:{type:String,default:""},rangeSeparator:{type:String,default:"-"},border:{type:[Boolean],default:!0},disabled:{type:[Boolean],default:!1},clearIcon:{type:[Boolean],default:!0},hideSecond:{type:[Boolean],default:!1}},watch:{type:{immediate:!0,handler(e,t){-1!==e.indexOf("time")?this.hasTime=!0:this.hasTime=!1,-1!==e.indexOf("range")?this.isRange=!0:this.isRange=!1}},modelValue:{immediate:!0,handler(e,t){this.isEmitValue?this.isEmitValue=!1:this.initPicker(e)}},start:{immediate:!0,handler(e,t){if(!e)return;const{defDate:a,defTime:i}=this.parseDate(e);this.caleRange.startDate=a,this.hasTime&&(this.caleRange.startTime=i)}},end:{immediate:!0,handler(e,t){if(!e)return;const{defDate:a,defTime:i}=this.parseDate(e);this.caleRange.endDate=a,this.hasTime&&(this.caleRange.endTime=i)}}},computed:{reactStartTime(){return(this.isRange?this.tempRange.startDate:this.tempSingleDate)===this.caleRange.startDate?this.caleRange.startTime:""},reactEndTime(){return(this.isRange?this.tempRange.endDate:this.tempSingleDate)===this.caleRange.endDate?this.caleRange.endTime:""},reactMobDefTime(){const e={start:this.tempRange.startTime,end:this.tempRange.endTime};return this.isRange?e:this.time},mobSelectableTime(){return{start:this.caleRange.startTime,end:this.caleRange.endTime}},datePopupWidth(){return this.isRange?653:301},singlePlaceholderText(){return this.placeholder||("date"===this.type?this.selectDateText:a("uni-datetime-picker.selectDateTime"))},startPlaceholderText(){return this.startPlaceholder||this.startDateText},endPlaceholderText(){return this.endPlaceholder||this.endDateText},selectDateText:()=>a("uni-datetime-picker.selectDate"),selectTimeText:()=>a("uni-datetime-picker.selectTime"),startDateText(){return this.startPlaceholder||a("uni-datetime-picker.startDate")},startTimeText:()=>a("uni-datetime-picker.startTime"),endDateText(){return this.endPlaceholder||a("uni-datetime-picker.endDate")},endTimeText:()=>a("uni-datetime-picker.endTime"),okText:()=>a("uni-datetime-picker.ok"),clearText:()=>a("uni-datetime-picker.clear"),showClearIcon(){const{clearIcon:e,disabled:t,singleVal:a,range:i}=this;return e&&!t&&(a||i.startDate&&i.endDate)}},created(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem")},mounted(){this.platform()},methods:{getForm(e="uniForms"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},initPicker(e){if(!e||Array.isArray(e)&&!e.length)this.$nextTick((()=>{this.clear(!1)}));else if(Array.isArray(e)||this.isRange){const[t,a]=e;if(!t&&!a)return;const i=this.parseDate(t),s=this.parseDate(a),n=i.defDate,r=s.defDate;this.range.startDate=this.tempRange.startDate=n,this.range.endDate=this.tempRange.endDate=r,this.hasTime&&(this.range.startDate=i.defDate+" "+i.defTime,this.range.endDate=s.defDate+" "+s.defTime,this.tempRange.startTime=i.defTime,this.tempRange.endTime=s.defTime);const h={before:i.defDate,after:s.defDate};this.startMultipleStatus=Object.assign({},this.startMultipleStatus,h,{which:"right"}),this.endMultipleStatus=Object.assign({},this.endMultipleStatus,h,{which:"left"})}else{const{defDate:t,defTime:a}=this.parseDate(e);this.singleVal=t,this.tempSingleDate=t,this.defSingleDate=t,this.hasTime&&(this.singleVal=t+" "+a,this.time=a)}},updateLeftCale(e){const t=this.$refs.left;t.cale.setHoverMultiple(e.after),t.setDate(this.$refs.left.nowDate.fullDate)},updateRightCale(e){const t=this.$refs.right;t.cale.setHoverMultiple(e.after),t.setDate(this.$refs.right.nowDate.fullDate)},platform(){const t=e.index.getSystemInfoSync();this.isPhone=t.windowWidth<=500,this.windowWidth=t.windowWidth},show(t){if(this.disabled)return;if(this.platform(),this.isPhone)return void this.$refs.mobile.open();this.popover={top:"10px"};e.index.createSelectorQuery().in(this).select(".uni-date-editor").boundingClientRect((e=>{this.windowWidth-e.left<this.datePopupWidth&&(this.popover.right=0)})).exec(),setTimeout((()=>{if(this.popup=!this.popup,!this.isPhone&&this.isRange&&this.isFirstShow){this.isFirstShow=!1;const{startDate:e,endDate:t}=this.range;e&&t?this.diffDate(e,t)<30&&this.$refs.right.next():(this.$refs.right.next(),this.$refs.right.cale.lastHover=!1)}}),50)},close(){setTimeout((()=>{this.popup=!1,this.$emit("maskClick",this.value)}),20)},setEmit(e){"timestamp"!==this.returnType&&"date"!==this.returnType||(Array.isArray(e)?(this.hasTime||(e[0]=e[0]+" 00:00:00",e[1]=e[1]+" 00:00:00"),e[0]=this.createTimestamp(e[0]),e[1]=this.createTimestamp(e[1]),"date"===this.returnType&&(e[0]=new Date(e[0]),e[1]=new Date(e[1]))):(this.hasTime||(e+=" 00:00:00"),e=this.createTimestamp(e),"date"===this.returnType&&(e=new Date(e)))),this.formItem&&this.formItem.setValue(e),this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.isEmitValue=!0},createTimestamp(e){return e=this.fixIosDateFormat(e),Date.parse(new Date(e))},singleChange(e){this.tempSingleDate=e.fulldate,this.hasTime||this.confirmSingleChange()},confirmSingleChange(){this.tempSingleDate?(this.hasTime?this.singleVal=this.tempSingleDate+" "+(this.time?this.time:"00:00:00"):this.singleVal=this.tempSingleDate,this.setEmit(this.singleVal),this.popup=!1):this.popup=!1},leftChange(e){const{before:t,after:a}=e.range;this.rangeChange(t,a);const i={before:e.range.before,after:e.range.after,data:e.range.data,fulldate:e.fulldate};this.startMultipleStatus=Object.assign({},this.startMultipleStatus,i)},rightChange(e){const{before:t,after:a}=e.range;this.rangeChange(t,a);const i={before:e.range.before,after:e.range.after,data:e.range.data,fulldate:e.fulldate};this.endMultipleStatus=Object.assign({},this.endMultipleStatus,i)},mobileChange(e){if(this.isRange){const{before:t,after:a}=e.range;if(this.handleStartAndEnd(t,a,!0),this.hasTime){const{startTime:t,endTime:a}=e.timeRange;this.tempRange.startTime=t,this.tempRange.endTime=a}this.confirmRangeChange()}else this.hasTime?this.singleVal=e.fulldate+" "+e.time:this.singleVal=e.fulldate,this.setEmit(this.singleVal);this.$refs.mobile.close()},rangeChange(e,t){e&&t&&(this.handleStartAndEnd(e,t,!0),this.hasTime||this.confirmRangeChange())},confirmRangeChange(){if(!this.tempRange.startDate&&!this.tempRange.endDate)return void(this.popup=!1);let e,t;this.hasTime?(e=this.range.startDate=this.tempRange.startDate+" "+(this.tempRange.startTime?this.tempRange.startTime:"00:00:00"),t=this.range.endDate=this.tempRange.endDate+" "+(this.tempRange.endTime?this.tempRange.endTime:"00:00:00")):(e=this.range.startDate=this.tempRange.startDate,t=this.range.endDate=this.tempRange.endDate);const a=[e,t];this.setEmit(a),this.popup=!1},handleStartAndEnd(e,t,a=!1){if(!e||!t)return;const i=a?"tempRange":"range";this.dateCompare(e,t)?(this[i].startDate=e,this[i].endDate=t):(this[i].startDate=t,this[i].endDate=e)},dateCompare:(e,t)=>(e=new Date(e.replace("-","/").replace("-","/")))<=(t=new Date(t.replace("-","/").replace("-","/"))),diffDate(e,t){e=new Date(e.replace("-","/").replace("-","/"));const a=((t=new Date(t.replace("-","/").replace("-","/")))-e)/864e5;return Math.abs(a)},clear(e=!0){this.isRange?(this.range.startDate="",this.range.endDate="",this.tempRange.startDate="",this.tempRange.startTime="",this.tempRange.endDate="",this.tempRange.endTime="",this.isPhone?this.$refs.mobile&&this.$refs.mobile.clearCalender():(this.$refs.left&&this.$refs.left.clearCalender(),this.$refs.right&&this.$refs.right.clearCalender(),this.$refs.right&&this.$refs.right.next()),e&&(this.formItem&&this.formItem.setValue([]),this.$emit("change",[]),this.$emit("input",[]),this.$emit("update:modelValue",[]))):(this.singleVal="",this.tempSingleDate="",this.time="",this.isPhone?this.$refs.mobile&&this.$refs.mobile.clearCalender():this.$refs.pcSingle&&this.$refs.pcSingle.clearCalender(),e&&(this.formItem&&this.formItem.setValue(""),this.$emit("change",""),this.$emit("input",""),this.$emit("update:modelValue","")))},parseDate(e){e=this.fixIosDateFormat(e);const t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1,s=t.getDate(),n=t.getHours(),r=t.getMinutes(),h=t.getSeconds();return{defDate:a+"-"+this.lessTen(i)+"-"+this.lessTen(s),defTime:this.lessTen(n)+":"+this.lessTen(r)+(this.hideSecond?"":":"+this.lessTen(h))}},lessTen:e=>e<10?"0"+e:e,fixIosDateFormat:e=>("string"==typeof e&&(e=e.replace(/-/g,"/")),e),leftMonthSwitch(e){},rightMonthSwitch(e){}}};if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("time-picker")+e.resolveComponent("calendar"))()}Math;var s=e._export_sfc(i,[["render",function(t,a,i,s,n,r){return e.e({a:!n.isRange},n.isRange?{f:e.p({type:"calendar",color:"#e1e1e1",size:"22"}),g:r.startPlaceholderText,h:n.range.startDate,i:e.o((e=>n.range.startDate=e.detail.value)),j:e.t(i.rangeSeparator),k:r.endPlaceholderText,l:n.range.endDate,m:e.o((e=>n.range.endDate=e.detail.value))}:{b:e.p({type:"calendar",color:"#e1e1e1",size:"22"}),c:r.singlePlaceholderText,d:n.singleVal,e:e.o((e=>n.singleVal=e.detail.value))},{n:r.showClearIcon},r.showClearIcon?{o:e.p({type:"clear",color:"#e1e1e1",size:"18"}),p:e.o(((...e)=>r.clear&&r.clear(...e)))}:{},{q:i.disabled?1:"",r:i.border?1:"",s:e.o(((...e)=>r.show&&r.show(...e))),t:n.popup,v:e.o(((...e)=>r.close&&r.close(...e))),w:!n.isPhone},n.isPhone?{}:e.e({x:!n.isRange},n.isRange?e.e({P:n.hasTime},n.hasTime?{Q:r.startDateText,R:n.tempRange.startDate,S:e.o((e=>n.tempRange.startDate=e.detail.value)),T:r.startTimeText,U:!n.tempRange.startDate,V:n.tempRange.startTime,W:e.o((e=>n.tempRange.startTime=e.detail.value)),X:e.o((e=>n.tempRange.startTime=e)),Y:e.p({type:"time",start:r.reactStartTime,border:!1,disabled:!n.tempRange.startDate,hideSecond:i.hideSecond,modelValue:n.tempRange.startTime}),Z:e.p({type:"arrowthinright",color:"#999"}),aa:r.endDateText,ab:n.tempRange.endDate,ac:e.o((e=>n.tempRange.endDate=e.detail.value)),ad:r.endTimeText,ae:!n.tempRange.endDate,af:n.tempRange.endTime,ag:e.o((e=>n.tempRange.endTime=e.detail.value)),ah:e.o((e=>n.tempRange.endTime=e)),ai:e.p({type:"time",end:r.reactEndTime,border:!1,disabled:!n.tempRange.endDate,hideSecond:i.hideSecond,modelValue:n.tempRange.endTime})}:{},{aj:e.sr("left","dbc0fc16-8"),ak:e.o(r.leftChange),al:e.o(r.updateRightCale),am:e.o(r.leftMonthSwitch),an:e.p({showMonth:!1,"start-date":n.caleRange.startDate,"end-date":n.caleRange.endDate,range:!0,pleStatus:n.endMultipleStatus}),ao:e.sr("right","dbc0fc16-9"),ap:e.o(r.rightChange),aq:e.o(r.updateLeftCale),ar:e.o(r.rightMonthSwitch),as:e.p({showMonth:!1,"start-date":n.caleRange.startDate,"end-date":n.caleRange.endDate,range:!0,pleStatus:n.startMultipleStatus}),at:n.hasTime},n.hasTime?{av:e.t(r.clearText),aw:e.o(((...e)=>r.clear&&r.clear(...e))),ax:e.t(r.okText),ay:e.o(((...e)=>r.confirmRangeChange&&r.confirmRangeChange(...e)))}:{},{az:e.s(n.popover)}):e.e({y:n.hasTime},n.hasTime?{z:r.selectDateText,A:n.tempSingleDate,B:e.o((e=>n.tempSingleDate=e.detail.value)),C:r.selectTimeText,D:!n.tempSingleDate,E:n.time,F:e.o((e=>n.time=e.detail.value)),G:e.o((e=>n.time=e)),H:e.p({type:"time",border:!1,disabled:!n.tempSingleDate,start:r.reactStartTime,end:r.reactEndTime,hideSecond:i.hideSecond,modelValue:n.time})}:{},{I:e.sr("pcSingle","dbc0fc16-4"),J:e.o(r.singleChange),K:e.p({showMonth:!1,"start-date":n.caleRange.startDate,"end-date":n.caleRange.endDate,date:n.defSingleDate}),L:n.hasTime},n.hasTime?{M:e.t(r.okText),N:e.o(((...e)=>r.confirmSingleChange&&r.confirmSingleChange(...e)))}:{},{O:e.s(n.popover)}),{aA:n.popup}),{aB:e.sr("mobile","dbc0fc16-10"),aC:n.isPhone,aD:e.o(r.mobileChange),aE:e.p({clearDate:!1,date:n.defSingleDate,defTime:r.reactMobDefTime,"start-date":n.caleRange.startDate,"end-date":n.caleRange.endDate,selectableTimes:r.mobSelectableTime,pleStatus:n.endMultipleStatus,showMonth:!1,range:n.isRange,typeHasTime:n.hasTime,insert:!1,hideSecond:i.hideSecond})})}]]);wx.createComponent(s);
