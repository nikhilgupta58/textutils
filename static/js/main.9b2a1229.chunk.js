(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),s=n.n(o),r=(n(10),n(2)),i=(n(11),n(12),n(0));function l(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"nav-container nav-".concat(e.mode),children:[Object(i.jsxs)("div",{className:"item1",children:[Object(i.jsx)("a",{href:"/",className:"item ".concat(e.mode),children:e.title}),Object(i.jsx)("a",{href:"/",className:"item item2 ".concat(e.mode),children:"Home"})]}),Object(i.jsxs)("button",{onClick:e.toggle,className:"item item3 ".concat(e.mode),children:["Enable ","Light"===e.mode?"Dark":"Light","Mode"]})]})})}var d=n(5),j=n.n(d);n(16);function b(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"text-container",children:[Object(i.jsx)("h1",{className:"text-".concat(e.mode),children:e.title}),Object(i.jsx)("textarea",{onChange:function(e){o(e.target.value)},value:a,className:"textform-textarea textarea-".concat(e.mode),rows:"8"}),Object(i.jsxs)("div",{className:"op-container",children:[Object(i.jsx)("button",{onClick:function(){var t=a.toUpperCase();o(t),e.alert("The text has been converted to Uppercase")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{onClick:function(){var t=a.toLowerCase();o(t),e.alert("The text has been converted to Lowercase")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{onClick:function(){o(""),e.alert("The text has been cleared")},children:"Clear Text"}),Object(i.jsx)("button",{onClick:function(){navigator.clipboard.writeText(a),e.alert("The text has been copied")},children:"Copy Text"}),Object(i.jsx)("button",{onClick:function(){var t=a.split(/[ ]+/);o(t.join(" ")),e.alert("Extra space has been removed from the text")},children:"Remove Extra Space"})]}),Object(i.jsx)("h2",{className:"text-".concat(e.mode),children:"Your text summary"}),Object(i.jsxs)("p",{className:"text-".concat(e.mode),children:[a.split(" ").filter((function(e){return 0!==e.length})).length," words and ",a.length," characters"]}),Object(i.jsxs)("p",{className:"text-".concat(e.mode),children:[.008*a.split(" ").length," Minutes read"]}),Object(i.jsx)("h2",{className:"text-".concat(e.mode),children:"Preview"}),Object(i.jsx)("p",{className:"text-".concat(e.mode),children:a})]})})}n(17);function h(e){return e.msg&&Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"alert",children:Object(i.jsxs)("p",{children:["Success: ",e.msg.text]})})})}var x=function(){var e=Object(c.useState)("Light"),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),s=Object(r.a)(o,2),d=s[0],j=s[1],x=function(e){j({text:e}),setTimeout((function(){j(null)}),1e3)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{title:"Textutils",toggle:function(){"Dark"===n?(a("Light"),document.body.style.backgroundColor="white",x("Light Mode has been enabled")):(a("Dark"),document.body.style.backgroundColor="darkblue",x("Dark Mode has been enabled"))},mode:n}),Object(i.jsx)(h,{msg:d}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(b,{title:"Enter the text to analyze below",mode:n,alert:x})})]})};l.propTypes={title:j.a.string};var u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),u()}],[[18,1,2]]]);
//# sourceMappingURL=main.9b2a1229.chunk.js.map