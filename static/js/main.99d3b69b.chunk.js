(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__3oE1S",overlayVisible:"Drawer_overlayVisible__1Onpt",drawer:"Drawer_drawer__XaZMH"}},20:function(e,t,c){e.exports={card:"Card_card__35wN0",favorite:"Card_favorite__-ptFE",button:"Card_button__19Of0"}},43:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(34),s=c.n(r),i=c(14),o=(c(42),c(43),c(5)),l=c(8),j=c.n(l),d=c(11),u=c(13),b=c(4),x=c(2),m=c(6),O=c.n(m),h=Object(a.createContext)({}),f=c(1),p=function(e){var t=e.onOpenCart,c=Object(a.useContext)(h).cartItems.reduce((function(e,t){return e+t.price}),0);return Object(f.jsxs)("header",{className:"d-flex justify-between p-40",children:[Object(f.jsx)(i.b,{to:"/react-sneakers",children:Object(f.jsxs)("div",{className:"d-flex align-center headerLeft",children:[Object(f.jsx)("img",{src:"img/logo.png",alt:"logo"}),Object(f.jsxs)("div",{className:"headerInfo",children:[Object(f.jsx)("h1",{className:"text-uppercase",children:"REACT SNEAKERS"}),Object(f.jsx)("span",{className:"opacity-7",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:"d-flex headerRight",children:[Object(f.jsxs)("li",{className:"d-flex align-center mr-30",onClick:t,children:[Object(f.jsx)("img",{width:"20",height:"20",src:"img/cart.svg",alt:"cart",className:"mr-10"}),Object(f.jsxs)("span",{children:[c," \u0440\u0443\u0431."]})]}),Object(f.jsx)("li",{className:"mr-30",children:Object(f.jsx)(i.b,{to:"/react-sneakers/favorites",children:Object(f.jsx)("img",{src:"img/favorite.svg",alt:"favorite",style:{verticalAlign:"middle"}})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/react-sneakers/orders",children:Object(f.jsx)("img",{src:"img/user.svg",alt:"user",style:{verticalAlign:"middle"}})})})]})]})},v=c(36),g=function(e){var t=e.items,c=e.onRemove,a=e.onClose,n=e.onClickOrder,r=e.isLoading,s=t.reduce((function(e,t){return e+t.price}),0),i=s/100*5;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"d-flex justify-between",children:[Object(f.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 "}),Object(f.jsx)("img",{src:"img/btn-remove.svg",alt:"Remove",className:"cu-p",onClick:a})]}),Object(f.jsx)("div",{className:"cartItems",children:t.map((function(e){return Object(f.jsxs)("div",{className:"d-flex align-center mt-20 cartItem",children:[Object(f.jsx)("img",{className:"mr-20",width:70,height:70,src:"img/sneakers/".concat(e.imageName,".jpg"),alt:"Sneakers"}),Object(f.jsxs)("div",{className:"mr-20",children:[Object(f.jsx)("p",{className:"mb-5",children:e.name}),Object(f.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(f.jsx)("img",{className:"removeCartItem",src:"img/btn-remove.svg",alt:"Remove",onClick:function(){return c(e.id)}})]},e.id)}))}),Object(f.jsxs)("div",{className:"cartTotalBlock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{className:"d-flex align-end mb-20",children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[s," \u0440\u0443\u0431."]})]}),Object(f.jsxs)("li",{className:"d-flex align-end mb-20",children:[Object(f.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[i," \u0440\u0443\u0431. "]})]})]}),Object(f.jsxs)("button",{disabled:r,className:"greenButton",onClick:n,children:[Object(f.jsx)("span",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]})},k=function(e){var t=e.title,c=e.description,n=e.imageUrl,r=Object(a.useContext)(h).setOpenCart;return Object(f.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{className:"mb-20",width:"120px",height:"120px",src:n,alt:t}),Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{className:"opacity-6",children:c}),Object(f.jsxs)("button",{className:"greenButton",onClick:function(){return r(!1)},children:[Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),Object(f.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})]})},N=c(19),w=c.n(N),C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},y=function(e){var t=e.onClose,c=e.items,n=e.onRemove,r=e.opened,s=Object(a.useContext)(h),i=s.cartItems,o=s.setCartItems,l=Object(a.useState)(!1),d=Object(b.a)(l,2),x=d[0],m=d[1],p=Object(a.useState)(null),N=Object(b.a)(p,2),y=N[0],I=N[1],S=Object(a.useState)(!1),_=Object(b.a)(S,2),A=_[0],L=_[1],E=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,O.a.post("https://6101a15749a5370017871226.mockapi.io/orders",{items:i});case 4:t=e.sent,I(t.data.id),m(!0),o([]),c=Object(v.a)(i),e.prev=9,c.s();case 11:if((a=c.n()).done){e.next=19;break}return n=a.value,e.next=15,O.a.delete("https://6101a15749a5370017871226.mockapi.io/cart/".concat(n.id));case 15:return e.next=17,C(1e3);case 17:e.next=11;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),c.e(e.t0);case 24:return e.prev=24,c.f(),e.finish(24);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(1),console.log(e.t1);case 32:L(!1);case 33:case"end":return e.stop()}}),e,null,[[1,29],[9,21,24,27]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(w.a.overlay," ").concat(r?w.a.overlayVisible:""),children:Object(f.jsx)("div",{className:"d-flex flex-column ".concat(w.a.drawer),children:c.length?Object(f.jsx)(g,{items:c,onClose:t,onRemove:n,onClickOrder:E,isLoading:A}):Object(f.jsx)(k,{title:x?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0443 \u043f\u0443\u0441\u0442\u0430\u044f",imageUrl:"img/".concat(x?"complete-order":"empty-cart",".jpg"),description:x?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})})},I=c(20),S=c.n(I),_=c(37),A=function(e){var t=e.id,c=e.name,n=e.imageName,r=e.price,s=e.favorited,i=void 0!==s&&s,o=e.isLoading,l=void 0===o||o,j=Object(a.useContext)(h),d=j.isItemAdded,u=j.onAddToFavorites,x=j.onAddToCart,m=Object(a.useState)(i),O=Object(b.a)(m,2),p=O[0],v=O[1],g={name:c,imageName:n,price:r,parentId:t,id:t};return Object(f.jsx)("div",{className:S.a.card,children:l?Object(f.jsxs)(_.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(f.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(f.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(f.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:S.a.favorite,children:Object(f.jsx)("img",{src:"img/heart-".concat(p?"liked":"unliked",".svg"),onClick:function(){u(g),v(!p)},alt:"Liked"})}),Object(f.jsx)("img",{width:133,height:112,src:"img/sneakers/".concat(n,".jpg"),alt:""}),Object(f.jsx)("h5",{children:c}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("b",{children:[r," \u0440\u0443\u0431."]})]}),Object(f.jsx)("img",{className:S.a.button,src:"img/btn-".concat(d(t)?"checked":"plus",".svg"),alt:"Plus",onClick:function(){return x(g)}})]})]})})},L=function(e){var t=e.searchInput,c=e.setSearchInput,n=e.onChangeInputSearch,r=e.isLoading,s=Object(a.useContext)(h).items;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex justify-between align-center mb-40",children:[Object(f.jsx)("h2",{children:t?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(t):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"search-block",children:[Object(f.jsx)("img",{src:"img/search.svg",alt:"Search"}),t&&Object(f.jsx)("img",{className:"clear",src:"img/btn-remove.svg",alt:"Clear",onClick:function(){return c("")}}),Object(f.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:n,value:t})]})]}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(r?Object(d.a)(Array(10)):e).map((function(e,t){return Object(a.createElement)(A,Object(o.a)(Object(o.a)({},e),{},{key:t,isLoading:r}))}))}()})]})},E=(c(69),function(){var e=Object(a.useContext)(h).favorites;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex justify-between align-center mb-40",children:Object(f.jsx)("h2",{children:(e.length,"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438")})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:e.map((function(e,t){return Object(a.createElement)(A,Object(o.a)(Object(o.a)({},e),{},{key:t,favorited:!0,isLoading:!1}))}))})]})}),F=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(b.a)(r,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://6101a15749a5370017871226.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),console.log(c),Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex justify-between align-center mb-40",children:Object(f.jsx)("h2",{children:c.length?"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b":"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(d.a)(Array(8)):c).map((function(e,t){return Object(a.createElement)(A,Object(o.a)(Object(o.a)({},e),{},{key:t,isLoading:i}))}))})]})};var R=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(b.a)(r,2),i=s[0],l=s[1],m=Object(a.useState)([]),v=Object(b.a)(m,2),g=v[0],k=v[1],N=Object(a.useState)(!1),w=Object(b.a)(N,2),C=w[0],I=w[1],S=Object(a.useState)(""),_=Object(b.a)(S,2),A=_[0],R=_[1],T=Object(a.useState)(!0),B=Object(b.a)(T,2),P=B[0],D=B[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://6101a15749a5370017871226.mockapi.io/cart");case 3:return t=e.sent,e.next=6,O.a.get("https://6101a15749a5370017871226.mockapi.io/favorites");case 6:return c=e.sent,e.next=9,O.a.get("https://6101a15749a5370017871226.mockapi.io/items");case 9:a=e.sent,D(!1),n(Object(d.a)(t.data)),k(Object(d.a)(c.data)),l(Object(d.a)(a.data)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=c.find((function(e){return+e.parentId===+t.id})))){e.next=8;break}return n((function(e){return e.filter((function(e){return+e.parentId!==+t.id}))})),e.next=6,O.a.delete("https://6101a15749a5370017871226.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return n((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,O.a.post("https://6101a15749a5370017871226.mockapi.io/cart",t);case 11:r=e.sent,s=r.data,n((function(e){return e.map((function(e){return e.parentId===s.parentId?Object(o.a)(Object(o.a)({},e),{},{id:s.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://6101a15749a5370017871226.mockapi.io/cart/".concat(t));case 3:n((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(h.Provider,{value:{cartItems:c,items:i,favorites:g,isItemAdded:function(e){return c.some((function(t){return+t.parentId===+e}))},onAddToFavorites:function(e){try{g.find((function(t){return+t.id===+e.id}))?(O.a.delete("https://6101a15749a5370017871226.mockapi.io/favorites/".concat(e.id)),k((function(t){return t.filter((function(t){return+t.id!==+e.id}))}))):O.a.post("/favorites",e).then((function(t){var c=t.data;k((function(t){return[].concat(Object(d.a)(t),[Object(o.a)(Object(o.a)({},e),{},{id:c.id})])}))}))}catch(t){console.error(t)}},onAddToCart:V,setOpenCart:I,setCartItems:n},children:Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(y,{onClose:function(){return I(!1)},items:c,onRemove:J,opened:C}),Object(f.jsx)(p,{onOpenCart:function(){return I(!0)}}),Object(f.jsx)(x.a,{path:"/react-sneakers",exact:!0,children:Object(f.jsx)(L,{items:i,cartItems:c,searchInput:A,setSearchInput:R,onChangeInputSearch:function(e){var t=e.target;R(t.value)},isLoading:P})}),Object(f.jsx)(x.a,{path:"/react-sneakers/favorites",children:Object(f.jsx)(E,{})}),Object(f.jsx)(x.a,{path:"/react-sneakers/orders",children:Object(f.jsx)(F,{})})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(R,{})})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.99d3b69b.chunk.js.map