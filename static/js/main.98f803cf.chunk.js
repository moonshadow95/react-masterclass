(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(10),l=n.n(c),i=n(20),u=n(15),b=n(5),s=n(3),d=n(14);function m(e){localStorage.setItem("toDos",JSON.stringify(e))}function f(e){localStorage.setItem("categories",JSON.stringify(e))}!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(a||(a={}));var O,g=Object(b.b)({key:"categories",default:function(){var e=localStorage.getItem("categories");return e?JSON.parse(e):null}()||[a.TO_DO,a.DOING,a.DONE]}),p=Object(b.b)({key:"category",default:a.TO_DO}),j=Object(b.b)({key:"toDo",default:function(){var e=localStorage.getItem("toDos");return e?JSON.parse(e):null}()||[]}),y=Object(b.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(j),a=t(p);return n.filter(function(e){return e.category===a})},set:function(e){var t=e.set;console.log(t)}}),E=function(){var e=Object(b.f)(j),t=Object(b.e)(p),n=Object(d.a)(),a=n.register,r=n.handleSubmit,c=n.setValue;return o.a.createElement("form",{onSubmit:r(function(n){var a=n.toDo;e(function(e){return m([{id:Date.now(),text:a,category:t}].concat(Object(s.a)(e))),[{id:Date.now(),text:a,category:t}].concat(Object(s.a)(e))}),c("toDo","")})},o.a.createElement("input",Object.assign({type:"text"},a("toDo",{required:!0}),{placeholder:"Write a to do."})),o.a.createElement("button",null,"Add"))},h=function(e){var t=e.id,n=e.text,a=e.category,r=Object(b.f)(j),c=Object(b.e)(g).filter(function(e){return e!==a}),l=function(e){var a=e.currentTarget.name;r(function(e){var r=e.findIndex(function(e){return e.id===t}),o={id:t,text:n,category:a};return m([].concat(Object(s.a)(e.slice(0,r)),[o],Object(s.a)(e.slice(r+1)))),[].concat(Object(s.a)(e.slice(0,r)),[o],Object(s.a)(e.slice(r+1)))})};return o.a.createElement("li",null,o.a.createElement("span",null,n),c.map(function(e,t){return o.a.createElement("button",{key:t,name:e+"",onClick:l},e)}),o.a.createElement("button",{name:a,onClick:function(){r(function(e){var n=e.findIndex(function(e){return e.id===t});return m([].concat(Object(s.a)(e.slice(0,n)),Object(s.a)(e.slice(n+1)))),[].concat(Object(s.a)(e.slice(0,n)),Object(s.a)(e.slice(n+1)))})}},"Delete"))},v=n(2),D=function(){var e=Object(b.d)(p),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(b.d)(g),l=Object(v.a)(c,2),i=l[0],u=l[1],d=Object(b.d)(j),O=Object(v.a)(d,2),E=O[0],h=O[1];Object(b.e)(y);return o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{value:n,onInput:function(e){r(e.currentTarget.value)}},i.map(function(e,t){return o.a.createElement("option",{key:t,value:e},e)})),n!==a.TO_DO&&n!==a.DOING&&n!==a.DONE&&o.a.createElement("button",{onClick:function(){var e=Object(s.a)(i).filter(function(e){return e+""!==n}),t=[];E.map(function(e){e.category!==n&&t.push(e)}),h(t),m(t),u(e),f(e),r(a.TO_DO)}},"Delete Category"))},k=function(){var e=Object(d.a)(),t=e.register,n=e.handleSubmit,a=e.setValue,r=Object(b.f)(g);return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create your own category!"),o.a.createElement("form",{onSubmit:n(function(e){var t=e.category;r(function(e){return f([t].concat(Object(s.a)(e))),[t].concat(Object(s.a)(e))}),a("category","")})},o.a.createElement("input",Object.assign({type:"text"},t("category",{required:!0}),{placeholder:"Write category name."})),o.a.createElement("button",null,"Add")))},S=function(){var e=Object(b.e)(y);return o.a.createElement("div",null,o.a.createElement("h1",null,"To Do List"),o.a.createElement("hr",null),o.a.createElement(k,null),o.a.createElement(D,null),o.a.createElement(E,null),o.a.createElement("ul",null,e.map(function(e){return o.a.createElement(h,Object.assign({key:e.id},e))})))},N=Object(u.b)(O||(O=Object(i.a)(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1.2;\n    font-family: 'Noto Sans KR', sans-serif;\n    background-color: ",";\n    color: black;\n\n    ol, ul {\n      list-style: none;\n    }\n\n    blockquote, q {\n      quotes: none;\n    }\n\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n      content: '';\n      content: none;\n    }\n\n    * {\n      box-sizing: border-box;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n"])),function(e){return e.theme.bgColor});var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(S,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b.a,null,o.a.createElement(u.a,{theme:{bgColor:"#f7d794",boardColor:"#778beb",cardColor:"white"}},o.a.createElement(x,null)))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.98f803cf.chunk.js.map