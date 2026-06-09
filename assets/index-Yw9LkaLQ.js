function Fd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nc={exports:{}},yi={},tc={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Bd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Xd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),To=Symbol.iterator;function Zd(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,sc={};function yt(e,n,t){this.props=e,this.context=n,this.refs=sc,this.updater=t||rc}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ac(){}ac.prototype=yt.prototype;function xa(e,n,t){this.props=e,this.context=n,this.refs=sc,this.updater=t||rc}var wa=xa.prototype=new ac;wa.constructor=xa;ic(wa,yt.prototype);wa.isPureReactComponent=!0;var Ro=Array.isArray,oc=Object.prototype.hasOwnProperty,ka={current:null},lc={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,n,t){var r,i={},s=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(s=""+n.key),n)oc.call(n,r)&&!lc.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:cr,type:e,key:s,ref:o,props:i,_owner:ka.current}}function ep(e,n){return{$$typeof:cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function np(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Po=/\/+/g;function Gi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?np(""+e.key):n.toString(36)}function Ar(e,n,t,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case cr:case Bd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gi(o,0):r,Ro(i)?(t="",e!=null&&(t=e.replace(Po,"$&/")+"/"),Ar(i,n,t,"",function(u){return u})):i!=null&&(ba(i)&&(i=ep(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Po,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Ro(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Gi(s,l);o+=Ar(s,n,t,c,i)}else if(c=Zd(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Gi(s,l++),o+=Ar(s,n,t,c,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,n,t){if(e==null)return e;var r=[],i=0;return Ar(e,r,"","",function(s){return n.call(t,s,i++)}),r}function tp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Or={transition:null},rp={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Or,ReactCurrentOwner:ka};function uc(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=yt;_.Fragment=Gd;_.Profiler=Vd;_.PureComponent=xa;_.StrictMode=$d;_.Suspense=Kd;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;_.act=uc;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ic({},e.props),i=e.key,s=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,o=ka.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)oc.call(n,c)&&!lc.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:cr,type:e.type,key:i,ref:s,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qd,_context:e},e.Consumer=e};_.createElement=cc;_.createFactory=function(e){var n=cc.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Qd,render:e}};_.isValidElement=ba;_.lazy=function(e){return{$$typeof:Jd,_payload:{_status:-1,_result:e},_init:tp}};_.memo=function(e,n){return{$$typeof:Xd,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Or.transition;Or.transition={};try{e()}finally{Or.transition=n}};_.unstable_act=uc;_.useCallback=function(e,n){return ue.current.useCallback(e,n)};_.useContext=function(e){return ue.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};_.useEffect=function(e,n){return ue.current.useEffect(e,n)};_.useId=function(){return ue.current.useId()};_.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return ue.current.useMemo(e,n)};_.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};_.useRef=function(e){return ue.current.useRef(e)};_.useState=function(e){return ue.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return ue.current.useTransition()};_.version="18.3.1";tc.exports=_;var k=tc.exports;const dc=Hd(k),ip=Fd({__proto__:null,default:dc},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=k,ap=Symbol.for("react.element"),op=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,cp=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,n,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)lp.call(n,r)&&!up.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:ap,type:e,key:s,ref:o,props:i,_owner:cp.current}}yi.Fragment=op;yi.jsx=pc;yi.jsxs=pc;nc.exports=yi;var a=nc.exports,ws={},fc={exports:{}},Se={},mc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,R){var L=j.length;j.push(R);e:for(;0<L;){var q=L-1>>>1,J=j[q];if(0<i(J,R))j[q]=R,j[L]=J,L=q;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],L=j.pop();if(L!==R){j[0]=L;e:for(var q=0,J=j.length,hr=J>>>1;q<hr;){var Cn=2*(q+1)-1,Bi=j[Cn],In=Cn+1,gr=j[In];if(0>i(Bi,L))In<J&&0>i(gr,Bi)?(j[q]=gr,j[In]=L,q=In):(j[q]=Bi,j[Cn]=L,q=Cn);else if(In<J&&0>i(gr,L))j[q]=gr,j[In]=L,q=In;else break e}}return R}function i(j,R){var L=j.sortIndex-R.sortIndex;return L!==0?L:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,m=null,g=3,w=!1,y=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,n(c,R);else break;R=t(u)}}function v(j){if(x=!1,f(j),!y)if(t(c)!==null)y=!0,Fi(S);else{var R=t(u);R!==null&&Hi(v,R.startTime-j)}}function S(j,R){y=!1,x&&(x=!1,p(T),T=-1),w=!0;var L=g;try{for(f(R),m=t(c);m!==null&&(!(m.expirationTime>R)||j&&!ve());){var q=m.callback;if(typeof q=="function"){m.callback=null,g=m.priorityLevel;var J=q(m.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?m.callback=J:m===t(c)&&r(c),f(R)}else r(c);m=t(c)}if(m!==null)var hr=!0;else{var Cn=t(u);Cn!==null&&Hi(v,Cn.startTime-R),hr=!1}return hr}finally{m=null,g=L,w=!1}}var C=!1,I=null,T=-1,W=5,P=-1;function ve(){return!(e.unstable_now()-P<W)}function kt(){if(I!==null){var j=e.unstable_now();P=j;var R=!0;try{R=I(!0,j)}finally{R?bt():(C=!1,I=null)}}else C=!1}var bt;if(typeof d=="function")bt=function(){d(kt)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,Wd=Io.port2;Io.port1.onmessage=kt,bt=function(){Wd.postMessage(null)}}else bt=function(){N(kt,0)};function Fi(j){I=j,C||(C=!0,bt())}function Hi(j,R){T=N(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Fi(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return j()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=g;g=j;try{return R()}finally{g=L}},e.unstable_scheduleCallback=function(j,R,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,j={id:h++,callback:R,priorityLevel:j,startTime:L,expirationTime:J,sortIndex:-1},L>q?(j.sortIndex=L,n(u,j),t(c)===null&&j===t(u)&&(x?(p(T),T=-1):x=!0,Hi(v,L-q))):(j.sortIndex=J,n(c,j),y||w||(y=!0,Fi(S))),j},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(j){var R=g;return function(){var L=g;g=R;try{return j.apply(this,arguments)}finally{g=L}}}})(hc);mc.exports=hc;var dp=mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=k,be=dp;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gc=new Set,Gt={};function Fn(e,n){ut(e,n),ut(e+"Capture",n)}function ut(e,n){for(Gt[e]=n,e=0;e<n.length;e++)gc.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},_o={};function mp(e){return ks.call(_o,e)?!0:ks.call(Lo,e)?!1:fp.test(e)?_o[e]=!0:(Lo[e]=!0,!1)}function hp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gp(e,n,t,r){if(n===null||typeof n>"u"||hp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,i,s,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Sa,Na);re[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Sa,Na);re[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Sa,Na);re[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ea(e,n,t,r){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gp(n,t,i,r)&&(t=null),r||i===null?mp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var en=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),Ss=Symbol.for("react.suspense"),Ns=Symbol.for("react.suspense_list"),Ia=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),xc=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,$i;function Pt(e){if($i===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$i=n&&n[1]||""}return`
`+$i+e}var Vi=!1;function qi(e,n){if(!e||Vi)return"";Vi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Vi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pt(e):""}function vp(e){switch(e.tag){case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Vn:return"Portal";case bs:return"Profiler";case ja:return"StrictMode";case Ss:return"Suspense";case Ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case vc:return(e._context.displayName||"Context")+".Provider";case Ca:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ia:return n=e.displayName||null,n!==null?n:Es(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return Es(e(n))}catch{}}return null}function yp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(n);case 8:return n===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xp(e){var n=wc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xr(e){e._valueTracker||(e._valueTracker=xp(e))}function kc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Oo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bc(e,n){n=n.checked,n!=null&&Ea(e,"checked",n,!1)}function Cs(e,n){bc(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Is(e,n.type,t):n.hasOwnProperty("defaultValue")&&Is(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Mo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Is(e,n,t){(n!=="number"||Vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function it(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ts(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Do(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(Lt(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function Sc(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function zo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Nc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){wp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ot[n]=Ot[e]})});function jc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+n).trim():n+"px"}function Cc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=jc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var kp=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ps(e,n){if(n){if(kp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function Ls(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,st=null,at=null;function Uo(e){if(e=pr(e)){if(typeof As!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Si(n),As(e.stateNode,e.type,n))}}function Ic(e){st?at?at.push(e):at=[e]:st=e}function Tc(){if(st){var e=st,n=at;if(at=st=null,Uo(e),n)for(e=0;e<n.length;e++)Uo(n[e])}}function Rc(e,n){return e(n)}function Pc(){}var Yi=!1;function Lc(e,n,t){if(Yi)return e(n,t);Yi=!0;try{return Rc(e,n,t)}finally{Yi=!1,(st!==null||at!==null)&&(Pc(),Tc())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=Si(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var Os=!1;if(Ke)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{Os=!1}function bp(e,n,t,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(h){this.onError(h)}}var Mt=!1,qr=null,Yr=!1,Ms=null,Sp={onError:function(e){Mt=!0,qr=e}};function Np(e,n,t,r,i,s,o,l,c){Mt=!1,qr=null,bp.apply(Sp,arguments)}function Ep(e,n,t,r,i,s,o,l,c){if(Np.apply(this,arguments),Mt){if(Mt){var u=qr;Mt=!1,qr=null}else throw Error(b(198));Yr||(Yr=!0,Ms=u)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wo(e){if(Hn(e)!==e)throw Error(b(188))}function jp(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Wo(i),e;if(s===r)return Wo(i),n;s=s.sibling}throw Error(b(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,r=s;break}if(l===r){o=!0,r=i,t=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===t){o=!0,t=s,r=i;break}if(l===r){o=!0,r=s,t=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function Ac(e){return e=jp(e),e!==null?Oc(e):null}function Oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Oc(e);if(n!==null)return n;e=e.sibling}return null}var Mc=be.unstable_scheduleCallback,Fo=be.unstable_cancelCallback,Cp=be.unstable_shouldYield,Ip=be.unstable_requestPaint,Y=be.unstable_now,Tp=be.unstable_getCurrentPriorityLevel,Ra=be.unstable_ImmediatePriority,Dc=be.unstable_UserBlockingPriority,Qr=be.unstable_NormalPriority,Rp=be.unstable_LowPriority,zc=be.unstable_IdlePriority,xi=null,He=null;function Pp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Ap,Lp=Math.log,_p=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(Lp(e)/_p|0)|0}var kr=64,br=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?r=_t(l):(s&=o,s!==0&&(r=_t(s)))}else o=t&~i,o!==0?r=_t(o):s!==0&&(r=_t(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),i=1<<t,r|=e[t],n&=~i;return r}function Op(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Me(s),l=1<<o,c=i[o];c===-1?(!(l&t)||l&r)&&(i[o]=Op(l,n)):c<=n&&(e.expiredLanes|=l),s&=~l}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Qi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function Dp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Me(t),s=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~s}}function Pa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function Wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fc,La,Hc,Bc,Gc,zs=!1,Sr=[],pn=null,fn=null,mn=null,qt=new Map,Yt=new Map,on=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Et(e,n,t,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},n!==null&&(n=pr(n),n!==null&&La(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Up(e,n,t,r,i){switch(n){case"focusin":return pn=Et(pn,e,n,t,r,i),!0;case"dragenter":return fn=Et(fn,e,n,t,r,i),!0;case"mouseover":return mn=Et(mn,e,n,t,r,i),!0;case"pointerover":var s=i.pointerId;return qt.set(s,Et(qt.get(s)||null,e,n,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yt.set(s,Et(Yt.get(s)||null,e,n,t,r,i)),!0}return!1}function $c(e){var n=Pn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=_c(t),n!==null){e.blockedOn=n,Gc(e.priority,function(){Hc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Us(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);_s=r,t.target.dispatchEvent(r),_s=null}else return n=pr(t),n!==null&&La(n),e.blockedOn=t,!1;n.shift()}return!0}function Bo(e,n,t){Mr(e)&&t.delete(n)}function Wp(){zs=!1,pn!==null&&Mr(pn)&&(pn=null),fn!==null&&Mr(fn)&&(fn=null),mn!==null&&Mr(mn)&&(mn=null),qt.forEach(Bo),Yt.forEach(Bo)}function jt(e,n){e.blockedOn===n&&(e.blockedOn=null,zs||(zs=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Wp)))}function Qt(e){function n(i){return jt(i,e)}if(0<Sr.length){jt(Sr[0],e);for(var t=1;t<Sr.length;t++){var r=Sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&jt(pn,e),fn!==null&&jt(fn,e),mn!==null&&jt(mn,e),qt.forEach(n),Yt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)$c(t),t.blockedOn===null&&on.shift()}var ot=en.ReactCurrentBatchConfig,Xr=!0;function Fp(e,n,t,r){var i=O,s=ot.transition;ot.transition=null;try{O=1,_a(e,n,t,r)}finally{O=i,ot.transition=s}}function Hp(e,n,t,r){var i=O,s=ot.transition;ot.transition=null;try{O=4,_a(e,n,t,r)}finally{O=i,ot.transition=s}}function _a(e,n,t,r){if(Xr){var i=Us(e,n,t,r);if(i===null)ss(e,n,r,Jr,t),Ho(e,r);else if(Up(i,e,n,t,r))r.stopPropagation();else if(Ho(e,r),n&4&&-1<zp.indexOf(e)){for(;i!==null;){var s=pr(i);if(s!==null&&Fc(s),s=Us(e,n,t,r),s===null&&ss(e,n,r,Jr,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else ss(e,n,r,null,t)}}var Jr=null;function Us(e,n,t,r){if(Jr=null,e=Ta(r),e=Pn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_c(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jr=e,null}function Vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case Ra:return 1;case Dc:return 4;case Qr:case Rp:return 16;case zc:return 536870912;default:return 16}default:return 16}}var cn=null,Aa=null,Dr=null;function qc(){if(Dr)return Dr;var e,n=Aa,t=n.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[s-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Go(){return!1}function Ne(e){function n(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nr:Go,this.isPropagationStopped=Go,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Ne(xt),dr=B({},xt,{view:0,detail:0}),Bp=Ne(dr),Ki,Xi,Ct,wi=B({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Ki=e.screenX-Ct.screenX,Xi=e.screenY-Ct.screenY):Xi=Ki=0,Ct=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),$o=Ne(wi),Gp=B({},wi,{dataTransfer:0}),$p=Ne(Gp),Vp=B({},dr,{relatedTarget:0}),Ji=Ne(Vp),qp=B({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=Ne(qp),Qp=B({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=Ne(Qp),Xp=B({},xt,{data:0}),Vo=Ne(Xp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ef[e])?!!n[e]:!1}function Ma(){return nf}var tf=B({},dr,{key:function(e){if(e.key){var n=Jp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=Ne(tf),sf=B({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ne(sf),af=B({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),of=Ne(af),lf=B({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=Ne(lf),uf=B({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=Ne(uf),pf=[9,13,27,32],Da=Ke&&"CompositionEvent"in window,Dt=null;Ke&&"documentMode"in document&&(Dt=document.documentMode);var ff=Ke&&"TextEvent"in window&&!Dt,Yc=Ke&&(!Da||Dt&&8<Dt&&11>=Dt),Yo=" ",Qo=!1;function Qc(e,n){switch(e){case"keyup":return pf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function mf(e,n){switch(e){case"compositionend":return Kc(n);case"keypress":return n.which!==32?null:(Qo=!0,Yo);case"textInput":return e=n.data,e===Yo&&Qo?null:e;default:return null}}function hf(e,n){if(Yn)return e==="compositionend"||!Da&&Qc(e,n)?(e=qc(),Dr=Aa=cn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gf[e.type]:n==="textarea"}function Xc(e,n,t,r){Ic(r),n=Zr(n,"onChange"),0<n.length&&(t=new Oa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,Kt=null;function vf(e){lu(e,0)}function ki(e){var n=Xn(e);if(kc(n))return e}function yf(e,n){if(e==="change")return n}var Jc=!1;if(Ke){var Zi;if(Ke){var es="oninput"in document;if(!es){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),es=typeof Xo.oninput=="function"}Zi=es}else Zi=!1;Jc=Zi&&(!document.documentMode||9<document.documentMode)}function Jo(){zt&&(zt.detachEvent("onpropertychange",Zc),Kt=zt=null)}function Zc(e){if(e.propertyName==="value"&&ki(Kt)){var n=[];Xc(n,Kt,e,Ta(e)),Lc(vf,n)}}function xf(e,n,t){e==="focusin"?(Jo(),zt=n,Kt=t,zt.attachEvent("onpropertychange",Zc)):e==="focusout"&&Jo()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Kt)}function kf(e,n){if(e==="click")return ki(n)}function bf(e,n){if(e==="input"||e==="change")return ki(n)}function Sf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ze=typeof Object.is=="function"?Object.is:Sf;function Xt(e,n){if(ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ks.call(n,i)||!ze(e[i],n[i]))return!1}return!0}function Zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function el(e,n){var t=Zo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zo(t)}}function eu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nu(){for(var e=window,n=Vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vr(e.document)}return n}function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nf(e){var n=nu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&eu(t.ownerDocument.documentElement,t)){if(r!==null&&za(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=el(t,s);var o=el(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Ke&&"documentMode"in document&&11>=document.documentMode,Qn=null,Ws=null,Ut=null,Fs=!1;function nl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fs||Qn==null||Qn!==Vr(r)||(r=Qn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&Xt(Ut,r)||(Ut=r,r=Zr(Ws,"onSelect"),0<r.length&&(n=new Oa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qn)))}function Er(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kn={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},ns={},tu={};Ke&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function bi(e){if(ns[e])return ns[e];if(!Kn[e])return e;var n=Kn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tu)return ns[e]=n[t];return e}var ru=bi("animationend"),iu=bi("animationiteration"),su=bi("animationstart"),au=bi("transitionend"),ou=new Map,tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){ou.set(e,n),Fn(n,[e])}for(var ts=0;ts<tl.length;ts++){var rs=tl[ts],jf=rs.toLowerCase(),Cf=rs[0].toUpperCase()+rs.slice(1);Sn(jf,"on"+Cf)}Sn(ru,"onAnimationEnd");Sn(iu,"onAnimationIteration");Sn(su,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(au,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),If=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function rl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ep(r,n,void 0,e),e.currentTarget=null}function lu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;rl(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;rl(i,l,u),s=c}}}if(Yr)throw e=Ms,Yr=!1,Ms=null,e}function D(e,n){var t=n[Vs];t===void 0&&(t=n[Vs]=new Set);var r=e+"__bubble";t.has(r)||(cu(n,e,2,!1),t.add(r))}function is(e,n,t){var r=0;n&&(r|=4),cu(t,e,r,n)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[jr]){e[jr]=!0,gc.forEach(function(t){t!=="selectionchange"&&(If.has(t)||is(t,!1,e),is(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jr]||(n[jr]=!0,is("selectionchange",!1,n))}}function cu(e,n,t,r){switch(Vc(n)){case 1:var i=Fp;break;case 4:i=Hp;break;default:i=_a}t=i.bind(null,n,t,e),i=void 0,!Os||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ss(e,n,t,r,i){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Lc(function(){var u=s,h=Ta(t),m=[];e:{var g=ou.get(e);if(g!==void 0){var w=Oa,y=e;switch(e){case"keypress":if(zr(t)===0)break e;case"keydown":case"keyup":w=rf;break;case"focusin":y="focus",w=Ji;break;case"focusout":y="blur",w=Ji;break;case"beforeblur":case"afterblur":w=Ji;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=of;break;case ru:case iu:case su:w=Yp;break;case au:w=cf;break;case"scroll":w=Bp;break;case"wheel":w=df;break;case"copy":case"cut":case"paste":w=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qo}var x=(n&4)!==0,N=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Vt(d,p),v!=null&&x.push(Zt(d,v,f)))),N)break;d=d.return}0<x.length&&(g=new w(g,y,null,t,h),m.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==_s&&(y=t.relatedTarget||t.fromElement)&&(Pn(y)||y[Xe]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=t.relatedTarget||t.toElement,w=u,y=y?Pn(y):null,y!==null&&(N=Hn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(x=$o,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=qo,v="onPointerLeave",p="onPointerEnter",d="pointer"),N=w==null?g:Xn(w),f=y==null?g:Xn(y),g=new x(v,d+"leave",w,t,h),g.target=N,g.relatedTarget=f,v=null,Pn(h)===u&&(x=new x(p,d+"enter",y,t,h),x.target=f,x.relatedTarget=N,v=x),N=v,w&&y)n:{for(x=w,p=y,d=0,f=x;f;f=$n(f))d++;for(f=0,v=p;v;v=$n(v))f++;for(;0<d-f;)x=$n(x),d--;for(;0<f-d;)p=$n(p),f--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break n;x=$n(x),p=$n(p)}x=null}else x=null;w!==null&&il(m,g,w,x,!1),y!==null&&N!==null&&il(m,N,y,x,!0)}}e:{if(g=u?Xn(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=yf;else if(Ko(g))if(Jc)S=bf;else{S=wf;var C=xf}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=kf);if(S&&(S=S(e,u))){Xc(m,S,t,h);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Is(g,"number",g.value)}switch(C=u?Xn(u):window,e){case"focusin":(Ko(C)||C.contentEditable==="true")&&(Qn=C,Ws=u,Ut=null);break;case"focusout":Ut=Ws=Qn=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,nl(m,t,h);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":nl(m,t,h)}var I;if(Da)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Yn?Qc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Yc&&t.locale!=="ko"&&(Yn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Yn&&(I=qc()):(cn=h,Aa="value"in cn?cn.value:cn.textContent,Yn=!0)),C=Zr(u,T),0<C.length&&(T=new Vo(T,e,null,t,h),m.push({event:T,listeners:C}),I?T.data=I:(I=Kc(t),I!==null&&(T.data=I)))),(I=ff?mf(e,t):hf(e,t))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(h=new Vo("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:u}),h.data=I))}lu(m,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vt(e,t),s!=null&&r.unshift(Zt(e,s,i)),s=Vt(e,n),s!=null&&r.push(Zt(e,s,i))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function il(e,n,t,r,i){for(var s=n._reactName,o=[];t!==null&&t!==r;){var l=t,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Vt(t,s),c!=null&&o.unshift(Zt(t,c,l))):i||(c=Vt(t,s),c!=null&&o.push(Zt(t,c,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Tf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function sl(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Rf,"")}function Cr(e,n,t){if(n=sl(n),sl(e)!==n&&t)throw Error(b(425))}function ei(){}var Hs=null,Bs=null;function Gs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,al=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof al<"u"?function(e){return al.resolve(null).then(e).catch(_f)}:$s;function _f(e){setTimeout(function(){throw e})}function as(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Qt(n)}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ol(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+wt,er="__reactProps$"+wt,Xe="__reactContainer$"+wt,Vs="__reactEvents$"+wt,Af="__reactListeners$"+wt,Of="__reactHandles$"+wt;function Pn(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ol(e);e!==null;){if(t=e[Fe])return t;e=ol(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Si(e){return e[er]||null}var qs=[],Jn=-1;function Nn(e){return{current:e}}function z(e){0>Jn||(e.current=qs[Jn],qs[Jn]=null,Jn--)}function M(e,n){Jn++,qs[Jn]=e.current,e.current=n}var bn={},oe=Nn(bn),me=Nn(!1),Mn=bn;function dt(e,n){var t=e.type.contextTypes;if(!t)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function ni(){z(me),z(oe)}function ll(e,n,t){if(oe.current!==bn)throw Error(b(168));M(oe,n),M(me,t)}function uu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(b(108,yp(e)||"Unknown",i));return B({},t,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Mn=oe.current,M(oe,e),M(me,me.current),!0}function cl(e,n,t){var r=e.stateNode;if(!r)throw Error(b(169));t?(e=uu(e,n,Mn),r.__reactInternalMemoizedMergedChildContext=e,z(me),z(oe),M(oe,e)):z(me),M(me,t)}var Ve=null,Ni=!1,os=!1;function du(e){Ve===null?Ve=[e]:Ve.push(e)}function Mf(e){Ni=!0,du(e)}function En(){if(!os&&Ve!==null){os=!0;var e=0,n=O;try{var t=Ve;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,Ni=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Mc(Ra,En),i}finally{O=n,os=!1}}return null}var Zn=[],et=0,ri=null,ii=0,Ee=[],je=0,Dn=null,qe=1,Ye="";function Tn(e,n){Zn[et++]=ii,Zn[et++]=ri,ri=e,ii=n}function pu(e,n,t){Ee[je++]=qe,Ee[je++]=Ye,Ee[je++]=Dn,Dn=e;var r=qe;e=Ye;var i=32-Me(r)-1;r&=~(1<<i),t+=1;var s=32-Me(n)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qe=1<<32-Me(n)+i|t<<i|r,Ye=s+e}else qe=1<<s|t<<i|r,Ye=e}function Ua(e){e.return!==null&&(Tn(e,1),pu(e,1,0))}function Wa(e){for(;e===ri;)ri=Zn[--et],Zn[et]=null,ii=Zn[--et],Zn[et]=null;for(;e===Dn;)Dn=Ee[--je],Ee[je]=null,Ye=Ee[--je],Ee[je]=null,qe=Ee[--je],Ee[je]=null}var ke=null,we=null,U=!1,Ae=null;function fu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ul(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ke=e,we=hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ke=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:qe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ke=e,we=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(U){var n=we;if(n){var t=n;if(!ul(e,n)){if(Ys(e))throw Error(b(418));n=hn(t.nextSibling);var r=ke;n&&ul(e,n)?fu(r,t):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(Ys(e))throw Error(b(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function dl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ir(e){if(e!==ke)return!1;if(!U)return dl(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Gs(e.type,e.memoizedProps)),n&&(n=we)){if(Ys(e))throw mu(),Error(b(418));for(;n;)fu(e,n),n=hn(n.nextSibling)}if(dl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=ke?hn(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=we;e;)e=hn(e.nextSibling)}function pt(){we=ke=null,U=!1}function Fa(e){Ae===null?Ae=[e]:Ae.push(e)}var Df=en.ReactCurrentBatchConfig;function It(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,e));var i=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},n._stringRef=s,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Tr(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function pl(e){var n=e._init;return n(e._payload)}function hu(e){function n(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=xn(p,d),p.index=0,p.sibling=null,p}function s(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,v){return d===null||d.tag!==6?(d=ms(f,p.mode,v),d.return=p,d):(d=i(d,f),d.return=p,d)}function c(p,d,f,v){var S=f.type;return S===qn?h(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&pl(S)===d.type)?(v=i(d,f.props),v.ref=It(p,d,f),v.return=p,v):(v=$r(f.type,f.key,f.props,null,p.mode,v),v.ref=It(p,d,f),v.return=p,v)}function u(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=hs(f,p.mode,v),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function h(p,d,f,v,S){return d===null||d.tag!==7?(d=On(f,p.mode,v,S),d.return=p,d):(d=i(d,f),d.return=p,d)}function m(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ms(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return f=$r(d.type,d.key,d.props,null,p.mode,f),f.ref=It(p,null,d),f.return=p,f;case Vn:return d=hs(d,p.mode,f),d.return=p,d;case rn:var v=d._init;return m(p,v(d._payload),f)}if(Lt(d)||St(d))return d=On(d,p.mode,f,null),d.return=p,d;Tr(p,d)}return null}function g(p,d,f,v){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case yr:return f.key===S?c(p,d,f,v):null;case Vn:return f.key===S?u(p,d,f,v):null;case rn:return S=f._init,g(p,d,S(f._payload),v)}if(Lt(f)||St(f))return S!==null?null:h(p,d,f,v,null);Tr(p,f)}return null}function w(p,d,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,l(d,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yr:return p=p.get(v.key===null?f:v.key)||null,c(d,p,v,S);case Vn:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,S);case rn:var C=v._init;return w(p,d,f,C(v._payload),S)}if(Lt(v)||St(v))return p=p.get(f)||null,h(d,p,v,S,null);Tr(d,v)}return null}function y(p,d,f,v){for(var S=null,C=null,I=d,T=d=0,W=null;I!==null&&T<f.length;T++){I.index>T?(W=I,I=null):W=I.sibling;var P=g(p,I,f[T],v);if(P===null){I===null&&(I=W);break}e&&I&&P.alternate===null&&n(p,I),d=s(P,d,T),C===null?S=P:C.sibling=P,C=P,I=W}if(T===f.length)return t(p,I),U&&Tn(p,T),S;if(I===null){for(;T<f.length;T++)I=m(p,f[T],v),I!==null&&(d=s(I,d,T),C===null?S=I:C.sibling=I,C=I);return U&&Tn(p,T),S}for(I=r(p,I);T<f.length;T++)W=w(I,p,T,f[T],v),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?T:W.key),d=s(W,d,T),C===null?S=W:C.sibling=W,C=W);return e&&I.forEach(function(ve){return n(p,ve)}),U&&Tn(p,T),S}function x(p,d,f,v){var S=St(f);if(typeof S!="function")throw Error(b(150));if(f=S.call(f),f==null)throw Error(b(151));for(var C=S=null,I=d,T=d=0,W=null,P=f.next();I!==null&&!P.done;T++,P=f.next()){I.index>T?(W=I,I=null):W=I.sibling;var ve=g(p,I,P.value,v);if(ve===null){I===null&&(I=W);break}e&&I&&ve.alternate===null&&n(p,I),d=s(ve,d,T),C===null?S=ve:C.sibling=ve,C=ve,I=W}if(P.done)return t(p,I),U&&Tn(p,T),S;if(I===null){for(;!P.done;T++,P=f.next())P=m(p,P.value,v),P!==null&&(d=s(P,d,T),C===null?S=P:C.sibling=P,C=P);return U&&Tn(p,T),S}for(I=r(p,I);!P.done;T++,P=f.next())P=w(I,p,T,P.value,v),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?T:P.key),d=s(P,d,T),C===null?S=P:C.sibling=P,C=P);return e&&I.forEach(function(kt){return n(p,kt)}),U&&Tn(p,T),S}function N(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===qn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case yr:e:{for(var S=f.key,C=d;C!==null;){if(C.key===S){if(S=f.type,S===qn){if(C.tag===7){t(p,C.sibling),d=i(C,f.props.children),d.return=p,p=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&pl(S)===C.type){t(p,C.sibling),d=i(C,f.props),d.ref=It(p,C,f),d.return=p,p=d;break e}t(p,C);break}else n(p,C);C=C.sibling}f.type===qn?(d=On(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=$r(f.type,f.key,f.props,null,p.mode,v),v.ref=It(p,d,f),v.return=p,p=v)}return o(p);case Vn:e:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=hs(f,p.mode,v),d.return=p,p=d}return o(p);case rn:return C=f._init,N(p,d,C(f._payload),v)}if(Lt(f))return y(p,d,f,v);if(St(f))return x(p,d,f,v);Tr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(t(p,d.sibling),d=i(d,f),d.return=p,p=d):(t(p,d),d=ms(f,p.mode,v),d.return=p,p=d),o(p)):t(p,d)}return N}var ft=hu(!0),gu=hu(!1),si=Nn(null),ai=null,nt=null,Ha=null;function Ba(){Ha=nt=ai=null}function Ga(e){var n=si.current;z(si),e._currentValue=n}function Ks(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ai=e,Ha=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:n,next:null},nt===null){if(ai===null)throw Error(b(308));nt=e,ai.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return n}var Ln=null;function $a(e){Ln===null?Ln=[e]:Ln.push(e)}function vu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,$a(n)):(t.next=i.next,i.next=t),n.interleaved=t,Je(e,r)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Je(e,t)}return i=r.interleaved,i===null?(n.next=n,$a(r)):(n.next=i.next,i.next=n),r.interleaved=n,Je(e,t)}function Ur(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Pa(e,t)}}function fl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oi(e,n,t,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,h=u=c=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(g=n,w=t,x.tag){case 1:if(y=x.payload,typeof y=="function"){m=y.call(w,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(w,m,g):y,g==null)break e;m=B({},m,g);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=w,c=m):h=h.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=m}}function ml(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var fr={},Be=Nn(fr),nr=Nn(fr),tr=Nn(fr);function _n(e){if(e===fr)throw Error(b(174));return e}function qa(e,n){switch(M(tr,n),M(nr,e),M(Be,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rs(n,e)}z(Be),M(Be,n)}function mt(){z(Be),z(nr),z(tr)}function xu(e){_n(tr.current);var n=_n(Be.current),t=Rs(n,e.type);n!==t&&(M(nr,e),M(Be,t))}function Ya(e){nr.current===e&&(z(Be),z(nr))}var F=Nn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ls=[];function Qa(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var Wr=en.ReactCurrentDispatcher,cs=en.ReactCurrentBatchConfig,zn=0,H=null,K=null,Z=null,ci=!1,Wt=!1,rr=0,zf=0;function ie(){throw Error(b(321))}function Ka(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ze(e[t],n[t]))return!1;return!0}function Xa(e,n,t,r,i,s){if(zn=s,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wr.current=e===null||e.memoizedState===null?Hf:Bf,e=t(r,i),Wt){s=0;do{if(Wt=!1,rr=0,25<=s)throw Error(b(301));s+=1,Z=K=null,n.updateQueue=null,Wr.current=Gf,e=t(r,i)}while(Wt)}if(Wr.current=ui,n=K!==null&&K.next!==null,zn=0,Z=K=H=null,ci=!1,n)throw Error(b(300));return e}function Ja(){var e=rr!==0;return rr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Re(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function ir(e,n){return typeof n=="function"?n(e):n}function us(e){var n=Re(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=K,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var h=u.lane;if((zn&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,H.lanes|=h,Un|=h}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,ze(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Un|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ds(e){var n=Re(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ze(s,n.memoizedState)||(fe=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function wu(){}function ku(e,n){var t=H,r=Re(),i=n(),s=!ze(r.memoizedState,i);if(s&&(r.memoizedState=i,fe=!0),r=r.queue,Za(Nu.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,sr(9,Su.bind(null,t,r,i,n),void 0,null),ee===null)throw Error(b(349));zn&30||bu(t,n,i)}return i}function bu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Su(e,n,t,r){n.value=t,n.getSnapshot=r,Eu(n)&&ju(e)}function Nu(e,n,t){return t(function(){Eu(n)&&ju(e)})}function Eu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ze(e,t)}catch{return!0}}function ju(e){var n=Je(e,1);n!==null&&De(n,e,1,-1)}function hl(e){var n=We();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Ff.bind(null,H,e),[n.memoizedState,e]}function sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Cu(){return Re().memoizedState}function Fr(e,n,t,r){var i=We();H.flags|=e,i.memoizedState=sr(1|n,t,void 0,r===void 0?null:r)}function Ei(e,n,t,r){var i=Re();r=r===void 0?null:r;var s=void 0;if(K!==null){var o=K.memoizedState;if(s=o.destroy,r!==null&&Ka(r,o.deps)){i.memoizedState=sr(n,t,s,r);return}}H.flags|=e,i.memoizedState=sr(1|n,t,s,r)}function gl(e,n){return Fr(8390656,8,e,n)}function Za(e,n){return Ei(2048,8,e,n)}function Iu(e,n){return Ei(4,2,e,n)}function Tu(e,n){return Ei(4,4,e,n)}function Ru(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pu(e,n,t){return t=t!=null?t.concat([e]):null,Ei(4,4,Ru.bind(null,n,e),t)}function eo(){}function Lu(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ka(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _u(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ka(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Au(e,n,t){return zn&21?(ze(t,n)||(t=Uc(),H.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function Uf(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),n()}finally{O=t,cs.transition=r}}function Ou(){return Re().memoizedState}function Wf(e,n,t){var r=yn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Mu(e))Du(n,t);else if(t=vu(e,n,t,r),t!==null){var i=ce();De(t,e,r,i),zu(t,n,r)}}function Ff(e,n,t){var r=yn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Du(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var o=n.lastRenderedState,l=s(o,t);if(i.hasEagerState=!0,i.eagerState=l,ze(l,o)){var c=n.interleaved;c===null?(i.next=i,$a(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=vu(e,n,i,r),t!==null&&(i=ce(),De(t,e,r,i),zu(t,n,r))}}function Mu(e){var n=e.alternate;return e===H||n!==null&&n===H}function Du(e,n){Wt=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Pa(e,t)}}var ui={readContext:Te,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Hf={readContext:Te,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:gl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4194308,4,Ru.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fr(4,2,e,n)},useMemo:function(e,n){var t=We();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=We();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Wf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:hl,useDebugValue:eo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=hl(!1),n=e[0];return e=Uf.bind(null,e[1]),We().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=We();if(U){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),ee===null)throw Error(b(349));zn&30||bu(r,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,gl(Nu.bind(null,r,s,e),[e]),r.flags|=2048,sr(9,Su.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=We(),n=ee.identifierPrefix;if(U){var t=Ye,r=qe;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bf={readContext:Te,useCallback:Lu,useContext:Te,useEffect:Za,useImperativeHandle:Pu,useInsertionEffect:Iu,useLayoutEffect:Tu,useMemo:_u,useReducer:us,useRef:Cu,useState:function(){return us(ir)},useDebugValue:eo,useDeferredValue:function(e){var n=Re();return Au(n,K.memoizedState,e)},useTransition:function(){var e=us(ir)[0],n=Re().memoizedState;return[e,n]},useMutableSource:wu,useSyncExternalStore:ku,useId:Ou,unstable_isNewReconciler:!1},Gf={readContext:Te,useCallback:Lu,useContext:Te,useEffect:Za,useImperativeHandle:Pu,useInsertionEffect:Iu,useLayoutEffect:Tu,useMemo:_u,useReducer:ds,useRef:Cu,useState:function(){return ds(ir)},useDebugValue:eo,useDeferredValue:function(e){var n=Re();return K===null?n.memoizedState=e:Au(n,K.memoizedState,e)},useTransition:function(){var e=ds(ir)[0],n=Re().memoizedState;return[e,n]},useMutableSource:wu,useSyncExternalStore:ku,useId:Ou,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ji={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),i=yn(e),s=Qe(r,i);s.payload=n,t!=null&&(s.callback=t),n=gn(e,s,i),n!==null&&(De(n,e,i,r),Ur(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),i=yn(e),s=Qe(r,i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=gn(e,s,i),n!==null&&(De(n,e,i,r),Ur(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=yn(e),i=Qe(t,r);i.tag=2,n!=null&&(i.callback=n),n=gn(e,i,r),n!==null&&(De(n,e,r,t),Ur(n,e,r))}};function vl(e,n,t,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(i,s):!0}function Uu(e,n,t){var r=!1,i=bn,s=n.contextType;return typeof s=="object"&&s!==null?s=Te(s):(i=he(n)?Mn:oe.current,r=n.contextTypes,s=(r=r!=null)?dt(e,i):bn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ji,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function yl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ji.enqueueReplaceState(n,n.state,null)}function Js(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Va(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=Te(s):(s=he(n)?Mn:oe.current,i.context=dt(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Xs(e,n,s,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ji.enqueueReplaceState(i,i.state,null),oi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ht(e,n){try{var t="",r=n;do t+=vp(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function ps(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){pi||(pi=!0,ca=r),Zs(e,n)},t}function Fu(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Zs(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Zs(e,n),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function xl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new $f;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=sm.bind(null,e,n,t),n.then(e,e))}function wl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kl(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,gn(t,n,1))),t.lanes|=1),e)}var Vf=en.ReactCurrentOwner,fe=!1;function le(e,n,t,r){n.child=e===null?gu(n,null,t,r):ft(n,e.child,t,r)}function bl(e,n,t,r,i){t=t.render;var s=n.ref;return lt(n,i),r=Xa(e,n,t,r,s,i),t=Ja(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(U&&t&&Ua(n),n.flags|=1,le(e,n,r,i),n.child)}function Sl(e,n,t,r,i){if(e===null){var s=t.type;return typeof s=="function"&&!lo(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Hu(e,n,s,r,i)):(e=$r(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(o,r)&&e.ref===n.ref)return Ze(e,n,i)}return n.flags|=1,e=xn(s,r),e.ref=n.ref,e.return=n,n.child=e}function Hu(e,n,t,r,i){if(e!==null){var s=e.memoizedProps;if(Xt(s,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Ze(e,n,i)}return ea(e,n,t,r,i)}function Bu(e,n,t){var r=n.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(rt,ye),ye|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(rt,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,M(rt,ye),ye|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,M(rt,ye),ye|=r;return le(e,n,i,t),n.child}function Gu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ea(e,n,t,r,i){var s=he(t)?Mn:oe.current;return s=dt(n,s),lt(n,i),t=Xa(e,n,t,r,s,i),r=Ja(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(U&&r&&Ua(n),n.flags|=1,le(e,n,t,i),n.child)}function Nl(e,n,t,r,i){if(he(t)){var s=!0;ti(n)}else s=!1;if(lt(n,i),n.stateNode===null)Hr(e,n),Uu(n,t,r),Js(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var c=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Te(u):(u=he(t)?Mn:oe.current,u=dt(n,u));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yl(n,o,r,u),sn=!1;var g=n.memoizedState;o.state=g,oi(n,r,o,i),c=n.memoizedState,l!==r||g!==c||me.current||sn?(typeof h=="function"&&(Xs(n,t,h,r),c=n.memoizedState),(l=sn||vl(n,t,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,yu(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Le(n.type,l),o.props=u,m=n.pendingProps,g=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=Te(c):(c=he(t)?Mn:oe.current,c=dt(n,c));var w=t.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&yl(n,o,r,c),sn=!1,g=n.memoizedState,o.state=g,oi(n,r,o,i);var y=n.memoizedState;l!==m||g!==y||me.current||sn?(typeof w=="function"&&(Xs(n,t,w,r),y=n.memoizedState),(u=sn||vl(n,t,u,r,g,y,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return na(e,n,t,r,s,i)}function na(e,n,t,r,i,s){Gu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&cl(n,t,!1),Ze(e,n,s);r=n.stateNode,Vf.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ft(n,e.child,null,s),n.child=ft(n,null,l,s)):le(e,n,l,s),n.memoizedState=r.state,i&&cl(n,t,!0),n.child}function $u(e){var n=e.stateNode;n.pendingContext?ll(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ll(e,n.context,!1),qa(e,n.containerInfo)}function El(e,n,t,r,i){return pt(),Fa(i),n.flags|=256,le(e,n,t,r),n.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,n,t){var r=n.pendingProps,i=F.current,s=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(F,i&1),e===null)return Qs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,s?(r=n.mode,s=n.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ti(o,r,0,null),e=On(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=ra(t),n.memoizedState=ta,e):no(n,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qf(e,n,o,r,l,i,t);if(s){s=r.fallback,o=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=xn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xn(l,s):(s=On(s,o,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,o=e.child.memoizedState,o=o===null?ra(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~t,n.memoizedState=ta,r}return s=e.child,e=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function no(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Rr(e,n,t,r){return r!==null&&Fa(r),ft(n,e.child,null,t),e=no(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qf(e,n,t,r,i,s,o){if(t)return n.flags&256?(n.flags&=-257,r=ps(Error(b(422))),Rr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,i=n.mode,r=Ti({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&ft(n,e.child,null,o),n.child.memoizedState=ra(o),n.memoizedState=ta,s);if(!(n.mode&1))return Rr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=ps(s,r,void 0),Rr(e,n,o,r)}if(l=(o&e.childLanes)!==0,fe||l){if(r=ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Je(e,i),De(r,e,i,-1))}return oo(),r=ps(Error(b(421))),Rr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=am.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,we=hn(i.nextSibling),ke=n,U=!0,Ae=null,e!==null&&(Ee[je++]=qe,Ee[je++]=Ye,Ee[je++]=Dn,qe=e.id,Ye=e.overflow,Dn=n),n=no(n,r.children),n.flags|=4096,n)}function jl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ks(e.return,n,t)}function fs(e,n,t,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function qu(e,n,t){var r=n.pendingProps,i=r.revealOrder,s=r.tail;if(le(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jl(e,t,n);else if(e.tag===19)jl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(F,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),fs(n,!1,i,t,s);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}fs(n,!0,t,null,s);break;case"together":fs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yf(e,n,t){switch(n.tag){case 3:$u(n),pt();break;case 5:xu(n);break;case 1:he(n.type)&&ti(n);break;case 4:qa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;M(si,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?Vu(e,n,t):(M(F,F.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);M(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return qu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Bu(e,n,t)}return Ze(e,n,t)}var Yu,ia,Qu,Ku;Yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ia=function(){};Qu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,_n(Be.current);var s=null;switch(t){case"input":i=js(e,i),r=js(e,r),s=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":i=Ts(e,i),r=Ts(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}Ps(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gt.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(s||(s=[]),s.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};Ku=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Qf(e,n,t){var r=n.pendingProps;switch(Wa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return he(n.type)&&ni(),se(n),null;case 3:return r=n.stateNode,mt(),z(me),z(oe),Qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(pa(Ae),Ae=null))),ia(e,n),se(n),null;case 5:Ya(n);var i=_n(tr.current);if(t=n.type,e!==null&&n.stateNode!=null)Qu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(b(166));return se(n),null}if(e=_n(Be.current),Ir(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Fe]=n,r[er]=s,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<At.length;i++)D(At[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Oo(r,s),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},D("invalid",r);break;case"textarea":Do(r,s),D("invalid",r)}Ps(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cr(r.textContent,l,e),i=["children",""+l]):Gt.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&D("scroll",r)}switch(t){case"input":xr(r),Mo(r,s,!0);break;case"textarea":xr(r),zo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ei)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Fe]=n,e[er]=r,Yu(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ls(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<At.length;i++)D(At[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Oo(e,r),i=js(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":Do(e,r),i=Ts(e,r),D("invalid",e);break;default:i=r}Ps(t,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Cc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ec(e,c)):s==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&$t(e,c):typeof c=="number"&&$t(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gt.hasOwnProperty(s)?c!=null&&s==="onScroll"&&D("scroll",e):c!=null&&Ea(e,s,c,o))}switch(t){case"input":xr(e),Mo(e,r,!1);break;case"textarea":xr(e),zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?it(e,!!r.multiple,s,!1):r.defaultValue!=null&&it(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Ku(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(b(166));if(t=_n(tr.current),_n(Be.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(s=r.nodeValue!==t)&&(e=ke,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return se(n),null;case 13:if(z(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&n.mode&1&&!(n.flags&128))mu(),pt(),n.flags|=98560,s=!1;else if(s=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Fe]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),s=!1}else Ae!==null&&(pa(Ae),Ae=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?X===0&&(X=3):oo())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return mt(),ia(e,n),e===null&&Jt(n.stateNode.containerInfo),se(n),null;case 10:return Ga(n.type._context),se(n),null;case 17:return he(n.type)&&ni(),se(n),null;case 19:if(z(F),s=n.memoizedState,s===null)return se(n),null;if(r=(n.flags&128)!==0,o=s.rendering,o===null)if(r)Tt(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=li(e),o!==null){for(n.flags|=128,Tt(s,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(F,F.current&1|2),n.child}e=e.sibling}s.tail!==null&&Y()>gt&&(n.flags|=128,r=!0,Tt(s,!1),n.lanes=4194304)}else{if(!r)if(e=li(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return se(n),null}else 2*Y()-s.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,Tt(s,!1),n.lanes=4194304);s.isBackwards?(o.sibling=n.child,n.child=o):(t=s.last,t!==null?t.sibling=o:n.child=o,s.last=o)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Y(),n.sibling=null,t=F.current,M(F,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ao(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function Kf(e,n){switch(Wa(n),n.tag){case 1:return he(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),z(me),z(oe),Qa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ya(n),null;case 13:if(z(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(F),null;case 4:return mt(),null;case 10:return Ga(n.type._context),null;case 22:case 23:return ao(),null;case 24:return null;default:return null}}var Pr=!1,ae=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,E=null;function tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function sa(e,n,t){try{t()}catch(r){G(e,n,r)}}var Cl=!1;function Jf(e,n){if(Hs=Xr,e=nu(),za(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,l=-1,c=-1,u=0,h=0,m=e,g=null;n:for(;;){for(var w;m!==t||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break n;if(g===t&&++u===i&&(l=o),g===s&&++h===r&&(c=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bs={focusedElem:e,selectionRange:t},Xr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,N=y.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),N);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return y=Cl,Cl=!1,y}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&sa(n,t,s)}i=i.next}while(i!==r)}}function Ci(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function aa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Xu(e){var n=e.alternate;n!==null&&(e.alternate=null,Xu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[er],delete n[Vs],delete n[Af],delete n[Of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Il(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(oa(e,n,t),e=e.sibling;e!==null;)oa(e,n,t),e=e.sibling}function la(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(la(e,n,t),e=e.sibling;e!==null;)la(e,n,t),e=e.sibling}var ne=null,_e=!1;function tn(e,n,t){for(t=t.child;t!==null;)Zu(e,n,t),t=t.sibling}function Zu(e,n,t){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(xi,t)}catch{}switch(t.tag){case 5:ae||tt(t,n);case 6:var r=ne,i=_e;ne=null,tn(e,n,t),ne=r,_e=i,ne!==null&&(_e?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(_e?(e=ne,t=t.stateNode,e.nodeType===8?as(e.parentNode,t):e.nodeType===1&&as(e,t),Qt(e)):as(ne,t.stateNode));break;case 4:r=ne,i=_e,ne=t.stateNode.containerInfo,_e=!0,tn(e,n,t),ne=r,_e=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sa(t,n,o),i=i.next}while(i!==r)}tn(e,n,t);break;case 1:if(!ae&&(tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){G(t,n,l)}tn(e,n,t);break;case 21:tn(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,tn(e,n,t),ae=r):tn(e,n,t);break;default:tn(e,n,t)}}function Tl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Xf),n.forEach(function(r){var i=om.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,_e=!1;break e;case 3:ne=l.stateNode.containerInfo,_e=!0;break e;case 4:ne=l.stateNode.containerInfo,_e=!0;break e}l=l.return}if(ne===null)throw Error(b(160));Zu(s,o,i),ne=null,_e=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ed(n,e),n=n.sibling}function ed(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Ue(e),r&4){try{Ft(3,e,e.return),Ci(3,e)}catch(x){G(e,e.return,x)}try{Ft(5,e,e.return)}catch(x){G(e,e.return,x)}}break;case 1:Pe(n,e),Ue(e),r&512&&t!==null&&tt(t,t.return);break;case 5:if(Pe(n,e),Ue(e),r&512&&t!==null&&tt(t,t.return),e.flags&32){var i=e.stateNode;try{$t(i,"")}catch(x){G(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=t!==null?t.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&bc(i,s),Ls(l,o);var u=Ls(l,s);for(o=0;o<c.length;o+=2){var h=c[o],m=c[o+1];h==="style"?Cc(i,m):h==="dangerouslySetInnerHTML"?Ec(i,m):h==="children"?$t(i,m):Ea(i,h,m,u)}switch(l){case"input":Cs(i,s);break;case"textarea":Sc(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?it(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?it(i,!!s.multiple,s.defaultValue,!0):it(i,!!s.multiple,s.multiple?[]:"",!1))}i[er]=s}catch(x){G(e,e.return,x)}}break;case 6:if(Pe(n,e),Ue(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){G(e,e.return,x)}}break;case 3:if(Pe(n,e),Ue(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(x){G(e,e.return,x)}break;case 4:Pe(n,e),Ue(e);break;case 13:Pe(n,e),Ue(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(io=Y())),r&4&&Tl(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(u=ae)||h,Pe(n,e),ae=u):Pe(n,e),Ue(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(m=E=h;E!==null;){switch(g=E,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ft(4,g,g.return);break;case 1:tt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(x){G(r,t,x)}}break;case 5:tt(g,g.return);break;case 22:if(g.memoizedState!==null){Pl(m);continue}}w!==null?(w.return=g,E=w):Pl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=jc("display",o))}catch(x){G(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){G(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(n,e),Ue(e),r&4&&Tl(e);break;case 21:break;default:Pe(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ju(t)){var r=t;break e}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($t(i,""),r.flags&=-33);var s=Il(e);la(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Il(e);oa(e,l,o);break;default:throw Error(b(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zf(e,n,t){E=e,nd(e)}function nd(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pr;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ae;l=Pr;var u=ae;if(Pr=o,(ae=c)&&!u)for(E=i;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?Ll(i):c!==null?(c.return=o,E=c):Ll(i);for(;s!==null;)E=s,nd(s),s=s.sibling;E=i,Pr=l,ae=u}Rl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Rl(e)}}function Rl(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||Ci(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&ml(n,s,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ml(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Qt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ae||n.flags&512&&aa(n)}catch(g){G(n,n.return,g)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function Pl(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Ll(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ci(4,n)}catch(c){G(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){G(n,i,c)}}var s=n.return;try{aa(n)}catch(c){G(n,s,c)}break;case 5:var o=n.return;try{aa(n)}catch(c){G(n,o,c)}}}catch(c){G(n,n.return,c)}if(n===e){E=null;break}var l=n.sibling;if(l!==null){l.return=n.return,E=l;break}E=n.return}}var em=Math.ceil,di=en.ReactCurrentDispatcher,to=en.ReactCurrentOwner,Ie=en.ReactCurrentBatchConfig,A=0,ee=null,Q=null,te=0,ye=0,rt=Nn(0),X=0,ar=null,Un=0,Ii=0,ro=0,Ht=null,pe=null,io=0,gt=1/0,$e=null,pi=!1,ca=null,vn=null,Lr=!1,un=null,fi=0,Bt=0,ua=null,Br=-1,Gr=0;function ce(){return A&6?Y():Br!==-1?Br:Br=Y()}function yn(e){return e.mode&1?A&2&&te!==0?te&-te:Df.transition!==null?(Gr===0&&(Gr=Uc()),Gr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Vc(e.type)),e):1}function De(e,n,t,r){if(50<Bt)throw Bt=0,ua=null,Error(b(185));ur(e,t,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(Ii|=t),X===4&&ln(e,te)),ge(e,r),t===1&&A===0&&!(n.mode&1)&&(gt=Y()+500,Ni&&En()))}function ge(e,n){var t=e.callbackNode;Mp(e,n);var r=Kr(e,e===ee?te:0);if(r===0)t!==null&&Fo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fo(t),n===1)e.tag===0?Mf(_l.bind(null,e)):du(_l.bind(null,e)),Lf(function(){!(A&6)&&En()}),t=null;else{switch(Wc(r)){case 1:t=Ra;break;case 4:t=Dc;break;case 16:t=Qr;break;case 536870912:t=zc;break;default:t=Qr}t=cd(t,td.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function td(e,n){if(Br=-1,Gr=0,A&6)throw Error(b(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=Kr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=mi(e,r);else{n=r;var i=A;A|=2;var s=id();(ee!==e||te!==n)&&($e=null,gt=Y()+500,An(e,n));do try{rm();break}catch(l){rd(e,l)}while(!0);Ba(),di.current=s,A=i,Q!==null?n=0:(ee=null,te=0,n=X)}if(n!==0){if(n===2&&(i=Ds(e),i!==0&&(r=i,n=da(e,i))),n===1)throw t=ar,An(e,0),ln(e,r),ge(e,Y()),t;if(n===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!nm(i)&&(n=mi(e,r),n===2&&(s=Ds(e),s!==0&&(r=s,n=da(e,s))),n===1))throw t=ar,An(e,0),ln(e,r),ge(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(b(345));case 2:Rn(e,pe,$e);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=io+500-Y(),10<n)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$s(Rn.bind(null,e,pe,$e),n);break}Rn(e,pe,$e);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Me(r);s=1<<o,o=n[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*em(r/1960))-r,10<r){e.timeoutHandle=$s(Rn.bind(null,e,pe,$e),r);break}Rn(e,pe,$e);break;case 5:Rn(e,pe,$e);break;default:throw Error(b(329))}}}return ge(e,Y()),e.callbackNode===t?td.bind(null,e):null}function da(e,n){var t=Ht;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=mi(e,n),e!==2&&(n=pe,pe=t,n!==null&&pa(n)),e}function pa(e){pe===null?pe=e:pe.push.apply(pe,e)}function nm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!ze(s(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~ro,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function _l(e){if(A&6)throw Error(b(327));ct();var n=Kr(e,0);if(!(n&1))return ge(e,Y()),null;var t=mi(e,n);if(e.tag!==0&&t===2){var r=Ds(e);r!==0&&(n=r,t=da(e,r))}if(t===1)throw t=ar,An(e,0),ln(e,n),ge(e,Y()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,pe,$e),ge(e,Y()),null}function so(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(gt=Y()+500,Ni&&En())}}function Wn(e){un!==null&&un.tag===0&&!(A&6)&&ct();var n=A;A|=1;var t=Ie.transition,r=O;try{if(Ie.transition=null,O=1,e)return e()}finally{O=r,Ie.transition=t,A=n,!(A&6)&&En()}}function ao(){ye=rt.current,z(rt)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pf(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:mt(),z(me),z(oe),Qa();break;case 5:Ya(r);break;case 4:mt();break;case 13:z(F);break;case 19:z(F);break;case 10:Ga(r.type._context);break;case 22:case 23:ao()}t=t.return}if(ee=e,Q=e=xn(e.current,null),te=ye=n,X=0,ar=null,ro=Ii=Un=0,pe=Ht=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Ln=null}return e}function rd(e,n){do{var t=Q;try{if(Ba(),Wr.current=ui,ci){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ci=!1}if(zn=0,Z=K=H=null,Wt=!1,rr=0,to.current=null,t===null||t.return===null){X=1,ar=n,Q=null;break}e:{var s=e,o=t.return,l=t,c=n;if(n=te,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=wl(o);if(w!==null){w.flags&=-257,kl(w,o,l,s,n),w.mode&1&&xl(s,u,n),n=w,c=u;var y=n.updateQueue;if(y===null){var x=new Set;x.add(c),n.updateQueue=x}else y.add(c);break e}else{if(!(n&1)){xl(s,u,n),oo();break e}c=Error(b(426))}}else if(U&&l.mode&1){var N=wl(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kl(N,o,l,s,n),Fa(ht(c,l));break e}}s=c=ht(c,l),X!==4&&(X=2),Ht===null?Ht=[s]:Ht.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var p=Wu(s,c,n);fl(s,p);break e;case 1:l=c;var d=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vn===null||!vn.has(f)))){s.flags|=65536,n&=-n,s.lanes|=n;var v=Fu(s,l,n);fl(s,v);break e}}s=s.return}while(s!==null)}ad(t)}catch(S){n=S,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function id(){var e=di.current;return di.current=ui,e===null?ui:e}function oo(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Un&268435455)&&!(Ii&268435455)||ln(ee,te)}function mi(e,n){var t=A;A|=2;var r=id();(ee!==e||te!==n)&&($e=null,An(e,n));do try{tm();break}catch(i){rd(e,i)}while(!0);if(Ba(),A=t,di.current=r,Q!==null)throw Error(b(261));return ee=null,te=0,X}function tm(){for(;Q!==null;)sd(Q)}function rm(){for(;Q!==null&&!Cp();)sd(Q)}function sd(e){var n=ld(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?ad(e):Q=n,to.current=null}function ad(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Kf(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(t=Qf(t,n,ye),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);X===0&&(X=5)}function Rn(e,n,t){var r=O,i=Ie.transition;try{Ie.transition=null,O=1,im(e,n,t,r)}finally{Ie.transition=i,O=r}return null}function im(e,n,t,r){do ct();while(un!==null);if(A&6)throw Error(b(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Dp(e,s),e===ee&&(Q=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lr||(Lr=!0,cd(Qr,function(){return ct(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ie.transition,Ie.transition=null;var o=O;O=1;var l=A;A|=4,to.current=null,Jf(e,t),ed(t,e),Nf(Bs),Xr=!!Hs,Bs=Hs=null,e.current=t,Zf(t),Ip(),A=l,O=o,Ie.transition=s}else e.current=t;if(Lr&&(Lr=!1,un=e,fi=i),s=e.pendingLanes,s===0&&(vn=null),Pp(t.stateNode),ge(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(pi)throw pi=!1,e=ca,ca=null,e;return fi&1&&e.tag!==0&&ct(),s=e.pendingLanes,s&1?e===ua?Bt++:(Bt=0,ua=e):Bt=0,En(),null}function ct(){if(un!==null){var e=Wc(fi),n=Ie.transition,t=O;try{if(Ie.transition=null,O=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,fi=0,A&6)throw Error(b(331));var i=A;for(A|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Ft(8,h,s)}var m=h.child;if(m!==null)m.return=h,E=m;else for(;E!==null;){h=E;var g=h.sibling,w=h.return;if(Xu(h),h===u){E=null;break}if(g!==null){g.return=w,E=g;break}E=w}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ft(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,E=p;break e}E=s.return}}var d=e.current;for(E=d;E!==null;){o=E;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,E=f;else e:for(o=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ci(9,l)}}catch(S){G(l,l.return,S)}if(l===o){E=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,E=v;break e}E=l.return}}if(A=i,En(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{O=t,Ie.transition=n}}return!1}function Al(e,n,t){n=ht(t,n),n=Wu(e,n,1),e=gn(e,n,1),n=ce(),e!==null&&(ur(e,1,n),ge(e,n))}function G(e,n,t){if(e.tag===3)Al(e,e,t);else for(;n!==null;){if(n.tag===3){Al(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=ht(t,e),e=Fu(n,e,1),n=gn(n,e,1),e=ce(),n!==null&&(ur(n,1,e),ge(n,e));break}}n=n.return}}function sm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(X===4||X===3&&(te&130023424)===te&&500>Y()-io?An(e,0):ro|=t),ge(e,n)}function od(e,n){n===0&&(e.mode&1?(n=br,br<<=1,!(br&130023424)&&(br=4194304)):n=1);var t=ce();e=Je(e,n),e!==null&&(ur(e,n,t),ge(e,t))}function am(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),od(e,t)}function om(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(n),od(e,t)}var ld;ld=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,Yf(e,n,t);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&pu(n,ii,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hr(e,n),e=n.pendingProps;var i=dt(n,oe.current);lt(n,t),i=Xa(null,n,r,e,i,t);var s=Ja();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(s=!0,ti(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Va(n),i.updater=ji,n.stateNode=i,i._reactInternals=n,Js(n,r,e,t),n=na(null,n,r,!0,s,t)):(n.tag=0,U&&s&&Ua(n),le(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=cm(r),e=Le(r,e),i){case 0:n=ea(null,n,r,e,t);break e;case 1:n=Nl(null,n,r,e,t);break e;case 11:n=bl(null,n,r,e,t);break e;case 14:n=Sl(null,n,r,Le(r.type,e),t);break e}throw Error(b(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),ea(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Nl(e,n,r,i,t);case 3:e:{if($u(n),e===null)throw Error(b(387));r=n.pendingProps,s=n.memoizedState,i=s.element,yu(e,n),oi(n,r,null,t);var o=n.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=ht(Error(b(423)),n),n=El(e,n,r,t,i);break e}else if(r!==i){i=ht(Error(b(424)),n),n=El(e,n,r,t,i);break e}else for(we=hn(n.stateNode.containerInfo.firstChild),ke=n,U=!0,Ae=null,t=gu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=Ze(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return xu(n),e===null&&Qs(n),r=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Gs(r,i)?o=null:s!==null&&Gs(r,s)&&(n.flags|=32),Gu(e,n),le(e,n,o,t),n.child;case 6:return e===null&&Qs(n),null;case 13:return Vu(e,n,t);case 4:return qa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ft(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),bl(e,n,r,i,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,s=n.memoizedProps,o=i.value,M(si,r._currentValue),r._currentValue=o,s!==null)if(ze(s.value,o)){if(s.children===i.children&&!me.current){n=Ze(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Qe(-1,t&-t),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),Ks(s.return,t,n),l.lanes|=t;break}c=c.next}}else if(s.tag===10)o=s.type===n.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Ks(o,t,n),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}le(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lt(n,t),i=Te(i),r=r(i),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),Sl(e,n,r,i,t);case 15:return Hu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Hr(e,n),n.tag=1,he(r)?(e=!0,ti(n)):e=!1,lt(n,t),Uu(n,r,i),Js(n,r,i,t),na(null,n,r,!0,e,t);case 19:return qu(e,n,t);case 22:return Bu(e,n,t)}throw Error(b(156,n.tag))};function cd(e,n){return Mc(e,n)}function lm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new lm(e,n,t,r)}function lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===Ia)return 14}return 2}function xn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,i,s){var o=2;if(r=e,typeof e=="function")lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return On(t.children,i,s,n);case ja:o=8,i|=8;break;case bs:return e=Ce(12,t,n,i|2),e.elementType=bs,e.lanes=s,e;case Ss:return e=Ce(13,t,n,i),e.elementType=Ss,e.lanes=s,e;case Ns:return e=Ce(19,t,n,i),e.elementType=Ns,e.lanes=s,e;case xc:return Ti(t,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vc:o=10;break e;case yc:o=9;break e;case Ca:o=11;break e;case Ia:o=14;break e;case rn:o=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ce(o,t,n,i),n.elementType=e,n.type=r,n.lanes=s,n}function On(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=xc,e.lanes=t,e.stateNode={isHidden:!1},e}function ms(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function hs(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function um(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function co(e,n,t,r,i,s,o,l,c){return e=new um(e,n,t,l,c),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ce(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(s),e}function dm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ud(e){if(!e)return bn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(he(t))return uu(e,t,n)}return n}function dd(e,n,t,r,i,s,o,l,c){return e=co(t,r,!0,e,i,s,o,l,c),e.context=ud(null),t=e.current,r=ce(),i=yn(t),s=Qe(r,i),s.callback=n??null,gn(t,s,i),e.current.lanes=i,ur(e,i,r),ge(e,r),e}function Ri(e,n,t,r){var i=n.current,s=ce(),o=yn(i);return t=ud(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(s,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gn(i,n,o),e!==null&&(De(e,i,o,s),Ur(e,i,o)),o}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ol(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function uo(e,n){Ol(e,n),(e=e.alternate)&&Ol(e,n)}function pm(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function po(e){this._internalRoot=e}Pi.prototype.render=po.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));Ri(e,n,null,null)};Pi.prototype.unmount=po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){Ri(null,e,null,null)}),n[Xe]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&$c(e)}};function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ml(){}function fm(e,n,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hi(o);s.call(u)}}var o=dd(n,r,e,0,null,!1,!1,"",Ml);return e._reactRootContainer=o,e[Xe]=o.current,Jt(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=hi(c);l.call(u)}}var c=co(e,0,!1,null,null,!1,!1,"",Ml);return e._reactRootContainer=c,e[Xe]=c.current,Jt(e.nodeType===8?e.parentNode:e),Wn(function(){Ri(n,c,t,r)}),c}function _i(e,n,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=hi(o);l.call(c)}}Ri(n,o,e,i)}else o=fm(t,n,e,i,r);return hi(o)}Fc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_t(n.pendingLanes);t!==0&&(Pa(n,t|1),ge(n,Y()),!(A&6)&&(gt=Y()+500,En()))}break;case 13:Wn(function(){var r=Je(e,1);if(r!==null){var i=ce();De(r,e,1,i)}}),uo(e,1)}};La=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=ce();De(n,e,134217728,t)}uo(e,134217728)}};Hc=function(e){if(e.tag===13){var n=yn(e),t=Je(e,n);if(t!==null){var r=ce();De(t,e,n,r)}uo(e,n)}};Bc=function(){return O};Gc=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};As=function(e,n,t){switch(n){case"input":if(Cs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Si(r);if(!i)throw Error(b(90));kc(r),Cs(r,i)}}}break;case"textarea":Sc(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};Rc=so;Pc=Wn;var mm={usingClientEntryPoint:!1,Events:[pr,Xn,Si,Ic,Tc,so]},Rt={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hm={bundleType:Rt.bundleType,version:Rt.version,rendererPackageName:Rt.rendererPackageName,rendererConfig:Rt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Rt.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{xi=_r.inject(hm),He=_r}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fo(n))throw Error(b(200));return dm(e,n,null,t)};Se.createRoot=function(e,n){if(!fo(e))throw Error(b(299));var t=!1,r="",i=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=co(e,1,!1,null,null,t,!1,r,i),e[Xe]=n.current,Jt(e.nodeType===8?e.parentNode:e),new po(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ac(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Wn(e)};Se.hydrate=function(e,n,t){if(!Li(n))throw Error(b(200));return _i(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!fo(e))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=pd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=dd(n,null,e,1,t??null,i,!1,s,o),e[Xe]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Pi(n)};Se.render=function(e,n,t){if(!Li(n))throw Error(b(200));return _i(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Li(e))throw Error(b(40));return e._reactRootContainer?(Wn(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Se.unstable_batchedUpdates=so;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Li(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return _i(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd)}catch(e){console.error(e)}}fd(),fc.exports=Se;var gm=fc.exports,Dl=gm;ws.createRoot=Dl.createRoot,ws.hydrateRoot=Dl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or(){return or=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},or.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const zl="popstate";function vm(e){e===void 0&&(e={});function n(i,s){let{pathname:o="/",search:l="",hash:c=""}=Bn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),fa("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof s=="string"?s:gi(s))}function r(i,s){Ai(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return xm(n,t,r,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ai(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ym(){return Math.random().toString(36).substr(2,8)}function Ul(e,n){return{usr:e.state,key:e.key,idx:n}}function fa(e,n,t,r){return t===void 0&&(t=null),or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Bn(n):n,{state:t,key:n&&n.key||r||ym()})}function gi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Bn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function xm(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=dn.Pop,c=null,u=h();u==null&&(u=0,o.replaceState(or({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=dn.Pop;let N=h(),p=N==null?null:N-u;u=N,c&&c({action:l,location:x.location,delta:p})}function g(N,p){l=dn.Push;let d=fa(x.location,N,p);t&&t(d,N),u=h()+1;let f=Ul(d,u),v=x.createHref(d);try{o.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}s&&c&&c({action:l,location:x.location,delta:1})}function w(N,p){l=dn.Replace;let d=fa(x.location,N,p);t&&t(d,N),u=h();let f=Ul(d,u),v=x.createHref(d);o.replaceState(f,"",v),s&&c&&c({action:l,location:x.location,delta:0})}function y(N){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:gi(N);return d=d.replace(/ $/,"%20"),$(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(i,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zl,m),c=N,()=>{i.removeEventListener(zl,m),c=null}},createHref(N){return n(i,N)},createURL:y,encodeLocation(N){let p=y(N);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:w,go(N){return o.go(N)}};return x}var Wl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wl||(Wl={}));function wm(e,n,t){return t===void 0&&(t="/"),km(e,n,t)}function km(e,n,t,r){let i=typeof n=="string"?Bn(n):n,s=vt(i.pathname||"/",t);if(s==null)return null;let o=md(e);bm(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=_m(s);l=Pm(o[c],u)}return l}function md(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&($(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=wn([r,c.relativePath]),h=t.concat(c);s.children&&s.children.length>0&&($(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),md(s.children,n,h,u)),!(s.path==null&&!s.index)&&n.push({path:u,score:Tm(u,s.index),routesMeta:h})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of hd(s.path))i(s,o,c)}),n}function hd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hd(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function bm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Rm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Sm=/^:[\w-]+$/,Nm=3,Em=2,jm=1,Cm=10,Im=-2,Fl=e=>e==="*";function Tm(e,n){let t=e.split("/"),r=t.length;return t.some(Fl)&&(r+=Im),n&&(r+=Em),t.filter(i=>!Fl(i)).reduce((i,s)=>i+(Sm.test(s)?Nm:s===""?jm:Cm),r)}function Rm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Pm(e,n,t){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,h=s==="/"?n:n.slice(s.length)||"/",m=ma({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),g=c.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:wn([s,m.pathname]),pathnameBase:zm(wn([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=wn([s,m.pathnameBase]))}return o}function ma(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Lm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let x=l[m]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[m];return w&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Lm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ai(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function _m(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ai(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function vt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Om=e=>Am.test(e);function Mm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Bn(e):e,s;if(t)if(Om(t))s=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Ai(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?s=Hl(t.substring(1),"/"):s=Hl(t,n)}else s=n;return{pathname:s,search:Um(r),hash:Wm(i)}}function Hl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function gs(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function gd(e,n){let t=Dm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function vd(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Bn(e):(i=or({},e),$(!i.pathname||!i.pathname.includes("?"),gs("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),gs("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),gs("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=t;else{let m=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?n[m]:"/"}let c=Mm(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),zm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Um=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yd=["post","put","patch","delete"];new Set(yd);const Hm=["get",...yd];new Set(Hm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lr.apply(this,arguments)}const Oi=k.createContext(null),xd=k.createContext(null),jn=k.createContext(null),Mi=k.createContext(null),nn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),wd=k.createContext(null);function Bm(e,n){let{relative:t}=n===void 0?{}:n;mr()||$(!1);let{basename:r,navigator:i}=k.useContext(jn),{hash:s,pathname:o,search:l}=Di(e,{relative:t}),c=o;return r!=="/"&&(c=o==="/"?r:wn([r,o])),i.createHref({pathname:c,search:l,hash:s})}function mr(){return k.useContext(Mi)!=null}function Gn(){return mr()||$(!1),k.useContext(Mi).location}function kd(e){k.useContext(jn).static||k.useLayoutEffect(e)}function mo(){let{isDataRoute:e}=k.useContext(nn);return e?ih():Gm()}function Gm(){mr()||$(!1);let e=k.useContext(Oi),{basename:n,future:t,navigator:r}=k.useContext(jn),{matches:i}=k.useContext(nn),{pathname:s}=Gn(),o=JSON.stringify(gd(i,t.v7_relativeSplatPath)),l=k.useRef(!1);return kd(()=>{l.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=vd(u,JSON.parse(o),s,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:wn([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,o,s,e])}const bd=k.createContext(null);function Sd(){return k.useContext(bd)}function $m(e){let n=k.useContext(nn).outlet;return n&&k.createElement(bd.Provider,{value:e},n)}function Vm(){let{matches:e}=k.useContext(nn),n=e[e.length-1];return n?n.params:{}}function Di(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=k.useContext(jn),{matches:i}=k.useContext(nn),{pathname:s}=Gn(),o=JSON.stringify(gd(i,r.v7_relativeSplatPath));return k.useMemo(()=>vd(e,JSON.parse(o),s,t==="path"),[e,o,s,t])}function qm(e,n){return Ym(e,n)}function Ym(e,n,t,r){mr()||$(!1);let{navigator:i}=k.useContext(jn),{matches:s}=k.useContext(nn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Gn(),h;if(n){var m;let N=typeof n=="string"?Bn(n):n;c==="/"||(m=N.pathname)!=null&&m.startsWith(c)||$(!1),h=N}else h=u;let g=h.pathname||"/",w=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=wm(e,{pathname:w}),x=Zm(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:wn([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:wn([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,t,r);return n&&x?k.createElement(Mi.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:dn.Pop}},x):x}function Qm(){let e=rh(),n=Fm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),t?k.createElement("pre",{style:i},t):null,null)}const Km=k.createElement(Qm,null);class Xm extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(nn.Provider,{value:this.props.routeContext},k.createElement(wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jm(e){let{routeContext:n,match:t,children:r}=e,i=k.useContext(Oi);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(nn.Provider,{value:n},r)}function Zm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var s;if(!t)return null;if(t.errors)e=t.matches;else if((s=r)!=null&&s.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||$(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:g,errors:w}=t,y=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let w,y=!1,x=null,N=null;t&&(w=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||Km,c&&(u<0&&g===0?(sh("route-fallback"),y=!0,N=null):u===g&&(y=!0,N=m.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,g+1)),d=()=>{let f;return w?f=x:y?f=N:m.route.Component?f=k.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=h,k.createElement(Jm,{match:m,routeContext:{outlet:h,matches:p,isDataRoute:t!=null},children:f})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?k.createElement(Xm,{location:t.location,revalidation:t.revalidation,component:x,error:w,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Nd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nd||{}),Ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ed||{});function eh(e){let n=k.useContext(Oi);return n||$(!1),n}function nh(e){let n=k.useContext(xd);return n||$(!1),n}function th(e){let n=k.useContext(nn);return n||$(!1),n}function jd(e){let n=th(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function rh(){var e;let n=k.useContext(wd),t=nh(),r=jd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function ih(){let{router:e}=eh(Nd.UseNavigateStable),n=jd(Ed.UseNavigateStable),t=k.useRef(!1);return kd(()=>{t.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,lr({fromRouteId:n},s)))},[e,n])}const Bl={};function sh(e,n,t){Bl[e]||(Bl[e]=!0)}function ah(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function oh(e){return $m(e.context)}function Ge(e){$(!1)}function lh(e){let{basename:n="/",children:t=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1,future:l}=e;mr()&&$(!1);let c=n.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:o,future:lr({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=Bn(r));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:y="default"}=r,x=k.useMemo(()=>{let N=vt(h,c);return N==null?null:{location:{pathname:N,search:m,hash:g,state:w,key:y},navigationType:i}},[c,h,m,g,w,y,i]);return x==null?null:k.createElement(jn.Provider,{value:u},k.createElement(Mi.Provider,{children:t,value:x}))}function ch(e){let{children:n,location:t}=e;return qm(ha(n),t)}new Promise(()=>{});function ha(e,n){n===void 0&&(n=[]);let t=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...n,i];if(r.type===k.Fragment){t.push.apply(t,ha(r.props.children,s));return}r.type!==Ge&&$(!1),!r.props.index||!r.props.children||$(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ha(r.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vi.apply(this,arguments)}function Cd(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dh(e,n){return e.button===0&&(!n||n==="_self")&&!uh(e)}function ga(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(i=>[t,i]):[[t,r]])},[]))}function ph(e,n){let t=ga(e);return n&&n.forEach((r,i)=>{t.has(i)||n.getAll(i).forEach(s=>{t.append(i,s)})}),t}const fh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],hh="6";try{window.__reactRouterVersion=hh}catch{}const gh=k.createContext({isTransitioning:!1}),vh="startTransition",Gl=ip[vh];function yh(e){let{basename:n,children:t,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=vm({window:i,v5Compat:!0}));let o=s.current,[l,c]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=k.useCallback(m=>{u&&Gl?Gl(()=>c(m)):c(m)},[c,u]);return k.useLayoutEffect(()=>o.listen(h),[o,h]),k.useEffect(()=>ah(r),[r]),k.createElement(lh,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=k.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:h,viewTransition:m}=n,g=Cd(n,fh),{basename:w}=k.useContext(jn),y,x=!1;if(typeof u=="string"&&wh.test(u)&&(y=u,xh))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=vt(v.pathname,w);v.origin===f.origin&&S!=null?u=S+v.search+v.hash:x=!0}catch{}let N=Bm(u,{relative:i}),p=bh(u,{replace:o,state:l,target:c,preventScrollReset:h,relative:i,viewTransition:m});function d(f){r&&r(f),f.defaultPrevented||p(f)}return k.createElement("a",vi({},g,{href:y||N,onClick:x||s?r:d,ref:t,target:c}))}),an=k.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:u,children:h}=n,m=Cd(n,mh),g=Di(c,{relative:m.relative}),w=Gn(),y=k.useContext(xd),{navigator:x,basename:N}=k.useContext(jn),p=y!=null&&Nh(g)&&u===!0,d=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,f=w.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(f=f.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&N&&(v=vt(v,N)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=f===d||!o&&f.startsWith(d)&&f.charAt(S)==="/",I=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),T={isActive:C,isPending:I,isTransitioning:p},W=C?r:void 0,P;typeof s=="function"?P=s(T):P=[s,C?"active":null,I?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ve=typeof l=="function"?l(T):l;return k.createElement(xe,vi({},m,{"aria-current":W,className:P,ref:t,style:ve,to:c,viewTransition:u}),typeof h=="function"?h(T):h)});var va;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(va||(va={}));var $l;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($l||($l={}));function kh(e){let n=k.useContext(Oi);return n||$(!1),n}function bh(e,n){let{target:t,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=n===void 0?{}:n,c=mo(),u=Gn(),h=Di(e,{relative:o});return k.useCallback(m=>{if(dh(m,t)){m.preventDefault();let g=r!==void 0?r:gi(u)===gi(h);c(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,h,r,i,t,e,s,o,l])}function Sh(e){let n=k.useRef(ga(e)),t=k.useRef(!1),r=Gn(),i=k.useMemo(()=>ph(r.search,t.current?null:n.current),[r.search]),s=mo(),o=k.useCallback((l,c)=>{const u=ga(typeof l=="function"?l(i):l);t.current=!0,s("?"+u,c)},[s,i]);return[i,o]}function Nh(e,n){n===void 0&&(n={});let t=k.useContext(gh);t==null&&$(!1);let{basename:r}=kh(va.useViewTransitionState),i=Di(e,{relative:n.relative});if(!t.isTransitioning)return!1;let s=vt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=vt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ma(i.pathname,o)!=null||ma(i.pathname,s)!=null}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Id=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=k.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},c)=>k.createElement("svg",{ref:c,...jh,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Id("lucide",i),...l},[...o.map(([u,h])=>k.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(e,n)=>{const t=k.forwardRef(({className:r,...i},s)=>k.createElement(Ch,{ref:s,iconNode:n,className:Id(`lucide-${Eh(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=V("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=V("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=V("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=V("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=V("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=V("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=V("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=V("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=V("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=V("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=V("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=V("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=V("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vl={to:"/signal-stack",label:"SIGNAL_STACK"};function Uh(){const e=mo(),[n,t]=k.useState(""),[r,i]=k.useState(!1),s=k.useRef(null),o=k.useRef(null);function l(c){c.preventDefault();const u=n.trim();u&&e(`/search?q=${encodeURIComponent(u)}`)}return k.useEffect(()=>{if(!r)return;function c(h){const m=s.current,g=o.current;m&&!m.contains(h.target)&&g&&!g.contains(h.target)&&i(!1)}function u(h){h.key==="Escape"&&i(!1)}return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",u)}},[r]),a.jsxs("nav",{className:"relative border-b border-is-border bg-is-bg sticky top-0 z-50",children:[a.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 flex items-center min-w-0 h-12 gap-3 sm:gap-4 md:gap-8",children:[a.jsx(an,{to:"/",className:"font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0",children:"Invisible Signals™"}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsxs(an,{to:Vl.to,className:({isActive:c})=>`hidden sm:flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border ${c?"border-is-primary text-is-primary bg-is-primary/10":"border-is-primary/40 text-is-primary hover:bg-is-primary/10 hover:border-is-primary"}`,children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),Vl.label]}),a.jsx("span",{className:"hidden sm:block w-px h-4 bg-is-border shrink-0"}),a.jsx("div",{className:"hidden md:flex items-center",children:[{to:"/frameworks",label:"_01_FRAMEWORKS"},{to:"/prompts",label:"_02_PROMPTS"}].map(c=>a.jsx(an,{to:c.to,className:({isActive:u})=>`px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${u?"text-is-text":"text-is-secondary hover:text-is-text"}`,children:c.label},c.to))}),a.jsxs("form",{onSubmit:l,className:"flex items-center gap-0 border border-is-border bg-is-surface min-w-0",children:[a.jsx("span",{className:"pl-2 sm:pl-3 pr-2 flex items-center text-is-secondary",children:a.jsx(Oh,{size:12})}),a.jsx("input",{type:"text",value:n,onChange:c=>t(c.target.value),placeholder:"QUERY_SYSTEM...",className:"bg-transparent font-mono text-xs tracking-widest text-is-text placeholder:text-is-dim outline-none py-1.5 pr-3 w-24 sm:w-40 md:w-48 min-w-0"})]}),a.jsx("div",{className:"md:hidden ml-auto",children:a.jsx("button",{onClick:()=>i(c=>!c),"aria-expanded":r,"aria-label":"Toggle menu",ref:o,className:"p-2 text-is-text",children:r?a.jsx(zh,{size:18}):a.jsx(Ah,{size:18})})}),a.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]}),r&&a.jsx("div",{ref:s,className:"md:hidden absolute inset-x-0 top-full bg-is-bg border-t border-is-border z-40",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-3 flex flex-col gap-2",children:[a.jsx(an,{to:"/signal-stack",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-text",children:"SIGNAL_STACK"}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx(an,{to:"/frameworks",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_01_FRAMEWORKS"}),a.jsx(an,{to:"/prompts",onClick:()=>i(!1),className:"px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text",children:"_02_PROMPTS"})]}),a.jsxs("div",{className:"flex items-center justify-between pt-2",children:[a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"V0.1"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all",children:"DEPLOY_SIGNAL"})]})]})})]})}const bo=`# Quick Signal Prompts

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
`,So=`---
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
`,No=`---
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
`,Eo=`---
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
`,jo=`---
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
`;function Oe({color:e="blue",children:n}){const t={blue:"bg-is-primary/10 text-is-primary border-is-primary/30",coral:"bg-is-alert/10 text-is-alert border-is-alert/30",gold:"bg-is-warning/10 text-is-warning border-is-warning/30",dim:"bg-transparent text-is-dim border-is-border"};return a.jsxs("span",{className:`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs uppercase tracking-widest ${t[e]??t.dim}`,children:[e!=="dim"&&a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e==="blue"?"bg-is-primary":e==="coral"?"bg-is-alert":"bg-is-warning"}`}),n]})}function Td(e){const n=e.match(/^---\n([\s\S]*?)\n---\n/),t={};n&&n[1].replace(/^([\w-]+):\s*(.+)$/gm,(l,c,u)=>{t[c]=u.trim()});const i=(n?e.slice(n[0].length):e).split(/\n---\n/),s=[];if(i[1])for(const l of i[1].matchAll(/^\| (\d+) \| ([^|]+?) \| ([^|]+?) \|$/gm))s.push({score:parseInt(l[1]),rating:l[2].trim(),meaning:l[3].trim()});const o=[];for(let l=2;l<i.length;l++){const c=i[l].trim();if(!c)continue;const u=Wh(c);u&&o.push(u)}return{frontmatter:t,scoringRows:s,layers:o}}function Wh(e){const n=e.match(/^## Layer (\d+) — (.+)$/m);if(!n)return null;const t=parseInt(n[1]),r=n[2].trim(),i=`l${t}`,s=e.match(/\*\*([^*\n]+)\*\*/),o=s?s[1].trim():"",l=e.match(/\*\*[^*\n]+\*\*\n+([\s\S]*?)\n+\*\*Strong signals\*\*/),c=l?l[1].trim():"",u=e.match(/\*\*Strong signals\*\*\n+((?:- .+\n?)+)/),h=u?(u[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],m=e.match(/\*\*Weak signals\*\*\n+((?:- .+\n?)+)/),g=m?(m[1].match(/^- (.+)$/gm)??[]).map(d=>d.slice(2).trim()):[],w=e.match(/> Weak: "([^"]+)"/),y=e.match(/> Strong: "([^"]+)"/),x=w?w[1]:"",N=y?y[1]:"",p=[];for(const d of e.matchAll(/^\| ([A-Za-z][^|]*?) \| ([^|]+?) \|$/gm)){const f=d[1].trim(),v=d[2].trim();f!=="Level"&&p.push({level:f,description:v})}return{num:t,slug:i,name:r,tagline:o,description:c,strongSignals:h,weakSignals:g,exampleWeak:x,exampleStrong:N,levels:p}}function Rd(e){var s;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(o,l,c)=>{r[l]=c.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function Co(e,n){const t=Rd(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---)/m),i=r?r[1].split(`

`)[0].trim():"",s=n.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/),o=s?s[1].trim():"",l=e.split("/").pop().replace(".md","");return{id:l,title:t.title||l,category:t.category||"general",tags:t.tags||[],purpose:i,text:o}}const Pd=`---
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
`,Fh=Object.assign({"../../../prompts/quick-signal/README.md":bo,"../../../prompts/quick-signal/github-profile-check.md":So,"../../../prompts/quick-signal/interview-answer-check.md":No,"../../../prompts/quick-signal/linkedin-profile-check.md":Eo,"../../../prompts/quick-signal/resume-bullet-check.md":jo}),ys=["resume-bullet-check","interview-answer-check"],Hh=Object.entries(Fh).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>Co(e,n)).filter(e=>ys.includes(e.id)).sort((e,n)=>ys.indexOf(e.id)-ys.indexOf(n.id));function Bh(){const e=[{label:"TECHNICAL_DEPTH",pct:91,color:"bg-is-secondary"},{label:"OWNERSHIP",pct:78,color:"bg-is-primary"},{label:"EXECUTION",pct:84,color:"bg-is-warning"},{label:"BUSINESS_IMPACT",pct:42,color:"bg-is-alert"},{label:"LEADERSHIP",pct:61,color:"bg-is-primary"}];return a.jsxs("div",{className:"space-y-3",children:[e.map(({label:n,pct:t,color:r})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:n}),a.jsxs("span",{className:"font-mono text-xs text-is-text",children:[t,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:a.jsx("div",{className:`h-full ${r}`,style:{width:`${t}%`}})})]},n)),a.jsxs("div",{className:"mt-4 pt-4 border-t border-is-border",children:[a.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-1",children:"▶ PRIMARY_SIGNAL_GAP"}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed",children:"Business impact is implied but not explicitly stated."})]})]})}function Gh({text:e}){const[n,t]=k.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return a.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(go,{size:12}):a.jsx(yo,{size:12}),n?"COPIED":"COPY"]})}function $h(){return a.jsxs("div",{className:"relative w-40 h-40 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 border border-is-primary/20 rounded-full"}),a.jsx("div",{className:"absolute inset-4 border border-is-primary/30 rounded-full"}),a.jsx("div",{className:"absolute inset-8 border border-is-primary/50 rounded-full"}),a.jsx("div",{className:"absolute inset-12 border border-is-primary/70 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-is-primary rounded-full"}),a.jsx("div",{className:"absolute top-4 right-8",style:{animation:"orbit-cw 7s linear infinite",transformOrigin:"-42px 64px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-alert",style:{animation:"orbit-ccw 7s linear infinite"}})}),a.jsx("div",{className:"absolute bottom-6 left-6",style:{animation:"orbit-cw 5.5s linear infinite",transformOrigin:"56px -50px"},children:a.jsx("div",{className:"w-1.5 h-1.5 bg-is-warning",style:{animation:"orbit-ccw 5.5s linear infinite"}})})]})}const{layers:ql}=Td(Pd),Yl=[{freq:"440Hz",barColor:"bg-is-secondary",textColor:"text-is-secondary",freqClass:"border-is-secondary/50 text-is-secondary",pct:100},{freq:"880Hz",barColor:"bg-is-alert",textColor:"text-is-alert",freqClass:"border-is-alert/50 text-is-alert",pct:85},{freq:"1.2GHz",barColor:"bg-is-warning",textColor:"text-is-warning",freqClass:"border-is-warning/50 text-is-warning",pct:70},{freq:"2.4GHz",barColor:"bg-is-primary",textColor:"text-is-primary",freqClass:"border-is-primary/50 text-is-primary",pct:60},{freq:"4.8GHz",barColor:"bg-is-secondary",textColor:"text-is-secondary",freqClass:"border-is-secondary/50 text-is-secondary",pct:55},{freq:"9.6GHz",barColor:"bg-is-alert",textColor:"text-is-alert",freqClass:"border-is-alert/50 text-is-alert",pct:45},{freq:"19GHz",barColor:"bg-is-warning",textColor:"text-is-warning",freqClass:"border-is-warning/50 text-is-warning",pct:40},{freq:"38GHz",barColor:"bg-is-primary",textColor:"text-is-primary",freqClass:"border-is-primary/50 text-is-primary",pct:35}],Vh=[{to:"/frameworks",tag:"FRAMEWORKS",icon:"⬡",title:"Frameworks",desc:"No-code meta models for evaluating architectural judgment beyond the job log.",pill:"SIGNAL_LOOP",pillColor:"blue"},{to:"/prompts",tag:"PROMPTS",icon:"···",title:"Prompts",desc:"System-level instructions to analyze career metadata and generate telemetry goals.",pill:"SIGNAL_MAP",pillColor:"coral"},{to:"/templates",tag:"TEMPLATES",icon:"◻",title:"Templates",desc:"Structured markdown documents for auditing, scoring, and improving your career signals.",pill:"SIGNAL_ACTIVE",pillColor:"gold"}],qh=[{num:"01",title:"VALUE MODULATION",body:"Stop describing tasks; start describing outcomes. High-value work is invisible until translated in the language of organizational growth."},{num:"02",title:"ALGORITHMIC SHARPNESS",body:"Use AI to retrieve value from your narrative. Intelligence tools should work for you; they should diagnose your architectural logic."},{num:"03",title:"SIGNAL INTERPRETATION",body:"Hiring systems are human and machine signal processors. Your objective is to raise the signal-to-noise ratio in every transmission."},{num:"04",title:"REPEATABLE TELEMETRY",body:"Career growth is a series of repeatable processes for surfacing and presenting progress. Lucky signals are not engineered; signals are permanent."}],Yh=[{id:"RESUME",label:"Resume",desc:"Analyze ownership, impact, technical depth, and clarity.",Icon:Rh},{id:"LINKEDIN",label:"LinkedIn Profile",desc:"Surface the signals your headline and summary transmit.",Icon:_h},{id:"GITHUB",label:"GitHub Profile",desc:"Evaluate technical depth and contribution patterns.",Icon:Ph},{id:"INTERVIEW",label:"Interview Answer",desc:"Detect ownership, specificity, and leadership signal.",Icon:zi},{id:"PROMOTION",label:"Promotion Packet",desc:"Identify gaps in scope, impact, and cross-functional influence.",Icon:Ui},{id:"LEADERSHIP",label:"Leadership Communication",desc:"Assess clarity, strategic framing, and credibility signals.",Icon:Wi}];function Qh(){const[e,n]=k.useState(!1);return a.jsxs("div",{className:"w-full",children:[a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20 md:py-32",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-10",children:[a.jsx(Oe,{color:"blue",children:"● SYSTEM STATUS: ONLINE // ESTABLISHED"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary tracking-widest hidden sm:block",children:"SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6",children:["DETECT YOUR SIGNALS",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-alert",children:"IN SECONDS."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed max-w-xl mb-10",children:"Analyze resumes, interview answers, GitHub profiles, and leadership communication. Surface the signals recruiters, hiring managers, and leadership teams actually see."}),a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsx("button",{onClick:()=>{var t;return(t=document.getElementById("quick-prompts"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"is-btn-primary",children:"RUN_QUICK_CHECK"}),a.jsx(xe,{to:"/signal-stack",className:"is-btn-ghost",children:"SIGNAL_STACK →"})]})]}),a.jsxs("div",{className:"is-panel p-4 relative",children:[a.jsx("div",{className:"absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary",children:"SIG_TRACE_01"}),a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),a.jsx(Bh,{})]})]})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("div",{className:"is-label mb-2",children:"ANALYZE_TARGETS"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"WHAT CAN YOU ANALYZE?"}),a.jsx("p",{className:"font-body text-base text-is-text mt-3",children:"Paste content. Detect signals. Improve clarity."})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-px bg-is-border",children:Yh.map(({id:t,label:r,desc:i,Icon:s})=>a.jsxs("div",{className:"bg-is-bg p-5 flex flex-col gap-2 hover:bg-is-surface transition-colors",children:[a.jsx(s,{size:20,className:"text-is-primary mb-1"}),a.jsx("div",{className:"is-label",children:t}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:r}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed",children:i})]},t))})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4 mb-10",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"BUILT_ON"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_STACK"}),a.jsx("div",{className:"font-mono text-xs text-is-secondary mt-2",children:"L1–L8 ANALYSIS FRAMEWORK"})]}),a.jsx(xe,{to:"/signal-stack",className:"font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors",children:"ENTER SIGNAL_STACK →"})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px bg-is-border",children:[(e?ql:ql.slice(0,3)).map(({num:t,slug:r,name:i,tagline:s},o)=>{const l=Yl[o]??Yl[0];return a.jsxs(xe,{to:`/signal-stack/${r}`,className:"group bg-is-bg p-5 flex flex-col gap-3 hover:bg-is-surface transition-colors",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("span",{className:"font-mono text-xs text-is-secondary",children:[String(t).padStart(2,"0"),"_LAYER"]}),a.jsxs("span",{className:`font-mono text-xs px-1.5 py-0.5 border ${l.freqClass} shrink-0`,children:["FREQ: ",l.freq]})]}),a.jsx("div",{className:"font-mono text-sm font-semibold text-is-text uppercase tracking-wide",children:i}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed flex-1",children:s}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[a.jsx("div",{className:"h-0.5 bg-is-surface-high flex-1",children:a.jsx("div",{className:`h-full ${l.barColor}`,style:{width:`${l.pct}%`}})}),a.jsxs("span",{className:`font-mono text-xs shrink-0 ${l.textColor}`,children:[l.pct,"%"]})]})]},r)}),!e&&a.jsxs("button",{onClick:()=>n(!0),className:"group bg-is-bg p-5 flex flex-col items-center justify-center gap-3 hover:bg-is-surface transition-colors w-full",children:[a.jsx("div",{className:"font-mono text-2xl text-is-dim group-hover:text-is-text transition-colors",children:"↓"}),a.jsx("div",{className:"font-mono text-xs uppercase tracking-widest text-is-dim group-hover:text-is-text transition-colors",children:"LOAD MORE LAYERS"}),a.jsx("div",{className:"font-mono text-xs text-is-alert",children:"04-08 HIDDEN"})]})]})]})}),a.jsx("section",{id:"quick-prompts",className:"border-b border-is-border bg-is-bg px-6 py-20 scroll-mt-16",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-12 gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"QUICK_START"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL_PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-text mt-3 max-w-xl",children:"Want fast feedback? Copy one focused prompt and run it in your preferred AI tool."})]}),a.jsxs("div",{className:"font-mono text-xs text-is-secondary uppercase tracking-widest text-right shrink-0",children:["IMMEDIATE_UTILITY",a.jsx("br",{}),"READY_FOR_DEPLOYMENT"]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Hh.map((t,r)=>a.jsxs("div",{className:"is-panel p-6 relative overflow-hidden",children:[a.jsxs("div",{className:"flex justify-between items-start mb-5",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-2",children:[String(r+1).padStart(2,"0")," // ",t.title.toUpperCase()]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(i=>a.jsxs("span",{className:"font-mono text-[10px] border border-is-border px-2 py-0.5 text-is-secondary uppercase tracking-widest",children:["#",i]},i))})]}),a.jsx(Gh,{text:t.text})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"lg:col-span-2",children:[a.jsx("div",{className:"is-label mb-2",children:"PROMPT_BODY"}),a.jsx("div",{className:"bg-is-bg border border-is-border p-4 font-mono text-xs text-is-text leading-relaxed h-48 overflow-y-auto whitespace-pre-wrap",children:t.text})]}),a.jsxs("div",{className:"flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-2",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:t.purpose})]}),a.jsx("div",{className:"mt-4 pt-4 border-t border-is-border",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-1.5 h-1.5 bg-is-telemetry signal-pulse"}),a.jsx("span",{className:"font-mono text-[10px] text-is-telemetry uppercase tracking-widest",children:"TELEMETRY: READY"})]})})]})]})]},t.id))}),a.jsx("div",{className:"mt-8 flex justify-end",children:a.jsx(xe,{to:"/prompts",className:"font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors",children:"VIEW ALL PROMPTS →"})})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_SIGNAL_SPECTRUM"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"SIGNAL CALIBRATION"})]}),a.jsxs("div",{className:"is-panel p-0 overflow-hidden",children:[a.jsxs("div",{className:"border-b border-is-border px-3 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 bg-is-surface",children:[a.jsx("div",{className:"flex items-center gap-4",children:a.jsx("span",{className:"is-label",children:"PROCESS_ID: SIGNAL_PARALLAX"})}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-wrap justify-start",children:[a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"STEP: 1 / 3"}),a.jsx(Oe,{color:"gold",children:"CALIBRATING"}),a.jsx(Oe,{color:"blue",children:"SIGNAL_BLANKET"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"RAW_INPUT_SIGNAL"}),a.jsx("div",{className:"is-panel p-4 font-mono text-xs text-is-text leading-relaxed italic",children:'"I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."'}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.13 (CRITICAL_LOW)",color:"text-is-alert"},{label:"INPUT_RESOLUTION",val:"NULL_DETECTED",color:"text-is-alert"},{label:"COMPLEXITY_INDEX",val:"GHOST_RUN",color:"text-is-warning"}].map(({label:t,val:r,color:i})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-secondary mb-1",children:t}),a.jsx("div",{className:`font-mono text-xs font-semibold ${i}`,children:r})]},t))})]}),a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROCESSED_SIGNAL_CLARITY"}),a.jsx("div",{className:"is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed",children:`"Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."`}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4",children:[{label:"ENGINEER_CONFIDENCE",val:"0.94 CONFIRMED",color:"text-is-primary"},{label:"INPUT_RESOLUTION",val:"QUANTIFIED",color:"text-is-primary"},{label:"COMPLEXITY_INDEX",val:"HYPERLINK_HIGH",color:"text-is-primary"}].map(({label:t,val:r,color:i})=>a.jsxs("div",{className:"border border-is-border p-3 sm:p-2",children:[a.jsx("div",{className:"font-mono text-xs text-is-secondary mb-1",children:t}),a.jsx("div",{className:`font-mono text-xs font-semibold ${i}`,children:r})]},t))})]})]})]})]})}),a.jsx("section",{className:"border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("div",{className:"is-label mb-2",children:"PROVENANCE"}),a.jsx("h2",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text",children:"WHY THIS EXISTS"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mb-6",children:"Built from years of hiring, coaching, promoting, and leading software engineers and technical leaders."}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed",children:"Invisible Signals™ distills recurring patterns observed across resumes, interviews, promotion reviews, and leadership assessments."})]}),a.jsx("div",{className:"flex flex-wrap gap-2 content-start",children:["ENGINEERING_LEADERSHIP","HIRING_&_PROMOTION","CAREER_GROWTH","TECHNICAL_COMMUNICATION"].map(t=>a.jsx("span",{className:"font-mono text-xs border border-is-border px-3 py-1.5 text-is-secondary uppercase tracking-widest",children:t},t))})]})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-is-border",children:[Vh.map(({to:t,tag:r,icon:i,title:s,desc:o,pill:l,pillColor:c})=>a.jsxs(xe,{to:t,className:"group bg-is-bg p-6 flex flex-col gap-4 hover:bg-is-surface transition-colors",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"font-mono text-xl text-is-secondary",children:i}),a.jsx(Oe,{color:c,children:l})]}),a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-1",children:r}),a.jsx("div",{className:"font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors",children:s})]}),a.jsx("p",{className:"font-body text-xs text-is-text leading-relaxed flex-1",children:o}),a.jsx("div",{className:"font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity",children:"EXPLORE →"})]},t)),a.jsxs("div",{className:"bg-is-bg-deep relative overflow-hidden flex flex-col justify-end p-4 min-h-[200px]",children:[a.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",backgroundSize:"24px 24px"}}),a.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(transparent 50%, rgba(0,0,0,0.4) 50%)",backgroundSize:"100% 4px"}}),a.jsx("div",{className:"absolute top-6 left-6 right-6 flex flex-col gap-1 opacity-20",children:[80,60,90,45,70,55,35].map((t,r)=>a.jsx("div",{className:"h-px bg-is-primary",style:{width:`${t}%`}},r))}),a.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 border-t border-l border-is-primary opacity-40"}),a.jsx("div",{className:"absolute top-4 right-4 w-4 h-4 border-t border-r border-is-primary opacity-40"}),a.jsx("div",{className:"absolute bottom-10 left-4 w-4 h-4 border-b border-l border-is-primary opacity-40"}),a.jsx("div",{className:"absolute bottom-10 right-4 w-4 h-4 border-b border-r border-is-primary opacity-40"})]})]})})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"is-label",children:"BUILT_ON // CODE_PRINCIPLES"}),a.jsx("div",{className:"is-label",children:"BUILT_BY: ANNYCE_DAVIS"})]}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text",children:["NOT HACKING.",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-alert",children:"RESOLUTION."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mt-6 max-w-2xl",children:"The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border",children:qh.map(({num:t,title:r,body:i})=>a.jsxs("div",{className:"bg-is-bg p-8",children:[a.jsx("div",{className:"font-mono text-xs text-is-primary mb-4",children:t}),a.jsx("div",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide",children:r}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:i})]},t))})]})}),a.jsx("section",{className:"border-b border-is-border px-6 py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-6",children:"DIAGNOSTIC: CLARITY_GAP"}),a.jsxs("h2",{className:"font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text mb-8",children:["TECHNICAL SKILL",a.jsx("br",{}),"IS NOT THE"," ",a.jsx("em",{className:"not-italic text-is-alert",children:"ISSUE."})]}),a.jsx("p",{className:"font-body text-base text-is-text leading-relaxed mb-8 max-w-lg",children:"Amidst technical noise, the clarity of your signal—how well you communicate your capabilities—determines your career trajectory."}),a.jsxs("div",{className:"is-panel border-l-2 border-l-is-alert p-4",children:[a.jsx("div",{className:"font-mono text-xs text-is-alert uppercase tracking-widest mb-2",children:"⚠ CRITICAL_FAILURE_RETURN"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:"Most engineers fail to communicate ownership, organizational judgment, and business impact to humans and in hires."})]})]}),a.jsxs("div",{className:"flex flex-col items-center gap-8",children:[a.jsxs("div",{className:"is-panel p-6 w-full flex flex-col items-center",children:[a.jsx("div",{className:"is-label mb-4",children:"SEARCHING_FOR_SIGNAL..."}),a.jsx($h,{})]}),a.jsxs("div",{className:"is-panel p-4 w-full",children:[a.jsx("div",{className:"is-label mb-3",children:"SIGNAL_ANALYSIS"}),a.jsx("div",{className:"space-y-2",children:[{label:"TECHNICAL NOISE",pct:88,color:"bg-is-dim"},{label:"OWNERSHIP SIGNAL",pct:34,color:"bg-is-primary"},{label:"IMPACT CLARITY",pct:21,color:"bg-is-alert"}].map(({label:t,pct:r,color:i})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:t}),a.jsxs("span",{className:"font-mono text-xs text-is-text",children:[r,"%"]})]}),a.jsx("div",{className:"h-1 bg-is-surface-high w-full",children:a.jsx("div",{className:`h-full ${i}`,style:{width:`${r}%`}})})]},t))})]})]})]})}),a.jsx("section",{className:"px-6 py-16 md:py-28 bg-is-bg",children:a.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[a.jsx("div",{className:"flex justify-center mb-4",children:a.jsx("div",{className:"w-8 h-px bg-is-primary"})}),a.jsxs("h2",{className:"font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4",children:["INITIALIZE",a.jsx("br",{}),a.jsx("em",{className:"not-italic text-is-primary",children:"YOUR SIGNAL."})]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mt-10",children:[a.jsx("button",{onClick:()=>{var t;return(t=document.getElementById("quick-prompts"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"is-btn-primary",children:"ANALYZE_YOUR_SIGNALS"}),a.jsx(xe,{to:"/prompts",className:"is-btn-ghost",children:"BROWSE_PROMPTS"})]})]})})]})}const ya=[{id:"RESUME_REVIEW",label:"01 // RÉSUMÉ REVIEW",question:"Does this candidate clear the bar on paper?",signals:["Trajectory — is scope and responsibility clearly growing?","Impact language — outcomes vs. activities vs. tasks","Signal Stack coverage relative to the role requirements","Tailoring gap — does the candidate match this specific role?"],pitfalls:["Activity-based bullets with no outcome or impact","Generic résumés sent without tailoring","Missing evidence for ownership or business judgment"],examples:[{id:"EX_01",label:"01 // ACTIVITY VS IMPACT",weak:"Worked on Android app modernization using Kotlin.",strong:"Migrated critical Android checkout flows from Java to Kotlin, reducing crash-related support tickets by 32% and improving release stability during peak retail periods."},{id:"EX_02",label:"02 // GENERIC LEADERSHIP",weak:"Led cross-functional collaboration across teams.",strong:"Coordinated API contract alignment between mobile, backend, and platform teams to unblock a multi-quarter authentication migration affecting 4 product surfaces."},{id:"EX_03",label:"03 // SENIOR-LEVEL SIGNAL",weak:"Responsible for architecture decisions.",strong:"Defined mobile caching strategy for high-traffic commerce APIs, reducing redundant network requests and improving app startup reliability under unstable network conditions."},{id:"EX_04",label:"04 // ENGINEERING LEADERSHIP",weak:"Managed a team of engineers.",strong:"Led a team of 8 engineers across mobile and platform initiatives, improving sprint predictability and reducing production escalation volume through tighter dependency planning and release coordination."},{id:"EX_05",label:"05 // AI-ASSISTED RISKS",weak:"Visionary engineering leader driving innovative scalable solutions across cross-functional ecosystems.",strong:"Standardized CI workflows across 12 repositories, reducing release inconsistencies and shortening onboarding time for new engineers."}]},{id:"RECRUITER_SCREEN",label:"02 // RECRUITER SCREEN",question:"Is this a plausible fit for the role and company?",signals:["Compensation alignment and timeline","Location / work-model fit","Basic role comprehension — do they understand the scope?","Genuine interest signal vs. spray-and-pray behavior"],pitfalls:["Discussing compensation before understanding the role","Treating recruiters as gatekeepers rather than advocates","Under-preparing on why this company specifically"]},{id:"HM_SCREEN",label:"03 // HIRING MANAGER SCREEN",question:"Is this someone I'd want on my team?",signals:["Ownership — do they drive outcomes or wait for direction?","Judgment — how they have navigated ambiguity and tradeoffs","Communication — can they make complex work understandable?","Collaboration signal — do they make systems around them better?"],pitfalls:["Describing what the team did, not what you specifically drove","No concrete examples of business or product judgment","Failing to ask high-signal questions about the role"]},{id:"TECHNICAL_SCREEN",label:"04 // TECHNICAL SCREEN",question:"Can they do the technical work?",signals:["Problem decomposition — how they break down complexity","Trade-off reasoning — alternatives considered and why","Communication during the problem, not just the solution","System-level thinking beyond the immediate question"],pitfalls:["Silent coding — no narration of thought process","Over-optimizing without articulating the trade-off","Treating it as a quiz rather than a collaborative problem"]},{id:"ONSITE",label:"05 // ONSITE",question:"Is this the right hire?",signals:["Consistency across interviewers — same caliber across rounds","Leadership maturity — how they make others better","Strategic thinking — reasoning beyond the immediate task","Cultural signal — how they operate, not just what they deliver"],pitfalls:["Energy drop after the technical round","Treating behavioral rounds as less important than technical","No prepared questions that signal strategic curiosity"]}],Kh=[{id:"PROOF_OF_OWNERSHIP",label:"PROOF OF OWNERSHIP",question:"What are you truly driving end-to-end?"},{id:"PROBLEM_SOLVING_DEPTH",label:"PROBLEM-SOLVING DEPTH",question:"Where did you personally reduce ambiguity or unblock something hard?"},{id:"BOUNDARY_CLARITY",label:"BOUNDARY CLARITY",question:"What do you own — and what should you stop absorbing?"},{id:"VISIBLE_SIGNAL",label:"VISIBLE SIGNAL",question:"What artifact or outcome shows your impact clearly and honestly?"}],Xh=[{id:"COORDINATION_VS_OWNERSHIP",label:"01 // COORDINATION vs OWNERSHIP",question:"What work are you truly owning vs. just coordinating?",signals:["Named scope with clear delivery accountability","End-to-end ownership of an outcome — not just a task","Proof-point project with measurable, attributable result","Technical leadership visible beyond orchestration"],pitfalls:['All work described as "helping," "supporting," or "coordinating"',"No single outcome the person can fully claim","Growth stalls because no delivery signal is accumulating"],dropIn:["What work are you truly owning end-to-end — not just coordinating?","What proof-point project would make your impact obvious in 60–90 days?","What outcome from the last quarter can you fully claim?"]},{id:"DIAGNOSE_NOT_MONITOR",label:"02 // DIAGNOSE, NOT MONITOR",question:"Where are you reviewing progress instead of helping unblock it?",signals:["Drills into blockers — does not just collect status","Applies technical judgment to ambiguous situations","Offers concrete paths forward, not just escalation pathways","Problem-solving depth visible beyond stakeholder updates"],pitfalls:["Asking for status without understanding root causes","Offering options instead of helping solve the problem","Delegation without technical depth erodes leadership signal"],dropIn:["Where are you reviewing progress instead of helping unblock it?","What issue this week required deeper technical judgment from you?","Where did you go one level deeper than status last week?"]},{id:"DECISION_RIGHTS_CLARITY",label:"03 // DECISION RIGHTS CLARITY",question:"What decision do you think you own that others may think they own too?",signals:["Can name the DRI for every active cross-team decision","Leaves every discussion with decision, owner, escalation path, and handoff stated","Proactively surfaces ownership ambiguity before it becomes a blocker","Clarity around approval boundaries reduces churn and wasted cycles"],pitfalls:["Ownership ambiguity costing time and eroding trust","Cross-team decisions stalling without a named driver","Confusing contribution with accountability"],dropIn:["What decision do you think you own that others may think they own too?","Where is ambiguity costing you time or trust right now?","After your last cross-team meeting, could you state the decision, the DRI, the escalation path, and the handoff boundary?"]},{id:"BOUNDARY_SETTING",label:"04 // BOUNDARY SETTING",question:"What work are you carrying that should belong to someone else?",signals:["Support is bounded and communicated proactively","Responsibility transitions back to the right owner","Contribution is real, visible, and sustainable","Protects their own cycles and signal integrity"],pitfalls:["Support drifting into shaping other teams' artifacts","Absorbing other teams' responsibilities without visibility","Helpfulness that hides ownership problems"],dropIn:["What work are you carrying that should belong to someone else?","Where are you being helpful in a way that hides an ownership problem?","What support commitment do you need to define a boundary around?"]},{id:"BLOCKERS_TO_SIGNAL",label:"05 // BLOCKERS TO LEADERSHIP SIGNAL",question:"What blocker did you convert into a concrete recommendation this week?",signals:["Risk framing and proposed paths forward — not just problem reporting","Dependency maps and decision framing created proactively for others","Ambiguity reduced through artifacts, not just flagged in meetings","Blockers converted into structured leadership communication"],pitfalls:["Reporting friction without proposing a path forward","Blockers listed without ownership of resolution","Ambiguity escalated without reducing it first"],dropIn:["What blocker did you convert into a concrete recommendation this week?","What ambiguity did you reduce for others — not just surface?","What artifact did you create that made the work easier to understand?"]},{id:"HONEST_VISIBILITY",label:"06 // HONEST VISIBILITY",question:"What is the most credible evidence of your growth right now?",signals:["Contribution translated into clear, honest signal","Named ownership, measurable results, reduced risk","Growth visible to someone who only has the last 60 days of evidence","Impact communicated without relying on explanation or context"],pitfalls:["Visibility built on self-promotion rather than earned contribution","Contributions that require extensive explanation to sound significant","Growth narrative inflated beyond what evidence supports"],dropIn:["What is the most credible evidence of your growth right now?","If someone senior looked only at your last 60 days, what signal would they see?","What contribution have you made that improved clarity, speed, or quality for the team?"]}];function Jh(){const[e,n]=k.useState(null),[t,r]=k.useState(null),[i,s]=k.useState("HIRING_FUNNEL");return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_01_FRAMEWORKS"}),a.jsx(Oe,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:i==="HIRING_FUNNEL"?"HIRING FUNNEL":"COACHING"}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl mb-6",children:i==="HIRING_FUNNEL"?"The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly.":"Career coaching through signal clarity. Helping engineers and technical leaders own something real, solve something hard, clarify boundaries, and leave behind visible evidence of impact."}),a.jsx("div",{className:"flex gap-1",children:[{id:"HIRING_FUNNEL",label:"HIRING_FUNNEL"},{id:"COACHING",label:"COACHING"}].map(o=>a.jsx("button",{onClick:()=>s(o.id),className:`font-mono text-xs px-3 py-1.5 border uppercase tracking-widest transition-all ${i===o.id?"border-is-primary text-is-primary bg-is-primary/10":"border-is-border text-is-secondary hover:border-is-primary/40 hover:text-is-text"}`,children:o.label},o.id))})]}),i==="HIRING_FUNNEL"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"STAGE_OVERVIEW // SIGNAL_MAP"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"STAGE"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"PRIMARY_SIGNAL_QUESTION"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest hidden md:table-cell",children:"STATUS"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:ya.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question}),a.jsx("td",{className:"px-5 py-3 hidden md:table-cell",children:a.jsx(Oe,{color:"blue",children:"ACTIVE"})})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:ya.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-secondary flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]})]}),o.examples&&a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>n(e===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"EXAMPLES // SIGNAL_CALIBRATION"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:e===o.id?"[−]":"[+]"})]}),e===o.id&&a.jsx("div",{className:"px-6 py-5 space-y-6",children:o.examples.map(l=>a.jsxs("div",{children:[a.jsx("div",{className:"is-label text-is-secondary mb-3",children:l.label}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-alert mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"⚠"})," WEAK"]}),a.jsx("p",{className:"font-mono text-xs text-is-text leading-relaxed",children:l.weak})]}),a.jsxs("div",{className:"bg-is-bg px-4 py-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-primary mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"→"})," STRONG"]}),a.jsx("p",{className:"font-mono text-xs text-is-text leading-relaxed",children:l.strong})]})]})]},l.id))})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-mono text-xs text-is-secondary",children:["SOURCE: Derived from Annyce Davis, ",a.jsx("em",{children:"Landing Your Next Gig in Tech"})," (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK"]})})]}),i==="COACHING"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"is-panel mb-12 overflow-hidden",children:[a.jsx("div",{className:"border-b border-is-border px-5 py-3 bg-is-surface",children:a.jsx("span",{className:"is-label",children:"COACHING_LENS // 4_PART_FRAMEWORK"})}),a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"border-b border-is-border",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"LENS"}),a.jsx("th",{className:"text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest",children:"CORE_QUESTION"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:Kh.map(o=>a.jsxs("tr",{className:"hover:bg-is-surface transition-colors",children:[a.jsx("td",{className:"px-5 py-3 font-mono text-xs text-is-primary whitespace-nowrap",children:o.label}),a.jsx("td",{className:"px-5 py-3 font-body text-sm text-is-text",children:o.question})]},o.id))})]})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:Xh.map(o=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4",children:[a.jsx("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:o.label}),a.jsx("span",{className:"font-mono text-xs text-is-secondary flex-1",children:o.question})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label mb-4",children:"SIGNAL_READS"}),a.jsx("ul",{className:"space-y-2",children:o.signals.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"→"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]}),a.jsxs("div",{className:"bg-is-bg px-6 py-5",children:[a.jsx("div",{className:"is-label text-is-alert mb-4",children:"COMMON_SIGNAL_LOSS"}),a.jsx("ul",{className:"space-y-2",children:o.pitfalls.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-alert mt-0.5 shrink-0",children:"⚠"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})]})]}),a.jsxs("div",{className:"border-t border-is-border",children:[a.jsxs("button",{onClick:()=>r(t===o.id?null:o.id),className:"w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left",children:[a.jsx("span",{className:"is-label",children:"DROP-IN_QUESTIONS // 1:1_USE"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:t===o.id?"[−]":"[+]"})]}),t===o.id&&a.jsx("div",{className:"px-6 py-5",children:a.jsx("ul",{className:"space-y-3",children:o.dropIn.map(l=>a.jsxs("li",{className:"flex gap-3",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary mt-0.5 shrink-0",children:"?"}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:l})]},l))})})]})]},o.id))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsx("p",{className:"font-mono text-xs text-is-secondary",children:"SOURCE: Annyce Davis · SIGNAL_REF: COACHING_FRAMEWORK"})})]})]})}const Ld=`# prompts/

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
`,_d=`---
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
`,Ad=`---
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
`,Od=`---
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
`,Md=`---
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
`,Zh=Object.assign({"../../../prompts/README.md":Ld,"../../../prompts/coaching/growth-signal-self-diagnostic.md":_d,"../../../prompts/interview/behavioral-answer-diagnostic.md":Ad,"../../../prompts/interview/skeptical-hiring-manager.md":Od,"../../../prompts/quick-signal/README.md":bo,"../../../prompts/quick-signal/github-profile-check.md":So,"../../../prompts/quick-signal/interview-answer-check.md":No,"../../../prompts/quick-signal/linkedin-profile-check.md":Eo,"../../../prompts/quick-signal/resume-bullet-check.md":jo,"../../../prompts/resume/resume-signal-analysis.md":Md}),Ql=["resume","interview"],Kl=["resume-bullet-check","interview-answer-check","github-profile-check","linkedin-profile-check"],Dd=Object.entries(Zh).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>Co(e,n)).sort((e,n)=>{const t=Ql.indexOf(e.category),r=Ql.indexOf(n.category);return t!==r?(t===-1?99:t)-(r===-1?99:r):e.id.localeCompare(n.id)}),Xl=Dd.filter(e=>e.category==="quick-signal").sort((e,n)=>Kl.indexOf(e.id)-Kl.indexOf(n.id)),eg=Dd.filter(e=>e.category!=="quick-signal");function Jl({text:e}){const[n,t]=k.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return a.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(go,{size:12}):a.jsx(yo,{size:12}),n?"COPIED":"COPY_PROMPT"]})}function ng(){return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_02_PROMPTS"}),a.jsx(Oe,{color:"coral",children:"SIGNAL_ACTIVE"})]}),a.jsx("h2",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"QUICK SIGNAL PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl",children:"Want fast feedback? Copy one focused prompt and run it in your preferred AI tool. System-level instructions to analyze career metadata and generate telemetry goals."})]}),Xl.length>0&&a.jsx("div",{className:"mb-12",children:a.jsx("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:Xl.map(({id:e,title:n,purpose:t,tags:r,text:i},s)=>a.jsxs("section",{className:"border border-is-border bg-is-surface-container-lowest p-6 relative group overflow-hidden glow-border transition-all",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-sm font-mono uppercase tracking-widest text-is-text mb-3",children:[String(s+1).padStart(2,"0")," // ",n.toUpperCase()]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(o=>a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-[10px] uppercase text-is-secondary",children:o.replace(/-/g,"_").toUpperCase()},o))})]}),a.jsx("div",{className:"shrink-0",children:a.jsx(Jl,{text:i})})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[minmax(0,4fr)_200px] gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PROMPT_BODY"}),a.jsx("div",{className:"is-panel p-6 font-mono text-xs text-is-text leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-72 overflow-y-auto",children:i})]}),a.jsxs("div",{className:"flex flex-col justify-between gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:t})]}),a.jsxs("div",{className:"border-t border-is-border pt-5 text-[10px] uppercase tracking-widest text-is-secondary flex items-center gap-3",children:[a.jsx("span",{className:"font-mono",children:"TELEMETRY:"}),a.jsx("span",{className:"text-is-primary",children:r.includes("quick-check")?"READY":"ACTIVE"})]})]})]})]},e))})}),a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsx("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:a.jsx(Oe,{color:"blue",children:"SIGNAL_ACTIVE"})}),a.jsx("h2",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL PROMPTS"}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl",children:"System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content."})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:eg.map(({id:e,title:n,purpose:t,tags:r,text:i},s)=>a.jsxs("div",{className:"bg-is-bg border border-is-border glow-border transition-all",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(s+1).padStart(2,"0")," // ",n.toUpperCase()]}),a.jsx(Oe,{color:"blue",children:"SIGNAL_ACTIVE"})]}),a.jsx(Jl,{text:i})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_280px] gap-px bg-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"PROMPT_BODY"}),a.jsx("div",{className:"is-panel p-6 font-mono text-xs text-is-text leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto",children:i})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:t})]}),r.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(o=>a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-secondary",children:o.toUpperCase().replace(/-/g,"_")},o))})]})]})]})]},e))}),a.jsxs("div",{className:"mt-10 border border-is-alert/30 bg-is-surface-container-lowest p-6 max-w-4xl",children:[a.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[a.jsx(Mh,{size:14,className:"text-is-alert shrink-0 mt-0.5"}),a.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-is-alert",children:"SYSTEM_NOTE // DATA_INTEGRITY"})]}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:'These prompts are not designed to help candidates "game" interviews. They are engineered to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity and surface latent technical signals, not fabricate competence. Use with high-fidelity intent.'})]})]})}const zd=`# templates/

Reusable templates for self-assessment and career signal work.

## Contents

| File | Description |
|---|---|
| [signal-scorecard.md](signal-scorecard.md) | A self-assessment tool for evaluating the strength, clarity, and credibility of the signals you send during career moments |

## Usage

Templates are designed to be copied and filled in for your own situation. They work alongside the prompts and frameworks in this repository — not as standalone tools.
`,Ud=`---
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
`,tg=Object.assign({"../../../templates/README.md":zd,"../../../templates/signal-scorecard.md":Ud});function rg(e){var s;const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t=n[1],r={};t.replace(/^(\w+):\s*(.+)$/gm,(o,l,c)=>{r[l]=c.trim()});const i=t.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m);return i&&(r.tags=((s=i[1].match(/[ \t]+-[ \t]+(.+)/g))==null?void 0:s.map(o=>o.replace(/[ \t]+-[ \t]+/,"").trim()))??[]),r}function ig(e,n){const t=rg(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",o=[...n.matchAll(/^# (\d+\. .+)$/gm)].map(c=>c[1]),l=e.split("/").pop().replace(".md","");return{id:l,title:t.title||l,version:t.version||"",tags:t.tags||[],purpose:i,sections:o,text:n}}const sg=Object.entries(tg).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,n])=>ig(e,n));function ag({text:e}){const[n,t]=k.useState(!1);function r(){navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})}return a.jsxs("button",{onClick:r,className:"flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all",children:[n?a.jsx(go,{size:12}):a.jsx(yo,{size:12}),n?"COPIED":"COPY_TEMPLATE"]})}function og(){return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[a.jsxs("div",{className:"border-b border-is-border pb-10 mb-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[a.jsx("span",{className:"is-label",children:"_05_TEMPLATES"}),a.jsx(Oe,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),a.jsx("h1",{className:"font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4",children:"SIGNAL TEMPLATES"}),a.jsx("p",{className:"font-body text-base text-is-secondary leading-relaxed max-w-2xl",children:"Structured documents for auditing, scoring, and improving your career signals. Copy a template into your own editor and work through it at your own pace."})]}),a.jsx("div",{className:"space-y-px bg-is-border",children:sg.map(({id:e,title:n,version:t,purpose:r,sections:i,tags:s,text:o},l)=>a.jsxs("div",{className:"bg-is-bg",children:[a.jsxs("div",{className:"border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"font-mono text-sm font-semibold uppercase text-is-text",children:[String(l+1).padStart(2,"0")," // ",n.toUpperCase()]}),t&&a.jsxs("span",{className:"font-mono text-xs text-is-secondary border border-is-border px-2 py-0.5",children:["V",t]}),a.jsx(Oe,{color:"gold",children:"TEMPLATE_ACTIVE"})]}),a.jsx(ag,{text:o})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border",children:[a.jsxs("div",{className:"lg:col-span-2 bg-is-bg p-6",children:[a.jsx("div",{className:"is-label mb-4",children:"SECTIONS"}),a.jsx("div",{className:"space-y-px",children:i.map((c,u)=>a.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 border border-is-border bg-is-surface",children:[a.jsx("span",{className:"font-mono text-xs text-is-primary w-5 shrink-0",children:String(u+1).padStart(2,"0")}),a.jsx("span",{className:"font-mono text-xs text-is-text uppercase tracking-wide",children:c.replace(/^\d+\. /,"").replace(/\s*&\s*/g," AND ").replace(/ /g,"_")})]},u))})]}),a.jsxs("div",{className:"bg-is-bg p-6 flex flex-col gap-6",children:[r&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"PURPOSE"}),a.jsx("p",{className:"font-body text-sm text-is-text leading-relaxed",children:r})]}),s.length>0&&a.jsxs("div",{children:[a.jsx("div",{className:"is-label mb-3",children:"TAGS"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>a.jsx("span",{className:"border border-is-border px-2 py-0.5 font-mono text-xs text-is-secondary",children:c.toUpperCase().replace(/-/g,"_")},c))})]})]})]})]},e))}),a.jsx("div",{className:"mt-10 pt-6 border-t border-is-border",children:a.jsxs("p",{className:"font-body text-sm text-is-secondary leading-relaxed max-w-2xl",children:[a.jsx("span",{className:"font-mono text-is-primary",children:"NOTE:"})," Templates are fill-in-the-blank markdown documents. Copy the full template and open it in your own text editor or note-taking tool. Do not invent evidence — use the recovery questions inside each section to surface real experience."]})})]})}const{frontmatter:lg,scoringRows:cg,layers:Zl}=Td(Pd),ug={1:xo,2:wo,3:ko,4:zi,5:Ui,6:Wi,7:vo,8:ho};function dg(){return a.jsxs("div",{className:"flex min-h-[calc(100vh-3rem)]",style:{backgroundImage:"linear-gradient(rgba(38,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"},children:[a.jsxs("aside",{className:"hidden md:flex flex-col w-64 shrink-0 border-r border-is-border bg-is-surface sticky top-12 self-start h-[calc(100vh-3rem)] overflow-y-auto",children:[a.jsxs("div",{className:"px-6 py-5 border-b border-is-border",children:[a.jsx("div",{className:"font-mono text-xs font-semibold uppercase tracking-widest text-is-text",children:"SIGNAL STACK"}),a.jsx("div",{className:"font-mono text-[10px] text-is-secondary mt-0.5 tracking-widest",children:"L1–L8 ANALYSIS"})]}),a.jsxs("nav",{className:"flex-1 py-2",children:[a.jsxs(an,{to:"/signal-stack",end:!0,className:({isActive:e})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${e?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-text hover:bg-is-surface-high hover:text-is-primary"}`,children:[a.jsx(Lh,{size:13,className:"shrink-0"}),a.jsx("span",{children:"Overview"})]}),Zl.map(({num:e,slug:n,name:t})=>{const r=ug[e],i=`L${e} // ${t.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"")}`;return a.jsxs(an,{to:`/signal-stack/${n}`,className:({isActive:s})=>`flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${s?"text-is-primary border-r-2 border-is-primary bg-is-surface-low":"text-is-text hover:bg-is-surface-high hover:text-is-primary"}`,children:[r&&a.jsx(r,{size:13,className:"shrink-0"}),a.jsx("span",{className:"truncate",children:i})]},n)})]}),a.jsx("div",{className:"px-6 py-5 border-t border-is-border",children:a.jsx("button",{className:"w-full border border-is-primary text-is-primary font-mono text-[10px] uppercase tracking-widest py-2.5 hover:bg-is-primary/10 transition-colors",children:"REBOOT_SESSION"})})]}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx(oh,{context:{frontmatter:lg,scoringRows:cg,layers:Zl}})})]})}const pg={1:xo,2:wo,3:ko,4:zi,5:Ui,6:Wi,7:vo,8:ho},fg={0:"text-is-dim",1:"text-is-alert",2:"text-is-warning",3:"text-is-primary",4:"text-is-telemetry"},mg={0:"MISSING",1:"LOW",2:"WARN",3:"NOMINAL",4:"OPTIMAL"};function hg(){const{scoringRows:e,layers:n}=Sd(),t=[...n].reverse();return a.jsxs("div",{className:"p-8 md:p-12",children:[a.jsxs("header",{className:"mb-12",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("span",{className:"signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-primary",children:"SYSTEM STATUS: OPERATIONAL"})]}),a.jsx("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text mb-4",children:"Signal Stack Overview"}),a.jsx("p",{className:"font-body text-base text-is-secondary max-w-2xl leading-relaxed",children:"A diagnostic framework for mapping evidence across eight critical layers of career signal intelligence. A weak layer does not disqualify — an invisible layer does."})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-12 gap-8",children:[a.jsx("div",{className:"xl:col-span-8 flex flex-col gap-2",children:t.map(({num:r,slug:i,name:s,tagline:o})=>{const l=pg[r];return a.jsxs(xe,{to:`/signal-stack/${i}`,className:"group border border-is-border p-5 bg-is-surface flex items-center justify-between glow-border transition-all",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("span",{className:"font-mono text-xs text-is-secondary w-6 shrink-0",children:["L",r]}),a.jsxs("div",{children:[a.jsx("div",{className:"font-mono text-sm font-medium uppercase tracking-wider text-is-text group-hover:text-is-primary transition-colors",children:s}),a.jsx("div",{className:"font-mono text-[10px] text-is-secondary mt-0.5",children:o})]})]}),l&&a.jsx(l,{size:14,className:"text-is-secondary group-hover:text-is-primary group-hover:translate-x-0.5 transition-all shrink-0"})]},i)})}),a.jsxs("div",{className:"xl:col-span-4 space-y-6",children:[a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"SCORING_SCALE"})}),a.jsx("div",{className:"p-4",children:a.jsxs("table",{className:"w-full font-mono text-xs",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-is-secondary border-b border-is-border",children:[a.jsx("th",{className:"text-left py-2 font-normal",children:"SCORE"}),a.jsx("th",{className:"text-left py-2 font-normal",children:"RATING"}),a.jsx("th",{className:"text-right py-2 font-normal",children:"STATUS"})]})}),a.jsx("tbody",{children:e.map(({score:r,rating:i})=>a.jsxs("tr",{className:"border-b border-is-border/40 last:border-0",children:[a.jsx("td",{className:"py-2.5 text-is-secondary",children:r}),a.jsx("td",{className:`py-2.5 ${fg[r]??"text-is-dim"}`,children:i}),a.jsx("td",{className:"py-2.5 text-right text-is-secondary",children:mg[r]??"—"})]},r))})]})})]}),a.jsxs("div",{className:"border border-is-border",children:[a.jsx("div",{className:"px-4 py-3 border-b border-is-border",children:a.jsx("span",{className:"is-label",children:"CONFIDENCE_TIER"})}),a.jsx("div",{className:"p-4 space-y-4",children:[{label:"HIGH",pct:100,color:"bg-is-telemetry",desc:"Explicit · easy to validate"},{label:"MEDIUM",pct:65,color:"bg-is-warning",desc:"Present · needs clarification"},{label:"LOW",pct:30,color:"bg-is-alert",desc:"Depends on interpretation"}].map(({label:r,pct:i,color:s,desc:o})=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[a.jsx("span",{className:"font-mono text-xs text-is-text",children:r}),a.jsx("span",{className:"font-mono text-[10px] text-is-secondary",children:o})]}),a.jsx("div",{className:"h-px w-full bg-is-border",children:a.jsx("div",{className:`h-full ${s}`,style:{width:`${i}%`}})})]},r))})]})]})]})]})}const gg={1:xo,2:wo,3:ko,4:zi,5:Ui,6:Wi,7:vo,8:ho};function vg(){const{layer:e}=Vm(),{frontmatter:n,layers:t}=Sd(),r=t.findIndex(v=>v.slug===e),i=t[r];if(!i)return a.jsxs("div",{className:"p-12 space-y-4",children:[a.jsxs("div",{className:"font-mono text-xs text-is-secondary",children:["LAYER_NOT_FOUND // ",e]}),a.jsxs(xe,{to:"/signal-stack",className:"flex items-center gap-1 font-mono text-xs text-is-primary hover:text-is-primary/80 transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"Back to overview"]})]});const{num:s,name:o,tagline:l,description:c,strongSignals:u,weakSignals:h,exampleWeak:m,exampleStrong:g,levels:w}=i,y=gg[s],x=r>0?t[r-1]:null,N=r<t.length-1?t[r+1]:null,p=(n.category??"docs").toUpperCase(),d=`SIGNAL_STACK · v${n.version??"1.0"} · STATUS: ${(n.status??"draft").toUpperCase()}`,f=o.toUpperCase().replace(/\s+/g,"_").replace(/[^A-Z0-9_]/g,"");return a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"scanline"}),a.jsxs("div",{className:"p-8 md:p-12 max-w-5xl space-y-14 relative z-10",children:[a.jsxs("section",{className:"border-l-2 border-is-primary pl-8 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[a.jsx("span",{className:"bg-is-primary/10 text-is-primary border border-is-primary/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",children:p}),a.jsx("span",{className:"font-mono text-[10px] text-is-secondary tracking-widest uppercase",children:d})]}),a.jsxs("h1",{className:"font-mono text-3xl md:text-4xl font-semibold uppercase tracking-tight flex items-center gap-4",children:["L",s," // ",f,"_",y&&a.jsx(y,{size:20,className:"text-is-primary shrink-0"})]}),(c||l)&&a.jsx("p",{className:"font-body text-base text-is-text max-w-2xl leading-relaxed",children:c||l})]}),(h.length>0||u.length>0)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"SIGNAL_DIAGNOSTIC // WEAK_VS_STRONG"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border border border-is-border",children:[a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-alert opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(Dh,{size:14,className:"text-is-alert shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-alert",children:"WEAK_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:h.map((v,S)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-secondary mt-0.5 shrink-0 group-hover/item:text-is-alert transition-colors",children:String(S+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:v})]},S))})]}),a.jsxs("div",{className:"bg-is-bg p-7 space-y-5 relative group",children:[a.jsx("div",{className:"absolute top-0 right-0 w-5 h-5 border-t border-r border-is-telemetry opacity-20 group-hover:opacity-80 transition-opacity"}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(Ih,{size:14,className:"text-is-telemetry shrink-0"}),a.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-is-telemetry",children:"STRONG_SIGNALS"})]}),a.jsx("ul",{className:"divide-y divide-is-border",children:u.map((v,S)=>a.jsxs("li",{className:"flex items-start gap-4 py-3 group/item",children:[a.jsx("span",{className:"font-mono text-[10px] text-is-secondary mt-0.5 shrink-0 group-hover/item:text-is-telemetry transition-colors",children:String(S+1).padStart(2,"0")}),a.jsx("span",{className:"font-body text-sm text-is-text leading-relaxed",children:v})]},S))})]})]})]}),(m||g)&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"EVIDENCE_TAXONOMY // SEMANTIC_UPGRADING"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[m&&a.jsxs("div",{className:"border border-is-border border-l-2 border-l-is-alert p-6 bg-is-surface space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-secondary uppercase tracking-widest",children:"PASSIVE_EXECUTION"}),a.jsx("div",{className:"font-mono text-[10px] text-is-alert uppercase tracking-wider",children:"LOW_RESOLUTION_SIGNAL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-text italic leading-relaxed border-t border-is-border pt-3",children:["“",m,"”"]})]}),g&&a.jsxs("div",{className:"border border-is-primary/20 border-l-2 border-l-is-primary p-6 bg-is-primary/5 space-y-3",children:[a.jsx("div",{className:"font-mono text-[10px] text-is-secondary uppercase tracking-widest",children:"ACTIVE_MASTERY"}),a.jsx("div",{className:"font-mono text-[10px] text-is-primary uppercase tracking-wider",children:"HIGH_FIDELITY_INTEL"}),a.jsxs("blockquote",{className:"font-body text-sm text-is-text italic leading-relaxed border-t border-is-primary/20 pt-3",children:["“",g,"”"]})]})]})]}),w.length>0&&a.jsxs("section",{children:[a.jsx("h2",{className:"font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-secondary",children:"LEVEL_DIFFERENTIATION_MATRIX"}),a.jsx("div",{className:"border border-is-border overflow-x-auto",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-is-surface border-b border-is-border",children:[a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-secondary font-normal uppercase tracking-widest w-32",children:"LEVEL"}),a.jsx("th",{className:"px-6 py-4 text-left font-mono text-[10px] text-is-secondary font-normal uppercase tracking-widest",children:"WHAT_STRONG_LOOKS_LIKE"})]})}),a.jsx("tbody",{className:"divide-y divide-is-border",children:w.map(({level:v,description:S},C)=>a.jsxs("tr",{className:"hover:bg-is-surface-low transition-colors group",children:[a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-is-text group-hover:text-is-primary transition-colors font-medium whitespace-nowrap align-top",children:v}),a.jsx("td",{className:"px-6 py-4 font-body text-sm text-is-text leading-relaxed",children:S})]},C))})]})})]}),a.jsxs("div",{className:"flex items-center justify-between border-t border-is-border pt-8",children:[x?a.jsxs(xe,{to:`/signal-stack/${x.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"L",x.num," · ",x.name]}):a.jsxs(xe,{to:"/signal-stack",className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:[a.jsx(vs,{size:12}),"Overview"]}),N&&a.jsxs(xe,{to:`/signal-stack/${N.slug}`,className:"flex items-center gap-2 font-mono text-[11px] text-is-text hover:text-is-primary transition-colors uppercase tracking-wider",children:["L",N.num," · ",N.name,a.jsx(Th,{size:12})]})]})]})]})}const yg=Object.assign({"../../../prompts/README.md":Ld,"../../../prompts/coaching/growth-signal-self-diagnostic.md":_d,"../../../prompts/interview/behavioral-answer-diagnostic.md":Ad,"../../../prompts/interview/skeptical-hiring-manager.md":Od,"../../../prompts/quick-signal/README.md":bo,"../../../prompts/quick-signal/github-profile-check.md":So,"../../../prompts/quick-signal/interview-answer-check.md":No,"../../../prompts/quick-signal/linkedin-profile-check.md":Eo,"../../../prompts/quick-signal/resume-bullet-check.md":jo,"../../../prompts/resume/resume-signal-analysis.md":Md}),xg=Object.assign({"../../../templates/README.md":zd,"../../../templates/signal-scorecard.md":Ud});function wg(e,n){const t=Rd(n),r=n.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m),i=r?r[1].split(`

`)[0].trim():"",s=e.split("/").pop().replace(".md","");return{id:s,type:"template",title:t.title||s,meta:t.version||"",excerpt:i,tags:t.tags||[],route:"/templates"}}const kg=Object.entries(yg).filter(([e])=>!e.endsWith("README.md")).map(([e,n])=>{const t=Co(e,n);return{id:t.id,type:"prompt",title:t.title,meta:t.category,excerpt:t.purpose,tags:t.tags,route:"/prompts"}}),bg=Object.entries(xg).filter(([e])=>!e.split("/").pop().toLowerCase().startsWith("readme")).map(([e,n])=>wg(e,n)),Sg=ya.map(e=>({id:e.id,type:"framework",title:e.label,meta:e.question,excerpt:[...e.signals||[],...e.pitfalls||[]].join(" · "),tags:[e.id],route:"/frameworks"})),Ng=[...kg,...bg,...Sg],ec={prompt:{label:"PROMPT",color:"text-is-primary",border:"border-is-primary/30"},template:{label:"TEMPLATE",color:"text-is-secondary",border:"border-is-secondary/30"},framework:{label:"FRAMEWORK",color:"text-is-warning",border:"border-is-warning/30"}},xs=["prompt","template","framework"];function Eg(e,n){return[e.title,e.meta,e.excerpt,e.tags.join(" ")].join(" ").toLowerCase().includes(n)}function jg(){const[e]=Sh(),n=(e.get("q")||"").trim().toLowerCase(),[t,r]=k.useState(new Set(xs));function i(c){r(u=>{const h=new Set(u);if(h.has(c)){if(h.size===1)return u;h.delete(c)}else h.add(c);return h})}const s=k.useMemo(()=>n?Ng.filter(c=>Eg(c,n)):[],[n]),o=k.useMemo(()=>s.filter(c=>t.has(c.type)),[s,t]),l=k.useMemo(()=>Object.fromEntries(xs.map(c=>[c,s.filter(u=>u.type===c).length])),[s]);return a.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[a.jsxs("div",{className:"border-b border-is-border pb-6 mb-8",children:[a.jsx("span",{className:"is-label",children:"SIGNAL_QUERY"}),n?a.jsxs("p",{className:"font-mono text-xs text-is-secondary mt-1 tracking-widest",children:["QUERY: ",a.jsx("span",{className:"text-is-text",children:n.toUpperCase()})]}):null]}),a.jsxs("div",{className:"flex gap-6 items-start",children:[a.jsx("aside",{className:"w-52 shrink-0",children:a.jsxs("div",{className:"is-panel p-4",children:[a.jsx("span",{className:"is-label block mb-4",children:"QUERY_FILTERS"}),a.jsx("div",{className:"flex flex-col gap-3",children:xs.map(c=>{const u=ec[c],h=l[c]??0,m=t.has(c);return a.jsxs("label",{className:"flex items-center justify-between gap-2 cursor-pointer group",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"checkbox",checked:m,onChange:()=>i(c),className:"appearance-none w-3 h-3 border border-is-border bg-is-surface checked:bg-is-primary checked:border-is-primary transition-colors cursor-pointer"}),a.jsx("span",{className:`font-mono text-xs tracking-widest uppercase transition-colors ${m?u.color:"text-is-secondary"}`,children:u.label})]}),a.jsx("span",{className:"font-mono text-xs text-is-secondary tabular-nums",children:h})]},c)})})]})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n?o.length===0?a.jsxs("span",{className:"font-mono text-xs text-is-alert tracking-widest",children:["NO_SIGNAL_FOUND // QUERY: ",n.toUpperCase()]}):a.jsxs("span",{className:"font-mono text-xs text-is-secondary tracking-widest",children:["Showing"," ",a.jsx("span",{className:"text-is-text",children:o.length})," ","signal",o.length!==1?"s":""," found // PROTOCOL:"," ",a.jsx("span",{className:"text-is-secondary",children:"SCAN_COMPLETE"})]}):a.jsx("span",{className:"font-mono text-xs text-is-dim tracking-widest",children:"AWAITING_QUERY"}),o.length>0&&a.jsx("span",{className:"font-mono text-xs text-is-secondary tracking-widest",children:"SORT: RELEVANCE"})]}),!n&&a.jsxs("div",{className:"is-panel p-12 flex flex-col items-center justify-center gap-3",children:[a.jsx("span",{className:"font-mono text-2xl text-is-border",children:"···"}),a.jsx("span",{className:"is-label",children:"ENTER_QUERY_TO_SCAN"}),a.jsx("p",{className:"font-mono text-xs text-is-secondary text-center max-w-xs",children:"Search across prompts, templates, and frameworks. Use the input in the nav to begin."})]}),o.length>0&&a.jsx("div",{className:"flex flex-col gap-3",children:o.map(c=>{const u=ec[c.type],h=c.excerpt.length>140?c.excerpt.slice(0,140).trimEnd()+"…":c.excerpt;return a.jsxs("div",{className:`is-panel p-5 border-l-2 ${u.border}`,children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[a.jsxs("span",{className:`font-mono text-xs uppercase tracking-widest ${u.color}`,children:[u.label," //"]}),a.jsx(xe,{to:c.route,className:"font-mono text-xs uppercase tracking-widest text-is-secondary hover:text-is-primary transition-colors whitespace-nowrap shrink-0",children:"VIEW_SIGNAL →"})]}),a.jsx("h2",{className:"font-mono text-sm font-semibold uppercase text-is-text mb-2 tracking-wide",children:c.title}),h&&a.jsx("p",{className:"font-mono text-xs text-is-secondary leading-relaxed mb-3",children:h}),c.tags.length>0&&a.jsx("div",{className:"flex flex-wrap gap-1.5",children:c.tags.map(m=>a.jsx("span",{className:"font-mono text-xs px-2 py-0.5 bg-is-surface-low border border-is-border text-is-secondary uppercase tracking-widest",children:m},m))})]},`${c.type}-${c.id}`)})}),n&&o.length===0&&s.length>0&&a.jsxs("div",{className:"is-panel p-8 text-center",children:[a.jsx("span",{className:"is-label block mb-2",children:"FILTER_MISMATCH"}),a.jsxs("p",{className:"font-mono text-xs text-is-secondary",children:[s.length," result",s.length!==1?"s":""," found but hidden by active filters."]})]})]})]})]})}function Cg(){const{pathname:e}=Gn();return k.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Ig(){return a.jsxs(yh,{children:[a.jsx(Cg,{}),a.jsxs("div",{className:"min-h-screen flex flex-col bg-is-bg-deep",children:[a.jsx(Uh,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(ch,{children:[a.jsx(Ge,{path:"/",element:a.jsx(Qh,{})}),a.jsx(Ge,{path:"/frameworks",element:a.jsx(Jh,{})}),a.jsx(Ge,{path:"/prompts",element:a.jsx(ng,{})}),a.jsx(Ge,{path:"/templates",element:a.jsx(og,{})}),a.jsx(Ge,{path:"/search",element:a.jsx(jg,{})}),a.jsxs(Ge,{path:"/signal-stack",element:a.jsx(dg,{}),children:[a.jsx(Ge,{index:!0,element:a.jsx(hg,{})}),a.jsx(Ge,{path:":layer",element:a.jsx(vg,{})})]})]})}),a.jsxs("footer",{className:"border-t border-is-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"© 2026 INVISIBLE_SIGNALS™ · IS_RIGHTS_RESERVED"}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-secondary hover:text-is-text transition-colors",children:"GITHUB"}),a.jsx("a",{href:"https://github.com/invisible-signals/invisible-signals/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-is-secondary hover:text-is-text transition-colors",children:"CODE_OF_CONDUCT"}),a.jsx("span",{className:"font-mono text-xs text-is-secondary",children:"SECURITY: APACHE-2.0 // OPEN_SOURCE_LICENSED"})]})]})]})]})}ws.createRoot(document.getElementById("root")).render(a.jsx(dc.StrictMode,{children:a.jsx(Ig,{})}));
