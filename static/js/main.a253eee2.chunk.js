(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(16),r=c.n(i),s=(c(6),c(7),c(0)),j=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)("h1",{className:"logo",children:"ratul"}),Object(s.jsx)("ul",{className:"logo2",children:Object(s.jsx)("li",{children:"home"})})]})})},o=c(5),l=c.n(o),u=c(17),b=c(3),d=c(18),O=c.n(d),h=function(e){var t=e.title,c=e.img;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:""})]})})},m=function(e){var t=e.page,c=e.setPage;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"pagination",children:[Object(s.jsx)("a",{onClick:function(){return c(--t)},children:"\xab"}),Object(s.jsx)("a",{className:"".concat(1===t?"active":""),onClick:function(){return c(1)},children:"1"}),Object(s.jsx)("a",{className:"".concat(2===t?"active":""),onClick:function(){return c(2)},children:"2"}),Object(s.jsx)("a",{className:"".concat(3===t?"active":""),onClick:function(){return c(3)},children:"3"}),Object(s.jsx)("a",{className:"".concat(4===t?"active":""),onClick:function(){return c(4)},children:"4"}),Object(s.jsx)("a",{className:"".concat(5===t?"active":""),onClick:function(){return c(5)},children:"5"}),Object(s.jsx)("a",{className:"".concat(6===t?"active":""),onClick:function(){return c(6)},children:"6"}),Object(s.jsx)("a",{className:"".concat(7===t?"active":""),onClick:function(){return c(7)},children:"7"}),Object(s.jsx)("a",{onClick:function(){return c(++t)},children:"\xbb"})]})})},p=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(),r=Object(b.a)(i,2),j=(r[0],r[1]),o=Object(n.useState)(),d=Object(b.a)(o,2),p=d[0],x=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a32bc9b159b59bd0fee1df4309538040&language=en-US&page=".concat(p));case 2:t=e.sent,a(t.data.results),j(t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"grid",children:c&&c.map((function(e,t){return Object(s.jsx)(h,{id:t,title:e.title,img:e.poster_path})}))}),Object(s.jsx)(m,{page:p,setPage:x})]})};var x=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsx)(p,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))},6:function(e,t,c){},7:function(e,t,c){}},[[43,1,2]]]);
//# sourceMappingURL=main.a253eee2.chunk.js.map