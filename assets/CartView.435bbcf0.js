import{m as o,n as a}from"./index.4b47131c.js";const c={name:"CartComponent",computed:{...o(["data"]),cartData(){return this.data.cart}},methods:{plus(n){this.$store.dispatch("plusItem",n)},minus(n){this.$store.dispatch("minusItem",n)},remove(n){this.$store.dispatch("removeItem",n)}}};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.cartData.length?t._e():e("h1",[t._v("No item in cart")]),t.cartData.length?e("div",{staticClass:"cart-list"},[e("table",{attrs:{border:"1"}},[t._m(0),t._l(t.cartData,function(_,r){return e("tr",{key:r},[e("td",[t._v(t._s(_.product))]),e("td",[t._v(t._s(_.quantity))]),e("td",[t._v(t._s(_.price)+" $")]),e("td",[t._v(t._s((_.price*_.quantity).toFixed(0))+" $")]),e("td",[e("button",{attrs:{disabled:_.quantity===1},on:{click:function(s){return t.minus(r)}}},[t._v(" - ")])]),e("td",[e("button",{on:{click:function(s){return t.plus(r)}}},[t._v("+")])]),e("td",[e("button",{on:{click:function(s){return t.remove(r)}}},[t._v("X")])])])})],2)]):t._e()])},u=[function(){var n=this,t=n._self._c;return t("tr",[t("th",[n._v("Name")]),t("th",[n._v("Quantity")]),t("th",[n._v("Price")]),t("th",[n._v("Total")])])}],l=a(c,i,u,!1,null,"de2738a7",null,null);const v=l.exports;const m={components:{CartComponent:v}};var d=function(){var t=this,e=t._self._c;return e("section",[e("cart-component")],1)},p=[],f=a(m,d,p,!1,null,null,null,null);const $=f.exports;export{$ as default};