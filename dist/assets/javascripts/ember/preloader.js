/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-flexbox-webgl-websockets-webworkers-setclasses !*/
!function(e,t,s){function r(e,t){return typeof e===t}function i(){var e,t,s,i,n,a,o;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],t=v[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(s=0;s<t.options.aliases.length;s++)e.push(t.options.aliases[s].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,n=0;n<e.length;n++)a=e[n],o=a.split("."),1===o.length?L[o[0]]=i:(!L[o[0]]||L[o[0]]instanceof Boolean||(L[o[0]]=new Boolean(L[o[0]])),L[o[0]][o[1]]=i),E.push((i?"":"no-")+o.join("-"))}}function n(e){var t=b.className,s=L._config.classPrefix||"";if(T&&(t=t.baseVal),L._config.enableJSClass){var r=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");t=t.replace(r,"$1"+s+"js$2")}L._config.enableClasses&&(t+=" "+s+e.join(" "+s),T?b.className.baseVal=t:b.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function c(e,s,r,i){var n,o,c,u,h="modernizr",d=a("div"),f=l();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=i?i[r]:h+(r+1),d.appendChild(c);return n=a("style"),n.type="text/css",n.id="s"+h,(f.fake?f:d).appendChild(n),f.appendChild(d),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(t.createTextNode(e)),d.id=h,f.fake&&(f.style.background="",f.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(f)),o=s(d,e),f.fake?(f.parentNode.removeChild(f),b.style.overflow=u,b.offsetHeight):d.parentNode.removeChild(d),!!o}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var n=[];i--;)n.push("("+u(t[i])+":"+r+")");return n=n.join(" or "),c("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return s}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,s){return t+s.toUpperCase()}).replace(/^-/,"")}function f(e,t,i,n){function l(){u&&(delete R.style,delete R.modElem)}if(n=r(n,"undefined")?!1:n,!r(i,"undefined")){var c=h(e,i);if(!r(c,"undefined"))return c}for(var u,f,p,_,g,m=["modernizr","tspan"];!R.style;)u=!0,R.modElem=a(m.shift()),R.style=R.modElem.style;for(p=e.length,f=0;p>f;f++)if(_=e[f],g=R.style[_],o(_,"-")&&(_=d(_)),R.style[_]!==s){if(n||r(i,"undefined"))return l(),"pfx"==t?_:!0;try{R.style[_]=i}catch(v){}if(R.style[_]!=g)return l(),"pfx"==t?_:!0}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function _(e,t,s){var i;for(var n in e)if(e[n]in t)return s===!1?e[n]:(i=t[e[n]],r(i,"function")?p(i,s||t):i);return!1}function g(e,t,s,i,n){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?f(o,t,i,n):(o=(e+" "+w.join(a+" ")+a).split(" "),_(o,t,s))}function m(e,t,r){return g(e,s,s,t,r)}var v=[],y={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var s=this;setTimeout(function(){t(s[e])},0)},addTest:function(e,t,s){v.push({name:e,fn:t,options:s})},addAsyncTest:function(e){v.push({name:null,fn:e})}},L=function(){};L.prototype=y,L=new L;var E=[],b=t.documentElement,T="svg"===b.nodeName.toLowerCase();L.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))});var j="Moz O ms Webkit",S=y._config.usePrefixes?j.split(" "):[];y._cssomPrefixes=S;var A={elem:a("modernizr")};L._q.push(function(){delete A.elem});var R={style:A.elem.style};L._q.unshift(function(){delete R.style});var w=y._config.usePrefixes?j.toLowerCase().split(" "):[];y._domPrefixes=w,y.testAllProps=g,y.testAllProps=m,L.addTest("flexbox",m("flexBasis","1px",!0)),L.addTest("webgl",function(){var t=a("canvas"),s="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return s in t?t[s]("webgl")||t[s]("experimental-webgl"):"WebGLRenderingContext"in e}),L.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),L.addTest("webworkers","Worker"in e),i(),n(E),delete y.addTest,delete y.addAsyncTest;for(var I=0;I<L._q.length;I++)L._q[I]();e.Modernizr=L}(window,document),function(){}.call(this),/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
function(e,t,s){"undefined"!=typeof module&&module.exports?module.exports=s():e[t]=s()}(this,"verge",function(){function e(){return{width:u(),height:h()}}function t(e,t){var s={};return t=+t||0,s.width=(s.right=e.right+t)-(s.left=e.left-t),s.height=(s.bottom=e.bottom+t)-(s.top=e.top-t),s}function s(e,s){return e=e&&!e.nodeType?e[0]:e,e&&1===e.nodeType?t(e.getBoundingClientRect(),s):!1}function r(t){t=null==t?e():1===t.nodeType?s(t):t;var r=t.height,i=t.width;return r="function"==typeof r?r.call(t):r,i="function"==typeof i?i.call(t):i,i/r}var i={},n="undefined"!=typeof window&&window,a="undefined"!=typeof document&&document,o=a&&a.documentElement,l=n.matchMedia||n.msMatchMedia,c=l?function(e){return!!l.call(n,e).matches}:function(){return!1},u=i.viewportW=function(){var e=o.clientWidth,t=n.innerWidth;return t>e?t:e},h=i.viewportH=function(){var e=o.clientHeight,t=n.innerHeight;return t>e?t:e};return i.mq=c,i.matchMedia=l?function(){return l.apply(n,arguments)}:function(){return{}},i.viewport=e,i.scrollX=function(){return n.pageXOffset||o.scrollLeft},i.scrollY=function(){return n.pageYOffset||o.scrollTop},i.rectangle=s,i.aspect=r,i.inX=function(e,t){var r=s(e,t);return!!r&&r.right>=0&&r.left<=u()},i.inY=function(e,t){var r=s(e,t);return!!r&&r.bottom>=0&&r.top<=h()},i.inViewport=function(e,t){var r=s(e,t);return!!r&&r.bottom>=0&&r.right>=0&&r.top<=h()&&r.left<=u()},i}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.NProgress=t()}(this,function(){function e(e,t,s){return t>e?t:e>s?s:e}function t(e){return 100*(-1+e)}function s(e,s,r){var i;return i="translate3d"===c.positionUsing?{transform:"translate3d("+t(e)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+t(e)+"%,0)"}:{"margin-left":t(e)+"%"},i.transition="all "+s+"ms "+r,i}function r(e,t){var s="string"==typeof e?e:a(e);return s.indexOf(" "+t+" ")>=0}function i(e,t){var s=a(e),i=s+t;r(s,t)||(e.className=i.substring(1))}function n(e,t){var s,i=a(e);r(e,t)&&(s=i.replace(" "+t+" "," "),e.className=s.substring(1,s.length-1))}function a(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function o(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var l={};l.version="0.2.0";var c=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(e){var t,s;for(t in e)s=e[t],void 0!==s&&e.hasOwnProperty(t)&&(c[t]=s);return this},l.status=null,l.set=function(t){var r=l.isStarted();t=e(t,c.minimum,1),l.status=1===t?null:t;var i=l.render(!r),n=i.querySelector(c.barSelector),a=c.speed,o=c.easing;return i.offsetWidth,u(function(e){""===c.positionUsing&&(c.positionUsing=l.getPositioningCSS()),h(n,s(t,a,o)),1===t?(h(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){h(i,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){l.remove(),e()},a)},a)):setTimeout(e,a)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var e=function(){setTimeout(function(){l.status&&(l.trickle(),e())},c.trickleSpeed)};return c.trickle&&e(),this},l.done=function(e){return e||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(t){var s=l.status;return s?("number"!=typeof t&&(t=(1-s)*e(Math.random()*s,.1,.95)),s=e(s+t,0,.994),l.set(s)):l.start()},l.trickle=function(){return l.inc(Math.random()*c.trickleRate)},function(){var e=0,t=0;l.promise=function(s){return s&&"resolved"!==s.state()?(0===t&&l.start(),e++,t++,s.always(function(){t--,0===t?(e=0,l.done()):l.set((e-t)/e)}),this):this}}(),l.render=function(e){if(l.isRendered())return document.getElementById("nprogress");i(document.documentElement,"nprogress-busy");var s=document.createElement("div");s.id="nprogress",s.innerHTML=c.template;var r,n=s.querySelector(c.barSelector),a=e?"-100":t(l.status||0),u=document.querySelector(c.parent);return h(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(r=s.querySelector(c.spinnerSelector),r&&o(r)),u!=document.body&&i(u,"nprogress-custom-parent"),u.appendChild(s),s},l.remove=function(){n(document.documentElement,"nprogress-busy"),n(document.querySelector(c.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&o(e)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var u=function(){function e(){var s=t.shift();s&&s(e)}var t=[];return function(s){t.push(s),1==t.length&&e()}}(),h=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function t(e){var t=document.body.style;if(e in t)return e;for(var s,r=i.length,n=e.charAt(0).toUpperCase()+e.slice(1);r--;)if(s=i[r]+n,s in t)return s;return e}function s(s){return s=e(s),n[s]||(n[s]=t(s))}function r(e,t,r){t=s(t),e.style[t]=r}var i=["Webkit","O","Moz","ms"],n={};return function(e,t){var s,i,n=arguments;if(2==n.length)for(s in t)i=t[s],void 0!==i&&t.hasOwnProperty(s)&&r(e,s,i);else r(e,n[1],n[2])}}();return l}),this.createjs=this.createjs||{},function(){"use strict";var e=createjs.PreloadJS||{};e.version="0.6.2.custom"}(),/*
* extend
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},createjs.extend=function(e,t){"use strict";function s(){this.constructor=e}return s.prototype=t.prototype,e.prototype=new s},/*
* promote
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},createjs.promote=function(e,t){"use strict";var s=e.prototype,r=Object.getPrototypeOf&&Object.getPrototypeOf(s)||s.__proto__;if(r){s[(t+="_")+"constructor"]=r.constructor;for(var i in r)s.hasOwnProperty(i)&&"function"==typeof r[i]&&(s[t+i]=r[i])}return e},/*
* Proxy
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(e,t){var s=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,Array.prototype.slice.call(arguments,0).concat(s))}}}(),/*
* indexOf
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},createjs.indexOf=function(e,t){"use strict";for(var s=0,r=e.length;r>s;s++)if(t===e[s])return s;return-1},/*
* Event
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.type=e,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!t,this.cancelable=!!s,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var t=e.prototype;t.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},t.stopPropagation=function(){this.propagationStopped=!0},t.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},t.remove=function(){this.removed=!0},t.clone=function(){return new e(this.type,this.bubbles,this.cancelable)},t.set=function(e){for(var t in e)this[t]=e[t];return this},t.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=e}(),/*
* Event
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.Event_constructor("error"),this.title=e,this.message=t,this.data=s}var t=createjs.extend(e,createjs.Event);t.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(e,"Event")}(),/*
* EventDispatcher
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
this.createjs=this.createjs||{},function(){"use strict";function e(){this._listeners=null,this._captureListeners=null}var t=e.prototype;e.initialize=function(e){e.addEventListener=t.addEventListener,e.on=t.on,e.removeEventListener=e.off=t.removeEventListener,e.removeAllEventListeners=t.removeAllEventListeners,e.hasEventListener=t.hasEventListener,e.dispatchEvent=t.dispatchEvent,e._dispatchEvent=t._dispatchEvent,e.willTrigger=t.willTrigger},t.addEventListener=function(e,t,s){var r;r=s?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var i=r[e];return i&&this.removeEventListener(e,t,s),i=r[e],i?i.push(t):r[e]=[t],t},t.on=function(e,t,s,r,i,n){return t.handleEvent&&(s=s||t,t=t.handleEvent),s=s||this,this.addEventListener(e,function(e){t.call(s,e,i),r&&e.remove()},n)},t.removeEventListener=function(e,t,s){var r=s?this._captureListeners:this._listeners;if(r){var i=r[e];if(i)for(var n=0,a=i.length;a>n;n++)if(i[n]==t){1==a?delete r[e]:i.splice(n,1);break}}},t.off=t.removeEventListener,t.removeAllEventListeners=function(e){e?(this._listeners&&delete this._listeners[e],this._captureListeners&&delete this._captureListeners[e]):this._listeners=this._captureListeners=null},t.dispatchEvent=function(e,t,s){if("string"==typeof e){var r=this._listeners;if(!(t||r&&r[e]))return!0;e=new createjs.Event(e,t,s)}else e.target&&e.clone&&(e=e.clone());try{e.target=this}catch(i){}if(e.bubbles&&this.parent){for(var n=this,a=[n];n.parent;)a.push(n=n.parent);var o,l=a.length;for(o=l-1;o>=0&&!e.propagationStopped;o--)a[o]._dispatchEvent(e,1+(0==o));for(o=1;l>o&&!e.propagationStopped;o++)a[o]._dispatchEvent(e,3)}else this._dispatchEvent(e,2);return!e.defaultPrevented},t.hasEventListener=function(e){var t=this._listeners,s=this._captureListeners;return!!(t&&t[e]||s&&s[e])},t.willTrigger=function(e){for(var t=this;t;){if(t.hasEventListener(e))return!0;t=t.parent}return!1},t.toString=function(){return"[EventDispatcher]"},t._dispatchEvent=function(e,t){var s,r=1==t?this._captureListeners:this._listeners;if(e&&r){var i=r[e.type];if(!i||!(s=i.length))return;try{e.currentTarget=this}catch(n){}try{e.eventPhase=t}catch(n){}e.removed=!1,i=i.slice();for(var a=0;s>a&&!e.immediatePropagationStopped;a++){var o=i[a];o.handleEvent?o.handleEvent(e):o(e),e.removed&&(this.off(e.type,o,1==t),e.removed=!1)}}},createjs.EventDispatcher=e}(),/*
 * ProgressEvent
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(e){"use strict";function t(e,t){this.Event_constructor("progress"),this.loaded=e,this.total=null==t?1:t,this.progress=0==t?0:this.loaded/this.total}var s=createjs.extend(t,createjs.Event);s.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(t,"Event")}(window),function(){function e(t,r){function n(e){if(n[e]!==g)return n[e];var t;if("bug-string-char-index"==e)t="a"!="a"[0];else if("json"==e)t=n("json-stringify")&&n("json-parse");else{var s,i='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var l=r.stringify,u="function"==typeof l&&y;if(u){(s=function(){return 1}).toJSON=s;try{u="0"===l(0)&&"0"===l(new a)&&'""'==l(new o)&&l(v)===g&&l(g)===g&&l()===g&&"1"===l(s)&&"[1]"==l([s])&&"[null]"==l([g])&&"null"==l(null)&&"[null,null,null]"==l([g,v,null])&&l({a:[s,!0,!1,null,"\x00\b\n\f\r	"]})==i&&"1"===l(null,s)&&"[\n 1,\n 2\n]"==l([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==l(new c(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==l(new c(864e13))&&'"-000001-01-01T00:00:00.000Z"'==l(new c(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==l(new c(-1))}catch(h){u=!1}}t=u}if("json-parse"==e){var d=r.parse;if("function"==typeof d)try{if(0===d("0")&&!d(!1)){s=d(i);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!d('"	"')}catch(h){}if(f)try{f=1!==d("01")}catch(h){}if(f)try{f=1!==d("1.")}catch(h){}}}}catch(h){f=!1}t=f}}return n[e]=!!t}t||(t=i.Object()),r||(r=i.Object());var a=t.Number||i.Number,o=t.String||i.String,l=t.Object||i.Object,c=t.Date||i.Date,u=t.SyntaxError||i.SyntaxError,h=t.TypeError||i.TypeError,d=t.Math||i.Math,f=t.JSON||i.JSON;"object"==typeof f&&f&&(r.stringify=f.stringify,r.parse=f.parse);var p,_,g,m=l.prototype,v=m.toString,y=new c(-0xc782b5b800cec);try{y=-109252==y.getUTCFullYear()&&0===y.getUTCMonth()&&1===y.getUTCDate()&&10==y.getUTCHours()&&37==y.getUTCMinutes()&&6==y.getUTCSeconds()&&708==y.getUTCMilliseconds()}catch(L){}if(!n("json")){var E="[object Function]",b="[object Date]",T="[object Number]",j="[object String]",S="[object Array]",A="[object Boolean]",R=n("bug-string-char-index");if(!y)var w=d.floor,I=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(e,t){return I[t]+365*(e-1970)+w((e-1969+(t=+(t>1)))/4)-w((e-1901+t)/100)+w((e-1601+t)/400)};if((p=m.hasOwnProperty)||(p=function(e){var t,s={};return(s.__proto__=null,s.__proto__={toString:1},s).toString!=v?p=function(e){var t=this.__proto__,s=e in(this.__proto__=null,this);return this.__proto__=t,s}:(t=s.constructor,p=function(e){var s=(this.constructor||t).prototype;return e in this&&!(e in s&&this[e]===s[e])}),s=null,p.call(this,e)}),_=function(e,t){var r,i,n,a=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,i=new r;for(n in i)p.call(i,n)&&a++;return r=i=null,a?_=2==a?function(e,t){var s,r={},i=v.call(e)==E;for(s in e)i&&"prototype"==s||p.call(r,s)||!(r[s]=1)||!p.call(e,s)||t(s)}:function(e,t){var s,r,i=v.call(e)==E;for(s in e)i&&"prototype"==s||!p.call(e,s)||(r="constructor"===s)||t(s);(r||p.call(e,s="constructor"))&&t(s)}:(i=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],_=function(e,t){var r,n,a=v.call(e)==E,o=!a&&"function"!=typeof e.constructor&&s[typeof e.hasOwnProperty]&&e.hasOwnProperty||p;for(r in e)a&&"prototype"==r||!o.call(e,r)||t(r);for(n=i.length;r=i[--n];o.call(e,r)&&t(r));}),_(e,t)},!n("json-stringify")){var C={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x="000000",O=function(e,t){return(x+(t||0)).slice(-e)},q="\\u00",M=function(e){for(var t='"',s=0,r=e.length,i=!R||r>10,n=i&&(R?e.split(""):e);r>s;s++){var a=e.charCodeAt(s);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t+=C[a];break;default:if(32>a){t+=q+O(2,a.toString(16));break}t+=i?n[s]:e.charAt(s)}}return t+'"'},N=function(e,t,s,r,i,n,a){var o,l,c,u,d,f,m,y,L,E,R,I,C,x,q,H;try{o=t[e]}catch(U){}if("object"==typeof o&&o)if(l=v.call(o),l!=b||p.call(o,"toJSON"))"function"==typeof o.toJSON&&(l!=T&&l!=j&&l!=S||p.call(o,"toJSON"))&&(o=o.toJSON(e));else if(o>-1/0&&1/0>o){if(P){for(d=w(o/864e5),c=w(d/365.2425)+1970-1;P(c+1,0)<=d;c++);for(u=w((d-P(c,0))/30.42);P(c,u+1)<=d;u++);d=1+d-P(c,u),f=(o%864e5+864e5)%864e5,m=w(f/36e5)%24,y=w(f/6e4)%60,L=w(f/1e3)%60,E=f%1e3}else c=o.getUTCFullYear(),u=o.getUTCMonth(),d=o.getUTCDate(),m=o.getUTCHours(),y=o.getUTCMinutes(),L=o.getUTCSeconds(),E=o.getUTCMilliseconds();o=(0>=c||c>=1e4?(0>c?"-":"+")+O(6,0>c?-c:c):O(4,c))+"-"+O(2,u+1)+"-"+O(2,d)+"T"+O(2,m)+":"+O(2,y)+":"+O(2,L)+"."+O(3,E)+"Z"}else o=null;if(s&&(o=s.call(t,e,o)),null===o)return"null";if(l=v.call(o),l==A)return""+o;if(l==T)return o>-1/0&&1/0>o?""+o:"null";if(l==j)return M(""+o);if("object"==typeof o){for(x=a.length;x--;)if(a[x]===o)throw h();if(a.push(o),R=[],q=n,n+=i,l==S){for(C=0,x=o.length;x>C;C++)I=N(C,o,s,r,i,n,a),R.push(I===g?"null":I);H=R.length?i?"[\n"+n+R.join(",\n"+n)+"\n"+q+"]":"["+R.join(",")+"]":"[]"}else _(r||o,function(e){var t=N(e,o,s,r,i,n,a);t!==g&&R.push(M(e)+":"+(i?" ":"")+t)}),H=R.length?i?"{\n"+n+R.join(",\n"+n)+"\n"+q+"}":"{"+R.join(",")+"}":"{}";return a.pop(),H}};r.stringify=function(e,t,r){var i,n,a,o;if(s[typeof t]&&t)if((o=v.call(t))==E)n=t;else if(o==S){a={};for(var l,c=0,u=t.length;u>c;l=t[c++],o=v.call(l),(o==j||o==T)&&(a[l]=1));}if(r)if((o=v.call(r))==T){if((r-=r%1)>0)for(i="",r>10&&(r=10);i.length<r;i+=" ");}else o==j&&(i=r.length<=10?r:r.slice(0,10));return N("",(l={},l[""]=e,l),n,a,i,"",[])}}if(!n("json-parse")){var H,U,X=o.fromCharCode,F={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},k=function(){throw H=U=null,u()},D=function(){for(var e,t,s,r,i,n=U,a=n.length;a>H;)switch(i=n.charCodeAt(H)){case 9:case 10:case 13:case 32:H++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=R?n.charAt(H):n[H],H++,e;case 34:for(e="@",H++;a>H;)if(i=n.charCodeAt(H),32>i)k();else if(92==i)switch(i=n.charCodeAt(++H)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=F[i],H++;break;case 117:for(t=++H,s=H+4;s>H;H++)i=n.charCodeAt(H),i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||k();e+=X("0x"+n.slice(t,H));break;default:k()}else{if(34==i)break;for(i=n.charCodeAt(H),t=H;i>=32&&92!=i&&34!=i;)i=n.charCodeAt(++H);e+=n.slice(t,H)}if(34==n.charCodeAt(H))return H++,e;k();default:if(t=H,45==i&&(r=!0,i=n.charCodeAt(++H)),i>=48&&57>=i){for(48==i&&(i=n.charCodeAt(H+1),i>=48&&57>=i)&&k(),r=!1;a>H&&(i=n.charCodeAt(H),i>=48&&57>=i);H++);if(46==n.charCodeAt(H)){for(s=++H;a>s&&(i=n.charCodeAt(s),i>=48&&57>=i);s++);s==H&&k(),H=s}if(i=n.charCodeAt(H),101==i||69==i){for(i=n.charCodeAt(++H),(43==i||45==i)&&H++,s=H;a>s&&(i=n.charCodeAt(s),i>=48&&57>=i);s++);s==H&&k(),H=s}return+n.slice(t,H)}if(r&&k(),"true"==n.slice(H,H+4))return H+=4,!0;if("false"==n.slice(H,H+5))return H+=5,!1;if("null"==n.slice(H,H+4))return H+=4,null;k()}return"$"},B=function(e){var t,s;if("$"==e&&k(),"string"==typeof e){if("@"==(R?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(t=[];e=D(),"]"!=e;s||(s=!0))s&&(","==e?(e=D(),"]"==e&&k()):k()),","==e&&k(),t.push(B(e));return t}if("{"==e){for(t={};e=D(),"}"!=e;s||(s=!0))s&&(","==e?(e=D(),"}"==e&&k()):k()),(","==e||"string"!=typeof e||"@"!=(R?e.charAt(0):e[0])||":"!=D())&&k(),t[e.slice(1)]=B(D());return t}k()}return e},J=function(e,t,s){var r=V(e,t,s);r===g?delete e[t]:e[t]=r},V=function(e,t,s){var r,i=e[t];if("object"==typeof i&&i)if(v.call(i)==S)for(r=i.length;r--;)J(i,r,s);else _(i,function(e){J(i,e,s)});return s.call(e,t,i)};r.parse=function(e,t){var s,r;return H=0,U=""+e,s=B(D()),"$"!=D()&&k(),H=U=null,t&&v.call(t)==E?V((r={},r[""]=s,r),"",t):s}}}return r.runInContext=e,r}var t="function"==typeof define&&define.amd,s={"function":!0,object:!0},r=s[typeof exports]&&exports&&!exports.nodeType&&exports,i=s[typeof window]&&window||this,n=r&&s[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!n||n.global!==n&&n.window!==n&&n.self!==n||(i=n),r&&!t)e(i,r);else{var a=i.JSON,o=i.JSON3,l=!1,c=e(i,i.JSON3={noConflict:function(){return l||(l=!0,i.JSON=a,i.JSON3=o,a=o=null),c}});i.JSON={parse:c.parse,stringify:c.stringify}}t&&define(function(){return c})}.call(this),/*
 * DomUtils
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function(){var e={};e.appendToHead=function(t){e.getHead().appendChild(t)},e.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},e.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},createjs.DomUtils=e}(),/*
 * DataUtils
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function(){var e={};e.parseXML=function(e,t){var s=null;try{if(window.DOMParser){var r=new DOMParser;s=r.parseFromString(e,t)}}catch(i){}if(!s)try{s=new ActiveXObject("Microsoft.XMLDOM"),s.async=!1,s.loadXML(e)}catch(i){s=null}return s},e.parseJSON=function(e){if(null==e)return null;try{return JSON.parse(e)}catch(t){throw t}},createjs.DataUtils=e}(),/*
 * LoadItem
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=s.LOAD_TIMEOUT_DEFAULT}var t=e.prototype={},s=e;s.LOAD_TIMEOUT_DEFAULT=8e3,s.create=function(t){if("string"==typeof t){var r=new e;return r.src=t,r}if(t instanceof s)return t;if(t instanceof Object&&t.src)return null==t.loadTimeout&&(t.loadTimeout=s.LOAD_TIMEOUT_DEFAULT),t;throw new Error("Type not recognized.")},t.set=function(e){for(var t in e)this[t]=e[t];return this},createjs.LoadItem=s}(),/*
 * RequestUtils
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function(){var e={};e.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,e.RELATIVE_PATT=/^[.\/]*?\//i,e.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,e.parseURI=function(t){var s={absolute:!1,relative:!1};if(null==t)return s;var r=t.indexOf("?");r>-1&&(t=t.substr(0,r));var i;return e.ABSOLUTE_PATT.test(t)?s.absolute=!0:e.RELATIVE_PATT.test(t)&&(s.relative=!0),(i=t.match(e.EXTENSION_PATT))&&(s.extension=i[1].toLowerCase()),s},e.formatQueryString=function(e,t){if(null==e)throw new Error("You must specify data.");var s=[];for(var r in e)s.push(r+"="+escape(e[r]));return t&&(s=s.concat(t)),s.join("&")},e.buildPath=function(e,t){if(null==t)return e;var s=[],r=e.indexOf("?");if(-1!=r){var i=e.slice(r+1);s=s.concat(i.split("&"))}return-1!=r?e.slice(0,r)+"?"+this.formatQueryString(t,s):e+"?"+this.formatQueryString(t,s)},e.isCrossDomain=function(e){var t=document.createElement("a");t.href=e.src;var s=document.createElement("a");s.href=location.href;var r=""!=t.hostname&&(t.port!=s.port||t.protocol!=s.protocol||t.hostname!=s.hostname);return r},e.isLocal=function(e){var t=document.createElement("a");return t.href=e.src,""==t.hostname&&"file:"==t.protocol},e.isBinary=function(e){switch(e){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},e.isImageTag=function(e){return e instanceof HTMLImageElement},e.isAudioTag=function(e){return window.HTMLAudioElement?e instanceof HTMLAudioElement:!1},e.isVideoTag=function(e){return window.HTMLVideoElement?e instanceof HTMLVideoElement:!1},e.isText=function(e){switch(e){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},e.getTypeByExtension=function(e){if(null==e)return createjs.AbstractLoader.TEXT;switch(e.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=e}(),/*
 * AbstractLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=s,this.resultFormatter=null,e?this._item=createjs.LoadItem.create(e):this._item=null,this._preferXHR=t,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var t=createjs.extend(e,createjs.EventDispatcher),s=e;s.POST="POST",s.GET="GET",s.BINARY="binary",s.CSS="css",s.IMAGE="image",s.JAVASCRIPT="javascript",s.JSON="json",s.JSONP="jsonp",s.MANIFEST="manifest",s.SOUND="sound",s.VIDEO="video",s.SPRITESHEET="spritesheet",s.SVG="svg",s.TEXT="text",s.XML="xml",t.getItem=function(){return this._item},t.getResult=function(e){return e?this._rawResult:this._result},t.getTag=function(){return this._tag},t.setTag=function(e){this._tag=e},t.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var e=new createjs.Event("initialize");e.loader=this._request,this.dispatchEvent(e),this._request.load()},t.cancel=function(){this.canceled=!0,this.destroy()},t.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},t.getLoadedItems=function(){return this._loadedItems},t._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},t._createTag=function(e){return null},t._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},t._sendProgress=function(e){if(!this._isCanceled()){var t=null;"number"==typeof e?(this.progress=e,t=new createjs.ProgressEvent(this.progress)):(t=e,this.progress=e.loaded/e.total,t.progress=this.progress,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(t)}},t._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var e=new createjs.Event("complete");e.rawResult=this._rawResult,null!=this._result&&(e.result=this._result),this.dispatchEvent(e)}},t._sendError=function(e){!this._isCanceled()&&this.hasEventListener("error")&&(null==e&&(e=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(e))},t._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},t.resultFormatter=null,t.handleEvent=function(e){switch(e.type){case"complete":this._rawResult=e.target._response;var t=this.resultFormatter&&this.resultFormatter(this);t instanceof Function?t.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=t||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(e);break;case"error":this._sendError(e);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+e.type.toUpperCase()+"_ERROR"))}},t._resultFormatSuccess=function(e){this._result=e,this._sendComplete()},t._resultFormatFailed=function(e){this._sendError(e)},t.buildPath=function(e,t){return createjs.RequestUtils.buildPath(e,t)},t.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(e,"EventDispatcher")}(),/*
 * AbstractMediaLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.AbstractLoader_constructor(e,t,s),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var t=createjs.extend(e,createjs.AbstractLoader);t.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},t._createTag=function(){},t._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},t._updateXHR=function(e){e.loader.setResponseType&&e.loader.setResponseType("blob")},t._formatResult=function(e){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var t=window.URL||window.webkitURL,s=e.getResult(!0);e.getTag().src=t.createObjectURL(s)}return e.getTag()},createjs.AbstractMediaLoader=createjs.promote(e,"AbstractLoader")}(),/*
 * AbstractRequest
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";var e=function(e){this._item=e},t=createjs.extend(e,createjs.EventDispatcher);t.load=function(){},t.destroy=function(){},t.cancel=function(){},createjs.AbstractRequest=createjs.promote(e,"EventDispatcher")}(),/*
 * TagRequest
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.AbstractRequest_constructor(e),this._tag=t,this._tagSrcAttribute=s,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var t=createjs.extend(e,createjs.AbstractRequest);t.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var e=new createjs.Event("initialize");e.loader=this._tag,this.dispatchEvent(e),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0)},t.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},t._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var e=this._tag;("loaded"==e.readyState||"complete"==e.readyState)&&this._handleTagComplete()},t._handleError=function(){this._clean(),this.dispatchEvent("error")},t._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},t._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},t._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},t._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},t._showTag=function(){this._tag.style.visibility=this._startTagVisibility},t._handleStalled=function(){},createjs.TagRequest=createjs.promote(e,"AbstractRequest")}(),/*
 * MediaTagRequest
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.AbstractRequest_constructor(e),this._tag=t,this._tagSrcAttribute=s,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var t=createjs.extend(e,createjs.TagRequest);t.load=function(){var e=createjs.proxy(this._handleStalled,this);this._stalledCallback=e;var t=createjs.proxy(this._handleProgress,this);this._handleProgress=t,this._tag.addEventListener("stalled",e),this._tag.addEventListener("progress",t),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},t._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var e=this._tag;("loaded"==e.readyState||"complete"==e.readyState)&&this._handleTagComplete()},t._handleStalled=function(){},t._handleProgress=function(e){if(e&&!(e.loaded>0&&0==e.total)){var t=new createjs.ProgressEvent(e.loaded,e.total);this.dispatchEvent(t)}},t._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(e,"TagRequest")}(),/*
 * XHRRequest
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e){this.AbstractRequest_constructor(e),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(e)}var t=createjs.extend(e,createjs.AbstractRequest);e.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],t.getResult=function(e){return e&&this._rawResponse?this._rawResponse:this._response},t.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},t.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(e){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,e))}},t.setResponseType=function(e){"blob"===e&&(e=window.URL?"blob":"arraybuffer",this._responseType=e),this._request.responseType=e},t.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},t.getResponseHeader=function(e){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(e):null},t._handleProgress=function(e){if(e&&!(e.loaded>0&&0==e.total)){var t=new createjs.ProgressEvent(e.loaded,e.total);this.dispatchEvent(t)}},t._handleLoadStart=function(e){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},t._handleAbort=function(e){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,e))},t._handleError=function(e){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(e.message))},t._handleReadyStateChange=function(e){4==this._request.readyState&&this._handleLoad()},t._handleLoad=function(e){if(!this.loaded){this.loaded=!0;var t=this._checkError();if(t)return void this._handleError(t);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(s){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===s.name&&window.BlobBuilder){var r=new BlobBuilder;r.append(this._response),this._response=r.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},t._handleTimeout=function(e){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,e))},t._checkError=function(){var e=parseInt(this._request.status);switch(e){case 404:case 0:return new Error(e)}return null},t._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(e){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(e){}return null},t._createXHR=function(e){var t=createjs.RequestUtils.isCrossDomain(e),r={},i=null;if(window.XMLHttpRequest)i=new XMLHttpRequest,t&&void 0===i.withCredentials&&window.XDomainRequest&&(i=new XDomainRequest);else{for(var n=0,a=s.ACTIVEX_VERSIONS.length;a>n;n++){var o=s.ACTIVEX_VERSIONS[n];try{i=new ActiveXObject(o);break}catch(l){}}if(null==i)return!1}null==e.mimeType&&createjs.RequestUtils.isText(e.type)&&(e.mimeType="text/plain; charset=utf-8"),e.mimeType&&i.overrideMimeType&&i.overrideMimeType(e.mimeType),this._xhrLevel="string"==typeof i.responseType?2:1;var c=null;if(c=e.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(e.src,e.values):e.src,i.open(e.method||createjs.AbstractLoader.GET,c,!0),t&&i instanceof XMLHttpRequest&&1==this._xhrLevel&&(r.Origin=location.origin),e.values&&e.method==createjs.AbstractLoader.POST&&(r["Content-Type"]="application/x-www-form-urlencoded"),t||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),e.headers)for(var u in e.headers)r[u]=e.headers[u];for(u in r)i.setRequestHeader(u,r[u]);return i instanceof XMLHttpRequest&&void 0!==e.withCredentials&&(i.withCredentials=e.withCredentials),this._request=i,!0},t._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},t.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(e,"AbstractRequest")}(),/*
 * LoadQueue
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t,s){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(e,t,s)}var t=createjs.extend(e,createjs.AbstractLoader),s=e;t.init=function(e,t,s){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(e),this._paused=!1,this._basePath=t,this._crossOrigin=s,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=NaN},s.loadTimeout=8e3,s.LOAD_TIMEOUT=0,s.BINARY=createjs.AbstractLoader.BINARY,s.CSS=createjs.AbstractLoader.CSS,s.IMAGE=createjs.AbstractLoader.IMAGE,s.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,s.JSON=createjs.AbstractLoader.JSON,s.JSONP=createjs.AbstractLoader.JSONP,s.MANIFEST=createjs.AbstractLoader.MANIFEST,s.SOUND=createjs.AbstractLoader.SOUND,s.VIDEO=createjs.AbstractLoader.VIDEO,s.SVG=createjs.AbstractLoader.SVG,s.TEXT=createjs.AbstractLoader.TEXT,s.XML=createjs.AbstractLoader.XML,s.POST=createjs.AbstractLoader.POST,s.GET=createjs.AbstractLoader.GET,t.registerLoader=function(e){if(!e||!e.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(e))throw new Error("loader already exists.");this._availableLoaders.unshift(e)},t.unregisterLoader=function(e){var t=this._availableLoaders.indexOf(e);-1!=t&&t<this._defaultLoaderLength-1&&this._availableLoaders.splice(t,1)},t.setUseXHR=function(e){return this.setPreferXHR(e)},t.setPreferXHR=function(e){return this.preferXHR=0!=e&&null!=window.XMLHttpRequest,this.preferXHR},t.removeAll=function(){this.remove()},t.remove=function(e){var t=null;if(e&&!Array.isArray(e))t=[e];else if(e)t=e;else if(arguments.length>0)return;var s=!1;if(t){for(;t.length;){var r=t.pop(),i=this.getResult(r);for(n=this._loadQueue.length-1;n>=0;n--)if(a=this._loadQueue[n].getItem(),a.id==r||a.src==r){this._loadQueue.splice(n,1)[0].cancel();break}for(n=this._loadQueueBackup.length-1;n>=0;n--)if(a=this._loadQueueBackup[n].getItem(),a.id==r||a.src==r){this._loadQueueBackup.splice(n,1)[0].cancel();break}if(i)this._disposeItem(this.getItem(r));else for(var n=this._currentLoads.length-1;n>=0;n--){var a=this._currentLoads[n].getItem();if(a.id==r||a.src==r){this._currentLoads.splice(n,1)[0].cancel(),s=!0;break}}}s&&this._loadNext()}else{this.close();for(var o in this._loadItemsById)this._disposeItem(this._loadItemsById[o]);this.init(this.preferXHR,this._basePath)}},t.reset=function(){this.close();for(var e in this._loadItemsById)this._disposeItem(this._loadItemsById[e]);for(var t=[],s=0,r=this._loadQueueBackup.length;r>s;s++)t.push(this._loadQueueBackup[s].getItem());this.loadManifest(t,!1)},t.installPlugin=function(e){if(null!=e&&null!=e.getPreloadHandlers){this._plugins.push(e);var t=e.getPreloadHandlers();if(t.scope=e,null!=t.types)for(var s=0,r=t.types.length;r>s;s++)this._typeCallbacks[t.types[s]]=t;if(null!=t.extensions)for(s=0,r=t.extensions.length;r>s;s++)this._extensionCallbacks[t.extensions[s]]=t}},t.setMaxConnections=function(e){this._maxConnections=e,!this._paused&&this._loadQueue.length>0&&this._loadNext()},t.loadFile=function(e,t,s){if(null==e){var r=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(r)}this._addItem(e,null,s),t!==!1?this.setPaused(!1):this.setPaused(!0)},t.loadManifest=function(e,t,r){var i=null,n=null;if(Array.isArray(e)){if(0==e.length){var a=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(a)}i=e}else if("string"==typeof e)i=[{src:e,type:s.MANIFEST}];else{if("object"!=typeof e){var a=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(a)}if(void 0!==e.src){if(null==e.type)e.type=s.MANIFEST;else if(e.type!=s.MANIFEST){var a=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(a)}i=[e]}else void 0!==e.manifest&&(i=e.manifest,n=e.path)}for(var o=0,l=i.length;l>o;o++)this._addItem(i[o],n,r);t!==!1?this.setPaused(!1):this.setPaused(!0)},t.load=function(){this.setPaused(!1)},t.getItem=function(e){return this._loadItemsById[e]||this._loadItemsBySrc[e]},t.getResult=function(e,t){var s=this._loadItemsById[e]||this._loadItemsBySrc[e];if(null==s)return null;var r=s.id;return t&&this._loadedRawResults[r]?this._loadedRawResults[r]:this._loadedResults[r]},t.getItems=function(e){var t=[];for(var s in this._loadItemsById){var r=this._loadItemsById[s],i=this.getResult(s);(e!==!0||null!=i)&&t.push({item:r,result:i,rawResult:this.getResult(s,!0)})}return t},t.setPaused=function(e){this._paused=e,this._paused||this._loadNext()},t.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=NaN},t._addItem=function(e,t,s){var r=this._createLoadItem(e,t,s);if(null!=r){var i=this._createLoader(r);null!=i&&("plugins"in i&&(i.plugins=this._plugins),r._loader=i,this._loadQueue.push(i),this._loadQueueBackup.push(i),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&r.type==createjs.LoadQueue.JAVASCRIPT||r.maintainOrder===!0)&&(this._scriptOrder.push(r),this._loadedScripts.push(null)))}},t._createLoadItem=function(e,t,s){var r=createjs.LoadItem.create(e);if(null==r)return null;var i="",n=s||this._basePath;if(r.src instanceof Object){if(!r.type)return null;if(t){i=t;var a=createjs.RequestUtils.parseURI(t);null==n||a.absolute||a.relative||(i=n+i)}else null!=n&&(i=n)}else{var o=createjs.RequestUtils.parseURI(r.src);o.extension&&(r.ext=o.extension),null==r.type&&(r.type=createjs.RequestUtils.getTypeByExtension(r.ext));var l=r.src;if(!o.absolute&&!o.relative)if(t){i=t;var a=createjs.RequestUtils.parseURI(t);l=t+l,null==n||a.absolute||a.relative||(i=n+i)}else null!=n&&(i=n);r.src=i+r.src}r.path=i,(void 0===r.id||null===r.id||""===r.id)&&(r.id=l);var c=this._typeCallbacks[r.type]||this._extensionCallbacks[r.ext];if(c){var u=c.callback.call(c.scope,r,this);if(u===!1)return null;u===!0||null!=u&&(r._loader=u),o=createjs.RequestUtils.parseURI(r.src),null!=o.extension&&(r.ext=o.extension)}return this._loadItemsById[r.id]=r,this._loadItemsBySrc[r.src]=r,null==r.crossOrigin&&(r.crossOrigin=this._crossOrigin),r},t._createLoader=function(e){if(null!=e._loader)return e._loader;for(var t=this.preferXHR,s=0;s<this._availableLoaders.length;s++){var r=this._availableLoaders[s];if(r&&r.canLoadItem(e))return new r(e,t)}return null},t._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var e=0;e<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);e++){var t=this._loadQueue[e];this._canStartLoad(t)&&(this._loadQueue.splice(e,1),e--,this._loadItem(t))}}},t._loadItem=function(e){e.on("fileload",this._handleFileLoad,this),e.on("progress",this._handleProgress,this),e.on("complete",this._handleFileComplete,this),e.on("error",this._handleError,this),e.on("fileerror",this._handleFileError,this),this._currentLoads.push(e),this._sendFileStart(e.getItem()),e.load()},t._handleFileLoad=function(e){e.target=null,this.dispatchEvent(e)},t._handleFileError=function(e){var t=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,e.item);this._sendError(t)},t._handleError=function(e){var t=e.target;this._numItemsLoaded++,this._finishOrderedItem(t,!0),this._updateProgress();var s=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,t.getItem());this._sendError(s),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(t),this._cleanLoadItem(t),this._loadNext())},t._handleFileComplete=function(e){var t=e.target,s=t.getItem(),r=t.getResult();this._loadedResults[s.id]=r;var i=t.getResult(!0);null!=i&&i!==r&&(this._loadedRawResults[s.id]=i),this._saveLoadedItems(t),this._removeLoadItem(t),this._finishOrderedItem(t)||this._processFinishedLoad(s,t),this._cleanLoadItem(t)},t._saveLoadedItems=function(e){var t=e.getLoadedItems();if(null!==t)for(var s=0;s<t.length;s++){var r=t[s].item;this._loadItemsBySrc[r.src]=r,this._loadItemsById[r.id]=r,this._loadedResults[r.id]=t[s].result,this._loadedRawResults[r.id]=t[s].rawResult}},t._finishOrderedItem=function(e,t){var s=e.getItem();if(this.maintainScriptOrder&&s.type==createjs.LoadQueue.JAVASCRIPT||s.maintainOrder){e instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var r=createjs.indexOf(this._scriptOrder,s);return-1==r?!1:(this._loadedScripts[r]=t===!0?!0:s,this._checkScriptLoadOrder(),!0)}return!1},t._checkScriptLoadOrder=function(){for(var e=this._loadedScripts.length,t=0;e>t;t++){var s=this._loadedScripts[t];if(null===s)break;if(s!==!0){var r=this._loadedResults[s.id];s.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(r);var i=s._loader;this._processFinishedLoad(s,i),this._loadedScripts[t]=!0}}},t._processFinishedLoad=function(e,t){if(this._numItemsLoaded++,!this.maintainScriptOrder&&e.type==createjs.LoadQueue.JAVASCRIPT){var s=t.getTag();createjs.DomUtils.appendToHead(s)}this._updateProgress(),this._sendFileComplete(e,t),this._loadNext()},t._canStartLoad=function(e){if(!this.maintainScriptOrder||e.preferXHR)return!0;var t=e.getItem();if(t.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var s=this._scriptOrder.indexOf(t),r=0;s>r;){var i=this._loadedScripts[r];if(null==i)return!1;r++}return this._currentlyLoadingScript=!0,!0},t._removeLoadItem=function(e){for(var t=this._currentLoads.length,s=0;t>s;s++)if(this._currentLoads[s]==e){this._currentLoads.splice(s,1);break}},t._cleanLoadItem=function(e){var t=e.getItem();t&&delete t._loader},t._handleProgress=function(e){var t=e.target;this._sendFileProgress(t.getItem(),t.progress),this._updateProgress()},t._updateProgress=function(){var e=this._numItemsLoaded/this._numItems,t=this._numItems-this._numItemsLoaded;if(t>0){for(var s=0,r=0,i=this._currentLoads.length;i>r;r++)s+=this._currentLoads[r].progress;e+=s/t*(t/this._numItems)}this._lastProgress!=e&&(this._sendProgress(e),this._lastProgress=e)},t._disposeItem=function(e){delete this._loadedResults[e.id],delete this._loadedRawResults[e.id],delete this._loadItemsById[e.id],delete this._loadItemsBySrc[e.src]},t._sendFileProgress=function(e,t){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var s=new createjs.Event("fileprogress");s.progress=t,s.loaded=t,s.total=1,s.item=e,this.dispatchEvent(s)}},t._sendFileComplete=function(e,t){if(!this._isCanceled()&&!this._paused){var s=new createjs.Event("fileload");s.loader=t,s.item=e,s.result=this._loadedResults[e.id],s.rawResult=this._loadedRawResults[e.id],e.completeHandler&&e.completeHandler(s),this.hasEventListener("fileload")&&this.dispatchEvent(s)}},t._sendFileStart=function(e){var t=new createjs.Event("filestart");t.item=e,this.hasEventListener("filestart")&&this.dispatchEvent(t)},t.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(e,"AbstractLoader")}(),/*
 * CSSLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t){this.AbstractLoader_constructor(e,t,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",t?this._tag=document.createElement("style"):this._tag=document.createElement("link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var t=createjs.extend(e,createjs.AbstractLoader),s=e;s.canLoadItem=function(e){return e.type==createjs.AbstractLoader.CSS},t._formatResult=function(e){if(this._preferXHR){var t=e.getTag();if(t.styleSheet)t.styleSheet.cssText=e.getResult(!0);else{var s=document.createTextNode(e.getResult(!0));t.appendChild(s)}}else t=this._tag;return createjs.DomUtils.appendToHead(t),t},createjs.CSSLoader=createjs.promote(e,"AbstractLoader")}(),/*
 * ImageLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t){this.AbstractLoader_constructor(e,t,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(e)?this._tag=e:createjs.RequestUtils.isImageTag(e.src)?this._tag=e.src:createjs.RequestUtils.isImageTag(e.tag)&&(this._tag=e.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var t=createjs.extend(e,createjs.AbstractLoader),s=e;s.canLoadItem=function(e){return e.type==createjs.AbstractLoader.IMAGE},t.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var e=this._item.crossOrigin;1==e&&(e="Anonymous"),null==e||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=e),this.AbstractLoader_load()},t._updateXHR=function(e){e.loader.mimeType="text/plain; charset=x-user-defined-binary",e.loader.setResponseType&&e.loader.setResponseType("blob")},t._formatResult=function(e){return this._formatImage},t._formatImage=function(e,t){var s=this._tag,r=window.URL||window.webkitURL;if(this._preferXHR)if(r){var i=r.createObjectURL(this.getResult(!0));s.src=i,s.addEventListener("load",this._cleanUpURL,!1),s.addEventListener("error",this._cleanUpURL,!1)}else s.src=this._item.src;else;s.complete?e(s):(s.onload=createjs.proxy(function(){e(this._tag)},this),s.onerror=createjs.proxy(function(){t(_this._tag)},this))},t._cleanUpURL=function(e){var t=window.URL||window.webkitURL;t.revokeObjectURL(e.target.src)},createjs.ImageLoader=createjs.promote(e,"AbstractLoader")}(),/*
 * JavaScriptLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e,t){this.AbstractLoader_constructor(e,t,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var t=createjs.extend(e,createjs.AbstractLoader),s=e;s.canLoadItem=function(e){return e.type==createjs.AbstractLoader.JAVASCRIPT},t._formatResult=function(e){var t=e.getTag();return this._preferXHR&&(t.text=e.getResult(!0)),t},createjs.JavaScriptLoader=createjs.promote(e,"AbstractLoader")}(),/*
 * ManifestLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.createjs=this.createjs||{},function(){"use strict";function e(e){this.AbstractLoader_constructor(e,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var t=createjs.extend(e,createjs.AbstractLoader),s=e;s.MANIFEST_PROGRESS=.25,s.canLoadItem=function(e){return e.type==createjs.AbstractLoader.MANIFEST},t.load=function(){this.AbstractLoader_load()},t._createRequest=function(){var e=this._item.callback;null!=e?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},t.handleEvent=function(e){switch(e.type){case"complete":return this._rawResult=e.target.getResult(!0),this._result=e.target.getResult(),this._sendProgress(s.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return e.loaded*=s.MANIFEST_PROGRESS,this.progress=e.loaded/e.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(e)}this.AbstractLoader_handleEvent(e)},t.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},t._loadManifest=function(e){if(e&&e.manifest){var t=this._manifestQueue=new createjs.LoadQueue;t.on("fileload",this._handleManifestFileLoad,this),t.on("progress",this._handleManifestProgress,this),t.on("complete",this._handleManifestComplete,this,!0),t.on("error",this._handleManifestError,this,!0);for(var s=0,r=this.plugins.length;r>s;s++)t.installPlugin(this.plugins[s]);t.loadManifest(e)}else this._sendComplete()},t._handleManifestFileLoad=function(e){e.target=null,this.dispatchEvent(e)},t._handleManifestComplete=function(e){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},t._handleManifestProgress=function(e){this.progress=e.progress*(1-s.MANIFEST_PROGRESS)+s.MANIFEST_PROGRESS,this._sendProgress(this.progress)},t._handleManifestError=function(e){var t=new createjs.Event("fileerror");t.item=e.data,this.dispatchEvent(t)},createjs.ManifestLoader=createjs.promote(e,"AbstractLoader")}(),function(){}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=[].indexOf||function(e){for(var t=0,s=this.length;s>t;t++)if(t in this&&this[t]===e)return t;return-1};this.Preloader=function(){function s(t,s,r){null==r&&(r={}),this.onError=e(this.onError,this),this.onComplete=e(this.onComplete,this),this.onFileProgress=e(this.onFileProgress,this),this.onProgress=e(this.onProgress,this),this.onFileLoaded=e(this.onFileLoaded,this),this.preloader=document.querySelector(t),this.manifest=s,this.options=a.call(this,this.defaults,r),this.preloader&&(o.call(this),this.manifest&&this.load(this.manifest))}var r,i,n,a,o,l,c,u,h,d;return s.prototype.STATES={INITIALIZED:"initialized",ACTIVE:"active",LOADING:"loading",COMPLETE:"complete"},s.prototype.preloader=null,s.prototype.manifest=null,s.prototype.options=null,s.prototype.classList=null,s.prototype.loader=null,s.prototype.progress=null,s.prototype.logo=null,s.prototype.defaults={loader:{types:["css","image","javascript"],maxConnections:5},progress:{enabled:!0},logo:{enabled:!0,template:'<figure class="logo animated"></figure>'},cooling:{time:1e3},before:function(){},complete:function(){},logging:!1},s.prototype.load=function(e){e=i.call(this,e),e&&e.length>0&&(l.call(this),c.call(this,"Loading manifest with "+e.length+" files..."),this.loader.loadManifest(e))},s.prototype.stop=function(){this.loader&&this.loader.close(),this.progress&&this.progress.done(),this.classList.remove(this.STATES.LOADING),setTimeout(function(e){return function(){e.classList.remove(e.STATES.ACTIVE)}}(this),this.options.cooling.time)},s.prototype.onFileLoaded=function(e){var t,s,r;s=e.item,t=s.id,r=e.result,c.call(this,"File (`"+t+"`) loaded.")},s.prototype.onProgress=function(e){c.call(this,"On progress...","debug"),this.progress&&this.progress.inc()},s.prototype.onFileProgress=function(e){c.call(this,"On file progress...","debug")},s.prototype.onComplete=function(e){c.call(this,"All files loaded."),n.call(this)},s.prototype.onError=function(e){var t,s;s=e.data,t=s.id,c.call(this,"The file (`"+t+"`) failed to load.")},o=function(){this.classList=this.preloader.classList,d.call(this),h.call(this),u.call(this),r.call(this)},d=function(){this.options.progress.enabled&&(this.progress=NProgress.configure(this.options.progress))},h=function(){this.options.logo.enabled&&(this.logo=this.preloader.insertAdjacentHTML("beforeend",this.options.logo.template))},u=function(){this.loader=new createjs.LoadQueue(!0),this.loader.on("fileload",this.onFileLoaded),this.loader.on("progress",this.onProgress),this.loader.on("complete",this.onComplete),this.loader.on("fileprogress",this.onFileProgress),this.loader.on("error",this.onError),this.loader.setMaxConnections(this.options.loader.maxConnections)},r=function(){this.classList.add(this.STATES.INITIALIZED),this.classList.add(this.STATES.ACTIVE),this.options.before(),this.progress&&this.progress.start()},l=function(){this.classList.add(this.STATES.LOADING)},n=function(){this.options.complete(),this.progress&&this.progress.done(),this.classList.add(this.STATES.COMPLETE),this.classList.remove(this.STATES.LOADING),setTimeout(function(e){return function(){e.classList.remove(e.STATES.ACTIVE)}}(this),this.options.cooling.time)},i=function(e){var s;return s=[],e.files&&e.files.forEach(function(e){return function(r){var i;i=r.type,i&&t.call(e.options.loader.types,i)>=0&&s.push(r)}}(this)),e.media&&e.media.forEach(function(e){return function(r){var i,n;n=r.query,i=r.files,n&&i&&verge.mq(n)&&i.forEach(function(r){var i;return i=r.type,i&&t.call(e.options.loader.types,i)>=0?s.push(r):void 0})}}(this)),s},c=function(e,t){if(null==t&&(t="info"),this.options.logging)switch(t){case"info":console.info(e);break;case"warning":console.warn(e);break;case"error":console.error(e);break;case"debug":console.debug(e)}},a=function(e,t){return Object.keys(t).forEach(function(s){e[s]=t[s]}),e},s}()}.call(this);