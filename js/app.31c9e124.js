(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({admin:"admin",cart:"cart",login:"login",orders:"orders",product:"product",register:"register"}[e]||e)+"."+{admin:"06fec09e",cart:"1b464516",login:"2c7bef67",orders:"bc5d8183",product:"cd440af0",register:"7ee18e21"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("購物網")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[e.user.islogin?e._e():n("b-nav-item",{attrs:{to:"/register"}},[e._v("註冊")]),e.user.islogin?e._e():n("b-nav-item",{attrs:{to:"/login"}},[e._v("登入")]),e.user.islogin?n("b-nav-item",{attrs:{to:"/cart"}},[e._v("購物車")]):e._e(),e.user.islogin?n("b-nav-item",{attrs:{to:"/orders"}},[e._v("訂單")]):e._e(),e.user.islogin&&e.user.isAdmin?n("b-nav-item",{attrs:{to:"/admin"}},[e._v("管理")]):e._e(),e.user.islogin?n("b-nav-item",{on:{click:e.logout}},[e._v("登出")]):e._e()],1)],1)],1)],1),n("router-view")],1)},i=[],u=n("1da1"),c=(n("96cf"),{name:"App",methods:{logout:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.delete("/users/logout",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.$store.commit("logout"),"/"!==e.$route.path&&e.$router.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"發生錯誤"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.$store.state.jwt.token.length){t.next=2;break}return t.abrupt("return");case 2:if(n=Date.now()-e.$store.state.jwt.received,t.prev=3,!(n>5184e5)){t.next=10;break}return t.next=7,e.axios.post("/users/extend",{},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:r=t.sent,o=r.data,e.$store.commit("extend",o.result);case 10:return t.next=12,e.axios.get("/users/",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 12:a=t.sent,i=a.data,e.$store.commit("getinfo",i.result),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](3),e.$store.commit("logout");case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()}}),s=c,l=n("2877"),d=Object(l["a"])(s,a,i,!1,null,null,null),p=d.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{id:"home"}},[n("b-row",e._l(e.products,(function(e){return n("b-col",{key:e._id,attrs:{cols:"12",md:"6",lg:"4"}},[n("router-link",{attrs:{to:"product/"+e._id}},[n("ProductCard",{attrs:{product:e}})],1)],1)})),1)],1)},g=[],b=(n("d81d"),n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{staticClass:"product-card mb-2",attrs:{title:e.product.name,"sub-title":"$"+e.product.price,"img-top":"","img-src":e.product.image}},[n("b-card-text",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.product.description))])],1)}),h=[],v={name:"ProductCard",props:{product:{type:Object,required:!0}}},w=v,j=Object(l["a"])(w,b,h,!1,null,null,null),x=j.exports,_={name:"Home",data:function(){return{products:[]}},components:{ProductCard:x},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/products");case 3:n=t.sent,r=n.data,e.products=r.result.map((function(e){return e.image&&(e.image="".concat("https://website-frontclass.herokuapp.com","/files/").concat(e.image)),e})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},k=_,y=Object(l["a"])(k,f,g,!1,null,null,null),O=y.exports,$=n("5530"),P=n("2f62"),C=n("0e44");r["default"].use(P["a"]);var A=new P["a"].Store({state:{jwt:{token:"",received:0},user:{account:"",role:0,email:""}},mutations:{login:function(e,t){e.jwt.token=t.token,e.jwt.received=(new Date).getTime(),e.user.account=t.account,e.user.role=t.role,e.user.email=t.email},logout:function(e){e.jwt={token:"",received:0},e.user={account:"",role:0,email:""}},extend:function(e,t){e.jwt.token=t,e.jwt.received=(new Date).getTime()},getinfo:function(e,t){e.user.account=t.account,e.user.role=t.role,e.user.email=t.email}},actions:{},modules:{},getters:{user:function(e){return Object($["a"])({islogin:e.user.account.length>0,isAdmin:1===e.user.role},e.user)}},plugins:[Object(C["a"])()]});r["default"].use(m["a"]);var E=[{path:"/",name:"Home",component:O,meta:{title:"購物網"}},{path:"/product/:id",name:"Product",component:function(){return n.e("product").then(n.bind(null,"d2f1"))},meta:{title:"商品 | 購物網"}},{path:"/cart",name:"Cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))},meta:{title:"購物車 | 購物網",login:!0}},{path:"/orders",name:"Orders",component:function(){return n.e("orders").then(n.bind(null,"159d"))},meta:{title:"訂單 | 購物網",login:!0}},{path:"/register",name:"Register",component:function(){return n.e("register").then(n.bind(null,"73cf"))},meta:{title:"註冊 | 購物網"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"登入 | 購物網"}},{path:"/admin",name:"Admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},children:[{path:"",name:"AdminHome",component:function(){return n.e("admin").then(n.bind(null,"c732"))},meta:{login:!0,admin:!0,title:"管理 | 購物網"}},{path:"products",name:"AdminProducts",component:function(){return n.e("admin").then(n.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"商品管理 | 購物網"}},{path:"orders",name:"AdminOrders",component:function(){return n.e("admin").then(n.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理 | 購物網"}}]}],R=new m["a"]({routes:E});R.beforeEach((function(e,t,n){console.log(A.state.user),e.meta.login&&0===A.state.jwt.token.length?n("/login"):e.meta.admin&&1!==A.state.user.role?n("/"):n()})),R.afterEach((function(e,t){document.title=e.meta.title}));var S=R,T=n("bc3a"),L=n.n(T),M=n("2106"),z=n.n(M),B=n("f9d5"),D=n.n(B),H=(n("4413"),n("657c")),J=(n("2bd9"),{computed:{user:function(){return this.$store.getters.user}}}),q=n("a584");r["default"].use(q["a"],{config:{id:"G-4N8YJ4GCNV"}}),L.a.defaults.baseURL="https://website-frontclass.herokuapp.com",r["default"].use(z.a,L.a),r["default"].use(D.a),r["default"].component("ImgInputer",H["a"]),r["default"].mixin(J),r["default"].config.productionTip=!1,new r["default"]({router:S,store:A,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.31c9e124.js.map