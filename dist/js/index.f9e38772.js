(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={index:0},r={index:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-d61255aa":"35beff97"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-d61255aa":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-d61255aa":"fa03b328"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],f.parentNode.removeChild(f),n(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"0992":function(t){t.exports=JSON.parse('[{"name":"写在前面","path":"/preface","title":"写在前面"},{"name":"test","groups":[{"groupName":"测试组件","list":[{"path":"/test1","title":"测试1"},{"path":"/test2","title":"测试2"}]}]},{"name":"components","groups":[{"groupName":"基础组件","list":[{"path":"/text","title":"文字"},{"path":"/hoverButton","title":"按钮hover"}]}]}]')},"09c6":function(t,e,n){},"24eb":function(t,e,n){"use strict";var a=n("09c6"),s=n.n(a);s.a},"479d":function(t,e,n){},"4a77":function(t,e,n){"use strict";var a=n("5b3a"),s=n.n(a);s.a},"4c18":function(t,e,n){},"4d1c":function(t,e,n){"use strict";var a=n("accf"),s=n.n(a);s.a},5625:function(t,e,n){"use strict";var a=n("479d"),s=n.n(a);s.a},"5b3a":function(t,e,n){},"5f5e":function(t,e,n){"use strict";var a=n("a967"),s=n.n(a);s.a},"6a59":function(t,e,n){},a967:function(t,e,n){},accf:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("4160"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("Logo")],1),n("button",{staticClass:"toGithub"},[t._v("View on GitHub")])]),n("div",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("nav-side",{attrs:{data:t.navsData}})],1),n("div",{staticClass:"view page-container"},[n("router-view")],1)])])},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Logo"},[n("svg",{staticClass:"svgDom"},[n("text",{staticClass:"text text-1",style:{"font-size":t.size+"px"},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" sq-ui ")]),n("text",{staticClass:"text text-2",style:{"font-size":t.size+"px"},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" sq-ui ")]),n("text",{staticClass:"text text-3",style:{"font-size":t.size+"px"},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" sq-ui ")]),n("text",{staticClass:"text text-4",style:{"font-size":t.size+"px"},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" sq-ui ")])])])},i=[],c={data:function(){return{size:36}}},l=c,u=(n("e25e"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,"723bb7f2",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav"},[n("ul",t._l(t.data,(function(e,a){return n("li",{key:a,staticClass:"nav-item"},[e.groups?t._l(e.groups,(function(e,a){return n("div",{key:a,staticClass:"nav-group"},[n("div",{staticClass:"nav-group__title"},[t._v(t._s(e.groupName))]),n("ul",{staticClass:"pure-menu-list"},t._l(e.list,(function(e,a){return n("li",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!navItem.disabled"}],key:a,staticClass:"nav-item"},[n("router-link",{attrs:{"active-class":"active",to:e.path,exact:""},domProps:{textContent:t._s(e.title)}})],1)})),0)])})):[n("router-link",{attrs:{"active-class":"active",to:e.path,exact:""},domProps:{textContent:t._s(e.title)}})]],2)})),0)])},h=[],m={props:{data:Array},data:function(){return{highlights:[],navState:[],isSmallScreen:!1,isFade:!1}}},v=m,x=(n("4a77"),Object(u["a"])(v,p,h,!1,null,null,null)),g=x.exports,y=n("0992"),b={components:{Logo:f,navSide:g},data:function(){return{navsData:y}}},C=b,_=(n("4d1c"),Object(u["a"])(C,s,r,!1,null,null,null)),w=_.exports,q=(n("99af"),n("b0c0"),n("2909")),E=n("8c4f");a["a"].use(E["a"]);var k=function(t){var e=[];return t.forEach((function(t){t.groups?t.groups.forEach((function(t){t.list.forEach((function(t){e.push({path:t.path,name:t.name,component:function(e){return n.e("chunk-d61255aa").then(function(){return e(n("828d")("./docs".concat(t.path,".md")))}.bind(null,n)).catch(n.oe)}})}))})):e.push({path:t.path,name:t.name,component:function(e){return n.e("chunk-d61255aa").then(function(){return e(n("828d")("./docs".concat(t.path,".md")))}.bind(null,n)).catch(n.oe)}})})),e},S=k(y),O=new E["a"]({mode:"hash",base:"",routes:[{path:"/",redirect:"/preface"}].concat(Object(q["a"])(S))}),j=n("1487"),z=n.n(j),$=(n("6e2e"),n("d81d"),n("5530")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"changeColor"===t.type?n("button",{staticClass:"sq-button-changeColor btn"},[t._v(" 变色按钮 ")]):"flash"===t.type?n("button",{staticClass:"sq-button-flash btn"},[t._v(" 闪光按钮 ")]):"open"===t.type?n("button",{staticClass:"sq-button-open btn"},[t._v(" 开合按钮 ")]):t._e()},N=[],T={name:"SqButton",props:{type:{type:String,default:"",required:!1}}},B=T,P=(n("ef52"),Object(u["a"])(B,A,N,!1,null,"747d0d8e",null)),D=P.exports;D.install=function(t){t.component(D.name,D)};var M=D,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SqText"},[n("svg",{staticClass:"svgDom",style:{width:4*t.size+"px",height:2*t.size+"px"}},[n("text",{staticClass:"text text-1",style:{"font-size":t.size+"px",stroke:t.colors[0],"text-shadow":" 0 0 5px "+t.colors[0]},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" "+t._s(t.text)+" ")]),n("text",{staticClass:"text text-2",style:{"font-size":t.size+"px",stroke:t.colors[1],"text-shadow":" 0 0 5px "+t.colors[1]},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" "+t._s(t.text)+" ")]),n("text",{staticClass:"text text-3",style:{"font-size":t.size+"px",stroke:t.colors[2],"text-shadow":" 0 0 5px "+t.colors[2]},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" "+t._s(t.text)+" ")]),n("text",{staticClass:"text text-4",style:{"font-size":t.size+"px",stroke:t.colors[3],"text-shadow":" 0 0 5px "+t.colors[3]},attrs:{"text-anchor":"middle",x:"50%",y:"50%"}},[t._v(" "+t._s(t.text)+" ")])])])},L=[],Z={name:"SqText",props:{text:{type:String,default:"sq-ui",required:!1},size:{type:String,default:"36",required:!1},colors:{type:Array[String],default:function(){return["#fc297f","#400082","#ff6464","#f5b5fc"]},required:!1}}},J=Z,V=(n("5f5e"),Object(u["a"])(J,H,L,!1,null,"02c3d814",null)),F=V.exports;F.install=function(t){t.component(F.name,F)};var G=F,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SqTextDraw"},[n("svg",{staticClass:"svgDom"},[n("path",{staticClass:"word",attrs:{id:"path1",d:"M7120,7211.39c0-1.52-1.87-3.26-5.62-5.2q-7.14-3.66-9.65-5.86a6.42,6.42,0,0,1-2.52-4.9q0-7,7-11.6t11.44-4.61a6.82,6.82,0,0,1,4.13,1,4,4,0,0,1,1.28,3.41,2.34,2.34,0,0,1-.93,1.86,2.66,2.66,0,0,1-1.46.77,4.63,4.63,0,0,1-1.51-.52,5,5,0,0,0-1.48-.5q-1.75,0-7.13,2.57c-3.59,1.71-5.38,3.65-5.38,5.8a4.63,4.63,0,0,0,1.9,3.57,33.79,33.79,0,0,0,6.82,3.92,26.2,26.2,0,0,1,6.34,4.06,6.65,6.65,0,0,1,2.38,5.08q0,5.39-7.42,8.42a37.32,37.32,0,0,1-14.17,3c-3.8,0-5.69-1.29-5.69-3.87a2.05,2.05,0,0,1,1.28-2,5.69,5.69,0,0,1,2.58-.64,11.18,11.18,0,0,1,2,.35,10.12,10.12,0,0,0,1.9.36,30.18,30.18,0,0,0,8.36-1.3Q7119,7213.33,7120,7211.39Z",transform:"translate(-7098.38 -7161.4)"}}),n("path",{staticClass:"word",attrs:{id:"path2",d:"M7157.09,7208c-.12,0-.43.21-.92.77a44.92,44.92,0,0,1-9.38,8.21,16.3,16.3,0,0,1-8.51,2.76,6,6,0,0,1-5.17-2.72,11.72,11.72,0,0,1-1.93-6.95q0-9.55,8.79-20t17.75-10.46q3.3,0,4.22,3.8a1.64,1.64,0,0,0,1.37,1.3c2.18.52,3.27,1.71,3.27,3.59a47.37,47.37,0,0,1-1.65,8.61q-1.17,4.6-3.55,17.3a133.21,133.21,0,0,0-2.57,18.84c-.09,2.72-.18,4.56-.25,5.52a3,3,0,0,1-1.21,2.29,4.26,4.26,0,0,1-2.65.84,2.72,2.72,0,0,1-2.32-1.14,4.67,4.67,0,0,1-.85-2.87q0-1.09,1.13-7.47t2.42-12.11Q7156.6,7211.14,7157.09,7208Zm2.7-16.84c0-3.66-1.39-5.48-4.18-5.48q-5.13,0-11.88,8.42t-6.75,15.45q0,4.32,2.84,4.32,5.31,0,12.64-7.89T7159.79,7191.14Z",transform:"translate(-7098.38 -7161.4)"}}),n("path",{staticClass:"word",attrs:{id:"path3",d:"M7192.17,7196.55h2.57a76.62,76.62,0,0,0,9.74-.45,22.92,22.92,0,0,1,3.09-.21,9.92,9.92,0,0,1,2.73.81,6.22,6.22,0,0,1,2.44,1.35,2.45,2.45,0,0,1,.39,1.46,2.56,2.56,0,0,1-.53,1.83,3.42,3.42,0,0,1-2.29.52,7.81,7.81,0,0,1-2.18-.45,7.7,7.7,0,0,0-2.35-.46c-.26,0-1.11.06-2.57.18a27.47,27.47,0,0,1-4.22-.18q-2.35-.21-3.51-.21-1.62,0-4.89.21c-2.18.14-3.83.21-5,.21a8.18,8.18,0,0,1-2.72-.37,1.58,1.58,0,0,1-1-1.67,2.61,2.61,0,0,1,.48-1.32c.31-.5,1.38-.9,3.21-1.19a27.4,27.4,0,0,1,3.94-.44Z",transform:"translate(-7098.38 -7161.4)"}}),n("path",{staticClass:"word",attrs:{id:"path4",d:"M7245.15,7204.15a48.82,48.82,0,0,1-9.21,11.71q-4.71,4.14-8.75,4.14c-1.55,0-3.12-.9-4.73-2.7s-2.41-4.59-2.41-8.34q0-4.6,2.22-13.57,1.86-7.49,1.86-10.51a3.37,3.37,0,0,1,3.2-2.11,2.92,2.92,0,0,1,2.35,1,3.28,3.28,0,0,1,.88,2.16,21.53,21.53,0,0,1-1.72,7q-3.27,8.82-3.27,15.15c0,3.84.89,5.77,2.67,5.77q3.42,0,8.69-5.8t9-16.18a24.39,24.39,0,0,1,2.41-5.39,3,3,0,0,1,2.51-1.25c1.6,0,2.39,1,2.39,3.16a15.77,15.77,0,0,1-.66,2.57,55,55,0,0,0-2.11,14.55q0,8.23,2.7,10.66c.94.86,1.41,1.57,1.41,2.11s-.47,1.25-1.42,1.79a5.33,5.33,0,0,1-2.59.81q-2.46,0-4-3.66t-1.51-10.79v-1.16C7245.12,7204.93,7245.13,7204.55,7245.15,7204.15Z",transform:"translate(-7098.38 -7161.4)"}}),n("path",{staticClass:"word",attrs:{id:"path5",d:"M7271,7211.64a27.67,27.67,0,0,0,.74,6,5.24,5.24,0,0,1,.14,1.05c0,.43-.39,1-1.16,1.64a3.73,3.73,0,0,1-2.46,1c-2.28,0-3.41-2.09-3.41-6.26s.89-11.13,2.67-20.46a48.76,48.76,0,0,0,.91-6,8.12,8.12,0,0,1,.81-3.78,2.5,2.5,0,0,1,2.29-1.56,4.29,4.29,0,0,1,2.83.86,2.46,2.46,0,0,1,1,1.91,10.55,10.55,0,0,1-.49,2.78,130.08,130.08,0,0,0-3.27,13.29A62.32,62.32,0,0,0,7271,7211.64Zm4.6-39.27c-.49,0-.86-.53-1.12-1.58a9.76,9.76,0,0,0-.39-1.09,10.73,10.73,0,0,1-.95-4,4,4,0,0,1,1.67-2.86,5.53,5.53,0,0,1,3.71-1.46,4.43,4.43,0,0,1,2.29.79q1.26.8,1.26,1.53a15.41,15.41,0,0,1-.86,3.94,5.86,5.86,0,0,1-2.74,3.74A7,7,0,0,1,7275.56,7172.37Z",transform:"translate(-7098.38 -7161.4)"}})])])},Q=[],K={name:"SqTextDraw"},R=K,U=(n("24eb"),Object(u["a"])(R,I,Q,!1,null,"943449c6",null)),W=U.exports;W.install=function(t){t.component(W.name,W)};var X=W,Y=[M,G,X],tt=function t(e){t.installed||(t.installed=!0,Y.map((function(t){return e.component(t.name,t)})))};"undefined"!==typeof window&&window.Vue&&tt(window.Vue);var et=Object($["a"])({install:tt},Y),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block",class:t.blockClass},[n("div",{staticClass:"source"},[t._t("source")],2),n("div",{ref:"meta",staticClass:"meta"},[t.$slots.default?n("div",{staticClass:"description"},[t._t("default")],2):t._e(),n("div",{staticClass:"highlight"},[t._t("highlight")],2)]),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":t.fixedControl},on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("transition",{attrs:{name:"text-slide"}},[n("span",[t._v(t._s(t.controlText))])])],1)])},at=[],st=(n("ac1f"),n("1276"),{data:function(){return{isExpanded:!1,fixedControl:!1,scrollParent:null}},computed:{lang:function(){return this.$route.path.split("/")[1]},blockClass:function(){return"demo-".concat(this.lang," demo-").concat(this.$router.currentRoute.path.split("/").pop())},controlText:function(){return this.isExpanded?"隐藏代码":"显示代码"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(t){this.codeArea.style.height=t?"".concat(this.codeAreaHeight+1,"px"):"0",console.log(this.$el.getElementsByClassName("description").length),console.log(this.$el.getElementsByClassName("highlight")),console.log(this.codeAreaHeight),t||(this.fixedControl=!1,this.$refs.control.style.left="0")}}}),rt=st,ot=(n("5625"),Object(u["a"])(rt,nt,at,!1,null,null,null)),it=ot.exports;n("4c18");a["a"].config.productionTip=!1,a["a"].use(et),a["a"].component("DemoBlock",it),O.afterEach((function(){a["a"].nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,z.a.highlightBlock)}))})),a["a"].use(et),new a["a"]({router:O,render:function(t){return t(w)}}).$mount("#app")},ce0d:function(t,e,n){},e25e:function(t,e,n){"use strict";var a=n("ce0d"),s=n.n(a);s.a},ef52:function(t,e,n){"use strict";var a=n("6a59"),s=n.n(a);s.a}});
//# sourceMappingURL=index.f9e38772.js.map