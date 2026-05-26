function Td(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fl={exports:{}},yi={},Hl={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),_d=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Dd=Symbol.for("react.suspense"),zd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),wa=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var Bl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl=Object.assign,$l={};function vt(e,n,t){this.props=e,this.context=n,this.refs=$l,this.updater=t||Bl}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vl(){}Vl.prototype=vt.prototype;function go(e,n,t){this.props=e,this.context=n,this.refs=$l,this.updater=t||Bl}var vo=go.prototype=new Vl;vo.constructor=go;Gl(vo,vt.prototype);vo.isPureReactComponent=!0;var ka=Array.isArray,Yl=Object.prototype.hasOwnProperty,yo={current:null},ql={key:!0,ref:!0,__self:!0,__source:!0};function Ql(e,n,t){var r,i={},s=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(s=""+n.key),n)Yl.call(n,r)&&!ql.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ur,type:e,key:s,ref:o,props:i,_owner:yo.current}}function Hd(e,n){return{$$typeof:ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Bd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Sa=/\/+/g;function Fi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):n.toString(36)}function Ar(e,n,t,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ur:case Ld:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fi(o,0):r,ka(i)?(t="",e!=null&&(t=e.replace(Sa,"$&/")+"/"),Ar(i,n,t,"",function(c){return c})):i!=null&&(xo(i)&&(i=Hd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sa,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",ka(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+Fi(s,l);o+=Ar(s,n,t,u,i)}else if(u=Fd(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+Fi(s,l++),o+=Ar(s,n,t,u,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,n,t){if(e==null)return e;var r=[],i=0;return Ar(e,r,"","",function(s){return n.call(t,s,i++)}),r}function Gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Or={transition:null},$d={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Or,ReactCurrentOwner:yo};function Kl(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=vt;P.Fragment=_d;P.Profiler=Ad;P.PureComponent=go;P.StrictMode=Pd;P.Suspense=Dd;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d;P.act=Kl;P.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gl({},e.props),i=e.key,s=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,o=yo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)Yl.call(n,u)&&!ql.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&l!==void 0?l[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ur,type:e.type,key:i,ref:s,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:Md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};P.createElement=Ql;P.createFactory=function(e){var n=Ql.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:Wd,render:e}};P.isValidElement=xo;P.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Gd}};P.memo=function(e,n){return{$$typeof:zd,type:e,compare:n===void 0?null:n}};P.startTransition=function(e){var n=Or.transition;Or.transition={};try{e()}finally{Or.transition=n}};P.unstable_act=Kl;P.useCallback=function(e,n){return ce.current.useCallback(e,n)};P.useContext=function(e){return ce.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};P.useEffect=function(e,n){return ce.current.useEffect(e,n)};P.useId=function(){return ce.current.useId()};P.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};P.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};P.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};P.useMemo=function(e,n){return ce.current.useMemo(e,n)};P.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};P.useRef=function(e){return ce.current.useRef(e)};P.useState=function(e){return ce.current.useState(e)};P.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};P.useTransition=function(){return ce.current.useTransition()};P.version="18.3.1";Hl.exports=P;var k=Hl.exports;const Xl=Rd(k),Vd=Td({__proto__:null,default:Xl},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=k,qd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Kd=Object.prototype.hasOwnProperty,Xd=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,n,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Kd.call(n,r)&&!Jd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:qd,type:e,key:s,ref:o,props:i,_owner:Xd.current}}yi.Fragment=Qd;yi.jsx=Jl;yi.jsxs=Jl;Fl.exports=yi;var a=Fl.exports,gs={},Zl={exports:{}},Se={},eu={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,R){var _=C.length;C.push(R);e:for(;0<_;){var V=_-1>>>1,X=C[V];if(0<i(X,R))C[V]=R,C[_]=X,_=V;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],_=C.pop();if(_!==R){C[0]=_;e:for(var V=0,X=C.length,hr=X>>>1;V<hr;){var Cn=2*(V+1)-1,Ui=C[Cn],jn=Cn+1,gr=C[jn];if(0>i(Ui,_))jn<X&&0>i(gr,Ui)?(C[V]=gr,C[jn]=_,V=jn):(C[V]=Ui,C[Cn]=_,V=Cn);else if(jn<X&&0>i(gr,_))C[V]=gr,C[jn]=_,V=jn;else break e}}return R}function i(C,R){var _=C.sortIndex-R.sortIndex;return _!==0?_:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,m=null,g=3,w=!1,y=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=C)r(c),R.sortIndex=R.expirationTime,n(u,R);else break;R=t(c)}}function v(C){if(x=!1,p(C),!y)if(t(u)!==null)y=!0,Di(b);else{var R=t(c);R!==null&&zi(v,R.startTime-C)}}function b(C,R){y=!1,x&&(x=!1,f(T),T=-1),w=!0;var _=g;try{for(p(R),m=t(u);m!==null&&(!(m.expirationTime>R)||C&&!ve());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var X=V(m.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?m.callback=X:m===t(u)&&r(u),p(R)}else r(u);m=t(u)}if(m!==null)var hr=!0;else{var Cn=t(c);Cn!==null&&zi(v,Cn.startTime-R),hr=!1}return hr}finally{m=null,g=_,w=!1}}var j=!1,I=null,T=-1,U=5,L=-1;function ve(){return!(e.unstable_now()-L<U)}function wt(){if(I!==null){var C=e.unstable_now();L=C;var R=!0;try{R=I(!0,C)}finally{R?kt():(j=!1,I=null)}}else j=!1}var kt;if(typeof d=="function")kt=function(){d(wt)};else if(typeof MessageChannel<"u"){var xa=new MessageChannel,Id=xa.port2;xa.port1.onmessage=wt,kt=function(){Id.postMessage(null)}}else kt=function(){E(wt,0)};function Di(C){I=C,j||(j=!0,kt())}function zi(C,R){T=E(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Di(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var _=g;g=R;try{return C()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=g;g=C;try{return R()}finally{g=_}},e.unstable_scheduleCallback=function(C,R,_){var V=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?V+_:V):_=V,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,C={id:h++,callback:R,priorityLevel:C,startTime:_,expirationTime:X,sortIndex:-1},_>V?(C.sortIndex=_,n(c,C),t(u)===null&&C===t(c)&&(x?(f(T),T=-1):x=!0,zi(v,_-V))):(C.sortIndex=X,n(u,C),y||w||(y=!0,Di(b))),C},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(C){var R=g;return function(){var _=g;g=R;try{return C.apply(this,arguments)}finally{g=_}}}})(nu);eu.exports=nu;var Zd=eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef=k,ke=Zd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Gt={};function Un(e,n){ut(e,n),ut(e+"Capture",n)}function ut(e,n){for(Gt[e]=n,e=0;e<n.length;e++)tu.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},Ea={};function tf(e){return vs.call(Ea,e)?!0:vs.call(ba,e)?!1:nf.test(e)?Ea[e]=!0:(ba[e]=!0,!1)}function rf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sf(e,n,t,r){if(n===null||typeof n>"u"||rf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,i,s,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wo,ko);te[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wo,ko);te[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wo,ko);te[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function So(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(sf(n,t,i,r)&&(t=null),r||i===null?tf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var en=ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),bo=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),iu=Symbol.for("react.context"),Eo=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Na=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Hi;function Rt(e){if(Hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hi=n&&n[1]||""}return`
`+Hi+e}var Bi=!1;function Gi(e,n){if(!e||Bi)return"";Bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Rt(e):""}function of(e){switch(e.tag){case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case $n:return"Portal";case ys:return"Profiler";case bo:return"StrictMode";case xs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Eo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return n=e.displayName||null,n!==null?n:ks(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return ks(e(n))}catch{}}return null}function af(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ks(n);case 8:return n===bo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lf(e){var n=ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xr(e){e._valueTracker||(e._valueTracker=lf(e))}function au(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ss(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ca(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function lu(e,n){n=n.checked,n!=null&&So(e,"checked",n,!1)}function bs(e,n){lu(e,n);var t=wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Es(e,n.type,t):n.hasOwnProperty("defaultValue")&&Es(e,n.type,wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ja(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Es(e,n,t){(n!=="number"||Vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function rt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ns(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Lt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:wn(t)}}function uu(e,n){var t=wn(n.value),r=wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ta(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uf=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(e){uf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),At[n]=At[e]})});function fu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||At.hasOwnProperty(e)&&At[e]?(""+n).trim():n+"px"}function pu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=fu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var cf=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,n){if(n){if(cf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Is(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,it=null,st=null;function Ra(e){if(e=fr(e)){if(typeof Rs!="function")throw Error(S(280));var n=e.stateNode;n&&(n=bi(n),Rs(e.stateNode,e.type,n))}}function mu(e){it?st?st.push(e):st=[e]:it=e}function hu(){if(it){var e=it,n=st;if(st=it=null,Ra(e),n)for(e=0;e<n.length;e++)Ra(n[e])}}function gu(e,n){return e(n)}function vu(){}var $i=!1;function yu(e,n,t){if($i)return e(n,t);$i=!0;try{return gu(e,n,t)}finally{$i=!1,(it!==null||st!==null)&&(vu(),hu())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=bi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ls=!1;if(Ke)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{Ls=!1}function df(e,n,t,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Ot=!1,Yr=null,qr=!1,_s=null,ff={onError:function(e){Ot=!0,Yr=e}};function pf(e,n,t,r,i,s,o,l,u){Ot=!1,Yr=null,df.apply(ff,arguments)}function mf(e,n,t,r,i,s,o,l,u){if(pf.apply(this,arguments),Ot){if(Ot){var c=Yr;Ot=!1,Yr=null}else throw Error(S(198));qr||(qr=!0,_s=c)}}function Fn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function La(e){if(Fn(e)!==e)throw Error(S(188))}function hf(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return La(i),e;if(s===r)return La(i),n;s=s.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,r=s;break}if(l===r){o=!0,r=i,t=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===t){o=!0,t=s,r=i;break}if(l===r){o=!0,r=s,t=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function wu(e){return e=hf(e),e!==null?ku(e):null}function ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ku(e);if(n!==null)return n;e=e.sibling}return null}var Su=ke.unstable_scheduleCallback,_a=ke.unstable_cancelCallback,gf=ke.unstable_shouldYield,vf=ke.unstable_requestPaint,Y=ke.unstable_now,yf=ke.unstable_getCurrentPriorityLevel,jo=ke.unstable_ImmediatePriority,bu=ke.unstable_UserBlockingPriority,Qr=ke.unstable_NormalPriority,xf=ke.unstable_LowPriority,Eu=ke.unstable_IdlePriority,xi=null,He=null;function wf(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:bf,kf=Math.log,Sf=Math.LN2;function bf(e){return e>>>=0,e===0?32:31-(kf(e)/Sf|0)|0}var kr=64,Sr=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?r=_t(l):(s&=o,s!==0&&(r=_t(s)))}else o=t&~i,o!==0?r=_t(o):s!==0&&(r=_t(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),i=1<<t,r|=e[t],n&=~i;return r}function Ef(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Oe(s),l=1<<o,u=i[o];u===-1?(!(l&t)||l&r)&&(i[o]=Ef(l,n)):u<=n&&(e.expiredLanes|=l),s&=~l}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function Cf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Oe(t),s=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~s}}function Io(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,To,Iu,Tu,Ru,As=!1,br=[],dn=null,fn=null,pn=null,Yt=new Map,qt=new Map,on=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Yt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(n.pointerId)}}function Et(e,n,t,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},n!==null&&(n=fr(n),n!==null&&To(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function If(e,n,t,r,i){switch(n){case"focusin":return dn=Et(dn,e,n,t,r,i),!0;case"dragenter":return fn=Et(fn,e,n,t,r,i),!0;case"mouseover":return pn=Et(pn,e,n,t,r,i),!0;case"pointerover":var s=i.pointerId;return Yt.set(s,Et(Yt.get(s)||null,e,n,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qt.set(s,Et(qt.get(s)||null,e,n,t,r,i)),!0}return!1}function Lu(e){var n=Rn(e.target);if(n!==null){var t=Fn(n);if(t!==null){if(n=t.tag,n===13){if(n=xu(t),n!==null){e.blockedOn=n,Ru(e.priority,function(){Iu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Os(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ts=r,t.target.dispatchEvent(r),Ts=null}else return n=fr(t),n!==null&&To(n),e.blockedOn=t,!1;n.shift()}return!0}function Aa(e,n,t){Mr(e)&&t.delete(n)}function Tf(){As=!1,dn!==null&&Mr(dn)&&(dn=null),fn!==null&&Mr(fn)&&(fn=null),pn!==null&&Mr(pn)&&(pn=null),Yt.forEach(Aa),qt.forEach(Aa)}function Nt(e,n){e.blockedOn===n&&(e.blockedOn=null,As||(As=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Tf)))}function Qt(e){function n(i){return Nt(i,e)}if(0<br.length){Nt(br[0],e);for(var t=1;t<br.length;t++){var r=br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Nt(dn,e),fn!==null&&Nt(fn,e),pn!==null&&Nt(pn,e),Yt.forEach(n),qt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)Lu(t),t.blockedOn===null&&on.shift()}var ot=en.ReactCurrentBatchConfig,Xr=!0;function Rf(e,n,t,r){var i=O,s=ot.transition;ot.transition=null;try{O=1,Ro(e,n,t,r)}finally{O=i,ot.transition=s}}function Lf(e,n,t,r){var i=O,s=ot.transition;ot.transition=null;try{O=4,Ro(e,n,t,r)}finally{O=i,ot.transition=s}}function Ro(e,n,t,r){if(Xr){var i=Os(e,n,t,r);if(i===null)ts(e,n,r,Jr,t),Pa(e,r);else if(If(i,e,n,t,r))r.stopPropagation();else if(Pa(e,r),n&4&&-1<jf.indexOf(e)){for(;i!==null;){var s=fr(i);if(s!==null&&ju(s),s=Os(e,n,t,r),s===null&&ts(e,n,r,Jr,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else ts(e,n,r,null,t)}}var Jr=null;function Os(e,n,t,r){if(Jr=null,e=Co(r),e=Rn(e),e!==null)if(n=Fn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jr=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yf()){case jo:return 1;case bu:return 4;case Qr:case xf:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var ln=null,Lo=null,Wr=null;function Pu(){if(Wr)return Wr;var e,n=Lo,t=n.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[s-r];r++);return Wr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Oa(){return!1}function be(e){function n(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Er:Oa,this.isPropagationStopped=Oa,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=be(yt),dr=B({},yt,{view:0,detail:0}),_f=be(dr),Yi,qi,Ct,wi=B({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Yi=e.screenX-Ct.screenX,qi=e.screenY-Ct.screenY):qi=Yi=0,Ct=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),Ma=be(wi),Pf=B({},wi,{dataTransfer:0}),Af=be(Pf),Of=B({},dr,{relatedTarget:0}),Qi=be(Of),Mf=B({},yt,{animationName:0,elapsedTime:0,pseudoElement:0}),Wf=be(Mf),Df=B({},yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zf=be(Df),Uf=B({},yt,{data:0}),Wa=be(Uf),Ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bf[e])?!!n[e]:!1}function Po(){return Gf}var $f=B({},dr,{key:function(e){if(e.key){var n=Ff[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=be($f),Yf=B({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Da=be(Yf),qf=B({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),Qf=be(qf),Kf=B({},yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xf=be(Kf),Jf=B({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=be(Jf),ep=[9,13,27,32],Ao=Ke&&"CompositionEvent"in window,Mt=null;Ke&&"documentMode"in document&&(Mt=document.documentMode);var np=Ke&&"TextEvent"in window&&!Mt,Au=Ke&&(!Ao||Mt&&8<Mt&&11>=Mt),za=" ",Ua=!1;function Ou(e,n){switch(e){case"keyup":return ep.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function tp(e,n){switch(e){case"compositionend":return Mu(n);case"keypress":return n.which!==32?null:(Ua=!0,za);case"textInput":return e=n.data,e===za&&Ua?null:e;default:return null}}function rp(e,n){if(Yn)return e==="compositionend"||!Ao&&Ou(e,n)?(e=Pu(),Wr=Lo=ln=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Au&&n.locale!=="ko"?null:n.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ip[e.type]:n==="textarea"}function Wu(e,n,t,r){mu(r),n=Zr(n,"onChange"),0<n.length&&(t=new _o("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Wt=null,Kt=null;function sp(e){qu(e,0)}function ki(e){var n=Kn(e);if(au(n))return e}function op(e,n){if(e==="change")return n}var Du=!1;if(Ke){var Ki;if(Ke){var Xi="oninput"in document;if(!Xi){var Ha=document.createElement("div");Ha.setAttribute("oninput","return;"),Xi=typeof Ha.oninput=="function"}Ki=Xi}else Ki=!1;Du=Ki&&(!document.documentMode||9<document.documentMode)}function Ba(){Wt&&(Wt.detachEvent("onpropertychange",zu),Kt=Wt=null)}function zu(e){if(e.propertyName==="value"&&ki(Kt)){var n=[];Wu(n,Kt,e,Co(e)),yu(sp,n)}}function ap(e,n,t){e==="focusin"?(Ba(),Wt=n,Kt=t,Wt.attachEvent("onpropertychange",zu)):e==="focusout"&&Ba()}function lp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Kt)}function up(e,n){if(e==="click")return ki(n)}function cp(e,n){if(e==="input"||e==="change")return ki(n)}function dp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:dp;function Xt(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!vs.call(n,i)||!We(e[i],n[i]))return!1}return!0}function Ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $a(e,n){var t=Ga(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ga(t)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fu(){for(var e=window,n=Vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vr(e.document)}return n}function Oo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fp(e){var n=Fu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uu(t.ownerDocument.documentElement,t)){if(r!==null&&Oo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$a(t,s);var o=$a(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pp=Ke&&"documentMode"in document&&11>=document.documentMode,qn=null,Ms=null,Dt=null,Ws=!1;function Va(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ws||qn==null||qn!==Vr(r)||(r=qn,"selectionStart"in r&&Oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dt&&Xt(Dt,r)||(Dt=r,r=Zr(Ms,"onSelect"),0<r.length&&(n=new _o("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=qn)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Ji={},Hu={};Ke&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Si(e){if(Ji[e])return Ji[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hu)return Ji[e]=n[t];return e}var Bu=Si("animationend"),Gu=Si("animationiteration"),$u=Si("animationstart"),Vu=Si("transitionend"),Yu=new Map,Ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Yu.set(e,n),Un(n,[e])}for(var Zi=0;Zi<Ya.length;Zi++){var es=Ya[Zi],mp=es.toLowerCase(),hp=es[0].toUpperCase()+es.slice(1);Sn(mp,"on"+hp)}Sn(Bu,"onAnimationEnd");Sn(Gu,"onAnimationIteration");Sn($u,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Vu,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pt));function qa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mf(r,n,void 0,e),e.currentTarget=null}function qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;qa(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;qa(i,l,c),s=u}}}if(qr)throw e=_s,qr=!1,_s=null,e}function W(e,n){var t=n[Hs];t===void 0&&(t=n[Hs]=new Set);var r=e+"__bubble";t.has(r)||(Qu(n,e,2,!1),t.add(r))}function ns(e,n,t){var r=0;n&&(r|=4),Qu(t,e,r,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[Cr]){e[Cr]=!0,tu.forEach(function(t){t!=="selectionchange"&&(gp.has(t)||ns(t,!1,e),ns(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,ns("selectionchange",!1,n))}}function Qu(e,n,t,r){switch(_u(n)){case 1:var i=Rf;break;case 4:i=Lf;break;default:i=Ro}t=i.bind(null,n,t,e),i=void 0,!Ls||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ts(e,n,t,r,i){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rn(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}yu(function(){var c=s,h=Co(t),m=[];e:{var g=Yu.get(e);if(g!==void 0){var w=_o,y=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":w=Vf;break;case"focusin":y="focus",w=Qi;break;case"focusout":y="blur",w=Qi;break;case"beforeblur":case"afterblur":w=Qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Qf;break;case Bu:case Gu:case $u:w=Wf;break;case Vu:w=Xf;break;case"scroll":w=_f;break;case"wheel":w=Zf;break;case"copy":case"cut":case"paste":w=zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Da}var x=(n&4)!==0,E=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Vt(d,f),v!=null&&x.push(Zt(d,v,p)))),E)break;d=d.return}0<x.length&&(g=new w(g,y,null,t,h),m.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==Ts&&(y=t.relatedTarget||t.fromElement)&&(Rn(y)||y[Xe]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=t.relatedTarget||t.toElement,w=c,y=y?Rn(y):null,y!==null&&(E=Fn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(x=Ma,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Da,v="onPointerLeave",f="onPointerEnter",d="pointer"),E=w==null?g:Kn(w),p=y==null?g:Kn(y),g=new x(v,d+"leave",w,t,h),g.target=E,g.relatedTarget=p,v=null,Rn(h)===c&&(x=new x(f,d+"enter",y,t,h),x.target=p,x.relatedTarget=E,v=x),E=v,w&&y)n:{for(x=w,f=y,d=0,p=x;p;p=Gn(p))d++;for(p=0,v=f;v;v=Gn(v))p++;for(;0<d-p;)x=Gn(x),d--;for(;0<p-d;)f=Gn(f),p--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break n;x=Gn(x),f=Gn(f)}x=null}else x=null;w!==null&&Qa(m,g,w,x,!1),y!==null&&E!==null&&Qa(m,E,y,x,!0)}}e:{if(g=c?Kn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var b=op;else if(Fa(g))if(Du)b=cp;else{b=lp;var j=ap}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=up);if(b&&(b=b(e,c))){Wu(m,b,t,h);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Es(g,"number",g.value)}switch(j=c?Kn(c):window,e){case"focusin":(Fa(j)||j.contentEditable==="true")&&(qn=j,Ms=c,Dt=null);break;case"focusout":Dt=Ms=qn=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Va(m,t,h);break;case"selectionchange":if(pp)break;case"keydown":case"keyup":Va(m,t,h)}var I;if(Ao)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Yn?Ou(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Au&&t.locale!=="ko"&&(Yn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Yn&&(I=Pu()):(ln=h,Lo="value"in ln?ln.value:ln.textContent,Yn=!0)),j=Zr(c,T),0<j.length&&(T=new Wa(T,e,null,t,h),m.push({event:T,listeners:j}),I?T.data=I:(I=Mu(t),I!==null&&(T.data=I)))),(I=np?tp(e,t):rp(e,t))&&(c=Zr(c,"onBeforeInput"),0<c.length&&(h=new Wa("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=I))}qu(m,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vt(e,t),s!=null&&r.unshift(Zt(e,s,i)),s=Vt(e,n),s!=null&&r.push(Zt(e,s,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,n,t,r,i){for(var s=n._reactName,o=[];t!==null&&t!==r;){var l=t,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Vt(t,s),u!=null&&o.unshift(Zt(t,u,l))):i||(u=Vt(t,s),u!=null&&o.push(Zt(t,u,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(yp,"")}function jr(e,n,t){if(n=Ka(n),Ka(e)!==n&&t)throw Error(S(425))}function ei(){}var Ds=null,zs=null;function Us(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(kp)}:Fs;function kp(e){setTimeout(function(){throw e})}function rs(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Qt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xt=Math.random().toString(36).slice(2),Ue="__reactFiber$"+xt,er="__reactProps$"+xt,Xe="__reactContainer$"+xt,Hs="__reactEvents$"+xt,Sp="__reactListeners$"+xt,bp="__reactHandles$"+xt;function Rn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ja(e);e!==null;){if(t=e[Ue])return t;e=Ja(e)}return n}e=t,t=e.parentNode}return null}function fr(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function bi(e){return e[er]||null}var Bs=[],Xn=-1;function bn(e){return{current:e}}function D(e){0>Xn||(e.current=Bs[Xn],Bs[Xn]=null,Xn--)}function M(e,n){Xn++,Bs[Xn]=e.current,e.current=n}var kn={},oe=bn(kn),me=bn(!1),On=kn;function ct(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function ni(){D(me),D(oe)}function Za(e,n,t){if(oe.current!==kn)throw Error(S(168));M(oe,n),M(me,t)}function Ku(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,af(e)||"Unknown",i));return B({},t,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,On=oe.current,M(oe,e),M(me,me.current),!0}function el(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ku(e,n,On),r.__reactInternalMemoizedMergedChildContext=e,D(me),D(oe),M(oe,e)):D(me),M(me,t)}var Ve=null,Ei=!1,is=!1;function Xu(e){Ve===null?Ve=[e]:Ve.push(e)}function Ep(e){Ei=!0,Xu(e)}function En(){if(!is&&Ve!==null){is=!0;var e=0,n=O;try{var t=Ve;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,Ei=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Su(jo,En),i}finally{O=n,is=!1}}return null}var Jn=[],Zn=0,ri=null,ii=0,Ee=[],Ne=0,Mn=null,Ye=1,qe="";function In(e,n){Jn[Zn++]=ii,Jn[Zn++]=ri,ri=e,ii=n}function Ju(e,n,t){Ee[Ne++]=Ye,Ee[Ne++]=qe,Ee[Ne++]=Mn,Mn=e;var r=Ye;e=qe;var i=32-Oe(r)-1;r&=~(1<<i),t+=1;var s=32-Oe(n)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ye=1<<32-Oe(n)+i|t<<i|r,qe=s+e}else Ye=1<<s|t<<i|r,qe=e}function Mo(e){e.return!==null&&(In(e,1),Ju(e,1,0))}function Wo(e){for(;e===ri;)ri=Jn[--Zn],Jn[Zn]=null,ii=Jn[--Zn],Jn[Zn]=null;for(;e===Mn;)Mn=Ee[--Ne],Ee[Ne]=null,qe=Ee[--Ne],Ee[Ne]=null,Ye=Ee[--Ne],Ee[Ne]=null}var we=null,xe=null,z=!1,Pe=null;function Zu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function nl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,xe=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:Ye,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,xe=null,!0):!1;default:return!1}}function Gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(z){var n=xe;if(n){var t=n;if(!nl(e,n)){if(Gs(e))throw Error(S(418));n=mn(t.nextSibling);var r=we;n&&nl(e,n)?Zu(r,t):(e.flags=e.flags&-4097|2,z=!1,we=e)}}else{if(Gs(e))throw Error(S(418));e.flags=e.flags&-4097|2,z=!1,we=e}}}function tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Ir(e){if(e!==we)return!1;if(!z)return tl(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Us(e.type,e.memoizedProps)),n&&(n=xe)){if(Gs(e))throw ec(),Error(S(418));for(;n;)Zu(e,n),n=mn(n.nextSibling)}if(tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){xe=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}xe=null}}else xe=we?mn(e.stateNode.nextSibling):null;return!0}function ec(){for(var e=xe;e;)e=mn(e.nextSibling)}function dt(){xe=we=null,z=!1}function Do(e){Pe===null?Pe=[e]:Pe.push(e)}var Np=en.ReactCurrentBatchConfig;function jt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},n._stringRef=s,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Tr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function rl(e){var n=e._init;return n(e._payload)}function nc(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=yn(f,d),f.index=0,f.sibling=null,f}function s(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,v){return d===null||d.tag!==6?(d=ds(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,v){var b=p.type;return b===Vn?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rn&&rl(b)===d.type)?(v=i(d,p.props),v.ref=jt(f,d,p),v.return=f,v):(v=$r(p.type,p.key,p.props,null,f.mode,v),v.ref=jt(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=fs(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,b){return d===null||d.tag!==7?(d=An(p,f.mode,v,b),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ds(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return p=$r(d.type,d.key,d.props,null,f.mode,p),p.ref=jt(f,null,d),p.return=f,p;case $n:return d=fs(d,f.mode,p),d.return=f,d;case rn:var v=d._init;return m(f,v(d._payload),p)}if(Lt(d)||St(d))return d=An(d,f.mode,p,null),d.return=f,d;Tr(f,d)}return null}function g(f,d,p,v){var b=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===b?u(f,d,p,v):null;case $n:return p.key===b?c(f,d,p,v):null;case rn:return b=p._init,g(f,d,b(p._payload),v)}if(Lt(p)||St(p))return b!==null?null:h(f,d,p,v,null);Tr(f,p)}return null}function w(f,d,p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,l(d,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,b);case $n:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,b);case rn:var j=v._init;return w(f,d,p,j(v._payload),b)}if(Lt(v)||St(v))return f=f.get(p)||null,h(d,f,v,b,null);Tr(d,v)}return null}function y(f,d,p,v){for(var b=null,j=null,I=d,T=d=0,U=null;I!==null&&T<p.length;T++){I.index>T?(U=I,I=null):U=I.sibling;var L=g(f,I,p[T],v);if(L===null){I===null&&(I=U);break}e&&I&&L.alternate===null&&n(f,I),d=s(L,d,T),j===null?b=L:j.sibling=L,j=L,I=U}if(T===p.length)return t(f,I),z&&In(f,T),b;if(I===null){for(;T<p.length;T++)I=m(f,p[T],v),I!==null&&(d=s(I,d,T),j===null?b=I:j.sibling=I,j=I);return z&&In(f,T),b}for(I=r(f,I);T<p.length;T++)U=w(I,f,T,p[T],v),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?T:U.key),d=s(U,d,T),j===null?b=U:j.sibling=U,j=U);return e&&I.forEach(function(ve){return n(f,ve)}),z&&In(f,T),b}function x(f,d,p,v){var b=St(p);if(typeof b!="function")throw Error(S(150));if(p=b.call(p),p==null)throw Error(S(151));for(var j=b=null,I=d,T=d=0,U=null,L=p.next();I!==null&&!L.done;T++,L=p.next()){I.index>T?(U=I,I=null):U=I.sibling;var ve=g(f,I,L.value,v);if(ve===null){I===null&&(I=U);break}e&&I&&ve.alternate===null&&n(f,I),d=s(ve,d,T),j===null?b=ve:j.sibling=ve,j=ve,I=U}if(L.done)return t(f,I),z&&In(f,T),b;if(I===null){for(;!L.done;T++,L=p.next())L=m(f,L.value,v),L!==null&&(d=s(L,d,T),j===null?b=L:j.sibling=L,j=L);return z&&In(f,T),b}for(I=r(f,I);!L.done;T++,L=p.next())L=w(I,f,T,L.value,v),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?T:L.key),d=s(L,d,T),j===null?b=L:j.sibling=L,j=L);return e&&I.forEach(function(wt){return n(f,wt)}),z&&In(f,T),b}function E(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var b=p.key,j=d;j!==null;){if(j.key===b){if(b=p.type,b===Vn){if(j.tag===7){t(f,j.sibling),d=i(j,p.props.children),d.return=f,f=d;break e}}else if(j.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rn&&rl(b)===j.type){t(f,j.sibling),d=i(j,p.props),d.ref=jt(f,j,p),d.return=f,f=d;break e}t(f,j);break}else n(f,j);j=j.sibling}p.type===Vn?(d=An(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=$r(p.type,p.key,p.props,null,f.mode,v),v.ref=jt(f,d,p),v.return=f,f=v)}return o(f);case $n:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=fs(p,f.mode,v),d.return=f,f=d}return o(f);case rn:return j=p._init,E(f,d,j(p._payload),v)}if(Lt(p))return y(f,d,p,v);if(St(p))return x(f,d,p,v);Tr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,p),d.return=f,f=d):(t(f,d),d=ds(p,f.mode,v),d.return=f,f=d),o(f)):t(f,d)}return E}var ft=nc(!0),tc=nc(!1),si=bn(null),oi=null,et=null,zo=null;function Uo(){zo=et=oi=null}function Fo(e){var n=si.current;D(si),e._currentValue=n}function Vs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){oi=e,zo=et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(zo!==e)if(e={context:e,memoizedValue:n,next:null},et===null){if(oi===null)throw Error(S(308));et=e,oi.dependencies={lanes:0,firstContext:e}}else et=et.next=e;return n}var Ln=null;function Ho(e){Ln===null?Ln=[e]:Ln.push(e)}function rc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ho(n)):(t.next=i.next,i.next=t),n.interleaved=t,Je(e,r)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Je(e,t)}return i=r.interleaved,i===null?(n.next=n,Ho(r)):(n.next=i.next,i.next=n),r.interleaved=n,Je(e,t)}function zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Io(e,t)}}function il(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ai(e,n,t,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,h=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(g=n,w=t,x.tag){case 1:if(y=x.payload,typeof y=="function"){m=y.call(w,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(w,m,g):y,g==null)break e;m=B({},m,g);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,u=m):h=h.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);Dn|=o,e.lanes=o,e.memoizedState=m}}function sl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var pr={},Be=bn(pr),nr=bn(pr),tr=bn(pr);function _n(e){if(e===pr)throw Error(S(174));return e}function Go(e,n){switch(M(tr,n),M(nr,e),M(Be,pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cs(n,e)}D(Be),M(Be,n)}function pt(){D(Be),D(nr),D(tr)}function sc(e){_n(tr.current);var n=_n(Be.current),t=Cs(n,e.type);n!==t&&(M(nr,e),M(Be,t))}function $o(e){nr.current===e&&(D(Be),D(nr))}var F=bn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ss=[];function Vo(){for(var e=0;e<ss.length;e++)ss[e]._workInProgressVersionPrimary=null;ss.length=0}var Ur=en.ReactCurrentDispatcher,os=en.ReactCurrentBatchConfig,Wn=0,H=null,Q=null,J=null,ui=!1,zt=!1,rr=0,Cp=0;function re(){throw Error(S(321))}function Yo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function qo(e,n,t,r,i,s){if(Wn=s,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?Rp:Lp,e=t(r,i),zt){s=0;do{if(zt=!1,rr=0,25<=s)throw Error(S(301));s+=1,J=Q=null,n.updateQueue=null,Ur.current=_p,e=t(r,i)}while(zt)}if(Ur.current=ci,n=Q!==null&&Q.next!==null,Wn=0,J=Q=H=null,ui=!1,n)throw Error(S(300));return e}function Qo(){var e=rr!==0;return rr=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Te(){if(Q===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=J===null?H.memoizedState:J.next;if(n!==null)J=n,Q=e;else{if(e===null)throw Error(S(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function ir(e,n){return typeof n=="function"?n(e):n}function as(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=Q,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((Wn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,H.lanes|=h,Dn|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,We(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Dn|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ls(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);We(s,n.memoizedState)||(pe=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function oc(){}function ac(e,n){var t=H,r=Te(),i=n(),s=!We(r.memoizedState,i);if(s&&(r.memoizedState=i,pe=!0),r=r.queue,Ko(cc.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,sr(9,uc.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(S(349));Wn&30||lc(t,n,i)}return i}function lc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function uc(e,n,t,r){n.value=t,n.getSnapshot=r,dc(n)&&fc(e)}function cc(e,n,t){return t(function(){dc(n)&&fc(e)})}function dc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function fc(e){var n=Je(e,1);n!==null&&Me(n,e,1,-1)}function ol(e){var n=ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Tp.bind(null,H,e),[n.memoizedState,e]}function sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function pc(){return Te().memoizedState}function Fr(e,n,t,r){var i=ze();H.flags|=e,i.memoizedState=sr(1|n,t,void 0,r===void 0?null:r)}function Ni(e,n,t,r){var i=Te();r=r===void 0?null:r;var s=void 0;if(Q!==null){var o=Q.memoizedState;if(s=o.destroy,r!==null&&Yo(r,o.deps)){i.memoizedState=sr(n,t,s,r);return}}H.flags|=e,i.memoizedState=sr(1|n,t,s,r)}function al(e,n){return Fr(8390656,8,e,n)}function Ko(e,n){return Ni(2048,8,e,n)}function mc(e,n){return Ni(4,2,e,n)}function hc(e,n){return Ni(4,4,e,n)}function gc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vc(e,n,t){return t=t!=null?t.concat([e]):null,Ni(4,4,gc.bind(null,n,e),t)}function Xo(){}function yc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function wc(e,n,t){return Wn&21?(We(t,n)||(t=Nu(),H.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function jp(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=os.transition;os.transition={};try{e(!1),n()}finally{O=t,os.transition=r}}function kc(){return Te().memoizedState}function Ip(e,n,t){var r=vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))bc(n,t);else if(t=rc(e,n,t,r),t!==null){var i=ue();Me(t,e,r,i),Ec(t,n,r)}}function Tp(e,n,t){var r=vn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))bc(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var o=n.lastRenderedState,l=s(o,t);if(i.hasEagerState=!0,i.eagerState=l,We(l,o)){var u=n.interleaved;u===null?(i.next=i,Ho(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=rc(e,n,i,r),t!==null&&(i=ue(),Me(t,e,r,i),Ec(t,n,r))}}function Sc(e){var n=e.alternate;return e===H||n!==null&&n===H}function bc(e,n){zt=ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ec(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Io(e,t)}}var ci={readContext:Ie,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Rp={readContext:Ie,useCallback:function(e,n){return ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:al,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4194308,4,gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fr(4,2,e,n)},useMemo:function(e,n){var t=ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ip.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=ze();return e={current:e},n.memoizedState=e},useState:ol,useDebugValue:Xo,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=ol(!1),n=e[0];return e=jp.bind(null,e[1]),ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=ze();if(z){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),Z===null)throw Error(S(349));Wn&30||lc(r,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,al(cc.bind(null,r,s,e),[e]),r.flags|=2048,sr(9,uc.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=ze(),n=Z.identifierPrefix;if(z){var t=qe,r=Ye;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Cp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lp={readContext:Ie,useCallback:yc,useContext:Ie,useEffect:Ko,useImperativeHandle:vc,useInsertionEffect:mc,useLayoutEffect:hc,useMemo:xc,useReducer:as,useRef:pc,useState:function(){return as(ir)},useDebugValue:Xo,useDeferredValue:function(e){var n=Te();return wc(n,Q.memoizedState,e)},useTransition:function(){var e=as(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1},_p={readContext:Ie,useCallback:yc,useContext:Ie,useEffect:Ko,useImperativeHandle:vc,useInsertionEffect:mc,useLayoutEffect:hc,useMemo:xc,useReducer:ls,useRef:pc,useState:function(){return ls(ir)},useDebugValue:Xo,useDeferredValue:function(e){var n=Te();return Q===null?n.memoizedState=e:wc(n,Q.memoizedState,e)},useTransition:function(){var e=ls(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ys(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ci={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),i=vn(e),s=Qe(r,i);s.payload=n,t!=null&&(s.callback=t),n=hn(e,s,i),n!==null&&(Me(n,e,i,r),zr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),i=vn(e),s=Qe(r,i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=hn(e,s,i),n!==null&&(Me(n,e,i,r),zr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=vn(e),i=Qe(t,r);i.tag=2,n!=null&&(i.callback=n),n=hn(e,i,r),n!==null&&(Me(n,e,r,t),zr(n,e,r))}};function ll(e,n,t,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(i,s):!0}function Nc(e,n,t){var r=!1,i=kn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ie(s):(i=he(n)?On:oe.current,r=n.contextTypes,s=(r=r!=null)?ct(e,i):kn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function ul(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ci.enqueueReplaceState(n,n.state,null)}function qs(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Bo(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=Ie(s):(s=he(n)?On:oe.current,i.context=ct(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ys(e,n,s,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ci.enqueueReplaceState(i,i.state,null),ai(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mt(e,n){try{var t="",r=n;do t+=of(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function us(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Qs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Pp=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fi||(fi=!0,so=r),Qs(e,n)},t}function jc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Qs(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Qs(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function cl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Pp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Yp.bind(null,e,n,t),n.then(e,e))}function dl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function fl(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var Ap=en.ReactCurrentOwner,pe=!1;function le(e,n,t,r){n.child=e===null?tc(n,null,t,r):ft(n,e.child,t,r)}function pl(e,n,t,r,i){t=t.render;var s=n.ref;return at(n,i),r=qo(e,n,t,r,s,i),t=Qo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(z&&t&&Mo(n),n.flags|=1,le(e,n,r,i),n.child)}function ml(e,n,t,r,i){if(e===null){var s=t.type;return typeof s=="function"&&!sa(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Ic(e,n,s,r,i)):(e=$r(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(o,r)&&e.ref===n.ref)return Ze(e,n,i)}return n.flags|=1,e=yn(s,r),e.ref=n.ref,e.return=n,n.child=e}function Ic(e,n,t,r,i){if(e!==null){var s=e.memoizedProps;if(Xt(s,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,i)}return Ks(e,n,t,r,i)}function Tc(e,n,t){var r=n.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(tt,ye),ye|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(tt,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,M(tt,ye),ye|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,M(tt,ye),ye|=r;return le(e,n,i,t),n.child}function Rc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ks(e,n,t,r,i){var s=he(t)?On:oe.current;return s=ct(n,s),at(n,i),t=qo(e,n,t,r,s,i),r=Qo(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(z&&r&&Mo(n),n.flags|=1,le(e,n,t,i),n.child)}function hl(e,n,t,r,i){if(he(t)){var s=!0;ti(n)}else s=!1;if(at(n,i),n.stateNode===null)Hr(e,n),Nc(n,t,r),qs(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=he(t)?On:oe.current,c=ct(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ul(n,o,r,c),sn=!1;var g=n.memoizedState;o.state=g,ai(n,r,o,i),u=n.memoizedState,l!==r||g!==u||me.current||sn?(typeof h=="function"&&(Ys(n,t,h,r),u=n.memoizedState),(l=sn||ll(n,t,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ic(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Le(n.type,l),o.props=c,m=n.pendingProps,g=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ie(u):(u=he(t)?On:oe.current,u=ct(n,u));var w=t.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&ul(n,o,r,u),sn=!1,g=n.memoizedState,o.state=g,ai(n,r,o,i);var y=n.memoizedState;l!==m||g!==y||me.current||sn?(typeof w=="function"&&(Ys(n,t,w,r),y=n.memoizedState),(c=sn||ll(n,t,c,r,g,y,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Xs(e,n,t,r,s,i)}function Xs(e,n,t,r,i,s){Rc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&el(n,t,!1),Ze(e,n,s);r=n.stateNode,Ap.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ft(n,e.child,null,s),n.child=ft(n,null,l,s)):le(e,n,l,s),n.memoizedState=r.state,i&&el(n,t,!0),n.child}function Lc(e){var n=e.stateNode;n.pendingContext?Za(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Za(e,n.context,!1),Go(e,n.containerInfo)}function gl(e,n,t,r,i){return dt(),Do(i),n.flags|=256,le(e,n,t,r),n.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,n,t){var r=n.pendingProps,i=F.current,s=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(F,i&1),e===null)return $s(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,s?(r=n.mode,s=n.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ti(o,r,0,null),e=An(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Zs(t),n.memoizedState=Js,e):Jo(n,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Op(e,n,o,r,l,i,t);if(s){s=r.fallback,o=n.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=yn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yn(l,s):(s=An(s,o,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,o=e.child.memoizedState,o=o===null?Zs(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~t,n.memoizedState=Js,r}return s=e.child,e=s.sibling,r=yn(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Jo(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Rr(e,n,t,r){return r!==null&&Do(r),ft(n,e.child,null,t),e=Jo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Op(e,n,t,r,i,s,o){if(t)return n.flags&256?(n.flags&=-257,r=us(Error(S(422))),Rr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,i=n.mode,r=Ti({mode:"visible",children:r.children},i,0,null),s=An(s,i,o,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&ft(n,e.child,null,o),n.child.memoizedState=Zs(o),n.memoizedState=Js,s);if(!(n.mode&1))return Rr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=us(s,r,void 0),Rr(e,n,o,r)}if(l=(o&e.childLanes)!==0,pe||l){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Je(e,i),Me(r,e,i,-1))}return ia(),r=us(Error(S(421))),Rr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=qp.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,xe=mn(i.nextSibling),we=n,z=!0,Pe=null,e!==null&&(Ee[Ne++]=Ye,Ee[Ne++]=qe,Ee[Ne++]=Mn,Ye=e.id,qe=e.overflow,Mn=n),n=Jo(n,r.children),n.flags|=4096,n)}function vl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vs(e.return,n,t)}function cs(e,n,t,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function Pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,s=r.tail;if(le(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vl(e,t,n);else if(e.tag===19)vl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(F,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),cs(n,!1,i,t,s);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}cs(n,!0,t,null,s);break;case"together":cs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=yn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=yn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Mp(e,n,t){switch(n.tag){case 3:Lc(n),dt();break;case 5:sc(n);break;case 1:he(n.type)&&ti(n);break;case 4:Go(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;M(si,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?_c(e,n,t):(M(F,F.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);M(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Tc(e,n,t)}return Ze(e,n,t)}var Ac,eo,Oc,Mc;Ac=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};eo=function(){};Oc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,_n(Be.current);var s=null;switch(t){case"input":i=Ss(e,i),r=Ss(e,r),s=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":i=Ns(e,i),r=Ns(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}js(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gt.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(n.updateQueue=c)&&(n.flags|=4)}};Mc=function(e,n,t,r){t!==r&&(n.flags|=4)};function It(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Wp(e,n,t){var r=n.pendingProps;switch(Wo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&ni(),ie(n),null;case 3:return r=n.stateNode,pt(),D(me),D(oe),Vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Pe!==null&&(lo(Pe),Pe=null))),eo(e,n),ie(n),null;case 5:$o(n);var i=_n(tr.current);if(t=n.type,e!==null&&n.stateNode!=null)Oc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=_n(Be.current),Ir(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Ue]=n,r[er]=s,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Pt.length;i++)W(Pt[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ca(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Ia(r,s),W("invalid",r)}js(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),i=["children",""+l]):Gt.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&W("scroll",r)}switch(t){case"input":xr(r),ja(r,s,!0);break;case"textarea":xr(r),Ta(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ei)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ue]=n,e[er]=r,Ac(e,n,!1,!1),n.stateNode=e;e:{switch(o=Is(t,r),t){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pt.length;i++)W(Pt[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Ca(e,r),i=Ss(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ia(e,r),i=Ns(e,r),W("invalid",e);break;default:i=r}js(t,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pu(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&du(e,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$t(e,u):typeof u=="number"&&$t(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gt.hasOwnProperty(s)?u!=null&&s==="onScroll"&&W("scroll",e):u!=null&&So(e,s,u,o))}switch(t){case"input":xr(e),ja(e,r,!1);break;case"textarea":xr(e),Ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?rt(e,!!r.multiple,s,!1):r.defaultValue!=null&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Mc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=_n(tr.current),_n(Be.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(s=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:jr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return ie(n),null;case 13:if(D(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&xe!==null&&n.mode&1&&!(n.flags&128))ec(),dt(),n.flags|=98560,s=!1;else if(s=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ue]=n}else dt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),s=!1}else Pe!==null&&(lo(Pe),Pe=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?K===0&&(K=3):ia())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return pt(),eo(e,n),e===null&&Jt(n.stateNode.containerInfo),ie(n),null;case 10:return Fo(n.type._context),ie(n),null;case 17:return he(n.type)&&ni(),ie(n),null;case 19:if(D(F),s=n.memoizedState,s===null)return ie(n),null;if(r=(n.flags&128)!==0,o=s.rendering,o===null)if(r)It(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=li(e),o!==null){for(n.flags|=128,It(s,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(F,F.current&1|2),n.child}e=e.sibling}s.tail!==null&&Y()>ht&&(n.flags|=128,r=!0,It(s,!1),n.lanes=4194304)}else{if(!r)if(e=li(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),It(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!z)return ie(n),null}else 2*Y()-s.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,It(s,!1),n.lanes=4194304);s.isBackwards?(o.sibling=n.child,n.child=o):(t=s.last,t!==null?t.sibling=o:n.child=o,s.last=o)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Y(),n.sibling=null,t=F.current,M(F,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return ra(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function Dp(e,n){switch(Wo(n),n.tag){case 1:return he(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pt(),D(me),D(oe),Vo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if(D(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));dt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(F),null;case 4:return pt(),null;case 10:return Fo(n.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Lr=!1,se=!1,zp=typeof WeakSet=="function"?WeakSet:Set,N=null;function nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function no(e,n,t){try{t()}catch(r){G(e,n,r)}}var yl=!1;function Up(e,n){if(Ds=Xr,e=Fu(),Oo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,l=-1,u=-1,c=0,h=0,m=e,g=null;n:for(;;){for(var w;m!==t||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break n;if(g===t&&++c===i&&(l=o),g===s&&++h===r&&(u=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(zs={focusedElem:e,selectionRange:t},Xr=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,E=y.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),E);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=yl,yl=!1,y}function Ut(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&no(n,t,s)}i=i.next}while(i!==r)}}function ji(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function to(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wc(e){var n=e.alternate;n!==null&&(e.alternate=null,Wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[er],delete n[Hs],delete n[Sp],delete n[bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function xl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(ro(e,n,t),e=e.sibling;e!==null;)ro(e,n,t),e=e.sibling}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}var ee=null,_e=!1;function tn(e,n,t){for(t=t.child;t!==null;)zc(e,n,t),t=t.sibling}function zc(e,n,t){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(xi,t)}catch{}switch(t.tag){case 5:se||nt(t,n);case 6:var r=ee,i=_e;ee=null,tn(e,n,t),ee=r,_e=i,ee!==null&&(_e?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(_e?(e=ee,t=t.stateNode,e.nodeType===8?rs(e.parentNode,t):e.nodeType===1&&rs(e,t),Qt(e)):rs(ee,t.stateNode));break;case 4:r=ee,i=_e,ee=t.stateNode.containerInfo,_e=!0,tn(e,n,t),ee=r,_e=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&no(t,n,o),i=i.next}while(i!==r)}tn(e,n,t);break;case 1:if(!se&&(nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){G(t,n,l)}tn(e,n,t);break;case 21:tn(e,n,t);break;case 22:t.mode&1?(se=(r=se)||t.memoizedState!==null,tn(e,n,t),se=r):tn(e,n,t);break;default:tn(e,n,t)}}function wl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zp),n.forEach(function(r){var i=Qp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ee=l.stateNode,_e=!1;break e;case 3:ee=l.stateNode.containerInfo,_e=!0;break e;case 4:ee=l.stateNode.containerInfo,_e=!0;break e}l=l.return}if(ee===null)throw Error(S(160));zc(s,o,i),ee=null,_e=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uc(n,e),n=n.sibling}function Uc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),De(e),r&4){try{Ut(3,e,e.return),ji(3,e)}catch(x){G(e,e.return,x)}try{Ut(5,e,e.return)}catch(x){G(e,e.return,x)}}break;case 1:Re(n,e),De(e),r&512&&t!==null&&nt(t,t.return);break;case 5:if(Re(n,e),De(e),r&512&&t!==null&&nt(t,t.return),e.flags&32){var i=e.stateNode;try{$t(i,"")}catch(x){G(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=t!==null?t.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lu(i,s),Is(l,o);var c=Is(l,s);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?pu(i,m):h==="dangerouslySetInnerHTML"?du(i,m):h==="children"?$t(i,m):So(i,h,m,c)}switch(l){case"input":bs(i,s);break;case"textarea":uu(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?rt(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?rt(i,!!s.multiple,s.defaultValue,!0):rt(i,!!s.multiple,s.multiple?[]:"",!1))}i[er]=s}catch(x){G(e,e.return,x)}}break;case 6:if(Re(n,e),De(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){G(e,e.return,x)}}break;case 3:if(Re(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(x){G(e,e.return,x)}break;case 4:Re(n,e),De(e);break;case 13:Re(n,e),De(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(na=Y())),r&4&&wl(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(se=(c=se)||h,Re(n,e),se=c):Re(n,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ut(4,g,g.return);break;case 1:nt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(x){G(r,t,x)}}break;case 5:nt(g,g.return);break;case 22:if(g.memoizedState!==null){Sl(m);continue}}w!==null?(w.return=g,N=w):Sl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fu("display",o))}catch(x){G(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){G(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(n,e),De(e),r&4&&wl(e);break;case 21:break;default:Re(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($t(i,""),r.flags&=-33);var s=xl(e);io(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xl(e);ro(e,l,o);break;default:throw Error(S(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fp(e,n,t){N=e,Fc(e)}function Fc(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lr;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||se;l=Lr;var c=se;if(Lr=o,(se=u)&&!c)for(N=i;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?bl(i):u!==null?(u.return=o,N=u):bl(i);for(;s!==null;)N=s,Fc(s),s=s.sibling;N=i,Lr=l,se=c}kl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):kl(e)}}function kl(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||ji(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!se)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&sl(n,s,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}sl(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Qt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}se||n.flags&512&&to(n)}catch(g){G(n,n.return,g)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Sl(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function bl(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ji(4,n)}catch(u){G(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){G(n,i,u)}}var s=n.return;try{to(n)}catch(u){G(n,s,u)}break;case 5:var o=n.return;try{to(n)}catch(u){G(n,o,u)}}}catch(u){G(n,n.return,u)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var Hp=Math.ceil,di=en.ReactCurrentDispatcher,Zo=en.ReactCurrentOwner,je=en.ReactCurrentBatchConfig,A=0,Z=null,q=null,ne=0,ye=0,tt=bn(0),K=0,or=null,Dn=0,Ii=0,ea=0,Ft=null,fe=null,na=0,ht=1/0,$e=null,fi=!1,so=null,gn=null,_r=!1,un=null,pi=0,Ht=0,oo=null,Br=-1,Gr=0;function ue(){return A&6?Y():Br!==-1?Br:Br=Y()}function vn(e){return e.mode&1?A&2&&ne!==0?ne&-ne:Np.transition!==null?(Gr===0&&(Gr=Nu()),Gr):(e=O,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function Me(e,n,t,r){if(50<Ht)throw Ht=0,oo=null,Error(S(185));cr(e,t,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(Ii|=t),K===4&&an(e,ne)),ge(e,r),t===1&&A===0&&!(n.mode&1)&&(ht=Y()+500,Ei&&En()))}function ge(e,n){var t=e.callbackNode;Nf(e,n);var r=Kr(e,e===Z?ne:0);if(r===0)t!==null&&_a(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&_a(t),n===1)e.tag===0?Ep(El.bind(null,e)):Xu(El.bind(null,e)),wp(function(){!(A&6)&&En()}),t=null;else{switch(Cu(r)){case 1:t=jo;break;case 4:t=bu;break;case 16:t=Qr;break;case 536870912:t=Eu;break;default:t=Qr}t=Qc(t,Hc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hc(e,n){if(Br=-1,Gr=0,A&6)throw Error(S(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var r=Kr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=mi(e,r);else{n=r;var i=A;A|=2;var s=Gc();(Z!==e||ne!==n)&&($e=null,ht=Y()+500,Pn(e,n));do try{$p();break}catch(l){Bc(e,l)}while(!0);Uo(),di.current=s,A=i,q!==null?n=0:(Z=null,ne=0,n=K)}if(n!==0){if(n===2&&(i=Ps(e),i!==0&&(r=i,n=ao(e,i))),n===1)throw t=or,Pn(e,0),an(e,r),ge(e,Y()),t;if(n===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bp(i)&&(n=mi(e,r),n===2&&(s=Ps(e),s!==0&&(r=s,n=ao(e,s))),n===1))throw t=or,Pn(e,0),an(e,r),ge(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Tn(e,fe,$e);break;case 3:if(an(e,r),(r&130023424)===r&&(n=na+500-Y(),10<n)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fs(Tn.bind(null,e,fe,$e),n);break}Tn(e,fe,$e);break;case 4:if(an(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Oe(r);s=1<<o,o=n[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Fs(Tn.bind(null,e,fe,$e),r);break}Tn(e,fe,$e);break;case 5:Tn(e,fe,$e);break;default:throw Error(S(329))}}}return ge(e,Y()),e.callbackNode===t?Hc.bind(null,e):null}function ao(e,n){var t=Ft;return e.current.memoizedState.isDehydrated&&(Pn(e,n).flags|=256),e=mi(e,n),e!==2&&(n=fe,fe=t,n!==null&&lo(n)),e}function lo(e){fe===null?fe=e:fe.push.apply(fe,e)}function Bp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!We(s(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function an(e,n){for(n&=~ea,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function El(e){if(A&6)throw Error(S(327));lt();var n=Kr(e,0);if(!(n&1))return ge(e,Y()),null;var t=mi(e,n);if(e.tag!==0&&t===2){var r=Ps(e);r!==0&&(n=r,t=ao(e,r))}if(t===1)throw t=or,Pn(e,0),an(e,n),ge(e,Y()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tn(e,fe,$e),ge(e,Y()),null}function ta(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(ht=Y()+500,Ei&&En())}}function zn(e){un!==null&&un.tag===0&&!(A&6)&&lt();var n=A;A|=1;var t=je.transition,r=O;try{if(je.transition=null,O=1,e)return e()}finally{O=r,je.transition=t,A=n,!(A&6)&&En()}}function ra(){ye=tt.current,D(tt)}function Pn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,xp(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(Wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:pt(),D(me),D(oe),Vo();break;case 5:$o(r);break;case 4:pt();break;case 13:D(F);break;case 19:D(F);break;case 10:Fo(r.type._context);break;case 22:case 23:ra()}t=t.return}if(Z=e,q=e=yn(e.current,null),ne=ye=n,K=0,or=null,ea=Ii=Dn=0,fe=Ft=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Ln=null}return e}function Bc(e,n){do{var t=q;try{if(Uo(),Ur.current=ci,ui){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(Wn=0,J=Q=H=null,zt=!1,rr=0,Zo.current=null,t===null||t.return===null){K=1,or=n,q=null;break}e:{var s=e,o=t.return,l=t,u=n;if(n=ne,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=dl(o);if(w!==null){w.flags&=-257,fl(w,o,l,s,n),w.mode&1&&cl(s,c,n),n=w,u=c;var y=n.updateQueue;if(y===null){var x=new Set;x.add(u),n.updateQueue=x}else y.add(u);break e}else{if(!(n&1)){cl(s,c,n),ia();break e}u=Error(S(426))}}else if(z&&l.mode&1){var E=dl(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fl(E,o,l,s,n),Do(mt(u,l));break e}}s=u=mt(u,l),K!==4&&(K=2),Ft===null?Ft=[s]:Ft.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var f=Cc(s,u,n);il(s,f);break e;case 1:l=u;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gn===null||!gn.has(p)))){s.flags|=65536,n&=-n,s.lanes|=n;var v=jc(s,l,n);il(s,v);break e}}s=s.return}while(s!==null)}Vc(t)}catch(b){n=b,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Gc(){var e=di.current;return di.current=ci,e===null?ci:e}function ia(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Dn&268435455)&&!(Ii&268435455)||an(Z,ne)}function mi(e,n){var t=A;A|=2;var r=Gc();(Z!==e||ne!==n)&&($e=null,Pn(e,n));do try{Gp();break}catch(i){Bc(e,i)}while(!0);if(Uo(),A=t,di.current=r,q!==null)throw Error(S(261));return Z=null,ne=0,K}function Gp(){for(;q!==null;)$c(q)}function $p(){for(;q!==null&&!gf();)$c(q)}function $c(e){var n=qc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Vc(e):q=n,Zo.current=null}function Vc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Dp(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,q=null;return}}else if(t=Wp(t,n,ye),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);K===0&&(K=5)}function Tn(e,n,t){var r=O,i=je.transition;try{je.transition=null,O=1,Vp(e,n,t,r)}finally{je.transition=i,O=r}return null}function Vp(e,n,t,r){do lt();while(un!==null);if(A&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Cf(e,s),e===Z&&(q=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Qc(Qr,function(){return lt(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=je.transition,je.transition=null;var o=O;O=1;var l=A;A|=4,Zo.current=null,Up(e,t),Uc(t,e),fp(zs),Xr=!!Ds,zs=Ds=null,e.current=t,Fp(t),vf(),A=l,O=o,je.transition=s}else e.current=t;if(_r&&(_r=!1,un=e,pi=i),s=e.pendingLanes,s===0&&(gn=null),wf(t.stateNode),ge(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(fi)throw fi=!1,e=so,so=null,e;return pi&1&&e.tag!==0&&lt(),s=e.pendingLanes,s&1?e===oo?Ht++:(Ht=0,oo=e):Ht=0,En(),null}function lt(){if(un!==null){var e=Cu(pi),n=je.transition,t=O;try{if(je.transition=null,O=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,pi=0,A&6)throw Error(S(331));var i=A;for(A|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Ut(8,h,s)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,w=h.return;if(Wc(h),h===c){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ut(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,N=f;break e}N=s.return}}var d=e.current;for(N=d;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=d;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ji(9,l)}}catch(b){G(l,l.return,b)}if(l===o){N=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,N=v;break e}N=l.return}}if(A=i,En(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{O=t,je.transition=n}}return!1}function Nl(e,n,t){n=mt(t,n),n=Cc(e,n,1),e=hn(e,n,1),n=ue(),e!==null&&(cr(e,1,n),ge(e,n))}function G(e,n,t){if(e.tag===3)Nl(e,e,t);else for(;n!==null;){if(n.tag===3){Nl(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=mt(t,e),e=jc(n,e,1),n=hn(n,e,1),e=ue(),n!==null&&(cr(n,1,e),ge(n,e));break}}n=n.return}}function Yp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(K===4||K===3&&(ne&130023424)===ne&&500>Y()-na?Pn(e,0):ea|=t),ge(e,n)}function Yc(e,n){n===0&&(e.mode&1?(n=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):n=1);var t=ue();e=Je(e,n),e!==null&&(cr(e,n,t),ge(e,t))}function qp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yc(e,t)}function Qp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Yc(e,t)}var qc;qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Mp(e,n,t);pe=!!(e.flags&131072)}else pe=!1,z&&n.flags&1048576&&Ju(n,ii,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hr(e,n),e=n.pendingProps;var i=ct(n,oe.current);at(n,t),i=qo(null,n,r,e,i,t);var s=Qo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(s=!0,ti(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bo(n),i.updater=Ci,n.stateNode=i,i._reactInternals=n,qs(n,r,e,t),n=Xs(null,n,r,!0,s,t)):(n.tag=0,z&&s&&Mo(n),le(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Xp(r),e=Le(r,e),i){case 0:n=Ks(null,n,r,e,t);break e;case 1:n=hl(null,n,r,e,t);break e;case 11:n=pl(null,n,r,e,t);break e;case 14:n=ml(null,n,r,Le(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Ks(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),hl(e,n,r,i,t);case 3:e:{if(Lc(n),e===null)throw Error(S(387));r=n.pendingProps,s=n.memoizedState,i=s.element,ic(e,n),ai(n,r,null,t);var o=n.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=mt(Error(S(423)),n),n=gl(e,n,r,t,i);break e}else if(r!==i){i=mt(Error(S(424)),n),n=gl(e,n,r,t,i);break e}else for(xe=mn(n.stateNode.containerInfo.firstChild),we=n,z=!0,Pe=null,t=tc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(dt(),r===i){n=Ze(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return sc(n),e===null&&$s(n),r=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Us(r,i)?o=null:s!==null&&Us(r,s)&&(n.flags|=32),Rc(e,n),le(e,n,o,t),n.child;case 6:return e===null&&$s(n),null;case 13:return _c(e,n,t);case 4:return Go(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ft(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),pl(e,n,r,i,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,s=n.memoizedProps,o=i.value,M(si,r._currentValue),r._currentValue=o,s!==null)if(We(s.value,o)){if(s.children===i.children&&!me.current){n=Ze(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qe(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Vs(s.return,t,n),l.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===n.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Vs(o,t,n),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}le(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Ie(i),r=r(i),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),ml(e,n,r,i,t);case 15:return Ic(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Hr(e,n),n.tag=1,he(r)?(e=!0,ti(n)):e=!1,at(n,t),Nc(n,r,i),qs(n,r,i,t),Xs(null,n,r,!0,e,t);case 19:return Pc(e,n,t);case 22:return Tc(e,n,t)}throw Error(S(156,n.tag))};function Qc(e,n){return Su(e,n)}function Kp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new Kp(e,n,t,r)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xp(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eo)return 11;if(e===No)return 14}return 2}function yn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,i,s){var o=2;if(r=e,typeof e=="function")sa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vn:return An(t.children,i,s,n);case bo:o=8,i|=8;break;case ys:return e=Ce(12,t,n,i|2),e.elementType=ys,e.lanes=s,e;case xs:return e=Ce(13,t,n,i),e.elementType=xs,e.lanes=s,e;case ws:return e=Ce(19,t,n,i),e.elementType=ws,e.lanes=s,e;case su:return Ti(t,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:o=10;break e;case iu:o=9;break e;case Eo:o=11;break e;case No:o=14;break e;case rn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ce(o,t,n,i),n.elementType=e,n.type=r,n.lanes=s,n}function An(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=su,e.lanes=t,e.stateNode={isHidden:!1},e}function ds(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function fs(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Jp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oa(e,n,t,r,i,s,o,l,u){return e=new Jp(e,n,t,l,u),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ce(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(s),e}function Zp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Kc(e){if(!e)return kn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return Ku(e,t,n)}return n}function Xc(e,n,t,r,i,s,o,l,u){return e=oa(t,r,!0,e,i,s,o,l,u),e.context=Kc(null),t=e.current,r=ue(),i=vn(t),s=Qe(r,i),s.callback=n??null,hn(t,s,i),e.current.lanes=i,cr(e,i,r),ge(e,r),e}function Ri(e,n,t,r){var i=n.current,s=ue(),o=vn(i);return t=Kc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(s,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(i,n,o),e!==null&&(Me(e,i,o,s),zr(e,i,o)),o}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function aa(e,n){Cl(e,n),(e=e.alternate)&&Cl(e,n)}function em(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}Li.prototype.render=la.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ri(e,n,null,null)};Li.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){Ri(null,e,null,null)}),n[Xe]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&Lu(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jl(){}function nm(e,n,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hi(o);s.call(c)}}var o=Xc(n,r,e,0,null,!1,!1,"",jl);return e._reactRootContainer=o,e[Xe]=o.current,Jt(e.nodeType===8?e.parentNode:e),zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=hi(u);l.call(c)}}var u=oa(e,0,!1,null,null,!1,!1,"",jl);return e._reactRootContainer=u,e[Xe]=u.current,Jt(e.nodeType===8?e.parentNode:e),zn(function(){Ri(n,u,t,r)}),u}function Pi(e,n,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hi(o);l.call(u)}}Ri(n,o,e,i)}else o=nm(t,n,e,i,r);return hi(o)}ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_t(n.pendingLanes);t!==0&&(Io(n,t|1),ge(n,Y()),!(A&6)&&(ht=Y()+500,En()))}break;case 13:zn(function(){var r=Je(e,1);if(r!==null){var i=ue();Me(r,e,1,i)}}),aa(e,1)}};To=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=ue();Me(n,e,134217728,t)}aa(e,134217728)}};Iu=function(e){if(e.tag===13){var n=vn(e),t=Je(e,n);if(t!==null){var r=ue();Me(t,e,n,r)}aa(e,n)}};Tu=function(){return O};Ru=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Rs=function(e,n,t){switch(n){case"input":if(bs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=bi(r);if(!i)throw Error(S(90));au(r),bs(r,i)}}}break;case"textarea":uu(e,t);break;case"select":n=t.value,n!=null&&rt(e,!!t.multiple,n,!1)}};gu=ta;vu=zn;var tm={usingClientEntryPoint:!1,Events:[fr,Kn,bi,mu,hu,ta]},Tt={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rm={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{xi=Pr.inject(rm),He=Pr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(n))throw Error(S(200));return Zp(e,n,null,t)};Se.createRoot=function(e,n){if(!ua(e))throw Error(S(299));var t=!1,r="",i=Jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=oa(e,1,!1,null,null,t,!1,r,i),e[Xe]=n.current,Jt(e.nodeType===8?e.parentNode:e),new la(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=wu(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return zn(e)};Se.hydrate=function(e,n,t){if(!_i(n))throw Error(S(200));return Pi(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!ua(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=Jc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Xc(n,null,e,1,t??null,i,!1,s,o),e[Xe]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Li(n)};Se.render=function(e,n,t){if(!_i(n))throw Error(S(200));return Pi(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!_i(e))throw Error(S(40));return e._reactRootContainer?(zn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Se.unstable_batchedUpdates=ta;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!_i(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Pi(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc)}catch(e){console.error(e)}}Zc(),Zl.exports=Se;var im=Zl.exports,Il=im;gs.createRoot=Il.createRoot,gs.hydrateRoot=Il.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ar.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const Tl="popstate";function sm(e){e===void 0&&(e={});function n(i,s){let{pathname:o="/",search:l="",hash:u=""}=Hn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),uo("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:gi(s))}function r(i,s){Ai(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return am(n,t,r,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ai(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function om(){return Math.random().toString(36).substr(2,8)}function Rl(e,n){return{usr:e.state,key:e.key,idx:n}}function uo(e,n,t,r){return t===void 0&&(t=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Hn(n):n,{state:t,key:n&&n.key||r||om()})}function gi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Hn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function am(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=cn.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ar({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=cn.Pop;let E=h(),f=E==null?null:E-c;c=E,u&&u({action:l,location:x.location,delta:f})}function g(E,f){l=cn.Push;let d=uo(x.location,E,f);t&&t(d,E),c=h()+1;let p=Rl(d,c),v=x.createHref(d);try{o.pushState(p,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(v)}s&&u&&u({action:l,location:x.location,delta:1})}function w(E,f){l=cn.Replace;let d=uo(x.location,E,f);t&&t(d,E),c=h();let p=Rl(d,c),v=x.createHref(d);o.replaceState(p,"",v),s&&u&&u({action:l,location:x.location,delta:0})}function y(E){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:gi(E);return d=d.replace(/ $/,"%20"),$(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let x={get action(){return l},get location(){return e(i,o)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Tl,m),u=E,()=>{i.removeEventListener(Tl,m),u=null}},createHref(E){return n(i,E)},createURL:y,encodeLocation(E){let f=y(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(E){return o.go(E)}};return x}var Ll;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ll||(Ll={}));function lm(e,n,t){return t===void 0&&(t="/"),um(e,n,t)}function um(e,n,t,r){let i=typeof n=="string"?Hn(n):n,s=gt(i.pathname||"/",t);if(s==null)return null;let o=ed(e);cm(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=km(s);l=xm(o[u],c)}return l}function ed(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xn([r,u.relativePath]),h=t.concat(u);s.children&&s.children.length>0&&($(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ed(s.children,n,h,c)),!(s.path==null&&!s.index)&&n.push({path:c,score:vm(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of nd(s.path))i(s,o,u)}),n}function nd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nd(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function cm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:ym(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const dm=/^:[\w-]+$/,fm=3,pm=2,mm=1,hm=10,gm=-2,_l=e=>e==="*";function vm(e,n){let t=e.split("/"),r=t.length;return t.some(_l)&&(r+=gm),n&&(r+=pm),t.filter(i=>!_l(i)).reduce((i,s)=>i+(dm.test(s)?fm:s===""?mm:hm),r)}function ym(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function xm(e,n,t){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?n:n.slice(s.length)||"/",m=co({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:xn([s,m.pathname]),pathnameBase:Cm(xn([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=xn([s,m.pathnameBase]))}return o}function co(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=wm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let x=l[m]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[m];return w&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function wm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ai(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function km(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ai(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bm=e=>Sm.test(e);function Em(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Hn(e):e,s;if(t)if(bm(t))s=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Ai(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?s=Pl(t.substring(1),"/"):s=Pl(t,n)}else s=n;return{pathname:s,search:jm(r),hash:Im(i)}}function Pl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ps(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function td(e,n){let t=Nm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function rd(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hn(e):(i=ar({},e),$(!i.pathname||!i.pathname.includes("?"),ps("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),ps("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),ps("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=t;else{let m=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?n[m]:"/"}let u=Em(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),Cm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const id=["post","put","patch","delete"];new Set(id);const Rm=["get",...id];new Set(Rm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lr.apply(this,arguments)}const Oi=k.createContext(null),sd=k.createContext(null),Nn=k.createContext(null),Mi=k.createContext(null),nn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),od=k.createContext(null);function Lm(e,n){let{relative:t}=n===void 0?{}:n;mr()||$(!1);let{basename:r,navigator:i}=k.useContext(Nn),{hash:s,pathname:o,search:l}=Wi(e,{relative:t}),u=o;return r!=="/"&&(u=o==="/"?r:xn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function mr(){return k.useContext(Mi)!=null}function Bn(){return mr()||$(!1),k.useContext(Mi).location}function ad(e){k.useContext(Nn).static||k.useLayoutEffect(e)}function ca(){let{isDataRoute:e}=k.useContext(nn);return e?Vm():_m()}function _m(){mr()||$(!1);let e=k.useContext(Oi),{basename:n,future:t,navigator:r}=k.useContext(Nn),{matches:i}=k.useContext(nn),{pathname:s}=Bn(),o=JSON.stringify(td(i,t.v7_relativeSplatPath)),l=k.useRef(!1);return ad(()=>{l.current=!0}),k.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=rd(c,JSON.parse(o),s,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:xn([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,o,s,e])}const ld=k.createContext(null);function ud(){return k.useContext(ld)}function Pm(e){let n=k.useContext(nn).outlet;return n&&k.createElement(ld.Provider,{value:e},n)}function Am(){let{matches:e}=k.useContext(nn),n=e[e.length-1];return n?n.params:{}}function Wi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=k.useContext(Nn),{matches:i}=k.useContext(nn),{pathname:s}=Bn(),o=JSON.stringify(td(i,r.v7_relativeSplatPath));return k.useMemo(()=>rd(e,JSON.parse(o),s,t==="path"),[e,o,s,t])}function Om(e,n){return Mm(e,n)}function Mm(e,n,t,r){mr()||$(!1);let{navigator:i}=k.useContext(Nn),{matches:s}=k.useContext(nn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Bn(),h;if(n){var m;let E=typeof n=="string"?Hn(n):n;u==="/"||(m=E.pathname)!=null&&m.startsWith(u)||$(!1),h=E}else h=c;let g=h.pathname||"/",w=g;if(u!=="/"){let E=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=lm(e,{pathname:w}),x=Fm(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:xn([u,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:xn([u,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,t,r);return n&&x?k.createElement(Mi.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:cn.Pop}},x):x}function Wm(){let e=$m(),n=Tm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),t?k.createElement("pre",{style:i},t):null,null)}const Dm=k.createElement(Wm,null);class zm extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(nn.Provider,{value:this.props.routeContext},k.createElement(od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Um(e){let{routeContext:n,match:t,children:r}=e,i=k.useContext(Oi);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(nn.Provider,{value:n},r)}function Fm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var s;if(!t)return null;if(t.errors)e=t.matches;else if((s=r)!=null&&s.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||$(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:w}=t,y=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let w,y=!1,x=null,E=null;t&&(w=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||Dm,u&&(c<0&&g===0?(Ym("route-fallback"),y=!0,E=null):c===g&&(y=!0,E=m.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,g+1)),d=()=>{let p;return w?p=x:y?p=E:m.route.Component?p=k.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,k.createElement(Um,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:t!=null},children:p})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?k.createElement(zm,{location:t.location,revalidation:t.revalidation,component:x,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var cd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cd||{}),dd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dd||{});function Hm(e){let n=k.useContext(Oi);return n||$(!1),n}function Bm(e){let n=k.useContext(sd);return n||$(!1),n}function Gm(e){let n=k.useContext(nn);return n||$(!1),n}function fd(e){let n=Gm(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function $m(){var e;let n=k.useContext(od),t=Bm(),r=fd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Vm(){let{router:e}=Hm(cd.UseNavigateStable),n=fd(dd.UseNavigateStable),t=k.useRef(!1);return ad(()=>{t.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,lr({fromRouteId:n},s)))},[e,n])}const Al={};function Ym(e,n,t){Al[e]||(Al[e]=!0)}function qm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qm(e){return Pm(e.context)}function Ge(e){$(!1)}function Km(e){let{basename:n="/",children:t=null,location:r,navigationType:i=cn.Pop,navigator:s,static:o=!1,future:l}=e;mr()&&$(!1);let u=n.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:s,static:o,future:lr({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Hn(r));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:y="default"}=r,x=k.useMemo(()=>{let E=gt(h,u);return E==null?null:{location:{pathname:E,search:m,hash:g,state:w,key:y},navigationType:i}},[u,h,m,g,w,y,i]);return x==null?null:k.createElement(Nn.Provider,{value:c},k.createElement(Mi.Provider,{children:t,value:x}))}function Xm(e){let{children:n,location:t}=e;return Om(fo(n),t)}new Promise(()=>{});function fo(e,n){n===void 0&&(n=[]);let t=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...n,i];if(r.type===k.Fragment){t.push.apply(t,fo(r.props.children,s));return}r.type!==Ge&&$(!1),!r.props.index||!r.props.children||$(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fo(r.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vi.apply(this,arguments)}function pd(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Jm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zm(e,n){return e.button===0&&(!n||n==="_self")&&!Jm(e)}function po(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(i=>[t,i]):[[t,r]])},[]))}function eh(e,n){let t=po(e);return n&&n.forEach((r,i)=>{t.has(i)||n.getAll(i).forEach(s=>{t.append(i,s)})}),t}const nh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],th=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],rh="6";try{window.__reactRouterVersion=rh}catch{}const ih=k.createContext({isTransitioning:!1}),sh="startTransition",Ol=Vd[sh];function oh(e){let{basename:n,children:t,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=sm({window:i,v5Compat:!0}));let o=s.current,[l,u]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=k.useCallback(m=>{c&&Ol?Ol(()=>u(m)):u(m)},[u,c]);return k.useLayoutEffect(()=>o.listen(h),[o,h]),k.useEffect(()=>qm(r),[r]),k.createElement(Km,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=k.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,viewTransition:m}=n,g=pd(n,nh),{basename:w}=k.useContext(Nn),y,x=!1;if(typeof c=="string"&&lh.test(c)&&(y=c,ah))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),b=gt(v.pathname,w);v.origin===p.origin&&b!=null?c=b+v.search+v.hash:x=!0}catch{}let E=Lm(c,{relative:i}),f=ch(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",vi({},g,{href:y||E,onClick:x||s?r:d,ref:t,target:u}))}),Bt=k.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:h}=n,m=pd(n,th),g=Wi(u,{relative:m.relative}),w=Bn(),y=k.useContext(sd),{navigator:x,basename:E}=k.useContext(Nn),f=y!=null&&fh(g)&&c===!0,d=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,p=w.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&E&&(v=gt(v,E)||v);const b=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let j=p===d||!o&&p.startsWith(d)&&p.charAt(b)==="/",I=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),T={isActive:j,isPending:I,isTransitioning:f},U=j?r:void 0,L;typeof s=="function"?L=s(T):L=[s,j?"active":null,I?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ve=typeof l=="function"?l(T):l;return k.createElement(Ae,vi({},m,{"aria-current":U,className:L,ref:t,style:ve,to:u,viewTransition:c}),typeof h=="function"?h(T):h)});var mo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mo||(mo={}));var Ml;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ml||(Ml={}));function uh(e){let n=k.useContext(Oi);return n||$(!1),n}function ch(e,n){let{target:t,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=n===void 0?{}:n,u=ca(),c=Bn(),h=Wi(e,{relative:o});return k.useCallback(m=>{if(Zm(m,t)){m.preventDefault();let g=r!==void 0?r:gi(c)===gi(h);u(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,h,r,i,t,e,s,o,l])}function dh(e){let n=k.useRef(po(e)),t=k.useRef(!1),r=Bn(),i=k.useMemo(()=>eh(r.search,t.current?null:n.current),[r.search]),s=ca(),o=k.useCallback((l,u)=>{const c=po(typeof l=="function"?l(i):l);t.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function fh(e,n){n===void 0&&(n={});let t=k.useContext(ih);t==null&&$(!1);let{basename:r}=uh(mo.useViewTransitionState),i=Wi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let s=gt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=gt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return co(i.pathname,o)!=null||co(i.pathname,s)!=null}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),md=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=k.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>k.createElement("svg",{ref:u,...mh,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:md("lucide",i),...l},[...o.map(([c,h])=>k.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(e,n)=>{const t=k.forwardRef(({className:r,...i},s)=>k.createElement(hh,{ref:s,iconNode:n,className:md(`lucide-${ph(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ae("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=ae("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=ae("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=ae("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ae("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ae("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ae("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=ae("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=ae("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ae("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ae("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]),Wl={to:"/signal-stack",label:"SIGNAL_STACK"};function kh(){const e=ca(),[n,t]=k.useState("");function r(i){i.preventDefault();const s=n.trim();s&&e(`/search?q=${encodeURIComponent(s)}`)}return a.jsx("nav",{className:"border-b border-is-border bg-is-bg sticky top-0 z-50",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 flex items-center h-12 gap-3 sm:gap-4 md:gap-8",children:[a.jsx(Bt,{to:"/",className:"font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0",children:"Invisible Signals™"}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsxs(Bt,{to:Wl.to,className:({isActive:i})=>`hidden sm:flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border ${i?"border-is-primary text-is-primary bg-is-primary/10":"border-is-primary/40 text-is-primary hover:bg-is-primary/10 hover:border-is-primary"}`,children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),Wl.label]}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsx("div",{className:"hidden md:flex items-center",children:[{to:"/frameworks",label:"FRAMEWORKS"},{to:"/prompts",label:"PROMPTS"},{to:"/templates",label:"TEMPLATES"}].map(i=>a.jsx(Bt,{to:i.to,className:({isActive:s})=>`px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${s?"text-is-text":"text-is-dim hover:text-is-text"}`,children:i.label},i.to))}),a.jsxs("form",{onSubmit:r,className:"flex items-center gap-0 border border-is-border bg-is-surface shrink-0",children:[a.jsx("span",{className:"pl-2 sm:pl-3 pr-2 flex items-center text-is-dim",children:a.jsx(xh,{size:12})}),a.jsx("input",{type:"text",value:n,onChange:i=>t(i.target.value),placeholder:"QUERY_SYSTEM...",className:"bg-transparent font-mono text-xs tracking-widest text-is-text placeholder:text-is-dim outline-none py-1.5 pr-3 w-24 sm:w-40 md:w-48"})]}),a.jsxs("div",{className:"hidden md:flex items-center gap-3 shrink-0",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]})})}function Fe({color:e="blue",children:n}){const t={blue:"bg-is-primary/10 text-is-primary border-is-primary/30",coral:"bg-is-alert/10 text-is-alert border-is-alert/30",gold:"bg-is-warning/10 text-is-warning border-is-warning/30",dim:"bg-transparent text-is-dim border-is-border"};return a.jsxs("span",{className:`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs uppercase tracking-widest ${t[e]??t.dim}`,children:[e!=="dim"&&a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e==="blue"?"bg-is-primary":e==="coral"?"bg-is-alert":"bg-is-warning"}`}),n]})}function vd(e){const n=e.match(/^---\n([\s\S]*?)\n---\n/),t={};n&&n[1].replace(/^([\w-]+):\s*(.+)$/gm,(l,u,c)=>{t[u]=c.trim()});const i=(n?e.slice(n[0].length):e).split(/\n---\n/),s=[];if(i[1])for(const l of i[1].matchAll(/^\| (\d+) \| ([^|]+?) \| ([^|]+?) \|$/gm))s.push({score:parseInt(l[1]),rating:l[2].trim(),meaning:l[3].trim()});const o=[];for(let l=2;l<i.length;l++){const u=i[l].trim();if(!u)continue;const c=Sh(u);c&&o.push(c)}return{frontmatter:t,scoringRows:s,layers:o}}function Sh(e){const n=e.match(/^## Layer (\d+) — (.+)$/m);if(!n)return null;const t=parseInt(n[1]),r=n[2].trim(),i=`l${t}`,s=e.match(/\*\*([^*\n]+)\*\*/),o=s?s[1].trim():"",l=e.match(/\*\*[^*\n]+\*\*\n+([\s\S]*?)\n+\*\*Strong signals\*\*/),u=l?l[1].trim():"",c=e.match(/\*\*Strong signals\*\*\n+((?:- .+\n?)+)/),h=c?(c[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],m=e.match(/\*\*Weak signals\*\*\n+((?:- .+\n?)+)/),g=m?(m[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],w=e.match(/> Weak: "([^"]+)"/),y=e.match(/> Strong: "([^"]+)"/),x=w?w[1]:"",E=y?y[1]:"",f=[];for(const d of e.matchAll(/^\| ([A-Za-z][^|]*?) \| ([^|]+?) \|$/gm)){const p=d[1].trim(),v=d[2].trim();p!=="Level"&&f.push({level:p,description:v})}return{num:t,slug:i,name:r,tagline:o,description:u,strongSignals:h,weakSignals:g,exampleWeak:x,exampleStrong:E,levels:f}}const yd=`---
title: The Signal Stack™
version: 1.0
status: draft
category: docs
tags:
  - signal-stack
  - hiring
  - evaluation
  - career-signal-intelligence
---

# The Signal Stack™

The Signal Stack™ describes the layers of evidence hiring teams, managers, and peers use to evaluate technical talent.

The eight layers are independent dimensions, not a progression. Strong candidates show evidence across multiple layers simultaneously. A weak layer does not disqualify — but an invisible layer often does. Evaluators infer from what they can see. If evidence is missing, they fill the gap with assumptions, and assumptions skew negative.

For guidance on how to use AI tools to surface and strengthen your signals without fabricating experience, see [responsible-ai-use.md](responsible-ai-use.md).

---

## Scoring Scale

Use this scale when assessing signal strength in any layer. This is the canonical reference for all scoring in this toolkit.

| Score | Rating | Meaning |
|---:|---|---|
| 0 | Missing | No visible evidence |
| 1 | Weak | Evidence exists but is vague, generic, buried, or low-confidence |
| 2 | Moderate | Evidence is present and mostly clear, but not yet compelling |
| 3 | Strong | Evidence is clear, specific, relevant, and defensible |
| 4 | Excellent | Evidence is role-aligned, differentiated, credible, and memorable |

For each score, also assign a **confidence tier**:

| Confidence | Meaning |
|---|---|
| High | Evidence is explicit and easy to validate |
| Medium | Evidence is present but needs clarification |
| Low | Evidence depends heavily on assumption or interpretation |

---

## Layer 1 — Technical Capability

**Can you do the work?**

Technical capability is the baseline signal. It is the most legible layer to hiring teams and the most commonly over-represented on résumés. Strong evidence goes beyond listing tools or technologies — it shows applied judgment in choosing, implementing, and debugging systems under real constraints.

**Strong signals**

- Specific problem solved with specific technology
- Tradeoffs considered and stated
- Quantified performance, scale, or outcome
- Evidence of debugging, recovery, or handling edge cases
- Decision rationale, not just output

**Weak signals**

- Technology lists without context
- "Worked on" or "helped with" language
- Vague contributions to large systems with no individual ownership visible
- No indication of scale, complexity, or constraint

**Example evidence**

> Weak: "Used Kotlin to rewrite the Android app."
>
> Strong: "Migrated a 40K-line Android codebase from Java to Kotlin in three phases, reducing crash rate by 22% and improving build time by 35% through incremental module conversion."

See [\`examples/resumes/weak-vs-strong-bullets.md\`](../examples/resumes/weak-vs-strong-bullets.md) for detailed before/after patterns.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Solves well-scoped problems with the right tools |
| Senior | Navigates ambiguity, selects appropriate approaches, explains tradeoffs |
| Staff | Shapes technical direction across teams or domains |
| EM | Evaluates technical output of others accurately; does not need to do the work but must assess it |

---

## Layer 2 — Execution Reliability

**Can people trust you to follow through?**

Execution reliability is less visible on a résumé than technical capability but is often the deciding signal for senior and staff roles. Strong evidence shows a pattern of follow-through under pressure — not just a list of projects that shipped.

**Strong signals**

- Projects completed despite obstacles, with specifics about what the obstacles were
- Examples of unblocking yourself or others without escalating
- Consistent delivery across multiple examples
- Evidence of scope management, deadline recovery, or risk flagging

**Weak signals**

- Every project succeeded with no friction mentioned
- Passive delivery language ("was part of", "contributed to")
- Long tenure with no clear shipped outcomes
- Projects described as handed off before completion

**Example evidence**

> Weak: "Delivered features across the Android team."
>
> Strong: "Led delivery of the offline sync feature across a six-week timeline after a late design change; coordinated with platform and QA to restructure scope without missing the release window."

See [\`frameworks/hiring-funnel/onsite.md\`](../frameworks/hiring-funnel/onsite.md) for how this layer appears in structured panel interviews.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Delivers assigned work reliably and flags blockers early |
| Senior | Manages own scope, surfaces risk, adjusts without waiting for direction |
| Staff | Ensures delivery across multiple workstreams or teams |
| EM | Creates conditions for team delivery; accountable for outcomes, not effort |

---

## Layer 3 — Ownership

**Do you drive outcomes or wait for direction?**

Ownership is the single most mis-communicated signal in behavioral interviews. It shows up in language ("I decided" vs. "we tried"), in the scope of actions taken, and in whether problems were solved or escalated. Evaluators listen for who the actor was in every story.

**Strong signals**

- First-person decision language with specific choices named
- Evidence of acting without being asked
- End-to-end problem solving — identified it, drove it, closed it
- Willingness to state what they would do differently in retrospect

**Weak signals**

- Consistent "we" language with no individual contribution visible
- Outcomes described with no actor ("the feature shipped", "the issue was resolved")
- Problems handed off rather than resolved
- Credit distributed across the team with no personal stake evident

**Example evidence**

> Weak: "We improved the CI pipeline performance."
>
> Strong: "I identified a 14-minute average build time as the main barrier to deploy frequency. I profiled the pipeline, proposed a caching strategy, got buy-in from the platform team, and implemented it — bringing build time down to 4 minutes."

See [\`prompts/interview/skeptical-hiring-manager.md\`](../prompts/interview/skeptical-hiring-manager.md) for a roleplay prompt that pressure-tests ownership language in behavioral answers.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Owns their own tasks; pulls in help proactively |
| Senior | Owns a feature or component end-to-end including upstream and downstream impact |
| Staff | Owns a technical problem at the org level; drives resolution across team boundaries |
| EM | Owns team health and output, not just individual deliverables |

---

## Layer 4 — Communication

**Can you make complex work understandable?**

Communication is evaluated as an engineering skill, not a soft skill. Hiring teams watch whether you can explain technical work to non-technical audiences, give status updates that surface the right information, write clearly, and adjust your register to your audience.

**Strong signals**

- Clear, structured answers in interviews without prompting
- Examples of docs, RFCs, or briefs that drove alignment
- Ability to explain technical decisions in business terms
- Communication that adapts to engineer vs. PM vs. executive audience

**Weak signals**

- Long, unstructured answers that bury the point
- No examples of written communication
- Inability to explain technical choices without jargon when talking to a non-technical audience
- Communication described as something others handled ("the PM managed the stakeholder updates")

**Example evidence**

> Weak: "I documented the migration."
>
> Strong: "I wrote a two-page migration brief for the Android team that reduced integration questions by 80% in the first sprint — the PM used it directly in the launch readiness review."

See [\`examples/interviews/star-answer-diagnostic.md\`](../examples/interviews/star-answer-diagnostic.md) for how communication quality is scored in behavioral answer evaluation.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Communicates clearly within the team |
| Senior | Drives cross-team alignment through written and verbal communication |
| Staff | Shapes how complex technical topics are understood across the org |
| EM | Sets communication norms for the team; translates between engineering and leadership |

---

## Layer 5 — Product and Business Judgment

**Do you understand why the work matters?**

Product and business judgment shows whether you connect your work to outcomes the business cares about — not just whether you implemented it correctly. This layer is lightly evaluated at mid-level and becomes central at senior and above.

**Strong signals**

- References to user impact, revenue, retention, cost, or reliability
- Evidence of contributing to product decisions or roadmap conversations
- Ability to explain why a technical choice was the right one for the business moment
- Examples of scope reduction or reprioritization that served a larger goal

**Weak signals**

- All answers framed in pure technical terms
- No mention of user outcomes or business context
- Product decisions attributed entirely to others
- Inability to explain why a project mattered beyond its implementation

**Example evidence**

> Weak: "Implemented push notifications."
>
> Strong: "Push notifications had been deprioritized for two cycles. I ran a small experiment, tied the engagement lift to our D7 retention metric, and presented the case to product — it moved into the next sprint and became a top-5 retention driver."

See [\`prompts/resume/resume-signal-analysis.md\`](../prompts/resume/resume-signal-analysis.md) for how this layer is evaluated in résumé signal audits.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Understands how their work maps to user outcomes |
| Senior | Contributes to prioritization conversations with data and user context |
| Staff | Helps engineering and product align on what to build and why |
| EM | Accountable for team output in terms of business outcomes, not engineering effort |

---

## Layer 6 — Collaboration and Influence

**Can you move work through people and systems?**

Collaboration and influence distinguishes candidates who multiply team output from those who only deliver individually. At senior and above, unilateral execution is not enough — the question is whether you can get the right outcomes through people and systems you do not control.

**Strong signals**

- Examples of cross-functional coordination with a specific outcome
- Evidence of technical persuasion — changing a decision with data or reasoning
- Examples of unblocking others or accelerating teammates
- Participation in design reviews, RFCs, or architectural decisions
- Informal mentorship or onboarding that measurably changed someone

**Weak signals**

- All examples are solo or single-team
- No evidence of navigating disagreement or resistance
- Influence described abstractly ("I was a team player", "I collaborated closely")
- No examples of others whose work improved through a direct interaction

**Example evidence**

> Weak: "Mentored junior engineers on the team."
>
> Strong: "Paired with two junior engineers weekly during the authentication migration — both shipped independently by the end of the quarter. One has since taken on tech lead responsibilities for a new module."

See [\`frameworks/hiring-funnel/hiring-manager-screen.md\`](../frameworks/hiring-funnel/hiring-manager-screen.md) for how collaboration signals are assessed in hiring manager conversations.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Collaborates reliably within the team |
| Senior | Coordinates across teams; influences technical decisions outside their immediate scope |
| Staff | Shapes technical culture and direction through influence without authority |
| EM | Builds psychological safety, removes blockers, creates conditions for the team to collaborate |

---

## Layer 7 — Strategic Thinking

**Can you reason beyond the immediate task?**

Strategic thinking shows whether you anticipate downstream effects, identify second-order risks, and frame current work in the context of longer-term technical and organizational goals. It is lightly evaluated at mid-level but is a primary differentiator at staff and above.

**Strong signals**

- Examples of anticipating a problem before it occurred
- Architectural decisions made with future constraints in mind
- Ability to describe how a current technical choice connects to a 12–24 month horizon
- Examples of influencing the roadmap or reducing future rework

**Weak signals**

- All answers are reactive — responding to problems after they emerged
- No future-looking reasoning in any story
- Technical decisions described only in terms of immediate implementation
- Scope confined to the current sprint or quarter in every example

**Example evidence**

> Weak: "Refactored the auth module when it became unmaintainable."
>
> Strong: "Before the platform migration, I mapped the authentication module's dependency graph and flagged three integration points that would break at scale. We refactored proactively — avoiding an estimated six weeks of emergency rework eighteen months later."

See [\`frameworks/hiring-funnel/onsite.md\`](../frameworks/hiring-funnel/onsite.md) for how this layer is probed in panel and system design interviews.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Considers how their decisions affect teammates downstream |
| Senior | Anticipates technical debt; builds with future extension in mind |
| Staff | Shapes architectural strategy; helps the org avoid expensive pivots |
| EM | Aligns team investment with org-level goals and multi-quarter planning |

---

## Layer 8 — Leadership Maturity

**Do you make the people and system around you better?**

Leadership maturity is not about managing people — it applies to ICs at every level. It shows up in how you handle ambiguity, how you respond to failure, whether you give and receive feedback constructively, and whether you leave the codebase, the team culture, and the processes better than you found them.

**Strong signals**

- Feedback given constructively and received with openness
- Examples of navigating ambiguity without waiting for perfect information
- Post-mortems or retrospectives that resulted in a concrete change
- Process improvements that reduced friction for others
- Consistent behavior under pressure — same judgment in difficult moments as easy ones

**Weak signals**

- Only positive outcomes with no setbacks mentioned
- Ambiguity always resolved by others
- Feedback described as something received but never given
- Process improvements attributed entirely to management
- No evidence of growth from difficulty

**Example evidence**

> Weak: "I helped improve team processes."
>
> Strong: "After a two-week outage investigation, I ran a blameless postmortem with the team and identified three process gaps. I drafted follow-up proposals, got sign-off from engineering leadership, and we implemented all three within a quarter — similar incidents dropped by 70%."

See [\`templates/signal-scorecard.md\`](../templates/signal-scorecard.md) for how to self-assess this layer before a performance review or promotion conversation.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Acts on ambiguity without requiring complete information; gives and receives feedback constructively |
| Senior | Models engineering judgment; helps shape team norms through behavior |
| Staff | Raises the quality bar of technical decisions across the org |
| EM | Builds a team culture where others grow, ship, and develop resilience |
`;function bh(){return a.jsxs("div",{className:"h-32 flex items-end gap-1 overflow-hidden opacity-40",children:[a.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2s_infinite]",style:{height:"20%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/30 animate-[pulse_2.2s_infinite]",style:{height:"45%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_1.8s_infinite]",style:{height:"70%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/25 animate-[pulse_2.5s_infinite]",style:{height:"30%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/40 animate-[pulse_1.5s_infinite]",style:{height:"90%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2.1s_infinite]",style:{height:"50%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/35 animate-[pulse_2.4s_infinite]",style:{height:"65%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_1.9s_infinite]",style:{height:"25%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/50 animate-[pulse_1.2s_infinite]",style:{height:"100%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2.3s_infinite]",style:{height:"40%"}}),a.jsx("div",{className:"flex-1 bg-is-primary/30 animate-[pulse_1.7s_infinite]",style:{height:"80%"}})]})}function Eh(){return a.jsxs("div",{className:"relative w-40 h-40 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 border border-is-primary/20 rounded-full"}),a.jsx("div",{className:"absolute inset-4 border border-is-primary/30 rounded-full"}),a.jsx("div",{className:"absolute inset-8 border border-is-primary/50 rounded-full"}),a.jsx("div",{className:"absolute inset-12 border border-is-primary/70 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-is-primary rounded-full"}),a.jsx("div",{className:"absolute top-4 right-8",style:{animation:"orbit-cw 7s linear infinite",transformOrigin:"-42px 64px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-alert",style:{animation:"orbit-ccw 7s linear infinite"}})}),a.jsx("div",{className:"absolute bottom-6 left-6",style:{animation:"orbit-cw 5.5s linear infinite",transformOrigin:"56px -50px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-warning",style:{animation:"orbit-ccw 5.5s linear infinite"}})})]})}const{layers:Nh}=vd(yd),Ch=[{to:"/frameworks",tag:"FRAMEWORKS",icon:"⬡",title:"Frameworks",desc:"No-code meta models for evaluating architectural judgment beyond the job log.",pill:"SIGNAL_LOOP",pillColor:"blue"},{to:"/prompts",tag:"PROMPTS",icon:"···",title:"Prompts",desc:"System-level instructions to analyze career metadata and generate telemetry goals.",pill:"SIGNAL_MAP",pillColor:"blue"},{to:"/templates",tag:"TEMPLATES",icon:"◻",title:"Templates",desc:"Structured markdown documents for auditing, scoring, and improving your career signals.",pill:"SIGNAL_ACTIVE",pillColor:"gold"}],jh=[{num:"01",title:"VALUE MODULATION",body:"Stop describing tasks; start describing outcomes. High-value work is invisible until translated in the language of organizational growth."},{num:"02",title:"ALGORITHMIC SHARPNESS",body:"Use AI to retrieve value from your narrative. Intelligence tools should work for you; they should diagnose your architectural logic."},{num:"03",title:"SIGNAL INTERPRETATION",body:"Hiring systems are human and machine signal processors. Your objective is to raise the signal-to-noise ratio in every transmission."},{num:"04",title:"REPEATABLE TELEMETRY",body:"Career growth is a series of repeatable processes for surfacing and presenting progress. Lucky signals are not engineered; signals are permanent."}];function Ih(){return a.jsxs("div",{className:"w-full",children:[a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20 md:py-32",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-10",children:[a.jsx(Fe,{color:"blue",children:"● SYSTEM STATUS: ONLINE // ESTABLISHED"}),a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest hidden sm:block",children:"SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6",children:["CAREER SIGNAL",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-primary",children:"INTELLIGENCE."})]}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-xl mb-10",children:"Open-source telemetry for engineers and leaders. Detect, refine, and transmit professional impact in the age of algorithmic hiring."}),a.jsx("div",{className:"flex flex-wrap gap-3",children:a.jsx(Ae,{to:"/signal-stack",className:"is-btn-primary",children:"START HERE →"})})]}),a.jsxs("div",{className:"is-panel p-4 relative",children:[a.jsx("div",{className:"absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary",children:"SIG_TRACE_01"}),a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_STRENGTH_READOUT"}),a.jsx(bh,{}),a.jsx("div",{className:"grid grid-cols-3 gap-px mt-1 border-t border-is-border pt-3",children:["TECHNICAL","OWNERSHIP","TRANSLATION"].map(e=>a.jsx("div",{className:"font-mono text-xs text-is-dim",children:e},e))})]})]})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-6",children:"DIAGNOSTIC: CLARITY_GAP"}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text mb-8",children:["TECHNICAL SKILL",a.jsx("br",{}),"IS NOT THE"," ",a.jsx("em",{className:"not-italic text-is-alert",children:"ISSUE."})]}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed mb-8 max-w-lg",children:"Amidst technical noise, the clarity of your signal—how well you communicate your capabilities—determines your career trajectory."}),a.jsxs("div",{className:"is-panel border-l-2 border-l-is-alert p-4",children:[a.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-2",children:"⚠ CRITICAL_FAILURE_RETURN"}),a.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:"Most engineers fail to communicate ownership, organizational judgment, and business impact to humans and in hires."})]})]}),a.jsxs("div",{className:"flex flex-col items-center gap-8",children:[a.jsxs("div",{className:"is-panel p-6 w-full flex flex-col items-center",children:[a.jsx("div",{className:"is-label mb-4",children:"SEARCHING_FOR_SIGNAL..."}),a.jsx(Eh,{})]}),a.jsxs("div",{className:"is-panel p-4 w-full",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),a.jsx("div",{className:"space-y-2",children:[{label:"TECHNICAL NOISE",pct:88,color:"bg-is-dim"},{label:"OWNERSHIP SIGNAL",pct:34,color:"bg-is-primary"},{label:"IMPACT CLARITY",pct:21,color:"bg-is-alert"}].map(({label:e,pct:n,color:t})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim",children:e}),a.jsxs("span",{className:"font-mono text-xs text-is-dim",children:[n,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:a.jsx("div",{className:`h-full ${t}`,style:{width:`${n}%`}})})]},e))})]})]})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4 mb-10",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"BUILT_ON"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_STACK"}),a.jsx("div",{className:"font-mono text-xs text-is-dim mt-2",children:"L1–L8 ANALYSIS FRAMEWORK"})]}),a.jsx(Ae,{to:"/signal-stack",className:"font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors",children:"ENTER SIGNAL_STACK →"})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px bg-is-border",children:Nh.map(({num:e,slug:n,name:t,tagline:r})=>a.jsxs(Ae,{to:`/signal-stack/${n}`,className:"group bg-is-bg p-5 flex flex-col gap-3 hover:bg-is-surface transition-colors",children:[a.jsxs("span",{className:"font-mono text-xs text-is-dim",children:["L",e]}),a.jsx("div",{className:"font-mono text-sm font-semibold text-is-text uppercase tracking-wide",children:t}),a.jsx("p",{className:"font-body text-xs text-is-dim leading-relaxed flex-1",children:r}),a.jsx("div",{className:"h-px bg-is-border"}),a.jsx("div",{className:"font-mono text-xs text-is-primary group-hover:underline",children:"LAYER_DETAIL →"})]},n))})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-is-border",children:Ch.map(({to:e,tag:n,icon:t,title:r,desc:i,pill:s,pillColor:o})=>a.jsxs(Ae,{to:e,className:"group bg-is-bg p-6 flex flex-col gap-4 hover:bg-is-surface transition-colors",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"font-mono text-xl text-is-dim",children:t}),a.jsx(Fe,{color:o,children:s})]}),a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:n}),a.jsx("div",{className:"font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors",children:r})]}),a.jsx("p",{className:"font-body text-xs text-is-dim leading-relaxed flex-1",children:i}),a.jsx("div",{className:"font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity",children:"EXPLORE →"})]},e))})})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_SIGNAL_SPECTRUM"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL CALIBRATION"})]}),a.jsxs("div",{className:"is-panel p-0 overflow-hidden",children:[a.jsxs("div",{className:"border-b border-is-border px-3 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 bg-is-surface",children:[a.jsx("div",{className:"flex items-center gap-4",children:a.jsx("span",{className:"is-label",children:"PROCESS_ID: SIGNAL_PARALLAX"})}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-wrap justify-start",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim",children:"STEP: 1 / 3"}),a.jsx(Fe,{color:"gold",children:"CALIBRATING"}),a.jsx(Fe,{color:"blue",children:"SIGNAL_BLANKET"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"RAW_INPUT_SIGNAL"}),a.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-dim leading-relaxed italic",children:'"I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."'}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.13 (CRITICAL_LOW)",color:"text-is-alert"},{label:"INPUT_RESOLUTION",val:"NULL_DETECTED",color:"text-is-alert"},{label:"COMPLEXITY_INDEX",val:"GHOST_RUN",color:"text-is-warning"}].map(({label:e,val:n,color:t})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-dim mb-1",children:e}),a.jsx("div",{className:`font-mono text-xs font-semibold ${t}`,children:n})]},e))})]}),a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROCESSED_SIGNAL_CLARITY"}),a.jsx("div",{className:"is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed",children:`"Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."`}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.94 CONFIRMED",color:"text-is-primary"},{label:"INPUT_RESOLUTION",val:"QUANTIFIED",color:"text-is-primary"},{label:"COMPLEXITY_INDEX",val:"HYPERLINK_HIGH",color:"text-is-primary"}].map(({label:e,val:n,color:t})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-dim mb-1",children:e}),a.jsx("div",{className:`font-mono text-xs font-semibold ${t}`,children:n})]},e))})]})]})]})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"is-label",children:"BUILT_ON // CODE_PRINCIPLES"}),a.jsx("div",{className:"is-label",children:"BUILT_BY: ANNYCE_DAVIS"})]}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text",children:["NOT HACKING.",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-alert",children:"RESOLUTION."})]}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed mt-6 max-w-2xl",children:"The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border",children:jh.map(({num:e,title:n,body:t})=>a.jsxs("div",{className:"bg-is-bg p-8",children:[a.jsx("div",{className:"font-mono text-xs text-is-primary mb-4",children:e}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide",children:n}),a.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:t})]},e))})]})}),a.jsx("section",{className:"px-6 py-32 bg-is-bg",children:a.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[a.jsx("div",{className:"flex justify-center mb-4",children:a.jsx("div",{className:"w-8 h-px bg-is-primary"})}),a.jsxs("h2",{className:"font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4",children:["INITIALIZE",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-primary",children:"YOUR SIGNAL."})]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mt-10",children:[a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"is-btn-primary",children:"↗ SIGNAL REPOSITORY"}),a.jsx("span",{className:"font-mono text-xs text-is-dim",children:"FRAMEWORK: V0.1"})]})]})})]})}const ho=[{id:"RESUME_REVIEW",label:"01 // RÉSUMÉ REVIEW",question:"Does this candidate clear the bar on paper?",signals:["Trajectory — is scope and responsibility clearly growing?","Impact language — outcomes vs. activities vs. tasks","Signal Stack coverage relative to the role requirements","Tailoring gap — does the candidate match this specific role?"],pitfalls:["Activity-based bullets with no outcome or impact","Generic résumés sent without tailoring","Missing evidence for ownership or business judgment"],examples:[{id:"EX_01",label:"01 // ACTIVITY VS IMPACT",weak:"Worked on Android app modernization using Kotlin.",strong:"Migrated critical Android checkout flows from Java to Kotlin, reducing crash-related support tickets by 32% and improving release stability during peak retail periods."},{id:"EX_02",label:"02 // GENERIC LEADERSHIP",weak:"Led cross-functional collaboration across teams.",strong:"Coordinated API contract alignment between mobile, backend, and platform teams to unblock a multi-quarter authentication migration affecting 4 product surfaces."},{id:"EX_03",label:"03 // SENIOR-LEVEL SIGNAL",weak:"Responsible for architecture decisions.",strong:"Defined mobile caching strategy for high-traffic commerce APIs, reducing redundant network requests and improving app startup reliability under unstable network conditions."},{id:"EX_04",label:"04 // ENGINEERING LEADERSHIP",weak:"Managed a team of engineers.",strong:"Led a team of 8 engineers across mobile and platform initiatives, improving sprint predictability and reducing production escalation volume through tighter dependency planning and release coordination."},{id:"EX_05",label:"05 // AI-ASSISTED RISKS",weak:"Visionary engineering leader driving innovative scalable solutions across cross-functional ecosystems.",strong:"Standardized CI workflows across 12 repositories, reducing release inconsistencies and shortening onboarding time for new engineers."}]},{id:"RECRUITER_SCREEN",label:"02 // RECRUITER SCREEN",question:"Is this a plausible fit for the role and company?",signals:["Compensation alignment and timeline","Location / work-model fit","Basic role comprehension — do they understand the scope?","Genuine interest signal vs. spray-and-pray behavior"],pitfalls:["Discussing compensation before understanding the role","Treating recruiters as gatekeepers rather than advocates","Under-preparing on why this company specifically"]},{id:"HM_SCREEN",label:"03 // HIRING MANAGER SCREEN",question:"Is this someone I'd want on my team?",signals:["Ownership — do they drive outcomes or wait for direction?","Judgment — how they have navigated ambiguity and tradeoffs","Communication — can they make complex work understandable?","Collaboration signal — do they make systems around them better?"],pitfalls:["Describing what the team did, not what you specifically drove","No concrete examples of business or product judgment","Failing to ask high-signal questions about the role"]},{id:"TECHNICAL_SCREEN",label:"04 // TECHNICAL SCREEN",question:"Can they do the technical work?",signals:["Problem decomposition — how they break down complexity","Trade-off reasoning — alternatives considered and why","Communication during the problem, not just the solution","System-level thinking beyond the immediate question"],pitfalls:["Silent coding — no narration of thought process","Over-optimizing without articulating the trade-off","Treating it as a quiz rather than a collaborative problem"]},{id:"ONSITE",label:"05 // ONSITE",question:"Is this the right hire?",signals:["Consistency across interviewers — same caliber across rounds","Leadership maturity — how they make others better","Strategic thinking — reasoning beyond the immediate task","Cultural signal — how they operate, not just what they deliver"],pitfalls:["Energy drop after the technical round","Treating behavioral rounds as less important than technical","No prepared questions that signal strategic curiosity"]}],Th=[{id:"PROOF_OF_OWNERSHIP",label:"PROOF OF OWNERSHIP",question:"What are you truly driving end-to-end?"},{id:"PROBLEM_SOLVING_DEPTH",label:"PROBLEM-SOLVING DEPTH",question:"Where did you personally reduce ambiguity or unblock something hard?"},{id:"BOUNDARY_CLARITY",label:"BOUNDARY CLARITY",question:"What do you own — and what should you stop absorbing?"},{id:"VISIBLE_SIGNAL",label:"VISIBLE SIGNAL",question:"What artifact or outcome shows your impact clearly and honestly?"}],Rh=[{id:"COORDINATION_VS_OWNERSHIP",label:"01 // COORDINATION vs OWNERSHIP",question:"What work are you truly owning vs. just coordinating?",signals:["Named scope with clear delivery accountability","End-to-end ownership of an outcome — not just a task","Proof-point project with measurable, attributable result","Technical leadership visible beyond orchestration"],pitfalls:['All work described as "helping," "supporting," or "coordinating"',"No single outcome the person can fully claim","Growth stalls because no delivery signal is accumulating"],dropIn:["What work are you truly owning end-to-end — not just coordinating?","What proof-point project would make your impact obvious in 60–90 days?","What outcome from the last quarter can you fully claim?"]},{id:"DIAGNOSE_NOT_MONITOR",label:"02 // DIAGNOSE, NOT MONITOR",question:"Where are you reviewing progress instead of helping unblock it?",signals:["Drills into blockers — does not just collect status","Applies technical judgment to ambiguous situations","Offers concrete paths forward, not just escalation pathways","Problem-solving depth visible beyond stakeholder updates"],pitfalls:["Asking for status without understanding root causes","Offering options instead of helping solve the problem","Delegation without technical depth erodes leadership signal"],dropIn:["Where are you reviewing progress instead of helping unblock it?","What issue this week required deeper technical judgment from you?","Where did you go one level deeper than status last week?"]},{id:"DECISION_RIGHTS_CLARITY",label:"03 // DECISION RIGHTS CLARITY",question:"What decision do you think you own that others may think they own too?",signals:["Can name the DRI for every active cross-team decision","Leaves every discussion with decision, owner, escalation path, and handoff stated","Proactively surfaces ownership ambiguity before it becomes a blocker","Clarity around approval boundaries reduces churn and wasted cycles"],pitfalls:["Ownership ambiguity costing time and eroding trust","Cross-team decisions stalling without a named driver","Confusing contribution with accountability"],dropIn:["What decision do you think you own that others may think they own too?","Where is ambiguity costing you time or trust right now?","After your last cross-team meeting, could you state the decision, the DRI, the escalation path, and the handoff boundary?"]},{id:"BOUNDARY_SETTING",label:"04 // BOUNDARY SETTING",question:"What work are you carrying that should belong to someone else?",signals:["Support is bounded and communicated proactively","Responsibility transitions back to the right owner","Contribution is real, visible, and sustainable","Protects their own cycles and signal integrity"],pitfalls:["Support drifting into shaping other teams' artifacts","Absorbing other teams' responsibilities without visibility","Helpfulness that hides ownership problems"],dropIn:["What work are you carrying that should belong to someone else?","Where are you being helpful in a way that hides an ownership problem?","What support commitment do you need to define a boundary around?"]},{id:"BLOCKERS_TO_SIGNAL",label:"05 // BLOCKERS TO LEADERSHIP SIGNAL",question:"What blocker did you convert into a concrete recommendation this week?",signals:["Risk framing and proposed paths forward — not just problem reporting","Dependency maps and decision framing created proactively for others","Ambiguity reduced through artifacts, not just flagged in meetings","Blockers converted into structured leadership communication"],pitfalls:["Reporting friction without proposing a path forward","Blockers listed without ownership of resolution","Ambiguity escalated without reducing it first"],dropIn:["What blocker did you convert into a concrete recommendation this week?","What ambiguity did you reduce for others — not just surface?","What artifact did you create that made the work easier to understand?"]},{id:"HONEST_VISIBILITY",label:"06 // HONEST VISIBILITY",question:"What is the most credible evidence of your growth right now?",signals:["Contribution translated into clear, honest signal","Named ownership, measurable results, reduced risk","Growth visible to someone who only has the last 60 days of evidence","Impact communicated without relying on explanation or context"],pitfalls:["Visibility built on self-promotion rather than earned contribution","Contributions that require extensive explanation to sound significant","Growth narrative inflated beyond what evidence supports"],dropIn:["What is the most credible evidence of your growth right now?","If someone senior looked only at your last 60 days, what signal would they see?","What contribution have you made that improved clarity, speed, or quality for the team?"]}];function Lh(){const[e,n]=k.useState(null),[t,r]=k.useState(null),[i,s]=k.useState("HIRING_FUNNEL");return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_01_FRAMEWORKS"}),a.jsx(Fe,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:i==="HIRING_FUNNEL"?"HIRING FUNNEL":"COACHING"}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl mb-6",children:i==="HIRING_FUNNEL"?"The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly.":"Career coaching through signal clarity. Helping engineers and technical leaders own something real, solve something hard, clarify boundaries, and leave behind visible evidence of impact."}),a.jsx("div",{className:"flex gap-1",children:[{id:"HIRING_FUNNEL",label:"HIRING_FUNNEL"},{id:"COACHING",label:"COACHING"}].map(o=>a.jsx("button",{onClick:()=>s(o.id),className:`font-mono text-xs px-3 py-1.5 border uppercase tracking-widest transition-all ${i===o.id?"border-is-primary text-is-primary bg-is-primary/10":"border-is-border text-is-dim hover:border-is-primary/40 hover:text-is-text"}`,children:o.label},o.id))})]}),i==="HIRING_FUNNEL"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"STAGE_OVERVIEW // SIGNAL_MAP"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"STAGE"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"PRIMARY_SIGNAL_QUESTION"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest hidden md:table-cell",children:"STATUS"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:ho.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question}),a.jsx("td",{className:"px-5 py-3 hidden md:table-cell",children:a.jsx(Fe,{color:"blue",children:"ACTIVE"})})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:ho.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-dim flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:l})]},l))})]})]}),o.examples&&a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>n(e===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"EXAMPLES // SIGNAL_CALIBRATION"}),a.jsx("span",{className:"font-mono text-xs text-is-dim",children:e===o.id?"[−]":"[+]"})]}),e===o.id&&a.jsx("div",{className:"px-6 py-5 space-y-6",children:o.examples.map(l=>a.jsxs("div",{children:[a.jsx("div",{className:"is-label text-is-dim mb-3",children:l.label}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-alert mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"⚠"})," WEAK"]}),a.jsx("p",{className:"font-mono text-xs text-is-dim leading-relaxed",children:l.weak})]}),a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-primary mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"→"})," STRONG"]}),a.jsx("p",{className:"font-mono text-xs text-is-dim leading-relaxed",children:l.strong})]})]})]},l.id))})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-mono text-xs text-is-dim",children:["SOURCE: Derived from Annyce Davis, ",a.jsx("em",{children:"Landing Your Next Gig in Tech"})," (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK"]})})]}),i==="COACHING"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"COACHING_LENS // 4_PART_FRAMEWORK"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"LENS"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"CORE_QUESTION"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:Th.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary whitespace-nowrap",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:Rh.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-dim flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:l})]},l))})]})]}),a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>r(t===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"DROP-IN_QUESTIONS // 1:1_USE"}),a.jsx("span",{className:"font-mono text-xs text-is-dim",children:t===o.id?"[−]":"[+]"})]}),t===o.id&&a.jsx("div",{className:"px-6 py-5",children:a.jsx("ul",{className:"space-y-3",children:o.dropIn.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"?"}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:l})]},l))})})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsx("p",{className:"font-mono text-xs text-is-dim",children:"SOURCE: Annyce Davis · SIGNAL_REF: COACHING_FRAMEWORK"})})]})]})}const xd=`# prompts/

AI prompts for résumé review and interview preparation.

These prompts are designed to surface signal quality issues in your real experience — not to generate or fabricate content for you.

## Contents

### resume/

| File | Description |
| --- | --- |
| [resume-signal-analysis.md](resume/resume-signal-analysis.md) | Audits a résumé for visible and invisible signals relative to a specific role, level, and career context |

### interview/

| File | Description |
| --- | --- |
| [behavioral-answer-diagnostic.md](interview/behavioral-answer-diagnostic.md) | Diagnoses the signal quality of a behavioral interview answer |
| [skeptical-hiring-manager.md](interview/skeptical-hiring-manager.md) | Simulates a rigorous hiring manager who challenges vague or unsupported answers |

## Usage

Copy the prompt into your AI tool of choice. Follow the instructions in each file to provide the necessary context. Review the output critically — these prompts are diagnostic tools, not answer generators.

See [docs/responsible-ai-use.md](../docs/responsible-ai-use.md) for guidance on using AI tools ethically in a job search.
`,wd=`---
title: Growth Signal Self-Diagnostic
version: 1.0
status: draft
category: coaching
tags:
  - coaching
  - 1on1
  - self-assessment
  - growth
  - signal-stack
  - ai-prompt
  - career-signal-intelligence
---

# Prompt: Growth Signal Self-Diagnostic

## Purpose

Diagnose the strength of your career signal using the 4-part coaching lens from the Invisible Signals coaching framework.

This prompt evaluates not whether you have been busy, but whether your recent work communicates real ownership, problem-solving depth, boundary clarity, and visible impact.

Use it before a 1:1 with your manager, during performance review prep, or when assessing your readiness for the next level.

This is not a self-promotion tool. It is a signal audit.

---

## Best used with

This prompt works best when you provide:

- A summary of your recent work (last 30–90 days)
- Your current level and title
- Your target level or growth goal
- The type of role you are in (IC, tech lead, engineering manager, director+)
- Optional: recent feedback, performance review comments, or promotion case context

---

## How to use this prompt

Paste the setup prompt into an AI tool. Replace the bracketed placeholders with your actual context.

Use it as a diagnostic before a 1:1 with your manager, before writing a self-review, or before building a promotion packet.

---

## Prompt

\`\`\`text
I want to audit the strength of my career signal using the 4-part coaching lens below.

Use a direct, honest, and constructive tone. Do not flatter me. Do not be harsh for effect. Be specific and actionable.

Do not invent details, outcomes, or contributions. If evidence is missing, identify the gap and ask a targeted question to uncover truthful evidence.

## My context

Recent work summary (last 30–90 days):
[DESCRIBE WHAT YOU HAVE BEEN WORKING ON]

Current level and title:
[PASTE CURRENT LEVEL / TITLE]

Target level or growth goal:
[PASTE TARGET LEVEL OR DESCRIBE YOUR GROWTH GOAL]

Role type:
[IC / tech lead / engineering manager / director+ / career changer / other]

Optional context:
[FEEDBACK, PERFORMANCE REVIEW COMMENTS, PROMOTION CASE CONTEXT, OR OTHER RELEVANT NOTES]

## The 4-part coaching lens

Evaluate my recent work against each of these four dimensions:

1. **Proof of ownership** — What am I truly driving end-to-end, not just coordinating?
2. **Problem-solving depth** — Where did I personally reduce ambiguity or unblock something hard?
3. **Boundary clarity** — What do I own, and what am I absorbing that should belong to someone else?
4. **Visible signal** — What artifact, outcome, or decision shows my impact clearly and honestly?

## Calibration rules

Calibrate the review based on:

- my current level and target level
- my role type
- the specific work I described

Do not evaluate every candidate against the same standard.

For example:

- For senior IC roles, look for ownership, execution reliability, technical judgment, and independent delivery.
- For tech lead roles, look for influence, cross-team coordination, system-level thinking, and team enablement.
- For engineering manager roles, look for people leadership, coaching patterns, prioritization, and team outcomes.
- For director+ roles, look for portfolio judgment, org-level outcomes, and business alignment.

When making observations, separate:

- Evidence — what is directly present in the work I described
- Inference — what a senior leader may reasonably assume
- Confidence — high, medium, or low

Do not present inference as fact.

## Return the analysis in this structure

### 1. Proof of Ownership

Identify what I am genuinely driving end-to-end.

Flag any work that sounds like coordination, facilitation, or support without clear delivery accountability.

Include:
- What ownership signal is visible
- Where ownership is weak, ambiguous, or missing
- A recovery question to surface additional truthful evidence

### 2. Problem-Solving Depth

Identify where I personally reduced ambiguity, unblocked something hard, or demonstrated technical judgment.

Flag any patterns where I am reporting problems rather than solving them.

Include:
- What problem-solving signal is visible
- Where depth is shallow or missing
- A recovery question to surface additional evidence

### 3. Boundary Clarity

Identify what I own clearly and what I may be absorbing from others without explicit accountability.

Flag any patterns where helpfulness is obscuring ownership.

Include:
- What boundary clarity signal is visible
- Where boundaries are ambiguous or missing
- A recovery question to surface additional evidence

### 4. Visible Signal

Identify what artifacts, outcomes, or decisions from my recent work are legible to someone who only has this evidence.

Flag any contributions that require extensive explanation to sound significant.

Include:
- What visible signal is present
- What signal is missing or hard to read
- A recovery question to generate stronger evidence

### 5. Signal Stack™ Coverage

Map my recent work to the Signal Stack™ layers it provides evidence for:

1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product and Business Judgment
6. Collaboration and Influence
7. Strategic Thinking
8. Leadership Maturity

For each relevant layer, include:
- visible evidence
- likely inference
- confidence
- signal strength

Identify which layers are weak or missing relative to my target level.

### 6. Level Readiness Assessment

Based on my work and the 4-part lens, evaluate:

- Whether my current work pattern is building signal toward my target level
- What the clearest gap is between my current signal and the target level
- Whether the work I described is producing the right kind of evidence for where I want to go

### 7. Top 3 Coaching Actions

Give the three highest-impact actions I should take in the next 30–60 days to strengthen my signal.

For each action:
- why it matters
- what signal it builds
- what to do specifically
\`\`\`

---

## What to do with the output

- Use weak ownership signals to identify a proof-point project to take on.
- Use boundary clarity gaps to start a conversation about scope and DRI assignment.
- Use problem-solving depth gaps to find one active blocker and convert it into a recommendation.
- Use visible signal gaps to create one artifact — a decision doc, a risk summary, a retrospective — before your next 1:1.

## Responsible AI note

Use this prompt to communicate real experience more clearly.

Do not use it to invent contributions, fabricate ownership, or build a narrative that outpaces what the evidence actually supports.

If the diagnostic exposes a weak signal, the right response is to create real work that closes the gap — not to reframe the same weak evidence more favorably.

## Related frameworks

- [1:1 Coaching Overview](../../frameworks/1on1-coaching/overview.md)
- [Signal Stack™](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,kd=`---
title: Behavioral Answer Diagnostic
version: 1.0
status: active
category: interview
tags:
  - interview
  - behavioral
  - star
  - signal-stack
  - ai-prompt
  - career-signal-intelligence
---

# Prompt: Behavioral Answer Diagnostic

## Purpose

Diagnose the signal quality of a behavioral interview answer.

This prompt evaluates not only whether the answer follows a structure like STAR, but what it communicates about capability, judgment, ownership, communication, and role-level readiness.

The goal is to identify whether the answer is the right story, whether it addresses the interviewer’s likely intent, and whether it provides enough evidence to be credible under follow-up.

This is not answer polishing. It is signal testing.

---

## Best used with

This prompt works best when you provide:

- The behavioral question
- Your current answer
- The role you are interviewing for
- Your current level
- Your target level
- The role type
- Optional job description excerpt or key requirements
- Optional career context, such as layoff, promotion target, career transition, industry pivot, IC-to-manager transition, manager-to-IC transition, or return from career break

---

## How to use this prompt

Paste the setup prompt into an AI tool. Replace the bracketed placeholders with your actual content.

Use it on one behavioral answer at a time.

After revising multiple stories, use the **Cross-Story Pattern Mode** prompt at the bottom to identify patterns across your full interview story portfolio.

---

## Prompt

\`\`\`text
I am preparing a behavioral answer for an interview.

I want you to diagnose the signal quality of my answer — not just whether it follows STAR, but what it actually communicates about my capabilities, judgment, ownership, communication, and role fit.

This is not answer polishing. It is signal testing.

Use a direct but constructive tone. Be honest, specific, and actionable. Do not flatter me, but do not be harsh for effect.

Do not invent details, metrics, decisions, responsibilities, conflict, scope, business outcomes, customer impact, technical depth, team size, or leadership authority.

If evidence is missing, identify the gap and ask targeted questions to uncover truthful evidence.

## Context

Behavioral question:
[PASTE BEHAVIORAL QUESTION]

Current answer:
[PASTE YOUR ANSWER]

Current level/title:
[PASTE CURRENT LEVEL / TITLE]

Target level/title:
[PASTE TARGET LEVEL / TITLE]

Role type:
[senior IC / staff IC / principal IC / engineering manager / director+ / mobile engineer / platform engineer / data engineer / career changer / returning-to-work candidate / other]

Role / job description excerpt:
[PASTE ROLE TITLE, KEY REQUIREMENTS, OR JOB DESCRIPTION EXCERPT]

Relevant career context:
[OPTIONAL CONTEXT — layoff, promotion target, career transition, industry pivot, IC-to-manager transition, manager-to-IC transition, return from career break, etc.]

## Calibration Rules

Calibrate the review based on:

- the behavioral question
- current level
- target level
- role type
- role requirements
- career context, if provided

Do not evaluate every candidate against the same standard.

For example:

- For senior IC roles, look for ownership, execution reliability, technical judgment, and independent delivery.
- For staff/principal IC roles, look for influence, ambiguity navigation, architecture or systems thinking, tradeoffs, and cross-team impact.
- For engineering manager roles, look for people leadership, coaching, prioritization, delivery systems, stakeholder management, and team outcomes.
- For director+ roles, look for portfolio judgment, operating cadence, org-level outcomes, executive communication, business alignment, and talent-system thinking.
- For career changers or returning-to-work candidates, look for transferability, learning velocity, self-awareness, and credible readiness.

When making observations, separate:

- Evidence — what is directly present in the answer
- Inference — what an interviewer may reasonably assume
- Confidence — high, medium, or low

Do not present inference as fact.

For each issue, classify severity:

- High — likely to reduce confidence for this role or level
- Medium — weakens the answer but may be fixable with better evidence or structure
- Low — clarity, phrasing, or polish issue

## Signal Stack™

Evaluate the answer using the Signal Stack™ when relevant:

1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product and Business Judgment
6. Collaboration and Influence
7. Strategic Thinking
8. Leadership Maturity

## Return the analysis in this structure

### 1. Question Intent Detection

Identify what the interviewer is likely trying to assess with this behavioral question.

Classify the question as primarily probing one or more of:

- ownership
- conflict
- failure / learning
- ambiguity
- leadership
- stakeholder management
- technical judgment
- prioritization
- communication
- execution under pressure
- collaboration and influence
- product or business judgment

Then explain whether the answer actually addresses that intent.

### 2. Story Fit

Classify whether this is the right story for the question:

- Strong fit — directly answers the likely intent
- Partial fit — usable, but missing important signal
- Weak fit — structurally okay, but the story does not strongly support the question
- Poor fit — does not answer the question being asked

If the story is a weak or poor fit, explain what kind of story would send a stronger signal.

### 3. STAR Completeness

Evaluate whether the answer includes:

- Situation
- Task
- Action
- Result

Flag any component that is missing, underspecified, overexplained, or buried.

Also identify whether the answer needs a brief reflection or lesson learned, especially for questions about failure, conflict, ambiguity, or growth.

### 4. Ownership Clarity

Evaluate whether the answer makes the candidate’s individual contribution clear.

Look for:

- overuse of “we,” “the team,” or passive phrasing
- unclear decision ownership
- vague contribution language
- hidden dependency on others
- inflated ownership claims
- missing explanation of what the candidate personally did

Count or estimate the balance between first-person singular language and collective language.

If collective language dominates, flag the sentences and suggest how to clarify individual contribution without misrepresenting the team context.

### 5. Outcome Quality

Evaluate whether the result is specific, measurable, or observable.

Flag vague outcomes such as:

- “the project was successful”
- “the team responded well”
- “stakeholders were happy”
- “we improved the process”
- “it went well”
- “we delivered value”

If there is no quantified result, identify what type of evidence would strengthen the answer, such as:

- metric change
- before/after comparison
- adoption
- reduced risk
- faster delivery
- improved reliability
- better customer experience
- stakeholder decision
- team behavior change
- operational improvement

Do not invent the result.

### 6. Signal Stack™ Mapping

Identify which Signal Stack™ layers the answer provides evidence for.

For each relevant layer, include:

- visible evidence
- likely inference
- confidence
- strength of signal
- what would make the signal stronger

Also identify which Signal Stack™ layer the question was most likely designed to probe, and whether the answer actually supports that layer.

### 7. Role and Level Relevance

Evaluate whether the answer fits the role requirements and target level.

Call out if the answer:

- sounds underleveled for the target role
- over-indexes on task execution
- lacks decision-making evidence
- lacks strategic or business context
- lacks people, influence, or stakeholder complexity
- uses an example with too little scope
- is too abstract and lacks grounded detail
- proves a strength that is not central to this role

Explain whether this answer should be strengthened, reframed, or replaced.

### 8. Risk Signals

Flag any language or content that may unintentionally send a negative signal, including:

- blaming others
- hedging on personal contribution
- excessive defensiveness
- outcomes that sound like luck instead of skill
- lack of accountability
- weak conflict handling
- shallow reflection
- inflated scope
- unsupported seniority claims
- unclear role in the outcome
- examples inconsistent with the target level

For each risk, include:

- severity
- evidence
- likely inference
- confidence
- recommended fix

### 9. Claim Defensibility

Identify claims in the answer that may be hard to defend under follow-up questioning.

For each claim, include:

- the claim
- why it may be vulnerable
- what evidence would make it stronger
- a likely follow-up question an interviewer may ask

Pay special attention to claims involving:

- leadership
- ownership
- conflict resolution
- strategy
- influence
- technical judgment
- measurable impact
- decision-making authority

### 10. Rewrite Guidance

Do not automatically produce a full polished answer.

First provide a stronger answer outline using STAR or CAR:

- Situation / Context
- Task / Challenge
- Action
- Result
- Reflection / Learning, if relevant

Only provide a full rewritten answer if the original answer contains enough evidence to do so truthfully.

If evidence is missing, provide:

- improved outline
- missing evidence
- targeted questions the candidate should answer before rewriting

Do not invent facts.

### 11. Top 3 Improvements

Give the three highest-impact improvements to strengthen this answer.

For each, include:

- why it matters
- what signal it improves
- what to change
- whether the story should be revised or replaced
\`\`\`

---

## Cross-Story Pattern Mode

Use this after you have run several behavioral answers through the diagnostic.

\`\`\`text
I have now shared [N] behavioral stories.

Analyze patterns across them as a behavioral interview story portfolio.

Identify:

- repeated weak Signal Stack™ layers
- overused examples
- missing conflict, failure, ambiguity, or leadership stories
- too much “we” language across answers
- lack of measurable or observable outcomes
- stories that all prove the same strength but leave other signals uncovered
- target-level gaps
- stories that are too tactical for the role level
- stories that are too abstract and lack grounded detail

Then recommend:

1. Which stories to keep
2. Which stories to revise
3. Which stories to replace
4. What additional story types I should prepare
5. The top three patterns I should fix before the interview loop
\`\`\`

---

## What to do with the output

- Fix the story intent before polishing the wording.
- Strengthen ownership language without erasing team context.
- Add measurable or observable outcomes where truthful evidence exists.
- Replace stories that are structurally fine but weak for the question.
- Prepare follow-up answers for any claim that may be challenged.
- Run multiple stories through the diagnostic before an onsite.

## Responsible AI note

Use this prompt to communicate real experience more clearly.

Do not use it to invent stories, fabricate ownership, exaggerate impact, claim false leadership scope, or rehearse misleading answers.

If the diagnostic exposes a weak claim, recover truthful evidence or reframe the story honestly.

## Related frameworks

- [Onsite](../../frameworks/hiring-funnel/onsite.md)
- [Hiring Manager Screen](../../frameworks/hiring-funnel/hiring-manager-screen.md)
- [Signal Stack™](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,Sd=`---
title: Skeptical Hiring Manager
version: 1.0
status: active
category: interview
tags:
  - interview
  - behavioral
  - hiring-manager
  - ai-prompt
  - career-signal-intelligence
---

# Prompt: Skeptical Hiring Manager

## Purpose

Practice answering hiring manager questions under realistic pressure.

This prompt instructs the AI to behave as an experienced hiring manager who does not accept vague answers, unsupported claims, or polished responses that lack substance.

The goal is not to rattle you. The goal is to surface where your answers break down before they break down in the actual interview.

This is not performance theater. It is signal testing.

---

## Best used with

This prompt works best when you provide:

- A real job description
- The target role and level
- Your current level
- The role type
- Optional résumé or background summary
- Any relevant career context, such as layoff, promotion target, career transition, industry pivot, IC-to-manager transition, or manager-to-IC transition

---

## How to use this prompt

Paste the setup prompt into an AI tool. Replace the bracketed placeholders.

Then respond as you would in the actual interview.

The AI should ask one question at a time. After each answer, it may probe further or move to the next question.

When you are ready to end the simulation, say:

> **Debrief**

The AI will exit the roleplay and give structured feedback.

---

## Prompt

\`\`\`text
You are an experienced hiring manager conducting a realistic 30-minute screen.

You are evaluating whether the candidate can actually do the work for the target role and level — not whether they can give polished answers.

Use realistic hiring manager pressure. Do not roleplay as unusually friendly or unusually harsh. Be direct, professional, skeptical, and fair.

Do not be hostile. Do not try to intimidate the candidate. Your job is to test clarity, evidence, judgment, ownership, and role fit.

## Candidate and Role Context

Candidate current level/title:
[PASTE CURRENT LEVEL / TITLE]

Target role/title:
[PASTE TARGET ROLE / TITLE]

Target level:
[PASTE TARGET LEVEL]

Role type:
[senior IC / staff IC / principal IC / engineering manager / director+ / mobile engineer / platform engineer / data engineer / career changer / returning-to-work candidate / other]

Company type or stage:
[PASTE COMPANY TYPE OR STAGE — e.g., Series B startup, large enterprise, nonprofit, agency, regulated industry]

Relevant career context:
[OPTIONAL CONTEXT — layoff, promotion target, career transition, industry pivot, IC-to-manager transition, manager-to-IC transition, return from career break, etc.]

Candidate résumé or background summary:
[PASTE RÉSUMÉ OR SUMMARY — OPTIONAL]

Job description:
[PASTE JOB DESCRIPTION]

## Calibration Rules

Calibrate your questions and follow-ups based on:

- candidate current level
- target level
- role type
- company type or stage
- job description
- résumé or background summary, if provided
- career context, if provided

Do not evaluate every candidate against the same standard.

For example:

- For senior IC roles, push on ownership, execution reliability, technical judgment, and ability to deliver independently.
- For staff/principal IC roles, push on architecture, influence, ambiguity, tradeoffs, cross-team leadership, and strategic judgment.
- For engineering manager roles, push on people leadership, delivery systems, coaching, prioritization, stakeholder management, and team outcomes.
- For director+ roles, push on portfolio ownership, org design, talent systems, operating cadence, executive communication, business alignment, and cross-functional outcomes.
- For career changers or returning-to-work candidates, evaluate transferability, learning velocity, evidence of readiness, and ability to explain the transition clearly.

If a résumé or background summary is provided, use it to tailor follow-up questions and test whether the candidate can defend the claims they have already made on paper.

If no résumé is provided, rely on the job description, target role, and candidate answers.

## What You Are Watching For

Watch for:

- claims without evidence
- vague ownership language such as “we did,” “the team built,” or “I was involved in”
- answers that sound rehearsed but collapse under follow-up
- missing context that would change how the experience should be interpreted
- activity descriptions without outcomes
- outcomes without measurement or observable impact
- over-claiming or inflated scope
- weak tradeoff reasoning
- unclear decision ownership
- lack of role-level alignment
- examples that do not support the target level
- answers that avoid conflict, ambiguity, failure, or lessons learned

## Interview Behavior

Ask one question at a time.

Start with:

“Tell me about yourself — specifically what makes you a strong fit for this role.”

After each answer:

- Ask a follow-up if the answer is vague, generic, overly polished, or unsupported.
- When the candidate says “we,” ask what they personally did.
- When the candidate describes an outcome, ask how it was measured.
- When the candidate describes success, ask what almost went wrong.
- When the candidate claims ownership, ask what decisions they made.
- When the candidate claims leadership, ask who they influenced and what changed.
- When the candidate describes a technical solution, ask about tradeoffs, constraints, and alternatives.
- When the candidate describes collaboration, ask where there was disagreement or tension.
- When the candidate describes impact, ask why it mattered to the business, customer, product, team, or organization.
- When the candidate gives a surface-level answer, ask them to walk through a specific example.

Do not let weak answers pass.

Do not ask multiple questions at once.

After the candidate finishes an answer and any needed follow-up, ask:

“Ready for the next question?”

Proceed through at least four additional questions relevant to the role, level, and job description.

## Debrief Trigger

When the candidate says “debrief,” stop the roleplay immediately.

Do not ask more interview questions after the debrief trigger.

## Debrief Instructions

Give direct, structured feedback.

Evaluate both interview performance and Signal Stack™ coverage.

The Signal Stack™ layers are:

1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product and Business Judgment
6. Collaboration and Influence
7. Strategic Thinking
8. Leadership Maturity

Use this debrief structure:

### 1. Overall Signal Read

Summarize the overall impression the candidate created.

Be specific about whether the answers increased or decreased confidence for the target role and level.

### 2. Strongest Signals

Identify where the candidate was strongest and why.

Tie feedback to specific answers, language, examples, or patterns.

### 3. Weakest Signals

Identify where the candidate was weak, vague, underleveled, or unconvincing.

Call out patterns such as:

- ownership diffusion
- activity framing
- unsupported claims
- missing metrics
- unclear tradeoffs
- lack of specificity
- rambling
- over-polished but low-evidence answers
- examples that do not match the target level

### 4. Signal Stack™ Coverage

For each relevant Signal Stack™ layer, identify:

- strong signals
- weak or missing signals
- claims that need better evidence
- follow-up questions the candidate should be prepared to answer

If a layer is not relevant to this role, say so briefly.

### 5. Claim Defensibility

Identify claims the candidate made that may be difficult to defend in a real interview.

For each claim, include:

- the claim
- why it may be vulnerable
- what evidence would make it stronger
- a follow-up question likely to expose the gap

### 6. Language Patterns to Fix

Identify specific language patterns that weakened the candidate’s signal.

Examples:

- too much “we”
- vague verbs
- passive language
- excessive setup
- unclear ownership
- missing business context
- unsupported seniority claims
- generic leadership language

Suggest stronger patterns without inventing facts.

### 7. Next Practice Plan

End the debrief with:

- 2 answer patterns to fix
- 2 stories to strengthen
- 2 follow-up questions to rehearse
- 1 thing to stop doing immediately

Do not flatter. Do not discourage. Be direct, fair, and useful.
\`\`\`

---

## What to do with the output

- Note every question where you hesitated, hedged, rambled, or defaulted to “we.”
- Rewrite weak answers using a clear structure before the real interview.
- Strengthen stories where the example does not match the target level.
- Prepare evidence for claims around ownership, leadership, technical judgment, influence, and outcomes.
- Run the simulation again after improving your answers.

## Responsible AI note

Use this prompt to practice communicating real experience clearly.

Do not use it to invent stories, fabricate ownership, claim technologies you have not used, or rehearse misleading answers.

If the simulation exposes a weak claim, strengthen the underlying evidence or reframe the story truthfully.

## Related frameworks

- [Hiring Manager Screen](../../frameworks/hiring-funnel/hiring-manager-screen.md)
- [Onsite](../../frameworks/hiring-funnel/onsite.md)
- [Signal Stack™](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,bd=`---
title: Résumé Signal Analysis
version: 1.0
status: active
category: resume
tags:
  - resume
  - signal-stack
  - job-search
  - ai-prompt
  - career-signal-intelligence
---

# Prompt: Résumé Signal Analysis

## Purpose

Analyze what signals a résumé sends — visible and invisible — for a specific role, level, and career context.

This is not a formatting review. It is a signal audit focused on evidence, credibility, role alignment, and defensibility.

## Best used with

Provide:

- A real job description
- Your résumé
- Your current level
- Your target level
- Role type
- Optional career context, such as layoff, promotion target, career transition, industry pivot, return from break, IC-to-manager transition, or manager-to-IC transition

## Privacy warning

Before using this prompt, remove or redact sensitive personal, employer, client, compensation, immigration, security, customer, or confidential project information.

The goal is to analyze career signals, not expose private information.

---

## Prompt

\`\`\`text
I am going to share my résumé, a job description, and role context.

Analyze the signals my résumé sends — both visible evidence and reasonable invisible inferences — for the target role.

This is not a formatting review. It is a signal audit.

Use a direct but constructive tone. Be honest, specific, and actionable. Do not flatter me, but do not be harsh for effect.

Do not invent metrics, responsibilities, technologies, leadership scope, business outcomes, team size, budget ownership, revenue impact, performance improvements, or customer impact.

If evidence is missing, identify the gap and ask targeted questions to uncover truthful evidence.

## Context

Current level/title:
[PASTE CURRENT LEVEL / TITLE]

Target level/title:
[PASTE TARGET LEVEL / TITLE]

Role type:
[software engineer / senior IC / staff IC / principal IC / engineering manager / director+ / mobile engineer / platform engineer / data engineer / career changer / returning-to-work candidate / other]

Relevant career context:
[OPTIONAL CONTEXT]

Job description:
[PASTE JOB DESCRIPTION]

Résumé:
[PASTE RÉSUMÉ]

## Calibration Rules

Calibrate the review based on current level, target level, role type, career context, and job description.

Do not evaluate every candidate against the same standard.

Separate:
- Evidence — what is directly visible
- Inference — what a reviewer may reasonably assume
- Confidence — high, medium, or low

For each issue, label severity:
- High — likely to create doubt or reduce interview chances
- Medium — weakens the résumé but may not be disqualifying
- Low — cleanup, clarity, or polish issue

For Signal Stack™ coverage, use:
- Strong
- Moderate
- Weak
- Missing

Signal Stack™ layers:
1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product and Business Judgment
6. Collaboration and Influence
7. Strategic Thinking
8. Leadership Maturity

## Return the analysis in this structure

### 1. Context Calibration
Summarize how you are calibrating the review. Note assumptions, especially if the target level is unclear.

### 2. Trajectory Read
Explain what story the résumé tells based on titles, tenure, scope, progression, gaps, transitions, and target-level alignment.

### 3. Signal Hierarchy
Evaluate whether the strongest role-relevant evidence appears early enough. Identify buried strengths, weak content taking premium space, and ordering changes that would improve the signal read.

### 4. Signal Stack™ Coverage
For each Signal Stack™ layer, provide:
- rating
- visible evidence
- likely inference
- confidence
- stronger evidence needed for this role

### 5. Role-Level Mismatch
Identify where the résumé’s evidence appears below, aligned with, or above the target level. Explain what the résumé currently signals, what the target level likely requires, and what evidence would strengthen alignment.

### 6. Ownership Audit
Classify bullets as:
- Activity-based — describes what I did
- Outcome-based — describes the result
- Impact-based — describes the result and its significance

Flag activity-based bullets.

Do not rewrite weak bullets when evidence is missing. First identify missing evidence and ask evidence recovery questions.

When enough evidence exists, suggest rewrites using:
Accomplished [X] as measured by [Y] by doing [Z].

Do not invent X, Y, or Z.

### 7. Tailoring Gap
Identify job description requirements not reflected in the résumé.

Distinguish:
- Missing keyword — term, tool, domain, competency, or responsibility is absent
- Missing proof — term is present but credible evidence is weak or missing

Do not treat keyword presence as sufficient evidence.

### 8. Risk Signals
Identify anything that may create concern, confusion, or scrutiny, including unclear progression, short tenures, gaps, inflated language, title/scope mismatch, excessive task detail, weak impact, outdated emphasis, or unsupported leadership claims.

For each risk, include:
- severity
- evidence
- inference
- confidence
- recommended next step: résumé fix, interview prep, or both

### 9. Claim Defensibility
Identify claims that may be hard to defend in an interview, such as “led,” “owned,” “architected,” “improved,” “strategic,” “cross-functional,” “mentored,” or “drove” without enough evidence.

For each, explain:
- claim being made
- why evidence may be insufficient
- interview question that could expose the gap
- truthful evidence that would strengthen the claim

### 10. De-emphasis Review
Identify content that should be removed, compressed, moved lower, or reframed because it does not improve signal quality for the target role.

### 11. AI Misuse Risks
Flag where an AI rewrite could become misleading, inflated, generic, unnatural, keyword-stuffed, or inconsistent with the likely interview story. Explain how to keep the language truthful and defensible.

### 12. Evidence Recovery Questions
Ask targeted questions for weak, missing, or underdeveloped signals. Group questions by résumé section or signal area.

### 13. Targeted Rewrite Mode
Only provide rewrites where enough evidence exists.

For each rewrite candidate, show:
- original bullet
- weak/missing signal
- evidence needed
- suggested rewrite, if defensible
- why it improves signal quality

If evidence is missing, provide a rewrite pattern and questions instead of a final bullet.

### 14. Top 3 Signal Improvements
Give the three highest-impact changes to improve résumé signal quality for this role. For each, include why it matters, what signal it improves, where to apply it, and whether it is a résumé fix, interview prep item, or both.
\`\`\`

---

## What to do with the output

- Rewrite bullets only after recovering truthful evidence.
- Address tailoring gaps for each role.
- Use the Signal Stack™ map to decide what to add, remove, compress, or elevate.
- Prepare interview stories for any claim or trajectory concern that cannot be fully resolved on the résumé.

## Market context warning

This prompt analyzes résumé signal quality. It does not explain every hiring outcome.

Market conditions, layoffs, applicant volume, referrals, location, compensation, sponsorship, timing, recruiter capacity, internal candidates, and interview performance can all affect results.

## Important note

This prompt provides a résumé signal audit, not a guarantee of interviews, offers, or hiring outcomes.

## Related frameworks

- [Résumé Review](../../frameworks/hiring-funnel/resume-review.md)
- [Signal Stack™](../../docs/signal-stack.md)<br>
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,_h=Object.assign({"../../../prompts/README.md":xd,"../../../prompts/coaching/growth-signal-self-diagnostic.md":wd,"../../../prompts/interview/behavioral-answer-diagnostic.md":kd,"../../../prompts/interview/skeptical-hiring-manager.md":Sd,"../../../prompts/resume/resume-signal-analysis.md":bd});function Ed(e){var s;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(o,l,u)=>{r[l]=u.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Nd(e,n){const t=Ed(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---)/m),i=r?r[1].split(`

`)[0].trim():"",s=n.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/),o=s?s[1].trim():"",l=e.split("/").pop().replace(".md","");return{id:l,title:t.title||l,category:t.category||"general",tags:t.tags||[],purpose:i,text:o}}const Dl=["resume","interview"],Ph=Object.entries(_h).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>Nd(e,n)).sort((e,n)=>{const t=Dl.indexOf(e.category),r=Dl.indexOf(n.category);return t!==r?(t===-1?99:t)-(r===-1?99:r):e.id.localeCompare(n.id)});function Ah({text:e}){const[n,t]=k.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return a.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(hd,{size:12}):a.jsx(gd,{size:12}),n?"COPIED":"COPY_PROMPT"]})}function Oh(){return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_02_PROMPTS"}),a.jsx(Fe,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content."})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:Ph.map(({id:e,title:n,purpose:t,tags:r,text:i},s)=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(s+1).padStart(2,"0")," // ",n.toUpperCase()]}),a.jsx(Fe,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx(Ah,{text:i})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[a.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROMPT_BODY"}),a.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto",children:i})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:t})]}),r.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(o=>a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim",children:o.toUpperCase().replace(/-/g,"_")},o))})]})]})]})]},e))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-2xl",children:[a.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," These prompts are not designed to help candidates game interviews. They are designed to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity, not fabricate competence."]})})]})}const Cd=`# templates/

Reusable templates for self-assessment and career signal work.

## Contents

| File | Description |
|---|---|
| [signal-scorecard.md](signal-scorecard.md) | A self-assessment tool for evaluating the strength, clarity, and credibility of the signals you send during career moments |

## Usage

Templates are designed to be copied and filled in for your own situation. They work alongside the prompts and frameworks in this repository — not as standalone tools.
`,jd=`---
title: Signal Scorecard
version: 1.0
status: draft
category: template
tags:
  - signal-scorecard
  - career-signal-intelligence
  - resume
  - interviews
  - leadership
  - career-growth
  - self-assessment
---

# Signal Scorecard

## Purpose

The Signal Scorecard helps software engineers and technical leaders evaluate the strength, clarity, and credibility of the signals they send during career moments.

Use it to assess:

- résumés
- interviews
- networking conversations
- promotion packets
- performance reviews
- leadership updates
- career transition narratives
- internal mobility conversations

This is not a personality test.

This is not a confidence exercise.

This is a signal audit.

The goal is to identify what your communication makes visible, what it leaves ambiguous, and what someone may reasonably infer about your capability, judgment, ownership, and leadership maturity.

---

# Core Principle

Every career interaction sends signals.

Some are obvious.

Some are invisible.

Strong candidates do not only have strong experience.

They know how to make the right evidence easy to see, understand, and trust.

Weak signal quality does not always mean weak capability.

Sometimes it means the evidence is buried, vague, generic, inflated, or disconnected from the role you are pursuing.

This scorecard helps close that gap.

---

# How to Use This Scorecard

Use this template before or after any important career moment.

## Best used for

- Reviewing a résumé before applying
- Diagnosing an interview answer
- Preparing for a promotion conversation
- Clarifying your leadership narrative
- Evaluating whether your experience matches a target role
- Identifying where AI-generated content may have weakened trust
- Preparing for recruiter, hiring manager, or executive conversations

## Recommended workflow

1. Define the career context.
2. Score each signal area.
3. Capture evidence.
4. Identify weak or missing signals.
5. Rewrite, rehearse, or recover evidence.
6. Re-score after improvements.

Do not use this scorecard to invent experience.

Use it to communicate truthful experience with more clarity.

---

# Context

Complete this section first.

\`\`\`text
Current role/title:
[PASTE CURRENT ROLE]

Current level:
[PASTE CURRENT LEVEL IF KNOWN]

Target role/title:
[PASTE TARGET ROLE]

Target level:
[PASTE TARGET LEVEL IF KNOWN]

Career context:
[layoff / job search / promotion / internal transfer / leadership growth / manager transition / IC transition / career pivot / returning from break / other]

Artifact or conversation being assessed:
[résumé / interview answer / LinkedIn profile / networking intro / promotion packet / leadership update / other]

Audience:
[recruiter / hiring manager / interview panel / skip-level leader / executive / peer / sponsor / mentor / other]

Role or opportunity description:
[PASTE JOB DESCRIPTION, PROMOTION CRITERIA, OR CONTEXT]
\`\`\`

---

# Scoring Scale

Use the same scoring standard across all sections.

| Score | Rating | Meaning |
|---:|---|---|
| 0 | Missing | No visible evidence |
| 1 | Weak | Evidence exists but is vague, generic, buried, or low-confidence |
| 2 | Moderate | Evidence is present and mostly clear, but not yet compelling |
| 3 | Strong | Evidence is clear, specific, relevant, and defensible |
| 4 | Excellent | Evidence is role-aligned, differentiated, credible, and memorable |

## Confidence

For each score, also assign confidence.

| Confidence | Meaning |
|---|---|
| High | Evidence is explicit and easy to validate |
| Medium | Evidence is present but needs clarification |
| Low | Evidence depends heavily on assumption or interpretation |

---

# Signal Summary

Use this table for a fast read.

| Signal Area | Score 0-4 | Confidence | Visible Evidence | Likely Inference | Improvement Needed |
|---|---:|---|---|---|---|
| Technical Capability |  |  |  |  |  |
| Execution Reliability |  |  |  |  |  |
| Ownership |  |  |  |  |  |
| Communication |  |  |  |  |  |
| Product & Business Judgment |  |  |  |  |  |
| Collaboration & Influence |  |  |  |  |  |
| Strategic Thinking |  |  |  |  |  |
| Leadership Maturity |  |  |  |  |  |
| Trust & Defensibility |  |  |  |  |  |

---

# 1. Technical Capability

## What this signal answers

Can this person do the technical work required at the target level?

## Strong evidence may include

- specific systems, platforms, or products built
- technical complexity
- architecture decisions
- debugging or incident resolution
- performance, reliability, scalability, or quality improvements
- depth in relevant tools, languages, frameworks, or domains
- technical tradeoffs and constraints

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 2. Execution Reliability

## What this signal answers

Can this person deliver consistently, especially when work is complex, ambiguous, or cross-functional?

## Strong evidence may include

- delivery of important initiatives
- improved predictability
- reduced incidents or defects
- successful launches
- managing dependencies
- unblocking teams
- handling production constraints
- improving operational discipline

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 3. Ownership

## What this signal answers

Does this person take responsibility for outcomes, decisions, and follow-through?

## Strong evidence may include

- clear “I owned” moments
- decision-making authority
- accountability for outcomes
- initiative without waiting for instructions
- problem discovery, not just task execution
- responsibility across the full lifecycle
- measurable results tied to personal contribution

## Weak ownership signals

Watch for overuse of:

- “worked on”
- “helped with”
- “participated in”
- “involved in”
- “responsible for”
- “supported”
- “contributed to”

These phrases are not always wrong.

But they often blur the difference between participation and ownership.

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 4. Communication

## What this signal answers

Can this person make complex work understandable, align people, and communicate with the right level of clarity?

## Strong evidence may include

- simplifying complex technical topics
- communicating tradeoffs
- writing proposals, RFCs, design docs, or decision records
- aligning stakeholders
- improving team visibility
- creating shared language
- presenting to leadership, customers, or cross-functional partners

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 5. Product & Business Judgment

## What this signal answers

Does this person understand why the work matters beyond the code?

## Strong evidence may include

- customer impact
- revenue, cost, risk, compliance, reliability, or growth impact
- prioritization decisions
- tradeoff analysis
- product partnership
- connecting engineering work to business outcomes
- reducing operational or customer pain

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 6. Collaboration & Influence

## What this signal answers

Can this person get meaningful work done with and through others?

## Strong evidence may include

- cross-team delivery
- stakeholder alignment
- mentoring
- technical influence without authority
- partnership with product, design, data, security, operations, or business teams
- resolving misalignment
- creating standards or practices adopted by others

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 7. Strategic Thinking

## What this signal answers

Can this person see patterns, anticipate consequences, and make choices that improve future outcomes?

## Strong evidence may include

- identifying systemic problems
- shaping roadmaps
- reducing future risk
- improving architecture, process, or operating models
- sequencing work thoughtfully
- making build/buy/borrow decisions
- balancing short-term delivery with long-term sustainability
- creating leverage beyond individual output

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 8. Leadership Maturity

## What this signal answers

Does this person demonstrate judgment, accountability, and maturity appropriate for the target level?

Leadership maturity is not limited to managers.

Senior ICs also need leadership maturity.

## Strong evidence may include

- handling ambiguity
- making tradeoffs
- raising risks early
- mentoring others
- improving team practices
- owning difficult conversations
- navigating conflict
- influencing without drama
- taking responsibility without blame-shifting
- showing calm under pressure

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# 9. Trust & Defensibility

## What this signal answers

Can this person defend the claims they are making?

This is where many AI-assisted career materials fail.

A claim may sound strong but collapse under follow-up questions.

## Strong evidence may include

- specific examples
- clear personal contribution
- believable metrics
- grounded language
- consistency between résumé, LinkedIn, and interview stories
- ability to explain tradeoffs
- ability to distinguish personal ownership from team contribution
- no inflated or unsupported claims

## Claims to inspect closely

Review any use of:

- led
- owned
- drove
- architected
- transformed
- strategic
- cross-functional
- expert
- scaled
- optimized
- mentored
- influenced
- delivered
- improved

These words are allowed.

They just need evidence.

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Evidence

\`\`\`text
What evidence is visible?
[WRITE EVIDENCE HERE]
\`\`\`

## Likely inference

\`\`\`text
What might a reviewer reasonably infer?
[WRITE INFERENCE HERE]
\`\`\`

## Gaps

\`\`\`text
What is missing, vague, or underdeveloped?
[WRITE GAPS HERE]
\`\`\`

## Improvement actions

\`\`\`text
What should be clarified, added, removed, or reframed?
[WRITE ACTIONS HERE]
\`\`\`

---

# Signal Risk Review

Use this section to identify signals that may create doubt, confusion, or unnecessary scrutiny.

| Risk Signal | Severity | Evidence | Likely Inference | Confidence | Recommended Action |
|---|---|---|---|---|---|
| Vague ownership |  |  |  |  |  |
| Weak outcomes |  |  |  |  |  |
| Inflated language |  |  |  |  |  |
| Role-level mismatch |  |  |  |  |  |
| Too much task detail |  |  |  |  |  |
| Missing business context |  |  |  |  |  |
| Unsupported leadership claims |  |  |  |  |  |
| AI-generated tone |  |  |  |  |  |
| Inconsistent career story |  |  |  |  |  |

## Severity scale

| Severity | Meaning |
|---|---|
| High | Likely to reduce trust or hurt selection |
| Medium | Weakens the signal but may be fixable |
| Low | Minor clarity or polish issue |

---

# Role-Level Alignment

Use this section to compare the current signal against the target level.

| Area | Current Signal | Target-Level Expectation | Gap | Action Needed |
|---|---|---|---|---|
| Scope |  |  |  |  |
| Autonomy |  |  |  |  |
| Complexity |  |  |  |  |
| Business Impact |  |  |  |  |
| Technical Depth |  |  |  |  |
| Influence |  |  |  |  |
| Leadership |  |  |  |  |
| Strategic Judgment |  |  |  |  |

---

# Evidence Recovery Questions

Use these questions when the signal is weak but the experience may exist.

## Technical capability

- What was technically hard about the work?
- What constraints made the problem difficult?
- What tradeoffs did you evaluate?
- What would another engineer find non-obvious about the solution?

## Execution reliability

- What did you deliver?
- What was blocked before you got involved?
- What became more predictable, stable, or repeatable?
- What happened because you followed through?

## Ownership

- What were you personally accountable for?
- What decisions did you make or influence?
- Where did you act without waiting to be told?
- What would not have happened without your contribution?

## Communication

- Who needed to understand the work?
- What did you clarify?
- What alignment did you create?
- What documentation, presentation, or narrative helped others move forward?

## Business judgment

- Why did the work matter?
- What customer, revenue, risk, cost, compliance, or operational issue did it affect?
- What tradeoff did you make and why?
- What did the business gain or avoid?

## Collaboration and influence

- Who did you need to bring along?
- What disagreement or ambiguity did you resolve?
- What team, partner, or stakeholder changed direction because of your input?
- What practice, pattern, or decision was adopted by others?

## Strategic thinking

- What pattern did you see before others did?
- What future problem did you prevent?
- What did you simplify, sequence, or systematize?
- What became easier because of your approach?

## Leadership maturity

- Where did you show judgment under pressure?
- What hard conversation did you handle well?
- What risk did you raise early?
- What did you own even when the situation was messy?

## Trust and defensibility

- Can you explain this claim in detail during an interview?
- Can you distinguish your contribution from the team’s contribution?
- Is the metric real, estimated, or unavailable?
- Would your manager, peer, or teammate describe the work the same way?

---

# Score Interpretation

After scoring, calculate your total.

There are 9 signal areas.

Maximum score: 36

| Total Score | Interpretation |
|---:|---|
| 0-10 | Signal is underdeveloped or mostly missing |
| 11-18 | Signal exists but needs major clarification |
| 19-27 | Signal is credible but uneven |
| 28-33 | Signal is strong and role-relevant |
| 34-36 | Signal is excellent, differentiated, and defensible |

## Important note

A high score does not guarantee a job offer, promotion, or interview.

A low score does not mean you lack ability.

The score reflects how clearly and credibly your evidence is currently being communicated.

---

# Top Signal Improvements

Identify the three highest-impact improvements.

| Priority | Signal Area | Current Issue | Improvement | Where to Apply | Expected Effect |
|---:|---|---|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |

---

# Before and After Review

Use this section after improving the artifact or preparing your story.

| Signal Area | Original Score | Updated Score | What Changed |
|---|---:|---:|---|
| Technical Capability |  |  |  |
| Execution Reliability |  |  |  |
| Ownership |  |  |  |
| Communication |  |  |  |
| Product & Business Judgment |  |  |  |
| Collaboration & Influence |  |  |  |
| Strategic Thinking |  |  |  |
| Leadership Maturity |  |  |  |
| Trust & Defensibility |  |  |  |

---

# Example Completed Scorecard

## Context

\`\`\`text
Current role/title:
Senior Software Engineer

Target role/title:
Staff Software Engineer

Career context:
Promotion preparation

Artifact or conversation being assessed:
Promotion packet

Audience:
Engineering leadership and promotion committee

Role or opportunity description:
Staff engineer role requiring cross-team technical leadership, architecture influence, mentorship, and business-aligned execution.
\`\`\`

## Signal Summary

| Signal Area | Score 0-4 | Confidence | Visible Evidence | Likely Inference | Improvement Needed |
|---|---:|---|---|---|---|
| Technical Capability | 4 | High | Designed shared mobile authentication module | Strong technical depth | Add tradeoffs considered |
| Execution Reliability | 3 | Medium | Delivered migration across two teams | Reliable delivery | Add timeline and delivery constraints |
| Ownership | 3 | Medium | Owned technical design and rollout plan | Strong ownership | Clarify decision authority |
| Communication | 2 | Medium | Presented design in architecture review | Can communicate technical ideas | Add stakeholder alignment evidence |
| Product & Business Judgment | 2 | Low | Mentions customer login reliability | Some business awareness | Add business/customer impact |
| Collaboration & Influence | 3 | Medium | Worked with backend and security teams | Cross-functional influence | Clarify conflict or alignment work |
| Strategic Thinking | 2 | Low | Created reusable module | Some leverage thinking | Explain long-term platform value |
| Leadership Maturity | 3 | Medium | Mentored two engineers during rollout | Growing leadership maturity | Add handling of risk or ambiguity |
| Trust & Defensibility | 3 | High | Claims are specific and explainable | Credible story | Avoid overstating “architecture ownership” |

## Top Signal Improvements

| Priority | Signal Area | Current Issue | Improvement | Where to Apply | Expected Effect |
|---:|---|---|---|---|---|
| 1 | Product & Business Judgment | Business impact is implied but not explicit | Add login reliability, customer friction, or support impact | Promotion packet summary | Shows broader judgment |
| 2 | Strategic Thinking | Reuse value is underexplained | Explain how the module reduced duplicated work across teams | Architecture section | Strengthens Staff-level signal |
| 3 | Communication | Alignment work is buried | Add how security/backend concerns were resolved | Leadership examples | Shows influence beyond coding |

---

# AI Use Guidance

AI can help you:

- identify unclear signals
- tighten language
- organize evidence
- ask better recovery questions
- compare your story against a target role
- reduce vague or inflated wording

AI should not:

- invent metrics
- fabricate leadership scope
- exaggerate ownership
- imply authority you did not have
- rewrite your experience into something you cannot defend
- make every bullet sound like a press release

A useful AI-assisted improvement should make the truth clearer.

Not bigger.

Not louder.

Clearer.

---

# Final Check

Before using the improved artifact or story, ask:

\`\`\`text
Can I defend every claim?
Is my specific contribution clear?
Is the impact real?
Is the language credible for my level?
Would this still sound true in a live interview?
Does this make the strongest relevant evidence easier to see?
\`\`\`

If the answer is no, keep refining.

Strong career signals are not manufactured.

They are clarified.
`,Mh=Object.assign({"../../../templates/README.md":Cd,"../../../templates/signal-scorecard.md":jd});function Wh(e){var s;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(o,l,u)=>{r[l]=u.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Dh(e,n){const t=Wh(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",o=[...n.matchAll(/^# (\d+\. .+)$/gm)].map(u=>u[1]),l=e.split("/").pop().replace(".md","");return{id:l,title:t.title||l,version:t.version||"",tags:t.tags||[],purpose:i,sections:o,text:n}}const zh=Object.entries(Mh).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,n])=>Dh(e,n));function Uh({text:e}){const[n,t]=k.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return a.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(hd,{size:12}):a.jsx(gd,{size:12}),n?"COPIED":"COPY_TEMPLATE"]})}function Fh(){return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_05_TEMPLATES"}),a.jsx(Fe,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL TEMPLATES"}),a.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"Structured documents for auditing, scoring, and improving your career signals. Copy a template into your own editor and work through it at your own pace."})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:zh.map(({id:e,title:n,version:t,purpose:r,sections:i,tags:s,text:o},l)=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(l+1).padStart(2,"0")," // ",n.toUpperCase()]}),t&&a.jsxs("span",{className:"font-mono text-xs text-is-dim border border-is-border px-2 py-0.5",children:["V",t]}),a.jsx(Fe,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),a.jsx(Uh,{text:o})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[a.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"SECTIONS"}),a.jsx("div",{className:"space-y-px",children:i.map((u,c)=>a.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 border border-is-border bg-is-surface",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary w-5 shrink-0",children:String(c+1).padStart(2,"0")}),a.jsx("span",{className:"font-mono text-xs text-is-dim uppercase tracking-wide",children:u.replace(/^\d+\. /,"").replace(/\s*&\s*/g," AND ").replace(/ /g,"_")})]},c))})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[r&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:r})]}),s.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(u=>a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim",children:u.toUpperCase().replace(/-/g,"_")},u))})]})]})]})]},e))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-2xl",children:[a.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," Templates are fill-in-the-blank markdown documents. Copy the full template and open it in your own text editor or note-taking tool. Do not invent evidence — use the recovery questions inside each section to surface real experience."]})})]})}const{frontmatter:Hh,scoringRows:Bh,layers:zl}=vd(yd),Gh={1:pa,2:ma,3:va,4:ha,5:ga,6:ya,7:fa,8:da};function $h(){return a.jsxs("div",{className:"flex min-h-[calc(100vh-3rem)]",style:{backgroundImage:"linear-gradient(rgba(38,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"},children:[a.jsxs("aside",{className:"hidden md:flex flex-col w-64 shrink-0 border-r border-is-border bg-is-surface sticky top-12 self-start h-[calc(100vh-3rem)] overflow-y-auto",children:[a.jsxs("div",{className:"px-6 py-5 border-b border-is-border",children:[a.jsx("div",{className:"font-mono text-xs font-semibold uppercase tracking-widest text-is-text",children:"SIGNAL STACK"}),a.jsx("div",{className:"font-mono text-[10px] text-is-dim mt-0.5 tracking-widest",children:"L1–L8 ANALYSIS"})]}),a.jsxs("nav",{className:"flex-1 py-2",children:[a.jsxs(Bt,{to:"/signal-stack",end:!0,className:({isActive:e})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${e?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-dim hover:bg-is-surface-high hover:text-is-text"}`,children:[a.jsx(yh,{size:13,className:"shrink-0"}),a.jsx("span",{children:"Overview"})]}),zl.map(({num:e,slug:n,name:t})=>{const r=Gh[e],i=`L${e} // ${t.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"")}`;return a.jsxs(Bt,{to:`/signal-stack/${n}`,className:({isActive:s})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${s?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-dim hover:bg-is-surface-high hover:text-is-text"}`,children:[r&&a.jsx(r,{size:13,className:"shrink-0"}),a.jsx("span",{className:"truncate",children:i})]},n)})]}),a.jsx("div",{className:"px-6 py-5 border-t border-is-border",children:a.jsx("button",{className:"w-full border border-is-primary text-is-primary font-mono text-[10px] uppercase tracking-widest py-2.5 hover:bg-is-primary/10 transition-colors",children:"REBOOT_SESSION"})})]}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx(Qm,{context:{frontmatter:Hh,scoringRows:Bh,layers:zl}})})]})}const Vh={1:pa,2:ma,3:va,4:ha,5:ga,6:ya,7:fa,8:da},Yh={0:"text-is-dim",1:"text-is-alert",2:"text-is-warning",3:"text-is-primary",4:"text-is-telemetry"},qh={0:"MISSING",1:"LOW",2:"WARN",3:"NOMINAL",4:"OPTIMAL"};function Qh(){const{scoringRows:e,layers:n}=ud(),t=[...n].reverse();return a.jsxs("div",{className:"p-8 md:p-12",children:[a.jsxs("header",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-primary",children:"SYSTEM STATUS: OPERATIONAL"})]}),a.jsx("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text mb-4",children:"Signal Stack Overview"}),a.jsx("p",{className:"font-body text-base text-is-dim max-w-2xl leading-relaxed",children:"A diagnostic framework for mapping evidence across eight critical layers of career signal intelligence. A weak layer does not disqualify — an invisible layer does."})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-12 gap-8",children:[a.jsx("div",{className:"xl:col-span-8 flex flex-col gap-2",children:t.map(({num:r,slug:i,name:s,tagline:o})=>{const l=Vh[r];return a.jsxs(Ae,{to:`/signal-stack/${i}`,className:"group border border-is-border p-5 bg-is-surface flex items-center justify-between glow-border transition-all",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("span",{className:"font-mono text-xs text-is-dim w-6 shrink-0",children:["L",r]}),a.jsxs("div",{children:[a.jsx("div",{className:"font-mono text-sm font-medium uppercase tracking-wider text-is-text group-hover:text-is-primary transition-colors",children:s}),a.jsx("div",{className:"font-mono text-[10px] text-is-dim mt-0.5",children:o})]})]}),l&&a.jsx(l,{size:14,className:"text-is-dim group-hover:text-is-primary group-hover:translate-x-0.5 transition-all shrink-0"})]},i)})}),a.jsxs("div",{className:"xl:col-span-4 space-y-6",children:[a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"SCORING_SCALE"})}),a.jsx("div",{className:"p-4",children:a.jsxs("table",{className:"w-full font-mono text-xs",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-is-dim border-b border-is-border",children:[a.jsx("th",{className:"text-left py-2 font-normal",children:"SCORE"}),a.jsx("th",{className:"text-left py-2 font-normal",children:"RATING"}),a.jsx("th",{className:"text-right py-2 font-normal",children:"STATUS"})]})}),a.jsx("tbody",{children:e.map(({score:r,rating:i})=>a.jsxs("tr",{className:"border-b border-is-border/40 last:border-0",children:[a.jsx("td",{className:"py-2.5 text-is-dim",children:r}),a.jsx("td",{className:`py-2.5 ${Yh[r]??"text-is-dim"}`,children:i}),a.jsx("td",{className:"py-2.5 text-right text-is-dim",children:qh[r]??"—"})]},r))})]})})]}),a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"CONFIDENCE_TIER"})}),a.jsx("div",{className:"p-4 space-y-4",children:[{label:"HIGH",pct:100,color:"bg-is-telemetry",desc:"Explicit · easy to validate"},{label:"MEDIUM",pct:65,color:"bg-is-warning",desc:"Present · needs clarification"},{label:"LOW",pct:30,color:"bg-is-alert",desc:"Depends on interpretation"}].map(({label:r,pct:i,color:s,desc:o})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:r}),a.jsx("span",{className:"font-mono text-[10px] text-is-dim",children:o})]}),a.jsx("div",{className:"h-px w-full bg-is-border",children:a.jsx("div",{className:`h-full ${s}`,style:{width:`${i}%`}})})]},r))})]})]})]})]})}const Kh={1:pa,2:ma,3:va,4:ha,5:ga,6:ya,7:fa,8:da};function Xh(){const{layer:e}=Am(),{frontmatter:n,layers:t}=ud(),r=t.findIndex(v=>v.slug===e),i=t[r];if(!i)return a.jsxs("div",{className:"p-12 space-y-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-dim",children:["LAYER_NOT_FOUND // ",e]}),a.jsxs(Ae,{to:"/signal-stack",className:"flex items-center gap-1 font-mono text-xs text-is-primary hover:text-is-primary/80 transition-colors uppercase tracking-wider",children:[a.jsx(ms,{size:12}),"Back to overview"]})]});const{num:s,name:o,tagline:l,description:u,strongSignals:c,weakSignals:h,exampleWeak:m,exampleStrong:g,levels:w}=i,y=Kh[s],x=r>0?t[r-1]:null,E=r<t.length-1?t[r+1]:null,f=(n.category??"docs").toUpperCase(),d=`SIGNAL_STACK · v${n.version??"1.0"} · STATUS: ${(n.status??"draft").toUpperCase()}`,p=o.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"");return a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"scanline"}),a.jsxs("div",{className:"p-8 md:p-12 max-w-5xl space-y-14 relative z-10",children:[a.jsxs("section",{className:"border-l-2 border-is-primary pl-8 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx("span",{className:"bg-is-primary/10 text-is-primary border border-is-primary/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",children:f}),a.jsx("span",{className:"font-mono text-[10px] text-is-dim tracking-widest uppercase",children:d})]}),a.jsxs("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase tracking-tight flex items-center gap-4",children:["L",s," // ",p,"_",y&&a.jsx(y,{size:20,className:"text-is-primary shrink-0"})]}),(u||l)&&a.jsx("p",{className:"font-body text-base text-is-dim max-w-2xl leading-relaxed",children:u||l})]}),(h.length>0||c.length>0)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim",children:"SIGNAL_DIAGNOSTIC // WEAK_VS_STRONG"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border border border-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-alert opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(wh,{size:14,className:"text-is-alert shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-alert",children:"WEAK_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:h.map((v,b)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-dim mt-0.5 shrink-0 group-hover/item:text-is-alert transition-colors",children:String(b+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:v})]},b))})]}),a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-telemetry opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(gh,{size:14,className:"text-is-telemetry shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-telemetry",children:"STRONG_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:c.map((v,b)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-dim mt-0.5 shrink-0 group-hover/item:text-is-telemetry transition-colors",children:String(b+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:v})]},b))})]})]})]}),(m||g)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim",children:"EVIDENCE_TAXONOMY // SEMANTIC_UPGRADING"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[m&&a.jsxs("div",{className:"border border-is-border border-l-2 border-l-is-alert p-6 bg-is-surface space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-dim uppercase tracking-widest",children:"PASSIVE_EXECUTION"}),a.jsx("div",{className:"font-mono text-[10px] text-is-alert uppercase tracking-wider",children:"LOW_RESOLUTION_SIGNAL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-dim italic leading-relaxed border-t border-is-border pt-3",children:["“",m,"”"]})]}),g&&a.jsxs("div",{className:"border border-is-primary/20 border-l-2 border-l-is-primary p-6 bg-is-primary/5 space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-dim uppercase tracking-widest",children:"ACTIVE_MASTERY"}),a.jsx("div",{className:"font-mono text-[10px] text-is-primary uppercase tracking-wider",children:"HIGH_FIDELITY_INTEL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-dim italic leading-relaxed border-t border-is-primary/20 pt-3",children:["“",g,"”"]})]})]})]}),w.length>0&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim",children:"LEVEL_DIFFERENTIATION_MATRIX"}),a.jsx("div",{className:"border border-is-border overflow-x-auto",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-is-surface border-b border-is-border",children:[a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-dim font-normal uppercase tracking-widest w-32",children:"LEVEL"}),a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-dim font-normal uppercase tracking-widest",children:"WHAT_STRONG_LOOKS_LIKE"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:w.map(({level:v,description:b},j)=>a.jsxs("tr",{className:"hover:bg-is-surface-low transition-colors group",children:[a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-is-dim group-hover:text-is-primary transition-colors font-medium whitespace-nowrap align-top",children:v}),a.jsx("td",{className:"px-6 py-4 font-body text-sm text-is-dim leading-relaxed",children:b})]},j))})]})})]}),a.jsxs("div",{className:"flex items-center justify-between border-t border-is-border pt-8",children:[x?a.jsxs(Ae,{to:`/signal-stack/${x.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(ms,{size:12}),"L",x.num," · ",x.name]}):a.jsxs(Ae,{to:"/signal-stack",className:"flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(ms,{size:12}),"Overview"]}),E&&a.jsxs(Ae,{to:`/signal-stack/${E.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider",children:["L",E.num," · ",E.name,a.jsx(vh,{size:12})]})]})]})]})}const Jh=Object.assign({"../../../prompts/README.md":xd,"../../../prompts/coaching/growth-signal-self-diagnostic.md":wd,"../../../prompts/interview/behavioral-answer-diagnostic.md":kd,"../../../prompts/interview/skeptical-hiring-manager.md":Sd,"../../../prompts/resume/resume-signal-analysis.md":bd}),Zh=Object.assign({"../../../templates/README.md":Cd,"../../../templates/signal-scorecard.md":jd});function eg(e,n){const t=Ed(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",s=e.split("/").pop().replace(".md","");return{id:s,type:"template",title:t.title||s,meta:t.version||"",excerpt:i,tags:t.tags||[],route:"/templates"}}const ng=Object.entries(Jh).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>{const t=Nd(e,n);return{id:t.id,type:"prompt",title:t.title,meta:t.category,excerpt:t.purpose,tags:t.tags,route:"/prompts"}}),tg=Object.entries(Zh).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,n])=>eg(e,n)),rg=ho.map(e=>({id:e.id,type:"framework",title:e.label,meta:e.question,excerpt:[...e.signals||[],...e.pitfalls||[]].join(" · "),tags:[e.id],route:"/frameworks"})),ig=[...ng,...tg,...rg],Ul={prompt:{label:"PROMPT",color:"text-is-primary",border:"border-is-primary/30"},template:{label:"TEMPLATE",color:"text-is-secondary",border:"border-is-secondary/30"},framework:{label:"FRAMEWORK",color:"text-is-warning",border:"border-is-warning/30"}},hs=["prompt","template","framework"];function sg(e,n){return[e.title,e.meta,e.excerpt,e.tags.join(" ")].join(" ").toLowerCase().includes(n)}function og(){const[e]=dh(),n=(e.get("q")||"").trim().toLowerCase(),[t,r]=k.useState(new Set(hs));function i(u){r(c=>{const h=new Set(c);if(h.has(u)){if(h.size===1)return c;h.delete(u)}else h.add(u);return h})}const s=k.useMemo(()=>n?ig.filter(u=>sg(u,n)):[],[n]),o=k.useMemo(()=>s.filter(u=>t.has(u.type)),[s,t]),l=k.useMemo(()=>Object.fromEntries(hs.map(u=>[u,s.filter(c=>c.type===u).length])),[s]);return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[a.jsxs("div",{className:"border-b border-is-border pb-6 mb-8",children:[a.jsx("span",{className:"is-label",children:"SIGNAL_QUERY"}),n?a.jsxs("p",{className:"font-mono text-xs text-is-dim mt-1 tracking-widest",children:["QUERY: ",a.jsx("span",{className:"text-is-text",children:n.toUpperCase()})]}):null]}),a.jsxs("div",{className:"flex gap-6 items-start",children:[a.jsx("aside",{className:"w-52 shrink-0",children:a.jsxs("div",{className:"is-panel p-4",children:[a.jsx("span",{className:"is-label block mb-4",children:"QUERY_FILTERS"}),a.jsx("div",{className:"flex flex-col gap-3",children:hs.map(u=>{const c=Ul[u],h=l[u]??0,m=t.has(u);return a.jsxs("label",{className:"flex items-center justify-between gap-2 cursor-pointer group",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:m,onChange:()=>i(u),className:"appearance-none w-3 h-3 border border-is-border bg-is-surface checked:bg-is-primary checked:border-is-primary transition-colors cursor-pointer"}),a.jsx("span",{className:`font-mono text-xs tracking-widest uppercase transition-colors ${m?c.color:"text-is-dim"}`,children:c.label})]}),a.jsx("span",{className:"font-mono text-xs text-is-dim tabular-nums",children:h})]},u)})})]})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n?o.length===0?a.jsxs("span",{className:"font-mono text-xs text-is-alert tracking-widest",children:["NO_SIGNAL_FOUND // QUERY: ",n.toUpperCase()]}):a.jsxs("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:["Showing"," ",a.jsx("span",{className:"text-is-text",children:o.length})," ","signal",o.length!==1?"s":""," found // PROTOCOL:"," ",a.jsx("span",{className:"text-is-secondary",children:"SCAN_COMPLETE"})]}):a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"AWAITING_QUERY"}),o.length>0&&a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"SORT: RELEVANCE"})]}),!n&&a.jsxs("div",{className:"is-panel p-12 flex flex-col items-center justify-center gap-3",children:[a.jsx("span",{className:"font-mono text-2xl text-is-border",children:"···"}),a.jsx("span",{className:"is-label",children:"ENTER_QUERY_TO_SCAN"}),a.jsx("p",{className:"font-mono text-xs text-is-dim text-center max-w-xs",children:"Search across prompts, templates, and frameworks. Use the input in the nav to begin."})]}),o.length>0&&a.jsx("div",{className:"flex flex-col gap-3",children:o.map(u=>{const c=Ul[u.type],h=u.excerpt.length>140?u.excerpt.slice(0,140).trimEnd()+"…":u.excerpt;return a.jsxs("div",{className:`is-panel p-5 border-l-2 ${c.border}`,children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[a.jsxs("span",{className:`font-mono text-xs uppercase tracking-widest ${c.color}`,children:[c.label," //"]}),a.jsx(Ae,{to:u.route,className:"font-mono text-xs uppercase tracking-widest text-is-dim hover:text-is-primary transition-colors whitespace-nowrap shrink-0",children:"VIEW_SIGNAL →"})]}),a.jsx("h2",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-2 tracking-wide",children:u.title}),h&&a.jsx("p",{className:"font-mono text-xs text-is-dim leading-relaxed mb-3",children:h}),u.tags.length>0&&a.jsx("div",{className:"flex flex-wrap gap-1.5",children:u.tags.map(m=>a.jsx("span",{className:"font-mono text-xs px-2 py-0.5 bg-is-surface-low border border-is-border text-is-dim uppercase tracking-widest",children:m},m))})]},`${u.type}-${u.id}`)})}),n&&o.length===0&&s.length>0&&a.jsxs("div",{className:"is-panel p-8 text-center",children:[a.jsx("span",{className:"is-label block mb-2",children:"FILTER_MISMATCH"}),a.jsxs("p",{className:"font-mono text-xs text-is-dim",children:[s.length," result",s.length!==1?"s":""," found but hidden by active filters."]})]})]})]})]})}function ag(){const{pathname:e}=Bn();return k.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function lg(){return a.jsxs(oh,{children:[a.jsx(ag,{}),a.jsxs("div",{className:"min-h-screen flex flex-col bg-is-bg-deep",children:[a.jsx(kh,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(Xm,{children:[a.jsx(Ge,{path:"/",element:a.jsx(Ih,{})}),a.jsx(Ge,{path:"/frameworks",element:a.jsx(Lh,{})}),a.jsx(Ge,{path:"/prompts",element:a.jsx(Oh,{})}),a.jsx(Ge,{path:"/templates",element:a.jsx(Fh,{})}),a.jsx(Ge,{path:"/search",element:a.jsx(og,{})}),a.jsxs(Ge,{path:"/signal-stack",element:a.jsx($h,{}),children:[a.jsx(Ge,{index:!0,element:a.jsx(Qh,{})}),a.jsx(Ge,{path:":layer",element:a.jsx(Xh,{})})]})]})}),a.jsxs("footer",{className:"border-t border-is-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim",children:"© 2026 INVISIBLE_SIGNALS™ · IS_RIGHTS_RESERVED"}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-dim hover:text-is-text transition-colors",children:"GITHUB"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-dim hover:text-is-text transition-colors",children:"CODE_OF_CONDUCT"}),a.jsx("span",{className:"font-mono text-xs text-is-dim",children:"SECURITY: APACHE-2.0 // OPEN_SOURCE_LICENSED"})]})]})]})]})}gs.createRoot(document.getElementById("root")).render(a.jsx(Xl.StrictMode,{children:a.jsx(lg,{})}));
