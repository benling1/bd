webpackJsonp([27],{"92nO":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("huhT"),s=i("T2dH"),a=(i("Z0t5"),{name:"memberSMSGroup",components:{leftNav:r.a,commoditydetails:s.a},created:function(){this.$store.dispatch("inmembereffectAnalysis")}}),m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"memberMass"}},[i("leftNav"),e._v(" "),i("div",{staticClass:"rightH",attrs:{id:"memberBox"}},[i("div",{staticClass:"memberSMSGroup"},[i("p",{staticClass:"title"},[e._v("注：可以查看会员短信群发短信发送记录和发送详情。")]),e._v(" "),i("div",{staticClass:"clearfix",attrs:{id:"nav"}},[i("ul",{staticClass:"fl clearfix"},[i("li",[i("router-link",{attrs:{to:{name:"membereffectAnalysis",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime}}}},[e._v("效果分析")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"membereffectAnalysiscustomerdetails",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime,orderCore:"",customerType:"",nickname:"",phone:"",commodityId:""}}}},[e._v("客户详情")])],1),e._v(" "),i("li",{staticClass:"on"},[i("router-link",{attrs:{to:{name:"membereffectAnalysiscommoditydetails",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime,orderCore:"",customerType:"",commodityId:""}}}},[e._v("商品详情")])],1)]),e._v(" "),i("div",{staticClass:"goblack fr"},[i("i"),e._v(" "),i("router-link",{attrs:{to:{name:"membereffectAnalysisList",query:{type:33}}}},[e._v("返回上一页")])],1)]),e._v(" "),i("commoditydetails")],1),e._v(" "),i("input",{attrs:{type:"hidden",name:"",id:"url","data-val":"membereffectAnalysiscustomerdetails"}}),e._v(" "),i("input",{attrs:{type:"hidden",name:"",id:"urlId","data-val":this.$route.query.id}})])],1)},staticRenderFns:[]},o=i("C7Lr")(a,m,!1,null,null,null);t.default=o.exports}});