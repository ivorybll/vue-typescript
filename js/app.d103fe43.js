(function(t){function e(e){for(var r,o,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&p.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"100de955"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1f32857c"}[t]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===u)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||u,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],f.parentNode.removeChild(f),n(a)},f.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var r=u[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=u[t]=[e,n]}));e.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=u[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}u[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-typescript/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v("| "),n("router-link",{attrs:{to:"/shop"}},[t._v("shop")])],1),n("router-view")],1)},u=[],a=(n("5c0b"),n("2877")),i={},c=Object(a["a"])(i,o,u,!1,null,null,null),s=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{on:{click:function(e){return t.add()}}},[t._v(t._s(t.num))]),n("HelloWorld",{attrs:{num:t.num},on:{nums:t.nums}}),n("div",[t._v(t._s(t.num1||t.num))])],1)},f=[],d=n("9ab4"),m=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{on:{click:function(e){return t.send()}}},[t._v(t._s(t.num))])])},v=[],b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(d["b"])(e,t),e.prototype.send=function(){this.$emit("nums",this.num)},e.prototype.getnum=function(t,e){this.$emit("nums",t)},Object(d["a"])([Object(m["b"])()],e.prototype,"num",void 0),Object(d["a"])([Object(m["d"])("num")],e.prototype,"getnum",null),e=Object(d["a"])([Object(m["a"])({name:"Home"})],e),e}(m["c"]),y=b,g=y,_=Object(a["a"])(g,h,v,!1,null,null,null),O=_.exports,j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.num=3,e.num1=0,e}return Object(d["b"])(e,t),e.prototype.add=function(){this.num+=1},e.prototype.nums=function(t){console.log(t),this.num1=t},e=Object(d["a"])([Object(m["a"])({name:"Home",components:{HelloWorld:O}})],e),e}(m["c"]),w=j,k=w,E=Object(a["a"])(k,p,f,!1,null,null,null),S=E.exports;r["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/shop",name:"Shop",component:function(){return n.e("about").then(n.bind(null,"4adf"))}}],P=new l["a"]({mode:"history",base:"/vue-typescript/",routes:x}),C=P,A=n("2f62");r["a"].use(A["a"]);var T=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("833e");r["a"].config.productionTip=!1,new r["a"]({router:C,store:T,render:function(t){return t(s)}}).$mount("#app")}});