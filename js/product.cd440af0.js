(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,s=o.toString,c=/^\s*function ([^ (]*)/,i="name";n&&!(i in o)&&a(o,i,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},d2f1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"product"}},[r("b-overlay",{attrs:{show:!t.sell},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("h1",[t._v("已下架")])]},proxy:!0}])},[r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("h1",[t._v(t._s(t.name))])]),r("b-col",{attrs:{cols:"6"}},[r("h4",{staticClass:"text-right"},[t._v("$"+t._s(t.price))]),r("b-form-input",{attrs:{type:"number",state:t.amountstate},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}}),r("b-btn",{attrs:{variant:"primary"},on:{click:t.addcart}},[t._v("加入購物車")])],1),r("b-col",{attrs:{cols:"12"}},[r("img",{staticClass:"w-100",attrs:{src:t.image}})]),r("b-col",{attrs:{cols:"12"}},[r("p",[t._v(t._s(t.description))])])],1)],1)],1)},a=[],o=r("1da1"),s=(r("b0c0"),r("a4d3"),r("e01a"),r("99af"),r("96cf"),{name:"Product",data:function(){return{name:"",price:"",description:"",image:"",sell:!0,amount:0}},computed:{amountstate:function(){return 0===this.amount?null:this.amount>0}},methods:{addcart:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.amountstate){e.next=3;break}return t.$swal({icon:"error",title:"錯誤",text:"請輸入正確數量"}),e.abrupt("return");case 3:if(0!==t.$store.state.jwt.token.length){e.next=6;break}return t.$swal({icon:"error",title:"錯誤",text:"請先登入"}),e.abrupt("return");case 6:return e.prev=6,e.next=9,t.axios.post("/users/cart",{product:t.$route.params.id,amount:t.amount},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 9:t.$swal({icon:"success",title:"成功",text:"成功購物車"}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](6),t.$swal({icon:"error",title:"錯誤",text:"加入購物車失敗"});case 15:case"end":return e.stop()}}),e,null,[[6,12]])})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products/"+t.$route.params.id);case 3:r=e.sent,n=r.data,t.name=n.result.name,t.price=n.result.price,t.description=n.result.description,t.image="".concat("https://website-frontclass.herokuapp.com","/files/").concat(n.result.image),t.sell=n.result.sell,document.title="".concat(t.name," | 購物網"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t.$router.push("/");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}),c=s,i=r("2877"),u=Object(i["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),s=r("5135"),c=r("861d"),i=r("9bf2").f,u=r("e893"),l=o.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(m,l);var d=m.prototype=l.prototype;d.constructor=m;var f=d.toString,b="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;i(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=f.call(t);if(s(p,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=product.cd440af0.js.map