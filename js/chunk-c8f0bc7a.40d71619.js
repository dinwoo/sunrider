(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8f0bc7a"],{"2b16":function(t,i,n){"use strict";n("3e1c")},"3e1c":function(t,i,n){},aeca:function(t,i,n){"use strict";var e=n("5530"),s=n("2f62");i["a"]={data:function(){return{timer:null}},computed:Object(e["a"])(Object(e["a"])({},Object(s["d"])(["countDownTime"])),{},{countDownDay:function(){var t=Math.floor(this.countDownTime/60/60/24);return t<10?"0"+t:String(t)},countDownHour:function(){var t=Math.floor(this.countDownTime/60/60%24);return t<10?"0"+t:String(t)},countDownMinute:function(){var t=Math.floor(this.countDownTime/60%1440%60);return t<10?"0"+t:String(t)},countDownSecond:function(){var t=Math.floor(this.countDownTime%60);return t<10?"0"+t:String(t)}}),mounted:function(){window.addEventListener("unload",this.stopTimer)},beforeDestroy:function(){window.removeEventListener("unload",this.stopTimer),this.stopTimer()},methods:Object(e["a"])(Object(e["a"])({},Object(s["c"])({setCountDownTime:"SET_COUNT_DOWN_TIME"})),{},{initTimer:function(){this.timer||(this.timer=setInterval(this.countdown,1e3))},countdown:function(){this.countDownTime>0?this.setCountDownTime(this.countDownTime-1):this.stopTimer()},stopTimer:function(){clearInterval(this.timer),this.timer=null}})}},e20c:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"home-wrapper"},[n("section",{staticClass:"banner"},[t._m(0),n("div",{staticClass:"slogan-ch"},[t._v("百年傳承 40載起")]),n("div",{staticClass:"slogan-en"},[t._v("Century Heritage, Successor Innovation")]),n("div",{staticClass:"timer"},[n("div",{staticClass:"timer-title"},[t._v("直播倒數")]),n("div",{staticClass:"timer-box"},["00"!=t.countDownDay||"00"!=t.countDownHour||"00"!=t.countDownMinute||0==t.countDownTime?[n("div",{staticClass:"timer-item"},[n("div",{staticClass:"number"},[t._v(t._s(t.countDownDay))]),n("div",{staticClass:"unit"},[t._v("天")])]),n("div",{staticClass:"timer-item"},[n("div",{staticClass:"number"},[t._v(t._s(t.countDownHour))]),n("div",{staticClass:"unit"},[t._v("小時")])]),n("div",{staticClass:"timer-item"},[n("div",{staticClass:"number"},[t._v(t._s(t.countDownMinute))]),n("div",{staticClass:"unit"},[t._v("分鐘")])])]:[n("div",{staticClass:"timer-item"},[n("div",{staticClass:"number"},[t._v(t._s(t.countDownSecond))]),n("div",{staticClass:"unit"},[t._v("秒")])])]],2)]),n("div",{staticClass:"status"},[t._v("直播尚未開放入場")]),t._m(1),n("div",{staticClass:"main-btn",class:{disable:t.countDownTime>0},on:{click:t.goLivePage}},[t._v("開始觀看")])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("figure",[e("img",{attrs:{src:n("6040")}})])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"remark"},[t._v("將於12/4下午2點開放入場"),n("br"),t._v("點擊以下按鈕，即可進入觀看！")])}],o=n("5530"),c=n("2f62"),a=n("aeca"),u={name:"WaitLive",components:{},props:{},mixins:[a["a"]],data:function(){return{}},computed:Object(o["a"])({},Object(c["d"])(["isLoading","countDownTime"])),created:function(){},mounted:function(){this.init()},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["checkLiveStatus"])),{},{init:function(){var t=this;""==this.token?this.lineLogin("1615800146-QLq3EnwB").then((function(){t.checkLiveStatusApi(),console.log("success")})).catch((function(){console.log("error")})):this.checkLiveStatusApi()},checkLiveStatusApi:function(){var t=this;this.checkLiveStatus().then((function(i){console.log("success"),i.isBinding?i.countdownSeconds<=0?t.$router.push({name:"Live"}):t.initTimer():t.$router.push({name:"Exchange"})})).catch((function(i){console.log(i),"userVerificationError"==i&&t.init(),console.log("fail")}))},goLivePage:function(){this.countDownTime<=0?this.$router.push({name:"Live"}):alert("直播尚未開始！")}}),watch:{}},r=u,l=(n("2b16"),n("2877")),v=Object(l["a"])(r,e,s,!1,null,"ff34e448",null);i["default"]=v.exports}}]);
//# sourceMappingURL=chunk-c8f0bc7a.40d71619.js.map