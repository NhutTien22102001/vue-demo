import{m as s,n as a}from"./index.4b47131c.js";const r={name:"DetailComponent",computed:{...s(["loading","data"]),product(){return this.data.product}},methods:{addCart(n){this.$store.dispatch("addCart",n)}},mounted(){this.$store.dispatch("getDetail",this.$route.params.id)}};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"item"},[e("div",{staticClass:"item-box"},[e("span",[t._v(t._s(t.product.title))]),e("figure",{staticClass:"image-box"},[e("img",{attrs:{src:t.product.image,alt:""}})]),e("span",[t._v(t._s(t.product.price)+" $")]),t._v(" "+t._s(t.count)+" "),e("button",{on:{click:function(m){return t.addCart({id:t.product.id,product:t.product.title,price:t.product.price})}}},[t._v(" add cart ")])])])])},o=[],c=a(r,i,o,!1,null,"5d6260b5",null,null);const _=c.exports;const d={components:{DetailComponent:_}};var l=function(){var t=this,e=t._self._c;return e("section",[e("detail-component")],1)},u=[],p=a(d,l,u,!1,null,null,null,null);const f=p.exports;export{f as default};
