(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf364e0"],{6034:function(t,e,s){"use strict";s("c392")},"7e5f":function(t,e,s){"use strict";var c=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"success-wrapper"},[t.showIcon?c("figure",{staticClass:"pic"},[c("img",{attrs:{src:s("8821")}})]):c("figure",{staticClass:"pic fail"},[c("img",{attrs:{src:s("e29b")}})]),c("div",{staticClass:"title"},[t._v(t._s(t.title))]),c("p",{domProps:{innerHTML:t._s(t.content)}}),t.showBtn?c("router-link",{staticClass:"btn",attrs:{to:{name:t.routeLink}}},[t._v(t._s(t.btnTxt))]):t._e()],1)},n=[],i={name:"Success",components:{},props:{showIcon:Boolean,title:String,content:String,showBtn:Boolean,routeLink:String,btnTxt:String},data:function(){return{}},computed:{},beforeDestroy:function(){},mounted:function(){},methods:{}},o=i,r=(s("d77a"),s("2877")),u=Object(r["a"])(o,c,n,!1,null,"2e70e8de",null);e["a"]=u.exports},a063:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopped-wrapper"},[s("Success",{attrs:{showIcon:t.isSuccess,title:t.isSuccess?"完成購票":"交易失敗",content:t.isSuccess?"3秒後自動跳轉查看票券序號<br>若未跳轉請點擊以下按鈕":t.$route.query.msg+"<br>請重新訂購",showBtn:!0,routeLink:t.isSuccess?"Ticket":"Product",btnTxt:t.isSuccess?"前往查看票券序號":"前往商品頁"}})],1)},n=[],i=s("5530"),o=s("2f62"),r=s("7e5f"),u={name:"Shopped",components:{Success:r["a"]},props:{},mixins:[],data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(o["d"])(["isLoading"])),{},{isSuccess:function(){return"1"==this.$route.query.result}}),created:function(){},mounted:function(){var t=this;this.isSuccess&&setTimeout((function(){t.$router.push({name:"Ticket"})}),3e3)},methods:Object(i["a"])({},Object(o["b"])([""])),watch:{}},a=u,l=(s("6034"),s("2877")),p=Object(l["a"])(a,c,n,!1,null,"274c04d8",null);e["default"]=p.exports},c1c2:function(t,e,s){},c392:function(t,e,s){},d77a:function(t,e,s){"use strict";s("c1c2")}}]);
//# sourceMappingURL=chunk-0bf364e0.532175c7.js.map