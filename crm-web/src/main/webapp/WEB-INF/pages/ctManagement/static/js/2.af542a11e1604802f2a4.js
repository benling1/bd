webpackJsonp([2],{"+8wX":function(t,a,s){"use strict";(function(t){var i=s("o1Nm");a.a={name:"quotePhraselibrary",data:function(){return{quotePhraselibrarVal:!1,quotePhraselibraryList1:[],quotePhraselibraryList2:[]}},mounted:function(){var a=this;t(".TbaleBoxTag").on("click","a",function(s){t(this).siblings("a").removeClass("on"),t(this).addClass("on"),a.updata("system",t(s.target).attr("data-type"))})},methods:{updata:function(a,s){var e={type:t("#urlType").val(),customerType:a,subType:s||""};Object(i.s)(e,this)},tabLi:function(a){t(a.target).siblings("li").removeClass("on"),t(a.target).addClass("on"),t(".TbaleBox").removeClass("on"),t(".TbaleBox").eq(t(a.target).index()).addClass("on"),1==t(a.target).index()&&this.updata("customer")},quotePhraselibraryClose:function(){t(".quotePhraselibrary").hide(),t("#markBg").removeClass("on")},quotePhraselibraryTitle:function(a){var s=t(a.target).parents("td").siblings(".title").text();this.$emit("quotePhraselibraryTitle",s),t(".quotePhraselibrary").hide(),t("#markBg").removeClass("on")},quotePhraselibrarysc:function(a){var s=this;this.$Modal.confirm({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">确定要删除自定义短语吗？</p>',onOk:function(){var e={id:t(a.target).attr("data-id")};Object(i.B)(e,s)}})}}}}).call(a,s("tPWS"))},"2lJ8":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("hiMC"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clearfix box",attrs:{id:"bsAdmin"}},[s("leftNav"),t._v(" "),s("div",{staticClass:"rightH",attrs:{id:"memberBox"}},[s("div",{staticClass:"memberSMSGroup",attrs:{id:"memberSMSGroupNN"}},[s("div",{staticClass:"bsAdminBox"},[s("h2",[t._v("客户互动")]),t._v(" "),s("div",{staticClass:"customerReplyListBox"},[s("div",{staticClass:"customerReplyListNav"},[s("router-link",{staticClass:"customerReplyListIcon on",attrs:{to:{name:"customerReplyList"}}},[s("i"),t._v("客户回复列表")]),t._v(" "),s("router-link",{staticClass:"sellerReplyRecordIcon",attrs:{to:{name:"sellerReplyRecord"}}},[s("i"),t._v("卖家回复列表")])],1),t._v(" "),s("div",{staticClass:"customerReplyListSearchBox clearfix"},[t._m(0),t._v(" "),s("div",{staticClass:"customerReplyListSearchDiv fl"},[s("label",{staticClass:"fl"},[t._v("手机号码：")]),t._v(" "),s("Input",{staticClass:"fl",staticStyle:{width:"1.95rem"},attrs:{placeholder:""},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}})],1),t._v(" "),s("div",{staticClass:"customerReplyListSearchDiv fl"},[s("label",{staticClass:"fl"},[t._v("买家昵称：")]),t._v(" "),s("Input",{staticClass:"fl",staticStyle:{width:"1.95rem"},attrs:{placeholder:""},model:{value:t.buyName,callback:function(a){t.buyName=a},expression:"buyName"}})],1),t._v(" "),s("div",{staticClass:"customerReplyListSearchDiv fl"},[s("Checkbox",{staticClass:"hideTHF",model:{value:t.hideTHF,callback:function(a){t.hideTHF=a},expression:"hideTHF"}},[t._v("不显示退订回复短信")])],1),t._v(" "),s("Button",{staticClass:"fr",attrs:{type:"warning"},on:{click:function(a){t.updataListData(1,"scarh")}}},[t._v("查询")])],1),t._v(" "),s("div",{staticClass:"customerReplyListTableBox"},[s("div",{staticClass:"customerReplyListTableBtn"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.batchReplyClick}},[t._v("选中批量回复")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.batchAddBlacklistClick}},[t._v("选中批量添加黑名单")])]),t._v(" "),s("div",{staticClass:"customerReplyListTableDiv"},[s("table",[s("tr",{staticClass:"trone"},[s("th",{staticClass:"thone"},[s("div",[s("i",{staticClass:"qx",on:{click:t.qxClick}}),t._v("全选\n                                            ")])]),t._v(" "),s("th",{staticClass:"thtwo"},[t._v("买家回复时间")]),t._v(" "),s("th",{staticClass:"ththree"},[t._v("回复手机号")]),t._v(" "),s("th",{staticClass:"thfour"},[t._v("买家昵称")]),t._v(" "),s("th",{staticClass:"thfive"},[t._v("回复内容")]),t._v(" "),s("th",{staticClass:"thsix"},[t._v("操作")])]),t._v(" "),t._l(t.customerReplyList,function(a){return t.customerReplyList.length>0?s("tr",{staticClass:"trtwo"},[s("td",[s("div",[s("i",{staticClass:"dx",attrs:{"data-buyName":a.buyName,"data-phone":a.replyPhone},on:{click:t.dxClick}})])]),t._v(" "),s("td",[t._v(t._s(a.buyerReplyTime))]),t._v(" "),s("td",[t._v(t._s(a.replyPhone))]),t._v(" "),s("td",[t._v(t._s(a.buyName))]),t._v(" "),s("td",[t._v(t._s(a.replyContent))]),t._v(" "),s("td",[s("a",{staticClass:"hf",attrs:{href:"javascript:;","data-id":a.id,"data-recNum":a.replyPhone,"data-buyName":a.buyName},on:{click:t.replyClick}},[s("i",{attrs:{"data-id":a.id,"data-recNum":a.replyPhone,"data-buyName":a.buyName}}),t._v("回复")]),t._v(" "),s("a",{staticClass:"sc",attrs:{href:"javascript:;","data-id":a.id,"data-pageno":a.pageNo},on:{click:t.remove}},[s("i",{attrs:{"data-id":a.id,"data-pageno":a.pageNo}}),t._v("删除")]),t._v(" "),s("a",{staticClass:"hmd",attrs:{href:"javascript:;","data-id":a.id,"data-phone":a.replyPhone},on:{click:t.blacklistClick}},[t._v("加入黑名单")])])]):t._e()}),t._v(" "),t.loddingImg?s("tr",{staticClass:"trtwo"},[t._m(1)]):t._e(),t._v(" "),t.titleshow?s("tr",{staticClass:"trtwo"},[s("td",{attrs:{colspan:"6"}},[t._v("暂无数据！")])]):t._e()],2),t._v(" "),s("div",{attrs:{id:"customerReplyListpage"}})])])])])])]),t._v(" "),s("div",{attrs:{id:"markBg"}}),t._v(" "),s("div",{attrs:{id:"markBg2"}}),t._v(" "),s("div",{staticClass:"batchReplyBox"},[s("h3",[t._v("批量回复"),s("i",{on:{click:t.closeBatchReplyBox}})]),t._v(" "),s("div",{staticClass:"batchReplyBody"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.smscontentVal,expression:"smscontentVal"}],attrs:{placeholder:"请输入..."},domProps:{value:t.smscontentVal},on:{input:function(a){a.target.composing||(t.smscontentVal=a.target.value)}}}),t._v(" "),s("div",{staticClass:"batchReplyBodyBottom clearfix"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.addLink}},[t._v("添加短链接")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.quotePhraselibrary}},[t._v("引用短语库")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.saveSmsLibrary("all")}}},[t._v("存为短语库")]),t._v(" "),s("span",[t._v("回N退订")])])]),t._v(" "),s("div",{staticClass:"batchReplyBottom clearfix"},[s("div",{staticClass:"batchReplyBottomLeft fl"},[s("p",{staticClass:"fl"},[t._v("包含签名已输入"),s("span",[t._v(t._s(t.wordentry))]),t._v("个字，计费"),s("span",[t._v(t._s(t.smsnote))]),t._v("条")]),t._v(" "),s("div",{staticClass:"fl charging-rule"},[s("Tooltip",{attrs:{content:"一条短信70个字，短信内容超过70个字每条短信均按照67个字进行计费，其中汉字、英文字母、阿拉伯数字、标点符号均算作一个字。短信变量字数以实际发送为准。",placement:"top"}},[s("i",{staticClass:"jfgza"},[t._v("计费规则")])])],1)]),t._v(" "),s("Button",{staticClass:"fr",staticStyle:{"margin-top":".08rem",height:".25rem","line-height":".25rem","margin-right":".15rem"},attrs:{type:"warning"},on:{click:t.batchReplyBoxSend}},[t._v("发送")])],1)]),t._v(" "),s("addduanlink",{on:{aaa:t.showMsg}}),t._v(" "),s("quotePhraselibrary",{ref:"updata",on:{quotePhraselibraryTitle:t.showTilte}}),t._v(" "),s("div",{staticClass:"storageSMSLibrary"},[s("h3",[t._v("另存为短语库")]),t._v(" "),s("Input",{staticClass:"storageSMSLibraryInput",staticStyle:{width:"2.78rem"},attrs:{placeholder:"模板名称"},model:{value:t.storageSMSLibraryvalue,callback:function(a){t.storageSMSLibraryvalue=a},expression:"storageSMSLibraryvalue"}}),t._v(" "),s("div",{staticClass:"storageSMSLibraryBtn"},[s("a",{staticClass:"qd",attrs:{href:"javascript:;"},on:{click:t.storageSMSLibraryQd}},[t._v("确定")]),t._v(" "),s("a",{staticClass:"qx",attrs:{href:"javascript:;"},on:{click:t.storageSMSLibraryQx}},[t._v("取消")])])],1),t._v(" "),s("div",{staticClass:"replyBox"},[s("h3",[t._v("单一回复"),s("i",{on:{click:t.closeReplyClick}})]),t._v(" "),s("div",{staticClass:"replyBodyBox clearfix"},[s("div",{staticClass:"replyBodyLeft"},[s("div",{staticClass:"customerInformation"},[t._m(2),t._v(" "),s("div",{staticClass:"customerInformationBox"},[s("div",{staticClass:"customerInformationTop clearfix"},[s("div",{staticClass:"customerInformationTopLeft"},[s("i"),t._v("买家昵称："+t._s(t.replyBuyName))]),t._v(" "),s("div",{staticClass:"customerInformationTopRight"},[s("i"),t._v("成功交易次数："+t._s(t.replySuccessfulTransactions))])]),t._v(" "),s("div",{staticClass:"customerInformationTop clearfix"},[s("div",{staticClass:"customerInformationTopLeft"},[s("i"),t._v("会员等级："+t._s(t.replyMembershipGrade))]),t._v(" "),s("div",{staticClass:"customerInformationTopRight"},[s("i"),t._v("累计消费金额："+t._s(t.replyConsumptionAmount))])]),t._v(" "),s("div",{staticClass:"customerInformationTop clearfix"},[s("div",{staticClass:"customerInformationTopLeft"},[s("i"),t._v("手机号码："+t._s(t.replyPhone))]),t._v(" "),s("div",{staticClass:"customerInformationTopRight"},[s("i"),t._v("最近交易时间："+t._s(t.replyRecentTransactionTime))])]),t._v(" "),s("div",{staticClass:"customerInformationBody"},[s("i"),t._v("\n                                "+t._s(t.replyReceivingAddress)+"\n                            ")]),t._v(" "),s("div",{staticClass:"customerInformationBottom"},[t._m(3),t._v(" "),s("div",{staticClass:"purchaseHistory"},t._l(t.buyingHistoryList,function(a){return s("div",{staticClass:"purchaseHistoryDiv"},[s("div",{staticClass:"purchaseHistoryDivTop"},[s("div",{staticClass:"purchaseHistoryDivTopBox clearfix"},[s("div",{staticClass:"purchaseHistoryDivTopLeft"},[t._v("\n                                                    下单时间："+t._s(a.replyOrderTime)+"\n                                                ")]),t._v(" "),s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    金额："+t._s(a.replyMoney)+"\n                                                ")])]),t._v(" "),s("div",{staticClass:"purchaseHistoryDivTopBox clearfix"},[s("div",{staticClass:"purchaseHistoryDivTopLeft"},[t._v("\n                                                    订单号："+t._s(a.replyOrderNum)+"\n                                                ")]),t._v(" "),"TRADE_NO_CREATE_PAY"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：没有创建支付宝交易\n                                                ")]):t._e(),t._v(" "),"WAIT_BUYER_PAY"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：等待买家付款\n                                                ")]):t._e(),t._v(" "),"WAIT_SELLER_SEND_GOODS"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：买家已付款\n                                                ")]):t._e(),t._v(" "),"WAIT_BUYER_CONFIRM_GOODS"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：卖家已发货\n                                                ")]):t._e(),t._v(" "),"TRADE_BUYER_SIGNED"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：买家已签收\n                                                ")]):t._e(),t._v(" "),"TRADE_FINISHED"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：交易成功\n                                                ")]):t._e(),t._v(" "),"TRADE_CLOSED"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：付款后,交易关闭\n                                                ")]):t._e(),t._v(" "),"TRADE_CLOSED_BY_TAOBAO"==a.replyState?s("div",{staticClass:"purchaseHistoryDivTopRight"},[t._v("\n                                                    交易状态：付款前,交易关闭\n                                                ")]):t._e()])]),t._v(" "),s("div",{staticClass:"purchaseHistoryDivBottom clearfix"},[s("div",{staticClass:"purchaseHistoryDivBottomLeft"},[s("img",{attrs:{src:a.replyImgSrc,alt:""}})]),t._v(" "),s("div",{staticClass:"purchaseHistoryDivBottomRight"},[t._v("\n                                                "+t._s(a.replyTitle)+"\n                                            ")])])])}))])])])]),t._v(" "),s("div",{staticClass:"replyBodyRight"},[s("div",{staticClass:"replyShow"},t._l(t.replyShowList,function(a){return s("div",{staticClass:"replyShowDiv clearfix"},["seller"==a.role?s("div",{staticClass:"plx fl"},[s("h5",[t._v(t._s(a.receiveDate))]),t._v(" "),s("p",{staticClass:"fl"},[t._v(t._s(a.content))])]):t._e(),t._v(" "),"buyer"==a.role?s("div",{staticClass:"prx fr"},[s("h5",[t._v(t._s(a.receiveDate))]),t._v(" "),s("p",{staticClass:"on fr"},[t._v(t._s(a.content))])]):t._e()])})),t._v(" "),s("div",{staticClass:"replyDivBox"},[s("div",{staticClass:"batchReplyBody"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.smscontentVal2,expression:"smscontentVal2"}],attrs:{placeholder:"请输入..."},domProps:{value:t.smscontentVal2},on:{input:function(a){a.target.composing||(t.smscontentVal2=a.target.value)}}}),t._v(" "),s("div",{staticClass:"batchReplyBodyBottom clearfix"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.addLink}},[t._v("添加短链接")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.quotePhraselibrary}},[t._v("引用短语库")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.saveSmsLibrary("one")}}},[t._v("存为短语库")]),t._v(" "),s("span",[t._v("回N退订")])])]),t._v(" "),s("div",{staticClass:"batchReplyBottom clearfix"},[s("div",{staticClass:"batchReplyBottomLeft fl"},[s("p",{staticClass:"fl"},[t._v("包含签名已输入"),s("span",[t._v(t._s(t.wordentry2))]),t._v("个字，计费"),s("span",[t._v(t._s(t.smsnote2))]),t._v("条")]),t._v(" "),s("div",{staticClass:"fl charging-rule"},[s("Tooltip",{attrs:{content:"一条短信70个字，短信内容超过70个字每条短信均按照67个字进行计费，其中汉字、英文字母、阿拉伯数字、标点符号均算作一个字。短信变量字数以实际发送为准。",placement:"top"}},[s("i",{staticClass:"jfgza"},[t._v("计费规则")])])],1)]),t._v(" "),s("Button",{staticClass:"fr dyHF",staticStyle:{"margin-top":".08rem",height:".25rem","line-height":".25rem","margin-right":".15rem"},attrs:{type:"warning"},on:{click:t.replyBoxSend}},[t._v("发送")])],1)])])])]),t._v(" "),s("input",{attrs:{type:"hidden",name:"",id:"urlType",value:"47"}}),t._v(" "),s("input",{attrs:{type:"hidden",value:"",id:"seachInput"}})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"customerReplyListSearchDiv fl"},[a("label",{staticClass:"fl"},[this._v("接收时间：")]),this._v(" "),a("div",{staticClass:"transactionTimeI clearfix fl"},[a("div",{staticClass:"fl dsTime2"},[a("input",{staticClass:"timer2",attrs:{readonly:"readonly",type:"text",name:"timer2",id:"timer2",value:""}}),this._v(" "),a("i",{staticClass:"ivu-icon ivu-icon-ios-clock-outline ivu-input-icon ivu-input-icon-normal"})]),this._v(" "),a("span",{staticClass:"fl hx"},[this._v("-")]),this._v(" "),a("div",{staticClass:"fl dsTime2"},[a("input",{staticClass:"timer2",attrs:{readonly:"readonly",type:"text",name:"timer3",id:"timer3",value:""}}),this._v(" "),a("i",{staticClass:"ivu-icon ivu-icon-ios-clock-outline ivu-input-icon ivu-input-icon-normal"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{attrs:{colspan:"6"}},[a("img",{staticStyle:{width:".5rem"},attrs:{src:s("6Qlk")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("i"),this._v("客户信息")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("i"),this._v("购买历史：")])}]};var o=function(t){s("4XS6")},r=s("C7Lr")(i.a,e,!1,o,"data-v-49d2c062",null);a.default=r.exports},"4XS6":function(t,a){},EmSL:function(t,a){},OTLk:function(t,a,s){"use strict";(function(t){var i=s("o1Nm");a.a={name:"addduanlink",data:function(){return{addShortLinkanimal:"",iscommodityLinkOk:!1,linkVal:"",commodityIdvalue:"",islinkTypeoneOk:!1,commodityMoneyMinvalue:"",commodityMoneyMaxvalue:"",showshelvesVal:!1,commodityLinkList:[],commodityLinkonevalue:"",isactivityLinkOk:!1,activityLinkVal:"",alinkVal:"",toggleIdOrGJZ:"1",toggleIdOrGJZList:[{value:"1",label:"商品ID"},{value:"2",label:"关键字"}]}},methods:{typeClick:function(a){t(a.target).siblings("li").removeClass("on"),t(a.target).addClass("on"),"LT_SHOP"==t(a.target).attr("data-id")?(this.islinkTypeoneOk=!1,this.isactivityLinkOk=!1,t("#typeValue").val("LT_SHOP")):"LT_ITEM"==t(a.target).attr("data-id")?(this.iscommodityLinkOk=!0,this.isactivityLinkOk=!1,t(".commodityLinkTable i.dx.on").removeClass("on"),this.activityLinkVal="",this.upCommodityListData(1),t("#typeValue").val("LT_ITEM")):"LT_ACTIVITY"==t(a.target).attr("data-id")&&(this.isactivityLinkOk=!0,this.islinkTypeoneOk=!1,this.commodityLinkonevalue="",t("#typeValue").val("LT_ACTIVITY"))},upCommodityListData:function(t){var a=void 0;a="1"==this.toggleIdOrGJZ?{pageNo:t,approveStatusStr:this.showshelvesVal?"onsale":"",itemIds:[],title:"",maxPrice:parseInt(this.commodityMoneyMaxvalue),minPrice:parseInt(this.commodityMoneyMinvalue),numIid:this.commodityIdvalue}:{pageNo:t,approveStatusStr:this.showshelvesVal?"onsale":"",itemIds:[],title:this.commodityIdvalue,maxPrice:parseInt(this.commodityMoneyMaxvalue),minPrice:parseInt(this.commodityMoneyMinvalue),numIid:""},Object(i.p)(a,this)},addDx:function(a){t(a.target).hasClass("on")?t(a.target).removeClass("on"):(t(a.target).parents(".trtwo").siblings(".trtwo").find(".dx").removeClass("on"),t(a.target).addClass("on"))},commodityLinkQd:function(){this.commodityLinkonevalue=t(".commodityLinkTable .dx.on").attr("data-id"),this.iscommodityLinkOk=!1,this.islinkTypeoneOk=!0,this.commodityIdvalue="",this.showshelvesVal=!1,this.commodityMoneyMaxvalue="",this.commodityMoneyMinvalue=""},commodityLinkQx:function(){this.commodityIdvalue="",this.showshelvesVal=!1,this.commodityMoneyMaxvalue="",this.commodityMoneyMinvalue="",this.iscommodityLinkOk=!1,this.islinkTypeoneOk=!0},addLinkClickQd:function(a){t(".addShortLinkBox").hide(),t("#markBg").removeClass("on");var s=void 0,e=this.commodityLinkonevalue,o=this.activityLinkVal;if("LT_ITEM"==t("#typeValue").val()){if(s={type:"LT_ITEM",value:t.trim(e)},""==e||void 0==e)return void this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">商品ID不能为空</p>'})}else if("LT_ACTIVITY"==t("#typeValue").val()){if(s={type:"LT_ACTIVITY",value:t.trim(o)},""==o||void 0==o)return void this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">活动网址不能为空</p>'});var r=0,l=new RegExp("taobao.com"),n=new RegExp("tmall.com"),c=new RegExp("jaeapp.com");if(t("#activityLinkBox textarea").val().match(l)&&r++,t("#activityLinkBox textarea").val().match(n)&&r++,t("#activityLinkBox textarea").val().match(c)&&r++,0==r)return void this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">活动网址不正确</p>'})}else"LT_SHOP"==t("#typeValue").val()&&(s={type:"LT_SHOP"});Object(i.b)(s,this)},addLinkClickQx:function(){t(".addShortLinkBox").hide(),t("#markBg").removeClass("on")},addLinkshowImg:function(){t(".addlinkshowImgBox").addClass("on")},addlinkshowcloseClick:function(){t(".addlinkshowImgBox").removeClass("on")},inputNumber:function(t){t.target.value=t.target.value.replace(/\D/g,"")}}}}).call(a,s("tPWS"))},UzYK:function(t,a,s){"use strict";var i=s("+8wX"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"quotePhraselibrary",class:{on:this.$store.state.isquotePhraselibraryOk}},[s("h3",[t._v("引用模板")]),t._v(" "),s("div",{staticClass:"quotePhraselibraryBox"},[s("div",{staticClass:"quotePhraselibraryTabBox clearfix"},[s("ul",{staticClass:"quotePhraselibraryTab fl"},[s("li",{staticClass:"on",on:{click:t.tabLi}},[t._v("系统短语库")]),t._v(" "),s("li",{on:{click:t.tabLi}},[t._v("自定义短语库")])])]),t._v(" "),s("div",{staticClass:"quotePhraselibraryTbaleBox"},[s("div",{staticClass:"TbaleBox on"},[s("div",{staticClass:"TbaleBoxTag"}),t._v(" "),s("div",{staticClass:"TbaleBoxChild"},[s("table",{staticClass:"Tbale1",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._v(" "),t._l(t.quotePhraselibraryList1,function(a,i){return s("tr",{staticClass:"trtwo"},[s("td",[t._v(t._s(i+1))]),t._v(" "),s("td",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),s("td",[s("a",{attrs:{href:"javascript:;"},on:{click:t.quotePhraselibraryTitle}},[t._v("使用")])])])})],2)])]),t._v(" "),s("div",{staticClass:"TbaleBox"},[s("div",{staticClass:"TbaleBoxChild"},[s("table",{staticClass:"Tbale2",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(1),t._v(" "),t._l(t.quotePhraselibraryList2,function(a,i){return s("tr",{staticClass:"trtwo"},[s("td",[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),s("td",[s("a",{attrs:{href:"javascript:;"},on:{click:t.quotePhraselibraryTitle}},[t._v("使用")]),t._v(" "),s("a",{attrs:{href:"javascript:;","data-id":a.id},on:{click:t.quotePhraselibrarysc}},[t._v("删除")])])])})],2)])])])]),t._v(" "),s("div",{staticClass:"TbaleBtn"},[s("a",{staticClass:"qd",attrs:{href:"javascript:;"},on:{click:t.quotePhraselibraryClose}},[t._v("关闭")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"trone"},[a("th",{staticClass:"one"},[this._v("序号")]),this._v(" "),a("th",{staticClass:"two"},[this._v("短信内容")]),this._v(" "),a("th",{staticClass:"three"},[this._v("操作")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"trone"},[a("th",{staticClass:"one"},[this._v("序号")]),this._v(" "),a("th",{staticClass:"two"},[this._v("模板名称")]),this._v(" "),a("th",{staticClass:"three"},[this._v("短信内容")]),this._v(" "),a("th",{staticClass:"four"},[this._v("操作")])])}]};var o=function(t){s("EmSL")},r=s("C7Lr")(i.a,e,!1,o,null,null);a.a=r.exports},hiMC:function(t,a,s){"use strict";(function(t){var i=s("3cXf"),e=s.n(i),o=s("huhT"),r=(s("nMtv"),s("fiPB")),l=(s.n(r),s("vSmK"),s("o1Nm")),n=s("zZ6+"),c=s("UzYK");a.a={name:"phonebinding",data:function(){return{loddingImg:!1,titleshow:!1,smscontentVal:"",smscontentVal2:"",alertTitle:"您确定要删除吗？",customerReplyList:[],phone:"",buyName:"",hideTHF:!1,storageSMSLibraryvalue:"",replyBuyName:"",replySuccessfulTransactions:"",replyMembershipGrade:"",replyConsumptionAmount:"",replyPhone:"",replyRecentTransactionTime:"",replyReceivingAddress:"",buyingHistoryList:[],replyShowList:[],repeatSubmissionBok:!1}},components:{leftNav:o.a,addduanlink:n.a,quotePhraselibrary:c.a},computed:{wordentry:{get:function(){var t=sessionStorage.getItem("name");return(void 0==t||""==t?0:t.length+2)+this.smscontentVal.length+4}},smsnote:{get:function(){return Math.ceil(this.wordentry>70?this.wordentry/67:this.wordentry/70)}},wordentry2:{get:function(){var t=sessionStorage.getItem("name");return(void 0==t||""==t?0:t.length+2)+this.smscontentVal2.length+4}},smsnote2:{get:function(){return Math.ceil(this.wordentry2>70?this.wordentry2/67:this.wordentry2/70)}}},created:function(){this.$store.dispatch("incustomerInteraction")},mounted:function(){Object(l.f)({sClass1:".bsAdminBox h2",sClass3:".customerReplyListBox",leftClass:".leftNav",rightClass:".memberSMSGroup"}),t(window).resize(function(){Object(l.f)({sClass1:".bsAdminBox h2",sClass3:".customerReplyListBox",leftClass:".leftNav",rightClass:".memberSMSGroup"})});var a={trigger:"",isTime:!0,format:"YYYY-MM-DD hh:mm:ss",okfun:function(t){s.minDate=t.date.YYYY+"-"+t.date.MM+"-"+t.date.DD+" 00:00:00"}},s={trigger:"",isTime:!0,format:"YYYY-MM-DD hh:mm:ss",okfun:function(t){a.maxDate=t.date.YYYY+"-"+t.date.MM+"-"+t.date.DD+" 23:59:59"}};t("#timer2").click(function(){t("#timer2").jeDate(a)}),t("#timer3").click(function(){t("#timer3").jeDate(s)}),sessionStorage.getItem("name")||Object(l.t)(this),this.updataListData(1,"get")},methods:{changeHeightFn:function(){Object(l.f)({sClass1:".bsAdminBox h2",sClass3:".customerReplyListBox",leftClass:".leftNav",rightClass:".memberSMSGroup"})},updataListData:function(a,s){var i=void 0;"get"==s?""==t("#seachInput").val()?i={bTime:t("#timer2").val(),eTime:t("#timer3").val(),sendPhone:t.trim(this.phone),buyerNick:t.trim(this.buyName),containN:this.hideTHF?"N":"",pageNo:a}:(i=JSON.parse(t("#seachInput").val())).pageNo=a:i={bTime:t("#timer2").val(),eTime:t("#timer3").val(),sendPhone:t.trim(this.phone),buyerNick:t.trim(this.buyName),containN:this.hideTHF?"N":"",pageNo:a},t("#seachInput").val(e()(i)),this.titleshow=!1,this.loddingImg=!0,t("#customerReplyListpage").html(""),this.repeatSubmissionBok||(this.repeatSubmissionBok=!0,Object(l.m)(i,this))},qxClick:function(a){t(a.target).hasClass("on")?(t(a.target).removeClass("on"),t(".dx").removeClass("on")):(t(a.target).addClass("on"),t(".dx").addClass("on"))},dxClick:function(a){t(a.target).hasClass("on")?(t(".qx").removeClass("on"),t(a.target).removeClass("on")):(t(a.target).addClass("on"),this.regDXFn()?t(".qx").addClass("on"):t(".qx").removeClass("on"))},regDXFn:function(){return t(".dx.on").length==t(".dx").length},batchReplyClick:function(){0!=t(".dx.on").length&&(t(".batchReplyBox").addClass("on"),t("#markBg2").addClass("on"))},batchAddBlacklistClick:function(a){for(var s=t(".dx").length,i=[],e=0;e<s;e++)i.push(t(".dx.on").eq(e).attr("data-phone"));var o=this,r={blackLists:i,type:1};this.$Modal.confirm({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">您是否要将选中用户添加为黑名单？</p>',onOk:function(){Object(l.a)(r,o,1)}})},replyClick:function(a){t("#markBg2").addClass("on"),t(".replyBox").addClass("on");var s={recNum:t(a.target).attr("data-recNum"),buyerNick:t(a.target).attr("data-buyName")};t(".dyHF").attr("data-phone",t(a.target).attr("data-recNum")),t(".dyHF").attr("data-name",t(a.target).attr("data-buyName")),this.buyingHistoryList=[],Object(l.K)(s,this),Object(l.J)(s,this)},singleResponseRight:function(t){var a={recNum:t};Object(l.K)(a,this)},remove:function(a){var s={id:t(a.target).attr("data-id"),pageno:t(a.target).attr("data-pageno")},i=this;this.$Modal.confirm({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">您确定要删除此条回复吗？</p>',onOk:function(){Object(l.n)(s,i)}})},blacklistClick:function(a){var s=this,i={blackLists:t(a.target).attr("data-phone").split(","),type:1};this.$Modal.confirm({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">您是否要将此用户添加为黑名单？</p>',onOk:function(){Object(l.a)(i,s,1)}})},addLink:function(){t(".addShortLinkBox").show(),t("#markBg").addClass("on")},saveSmsLibrary:function(a){"one"==a?t(".storageSMSLibrary").attr("data-type","one"):t(".storageSMSLibrary").attr("data-type","all"),t(".storageSMSLibrary").show(),t("#markBg").addClass("on")},storageSMSLibraryQd:function(a){if(""!=t.trim(this.storageSMSLibraryvalue)){if("one"==t(a.target).parents(".storageSMSLibrary").attr("data-type")){if(""==t.trim(this.smscontentVal2))return void this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">短信内容不能为空</p>'})}else if(""==t.trim(this.smscontentVal))return void this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">短信内容不能为空</p>'});var s={name:this.storageSMSLibraryvalue,type:t("#urlType").val(),content:t(".replyBox").hasClass("on")?this.smscontentVal2:this.smscontentVal,customerType:"customer"};Object(l.G)(s,this),t(".storageSMSLibrary").hide(),t("#markBg").removeClass("on"),this.storageSMSLibraryvalue=""}else this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">短语名不能为空</p>'})},storageSMSLibraryQx:function(){t(".storageSMSLibrary").hide(),t("#markBg").removeClass("on"),this.storageSMSLibraryvalue="",t(".storageSMSLibrary").attr("data-type","")},showMsg:function(a){t(".replyBox").hasClass("on")?this.smscontentVal2=a:this.smscontentVal=a},showTilte:function(a){t(".replyBox").hasClass("on")?this.smscontentVal2=a:this.smscontentVal=a},quotePhraselibrary:function(){t(".quotePhraselibrary").show(),t("#markBg").addClass("on"),t(".quotePhraselibraryTab li").removeClass("on"),t(".quotePhraselibraryTab li").eq(0).addClass("on"),t(".TbaleBox").removeClass("on"),t(".TbaleBox").eq(0).addClass("on"),this.$refs.updata.updata("system")},closeBatchReplyBox:function(){t(".batchReplyBox").removeClass("on"),t("#markBg2").removeClass("on"),this.smscontentVal=""},batchReplyBoxSend:function(){for(var a=[],s=t(".dx.on").length,i=[],e=0;e<s;e++)a.push(t(".dx.on").eq(e).attr("data-phone")),i.push(t(".dx.on").eq(e).attr("data-buyName"));var o=sessionStorage.getItem("name"),r={signVal:o,phones:a,buyerNicks:i,content:"【"+o+"】"+this.smscontentVal+"回N退订"};Object(l.c)(r,this)},closeReplyClick:function(){t(".replyBox").removeClass("on"),t("#markBg2").removeClass("on"),this.smscontentVal2=""},replyBoxSend:function(a){var s=sessionStorage.getItem("name"),i={signVal:s,phones:t(".dyHF").attr("data-phone").split(","),content:"【"+s+"】"+this.smscontentVal2+"回N退订",buyerNicks:t(".dyHF").attr("data-name")?t(".dyHF").attr("data-name").split(","):[]};Object(l.L)(i,this),this.smscontentVal2="";var e=new Date,o=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),c=e.getHours(),v=e.getMinutes(),d=e.getSeconds();this.replyShowList.push({receiveDate:o+"-"+this.toNumDub(r)+"-"+this.toNumDub(n)+" "+this.toNumDub(c)+":"+this.toNumDub(v)+":"+this.toNumDub(d),content:i.content,role:"seller"}),setTimeout(function(){t(".replyShow").scrollTop(parseInt(t(".replyShow")[0].scrollHeight))},100)},toNumDub:function(t){var a=t;return a}}}}).call(a,s("tPWS"))},i3xU:function(t,a){},nPoJ:function(t,a,s){t.exports=s.p+"static/img/showimg.3e65fcd.png"},"zZ6+":function(t,a,s){"use strict";var i=s("OTLk"),e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"addShortLinkBox"},[i("h3",[t._v("添加短链接")]),t._v(" "),i("div",{staticStyle:{"margin-left":".44rem","margin-top":".16rem"}},[i("div",{staticClass:"linkTypeBox clearfix"},[i("div",{staticClass:"linkTypeDiv clearfix"},[i("label",{staticClass:"fl"},[t._v("类型：")]),t._v(" "),i("ul",{staticClass:"fl"},[i("li",{staticClass:"on",attrs:{"data-id":"LT_SHOP"},on:{click:t.typeClick}},[i("i"),t._v("\n\t\t\t\t\t\t店铺首页\n\t\t\t\t\t")]),t._v(" "),i("li",{attrs:{"data-id":"LT_ITEM"},on:{click:t.typeClick}},[i("i"),t._v("\n\t\t\t\t\t\t商品链接\n\t\t\t\t\t")]),t._v(" "),i("li",{attrs:{"data-id":"LT_ACTIVITY"},on:{click:t.typeClick}},[i("i"),t._v("\n\t\t\t\t\t\t活动页链接\n\t\t\t\t\t")])]),t._v(" "),i("a",{staticClass:"fl",staticStyle:{"font-size":".16rem",color:"#f9aa5c"},attrs:{href:"javascript:;"},on:{click:t.addLinkshowImg}},[t._v("短链接效果显示")])])]),t._v(" "),i("div",{attrs:{id:"linkTypeBox"}},[i("div",{staticClass:"clearfix",class:{on:t.islinkTypeoneOk},attrs:{id:"commodityLinkBox"}},[i("label",{staticClass:"fl"},[t._v("商品ID：")]),t._v(" "),i("Input",{staticStyle:{width:"300px"},attrs:{placeholder:""},model:{value:t.commodityLinkonevalue,callback:function(a){t.commodityLinkonevalue=a},expression:"commodityLinkonevalue"}})],1),t._v(" "),i("div",{staticClass:"clearfix",class:{on:t.isactivityLinkOk},attrs:{id:"activityLinkBox"}},[i("label",{staticClass:"fl"},[t._v("活动网址：")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activityLinkVal,expression:"activityLinkVal"}],domProps:{value:t.activityLinkVal},on:{input:function(a){a.target.composing||(t.activityLinkVal=a.target.value)}}})])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"commodityLinkBox",class:{on:t.iscommodityLinkOk}},[i("h3",[t._v("选择商品")]),t._v(" "),i("div",{staticClass:"commodityLinkscreen clearfix"},[i("div",{staticClass:"commodityLinkscreenDiv clearfix fl"},[i("Select",{staticClass:"selectGood fl",staticStyle:{width:".9rem"},model:{value:t.toggleIdOrGJZ,callback:function(a){t.toggleIdOrGJZ=a},expression:"toggleIdOrGJZ"}},t._l(t.toggleIdOrGJZList,function(a){return i("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.label))])})),t._v(" "),i("Input",{staticClass:"fl",staticStyle:{width:"1.4rem","margin-left":".1rem"},attrs:{placeholder:""},model:{value:t.commodityIdvalue,callback:function(a){t.commodityIdvalue=a},expression:"commodityIdvalue"}})],1),t._v(" "),i("div",{staticClass:"commodityLinkscreenDiv clearfix fl"},[i("label",{staticClass:"fl available"},[t._v("金额：")]),t._v(" "),i("div",{staticClass:"fl money"},[i("Input",{staticStyle:{width:".8rem"},attrs:{placeholder:""},nativeOn:{keyup:function(a){return t.inputNumber(a)}},model:{value:t.commodityMoneyMinvalue,callback:function(a){t.commodityMoneyMinvalue=a},expression:"commodityMoneyMinvalue"}}),t._v(" "),i("span",[t._v("-")]),t._v(" "),i("Input",{staticStyle:{width:".8rem"},attrs:{placeholder:""},nativeOn:{keyup:function(a){return t.inputNumber(a)}},model:{value:t.commodityMoneyMaxvalue,callback:function(a){t.commodityMoneyMaxvalue=a},expression:"commodityMoneyMaxvalue"}})],1)]),t._v(" "),i("div",{staticClass:"commodityLinkscreenDiv clearfix fl"},[i("Checkbox",{model:{value:t.showshelvesVal,callback:function(a){t.showshelvesVal=a},expression:"showshelvesVal"}},[t._v("只显示上架")])],1),t._v(" "),i("Button",{staticClass:"fr",attrs:{type:"warning"},on:{click:function(a){t.upCommodityListData(1)}}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"commodityLinkTableBox"},[i("div",{staticClass:"commodityLinkTableDiv"},[i("table",{staticClass:"commodityLinkTable",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(1),t._v(" "),t._l(t.commodityLinkList,function(a){return i("tr",{staticClass:"trtwo"},[i("td",[i("i",{staticClass:"dx",class:{on:a.isOk},attrs:{"data-id":a.id},on:{click:t.addDx}})]),t._v(" "),i("td",[t._v(t._s(a.id))]),t._v(" "),i("td",[i("img",{attrs:{src:a.img}})]),t._v(" "),i("td",[t._v(t._s(a.name))]),t._v(" "),i("td",[t._v(t._s(a.num))])])})],2),t._v(" "),i("div",{attrs:{id:"page2"}})])]),t._v(" "),i("div",{staticClass:"commodityLinkBtn"},[i("Button",{staticStyle:{width:"1rem",margin:"0 .15rem"},attrs:{type:"info"},on:{click:t.commodityLinkQd}},[t._v("确定")]),t._v(" "),i("Button",{staticStyle:{width:"1rem",margin:"0 .15rem"},on:{click:t.commodityLinkQx}},[t._v("取消")])],1)]),t._v(" "),i("div",{staticClass:"addlinkshowImgBox"},[i("img",{attrs:{src:s("nPoJ")}}),t._v(" "),i("i",{on:{click:t.addlinkshowcloseClick}})]),t._v(" "),i("div",{staticClass:"addShortLinkBtn"},[i("Button",{staticStyle:{width:"1rem",margin:"0 .15rem"},attrs:{type:"info"},on:{click:t.addLinkClickQd}},[t._v("确定")]),t._v(" "),i("Button",{staticStyle:{width:"1rem",margin:"0 .15rem"},on:{click:t.addLinkClickQx}},[t._v("取消")])],1),t._v(" "),i("input",{attrs:{type:"hidden",name:"",id:"typeValue",value:"LT_SHOP"}})])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"addShortLinkTitle"},[a("i"),this._v("提示：所添加网址必须是taobao.com、tmall、jaeapp.com这三个域名下 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{staticClass:"trone"},[s("th",{staticClass:"one"}),t._v(" "),s("th",{staticClass:"five"},[t._v("商品ID")]),t._v(" "),s("th",{staticClass:"two"},[t._v("宝贝图片")]),t._v(" "),s("th",{staticClass:"three"},[t._v("宝贝名称")]),t._v(" "),s("th",{staticClass:"four"},[t._v("金额")])])}]};var o=function(t){s("i3xU")},r=s("C7Lr")(i.a,e,!1,o,null,null);a.a=r.exports}});