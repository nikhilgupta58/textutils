(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(9),s=c.n(r),o=(c(16),c(4)),i=(c(17),c(18),c(5)),l=a.a.createContext({mode:"Light"}),j=c(1);function b(e){var t=Object(n.useContext)(l);return t=t.mode,Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"nav-container nav-".concat(t),children:[Object(j.jsxs)("div",{className:"item1",children:[Object(j.jsx)(i.b,{to:"/",className:"item ".concat(t),children:e.title}),Object(j.jsx)(i.b,{to:"/",className:"item item2 ".concat(t),children:"Home"})]}),Object(j.jsxs)("button",{onClick:e.toggle,className:"item item3 ".concat(t),children:["Enable ","Light"===t?"Dark":"Light","Mode"]})]})})}var h=c(10),d=c.n(h),x=c(8),u=c(11),O=(c(22),a.a.createContext());function m(e){var t=Object(n.useContext)(O),c=Object(n.useContext)(l);c=c.mode;var a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],b=(e.title,e.children),h=e.mode,d=Object(u.a)(e,["title","children","mode"]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",Object(x.a)(Object(x.a)({},d),{},{className:"text-container",children:[Object(j.jsx)("h1",{className:"text-".concat(h),children:b}),Object(j.jsx)("textarea",{onChange:function(e){i(e.target.value)},value:s,className:"textform-textarea textarea-".concat(c),rows:"8"}),Object(j.jsxs)("div",{className:"op-container",children:[Object(j.jsx)("button",{onClick:function(){var e=s.toUpperCase();i(e),t.showAlert("The text has been converted to Uppercase")},children:"Convert to Uppercase"}),Object(j.jsx)("button",{onClick:function(){var e=s.toLowerCase();i(e),t.showAlert("The text has been converted to Lowercase")},children:"Convert to Lowercase"}),Object(j.jsx)("button",{onClick:function(){i(""),t.showAlert("The text has been cleared")},children:"Clear Text"}),Object(j.jsx)("button",{onClick:function(){navigator.clipboard.writeText(s),t.showAlert("The text has been copied")},children:"Copy Text"}),Object(j.jsx)("button",{onClick:function(){var e=s.split(/[ ]+/);i(e.join(" ")),t.showAlert("Extra space has been removed from the text")},children:"Remove Extra Space"})]}),Object(j.jsx)("h2",{className:"text-".concat(c),children:"Your text summary"}),Object(j.jsxs)("p",{className:"text-".concat(c),children:[s.split(" ").filter((function(e){return 0!==e.length})).length," ","words and ",s.length," characters"]}),Object(j.jsxs)("p",{className:"text-".concat(c),children:[.008*s.split(" ").length," Minutes read"]}),Object(j.jsx)("h2",{className:"text-".concat(c),children:"Preview"}),Object(j.jsx)("p",{className:"text-".concat(c),children:s})]}))})}c(23);function v(e){var t=Object(n.useContext)(O);return t.alert&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"alert",children:Object(j.jsxs)("p",{children:["Success: ",t.alert.text]})})})}var g=c(2);var p=function(){var e=Object(n.useState)("Light"),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),h=s[0],d=s[1],x=function(e){d({text:e}),setTimeout((function(){d(null)}),1e3)};return Object(j.jsx)(i.a,{children:Object(j.jsxs)(l.Provider,{value:{mode:c},children:[Object(j.jsx)(b,{title:"Textutils",toggle:function(){"Dark"===c?(a("Light"),document.body.style.backgroundColor="white",x("Light Mode has been enabled")):(a("Dark"),document.body.style.backgroundColor="darkblue",x("Dark Mode has been enabled"))}}),Object(j.jsxs)(O.Provider,{value:{alert:h,showAlert:x},children:[Object(j.jsx)(v,{})," ",Object(j.jsx)(g.c,{children:Object(j.jsx)(g.a,{path:"/textutils",element:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(m,{title:"Enter the text to analyze below",children:Object(j.jsx)("h3",{children:"Enter the text below"})})})})})]})]})})};b.propTypes={title:d.a.string};var f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.38cbe728.chunk.js.map