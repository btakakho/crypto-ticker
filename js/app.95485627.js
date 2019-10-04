(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/crypto-ticker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},3139:function(t,e,r){"use strict";var n=r("abe7"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"container"},[r("CryptoTicker")],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"page-header"},[r("div",{staticClass:"container"},[r("nav",{staticClass:"navigation"},[r("a",{staticClass:"navigation__link",attrs:{href:"#",title:""}},[t._v("Crypto Ticker App")])])])])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"crypto-ticker"},[t.loading?r("Preloader"):r("table",{staticClass:"crypto-table"},[r("thead",[r("tr",[r("th",{staticClass:"crypto-table__col-name"},[t._v("#")]),r("th",{staticClass:"crypto-table__col-name"},[t._v("Cryptocurrency")]),r("th",{staticClass:"crypto-table__col-name"},[t._v("Price")])])]),r("tbody",t._l(t.sortedCoins,(function(e,n){return r("tr",{key:n,staticClass:"crypto-table__row"},[r("td",{staticClass:"crypto-table__cell crypto-table__position"},[t._v("\n          "+t._s(n+1)+"\n        ")]),r("td",{staticClass:"crypto-table__cell"},[r("div",{staticClass:"crypto-table__coin"},[r("div",{staticClass:"crypto-table__thumbnail"},[r("img",{attrs:{width:"32",height:"32",src:"//cryptocompare.com/"+e.imageUrl,alt:""}})]),r("div",{staticClass:"crypto-table__name"},[r("div",{staticClass:"crypto-table__full-name"},[t._v(t._s(e.fullName))]),r("div",{staticClass:"crypto-table__short-name"},[t._v(t._s(e.shortName))])])])]),r("td",{staticClass:"crypto-table__cell crypto-table__price",class:{up:e.isUp,down:e.isDown}},[t._v("\n          $ "+t._s(e.price)+"\n        ")])])})),0)]),t.loading?t._e():r("InfiniteLoading",{on:{infinite:t.infiniteHandler}},[r("div",{attrs:{slot:"spinner"},slot:"spinner"},[r("Preloader")],1)])],1)},s=[],c=(r("8e6e"),r("bd86")),u=(r("7f7f"),r("28a5"),r("55dd"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),p=r("bc3a"),l=r.n(p),f=r("8055"),h=r.n(f),d=r("e166"),b=r.n(d),y=function(t,e){var r=e._c;return r("div",{staticClass:"preloader"},[r("svg",{staticClass:"preloader__icon",staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[r("path",{attrs:{d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",transform:"rotate(120.556 25 25)"}},[r("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},m=[],v=(r("bc2b"),r("2877")),_={},g=Object(v["a"])(_,y,m,!0,null,null,null),C=g.exports;function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j={components:{Preloader:C,InfiniteLoading:b.a},data:function(){return{api:{crypto:"https://min-api.cryptocompare.com",cryptoStream:"https://streamer.cryptocompare.com/"},coins:{},limit:100,loading:!0,page:0,sortedCoins:[]}},created:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.subscribeStream(),t.next=4,this.setCryptoCurrencyData();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{setCryptoCurrencyData:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCryptoData();case 2:e=t.sent,this.loading=!1,this.setCoins(e),this.setSortedCoins(e),this.addSubs(e);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),subscribeStream:function(){var t=this;this.cryptoio=h.a.connect(this.api.cryptoStream),this.cryptoio.on("m",(function(e){t.handleMessage(e)}))},fetchCryptoData:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("".concat(this.api.crypto,"/data/top/mktcapfull?limit=").concat(this.limit,"&tsym=USD&page=").concat(this.page));case 2:return e=t.sent,t.abrupt("return",this.simplifyCoinsData(e.data.Data));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setCoins:function(t){this.loading?this.coins=t:this.coins=Object.assign(this.coins,t)},setSortedCoins:function(t){var e=this.sortByPrice(t);this.loading?this.sortedCoins=e:this.sortedCoins=this.sortedCoins.concat(e)},addSubs:function(t){var e=[],r=Object.keys(t);r.forEach((function(t){e.push("5~CCCAGG~"+t+"~USD")})),this.cryptoio.emit("SubAdd",{subs:e})},sortByPrice:function(t){return Object.keys(t).sort((function(e,r){return t[r].price-t[e].price})).map((function(e){return t[e]}))},simplifyCoinsData:function(t){var e={};return t.forEach((function(t){t={fullName:t.CoinInfo.FullName,shortName:t.RAW?t.RAW.USD.FROMSYMBOL:0,price:t.RAW?t.RAW.USD.PRICE:0,imageUrl:t.CoinInfo.ImageUrl},e[t.shortName]=t})),e},handleMessage:function(t){if(t=t.split("~"),"1"===t[4]||"2"===t[4]){var e={name:t[2],price:t[5]};"1"===t[4]?(e.isUp=!0,e.isDown=!1):"2"===t[4]&&(e.isUp=!1,e.isDown=!0),this.updateCoin(e)}},updateCoin:function(t){var e=this;this.coins[t.name]=O({},this.coins[t.name],{},t),this.sortedCoins=this.sortByPrice(this.coins),setTimeout((function(){e.coins[t.name].isUp=!1,e.coins[t.name].isDown=!1}),500)},infiniteHandler:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.page+=1,t.prev=1,t.next=4,this.setCryptoCurrencyData();case 4:e.loaded(),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](1),e.complete(),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(e){return t.apply(this,arguments)}return e}()}},x=j,P=(r("3139"),Object(v["a"])(x,o,s,!1,null,null,null)),S=P.exports,k={components:{CryptoTicker:S}},D=k,R=(r("5c0b"),Object(v["a"])(D,a,i,!1,null,null,null)),U=R.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"9eb5":function(t,e,r){},abe7:function(t,e,r){},bc2b:function(t,e,r){"use strict";var n=r("9eb5"),a=r.n(n);a.a},e332:function(t,e,r){}});
//# sourceMappingURL=app.95485627.js.map