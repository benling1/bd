webpackJsonp([41],{IHsx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("Z/we");var s=i("CgWt"),r=i("fS3i"),n=i("Hx1R"),o=(i("o1Nm"),i("0Gv1")),a={name:"orderCare",created:function(){sessionStorage.setItem("lodding","2"),this.$store.dispatch("inPaiJianTixing")},components:{yejiao:r.default,common:s.a,navlink:n.a,indexList:o.a}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navlink"),t._v(" "),i("div",{staticClass:"rightContent rightH",attrs:{id:"rightBox"}},[i("common"),t._v(" "),i("div",{attrs:{id:"orderCare"}},[i("div",{staticClass:"commonBottomDiv"},[i("ul",{staticClass:"commonBottomNav clearfix"},[i("li",[i("router-link",{attrs:{to:"/logisticsReminder/shippingReminderIndex"}},[t._v("发货提醒")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/logisticsReminder/delayedShipmentReminderIndex"}},[t._v("延时发货提醒")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/logisticsReminder/arrivalCityReminderIndex"}},[t._v("到达同城提醒")])],1),t._v(" "),i("li",{class:{on:this.$store.state.fahuotixing.isIndexActive}},[i("router-link",{attrs:{to:"/logisticsReminder/sendRemindersIndex"}},[t._v("派件提醒")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/logisticsReminder/signReminderIndex"}},[t._v("签收提醒")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"logisticsReminderEffectAnalysis"}}},[t._v("物流提醒效果分析")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"logisticsReminderSendRecord",query:{type:"6,11,7,8,9",page:"1",parameters:"",status:"",bTime:"",eTime:""}}}},[t._v("发送记录")])],1)]),t._v(" "),i("div",{staticClass:"commonBottomBox"},[i("div",{staticClass:"clearfix commonBottomBoxDiv"},[i("router-link",{staticClass:"addorderCare",attrs:{to:{name:this.$store.state.hrefName,query:{type:this.$store.state.type}}}},[t._v("创建任务")]),t._v(" "),t._m(0)],1),t._v(" "),i("indexList")],1)])]),t._v(" "),i("yejiao")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("i"),this._v("当宝贝开始派件时提醒买家在家安心收货，可让宝贝第一时间送入买家怀抱，也可防止快递小哥白跑哦。")])}]},d=i("C7Lr")(a,l,!1,null,null,null);e.default=d.exports}});