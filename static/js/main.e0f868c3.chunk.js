(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(62)},62:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(27),u=n.n(l),o=n(7),m=n(8),i=n(1),s=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),n,c.a.createElement("button",{onClick:function(){return a(n-1)}},"-"),c.a.createElement("button",{onClick:function(){return a(0)}},"reset"))},E=function(){var e=Object(r.useContext)(p);return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"multiply: ",2*e),c.a.createElement(f,null))},f=function(){var e=Object(r.useContext)(p);return c.a.createElement("p",null,"square: ",e*e)},p=Object(r.createContext)(0),b=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement(p.Provider,{value:n},n,c.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),c.a.createElement(E,null))};!function(e){e.Increment="Increment",e.Decrement="Decrement",e.Reset="Reset"}(a||(a={}));var d,v=function(e,t){switch(t.type){case a.Increment:return{count:e.count+1};case a.Decrement:return{count:e.count-1};case a.Reset:return{count:0};default:throw new Error}},h={count:0},g=function(){var e=Object(r.useReducer)(v,h),t=Object(i.a)(e,2),n=t[0],l=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return l({type:a.Increment})}},"+"),c.a.createElement("button",{onClick:function(){return l({type:a.Decrement})}},"-"),n.count,c.a.createElement("button",{onClick:function(){return l({type:a.Reset})}},"reset"))},j=n(11),O=n.n(j),k=function e(t){return t>2?e(t-1)+e(t-2):1},C=function(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),a=(n[0],n[1]),l=Object(r.useRef)([]),u=Object(r.useRef)([]),o=O()(),m=Object(r.useMemo)(function(){return k(e.n)},[e.n]),s=O()(),E=O()(),f=(k(e.n),O()());return l.current.push(s-o),u.current.push(f-E),c.a.createElement("div",null,c.a.createElement("p",null,"target: ",e.n),c.a.createElement("p",null,"fibonacci: ",m),c.a.createElement("button",{onClick:a},"rerender"),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",null,c.a.createElement("p",null,"No Memomized"),c.a.createElement("ol",null,u.current.map(function(e,t){return c.a.createElement("li",{key:t},e)}))),c.a.createElement("div",null,c.a.createElement("p",null,"Memoized"),c.a.createElement("ol",null,l.current.map(function(e,t){return c.a.createElement("li",{key:t},e)})))))},w=function(){var e=Object(r.useRef)({});return c.a.createElement("div",null,c.a.createElement("input",{ref:e,type:"text"}),c.a.createElement("button",{onClick:function(){e.current.focus()}},"Focus the input"))},y=function(){var e=Object(r.useRef)({}),t=Object(r.useRef)({}),n=Object(r.useState)("Delete me and write a word"),a=Object(i.a)(n,2),l=a[0],u=a[1];return c.a.createElement("div",null,c.a.createElement("textarea",{ref:e,value:l,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{onClick:function(){return t.current.value=l,void u("Delete me and write a word")}},"save")," ",c.a.createElement("p",{ref:t},"prev text: ",t.current.value))},F=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(r.useCallback)(function(e){null!==e&&a(e.getBoundingClientRect().height)},[]);return c.a.createElement("div",null,c.a.createElement("h1",{ref:l,style:{color:"#FFFFFF",backgroundColor:"#000000"}},"Hi! I'm ",Math.round(n),"px tall"))},x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,null),c.a.createElement(y,null),c.a.createElement(F,null))},S=n(9),R=n.n(S),I=n(12),L=n(13),D=n.n(L);!function(e){e.Loading="Loading",e.Success="Success",e.Error="Error"}(d||(d={}));var M,T=function(){return c.a.createElement(c.a.Fragment,null,"Loading")},B=function(){return c.a.createElement(c.a.Fragment,null,"Error")},H=function(e){var t=e.userId,n=e.title,a=e.completed;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"User ID : ",t),c.a.createElement("p",null,"Title : ",n),c.a.createElement("p",null,"Completed : ",a?"true":"false"))},z=function(){var e=Object(r.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(d.Loading),u=Object(i.a)(l,2),o=u[0],m=u[1],s=Object(r.useState)(null),E=Object(i.a)(s,2),f=E[0],p=E[1];if(Object(r.useEffect)(function(){function e(){return(e=Object(I.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://jsonplaceholder.typicode.com/todos/".concat(n));case 3:t=e.sent,p(t.data),m(d.Success),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m(d.Error),console.error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[n]),null===f)return c.a.createElement(T,null);var b=c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),c.a.createElement("button",{onClick:function(){return a(1)}},"reset"),c.a.createElement("p",null,"Todo ID: ",n));return o===d.Loading||o===d.Error?c.a.createElement(c.a.Fragment,null,b,o===d.Loading?c.a.createElement(T,null):c.a.createElement(B,null)):c.a.createElement(c.a.Fragment,null,b,c.a.createElement(H,f))};!function(e){e.Loading="Loading",e.Success="Success",e.Error="Error"}(M||(M={}));var J=function(){return c.a.createElement(c.a.Fragment,null,"Loading")},U=function(){return c.a.createElement(c.a.Fragment,null,"Error")},W=function(e){var t=e.userId,n=e.title,a=e.completed;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"User ID : ",t),c.a.createElement("p",null,"Title : ",n),c.a.createElement("p",null,"Completed : ",a?"true":"false"))},q=function(){var e=Object(r.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],l=function(e){var t=Object(r.useState)(M.Loading),n=Object(i.a)(t,2),a=n[0],c=n[1],l=Object(r.useState)(null),u=Object(i.a)(l,2),o=u[0],m=u[1];return Object(r.useEffect)(function(){function t(){return(t=Object(I.a)(R.a.mark(function t(){var n;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.get("https://jsonplaceholder.typicode.com/todos/".concat(e));case 3:n=t.sent,m(n.data),c(M.Success),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),c(M.Error),console.error(t.t0.message);case 12:case"end":return t.stop()}},t,null,[[0,8]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e]),[a,o]}(n),u=Object(i.a)(l,2),o=u[0],m=u[1];if(null===m)return c.a.createElement(J,null);var s=c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),c.a.createElement("button",{onClick:function(){return a(1)}},"reset"),c.a.createElement("p",null,"Todo ID: ",n));return o===M.Loading||o===M.Error?c.a.createElement(c.a.Fragment,null,s,o===M.Loading?c.a.createElement(J,null):c.a.createElement(U,null)):c.a.createElement(c.a.Fragment,null,s,c.a.createElement(W,m))},G=function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,"useState: ",c.a.createElement(o.b,{to:"/"},"counter")),c.a.createElement("li",null,"useEffect: ",c.a.createElement(o.b,{to:"/useeffect"},"data fetch")),c.a.createElement("li",null,"useContext: ",c.a.createElement(o.b,{to:"/usecontext"},"counter")),c.a.createElement("li",null,"useReducer: ",c.a.createElement(o.b,{to:"/usereducer"},"counter")),c.a.createElement("li",null,"useMemo: ",c.a.createElement(o.b,{to:"/usememo"},"Fibonacci Counter")),c.a.createElement("li",null,"useRef, useCallback: ",c.a.createElement(o.b,{to:"/useref"},"text input")),c.a.createElement("li",null,"Custom Hook: ",c.a.createElement(o.b,{to:"/customhook"},"data fetch"))),c.a.createElement("p",null,"Code is on"," ",c.a.createElement("a",{href:"https://github.com/KushibikiMashu/react-hooks-typescript-sample"},"my GitHub repo")))},K=function(){return c.a.createElement(o.a,{basename:"/react-hooks-typescript-sample/"},c.a.createElement(G,null),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement(m.a,{exact:!0,path:"/",component:s}),c.a.createElement(m.a,{path:"/useeffect",component:z}),c.a.createElement(m.a,{path:"/usecontext",component:b}),c.a.createElement(m.a,{path:"/usereducer",component:g}),c.a.createElement(m.a,{path:"/usememo",component:function(){return c.a.createElement(C,{n:36})}}),c.a.createElement(m.a,{path:"/useref",component:x}),c.a.createElement(m.a,{path:"/customhook",component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.e0f868c3.chunk.js.map