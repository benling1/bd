webpackJsonp([22],{qbn2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("huhT"),s=r("4EkU"),a=(r("Z0t5"),{name:"memberSMSGroup",components:{leftNav:i.a,customerdetails:s.a},created:function(){this.$store.dispatch("inordereffectAnalysis")}}),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"memberMass"}},[r("leftNav"),e._v(" "),r("div",{staticClass:"rightH",attrs:{id:"memberBox"}},[r("div",{staticClass:"memberSMSGroup"},[r("p",{staticClass:"title"},[e._v("注：可以查看会员短信群发短信发送记录和发送详情。")]),e._v(" "),r("div",{staticClass:"clearfix",attrs:{id:"nav"}},[r("ul",{staticClass:"fl clearfix"},[r("li",[r("router-link",{attrs:{to:{name:"ordereffectAnalysis",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime}}}},[e._v("效果分析")])],1),e._v(" "),r("li",{staticClass:"on"},[r("router-link",{attrs:{to:{name:"ordereffectAnalysiscustomerdetails",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime,orderCore:"",customerType:"",nickname:"",phone:"",commodityId:""}}}},[e._v("客户详情")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"ordereffectAnalysiscommoditydetails",query:{id:this.$route.query.id,bTime:this.$route.query.bTime,eTime:this.$route.query.eTime,orderCore:"",customerType:"",commodityId:""}}}},[e._v("商品详情")])],1)]),e._v(" "),r("div",{staticClass:"goblack fr"},[r("i"),e._v(" "),r("router-link",{attrs:{to:{name:"ordereffectAnalysisList",query:{type:35}}}},[e._v("返回上一页")])],1)]),e._v(" "),r("customerdetails")],1)])],1)},staticRenderFns:[]},u=r("C7Lr")(a,o,!1,null,null,null);t.default=u.exports}});