webpackJsonp([8],{fXut:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("iowz"),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"clearfix box",attrs:{id:"bsAdmin"}},[i("leftNav"),e._v(" "),i("div",{staticClass:"rightH",attrs:{id:"memberBox"}},[i("div",{staticClass:"memberSMSGroup"},[i("p",{staticClass:"title"},[e._v("温馨提示：为了避免打扰您，日消耗短信总条数超过100条才会给你发送催付短信发送条数，短信发送总条数和当前短信剩余条数。")]),e._v(" "),i("div",{staticClass:"bsAdminBox"},[i("h2",[e._v("手机号绑定")]),e._v(" "),i("div",{staticClass:"phonebindingBox"},[i("div",{staticClass:"remindPhoneBox"},[i("div",{staticClass:"remindPhoneDiv clearfix"},[e._m(0),e._v(" "),i("a",{staticClass:"showPhone fl",class:{on:e.isRemindPhoneOk},attrs:{href:"javascript:;"}},[e._v(e._s(e.changePhone))]),e._v(" "),i("Input",{staticClass:"fl changePhone",class:{on:e.isRemindPhoneOk},staticStyle:{width:"2.8rem"},attrs:{placeholder:""},on:{"on-keyup":e.regNumber,"on-change":e.onChangePhone},model:{value:e.changePhone,callback:function(t){e.changePhone=t},expression:"changePhone"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPhone,expression:"oldPhone"}],attrs:{type:"hidden",name:"oldPhone",id:"oldPhone"},domProps:{value:e.oldPhone},on:{input:function(t){t.target.composing||(e.oldPhone=t.target.value)}}}),e._v(" "),i("a",{staticClass:"code  fl",class:{on:e.isRemindPhoneOk},attrs:{href:"javascript:;"},on:{click:e.getCode}},[e._v("获取验证码")]),e._v(" "),i("Button",{staticClass:"bttn",class:{on:e.isRemindPhoneOk},attrs:{type:"warning fl"},on:{click:e.clickRemindPhone}},[e._v("修改")])],1),e._v(" "),i("div",{staticClass:"remindPhoneDiv clearfix",class:{on:e.isRemindPhoneOk}},[i("label",{staticClass:"fl"},[e._v("验证码：")]),e._v(" "),i("Input",{staticClass:"fl",staticStyle:{width:"2.8rem"},attrs:{placeholder:""},on:{"on-keyup":e.regNumber},model:{value:e.verificationCode,callback:function(t){e.verificationCode=t},expression:"verificationCode"}})],1)])]),e._v(" "),i("div",{staticClass:"informationDescriptionBox"},[e._m(1),e._v(" "),i("div",{staticClass:"descriptionDiv clearfix"},[i("i",{staticClass:"fl",class:{on:e.isRemindPhoneOk}}),e._v(" "),i("Checkbox",{staticClass:"checkboxDiv fl",class:{on:e.isRemindPhoneOk},model:{value:e.descriptionCheckboxone,callback:function(t){e.descriptionCheckboxone=t},expression:"descriptionCheckboxone"}}),e._v(" "),i("p",{staticClass:"fl"},[e._v("催付短信发送条数，短信发送总条数和当前短信剩余条数（每日早上9点发送前日数据）")])],1),e._v(" "),i("div",{staticClass:"descriptionDiv clearfix"},[i("i",{staticClass:"fl",class:{on:e.isRemindPhoneOk}}),e._v(" "),i("Checkbox",{staticClass:"checkboxDiv fl",class:{on:e.isRemindPhoneOk},model:{value:e.descriptionCheckboxtwo,callback:function(t){e.descriptionCheckboxtwo=t},expression:"descriptionCheckboxtwo"}}),e._v(" "),i("p",{staticClass:"fl"},[i("span",{staticClass:"fl"},[e._v("短信余额不足提醒：剩余条数不足")]),e._v(" "),i("strong",{staticClass:"noRemindSMSTitle fl",class:{on:e.isRemindPhoneOk}},[e._v(e._s(e.noRemindSMSNum))]),e._v(" "),i("Input",{staticClass:"noRemindSMSNum fl",class:{on:e.isRemindPhoneOk},staticStyle:{width:"1.5rem"},attrs:{placeholder:""},on:{"on-keyup":e.regNumber},model:{value:e.noRemindSMSNum,callback:function(t){e.noRemindSMSNum=t},expression:"noRemindSMSNum"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.oldSmSNum,expression:"oldSmSNum"}],attrs:{type:"hidden",name:"",id:"oldSmSNum"},domProps:{value:e.oldSmSNum},on:{input:function(t){t.target.composing||(e.oldSmSNum=t.target.value)}}}),e._v(" "),i("span",{staticClass:"fl"},[e._v("条时开启提醒")])],1)],1),e._v(" "),i("div",{staticClass:"descriptionDiv clearfix"},[i("i",{staticClass:"fl",class:{on:e.isRemindPhoneOk}}),e._v(" "),i("Checkbox",{staticClass:"checkboxDiv fl",class:{on:e.isRemindPhoneOk},model:{value:e.descriptionCheckboxthree,callback:function(t){e.descriptionCheckboxthree=t},expression:"descriptionCheckboxthree"}}),e._v(" "),i("p",{staticClass:"fl"},[e._v("软件剩余天数不足提醒")])],1),e._v(" "),i("div",{staticClass:"descriptionDiv clearfix"},[i("i",{staticClass:"fl",class:{on:e.isRemindPhoneOk}}),e._v(" "),i("Checkbox",{staticClass:"checkboxDiv fl",class:{on:e.isRemindPhoneOk},model:{value:e.descriptionCheckboxfour,callback:function(t){e.descriptionCheckboxfour=t},expression:"descriptionCheckboxfour"}}),e._v(" "),i("p",{staticClass:"fl"},[e._v("最新促销活动通知")])],1)])]),e._v(" "),i("div",{staticClass:"changeBtnBox",class:{on:e.isRemindPhoneOk}},[i("Button",{attrs:{type:"warning"},on:{click:e.qrBtn}},[e._v("确认")]),e._v(" "),i("Button",{attrs:{type:"warning"},on:{click:e.qxBtn}},[e._v("取消")])],1)]),e._v(" "),i("input",{attrs:{type:"hidden",name:"",id:"phoneId",value:""}})])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"fl"},[t("i"),this._v("接受提醒手机号：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"title"},[t("i"),this._v("手机号设置后，可以免费接受以下信息：")])}]},o=i("C7Lr")(s.a,n,!1,null,null,null);t.default=o.exports},iowz:function(e,t,i){"use strict";(function(e){var s=i("huhT"),n=i("seUs"),o=(i.n(n),i("nMtv"),i("fiPB")),a=(i.n(o),i("o1Nm"));t.a={name:"phonebinding",data:function(){return{repeatSubmissionBok:!1,changePhone:"",oldPhone:"",verificationCode:"",isRemindPhoneOk:!0,descriptionCheckboxone:!1,descriptionCheckboxtwo:!1,noRemindSMSNum:"",descriptionCheckboxthree:!1,descriptionCheckboxfour:!1,timer:"timer",oldSmSNum:"100"}},components:{leftNav:s.a},computed:{},created:function(){this.$store.dispatch("inphonebinding")},mounted:function(){Object(a.d)({sClass1:".title",sClass2:".bsAdminBox",sClass3:".changeBtnBox",leftClass:".leftNav",rightClass:".memberSMSGroup"}),e(window).resize(function(){Object(a.d)({sClass1:".title",sClass2:".bsAdminBox",sClass3:".changeBtnBox",leftClass:".leftNav",rightClass:".memberSMSGroup"})}),e(".headNav a").removeClass("on"),e(".headNav a").eq(4).addClass("on"),this.updata()},methods:{changeHeightFn:function(){Object(a.d)({sClass1:".title",sClass2:".bsAdminBox",sClass3:".changeBtnBox",leftClass:".leftNav",rightClass:".memberSMSGroup"})},updata:function(){Object(a.b)(this)},clickRemindPhone:function(e){this.isRemindPhoneOk=!1,this.updata()},qrBtn:function(){clearInterval(this.timer),e(".code").text("获取验证码");var t={id:e("#phoneId").val(),code:this.verificationCode,mobile:this.changePhone,expediting:this.descriptionCheckboxone,messageRemainder:this.descriptionCheckboxtwo,serviceExpire:this.descriptionCheckboxthree,activityNotice:this.descriptionCheckboxfour,messageCount:this.noRemindSMSNum};this.repeatSubmissionBok||(this.repeatSubmissionBok=!0,Object(a.o)(t,this))},qxBtn:function(){this.isRemindPhoneOk=!0,clearInterval(this.timer),e(".code").text("获取验证码"),this.changePhone=this.oldPhone,this.noRemindSMSNum=this.oldSmSNum,this.verificationCode=""},getCode:function(t){var i=this,s=this.changePhone,n=this.oldPhone;if(!e(t.target).hasClass("timer"))if(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(s))if(n!=s){e(t.target).addClass("timer");var o=60;e(t.target).text("60s后重新获取"),clearInterval(this.timer),this.timer=setInterval(function(){o--,e(t.target).text(o+"s后重新获取"),0==o&&(clearInterval(i.timer),e(t.target).text("获取验证码"),e(t.target).removeClass("timer"))},1e3);var c={mobile:s};Object(a.g)(c,this)}else this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">手机号码未改变不能获取验证码！</p>'});else this.$Modal.warning({title:'<p style="font-size:.16rem">温馨提示</p>',content:'<p style="font-size:.16rem">手机号码不正确！</p>'})},onChangePhone:function(){clearInterval(this.timer),e(".code").text("获取验证码"),e(".code").removeClass("timer")},regNumber:function(e){e.target.value=e.target.value.replace(/\D/g,"")}}}}).call(t,i("tPWS"))},seUs:function(e,t){}});