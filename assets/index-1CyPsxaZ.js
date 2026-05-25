function nd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ca={exports:{}},gi={},Ia={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),rd=Symbol.for("react.portal"),id=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),io=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=io&&e[io]||e["@@iterator"],typeof e=="function"?e:null)}var Ta={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ba=Object.assign,ja={};function mt(e,n,t){this.props=e,this.context=n,this.refs=ja,this.updater=t||Ta}mt.prototype.isReactComponent={};mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ra(){}Ra.prototype=mt.prototype;function us(e,n,t){this.props=e,this.context=n,this.refs=ja,this.updater=t||Ta}var cs=us.prototype=new Ra;cs.constructor=us;ba(cs,mt.prototype);cs.isPureReactComponent=!0;var lo=Array.isArray,_a=Object.prototype.hasOwnProperty,ds={current:null},Pa={key:!0,ref:!0,__self:!0,__source:!0};function La(e,n,t){var r,i={},l=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(l=""+n.key),n)_a.call(n,r)&&!Pa.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lr,type:e,key:l,ref:s,props:i,_owner:ds.current}}function md(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function hd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var so=/\/+/g;function zi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):n.toString(36)}function _r(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case rd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+zi(s,0):r,lo(i)?(t="",e!=null&&(t=e.replace(so,"$&/")+"/"),_r(i,n,t,"",function(c){return c})):i!=null&&(fs(i)&&(i=md(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(so,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",lo(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+zi(l,a);s+=_r(l,n,t,u,i)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+zi(l,a++),s+=_r(l,n,t,u,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,n,t){if(e==null)return e;var r=[],i=0;return _r(e,r,"","",function(l){return n.call(t,l,i++)}),r}function gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Pr={transition:null},vd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:ds};function Aa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=mt;L.Fragment=id;L.Profiler=sd;L.PureComponent=us;L.StrictMode=ld;L.Suspense=cd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;L.act=Aa;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ba({},e.props),i=e.key,l=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,s=ds.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)_a.call(n,u)&&!Pa.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:i,ref:l,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};L.createElement=La;L.createFactory=function(e){var n=La.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ud,render:e}};L.isValidElement=fs;L.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};L.memo=function(e,n){return{$$typeof:dd,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=n}};L.unstable_act=Aa;L.useCallback=function(e,n){return ce.current.useCallback(e,n)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,n){return ce.current.useEffect(e,n)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ce.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";Ia.exports=L;var S=Ia.exports;const Oa=td(S),yd=nd({__proto__:null,default:Oa},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=S,wd=Symbol.for("react.element"),Ed=Symbol.for("react.fragment"),Sd=Object.prototype.hasOwnProperty,kd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function Ma(e,n,t){var r,i={},l=null,s=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Sd.call(n,r)&&!Nd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:wd,type:e,key:l,ref:s,props:i,_owner:kd.current}}gi.Fragment=Ed;gi.jsx=Ma;gi.jsxs=Ma;Ca.exports=gi;var o=Ca.exports,fl={},Wa={exports:{}},Se={},Da={exports:{}},za={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(I,R){var P=I.length;I.push(R);e:for(;0<P;){var G=P-1>>>1,X=I[G];if(0<i(X,R))I[G]=R,I[P]=X,P=G;else break e}}function t(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],P=I.pop();if(P!==R){I[0]=P;e:for(var G=0,X=I.length,fr=X>>>1;G<fr;){var Sn=2*(G+1)-1,Di=I[Sn],kn=Sn+1,pr=I[kn];if(0>i(Di,P))kn<X&&0>i(pr,Di)?(I[G]=pr,I[kn]=P,G=kn):(I[G]=Di,I[Sn]=P,G=Sn);else if(kn<X&&0>i(pr,P))I[G]=pr,I[kn]=P,G=kn;else break e}}return R}function i(I,R){var P=I.sortIndex-R.sortIndex;return P!==0?P:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,m=null,g=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=I)r(c),R.sortIndex=R.expirationTime,n(u,R);else break;R=t(c)}}function v(I){if(w=!1,p(I),!y)if(t(u)!==null)y=!0,Mi(k);else{var R=t(c);R!==null&&Wi(v,R.startTime-I)}}function k(I,R){y=!1,w&&(w=!1,f(j),j=-1),x=!0;var P=g;try{for(p(R),m=t(u);m!==null&&(!(m.expirationTime>R)||I&&!ve());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var X=G(m.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?m.callback=X:m===t(u)&&r(u),p(R)}else r(u);m=t(u)}if(m!==null)var fr=!0;else{var Sn=t(c);Sn!==null&&Wi(v,Sn.startTime-R),fr=!1}return fr}finally{m=null,g=P,x=!1}}var T=!1,b=null,j=-1,F=5,_=-1;function ve(){return!(e.unstable_now()-_<F)}function vt(){if(b!==null){var I=e.unstable_now();_=I;var R=!0;try{R=b(!0,I)}finally{R?yt():(T=!1,b=null)}}else T=!1}var yt;if(typeof d=="function")yt=function(){d(vt)};else if(typeof MessageChannel<"u"){var ro=new MessageChannel,ed=ro.port2;ro.port1.onmessage=vt,yt=function(){ed.postMessage(null)}}else yt=function(){N(vt,0)};function Mi(I){b=I,T||(T=!0,yt())}function Wi(I,R){j=N(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Mi(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var P=g;g=R;try{return I()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=g;g=I;try{return R()}finally{g=P}},e.unstable_scheduleCallback=function(I,R,P){var G=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,I={id:h++,callback:R,priorityLevel:I,startTime:P,expirationTime:X,sortIndex:-1},P>G?(I.sortIndex=P,n(c,I),t(u)===null&&I===t(c)&&(w?(f(j),j=-1):w=!0,Wi(v,P-G))):(I.sortIndex=X,n(u,I),y||x||(y=!0,Mi(k))),I},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(I){var R=g;return function(){var P=g;g=R;try{return I.apply(this,arguments)}finally{g=P}}}})(za);Da.exports=za;var Cd=Da.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=S,Ee=Cd;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fa=new Set,Ft={};function Wn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Ft[e]=n,e=0;e<n.length;e++)Fa.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oo={},ao={};function bd(e){return pl.call(ao,e)?!0:pl.call(oo,e)?!1:Td.test(e)?ao[e]=!0:(oo[e]=!0,!1)}function jd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rd(e,n,t,r){if(n===null||typeof n>"u"||jd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,i,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ps,ms);te[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ps,ms);te[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ps,ms);te[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Rd(n,t,i,r)&&(t=null),r||i===null?bd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),Ua=Symbol.for("react.provider"),Ba=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),ys=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),uo=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=uo&&e[uo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Fi;function Tt(e){if(Fi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fi=n&&n[1]||""}return`
`+Fi+e}var Ui=!1;function Bi(e,n){if(!e||Ui)return"";Ui=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ui=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tt(e):""}function _d(e){switch(e.tag){case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Bn:return"Portal";case ml:return"Profiler";case gs:return"StrictMode";case hl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ba:return(e.displayName||"Context")+".Consumer";case Ua:return(e._context.displayName||"Context")+".Provider";case vs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ys:return n=e.displayName||null,n!==null?n:vl(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return vl(e(n))}catch{}}return null}function Pd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(n);case 8:return n===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Va(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ld(e){var n=Va(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=Ld(e))}function $a(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Va(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function co(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ga(e,n){n=n.checked,n!=null&&hs(e,"checked",n,!1)}function xl(e,n){Ga(e,n);var t=gn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?wl(e,n.type,t):n.hasOwnProperty("defaultValue")&&wl(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function wl(e,n,t){(n!=="number"||Vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function et(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function El(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function po(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(bt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function Qa(e,n){var t=gn(n.value),r=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function mo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ya(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){Ad.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_t[n]=_t[e]})});function qa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_t.hasOwnProperty(e)&&_t[e]?(""+n).trim():n+"px"}function Xa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=qa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Od=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,n){if(n){if(Od[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Nl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,nt=null,tt=null;function ho(e){if(e=ar(e)){if(typeof Il!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Ei(n),Il(e.stateNode,e.type,n))}}function Ja(e){nt?tt?tt.push(e):tt=[e]:nt=e}function Za(){if(nt){var e=nt,n=tt;if(tt=nt=null,ho(e),n)for(e=0;e<n.length;e++)ho(n[e])}}function eu(e,n){return e(n)}function nu(){}var Hi=!1;function tu(e,n,t){if(Hi)return e(n,t);Hi=!0;try{return eu(e,n,t)}finally{Hi=!1,(nt!==null||tt!==null)&&(nu(),Za())}}function Bt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ei(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Tl=!1;if(Qe)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{Tl=!1}function Md(e,n,t,r,i,l,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Pt=!1,$r=null,Gr=!1,bl=null,Wd={onError:function(e){Pt=!0,$r=e}};function Dd(e,n,t,r,i,l,s,a,u){Pt=!1,$r=null,Md.apply(Wd,arguments)}function zd(e,n,t,r,i,l,s,a,u){if(Dd.apply(this,arguments),Pt){if(Pt){var c=$r;Pt=!1,$r=null}else throw Error(E(198));Gr||(Gr=!0,bl=c)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function go(e){if(Dn(e)!==e)throw Error(E(188))}function Fd(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return go(i),e;if(l===r)return go(i),n;l=l.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=l;break}if(a===r){s=!0,r=i,t=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===t){s=!0,t=l,r=i;break}if(a===r){s=!0,r=l,t=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function iu(e){return e=Fd(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lu(e);if(n!==null)return n;e=e.sibling}return null}var su=Ee.unstable_scheduleCallback,vo=Ee.unstable_cancelCallback,Ud=Ee.unstable_shouldYield,Bd=Ee.unstable_requestPaint,Q=Ee.unstable_now,Hd=Ee.unstable_getCurrentPriorityLevel,ws=Ee.unstable_ImmediatePriority,ou=Ee.unstable_UserBlockingPriority,Qr=Ee.unstable_NormalPriority,Vd=Ee.unstable_LowPriority,au=Ee.unstable_IdlePriority,vi=null,Fe=null;function $d(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Yd,Gd=Math.log,Qd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Gd(e)/Qd|0)|0}var yr=64,xr=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=jt(a):(l&=s,l!==0&&(r=jt(l)))}else s=t&~i,s!==0?r=jt(s):l!==0&&(r=jt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),i=1<<t,r|=e[t],n&=~i;return r}function Kd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ae(l),a=1<<s,u=i[s];u===-1?(!(a&t)||a&r)&&(i[s]=Kd(a,n)):u<=n&&(e.expiredLanes|=a),l&=~a}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Xd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ae(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,Ss,fu,pu,mu,Rl=!1,wr=[],on=null,an=null,un=null,Ht=new Map,Vt=new Map,nn=[],Jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yo(e,n){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ht.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function Et(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ar(n),n!==null&&Ss(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Zd(e,n,t,r,i){switch(n){case"focusin":return on=Et(on,e,n,t,r,i),!0;case"dragenter":return an=Et(an,e,n,t,r,i),!0;case"mouseover":return un=Et(un,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Ht.set(l,Et(Ht.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vt.set(l,Et(Vt.get(l)||null,e,n,t,r,i)),!0}return!1}function hu(e){var n=Tn(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=ru(t),n!==null){e.blockedOn=n,mu(e.priority,function(){fu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_l(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Cl=r,t.target.dispatchEvent(r),Cl=null}else return n=ar(t),n!==null&&Ss(n),e.blockedOn=t,!1;n.shift()}return!0}function xo(e,n,t){Lr(e)&&t.delete(n)}function ef(){Rl=!1,on!==null&&Lr(on)&&(on=null),an!==null&&Lr(an)&&(an=null),un!==null&&Lr(un)&&(un=null),Ht.forEach(xo),Vt.forEach(xo)}function St(e,n){e.blockedOn===n&&(e.blockedOn=null,Rl||(Rl=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,ef)))}function $t(e){function n(i){return St(i,e)}if(0<wr.length){St(wr[0],e);for(var t=1;t<wr.length;t++){var r=wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&St(on,e),an!==null&&St(an,e),un!==null&&St(un,e),Ht.forEach(n),Vt.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)hu(t),t.blockedOn===null&&nn.shift()}var rt=Xe.ReactCurrentBatchConfig,Kr=!0;function nf(e,n,t,r){var i=O,l=rt.transition;rt.transition=null;try{O=1,ks(e,n,t,r)}finally{O=i,rt.transition=l}}function tf(e,n,t,r){var i=O,l=rt.transition;rt.transition=null;try{O=4,ks(e,n,t,r)}finally{O=i,rt.transition=l}}function ks(e,n,t,r){if(Kr){var i=_l(e,n,t,r);if(i===null)el(e,n,r,qr,t),yo(e,r);else if(Zd(i,e,n,t,r))r.stopPropagation();else if(yo(e,r),n&4&&-1<Jd.indexOf(e)){for(;i!==null;){var l=ar(i);if(l!==null&&du(l),l=_l(e,n,t,r),l===null&&el(e,n,r,qr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else el(e,n,r,null,t)}}var qr=null;function _l(e,n,t,r){if(qr=null,e=xs(r),e=Tn(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ru(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return qr=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case ws:return 1;case ou:return 4;case Qr:case Vd:return 16;case au:return 536870912;default:return 16}default:return 16}}var rn=null,Ns=null,Ar=null;function vu(){if(Ar)return Ar;var e,n=Ns,t=n.length,r,i="value"in rn?rn.value:rn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[l-r];r++);return Ar=i.slice(e,1<r?1-r:void 0)}function Or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function wo(){return!1}function ke(e){function n(t,r,i,l,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Er:wo,this.isPropagationStopped=wo,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=ke(ht),or=H({},ht,{view:0,detail:0}),rf=ke(or),$i,Gi,kt,yi=H({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kt&&(kt&&e.type==="mousemove"?($i=e.screenX-kt.screenX,Gi=e.screenY-kt.screenY):Gi=$i=0,kt=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),Eo=ke(yi),lf=H({},yi,{dataTransfer:0}),sf=ke(lf),of=H({},or,{relatedTarget:0}),Qi=ke(of),af=H({},ht,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=ke(af),cf=H({},ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=ke(cf),ff=H({},ht,{data:0}),So=ke(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hf[e])?!!n[e]:!1}function Is(){return gf}var vf=H({},or,{key:function(e){if(e.key){var n=pf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=ke(vf),xf=H({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=ke(xf),wf=H({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Ef=ke(wf),Sf=H({},ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=ke(Sf),Nf=H({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=ke(Nf),If=[9,13,27,32],Ts=Qe&&"CompositionEvent"in window,Lt=null;Qe&&"documentMode"in document&&(Lt=document.documentMode);var Tf=Qe&&"TextEvent"in window&&!Lt,yu=Qe&&(!Ts||Lt&&8<Lt&&11>=Lt),No=" ",Co=!1;function xu(e,n){switch(e){case"keyup":return If.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function bf(e,n){switch(e){case"compositionend":return wu(n);case"keypress":return n.which!==32?null:(Co=!0,No);case"textInput":return e=n.data,e===No&&Co?null:e;default:return null}}function jf(e,n){if(Vn)return e==="compositionend"||!Ts&&xu(e,n)?(e=vu(),Ar=Ns=rn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yu&&n.locale!=="ko"?null:n.data;default:return null}}var Rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rf[e.type]:n==="textarea"}function Eu(e,n,t,r){Ja(r),n=Xr(n,"onChange"),0<n.length&&(t=new Cs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var At=null,Gt=null;function _f(e){Pu(e,0)}function xi(e){var n=Qn(e);if($a(n))return e}function Pf(e,n){if(e==="change")return n}var Su=!1;if(Qe){var Yi;if(Qe){var Ki="oninput"in document;if(!Ki){var To=document.createElement("div");To.setAttribute("oninput","return;"),Ki=typeof To.oninput=="function"}Yi=Ki}else Yi=!1;Su=Yi&&(!document.documentMode||9<document.documentMode)}function bo(){At&&(At.detachEvent("onpropertychange",ku),Gt=At=null)}function ku(e){if(e.propertyName==="value"&&xi(Gt)){var n=[];Eu(n,Gt,e,xs(e)),tu(_f,n)}}function Lf(e,n,t){e==="focusin"?(bo(),At=n,Gt=t,At.attachEvent("onpropertychange",ku)):e==="focusout"&&bo()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(Gt)}function Of(e,n){if(e==="click")return xi(n)}function Mf(e,n){if(e==="input"||e==="change")return xi(n)}function Wf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Wf;function Qt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!pl.call(n,i)||!Me(e[i],n[i]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ro(e,n){var t=jo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jo(t)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cu(){for(var e=window,n=Vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vr(e.document)}return n}function bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Df(e){var n=Cu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nu(t.ownerDocument.documentElement,t)){if(r!==null&&bs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ro(t,l);var s=Ro(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zf=Qe&&"documentMode"in document&&11>=document.documentMode,$n=null,Pl=null,Ot=null,Ll=!1;function _o(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ll||$n==null||$n!==Vr(r)||(r=$n,"selectionStart"in r&&bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ot&&Qt(Ot,r)||(Ot=r,r=Xr(Pl,"onSelect"),0<r.length&&(n=new Cs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$n)))}function Sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gn={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},qi={},Iu={};Qe&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function wi(e){if(qi[e])return qi[e];if(!Gn[e])return e;var n=Gn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Iu)return qi[e]=n[t];return e}var Tu=wi("animationend"),bu=wi("animationiteration"),ju=wi("animationstart"),Ru=wi("transitionend"),_u=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){_u.set(e,n),Wn(n,[e])}for(var Xi=0;Xi<Po.length;Xi++){var Ji=Po[Xi],Ff=Ji.toLowerCase(),Uf=Ji[0].toUpperCase()+Ji.slice(1);yn(Ff,"on"+Uf)}yn(Tu,"onAnimationEnd");yn(bu,"onAnimationIteration");yn(ju,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Ru,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Lo(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,zd(r,n,void 0,e),e.currentTarget=null}function Pu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;Lo(i,a,c),l=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;Lo(i,a,c),l=u}}}if(Gr)throw e=bl,Gr=!1,bl=null,e}function W(e,n){var t=n[Dl];t===void 0&&(t=n[Dl]=new Set);var r=e+"__bubble";t.has(r)||(Lu(n,e,2,!1),t.add(r))}function Zi(e,n,t){var r=0;n&&(r|=4),Lu(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Yt(e){if(!e[kr]){e[kr]=!0,Fa.forEach(function(t){t!=="selectionchange"&&(Bf.has(t)||Zi(t,!1,e),Zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,Zi("selectionchange",!1,n))}}function Lu(e,n,t,r){switch(gu(n)){case 1:var i=nf;break;case 4:i=tf;break;default:i=ks}t=i.bind(null,n,t,e),i=void 0,!Tl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function el(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Tn(a),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}a=a.parentNode}}r=r.return}tu(function(){var c=l,h=xs(t),m=[];e:{var g=_u.get(e);if(g!==void 0){var x=Cs,y=e;switch(e){case"keypress":if(Or(t)===0)break e;case"keydown":case"keyup":x=yf;break;case"focusin":y="focus",x=Qi;break;case"focusout":y="blur",x=Qi;break;case"beforeblur":case"afterblur":x=Qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ef;break;case Tu:case bu:case ju:x=uf;break;case Ru:x=kf;break;case"scroll":x=rf;break;case"wheel":x=Cf;break;case"copy":case"cut":case"paste":x=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ko}var w=(n&4)!==0,N=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Bt(d,f),v!=null&&w.push(Kt(d,v,p)))),N)break;d=d.return}0<w.length&&(g=new x(g,y,null,t,h),m.push({event:g,listeners:w}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&t!==Cl&&(y=t.relatedTarget||t.fromElement)&&(Tn(y)||y[Ye]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=t.relatedTarget||t.toElement,x=c,y=y?Tn(y):null,y!==null&&(N=Dn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Eo,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ko,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=x==null?g:Qn(x),p=y==null?g:Qn(y),g=new w(v,d+"leave",x,t,h),g.target=N,g.relatedTarget=p,v=null,Tn(h)===c&&(w=new w(f,d+"enter",y,t,h),w.target=p,w.relatedTarget=N,v=w),N=v,x&&y)n:{for(w=x,f=y,d=0,p=w;p;p=Un(p))d++;for(p=0,v=f;v;v=Un(v))p++;for(;0<d-p;)w=Un(w),d--;for(;0<p-d;)f=Un(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break n;w=Un(w),f=Un(f)}w=null}else w=null;x!==null&&Ao(m,g,x,w,!1),y!==null&&N!==null&&Ao(m,N,y,w,!0)}}e:{if(g=c?Qn(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var k=Pf;else if(Io(g))if(Su)k=Mf;else{k=Af;var T=Lf}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Of);if(k&&(k=k(e,c))){Eu(m,k,t,h);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&wl(g,"number",g.value)}switch(T=c?Qn(c):window,e){case"focusin":(Io(T)||T.contentEditable==="true")&&($n=T,Pl=c,Ot=null);break;case"focusout":Ot=Pl=$n=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,_o(m,t,h);break;case"selectionchange":if(zf)break;case"keydown":case"keyup":_o(m,t,h)}var b;if(Ts)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Vn?xu(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(yu&&t.locale!=="ko"&&(Vn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Vn&&(b=vu()):(rn=h,Ns="value"in rn?rn.value:rn.textContent,Vn=!0)),T=Xr(c,j),0<T.length&&(j=new So(j,e,null,t,h),m.push({event:j,listeners:T}),b?j.data=b:(b=wu(t),b!==null&&(j.data=b)))),(b=Tf?bf(e,t):jf(e,t))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(h=new So("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=b))}Pu(m,n)})}function Kt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Bt(e,t),l!=null&&r.unshift(Kt(e,l,i)),l=Bt(e,n),l!=null&&r.push(Kt(e,l,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ao(e,n,t,r,i){for(var l=n._reactName,s=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Bt(t,l),u!=null&&s.unshift(Kt(t,u,a))):i||(u=Bt(t,l),u!=null&&s.push(Kt(t,u,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Hf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Oo(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Vf,"")}function Nr(e,n,t){if(n=Oo(n),Oo(e)!==n&&t)throw Error(E(425))}function Jr(){}var Al=null,Ol=null;function Ml(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,Mo=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Mo<"u"?function(e){return Mo.resolve(null).then(e).catch(Qf)}:Wl;function Qf(e){setTimeout(function(){throw e})}function nl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);$t(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Wo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gt=Math.random().toString(36).slice(2),ze="__reactFiber$"+gt,qt="__reactProps$"+gt,Ye="__reactContainer$"+gt,Dl="__reactEvents$"+gt,Yf="__reactListeners$"+gt,Kf="__reactHandles$"+gt;function Tn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Wo(e);e!==null;){if(t=e[ze])return t;e=Wo(e)}return n}e=t,t=e.parentNode}return null}function ar(e){return e=e[ze]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ei(e){return e[qt]||null}var zl=[],Yn=-1;function xn(e){return{current:e}}function D(e){0>Yn||(e.current=zl[Yn],zl[Yn]=null,Yn--)}function M(e,n){Yn++,zl[Yn]=e.current,e.current=n}var vn={},se=xn(vn),me=xn(!1),Pn=vn;function ot(e,n){var t=e.type.contextTypes;if(!t)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Zr(){D(me),D(se)}function Do(e,n,t){if(se.current!==vn)throw Error(E(168));M(se,n),M(me,t)}function Au(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,Pd(e)||"Unknown",i));return H({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Pn=se.current,M(se,e),M(me,me.current),!0}function zo(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Au(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,D(me),D(se),M(se,e)):D(me),M(me,t)}var He=null,Si=!1,tl=!1;function Ou(e){He===null?He=[e]:He.push(e)}function qf(e){Si=!0,Ou(e)}function wn(){if(!tl&&He!==null){tl=!0;var e=0,n=O;try{var t=He;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}He=null,Si=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),su(ws,wn),i}finally{O=n,tl=!1}}return null}var Kn=[],qn=0,ni=null,ti=0,Ne=[],Ce=0,Ln=null,Ve=1,$e="";function Nn(e,n){Kn[qn++]=ti,Kn[qn++]=ni,ni=e,ti=n}function Mu(e,n,t){Ne[Ce++]=Ve,Ne[Ce++]=$e,Ne[Ce++]=Ln,Ln=e;var r=Ve;e=$e;var i=32-Ae(r)-1;r&=~(1<<i),t+=1;var l=32-Ae(n)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ve=1<<32-Ae(n)+i|t<<i|r,$e=l+e}else Ve=1<<l|t<<i|r,$e=e}function js(e){e.return!==null&&(Nn(e,1),Mu(e,1,0))}function Rs(e){for(;e===ni;)ni=Kn[--qn],Kn[qn]=null,ti=Kn[--qn],Kn[qn]=null;for(;e===Ln;)Ln=Ne[--Ce],Ne[Ce]=null,$e=Ne[--Ce],Ne[Ce]=null,Ve=Ne[--Ce],Ne[Ce]=null}var we=null,xe=null,z=!1,Le=null;function Wu(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,xe=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,xe=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(z){var n=xe;if(n){var t=n;if(!Fo(e,n)){if(Fl(e))throw Error(E(418));n=cn(t.nextSibling);var r=we;n&&Fo(e,n)?Wu(r,t):(e.flags=e.flags&-4097|2,z=!1,we=e)}}else{if(Fl(e))throw Error(E(418));e.flags=e.flags&-4097|2,z=!1,we=e}}}function Uo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Cr(e){if(e!==we)return!1;if(!z)return Uo(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ml(e.type,e.memoizedProps)),n&&(n=xe)){if(Fl(e))throw Du(),Error(E(418));for(;n;)Wu(e,n),n=cn(n.nextSibling)}if(Uo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){xe=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}xe=null}}else xe=we?cn(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=xe;e;)e=cn(e.nextSibling)}function at(){xe=we=null,z=!1}function _s(e){Le===null?Le=[e]:Le.push(e)}var Xf=Xe.ReactCurrentBatchConfig;function Nt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Ir(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bo(e){var n=e._init;return n(e._payload)}function zu(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=mn(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=ul(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,v){var k=p.type;return k===Hn?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Bo(k)===d.type)?(v=i(d,p.props),v.ref=Nt(f,d,p),v.return=f,v):(v=Br(p.type,p.key,p.props,null,f.mode,v),v.ref=Nt(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=cl(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,k){return d===null||d.tag!==7?(d=_n(p,f.mode,v,k),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ul(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Br(d.type,d.key,d.props,null,f.mode,p),p.ref=Nt(f,null,d),p.return=f,p;case Bn:return d=cl(d,f.mode,p),d.return=f,d;case Ze:var v=d._init;return m(f,v(d._payload),p)}if(bt(d)||xt(d))return d=_n(d,f.mode,p,null),d.return=f,d;Ir(f,d)}return null}function g(f,d,p,v){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===k?u(f,d,p,v):null;case Bn:return p.key===k?c(f,d,p,v):null;case Ze:return k=p._init,g(f,d,k(p._payload),v)}if(bt(p)||xt(p))return k!==null?null:h(f,d,p,v,null);Ir(f,p)}return null}function x(f,d,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,k);case Bn:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,k);case Ze:var T=v._init;return x(f,d,p,T(v._payload),k)}if(bt(v)||xt(v))return f=f.get(p)||null,h(d,f,v,k,null);Ir(d,v)}return null}function y(f,d,p,v){for(var k=null,T=null,b=d,j=d=0,F=null;b!==null&&j<p.length;j++){b.index>j?(F=b,b=null):F=b.sibling;var _=g(f,b,p[j],v);if(_===null){b===null&&(b=F);break}e&&b&&_.alternate===null&&n(f,b),d=l(_,d,j),T===null?k=_:T.sibling=_,T=_,b=F}if(j===p.length)return t(f,b),z&&Nn(f,j),k;if(b===null){for(;j<p.length;j++)b=m(f,p[j],v),b!==null&&(d=l(b,d,j),T===null?k=b:T.sibling=b,T=b);return z&&Nn(f,j),k}for(b=r(f,b);j<p.length;j++)F=x(b,f,j,p[j],v),F!==null&&(e&&F.alternate!==null&&b.delete(F.key===null?j:F.key),d=l(F,d,j),T===null?k=F:T.sibling=F,T=F);return e&&b.forEach(function(ve){return n(f,ve)}),z&&Nn(f,j),k}function w(f,d,p,v){var k=xt(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var T=k=null,b=d,j=d=0,F=null,_=p.next();b!==null&&!_.done;j++,_=p.next()){b.index>j?(F=b,b=null):F=b.sibling;var ve=g(f,b,_.value,v);if(ve===null){b===null&&(b=F);break}e&&b&&ve.alternate===null&&n(f,b),d=l(ve,d,j),T===null?k=ve:T.sibling=ve,T=ve,b=F}if(_.done)return t(f,b),z&&Nn(f,j),k;if(b===null){for(;!_.done;j++,_=p.next())_=m(f,_.value,v),_!==null&&(d=l(_,d,j),T===null?k=_:T.sibling=_,T=_);return z&&Nn(f,j),k}for(b=r(f,b);!_.done;j++,_=p.next())_=x(b,f,j,_.value,v),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?j:_.key),d=l(_,d,j),T===null?k=_:T.sibling=_,T=_);return e&&b.forEach(function(vt){return n(f,vt)}),z&&Nn(f,j),k}function N(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var k=p.key,T=d;T!==null;){if(T.key===k){if(k=p.type,k===Hn){if(T.tag===7){t(f,T.sibling),d=i(T,p.props.children),d.return=f,f=d;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Bo(k)===T.type){t(f,T.sibling),d=i(T,p.props),d.ref=Nt(f,T,p),d.return=f,f=d;break e}t(f,T);break}else n(f,T);T=T.sibling}p.type===Hn?(d=_n(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Br(p.type,p.key,p.props,null,f.mode,v),v.ref=Nt(f,d,p),v.return=f,f=v)}return s(f);case Bn:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=cl(p,f.mode,v),d.return=f,f=d}return s(f);case Ze:return T=p._init,N(f,d,T(p._payload),v)}if(bt(p))return y(f,d,p,v);if(xt(p))return w(f,d,p,v);Ir(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,p),d.return=f,f=d):(t(f,d),d=ul(p,f.mode,v),d.return=f,f=d),s(f)):t(f,d)}return N}var ut=zu(!0),Fu=zu(!1),ri=xn(null),ii=null,Xn=null,Ps=null;function Ls(){Ps=Xn=ii=null}function As(e){var n=ri.current;D(ri),e._currentValue=n}function Bl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function it(e,n){ii=e,Ps=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(Ps!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(ii===null)throw Error(E(308));Xn=e,ii.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var bn=null;function Os(e){bn===null?bn=[e]:bn.push(e)}function Uu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Os(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ke(e,t)}return i=r.interleaved,i===null?(n.next=n,Os(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ke(e,t)}function Mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Es(e,t)}}function Ho(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,r){var i=e.updateQueue;en=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?l=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(l!==null){var m=i.baseState;s=0,h=c=u=null,a=l;do{var g=a.lane,x=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=n,x=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,m,g):y,g==null)break e;m=H({},m,g);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=m):h=h.next=x,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);On|=s,e.lanes=s,e.memoizedState=m}}function Vo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ur={},Ue=xn(ur),Xt=xn(ur),Jt=xn(ur);function jn(e){if(e===ur)throw Error(E(174));return e}function Ws(e,n){switch(M(Jt,n),M(Xt,e),M(Ue,ur),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Sl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Sl(n,e)}D(Ue),M(Ue,n)}function ct(){D(Ue),D(Xt),D(Jt)}function Hu(e){jn(Jt.current);var n=jn(Ue.current),t=Sl(n,e.type);n!==t&&(M(Xt,e),M(Ue,t))}function Ds(e){Xt.current===e&&(D(Ue),D(Xt))}var U=xn(0);function si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rl=[];function zs(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Wr=Xe.ReactCurrentDispatcher,il=Xe.ReactCurrentBatchConfig,An=0,B=null,K=null,J=null,oi=!1,Mt=!1,Zt=0,Jf=0;function re(){throw Error(E(321))}function Fs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Us(e,n,t,r,i,l){if(An=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wr.current=e===null||e.memoizedState===null?tp:rp,e=t(r,i),Mt){l=0;do{if(Mt=!1,Zt=0,25<=l)throw Error(E(301));l+=1,J=K=null,n.updateQueue=null,Wr.current=ip,e=t(r,i)}while(Mt)}if(Wr.current=ai,n=K!==null&&K.next!==null,An=0,J=K=B=null,oi=!1,n)throw Error(E(300));return e}function Bs(){var e=Zt!==0;return Zt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function je(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=J===null?B.memoizedState:J.next;if(n!==null)J=n,K=e;else{if(e===null)throw Error(E(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function er(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=je(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=K,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,u=null,c=l;do{var h=c.lane;if((An&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,B.lanes|=h,On|=h}c=c.next}while(c!==null&&c!==l);u===null?s=r:u.next=a,Me(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,On|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function sl(e){var n=je(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Me(l,n.memoizedState)||(pe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Vu(){}function $u(e,n){var t=B,r=je(),i=n(),l=!Me(r.memoizedState,i);if(l&&(r.memoizedState=i,pe=!0),r=r.queue,Hs(Yu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,nr(9,Qu.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(E(349));An&30||Gu(t,n,i)}return i}function Gu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Qu(e,n,t,r){n.value=t,n.getSnapshot=r,Ku(n)&&qu(e)}function Yu(e,n,t){return t(function(){Ku(n)&&qu(e)})}function Ku(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function qu(e){var n=Ke(e,1);n!==null&&Oe(n,e,1,-1)}function $o(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},n.queue=e,e=e.dispatch=np.bind(null,B,e),[n.memoizedState,e]}function nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Xu(){return je().memoizedState}function Dr(e,n,t,r){var i=De();B.flags|=e,i.memoizedState=nr(1|n,t,void 0,r===void 0?null:r)}function ki(e,n,t,r){var i=je();r=r===void 0?null:r;var l=void 0;if(K!==null){var s=K.memoizedState;if(l=s.destroy,r!==null&&Fs(r,s.deps)){i.memoizedState=nr(n,t,l,r);return}}B.flags|=e,i.memoizedState=nr(1|n,t,l,r)}function Go(e,n){return Dr(8390656,8,e,n)}function Hs(e,n){return ki(2048,8,e,n)}function Ju(e,n){return ki(4,2,e,n)}function Zu(e,n){return ki(4,4,e,n)}function ec(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nc(e,n,t){return t=t!=null?t.concat([e]):null,ki(4,4,ec.bind(null,n,e),t)}function Vs(){}function tc(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function rc(e,n){var t=je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ic(e,n,t){return An&21?(Me(t,n)||(t=uu(),B.lanes|=t,On|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Zf(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=il.transition;il.transition={};try{e(!1),n()}finally{O=t,il.transition=r}}function lc(){return je().memoizedState}function ep(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},sc(e))oc(n,t);else if(t=Uu(e,n,t,r),t!==null){var i=ue();Oe(t,e,r,i),ac(t,n,r)}}function np(e,n,t){var r=pn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(sc(e))oc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,a=l(s,t);if(i.hasEagerState=!0,i.eagerState=a,Me(a,s)){var u=n.interleaved;u===null?(i.next=i,Os(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Uu(e,n,i,r),t!==null&&(i=ue(),Oe(t,e,r,i),ac(t,n,r))}}function sc(e){var n=e.alternate;return e===B||n!==null&&n===B}function oc(e,n){Mt=oi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ac(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Es(e,t)}}var ai={readContext:be,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tp={readContext:be,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:Go,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Dr(4194308,4,ec.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Dr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Dr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ep.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:$o,useDebugValue:Vs,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=$o(!1),n=e[0];return e=Zf.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=De();if(z){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),Z===null)throw Error(E(349));An&30||Gu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Go(Yu.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Qu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(z){var t=$e,r=Ve;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rp={readContext:be,useCallback:tc,useContext:be,useEffect:Hs,useImperativeHandle:nc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:ll,useRef:Xu,useState:function(){return ll(er)},useDebugValue:Vs,useDeferredValue:function(e){var n=je();return ic(n,K.memoizedState,e)},useTransition:function(){var e=ll(er)[0],n=je().memoizedState;return[e,n]},useMutableSource:Vu,useSyncExternalStore:$u,useId:lc,unstable_isNewReconciler:!1},ip={readContext:be,useCallback:tc,useContext:be,useEffect:Hs,useImperativeHandle:nc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:sl,useRef:Xu,useState:function(){return sl(er)},useDebugValue:Vs,useDeferredValue:function(e){var n=je();return K===null?n.memoizedState=e:ic(n,K.memoizedState,e)},useTransition:function(){var e=sl(er)[0],n=je().memoizedState;return[e,n]},useMutableSource:Vu,useSyncExternalStore:$u,useId:lc,unstable_isNewReconciler:!1};function _e(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Hl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ni={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),i=pn(e),l=Ge(r,i);l.payload=n,t!=null&&(l.callback=t),n=dn(e,l,i),n!==null&&(Oe(n,e,i,r),Mr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),i=pn(e),l=Ge(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=dn(e,l,i),n!==null&&(Oe(n,e,i,r),Mr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=pn(e),i=Ge(t,r);i.tag=2,n!=null&&(i.callback=n),n=dn(e,i,r),n!==null&&(Oe(n,e,r,t),Mr(n,e,r))}};function Qo(e,n,t,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,r)||!Qt(i,l):!0}function uc(e,n,t){var r=!1,i=vn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=he(n)?Pn:se.current,r=n.contextTypes,l=(r=r!=null)?ot(e,i):vn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ni,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Yo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ni.enqueueReplaceState(n,n.state,null)}function Vl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ms(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=he(n)?Pn:se.current,i.context=ot(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Hl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ni.enqueueReplaceState(i,i.state,null),li(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dt(e,n){try{var t="",r=n;do t+=_d(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ol(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function $l(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function cc(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,ns=r),$l(e,n)},t}function dc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){$l(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){$l(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Ko(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=xp.bind(null,e,n,t),n.then(e,e))}function qo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xo(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var sp=Xe.ReactCurrentOwner,pe=!1;function oe(e,n,t,r){n.child=e===null?Fu(n,null,t,r):ut(n,e.child,t,r)}function Jo(e,n,t,r,i){t=t.render;var l=n.ref;return it(n,i),r=Us(e,n,t,r,l,i),t=Bs(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(z&&t&&js(n),n.flags|=1,oe(e,n,r,i),n.child)}function Zo(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Js(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,fc(e,n,l,r,i)):(e=Br(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(s,r)&&e.ref===n.ref)return qe(e,n,i)}return n.flags|=1,e=mn(l,r),e.ref=n.ref,e.return=n,n.child=e}function fc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Qt(l,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,qe(e,n,i)}return Gl(e,n,t,r,i)}function pc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Zn,ye),ye|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Zn,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,M(Zn,ye),ye|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,M(Zn,ye),ye|=r;return oe(e,n,i,t),n.child}function mc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Gl(e,n,t,r,i){var l=he(t)?Pn:se.current;return l=ot(n,l),it(n,i),t=Us(e,n,t,r,l,i),r=Bs(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(z&&r&&js(n),n.flags|=1,oe(e,n,t,i),n.child)}function ea(e,n,t,r,i){if(he(t)){var l=!0;ei(n)}else l=!1;if(it(n,i),n.stateNode===null)zr(e,n),uc(n,t,r),Vl(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var u=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=be(c):(c=he(t)?Pn:se.current,c=ot(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Yo(n,s,r,c),en=!1;var g=n.memoizedState;s.state=g,li(n,r,s,i),u=n.memoizedState,a!==r||g!==u||me.current||en?(typeof h=="function"&&(Hl(n,t,h,r),u=n.memoizedState),(a=en||Qo(n,t,a,r,g,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Bu(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:_e(n.type,a),s.props=c,m=n.pendingProps,g=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=be(u):(u=he(t)?Pn:se.current,u=ot(n,u));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Yo(n,s,r,u),en=!1,g=n.memoizedState,s.state=g,li(n,r,s,i);var y=n.memoizedState;a!==m||g!==y||me.current||en?(typeof x=="function"&&(Hl(n,t,x,r),y=n.memoizedState),(c=en||Qo(n,t,c,r,g,y,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Ql(e,n,t,r,l,i)}function Ql(e,n,t,r,i,l){mc(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&zo(n,t,!1),qe(e,n,l);r=n.stateNode,sp.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=ut(n,e.child,null,l),n.child=ut(n,null,a,l)):oe(e,n,a,l),n.memoizedState=r.state,i&&zo(n,t,!0),n.child}function hc(e){var n=e.stateNode;n.pendingContext?Do(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Do(e,n.context,!1),Ws(e,n.containerInfo)}function na(e,n,t,r,i){return at(),_s(i),n.flags|=256,oe(e,n,t,r),n.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function gc(e,n,t){var r=n.pendingProps,i=U.current,l=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(U,i&1),e===null)return Ul(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,l?(r=n.mode,l=n.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ti(s,r,0,null),e=_n(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Kl(t),n.memoizedState=Yl,e):$s(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return op(e,n,s,r,a,i,t);if(l){l=r.fallback,s=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=mn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=mn(a,l):(l=_n(l,s,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,s=e.child.memoizedState,s=s===null?Kl(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=Yl,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $s(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Tr(e,n,t,r){return r!==null&&_s(r),ut(n,e.child,null,t),e=$s(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function op(e,n,t,r,i,l,s){if(t)return n.flags&256?(n.flags&=-257,r=ol(Error(E(422))),Tr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=_n(l,i,s,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ut(n,e.child,null,s),n.child.memoizedState=Kl(s),n.memoizedState=Yl,l);if(!(n.mode&1))return Tr(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(E(419)),r=ol(l,r,void 0),Tr(e,n,s,r)}if(a=(s&e.childLanes)!==0,pe||a){if(r=Z,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ke(e,i),Oe(r,e,i,-1))}return Xs(),r=ol(Error(E(421))),Tr(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=wp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,xe=cn(i.nextSibling),we=n,z=!0,Le=null,e!==null&&(Ne[Ce++]=Ve,Ne[Ce++]=$e,Ne[Ce++]=Ln,Ve=e.id,$e=e.overflow,Ln=n),n=$s(n,r.children),n.flags|=4096,n)}function ta(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Bl(e.return,n,t)}function al(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function vc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(oe(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ta(e,t,n);else if(e.tag===19)ta(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&si(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),al(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}al(n,!0,t,null,l);break;case"together":al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),On|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ap(e,n,t){switch(n.tag){case 3:hc(n),at();break;case 5:Hu(n);break;case 1:he(n.type)&&ei(n);break;case 4:Ws(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;M(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?gc(e,n,t):(M(U,U.current&1),e=qe(e,n,t),e!==null?e.sibling:null);M(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return vc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,pc(e,n,t)}return qe(e,n,t)}var yc,ql,xc,wc;yc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ql=function(){};xc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jn(Ue.current);var l=null;switch(t){case"input":i=yl(e,i),r=yl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=El(e,i),r=El(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}kl(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ft.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function up(e,n,t){var r=n.pendingProps;switch(Rs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Zr(),ie(n),null;case 3:return r=n.stateNode,ct(),D(me),D(se),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(is(Le),Le=null))),ql(e,n),ie(n),null;case 5:Ds(n);var i=jn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)xc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ie(n),null}if(e=jn(Ue.current),Cr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[ze]=n,r[qt]=l,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Rt.length;i++)W(Rt[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":co(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":po(r,l),W("invalid",r)}kl(t,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),i=["children",""+a]):Ft.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(t){case"input":gr(r),fo(r,l,!0);break;case"textarea":gr(r),mo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ya(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[ze]=n,e[qt]=r,yc(e,n,!1,!1),n.stateNode=e;e:{switch(s=Nl(t,r),t){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rt.length;i++)W(Rt[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":co(e,r),i=yl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),W("invalid",e);break;case"textarea":po(e,r),i=El(e,r),W("invalid",e);break;default:i=r}kl(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Xa(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ka(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ut(e,u):typeof u=="number"&&Ut(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ft.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",e):u!=null&&hs(e,l,u,s))}switch(t){case"input":gr(e),fo(e,r,!1);break;case"textarea":gr(e),mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?et(e,!!r.multiple,l,!1):r.defaultValue!=null&&et(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=jn(Jt.current),jn(Ue.current),Cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(l=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return ie(n),null;case 13:if(D(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&xe!==null&&n.mode&1&&!(n.flags&128))Du(),at(),n.flags|=98560,l=!1;else if(l=Cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[ze]=n}else at(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Le!==null&&(is(Le),Le=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?q===0&&(q=3):Xs())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ct(),ql(e,n),e===null&&Yt(n.stateNode.containerInfo),ie(n),null;case 10:return As(n.type._context),ie(n),null;case 17:return he(n.type)&&Zr(),ie(n),null;case 19:if(D(U),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,s=l.rendering,s===null)if(r)Ct(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=si(e),s!==null){for(n.flags|=128,Ct(l,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>ft&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=si(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!z)return ie(n),null}else 2*Q()-l.renderingStartTime>ft&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(t=l.last,t!==null?t.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=U.current,M(U,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function cp(e,n){switch(Rs(n),n.tag){case 1:return he(n.type)&&Zr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ct(),D(me),D(se),zs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ds(n),null;case 13:if(D(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));at()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(U),null;case 4:return ct(),null;case 10:return As(n.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var br=!1,le=!1,dp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Xl(e,n,t){try{t()}catch(r){V(e,n,r)}}var ra=!1;function fp(e,n){if(Al=Kr,e=Cu(),bs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,a=-1,u=-1,c=0,h=0,m=e,g=null;n:for(;;){for(var x;m!==t||i!==0&&m.nodeType!==3||(a=s+i),m!==l||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break n;if(g===t&&++c===i&&(a=s),g===l&&++h===r&&(u=s),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ol={focusedElem:e,selectionRange:t},Kr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:_e(n.type,w),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){V(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=ra,ra=!1,y}function Wt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Xl(n,t,l)}i=i.next}while(i!==r)}}function Ci(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Jl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ec(e){var n=e.alternate;n!==null&&(e.alternate=null,Ec(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[qt],delete n[Dl],delete n[Yf],delete n[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,n,t),e=e.sibling;e!==null;)Zl(e,n,t),e=e.sibling}function es(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,n,t),e=e.sibling;e!==null;)es(e,n,t),e=e.sibling}var ee=null,Pe=!1;function Je(e,n,t){for(t=t.child;t!==null;)kc(e,n,t),t=t.sibling}function kc(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 5:le||Jn(t,n);case 6:var r=ee,i=Pe;ee=null,Je(e,n,t),ee=r,Pe=i,ee!==null&&(Pe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Pe?(e=ee,t=t.stateNode,e.nodeType===8?nl(e.parentNode,t):e.nodeType===1&&nl(e,t),$t(e)):nl(ee,t.stateNode));break;case 4:r=ee,i=Pe,ee=t.stateNode.containerInfo,Pe=!0,Je(e,n,t),ee=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Xl(t,n,s),i=i.next}while(i!==r)}Je(e,n,t);break;case 1:if(!le&&(Jn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Je(e,n,t),le=r):Je(e,n,t);break;default:Je(e,n,t)}}function la(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dp),n.forEach(function(r){var i=Ep.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Pe=!1;break e;case 3:ee=a.stateNode.containerInfo,Pe=!0;break e;case 4:ee=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(ee===null)throw Error(E(160));kc(l,s,i),ee=null,Pe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){V(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,e),n=n.sibling}function Nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),We(e),r&4){try{Wt(3,e,e.return),Ci(3,e)}catch(w){V(e,e.return,w)}try{Wt(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Re(n,e),We(e),r&512&&t!==null&&Jn(t,t.return);break;case 5:if(Re(n,e),We(e),r&512&&t!==null&&Jn(t,t.return),e.flags&32){var i=e.stateNode;try{Ut(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=t!==null?t.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ga(i,l),Nl(a,s);var c=Nl(a,l);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?Xa(i,m):h==="dangerouslySetInnerHTML"?Ka(i,m):h==="children"?Ut(i,m):hs(i,h,m,c)}switch(a){case"input":xl(i,l);break;case"textarea":Qa(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?et(i,!!l.multiple,x,!1):g!==!!l.multiple&&(l.defaultValue!=null?et(i,!!l.multiple,l.defaultValue,!0):et(i,!!l.multiple,l.multiple?[]:"",!1))}i[qt]=l}catch(w){V(e,e.return,w)}}break;case 6:if(Re(n,e),We(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){V(e,e.return,w)}}break;case 3:if(Re(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Re(n,e),We(e);break;case 13:Re(n,e),We(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ys=Q())),r&4&&la(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||h,Re(n,e),le=c):Re(n,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(g=C,x=g.child,g.tag){case 0:case 11:case 14:case 15:Wt(4,g,g.return);break;case 1:Jn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){V(r,t,w)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){oa(m);continue}}x!==null?(x.return=g,C=x):oa(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qa("display",s))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(n,e),We(e),r&4&&la(e);break;case 21:break;default:Re(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ut(i,""),r.flags&=-33);var l=ia(e);es(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ia(e);Zl(e,a,s);break;default:throw Error(E(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){C=e,Cc(e)}function Cc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||br;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||le;a=br;var c=le;if(br=s,(le=u)&&!c)for(C=i;C!==null;)s=C,u=s.child,s.tag===22&&s.memoizedState!==null?aa(i):u!==null?(u.return=s,C=u):aa(i);for(;l!==null;)C=l,Cc(l),l=l.sibling;C=i,br=a,le=c}sa(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):sa(e)}}function sa(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ci(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:_e(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Vo(n,l,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vo(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&$t(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}le||n.flags&512&&Jl(n)}catch(g){V(n,n.return,g)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function oa(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function aa(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ci(4,n)}catch(u){V(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){V(n,i,u)}}var l=n.return;try{Jl(n)}catch(u){V(n,l,u)}break;case 5:var s=n.return;try{Jl(n)}catch(u){V(n,s,u)}}}catch(u){V(n,n.return,u)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var mp=Math.ceil,ui=Xe.ReactCurrentDispatcher,Gs=Xe.ReactCurrentOwner,Te=Xe.ReactCurrentBatchConfig,A=0,Z=null,Y=null,ne=0,ye=0,Zn=xn(0),q=0,tr=null,On=0,Ii=0,Qs=0,Dt=null,fe=null,Ys=0,ft=1/0,Be=null,ci=!1,ns=null,fn=null,jr=!1,ln=null,di=0,zt=0,ts=null,Fr=-1,Ur=0;function ue(){return A&6?Q():Fr!==-1?Fr:Fr=Q()}function pn(e){return e.mode&1?A&2&&ne!==0?ne&-ne:Xf.transition!==null?(Ur===0&&(Ur=uu()),Ur):(e=O,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function Oe(e,n,t,r){if(50<zt)throw zt=0,ts=null,Error(E(185));sr(e,t,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(Ii|=t),q===4&&tn(e,ne)),ge(e,r),t===1&&A===0&&!(n.mode&1)&&(ft=Q()+500,Si&&wn()))}function ge(e,n){var t=e.callbackNode;qd(e,n);var r=Yr(e,e===Z?ne:0);if(r===0)t!==null&&vo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vo(t),n===1)e.tag===0?qf(ua.bind(null,e)):Ou(ua.bind(null,e)),Gf(function(){!(A&6)&&wn()}),t=null;else{switch(cu(r)){case 1:t=ws;break;case 4:t=ou;break;case 16:t=Qr;break;case 536870912:t=au;break;default:t=Qr}t=Lc(t,Ic.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ic(e,n){if(Fr=-1,Ur=0,A&6)throw Error(E(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var r=Yr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fi(e,r);else{n=r;var i=A;A|=2;var l=bc();(Z!==e||ne!==n)&&(Be=null,ft=Q()+500,Rn(e,n));do try{vp();break}catch(a){Tc(e,a)}while(!0);Ls(),ui.current=l,A=i,Y!==null?n=0:(Z=null,ne=0,n=q)}if(n!==0){if(n===2&&(i=jl(e),i!==0&&(r=i,n=rs(e,i))),n===1)throw t=tr,Rn(e,0),tn(e,r),ge(e,Q()),t;if(n===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!hp(i)&&(n=fi(e,r),n===2&&(l=jl(e),l!==0&&(r=l,n=rs(e,l))),n===1))throw t=tr,Rn(e,0),tn(e,r),ge(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Cn(e,fe,Be);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=Ys+500-Q(),10<n)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wl(Cn.bind(null,e,fe,Be),n);break}Cn(e,fe,Be);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-Ae(r);l=1<<s,s=n[s],s>i&&(i=s),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=Wl(Cn.bind(null,e,fe,Be),r);break}Cn(e,fe,Be);break;case 5:Cn(e,fe,Be);break;default:throw Error(E(329))}}}return ge(e,Q()),e.callbackNode===t?Ic.bind(null,e):null}function rs(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=fi(e,n),e!==2&&(n=fe,fe=t,n!==null&&is(n)),e}function is(e){fe===null?fe=e:fe.push.apply(fe,e)}function hp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Me(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Qs,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function ua(e){if(A&6)throw Error(E(327));lt();var n=Yr(e,0);if(!(n&1))return ge(e,Q()),null;var t=fi(e,n);if(e.tag!==0&&t===2){var r=jl(e);r!==0&&(n=r,t=rs(e,r))}if(t===1)throw t=tr,Rn(e,0),tn(e,n),ge(e,Q()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,fe,Be),ge(e,Q()),null}function Ks(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(ft=Q()+500,Si&&wn())}}function Mn(e){ln!==null&&ln.tag===0&&!(A&6)&&lt();var n=A;A|=1;var t=Te.transition,r=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=r,Te.transition=t,A=n,!(A&6)&&wn()}}function qs(){ye=Zn.current,D(Zn)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$f(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:ct(),D(me),D(se),zs();break;case 5:Ds(r);break;case 4:ct();break;case 13:D(U);break;case 19:D(U);break;case 10:As(r.type._context);break;case 22:case 23:qs()}t=t.return}if(Z=e,Y=e=mn(e.current,null),ne=ye=n,q=0,tr=null,Qs=Ii=On=0,fe=Dt=null,bn!==null){for(n=0;n<bn.length;n++)if(t=bn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}t.pending=r}bn=null}return e}function Tc(e,n){do{var t=Y;try{if(Ls(),Wr.current=ai,oi){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(An=0,J=K=B=null,Mt=!1,Zt=0,Gs.current=null,t===null||t.return===null){q=1,tr=n,Y=null;break}e:{var l=e,s=t.return,a=t,u=n;if(n=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=qo(s);if(x!==null){x.flags&=-257,Xo(x,s,a,l,n),x.mode&1&&Ko(l,c,n),n=x,u=c;var y=n.updateQueue;if(y===null){var w=new Set;w.add(u),n.updateQueue=w}else y.add(u);break e}else{if(!(n&1)){Ko(l,c,n),Xs();break e}u=Error(E(426))}}else if(z&&a.mode&1){var N=qo(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Xo(N,s,a,l,n),_s(dt(u,a));break e}}l=u=dt(u,a),q!==4&&(q=2),Dt===null?Dt=[l]:Dt.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=cc(l,u,n);Ho(l,f);break e;case 1:a=u;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=dc(l,a,n);Ho(l,v);break e}}l=l.return}while(l!==null)}Rc(t)}catch(k){n=k,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function bc(){var e=ui.current;return ui.current=ai,e===null?ai:e}function Xs(){(q===0||q===3||q===2)&&(q=4),Z===null||!(On&268435455)&&!(Ii&268435455)||tn(Z,ne)}function fi(e,n){var t=A;A|=2;var r=bc();(Z!==e||ne!==n)&&(Be=null,Rn(e,n));do try{gp();break}catch(i){Tc(e,i)}while(!0);if(Ls(),A=t,ui.current=r,Y!==null)throw Error(E(261));return Z=null,ne=0,q}function gp(){for(;Y!==null;)jc(Y)}function vp(){for(;Y!==null&&!Ud();)jc(Y)}function jc(e){var n=Pc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Rc(e):Y=n,Gs.current=null}function Rc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cp(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Y=null;return}}else if(t=up(t,n,ye),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);q===0&&(q=5)}function Cn(e,n,t){var r=O,i=Te.transition;try{Te.transition=null,O=1,yp(e,n,t,r)}finally{Te.transition=i,O=r}return null}function yp(e,n,t,r){do lt();while(ln!==null);if(A&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Xd(e,l),e===Z&&(Y=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,Lc(Qr,function(){return lt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var s=O;O=1;var a=A;A|=4,Gs.current=null,fp(e,t),Nc(t,e),Df(Ol),Kr=!!Al,Ol=Al=null,e.current=t,pp(t),Bd(),A=a,O=s,Te.transition=l}else e.current=t;if(jr&&(jr=!1,ln=e,di=i),l=e.pendingLanes,l===0&&(fn=null),$d(t.stateNode),ge(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=ns,ns=null,e;return di&1&&e.tag!==0&&lt(),l=e.pendingLanes,l&1?e===ts?zt++:(zt=0,ts=e):zt=0,wn(),null}function lt(){if(ln!==null){var e=cu(di),n=Te.transition,t=O;try{if(Te.transition=null,O=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,di=0,A&6)throw Error(E(331));var i=A;for(A|=4,C=e.current;C!==null;){var l=C,s=l.child;if(C.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Wt(8,h,l)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var g=h.sibling,x=h.return;if(Ec(h),h===c){C=null;break}if(g!==null){g.return=x,C=g;break}C=x}}}var y=l.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,C=s;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){s=C;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,C=p;else e:for(s=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(k){V(a,a.return,k)}if(a===s){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(A=i,wn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{O=t,Te.transition=n}}return!1}function ca(e,n,t){n=dt(t,n),n=cc(e,n,1),e=dn(e,n,1),n=ue(),e!==null&&(sr(e,1,n),ge(e,n))}function V(e,n,t){if(e.tag===3)ca(e,e,t);else for(;n!==null;){if(n.tag===3){ca(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=dt(t,e),e=dc(n,e,1),n=dn(n,e,1),e=ue(),n!==null&&(sr(n,1,e),ge(n,e));break}}n=n.return}}function xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(q===4||q===3&&(ne&130023424)===ne&&500>Q()-Ys?Rn(e,0):Qs|=t),ge(e,n)}function _c(e,n){n===0&&(e.mode&1?(n=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):n=1);var t=ue();e=Ke(e,n),e!==null&&(sr(e,n,t),ge(e,t))}function wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_c(e,t)}function Ep(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),_c(e,t)}var Pc;Pc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,ap(e,n,t);pe=!!(e.flags&131072)}else pe=!1,z&&n.flags&1048576&&Mu(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var i=ot(n,se.current);it(n,t),i=Us(null,n,r,e,i,t);var l=Bs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(l=!0,ei(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ms(n),i.updater=Ni,n.stateNode=i,i._reactInternals=n,Vl(n,r,e,t),n=Ql(null,n,r,!0,l,t)):(n.tag=0,z&&l&&js(n),oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=kp(r),e=_e(r,e),i){case 0:n=Gl(null,n,r,e,t);break e;case 1:n=ea(null,n,r,e,t);break e;case 11:n=Jo(null,n,r,e,t);break e;case 14:n=Zo(null,n,r,_e(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_e(r,i),Gl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_e(r,i),ea(e,n,r,i,t);case 3:e:{if(hc(n),e===null)throw Error(E(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Bu(e,n),li(n,r,null,t);var s=n.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=dt(Error(E(423)),n),n=na(e,n,r,t,i);break e}else if(r!==i){i=dt(Error(E(424)),n),n=na(e,n,r,t,i);break e}else for(xe=cn(n.stateNode.containerInfo.firstChild),we=n,z=!0,Le=null,t=Fu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(at(),r===i){n=qe(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return Hu(n),e===null&&Ul(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Ml(r,i)?s=null:l!==null&&Ml(r,l)&&(n.flags|=32),mc(e,n),oe(e,n,s,t),n.child;case 6:return e===null&&Ul(n),null;case 13:return gc(e,n,t);case 4:return Ws(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ut(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_e(r,i),Jo(e,n,r,i,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,s=i.value,M(ri,r._currentValue),r._currentValue=s,l!==null)if(Me(l.value,s)){if(l.children===i.children&&!me.current){n=qe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ge(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Bl(l.return,t,n),a.lanes|=t;break}u=u.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(E(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Bl(s,t,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,it(n,t),i=be(i),r=r(i),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,i=_e(r,n.pendingProps),i=_e(r.type,i),Zo(e,n,r,i,t);case 15:return fc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_e(r,i),zr(e,n),n.tag=1,he(r)?(e=!0,ei(n)):e=!1,it(n,t),uc(n,r,i),Vl(n,r,i,t),Ql(null,n,r,!0,e,t);case 19:return vc(e,n,t);case 22:return pc(e,n,t)}throw Error(E(156,n.tag))};function Lc(e,n){return su(e,n)}function Sp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,r){return new Sp(e,n,t,r)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===ys)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Br(e,n,t,r,i,l){var s=2;if(r=e,typeof e=="function")Js(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Hn:return _n(t.children,i,l,n);case gs:s=8,i|=8;break;case ml:return e=Ie(12,t,n,i|2),e.elementType=ml,e.lanes=l,e;case hl:return e=Ie(13,t,n,i),e.elementType=hl,e.lanes=l,e;case gl:return e=Ie(19,t,n,i),e.elementType=gl,e.lanes=l,e;case Ha:return Ti(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ua:s=10;break e;case Ba:s=9;break e;case vs:s=11;break e;case ys:s=14;break e;case Ze:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Ie(s,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function _n(e,n,t,r){return e=Ie(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=Ie(22,e,r,n),e.elementType=Ha,e.lanes=t,e.stateNode={isHidden:!1},e}function ul(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function cl(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Np(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zs(e,n,t,r,i,l,s,a,u){return e=new Np(e,n,t,a,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ie(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(l),e}function Cp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ac(e){if(!e)return vn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(he(t))return Au(e,t,n)}return n}function Oc(e,n,t,r,i,l,s,a,u){return e=Zs(t,r,!0,e,i,l,s,a,u),e.context=Ac(null),t=e.current,r=ue(),i=pn(t),l=Ge(r,i),l.callback=n??null,dn(t,l,i),e.current.lanes=i,sr(e,i,r),ge(e,r),e}function bi(e,n,t,r){var i=n.current,l=ue(),s=pn(i);return t=Ac(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(l,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(i,n,s),e!==null&&(Oe(e,i,s,l),Mr(e,i,s)),s}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function da(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function eo(e,n){da(e,n),(e=e.alternate)&&da(e,n)}function Ip(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function no(e){this._internalRoot=e}ji.prototype.render=no.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));bi(e,n,null,null)};ji.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mn(function(){bi(null,e,null,null)}),n[Ye]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var n=pu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&hu(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fa(){}function Tp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=pi(s);l.call(c)}}var s=Oc(n,r,e,0,null,!1,!1,"",fa);return e._reactRootContainer=s,e[Ye]=s.current,Yt(e.nodeType===8?e.parentNode:e),Mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=pi(u);a.call(c)}}var u=Zs(e,0,!1,null,null,!1,!1,"",fa);return e._reactRootContainer=u,e[Ye]=u.current,Yt(e.nodeType===8?e.parentNode:e),Mn(function(){bi(n,u,t,r)}),u}function _i(e,n,t,r,i){var l=t._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var u=pi(s);a.call(u)}}bi(n,s,e,i)}else s=Tp(t,n,e,i,r);return pi(s)}du=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(Es(n,t|1),ge(n,Q()),!(A&6)&&(ft=Q()+500,wn()))}break;case 13:Mn(function(){var r=Ke(e,1);if(r!==null){var i=ue();Oe(r,e,1,i)}}),eo(e,1)}};Ss=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=ue();Oe(n,e,134217728,t)}eo(e,134217728)}};fu=function(e){if(e.tag===13){var n=pn(e),t=Ke(e,n);if(t!==null){var r=ue();Oe(t,e,n,r)}eo(e,n)}};pu=function(){return O};mu=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Il=function(e,n,t){switch(n){case"input":if(xl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ei(r);if(!i)throw Error(E(90));$a(r),xl(r,i)}}}break;case"textarea":Qa(e,t);break;case"select":n=t.value,n!=null&&et(e,!!t.multiple,n,!1)}};eu=Ks;nu=Mn;var bp={usingClientEntryPoint:!1,Events:[ar,Qn,Ei,Ja,Za,Ks]},It={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jp={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{vi=Rr.inject(jp),Fe=Rr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(n))throw Error(E(200));return Cp(e,n,null,t)};Se.createRoot=function(e,n){if(!to(e))throw Error(E(299));var t=!1,r="",i=Mc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Zs(e,1,!1,null,null,t,!1,r,i),e[Ye]=n.current,Yt(e.nodeType===8?e.parentNode:e),new no(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=iu(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Mn(e)};Se.hydrate=function(e,n,t){if(!Ri(n))throw Error(E(200));return _i(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!to(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",s=Mc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,i,!1,l,s),e[Ye]=n.current,Yt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ji(n)};Se.render=function(e,n,t){if(!Ri(n))throw Error(E(200));return _i(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(E(40));return e._reactRootContainer?(Mn(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=Ks;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ri(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return _i(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Wa.exports=Se;var Rp=Wa.exports,pa=Rp;fl.createRoot=pa.createRoot,fl.hydrateRoot=pa.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const ma="popstate";function _p(e){e===void 0&&(e={});function n(i,l){let{pathname:s="/",search:a="",hash:u=""}=zn(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),ls("",{pathname:s,search:a,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof l=="string"?l:mi(l))}function r(i,l){Pi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Lp(n,t,r,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Pi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Pp(){return Math.random().toString(36).substr(2,8)}function ha(e,n){return{usr:e.state,key:e.key,idx:n}}function ls(e,n,t,r){return t===void 0&&(t=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?zn(n):n,{state:t,key:n&&n.key||r||Pp()})}function mi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function zn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Lp(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=sn.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(rr({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function m(){a=sn.Pop;let N=h(),f=N==null?null:N-c;c=N,u&&u({action:a,location:w.location,delta:f})}function g(N,f){a=sn.Push;let d=ls(w.location,N,f);t&&t(d,N),c=h()+1;let p=ha(d,c),v=w.createHref(d);try{s.pushState(p,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(v)}l&&u&&u({action:a,location:w.location,delta:1})}function x(N,f){a=sn.Replace;let d=ls(w.location,N,f);t&&t(d,N),c=h();let p=ha(d,c),v=w.createHref(d);s.replaceState(p,"",v),l&&u&&u({action:a,location:w.location,delta:0})}function y(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:mi(N);return d=d.replace(/ $/,"%20"),$(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(i,s)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ma,m),u=N,()=>{i.removeEventListener(ma,m),u=null}},createHref(N){return n(i,N)},createURL:y,encodeLocation(N){let f=y(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(N){return s.go(N)}};return w}var ga;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ga||(ga={}));function Ap(e,n,t){return t===void 0&&(t="/"),Op(e,n,t)}function Op(e,n,t,r){let i=typeof n=="string"?zn(n):n,l=pt(i.pathname||"/",t);if(l==null)return null;let s=Dc(e);Mp(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Qp(l);a=$p(s[u],c)}return a}function Dc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,s,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};u.relativePath.startsWith("/")&&($(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hn([r,u.relativePath]),h=t.concat(u);l.children&&l.children.length>0&&($(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dc(l.children,n,h,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:Hp(c,l.index),routesMeta:h})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let u of zc(l.path))i(l,s,u)}),n}function zc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=zc(r.join("/")),a=[];return a.push(...s.map(u=>u===""?l:[l,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Mp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Vp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Wp=/^:[\w-]+$/,Dp=3,zp=2,Fp=1,Up=10,Bp=-2,va=e=>e==="*";function Hp(e,n){let t=e.split("/"),r=t.length;return t.some(va)&&(r+=Bp),n&&(r+=zp),t.filter(i=>!va(i)).reduce((i,l)=>i+(Wp.test(l)?Dp:l===""?Fp:Up),r)}function Vp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function $p(e,n,t){let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=l==="/"?n:n.slice(l.length)||"/",m=ss({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:hn([l,m.pathname]),pathnameBase:Jp(hn([l,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(l=hn([l,m.pathnameBase]))}return s}function ss(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Gp(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let w=a[m]||"";s=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[m];return x&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:s,pattern:e}}function Gp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Pi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Qp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Pi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function pt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kp=e=>Yp.test(e);function qp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?zn(e):e,l;if(t)if(Kp(t))l=t;else{if(t.includes("//")){let s=t;t=t.replace(/\/\/+/g,"/"),Pi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+t))}t.startsWith("/")?l=ya(t.substring(1),"/"):l=ya(t,n)}else l=n;return{pathname:l,search:Zp(r),hash:em(i)}}function ya(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function dl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Fc(e,n){let t=Xp(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Uc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zn(e):(i=rr({},e),$(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=t;else{let m=n.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?n[m]:"/"}let u=qp(i,a),c=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Jp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,em=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bc=["post","put","patch","delete"];new Set(Bc);const tm=["get",...Bc];new Set(tm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(this,arguments)}const Li=S.createContext(null),Hc=S.createContext(null),En=S.createContext(null),Ai=S.createContext(null),Fn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=S.createContext(null);function rm(e,n){let{relative:t}=n===void 0?{}:n;cr()||$(!1);let{basename:r,navigator:i}=S.useContext(En),{hash:l,pathname:s,search:a}=Oi(e,{relative:t}),u=s;return r!=="/"&&(u=s==="/"?r:hn([r,s])),i.createHref({pathname:u,search:a,hash:l})}function cr(){return S.useContext(Ai)!=null}function dr(){return cr()||$(!1),S.useContext(Ai).location}function $c(e){S.useContext(En).static||S.useLayoutEffect(e)}function im(){let{isDataRoute:e}=S.useContext(Fn);return e?vm():lm()}function lm(){cr()||$(!1);let e=S.useContext(Li),{basename:n,future:t,navigator:r}=S.useContext(En),{matches:i}=S.useContext(Fn),{pathname:l}=dr(),s=JSON.stringify(Fc(i,t.v7_relativeSplatPath)),a=S.useRef(!1);return $c(()=>{a.current=!0}),S.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Uc(c,JSON.parse(s),l,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:hn([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,s,l,e])}function Oi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=S.useContext(En),{matches:i}=S.useContext(Fn),{pathname:l}=dr(),s=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return S.useMemo(()=>Uc(e,JSON.parse(s),l,t==="path"),[e,s,l,t])}function sm(e,n){return om(e,n)}function om(e,n,t,r){cr()||$(!1);let{navigator:i}=S.useContext(En),{matches:l}=S.useContext(Fn),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=dr(),h;if(n){var m;let N=typeof n=="string"?zn(n):n;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||$(!1),h=N}else h=c;let g=h.pathname||"/",x=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=Ap(e,{pathname:x}),w=fm(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:hn([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:hn([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,t,r);return n&&w?S.createElement(Ai.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},w):w}function am(){let e=gm(),n=nm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:i},t):null,null)}const um=S.createElement(am,null);class cm extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(Fn.Provider,{value:this.props.routeContext},S.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dm(e){let{routeContext:n,match:t,children:r}=e,i=S.useContext(Li);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Fn.Provider,{value:n},r)}function fm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||$(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:x}=t,y=m.route.loader&&g[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let x,y=!1,w=null,N=null;t&&(x=a&&m.route.id?a[m.route.id]:void 0,w=m.route.errorElement||um,u&&(c<0&&g===0?(ym("route-fallback"),y=!0,N=null):c===g&&(y=!0,N=m.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,g+1)),d=()=>{let p;return x?p=w:y?p=N:m.route.Component?p=S.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,S.createElement(dm,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:t!=null},children:p})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?S.createElement(cm,{location:t.location,revalidation:t.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Gc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gc||{}),Qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qc||{});function pm(e){let n=S.useContext(Li);return n||$(!1),n}function mm(e){let n=S.useContext(Hc);return n||$(!1),n}function hm(e){let n=S.useContext(Fn);return n||$(!1),n}function Yc(e){let n=hm(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function gm(){var e;let n=S.useContext(Vc),t=mm(),r=Yc();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function vm(){let{router:e}=pm(Gc.UseNavigateStable),n=Yc(Qc.UseNavigateStable),t=S.useRef(!1);return $c(()=>{t.current=!0}),S.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:n},l)))},[e,n])}const xa={};function ym(e,n,t){xa[e]||(xa[e]=!0)}function xm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function In(e){$(!1)}function wm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=sn.Pop,navigator:l,static:s=!1,future:a}=e;cr()&&$(!1);let u=n.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:l,static:s,future:ir({v7_relativeSplatPath:!1},a)}),[u,a,l,s]);typeof r=="string"&&(r=zn(r));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:y="default"}=r,w=S.useMemo(()=>{let N=pt(h,u);return N==null?null:{location:{pathname:N,search:m,hash:g,state:x,key:y},navigationType:i}},[u,h,m,g,x,y,i]);return w==null?null:S.createElement(En.Provider,{value:c},S.createElement(Ai.Provider,{children:t,value:w}))}function Em(e){let{children:n,location:t}=e;return sm(os(n),t)}new Promise(()=>{});function os(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let l=[...n,i];if(r.type===S.Fragment){t.push.apply(t,os(r.props.children,l));return}r.type!==In&&$(!1),!r.props.index||!r.props.children||$(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=os(r.props.children,l)),t.push(s)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hi.apply(this,arguments)}function Kc(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Sm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function km(e,n){return e.button===0&&(!n||n==="_self")&&!Sm(e)}const Nm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Im="6";try{window.__reactRouterVersion=Im}catch{}const Tm=S.createContext({isTransitioning:!1}),bm="startTransition",wa=yd[bm];function jm(e){let{basename:n,children:t,future:r,window:i}=e,l=S.useRef();l.current==null&&(l.current=_p({window:i,v5Compat:!0}));let s=l.current,[a,u]=S.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=S.useCallback(m=>{c&&wa?wa(()=>u(m)):u(m)},[u,c]);return S.useLayoutEffect(()=>s.listen(h),[s,h]),S.useEffect(()=>xm(r),[r]),S.createElement(wm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hr=S.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:s,state:a,target:u,to:c,preventScrollReset:h,viewTransition:m}=n,g=Kc(n,Nm),{basename:x}=S.useContext(En),y,w=!1;if(typeof c=="string"&&_m.test(c)&&(y=c,Rm))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),k=pt(v.pathname,x);v.origin===p.origin&&k!=null?c=k+v.search+v.hash:w=!0}catch{}let N=rm(c,{relative:i}),f=Lm(c,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return S.createElement("a",hi({},g,{href:y||N,onClick:w||l?r:d,ref:t,target:u}))}),Ea=S.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:s=!1,style:a,to:u,viewTransition:c,children:h}=n,m=Kc(n,Cm),g=Oi(u,{relative:m.relative}),x=dr(),y=S.useContext(Hc),{navigator:w,basename:N}=S.useContext(En),f=y!=null&&Am(g)&&c===!0,d=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,p=x.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&N&&(v=pt(v,N)||v);const k=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=p===d||!s&&p.startsWith(d)&&p.charAt(k)==="/",b=v!=null&&(v===d||!s&&v.startsWith(d)&&v.charAt(d.length)==="/"),j={isActive:T,isPending:b,isTransitioning:f},F=T?r:void 0,_;typeof l=="function"?_=l(j):_=[l,T?"active":null,b?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ve=typeof a=="function"?a(j):a;return S.createElement(Hr,hi({},m,{"aria-current":F,className:_,ref:t,style:ve,to:u,viewTransition:c}),typeof h=="function"?h(j):h)});var as;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(as||(as={}));var Sa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sa||(Sa={}));function Pm(e){let n=S.useContext(Li);return n||$(!1),n}function Lm(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:s,viewTransition:a}=n===void 0?{}:n,u=im(),c=dr(),h=Oi(e,{relative:s});return S.useCallback(m=>{if(km(m,t)){m.preventDefault();let g=r!==void 0?r:mi(c)===mi(h);u(e,{replace:g,state:i,preventScrollReset:l,relative:s,viewTransition:a})}},[c,u,h,r,i,t,e,l,s,a])}function Am(e,n){n===void 0&&(n={});let t=S.useContext(Tm);t==null&&$(!1);let{basename:r}=Pm(as.useViewTransitionState),i=Oi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let l=pt(t.currentLocation.pathname,r)||t.currentLocation.pathname,s=pt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ss(i.pathname,s)!=null||ss(i.pathname,l)!=null}const Om=[{to:"/frameworks",label:"_01_FRAMEWORKS"},{to:"/prompts",label:"_02_PROMPTS"},{to:"/agents",label:"_03_AGENTS"},{to:"/workflows",label:"_04_WORKFLOWS"},{to:"/templates",label:"_05_TEMPLATES"}];function Mm(){return o.jsx("nav",{className:"border-b border-is-border bg-is-bg sticky top-0 z-50",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex items-center h-12 gap-8",children:[o.jsx(Ea,{to:"/",className:"font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0",children:"Invisible Signals™"}),o.jsx("span",{className:"w-px h-4 bg-is-border shrink-0"}),o.jsx("div",{className:"flex items-center gap-1 overflow-x-auto flex-1 min-w-0",children:Om.map(({to:e,label:n})=>o.jsx(Ea,{to:e,className:({isActive:t})=>`px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors border ${t?"border-is-primary/40 text-is-primary bg-is-primary/10":"border-transparent text-is-dim hover:text-is-text hover:border-is-border"}`,children:n},e))}),o.jsxs("div",{className:"flex items-center gap-3 shrink-0 ml-auto",children:[o.jsx("span",{className:"hidden sm:block font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]})})}function ae({color:e="blue",children:n}){const t={blue:"bg-is-primary/10 text-is-primary border-is-primary/30",coral:"bg-is-alert/10 text-is-alert border-is-alert/30",gold:"bg-is-warning/10 text-is-warning border-is-warning/30",dim:"bg-transparent text-is-dim border-is-border"};return o.jsxs("span",{className:`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs uppercase tracking-widest ${t[e]??t.dim}`,children:[e!=="dim"&&o.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e==="blue"?"bg-is-primary":e==="coral"?"bg-is-alert":"bg-is-warning"}`}),n]})}function Wm(){return o.jsxs("div",{className:"h-32 flex items-end gap-1 overflow-hidden opacity-40",children:[o.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2s_infinite]",style:{height:"20%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/30 animate-[pulse_2.2s_infinite]",style:{height:"45%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_1.8s_infinite]",style:{height:"70%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/25 animate-[pulse_2.5s_infinite]",style:{height:"30%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/40 animate-[pulse_1.5s_infinite]",style:{height:"90%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2.1s_infinite]",style:{height:"50%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/35 animate-[pulse_2.4s_infinite]",style:{height:"65%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_1.9s_infinite]",style:{height:"25%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/50 animate-[pulse_1.2s_infinite]",style:{height:"100%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/20 animate-[pulse_2.3s_infinite]",style:{height:"40%"}}),o.jsx("div",{className:"flex-1 bg-is-primary/30 animate-[pulse_1.7s_infinite]",style:{height:"80%"}})]})}function Dm(){return o.jsxs("div",{className:"relative w-40 h-40 flex items-center justify-center",children:[o.jsx("div",{className:"absolute inset-0 border border-is-primary/20 rounded-full"}),o.jsx("div",{className:"absolute inset-4 border border-is-primary/30 rounded-full"}),o.jsx("div",{className:"absolute inset-8 border border-is-primary/50 rounded-full"}),o.jsx("div",{className:"absolute inset-12 border border-is-primary/70 rounded-full"}),o.jsx("div",{className:"w-3 h-3 bg-is-primary rounded-full"}),o.jsx("div",{className:"absolute top-4 right-8",style:{animation:"orbit-cw 7s linear infinite",transformOrigin:"-42px 64px"},children:o.jsx("div",{className:"w-1.5 h-1.5 bg-is-alert",style:{animation:"orbit-ccw 7s linear infinite"}})}),o.jsx("div",{className:"absolute bottom-6 left-6",style:{animation:"orbit-cw 5.5s linear infinite",transformOrigin:"56px -50px"},children:o.jsx("div",{className:"w-1.5 h-1.5 bg-is-warning",style:{animation:"orbit-ccw 5.5s linear infinite"}})})]})}const zm=[{id:"01_LAYER",name:"TECHNICAL BASE",tier:"FREE +AE",desc:"Demonstrate and articulate your system-level skills and complexity with transparency."},{id:"02_LAYER",name:"OWNERSHIP",tier:"FREE +AE",desc:"Source and accountability for project-critical decisions and outcomes."},{id:"03_LAYER",name:"TRANSLATION",tier:"FREE +JRE",desc:"Distilling technical complexity into business-centric language that lands with stakeholders.",accent:!0}],Fm=[{to:"/frameworks",tag:"FRAMEWORKS",icon:"⬡",title:"Frameworks",desc:"No-code meta models for evaluating architectural judgment beyond the job log.",pill:"SIGNAL_LOOP",pillColor:"blue"},{to:"/prompts",tag:"PROMPTS",icon:"···",title:"Prompts",desc:"System-level instructions to analyze career metadata and generate telemetry goals.",pill:"SIGNAL_MAP",pillColor:"blue"},{to:"/agents",tag:"AGENTS",icon:"◈",title:"Agents",desc:"Automated workflows that scan project history and generate high-fidelity impact reports.",pill:"V0.4 / PUBLIC",pillColor:"gold"},{to:"/workflows",tag:"WORKFLOWS",icon:"↻",title:"Workflows",desc:"Repeatable pipelines for live interview calibration, performance cycles, and promotion runs.",pill:"V0.3 MAT",pillColor:"dim"},{to:"/templates",tag:"TEMPLATES",icon:"◻",title:"Templates",desc:"Structured markdown documents for auditing, scoring, and improving your career signals.",pill:"SIGNAL_ACTIVE",pillColor:"gold"}],Um=[{num:"01",title:"VALUE MODULATION",body:"Stop describing tasks; start describing outcomes. High-value work is invisible until translated in the language of organizational growth."},{num:"02",title:"ALGORITHMIC SHARPNESS",body:"Use AI to retrieve value from your narrative. Intelligence tools should work for you; they should diagnose your architectural logic."},{num:"03",title:"SIGNAL INTERPRETATION",body:"Hiring systems are human and machine signal processors. Your objective is to raise the signal-to-noise ratio in every transmission."},{num:"04",title:"REPEATABLE TELEMETRY",body:"Career growth is a series of repeatable processes for surfacing and presenting progress. Lucky signals are not engineered; signals are permanent."}];function Bm(){return o.jsxs("div",{className:"w-full",children:[o.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20 md:py-32",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-10",children:[o.jsx(ae,{color:"blue",children:"● SYSTEM STATUS: ONLINE // ESTABLISHED"}),o.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest hidden sm:block",children:"SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6",children:["CAREER SIGNAL",o.jsx("br",{}),o.jsx("em",{className:"not-italic text-is-primary",children:"INTELLIGENCE."})]}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-xl mb-10",children:"Open-source telemetry for engineers and leaders. Detect, refine, and transmit professional impact in the age of algorithmic hiring."}),o.jsxs("div",{className:"flex flex-wrap gap-3",children:[o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"is-btn-primary",children:"INITIALIZE SIGNAL"}),o.jsx(Hr,{to:"/frameworks",className:"is-btn-ghost",children:"DOCUMENTATION"})]})]}),o.jsxs("div",{className:"is-panel p-4 relative",children:[o.jsx("div",{className:"absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary",children:"SIG_TRACE_01"}),o.jsx("div",{className:"is-label mb-3",children:"SIGNAL_STRENGTH_READOUT"}),o.jsx(Wm,{}),o.jsx("div",{className:"grid grid-cols-3 gap-px mt-1 border-t border-is-border pt-3",children:["TECHNICAL","OWNERSHIP","TRANSLATION"].map(e=>o.jsx("div",{className:"font-mono text-xs text-is-dim",children:e},e))})]})]})]})}),o.jsx("section",{className:"border-b border-is-border px-6 py-20",children:o.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-6",children:"DIAGNOSTIC: CLARITY_GAP"}),o.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text mb-8",children:["TECHNICAL SKILL",o.jsx("br",{}),"IS NOT THE"," ",o.jsx("em",{className:"not-italic text-is-alert",children:"ISSUE."})]}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed mb-8 max-w-lg",children:'In a market saturated with technical noise, your ability to "translate" until transmitted. The clarity of your signal determines your career trajectory.'}),o.jsxs("div",{className:"is-panel border-l-2 border-l-is-alert p-4",children:[o.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-2",children:"⚠ CRITICAL_FAILURE_RETURN"}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:"Most engineers fail to communicate ownership, organizational judgment, and business impact to humans and in hires."})]})]}),o.jsxs("div",{className:"flex flex-col items-center gap-8",children:[o.jsxs("div",{className:"is-panel p-6 w-full flex flex-col items-center",children:[o.jsx("div",{className:"is-label mb-4",children:"SEARCHING_FOR_SIGNAL..."}),o.jsx(Dm,{})]}),o.jsxs("div",{className:"is-panel p-4 w-full",children:[o.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),o.jsx("div",{className:"space-y-2",children:[{label:"TECHNICAL NOISE",pct:88,color:"bg-is-dim"},{label:"OWNERSHIP SIGNAL",pct:34,color:"bg-is-primary"},{label:"IMPACT CLARITY",pct:21,color:"bg-is-alert"}].map(({label:e,pct:n,color:t})=>o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between mb-1",children:[o.jsx("span",{className:"font-mono text-xs text-is-dim",children:e}),o.jsxs("span",{className:"font-mono text-xs text-is-dim",children:[n,"%"]})]}),o.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:o.jsx("div",{className:`h-full ${t}`,style:{width:`${n}%`}})})]},e))})]})]})]})}),o.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4 mb-10",children:[o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-2",children:"BUILT_ON"}),o.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_STACK"})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:"font-mono text-xs text-is-dim",children:"PROGRESS_REFERENCE: CODE: 1"}),o.jsx("div",{className:"font-mono text-xs text-is-dim",children:"LATEST_EFFECTIVE: 17 / 22"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-is-border",children:[zm.map(({id:e,name:n,tier:t,desc:r,accent:i})=>o.jsxs("div",{className:"bg-is-bg p-5 flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-mono text-xs text-is-dim",children:e}),o.jsx(ae,{color:i?"coral":"blue",children:t})]}),o.jsx("div",{className:"font-mono text-sm font-semibold text-is-text uppercase tracking-wide",children:n}),o.jsx("p",{className:"font-body text-xs text-is-dim leading-relaxed flex-1",children:r}),o.jsx("div",{className:"h-px bg-is-border"}),o.jsx("div",{className:"font-mono text-xs text-is-dim",children:"LAYER_DETAIL →"})]},e)),o.jsxs("div",{className:"bg-is-bg p-5 flex flex-col items-center justify-center gap-3 border border-is-border",children:[o.jsx("div",{className:"w-8 h-8 border border-is-border flex items-center justify-center",children:o.jsx("span",{className:"font-mono text-lg text-is-dim",children:"+"})}),o.jsx("div",{className:"font-mono text-xs text-is-dim text-center",children:"5 MORE LAYERS"}),o.jsx(Hr,{to:"/frameworks",className:"font-mono text-xs text-is-primary hover:underline",children:"VIEW_ALL →"})]})]})]})}),o.jsx("section",{className:"border-b border-is-border px-6 py-20",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-is-border",children:Fm.map(({to:e,tag:n,icon:t,title:r,desc:i,pill:l,pillColor:s})=>o.jsxs(Hr,{to:e,className:"group bg-is-bg p-6 flex flex-col gap-4 hover:bg-is-surface transition-colors",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"font-mono text-xl text-is-dim",children:t}),o.jsx(ae,{color:s,children:l})]}),o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-1",children:n}),o.jsx("div",{className:"font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors",children:r})]}),o.jsx("p",{className:"font-body text-xs text-is-dim leading-relaxed flex-1",children:i}),o.jsx("div",{className:"font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity",children:"EXPLORE →"})]},e))})})}),o.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("div",{className:"is-label mb-3",children:"SIGNAL_SIGNAL_SPECTRUM"}),o.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL CALIBRATION"})]}),o.jsxs("div",{className:"is-panel p-0 overflow-hidden",children:[o.jsxs("div",{className:"border-b border-is-border px-5 py-3 flex items-center justify-between bg-is-surface",children:[o.jsx("div",{className:"flex items-center gap-4",children:o.jsx("span",{className:"is-label",children:"PROCESS_ID: SIGNAL_PARALLAX"})}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"font-mono text-xs text-is-dim",children:"STEP: 1 / 3"}),o.jsx(ae,{color:"gold",children:"CALIBRATING"}),o.jsx(ae,{color:"blue",children:"SIGNAL_BLANKET"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border",children:[o.jsxs("div",{className:"bg-is-bg p-6",children:[o.jsx("div",{className:"is-label mb-4",children:"RAW_INPUT_SIGNAL"}),o.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-dim leading-relaxed italic",children:'"I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."'}),o.jsx("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.13 (CRITICAL_LOW)",color:"text-is-alert"},{label:"INPUT_RESOLUTION",val:"NULL_DETECTED",color:"text-is-alert"},{label:"COMPLEXITY_INDEX",val:"GHOST_RUN",color:"text-is-warning"}].map(({label:e,val:n,color:t})=>o.jsxs("div",{className:"border border-is-border p-2",children:[o.jsx("div",{className:"font-mono text-xs text-is-dim mb-1",children:e}),o.jsx("div",{className:`font-mono text-xs font-semibold ${t}`,children:n})]},e))})]}),o.jsxs("div",{className:"bg-is-bg p-6",children:[o.jsx("div",{className:"is-label mb-4",children:"PROCESSED_SIGNAL_CLARITY"}),o.jsx("div",{className:"is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed",children:`"Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."`}),o.jsx("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.94 CONFIRMED",color:"text-is-primary"},{label:"INPUT_RESOLUTION",val:"QUANTIFIED",color:"text-is-primary"},{label:"COMPLEXITY_INDEX",val:"HYPERLINK_HIGH",color:"text-is-primary"}].map(({label:e,val:n,color:t})=>o.jsxs("div",{className:"border border-is-border p-2",children:[o.jsx("div",{className:"font-mono text-xs text-is-dim mb-1",children:e}),o.jsx("div",{className:`font-mono text-xs font-semibold ${t}`,children:n})]},e))})]})]})]})]})}),o.jsx("section",{className:"border-b border-is-border px-6 py-20",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("div",{className:"is-label",children:"BUILT_ON // CODE_PRINCIPLES"}),o.jsx("div",{className:"is-label",children:"BUILT_BY: ANNYCE_DAVIS"})]}),o.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text",children:["NOT HACKING.",o.jsx("br",{}),o.jsx("em",{className:"not-italic text-is-alert",children:"RESOLUTION."})]}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed mt-6 max-w-2xl",children:"The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer."})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border",children:Um.map(({num:e,title:n,body:t})=>o.jsxs("div",{className:"bg-is-bg p-8",children:[o.jsx("div",{className:"font-mono text-xs text-is-primary mb-4",children:e}),o.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide",children:n}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:t})]},e))})]})}),o.jsx("section",{className:"px-6 py-32 bg-is-bg",children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx("div",{className:"w-8 h-px bg-is-primary"})}),o.jsxs("h2",{className:"font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4",children:["INITIALIZE",o.jsx("br",{}),o.jsx("em",{className:"not-italic text-is-primary",children:"YOUR SIGNAL."})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mt-10",children:[o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"is-btn-primary",children:"↗ SIGNAL REPOSITORY"}),o.jsx("span",{className:"font-mono text-xs text-is-dim",children:"FRAMEWORK: V0.1"})]})]})})]})}const ka=[{id:"RESUME_REVIEW",label:"01 // RÉSUMÉ REVIEW",question:"Does this candidate clear the bar on paper?",signals:["Trajectory — is scope and responsibility clearly growing?","Impact language — outcomes vs. activities vs. tasks","Signal Stack coverage relative to the role requirements","Tailoring gap — does the candidate match this specific role?"],pitfalls:["Activity-based bullets with no outcome or impact","Generic résumés sent without tailoring","Missing evidence for ownership or business judgment"],examples:[{id:"EX_01",label:"01 // ACTIVITY VS IMPACT",weak:"Worked on Android app modernization using Kotlin.",strong:"Migrated critical Android checkout flows from Java to Kotlin, reducing crash-related support tickets by 32% and improving release stability during peak retail periods."},{id:"EX_02",label:"02 // GENERIC LEADERSHIP",weak:"Led cross-functional collaboration across teams.",strong:"Coordinated API contract alignment between mobile, backend, and platform teams to unblock a multi-quarter authentication migration affecting 4 product surfaces."},{id:"EX_03",label:"03 // SENIOR-LEVEL SIGNAL",weak:"Responsible for architecture decisions.",strong:"Defined mobile caching strategy for high-traffic commerce APIs, reducing redundant network requests and improving app startup reliability under unstable network conditions."},{id:"EX_04",label:"04 // ENGINEERING LEADERSHIP",weak:"Managed a team of engineers.",strong:"Led a team of 8 engineers across mobile and platform initiatives, improving sprint predictability and reducing production escalation volume through tighter dependency planning and release coordination."},{id:"EX_05",label:"05 // AI-ASSISTED RISKS",weak:"Visionary engineering leader driving innovative scalable solutions across cross-functional ecosystems.",strong:"Standardized CI workflows across 12 repositories, reducing release inconsistencies and shortening onboarding time for new engineers."}]},{id:"RECRUITER_SCREEN",label:"02 // RECRUITER SCREEN",question:"Is this a plausible fit for the role and company?",signals:["Compensation alignment and timeline","Location / work-model fit","Basic role comprehension — do they understand the scope?","Genuine interest signal vs. spray-and-pray behavior"],pitfalls:["Discussing compensation before understanding the role","Treating recruiters as gatekeepers rather than advocates","Under-preparing on why this company specifically"]},{id:"HM_SCREEN",label:"03 // HIRING MANAGER SCREEN",question:"Is this someone I'd want on my team?",signals:["Ownership — do they drive outcomes or wait for direction?","Judgment — how they have navigated ambiguity and tradeoffs","Communication — can they make complex work understandable?","Collaboration signal — do they make systems around them better?"],pitfalls:["Describing what the team did, not what you specifically drove","No concrete examples of business or product judgment","Failing to ask high-signal questions about the role"]},{id:"TECHNICAL_SCREEN",label:"04 // TECHNICAL SCREEN",question:"Can they do the technical work?",signals:["Problem decomposition — how they break down complexity","Trade-off reasoning — alternatives considered and why","Communication during the problem, not just the solution","System-level thinking beyond the immediate question"],pitfalls:["Silent coding — no narration of thought process","Over-optimizing without articulating the trade-off","Treating it as a quiz rather than a collaborative problem"]},{id:"ONSITE",label:"05 // ONSITE",question:"Is this the right hire?",signals:["Consistency across interviewers — same caliber across rounds","Leadership maturity — how they make others better","Strategic thinking — reasoning beyond the immediate task","Cultural signal — how they operate, not just what they deliver"],pitfalls:["Energy drop after the technical round","Treating behavioral rounds as less important than technical","No prepared questions that signal strategic curiosity"]}];function Hm(){const[e,n]=S.useState(null);return o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[o.jsx("span",{className:"is-label",children:"_01_FRAMEWORKS"}),o.jsx(ae,{color:"blue",children:"SIGNAL_ACTIVE"})]}),o.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"HIRING FUNNEL"}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly."})]}),o.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[o.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:o.jsx("span",{className:"is-label",children:"STAGE_OVERVIEW // SIGNAL_MAP"})}),o.jsxs("table",{className:"w-full text-sm",children:[o.jsx("thead",{className:"border-b border-is-border",children:o.jsxs("tr",{children:[o.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"STAGE"}),o.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest",children:"PRIMARY_SIGNAL_QUESTION"}),o.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest hidden md:table-cell",children:"STATUS"})]})}),o.jsx("tbody",{className:"divide-y divide-is-border",children:ka.map(t=>o.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[o.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary",children:t.label}),o.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:t.question}),o.jsx("td",{className:"px-5 py-3 hidden md:table-cell",children:o.jsx(ae,{color:"blue",children:"ACTIVE"})})]},t.id))})]})]}),o.jsx("div",{className:"space-y-px bg-is-border",children:ka.map(t=>o.jsxs("div",{className:"bg-is-bg",children:[o.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[o.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:t.label}),o.jsx("span",{className:"font-mono text-xs text-is-dim flex-1",children:t.question})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[o.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[o.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),o.jsx("ul",{className:"space-y-2",children:t.signals.map(r=>o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),o.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:r})]},r))})]}),o.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[o.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),o.jsx("ul",{className:"space-y-2",children:t.pitfalls.map(r=>o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),o.jsx("span",{className:"font-body text-sm text-is-dim leading-relaxed",children:r})]},r))})]})]}),t.examples&&o.jsxs("div",{className:"border-t border-is-border",children:[o.jsxs("button",{onClick:()=>n(e===t.id?null:t.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[o.jsx("span",{className:"is-label",children:"EXAMPLES // SIGNAL_CALIBRATION"}),o.jsx("span",{className:"font-mono text-xs text-is-dim",children:e===t.id?"[−]":"[+]"})]}),e===t.id&&o.jsx("div",{className:"px-6 py-5 space-y-6",children:t.examples.map(r=>o.jsxs("div",{children:[o.jsx("div",{className:"is-label text-is-dim mb-3",children:r.label}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[o.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[o.jsxs("div",{className:"font-mono text-xs text-is-alert mb-2 flex items-center gap-2",children:[o.jsx("span",{children:"⚠"})," WEAK"]}),o.jsx("p",{className:"font-mono text-xs text-is-dim leading-relaxed",children:r.weak})]}),o.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[o.jsxs("div",{className:"font-mono text-xs text-is-primary mb-2 flex items-center gap-2",children:[o.jsx("span",{children:"→"})," STRONG"]}),o.jsx("p",{className:"font-mono text-xs text-is-dim leading-relaxed",children:r.strong})]})]})]},r.id))})]})]},t.id))}),o.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:o.jsxs("p",{className:"font-mono text-xs text-is-dim",children:["SOURCE: Derived from Annyce Davis, ",o.jsx("em",{children:"Landing Your Next Gig in Tech"})," (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK"]})})]})}const Vm=`# prompts/

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
`,$m=`---
title: Behavioral Answer Diagnostic
version: 1.0
status: draft
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

## Signal Stack

Evaluate the answer using the Signal Stack when relevant:

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

### 6. Signal Stack Mapping

Identify which Signal Stack layers the answer provides evidence for.

For each relevant layer, include:

- visible evidence
- likely inference
- confidence
- strength of signal
- what would make the signal stronger

Also identify which Signal Stack layer the question was most likely designed to probe, and whether the answer actually supports that layer.

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

- repeated weak Signal Stack layers
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
- [Signal Stack](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,Gm=`---
title: Skeptical Hiring Manager
version: 1.0
status: draft
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

Evaluate both interview performance and Signal Stack coverage.

The Signal Stack layers are:

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

### 4. Signal Stack Coverage

For each relevant Signal Stack layer, identify:

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
- [Signal Stack](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`,Qm=`---
title: Résumé Signal Analysis
version: 1.0
status: draft
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

For Signal Stack coverage, use:
- Strong
- Moderate
- Weak
- Missing

Signal Stack layers:
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

### 4. Signal Stack Coverage
For each Signal Stack layer, provide:
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
- Use the Signal Stack map to decide what to add, remove, compress, or elevate.
- Prepare interview stories for any claim or trajectory concern that cannot be fully resolved on the résumé.

## Market context warning

This prompt analyzes résumé signal quality. It does not explain every hiring outcome.

Market conditions, layoffs, applicant volume, referrals, location, compensation, sponsorship, timing, recruiter capacity, internal candidates, and interview performance can all affect results.

## Important note

This prompt provides a résumé signal audit, not a guarantee of interviews, offers, or hiring outcomes.

## Related frameworks

- [Résumé Review](../../frameworks/hiring-funnel/resume-review.md)
- [Signal Stack](../../docs/signal-stack.md)<br>
- [Responsible AI Use](../../docs/responsible-ai-use.md)
`;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qc=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Km={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=S.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:s,...a},u)=>S.createElement("svg",{ref:u,...Km,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:qc("lucide",i),...a},[...s.map(([c,h])=>S.createElement(c,h)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=(e,n)=>{const t=S.forwardRef(({className:r,...i},l)=>S.createElement(qm,{ref:l,iconNode:n,className:qc(`lucide-${Ym(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=Xc("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=Xc("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Xm=Object.assign({"../../../prompts/README.md":Vm,"../../../prompts/interview/behavioral-answer-diagnostic.md":$m,"../../../prompts/interview/skeptical-hiring-manager.md":Gm,"../../../prompts/resume/resume-signal-analysis.md":Qm});function Jm(e){var l;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(s,a,u)=>{r[a]=u.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((l=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:l.map(s=>s.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Zm(e,n){const t=Jm(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---)/m),i=r?r[1].split(`

`)[0].trim():"",l=n.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/),s=l?l[1].trim():"",a=e.split("/").pop().replace(".md","");return{id:a,title:t.title||a,category:t.category||"general",tags:t.tags||[],purpose:i,text:s}}const Na=["resume","interview"],eh=Object.entries(Xm).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>Zm(e,n)).sort((e,n)=>{const t=Na.indexOf(e.category),r=Na.indexOf(n.category);return t!==r?(t===-1?99:t)-(r===-1?99:r):e.id.localeCompare(n.id)});function nh({text:e}){const[n,t]=S.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return o.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all",children:[n?o.jsx(Jc,{size:12}):o.jsx(Zc,{size:12}),n?"COPIED":"COPY_PROMPT"]})}function th(){return o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[o.jsx("span",{className:"is-label",children:"_02_PROMPTS"}),o.jsx(ae,{color:"blue",children:"SIGNAL_ACTIVE"})]}),o.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL PROMPTS"}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content."})]}),o.jsx("div",{className:"space-y-px bg-is-border",children:eh.map(({id:e,title:n,purpose:t,tags:r,text:i},l)=>o.jsxs("div",{className:"bg-is-bg",children:[o.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(l+1).padStart(2,"0")," // ",n.toUpperCase()]}),o.jsx(ae,{color:"blue",children:"SIGNAL_ACTIVE"})]}),o.jsx(nh,{text:i})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[o.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[o.jsx("div",{className:"is-label mb-4",children:"PROMPT_BODY"}),o.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto",children:i})]}),o.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:t})]}),r.length>0&&o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-3",children:"TAGS"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(s=>o.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim",children:s.toUpperCase().replace(/-/g,"_")},s))})]})]})]})]},e))}),o.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:o.jsxs("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-2xl",children:[o.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," These prompts are not designed to help candidates game interviews. They are designed to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity, not fabricate competence."]})})]})}function rh(){return o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[o.jsx("span",{className:"is-label",children:"_03_AGENTS"}),o.jsx(ae,{color:"gold",children:"INITIALIZING"})]}),o.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL AGENTS"}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"Automated workflows that scan project history and generate high-fidelity impact reports. Agents are in active development."})]}),o.jsxs("div",{className:"is-panel overflow-hidden",children:[o.jsxs("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface flex items-center justify-between",children:[o.jsx("span",{className:"is-label",children:"MODULE_STATUS"}),o.jsx(ae,{color:"gold",children:"SIGNAL_PENDING"})]}),o.jsxs("div",{className:"px-8 py-20 flex flex-col items-center text-center gap-6",children:[o.jsx("div",{className:"w-16 h-16 border border-is-border flex items-center justify-center",children:o.jsx("span",{className:"font-mono text-2xl text-is-dim",children:"◈"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-mono text-xl font-semibold uppercase text-is-text mb-2",children:"AGENTS_COMING_SOON"}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-sm",children:"Career signal agents are being developed. They will automate project history scanning, impact extraction, and high-fidelity report generation."})]}),o.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:["PROJECT_HISTORY_SCAN","IMPACT_EXTRACTION","SIGNAL_REPORT_GEN","PROMO_PACKET_ASSEMBLY"].map(e=>o.jsx("span",{className:"border border-is-border px-3 py-1 font-mono text-xs text-is-dim",children:e},e))}),o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"is-btn-ghost mt-4",children:"FOLLOW_DEVELOPMENT →"})]})]})]})}function ih(){return o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[o.jsx("span",{className:"is-label",children:"_04_WORKFLOWS"}),o.jsx(ae,{color:"dim",children:"SIGNAL_PENDING"})]}),o.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL WORKFLOWS"}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"Repeatable pipelines for live interview calibration, performance cycles, and promotion runs. Workflows are in active design."})]}),o.jsxs("div",{className:"is-panel overflow-hidden",children:[o.jsxs("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface flex items-center justify-between",children:[o.jsx("span",{className:"is-label",children:"MODULE_STATUS"}),o.jsx(ae,{color:"dim",children:"NOT_YET_ACTIVE"})]}),o.jsxs("div",{className:"px-8 py-20 flex flex-col items-center text-center gap-6",children:[o.jsx("div",{className:"w-16 h-16 border border-is-border flex items-center justify-center",children:o.jsx("span",{className:"font-mono text-2xl text-is-dim",children:"↻"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-mono text-xl font-semibold uppercase text-is-text mb-2",children:"WORKFLOWS_COMING_SOON"}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-sm",children:"Career signal workflows are in design. They will provide repeatable, end-to-end pipelines for interview calibration, performance cycles, and promotion packet assembly."})]}),o.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:["INTERVIEW_CALIBRATION","PERFORMANCE_CYCLE","PROMOTION_PIPELINE","SIGNAL_REVIEW"].map(e=>o.jsx("span",{className:"border border-is-border px-3 py-1 font-mono text-xs text-is-dim",children:e},e))}),o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"is-btn-ghost mt-4",children:"FOLLOW_DEVELOPMENT →"})]})]})]})}const lh=`# templates/

Reusable templates for self-assessment and career signal work.

## Contents

| File | Description |
|---|---|
| [signal-scorecard.md](signal-scorecard.md) | A self-assessment tool for evaluating the strength, clarity, and credibility of the signals you send during career moments |

## Usage

Templates are designed to be copied and filled in for your own situation. They work alongside the prompts and frameworks in this repository — not as standalone tools.
`,sh=`---
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
`,oh=Object.assign({"../../../templates/README.md":lh,"../../../templates/signal-scorecard.md":sh});function ah(e){var l;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(s,a,u)=>{r[a]=u.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((l=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:l.map(s=>s.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function uh(e,n){const t=ah(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",s=[...n.matchAll(/^# (\d+\. .+)$/gm)].map(u=>u[1]),a=e.split("/").pop().replace(".md","");return{id:a,title:t.title||a,version:t.version||"",tags:t.tags||[],purpose:i,sections:s,text:n}}const ch=Object.entries(oh).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,n])=>uh(e,n));function dh({text:e}){const[n,t]=S.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return o.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all",children:[n?o.jsx(Jc,{size:12}):o.jsx(Zc,{size:12}),n?"COPIED":"COPY_TEMPLATE"]})}function fh(){return o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[o.jsx("span",{className:"is-label",children:"_05_TEMPLATES"}),o.jsx(ae,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),o.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL TEMPLATES"}),o.jsx("p",{className:"font-body text-base text-is-dim leading-relaxed max-w-2xl",children:"Structured documents for auditing, scoring, and improving your career signals. Copy a template into your own editor and work through it at your own pace."})]}),o.jsx("div",{className:"space-y-px bg-is-border",children:ch.map(({id:e,title:n,version:t,purpose:r,sections:i,tags:l,text:s},a)=>o.jsxs("div",{className:"bg-is-bg",children:[o.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(a+1).padStart(2,"0")," // ",n.toUpperCase()]}),t&&o.jsxs("span",{className:"font-mono text-xs text-is-dim border border-is-border px-2 py-0.5",children:["V",t]}),o.jsx(ae,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),o.jsx(dh,{text:s})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[o.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[o.jsx("div",{className:"is-label mb-4",children:"SECTIONS"}),o.jsx("div",{className:"space-y-px",children:i.map((u,c)=>o.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 border border-is-border bg-is-surface",children:[o.jsx("span",{className:"font-mono text-xs text-is-primary w-5 shrink-0",children:String(c+1).padStart(2,"0")}),o.jsx("span",{className:"font-mono text-xs text-is-dim uppercase tracking-wide",children:u.replace(/^\d+\. /,"").replace(/\s*&\s*/g," AND ").replace(/ /g,"_")})]},c))})]}),o.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[r&&o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),o.jsx("p",{className:"font-body text-sm text-is-dim leading-relaxed",children:r})]}),l.length>0&&o.jsxs("div",{children:[o.jsx("div",{className:"is-label mb-3",children:"TAGS"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:l.map(u=>o.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim",children:u.toUpperCase().replace(/-/g,"_")},u))})]})]})]})]},e))}),o.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:o.jsxs("p",{className:"font-body text-sm text-is-dim leading-relaxed max-w-2xl",children:[o.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," Templates are fill-in-the-blank markdown documents. Copy the full template and open it in your own text editor or note-taking tool. Do not invent evidence — use the recovery questions inside each section to surface real experience."]})})]})}function ph(){return o.jsx(jm,{children:o.jsxs("div",{className:"min-h-screen flex flex-col bg-is-bg-deep",children:[o.jsx(Mm,{}),o.jsx("main",{className:"flex-1",children:o.jsxs(Em,{children:[o.jsx(In,{path:"/",element:o.jsx(Bm,{})}),o.jsx(In,{path:"/frameworks",element:o.jsx(Hm,{})}),o.jsx(In,{path:"/prompts",element:o.jsx(th,{})}),o.jsx(In,{path:"/agents",element:o.jsx(rh,{})}),o.jsx(In,{path:"/workflows",element:o.jsx(ih,{})}),o.jsx(In,{path:"/templates",element:o.jsx(fh,{})})]})}),o.jsxs("footer",{className:"border-t border-is-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[o.jsx("span",{className:"font-mono text-xs text-is-dim",children:"© 2026 INVISIBLE_SIGNALS™ · IS_RIGHTS_RESERVED"}),o.jsxs("div",{className:"flex items-center gap-6",children:[o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-dim hover:text-is-text transition-colors",children:"GITHUB"}),o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-dim hover:text-is-text transition-colors",children:"CODE_OF_CONDUCT"}),o.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-dim hover:text-is-text transition-colors",children:"CONTRIBUTING"}),o.jsx("span",{className:"font-mono text-xs text-is-dim",children:"SECURITY: APACHE-2.0 // OPEN_SOURCE_LICENSED"})]})]})]})})}fl.createRoot(document.getElementById("root")).render(o.jsx(Oa.StrictMode,{children:o.jsx(ph,{})}));
