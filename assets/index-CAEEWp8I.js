function Zd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sc={exports:{}},ki={},ac={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),ep=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),sp=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),lp=Symbol.for("react.memo"),cp=Symbol.for("react.lazy"),Ro=Symbol.iterator;function up(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var oc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lc=Object.assign,cc={};function bn(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||oc}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uc(){}uc.prototype=bn.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||oc}var Sa=Na.prototype=new uc;Sa.constructor=Na;lc(Sa,bn.prototype);Sa.isPureReactComponent=!0;var Ao=Array.isArray,dc=Object.prototype.hasOwnProperty,Ea={current:null},pc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)dc.call(t,r)&&!pc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:pr,type:e,key:s,ref:o,props:i,_owner:Ea.current}}function dp(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lo=/\/+/g;function $i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pp(""+e.key):t.toString(36)}function Dr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case ep:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$i(o,0):r,Ao(i)?(n="",e!=null&&(n=e.replace(Lo,"$&/")+"/"),Dr(i,t,n,"",function(u){return u})):i!=null&&(ja(i)&&(i=dp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ao(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+$i(s,l);o+=Dr(s,t,n,c,i)}else if(c=up(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+$i(s,l++),o+=Dr(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function wr(e,t,n){if(e==null)return e;var r=[],i=0;return Dr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function mp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},zr={transition:null},fp={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:zr,ReactCurrentOwner:Ea};function fc(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=bn;_.Fragment=tp;_.Profiler=rp;_.PureComponent=Na;_.StrictMode=np;_.Suspense=op;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp;_.act=fc;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ea.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)dc.call(t,c)&&!pc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:pr,type:e.type,key:i,ref:s,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};_.createElement=mc;_.createFactory=function(e){var t=mc.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:ap,render:e}};_.isValidElement=ja;_.lazy=function(e){return{$$typeof:cp,_payload:{_status:-1,_result:e},_init:mp}};_.memo=function(e,t){return{$$typeof:lp,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};_.unstable_act=fc;_.useCallback=function(e,t){return de.current.useCallback(e,t)};_.useContext=function(e){return de.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return de.current.useDeferredValue(e)};_.useEffect=function(e,t){return de.current.useEffect(e,t)};_.useId=function(){return de.current.useId()};_.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return de.current.useMemo(e,t)};_.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};_.useRef=function(e){return de.current.useRef(e)};_.useState=function(e){return de.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return de.current.useTransition()};_.version="18.3.1";ac.exports=_;var w=ac.exports;const hc=Jd(w),hp=Zd({__proto__:null,default:hc},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=w,xp=Symbol.for("react.element"),vp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,wp=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bp={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)yp.call(t,r)&&!bp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xp,type:e,key:s,ref:o,props:i,_owner:wp.current}}ki.Fragment=vp;ki.jsx=gc;ki.jsxs=gc;sc.exports=ki;var a=sc.exports,Ns={},xc={exports:{}},Se={},vc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,R){var L=C.length;C.push(R);e:for(;0<L;){var q=L-1>>>1,Z=C[q];if(0<i(Z,R))C[q]=R,C[L]=Z,L=q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],L=C.pop();if(L!==R){C[0]=L;e:for(var q=0,Z=C.length,vr=Z>>>1;q<vr;){var Ct=2*(q+1)-1,Bi=C[Ct],It=Ct+1,yr=C[It];if(0>i(Bi,L))It<Z&&0>i(yr,Bi)?(C[q]=yr,C[It]=L,q=It):(C[q]=Bi,C[Ct]=L,q=Ct);else if(It<Z&&0>i(yr,L))C[q]=yr,C[It]=L,q=It;else break e}}return R}function i(C,R){var L=C.sortIndex-R.sortIndex;return L!==0?L:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],m=1,f=null,g=3,v=!1,y=!1,b=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=C)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function x(C){if(b=!1,h(C),!y)if(n(c)!==null)y=!0,Gi(S);else{var R=n(u);R!==null&&Hi(x,R.startTime-C)}}function S(C,R){y=!1,b&&(b=!1,p(T),T=-1),v=!0;var L=g;try{for(h(R),f=n(c);f!==null&&(!(f.expirationTime>R)||C&&!ye());){var q=f.callback;if(typeof q=="function"){f.callback=null,g=f.priorityLevel;var Z=q(f.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(c)&&r(c),h(R)}else r(c);f=n(c)}if(f!==null)var vr=!0;else{var Ct=n(u);Ct!==null&&Hi(x,Ct.startTime-R),vr=!1}return vr}finally{f=null,g=L,v=!1}}var j=!1,I=null,T=-1,O=5,A=-1;function ye(){return!(e.unstable_now()-A<O)}function Sn(){if(I!==null){var C=e.unstable_now();A=C;var R=!0;try{R=I(!0,C)}finally{R?En():(j=!1,I=null)}}else j=!1}var En;if(typeof d=="function")En=function(){d(Sn)};else if(typeof MessageChannel<"u"){var To=new MessageChannel,Xd=To.port2;To.port1.onmessage=Sn,En=function(){Xd.postMessage(null)}}else En=function(){N(Sn,0)};function Gi(C){I=C,j||(j=!0,En())}function Hi(C,R){T=N(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Gi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return C()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=g;g=C;try{return R()}finally{g=L}},e.unstable_scheduleCallback=function(C,R,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,C={id:m++,callback:R,priorityLevel:C,startTime:L,expirationTime:Z,sortIndex:-1},L>q?(C.sortIndex=L,t(u,C),n(c)===null&&C===n(u)&&(b?(p(T),T=-1):b=!0,Hi(x,L-q))):(C.sortIndex=Z,t(c,C),y||v||(y=!0,Gi(S))),C},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(C){var R=g;return function(){var L=g;g=R;try{return C.apply(this,arguments)}finally{g=L}}}})(yc);vc.exports=yc;var kp=vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=w,Ne=kp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wc=new Set,qn={};function Gt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(qn[e]=t,e=0;e<t.length;e++)wc.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ss=Object.prototype.hasOwnProperty,Sp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_o={},Po={};function Ep(e){return Ss.call(Po,e)?!0:Ss.call(_o,e)?!1:Sp.test(e)?Po[e]=!0:(_o[e]=!0,!1)}function jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ca=/[\-:]([a-z])/g;function Ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ca,Ia);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ca,Ia);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ca,Ia);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,i,r)&&(n=null),r||i===null?Ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Aa=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Cs=Symbol.for("react.suspense_list"),La=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),Oo=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Vi;function Pn(e){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var qi=!1;function Yi(e,t){if(!e||qi)return"";qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Ip(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Yi(e.type,!1),e;case 11:return e=Yi(e.type.render,!1),e;case 1:return e=Yi(e.type,!0),e;default:return""}}function Is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case qt:return"Portal";case Es:return"Profiler";case Ra:return"StrictMode";case js:return"Suspense";case Cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case Aa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case La:return t=e.displayName||null,t!==null?t:Is(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Is(e(t))}catch{}}return null}function Tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Is(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rp(e){var t=Sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Rp(e))}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ts(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jc(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function Rs(e,t){jc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?As(e,t.type,n):t.hasOwnProperty("defaultValue")&&As(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Do(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function As(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(On(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Cc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ap=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lp=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ps(e,t){if(t){if(Lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function _a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,on=null,ln=null;function Wo(e){if(e=hr(e)){if(typeof Ds!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ci(t),Ds(e.stateNode,e.type,t))}}function Lc(e){on?ln?ln.push(e):ln=[e]:on=e}function _c(){if(on){var e=on,t=ln;if(ln=on=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function Pc(e,t){return e(t)}function Oc(){}var Ki=!1;function Mc(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return Pc(e,t,n)}finally{Ki=!1,(on!==null||ln!==null)&&(Oc(),_c())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var zs=!1;if(Ze)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{zs=!1}function _p(e,t,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Un=!1,Qr=null,Xr=!1,Us=null,Pp={onError:function(e){Un=!0,Qr=e}};function Op(e,t,n,r,i,s,o,l,c){Un=!1,Qr=null,_p.apply(Pp,arguments)}function Mp(e,t,n,r,i,s,o,l,c){if(Op.apply(this,arguments),Un){if(Un){var u=Qr;Un=!1,Qr=null}else throw Error(k(198));Xr||(Xr=!0,Us=u)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(e){if(Ht(e)!==e)throw Error(k(188))}function Dp(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fo(i),e;if(s===r)return Fo(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function zc(e){return e=Dp(e),e!==null?Uc(e):null}function Uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=Ne.unstable_scheduleCallback,Go=Ne.unstable_cancelCallback,zp=Ne.unstable_shouldYield,Up=Ne.unstable_requestPaint,Y=Ne.unstable_now,Wp=Ne.unstable_getCurrentPriorityLevel,Pa=Ne.unstable_ImmediatePriority,Fc=Ne.unstable_UserBlockingPriority,Zr=Ne.unstable_NormalPriority,Fp=Ne.unstable_LowPriority,Gc=Ne.unstable_IdlePriority,Ni=null,$e=null;function Gp(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:$p,Hp=Math.log,Bp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Hp(e)/Bp|0)|0}var Sr=64,Er=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mn(l):(s&=o,s!==0&&(r=Mn(s)))}else o=n&~i,o!==0?r=Mn(o):s!==0&&(r=Mn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-De(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Vp(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hc(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Ma,Vc,qc,Yc,Fs=!1,jr=[],pt=null,mt=null,ft=null,Qn=new Map,Xn=new Map,ot=[],Kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function In(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=hr(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qp(e,t,n,r,i){switch(t){case"focusin":return pt=In(pt,e,t,n,r,i),!0;case"dragenter":return mt=In(mt,e,t,n,r,i),!0;case"mouseover":return ft=In(ft,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qn.set(s,In(Qn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xn.set(s,In(Xn.get(s)||null,e,t,n,r,i)),!0}return!1}function Kc(e){var t=Lt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Dc(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){Vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ms=r,n.target.dispatchEvent(r),Ms=null}else return t=hr(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Bo(e,t,n){Ur(e)&&n.delete(t)}function Xp(){Fs=!1,pt!==null&&Ur(pt)&&(pt=null),mt!==null&&Ur(mt)&&(mt=null),ft!==null&&Ur(ft)&&(ft=null),Qn.forEach(Bo),Xn.forEach(Bo)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Xp)))}function Zn(e){function t(i){return Tn(i,e)}if(0<jr.length){Tn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Tn(pt,e),mt!==null&&Tn(mt,e),ft!==null&&Tn(ft,e),Qn.forEach(t),Xn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Kc(n),n.blockedOn===null&&ot.shift()}var cn=nt.ReactCurrentBatchConfig,ei=!0;function Zp(e,t,n,r){var i=M,s=cn.transition;cn.transition=null;try{M=1,Da(e,t,n,r)}finally{M=i,cn.transition=s}}function Jp(e,t,n,r){var i=M,s=cn.transition;cn.transition=null;try{M=4,Da(e,t,n,r)}finally{M=i,cn.transition=s}}function Da(e,t,n,r){if(ei){var i=Gs(e,t,n,r);if(i===null)as(e,t,r,ti,n),Ho(e,r);else if(Qp(i,e,t,n,r))r.stopPropagation();else if(Ho(e,r),t&4&&-1<Kp.indexOf(e)){for(;i!==null;){var s=hr(i);if(s!==null&&$c(s),s=Gs(e,t,n,r),s===null&&as(e,t,r,ti,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else as(e,t,r,null,n)}}var ti=null;function Gs(e,t,n,r){if(ti=null,e=_a(r),e=Lt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case Pa:return 1;case Fc:return 4;case Zr:case Fp:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var ct=null,za=null,Wr=null;function Xc(){if(Wr)return Wr;var e,t=za,n=t.length,r,i="value"in ct?ct.value:ct.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Wr=i.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function $o(){return!1}function Ee(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cr:$o,this.isPropagationStopped=$o,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Ee(kn),fr=B({},kn,{view:0,detail:0}),em=Ee(fr),Xi,Zi,Rn,Si=B({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Xi=e.screenX-Rn.screenX,Zi=e.screenY-Rn.screenY):Zi=Xi=0,Rn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Vo=Ee(Si),tm=B({},Si,{dataTransfer:0}),nm=Ee(tm),rm=B({},fr,{relatedTarget:0}),Ji=Ee(rm),im=B({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Ee(im),am=B({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),om=Ee(am),lm=B({},kn,{data:0}),qo=Ee(lm),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dm[e])?!!t[e]:!1}function Wa(){return pm}var mm=B({},fr,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fm=Ee(mm),hm=B({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=Ee(hm),gm=B({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),xm=Ee(gm),vm=B({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ee(vm),wm=B({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ee(wm),km=[9,13,27,32],Fa=Ze&&"CompositionEvent"in window,Wn=null;Ze&&"documentMode"in document&&(Wn=document.documentMode);var Nm=Ze&&"TextEvent"in window&&!Wn,Zc=Ze&&(!Fa||Wn&&8<Wn&&11>=Wn),Ko=" ",Qo=!1;function Jc(e,t){switch(e){case"keyup":return km.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Sm(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(Qo=!0,Ko);case"textInput":return e=t.data,e===Ko&&Qo?null:e;default:return null}}function Em(e,t){if(Kt)return e==="compositionend"||!Fa&&Jc(e,t)?(e=Xc(),Wr=za=ct=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zc&&t.locale!=="ko"?null:t.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jm[e.type]:t==="textarea"}function tu(e,t,n,r){Lc(r),t=ni(t,"onChange"),0<t.length&&(n=new Ua("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,Jn=null;function Cm(e){pu(e,0)}function Ei(e){var t=Zt(e);if(Ec(t))return e}function Im(e,t){if(e==="change")return t}var nu=!1;if(Ze){var es;if(Ze){var ts="oninput"in document;if(!ts){var Zo=document.createElement("div");Zo.setAttribute("oninput","return;"),ts=typeof Zo.oninput=="function"}es=ts}else es=!1;nu=es&&(!document.documentMode||9<document.documentMode)}function Jo(){Fn&&(Fn.detachEvent("onpropertychange",ru),Jn=Fn=null)}function ru(e){if(e.propertyName==="value"&&Ei(Jn)){var t=[];tu(t,Jn,e,_a(e)),Mc(Cm,t)}}function Tm(e,t,n){e==="focusin"?(Jo(),Fn=t,Jn=n,Fn.attachEvent("onpropertychange",ru)):e==="focusout"&&Jo()}function Rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Jn)}function Am(e,t){if(e==="click")return Ei(t)}function Lm(e,t){if(e==="input"||e==="change")return Ei(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:_m;function er(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ss.call(t,i)||!Ue(e[i],t[i]))return!1}return!0}function el(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tl(e,t){var n=el(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=el(n)}}function iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pm(e){var t=su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&iu(n.ownerDocument.documentElement,n)){if(r!==null&&Ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=tl(n,s);var o=tl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Om=Ze&&"documentMode"in document&&11>=document.documentMode,Qt=null,Hs=null,Gn=null,Bs=!1;function nl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bs||Qt==null||Qt!==Kr(r)||(r=Qt,"selectionStart"in r&&Ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&er(Gn,r)||(Gn=r,r=ni(Hs,"onSelect"),0<r.length&&(t=new Ua("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},ns={},au={};Ze&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function ji(e){if(ns[e])return ns[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in au)return ns[e]=t[n];return e}var ou=ji("animationend"),lu=ji("animationiteration"),cu=ji("animationstart"),uu=ji("transitionend"),du=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){du.set(e,t),Gt(t,[e])}for(var rs=0;rs<rl.length;rs++){var is=rl[rs],Mm=is.toLowerCase(),Dm=is[0].toUpperCase()+is.slice(1);Nt(Mm,"on"+Dm)}Nt(ou,"onAnimationEnd");Nt(lu,"onAnimationIteration");Nt(cu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(uu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function il(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mp(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;il(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;il(i,l,u),s=c}}}if(Xr)throw e=Us,Xr=!1,Us=null,e}function U(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function ss(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Tr]){e[Tr]=!0,wc.forEach(function(n){n!=="selectionchange"&&(zm.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,ss("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Qc(t)){case 1:var i=Zp;break;case 4:i=Jp;break;default:i=Da}n=i.bind(null,t,n,e),i=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function as(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Lt(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mc(function(){var u=s,m=_a(n),f=[];e:{var g=du.get(e);if(g!==void 0){var v=Ua,y=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":v=fm;break;case"focusin":y="focus",v=Ji;break;case"focusout":y="blur",v=Ji;break;case"beforeblur":case"afterblur":v=Ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xm;break;case ou:case lu:case cu:v=sm;break;case uu:v=ym;break;case"scroll":v=em;break;case"wheel":v=bm;break;case"copy":case"cut":case"paste":v=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yo}var b=(t&4)!==0,N=!b&&e==="scroll",p=b?g!==null?g+"Capture":null:g;b=[];for(var d=u,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=Kn(d,p),x!=null&&b.push(nr(d,x,h)))),N)break;d=d.return}0<b.length&&(g=new v(g,y,null,n,m),f.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Ms&&(y=n.relatedTarget||n.fromElement)&&(Lt(y)||y[Je]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Lt(y):null,y!==null&&(N=Ht(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(b=Vo,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Yo,x="onPointerLeave",p="onPointerEnter",d="pointer"),N=v==null?g:Zt(v),h=y==null?g:Zt(y),g=new b(x,d+"leave",v,n,m),g.target=N,g.relatedTarget=h,x=null,Lt(m)===u&&(b=new b(p,d+"enter",y,n,m),b.target=h,b.relatedTarget=N,x=b),N=x,v&&y)t:{for(b=v,p=y,d=0,h=b;h;h=Vt(h))d++;for(h=0,x=p;x;x=Vt(x))h++;for(;0<d-h;)b=Vt(b),d--;for(;0<h-d;)p=Vt(p),h--;for(;d--;){if(b===p||p!==null&&b===p.alternate)break t;b=Vt(b),p=Vt(p)}b=null}else b=null;v!==null&&sl(f,g,v,b,!1),y!==null&&N!==null&&sl(f,N,y,b,!0)}}e:{if(g=u?Zt(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Im;else if(Xo(g))if(nu)S=Lm;else{S=Rm;var j=Tm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Am);if(S&&(S=S(e,u))){tu(f,S,n,m);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&As(g,"number",g.value)}switch(j=u?Zt(u):window,e){case"focusin":(Xo(j)||j.contentEditable==="true")&&(Qt=j,Hs=u,Gn=null);break;case"focusout":Gn=Hs=Qt=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,nl(f,n,m);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":nl(f,n,m)}var I;if(Fa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Kt?Jc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zc&&n.locale!=="ko"&&(Kt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Kt&&(I=Xc()):(ct=m,za="value"in ct?ct.value:ct.textContent,Kt=!0)),j=ni(u,T),0<j.length&&(T=new qo(T,e,null,n,m),f.push({event:T,listeners:j}),I?T.data=I:(I=eu(n),I!==null&&(T.data=I)))),(I=Nm?Sm(e,n):Em(e,n))&&(u=ni(u,"onBeforeInput"),0<u.length&&(m=new qo("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:u}),m.data=I))}pu(f,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kn(e,n),s!=null&&r.unshift(nr(e,s,i)),s=Kn(e,t),s!=null&&r.push(nr(e,s,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Kn(n,s),c!=null&&o.unshift(nr(n,c,l))):i||(c=Kn(n,s),c!=null&&o.push(nr(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Um=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function al(e){return(typeof e=="string"?e:""+e).replace(Um,`
`).replace(Wm,"")}function Rr(e,t,n){if(t=al(t),al(e)!==t&&n)throw Error(k(425))}function ri(){}var $s=null,Vs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,ol=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof ol<"u"?function(e){return ol.resolve(null).then(e).catch(Hm)}:Ys;function Hm(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Be="__reactFiber$"+Nn,rr="__reactProps$"+Nn,Je="__reactContainer$"+Nn,Ks="__reactEvents$"+Nn,Bm="__reactListeners$"+Nn,$m="__reactHandles$"+Nn;function Lt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ll(e);e!==null;){if(n=e[Be])return n;e=ll(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Be]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ci(e){return e[rr]||null}var Qs=[],Jt=-1;function St(e){return{current:e}}function W(e){0>Jt||(e.current=Qs[Jt],Qs[Jt]=null,Jt--)}function z(e,t){Jt++,Qs[Jt]=e.current,e.current=t}var kt={},le=St(kt),ge=St(!1),Dt=kt;function mn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function ii(){W(ge),W(le)}function cl(e,t,n){if(le.current!==kt)throw Error(k(168));z(le,t),z(ge,n)}function fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Tp(e)||"Unknown",i));return B({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Dt=le.current,z(le,e),z(ge,ge.current),!0}function ul(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=fu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,W(ge),W(le),z(le,e)):W(ge),z(ge,n)}var Ye=null,Ii=!1,ls=!1;function hu(e){Ye===null?Ye=[e]:Ye.push(e)}function Vm(e){Ii=!0,hu(e)}function Et(){if(!ls&&Ye!==null){ls=!0;var e=0,t=M;try{var n=Ye;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ii=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Wc(Pa,Et),i}finally{M=t,ls=!1}}return null}var en=[],tn=0,ai=null,oi=0,je=[],Ce=0,zt=null,Ke=1,Qe="";function Rt(e,t){en[tn++]=oi,en[tn++]=ai,ai=e,oi=t}function gu(e,t,n){je[Ce++]=Ke,je[Ce++]=Qe,je[Ce++]=zt,zt=e;var r=Ke;e=Qe;var i=32-De(r)-1;r&=~(1<<i),n+=1;var s=32-De(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ke=1<<32-De(t)+i|n<<i|r,Qe=s+e}else Ke=1<<s|n<<i|r,Qe=e}function Ha(e){e.return!==null&&(Rt(e,1),gu(e,1,0))}function Ba(e){for(;e===ai;)ai=en[--tn],en[tn]=null,oi=en[--tn],en[tn]=null;for(;e===zt;)zt=je[--Ce],je[Ce]=null,Qe=je[--Ce],je[Ce]=null,Ke=je[--Ce],je[Ce]=null}var ke=null,be=null,F=!1,Me=null;function xu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,be=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Ke,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,be=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zs(e){if(F){var t=be;if(t){var n=t;if(!dl(e,t)){if(Xs(e))throw Error(k(418));t=ht(n.nextSibling);var r=ke;t&&dl(e,t)?xu(r,n):(e.flags=e.flags&-4097|2,F=!1,ke=e)}}else{if(Xs(e))throw Error(k(418));e.flags=e.flags&-4097|2,F=!1,ke=e}}}function pl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ar(e){if(e!==ke)return!1;if(!F)return pl(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=be)){if(Xs(e))throw vu(),Error(k(418));for(;t;)xu(e,t),t=ht(t.nextSibling)}if(pl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=ke?ht(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=be;e;)e=ht(e.nextSibling)}function fn(){be=ke=null,F=!1}function $a(e){Me===null?Me=[e]:Me.push(e)}var qm=nt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ml(e){var t=e._init;return t(e._payload)}function yu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=yt(p,d),p.index=0,p.sibling=null,p}function s(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,x){return d===null||d.tag!==6?(d=hs(h,p.mode,x),d.return=p,d):(d=i(d,h),d.return=p,d)}function c(p,d,h,x){var S=h.type;return S===Yt?m(p,d,h.props.children,x,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&ml(S)===d.type)?(x=i(d,h.props),x.ref=An(p,d,h),x.return=p,x):(x=Yr(h.type,h.key,h.props,null,p.mode,x),x.ref=An(p,d,h),x.return=p,x)}function u(p,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=gs(h,p.mode,x),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function m(p,d,h,x,S){return d===null||d.tag!==7?(d=Mt(h,p.mode,x,S),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hs(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case br:return h=Yr(d.type,d.key,d.props,null,p.mode,h),h.ref=An(p,null,d),h.return=p,h;case qt:return d=gs(d,p.mode,h),d.return=p,d;case st:var x=d._init;return f(p,x(d._payload),h)}if(On(d)||jn(d))return d=Mt(d,p.mode,h,null),d.return=p,d;Lr(p,d)}return null}function g(p,d,h,x){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case br:return h.key===S?c(p,d,h,x):null;case qt:return h.key===S?u(p,d,h,x):null;case st:return S=h._init,g(p,d,S(h._payload),x)}if(On(h)||jn(h))return S!==null?null:m(p,d,h,x,null);Lr(p,h)}return null}function v(p,d,h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,l(d,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case br:return p=p.get(x.key===null?h:x.key)||null,c(d,p,x,S);case qt:return p=p.get(x.key===null?h:x.key)||null,u(d,p,x,S);case st:var j=x._init;return v(p,d,h,j(x._payload),S)}if(On(x)||jn(x))return p=p.get(h)||null,m(d,p,x,S,null);Lr(d,x)}return null}function y(p,d,h,x){for(var S=null,j=null,I=d,T=d=0,O=null;I!==null&&T<h.length;T++){I.index>T?(O=I,I=null):O=I.sibling;var A=g(p,I,h[T],x);if(A===null){I===null&&(I=O);break}e&&I&&A.alternate===null&&t(p,I),d=s(A,d,T),j===null?S=A:j.sibling=A,j=A,I=O}if(T===h.length)return n(p,I),F&&Rt(p,T),S;if(I===null){for(;T<h.length;T++)I=f(p,h[T],x),I!==null&&(d=s(I,d,T),j===null?S=I:j.sibling=I,j=I);return F&&Rt(p,T),S}for(I=r(p,I);T<h.length;T++)O=v(I,p,T,h[T],x),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?T:O.key),d=s(O,d,T),j===null?S=O:j.sibling=O,j=O);return e&&I.forEach(function(ye){return t(p,ye)}),F&&Rt(p,T),S}function b(p,d,h,x){var S=jn(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var j=S=null,I=d,T=d=0,O=null,A=h.next();I!==null&&!A.done;T++,A=h.next()){I.index>T?(O=I,I=null):O=I.sibling;var ye=g(p,I,A.value,x);if(ye===null){I===null&&(I=O);break}e&&I&&ye.alternate===null&&t(p,I),d=s(ye,d,T),j===null?S=ye:j.sibling=ye,j=ye,I=O}if(A.done)return n(p,I),F&&Rt(p,T),S;if(I===null){for(;!A.done;T++,A=h.next())A=f(p,A.value,x),A!==null&&(d=s(A,d,T),j===null?S=A:j.sibling=A,j=A);return F&&Rt(p,T),S}for(I=r(p,I);!A.done;T++,A=h.next())A=v(I,p,T,A.value,x),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?T:A.key),d=s(A,d,T),j===null?S=A:j.sibling=A,j=A);return e&&I.forEach(function(Sn){return t(p,Sn)}),F&&Rt(p,T),S}function N(p,d,h,x){if(typeof h=="object"&&h!==null&&h.type===Yt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case br:e:{for(var S=h.key,j=d;j!==null;){if(j.key===S){if(S=h.type,S===Yt){if(j.tag===7){n(p,j.sibling),d=i(j,h.props.children),d.return=p,p=d;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&ml(S)===j.type){n(p,j.sibling),d=i(j,h.props),d.ref=An(p,j,h),d.return=p,p=d;break e}n(p,j);break}else t(p,j);j=j.sibling}h.type===Yt?(d=Mt(h.props.children,p.mode,x,h.key),d.return=p,p=d):(x=Yr(h.type,h.key,h.props,null,p.mode,x),x.ref=An(p,d,h),x.return=p,p=x)}return o(p);case qt:e:{for(j=h.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=gs(h,p.mode,x),d.return=p,p=d}return o(p);case st:return j=h._init,N(p,d,j(h._payload),x)}if(On(h))return y(p,d,h,x);if(jn(h))return b(p,d,h,x);Lr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=hs(h,p.mode,x),d.return=p,p=d),o(p)):n(p,d)}return N}var hn=yu(!0),wu=yu(!1),li=St(null),ci=null,nn=null,Va=null;function qa(){Va=nn=ci=null}function Ya(e){var t=li.current;W(li),e._currentValue=t}function Js(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){ci=e,Va=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Va!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(ci===null)throw Error(k(308));nn=e,ci.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var _t=null;function Ka(e){_t===null?_t=[e]:_t.push(e)}function bu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ka(t)):(n.next=i.next,i.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,et(e,n)}return i=r.interleaved,i===null?(t.next=t,Ka(r)):(t.next=i.next,i.next=t),r.interleaved=t,et(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}function fl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;at=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,m=u=c=null,l=s;do{var g=l.lane,v=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(g=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=B({},f,g);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=v,c=f):m=m.next=v,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wt|=o,e.lanes=o,e.memoizedState=f}}function hl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var gr={},Ve=St(gr),ir=St(gr),sr=St(gr);function Pt(e){if(e===gr)throw Error(k(174));return e}function Xa(e,t){switch(z(sr,t),z(ir,e),z(Ve,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}W(Ve),z(Ve,t)}function gn(){W(Ve),W(ir),W(sr)}function Nu(e){Pt(sr.current);var t=Pt(Ve.current),n=_s(t,e.type);t!==n&&(z(ir,e),z(Ve,n))}function Za(e){ir.current===e&&(W(Ve),W(ir))}var G=St(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function Ja(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Hr=nt.ReactCurrentDispatcher,us=nt.ReactCurrentBatchConfig,Ut=0,H=null,Q=null,J=null,pi=!1,Hn=!1,ar=0,Ym=0;function se(){throw Error(k(321))}function eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function to(e,t,n,r,i,s){if(Ut=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Zm:Jm,e=n(r,i),Hn){s=0;do{if(Hn=!1,ar=0,25<=s)throw Error(k(301));s+=1,J=Q=null,t.updateQueue=null,Hr.current=ef,e=n(r,i)}while(Hn)}if(Hr.current=mi,t=Q!==null&&Q.next!==null,Ut=0,J=Q=H=null,pi=!1,t)throw Error(k(300));return e}function no(){var e=ar!==0;return ar=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Ae(){if(Q===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,Q=e;else{if(e===null)throw Error(k(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function or(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var m=u.lane;if((Ut&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,H.lanes|=m,Wt|=m}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Ue(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Wt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ue(s,t.memoizedState)||(fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Su(){}function Eu(e,t){var n=H,r=Ae(),i=t(),s=!Ue(r.memoizedState,i);if(s&&(r.memoizedState=i,fe=!0),r=r.queue,ro(Iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,lr(9,Cu.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(k(349));Ut&30||ju(n,t,i)}return i}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Ru(e)}function Iu(e,t,n){return n(function(){Tu(t)&&Ru(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Ru(e){var t=et(e,1);t!==null&&ze(t,e,1,-1)}function gl(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=Xm.bind(null,H,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Au(){return Ae().memoizedState}function Br(e,t,n,r){var i=Ge();H.flags|=e,i.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var i=Ae();r=r===void 0?null:r;var s=void 0;if(Q!==null){var o=Q.memoizedState;if(s=o.destroy,r!==null&&eo(r,o.deps)){i.memoizedState=lr(t,n,s,r);return}}H.flags|=e,i.memoizedState=lr(1|t,n,s,r)}function xl(e,t){return Br(8390656,8,e,t)}function ro(e,t){return Ti(2048,8,e,t)}function Lu(e,t){return Ti(4,2,e,t)}function _u(e,t){return Ti(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ou(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,Pu.bind(null,t,e),n)}function io(){}function Mu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Du(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return Ut&21?(Ue(n,t)||(n=Hc(),H.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Km(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{M=n,us.transition=r}}function Uu(){return Ae().memoizedState}function Qm(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wu(e))Fu(t,n);else if(n=bu(e,t,n,r),n!==null){var i=ue();ze(n,e,r,i),Gu(n,t,r)}}function Xm(e,t,n){var r=vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wu(e))Fu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ue(l,o)){var c=t.interleaved;c===null?(i.next=i,Ka(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=bu(e,t,i,r),n!==null&&(i=ue(),ze(n,e,r,i),Gu(n,t,r))}}function Wu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Fu(e,t){Hn=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}var mi={readContext:Re,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Zm={readContext:Re,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:xl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:gl,useDebugValue:io,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=gl(!1),t=e[0];return e=Km.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ge();if(F){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));Ut&30||ju(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xl(Iu.bind(null,r,s,e),[e]),r.flags|=2048,lr(9,Cu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ee.identifierPrefix;if(F){var n=Qe,r=Ke;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jm={readContext:Re,useCallback:Mu,useContext:Re,useEffect:ro,useImperativeHandle:Ou,useInsertionEffect:Lu,useLayoutEffect:_u,useMemo:Du,useReducer:ds,useRef:Au,useState:function(){return ds(or)},useDebugValue:io,useDeferredValue:function(e){var t=Ae();return zu(t,Q.memoizedState,e)},useTransition:function(){var e=ds(or)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Su,useSyncExternalStore:Eu,useId:Uu,unstable_isNewReconciler:!1},ef={readContext:Re,useCallback:Mu,useContext:Re,useEffect:ro,useImperativeHandle:Ou,useInsertionEffect:Lu,useLayoutEffect:_u,useMemo:Du,useReducer:ps,useRef:Au,useState:function(){return ps(or)},useDebugValue:io,useDeferredValue:function(e){var t=Ae();return Q===null?t.memoizedState=e:zu(t,Q.memoizedState,e)},useTransition:function(){var e=ps(or)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Su,useSyncExternalStore:Eu,useId:Uu,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ri={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=vt(e),s=Xe(r,i);s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,i),t!==null&&(ze(t,e,i,r),Gr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=vt(e),s=Xe(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,i),t!==null&&(ze(t,e,i,r),Gr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=vt(e),i=Xe(n,r);i.tag=2,t!=null&&(i.callback=t),t=gt(e,i,r),t!==null&&(ze(t,e,r,n),Gr(t,e,r))}};function vl(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(i,s):!0}function Hu(e,t,n){var r=!1,i=kt,s=t.contextType;return typeof s=="object"&&s!==null?s=Re(s):(i=xe(t)?Dt:le.current,r=t.contextTypes,s=(r=r!=null)?mn(e,i):kt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qa(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Re(s):(s=xe(t)?Dt:le.current,i.context=mn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ea(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ri.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=Ip(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function Bu(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,pa=r),na(e,t)},n}function $u(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){na(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function bl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var nf=nt.ReactCurrentOwner,fe=!1;function ce(e,t,n,r){t.child=e===null?wu(t,null,n,r):hn(t,e.child,n,r)}function Nl(e,t,n,r,i){n=n.render;var s=t.ref;return un(t,i),r=to(e,t,n,r,s,i),n=no(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):(F&&n&&Ha(t),t.flags|=1,ce(e,t,r,i),t.child)}function Sl(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!mo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vu(e,t,s,r,i)):(e=Yr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(o,r)&&e.ref===t.ref)return tt(e,t,i)}return t.flags|=1,e=yt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(er(s,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,tt(e,t,i)}return ra(e,t,n,r,i)}function qu(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(sn,we),we|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(sn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(sn,we),we|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,z(sn,we),we|=r;return ce(e,t,i,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,i){var s=xe(n)?Dt:le.current;return s=mn(t,s),un(t,i),n=to(e,t,n,r,s,i),r=no(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):(F&&r&&Ha(t),t.flags|=1,ce(e,t,n,i),t.child)}function El(e,t,n,r,i){if(xe(n)){var s=!0;si(t)}else s=!1;if(un(t,i),t.stateNode===null)$r(e,t),Hu(t,n,r),ta(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=xe(n)?Dt:le.current,u=mn(t,u));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yl(t,o,r,u),at=!1;var g=t.memoizedState;o.state=g,ui(t,r,o,i),c=t.memoizedState,l!==r||g!==c||ge.current||at?(typeof m=="function"&&(ea(t,n,m,r),c=t.memoizedState),(l=at||vl(t,n,l,r,g,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ku(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Pe(t.type,l),o.props=u,f=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=xe(n)?Dt:le.current,c=mn(t,c));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||g!==c)&&yl(t,o,r,c),at=!1,g=t.memoizedState,o.state=g,ui(t,r,o,i);var y=t.memoizedState;l!==f||g!==y||ge.current||at?(typeof v=="function"&&(ea(t,n,v,r),y=t.memoizedState),(u=at||vl(t,n,u,r,g,y,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,s,i)}function ia(e,t,n,r,i,s){Yu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ul(t,n,!1),tt(e,t,s);r=t.stateNode,nf.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,s),t.child=hn(t,null,l,s)):ce(e,t,l,s),t.memoizedState=r.state,i&&ul(t,n,!0),t.child}function Ku(e){var t=e.stateNode;t.pendingContext?cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cl(e,t.context,!1),Xa(e,t.containerInfo)}function jl(e,t,n,r,i){return fn(),$a(i),t.flags|=256,ce(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qu(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(G,i&1),e===null)return Zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_i(o,r,0,null),e=Mt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=aa(n),t.memoizedState=sa,e):so(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rf(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=yt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yt(l,s):(s=Mt(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?aa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return s=e.child,e=s.sibling,r=yt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function so(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&$a(r),hn(t,e.child,null,n),e=so(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ms(Error(k(422))),_r(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=_i({mode:"visible",children:r.children},i,0,null),s=Mt(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=aa(o),t.memoizedState=sa,s);if(!(t.mode&1))return _r(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=ms(s,r,void 0),_r(e,t,o,r)}if(l=(o&e.childLanes)!==0,fe||l){if(r=ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,et(e,i),ze(r,e,i,-1))}return po(),r=ms(Error(k(421))),_r(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,be=ht(i.nextSibling),ke=t,F=!0,Me=null,e!==null&&(je[Ce++]=Ke,je[Ce++]=Qe,je[Ce++]=zt,Ke=e.id,Qe=e.overflow,zt=t),t=so(t,r.children),t.flags|=4096,t)}function Cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Js(e.return,t,n)}function fs(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xu(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ce(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cl(e,n,t);else if(e.tag===19)Cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fs(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&di(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fs(t,!0,n,null,s);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Ku(t),fn();break;case 5:Nu(t);break;case 1:xe(t.type)&&si(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Qu(e,t,n):(z(G,G.current&1),e=tt(e,t,n),e!==null?e.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,n)}return tt(e,t,n)}var Zu,oa,Ju,ed;Zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oa=function(){};Ju=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt(Ve.current);var s=null;switch(n){case"input":i=Ts(e,i),r=Ts(e,r),s=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":i=Ls(e,i),r=Ls(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Ps(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function af(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return xe(t.type)&&ii(),ae(t),null;case 3:return r=t.stateNode,gn(),W(ge),W(le),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ha(Me),Me=null))),oa(e,t),ae(t),null;case 5:Za(t);var i=Pt(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ju(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ae(t),null}if(e=Pt(Ve.current),Ar(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Be]=t,r[rr]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Dn.length;i++)U(Dn[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Mo(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":zo(r,s),U("invalid",r)}Ps(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),i=["children",""+l]):qn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":kr(r),Do(r,s,!0);break;case"textarea":kr(r),Uo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ic(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[rr]=r,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Os(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dn.length;i++)U(Dn[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Mo(e,r),i=Ts(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),U("invalid",e);break;case"textarea":zo(e,r),i=Ls(e,r),U("invalid",e);break;default:i=r}Ps(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ac(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Yn(e,c):typeof c=="number"&&Yn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&U("scroll",e):c!=null&&Ta(e,s,c,o))}switch(n){case"input":kr(e),Do(e,r,!1);break;case"textarea":kr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?an(e,!!r.multiple,s,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Pt(sr.current),Pt(Ve.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(s=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ae(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&be!==null&&t.mode&1&&!(t.flags&128))vu(),fn(),t.flags|=98560,s=!1;else if(s=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Be]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),s=!1}else Me!==null&&(ha(Me),Me=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?X===0&&(X=3):po())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return gn(),oa(e,t),e===null&&tr(t.stateNode.containerInfo),ae(t),null;case 10:return Ya(t.type._context),ae(t),null;case 17:return xe(t.type)&&ii(),ae(t),null;case 19:if(W(G),s=t.memoizedState,s===null)return ae(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ln(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=di(e),o!==null){for(t.flags|=128,Ln(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>vn&&(t.flags|=128,r=!0,Ln(s,!1),t.lanes=4194304)}else{if(!r)if(e=di(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!F)return ae(t),null}else 2*Y()-s.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=G.current,z(G,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return uo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function of(e,t){switch(Ba(t),t.tag){case 1:return xe(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),W(ge),W(le),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return gn(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return uo(),null;case 24:return null;default:return null}}var Pr=!1,oe=!1,lf=typeof WeakSet=="function"?WeakSet:Set,E=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){$(e,t,r)}}var Il=!1;function cf(e,t){if($s=ei,e=su(),Ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++u===i&&(l=o),g===s&&++m===r&&(c=o),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ei=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,N=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:Pe(t.type,b),N);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){$(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=Il,Il=!1,y}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&la(t,n,s)}i=i.next}while(i!==r)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[rr],delete t[Ks],delete t[Bm],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function Tl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var te=null,Oe=!1;function it(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ni,n)}catch{}switch(n.tag){case 5:oe||rn(n,t);case 6:var r=te,i=Oe;te=null,it(e,t,n),te=r,Oe=i,te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?os(e.parentNode,n):e.nodeType===1&&os(e,n),Zn(e)):os(te,n.stateNode));break;case 4:r=te,i=Oe,te=n.stateNode.containerInfo,Oe=!0,it(e,t,n),te=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&la(n,t,o),i=i.next}while(i!==r)}it(e,t,n);break;case 1:if(!oe&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$(n,t,l)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,it(e,t,n),oe=r):it(e,t,n);break;default:it(e,t,n)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lf),t.forEach(function(r){var i=vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Oe=!1;break e;case 3:te=l.stateNode.containerInfo,Oe=!0;break e;case 4:te=l.stateNode.containerInfo,Oe=!0;break e}l=l.return}if(te===null)throw Error(k(160));rd(s,o,i),te=null,Oe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){$(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)id(t,e),t=t.sibling}function id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Fe(e),r&4){try{Bn(3,e,e.return),Ai(3,e)}catch(b){$(e,e.return,b)}try{Bn(5,e,e.return)}catch(b){$(e,e.return,b)}}break;case 1:Le(t,e),Fe(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Le(t,e),Fe(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var i=e.stateNode;try{Yn(i,"")}catch(b){$(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jc(i,s),Os(l,o);var u=Os(l,s);for(o=0;o<c.length;o+=2){var m=c[o],f=c[o+1];m==="style"?Ac(i,f):m==="dangerouslySetInnerHTML"?Tc(i,f):m==="children"?Yn(i,f):Ta(i,m,f,u)}switch(l){case"input":Rs(i,s);break;case"textarea":Cc(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?an(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?an(i,!!s.multiple,s.defaultValue,!0):an(i,!!s.multiple,s.multiple?[]:"",!1))}i[rr]=s}catch(b){$(e,e.return,b)}}break;case 6:if(Le(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){$(e,e.return,b)}}break;case 3:if(Le(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(b){$(e,e.return,b)}break;case 4:Le(t,e),Fe(e);break;case 13:Le(t,e),Fe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lo=Y())),r&4&&Rl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||m,Le(t,e),oe=u):Le(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(f=E=m;E!==null;){switch(g=E,v=g.child,g.tag){case 0:case 11:case 14:case 15:Bn(4,g,g.return);break;case 1:rn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){$(r,n,b)}}break;case 5:rn(g,g.return);break;case 22:if(g.memoizedState!==null){Ll(f);continue}}v!==null?(v.return=g,E=v):Ll(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Rc("display",o))}catch(b){$(e,e.return,b)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){$(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(t,e),Fe(e),r&4&&Rl(e);break;case 21:break;default:Le(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yn(i,""),r.flags&=-33);var s=Tl(e);da(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tl(e);ua(e,l,o);break;default:throw Error(k(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uf(e,t,n){E=e,sd(e)}function sd(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pr;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||oe;l=Pr;var u=oe;if(Pr=o,(oe=c)&&!u)for(E=i;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?_l(i):c!==null?(c.return=o,E=c):_l(i);for(;s!==null;)E=s,sd(s),s=s.sibling;E=i,Pr=l,oe=u}Al(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Al(e)}}function Al(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&hl(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Zn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&ca(t)}catch(g){$(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ll(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function _l(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(c){$(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){$(t,i,c)}}var s=t.return;try{ca(t)}catch(c){$(t,s,c)}break;case 5:var o=t.return;try{ca(t)}catch(c){$(t,o,c)}}}catch(c){$(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var df=Math.ceil,fi=nt.ReactCurrentDispatcher,ao=nt.ReactCurrentOwner,Te=nt.ReactCurrentBatchConfig,P=0,ee=null,K=null,re=0,we=0,sn=St(0),X=0,cr=null,Wt=0,Li=0,oo=0,$n=null,me=null,lo=0,vn=1/0,qe=null,hi=!1,pa=null,xt=null,Or=!1,ut=null,gi=0,Vn=0,ma=null,Vr=-1,qr=0;function ue(){return P&6?Y():Vr!==-1?Vr:Vr=Y()}function vt(e){return e.mode&1?P&2&&re!==0?re&-re:qm.transition!==null?(qr===0&&(qr=Hc()),qr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function ze(e,t,n,r){if(50<Vn)throw Vn=0,ma=null,Error(k(185));mr(e,n,r),(!(P&2)||e!==ee)&&(e===ee&&(!(P&2)&&(Li|=n),X===4&&lt(e,re)),ve(e,r),n===1&&P===0&&!(t.mode&1)&&(vn=Y()+500,Ii&&Et()))}function ve(e,t){var n=e.callbackNode;qp(e,t);var r=Jr(e,e===ee?re:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?Vm(Pl.bind(null,e)):hu(Pl.bind(null,e)),Gm(function(){!(P&6)&&Et()}),n=null;else{switch(Bc(r)){case 1:n=Pa;break;case 4:n=Fc;break;case 16:n=Zr;break;case 536870912:n=Gc;break;default:n=Zr}n=md(n,ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ad(e,t){if(Vr=-1,qr=0,P&6)throw Error(k(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Jr(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var i=P;P|=2;var s=ld();(ee!==e||re!==t)&&(qe=null,vn=Y()+500,Ot(e,t));do try{ff();break}catch(l){od(e,l)}while(!0);qa(),fi.current=s,P=i,K!==null?t=0:(ee=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Ws(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=cr,Ot(e,0),lt(e,r),ve(e,Y()),n;if(t===6)lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!pf(i)&&(t=xi(e,r),t===2&&(s=Ws(e),s!==0&&(r=s,t=fa(e,s))),t===1))throw n=cr,Ot(e,0),lt(e,r),ve(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:At(e,me,qe);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=lo+500-Y(),10<t)){if(Jr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ys(At.bind(null,e,me,qe),t);break}At(e,me,qe);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-De(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*df(r/1960))-r,10<r){e.timeoutHandle=Ys(At.bind(null,e,me,qe),r);break}At(e,me,qe);break;case 5:At(e,me,qe);break;default:throw Error(k(329))}}}return ve(e,Y()),e.callbackNode===n?ad.bind(null,e):null}function fa(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=xi(e,t),e!==2&&(t=me,me=n,t!==null&&ha(t)),e}function ha(e){me===null?me=e:me.push.apply(me,e)}function pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ue(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~oo,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Pl(e){if(P&6)throw Error(k(327));dn();var t=Jr(e,0);if(!(t&1))return ve(e,Y()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=Ws(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=cr,Ot(e,0),lt(e,t),ve(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,me,qe),ve(e,Y()),null}function co(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(vn=Y()+500,Ii&&Et())}}function Ft(e){ut!==null&&ut.tag===0&&!(P&6)&&dn();var t=P;P|=1;var n=Te.transition,r=M;try{if(Te.transition=null,M=1,e)return e()}finally{M=r,Te.transition=n,P=t,!(P&6)&&Et()}}function uo(){we=sn.current,W(sn)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fm(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:gn(),W(ge),W(le),Ja();break;case 5:Za(r);break;case 4:gn();break;case 13:W(G);break;case 19:W(G);break;case 10:Ya(r.type._context);break;case 22:case 23:uo()}n=n.return}if(ee=e,K=e=yt(e.current,null),re=we=t,X=0,cr=null,oo=Li=Wt=0,me=$n=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_t=null}return e}function od(e,t){do{var n=K;try{if(qa(),Hr.current=mi,pi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(Ut=0,J=Q=H=null,Hn=!1,ar=0,ao.current=null,n===null||n.return===null){X=1,cr=t,K=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=bl(o);if(v!==null){v.flags&=-257,kl(v,o,l,s,t),v.mode&1&&wl(s,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){wl(s,u,t),po();break e}c=Error(k(426))}}else if(F&&l.mode&1){var N=bl(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kl(N,o,l,s,t),$a(xn(c,l));break e}}s=c=xn(c,l),X!==4&&(X=2),$n===null?$n=[s]:$n.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Bu(s,c,t);fl(s,p);break e;case 1:l=c;var d=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=$u(s,l,t);fl(s,x);break e}}s=s.return}while(s!==null)}ud(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function ld(){var e=fi.current;return fi.current=mi,e===null?mi:e}function po(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Wt&268435455)&&!(Li&268435455)||lt(ee,re)}function xi(e,t){var n=P;P|=2;var r=ld();(ee!==e||re!==t)&&(qe=null,Ot(e,t));do try{mf();break}catch(i){od(e,i)}while(!0);if(qa(),P=n,fi.current=r,K!==null)throw Error(k(261));return ee=null,re=0,X}function mf(){for(;K!==null;)cd(K)}function ff(){for(;K!==null&&!zp();)cd(K)}function cd(e){var t=pd(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?ud(e):K=t,ao.current=null}function ud(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=of(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=af(n,t,we),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function At(e,t,n){var r=M,i=Te.transition;try{Te.transition=null,M=1,hf(e,t,n,r)}finally{Te.transition=i,M=r}return null}function hf(e,t,n,r){do dn();while(ut!==null);if(P&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yp(e,s),e===ee&&(K=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,md(Zr,function(){return dn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Te.transition,Te.transition=null;var o=M;M=1;var l=P;P|=4,ao.current=null,cf(e,n),id(n,e),Pm(Vs),ei=!!$s,Vs=$s=null,e.current=n,uf(n),Up(),P=l,M=o,Te.transition=s}else e.current=n;if(Or&&(Or=!1,ut=e,gi=i),s=e.pendingLanes,s===0&&(xt=null),Gp(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=pa,pa=null,e;return gi&1&&e.tag!==0&&dn(),s=e.pendingLanes,s&1?e===ma?Vn++:(Vn=0,ma=e):Vn=0,Et(),null}function dn(){if(ut!==null){var e=Bc(gi),t=Te.transition,n=M;try{if(Te.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,gi=0,P&6)throw Error(k(331));var i=P;for(P|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Bn(8,m,s)}var f=m.child;if(f!==null)f.return=m,E=f;else for(;E!==null;){m=E;var g=m.sibling,v=m.return;if(td(m),m===u){E=null;break}if(g!==null){g.return=v,E=g;break}E=v}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var N=b.sibling;b.sibling=null,b=N}while(b!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,E=p;break e}E=s.return}}var d=e.current;for(E=d;E!==null;){o=E;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,E=h;else e:for(o=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ai(9,l)}}catch(S){$(l,l.return,S)}if(l===o){E=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,E=x;break e}E=l.return}}if(P=i,Et(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ni,e)}catch{}r=!0}return r}finally{M=n,Te.transition=t}}return!1}function Ol(e,t,n){t=xn(n,t),t=Bu(e,t,1),e=gt(e,t,1),t=ue(),e!==null&&(mr(e,1,t),ve(e,t))}function $(e,t,n){if(e.tag===3)Ol(e,e,n);else for(;t!==null;){if(t.tag===3){Ol(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=$u(t,e,1),t=gt(t,e,1),e=ue(),t!==null&&(mr(t,1,e),ve(t,e));break}}t=t.return}}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Y()-lo?Ot(e,0):oo|=n),ve(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=ue();e=et(e,t),e!==null&&(mr(e,t,n),ve(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),dd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,sf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,F&&t.flags&1048576&&gu(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var i=mn(t,le.current);un(t,n),i=to(null,t,r,e,i,n);var s=no();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(s=!0,si(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qa(t),i.updater=Ri,t.stateNode=i,i._reactInternals=t,ta(t,r,e,n),t=ia(null,t,r,!0,s,n)):(t.tag=0,F&&s&&Ha(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wf(r),e=Pe(r,e),i){case 0:t=ra(null,t,r,e,n);break e;case 1:t=El(null,t,r,e,n);break e;case 11:t=Nl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,Pe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),El(e,t,r,i,n);case 3:e:{if(Ku(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ku(e,t),ui(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=xn(Error(k(423)),t),t=jl(e,t,r,n,i);break e}else if(r!==i){i=xn(Error(k(424)),t),t=jl(e,t,r,n,i);break e}else for(be=ht(t.stateNode.containerInfo.firstChild),ke=t,F=!0,Me=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=tt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Nu(t),e===null&&Zs(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,qs(r,i)?o=null:s!==null&&qs(r,s)&&(t.flags|=32),Yu(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Zs(t),null;case 13:return Qu(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Nl(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,z(li,r._currentValue),r._currentValue=o,s!==null)if(Ue(s.value,o)){if(s.children===i.children&&!ge.current){t=tt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Xe(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Js(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Js(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,un(t,n),i=Re(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Pe(r,t.pendingProps),i=Pe(r.type,i),Sl(e,t,r,i,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),$r(e,t),t.tag=1,xe(r)?(e=!0,si(t)):e=!1,un(t,n),Hu(t,r,i),ta(t,r,i,n),ia(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return qu(e,t,n)}throw Error(k(156,t.tag))};function md(e,t){return Wc(e,t)}function yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new yf(e,t,n,r)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wf(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Aa)return 11;if(e===La)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return Mt(n.children,i,s,t);case Ra:o=8,i|=8;break;case Es:return e=Ie(12,n,t,i|2),e.elementType=Es,e.lanes=s,e;case js:return e=Ie(13,n,t,i),e.elementType=js,e.lanes=s,e;case Cs:return e=Ie(19,n,t,i),e.elementType=Cs,e.lanes=s,e;case Nc:return _i(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:o=10;break e;case kc:o=9;break e;case Aa:o=11;break e;case La:o=14;break e;case st:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ie(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Mt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Nc,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fo(e,t,n,r,i,s,o,l,c){return e=new bf(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ie(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(s),e}function kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fd(e){if(!e)return kt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return fu(e,n,t)}return t}function hd(e,t,n,r,i,s,o,l,c){return e=fo(n,r,!0,e,i,s,o,l,c),e.context=fd(null),n=e.current,r=ue(),i=vt(n),s=Xe(r,i),s.callback=t??null,gt(n,s,i),e.current.lanes=i,mr(e,i,r),ve(e,r),e}function Pi(e,t,n,r){var i=t.current,s=ue(),o=vt(i);return n=fd(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(i,t,o),e!==null&&(ze(e,i,o,s),Gr(e,i,o)),o}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ml(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ho(e,t){Ml(e,t),(e=e.alternate)&&Ml(e,t)}function Nf(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function go(e){this._internalRoot=e}Oi.prototype.render=go.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Pi(e,t,null,null)};Oi.prototype.unmount=go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Pi(null,e,null,null)}),t[Je]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Kc(e)}};function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dl(){}function Sf(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vi(o);s.call(u)}}var o=hd(t,r,e,0,null,!1,!1,"",Dl);return e._reactRootContainer=o,e[Je]=o.current,tr(e.nodeType===8?e.parentNode:e),Ft(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=vi(c);l.call(u)}}var c=fo(e,0,!1,null,null,!1,!1,"",Dl);return e._reactRootContainer=c,e[Je]=c.current,tr(e.nodeType===8?e.parentNode:e),Ft(function(){Pi(t,c,n,r)}),c}function Di(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=vi(o);l.call(c)}}Pi(t,o,e,i)}else o=Sf(n,t,e,i,r);return vi(o)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Oa(t,n|1),ve(t,Y()),!(P&6)&&(vn=Y()+500,Et()))}break;case 13:Ft(function(){var r=et(e,1);if(r!==null){var i=ue();ze(r,e,1,i)}}),ho(e,1)}};Ma=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ue();ze(t,e,134217728,n)}ho(e,134217728)}};Vc=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=ue();ze(n,e,t,r)}ho(e,t)}};qc=function(){return M};Yc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ds=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(k(90));Ec(r),Rs(r,i)}}}break;case"textarea":Cc(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Pc=co;Oc=Ft;var Ef={usingClientEntryPoint:!1,Events:[hr,Zt,Ci,Lc,_c,co]},_n={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Ni=Mr.inject(jf),$e=Mr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xo(t))throw Error(k(200));return kf(e,t,null,n)};Se.createRoot=function(e,t){if(!xo(e))throw Error(k(299));var n=!1,r="",i=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fo(e,1,!1,null,null,n,!1,r,i),e[Je]=t.current,tr(e.nodeType===8?e.parentNode:e),new go(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ft(e)};Se.hydrate=function(e,t,n){if(!Mi(t))throw Error(k(200));return Di(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!xo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=hd(t,null,e,1,n??null,i,!1,s,o),e[Je]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Oi(t)};Se.render=function(e,t,n){if(!Mi(t))throw Error(k(200));return Di(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(k(40));return e._reactRootContainer?(Ft(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=co;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Di(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),xc.exports=Se;var Cf=xc.exports,zl=Cf;Ns.createRoot=zl.createRoot,Ns.hydrateRoot=zl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Ul="popstate";function If(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:l="",hash:c=""}=Bt(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ga("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof s=="string"?s:yi(s))}function r(i,s){zi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Rf(t,n,r,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tf(){return Math.random().toString(36).substr(2,8)}function Wl(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n,r){return n===void 0&&(n=null),ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||Tf()})}function yi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=dt.Pop,c=null,u=m();u==null&&(u=0,o.replaceState(ur({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function f(){l=dt.Pop;let N=m(),p=N==null?null:N-u;u=N,c&&c({action:l,location:b.location,delta:p})}function g(N,p){l=dt.Push;let d=ga(b.location,N,p);n&&n(d,N),u=m()+1;let h=Wl(d,u),x=b.createHref(d);try{o.pushState(h,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}s&&c&&c({action:l,location:b.location,delta:1})}function v(N,p){l=dt.Replace;let d=ga(b.location,N,p);n&&n(d,N),u=m();let h=Wl(d,u),x=b.createHref(d);o.replaceState(h,"",x),s&&c&&c({action:l,location:b.location,delta:0})}function y(N){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:yi(N);return d=d.replace(/ $/,"%20"),V(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let b={get action(){return l},get location(){return e(i,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ul,f),c=N,()=>{i.removeEventListener(Ul,f),c=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let p=y(N);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(N){return o.go(N)}};return b}var Fl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fl||(Fl={}));function Af(e,t,n){return n===void 0&&(n="/"),Lf(e,t,n)}function Lf(e,t,n,r){let i=typeof t=="string"?Bt(t):t,s=yn(i.pathname||"/",n);if(s==null)return null;let o=vd(e);_f(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Bf(s);l=Gf(o[c],u)}return l}function vd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(V(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=wt([r,c.relativePath]),m=n.concat(c);s.children&&s.children.length>0&&(V(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vd(s.children,t,m,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Wf(u,s.index),routesMeta:m})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of yd(s.path))i(s,o,c)}),t}function yd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yd(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function _f(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ff(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pf=/^:[\w-]+$/,Of=3,Mf=2,Df=1,zf=10,Uf=-2,Gl=e=>e==="*";function Wf(e,t){let n=e.split("/"),r=n.length;return n.some(Gl)&&(r+=Uf),t&&(r+=Mf),n.filter(i=>!Gl(i)).reduce((i,s)=>i+(Pf.test(s)?Of:s===""?Df:zf),r)}function Ff(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Gf(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,m=s==="/"?t:t.slice(s.length)||"/",f=xa({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),g=c.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:wt([s,f.pathname]),pathnameBase:Kf(wt([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=wt([s,f.pathnameBase]))}return o}function xa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hf(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,m,f)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let b=l[f]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const y=l[f];return v&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Hf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const $f=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vf=e=>$f.test(e);function qf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Bt(e):e,s;if(n)if(Vf(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),zi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Hl(n.substring(1),"/"):s=Hl(n,t)}else s=t;return{pathname:s,search:Qf(r),hash:Xf(i)}}function Hl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wd(e,t){let n=Yf(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Bt(e):(i=ur({},e),V(!i.pathname||!i.pathname.includes("?"),xs("?","pathname","search",i)),V(!i.pathname||!i.pathname.includes("#"),xs("#","pathname","hash",i)),V(!i.search||!i.search.includes("#"),xs("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=qf(i,l),u=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const wt=e=>e.join("/").replace(/\/\/+/g,"/"),Kf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kd=["post","put","patch","delete"];new Set(kd);const Jf=["get",...kd];new Set(Jf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(this,arguments)}const Ui=w.createContext(null),Nd=w.createContext(null),jt=w.createContext(null),Wi=w.createContext(null),rt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Sd=w.createContext(null);function eh(e,t){let{relative:n}=t===void 0?{}:t;xr()||V(!1);let{basename:r,navigator:i}=w.useContext(jt),{hash:s,pathname:o,search:l}=Fi(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:wt([r,o])),i.createHref({pathname:c,search:l,hash:s})}function xr(){return w.useContext(Wi)!=null}function $t(){return xr()||V(!1),w.useContext(Wi).location}function Ed(e){w.useContext(jt).static||w.useLayoutEffect(e)}function vo(){let{isDataRoute:e}=w.useContext(rt);return e?hh():th()}function th(){xr()||V(!1);let e=w.useContext(Ui),{basename:t,future:n,navigator:r}=w.useContext(jt),{matches:i}=w.useContext(rt),{pathname:s}=$t(),o=JSON.stringify(wd(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return Ed(()=>{l.current=!0}),w.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=bd(u,JSON.parse(o),s,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:wt([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,o,s,e])}const jd=w.createContext(null);function Cd(){return w.useContext(jd)}function nh(e){let t=w.useContext(rt).outlet;return t&&w.createElement(jd.Provider,{value:e},t)}function rh(){let{matches:e}=w.useContext(rt),t=e[e.length-1];return t?t.params:{}}function Fi(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(jt),{matches:i}=w.useContext(rt),{pathname:s}=$t(),o=JSON.stringify(wd(i,r.v7_relativeSplatPath));return w.useMemo(()=>bd(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function ih(e,t){return sh(e,t)}function sh(e,t,n,r){xr()||V(!1);let{navigator:i}=w.useContext(jt),{matches:s}=w.useContext(rt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=$t(),m;if(t){var f;let N=typeof t=="string"?Bt(t):t;c==="/"||(f=N.pathname)!=null&&f.startsWith(c)||V(!1),m=N}else m=u;let g=m.pathname||"/",v=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=Af(e,{pathname:v}),b=uh(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:wt([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:wt([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return t&&b?w.createElement(Wi.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:dt.Pop}},b):b}function ah(){let e=fh(),t=Zf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const oh=w.createElement(ah,null);class lh extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(rt.Provider,{value:this.props.routeContext},w.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Ui);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(rt.Provider,{value:t},r)}function uh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);m>=0||V(!1),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let f=o[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=m),f.route.id){let{loaderData:g,errors:v}=n,y=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,f,g)=>{let v,y=!1,b=null,N=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,b=f.route.errorElement||oh,c&&(u<0&&g===0?(gh("route-fallback"),y=!0,N=null):u===g&&(y=!0,N=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),d=()=>{let h;return v?h=b:y?h=N:f.route.Component?h=w.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,w.createElement(ch,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?w.createElement(lh,{location:n.location,revalidation:n.revalidation,component:b,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Id=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Id||{}),Td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Td||{});function dh(e){let t=w.useContext(Ui);return t||V(!1),t}function ph(e){let t=w.useContext(Nd);return t||V(!1),t}function mh(e){let t=w.useContext(rt);return t||V(!1),t}function Rd(e){let t=mh(),n=t.matches[t.matches.length-1];return n.route.id||V(!1),n.route.id}function fh(){var e;let t=w.useContext(Sd),n=ph(),r=Rd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function hh(){let{router:e}=dh(Id.UseNavigateStable),t=Rd(Td.UseNavigateStable),n=w.useRef(!1);return Ed(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,dr({fromRouteId:t},s)))},[e,t])}const Bl={};function gh(e,t,n){Bl[e]||(Bl[e]=!0)}function xh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vh(e){return nh(e.context)}function _e(e){V(!1)}function yh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dt.Pop,navigator:s,static:o=!1,future:l}=e;xr()&&V(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:s,static:o,future:dr({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=Bt(r));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=r,b=w.useMemo(()=>{let N=yn(m,c);return N==null?null:{location:{pathname:N,search:f,hash:g,state:v,key:y},navigationType:i}},[c,m,f,g,v,y,i]);return b==null?null:w.createElement(jt.Provider,{value:u},w.createElement(Wi.Provider,{children:n,value:b}))}function wh(e){let{children:t,location:n}=e;return ih(va(t),n)}new Promise(()=>{});function va(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,va(r.props.children,s));return}r.type!==_e&&V(!1),!r.props.index||!r.props.children||V(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=va(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}function Ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kh(e,t){return e.button===0&&(!t||t==="_self")&&!bh(e)}function ya(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Nh(e,t){let n=ya(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Sh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Eh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jh="6";try{window.__reactRouterVersion=jh}catch{}const Ch=w.createContext({isTransitioning:!1}),Ih="startTransition",$l=hp[Ih];function Th(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=If({window:i,v5Compat:!0}));let o=s.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=w.useCallback(f=>{u&&$l?$l(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>o.listen(m),[o,m]),w.useEffect(()=>xh(r),[r]),w.createElement(yh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:m,viewTransition:f}=t,g=Ad(t,Sh),{basename:v}=w.useContext(jt),y,b=!1;if(typeof u=="string"&&Ah.test(u)&&(y=u,Rh))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=yn(x.pathname,v);x.origin===h.origin&&S!=null?u=S+x.search+x.hash:b=!0}catch{}let N=eh(u,{relative:i}),p=_h(u,{replace:o,state:l,target:c,preventScrollReset:m,relative:i,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return w.createElement("a",wi({},g,{href:y||N,onClick:b||s?r:d,ref:n,target:c}))}),He=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:u,children:m}=t,f=Ad(t,Eh),g=Fi(c,{relative:f.relative}),v=$t(),y=w.useContext(Nd),{navigator:b,basename:N}=w.useContext(jt),p=y!=null&&Ph(g)&&u===!0,d=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,h=v.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(h=h.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&N&&(x=yn(x,N)||x);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let j=h===d||!o&&h.startsWith(d)&&h.charAt(S)==="/",I=x!=null&&(x===d||!o&&x.startsWith(d)&&x.charAt(d.length)==="/"),T={isActive:j,isPending:I,isTransitioning:p},O=j?r:void 0,A;typeof s=="function"?A=s(T):A=[s,j?"active":null,I?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ye=typeof l=="function"?l(T):l;return w.createElement(ne,wi({},f,{"aria-current":O,className:A,ref:n,style:ye,to:c,viewTransition:u}),typeof m=="function"?m(T):m)});var wa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wa||(wa={}));var Vl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vl||(Vl={}));function Lh(e){let t=w.useContext(Ui);return t||V(!1),t}function _h(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=vo(),u=$t(),m=Fi(e,{relative:o});return w.useCallback(f=>{if(kh(f,n)){f.preventDefault();let g=r!==void 0?r:yi(u)===yi(m);c(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,m,r,i,n,e,s,o,l])}function yo(e){let t=w.useRef(ya(e)),n=w.useRef(!1),r=$t(),i=w.useMemo(()=>Nh(r.search,n.current?null:t.current),[r.search]),s=vo(),o=w.useCallback((l,c)=>{const u=ya(typeof l=="function"?l(i):l);n.current=!0,s("?"+u,c)},[s,i]);return[i,o]}function Ph(e,t){t===void 0&&(t={});let n=w.useContext(Ch);n==null&&V(!1);let{basename:r}=Lh(wa.useViewTransitionState),i=Fi(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=yn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=yn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xa(i.pathname,o)!=null||xa(i.pathname,s)!=null}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ld=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...Mh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ld("lucide",i),...l},[...o.map(([u,m])=>w.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=w.forwardRef(({className:r,...i},s)=>w.createElement(Dh,{ref:s,iconNode:t,className:Ld(`lucide-${Oh(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=D("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=D("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=D("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=D("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=D("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=D("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=D("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=D("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=D("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=D("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=D("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=D("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=D("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=D("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=D("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=D("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=D("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=D("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=D("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=D("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=D("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=D("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=D("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Yl={to:"/signal-stack",label:"SIGNAL_STACK"};function ag(){const e=vo(),[t,n]=w.useState(""),[r,i]=w.useState(!1),s=w.useRef(null),o=w.useRef(null);function l(c){c.preventDefault();const u=t.trim();u&&e(`/search?q=${encodeURIComponent(u)}`)}return w.useEffect(()=>{if(!r)return;function c(m){const f=s.current,g=o.current;f&&!f.contains(m.target)&&g&&!g.contains(m.target)&&i(!1)}function u(m){m.key==="Escape"&&i(!1)}return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",u)}},[r]),a.jsxs("nav",{className:"relative border-b border-is-border bg-is-bg sticky top-0 z-50",children:[a.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 flex items-center min-w-0 h-12 gap-3 sm:gap-4 md:gap-8",children:[a.jsx(He,{to:"/",className:"font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0",children:"Invisible Signals™"}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsxs(He,{to:Yl.to,className:({isActive:c})=>`hidden sm:flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border ${c?"border-is-primary text-is-primary bg-is-primary/10":"border-is-primary/40 text-is-primary hover:bg-is-primary/10 hover:border-is-primary"}`,children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),Yl.label]}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsx("div",{className:"hidden md:flex items-center",children:[{to:"/frameworks",label:"_01_FRAMEWORKS"},{to:"/analyzer",label:"_02_ANALYZER"},{to:"/prompts",label:"_03_PROMPTS"}].map(c=>a.jsx(He,{to:c.to,className:({isActive:u})=>`px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${u?"text-is-text":"text-is-secondary hover:text-is-text"}`,children:c.label},c.to))}),a.jsxs("form",{onSubmit:l,className:"flex items-center gap-0 border border-is-border bg-is-surface min-w-0",children:[a.jsx("span",{className:"pl-2 sm:pl-3 pr-2 flex items-center text-is-secondary",children:a.jsx(tg,{size:12})}),a.jsx("input",{type:"text",value:t,onChange:c=>n(c.target.value),placeholder:"QUERY_SYSTEM...",className:"bg-transparent font-mono text-xs tracking-widest text-is-text placeholder:text-is-dim outline-none py-1.5 pr-3 w-24 sm:w-40 md:w-48 min-w-0"})]}),a.jsx("div",{className:"md:hidden ml-auto",children:a.jsx("button",{onClick:()=>i(c=>!c),"aria-expanded":r,"aria-label":"Toggle menu",ref:o,className:"p-2 text-is-text",children:r?a.jsx(sg,{size:18}):a.jsx(Jh,{size:18})})}),a.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]}),r&&a.jsx("div",{ref:s,className:"md:hidden absolute inset-x-0 top-full bg-is-bg border-t border-is-border z-40",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-3 flex flex-col gap-2",children:[a.jsx(He,{to:"/signal-stack",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-text",children:"SIGNAL_STACK"}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx(He,{to:"/frameworks",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_01_FRAMEWORKS"}),a.jsx(He,{to:"/analyzer",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_02_ANALYZER"}),a.jsx(He,{to:"/prompts",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_03_PROMPTS"}),a.jsx(He,{to:"/analyzer",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_03_ANALYZER"})]}),a.jsxs("div",{className:"flex items-center justify-between pt-2",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]})})]})}const wo=`# Quick Signal Prompts

## Purpose

Provide fast, focused signal checks for single artifacts when you don't want to run a full Signal Scorecard.

Use these when you have one small artifact and want quick diagnostic feedback.

## Best used with

- One résumé bullet
- One LinkedIn headline, About section, or experience entry
- One GitHub profile README, pinned repos, or repo description
- One behavioral interview answer
- One leadership story

## How to use

Choose the appropriate check below and paste a single artifact into the prompt. Each check returns:

1. What this currently signals
2. What is missing or unclear
3. What may be misread
4. The highest-impact fix
5. Recovery questions for truthful evidence

## Choose a Signal Check

| If you have... | Use this |
|---|---|
| One résumé bullet | [Résumé Bullet Check](resume-bullet-check.md) |
| A LinkedIn headline, About section, or experience entry | [LinkedIn Profile Check](linkedin-profile-check.md) |
| A GitHub profile README, pinned repos, or repo description | [GitHub Profile Check](github-profile-check.md) |
| A behavioral interview answer | [Interview Answer Check](interview-answer-check.md) |

## Rule

Do not invent evidence.

If a metric, result, decision, scope, or business impact is missing, recover the truth before rewriting.
`,bo=`---
title: GitHub Profile Signal Check
version: 1.0
status: active
category: quick-signal
tags:
  - github
  - profile
  - quick-check
  - signal-check
---

# Prompt: GitHub Profile Signal Check

## Purpose

Evaluate the signal quality of a GitHub profile README, pinned repos, or project description.

## Best used with

- Target audience (recruiters, hiring managers, engineering managers, open-source collaborators, etc.)
- Target role or positioning
- The GitHub content to evaluate

## Prompt

\`\`\`text
I want you to diagnose the signal quality of this GitHub profile or project content.

Target audience:
[recruiters / hiring managers / engineering managers / technical interviewers / open-source collaborators / other]

Target role or positioning:
[PASTE TARGET ROLE, LEVEL, OR POSITIONING]

GitHub content:
[PASTE PROFILE README, PINNED REPOS, OR REPO DESCRIPTION]

Evaluate the content using this structure:

1. What this currently signals
2. What technical strengths are visible
3. What is unclear or under-signaled
4. What may be misread
5. Whether the projects support the target positioning
6. The highest-impact fix
7. Suggested README or repo description improvement, only if enough evidence exists
8. Evidence recovery questions

Rules:
- Do not overstate production readiness, adoption, impact, or technical depth.
- Distinguish experiments from serious portfolio projects.
- Make the strongest evidence easier to find.
\`\`\`
`,ko=`---
title: Interview Answer Signal Check
version: 1.0
status: active
category: quick-signal
tags:
  - interview
  - behavioral
  - quick-check
  - signal-check
---

# Prompt: Interview Answer Signal Check

## Purpose

Diagnose the signal quality of a single behavioral interview answer.

## Best used with

- A behavioral question
- Your current answer
- Target role or level

## Prompt

\`\`\`text
I want you to diagnose the signal quality of my interview answer.

Interview question:
[PASTE QUESTION]

My answer:
[PASTE ANSWER]

Target role:
[PASTE TARGET ROLE OR LEVEL]

Evaluate the answer using this structure:

1. STAR completeness
2. What this answer currently signals
3. What is missing or vague
4. Where my individual ownership is unclear
5. What the interviewer may doubt
6. The highest-impact fix
7. Specific sentences I should strengthen
8. Recovery questions for truthful evidence

Rules:
- Do not invent outcomes, metrics, decisions, or leadership scope.
- Preserve the truth of the story.
- Make the answer stronger without making it fake.
\`\`\`
`,No=`---
title: LinkedIn Profile Signal Check
version: 1.0
status: active
category: quick-signal
tags:
  - linkedin
  - profile
  - quick-check
  - signal-check
---

# Prompt: LinkedIn Profile Signal Check

## Purpose

Evaluate the signal quality of a LinkedIn headline, About section, or experience entry.

## Best used with

- Target audience (recruiters, hiring managers, technical leaders, etc.)
- Target role or positioning
- The LinkedIn content to evaluate

## Prompt

\`\`\`text
I want you to diagnose the signal quality of this LinkedIn profile content.

Target audience:
[recruiters / hiring managers / technical leaders / executives / peers / other]

Target role or positioning:
[PASTE TARGET ROLE, LEVEL, OR POSITIONING]

LinkedIn content:
[PASTE HEADLINE, ABOUT SECTION, OR EXPERIENCE ENTRY]

Evaluate the content using this structure:

1. What this currently signals
2. What is strong
3. What is generic, vague, or underdeveloped
4. What may be misread
5. Whether the content supports the target positioning
6. The highest-impact fix
7. Suggested rewrite, only if enough evidence exists
8. Evidence recovery questions

Rules:
- Do not exaggerate seniority, scope, outcomes, or expertise.
- Avoid generic personal branding language.
- Make real experience easier to understand.
\`\`\`
`,So=`---
title: Résumé Bullet Signal Check
version: 1.0
status: active
category: quick-signal
tags:
  - resume
  - quick-check
  - signal-check
---

# Prompt: Résumé Bullet Signal Check

## Purpose

Diagnose the signal quality of a single résumé bullet quickly.

## Best used with

- Target role or a short job description excerpt
- One résumé bullet

---

## Prompt

\`\`\`text
I want you to diagnose the signal quality of this résumé bullet.

Target role:
[PASTE TARGET ROLE OR JOB DESCRIPTION EXCERPT]

Current résumé bullet:
[PASTE ONE BULLET]

Evaluate the bullet using this structure:

1. What this currently signals
2. What is missing or unclear
3. What a hiring manager may reasonably infer
4. What could be misread or doubted
5. The highest-impact fix
6. Evidence recovery questions
7. A stronger version, only if enough truthful evidence exists

Rules:
- Do not invent metrics, scope, technologies, business impact, or leadership responsibility.
- If evidence is missing, ask questions before rewriting.
- Keep the feedback direct, practical, and specific.
\`\`\`
`;function he({color:e="blue",children:t}){const n={blue:"bg-is-primary/10 text-is-primary border-is-primary/30",coral:"bg-is-alert/10 text-is-alert border-is-alert/30",gold:"bg-is-warning/10 text-is-warning border-is-warning/30",dim:"bg-transparent text-is-dim border-is-border"};return a.jsxs("span",{className:`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs uppercase tracking-widest ${n[e]??n.dim}`,children:[e!=="dim"&&a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e==="blue"?"bg-is-primary":e==="coral"?"bg-is-alert":"bg-is-warning"}`}),t]})}function bi({text:e,clarityEvent:t}){const[n,r]=w.useState(!1);function i(){navigator.clipboard.writeText(e).then(()=>{var s;r(!0),setTimeout(()=>r(!1),2e3),t&&((s=window.clarity)==null||s.call(window,"event",t))})}return a.jsxs("button",{onClick:i,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(Wh,{size:12}):a.jsx($h,{size:12}),n?"COPIED":"COPY"]})}function zd(e){const t=e.match(/^---\n([\s\S]*?)\n---\n/),n={};t&&t[1].replace(/^([\w-]+):\s*(.+)$/gm,(l,c,u)=>{n[c]=u.trim()});const i=(t?e.slice(t[0].length):e).split(/\n---\n/),s=[];if(i[1])for(const l of i[1].matchAll(/^\| (\d+) \| ([^|]+?) \| ([^|]+?) \|$/gm))s.push({score:parseInt(l[1]),rating:l[2].trim(),meaning:l[3].trim()});const o=[];for(let l=2;l<i.length;l++){const c=i[l].trim();if(!c)continue;const u=og(c);u&&o.push(u)}return{frontmatter:n,scoringRows:s,layers:o}}function og(e){const t=e.match(/^## Layer (\d+) — (.+)$/m);if(!t)return null;const n=parseInt(t[1]),r=t[2].trim(),i=`l${n}`,s=e.match(/\*\*([^*\n]+)\*\*/),o=s?s[1].trim():"",l=e.match(/\*\*[^*\n]+\*\*\n+([\s\S]*?)\n+\*\*Strong signals\*\*/),c=l?l[1].trim():"",u=e.match(/\*\*Strong signals\*\*\n+((?:- .+\n?)+)/),m=u?(u[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],f=e.match(/\*\*Weak signals\*\*\n+((?:- .+\n?)+)/),g=f?(f[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],v=e.match(/> Weak: "([^"]+)"/),y=e.match(/> Strong: "([^"]+)"/),b=v?v[1]:"",N=y?y[1]:"",p=[];for(const d of e.matchAll(/^\| ([A-Za-z][^|]*?) \| ([^|]+?) \|$/gm)){const h=d[1].trim(),x=d[2].trim();h!=="Level"&&p.push({level:h,description:x})}return{num:n,slug:i,name:r,tagline:o,description:c,strongSignals:m,weakSignals:g,exampleWeak:b,exampleStrong:N,levels:p}}function Ud(e){var s;const t=e.match(/^---\n([\s\S]*?)\n---/);if(!t)return{};const n=t[1],r={};n.replace(/^(\w+):\s*(.+)$/gm,(o,l,c)=>{r[l]=c.trim()});const i=n.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Eo(e,t){const n=Ud(t),r=t.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---)/m),i=r?r[1].split(`

`)[0].trim():"",s=t.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/),o=s?s[1].trim():"",l=e.split("/").pop().replace(".md","");return{id:l,title:n.title||l,category:n.category||"general",tags:n.tags||[],purpose:i,text:o}}const Wd=`---
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
`,lg=Object.assign({"../../../prompts/quick-signal/README.md":wo,"../../../prompts/quick-signal/github-profile-check.md":bo,"../../../prompts/quick-signal/interview-answer-check.md":ko,"../../../prompts/quick-signal/linkedin-profile-check.md":No,"../../../prompts/quick-signal/resume-bullet-check.md":So}),ys=["resume-bullet-check","interview-answer-check"],cg=Object.entries(lg).filter(([e])=>!e.endsWith("README.md")).map(([e,t])=>Eo(e,t)).filter(e=>ys.includes(e.id)).sort((e,t)=>ys.indexOf(e.id)-ys.indexOf(t.id));function ug(){const e=[{label:"TECHNICAL_DEPTH",pct:91,color:"bg-is-secondary"},{label:"OWNERSHIP",pct:78,color:"bg-is-primary"},{label:"EXECUTION",pct:84,color:"bg-is-warning"},{label:"BUSINESS_IMPACT",pct:42,color:"bg-is-alert"},{label:"LEADERSHIP",pct:61,color:"bg-is-primary"}];return a.jsxs("div",{className:"space-y-3",children:[e.map(({label:t,pct:n,color:r})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:t}),a.jsxs("span",{className:"font-mono text-xs text-is-text",children:[n,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:a.jsx("div",{className:`h-full ${r}`,style:{width:`${n}%`}})})]},t)),a.jsxs("div",{className:"mt-4 pt-4 border-t border-is-border",children:[a.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-1",children:"▶ PRIMARY_SIGNAL_GAP"}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed",children:"Business impact is implied but not explicitly stated."})]})]})}function dg(){return a.jsxs("div",{className:"relative w-40 h-40 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 border border-is-primary/20 rounded-full"}),a.jsx("div",{className:"absolute inset-4 border border-is-primary/30 rounded-full"}),a.jsx("div",{className:"absolute inset-8 border border-is-primary/50 rounded-full"}),a.jsx("div",{className:"absolute inset-12 border border-is-primary/70 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-is-primary rounded-full"}),a.jsx("div",{className:"absolute top-4 right-8",style:{animation:"orbit-cw 7s linear infinite",transformOrigin:"-42px 64px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-alert",style:{animation:"orbit-ccw 7s linear infinite"}})}),a.jsx("div",{className:"absolute bottom-6 left-6",style:{animation:"orbit-cw 5.5s linear infinite",transformOrigin:"56px -50px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-warning",style:{animation:"orbit-ccw 5.5s linear infinite"}})})]})}const{layers:Kl}=zd(Wd),Ql=[{freq:"440Hz",barColor:"bg-is-secondary",textColor:"text-is-secondary",freqClass:"border-is-secondary/50 text-is-secondary",pct:100},{freq:"880Hz",barColor:"bg-is-alert",textColor:"text-is-alert",freqClass:"border-is-alert/50 text-is-alert",pct:85},{freq:"1.2GHz",barColor:"bg-is-warning",textColor:"text-is-warning",freqClass:"border-is-warning/50 text-is-warning",pct:70},{freq:"2.4GHz",barColor:"bg-is-primary",textColor:"text-is-primary",freqClass:"border-is-primary/50 text-is-primary",pct:60},{freq:"4.8GHz",barColor:"bg-is-secondary",textColor:"text-is-secondary",freqClass:"border-is-secondary/50 text-is-secondary",pct:55},{freq:"9.6GHz",barColor:"bg-is-alert",textColor:"text-is-alert",freqClass:"border-is-alert/50 text-is-alert",pct:45},{freq:"19GHz",barColor:"bg-is-warning",textColor:"text-is-warning",freqClass:"border-is-warning/50 text-is-warning",pct:40},{freq:"38GHz",barColor:"bg-is-primary",textColor:"text-is-primary",freqClass:"border-is-primary/50 text-is-primary",pct:35}],pg=[{to:"/frameworks",tag:"FRAMEWORKS",icon:"⬡",title:"Frameworks",desc:"No-code meta models for evaluating architectural judgment beyond the job log.",pill:"SIGNAL_LOOP",pillColor:"blue"},{to:"/analyzer",tag:"ANALYZER",icon:"◈",title:"Analyzer",desc:"Paste resume bullets, interview answers, or LinkedIn summaries. Get an instant signal score and gap analysis — no external AI tool needed.",pill:"SIGNAL_ACTIVE",pillColor:"gold"},{to:"/prompts",tag:"PROMPTS",icon:"···",title:"Prompts",desc:"System-level instructions to analyze career metadata and generate telemetry goals.",pill:"SIGNAL_MAP",pillColor:"coral"},{to:"/templates",tag:"TEMPLATES",icon:"◻",title:"Templates",desc:"Structured markdown documents for auditing, scoring, and improving your career signals.",pill:"SIGNAL_ACTIVE",pillColor:"gold"}],mg=[{num:"01",title:"VALUE MODULATION",body:"Stop describing tasks; start describing outcomes. High-value work is invisible until translated in the language of organizational growth."},{num:"02",title:"ALGORITHMIC SHARPNESS",body:"Use AI to retrieve value from your narrative. Intelligence tools should work for you; they should diagnose your architectural logic."},{num:"03",title:"SIGNAL INTERPRETATION",body:"Hiring systems are human and machine signal processors. Your objective is to raise the signal-to-noise ratio in every transmission."},{num:"04",title:"REPEATABLE TELEMETRY",body:"Career growth is a series of repeatable processes for surfacing and presenting progress. Lucky signals are not engineered; signals are permanent."}],fg=[{id:"RESUME",label:"Resume",desc:"Analyze ownership, impact, technical depth, and clarity.",Icon:Yh,to:"/analyzer?type=resume"},{id:"LINKEDIN",label:"LinkedIn Profile",desc:"Surface the signals your headline and summary transmit.",Icon:Zh,to:"/analyzer?type=linkedin"},{id:"GITHUB",label:"GitHub Profile",desc:"Evaluate technical depth and contribution patterns.",Icon:Qh,to:"/analyzer?type=github"},{id:"INTERVIEW",label:"Interview Answer",desc:"Detect ownership, specificity, and leadership signal.",Icon:Pd,to:"/analyzer?type=interview"},{id:"PROMOTION",label:"Promotion Packet",desc:"Identify gaps in scope, impact, and cross-functional influence.",Icon:Od,to:null},{id:"LEADERSHIP",label:"Leadership Communication",desc:"Assess clarity, strategic framing, and credibility signals.",Icon:Dd,to:null}];function hg(){const[e,t]=w.useState(!1);return a.jsxs("div",{className:"w-full",children:[a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20 md:py-32",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-10",children:[a.jsx(he,{color:"blue",children:"● SYSTEM STATUS: ONLINE // ESTABLISHED"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary tracking-widest hidden sm:block",children:"SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6",children:["DETECT YOUR SIGNALS",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-alert",children:"IN SECONDS."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed max-w-xl mb-10",children:"Analyze resumes, interview answers, GitHub profiles, and leadership communication. Surface the signals recruiters, hiring managers, and leadership teams actually see."}),a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsx(ne,{to:"/analyzer",className:"is-btn-primary",children:"ANALYZE_SIGNAL"}),a.jsx(ne,{to:"/signal-stack",className:"is-btn-ghost",children:"SIGNAL_STACK →"})]})]}),a.jsxs("div",{className:"is-panel p-4 relative",children:[a.jsx("div",{className:"absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary",children:"SIG_TRACE_01"}),a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),a.jsx(ug,{})]})]})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("div",{className:"is-label mb-2",children:"ANALYZE_TARGETS"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"WHAT CAN YOU ANALYZE?"}),a.jsx("p",{className:"font-body text-base text-is-text mt-3",children:"Paste content. Detect signals. Improve clarity."})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-px bg-is-border",children:fg.map(({id:n,label:r,desc:i,Icon:s,to:o})=>o?a.jsxs(ne,{to:o,className:"bg-is-bg p-5 flex flex-col gap-2 hover:bg-is-surface transition-colors group",children:[a.jsx(s,{size:20,className:"text-is-primary mb-1"}),a.jsx("div",{className:"is-label",children:n}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:r}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed",children:i}),a.jsx("div",{className:"font-mono text-[10px] text-is-primary opacity-0 group-hover:opacity-100 transition-opacity mt-auto",children:"ANALYZE_NOW →"})]},n):a.jsxs("div",{className:"bg-is-bg p-5 flex flex-col gap-2 opacity-60 cursor-default",children:[a.jsx(s,{size:20,className:"text-is-dim mb-1"}),a.jsx("div",{className:"is-label",children:n}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:r}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed",children:i}),a.jsx("div",{className:"font-mono text-[10px] text-is-dim uppercase tracking-widest mt-auto",children:"COMING_SOON"})]},n))})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4 mb-10",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"BUILT_ON"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_STACK"}),a.jsx("div",{className:"font-mono text-xs text-is-secondary mt-2",children:"L1–L8 ANALYSIS FRAMEWORK"})]}),a.jsx(ne,{to:"/signal-stack",className:"font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors",children:"ENTER SIGNAL_STACK →"})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px bg-is-border",children:[(e?Kl:Kl.slice(0,3)).map(({num:n,slug:r,name:i,tagline:s},o)=>{const l=Ql[o]??Ql[0];return a.jsxs(ne,{to:`/signal-stack/${r}`,className:"group bg-is-bg p-5 flex flex-col gap-3 hover:bg-is-surface transition-colors",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("span",{className:"font-mono text-xs text-is-secondary",children:[String(n).padStart(2,"0"),"_LAYER"]}),a.jsxs("span",{className:`font-mono text-xs px-1.5 py-0.5 border ${l.freqClass} shrink-0`,children:["FREQ: ",l.freq]})]}),a.jsx("div",{className:"font-mono text-sm font-semibold text-is-text uppercase tracking-wide",children:i}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed flex-1",children:s}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[a.jsx("div",{className:"h-0.5 bg-is-surface-high flex-1",children:a.jsx("div",{className:`h-full ${l.barColor}`,style:{width:`${l.pct}%`}})}),a.jsxs("span",{className:`font-mono text-xs shrink-0 ${l.textColor}`,children:[l.pct,"%"]})]})]},r)}),!e&&a.jsxs("button",{onClick:()=>t(!0),className:"group bg-is-bg p-5 flex flex-col items-center justify-center gap-3 hover:bg-is-surface transition-colors w-full",children:[a.jsx("div",{className:"font-mono text-2xl text-is-dim group-hover:text-is-text transition-colors",children:"↓"}),a.jsx("div",{className:"font-mono text-xs uppercase tracking-widest text-is-dim group-hover:text-is-text transition-colors",children:"LOAD MORE LAYERS"}),a.jsx("div",{className:"font-mono text-xs text-is-alert",children:"04-08 HIDDEN"})]})]})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_SIGNAL_SPECTRUM"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL CALIBRATION"})]}),a.jsxs("div",{className:"is-panel p-0 overflow-hidden",children:[a.jsxs("div",{className:"border-b border-is-border px-3 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 bg-is-surface",children:[a.jsx("div",{className:"flex items-center gap-4",children:a.jsx("span",{className:"is-label",children:"PROCESS_ID: SIGNAL_PARALLAX"})}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-wrap justify-start",children:[a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"STEP: 1 / 3"}),a.jsx(he,{color:"gold",children:"CALIBRATING"}),a.jsx(he,{color:"blue",children:"SIGNAL_BLANKET"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"RAW_INPUT_SIGNAL"}),a.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-text leading-relaxed italic",children:'"I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."'}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.13 (CRITICAL_LOW)",color:"text-is-alert"},{label:"INPUT_RESOLUTION",val:"NULL_DETECTED",color:"text-is-alert"},{label:"COMPLEXITY_INDEX",val:"GHOST_RUN",color:"text-is-warning"}].map(({label:n,val:r,color:i})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-secondary mb-1",children:n}),a.jsx("div",{className:`font-mono text-xs font-semibold ${i}`,children:r})]},n))})]}),a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROCESSED_SIGNAL_CLARITY"}),a.jsx("div",{className:"is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed",children:`"Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."`}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.94 CONFIRMED",color:"text-is-primary"},{label:"INPUT_RESOLUTION",val:"QUANTIFIED",color:"text-is-primary"},{label:"COMPLEXITY_INDEX",val:"HYPERLINK_HIGH",color:"text-is-primary"}].map(({label:n,val:r,color:i})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-secondary mb-1",children:n}),a.jsx("div",{className:`font-mono text-xs font-semibold ${i}`,children:r})]},n))})]})]})]})]})}),a.jsx("section",{id:"quick-prompts",className:"border-b border-is-border bg-is-bg px-6 py-20 scroll-mt-16",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-12 gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"MANUAL_PROMPTS // FOR_EXTERNAL_AI"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-text mt-3 max-w-xl",children:"Prefer to use ChatGPT, Claude, or another AI tool? Copy a focused prompt and run it yourself."})]}),a.jsxs("div",{className:"font-mono text-xs text-is-secondary uppercase tracking-widest text-right shrink-0",children:["EXTERNAL_AI_COMPATIBLE",a.jsx("br",{}),"COPY_AND_PASTE"]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:cg.map((n,r)=>a.jsxs("div",{className:"is-panel p-6 relative overflow-hidden",children:[a.jsxs("div",{className:"flex justify-between items-start mb-5",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-2",children:[String(r+1).padStart(2,"0")," // ",n.title.toUpperCase()]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:n.tags.map(i=>a.jsxs("span",{className:"font-mono text-[10px] border border-is-border px-2 py-0.5 text-is-secondary uppercase tracking-widest",children:["#",i]},i))})]}),a.jsx(bi,{text:n.text})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"lg:col-span-2",children:[a.jsx("div",{className:"is-label mb-2",children:"PROMPT_BODY"}),a.jsx("div",{className:"bg-is-bg border border-is-border p-4 font-mono text-xs text-is-text leading-relaxed h-48 overflow-y-auto whitespace-pre-wrap",children:n.text})]}),a.jsxs("div",{className:"flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:n.purpose})]}),a.jsx("div",{className:"mt-4 pt-4 border-t border-is-border",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-1.5 h-1.5 bg-is-telemetry signal-pulse"}),a.jsx("span",{className:"font-mono text-[10px] text-is-telemetry uppercase tracking-widest",children:"TELEMETRY: READY"})]})})]})]})]},n.id))}),a.jsx("div",{className:"mt-8 flex justify-end",children:a.jsx(ne,{to:"/prompts",className:"font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors",children:"VIEW ALL PROMPTS →"})})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("div",{className:"is-label mb-2",children:"PROVENANCE"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"WHY THIS EXISTS"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mb-6",children:"Built from years of hiring, coaching, promoting, and leading software engineers and technical leaders."}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed",children:"Invisible Signals™ distills recurring patterns observed across resumes, interviews, promotion reviews, and leadership assessments."})]}),a.jsx("div",{className:"flex flex-wrap gap-2 content-start",children:["ENGINEERING_LEADERSHIP","HIRING_&_PROMOTION","CAREER_GROWTH","TECHNICAL_COMMUNICATION"].map(n=>a.jsx("span",{className:"font-mono text-xs border border-is-border px-3 py-1.5 text-is-secondary uppercase tracking-widest",children:n},n))})]})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-is-border",children:pg.map(({to:n,tag:r,icon:i,title:s,desc:o,pill:l,pillColor:c})=>a.jsxs(ne,{to:n,className:"group bg-is-bg p-6 flex flex-col gap-4 hover:bg-is-surface transition-colors",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"font-mono text-xl text-is-secondary",children:i}),a.jsx(he,{color:c,children:l})]}),a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:r}),a.jsx("div",{className:"font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors",children:s})]}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed flex-1",children:o}),a.jsx("div",{className:"font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity",children:"EXPLORE →"})]},n))})})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"is-label",children:"BUILT_ON // CODE_PRINCIPLES"}),a.jsx("div",{className:"is-label",children:"BUILT_BY: ANNYCE_DAVIS"})]}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text",children:["NOT HACKING.",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-alert",children:"RESOLUTION."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mt-6 max-w-2xl",children:"The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border",children:mg.map(({num:n,title:r,body:i})=>a.jsxs("div",{className:"bg-is-bg p-8",children:[a.jsx("div",{className:"font-mono text-xs text-is-primary mb-4",children:n}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide",children:r}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:i})]},n))})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-6",children:"DIAGNOSTIC: CLARITY_GAP"}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text mb-8",children:["TECHNICAL SKILL",a.jsx("br",{}),"IS NOT THE"," ",a.jsx("em",{className:"not-italic text-is-alert",children:"ISSUE."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mb-8 max-w-lg",children:"Amidst technical noise, the clarity of your signal—how well you communicate your capabilities—determines your career trajectory."}),a.jsxs("div",{className:"is-panel border-l-2 border-l-is-alert p-4",children:[a.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-2",children:"⚠ CRITICAL_FAILURE_RETURN"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:"Most engineers fail to communicate ownership, organizational judgment, and business impact to humans and in hires."})]})]}),a.jsxs("div",{className:"flex flex-col items-center gap-8",children:[a.jsxs("div",{className:"is-panel p-6 w-full flex flex-col items-center",children:[a.jsx("div",{className:"is-label mb-4",children:"SEARCHING_FOR_SIGNAL..."}),a.jsx(dg,{})]}),a.jsxs("div",{className:"is-panel p-4 w-full",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),a.jsx("div",{className:"space-y-2",children:[{label:"TECHNICAL NOISE",pct:88,color:"bg-is-dim"},{label:"OWNERSHIP SIGNAL",pct:34,color:"bg-is-primary"},{label:"IMPACT CLARITY",pct:21,color:"bg-is-alert"}].map(({label:n,pct:r,color:i})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:n}),a.jsxs("span",{className:"font-mono text-xs text-is-text",children:[r,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:a.jsx("div",{className:`h-full ${i}`,style:{width:`${r}%`}})})]},n))})]})]})]})}),a.jsx("section",{className:"px-6 py-16 md:py-28 bg-is-bg",children:a.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[a.jsx("div",{className:"flex justify-center mb-4",children:a.jsx("div",{className:"w-8 h-px bg-is-primary"})}),a.jsxs("h2",{className:"font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4",children:["INITIALIZE",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-primary",children:"YOUR SIGNAL."})]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mt-10",children:[a.jsx(ne,{to:"/analyzer",className:"is-btn-primary",children:"ANALYZE_YOUR_SIGNALS"}),a.jsx(ne,{to:"/prompts",className:"is-btn-ghost",children:"BROWSE_PROMPTS"})]})]})})]})}function jo({navLabel:e,pillColor:t,pillText:n,title:r,description:i,children:s}){return a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:e}),a.jsx(he,{color:t,children:n})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:r}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl",children:i}),s&&a.jsx("div",{className:"mt-6",children:s})]})}const ba=[{id:"RESUME_REVIEW",label:"01 // RÉSUMÉ REVIEW",question:"Does this candidate clear the bar on paper?",signals:["Trajectory — is scope and responsibility clearly growing?","Impact language — outcomes vs. activities vs. tasks","Signal Stack coverage relative to the role requirements","Tailoring gap — does the candidate match this specific role?"],pitfalls:["Activity-based bullets with no outcome or impact","Generic résumés sent without tailoring","Missing evidence for ownership or business judgment"],examples:[{id:"EX_01",label:"01 // ACTIVITY VS IMPACT",weak:"Worked on Android app modernization using Kotlin.",strong:"Migrated critical Android checkout flows from Java to Kotlin, reducing crash-related support tickets by 32% and improving release stability during peak retail periods."},{id:"EX_02",label:"02 // GENERIC LEADERSHIP",weak:"Led cross-functional collaboration across teams.",strong:"Coordinated API contract alignment between mobile, backend, and platform teams to unblock a multi-quarter authentication migration affecting 4 product surfaces."},{id:"EX_03",label:"03 // SENIOR-LEVEL SIGNAL",weak:"Responsible for architecture decisions.",strong:"Defined mobile caching strategy for high-traffic commerce APIs, reducing redundant network requests and improving app startup reliability under unstable network conditions."},{id:"EX_04",label:"04 // ENGINEERING LEADERSHIP",weak:"Managed a team of engineers.",strong:"Led a team of 8 engineers across mobile and platform initiatives, improving sprint predictability and reducing production escalation volume through tighter dependency planning and release coordination."},{id:"EX_05",label:"05 // AI-ASSISTED RISKS",weak:"Visionary engineering leader driving innovative scalable solutions across cross-functional ecosystems.",strong:"Standardized CI workflows across 12 repositories, reducing release inconsistencies and shortening onboarding time for new engineers."}]},{id:"RECRUITER_SCREEN",label:"02 // RECRUITER SCREEN",question:"Is this a plausible fit for the role and company?",signals:["Compensation alignment and timeline","Location / work-model fit","Basic role comprehension — do they understand the scope?","Genuine interest signal vs. spray-and-pray behavior"],pitfalls:["Discussing compensation before understanding the role","Treating recruiters as gatekeepers rather than advocates","Under-preparing on why this company specifically"]},{id:"HM_SCREEN",label:"03 // HIRING MANAGER SCREEN",question:"Is this someone I'd want on my team?",signals:["Ownership — do they drive outcomes or wait for direction?","Judgment — how they have navigated ambiguity and tradeoffs","Communication — can they make complex work understandable?","Collaboration signal — do they make systems around them better?"],pitfalls:["Describing what the team did, not what you specifically drove","No concrete examples of business or product judgment","Failing to ask high-signal questions about the role"]},{id:"TECHNICAL_SCREEN",label:"04 // TECHNICAL SCREEN",question:"Can they do the technical work?",signals:["Problem decomposition — how they break down complexity","Trade-off reasoning — alternatives considered and why","Communication during the problem, not just the solution","System-level thinking beyond the immediate question"],pitfalls:["Silent coding — no narration of thought process","Over-optimizing without articulating the trade-off","Treating it as a quiz rather than a collaborative problem"]},{id:"ONSITE",label:"05 // ONSITE",question:"Is this the right hire?",signals:["Consistency across interviewers — same caliber across rounds","Leadership maturity — how they make others better","Strategic thinking — reasoning beyond the immediate task","Cultural signal — how they operate, not just what they deliver"],pitfalls:["Energy drop after the technical round","Treating behavioral rounds as less important than technical","No prepared questions that signal strategic curiosity"]}],gg=[{id:"PROOF_OF_OWNERSHIP",label:"PROOF OF OWNERSHIP",question:"What are you truly driving end-to-end?"},{id:"PROBLEM_SOLVING_DEPTH",label:"PROBLEM-SOLVING DEPTH",question:"Where did you personally reduce ambiguity or unblock something hard?"},{id:"BOUNDARY_CLARITY",label:"BOUNDARY CLARITY",question:"What do you own — and what should you stop absorbing?"},{id:"VISIBLE_SIGNAL",label:"VISIBLE SIGNAL",question:"What artifact or outcome shows your impact clearly and honestly?"}],xg=[{id:"COORDINATION_VS_OWNERSHIP",label:"01 // COORDINATION vs OWNERSHIP",question:"What work are you truly owning vs. just coordinating?",signals:["Named scope with clear delivery accountability","End-to-end ownership of an outcome — not just a task","Proof-point project with measurable, attributable result","Technical leadership visible beyond orchestration"],pitfalls:['All work described as "helping," "supporting," or "coordinating"',"No single outcome the person can fully claim","Growth stalls because no delivery signal is accumulating"],dropIn:["What work are you truly owning end-to-end — not just coordinating?","What proof-point project would make your impact obvious in 60–90 days?","What outcome from the last quarter can you fully claim?"]},{id:"DIAGNOSE_NOT_MONITOR",label:"02 // DIAGNOSE, NOT MONITOR",question:"Where are you reviewing progress instead of helping unblock it?",signals:["Drills into blockers — does not just collect status","Applies technical judgment to ambiguous situations","Offers concrete paths forward, not just escalation pathways","Problem-solving depth visible beyond stakeholder updates"],pitfalls:["Asking for status without understanding root causes","Offering options instead of helping solve the problem","Delegation without technical depth erodes leadership signal"],dropIn:["Where are you reviewing progress instead of helping unblock it?","What issue this week required deeper technical judgment from you?","Where did you go one level deeper than status last week?"]},{id:"DECISION_RIGHTS_CLARITY",label:"03 // DECISION RIGHTS CLARITY",question:"What decision do you think you own that others may think they own too?",signals:["Can name the DRI for every active cross-team decision","Leaves every discussion with decision, owner, escalation path, and handoff stated","Proactively surfaces ownership ambiguity before it becomes a blocker","Clarity around approval boundaries reduces churn and wasted cycles"],pitfalls:["Ownership ambiguity costing time and eroding trust","Cross-team decisions stalling without a named driver","Confusing contribution with accountability"],dropIn:["What decision do you think you own that others may think they own too?","Where is ambiguity costing you time or trust right now?","After your last cross-team meeting, could you state the decision, the DRI, the escalation path, and the handoff boundary?"]},{id:"BOUNDARY_SETTING",label:"04 // BOUNDARY SETTING",question:"What work are you carrying that should belong to someone else?",signals:["Support is bounded and communicated proactively","Responsibility transitions back to the right owner","Contribution is real, visible, and sustainable","Protects their own cycles and signal integrity"],pitfalls:["Support drifting into shaping other teams' artifacts","Absorbing other teams' responsibilities without visibility","Helpfulness that hides ownership problems"],dropIn:["What work are you carrying that should belong to someone else?","Where are you being helpful in a way that hides an ownership problem?","What support commitment do you need to define a boundary around?"]},{id:"BLOCKERS_TO_SIGNAL",label:"05 // BLOCKERS TO LEADERSHIP SIGNAL",question:"What blocker did you convert into a concrete recommendation this week?",signals:["Risk framing and proposed paths forward — not just problem reporting","Dependency maps and decision framing created proactively for others","Ambiguity reduced through artifacts, not just flagged in meetings","Blockers converted into structured leadership communication"],pitfalls:["Reporting friction without proposing a path forward","Blockers listed without ownership of resolution","Ambiguity escalated without reducing it first"],dropIn:["What blocker did you convert into a concrete recommendation this week?","What ambiguity did you reduce for others — not just surface?","What artifact did you create that made the work easier to understand?"]},{id:"HONEST_VISIBILITY",label:"06 // HONEST VISIBILITY",question:"What is the most credible evidence of your growth right now?",signals:["Contribution translated into clear, honest signal","Named ownership, measurable results, reduced risk","Growth visible to someone who only has the last 60 days of evidence","Impact communicated without relying on explanation or context"],pitfalls:["Visibility built on self-promotion rather than earned contribution","Contributions that require extensive explanation to sound significant","Growth narrative inflated beyond what evidence supports"],dropIn:["What is the most credible evidence of your growth right now?","If someone senior looked only at your last 60 days, what signal would they see?","What contribution have you made that improved clarity, speed, or quality for the team?"]}];function vg(){const[e,t]=w.useState(null),[n,r]=w.useState(null),[i,s]=w.useState("HIRING_FUNNEL");return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsx(jo,{navLabel:"_01_FRAMEWORKS",pillColor:"blue",pillText:"SIGNAL_ACTIVE",title:i==="HIRING_FUNNEL"?"HIRING FUNNEL":"COACHING",description:i==="HIRING_FUNNEL"?"The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly.":"Career coaching through signal clarity. Helping engineers and technical leaders own something real, solve something hard, clarify boundaries, and leave behind visible evidence of impact.",children:a.jsx("div",{className:"flex gap-1",children:[{id:"HIRING_FUNNEL",label:"HIRING_FUNNEL"},{id:"COACHING",label:"COACHING"}].map(o=>a.jsx("button",{onClick:()=>s(o.id),className:`font-mono text-xs px-3 py-1.5 border uppercase tracking-widest transition-all ${i===o.id?"border-is-primary text-is-primary bg-is-primary/10":"border-is-border text-is-secondary hover:border-is-primary/40 hover:text-is-text"}`,children:o.label},o.id))})}),i==="HIRING_FUNNEL"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"STAGE_OVERVIEW // SIGNAL_MAP"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"STAGE"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"PRIMARY_SIGNAL_QUESTION"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest hidden md:table-cell",children:"STATUS"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:ba.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question}),a.jsx("td",{className:"px-5 py-3 hidden md:table-cell",children:a.jsx(he,{color:"blue",children:"ACTIVE"})})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:ba.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-secondary flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]})]}),o.examples&&a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>t(e===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"EXAMPLES // SIGNAL_CALIBRATION"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:e===o.id?"[−]":"[+]"})]}),e===o.id&&a.jsx("div",{className:"px-6 py-5 space-y-6",children:o.examples.map(l=>a.jsxs("div",{children:[a.jsx("div",{className:"is-label text-is-secondary mb-3",children:l.label}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-alert mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"⚠"})," WEAK"]}),a.jsx("p",{className:"font-mono text-xs text-is-text leading-relaxed",children:l.weak})]}),a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-primary mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"→"})," STRONG"]}),a.jsx("p",{className:"font-mono text-xs text-is-text leading-relaxed",children:l.strong})]})]})]},l.id))})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-mono text-xs text-is-secondary",children:["SOURCE: Derived from Annyce Davis, ",a.jsx("em",{children:"Landing Your Next Gig in Tech"})," (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK"]})})]}),i==="COACHING"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"COACHING_LENS // 4_PART_FRAMEWORK"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"LENS"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"CORE_QUESTION"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:gg.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary whitespace-nowrap",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:xg.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-secondary flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]})]}),a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>r(n===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"DROP-IN_QUESTIONS // 1:1_USE"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:n===o.id?"[−]":"[+]"})]}),n===o.id&&a.jsx("div",{className:"px-6 py-5",children:a.jsx("ul",{className:"space-y-3",children:o.dropIn.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"?"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsx("p",{className:"font-mono text-xs text-is-secondary",children:"SOURCE: Annyce Davis · SIGNAL_REF: COACHING_FRAMEWORK"})})]})]})}const Fd=`# prompts/

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
`,Gd=`---
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
`,Hd=`---
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
`,Bd=`---
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
`,$d=`---
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
`;function ka({tag:e}){return a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-secondary",children:e.toUpperCase().replace(/-/g,"_")})}const yg=Object.assign({"../../../prompts/README.md":Fd,"../../../prompts/coaching/growth-signal-self-diagnostic.md":Gd,"../../../prompts/interview/behavioral-answer-diagnostic.md":Hd,"../../../prompts/interview/skeptical-hiring-manager.md":Bd,"../../../prompts/quick-signal/README.md":wo,"../../../prompts/quick-signal/github-profile-check.md":bo,"../../../prompts/quick-signal/interview-answer-check.md":ko,"../../../prompts/quick-signal/linkedin-profile-check.md":No,"../../../prompts/quick-signal/resume-bullet-check.md":So,"../../../prompts/resume/resume-signal-analysis.md":$d}),Xl=["resume","interview"],Zl=["resume-bullet-check","interview-answer-check","github-profile-check","linkedin-profile-check"],Vd=Object.entries(yg).filter(([e])=>!e.endsWith("README.md")).map(([e,t])=>Eo(e,t)).sort((e,t)=>{const n=Xl.indexOf(e.category),r=Xl.indexOf(t.category);return n!==r?(n===-1?99:n)-(r===-1?99:r):e.id.localeCompare(t.id)}),ws=Vd.filter(e=>e.category==="quick-signal").sort((e,t)=>Zl.indexOf(e.id)-Zl.indexOf(t.id)),Jl=Vd.filter(e=>e.category!=="quick-signal");function wg(){const[e]=yo();return w.useEffect(()=>{var i;const t=e.get("category");if(!t)return;let n;if(t==="quick-signal")n=(i=ws[0])==null?void 0:i.id;else{const s=Jl.find(o=>o.category===t);n=s==null?void 0:s.id}if(!n)return;const r=document.getElementById(`prompt-card-${n}`);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},[e]),a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsx(jo,{navLabel:"_02_PROMPTS",pillColor:"coral",pillText:"SIGNAL_ACTIVE",title:"QUICK SIGNAL PROMPTS",description:"Want fast feedback? Copy one focused prompt and run it in your preferred AI tool. System-level instructions to analyze career metadata and generate telemetry goals."}),ws.length>0&&a.jsx("div",{className:"mb-12",children:a.jsx("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:ws.map(({id:t,title:n,purpose:r,tags:i,text:s},o)=>a.jsxs("section",{id:`prompt-card-${t}`,className:"border border-is-border bg-is-surface-container-lowest p-6 relative group overflow-hidden glow-border transition-all scroll-mt-8",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-sm font-mono uppercase tracking-widest text-is-text mb-3",children:[String(o+1).padStart(2,"0")," // ",n.toUpperCase()]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(l=>a.jsx(ka,{tag:l},l))})]}),a.jsx("div",{className:"shrink-0",children:a.jsx(bi,{text:s})})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[minmax(0,4fr)_200px] gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PROMPT_BODY"}),a.jsx("div",{className:"is-panel p-6 font-mono text-xs text-is-text leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-72 overflow-y-auto",children:s})]}),a.jsxs("div",{className:"flex flex-col justify-between gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:r})]}),a.jsxs("div",{className:"border-t border-is-border pt-5 text-[10px] uppercase tracking-widest text-is-secondary flex items-center gap-3",children:[a.jsx("span",{className:"font-mono",children:"TELEMETRY:"}),a.jsx("span",{className:"text-is-primary",children:i.includes("quick-check")?"READY":"ACTIVE"})]})]})]})]},t))})}),a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsx("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:a.jsx(he,{color:"blue",children:"SIGNAL_ACTIVE"})}),a.jsx("h2",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl",children:"System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content."})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:Jl.map(({id:t,title:n,purpose:r,tags:i,text:s},o)=>a.jsxs("div",{id:`prompt-card-${t}`,className:"bg-is-bg border border-is-border glow-border transition-all scroll-mt-8",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(o+1).padStart(2,"0")," // ",n.toUpperCase()]}),a.jsx(he,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx(bi,{text:s})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_280px] gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROMPT_BODY"}),a.jsx("div",{className:"is-panel p-6 font-mono text-xs text-is-text leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto",children:s})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:r})]}),i.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(l=>a.jsx(ka,{tag:l},l))})]})]})]})]},t))}),a.jsxs("div",{className:"mt-10 border border-is-alert/30 bg-is-surface-container-lowest p-6 max-w-4xl",children:[a.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[a.jsx(Md,{size:14,className:"text-is-alert shrink-0 mt-0.5"}),a.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-is-alert",children:"SYSTEM_NOTE // DATA_INTEGRITY"})]}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:'These prompts are not designed to help candidates "game" interviews. They are engineered to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity and surface latent technical signals, not fabricate competence. Use with high-fidelity intent.'})]})]})}const qd=`# templates/

Reusable templates for self-assessment and career signal work.

## Contents

| File | Description |
|---|---|
| [signal-scorecard.md](signal-scorecard.md) | A self-assessment tool for evaluating the strength, clarity, and credibility of the signals you send during career moments |

## Usage

Templates are designed to be copied and filled in for your own situation. They work alongside the prompts and frameworks in this repository — not as standalone tools.
`,Yd=`---
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

Every career interaction sends signals. Some are obvious. Some are invisible.

Strong candidates do not only have strong experience. They make the right evidence easy to see, understand, and trust.

Weak signal quality does not always mean weak capability. Sometimes it means the evidence is buried, vague, generic, inflated, or disconnected from the role you are pursuing.

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

Does this person take responsibility for outcomes, decisions, and follow-through?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 4. Communication

Can this person make complex work understandable, align people, and communicate with the right level of clarity?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 5. Product & Business Judgment

Does this person understand why the work matters beyond the code?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 6. Collaboration & Influence

Can this person get meaningful work done with and through others?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 7. Strategic Thinking

Can this person see patterns, anticipate consequences, and make choices that improve future outcomes?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 8. Leadership Maturity

Does this person demonstrate judgment, accountability, and maturity appropriate for the target level?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
\`\`\`

---

# 9. Trust & Defensibility

Can this person defend the claims they are making?

## Score

\`\`\`text
Score:
Confidence:
\`\`\`

## Signal check

\`\`\`text
Key evidence:
What should be clarified or reframed:
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

Compare the current signal against the target level.

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

Use these prompts when the signal may exist but is not yet visible.

- What was hard or non-obvious about the work?
- What constraints, tradeoffs, or decisions mattered most?
- What did you deliver, and what was blocked before you got involved?
- What did you own versus what the team delivered?
- Who needed to understand the work, and who did you align?
- What business, customer, risk, or operational impact was at stake?
- What future problem did you prevent or make easier?
- What judgment or accountability did you show under pressure?

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
`,bg=Object.assign({"../../../templates/README.md":qd,"../../../templates/signal-scorecard.md":Yd});function kg(e){var s;const t=e.match(/^---\n([\s\S]*?)\n---/);if(!t)return{};const n=t[1],r={};n.replace(/^(\w+):\s*(.+)$/gm,(o,l,c)=>{r[l]=c.trim()});const i=n.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Ng(e,t){const n=kg(t),r=t.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",o=[...t.matchAll(/^# (\d+\. .+)$/gm)].map(c=>c[1]),l=e.split("/").pop().replace(".md","");return{id:l,title:n.title||l,version:n.version||"",tags:n.tags||[],purpose:i,sections:o,text:t}}const Sg=Object.entries(bg).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,t])=>Ng(e,t));function Eg(){return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsx(jo,{navLabel:"_05_TEMPLATES",pillColor:"gold",pillText:"TEMPLATE_ACTIVE",title:"SIGNAL TEMPLATES",description:"Structured documents for auditing, scoring, and improving your career signals. Copy a template into your own editor and work through it at your own pace."}),a.jsx("div",{className:"space-y-px bg-is-border",children:Sg.map(({id:e,title:t,version:n,purpose:r,sections:i,tags:s,text:o},l)=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(l+1).padStart(2,"0")," // ",t.toUpperCase()]}),n&&a.jsxs("span",{className:"font-mono text-xs text-is-secondary border border-is-border px-2 py-0.5",children:["V",n]}),a.jsx(he,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),a.jsx(bi,{text:o})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[a.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"SECTIONS"}),a.jsx("div",{className:"space-y-px",children:i.map((c,u)=>a.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 border border-is-border bg-is-surface",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary w-5 shrink-0",children:String(u+1).padStart(2,"0")}),a.jsx("span",{className:"font-mono text-xs text-is-text uppercase tracking-wide",children:c.replace(/^\d+\. /,"").replace(/\s*&\s*/g," AND ").replace(/ /g,"_")})]},u))})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[r&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:r})]}),s.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>a.jsx(ka,{tag:c},c))})]})]})]})]},e))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-body text-sm text-is-secondary leading-relaxed max-w-2xl",children:[a.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," Templates are fill-in-the-blank markdown documents. Copy the full template and open it in your own text editor or note-taking tool. Do not invent evidence — use the recovery questions inside each section to surface real experience."]})})]})}const Co={1:Vh,2:Kh,3:rg,4:Pd,5:Od,6:Dd,7:Bh,8:zh},{frontmatter:jg,scoringRows:Cg,layers:ec}=zd(Wd);function Ig(){return a.jsxs("div",{className:"flex min-h-[calc(100vh-3rem)]",style:{backgroundImage:"linear-gradient(rgba(38,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"},children:[a.jsxs("aside",{className:"hidden md:flex flex-col w-64 shrink-0 border-r border-is-border bg-is-surface sticky top-12 self-start h-[calc(100vh-3rem)] overflow-y-auto",children:[a.jsxs("div",{className:"px-6 py-5 border-b border-is-border",children:[a.jsx("div",{className:"font-mono text-xs font-semibold uppercase tracking-widest text-is-text",children:"SIGNAL STACK"}),a.jsx("div",{className:"font-mono text-[10px] text-is-secondary mt-0.5 tracking-widest",children:"L1–L8 ANALYSIS"})]}),a.jsxs("nav",{className:"flex-1 py-2",children:[a.jsxs(He,{to:"/signal-stack",end:!0,className:({isActive:e})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${e?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-text hover:bg-is-surface-high hover:text-is-primary"}`,children:[a.jsx(Xh,{size:13,className:"shrink-0"}),a.jsx("span",{children:"Overview"})]}),ec.map(({num:e,slug:t,name:n})=>{const r=Co[e],i=`L${e} // ${n.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"")}`;return a.jsxs(He,{to:`/signal-stack/${t}`,className:({isActive:s})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${s?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-text hover:bg-is-surface-high hover:text-is-primary"}`,children:[r&&a.jsx(r,{size:13,className:"shrink-0"}),a.jsx("span",{className:"truncate",children:i})]},t)})]}),a.jsx("div",{className:"px-6 py-5 border-t border-is-border",children:a.jsx("button",{className:"w-full border border-is-primary text-is-primary font-mono text-[10px] uppercase tracking-widest py-2.5 hover:bg-is-primary/10 transition-colors",children:"REBOOT_SESSION"})})]}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx(vh,{context:{frontmatter:jg,scoringRows:Cg,layers:ec}})})]})}const Tg={0:"text-is-dim",1:"text-is-alert",2:"text-is-warning",3:"text-is-primary",4:"text-is-telemetry"},Rg={0:"MISSING",1:"LOW",2:"WARN",3:"NOMINAL",4:"OPTIMAL"};function Ag(){const{scoringRows:e,layers:t}=Cd(),n=[...t].reverse();return a.jsxs("div",{className:"p-8 md:p-12",children:[a.jsxs("header",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-primary",children:"SYSTEM STATUS: OPERATIONAL"})]}),a.jsx("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text mb-4",children:"Signal Stack Overview"}),a.jsx("p",{className:"font-body text-base text-is-secondary max-w-2xl leading-relaxed",children:"A diagnostic framework for mapping evidence across eight critical layers of career signal intelligence. A weak layer does not disqualify — an invisible layer does."})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-12 gap-8",children:[a.jsx("div",{className:"xl:col-span-8 flex flex-col gap-2",children:n.map(({num:r,slug:i,name:s,tagline:o})=>{const l=Co[r];return a.jsxs(ne,{to:`/signal-stack/${i}`,className:"group border border-is-border p-5 bg-is-surface flex items-center justify-between glow-border transition-all",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("span",{className:"font-mono text-xs text-is-secondary w-6 shrink-0",children:["L",r]}),a.jsxs("div",{children:[a.jsx("div",{className:"font-mono text-sm font-medium uppercase tracking-wider text-is-text group-hover:text-is-primary transition-colors",children:s}),a.jsx("div",{className:"font-mono text-[10px] text-is-secondary mt-0.5",children:o})]})]}),l&&a.jsx(l,{size:14,className:"text-is-secondary group-hover:text-is-primary group-hover:translate-x-0.5 transition-all shrink-0"})]},i)})}),a.jsxs("div",{className:"xl:col-span-4 space-y-6",children:[a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"SCORING_SCALE"})}),a.jsx("div",{className:"p-4",children:a.jsxs("table",{className:"w-full font-mono text-xs",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-is-secondary border-b border-is-border",children:[a.jsx("th",{className:"text-left py-2 font-normal",children:"SCORE"}),a.jsx("th",{className:"text-left py-2 font-normal",children:"RATING"}),a.jsx("th",{className:"text-right py-2 font-normal",children:"STATUS"})]})}),a.jsx("tbody",{children:e.map(({score:r,rating:i})=>a.jsxs("tr",{className:"border-b border-is-border/40 last:border-0",children:[a.jsx("td",{className:"py-2.5 text-is-secondary",children:r}),a.jsx("td",{className:`py-2.5 ${Tg[r]??"text-is-dim"}`,children:i}),a.jsx("td",{className:"py-2.5 text-right text-is-secondary",children:Rg[r]??"—"})]},r))})]})})]}),a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"CONFIDENCE_TIER"})}),a.jsx("div",{className:"p-4 space-y-4",children:[{label:"HIGH",pct:100,color:"bg-is-telemetry",desc:"Explicit · easy to validate"},{label:"MEDIUM",pct:65,color:"bg-is-warning",desc:"Present · needs clarification"},{label:"LOW",pct:30,color:"bg-is-alert",desc:"Depends on interpretation"}].map(({label:r,pct:i,color:s,desc:o})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:r}),a.jsx("span",{className:"font-mono text-[10px] text-is-secondary",children:o})]}),a.jsx("div",{className:"h-px w-full bg-is-border",children:a.jsx("div",{className:`h-full ${s}`,style:{width:`${i}%`}})})]},r))})]})]})]})]})}function Lg(){const{layer:e}=rh(),{frontmatter:t,layers:n}=Cd(),r=n.findIndex(x=>x.slug===e),i=n[r];if(!i)return a.jsxs("div",{className:"p-12 space-y-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-secondary",children:["LAYER_NOT_FOUND // ",e]}),a.jsxs(ne,{to:"/signal-stack",className:"flex items-center gap-1 font-mono text-xs text-is-primary hover:text-is-primary/80 transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"Back to overview"]})]});const{num:s,name:o,tagline:l,description:c,strongSignals:u,weakSignals:m,exampleWeak:f,exampleStrong:g,levels:v}=i,y=Co[s],b=r>0?n[r-1]:null,N=r<n.length-1?n[r+1]:null,p=(t.category??"docs").toUpperCase(),d=`SIGNAL_STACK · v${t.version??"1.0"} · STATUS: ${(t.status??"draft").toUpperCase()}`,h=o.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"");return a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"scanline"}),a.jsxs("div",{className:"p-8 md:p-12 max-w-5xl space-y-14 relative z-10",children:[a.jsxs("section",{className:"border-l-2 border-is-primary pl-8 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx("span",{className:"bg-is-primary/10 text-is-primary border border-is-primary/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",children:p}),a.jsx("span",{className:"font-mono text-[10px] text-is-secondary tracking-widest uppercase",children:d})]}),a.jsxs("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase tracking-tight flex items-center gap-4",children:["L",s," // ",h,"_",y&&a.jsx(y,{size:20,className:"text-is-primary shrink-0"})]}),(c||l)&&a.jsx("p",{className:"font-body text-base text-is-text max-w-2xl leading-relaxed",children:c||l})]}),(m.length>0||u.length>0)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"SIGNAL_DIAGNOSTIC // WEAK_VS_STRONG"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border border border-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-alert opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ig,{size:14,className:"text-is-alert shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-alert",children:"WEAK_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:m.map((x,S)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-secondary mt-0.5 shrink-0 group-hover/item:text-is-alert transition-colors",children:String(S+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:x})]},S))})]}),a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-telemetry opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(_d,{size:14,className:"text-is-telemetry shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-telemetry",children:"STRONG_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:u.map((x,S)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-secondary mt-0.5 shrink-0 group-hover/item:text-is-telemetry transition-colors",children:String(S+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:x})]},S))})]})]})]}),(f||g)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"EVIDENCE_TAXONOMY // SEMANTIC_UPGRADING"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f&&a.jsxs("div",{className:"border border-is-border border-l-2 border-l-is-alert p-6 bg-is-surface space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-secondary uppercase tracking-widest",children:"PASSIVE_EXECUTION"}),a.jsx("div",{className:"font-mono text-[10px] text-is-alert uppercase tracking-wider",children:"LOW_RESOLUTION_SIGNAL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-text italic leading-relaxed border-t border-is-border pt-3",children:["“",f,"”"]})]}),g&&a.jsxs("div",{className:"border border-is-primary/20 border-l-2 border-l-is-primary p-6 bg-is-primary/5 space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-secondary uppercase tracking-widest",children:"ACTIVE_MASTERY"}),a.jsx("div",{className:"font-mono text-[10px] text-is-primary uppercase tracking-wider",children:"HIGH_FIDELITY_INTEL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-text italic leading-relaxed border-t border-is-primary/20 pt-3",children:["“",g,"”"]})]})]})]}),v.length>0&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"LEVEL_DIFFERENTIATION_MATRIX"}),a.jsx("div",{className:"border border-is-border overflow-x-auto",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-is-surface border-b border-is-border",children:[a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-secondary font-normal uppercase tracking-widest w-32",children:"LEVEL"}),a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-secondary font-normal uppercase tracking-widest",children:"WHAT_STRONG_LOOKS_LIKE"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:v.map(({level:x,description:S},j)=>a.jsxs("tr",{className:"hover:bg-is-surface-low transition-colors group",children:[a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-is-text group-hover:text-is-primary transition-colors font-medium whitespace-nowrap align-top",children:x}),a.jsx("td",{className:"px-6 py-4 font-body text-sm text-is-text leading-relaxed",children:S})]},j))})]})})]}),a.jsxs("div",{className:"flex items-center justify-between border-t border-is-border pt-8",children:[b?a.jsxs(ne,{to:`/signal-stack/${b.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"L",b.num," · ",b.name]}):a.jsxs(ne,{to:"/signal-stack",className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"Overview"]}),N&&a.jsxs(ne,{to:`/signal-stack/${N.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:["L",N.num," · ",N.name,a.jsx(Gh,{size:12})]})]})]})]})}const _g=Object.assign({"../../../prompts/README.md":Fd,"../../../prompts/coaching/growth-signal-self-diagnostic.md":Gd,"../../../prompts/interview/behavioral-answer-diagnostic.md":Hd,"../../../prompts/interview/skeptical-hiring-manager.md":Bd,"../../../prompts/quick-signal/README.md":wo,"../../../prompts/quick-signal/github-profile-check.md":bo,"../../../prompts/quick-signal/interview-answer-check.md":ko,"../../../prompts/quick-signal/linkedin-profile-check.md":No,"../../../prompts/quick-signal/resume-bullet-check.md":So,"../../../prompts/resume/resume-signal-analysis.md":$d}),Pg=Object.assign({"../../../templates/README.md":qd,"../../../templates/signal-scorecard.md":Yd});function Og(e,t){const n=Ud(t),r=t.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",s=e.split("/").pop().replace(".md","");return{id:s,type:"template",title:n.title||s,meta:n.version||"",excerpt:i,tags:n.tags||[],route:"/templates"}}const Mg=Object.entries(_g).filter(([e])=>!e.endsWith("README.md")).map(([e,t])=>{const n=Eo(e,t);return{id:n.id,type:"prompt",title:n.title,meta:n.category,excerpt:n.purpose,tags:n.tags,route:"/prompts"}}),Dg=Object.entries(Pg).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,t])=>Og(e,t)),zg=ba.map(e=>({id:e.id,type:"framework",title:e.label,meta:e.question,excerpt:[...e.signals||[],...e.pitfalls||[]].join(" · "),tags:[e.id],route:"/frameworks"})),Ug=[...Mg,...Dg,...zg],tc={prompt:{label:"PROMPT",color:"text-is-primary",border:"border-is-primary/30"},template:{label:"TEMPLATE",color:"text-is-secondary",border:"border-is-secondary/30"},framework:{label:"FRAMEWORK",color:"text-is-warning",border:"border-is-warning/30"}},bs=["prompt","template","framework"];function Wg(e,t){return[e.title,e.meta,e.excerpt,e.tags.join(" ")].join(" ").toLowerCase().includes(t)}function Fg(){const[e]=yo(),t=(e.get("q")||"").trim().toLowerCase(),[n,r]=w.useState(new Set(bs));function i(c){r(u=>{const m=new Set(u);if(m.has(c)){if(m.size===1)return u;m.delete(c)}else m.add(c);return m})}const s=w.useMemo(()=>t?Ug.filter(c=>Wg(c,t)):[],[t]),o=w.useMemo(()=>s.filter(c=>n.has(c.type)),[s,n]),l=w.useMemo(()=>Object.fromEntries(bs.map(c=>[c,s.filter(u=>u.type===c).length])),[s]);return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[a.jsxs("div",{className:"border-b border-is-border pb-6 mb-8",children:[a.jsx("span",{className:"is-label",children:"SIGNAL_QUERY"}),t?a.jsxs("p",{className:"font-mono text-xs text-is-secondary mt-1 tracking-widest",children:["QUERY: ",a.jsx("span",{className:"text-is-text",children:t.toUpperCase()})]}):null]}),a.jsxs("div",{className:"flex gap-6 items-start",children:[a.jsx("aside",{className:"w-52 shrink-0",children:a.jsxs("div",{className:"is-panel p-4",children:[a.jsx("span",{className:"is-label block mb-4",children:"QUERY_FILTERS"}),a.jsx("div",{className:"flex flex-col gap-3",children:bs.map(c=>{const u=tc[c],m=l[c]??0,f=n.has(c);return a.jsxs("label",{className:"flex items-center justify-between gap-2 cursor-pointer group",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:()=>i(c),className:"appearance-none w-3 h-3 border border-is-border bg-is-surface checked:bg-is-primary checked:border-is-primary transition-colors cursor-pointer"}),a.jsx("span",{className:`font-mono text-xs tracking-widest uppercase transition-colors ${f?u.color:"text-is-secondary"}`,children:u.label})]}),a.jsx("span",{className:"font-mono text-xs text-is-secondary tabular-nums",children:m})]},c)})})]})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t?o.length===0?a.jsxs("span",{className:"font-mono text-xs text-is-alert tracking-widest",children:["NO_SIGNAL_FOUND // QUERY: ",t.toUpperCase()]}):a.jsxs("span",{className:"font-mono text-xs text-is-secondary tracking-widest",children:["Showing"," ",a.jsx("span",{className:"text-is-text",children:o.length})," ","signal",o.length!==1?"s":""," found // PROTOCOL:"," ",a.jsx("span",{className:"text-is-secondary",children:"SCAN_COMPLETE"})]}):a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"AWAITING_QUERY"}),o.length>0&&a.jsx("span",{className:"font-mono text-xs text-is-secondary tracking-widest",children:"SORT: RELEVANCE"})]}),!t&&a.jsxs("div",{className:"is-panel p-12 flex flex-col items-center justify-center gap-3",children:[a.jsx("span",{className:"font-mono text-2xl text-is-border",children:"···"}),a.jsx("span",{className:"is-label",children:"ENTER_QUERY_TO_SCAN"}),a.jsx("p",{className:"font-mono text-xs text-is-secondary text-center max-w-xs",children:"Search across prompts, templates, and frameworks. Use the input in the nav to begin."})]}),o.length>0&&a.jsx("div",{className:"flex flex-col gap-3",children:o.map(c=>{const u=tc[c.type],m=c.excerpt.length>140?c.excerpt.slice(0,140).trimEnd()+"…":c.excerpt;return a.jsxs("div",{className:`is-panel p-5 border-l-2 ${u.border}`,children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[a.jsxs("span",{className:`font-mono text-xs uppercase tracking-widest ${u.color}`,children:[u.label," //"]}),a.jsx(ne,{to:c.route,className:"font-mono text-xs uppercase tracking-widest text-is-secondary hover:text-is-primary transition-colors whitespace-nowrap shrink-0",children:"VIEW_SIGNAL →"})]}),a.jsx("h2",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-2 tracking-wide",children:c.title}),m&&a.jsx("p",{className:"font-mono text-xs text-is-secondary leading-relaxed mb-3",children:m}),c.tags.length>0&&a.jsx("div",{className:"flex flex-wrap gap-1.5",children:c.tags.map(f=>a.jsx("span",{className:"font-mono text-xs px-2 py-0.5 bg-is-surface-low border border-is-border text-is-secondary uppercase tracking-widest",children:f},f))})]},`${c.type}-${c.id}`)})}),t&&o.length===0&&s.length>0&&a.jsxs("div",{className:"is-panel p-8 text-center",children:[a.jsx("span",{className:"is-label block mb-2",children:"FILTER_MISMATCH"}),a.jsxs("p",{className:"font-mono text-xs text-is-secondary",children:[s.length," result",s.length!==1?"s":""," found but hidden by active filters."]})]})]})]})]})}const Gg=["led","built","architected","designed","drove","launched","created","delivered","owned","spearheaded","established","defined","shipped","authored","founded","initiated","pioneered","directed","executed","deployed","engineered","developed","implemented","introduced","scaled","transformed","migrated","refactored","optimized","automated","resolved","leading","building","designing","driving","launching","creating","delivering","scaling","transforming","migrating","optimizing"],Kd=["helped","assisted","participated","involved in","worked on","supported","contributed to","collaborated on","was part of","was involved","helped with","assisted with","took part in","played a role","was responsible","had the opportunity"],Hg=["revenue","cost","saving","savings","efficiency","retention","conversion","growth","reduced","reducing","increased","increasing","improved","improving","eliminated","accelerated","customer","adoption","churn","profit","loss","engagement","satisfaction","uptime","downtime","latency","performance","reliability","throughput","availability","roi","mrr","arr","time to market","deploy frequency","error rate"],Bg=["million","billion","thousand","users","customers","engineers","team","services","requests","transactions","countries","regions","markets","products","teams","organizations","globally","enterprise","petabyte","terabyte","dau","mau","rps","tps","qps"],$g=["mentored","coached","hired","grew","managed","aligned","influenced","stakeholder","roadmap","strategy","vision","cross-functional","org","culture","promoted","evangelized","standardized","orchestrated","partnered","negotiated","facilitated","presented","advocated","cultivated","empowered","enabled","mentoring","coaching"],Vg=[/\d+\.?\d*%/,/\$[\d,.]+[kKmMbB]?/,/\d+\.?\d*x\b/,/\d+[kKmMbB]\b/,/\d{1,3}(,\d{3})+/],qg=["architecture","microservice","microservices","distributed","scalable","infrastructure","pipeline","api","platform","framework","database","cache","caching","message queue","event-driven","load balancer","latency","throughput","availability","reliability","observability","algorithm","authentication","authorization","encryption","sharding","indexing","migration","schema","replica","rollback","deployment","kubernetes","docker","ci/cd","monitoring","cloud","serverless","kafka","redis","postgres","graphql","rest","grpc","oauth","terraform","ansible","aws","gcp","azure","lambda","ec2","s3","a/b test","feature flag","canary","integration test","unit test","end-to-end","code review","sprint","on-call"],Qd=["various","several","many","some","a lot","good","great","excellent","best practices","cutting edge","innovative","synergy","dynamic","passionate","results-driven","self-starter","team player","strong","proven","extensive","significant","substantial","numerous","multiple","diverse","robust","impactful","leveraged"],Yg={situation:["when","during","while","context","background","at the time","facing","the challenge","the situation","our team was","we were"],task:["needed to","responsible for","goal was","tasked with","my role","i was asked","objective","requirement","i needed","we needed"],action:["decided to","chose to","i led","i drove","i initiated","i built","i implemented","i designed","i created","i developed","i deployed","took the approach","solution was","i proposed"],result:["resulted in","led to","achieved","outcome","impact","as a result","ultimately","this reduced","this increased","this improved","delivered","we shipped","we launched"]},nc={resume:["ownership","quantification","businessImpact","technicalDepth","scale","clarity"],interview:["ownership","quantification","businessImpact","starCompleteness","clarity","weakLanguage"],linkedin:["ownership","businessImpact","scale","leadership","clarity","weakLanguage"],github:["ownership","technicalDepth","scale","quantification","clarity","businessImpact"],leadership:["ownership","leadership","businessImpact","scale","clarity","weakLanguage"]},rc={resume:{ownership:2,quantification:2,businessImpact:1.5,technicalDepth:1,scale:1.5,clarity:1},interview:{ownership:1.5,quantification:1.5,businessImpact:1,starCompleteness:2,clarity:1,weakLanguage:1},linkedin:{ownership:1,businessImpact:1.5,scale:1,leadership:1.5,clarity:1.5,weakLanguage:1},github:{ownership:1,technicalDepth:2,scale:1,quantification:1,clarity:1.5,businessImpact:1},leadership:{ownership:1.5,leadership:2,businessImpact:1.5,scale:1,clarity:1,weakLanguage:1}},wn={ownership:{label:"OWNERSHIP",tagline:e=>e>=70?"Direct accountability detected.":e>=40?"Some ownership language present.":"Ownership signals are weak."},quantification:{label:"QUANTIFICATION",tagline:e=>e>=70?"Measurable outcomes present.":e>=40?"Partial metrics detected.":"No quantified results found."},businessImpact:{label:"IMPACT",tagline:e=>e>=70?"Clear business effect.":e>=40?"Measurable results are sparse.":"Business impact undetected."},technicalDepth:{label:"TECHNICAL_DEPTH",tagline:e=>e>=70?"Implementation details are robust.":e>=40?"Some technical specificity.":"Lacks technical depth."},scale:{label:"SCALE",tagline:e=>e>=70?"Systems handled large scope.":e>=40?"Scope partially indicated.":"Scale not communicated."},clarity:{label:"CLARITY",tagline:e=>e>=70?"Communication is crisp.":e>=40?"Some vague language present.":"Signal diluted by vague language."},leadership:{label:"LEADERSHIP",tagline:e=>e>=70?"Evidence of mentoring detected.":e>=40?"Some leadership signals.":"Leadership signals absent."},weakLanguage:{label:"SIGNAL_NOISE",tagline:e=>e>=70?"Low noise — clean signal.":e>=40?"Some passive or vague phrasing.":"High noise from weak language."},starCompleteness:{label:"STAR_INDICATORS",tagline:e=>e>=75?"S/T/A/R structure is clear.":e>=50?"Partial STAR structure detected.":"Missing STAR components."}};function Tt(e,t){return t.filter(n=>{const r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`\\b${r}\\b`,"i").test(e)})}function Kg(e,t){const n=[];for(const r of t){const i=e.match(new RegExp(r.source,"g"));i&&n.push(...i)}return[...new Set(n)]}function We(e){return Math.max(0,Math.min(100,Math.round(e)))}function Io(e){return e.trim().split(/\s+/).filter(Boolean).length}function Qg(e,t){const n=t.length*25;if(!e.length)return We(-n);const r=Math.min(100,70+(e.length-1)*15);return We(r-n)}function Xg(e,t){if(!e.trim()||!t.length)return 0;const n=Math.max(1,Io(e)),r=t.length/(n/10);return We(r*100)}function Zg(e,t){const n=Math.min(80,e.length*18),r=t.length>0?20:0;return We(n+r)}function Jg(e){return We(e.length*22)}function ex(e){return We(e.length*60)}function tx(e,t){const n=Io(e),r=n>=8&&n<=60?10:0,i=t.length*22;return We(80+r-i)}function nx(e){return We(100-e.length*30)}function rx(e){return We(e.length*28)}function ix(e){let t=0;for(const n of Object.values(Yg))n.some(r=>e.includes(r))&&t++;return We(t/4*100)}function sx(e,t){const n=rc[t]||rc.resume;let r=0,i=0;for(const[s,o]of Object.entries(n))e[s]!==void 0&&(r+=e[s]*o,i+=o);return We(r/i)}function ax(e,t){const n=[];for(const[r,{score:i}]of Object.entries(e)){if(i<70)continue;const s=wn[r];if(r==="ownership"){const o=t.positive.filter(l=>/^[a-z]+$/.test(l)&&l.length<=15);o.length?n.push(`Strong ownership verbs detected: ${o.slice(0,3).join(", ")}`):n.push(s.tagline(i))}else if(r==="quantification"){const o=t.positive.filter(l=>/\d/.test(l));o.length?n.push(`Quantified outcomes present: ${o.slice(0,2).join(", ")}`):n.push(s.tagline(i))}else s&&n.push(s.tagline(i))}return n.length?n:["Expand on specific outcomes and ownership for stronger signals."]}function ox(e){return Object.entries(e).filter(([,{score:t}])=>t<50).map(([t,{score:n}])=>{var r;return((r=wn[t])==null?void 0:r.tagline(n))??""}).filter(Boolean)}function lx(e,t){var s,o,l,c;const n=[];(((s=e.ownership)==null?void 0:s.score)??100)<50&&n.push('Open with a direct ownership verb: "Led", "Built", "Architected", or "Designed" — before any qualifiers.');const r=t.negative.find(u=>Kd.includes(u));r&&n.push(`Replace "${r}" with a direct ownership verb (e.g., "led", "built", "owned").`),(((o=e.quantification)==null?void 0:o.score)??100)<50&&n.push("Add a measurable outcome: percentage change, dollar impact, user count, or time reduction."),(((l=e.businessImpact)==null?void 0:l.score)??100)<50&&n.push("Connect the work to a business outcome: revenue, retention, error rate, deploy frequency, or customer satisfaction."),(((c=e.scale)==null?void 0:c.score)??100)<50&&n.push("Quantify scale: how many users, teams, services, or requests were affected?");const i=t.negative.find(u=>Qd.includes(u));return i&&n.push(`Remove or replace vague language like "${i}" — specificity is the signal.`),e.leadership!==void 0&&(e.leadership.score??100)<50&&n.push("Add a leadership signal: who did you mentor, influence, or align? What cross-functional impact did you drive?"),n.slice(0,5)}const cx={strong:["This signals a high-ownership individual who drives measurable outcomes. Readers will likely categorize this as staff-level execution.","Strong signal fidelity. This communicates a driver, not a passenger — with evidence. Hiring committees will register clear accountability."],moderate:["This signals a capable contributor with some measurable outcomes. Strengthening ownership language and adding scale context would lift this to senior-level signal.","Moderate signal detected. The execution is visible but the business context needs more specificity to compete at senior or staff levels."],weak:["This currently signals a supportive contributor role. Readers cannot determine accountability or measurable outcomes. The work may be excellent — but the signal is not transmitting.","Weak signal detected. The text describes participation rather than ownership. Reframe around what you initiated, delivered, and measured."]};function ux(e,t){var o;const n=e>=70?"strong":e>=40?"moderate":"weak",r=cx[n],s=(((o=Object.entries(t).sort((l,c)=>l[1].score-c[1].score)[0])==null?void 0:o[0])??"").charCodeAt(0)%r.length;return r[s]}function dx(e,t,n){const r=Object.entries(t).filter(([,u])=>u.score>=70).map(([u])=>{var m;return((m=wn[u])==null?void 0:m.label.toLowerCase().replace(/_/g," "))??u}),i=Object.entries(t).filter(([,u])=>u.score<50).map(([u])=>{var m;return((m=wn[u])==null?void 0:m.label.toLowerCase().replace(/_/g," "))??u}),o={resume:"resume bullet",interview:"interview answer",linkedin:"LinkedIn summary",github:"GitHub description",leadership:"leadership update"}[n]??"text",l=[];l.push({text:`This ${o} communicates `}),r.length?(l.push({text:r.slice(0,2).join(" and "),bold:!0}),i.length&&(l.push({text:" but under-signals "}),l.push({text:i.slice(0,2).join(" and "),bold:!0}))):i.length?(l.push({text:"limited signal strength, under-delivering on "}),l.push({text:i.slice(0,2).join(" and "),bold:!0})):l.push({text:"balanced signal across all dimensions"});const c=e>=70?". While the execution is clear, minor gaps remain in lower-scoring dimensions.":". The ownership framing and measurable outcomes need strengthening to compete at senior or staff levels.";return l.push({text:c}),l}function px(e,t){var u;const n=Io(e),r=n>=30?"High":n>=15?"Medium":"Low",i=Object.values(t).map(m=>m.score),s=i.reduce((m,f)=>m+f,0)/Math.max(1,i.length),o=s>=65?"High":s>=40?"Medium":"Low",l=((u=t.businessImpact)==null?void 0:u.score)??50,c=l<40?"Critical":l<70?"Elevated":"Normal";return{detectionConfidence:r,semanticDensity:o,impactVariance:c}}function mx(e,t="resume"){var T;const n=e.toLowerCase(),r=Tt(n,Gg),i=Tt(n,Kd),s=Tt(n,Hg),o=Tt(n,Bg),l=Tt(n,$g),c=Tt(n,qg),u=Tt(n,Qd),m=Kg(e,Vg),f={ownership:Qg(r,i),quantification:Xg(e,m),businessImpact:Zg(s,m),technicalDepth:Jg(c),scale:ex(o),clarity:tx(e,u),leadership:rx(l),weakLanguage:nx(i),starCompleteness:t==="interview"?ix(n):void 0},g=nc[t]||nc.resume,v={};for(const O of g)f[O]!==void 0&&(v[O]={score:f[O],label:((T=wn[O])==null?void 0:T.label)??O.toUpperCase()});const y=sx(f,t),b=[...r.slice(0,4),...m.slice(0,3),...s.slice(0,2)],N=[...i.slice(0,3),...u.slice(0,3)],p={positive:[...new Set(b)].slice(0,8),negative:[...new Set(N)].slice(0,6)},d=ax(v,p),h=ox(v),x=lx(v,p),S=ux(y,v),j=dx(y,v,t),I=px(e,v);return{overall:y,dimensions:v,strengths:d,gaps:h,detectedPhrases:p,improvements:x,readerSignal:S,narrativeParts:j,miniStats:I}}const ks=[{key:"resume",label:"RESUME_BULLET"},{key:"interview",label:"INTERVIEW_ANSWER"},{key:"linkedin",label:"LINKEDIN_SUMMARY"},{key:"github",label:"GITHUB_DESCRIPTION"},{key:"leadership",label:"LEADERSHIP_UPDATE"}],ic={strong:"Led migration of monolithic auth service to OAuth 2.0 microservices, reducing login latency by 40% and enabling 3 new product integrations across 2M users.",weak:"Helped with various backend improvements and participated in team code reviews."};function fx(){return a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-is-alert/50"}),a.jsx("span",{className:"absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-is-alert/50"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-is-alert/50"}),a.jsx("span",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-is-alert/50"})]})}function hx({active:e}){return a.jsxs("div",{className:"relative w-full aspect-square max-w-sm mx-auto",style:{backgroundImage:"radial-gradient(#262626 1px, transparent 1px)",backgroundSize:"24px 24px"},children:[a.jsxs("svg",{viewBox:"0 0 200 200",className:"absolute inset-0 w-full h-full",children:[a.jsx("circle",{cx:"100",cy:"100",r:"88",fill:"none",stroke:"rgba(38,38,38,0.8)",strokeWidth:"1",strokeDasharray:"4 4",style:{transformOrigin:"100px 100px",animation:"orbit-cw 20s linear infinite"}}),a.jsx("circle",{cx:"100",cy:"100",r:"62",fill:"none",stroke:"rgba(232,105,97,0.25)",strokeWidth:"1",strokeDasharray:"3 6",style:{transformOrigin:"100px 100px",animation:"orbit-ccw 12s linear infinite"}}),a.jsx("circle",{cx:"100",cy:"100",r:"38",fill:"none",stroke:"rgba(232,105,97,0.15)",strokeWidth:"1",className:"signal-pulse"}),a.jsxs("g",{style:{transformOrigin:"100px 100px",animation:"orbit-cw 4s linear infinite"},children:[a.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"14",stroke:"rgba(232,105,97,0.45)",strokeWidth:"1"}),a.jsx("circle",{cx:"100",cy:"100",r:"4",fill:"rgba(232,105,97,0.2)"})]}),a.jsx("circle",{cx:"100",cy:"100",r:"2",fill:"rgba(232,105,97,0.6)"}),[0,45,90,135,180,225,270,315].map(t=>{const n=t*Math.PI/180,r=100+85*Math.sin(n),i=100-85*Math.cos(n),s=100+90*Math.sin(n),o=100-90*Math.cos(n);return a.jsx("line",{x1:r,y1:i,x2:s,y2:o,stroke:"rgba(232,105,97,0.3)",strokeWidth:"1"},t)})]}),a.jsxs("div",{className:"absolute inset-0 pointer-events-none p-3",children:[a.jsxs("div",{className:"absolute top-3 left-3 font-mono text-[9px] text-is-dim leading-relaxed",children:[a.jsxs("div",{children:["STATUS: ",e?"PROCESSING":"AWAITING_INPUT"]}),a.jsx("div",{children:"BUFFER: CLEAR"})]}),a.jsx("div",{className:"absolute top-3 right-3 font-mono text-[9px] text-is-dim text-right",children:a.jsx("div",{children:"NODE_01"})}),a.jsxs("div",{className:"absolute bottom-3 right-3 font-mono text-[9px] text-is-dim text-right leading-relaxed",children:[a.jsx("div",{children:"SIG_IDLE"}),a.jsx("div",{children:"SCAN_RES: 1.25μs"}),a.jsx("div",{children:"FREQ: 2.45GHz"})]})]})]})}function gx({overall:e}){const[t,n]=w.useState(0);w.useEffect(()=>{const o=setTimeout(()=>n(e),100);return()=>clearTimeout(o)},[e]);const r=e>=70?"bg-is-alert":e>=40?"bg-is-warning":"bg-red-600",i=e>=70?"STRONG_SIGNAL_QUALITY":e>=40?"MODERATE_SIGNAL":"WEAK_SIGNAL",s=e>=70?"coral":e>=40?"gold":"coral";return a.jsxs("div",{className:"is-panel p-6 relative overflow-hidden",children:[a.jsx("div",{className:"scanline"}),a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_SCORE"}),a.jsxs("div",{className:"flex items-end gap-2 mb-1",children:[a.jsx("span",{className:"font-mono text-7xl font-semibold text-is-alert leading-none",children:e}),a.jsx("span",{className:"font-mono text-lg text-is-dim mb-2",children:"/100"})]}),a.jsx("div",{className:"h-1 bg-is-surface-high mb-5",children:a.jsx("div",{className:`h-full ${r} transition-all duration-1000`,style:{width:`${t}%`}})}),a.jsx(he,{color:s,children:i})]})}function xx({dimKey:e,score:t}){const[n,r]=w.useState(0),i=wn[e];w.useEffect(()=>{const l=setTimeout(()=>r(t),200);return()=>clearTimeout(l)},[t]);const s=t>=70?"text-is-alert":t>=40?"text-is-warning":"text-red-400",o=t>=70?"bg-is-alert":t>=40?"bg-is-warning":"bg-red-600";return a.jsxs("div",{className:"is-panel p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"is-label",children:i==null?void 0:i.label}),a.jsxs("span",{className:`font-mono text-sm font-semibold ${s}`,children:[t,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high mb-2",children:a.jsx("div",{className:`h-full ${o} transition-all duration-700`,style:{width:`${n}%`}})}),a.jsx("p",{className:"font-body text-xs text-is-dim",children:i==null?void 0:i.tagline(t)})]})}function vx({narrativeParts:e,miniStats:t}){return a.jsxs("div",{className:"is-panel p-6 h-full",children:[a.jsx("div",{className:"is-label mb-4",children:"NARRATIVE_SUMMARY"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed mb-6",children:e.map((n,r)=>n.bold?a.jsx("strong",{className:"text-is-alert font-semibold",children:n.text},r):a.jsx("span",{children:n.text},r))}),a.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-4 border-t border-is-border",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:"DETECTION_CONFIDENCE"}),a.jsx("div",{className:"font-mono text-sm text-is-text",children:t.detectionConfidence})]}),a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:"SEMANTIC_DENSITY"}),a.jsx("div",{className:"font-mono text-sm text-is-text",children:t.semanticDensity})]}),a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:"IMPACT_VARIANCE"}),a.jsx("div",{className:`font-mono text-sm ${t.impactVariance==="Critical"?"text-is-alert":t.impactVariance==="Elevated"?"text-is-warning":"text-is-text"}`,children:t.impactVariance})]})]})]})}function yx({dimensions:e,strengths:t,gaps:n,improvements:r}){const i=Object.entries(e).sort((u,m)=>m[1].score-u[1].score),s=i[0],o=i[i.length-1],l=s?`STRONG_${s[1].label}`:"STRENGTHS",c=o?`${o[1].label}_GAP`:"GAPS";return a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[a.jsxs("div",{className:"is-panel p-6 border-l-2 border-is-secondary/40",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[a.jsx(Hh,{size:15,className:"text-is-secondary shrink-0"}),a.jsx("span",{className:"is-label",children:l})]}),a.jsx("div",{className:"space-y-4",children:t.map((u,m)=>a.jsxs("div",{className:"border-l-2 border-is-secondary/25 pl-3",children:[a.jsxs("div",{className:"is-label mb-1 text-is-dim text-[10px]",children:["EVIDENCE_",String(m+1).padStart(2,"0")]}),a.jsxs("div",{className:"font-mono text-xs text-is-text leading-relaxed",children:['"',u,'"']})]},m))})]}),a.jsxs("div",{className:"is-panel p-6 border-l-2 border-is-alert/30",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[a.jsx(Md,{size:15,className:"text-is-alert shrink-0"}),a.jsx("span",{className:"is-label",children:c})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1 text-is-dim text-[10px]",children:"RISK_DETECTED"}),a.jsx("div",{className:"font-body text-sm text-is-secondary leading-relaxed",children:n[0]??"Signal quality is sufficient for the current context."})]}),r[0]&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1 text-is-dim text-[10px]",children:"SUGGESTION"}),a.jsx("div",{className:"font-body text-sm text-is-secondary leading-relaxed",children:r[0]})]})]})]})]})}function wx({improvements:e}){return e.length?a.jsxs("div",{className:"is-panel p-6 mb-8",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[a.jsx(ng,{size:15,className:"text-is-warning shrink-0"}),a.jsx("span",{className:"is-label",children:"RECALIBRATION_TASKS"})]}),a.jsx("ol",{className:"space-y-3",children:e.map((t,n)=>a.jsxs("li",{className:"flex gap-4",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert shrink-0 w-5",children:String(n+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-secondary leading-relaxed",children:t})]},n))})]}):null}function bx({detectedPhrases:e}){return a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"is-panel p-5",children:[a.jsx("div",{className:"is-label mb-4",children:"POSITIVE_SIGNALS"}),e.positive.length>0?a.jsx("div",{className:"flex flex-wrap gap-2",children:e.positive.map((t,n)=>a.jsx("span",{className:"font-mono text-xs px-2 py-1 bg-is-alert/10 text-is-alert border border-is-alert/25",children:t},n))}):a.jsx("p",{className:"font-mono text-xs text-is-dim",children:"NO_POSITIVE_SIGNALS_DETECTED"})]}),a.jsxs("div",{className:"is-panel p-5",children:[a.jsx("div",{className:"is-label mb-4",children:"NOISE_DETECTED"}),e.negative.length>0?a.jsx("div",{className:"flex flex-wrap gap-2",children:e.negative.map((t,n)=>a.jsx("span",{className:"font-mono text-xs px-2 py-1 bg-is-surface-high text-is-dim border border-is-border line-through",children:t},n))}):a.jsx("p",{className:"font-mono text-xs text-is-dim",children:"NO_NOISE_DETECTED"})]})]})}function kx(){var N;const[e]=yo(),[t,n]=w.useState("input"),[r,i]=w.useState(""),[s,o]=w.useState(()=>{const p=e.get("type");return ks.some(d=>d.key===p)?p:"resume"}),[l,c]=w.useState(null),[u,m]=w.useState(""),[f]=w.useState(()=>Math.floor(Math.random()*9e3+1e3)),g=r.length;function v(){var d;const p=mx(r,s);c(p),m(new Date().toISOString().replace("T"," ").slice(0,19)+" UTC"),n("results"),window.scrollTo(0,0),(d=window.clarity)==null||d.call(window,"event","analyzer_run")}function y(){var p;n("input"),window.scrollTo(0,0),(p=window.clarity)==null||p.call(window,"event","analyzer_rerun")}if(t==="input")return a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-12",children:a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8 items-start",children:[a.jsxs("div",{className:"is-panel p-6 relative",children:[a.jsx(fx,{}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[a.jsx("span",{className:"is-label",children:"_03_ANALYZER"}),a.jsx(he,{color:"coral",children:"SIGNAL_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-2xl md:text-3xl font-semibold uppercase text-is-text mb-2",children:"WHAT_ARE_YOU_SIGNALING?"}),a.jsx("p",{className:"font-body text-sm text-is-secondary leading-relaxed mb-6",children:"Paste a resume bullet, interview answer, LinkedIn summary, GitHub profile, or leadership update to evaluate the signals you're sending."}),a.jsxs("div",{className:"mb-5",children:[a.jsx("div",{className:"is-label mb-2",children:"SIGNAL_TYPE"}),a.jsxs("div",{className:"relative",children:[a.jsx("select",{value:s,onChange:p=>o(p.target.value),className:"w-full bg-is-surface border border-is-border px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-is-text focus:outline-none focus:border-is-alert cursor-pointer appearance-none pr-8",children:ks.map(p=>a.jsx("option",{value:p.key,className:"bg-is-surface text-is-text",children:p.label},p.key))}),a.jsx(Fh,{size:12,className:"absolute right-3 top-1/2 -translate-y-1/2 text-is-dim pointer-events-none"})]})]}),a.jsxs("div",{className:"mb-2",children:[a.jsx("div",{className:"is-label mb-2",children:"INPUT_DATA"}),a.jsx("textarea",{value:r,onChange:p=>i(p.target.value),maxLength:2500,rows:10,placeholder:"PASTE_HERE...",className:"w-full bg-is-surface border border-is-border px-4 py-3 font-mono text-xs text-is-text placeholder:text-is-dim focus:outline-none focus:border-is-alert resize-none leading-relaxed"})]}),a.jsx("div",{className:"flex justify-end mb-5",children:a.jsxs("span",{className:`font-mono text-[10px] ${g>0?"text-is-alert":"text-is-dim"}`,children:["CH_COUNT: ",g," / 2500"]})}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[a.jsx("span",{className:"is-label",children:"EXAMPLES:"}),a.jsx("button",{onClick:()=>{i(ic.strong),o("resume")},className:"font-mono text-[10px] px-2 py-1 border border-is-border text-is-dim hover:text-is-text hover:border-is-outline transition-colors",children:'"Led cross-functional team..."'}),a.jsx("button",{onClick:()=>{i(ic.weak),o("resume")},className:"font-mono text-[10px] px-2 py-1 border border-is-border text-is-dim hover:text-is-text hover:border-is-outline transition-colors",children:'"Helped with various tasks..."'})]}),a.jsxs("button",{onClick:v,disabled:g<20,className:"w-full font-mono text-xs uppercase tracking-widest py-3 bg-is-alert text-white border border-is-alert transition-all hover:bg-is-alert/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:[a.jsx(_d,{size:13}),"ANALYZE_SIGNAL"]}),a.jsx("div",{className:"mt-2 flex justify-end",children:a.jsx("span",{className:"font-mono text-[10px] text-is-dim",children:"SECURE_TUNNEL_ESTABLISHED · LATENCY: <1ms"})}),a.jsxs("div",{className:"mt-6 pt-5 border-t border-is-border flex items-start gap-2",children:[a.jsx(ql,{size:13,className:"text-is-dim mt-0.5 shrink-0"}),a.jsx("p",{className:"font-mono text-[10px] text-is-dim leading-relaxed",children:"Analysis runs locally in your browser. Nothing is uploaded or stored. SIG_PROC_v4.2"})]})]}),a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(hx,{active:!1}),a.jsxs("div",{className:"is-panel p-5",children:[a.jsx("div",{className:"is-label mb-3",children:"WHAT_GETS_ANALYZED"}),a.jsx("div",{className:"grid grid-cols-2 gap-x-6 gap-y-2",children:["Ownership language","Quantified outcomes","Business impact","Technical depth","Scale & scope","Clarity & specificity","Leadership signals","STAR completeness*"].map(p=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-1 h-1 bg-is-alert/60 shrink-0",style:{minWidth:4,minHeight:4}}),a.jsx("span",{className:"font-body text-xs text-is-dim",children:p})]},p))}),a.jsx("p",{className:"font-mono text-[10px] text-is-dim mt-3",children:"* STAR_COMPLETENESS applies to INTERVIEW_ANSWER type only"})]})]})]})});const b=((N=ks.find(p=>p.key===s))==null?void 0:N.label)??s.toUpperCase();return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-8",children:[a.jsx("div",{className:"border-b border-is-border pb-6 mb-8",children:a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"font-mono text-xs text-is-dim mb-1",children:["ARCHIVE › ANALYSIS_",f]}),a.jsx("h1",{className:"font-mono text-xl md:text-2xl font-semibold uppercase text-is-text mb-1",children:"SIGNAL_ANALYSIS_REPORT"}),a.jsxs("div",{className:"font-mono text-[10px] text-is-dim",children:["TIMESTAMP: ",u," // SOURCE: ",b,"_PARSER"]})]}),a.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[a.jsx(he,{color:"coral",children:"ANALYSIS: COMPLETE"}),a.jsxs("button",{onClick:y,className:"font-mono text-xs uppercase tracking-widest px-4 py-1.5 bg-transparent text-is-text border border-is-border transition-all hover:border-is-outline flex items-center gap-1.5",children:[a.jsx(eg,{size:11}),"RE_ANALYZE"]})]})]})}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 mb-8",children:[a.jsx(gx,{overall:l.overall}),a.jsx(vx,{narrativeParts:l.narrativeParts,miniStats:l.miniStats})]}),a.jsxs("div",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(Uh,{size:15,className:"text-is-secondary"}),a.jsx("span",{className:"is-label",children:"SIGNAL_BREAKDOWN"})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(l.dimensions).map(([p,{score:d}])=>a.jsx(xx,{dimKey:p,score:d},p))})]}),a.jsxs("div",{className:"is-panel p-6 relative mb-8 border-l-4 border-is-alert/30",children:[a.jsx(qh,{size:48,className:"absolute right-5 top-5 text-is-text opacity-5 pointer-events-none"}),a.jsx("div",{className:"is-label mb-3",children:"EXECUTIVE_PERCEPTION_ANALYSIS"}),a.jsx("p",{className:"font-body text-sm text-is-secondary leading-relaxed max-w-3xl",children:l.readerSignal})]}),a.jsx(yx,{dimensions:l.dimensions,strengths:l.strengths,gaps:l.gaps,improvements:l.improvements}),a.jsx(wx,{improvements:l.improvements}),a.jsx(bx,{detectedPhrases:l.detectedPhrases}),a.jsxs("div",{className:"mt-10 pt-5 border-t border-is-border flex items-center gap-2",children:[a.jsx(ql,{size:12,className:"text-is-dim shrink-0"}),a.jsx("p",{className:"font-mono text-[10px] text-is-dim",children:"Analysis ran locally in your browser. No text was uploaded or stored. SIG_PROC_v4.2"})]})]})}function Nx(){return a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-12",children:[a.jsxs("div",{className:"mb-10",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx(he,{color:"blue",children:"POLICY_ACTIVE"}),a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"UPDATED: 2026-06-21"})]}),a.jsx("h1",{className:"font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-is-text mb-3",children:"PRIVACY_POLICY"}),a.jsx("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:"Invisible Signals™ is a static, open-source site. No accounts, no servers, no databases. This policy explains what limited analytics we collect and why."})]}),a.jsxs("section",{className:"is-panel p-6 mb-6",children:[a.jsx("span",{className:"is-label block mb-4",children:"01 // OVERVIEW"}),a.jsx("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:"This site does not collect, store, or share any personal data. There is no login, no account creation, no form submission, and no server-side processing of any kind. The only data collection that occurs is anonymous behavioral analytics via Microsoft Clarity, described below."})]}),a.jsxs("section",{className:"is-panel p-6 mb-6",children:[a.jsx("span",{className:"is-label block mb-4",children:"02 // BEHAVIORAL_ANALYSIS // MICROSOFT_CLARITY"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:["This site uses"," ",a.jsx("a",{href:"https://clarity.microsoft.com",target:"_blank",rel:"noreferrer",className:"text-is-primary hover:underline",children:"Microsoft Clarity"}),", a behavioral analytics tool. Clarity may collect:"]}),a.jsx("ul",{className:"space-y-2 pl-4",children:["Page navigation and click patterns","Scroll depth and session replays","Heatmap aggregates showing where users interact","Browser/device type and approximate region"].map(e=>a.jsxs("li",{className:"flex items-start gap-3 font-mono text-sm text-is-secondary",children:[a.jsx("span",{className:"mt-1.5 w-1 h-1 bg-is-primary shrink-0"}),e]},e))}),a.jsxs("div",{className:"border-t border-is-border pt-4 mt-4",children:[a.jsx("span",{className:"is-label block mb-3",children:"PURPOSE"}),a.jsxs("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:["Clarity data is used ",a.jsx("span",{className:"text-is-text font-semibold",children:"solely"})," to understand how people navigate the site so the UX can be improved. It is"," ",a.jsx("span",{className:"text-is-alert font-semibold",children:"not"})," used for advertising, retargeting, marketing, or any commercial purpose."]})]}),a.jsxs("div",{className:"border-t border-is-border pt-4",children:[a.jsx("span",{className:"is-label block mb-3",children:"MICROSOFT_GOVERNANCE"}),a.jsxs("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:["Clarity data is processed by Microsoft under their own privacy terms. See"," ",a.jsx("a",{href:"https://privacy.microsoft.com/privacystatement",target:"_blank",rel:"noreferrer",className:"text-is-primary hover:underline",children:"Microsoft's Privacy Statement"})," ","for details on how they handle this data."]})]})]})]}),a.jsxs("section",{className:"is-panel p-6 mb-6",children:[a.jsx("span",{className:"is-label block mb-4",children:"03 // DATA_PRACTICES"}),a.jsx("div",{className:"space-y-4",children:[{label:"PERSONAL_DATA",status:"coral",pill:"NOT_COLLECTED",text:"No names, email addresses, payment information, or any personally identifiable information is collected, stored, or transmitted by this site."},{label:"DATA_SHARING",status:"coral",pill:"NONE",text:"No data is sold, rented, or shared with third parties for any purpose. Clarity data flows only to Microsoft as described above."},{label:"DATA_STORAGE",status:"coral",pill:"NO_SERVER",text:"This is a fully static site. There is no backend, no database, and no server. Nothing you do on this site is persisted by us."},{label:"COOKIES",status:"gold",pill:"ANALYTICS_ONLY",text:"Microsoft Clarity sets cookies to maintain session continuity for its behavioral analysis. No other cookies are set by this site."}].map(({label:e,status:t,pill:n,text:r})=>a.jsxs("div",{className:"border-b border-is-border last:border-b-0 pb-4 last:pb-0",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("span",{className:"is-label",children:e}),a.jsx(he,{color:t,children:n})]}),a.jsx("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:r})]},e))})]}),a.jsxs("section",{className:"is-panel p-6 mb-6",children:[a.jsx("span",{className:"is-label block mb-4",children:"04 // OPEN_SOURCE"}),a.jsxs("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:["Invisible Signals™ is fully open source under the Apache 2.0 license. You can inspect every line of code, including all analytics integrations, in the"," ",a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"text-is-primary hover:underline",children:"public repository"}),"."]})]}),a.jsxs("section",{className:"is-panel p-6",children:[a.jsx("span",{className:"is-label block mb-4",children:"05 // QUESTIONS"}),a.jsxs("p",{className:"font-mono text-sm text-is-secondary leading-relaxed",children:["Questions about this policy? Open an issue or discussion on the"," ",a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"text-is-primary hover:underline",children:"GitHub repository"}),"."]})]})]})}function Sx(){const{pathname:e}=$t();return w.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Ex(){return a.jsxs(Th,{children:[a.jsx(Sx,{}),a.jsxs("div",{className:"min-h-screen flex flex-col bg-is-bg-deep",children:[a.jsx(ag,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(wh,{children:[a.jsx(_e,{path:"/",element:a.jsx(hg,{})}),a.jsx(_e,{path:"/frameworks",element:a.jsx(vg,{})}),a.jsx(_e,{path:"/prompts",element:a.jsx(wg,{})}),a.jsx(_e,{path:"/templates",element:a.jsx(Eg,{})}),a.jsx(_e,{path:"/search",element:a.jsx(Fg,{})}),a.jsx(_e,{path:"/analyzer",element:a.jsx(kx,{})}),a.jsxs(_e,{path:"/signal-stack",element:a.jsx(Ig,{}),children:[a.jsx(_e,{index:!0,element:a.jsx(Ag,{})}),a.jsx(_e,{path:":layer",element:a.jsx(Lg,{})})]}),a.jsx(_e,{path:"/privacy",element:a.jsx(Nx,{})})]})}),a.jsxs("footer",{className:"border-t border-is-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"© 2026 INVISIBLE_SIGNALS™ · IS_RIGHTS_RESERVED"}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-secondary hover:text-is-text transition-colors",children:"GITHUB"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-secondary hover:text-is-text transition-colors",children:"CODE_OF_CONDUCT"}),a.jsx(ne,{to:"/privacy",className:"font-mono text-xs text-is-secondary hover:text-is-text transition-colors",children:"PRIVACY_POLICY"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"SECURITY: APACHE-2.0 // OPEN_SOURCE_LICENSED"})]})]})]})]})}Ns.createRoot(document.getElementById("root")).render(a.jsx(hc.StrictMode,{children:a.jsx(Ex,{})}));
