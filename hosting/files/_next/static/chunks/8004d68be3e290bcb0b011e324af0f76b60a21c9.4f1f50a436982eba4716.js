(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+JCL":function(t,e){t.exports=function(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},"0grs":function(t,e,n){var r=n("ijvI"),o=n("kLwA"),i=n("BNq/"),c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=a.test(t);return n||u.test(t)?s(t.slice(2),n?2:8):c.test(t)?NaN:+t}},"3UaM":function(t,e,n){var r=n("kLwA"),o=n("6y3U"),i=n("0grs"),c=Math.max,a=Math.min;t.exports=function(t,e,n){var u,s,l,f,p,d,b=0,g=!1,h=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=u,r=s;return u=s=void 0,b=e,f=t.apply(r,n)}function y(t){return b=t,p=setTimeout(O,e),g?m(t):f}function j(t){var n=t-d;return void 0===d||n>=e||n<0||h&&t-b>=l}function O(){var t=o();if(j(t))return w(t);p=setTimeout(O,function(t){var n=e-(t-d);return h?a(n,l-(t-b)):n}(t))}function w(t){return p=void 0,v&&u?m(t):(u=s=void 0,f)}function x(){var t=o(),n=j(t);if(u=arguments,s=this,d=t,n){if(void 0===p)return y(d);if(h)return clearTimeout(p),p=setTimeout(O,e),m(d)}return void 0===p&&(p=setTimeout(O,e)),f}return e=i(e)||0,r(n)&&(g=!!n.leading,l=(h="maxWait"in n)?c(i(n.maxWait)||0,e):l,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==p&&clearTimeout(p),b=0,u=d=s=p=void 0},x.flush=function(){return void 0===p?f:w(o())},x}},"4+7a":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},"6M5B":function(t,e,n){var r=n("Rpx7"),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var o=c.call(t);return r&&(e?t[a]=n:delete t[a]),o}},"6y3U":function(t,e,n){var r=n("B3M4");t.exports=function(){return r.Date.now()}},B3M4:function(t,e,n){var r=n("UZQZ"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},"BNq/":function(t,e,n){var r=n("J7g5"),o=n("xvoH");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},J7g5:function(t,e,n){var r=n("Rpx7"),o=n("6M5B"),i=n("4+7a"),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},Rpx7:function(t,e,n){var r=n("B3M4").Symbol;t.exports=r},UZQZ:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("dm4u"))},ZmRa:function(t,e,n){"use strict";n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return N}));var r=n("mXGw"),o=n.n(r),i=n("W0B4"),c=n.n(i),a=n("m3N6"),u=n("5MD+"),s=n("q7FG"),l=n("WM7k");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O,w,x,E,P,S,C,k,M={Top:"top",Bottom:"bottom",Left:"left",Right:"right",CenterVertical:"center-vertical",CenterHorizontal:"center-horizontal"},N={Start:"start",Middle:"middle",End:"end",Fit:"fit"};function D(t){var e=t.useRelativePositioning,n=t.spacing,r=t.align,o=t.justify,i=t.referenceElViewportPos,c=void 0===i?T:i,a=t.referenceElDocumentPos,u=void 0===a?T:a,s=t.contentElViewportPos,l=void 0===s?T:s,f=t.contentElDocumentPos,p=void 0===f?T:f,d=t.windowHeight,g=void 0===d?window.innerHeight:d,h=t.windowWidth,v=void 0===h?window.innerWidth:h,y={windowWidth:v,windowHeight:g,referenceElViewportPos:c,contentElViewportPos:l,spacing:n},j=function(t,e){var n=e.spacing,r=e.windowWidth,o=e.windowHeight,i=e.contentElViewportPos,c=e.referenceElViewportPos;return[t].concat(m(Z[t])).find((function(t){return[M.Top,M.Bottom,M.CenterVertical].includes(t)?X({top:U({align:t,contentElPos:i,referenceElPos:c,spacing:n}),windowHeight:o,contentHeight:i.height}):!![M.Left,M.Right,M.CenterHorizontal].includes(t)&&J({left:G({align:t,contentElPos:i,referenceElPos:c,spacing:n}),windowWidth:r,contentWidth:i.width})}))||t}(r,y),O=function(t,e,n){var r,o,i=n.spacing,c=n.windowWidth,a=n.windowHeight,u=n.contentElViewportPos,s=n.referenceElViewportPos,l=[t].concat(m(Y[t]));switch(e){case M.Top:case M.Bottom:case M.CenterVertical:return null!==(r=l.find((function(t){return J({contentWidth:t===N.Fit?s.width:u.width,windowWidth:c,left:G({contentElPos:u,referenceElPos:s,spacing:i,align:e,justify:t})})})))&&void 0!==r?r:Y[t][0];case M.Left:case M.Right:case M.CenterHorizontal:return null!==(o=l.find((function(t){return X({contentHeight:t===N.Fit?s.height:u.height,windowHeight:a,top:U({contentElPos:u,referenceElPos:s,spacing:i,align:e,justify:t})})})))&&void 0!==o?o:Y[t][0]}}(o,j,y),w=function(t){var e,n,r=t.justify,o=W[t.align],i=null!==(e=o.x)&&void 0!==e?e:L[r],c=null!==(n=o.y)&&void 0!==n?n:B[r];return"".concat(i," ").concat(c)}({align:j,justify:O}),x=function(t,e){var n=.8;switch(t){case M.Top:return"translate3d(0, ".concat(e,"px, 0) scale(").concat(n,")");case M.Bottom:return"translate3d(0, -".concat(e,"px, 0) scale(").concat(n,")");case M.Left:return"translate3d(".concat(e,"px, 0, 0) scale(").concat(n,")");case M.Right:return"translate3d(-".concat(e,"px, 0, 0) scale(").concat(n,")");case M.CenterHorizontal:case M.CenterVertical:return"scale(".concat(n,")")}}(j,n);return e?{align:j,justify:O,positionCSS:b({},z({align:j,justify:O,referenceElDocumentPos:u,contentElDocumentPos:p,spacing:n}),{transformOrigin:w,transform:x})}:{align:j,justify:O,positionCSS:b({},I({align:j,justify:O,referenceElDocumentPos:u,contentElDocumentPos:p,spacing:n,windowHeight:g,windowWidth:v}),{transformOrigin:w,transform:x})}}var T={top:0,bottom:0,left:0,right:0,height:0,width:0};function H(t){if(!t)return T;var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,o=e.left,i=e.right,c=t.offsetHeight,a=t.offsetWidth,u=window,s=u.scrollX,l=u.scrollY;return{top:n+l,bottom:r+l,left:o+s,right:i+s,height:c,width:a}}function R(t){if(!t)return T;var e=t.getBoundingClientRect();return{top:e.top,bottom:e.bottom,left:e.left,right:e.right,height:t.offsetHeight,width:t.offsetWidth}}var B=(f(O={},N.Start,"top"),f(O,N.Middle,"center"),f(O,N.End,"bottom"),f(O,N.Fit,"center"),O),L=(f(w={},N.Start,"left"),f(w,N.Middle,"center"),f(w,N.End,"right"),f(w,N.Fit,"center"),w),W=(f(x={},M.Left,{x:"right"}),f(x,M.Right,{x:"left"}),f(x,M.Top,{y:"bottom"}),f(x,M.Bottom,{y:"top"}),f(x,M.CenterHorizontal,{x:"center"}),f(x,M.CenterVertical,{y:"center"}),x),F=(f(E={},N.Start,{top:0}),f(E,N.End,{bottom:0}),f(E,N.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{top:"".concat(n.height/2-e.height/2,"px")}})),f(E,N.Fit,{top:0,bottom:0}),E),A=(f(P={},N.Start,{left:0}),f(P,N.End,{right:0}),f(P,N.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{left:"".concat(n.width/2-e.width/2,"px")}})),f(P,N.Fit,{left:0,right:0}),P),V=(f(S={},M.Top,{constant:function(t){var e=t.spacing;return{bottom:"calc(100% + ".concat(e,"px)")}},justifyPositions:A}),f(S,M.Bottom,{constant:function(t){var e=t.spacing;return{top:"calc(100% + ".concat(e,"px)")}},justifyPositions:A}),f(S,M.CenterVertical,{constant:function(t){var e=t.referenceElDocumentPos;return{top:"calc(".concat(e.height/2,"px - 50%)")}},justifyPositions:A}),f(S,M.Left,{constant:function(t){var e=t.spacing;return{right:"calc(100% + ".concat(e,"px)")}},justifyPositions:F}),f(S,M.Right,{constant:function(t){var e=t.spacing;return{left:"calc(100% + ".concat(e,"px)")}},justifyPositions:F}),f(S,M.CenterHorizontal,{constant:function(t){var e=t.referenceElDocumentPos;return{left:"calc(".concat(e.width/2,"px - 50%)")}},justifyPositions:F}),S);function z(t){var e,n=t.align,r=t.justify,o=t.referenceElDocumentPos,i=t.contentElDocumentPos,c=t.spacing,a=V[n],u=a.justifyPositions[r],s={contentElDocumentPos:i,referenceElDocumentPos:o,spacing:c};return b({},null===(e=a.constant)||void 0===e?void 0:e.call(a,s),{},"function"==typeof u?u(s):u)}function I(t){var e=t.align,n=t.justify,r=t.referenceElDocumentPos,o=t.contentElDocumentPos,i=t.spacing,c=t.windowWidth,a=t.windowHeight,u="".concat(G({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px"),s="".concat(U({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px");return n!==N.Fit?{left:u,top:s}:[M.Left,M.Right,M.CenterHorizontal].includes(e)?{left:u,top:s,bottom:"".concat(a-r.bottom,"px")}:{left:u,top:s,right:"".concat(c-r.right,"px")}}function U(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case M.Left:case M.Right:case M.CenterHorizontal:switch(n){case N.Start:case N.Fit:return o.top;case N.End:return o.top+o.height-r.height;case N.Middle:default:return o.top-(r.height-o.height)/2}case M.CenterVertical:return o.top-(r.height-o.height)/2;case M.Top:return o.top-r.height-i;case M.Bottom:default:return o.top+o.height+i}}function G(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case M.Top:case M.Bottom:case M.CenterVertical:switch(n){case N.End:return o.left+o.width-r.width;case N.Middle:return o.left-(r.width-o.width)/2;case N.Start:case N.Fit:default:return o.left}case M.Left:return o.left-r.width-i;case M.Right:return o.left+o.width+i;case M.CenterHorizontal:default:return o.left-(r.width-o.width)/2}}function J(t){var e=t.left,n=t.windowWidth,r=t.contentWidth;return e>=0&&!(e+r>n)}function X(t){var e=t.top,n=t.windowHeight,r=t.contentHeight;return e>=0&&!(e+r>n)}var Z=(f(C={},M.Top,[M.Bottom]),f(C,M.Bottom,[M.Top]),f(C,M.Left,[M.Right]),f(C,M.Right,[M.Left]),f(C,M.CenterHorizontal,[M.Left,M.Right]),f(C,M.CenterVertical,[M.Top,M.Bottom]),C),Y=(f(k={},N.Start,[N.End,N.Middle]),f(k,N.Middle,[N.End,N.Start]),f(k,N.End,[N.Start,N.Middle]),f(k,N.Fit,[N.Middle,N.Start,N.End]),k);function $(){var t=h(["\n              display: none;\n            "]);return $=function(){return t},t}function _(){var t=h(["\n    opacity: 1;\n    position: ",";\n    pointer-events: initial;\n  "]);return _=function(){return t},t}function q(){var t=h(["\n  position: absolute;\n  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;\n  opacity: 0;\n"]);return q=function(){return t},t}var Q=Object(u.css)(q()),K={attributes:!0,characterData:!0,childList:!0,subtree:!0};function tt(t){var e=t.active,n=void 0!==e&&e,i=t.usePortal,c=void 0===i||i,d=t.spacing,b=void 0===d?10:d,h=t.align,m=void 0===h?M.Bottom:h,y=t.justify,j=void 0===y?N.Start:y,O=t.adjustOnMutation,w=void 0!==O&&O,x=t.children,E=t.className,P=t.portalClassName,S=t.refEl,C=g(t,["active","usePortal","spacing","align","justify","adjustOnMutation","children","className","portalClassName","refEl"]),k=v(Object(r.useState)(null),2),T=k[0],B=k[1],L=v(Object(r.useState)(null),2),W=L[0],F=L[1],A=v(Object(r.useState)(0),2),V=A[0],z=A[1],I=o.a.useRef(W);I.current=W;var U=null;if(S&&S.current)U=S.current;else if(T){var G=T.parentNode;G&&G instanceof HTMLElement&&(U=G)}var J=Object(l.h)(),X=w&&n,Z=Object(l.d)(U,K,Date.now,X),Y=Object(l.d)(W,K,Date.now,X),q=Object(l.e)(R(U)),tt=Object(l.e)(R(W)),et=Object(l.e)(Object(r.useMemo)((function(){return H(U)}),[U,J,Z,n,m,j,V])),nt=Object(l.e)(Object(r.useMemo)((function(){return H(W)}),[W,J,Y,n,m,j,V])),rt=Object(l.g)(j),ot=Object(l.g)(m),it=rt!==j&&(j===N.Fit||rt===N.Fit)||ot!==m&&j===N.Fit;Object(l.c)((function(){it&&z((function(t){return t+1}))}),[it]);var ct=v(Object(r.useState)(!1),2),at=ct[0],ut=ct[1];if(Object(l.c)((function(){return ut(!0)}),[]),!at)return null;var st,lt=D({useRelativePositioning:!c,spacing:b,align:m,justify:j,referenceElViewportPos:q,referenceElDocumentPos:et,contentElViewportPos:tt,contentElDocumentPos:nt}),ft=lt.align,pt=lt.justify,dt=lt.positionCSS,bt=dt.transform,gt=g(dt,["transform"]),ht=Object(u.css)(_(),c?"":"absolute"),vt=c?s.a:r.Fragment,mt=c?{className:P}:{};return st=null==x?null:"function"==typeof x?x({align:ft,justify:pt,referenceElPos:et}):x,o.a.createElement(a.a,{nodeRef:I,in:n,timeout:150,mountOnEnter:!0,unmountOnExit:!0,appear:!0},(function(t){var e;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:B,className:Object(u.css)($())}),o.a.createElement(vt,mt,o.a.createElement("div",p({},C,{className:Object(u.cx)(Q,Object(u.css)(gt),(e={},f(e,Object(u.css)({transform:bt}),"entering"===t||"exiting"===t),f(e,ht,"entered"===t),e),E)}),o.a.createElement("div",{ref:F},st))))}))}tt.displayName="Popover",tt.propTypes={children:c.a.oneOfType([c.a.node,c.a.func]),active:c.a.bool,className:c.a.string,align:c.a.oneOf(Object.values(M)),justify:c.a.oneOf(Object.values(N)),refEl:c.a.shape({current:"undefined"!=typeof window?c.a.instanceOf(Element):c.a.any}),usePortal:c.a.bool,portalClassName:c.a.string,spacing:c.a.number,adjustOnMutation:c.a.bool},tt.defaultProps={children:void 0,align:M.Bottom,justify:N.Start,active:!1,usePortal:!0,spacing:10,adjustOnMutation:!1},e.c=tt},ijvI:function(t,e,n){var r=n("t+ph"),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},kLwA:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},m2NX:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y})),n.d(e,"c",(function(){return J}));var r=n("mXGw"),o=n.n(r),i=n("W0B4"),c=n.n(i),a=n("+xY2"),u=n("3UaM"),s=n.n(u),l=n("ZmRa");n.d(e,"b",(function(){return l.b}));var f,p=n("WM7k"),d=n("5MD+"),b=n("G0rA"),g=n("5iLb"),h=n("QmRY"),v=n("kI+E"),m=n("C1Ma"),y=n("mWRn"),j=n.n(y);function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(){var t=P(["\n      min-width: ","px;\n      transform: ",";\n    "]);return k=function(){return t},t}function M(){var t=P(["\n      ",";\n      position: absolute;\n      transform: rotate(45deg);\n      width: ","px;\n      height: ","px;\n      margin: auto;\n    "]);return M=function(){return t},t}function N(){var t=P(["\n      position: absolute;\n      width: ","px;\n      height: ","px;\n      overflow: hidden;\n      margin: auto;\n      pointer-events: none;\n      ",";\n    "]);return N=function(){return t},t}function D(){var t=P(["\n      background-color: ",";\n      border: 1px solid ",";\n      box-shadow: 2px 2px 4px ",";\n    "]);return D=function(){return t},t}function T(){var t=P(["\n      color: ",";\n    "]);return T=function(){return t},t}function H(){var t=P(["\n      background-color: ",";\n      color: ",";\n      border: 1px solid ",";\n    "]);return H=function(){return t},t}function R(){var t=P(["\n      background-color: ",";\n      box-shadow: 2px 2px 4px ",";\n    "]);return R=function(){return t},t}function B(){var t=P(["\n      color: ",";\n    "]);return B=function(){return t},t}function L(){var t=P(["\n      background-color: ",";\n      color: ",";\n    "]);return L=function(){return t},t}function W(){var t=P(["\n  position: relative;\n"]);return W=function(){return t},t}function F(){var t=P(["\n  padding: 14px 16px;\n  border-radius: 3px;\n  box-shadow: 0px 2px 4px -1px ",";\n  cursor: default;\n  overflow-wrap: break-word;\n"]);return F=function(){return t},t}function A(){var t=P(["\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0px;\n"]);return A=function(){return t},t}function V(){var t=P(["\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0px;\n"]);return V=function(){return t},t}function z(){var t=P(["\n  margin: unset;\n  font-family: ",";\n  color: ",";\n  font-weight: 400;\n"]);return z=function(){return t},t}var I=Object(d.css)(z(),g.b.default,b.a.gray.dark3),U=Object(d.css)(V()),G=Object(d.css)(A()),J={Hover:"hover",Click:"click"},X="light",Z="dark",Y={Top:l.a.Top,Bottom:l.a.Bottom,Left:l.a.Left,Right:l.a.Right},$=Object(d.css)(F(),Object(a.b)(.8,b.a.black)),_=Object(d.css)(W()),q=(O(f={},Z,{tooltip:Object(d.css)(L(),b.a.gray.dark3,b.a.gray.light1),children:Object(d.css)(B(),b.a.gray.light1),notch:Object(d.css)(R(),b.a.gray.dark3,Object(a.b)(.9,b.a.black))}),O(f,X,{tooltip:Object(d.css)(H(),b.a.gray.light3,b.a.gray.dark2,b.a.gray.light2),children:Object(d.css)(T(),b.a.gray.dark2),notch:Object(d.css)(D(),b.a.gray.light3,b.a.gray.light2,Object(a.b)(.9,b.a.black))}),f),Q=h.b.create("tooltip"),K=function(t){t.preventDefault(),t.stopPropagation()};function tt(t){var e=t.open,n=t.setOpen,i=t.className,c=t.children,a=t.trigger,u=t.triggerEvent,f=void 0===u?J.Hover:u,b=t.darkMode,g=void 0!==b&&b,y=t.enabled,O=void 0===y||y,x=t.usePortal,P=void 0===x||x,C=t.align,D=void 0===C?"top":C,T=t.justify,H=void 0===T?"start":T,R=t.spacing,B=void 0===R?12:R,L=t.id,W=t.shouldClose,F=t.portalClassName,A=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["open","setOpen","className","children","trigger","triggerEvent","darkMode","enabled","usePortal","align","justify","spacing","id","shouldClose","portalClassName"]),V="boolean"==typeof e,z=S(Object(r.useState)(!1),2),Y=z[0],tt=z[1],et=Object(v.b)(),nt=V?e:Y,rt=V&&n?n:tt,ot=S(Object(r.useState)(null),2),it=ot[0],ct=ot[1],at=null!=L?L:null==it?void 0:it.id,ut=Object(r.useMemo)((function(){return null!=at?at:Q.generate()}),[at]);Object(r.useEffect)((function(){(a&&Object(h.e)(a,"Icon")||Object(m.d)(a))&&console.warn("Using a LeafyGreenUI Icon or Glyph component as a trigger will not render a Tooltip, as these components do not render their children. To use, please wrap your trigger element in another HTML tag.")}),[a]);var st=Object(r.useCallback)((function(){("function"!=typeof W||W())&&rt(!1)}),[rt,W]),lt=Object(r.useCallback)((function(t,e){return t===J.Hover?{onMouseEnter:s()((function(){rt(!0)}),35),onMouseLeave:s()(st,35),onFocus:function(){return rt(!0)},onBlur:st}:e&&e.onClick?{onClick:function(t){t.target!==it&&(e.onClick(),rt((function(t){return!t})))}}:{onClick:function(t){t.target!==it&&rt((function(t){return!t}))}}}),[st,rt,it]);Object(p.a)(st,{enabled:nt});var ft=Object(r.useCallback)((function(t){it&&!it.contains(t.target)&&st()}),[st,it]);Object(p.b)("click",ft,{enabled:nt&&"click"===f});var pt=P?{spacing:B,usePortal:P,portalClassName:F}:{spacing:B,usePortal:P},dt=g?Z:X,bt=O&&nt,gt=o.a.createElement(l.c,w({key:"tooltip",active:bt,align:D,justify:H,adjustOnMutation:!0,onClick:K},pt),(function(t){var e=function(t,e,n){if(!t||!e||!n)return{notchContainer:"",notch:"",tooltip:""};var r,o,i={},c={},a=10,u=0,s="";switch(t){case"top":case"bottom":switch(a=15,r=n.width/2-10,u=j()(r,5,a),o=r<=5,i.left="0px",i.right="0px","top"===t?(c.top="calc(100% - 1px)",i.top="".concat(-5,"px")):(c.bottom="calc(100% - 1px)",i.bottom="".concat(-5,"px")),e){case l.b.Start:c.left="".concat(u,"px"),o&&(s="translateX(-".concat(5-r,"px)"));break;case l.b.Middle:case l.b.Fit:c.left="0px",c.right="0px";break;case l.b.End:c.right="".concat(u,"px"),o&&(s="translateX(".concat(5-r,"px)"))}break;case"left":case"right":switch(a=10,r=n.height/2-10,u=j()(r,5,a),o=r<=5,i.top="0px",i.bottom="0px","left"===t?(i.left="".concat(-5,"px"),c.left="100%"):(i.right="".concat(-5,"px"),c.right="100%"),e){case l.b.Start:c.top="".concat(u,"px"),o&&(s="translateY(-".concat(5-r,"px)"));break;case l.b.Middle:case l.b.Fit:c.top="0px",c.bottom="0px";break;case l.b.End:c.bottom="".concat(u,"px"),o&&(s="translateY(".concat(5-r,"px)"))}}return{notchContainer:Object(d.css)(N(),20,20,Object(d.css)(c)),notch:Object(d.css)(M(),Object(d.css)(i),10,10),tooltip:Object(d.css)(k(),2*u+20,s)}}(t.align,t.justify,t.referenceElPos),n=e.notchContainer,r=e.notch,a=e.tooltip;return o.a.createElement("div",w({},A,{role:"tooltip",id:ut,className:Object(d.cx)($,a,q[dt].tooltip,i),ref:ct}),o.a.createElement("div",{className:Object(d.cx)(I,16===et?G:U,q[dt].children)},c),o.a.createElement("div",{className:n},o.a.createElement("div",{className:Object(d.cx)(r,q[dt].notch)})))}));return a?"function"==typeof a?a(E({},lt(f),{className:_,"aria-describedby":bt?ut:void 0,children:gt})):o.a.cloneElement(a,E({},lt(f,a.props),{"aria-describedby":bt?ut:void 0,children:o.a.createElement(o.a.Fragment,null,a.props.children,gt),className:Object(d.cx)(_,a.props.className)})):gt}tt.displayName="Tooltip",tt.propTypes={children:c.a.node,className:c.a.string,align:c.a.oneOf(Object.values(Y)),justify:c.a.oneOf(Object.values(l.b)),trigger:c.a.oneOfType([c.a.node,c.a.func]),triggerEvent:c.a.oneOf(Object.values(J)),darkMode:c.a.bool,enabled:c.a.bool,open:c.a.bool,setOpen:c.a.func,id:c.a.string,shouldClose:c.a.func,usePortal:c.a.bool,portalClassName:c.a.string},e.d=tt},mWRn:function(t,e,n){var r=n("+JCL"),o=n("0grs");t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=o(n))===n?n:0),void 0!==e&&(e=(e=o(e))===e?e:0),r(o(t),e,n)}},"t+ph":function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},xvoH:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}}}]);