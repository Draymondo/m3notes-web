function Y1(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function ow(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rp={exports:{}},xl={},ip={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function J1(){if(k_)return be;k_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=w&&L[w]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,z={};function N(L,H,Ee){this.props=L,this.context=H,this.refs=z,this.updater=Ee||b}N.prototype.isReactComponent={},N.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},N.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function te(){}te.prototype=N.prototype;function ne(L,H,Ee){this.props=L,this.context=H,this.refs=z,this.updater=Ee||b}var Z=ne.prototype=new te;Z.constructor=ne,U(Z,N.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,Ie=Object.prototype.hasOwnProperty,ce={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(L,H,Ee){var xe,Ne={},Ve=null,je=null;if(H!=null)for(xe in H.ref!==void 0&&(je=H.ref),H.key!==void 0&&(Ve=""+H.key),H)Ie.call(H,xe)&&!C.hasOwnProperty(xe)&&(Ne[xe]=H[xe]);var re=arguments.length-2;if(re===1)Ne.children=Ee;else if(1<re){for(var fe=Array(re),et=0;et<re;et++)fe[et]=arguments[et+2];Ne.children=fe}if(L&&L.defaultProps)for(xe in re=L.defaultProps,re)Ne[xe]===void 0&&(Ne[xe]=re[xe]);return{$$typeof:n,type:L,key:Ve,ref:je,props:Ne,_owner:ce.current}}function P(L,H){return{$$typeof:n,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function x(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ee){return H[Ee]})}var V=/\/+/g;function R(L,H){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):H.toString(36)}function Qe(L,H,Ee,xe,Ne){var Ve=typeof L;(Ve==="undefined"||Ve==="boolean")&&(L=null);var je=!1;if(L===null)je=!0;else switch(Ve){case"string":case"number":je=!0;break;case"object":switch(L.$$typeof){case n:case e:je=!0}}if(je)return je=L,Ne=Ne(je),L=xe===""?"."+R(je,0):xe,le(Ne)?(Ee="",L!=null&&(Ee=L.replace(V,"$&/")+"/"),Qe(Ne,H,Ee,"",function(et){return et})):Ne!=null&&(x(Ne)&&(Ne=P(Ne,Ee+(!Ne.key||je&&je.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+L)),H.push(Ne)),1;if(je=0,xe=xe===""?".":xe+":",le(L))for(var re=0;re<L.length;re++){Ve=L[re];var fe=xe+R(Ve,re);je+=Qe(Ve,H,Ee,fe,Ne)}else if(fe=T(L),typeof fe=="function")for(L=fe.call(L),re=0;!(Ve=L.next()).done;)Ve=Ve.value,fe=xe+R(Ve,re++),je+=Qe(Ve,H,Ee,fe,Ne);else if(Ve==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return je}function lt(L,H,Ee){if(L==null)return L;var xe=[],Ne=0;return Qe(L,xe,"","",function(Ve){return H.call(Ee,Ve,Ne++)}),xe}function ut(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(Ee){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ee)},function(Ee){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ee)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var ue={current:null},ee={transition:null},ve={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ce};function he(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:lt,forEach:function(L,H,Ee){lt(L,function(){H.apply(this,arguments)},Ee)},count:function(L){var H=0;return lt(L,function(){H++}),H},toArray:function(L){return lt(L,function(H){return H})||[]},only:function(L){if(!x(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},be.Component=N,be.Fragment=t,be.Profiler=o,be.PureComponent=ne,be.StrictMode=r,be.Suspense=f,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,be.act=he,be.cloneElement=function(L,H,Ee){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var xe=U({},L.props),Ne=L.key,Ve=L.ref,je=L._owner;if(H!=null){if(H.ref!==void 0&&(Ve=H.ref,je=ce.current),H.key!==void 0&&(Ne=""+H.key),L.type&&L.type.defaultProps)var re=L.type.defaultProps;for(fe in H)Ie.call(H,fe)&&!C.hasOwnProperty(fe)&&(xe[fe]=H[fe]===void 0&&re!==void 0?re[fe]:H[fe])}var fe=arguments.length-2;if(fe===1)xe.children=Ee;else if(1<fe){re=Array(fe);for(var et=0;et<fe;et++)re[et]=arguments[et+2];xe.children=re}return{$$typeof:n,type:L.type,key:Ne,ref:Ve,props:xe,_owner:je}},be.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},be.createElement=S,be.createFactory=function(L){var H=S.bind(null,L);return H.type=L,H},be.createRef=function(){return{current:null}},be.forwardRef=function(L){return{$$typeof:d,render:L}},be.isValidElement=x,be.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ut}},be.memo=function(L,H){return{$$typeof:y,type:L,compare:H===void 0?null:H}},be.startTransition=function(L){var H=ee.transition;ee.transition={};try{L()}finally{ee.transition=H}},be.unstable_act=he,be.useCallback=function(L,H){return ue.current.useCallback(L,H)},be.useContext=function(L){return ue.current.useContext(L)},be.useDebugValue=function(){},be.useDeferredValue=function(L){return ue.current.useDeferredValue(L)},be.useEffect=function(L,H){return ue.current.useEffect(L,H)},be.useId=function(){return ue.current.useId()},be.useImperativeHandle=function(L,H,Ee){return ue.current.useImperativeHandle(L,H,Ee)},be.useInsertionEffect=function(L,H){return ue.current.useInsertionEffect(L,H)},be.useLayoutEffect=function(L,H){return ue.current.useLayoutEffect(L,H)},be.useMemo=function(L,H){return ue.current.useMemo(L,H)},be.useReducer=function(L,H,Ee){return ue.current.useReducer(L,H,Ee)},be.useRef=function(L){return ue.current.useRef(L)},be.useState=function(L){return ue.current.useState(L)},be.useSyncExternalStore=function(L,H,Ee){return ue.current.useSyncExternalStore(L,H,Ee)},be.useTransition=function(){return ue.current.useTransition()},be.version="18.3.1",be}var x_;function hm(){return x_||(x_=1,ip.exports=J1()),ip.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Z1(){if(N_)return xl;N_=1;var n=hm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,y){var v,w={},T=null,b=null;y!==void 0&&(T=""+y),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(b=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:b,props:w,_owner:o.current}}return xl.Fragment=t,xl.jsx=u,xl.jsxs=u,xl}var D_;function eS(){return D_||(D_=1,rp.exports=Z1()),rp.exports}var $=eS(),G=hm();const aw=ow(G),tS=Y1({__proto__:null,default:aw},[G]);var eh={},sp={exports:{}},hn={},op={exports:{}},ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function nS(){return b_||(b_=1,(function(n){function e(ee,ve){var he=ee.length;ee.push(ve);e:for(;0<he;){var L=he-1>>>1,H=ee[L];if(0<o(H,ve))ee[L]=ve,ee[he]=H,he=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var ve=ee[0],he=ee.pop();if(he!==ve){ee[0]=he;e:for(var L=0,H=ee.length,Ee=H>>>1;L<Ee;){var xe=2*(L+1)-1,Ne=ee[xe],Ve=xe+1,je=ee[Ve];if(0>o(Ne,he))Ve<H&&0>o(je,Ne)?(ee[L]=je,ee[Ve]=he,L=Ve):(ee[L]=Ne,ee[xe]=he,L=xe);else if(Ve<H&&0>o(je,he))ee[L]=je,ee[Ve]=he,L=Ve;else break e}}return ve}function o(ee,ve){var he=ee.sortIndex-ve.sortIndex;return he!==0?he:ee.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],y=[],v=1,w=null,T=3,b=!1,U=!1,z=!1,N=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(ee){for(var ve=t(y);ve!==null;){if(ve.callback===null)r(y);else if(ve.startTime<=ee)r(y),ve.sortIndex=ve.expirationTime,e(f,ve);else break;ve=t(y)}}function le(ee){if(z=!1,Z(ee),!U)if(t(f)!==null)U=!0,ut(Ie);else{var ve=t(y);ve!==null&&ue(le,ve.startTime-ee)}}function Ie(ee,ve){U=!1,z&&(z=!1,te(S),S=-1),b=!0;var he=T;try{for(Z(ve),w=t(f);w!==null&&(!(w.expirationTime>ve)||ee&&!O());){var L=w.callback;if(typeof L=="function"){w.callback=null,T=w.priorityLevel;var H=L(w.expirationTime<=ve);ve=n.unstable_now(),typeof H=="function"?w.callback=H:w===t(f)&&r(f),Z(ve)}else r(f);w=t(f)}if(w!==null)var Ee=!0;else{var xe=t(y);xe!==null&&ue(le,xe.startTime-ve),Ee=!1}return Ee}finally{w=null,T=he,b=!1}}var ce=!1,C=null,S=-1,P=5,x=-1;function O(){return!(n.unstable_now()-x<P)}function V(){if(C!==null){var ee=n.unstable_now();x=ee;var ve=!0;try{ve=C(!0,ee)}finally{ve?R():(ce=!1,C=null)}}else ce=!1}var R;if(typeof ne=="function")R=function(){ne(V)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,lt=Qe.port2;Qe.port1.onmessage=V,R=function(){lt.postMessage(null)}}else R=function(){N(V,0)};function ut(ee){C=ee,ce||(ce=!0,R())}function ue(ee,ve){S=N(function(){ee(n.unstable_now())},ve)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){U||b||(U=!0,ut(Ie))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ee){switch(T){case 1:case 2:case 3:var ve=3;break;default:ve=T}var he=T;T=ve;try{return ee()}finally{T=he}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,ve){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var he=T;T=ee;try{return ve()}finally{T=he}},n.unstable_scheduleCallback=function(ee,ve,he){var L=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?L+he:L):he=L,ee){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=he+H,ee={id:v++,callback:ve,priorityLevel:ee,startTime:he,expirationTime:H,sortIndex:-1},he>L?(ee.sortIndex=he,e(y,ee),t(f)===null&&ee===t(y)&&(z?(te(S),S=-1):z=!0,ue(le,he-L))):(ee.sortIndex=H,e(f,ee),U||b||(U=!0,ut(Ie))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var ve=T;return function(){var he=T;T=ve;try{return ee.apply(this,arguments)}finally{T=he}}}})(ap)),ap}var V_;function rS(){return V_||(V_=1,op.exports=nS()),op.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function iS(){if(O_)return hn;O_=1;var n=hm(),e=rS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:y.test(i)?w[i]=!0:(v[i]=!0,!1)}function b(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function U(i,s,l,h){if(s===null||typeof s>"u"||b(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(i,s,l,h,p,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){N[i]=new z(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];N[s]=new z(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){N[i]=new z(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){N[i]=new z(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){N[i]=new z(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){N[i]=new z(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){N[i]=new z(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){N[i]=new z(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){N[i]=new z(i,5,!1,i.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function ne(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(te,ne);N[s]=new z(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(te,ne);N[s]=new z(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(te,ne);N[s]=new z(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){N[i]=new z(i,1,!1,i.toLowerCase(),null,!1,!1)}),N.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){N[i]=new z(i,1,!1,i.toLowerCase(),null,!0,!0)});function Z(i,s,l,h){var p=N.hasOwnProperty(s)?N[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(U(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),ce=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ve(i){return i===null||typeof i!="object"?null:(i=ee&&i[ee]||i["@@iterator"],typeof i=="function"?i:null)}var he=Object.assign,L;function H(i){if(L===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+i}var Ee=!1;function xe(i,s){if(!i||Ee)return"";Ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(q){var h=q}Reflect.construct(i,[],s)}else{try{s.call()}catch(q){h=q}i.call(s.prototype)}else{try{throw Error()}catch(q){h=q}i()}}catch(q){if(q&&h&&typeof q.stack=="string"){for(var p=q.stack.split(`
`),g=h.stack.split(`
`),E=p.length-1,A=g.length-1;1<=E&&0<=A&&p[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(p[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||p[E]!==g[A]){var k=`
`+p[E].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=E&&0<=A);break}}}finally{Ee=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?H(i):""}function Ne(i){switch(i.tag){case 5:return H(i.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return i=xe(i.type,!1),i;case 11:return i=xe(i.type.render,!1),i;case 1:return i=xe(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case C:return"Fragment";case ce:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case Qe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case V:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case lt:return s=i.displayName||null,s!==null?s:Ve(i.type)||"Memo";case ut:s=i._payload,i=i._init;try{return Ve(i(s))}catch{}}return null}function je(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function re(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function fe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(i){var s=fe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Fn(i){i._valueTracker||(i._valueTracker=et(i))}function ao(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=fe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ri(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ts(i,s){var l=s.checked;return he({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function lo(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=re(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function La(i,s){s=s.checked,s!=null&&Z(i,"checked",s,!1)}function Ma(i,s){La(i,s);var l=re(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?uo(i,s.type,l):s.hasOwnProperty("defaultValue")&&uo(i,s.type,re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Uu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function uo(i,s,l){(s!=="number"||ri(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Cr=Array.isArray;function kr(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+re(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Fa(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return he({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function co(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Cr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:re(l)}}function ho(i,s){var l=re(s.value),h=re(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ua(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function It(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?It(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var xr,ja=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=xr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ii(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rs=["Webkit","ms","Moz","O"];Object.keys(ns).forEach(function(i){rs.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ns[s]=ns[i]})});function Ba(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ns.hasOwnProperty(i)&&ns[i]?(""+s).trim():s+"px"}function za(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ba(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var $a=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(i,s){if(s){if($a[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Wa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function fo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var po=null,Sn=null,sr=null;function mo(i){if(i=ml(i)){if(typeof po!="function")throw Error(t(280));var s=i.stateNode;s&&(s=mc(s),po(i.stateNode,i.type,s))}}function or(i){Sn?sr?sr.push(i):sr=[i]:Sn=i}function Ka(){if(Sn){var i=Sn,s=sr;if(sr=Sn=null,mo(i),s)for(i=0;i<s.length;i++)mo(s[i])}}function ss(i,s){return i(s)}function Ha(){}var Nr=!1;function Ga(i,s,l){if(Nr)return i(s,l);Nr=!0;try{return ss(i,s,l)}finally{Nr=!1,(Sn!==null||sr!==null)&&(Ha(),Ka())}}function dt(i,s){var l=i.stateNode;if(l===null)return null;var h=mc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var go=!1;if(d)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){go=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{go=!1}function os(i,s,l,h,p,g,E,A,k){var q=Array.prototype.slice.call(arguments,3);try{s.apply(l,q)}catch(X){this.onError(X)}}var as=!1,yo=null,jn=!1,Qa=null,xd={onError:function(i){as=!0,yo=i}};function _o(i,s,l,h,p,g,E,A,k){as=!1,yo=null,os.apply(xd,arguments)}function ju(i,s,l,h,p,g,E,A,k){if(_o.apply(this,arguments),as){if(as){var q=yo;as=!1,yo=null}else throw Error(t(198));jn||(jn=!0,Qa=q)}}function Bn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ls(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function zn(i){if(Bn(i)!==i)throw Error(t(188))}function Bu(i){var s=i.alternate;if(!s){if(s=Bn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return zn(p),i;if(g===h)return zn(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var E=!1,A=p.child;A;){if(A===l){E=!0,l=p,h=g;break}if(A===h){E=!0,h=p,l=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===l){E=!0,l=g,h=p;break}if(A===h){E=!0,h=g,l=p;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Xa(i){return i=Bu(i),i!==null?vo(i):null}function vo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=vo(i);if(s!==null)return s;i=i.sibling}return null}var Eo=e.unstable_scheduleCallback,Ya=e.unstable_cancelCallback,zu=e.unstable_shouldYield,Nd=e.unstable_requestPaint,Xe=e.unstable_now,$u=e.unstable_getCurrentPriorityLevel,us=e.unstable_ImmediatePriority,si=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Ja=e.unstable_LowPriority,qu=e.unstable_IdlePriority,cs=null,pn=null;function Wu(i){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(cs,i,void 0,(i.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Hu,Za=Math.log,Ku=Math.LN2;function Hu(i){return i>>>=0,i===0?32:31-(Za(i)/Ku|0)|0}var wo=64,Io=4194304;function oi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function hs(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,g=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~p;A!==0?h=oi(A):(g&=E,g!==0&&(h=oi(g)))}else E=l&~p,E!==0?h=oi(E):g!==0&&(h=oi(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Xt(s),p=1<<l,h|=i[l],s&=~p;return h}function Dd(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var E=31-Xt(g),A=1<<E,k=p[E];k===-1?((A&l)===0||(A&h)!==0)&&(p[E]=Dd(A,s)):k<=s&&(i.expiredLanes|=A),g&=~A}}function mn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ds(){var i=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),i}function ai(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function li(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Xt(s),i[s]=l}function Ge(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Xt(l),g=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~g}}function ui(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Xt(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var Me=0;function ci(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Gu,To,Qu,Xu,Yu,el=!1,ar=[],Ot=null,$n=null,qn=null,hi=new Map,Rn=new Map,lr=[],bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(i,s){switch(i){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":hi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(s.pointerId)}}function rn(i,s,l,h,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=ml(s),s!==null&&To(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Vd(i,s,l,h,p){switch(s){case"focusin":return Ot=rn(Ot,i,s,l,h,p),!0;case"dragenter":return $n=rn($n,i,s,l,h,p),!0;case"mouseover":return qn=rn(qn,i,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return hi.set(g,rn(hi.get(g)||null,i,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Rn.set(g,rn(Rn.get(g)||null,i,s,l,h,p)),!0}return!1}function Zu(i){var s=ys(i.target);if(s!==null){var l=Bn(s);if(l!==null){if(s=l.tag,s===13){if(s=ls(l),s!==null){i.blockedOn=s,Yu(i.priority,function(){Qu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function br(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=So(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);is=h,l.target.dispatchEvent(h),is=null}else return s=ml(l),s!==null&&To(s),i.blockedOn=l,!1;s.shift()}return!0}function fs(i,s,l){br(i)&&l.delete(s)}function ec(){el=!1,Ot!==null&&br(Ot)&&(Ot=null),$n!==null&&br($n)&&($n=null),qn!==null&&br(qn)&&(qn=null),hi.forEach(fs),Rn.forEach(fs)}function Wn(i,s){i.blockedOn===s&&(i.blockedOn=null,el||(el=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ec)))}function Kn(i){function s(p){return Wn(p,i)}if(0<ar.length){Wn(ar[0],i);for(var l=1;l<ar.length;l++){var h=ar[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Ot!==null&&Wn(Ot,i),$n!==null&&Wn($n,i),qn!==null&&Wn(qn,i),hi.forEach(s),Rn.forEach(s),l=0;l<lr.length;l++)h=lr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<lr.length&&(l=lr[0],l.blockedOn===null);)Zu(l),l.blockedOn===null&&lr.shift()}var Vr=le.ReactCurrentBatchConfig,di=!0;function tt(i,s,l,h){var p=Me,g=Vr.transition;Vr.transition=null;try{Me=1,tl(i,s,l,h)}finally{Me=p,Vr.transition=g}}function Od(i,s,l,h){var p=Me,g=Vr.transition;Vr.transition=null;try{Me=4,tl(i,s,l,h)}finally{Me=p,Vr.transition=g}}function tl(i,s,l,h){if(di){var p=So(i,s,l,h);if(p===null)Kd(i,s,h,ps,l),Ju(i,h);else if(Vd(p,i,s,l,h))h.stopPropagation();else if(Ju(i,h),s&4&&-1<bd.indexOf(i)){for(;p!==null;){var g=ml(p);if(g!==null&&Gu(g),g=So(i,s,l,h),g===null&&Kd(i,s,h,ps,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else Kd(i,s,h,null,l)}}var ps=null;function So(i,s,l,h){if(ps=null,i=fo(h),i=ys(i),i!==null)if(s=Bn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ls(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ps=i,null}function nl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case us:return 1;case si:return 4;case An:case Ja:return 16;case qu:return 536870912;default:return 16}default:return 16}}var gn=null,Ao=null,sn=null;function rl(){if(sn)return sn;var i,s=Ao,l=s.length,h,p="value"in gn?gn.value:gn.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===p[g-h];h++);return sn=p.slice(i,1<h?1-h:void 0)}function Ro(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ur(){return!0}function il(){return!1}function Lt(i){function s(l,h,p,g,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ur:il,this.isPropagationStopped=il,this}return he(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Lt(Hn),cr=he({},Hn,{view:0,detail:0}),Ld=Lt(cr),Co,Or,fi,ms=he({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==fi&&(fi&&i.type==="mousemove"?(Co=i.screenX-fi.screenX,Or=i.screenY-fi.screenY):Or=Co=0,fi=i),Co)},movementY:function(i){return"movementY"in i?i.movementY:Or}}),ko=Lt(ms),sl=he({},ms,{dataTransfer:0}),tc=Lt(sl),xo=he({},cr,{relatedTarget:0}),No=Lt(xo),nc=he({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lr=Lt(nc),rc=he({},Hn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ic=Lt(rc),sc=he({},Hn,{data:0}),ol=Lt(sc),Do={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ac(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=oc[i])?!!s[i]:!1}function hr(){return ac}var c=he({},cr,{key:function(i){if(i.key){var s=Do[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ro(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Yt[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(i){return i.type==="keypress"?Ro(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ro(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Lt(c),_=he({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Lt(_),M=he({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),W=Lt(M),se=he({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=Lt(se),St=he({},ms,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Lt(St),kt=[9,13,27,32],mt=d&&"CompositionEvent"in window,Pn=null;d&&"documentMode"in document&&(Pn=document.documentMode);var yn=d&&"TextEvent"in window&&!Pn,gs=d&&(!mt||Pn&&8<Pn&&11>=Pn),bo=" ",Tg=!1;function Sg(i,s){switch(i){case"keyup":return kt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Vo=!1;function GT(i,s){switch(i){case"compositionend":return Ag(s);case"keypress":return s.which!==32?null:(Tg=!0,bo);case"textInput":return i=s.data,i===bo&&Tg?null:i;default:return null}}function QT(i,s){if(Vo)return i==="compositionend"||!mt&&Sg(i,s)?(i=rl(),sn=Ao=gn=null,Vo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return gs&&s.locale!=="ko"?null:s.data;default:return null}}var XT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!XT[i.type]:s==="textarea"}function Pg(i,s,l,h){or(h),s=dc(s,"onChange"),0<s.length&&(l=new Po("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var al=null,ll=null;function YT(i){Wg(i,0)}function lc(i){var s=Uo(i);if(ao(s))return i}function JT(i,s){if(i==="change")return s}var Cg=!1;if(d){var Md;if(d){var Fd="oninput"in document;if(!Fd){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Fd=typeof kg.oninput=="function"}Md=Fd}else Md=!1;Cg=Md&&(!document.documentMode||9<document.documentMode)}function xg(){al&&(al.detachEvent("onpropertychange",Ng),ll=al=null)}function Ng(i){if(i.propertyName==="value"&&lc(ll)){var s=[];Pg(s,ll,i,fo(i)),Ga(YT,s)}}function ZT(i,s,l){i==="focusin"?(xg(),al=s,ll=l,al.attachEvent("onpropertychange",Ng)):i==="focusout"&&xg()}function e1(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return lc(ll)}function t1(i,s){if(i==="click")return lc(s)}function n1(i,s){if(i==="input"||i==="change")return lc(s)}function r1(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Gn=typeof Object.is=="function"?Object.is:r1;function ul(i,s){if(Gn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!Gn(i[p],s[p]))return!1}return!0}function Dg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function bg(i,s){var l=Dg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dg(l)}}function Vg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Vg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Og(){for(var i=window,s=ri();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ri(i.document)}return s}function Ud(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function i1(i){var s=Og(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Vg(l.ownerDocument.documentElement,l)){if(h!==null&&Ud(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!i.extend&&g>h&&(p=h,h=g,g=p),p=bg(l,g);var E=bg(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var s1=d&&"documentMode"in document&&11>=document.documentMode,Oo=null,jd=null,cl=null,Bd=!1;function Lg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bd||Oo==null||Oo!==ri(h)||(h=Oo,"selectionStart"in h&&Ud(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),cl&&ul(cl,h)||(cl=h,h=dc(jd,"onSelect"),0<h.length&&(s=new Po("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Oo)))}function uc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Lo={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},zd={},Mg={};d&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function cc(i){if(zd[i])return zd[i];if(!Lo[i])return i;var s=Lo[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Mg)return zd[i]=s[l];return i}var Fg=cc("animationend"),Ug=cc("animationiteration"),jg=cc("animationstart"),Bg=cc("transitionend"),zg=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(i,s){zg.set(i,s),a(s,[i])}for(var $d=0;$d<$g.length;$d++){var qd=$g[$d],o1=qd.toLowerCase(),a1=qd[0].toUpperCase()+qd.slice(1);pi(o1,"on"+a1)}pi(Fg,"onAnimationEnd"),pi(Ug,"onAnimationIteration"),pi(jg,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Bg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function qg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,ju(h,s,void 0,i),i.currentTarget=null}function Wg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var A=h[E],k=A.instance,q=A.currentTarget;if(A=A.listener,k!==g&&p.isPropagationStopped())break e;qg(p,A,q),g=k}else for(E=0;E<h.length;E++){if(A=h[E],k=A.instance,q=A.currentTarget,A=A.listener,k!==g&&p.isPropagationStopped())break e;qg(p,A,q),g=k}}}if(jn)throw i=Qa,jn=!1,Qa=null,i}function Je(i,s){var l=s[Jd];l===void 0&&(l=s[Jd]=new Set);var h=i+"__bubble";l.has(h)||(Kg(s,i,2,!1),l.add(h))}function Wd(i,s,l){var h=0;s&&(h|=4),Kg(l,i,h,s)}var hc="_reactListening"+Math.random().toString(36).slice(2);function dl(i){if(!i[hc]){i[hc]=!0,r.forEach(function(l){l!=="selectionchange"&&(l1.has(l)||Wd(l,!1,i),Wd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[hc]||(s[hc]=!0,Wd("selectionchange",!1,s))}}function Kg(i,s,l,h){switch(nl(s)){case 1:var p=tt;break;case 4:p=Od;break;default:p=tl}l=p.bind(null,s,l,i),p=void 0,!go||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Kd(i,s,l,h,p){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;E=E.return}for(;A!==null;){if(E=ys(A),E===null)return;if(k=E.tag,k===5||k===6){h=g=E;continue e}A=A.parentNode}}h=h.return}Ga(function(){var q=g,X=fo(l),Y=[];e:{var Q=zg.get(i);if(Q!==void 0){var de=Po,me=i;switch(i){case"keypress":if(Ro(l)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":me="focus",de=No;break;case"focusout":me="blur",de=No;break;case"beforeblur":case"afterblur":de=No;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=W;break;case Fg:case Ug:case jg:de=Lr;break;case Bg:de=We;break;case"scroll":de=Ld;break;case"wheel":de=Fe;break;case"copy":case"cut":case"paste":de=ic;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=I}var ye=(s&4)!==0,ft=!ye&&i==="scroll",j=ye?Q!==null?Q+"Capture":null:Q;ye=[];for(var D=q,B;D!==null;){B=D;var ie=B.stateNode;if(B.tag===5&&ie!==null&&(B=ie,j!==null&&(ie=dt(D,j),ie!=null&&ye.push(fl(D,ie,B)))),ft)break;D=D.return}0<ye.length&&(Q=new de(Q,me,null,l,X),Y.push({event:Q,listeners:ye}))}}if((s&7)===0){e:{if(Q=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",Q&&l!==is&&(me=l.relatedTarget||l.fromElement)&&(ys(me)||me[Mr]))break e;if((de||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,de?(me=l.relatedTarget||l.toElement,de=q,me=me?ys(me):null,me!==null&&(ft=Bn(me),me!==ft||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=q),de!==me)){if(ye=ko,ie="onMouseLeave",j="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(ye=I,ie="onPointerLeave",j="onPointerEnter",D="pointer"),ft=de==null?Q:Uo(de),B=me==null?Q:Uo(me),Q=new ye(ie,D+"leave",de,l,X),Q.target=ft,Q.relatedTarget=B,ie=null,ys(X)===q&&(ye=new ye(j,D+"enter",me,l,X),ye.target=B,ye.relatedTarget=ft,ie=ye),ft=ie,de&&me)t:{for(ye=de,j=me,D=0,B=ye;B;B=Mo(B))D++;for(B=0,ie=j;ie;ie=Mo(ie))B++;for(;0<D-B;)ye=Mo(ye),D--;for(;0<B-D;)j=Mo(j),B--;for(;D--;){if(ye===j||j!==null&&ye===j.alternate)break t;ye=Mo(ye),j=Mo(j)}ye=null}else ye=null;de!==null&&Hg(Y,Q,de,ye,!1),me!==null&&ft!==null&&Hg(Y,ft,me,ye,!0)}}e:{if(Q=q?Uo(q):window,de=Q.nodeName&&Q.nodeName.toLowerCase(),de==="select"||de==="input"&&Q.type==="file")var _e=JT;else if(Rg(Q))if(Cg)_e=n1;else{_e=e1;var Se=ZT}else(de=Q.nodeName)&&de.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(_e=t1);if(_e&&(_e=_e(i,q))){Pg(Y,_e,l,X);break e}Se&&Se(i,Q,q),i==="focusout"&&(Se=Q._wrapperState)&&Se.controlled&&Q.type==="number"&&uo(Q,"number",Q.value)}switch(Se=q?Uo(q):window,i){case"focusin":(Rg(Se)||Se.contentEditable==="true")&&(Oo=Se,jd=q,cl=null);break;case"focusout":cl=jd=Oo=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,Lg(Y,l,X);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":Lg(Y,l,X)}var Ae;if(mt)e:{switch(i){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Vo?Sg(i,l)&&(Ce="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(gs&&l.locale!=="ko"&&(Vo||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Vo&&(Ae=rl()):(gn=X,Ao="value"in gn?gn.value:gn.textContent,Vo=!0)),Se=dc(q,Ce),0<Se.length&&(Ce=new ol(Ce,i,null,l,X),Y.push({event:Ce,listeners:Se}),Ae?Ce.data=Ae:(Ae=Ag(l),Ae!==null&&(Ce.data=Ae)))),(Ae=yn?GT(i,l):QT(i,l))&&(q=dc(q,"onBeforeInput"),0<q.length&&(X=new ol("onBeforeInput","beforeinput",null,l,X),Y.push({event:X,listeners:q}),X.data=Ae))}Wg(Y,s)})}function fl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function dc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=dt(i,l),g!=null&&h.unshift(fl(i,g,p)),g=dt(i,s),g!=null&&h.push(fl(i,g,p))),i=i.return}return h}function Mo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Hg(i,s,l,h,p){for(var g=s._reactName,E=[];l!==null&&l!==h;){var A=l,k=A.alternate,q=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&q!==null&&(A=q,p?(k=dt(l,g),k!=null&&E.unshift(fl(l,k,A))):p||(k=dt(l,g),k!=null&&E.push(fl(l,k,A)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var u1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function Gg(i){return(typeof i=="string"?i:""+i).replace(u1,`
`).replace(c1,"")}function fc(i,s,l){if(s=Gg(s),Gg(i)!==s&&l)throw Error(t(425))}function pc(){}var Hd=null,Gd=null;function Qd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(i){return Qg.resolve(null).then(i).catch(f1)}:Xd;function f1(i){setTimeout(function(){throw i})}function Yd(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Kn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Kn(s)}function mi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Xg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),dr="__reactFiber$"+Fo,pl="__reactProps$"+Fo,Mr="__reactContainer$"+Fo,Jd="__reactEvents$"+Fo,p1="__reactListeners$"+Fo,m1="__reactHandles$"+Fo;function ys(i){var s=i[dr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Mr]||l[dr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Xg(i);i!==null;){if(l=i[dr])return l;i=Xg(i)}return s}i=l,l=i.parentNode}return null}function ml(i){return i=i[dr]||i[Mr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Uo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function mc(i){return i[pl]||null}var Zd=[],jo=-1;function gi(i){return{current:i}}function Ze(i){0>jo||(i.current=Zd[jo],Zd[jo]=null,jo--)}function Ye(i,s){jo++,Zd[jo]=i.current,i.current=s}var yi={},zt=gi(yi),on=gi(!1),_s=yi;function Bo(i,s){var l=i.type.contextTypes;if(!l)return yi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function an(i){return i=i.childContextTypes,i!=null}function gc(){Ze(on),Ze(zt)}function Yg(i,s,l){if(zt.current!==yi)throw Error(t(168));Ye(zt,s),Ye(on,l)}function Jg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,je(i)||"Unknown",p));return he({},l,h)}function yc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||yi,_s=zt.current,Ye(zt,i),Ye(on,on.current),!0}function Zg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Jg(i,s,_s),h.__reactInternalMemoizedMergedChildContext=i,Ze(on),Ze(zt),Ye(zt,i)):Ze(on),Ye(on,l)}var Fr=null,_c=!1,ef=!1;function ey(i){Fr===null?Fr=[i]:Fr.push(i)}function g1(i){_c=!0,ey(i)}function _i(){if(!ef&&Fr!==null){ef=!0;var i=0,s=Me;try{var l=Fr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Fr=null,_c=!1}catch(p){throw Fr!==null&&(Fr=Fr.slice(i+1)),Eo(us,_i),p}finally{Me=s,ef=!1}}return null}var zo=[],$o=0,vc=null,Ec=0,Cn=[],kn=0,vs=null,Ur=1,jr="";function Es(i,s){zo[$o++]=Ec,zo[$o++]=vc,vc=i,Ec=s}function ty(i,s,l){Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=vs,vs=i;var h=Ur;i=jr;var p=32-Xt(h)-1;h&=~(1<<p),l+=1;var g=32-Xt(s)+p;if(30<g){var E=p-p%5;g=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Ur=1<<32-Xt(s)+p|l<<p|h,jr=g+i}else Ur=1<<g|l<<p|h,jr=i}function tf(i){i.return!==null&&(Es(i,1),ty(i,1,0))}function nf(i){for(;i===vc;)vc=zo[--$o],zo[$o]=null,Ec=zo[--$o],zo[$o]=null;for(;i===vs;)vs=Cn[--kn],Cn[kn]=null,jr=Cn[--kn],Cn[kn]=null,Ur=Cn[--kn],Cn[kn]=null}var _n=null,vn=null,nt=!1,Qn=null;function ny(i,s){var l=bn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function ry(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,_n=i,vn=mi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,_n=i,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=vs!==null?{id:Ur,overflow:jr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=bn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,_n=i,vn=null,!0):!1;default:return!1}}function rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function sf(i){if(nt){var s=vn;if(s){var l=s;if(!ry(i,s)){if(rf(i))throw Error(t(418));s=mi(l.nextSibling);var h=_n;s&&ry(i,s)?ny(h,l):(i.flags=i.flags&-4097|2,nt=!1,_n=i)}}else{if(rf(i))throw Error(t(418));i.flags=i.flags&-4097|2,nt=!1,_n=i}}}function iy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;_n=i}function wc(i){if(i!==_n)return!1;if(!nt)return iy(i),nt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Qd(i.type,i.memoizedProps)),s&&(s=vn)){if(rf(i))throw sy(),Error(t(418));for(;s;)ny(i,s),s=mi(s.nextSibling)}if(iy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){vn=mi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}vn=null}}else vn=_n?mi(i.stateNode.nextSibling):null;return!0}function sy(){for(var i=vn;i;)i=mi(i.nextSibling)}function qo(){vn=_n=null,nt=!1}function of(i){Qn===null?Qn=[i]:Qn.push(i)}var y1=le.ReactCurrentBatchConfig;function gl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=p.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ic(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function oy(i){var s=i._init;return s(i._payload)}function ay(i){function s(j,D){if(i){var B=j.deletions;B===null?(j.deletions=[D],j.flags|=16):B.push(D)}}function l(j,D){if(!i)return null;for(;D!==null;)s(j,D),D=D.sibling;return null}function h(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function p(j,D){return j=Ri(j,D),j.index=0,j.sibling=null,j}function g(j,D,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<D?(j.flags|=2,D):B):(j.flags|=2,D)):(j.flags|=1048576,D)}function E(j){return i&&j.alternate===null&&(j.flags|=2),j}function A(j,D,B,ie){return D===null||D.tag!==6?(D=Yf(B,j.mode,ie),D.return=j,D):(D=p(D,B),D.return=j,D)}function k(j,D,B,ie){var _e=B.type;return _e===C?X(j,D,B.props.children,ie,B.key):D!==null&&(D.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===ut&&oy(_e)===D.type)?(ie=p(D,B.props),ie.ref=gl(j,D,B),ie.return=j,ie):(ie=Kc(B.type,B.key,B.props,null,j.mode,ie),ie.ref=gl(j,D,B),ie.return=j,ie)}function q(j,D,B,ie){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Jf(B,j.mode,ie),D.return=j,D):(D=p(D,B.children||[]),D.return=j,D)}function X(j,D,B,ie,_e){return D===null||D.tag!==7?(D=Cs(B,j.mode,ie,_e),D.return=j,D):(D=p(D,B),D.return=j,D)}function Y(j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Yf(""+D,j.mode,B),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return B=Kc(D.type,D.key,D.props,null,j.mode,B),B.ref=gl(j,null,D),B.return=j,B;case ce:return D=Jf(D,j.mode,B),D.return=j,D;case ut:var ie=D._init;return Y(j,ie(D._payload),B)}if(Cr(D)||ve(D))return D=Cs(D,j.mode,B,null),D.return=j,D;Ic(j,D)}return null}function Q(j,D,B,ie){var _e=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return _e!==null?null:A(j,D,""+B,ie);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:return B.key===_e?k(j,D,B,ie):null;case ce:return B.key===_e?q(j,D,B,ie):null;case ut:return _e=B._init,Q(j,D,_e(B._payload),ie)}if(Cr(B)||ve(B))return _e!==null?null:X(j,D,B,ie,null);Ic(j,B)}return null}function de(j,D,B,ie,_e){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return j=j.get(B)||null,A(D,j,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case Ie:return j=j.get(ie.key===null?B:ie.key)||null,k(D,j,ie,_e);case ce:return j=j.get(ie.key===null?B:ie.key)||null,q(D,j,ie,_e);case ut:var Se=ie._init;return de(j,D,B,Se(ie._payload),_e)}if(Cr(ie)||ve(ie))return j=j.get(B)||null,X(D,j,ie,_e,null);Ic(D,ie)}return null}function me(j,D,B,ie){for(var _e=null,Se=null,Ae=D,Ce=D=0,Dt=null;Ae!==null&&Ce<B.length;Ce++){Ae.index>Ce?(Dt=Ae,Ae=null):Dt=Ae.sibling;var ze=Q(j,Ae,B[Ce],ie);if(ze===null){Ae===null&&(Ae=Dt);break}i&&Ae&&ze.alternate===null&&s(j,Ae),D=g(ze,D,Ce),Se===null?_e=ze:Se.sibling=ze,Se=ze,Ae=Dt}if(Ce===B.length)return l(j,Ae),nt&&Es(j,Ce),_e;if(Ae===null){for(;Ce<B.length;Ce++)Ae=Y(j,B[Ce],ie),Ae!==null&&(D=g(Ae,D,Ce),Se===null?_e=Ae:Se.sibling=Ae,Se=Ae);return nt&&Es(j,Ce),_e}for(Ae=h(j,Ae);Ce<B.length;Ce++)Dt=de(Ae,j,Ce,B[Ce],ie),Dt!==null&&(i&&Dt.alternate!==null&&Ae.delete(Dt.key===null?Ce:Dt.key),D=g(Dt,D,Ce),Se===null?_e=Dt:Se.sibling=Dt,Se=Dt);return i&&Ae.forEach(function(Pi){return s(j,Pi)}),nt&&Es(j,Ce),_e}function ye(j,D,B,ie){var _e=ve(B);if(typeof _e!="function")throw Error(t(150));if(B=_e.call(B),B==null)throw Error(t(151));for(var Se=_e=null,Ae=D,Ce=D=0,Dt=null,ze=B.next();Ae!==null&&!ze.done;Ce++,ze=B.next()){Ae.index>Ce?(Dt=Ae,Ae=null):Dt=Ae.sibling;var Pi=Q(j,Ae,ze.value,ie);if(Pi===null){Ae===null&&(Ae=Dt);break}i&&Ae&&Pi.alternate===null&&s(j,Ae),D=g(Pi,D,Ce),Se===null?_e=Pi:Se.sibling=Pi,Se=Pi,Ae=Dt}if(ze.done)return l(j,Ae),nt&&Es(j,Ce),_e;if(Ae===null){for(;!ze.done;Ce++,ze=B.next())ze=Y(j,ze.value,ie),ze!==null&&(D=g(ze,D,Ce),Se===null?_e=ze:Se.sibling=ze,Se=ze);return nt&&Es(j,Ce),_e}for(Ae=h(j,Ae);!ze.done;Ce++,ze=B.next())ze=de(Ae,j,Ce,ze.value,ie),ze!==null&&(i&&ze.alternate!==null&&Ae.delete(ze.key===null?Ce:ze.key),D=g(ze,D,Ce),Se===null?_e=ze:Se.sibling=ze,Se=ze);return i&&Ae.forEach(function(X1){return s(j,X1)}),nt&&Es(j,Ce),_e}function ft(j,D,B,ie){if(typeof B=="object"&&B!==null&&B.type===C&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:e:{for(var _e=B.key,Se=D;Se!==null;){if(Se.key===_e){if(_e=B.type,_e===C){if(Se.tag===7){l(j,Se.sibling),D=p(Se,B.props.children),D.return=j,j=D;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===ut&&oy(_e)===Se.type){l(j,Se.sibling),D=p(Se,B.props),D.ref=gl(j,Se,B),D.return=j,j=D;break e}l(j,Se);break}else s(j,Se);Se=Se.sibling}B.type===C?(D=Cs(B.props.children,j.mode,ie,B.key),D.return=j,j=D):(ie=Kc(B.type,B.key,B.props,null,j.mode,ie),ie.ref=gl(j,D,B),ie.return=j,j=ie)}return E(j);case ce:e:{for(Se=B.key;D!==null;){if(D.key===Se)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){l(j,D.sibling),D=p(D,B.children||[]),D.return=j,j=D;break e}else{l(j,D);break}else s(j,D);D=D.sibling}D=Jf(B,j.mode,ie),D.return=j,j=D}return E(j);case ut:return Se=B._init,ft(j,D,Se(B._payload),ie)}if(Cr(B))return me(j,D,B,ie);if(ve(B))return ye(j,D,B,ie);Ic(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(l(j,D.sibling),D=p(D,B),D.return=j,j=D):(l(j,D),D=Yf(B,j.mode,ie),D.return=j,j=D),E(j)):l(j,D)}return ft}var Wo=ay(!0),ly=ay(!1),Tc=gi(null),Sc=null,Ko=null,af=null;function lf(){af=Ko=Sc=null}function uf(i){var s=Tc.current;Ze(Tc),i._currentValue=s}function cf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Ho(i,s){Sc=i,af=Ko=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ln=!0),i.firstContext=null)}function xn(i){var s=i._currentValue;if(af!==i)if(i={context:i,memoizedValue:s,next:null},Ko===null){if(Sc===null)throw Error(t(308));Ko=i,Sc.dependencies={lanes:0,firstContext:i}}else Ko=Ko.next=i;return s}var ws=null;function hf(i){ws===null?ws=[i]:ws.push(i)}function uy(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,hf(s)):(l.next=p.next,p.next=l),s.interleaved=l,Br(i,h)}function Br(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var vi=!1;function df(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Be&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Br(i,l)}return p=h.interleaved,p===null?(s.next=s,hf(h)):(s.next=p.next,p.next=s),h.interleaved=s,Br(i,l)}function Ac(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,ui(i,l)}}function hy(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Rc(i,s,l,h){var p=i.updateQueue;vi=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var k=A,q=k.next;k.next=null,E===null?g=q:E.next=q,E=k;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=q:A.next=q,X.lastBaseUpdate=k))}if(g!==null){var Y=p.baseState;E=0,X=q=k=null,A=g;do{var Q=A.lane,de=A.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:de,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var me=i,ye=A;switch(Q=s,de=l,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){Y=me.call(de,Y,Q);break e}Y=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,Q=typeof me=="function"?me.call(de,Y,Q):me,Q==null)break e;Y=he({},Y,Q);break e;case 2:vi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,Q=p.effects,Q===null?p.effects=[A]:Q.push(A))}else de={eventTime:de,lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(q=X=de,k=Y):X=X.next=de,E|=Q;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;Q=A,A=Q.next,Q.next=null,p.lastBaseUpdate=Q,p.shared.pending=null}}while(!0);if(X===null&&(k=Y),p.baseState=k,p.firstBaseUpdate=q,p.lastBaseUpdate=X,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Ss|=E,i.lanes=E,i.memoizedState=Y}}function dy(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var yl={},fr=gi(yl),_l=gi(yl),vl=gi(yl);function Is(i){if(i===yl)throw Error(t(174));return i}function ff(i,s){switch(Ye(vl,s),Ye(_l,i),Ye(fr,yl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Tt(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Tt(s,i)}Ze(fr),Ye(fr,s)}function Go(){Ze(fr),Ze(_l),Ze(vl)}function fy(i){Is(vl.current);var s=Is(fr.current),l=Tt(s,i.type);s!==l&&(Ye(_l,i),Ye(fr,l))}function pf(i){_l.current===i&&(Ze(fr),Ze(_l))}var st=gi(0);function Pc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mf=[];function gf(){for(var i=0;i<mf.length;i++)mf[i]._workInProgressVersionPrimary=null;mf.length=0}var Cc=le.ReactCurrentDispatcher,yf=le.ReactCurrentBatchConfig,Ts=0,ot=null,At=null,xt=null,kc=!1,El=!1,wl=0,_1=0;function $t(){throw Error(t(321))}function _f(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Gn(i[l],s[l]))return!1;return!0}function vf(i,s,l,h,p,g){if(Ts=g,ot=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cc.current=i===null||i.memoizedState===null?I1:T1,i=l(h,p),El){g=0;do{if(El=!1,wl=0,25<=g)throw Error(t(301));g+=1,xt=At=null,s.updateQueue=null,Cc.current=S1,i=l(h,p)}while(El)}if(Cc.current=Dc,s=At!==null&&At.next!==null,Ts=0,xt=At=ot=null,kc=!1,s)throw Error(t(300));return i}function Ef(){var i=wl!==0;return wl=0,i}function pr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?ot.memoizedState=xt=i:xt=xt.next=i,xt}function Nn(){if(At===null){var i=ot.alternate;i=i!==null?i.memoizedState:null}else i=At.next;var s=xt===null?ot.memoizedState:xt.next;if(s!==null)xt=s,At=i;else{if(i===null)throw Error(t(310));At=i,i={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},xt===null?ot.memoizedState=xt=i:xt=xt.next=i}return xt}function Il(i,s){return typeof s=="function"?s(i):s}function wf(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=At,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var A=E=null,k=null,q=g;do{var X=q.lane;if((Ts&X)===X)k!==null&&(k=k.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),h=q.hasEagerState?q.eagerState:i(h,q.action);else{var Y={lane:X,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};k===null?(A=k=Y,E=h):k=k.next=Y,ot.lanes|=X,Ss|=X}q=q.next}while(q!==null&&q!==g);k===null?E=h:k.next=A,Gn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=k,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do g=p.lane,ot.lanes|=g,Ss|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function If(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do g=i(g,E.action),E=E.next;while(E!==p);Gn(g,s.memoizedState)||(ln=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function py(){}function my(i,s){var l=ot,h=Nn(),p=s(),g=!Gn(h.memoizedState,p);if(g&&(h.memoizedState=p,ln=!0),h=h.queue,Tf(_y.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,Tl(9,yy.bind(null,l,h,p,s),void 0,null),Nt===null)throw Error(t(349));(Ts&30)!==0||gy(l,s,p)}return p}function gy(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function yy(i,s,l,h){s.value=l,s.getSnapshot=h,vy(s)&&Ey(i)}function _y(i,s,l){return l(function(){vy(s)&&Ey(i)})}function vy(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Gn(i,l)}catch{return!0}}function Ey(i){var s=Br(i,1);s!==null&&Zn(s,i,1,-1)}function wy(i){var s=pr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:i},s.queue=i,i=i.dispatch=w1.bind(null,ot,i),[s.memoizedState,i]}function Tl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function Iy(){return Nn().memoizedState}function xc(i,s,l,h){var p=pr();ot.flags|=i,p.memoizedState=Tl(1|s,l,void 0,h===void 0?null:h)}function Nc(i,s,l,h){var p=Nn();h=h===void 0?null:h;var g=void 0;if(At!==null){var E=At.memoizedState;if(g=E.destroy,h!==null&&_f(h,E.deps)){p.memoizedState=Tl(s,l,g,h);return}}ot.flags|=i,p.memoizedState=Tl(1|s,l,g,h)}function Ty(i,s){return xc(8390656,8,i,s)}function Tf(i,s){return Nc(2048,8,i,s)}function Sy(i,s){return Nc(4,2,i,s)}function Ay(i,s){return Nc(4,4,i,s)}function Ry(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Py(i,s,l){return l=l!=null?l.concat([i]):null,Nc(4,4,Ry.bind(null,s,i),l)}function Sf(){}function Cy(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_f(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function ky(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_f(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function xy(i,s,l){return(Ts&21)===0?(i.baseState&&(i.baseState=!1,ln=!0),i.memoizedState=l):(Gn(l,s)||(l=ds(),ot.lanes|=l,Ss|=l,i.baseState=!0),s)}function v1(i,s){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=yf.transition;yf.transition={};try{i(!1),s()}finally{Me=l,yf.transition=h}}function Ny(){return Nn().memoizedState}function E1(i,s,l){var h=Si(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Dy(i))by(s,l);else if(l=uy(i,s,l,h),l!==null){var p=Zt();Zn(l,i,h,p),Vy(l,s,h)}}function w1(i,s,l){var h=Si(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Dy(i))by(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,l);if(p.hasEagerState=!0,p.eagerState=A,Gn(A,E)){var k=s.interleaved;k===null?(p.next=p,hf(s)):(p.next=k.next,k.next=p),s.interleaved=p;return}}catch{}finally{}l=uy(i,s,p,h),l!==null&&(p=Zt(),Zn(l,i,h,p),Vy(l,s,h))}}function Dy(i){var s=i.alternate;return i===ot||s!==null&&s===ot}function by(i,s){El=kc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Vy(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,ui(i,l)}}var Dc={readContext:xn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},I1={readContext:xn,useCallback:function(i,s){return pr().memoizedState=[i,s===void 0?null:s],i},useContext:xn,useEffect:Ty,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,xc(4194308,4,Ry.bind(null,s,i),l)},useLayoutEffect:function(i,s){return xc(4194308,4,i,s)},useInsertionEffect:function(i,s){return xc(4,2,i,s)},useMemo:function(i,s){var l=pr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=pr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=E1.bind(null,ot,i),[h.memoizedState,i]},useRef:function(i){var s=pr();return i={current:i},s.memoizedState=i},useState:wy,useDebugValue:Sf,useDeferredValue:function(i){return pr().memoizedState=i},useTransition:function(){var i=wy(!1),s=i[0];return i=v1.bind(null,i[1]),pr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=ot,p=pr();if(nt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Nt===null)throw Error(t(349));(Ts&30)!==0||gy(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,Ty(_y.bind(null,h,g,i),[i]),h.flags|=2048,Tl(9,yy.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=pr(),s=Nt.identifierPrefix;if(nt){var l=jr,h=Ur;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=wl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=_1++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},T1={readContext:xn,useCallback:Cy,useContext:xn,useEffect:Tf,useImperativeHandle:Py,useInsertionEffect:Sy,useLayoutEffect:Ay,useMemo:ky,useReducer:wf,useRef:Iy,useState:function(){return wf(Il)},useDebugValue:Sf,useDeferredValue:function(i){var s=Nn();return xy(s,At.memoizedState,i)},useTransition:function(){var i=wf(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:py,useSyncExternalStore:my,useId:Ny,unstable_isNewReconciler:!1},S1={readContext:xn,useCallback:Cy,useContext:xn,useEffect:Tf,useImperativeHandle:Py,useInsertionEffect:Sy,useLayoutEffect:Ay,useMemo:ky,useReducer:If,useRef:Iy,useState:function(){return If(Il)},useDebugValue:Sf,useDeferredValue:function(i){var s=Nn();return At===null?s.memoizedState=i:xy(s,At.memoizedState,i)},useTransition:function(){var i=If(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:py,useSyncExternalStore:my,useId:Ny,unstable_isNewReconciler:!1};function Xn(i,s){if(i&&i.defaultProps){s=he({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Af(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:he({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var bc={isMounted:function(i){return(i=i._reactInternals)?Bn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Zt(),p=Si(i),g=zr(h,p);g.payload=s,l!=null&&(g.callback=l),s=Ei(i,g,p),s!==null&&(Zn(s,i,p,h),Ac(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Zt(),p=Si(i),g=zr(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Ei(i,g,p),s!==null&&(Zn(s,i,p,h),Ac(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Zt(),h=Si(i),p=zr(l,h);p.tag=2,s!=null&&(p.callback=s),s=Ei(i,p,h),s!==null&&(Zn(s,i,h,l),Ac(s,i,h))}};function Oy(i,s,l,h,p,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!ul(l,h)||!ul(p,g):!0}function Ly(i,s,l){var h=!1,p=yi,g=s.contextType;return typeof g=="object"&&g!==null?g=xn(g):(p=an(s)?_s:zt.current,h=s.contextTypes,g=(h=h!=null)?Bo(i,p):yi),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=bc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),s}function My(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&bc.enqueueReplaceState(s,s.state,null)}function Rf(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},df(i);var g=s.contextType;typeof g=="object"&&g!==null?p.context=xn(g):(g=an(s)?_s:zt.current,p.context=Bo(i,g)),p.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Af(i,s,g,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&bc.enqueueReplaceState(p,p.state,null),Rc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Qo(i,s){try{var l="",h=s;do l+=Ne(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:p,digest:null}}function Pf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Cf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function Fy(i,s,l){l=zr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){jc||(jc=!0,$f=h),Cf(i,s)},l}function Uy(i,s,l){l=zr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Cf(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Cf(i,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function jy(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new A1;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=U1.bind(null,i,s,l),s.then(i,i))}function By(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function zy(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=zr(-1,1),s.tag=2,Ei(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var R1=le.ReactCurrentOwner,ln=!1;function Jt(i,s,l,h){s.child=i===null?ly(s,null,l,h):Wo(s,i.child,l,h)}function $y(i,s,l,h,p){l=l.render;var g=s.ref;return Ho(s,p),h=vf(i,s,l,h,g,p),l=Ef(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(nt&&l&&tf(s),s.flags|=1,Jt(i,s,h,p),s.child)}function qy(i,s,l,h,p){if(i===null){var g=l.type;return typeof g=="function"&&!Xf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Wy(i,s,g,h,p)):(i=Kc(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&p)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:ul,l(E,h)&&i.ref===s.ref)return $r(i,s,p)}return s.flags|=1,i=Ri(g,h),i.ref=s.ref,i.return=s,s.child=i}function Wy(i,s,l,h,p){if(i!==null){var g=i.memoizedProps;if(ul(g,h)&&i.ref===s.ref)if(ln=!1,s.pendingProps=h=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(ln=!0);else return s.lanes=i.lanes,$r(i,s,p)}return kf(i,s,l,h,p)}function Ky(i,s,l){var h=s.pendingProps,p=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Yo,En),En|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ye(Yo,En),En|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Ye(Yo,En),En|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Ye(Yo,En),En|=h;return Jt(i,s,p,l),s.child}function Hy(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kf(i,s,l,h,p){var g=an(l)?_s:zt.current;return g=Bo(s,g),Ho(s,p),l=vf(i,s,l,h,g,p),h=Ef(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(nt&&h&&tf(s),s.flags|=1,Jt(i,s,l,p),s.child)}function Gy(i,s,l,h,p){if(an(l)){var g=!0;yc(s)}else g=!1;if(Ho(s,p),s.stateNode===null)Oc(i,s),Ly(s,l,h),Rf(s,l,h,p),h=!0;else if(i===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var k=E.context,q=l.contextType;typeof q=="object"&&q!==null?q=xn(q):(q=an(l)?_s:zt.current,q=Bo(s,q));var X=l.getDerivedStateFromProps,Y=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||k!==q)&&My(s,E,h,q),vi=!1;var Q=s.memoizedState;E.state=Q,Rc(s,h,E,p),k=s.memoizedState,A!==h||Q!==k||on.current||vi?(typeof X=="function"&&(Af(s,l,X,h),k=s.memoizedState),(A=vi||Oy(s,l,A,h,Q,k,q))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),E.props=h,E.state=k,E.context=q,h=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,cy(i,s),A=s.memoizedProps,q=s.type===s.elementType?A:Xn(s.type,A),E.props=q,Y=s.pendingProps,Q=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=xn(k):(k=an(l)?_s:zt.current,k=Bo(s,k));var de=l.getDerivedStateFromProps;(X=typeof de=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==Y||Q!==k)&&My(s,E,h,k),vi=!1,Q=s.memoizedState,E.state=Q,Rc(s,h,E,p);var me=s.memoizedState;A!==Y||Q!==me||on.current||vi?(typeof de=="function"&&(Af(s,l,de,h),me=s.memoizedState),(q=vi||Oy(s,l,q,h,Q,me,k)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,me,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,me,k)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=me),E.props=h,E.state=me,E.context=k,h=q):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),h=!1)}return xf(i,s,l,h,g,p)}function xf(i,s,l,h,p,g){Hy(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return p&&Zg(s,l,!1),$r(i,s,g);h=s.stateNode,R1.current=s;var A=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=Wo(s,i.child,null,g),s.child=Wo(s,null,A,g)):Jt(i,s,A,g),s.memoizedState=h.state,p&&Zg(s,l,!0),s.child}function Qy(i){var s=i.stateNode;s.pendingContext?Yg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Yg(i,s.context,!1),ff(i,s.containerInfo)}function Xy(i,s,l,h,p){return qo(),of(p),s.flags|=256,Jt(i,s,l,h),s.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Df(i){return{baseLanes:i,cachePool:null,transitions:null}}function Yy(i,s,l){var h=s.pendingProps,p=st.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ye(st,p&1),i===null)return sf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Hc(E,h,0,null),i=Cs(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=Df(l),s.memoizedState=Nf,i):bf(s,E));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return P1(i,s,E,h,A,p,l);if(g){g=h.fallback,E=s.mode,p=i.child,A=p.sibling;var k={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Ri(p,k),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?g=Ri(A,g):(g=Cs(g,E,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=i.child.memoizedState,E=E===null?Df(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=i.childLanes&~l,s.memoizedState=Nf,h}return g=i.child,i=g.sibling,h=Ri(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function bf(i,s){return s=Hc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vc(i,s,l,h){return h!==null&&of(h),Wo(s,i.child,null,l),i=bf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function P1(i,s,l,h,p,g,E){if(l)return s.flags&256?(s.flags&=-257,h=Pf(Error(t(422))),Vc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=Hc({mode:"visible",children:h.children},p,0,null),g=Cs(g,p,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Wo(s,i.child,null,E),s.child.memoizedState=Df(E),s.memoizedState=Nf,g);if((s.mode&1)===0)return Vc(i,s,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Pf(g,h,void 0),Vc(i,s,E,h)}if(A=(E&i.childLanes)!==0,ln||A){if(h=Nt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Br(i,p),Zn(h,i,p,-1))}return Qf(),h=Pf(Error(t(421))),Vc(i,s,E,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=j1.bind(null,i),p._reactRetry=s,null):(i=g.treeContext,vn=mi(p.nextSibling),_n=s,nt=!0,Qn=null,i!==null&&(Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=vs,Ur=i.id,jr=i.overflow,vs=s),s=bf(s,h.children),s.flags|=4096,s)}function Jy(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),cf(i.return,s,l)}function Vf(i,s,l,h,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function Zy(i,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(Jt(i,s,h.children,l),h=st.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jy(i,l,s);else if(i.tag===19)Jy(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Ye(st,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Pc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Vf(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Pc(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Vf(s,!0,l,null,g);break;case"together":Vf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Oc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $r(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ss|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ri(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ri(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function C1(i,s,l){switch(s.tag){case 3:Qy(s),qo();break;case 5:fy(s);break;case 1:an(s.type)&&yc(s);break;case 4:ff(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Ye(Tc,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ye(st,st.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Yy(i,s,l):(Ye(st,st.current&1),i=$r(i,s,l),i!==null?i.sibling:null);Ye(st,st.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return Zy(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ye(st,st.current),h)break;return null;case 22:case 23:return s.lanes=0,Ky(i,s,l)}return $r(i,s,l)}var e_,Of,t_,n_;e_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Of=function(){},t_=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,Is(fr.current);var g=null;switch(l){case"input":p=ts(i,p),h=ts(i,h),g=[];break;case"select":p=he({},p,{value:void 0}),h=he({},h,{value:void 0}),g=[];break;case"textarea":p=Fa(i,p),h=Fa(i,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=pc)}qa(l,h);var E;l=null;for(q in p)if(!h.hasOwnProperty(q)&&p.hasOwnProperty(q)&&p[q]!=null)if(q==="style"){var A=p[q];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(o.hasOwnProperty(q)?g||(g=[]):(g=g||[]).push(q,null));for(q in h){var k=h[q];if(A=p!=null?p[q]:void 0,h.hasOwnProperty(q)&&k!==A&&(k!=null||A!=null))if(q==="style")if(A){for(E in A)!A.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&A[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(g||(g=[]),g.push(q,l)),l=k;else q==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(q,k)):q==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(q,""+k):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(o.hasOwnProperty(q)?(k!=null&&q==="onScroll"&&Je("scroll",i),g||A===k||(g=[])):(g=g||[]).push(q,k))}l&&(g=g||[]).push("style",l);var q=g;(s.updateQueue=q)&&(s.flags|=4)}},n_=function(i,s,l,h){l!==h&&(s.flags|=4)};function Sl(i,s){if(!nt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function qt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function k1(i,s,l){var h=s.pendingProps;switch(nf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(s),null;case 1:return an(s.type)&&gc(),qt(s),null;case 3:return h=s.stateNode,Go(),Ze(on),Ze(zt),gf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(wc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Qn!==null&&(Kf(Qn),Qn=null))),Of(i,s),qt(s),null;case 5:pf(s);var p=Is(vl.current);if(l=s.type,i!==null&&s.stateNode!=null)t_(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return qt(s),null}if(i=Is(fr.current),wc(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[dr]=s,h[pl]=g,i=(s.mode&1)!==0,l){case"dialog":Je("cancel",h),Je("close",h);break;case"iframe":case"object":case"embed":Je("load",h);break;case"video":case"audio":for(p=0;p<hl.length;p++)Je(hl[p],h);break;case"source":Je("error",h);break;case"img":case"image":case"link":Je("error",h),Je("load",h);break;case"details":Je("toggle",h);break;case"input":lo(h,g),Je("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Je("invalid",h);break;case"textarea":co(h,g),Je("invalid",h)}qa(l,g),p=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&fc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&fc(h.textContent,A,i),p=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Je("scroll",h)}switch(l){case"input":Fn(h),Uu(h,g,!0);break;case"textarea":Fn(h),Ua(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=pc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=It(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[dr]=s,i[pl]=h,e_(i,s,!1,!1),s.stateNode=i;e:{switch(E=Wa(l,h),l){case"dialog":Je("cancel",i),Je("close",i),p=h;break;case"iframe":case"object":case"embed":Je("load",i),p=h;break;case"video":case"audio":for(p=0;p<hl.length;p++)Je(hl[p],i);p=h;break;case"source":Je("error",i),p=h;break;case"img":case"image":case"link":Je("error",i),Je("load",i),p=h;break;case"details":Je("toggle",i),p=h;break;case"input":lo(i,h),p=ts(i,h),Je("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=he({},h,{value:void 0}),Je("invalid",i);break;case"textarea":co(i,h),p=Fa(i,h),Je("invalid",i);break;default:p=h}qa(l,p),A=p;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?za(i,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ja(i,k)):g==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&ii(i,k):typeof k=="number"&&ii(i,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Je("scroll",i):k!=null&&Z(i,g,k,E))}switch(l){case"input":Fn(i),Uu(i,h,!1);break;case"textarea":Fn(i),Ua(i);break;case"option":h.value!=null&&i.setAttribute("value",""+re(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?kr(i,!!h.multiple,g,!1):h.defaultValue!=null&&kr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=pc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return qt(s),null;case 6:if(i&&s.stateNode!=null)n_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Is(vl.current),Is(fr.current),wc(s)){if(h=s.stateNode,l=s.memoizedProps,h[dr]=s,(g=h.nodeValue!==l)&&(i=_n,i!==null))switch(i.tag){case 3:fc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&fc(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=s,s.stateNode=h}return qt(s),null;case 13:if(Ze(st),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(nt&&vn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)sy(),qo(),s.flags|=98560,g=!1;else if(g=wc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[dr]=s}else qo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;qt(s),g=!1}else Qn!==null&&(Kf(Qn),Qn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(st.current&1)!==0?Rt===0&&(Rt=3):Qf())),s.updateQueue!==null&&(s.flags|=4),qt(s),null);case 4:return Go(),Of(i,s),i===null&&dl(s.stateNode.containerInfo),qt(s),null;case 10:return uf(s.type._context),qt(s),null;case 17:return an(s.type)&&gc(),qt(s),null;case 19:if(Ze(st),g=s.memoizedState,g===null)return qt(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)Sl(g,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=Pc(i),E!==null){for(s.flags|=128,Sl(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,i=E.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ye(st,st.current&1|2),s.child}i=i.sibling}g.tail!==null&&Xe()>Jo&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Pc(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Sl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!nt)return qt(s),null}else 2*Xe()-g.renderingStartTime>Jo&&l!==1073741824&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Xe(),s.sibling=null,l=st.current,Ye(st,h?l&1|2:l&1),s):(qt(s),null);case 22:case 23:return Gf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(En&1073741824)!==0&&(qt(s),s.subtreeFlags&6&&(s.flags|=8192)):qt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function x1(i,s){switch(nf(s),s.tag){case 1:return an(s.type)&&gc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Go(),Ze(on),Ze(zt),gf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return pf(s),null;case 13:if(Ze(st),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));qo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(st),null;case 4:return Go(),null;case 10:return uf(s.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var Lc=!1,Wt=!1,N1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Xo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ct(i,s,h)}else l.current=null}function Lf(i,s,l){try{l()}catch(h){ct(i,s,h)}}var r_=!1;function D1(i,s){if(Hd=di,i=Og(),Ud(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,A=-1,k=-1,q=0,X=0,Y=i,Q=null;t:for(;;){for(var de;Y!==l||p!==0&&Y.nodeType!==3||(A=E+p),Y!==g||h!==0&&Y.nodeType!==3||(k=E+h),Y.nodeType===3&&(E+=Y.nodeValue.length),(de=Y.firstChild)!==null;)Q=Y,Y=de;for(;;){if(Y===i)break t;if(Q===l&&++q===p&&(A=E),Q===g&&++X===h&&(k=E),(de=Y.nextSibling)!==null)break;Y=Q,Q=Y.parentNode}Y=de}l=A===-1||k===-1?null:{start:A,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gd={focusedElem:i,selectionRange:l},di=!1,pe=s;pe!==null;)if(s=pe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,pe=i;else for(;pe!==null;){s=pe;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,ft=me.memoizedState,j=s.stateNode,D=j.getSnapshotBeforeUpdate(s.elementType===s.type?ye:Xn(s.type,ye),ft);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ie){ct(s,s.return,ie)}if(i=s.sibling,i!==null){i.return=s.return,pe=i;break}pe=s.return}return me=r_,r_=!1,me}function Al(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&Lf(s,l,g)}p=p.next}while(p!==h)}}function Mc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Mf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function i_(i){var s=i.alternate;s!==null&&(i.alternate=null,i_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[dr],delete s[pl],delete s[Jd],delete s[p1],delete s[m1])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function s_(i){return i.tag===5||i.tag===3||i.tag===4}function o_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||s_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ff(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=pc));else if(h!==4&&(i=i.child,i!==null))for(Ff(i,s,l),i=i.sibling;i!==null;)Ff(i,s,l),i=i.sibling}function Uf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Uf(i,s,l),i=i.sibling;i!==null;)Uf(i,s,l),i=i.sibling}var Mt=null,Yn=!1;function wi(i,s,l){for(l=l.child;l!==null;)a_(i,s,l),l=l.sibling}function a_(i,s,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(cs,l)}catch{}switch(l.tag){case 5:Wt||Xo(l,s);case 6:var h=Mt,p=Yn;Mt=null,wi(i,s,l),Mt=h,Yn=p,Mt!==null&&(Yn?(i=Mt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mt.removeChild(l.stateNode));break;case 18:Mt!==null&&(Yn?(i=Mt,l=l.stateNode,i.nodeType===8?Yd(i.parentNode,l):i.nodeType===1&&Yd(i,l),Kn(i)):Yd(Mt,l.stateNode));break;case 4:h=Mt,p=Yn,Mt=l.stateNode.containerInfo,Yn=!0,wi(i,s,l),Mt=h,Yn=p;break;case 0:case 11:case 14:case 15:if(!Wt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Lf(l,s,E),p=p.next}while(p!==h)}wi(i,s,l);break;case 1:if(!Wt&&(Xo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){ct(l,s,A)}wi(i,s,l);break;case 21:wi(i,s,l);break;case 22:l.mode&1?(Wt=(h=Wt)||l.memoizedState!==null,wi(i,s,l),Wt=h):wi(i,s,l);break;default:wi(i,s,l)}}function l_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new N1),s.forEach(function(h){var p=B1.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Jn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=i,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:Mt=A.stateNode,Yn=!1;break e;case 3:Mt=A.stateNode.containerInfo,Yn=!0;break e;case 4:Mt=A.stateNode.containerInfo,Yn=!0;break e}A=A.return}if(Mt===null)throw Error(t(160));a_(g,E,p),Mt=null,Yn=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(q){ct(p,s,q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)u_(s,i),s=s.sibling}function u_(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Jn(s,i),mr(i),h&4){try{Al(3,i,i.return),Mc(3,i)}catch(ye){ct(i,i.return,ye)}try{Al(5,i,i.return)}catch(ye){ct(i,i.return,ye)}}break;case 1:Jn(s,i),mr(i),h&512&&l!==null&&Xo(l,l.return);break;case 5:if(Jn(s,i),mr(i),h&512&&l!==null&&Xo(l,l.return),i.flags&32){var p=i.stateNode;try{ii(p,"")}catch(ye){ct(i,i.return,ye)}}if(h&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,E=l!==null?l.memoizedProps:g,A=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&La(p,g),Wa(A,E);var q=Wa(A,g);for(E=0;E<k.length;E+=2){var X=k[E],Y=k[E+1];X==="style"?za(p,Y):X==="dangerouslySetInnerHTML"?ja(p,Y):X==="children"?ii(p,Y):Z(p,X,Y,q)}switch(A){case"input":Ma(p,g);break;case"textarea":ho(p,g);break;case"select":var Q=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var de=g.value;de!=null?kr(p,!!g.multiple,de,!1):Q!==!!g.multiple&&(g.defaultValue!=null?kr(p,!!g.multiple,g.defaultValue,!0):kr(p,!!g.multiple,g.multiple?[]:"",!1))}p[pl]=g}catch(ye){ct(i,i.return,ye)}}break;case 6:if(Jn(s,i),mr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(ye){ct(i,i.return,ye)}}break;case 3:if(Jn(s,i),mr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Kn(s.containerInfo)}catch(ye){ct(i,i.return,ye)}break;case 4:Jn(s,i),mr(i);break;case 13:Jn(s,i),mr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(zf=Xe())),h&4&&l_(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(Wt=(q=Wt)||X,Jn(s,i),Wt=q):Jn(s,i),mr(i),h&8192){if(q=i.memoizedState!==null,(i.stateNode.isHidden=q)&&!X&&(i.mode&1)!==0)for(pe=i,X=i.child;X!==null;){for(Y=pe=X;pe!==null;){switch(Q=pe,de=Q.child,Q.tag){case 0:case 11:case 14:case 15:Al(4,Q,Q.return);break;case 1:Xo(Q,Q.return);var me=Q.stateNode;if(typeof me.componentWillUnmount=="function"){h=Q,l=Q.return;try{s=h,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ye){ct(h,l,ye)}}break;case 5:Xo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){d_(Y);continue}}de!==null?(de.return=Q,pe=de):d_(Y)}X=X.sibling}e:for(X=null,Y=i;;){if(Y.tag===5){if(X===null){X=Y;try{p=Y.stateNode,q?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Y.stateNode,k=Y.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Ba("display",E))}catch(ye){ct(i,i.return,ye)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=q?"":Y.memoizedProps}catch(ye){ct(i,i.return,ye)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===i)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===i)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===i)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Jn(s,i),mr(i),h&4&&l_(i);break;case 21:break;default:Jn(s,i),mr(i)}}function mr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(s_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ii(p,""),h.flags&=-33);var g=o_(i);Uf(i,g,p);break;case 3:case 4:var E=h.stateNode.containerInfo,A=o_(i);Ff(i,A,E);break;default:throw Error(t(161))}}catch(k){ct(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function b1(i,s,l){pe=i,c_(i)}function c_(i,s,l){for(var h=(i.mode&1)!==0;pe!==null;){var p=pe,g=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Lc;if(!E){var A=p.alternate,k=A!==null&&A.memoizedState!==null||Wt;A=Lc;var q=Wt;if(Lc=E,(Wt=k)&&!q)for(pe=p;pe!==null;)E=pe,k=E.child,E.tag===22&&E.memoizedState!==null?f_(p):k!==null?(k.return=E,pe=k):f_(p);for(;g!==null;)pe=g,c_(g),g=g.sibling;pe=p,Lc=A,Wt=q}h_(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,pe=g):h_(i)}}function h_(i){for(;pe!==null;){var s=pe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Wt||Mc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Wt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Xn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&dy(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}dy(s,E,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var q=s.alternate;if(q!==null){var X=q.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&Kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wt||s.flags&512&&Mf(s)}catch(Q){ct(s,s.return,Q)}}if(s===i){pe=null;break}if(l=s.sibling,l!==null){l.return=s.return,pe=l;break}pe=s.return}}function d_(i){for(;pe!==null;){var s=pe;if(s===i){pe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,pe=l;break}pe=s.return}}function f_(i){for(;pe!==null;){var s=pe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Mc(4,s)}catch(k){ct(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(k){ct(s,p,k)}}var g=s.return;try{Mf(s)}catch(k){ct(s,g,k)}break;case 5:var E=s.return;try{Mf(s)}catch(k){ct(s,E,k)}}}catch(k){ct(s,s.return,k)}if(s===i){pe=null;break}var A=s.sibling;if(A!==null){A.return=s.return,pe=A;break}pe=s.return}}var V1=Math.ceil,Fc=le.ReactCurrentDispatcher,jf=le.ReactCurrentOwner,Dn=le.ReactCurrentBatchConfig,Be=0,Nt=null,gt=null,Ft=0,En=0,Yo=gi(0),Rt=0,Rl=null,Ss=0,Uc=0,Bf=0,Pl=null,un=null,zf=0,Jo=1/0,qr=null,jc=!1,$f=null,Ii=null,Bc=!1,Ti=null,zc=0,Cl=0,qf=null,$c=-1,qc=0;function Zt(){return(Be&6)!==0?Xe():$c!==-1?$c:$c=Xe()}function Si(i){return(i.mode&1)===0?1:(Be&2)!==0&&Ft!==0?Ft&-Ft:y1.transition!==null?(qc===0&&(qc=ds()),qc):(i=Me,i!==0||(i=window.event,i=i===void 0?16:nl(i.type)),i)}function Zn(i,s,l,h){if(50<Cl)throw Cl=0,qf=null,Error(t(185));li(i,l,h),((Be&2)===0||i!==Nt)&&(i===Nt&&((Be&2)===0&&(Uc|=l),Rt===4&&Ai(i,Ft)),cn(i,h),l===1&&Be===0&&(s.mode&1)===0&&(Jo=Xe()+500,_c&&_i()))}function cn(i,s){var l=i.callbackNode;Dr(i,s);var h=hs(i,i===Nt?Ft:0);if(h===0)l!==null&&Ya(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Ya(l),s===1)i.tag===0?g1(m_.bind(null,i)):ey(m_.bind(null,i)),d1(function(){(Be&6)===0&&_i()}),l=null;else{switch(ci(h)){case 1:l=us;break;case 4:l=si;break;case 16:l=An;break;case 536870912:l=qu;break;default:l=An}l=T_(l,p_.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function p_(i,s){if($c=-1,qc=0,(Be&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Zo()&&i.callbackNode!==l)return null;var h=hs(i,i===Nt?Ft:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Wc(i,h);else{s=h;var p=Be;Be|=2;var g=y_();(Nt!==i||Ft!==s)&&(qr=null,Jo=Xe()+500,Rs(i,s));do try{M1();break}catch(A){g_(i,A)}while(!0);lf(),Fc.current=g,Be=p,gt!==null?s=0:(Nt=null,Ft=0,s=Rt)}if(s!==0){if(s===2&&(p=mn(i),p!==0&&(h=p,s=Wf(i,p))),s===1)throw l=Rl,Rs(i,0),Ai(i,h),cn(i,Xe()),l;if(s===6)Ai(i,h);else{if(p=i.current.alternate,(h&30)===0&&!O1(p)&&(s=Wc(i,h),s===2&&(g=mn(i),g!==0&&(h=g,s=Wf(i,g))),s===1))throw l=Rl,Rs(i,0),Ai(i,h),cn(i,Xe()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ps(i,un,qr);break;case 3:if(Ai(i,h),(h&130023424)===h&&(s=zf+500-Xe(),10<s)){if(hs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Zt(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Xd(Ps.bind(null,i,un,qr),s);break}Ps(i,un,qr);break;case 4:if(Ai(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var E=31-Xt(h);g=1<<E,E=s[E],E>p&&(p=E),h&=~g}if(h=p,h=Xe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*V1(h/1960))-h,10<h){i.timeoutHandle=Xd(Ps.bind(null,i,un,qr),h);break}Ps(i,un,qr);break;case 5:Ps(i,un,qr);break;default:throw Error(t(329))}}}return cn(i,Xe()),i.callbackNode===l?p_.bind(null,i):null}function Wf(i,s){var l=Pl;return i.current.memoizedState.isDehydrated&&(Rs(i,s).flags|=256),i=Wc(i,s),i!==2&&(s=un,un=l,s!==null&&Kf(s)),i}function Kf(i){un===null?un=i:un.push.apply(un,i)}function O1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!Gn(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ai(i,s){for(s&=~Bf,s&=~Uc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Xt(s),h=1<<l;i[l]=-1,s&=~h}}function m_(i){if((Be&6)!==0)throw Error(t(327));Zo();var s=hs(i,0);if((s&1)===0)return cn(i,Xe()),null;var l=Wc(i,s);if(i.tag!==0&&l===2){var h=mn(i);h!==0&&(s=h,l=Wf(i,h))}if(l===1)throw l=Rl,Rs(i,0),Ai(i,s),cn(i,Xe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ps(i,un,qr),cn(i,Xe()),null}function Hf(i,s){var l=Be;Be|=1;try{return i(s)}finally{Be=l,Be===0&&(Jo=Xe()+500,_c&&_i())}}function As(i){Ti!==null&&Ti.tag===0&&(Be&6)===0&&Zo();var s=Be;Be|=1;var l=Dn.transition,h=Me;try{if(Dn.transition=null,Me=1,i)return i()}finally{Me=h,Dn.transition=l,Be=s,(Be&6)===0&&_i()}}function Gf(){En=Yo.current,Ze(Yo)}function Rs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,h1(l)),gt!==null)for(l=gt.return;l!==null;){var h=l;switch(nf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&gc();break;case 3:Go(),Ze(on),Ze(zt),gf();break;case 5:pf(h);break;case 4:Go();break;case 13:Ze(st);break;case 19:Ze(st);break;case 10:uf(h.type._context);break;case 22:case 23:Gf()}l=l.return}if(Nt=i,gt=i=Ri(i.current,null),Ft=En=s,Rt=0,Rl=null,Bf=Uc=Ss=0,un=Pl=null,ws!==null){for(s=0;s<ws.length;s++)if(l=ws[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=p,h.next=E}l.pending=h}ws=null}return i}function g_(i,s){do{var l=gt;try{if(lf(),Cc.current=Dc,kc){for(var h=ot.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}kc=!1}if(Ts=0,xt=At=ot=null,El=!1,wl=0,jf.current=null,l===null||l.return===null){Rt=1,Rl=s,gt=null;break}e:{var g=i,E=l.return,A=l,k=s;if(s=Ft,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var q=k,X=A,Y=X.tag;if((X.mode&1)===0&&(Y===0||Y===11||Y===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var de=By(E);if(de!==null){de.flags&=-257,zy(de,E,A,g,s),de.mode&1&&jy(g,q,s),s=de,k=q;var me=s.updateQueue;if(me===null){var ye=new Set;ye.add(k),s.updateQueue=ye}else me.add(k);break e}else{if((s&1)===0){jy(g,q,s),Qf();break e}k=Error(t(426))}}else if(nt&&A.mode&1){var ft=By(E);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),zy(ft,E,A,g,s),of(Qo(k,A));break e}}g=k=Qo(k,A),Rt!==4&&(Rt=2),Pl===null?Pl=[g]:Pl.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=Fy(g,k,s);hy(g,j);break e;case 1:A=k;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ii===null||!Ii.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ie=Uy(g,A,s);hy(g,ie);break e}}g=g.return}while(g!==null)}v_(l)}catch(_e){s=_e,gt===l&&l!==null&&(gt=l=l.return);continue}break}while(!0)}function y_(){var i=Fc.current;return Fc.current=Dc,i===null?Dc:i}function Qf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||(Ss&268435455)===0&&(Uc&268435455)===0||Ai(Nt,Ft)}function Wc(i,s){var l=Be;Be|=2;var h=y_();(Nt!==i||Ft!==s)&&(qr=null,Rs(i,s));do try{L1();break}catch(p){g_(i,p)}while(!0);if(lf(),Be=l,Fc.current=h,gt!==null)throw Error(t(261));return Nt=null,Ft=0,Rt}function L1(){for(;gt!==null;)__(gt)}function M1(){for(;gt!==null&&!zu();)__(gt)}function __(i){var s=I_(i.alternate,i,En);i.memoizedProps=i.pendingProps,s===null?v_(i):gt=s,jf.current=null}function v_(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=k1(l,s,En),l!==null){gt=l;return}}else{if(l=x1(l,s),l!==null){l.flags&=32767,gt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Rt=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=i}while(s!==null);Rt===0&&(Rt=5)}function Ps(i,s,l){var h=Me,p=Dn.transition;try{Dn.transition=null,Me=1,F1(i,s,l,h)}finally{Dn.transition=p,Me=h}return null}function F1(i,s,l,h){do Zo();while(Ti!==null);if((Be&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(Ge(i,g),i===Nt&&(gt=Nt=null,Ft=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Bc||(Bc=!0,T_(An,function(){return Zo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Dn.transition,Dn.transition=null;var E=Me;Me=1;var A=Be;Be|=4,jf.current=null,D1(i,l),u_(l,i),i1(Gd),di=!!Hd,Gd=Hd=null,i.current=l,b1(l),Nd(),Be=A,Me=E,Dn.transition=g}else i.current=l;if(Bc&&(Bc=!1,Ti=i,zc=p),g=i.pendingLanes,g===0&&(Ii=null),Wu(l.stateNode),cn(i,Xe()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(jc)throw jc=!1,i=$f,$f=null,i;return(zc&1)!==0&&i.tag!==0&&Zo(),g=i.pendingLanes,(g&1)!==0?i===qf?Cl++:(Cl=0,qf=i):Cl=0,_i(),null}function Zo(){if(Ti!==null){var i=ci(zc),s=Dn.transition,l=Me;try{if(Dn.transition=null,Me=16>i?16:i,Ti===null)var h=!1;else{if(i=Ti,Ti=null,zc=0,(Be&6)!==0)throw Error(t(331));var p=Be;for(Be|=4,pe=i.current;pe!==null;){var g=pe,E=g.child;if((pe.flags&16)!==0){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var q=A[k];for(pe=q;pe!==null;){var X=pe;switch(X.tag){case 0:case 11:case 15:Al(8,X,g)}var Y=X.child;if(Y!==null)Y.return=X,pe=Y;else for(;pe!==null;){X=pe;var Q=X.sibling,de=X.return;if(i_(X),X===q){pe=null;break}if(Q!==null){Q.return=de,pe=Q;break}pe=de}}}var me=g.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var ft=ye.sibling;ye.sibling=null,ye=ft}while(ye!==null)}}pe=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,pe=E;else e:for(;pe!==null;){if(g=pe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Al(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,pe=j;break e}pe=g.return}}var D=i.current;for(pe=D;pe!==null;){E=pe;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,pe=B;else e:for(E=D;pe!==null;){if(A=pe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Mc(9,A)}}catch(_e){ct(A,A.return,_e)}if(A===E){pe=null;break e}var ie=A.sibling;if(ie!==null){ie.return=A.return,pe=ie;break e}pe=A.return}}if(Be=p,_i(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(cs,i)}catch{}h=!0}return h}finally{Me=l,Dn.transition=s}}return!1}function E_(i,s,l){s=Qo(l,s),s=Fy(i,s,1),i=Ei(i,s,1),s=Zt(),i!==null&&(li(i,1,s),cn(i,s))}function ct(i,s,l){if(i.tag===3)E_(i,i,l);else for(;s!==null;){if(s.tag===3){E_(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){i=Qo(l,i),i=Uy(s,i,1),s=Ei(s,i,1),i=Zt(),s!==null&&(li(s,1,i),cn(s,i));break}}s=s.return}}function U1(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Zt(),i.pingedLanes|=i.suspendedLanes&l,Nt===i&&(Ft&l)===l&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>Xe()-zf?Rs(i,0):Bf|=l),cn(i,s)}function w_(i,s){s===0&&((i.mode&1)===0?s=1:(s=Io,Io<<=1,(Io&130023424)===0&&(Io=4194304)));var l=Zt();i=Br(i,s),i!==null&&(li(i,s,l),cn(i,l))}function j1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),w_(i,l)}function B1(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),w_(i,l)}var I_;I_=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ln=!1,C1(i,s,l);ln=(i.flags&131072)!==0}else ln=!1,nt&&(s.flags&1048576)!==0&&ty(s,Ec,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Oc(i,s),i=s.pendingProps;var p=Bo(s,zt.current);Ho(s,l),p=vf(null,s,h,i,p,l);var g=Ef();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(g=!0,yc(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,df(s),p.updater=bc,s.stateNode=p,p._reactInternals=s,Rf(s,h,i,l),s=xf(null,s,h,!0,g,l)):(s.tag=0,nt&&g&&tf(s),Jt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Oc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=$1(h),i=Xn(h,i),p){case 0:s=kf(null,s,h,i,l);break e;case 1:s=Gy(null,s,h,i,l);break e;case 11:s=$y(null,s,h,i,l);break e;case 14:s=qy(null,s,h,Xn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Xn(h,p),kf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Xn(h,p),Gy(i,s,h,p,l);case 3:e:{if(Qy(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,cy(i,s),Rc(s,h,null,l);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=Qo(Error(t(423)),s),s=Xy(i,s,h,l,p);break e}else if(h!==p){p=Qo(Error(t(424)),s),s=Xy(i,s,h,l,p);break e}else for(vn=mi(s.stateNode.containerInfo.firstChild),_n=s,nt=!0,Qn=null,l=ly(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(qo(),h===p){s=$r(i,s,l);break e}Jt(i,s,h,l)}s=s.child}return s;case 5:return fy(s),i===null&&sf(s),h=s.type,p=s.pendingProps,g=i!==null?i.memoizedProps:null,E=p.children,Qd(h,p)?E=null:g!==null&&Qd(h,g)&&(s.flags|=32),Hy(i,s),Jt(i,s,E,l),s.child;case 6:return i===null&&sf(s),null;case 13:return Yy(i,s,l);case 4:return ff(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=Wo(s,null,h,l):Jt(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Xn(h,p),$y(i,s,h,p,l);case 7:return Jt(i,s,s.pendingProps,l),s.child;case 8:return Jt(i,s,s.pendingProps.children,l),s.child;case 12:return Jt(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,E=p.value,Ye(Tc,h._currentValue),h._currentValue=E,g!==null)if(Gn(g.value,E)){if(g.children===p.children&&!on.current){s=$r(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=zr(-1,l&-l),k.tag=2;var q=g.updateQueue;if(q!==null){q=q.shared;var X=q.pending;X===null?k.next=k:(k.next=X.next,X.next=k),q.pending=k}}g.lanes|=l,k=g.alternate,k!==null&&(k.lanes|=l),cf(g.return,l,s),A.lanes|=l;break}k=k.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),cf(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Jt(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Ho(s,l),p=xn(p),h=h(p),s.flags|=1,Jt(i,s,h,l),s.child;case 14:return h=s.type,p=Xn(h,s.pendingProps),p=Xn(h.type,p),qy(i,s,h,p,l);case 15:return Wy(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Xn(h,p),Oc(i,s),s.tag=1,an(h)?(i=!0,yc(s)):i=!1,Ho(s,l),Ly(s,h,p),Rf(s,h,p,l),xf(null,s,h,!0,i,l);case 19:return Zy(i,s,l);case 22:return Ky(i,s,l)}throw Error(t(156,s.tag))};function T_(i,s){return Eo(i,s)}function z1(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(i,s,l,h){return new z1(i,s,l,h)}function Xf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $1(i){if(typeof i=="function")return Xf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===lt)return 14}return 2}function Ri(i,s){var l=i.alternate;return l===null?(l=bn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Kc(i,s,l,h,p,g){var E=2;if(h=i,typeof i=="function")Xf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case C:return Cs(l.children,p,g,s);case S:E=8,p|=8;break;case P:return i=bn(12,l,s,p|2),i.elementType=P,i.lanes=g,i;case R:return i=bn(13,l,s,p),i.elementType=R,i.lanes=g,i;case Qe:return i=bn(19,l,s,p),i.elementType=Qe,i.lanes=g,i;case ue:return Hc(l,p,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:E=10;break e;case O:E=9;break e;case V:E=11;break e;case lt:E=14;break e;case ut:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=bn(E,l,s,p),s.elementType=i,s.type=h,s.lanes=g,s}function Cs(i,s,l,h){return i=bn(7,i,h,s),i.lanes=l,i}function Hc(i,s,l,h){return i=bn(22,i,h,s),i.elementType=ue,i.lanes=l,i.stateNode={isHidden:!1},i}function Yf(i,s,l){return i=bn(6,i,null,s),i.lanes=l,i}function Jf(i,s,l){return s=bn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function q1(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zf(i,s,l,h,p,g,E,A,k){return i=new q1(i,s,l,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=bn(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(g),i}function W1(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function S_(i){if(!i)return yi;i=i._reactInternals;e:{if(Bn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(an(l))return Jg(i,l,s)}return s}function A_(i,s,l,h,p,g,E,A,k){return i=Zf(l,h,!0,i,p,g,E,A,k),i.context=S_(null),l=i.current,h=Zt(),p=Si(l),g=zr(h,p),g.callback=s??null,Ei(l,g,p),i.current.lanes=p,li(i,p,h),cn(i,h),i}function Gc(i,s,l,h){var p=s.current,g=Zt(),E=Si(p);return l=S_(l),s.context===null?s.context=l:s.pendingContext=l,s=zr(g,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Ei(p,s,E),i!==null&&(Zn(i,p,E,g),Ac(i,p,E)),E}function Qc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function R_(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ep(i,s){R_(i,s),(i=i.alternate)&&R_(i,s)}function K1(){return null}var P_=typeof reportError=="function"?reportError:function(i){console.error(i)};function tp(i){this._internalRoot=i}Xc.prototype.render=tp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Gc(i,s,null,null)},Xc.prototype.unmount=tp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;As(function(){Gc(null,i,null,null)}),s[Mr]=null}};function Xc(i){this._internalRoot=i}Xc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Xu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<lr.length&&s!==0&&s<lr[l].priority;l++);lr.splice(l,0,i),l===0&&Zu(i)}};function np(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Yc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function C_(){}function H1(i,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var q=Qc(E);g.call(q)}}var E=A_(s,h,i,0,null,!1,!1,"",C_);return i._reactRootContainer=E,i[Mr]=E.current,dl(i.nodeType===8?i.parentNode:i),As(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var q=Qc(k);A.call(q)}}var k=Zf(i,0,!1,null,null,!1,!1,"",C_);return i._reactRootContainer=k,i[Mr]=k.current,dl(i.nodeType===8?i.parentNode:i),As(function(){Gc(s,k,l,h)}),k}function Jc(i,s,l,h,p){var g=l._reactRootContainer;if(g){var E=g;if(typeof p=="function"){var A=p;p=function(){var k=Qc(E);A.call(k)}}Gc(s,E,i,p)}else E=H1(l,s,i,p,h);return Qc(E)}Gu=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=oi(s.pendingLanes);l!==0&&(ui(s,l|1),cn(s,Xe()),(Be&6)===0&&(Jo=Xe()+500,_i()))}break;case 13:As(function(){var h=Br(i,1);if(h!==null){var p=Zt();Zn(h,i,1,p)}}),ep(i,1)}},To=function(i){if(i.tag===13){var s=Br(i,134217728);if(s!==null){var l=Zt();Zn(s,i,134217728,l)}ep(i,134217728)}},Qu=function(i){if(i.tag===13){var s=Si(i),l=Br(i,s);if(l!==null){var h=Zt();Zn(l,i,s,h)}ep(i,s)}},Xu=function(){return Me},Yu=function(i,s){var l=Me;try{return Me=i,s()}finally{Me=l}},po=function(i,s,l){switch(s){case"input":if(Ma(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=mc(h);if(!p)throw Error(t(90));ao(h),Ma(h,p)}}}break;case"textarea":ho(i,l);break;case"select":s=l.value,s!=null&&kr(i,!!l.multiple,s,!1)}},ss=Hf,Ha=As;var G1={usingClientEntryPoint:!1,Events:[ml,Uo,mc,or,Ka,Hf]},kl={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Xa(i),i===null?null:i.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance||K1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{cs=Zc.inject(Q1),pn=Zc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1,hn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(s))throw Error(t(200));return W1(i,s,null,l)},hn.createRoot=function(i,s){if(!np(i))throw Error(t(299));var l=!1,h="",p=P_;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Zf(i,1,!1,null,null,l,!1,h,p),i[Mr]=s.current,dl(i.nodeType===8?i.parentNode:i),new tp(s)},hn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Xa(s),i=i===null?null:i.stateNode,i},hn.flushSync=function(i){return As(i)},hn.hydrate=function(i,s,l){if(!Yc(s))throw Error(t(200));return Jc(null,i,s,!0,l)},hn.hydrateRoot=function(i,s,l){if(!np(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",E=P_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=A_(s,null,i,1,l??null,p,!1,g,E),i[Mr]=s.current,dl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Xc(s)},hn.render=function(i,s,l){if(!Yc(s))throw Error(t(200));return Jc(null,i,s,!1,l)},hn.unmountComponentAtNode=function(i){if(!Yc(i))throw Error(t(40));return i._reactRootContainer?(As(function(){Jc(null,null,i,!1,function(){i._reactRootContainer=null,i[Mr]=null})}),!0):!1},hn.unstable_batchedUpdates=Hf,hn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Yc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Jc(i,s,l,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var L_;function lw(){if(L_)return sp.exports;L_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sp.exports=iS(),sp.exports}var M_;function sS(){if(M_)return eh;M_=1;var n=lw();return eh.createRoot=n.createRoot,eh.hydrateRoot=n.hydrateRoot,eh}var oS=sS();const aS=ow(oS);lw();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tu.apply(null,arguments)}var Li;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Li||(Li={}));const F_="popstate";function lS(n){n===void 0&&(n={});function e(r,o){let{pathname:a,search:u,hash:d}=r.location;return Ap("",{pathname:a,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:uw(o)}return cS(e,t,null,n)}function vt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function dm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uS(){return Math.random().toString(36).substr(2,8)}function U_(n,e){return{usr:n.state,key:n.key,idx:e}}function Ap(n,e,t,r){return t===void 0&&(t=null),tu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?xa(e):e,{state:t,key:e&&e.key||r||uS()})}function uw(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function cS(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,d=Li.Pop,f=null,y=v();y==null&&(y=0,u.replaceState(tu({},u.state,{idx:y}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=Li.Pop;let N=v(),te=N==null?null:N-y;y=N,f&&f({action:d,location:z.location,delta:te})}function T(N,te){d=Li.Push;let ne=Ap(z.location,N,te);y=v()+1;let Z=U_(ne,y),le=z.createHref(ne);try{u.pushState(Z,"",le)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(le)}a&&f&&f({action:d,location:z.location,delta:1})}function b(N,te){d=Li.Replace;let ne=Ap(z.location,N,te);y=v();let Z=U_(ne,y),le=z.createHref(ne);u.replaceState(Z,"",le),a&&f&&f({action:d,location:z.location,delta:0})}function U(N){let te=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof N=="string"?N:uw(N);return ne=ne.replace(/ $/,"%20"),vt(te,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,te)}let z={get action(){return d},get location(){return n(o,u)},listen(N){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(F_,w),f=N,()=>{o.removeEventListener(F_,w),f=null}},createHref(N){return e(o,N)},createURL:U,encodeLocation(N){let te=U(N);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:T,replace:b,go(N){return u.go(N)}};return z}var j_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(j_||(j_={}));function hS(n,e,t){return t===void 0&&(t="/"),dS(n,e,t)}function dS(n,e,t,r){let o=typeof e=="string"?xa(e):e,a=dw(o.pathname||"/",t);if(a==null)return null;let u=cw(n);fS(u);let d=null,f=AS(a);for(let y=0;d==null&&y<u.length;++y)d=IS(u[y],f);return d}function cw(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(vt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let y=Us([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(vt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),cw(a.children,e,v,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:ES(y,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,u);else for(let f of hw(a.path))o(a,u,f)}),e}function hw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=hw(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function fS(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:wS(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const pS=/^:[\w-]+$/,mS=3,gS=2,yS=1,_S=10,vS=-2,B_=n=>n==="*";function ES(n,e){let t=n.split("/"),r=t.length;return t.some(B_)&&(r+=vS),e&&(r+=gS),t.filter(o=>!B_(o)).reduce((o,a)=>o+(pS.test(a)?mS:a===""?yS:_S),r)}function wS(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function IS(n,e,t){let{routesMeta:r}=n,o={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],y=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=TS({path:f.relativePath,caseSensitive:f.caseSensitive,end:y},v),T=f.route;if(!w)return null;Object.assign(o,w.params),u.push({params:o,pathname:Us([a,w.pathname]),pathnameBase:xS(Us([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=Us([a,w.pathnameBase]))}return u}function TS(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=SS(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((y,v,w)=>{let{paramName:T,isOptional:b}=v;if(T==="*"){let z=d[w]||"";u=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const U=d[w];return b&&!U?y[T]=void 0:y[T]=(U||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:u,pattern:n}}function SS(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),dm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function AS(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function dw(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const RS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PS=n=>RS.test(n);function CS(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?xa(n):n,a;if(t)if(PS(t))a=t;else{if(t.includes("//")){let u=t;t=mw(t),dm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=z_(t.substring(1),"/"):a=z_(t,e)}else a=e;return{pathname:a,search:NS(r),hash:DS(o)}}function z_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function lp(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kS(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function fw(n,e){let t=kS(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function pw(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=xa(n):(o=tu({},n),vt(!o.pathname||!o.pathname.includes("?"),lp("?","pathname","search",o)),vt(!o.pathname||!o.pathname.includes("#"),lp("#","pathname","hash",o)),vt(!o.search||!o.search.includes("#"),lp("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=CS(o,d),y=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(y||v)&&(f.pathname+="/"),f}const mw=n=>n.replace(/\/\/+/g,"/"),Us=n=>mw(n.join("/")),xS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),NS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,DS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const gw=["post","put","patch","delete"];new Set(gw);const VS=["get",...gw];new Set(VS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nu.apply(null,arguments)}const fm=G.createContext(null),OS=G.createContext(null),vu=G.createContext(null),Jh=G.createContext(null),Qi=G.createContext({outlet:null,matches:[],isDataRoute:!1}),yw=G.createContext(null);function Eu(){return G.useContext(Jh)!=null}function Zh(){return Eu()||vt(!1),G.useContext(Jh).location}function _w(n){G.useContext(vu).static||G.useLayoutEffect(n)}function pm(){let{isDataRoute:n}=G.useContext(Qi);return n?QS():LS()}function LS(){Eu()||vt(!1);let n=G.useContext(fm),{basename:e,future:t,navigator:r}=G.useContext(vu),{matches:o}=G.useContext(Qi),{pathname:a}=Zh(),u=JSON.stringify(fw(o,t.v7_relativeSplatPath)),d=G.useRef(!1);return _w(()=>{d.current=!0}),G.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){r.go(y);return}let w=pw(y,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Us([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function MS(){let{matches:n}=G.useContext(Qi),e=n[n.length-1];return e?e.params:{}}function FS(n,e){return US(n,e)}function US(n,e,t,r){Eu()||vt(!1);let{navigator:o}=G.useContext(vu),{matches:a}=G.useContext(Qi),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let y=Zh(),v;if(e){var w;let N=typeof e=="string"?xa(e):e;f==="/"||(w=N.pathname)!=null&&w.startsWith(f)||vt(!1),v=N}else v=y;let T=v.pathname||"/",b=T;if(f!=="/"){let N=f.replace(/^\//,"").split("/");b="/"+T.replace(/^\//,"").split("/").slice(N.length).join("/")}let U=hS(n,{pathname:b}),z=qS(U&&U.map(N=>Object.assign({},N,{params:Object.assign({},d,N.params),pathname:Us([f,o.encodeLocation?o.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?f:Us([f,o.encodeLocation?o.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),a,t,r);return e&&z?G.createElement(Jh.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Li.Pop}},z):z}function jS(){let n=GS(),e=bS(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:o},t):null,null)}const BS=G.createElement(jS,null);class zS extends G.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?G.createElement(Qi.Provider,{value:this.props.routeContext},G.createElement(yw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $S(n){let{routeContext:e,match:t,children:r}=n,o=G.useContext(fm);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),G.createElement(Qi.Provider,{value:e},r)}function qS(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||vt(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,y=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=v),w.route.id){let{loaderData:T,errors:b}=t,U=w.route.loader&&T[w.route.id]===void 0&&(!b||b[w.route.id]===void 0);if(w.route.lazy||U){f=!0,y>=0?u=u.slice(0,y+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let b,U=!1,z=null,N=null;t&&(b=d&&w.route.id?d[w.route.id]:void 0,z=w.route.errorElement||BS,f&&(y<0&&T===0?(XS("route-fallback"),U=!0,N=null):y===T&&(U=!0,N=w.route.hydrateFallbackElement||null)));let te=e.concat(u.slice(0,T+1)),ne=()=>{let Z;return b?Z=z:U?Z=N:w.route.Component?Z=G.createElement(w.route.Component,null):w.route.element?Z=w.route.element:Z=v,G.createElement($S,{match:w,routeContext:{outlet:v,matches:te,isDataRoute:t!=null},children:Z})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?G.createElement(zS,{location:t.location,revalidation:t.revalidation,component:z,error:b,children:ne(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ne()},null)}var vw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(vw||{}),Ew=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Ew||{});function WS(n){let e=G.useContext(fm);return e||vt(!1),e}function KS(n){let e=G.useContext(OS);return e||vt(!1),e}function HS(n){let e=G.useContext(Qi);return e||vt(!1),e}function ww(n){let e=HS(),t=e.matches[e.matches.length-1];return t.route.id||vt(!1),t.route.id}function GS(){var n;let e=G.useContext(yw),t=KS(),r=ww();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function QS(){let{router:n}=WS(vw.UseNavigateStable),e=ww(Ew.UseNavigateStable),t=G.useRef(!1);return _w(()=>{t.current=!0}),G.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,nu({fromRouteId:e},a)))},[n,e])}const $_={};function XS(n,e,t){$_[n]||($_[n]=!0)}function YS(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Rp(n){let{to:e,replace:t,state:r,relative:o}=n;Eu()||vt(!1);let{future:a,static:u}=G.useContext(vu),{matches:d}=G.useContext(Qi),{pathname:f}=Zh(),y=pm(),v=pw(e,fw(d,a.v7_relativeSplatPath),f,o==="path"),w=JSON.stringify(v);return G.useEffect(()=>y(JSON.parse(w),{replace:t,state:r,relative:o}),[y,w,o,t,r]),null}function Ml(n){vt(!1)}function JS(n){let{basename:e="/",children:t=null,location:r,navigationType:o=Li.Pop,navigator:a,static:u=!1,future:d}=n;Eu()&&vt(!1);let f=e.replace(/^\/*/,"/"),y=G.useMemo(()=>({basename:f,navigator:a,static:u,future:nu({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=xa(r));let{pathname:v="/",search:w="",hash:T="",state:b=null,key:U="default"}=r,z=G.useMemo(()=>{let N=dw(v,f);return N==null?null:{location:{pathname:N,search:w,hash:T,state:b,key:U},navigationType:o}},[f,v,w,T,b,U,o]);return z==null?null:G.createElement(vu.Provider,{value:y},G.createElement(Jh.Provider,{children:t,value:z}))}function ZS(n){let{children:e,location:t}=n;return FS(Pp(e),t)}new Promise(()=>{});function Pp(n,e){e===void 0&&(e=[]);let t=[];return G.Children.forEach(n,(r,o)=>{if(!G.isValidElement(r))return;let a=[...e,o];if(r.type===G.Fragment){t.push.apply(t,Pp(r.props.children,a));return}r.type!==Ml&&vt(!1),!r.props.index||!r.props.children||vt(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Pp(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eA="6";try{window.__reactRouterVersion=eA}catch{}const tA="startTransition",q_=tS[tA];function nA(n){let{basename:e,children:t,future:r,window:o}=n,a=G.useRef();a.current==null&&(a.current=lS({window:o,v5Compat:!0}));let u=a.current,[d,f]=G.useState({action:u.action,location:u.location}),{v7_startTransition:y}=r||{},v=G.useCallback(w=>{y&&q_?q_(()=>f(w)):f(w)},[f,y]);return G.useLayoutEffect(()=>u.listen(v),[u,v]),G.useEffect(()=>YS(r),[r]),G.createElement(JS,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}var W_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(W_||(W_={}));var K_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(K_||(K_={}));const rA=()=>{};var H_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},iA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,y=f?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|y>>6,b=y&63;f||(b=64,u||(T=64)),r.push(t[v],t[w],t[T],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):iA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||w==null)throw new sA;const T=a<<2|d>>4;if(r.push(T),y!==64){const b=d<<4&240|y>>2;if(r.push(b),w!==64){const U=y<<6&192|w;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oA=function(n){const e=Iw(n);return Tw.encodeByteArray(e,!0)},Rh=function(n){return oA(n).replace(/\./g,"")},Sw=function(n){try{return Tw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=()=>Aw().__FIREBASE_DEFAULTS__,lA=()=>{if(typeof process>"u"||typeof H_>"u")return;const n=H_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sw(n[1]);return e&&JSON.parse(e)},ed=()=>{try{return rA()||aA()||lA()||uA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rw=n=>{var e,t;return(t=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pw=n=>{const e=Rw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cw=()=>{var n;return(n=ed())===null||n===void 0?void 0:n.config},kw=n=>{var e;return(e=ed())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mm(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rh(JSON.stringify(t)),Rh(JSON.stringify(u)),""].join(".")}const Wl={};function hA(){const n={prod:[],emulator:[]};for(const e of Object.keys(Wl))Wl[e]?n.emulator.push(e):n.prod.push(e);return n}function dA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let G_=!1;function gm(n,e){if(typeof window>"u"||typeof document>"u"||!to(window.location.host)||Wl[n]===e||Wl[n]||G_)return;Wl[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=hA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,b){T.setAttribute("width","24"),T.setAttribute("id",b),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function y(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{G_=!0,u()},T}function v(T,b){T.setAttribute("id",b),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=dA(r),b=t("text"),U=document.getElementById(b)||document.createElement("span"),z=t("learnmore"),N=document.getElementById(z)||document.createElement("a"),te=t("preprendIcon"),ne=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;d(Z),v(N,z);const le=y();f(ne,te),Z.append(ne,U,N,le),document.body.appendChild(Z)}a?(U.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Nw(){var n;const e=(n=ed())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yA(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dw(){return!Nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bw(){return!Nw()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Vw(){try{return typeof indexedDB=="object"}catch{return!1}}function _A(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FirebaseError";class Rr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wu.prototype.create)}}class wu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?EA(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Rr(o,d,r)}}function EA(n,e){return n.replace(wA,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const wA=/\{\$([^}]+)}/g;function IA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Q_(a)&&Q_(u)){if(!qs(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Q_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Ul(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function TA(n,e){const t=new SA(n,e);return t.subscribe.bind(t)}class SA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=up),o.error===void 0&&(o.error=up),o.complete===void 0&&(o.complete=up);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function up(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class $i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CA(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(n){return n===xs?void 0:n}function CA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const xA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},NA=Oe.INFO,DA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},bA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=DA[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=NA,this._logHandler=bA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const VA=(n,e)=>e.some(t=>n instanceof t);let X_,Y_;function OA(){return X_||(X_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LA(){return Y_||(Y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Cp=new WeakMap,Lw=new WeakMap,cp=new WeakMap,_m=new WeakMap;function MA(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Fi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Ow.set(t,n)}).catch(()=>{}),_m.set(e,n),e}function FA(n){if(Cp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Cp.set(n,e)}let kp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UA(n){kp=n(kp)}function jA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hp(this),e,...t);return Lw.set(r,e.sort?e.sort():[e]),Fi(r)}:LA().includes(n)?function(...e){return n.apply(hp(this),e),Fi(Ow.get(this))}:function(...e){return Fi(n.apply(hp(this),e))}}function BA(n){return typeof n=="function"?jA(n):(n instanceof IDBTransaction&&FA(n),VA(n,OA())?new Proxy(n,kp):n)}function Fi(n){if(n instanceof IDBRequest)return MA(n);if(cp.has(n))return cp.get(n);const e=BA(n);return e!==n&&(cp.set(n,e),_m.set(e,n)),e}const hp=n=>_m.get(n);function zA(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Fi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Fi(u.result),f.oldVersion,f.newVersion,Fi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const $A=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],dp=new Map;function J_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(dp.get(e))return dp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=qA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||$A.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let y=f.store;return r&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&f.done]))[0]};return dp.set(e,a),a}UA(n=>({...n,get:(e,t,r)=>J_(e,t)||n.get(e,t,r),has:(e,t)=>!!J_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function KA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",Z_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new ym("@firebase/app"),HA="@firebase/app-compat",GA="@firebase/analytics-compat",QA="@firebase/analytics",XA="@firebase/app-check-compat",YA="@firebase/app-check",JA="@firebase/auth",ZA="@firebase/auth-compat",eR="@firebase/database",tR="@firebase/data-connect",nR="@firebase/database-compat",rR="@firebase/functions",iR="@firebase/functions-compat",sR="@firebase/installations",oR="@firebase/installations-compat",aR="@firebase/messaging",lR="@firebase/messaging-compat",uR="@firebase/performance",cR="@firebase/performance-compat",hR="@firebase/remote-config",dR="@firebase/remote-config-compat",fR="@firebase/storage",pR="@firebase/storage-compat",mR="@firebase/firestore",gR="@firebase/ai",yR="@firebase/firestore-compat",_R="firebase",vR="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="[DEFAULT]",ER={[xp]:"fire-core",[HA]:"fire-core-compat",[QA]:"fire-analytics",[GA]:"fire-analytics-compat",[YA]:"fire-app-check",[XA]:"fire-app-check-compat",[JA]:"fire-auth",[ZA]:"fire-auth-compat",[eR]:"fire-rtdb",[tR]:"fire-data-connect",[nR]:"fire-rtdb-compat",[rR]:"fire-fn",[iR]:"fire-fn-compat",[sR]:"fire-iid",[oR]:"fire-iid-compat",[aR]:"fire-fcm",[lR]:"fire-fcm-compat",[uR]:"fire-perf",[cR]:"fire-perf-compat",[hR]:"fire-rc",[dR]:"fire-rc-compat",[fR]:"fire-gcs",[pR]:"fire-gcs-compat",[mR]:"fire-fst",[yR]:"fire-fst-compat",[gR]:"fire-vertex","fire-js":"fire-js",[_R]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map,wR=new Map,Dp=new Map;function ev(n,e){try{n.container.addComponent(e)}catch(t){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ws(n){const e=n.name;if(Dp.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Dp.set(e,n);for(const t of Ph.values())ev(t,n);for(const t of wR.values())ev(t,n);return!0}function td(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ui=new wu("app","Firebase",IR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=vR;function Mw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Np,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=Cw()),!t)throw Ui.create("no-options");const a=Ph.get(o);if(a){if(qs(t,a.options)&&qs(r,a.config))return a;throw Ui.create("duplicate-app",{appName:o})}const u=new kA(o);for(const f of Dp.values())u.addComponent(f);const d=new TR(t,r,u);return Ph.set(o,d),d}function vm(n=Np){const e=Ph.get(n);if(!e&&n===Np&&Cw())return Mw();if(!e)throw Ui.create("no-app",{appName:n});return e}function vr(n,e,t){var r;let o=(r=ER[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(d.join(" "));return}Ws(new $i(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="firebase-heartbeat-database",AR=1,ru="firebase-heartbeat-store";let fp=null;function Fw(){return fp||(fp=zA(SR,AR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ru)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),fp}async function RR(n){try{const t=(await Fw()).transaction(ru),r=await t.objectStore(ru).get(Uw(n));return await t.done,r}catch(e){if(e instanceof Rr)Yr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(t.message)}}}async function tv(n,e){try{const r=(await Fw()).transaction(ru,"readwrite");await r.objectStore(ru).put(e,Uw(n)),await r.done}catch(t){if(t instanceof Rr)Yr.warn(t.message);else{const r=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yr.warn(r.message)}}}function Uw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=1024,CR=30;class kR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=nv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>CR){const u=DR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nv(),{heartbeatsToSend:r,unsentEntries:o}=xR(this._heartbeatsCache.heartbeats),a=Rh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Yr.warn(t),""}}}function nv(){return new Date().toISOString().substring(0,10)}function xR(n,e=PR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),rv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),rv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class NR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vw()?_A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await RR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function rv(n){return Rh(JSON.stringify({version:2,heartbeats:n})).length}function DR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n){Ws(new $i("platform-logger",e=>new WA(e),"PRIVATE")),Ws(new $i("heartbeat",e=>new kR(e),"PRIVATE")),vr(xp,Z_,n),vr(xp,Z_,"esm2017"),vr("fire-js","")}bR("");function Em(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VR=jw,Bw=new wu("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new ym("@firebase/auth");function OR(n,...e){Ch.logLevel<=Oe.WARN&&Ch.warn(`Auth (${no}): ${n}`,...e)}function ch(n,...e){Ch.logLevel<=Oe.ERROR&&Ch.error(`Auth (${no}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,...e){throw Im(n,...e)}function rr(n,...e){return Im(n,...e)}function wm(n,e,t){const r=Object.assign(Object.assign({},VR()),{[e]:t});return new wu("auth","Firebase",r).create(e,{appName:n.name})}function Qr(n){return wm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LR(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mn(n,"argument-error"),wm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Im(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Bw.create(n,...e)}function Re(n,e,...t){if(!n)throw Im(e,...t)}function Kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ch(e),new Error(e)}function Jr(n,e){n||Kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function MR(){return iv()==="http:"||iv()==="https:"}function iv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MR()||mA()||"connection"in navigator)?navigator.onLine:!0}function UR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile=fA()||gA()}get(){return FR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n,e){Jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zR=new Tu(3e4,6e4);function Xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yi(n,e,t,r,o={}){return $w(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Iu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:f},a);return pA()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&to(n.emulatorConfig.host)&&(y.credentials="include"),zw.fetch()(await qw(n,n.config.apiHost,t,d),y)})}async function $w(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},jR),e);try{const o=new qR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw th(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,y]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw th(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw th(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw th(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw wm(n,v,y);Mn(n,v)}}catch(o){if(o instanceof Rr)throw o;Mn(n,"network-request-failed",{message:String(o)})}}async function Su(n,e,t,r,o={}){const a=await Yi(n,e,t,r,o);return"mfaPendingCredential"in a&&Mn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function qw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?Tm(n.config,o):`${n.config.apiScheme}://${o}`;return BR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function $R(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rr(this.auth,"network-request-failed")),zR.get())})}}function th(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=rr(n,e,r);return o.customData._tokenResponse=t,o}function sv(n){return n!==void 0&&n.enterprise!==void 0}class WR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $R(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KR(n,e){return Yi(n,"GET","/v2/recaptchaConfig",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e){return Yi(n,"POST","/v1/accounts:delete",e)}async function kh(n,e){return Yi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GR(n,e=!1){const t=Et(n),r=await t.getIdToken(e),o=Sm(r);Re(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Kl(pp(o.auth_time)),issuedAtTime:Kl(pp(o.iat)),expirationTime:Kl(pp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function pp(n){return Number(n)*1e3}function Sm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ch("JWT malformed, contained fewer than 3 sections"),null;try{const o=Sw(t);return o?JSON.parse(o):(ch("Failed to decode base64 JWT payload"),null)}catch(o){return ch("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ov(n){const e=Sm(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rr&&QR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function QR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kl(this.lastLoginAt),this.creationTime=Kl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(n){var e;const t=n.auth,r=await n.getIdToken(),o=await iu(n,kh(t,{idToken:r}));Re(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Ww(a.providerUserInfo):[],d=JR(n.providerData,u),f=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?y:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Vp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function YR(n){const e=Et(n);await xh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Ww(n){return n.map(e=>{var{providerId:t}=e,r=Em(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e){const t=await $w(n,{},async()=>{const r=Iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await qw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&to(n.emulatorConfig.host)&&(f.credentials="include"),zw.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eP(n,e){return Yi(n,"POST","/v2/accounts:revokeToken",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=ov(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await ZR(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new ha;return r&&(Re(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Re(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Re(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await iu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return GR(this,e)}reload(){return YR(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Qr(this.auth));const e=await this.getIdToken();return await iu(this,HR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,f,y,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,b=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,U=(u=t.photoURL)!==null&&u!==void 0?u:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,N=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,te=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ne=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Z,emailVerified:le,isAnonymous:Ie,providerData:ce,stsTokenManager:C}=t;Re(Z&&C,e,"internal-error");const S=ha.fromJSON(this.name,C);Re(typeof Z=="string",e,"internal-error"),Ci(w,e.name),Ci(T,e.name),Re(typeof le=="boolean",e,"internal-error"),Re(typeof Ie=="boolean",e,"internal-error"),Ci(b,e.name),Ci(U,e.name),Ci(z,e.name),Ci(N,e.name),Ci(te,e.name),Ci(ne,e.name);const P=new tr({uid:Z,auth:e,email:T,emailVerified:le,displayName:w,isAnonymous:Ie,photoURL:U,phoneNumber:b,tenantId:z,stsTokenManager:S,createdAt:te,lastLoginAt:ne});return ce&&Array.isArray(ce)&&(P.providerData=ce.map(x=>Object.assign({},x))),N&&(P._redirectEventId=N),P}static async _fromIdTokenResponse(e,t,r=!1){const o=new ha;o.updateFromServerResponse(t);const a=new tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await xh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Re(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Ww(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new ha;d.updateFromIdToken(r);const f=new tr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,y),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function Hr(n){Jr(n instanceof Function,"Expected a class definition");let e=av.get(n);return e?(Jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,av.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kw.type="NONE";const lv=Kw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e,t){return`firebase:${n}:${e}:${t}`}class da{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=hh(this.userKey,o.apiKey,a),this.fullPersistenceKey=hh("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await kh(this.auth,{idToken:e}).catch(()=>{});return t?tr._fromGetAccountInfoResponse(this.auth,t,e):null}return tr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new da(Hr(lv),e,r);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Hr(lv);const u=hh(r,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(u);if(v){let w;if(typeof v=="string"){const T=await kh(e,{idToken:v}).catch(()=>{});if(!T)break;w=await tr._fromGetAccountInfoResponse(e,T,v)}else w=tr._fromJSON(e,v);y!==a&&(d=w),a=y;break}}catch{}const f=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new da(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(u)}catch{}})),new da(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jw(e))return"Blackberry";if(Zw(e))return"Webos";if(Gw(e))return"Safari";if((e.includes("chrome/")||Qw(e))&&!e.includes("edge/"))return"Chrome";if(Yw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hw(n=Pt()){return/firefox\//i.test(n)}function Gw(n=Pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qw(n=Pt()){return/crios\//i.test(n)}function Xw(n=Pt()){return/iemobile/i.test(n)}function Yw(n=Pt()){return/android/i.test(n)}function Jw(n=Pt()){return/blackberry/i.test(n)}function Zw(n=Pt()){return/webos/i.test(n)}function Am(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tP(n=Pt()){var e;return Am(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nP(){return yA()&&document.documentMode===10}function eI(n=Pt()){return Am(n)||Yw(n)||Zw(n)||Jw(n)||/windows phone/i.test(n)||Xw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e=[]){let t;switch(n){case"Browser":t=uv(Pt());break;case"Worker":t=`${uv(Pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(n,e={}){return Yi(n,"GET","/v2/passwordPolicy",Xi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=6;class oP{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:sP,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new rP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await da.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kh(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Qr(this));const t=e?Et(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iP(this),t=new oP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await eP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hr(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await da.create(this,[Hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ji(n){return Et(n)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lP(n){nd=n}function nI(n){return nd.loadJS(n)}function uP(){return nd.recaptchaEnterpriseScript}function cP(){return nd.gapiScript}function hP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dP{constructor(){this.enterprise=new fP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pP="recaptcha-enterprise",rI="NO_RECAPTCHA";class mP{constructor(e){this.type=pP,this.auth=Ji(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{KR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new WR(f);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,u(y.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;sv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(y=>{u(y)}).catch(()=>{u(rI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&sv(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=uP();f.length!==0&&(f+=d),nI(f).then(()=>{o(d,a,u)}).catch(y=>{u(y)})}}).catch(d=>{u(d)})})}}async function hv(n,e,t,r=!1,o=!1){const a=new mP(n);let u;if(o)u=rI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:y,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Op(n,e,t,r,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await hv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await hv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(n,e){const t=td(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(qs(a,e??{}))return o;Mn(o,"already-initialized")}return t.initialize({options:e})}function yP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _P(n,e,t){const r=Ji(n);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=iI(e),{host:u,port:d}=vP(e),f=d===null?"":`:${d}`,y={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(qs(y,r.config.emulator)&&qs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,to(u)?(mm(`${a}//${u}${f}`),gm("Auth",!0)):EP()}function iI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vP(n){const e=iI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:dv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:dv(u)}}}function dv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kr("not implemented")}_getIdTokenResponse(e){return Kr("not implemented")}_linkToIdToken(e,t){return Kr("not implemented")}_getReauthenticationResolver(e){return Kr("not implemented")}}async function wP(n,e){return Yi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(n,e){return Su(n,"POST","/v1/accounts:signInWithPassword",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e){return Su(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}async function SP(n,e){return Su(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends Rm{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new su(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new su(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Op(e,t,"signInWithPassword",IP);case"emailLink":return TP(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Op(e,r,"signUpPassword",wP);case"emailLink":return SP(e,{idToken:t,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(n,e){return Su(n,"POST","/v1/accounts:signInWithIdp",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="http://localhost";class Ks extends Rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=Em(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new Ks(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return fa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fa(e,t)}buildRequest(){const e={requestUri:AP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Iu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(n){const e=Fl(Ul(n)).link,t=e?Fl(Ul(e)).deep_link_id:null,r=Fl(Ul(n)).deep_link_id;return(r?Fl(Ul(r)).link:null)||r||t||e||n}class Pm{constructor(e){var t,r,o,a,u,d;const f=Fl(Ul(e)),y=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=RP((o=f.mode)!==null&&o!==void 0?o:null);Re(y&&v&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=PP(e);try{return new Pm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.providerId=Na.PROVIDER_ID}static credential(e,t){return su._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pm.parseLink(t);return Re(r,"argument-error"),su._fromEmailAndCode(e,r.code,r.tenantId)}}Na.PROVIDER_ID="password";Na.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Na.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Au{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.FACEBOOK_SIGN_IN_METHOD="facebook.com";Di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ks._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wr.credential(t,r)}catch{return null}}}Wr.GOOGLE_SIGN_IN_METHOD="google.com";Wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Au{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Au{constructor(){super("twitter.com")}static credential(e,t){return Ks._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vi.credential(t,r)}catch{return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com";Vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(n,e){return Su(n,"POST","/v1/accounts:signUp",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await tr._fromIdTokenResponse(e,r,o),u=fv(r);return new Hs({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=fv(r);return new Hs({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function fv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Rr{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Nh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Nh(e,t,r,o)}}function sI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Nh._fromErrorAndOperation(n,a,e,r):a})}async function kP(n,e,t=!1){const r=await iu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Hs._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(n,e,t=!1){const{auth:r}=n;if(dn(r.app))return Promise.reject(Qr(r));const o="reauthenticate";try{const a=await iu(n,sI(r,o,e,n),t);Re(a.idToken,r,"internal-error");const u=Sm(a.idToken);Re(u,r,"internal-error");const{sub:d}=u;return Re(n.uid===d,r,"user-mismatch"),Hs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n,e,t=!1){if(dn(n.app))return Promise.reject(Qr(n));const r="signIn",o=await sI(n,r,e),a=await Hs._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function NP(n,e){return oI(Ji(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n){const e=Ji(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DP(n,e,t){if(dn(n.app))return Promise.reject(Qr(n));const r=Ji(n),u=await Op(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&aI(n),f}),d=await Hs._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function bP(n,e,t){return dn(n.app)?Promise.reject(Qr(n)):NP(Et(n),Na.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aI(n),r})}function VP(n,e,t,r){return Et(n).onIdTokenChanged(e,t,r)}function OP(n,e,t){return Et(n).beforeAuthStateChanged(e,t)}function LP(n,e,t,r){return Et(n).onAuthStateChanged(e,t,r)}function MP(n){return Et(n).signOut()}const Dh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dh,"1"),this.storage.removeItem(Dh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=1e3,UP=10;class uI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);nP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,UP):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uI.type="LOCAL";const jP=uI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cI.type="SESSION";const hI=cI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new rd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async y=>y(t.origin,a)),f=await BP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const y=km("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===y)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return window}function $P(n){Er().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof Er().WorkerGlobalScope<"u"&&typeof Er().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function KP(){return dI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebaseLocalStorageDb",HP=1,bh="firebaseLocalStorage",pI="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function id(n,e){return n.transaction([bh],e?"readwrite":"readonly").objectStore(bh)}function GP(){const n=indexedDB.deleteDatabase(fI);return new Ru(n).toPromise()}function Lp(){const n=indexedDB.open(fI,HP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bh,{keyPath:pI})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bh)?e(r):(r.close(),await GP(),e(await Lp()))})})}async function pv(n,e,t){const r=id(n,!0).put({[pI]:e,value:t});return new Ru(r).toPromise()}async function QP(n,e){const t=id(n,!1).get(e),r=await new Ru(t).toPromise();return r===void 0?null:r.value}function mv(n,e){const t=id(n,!0).delete(e);return new Ru(t).toPromise()}const XP=800,YP=3;class mI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>YP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(KP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new zP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lp();return await pv(e,Dh,"1"),await mv(e,Dh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>QP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=id(o,!1).getAll();return new Ru(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mI.type="LOCAL";const JP=mI;new Tu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e){return e?Hr(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends Rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZP(n){return oI(n.auth,new xm(n),n.bypassAuthState)}function eC(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),xP(t,new xm(n),n.bypassAuthState)}async function tC(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),kP(t,new xm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZP;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return eC;default:Mn(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new Tu(2e3,1e4);async function rC(n,e,t){if(dn(n.app))return Promise.reject(rr(n,"operation-not-supported-in-this-environment"));const r=Ji(n);LR(n,e,Cm);const o=gI(r,t);return new Ms(r,"signInViaPopup",e,o).executeNotNull()}class Ms extends yI{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nC.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="pendingRedirect",dh=new Map;class sC extends yI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=dh.get(this.auth._key());if(!e){try{const r=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}dh.set(this.auth._key(),e)}return this.bypassAuthState||dh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(n,e){const t=uC(e),r=lC(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function aC(n,e){dh.set(n._key(),e)}function lC(n){return Hr(n._redirectPersistence)}function uC(n){return hh(iC,n.config.apiKey,n.name)}async function cC(n,e,t=!1){if(dn(n.app))return Promise.reject(Qr(n));const r=Ji(n),o=gI(r,e),u=await new sC(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=600*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_I(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _I({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(n,e={}){return Yi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function yC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pC(n);for(const t of e)try{if(_C(t))return}catch{}Mn(n,"unauthorized-domain")}function _C(n){const e=bp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!gC.test(t))return!1;if(mC.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new Tu(3e4,6e4);function yv(){const n=Er().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function EC(n){return new Promise((e,t)=>{var r,o,a;function u(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),t(rr(n,"network-request-failed"))},timeout:vC.get()})}if(!((o=(r=Er().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Er().gapi)===null||a===void 0)&&a.load)u();else{const d=hP("iframefcb");return Er()[d]=()=>{gapi.load?u():t(rr(n,"network-request-failed"))},nI(`${cP()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw fh=null,e})}let fh=null;function wC(n){return fh=fh||EC(n),fh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new Tu(5e3,15e3),TC="__/auth/iframe",SC="emulator/auth/iframe",AC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PC(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tm(e,SC):`https://${n.config.authDomain}/${TC}`,r={apiKey:e.apiKey,appName:n.name,v:no},o=RC.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Iu(r).slice(1)}`}async function CC(n){const e=await wC(n),t=Er().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:PC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AC,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=rr(n,"network-request-failed"),d=Er().setTimeout(()=>{a(u)},IC.get());function f(){Er().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xC=500,NC=600,DC="_blank",bC="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VC(n,e,t,r=xC,o=NC){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},kC),{width:r.toString(),height:o.toString(),top:a,left:u}),y=Pt().toLowerCase();t&&(d=Qw(y)?DC:t),Hw(y)&&(e=e||bC,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[b,U])=>`${T}${b}=${U},`,"");if(tP(y)&&d!=="_self")return OC(e||"",d),new _v(null);const w=window.open(e||"",d,v);Re(w,n,"popup-blocked");try{w.focus()}catch{}return new _v(w)}function OC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="__/auth/handler",MC="emulator/auth/handler",FC=encodeURIComponent("fac");async function vv(n,e,t,r,o,a){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:no,eventId:o};if(e instanceof Cm){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",IA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Au){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),y=f?`#${FC}=${encodeURIComponent(f)}`:"";return`${UC(n)}?${Iu(d).slice(1)}${y}`}function UC({config:n}){return n.emulator?Tm(n,MC):`https://${n.authDomain}/${LC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hI,this._completeRedirectFn=cC,this._overrideRedirectResult=aC}async _openPopup(e,t,r,o){var a;Jr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await vv(e,t,r,bp(),o);return VC(e,u,km())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await vv(e,t,r,bp(),o);return $P(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Jr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await CC(e),r=new dC(e);return t.register("authEvent",o=>(Re(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mp,{type:mp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[mp];u!==void 0&&t(!!u),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eI()||Gw()||Am()}}const BC=jC;var Ev="@firebase/auth",wv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(n){Ws(new $i("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Re(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tI(n)},y=new aP(r,o,a,f);return yP(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ws(new $i("auth-internal",e=>{const t=Ji(e.getProvider("auth").getImmediate());return(r=>new zC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(Ev,wv,$C(n)),vr(Ev,wv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=300,KC=kw("authIdTokenMaxAge")||WC;let Iv=null;const HC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>KC)return;const o=t==null?void 0:t.token;Iv!==o&&(Iv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function GC(n=vm()){const e=td(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gP(n,{popupRedirectResolver:BC,persistence:[JP,jP,hI]}),r=kw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=HC(a.toString());OP(t,u,()=>u(t.currentUser)),VP(t,d=>u(d))}}const o=Rw("auth");return o&&_P(t,`http://${o}`),t}function QC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}lP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=rr("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var XC="firebase",YC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(XC,YC,"app");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,vI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function P(){}P.prototype=S.prototype,C.D=S.prototype,C.prototype=new P,C.prototype.constructor=C,C.C=function(x,O,V){for(var R=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)R[Qe-2]=arguments[Qe];return S.prototype[O].apply(x,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,P){P||(P=0);var x=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)x[O]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(O=0;16>O;++O)x[O]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=C.g[0],P=C.g[1],O=C.g[2];var V=C.g[3],R=S+(V^P&(O^V))+x[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=V+(O^S&(P^O))+x[1]+3905402710&4294967295,V=S+(R<<12&4294967295|R>>>20),R=O+(P^V&(S^P))+x[2]+606105819&4294967295,O=V+(R<<17&4294967295|R>>>15),R=P+(S^O&(V^S))+x[3]+3250441966&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(V^P&(O^V))+x[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=V+(O^S&(P^O))+x[5]+1200080426&4294967295,V=S+(R<<12&4294967295|R>>>20),R=O+(P^V&(S^P))+x[6]+2821735955&4294967295,O=V+(R<<17&4294967295|R>>>15),R=P+(S^O&(V^S))+x[7]+4249261313&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(V^P&(O^V))+x[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=V+(O^S&(P^O))+x[9]+2336552879&4294967295,V=S+(R<<12&4294967295|R>>>20),R=O+(P^V&(S^P))+x[10]+4294925233&4294967295,O=V+(R<<17&4294967295|R>>>15),R=P+(S^O&(V^S))+x[11]+2304563134&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(V^P&(O^V))+x[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=V+(O^S&(P^O))+x[13]+4254626195&4294967295,V=S+(R<<12&4294967295|R>>>20),R=O+(P^V&(S^P))+x[14]+2792965006&4294967295,O=V+(R<<17&4294967295|R>>>15),R=P+(S^O&(V^S))+x[15]+1236535329&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(O^V&(P^O))+x[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=V+(P^O&(S^P))+x[6]+3225465664&4294967295,V=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(V^S))+x[11]+643717713&4294967295,O=V+(R<<14&4294967295|R>>>18),R=P+(V^S&(O^V))+x[0]+3921069994&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^V&(P^O))+x[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=V+(P^O&(S^P))+x[10]+38016083&4294967295,V=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(V^S))+x[15]+3634488961&4294967295,O=V+(R<<14&4294967295|R>>>18),R=P+(V^S&(O^V))+x[4]+3889429448&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^V&(P^O))+x[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=V+(P^O&(S^P))+x[14]+3275163606&4294967295,V=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(V^S))+x[3]+4107603335&4294967295,O=V+(R<<14&4294967295|R>>>18),R=P+(V^S&(O^V))+x[8]+1163531501&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^V&(P^O))+x[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=V+(P^O&(S^P))+x[2]+4243563512&4294967295,V=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(V^S))+x[7]+1735328473&4294967295,O=V+(R<<14&4294967295|R>>>18),R=P+(V^S&(O^V))+x[12]+2368359562&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(P^O^V)+x[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=V+(S^P^O)+x[8]+2272392833&4294967295,V=S+(R<<11&4294967295|R>>>21),R=O+(V^S^P)+x[11]+1839030562&4294967295,O=V+(R<<16&4294967295|R>>>16),R=P+(O^V^S)+x[14]+4259657740&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^V)+x[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=V+(S^P^O)+x[4]+1272893353&4294967295,V=S+(R<<11&4294967295|R>>>21),R=O+(V^S^P)+x[7]+4139469664&4294967295,O=V+(R<<16&4294967295|R>>>16),R=P+(O^V^S)+x[10]+3200236656&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^V)+x[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=V+(S^P^O)+x[0]+3936430074&4294967295,V=S+(R<<11&4294967295|R>>>21),R=O+(V^S^P)+x[3]+3572445317&4294967295,O=V+(R<<16&4294967295|R>>>16),R=P+(O^V^S)+x[6]+76029189&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^V)+x[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=V+(S^P^O)+x[12]+3873151461&4294967295,V=S+(R<<11&4294967295|R>>>21),R=O+(V^S^P)+x[15]+530742520&4294967295,O=V+(R<<16&4294967295|R>>>16),R=P+(O^V^S)+x[2]+3299628645&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(O^(P|~V))+x[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=V+(P^(S|~O))+x[7]+1126891415&4294967295,V=S+(R<<10&4294967295|R>>>22),R=O+(S^(V|~P))+x[14]+2878612391&4294967295,O=V+(R<<15&4294967295|R>>>17),R=P+(V^(O|~S))+x[5]+4237533241&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~V))+x[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=V+(P^(S|~O))+x[3]+2399980690&4294967295,V=S+(R<<10&4294967295|R>>>22),R=O+(S^(V|~P))+x[10]+4293915773&4294967295,O=V+(R<<15&4294967295|R>>>17),R=P+(V^(O|~S))+x[1]+2240044497&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~V))+x[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=V+(P^(S|~O))+x[15]+4264355552&4294967295,V=S+(R<<10&4294967295|R>>>22),R=O+(S^(V|~P))+x[6]+2734768916&4294967295,O=V+(R<<15&4294967295|R>>>17),R=P+(V^(O|~S))+x[13]+1309151649&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~V))+x[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=V+(P^(S|~O))+x[11]+3174756917&4294967295,V=S+(R<<10&4294967295|R>>>22),R=O+(S^(V|~P))+x[2]+718787259&4294967295,O=V+(R<<15&4294967295|R>>>17),R=P+(V^(O|~S))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+V&4294967295}r.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var P=S-this.blockSize,x=this.B,O=this.h,V=0;V<S;){if(O==0)for(;V<=P;)o(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<S;)if(x[O++]=C.charCodeAt(V++),O==this.blockSize){o(this,x),O=0;break}}else for(;V<S;)if(x[O++]=C[V++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=S},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var P=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=P&255,P/=256;for(this.u(C),C=Array(16),S=P=0;4>S;++S)for(var x=0;32>x;x+=8)C[P++]=this.g[S]>>>x&255;return C};function a(C,S){var P=d;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=S(C)}function u(C,S){this.h=S;for(var P=[],x=!0,O=C.length-1;0<=O;O--){var V=C[O]|0;x&&V==S||(P[O]=V,x=!1)}this.g=P}var d={};function f(C){return-128<=C&&128>C?a(C,function(S){return new u([S|0],0>S?-1:0)}):new u([C|0],0>C?-1:0)}function y(C){if(isNaN(C)||!isFinite(C))return w;if(0>C)return N(y(-C));for(var S=[],P=1,x=0;C>=P;x++)S[x]=C/P|0,P*=4294967296;return new u(S,0)}function v(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return N(v(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(S,8)),x=w,O=0;O<C.length;O+=8){var V=Math.min(8,C.length-O),R=parseInt(C.substring(O,O+V),S);8>V?(V=y(Math.pow(S,V)),x=x.j(V).add(y(R))):(x=x.j(P),x=x.add(y(R)))}return x}var w=f(0),T=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(z(this))return-N(this).m();for(var C=0,S=1,P=0;P<this.g.length;P++){var x=this.i(P);C+=(0<=x?x:4294967296+x)*S,S*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(U(this))return"0";if(z(this))return"-"+N(this).toString(C);for(var S=y(Math.pow(C,6)),P=this,x="";;){var O=le(P,S).g;P=te(P,O.j(S));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(C);if(P=O,U(P))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function U(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function z(C){return C.h==-1}n.l=function(C){return C=te(this,C),z(C)?-1:U(C)?0:1};function N(C){for(var S=C.g.length,P=[],x=0;x<S;x++)P[x]=~C.g[x];return new u(P,~C.h).add(T)}n.abs=function(){return z(this)?N(this):this},n.add=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],x=0,O=0;O<=S;O++){var V=x+(this.i(O)&65535)+(C.i(O)&65535),R=(V>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);x=R>>>16,V&=65535,R&=65535,P[O]=R<<16|V}return new u(P,P[P.length-1]&-2147483648?-1:0)};function te(C,S){return C.add(N(S))}n.j=function(C){if(U(this)||U(C))return w;if(z(this))return z(C)?N(this).j(N(C)):N(N(this).j(C));if(z(C))return N(this.j(N(C)));if(0>this.l(b)&&0>C.l(b))return y(this.m()*C.m());for(var S=this.g.length+C.g.length,P=[],x=0;x<2*S;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<C.g.length;O++){var V=this.i(x)>>>16,R=this.i(x)&65535,Qe=C.i(O)>>>16,lt=C.i(O)&65535;P[2*x+2*O]+=R*lt,ne(P,2*x+2*O),P[2*x+2*O+1]+=V*lt,ne(P,2*x+2*O+1),P[2*x+2*O+1]+=R*Qe,ne(P,2*x+2*O+1),P[2*x+2*O+2]+=V*Qe,ne(P,2*x+2*O+2)}for(x=0;x<S;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=S;x<2*S;x++)P[x]=0;return new u(P,0)};function ne(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function Z(C,S){this.g=C,this.h=S}function le(C,S){if(U(S))throw Error("division by zero");if(U(C))return new Z(w,w);if(z(C))return S=le(N(C),S),new Z(N(S.g),N(S.h));if(z(S))return S=le(C,N(S)),new Z(N(S.g),S.h);if(30<C.g.length){if(z(C)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,x=S;0>=x.l(C);)P=Ie(P),x=Ie(x);var O=ce(P,1),V=ce(x,1);for(x=ce(x,2),P=ce(P,2);!U(x);){var R=V.add(x);0>=R.l(C)&&(O=O.add(P),V=R),x=ce(x,1),P=ce(P,1)}return S=te(C,O.j(S)),new Z(O,S)}for(O=w;0<=C.l(S);){for(P=Math.max(1,Math.floor(C.m()/S.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=y(P),R=V.j(S);z(R)||0<R.l(C);)P-=x,V=y(P),R=V.j(S);U(V)&&(V=T),O=O.add(V),C=te(C,R)}return new Z(O,C)}n.A=function(C){return le(this,C).h},n.and=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)&C.i(x);return new u(P,this.h&C.h)},n.or=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)|C.i(x);return new u(P,this.h|C.h)},n.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)^C.i(x);return new u(P,this.h^C.h)};function Ie(C){for(var S=C.g.length+1,P=[],x=0;x<S;x++)P[x]=C.i(x)<<1|C.i(x-1)>>>31;return new u(P,C.h)}function ce(C,S){var P=S>>5;S%=32;for(var x=C.g.length-P,O=[],V=0;V<x;V++)O[V]=0<S?C.i(V+P)>>>S|C.i(V+P+1)<<32-S:C.i(V+P);return new u(O,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=v,ji=u}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var EI,jl,wI,ph,Mp,II,TI,SI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof nh=="object"&&nh];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var _=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var M=c[I];if(!(M in _))break e;_=_[M]}c=c[c.length-1],I=_[c],m=m(I),m!=I&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var _=0,I=!1,M={next:function(){if(!I&&_<c.length){var W=_++;return{value:m(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,_){return c.call.apply(c.bind,arguments)}function w(c,m,_){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,I),c.apply(m,M)}}return function(){return c.apply(m,arguments)}}function T(c,m,_){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function b(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function U(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(I,M,W){for(var se=Array(arguments.length-2),We=2;We<arguments.length;We++)se[We-2]=arguments[We];return m.prototype[M].apply(I,se)}}function z(c){const m=c.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=c[I];return _}return[]}function N(c,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const M=c.length||0,W=I.length||0;c.length=M+W;for(let se=0;se<W;se++)c[M+se]=I[se]}else c.push(I)}}class te{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var Ie=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ce(c,m,_){for(const I in c)m.call(_,c[I],I,c)}function C(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,m){let _,I;for(let M=1;M<arguments.length;M++){I=arguments[M];for(_ in I)c[_]=I[_];for(let W=0;W<P.length;W++)_=P[W],Object.prototype.hasOwnProperty.call(I,_)&&(c[_]=I[_])}}function O(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function V(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ve;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Qe{constructor(){this.h=this.g=null}add(m,_){const I=lt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var lt=new te(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ee=!1,ve=new Qe,he=()=>{const c=d.Promise.resolve(void 0);ue=()=>{c.then(L)}};var L=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(_){V(_)}var m=lt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ee=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var xe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return c})();function Ne(c,m){if(Ee.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(Ie){e:{try{le(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ne.aa.h.call(this)}}U(Ne,Ee);var Ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),re=0;function fe(c,m,_,I,M){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=M,this.key=++re,this.da=this.fa=!1}function et(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Fn(c){this.src=c,this.g={},this.h=0}Fn.prototype.add=function(c,m,_,I,M){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var se=ri(c,m,I,M);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new fe(m,this.src,W,!!I,M),m.fa=_,c.push(m)),m};function ao(c,m){var _=m.type;if(_ in c.g){var I=c.g[_],M=Array.prototype.indexOf.call(I,m,void 0),W;(W=0<=M)&&Array.prototype.splice.call(I,M,1),W&&(et(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ri(c,m,_,I){for(var M=0;M<c.length;++M){var W=c[M];if(!W.da&&W.listener==m&&W.capture==!!_&&W.ha==I)return M}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),lo={};function La(c,m,_,I,M){if(Array.isArray(m)){for(var W=0;W<m.length;W++)La(c,m[W],_,I,M);return null}return _=Ua(_),c&&c[je]?c.K(m,_,y(I)?!!I.capture:!1,M):Ma(c,m,_,!1,I,M)}function Ma(c,m,_,I,M,W){if(!m)throw Error("Invalid event type");var se=y(M)?!!M.capture:!!M,We=co(c);if(We||(c[ts]=We=new Fn(c)),_=We.add(m,_,I,se,W),_.proxy)return _;if(I=Uu(),_.proxy=I,I.src=c,I.listener=_,c.addEventListener)xe||(M=se),M===void 0&&(M=!1),c.addEventListener(m.toString(),I,M);else if(c.attachEvent)c.attachEvent(kr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Uu(){function c(_){return m.call(c.src,c.listener,_)}const m=Fa;return c}function uo(c,m,_,I,M){if(Array.isArray(m))for(var W=0;W<m.length;W++)uo(c,m[W],_,I,M);else I=y(I)?!!I.capture:!!I,_=Ua(_),c&&c[je]?(c=c.i,m=String(m).toString(),m in c.g&&(W=c.g[m],_=ri(W,_,I,M),-1<_&&(et(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete c.g[m],c.h--)))):c&&(c=co(c))&&(m=c.g[m.toString()],c=-1,m&&(c=ri(m,_,I,M)),(_=-1<c?m[c]:null)&&Cr(_))}function Cr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[je])ao(m.i,c);else{var _=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(_,I,c.capture):m.detachEvent?m.detachEvent(kr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=co(m))?(ao(_,c),_.h==0&&(_.src=null,m[ts]=null)):et(c)}}}function kr(c){return c in lo?lo[c]:lo[c]="on"+c}function Fa(c,m){if(c.da)c=!0;else{m=new Ne(m,this);var _=c.listener,I=c.ha||c.src;c.fa&&Cr(c),c=_.call(I,m)}return c}function co(c){return c=c[ts],c instanceof Fn?c:null}var ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ua(c){return typeof c=="function"?c:(c[ho]||(c[ho]=function(m){return c.handleEvent(m)}),c[ho])}function It(){H.call(this),this.i=new Fn(this),this.M=this,this.F=null}U(It,H),It.prototype[je]=!0,It.prototype.removeEventListener=function(c,m,_,I){uo(this,c,m,_,I)};function Tt(c,m){var _,I=c.F;if(I)for(_=[];I;I=I.F)_.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new Ee(m,c);else if(m instanceof Ee)m.target=m.target||c;else{var M=m;m=new Ee(I,c),x(m,M)}if(M=!0,_)for(var W=_.length-1;0<=W;W--){var se=m.g=_[W];M=xr(se,I,!0,m)&&M}if(se=m.g=c,M=xr(se,I,!0,m)&&M,M=xr(se,I,!1,m)&&M,_)for(W=0;W<_.length;W++)se=m.g=_[W],M=xr(se,I,!1,m)&&M}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],I=0;I<_.length;I++)et(_[I]);delete c.g[m],c.h--}}this.F=null},It.prototype.K=function(c,m,_,I){return this.i.add(String(c),m,!1,_,I)},It.prototype.L=function(c,m,_,I){return this.i.add(String(c),m,!0,_,I)};function xr(c,m,_,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,W=0;W<m.length;++W){var se=m[W];if(se&&!se.da&&se.capture==_){var We=se.listener,St=se.ha||se.src;se.fa&&ao(c.i,se),M=We.call(St,I)!==!1&&M}}return M&&!I.defaultPrevented}function ja(c,m,_){if(typeof c=="function")_&&(c=T(c,_));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function ii(c){c.g=ja(()=>{c.g=null,c.i&&(c.i=!1,ii(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ns extends H{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ii(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(c){H.call(this),this.h=c,this.g={}}U(rs,H);var Ba=[];function za(c){ce(c.g,function(m,_){this.g.hasOwnProperty(_)&&Cr(m)},c),c.g={}}rs.prototype.N=function(){rs.aa.N.call(this),za(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $a=d.JSON.stringify,qa=d.JSON.parse,Wa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function is(){}is.prototype.h=null;function fo(c){return c.h||(c.h=c.i())}function po(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){Ee.call(this,"d")}U(sr,Ee);function mo(){Ee.call(this,"c")}U(mo,Ee);var or={},Ka=null;function ss(){return Ka=Ka||new It}or.La="serverreachability";function Ha(c){Ee.call(this,or.La,c)}U(Ha,Ee);function Nr(c){const m=ss();Tt(m,new Ha(m))}or.STAT_EVENT="statevent";function Ga(c,m){Ee.call(this,or.STAT_EVENT,c),this.stat=m}U(Ga,Ee);function dt(c){const m=ss();Tt(m,new Ga(m,c))}or.Ma="timingevent";function go(c,m){Ee.call(this,or.Ma,c),this.size=m}U(go,Ee);function Un(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function as(c,m,_,I,M,W){c.info(function(){if(c.g)if(W)for(var se="",We=W.split("&"),St=0;St<We.length;St++){var Fe=We[St].split("=");if(1<Fe.length){var kt=Fe[0];Fe=Fe[1];var mt=kt.split("_");se=2<=mt.length&&mt[1]=="type"?se+(kt+"="+Fe+"&"):se+(kt+"=redacted&")}}else se=null;else se=W;return"XMLHTTP REQ ("+I+") [attempt "+M+"]: "+m+`
`+_+`
`+se})}function yo(c,m,_,I,M,W,se){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+M+"]: "+m+`
`+_+`
`+W+" "+se})}function jn(c,m,_,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+xd(c,_)+(I?" "+I:"")})}function Qa(c,m){c.info(function(){return"TIMEOUT: "+m})}os.prototype.info=function(){};function xd(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var I=_[c];if(!(2>I.length)){var M=I[1];if(Array.isArray(M)&&!(1>M.length)){var W=M[0];if(W!="noop"&&W!="stop"&&W!="close")for(var se=1;se<M.length;se++)M[se]=""}}}}return $a(_)}catch{return m}}var _o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bn;function ls(){}U(ls,is),ls.prototype.g=function(){return new XMLHttpRequest},ls.prototype.i=function(){return{}},Bn=new ls;function zn(c,m,_,I){this.j=c,this.i=m,this.l=_,this.R=I||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var Xa={},vo={};function Eo(c,m,_){c.L=1,c.v=ui(mn(m)),c.m=_,c.P=!0,Ya(c,null)}function Ya(c,m){c.F=Date.now(),Xe(c),c.A=mn(c.v);var _=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),hi(_.i,"t",I),c.C=0,_=c.j.J,c.h=new Bu,c.g=sc(c.j,_?m:null,!c.m),0<c.O&&(c.M=new ns(T(c.Y,c,c.g),c.O)),m=c.U,_=c.g,I=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ba[0]=M.toString()),M=Ba);for(var W=0;W<M.length;W++){var se=La(_,M[W],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Nr(),as(c.i,c.u,c.A,c.l,c.R,c.m)}zn.prototype.ca=function(c){c=c.target;const m=this.M;m&&sn(c)==3?m.j():this.Y(c)},zn.prototype.Y=function(c){try{if(c==this.g)e:{const mt=sn(this.g);var m=this.g.Ba();const Pn=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||rl(this.g)))){this.J||mt!=4||m==7||(m==8||0>=Pn?Nr(3):Nr(2)),us(this);var _=this.g.Z();this.X=_;t:if(zu(this)){var I=rl(this.g);c="";var M=I.length,W=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),si(this);var se="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!(W&&m==M-1)});I.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,yo(this.i,this.u,this.A,this.l,this.R,mt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var We,St=this.g;if((We=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(We)){var Fe=We;break t}}Fe=null}if(_=Fe)jn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,_);else{this.o=!1,this.s=3,dt(12),An(this),si(this);break e}}if(this.P){_=!0;let yn;for(;!this.J&&this.C<se.length;)if(yn=Nd(this,se),yn==vo){mt==4&&(this.s=4,dt(14),_=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Xa){this.s=4,dt(15),jn(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else jn(this.i,this.l,yn,null),Ja(this,yn);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||se.length!=0||this.h.h||(this.s=1,dt(16),_=!1),this.o=this.o&&_,!_)jn(this.i,this.l,se,"[Invalid Chunked Response]"),An(this),si(this);else if(0<se.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),sl(kt),kt.M=!0,dt(11))}}else jn(this.i,this.l,se,null),Ja(this,se);mt==4&&An(this),this.o&&!this.J&&(mt==4?No(this.j,this):(this.o=!1,Xe(this)))}else Ro(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),An(this),si(this)}}}catch{}finally{}};function zu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Nd(c,m){var _=c.C,I=m.indexOf(`
`,_);return I==-1?vo:(_=Number(m.substring(_,I)),isNaN(_)?Xa:(I+=1,I+_>m.length?vo:(m=m.slice(I,I+_),c.C=I+_,m)))}zn.prototype.cancel=function(){this.J=!0,An(this)};function Xe(c){c.S=Date.now()+c.I,$u(c,c.I)}function $u(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Un(T(c.ba,c),m)}function us(c){c.B&&(d.clearTimeout(c.B),c.B=null)}zn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qa(this.i,this.A),this.L!=2&&(Nr(),dt(17)),An(this),this.s=2,si(this)):$u(this,this.S-c)};function si(c){c.j.G==0||c.J||No(c.j,c)}function An(c){us(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,za(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ja(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||Xt(_.h,c))){if(!c.K&&Xt(_.h,c)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var M=I;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)xo(_),Hn(_);else break e;ko(_),dt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Un(T(_.Za,_),6e3));if(1>=Wu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Lr(_,11)}else if((c.K||_.g==c)&&xo(_),!ne(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Fe=M[m];if(_.T=Fe[0],Fe=Fe[1],_.G==2)if(Fe[0]=="c"){_.K=Fe[1],_.ia=Fe[2];const kt=Fe[3];kt!=null&&(_.la=kt,_.j.info("VER="+_.la));const mt=Fe[4];mt!=null&&(_.Aa=mt,_.j.info("SVER="+_.Aa));const Pn=Fe[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(I=1.5*Pn,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const yn=c.g;if(yn){const gs=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gs){var W=I.h;W.g||gs.indexOf("spdy")==-1&&gs.indexOf("quic")==-1&&gs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Za(W,W.h),W.h=null))}if(I.D){const bo=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(I.ya=bo,Ge(I.I,I.D,bo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var se=c;if(I.qa=ic(I,I.J?I.ia:null,I.W),se.K){Ku(I.h,se);var We=se,St=I.L;St&&(We.I=St),We.B&&(us(We),Xe(We)),I.g=se}else ms(I);0<_.i.length&&cr(_)}else Fe[0]!="stop"&&Fe[0]!="close"||Lr(_,7);else _.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Lr(_,7):Lt(_):Fe[0]!="noop"&&_.l&&_.l.ta(Fe),_.v=0)}}Nr(4)}catch{}}var qu=class{constructor(c,m){this.g=c,this.map=m}};function cs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Wu(c){return c.h?1:c.g?c.g.size:0}function Xt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Za(c,m){c.g?c.g.add(m):c.h=m}function Ku(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}cs.prototype.cancel=function(){if(this.i=Hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Hu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return z(c.i)}function wo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],_=c.length,I=0;I<_;I++)m.push(c[I]);return m}m=[],_=0;for(I in c)m[_++]=c[I];return m}function Io(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const I in c)m[_++]=I;return m}}}function oi(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=Io(c),I=wo(c),M=I.length,W=0;W<M;W++)m.call(void 0,I[W],_&&_[W],c)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dd(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var I=c[_].indexOf("="),M=null;if(0<=I){var W=c[_].substring(0,I);M=c[_].substring(I+1)}else W=c[_];m(W,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Dr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Dr){this.h=c.h,ds(this,c.j),this.o=c.o,this.g=c.g,ai(this,c.s),this.l=c.l;var m=c.i,_=new ar;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),li(this,_),this.m=c.m}else c&&(m=String(c).match(hs))?(this.h=!1,ds(this,m[1]||"",!0),this.o=Me(m[2]||""),this.g=Me(m[3]||"",!0),ai(this,m[4]),this.l=Me(m[5]||"",!0),li(this,m[6]||"",!0),this.m=Me(m[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Dr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(ci(m,To,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ci(m,To,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ci(_,_.charAt(0)=="/"?Xu:Qu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ci(_,el)),c.join("")};function mn(c){return new Dr(c)}function ds(c,m,_){c.j=_?Me(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function ai(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function li(c,m,_){m instanceof ar?(c.i=m,lr(c.i,c.h)):(_||(m=ci(m,Yu)),c.i=new ar(m,c.h))}function Ge(c,m,_){c.i.set(m,_)}function ui(c){return Ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ci(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,Gu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Gu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var To=/[#\/\?@]/g,Qu=/[#\?:]/g,Xu=/[#\?]/g,Yu=/[#\?@]/g,el=/#/g;function ar(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Ot(c){c.g||(c.g=new Map,c.h=0,c.i&&Dd(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=ar.prototype,n.add=function(c,m){Ot(this),this.i=null,c=Rn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function $n(c,m){Ot(c),m=Rn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function qn(c,m){return Ot(c),m=Rn(c,m),c.g.has(m)}n.forEach=function(c,m){Ot(this),this.g.forEach(function(_,I){_.forEach(function(M){c.call(m,M,I,this)},this)},this)},n.na=function(){Ot(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const M=c[I];for(let W=0;W<M.length;W++)_.push(m[I])}return _},n.V=function(c){Ot(this);let m=[];if(typeof c=="string")qn(this,c)&&(m=m.concat(this.g.get(Rn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},n.set=function(c,m){return Ot(this),this.i=null,c=Rn(this,c),qn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function hi(c,m,_){$n(c,m),0<_.length&&(c.i=null,c.g.set(Rn(c,m),z(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const W=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var M=W;se[I]!==""&&(M+="="+encodeURIComponent(String(se[I]))),c.push(M)}}return this.i=c.join("&")};function Rn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function lr(c,m){m&&!c.j&&(Ot(c),c.i=null,c.g.forEach(function(_,I){var M=I.toLowerCase();I!=M&&($n(this,I),hi(this,M,_))},c)),c.j=m}function bd(c,m){const _=new os;if(d.Image){const I=new Image;I.onload=b(rn,_,"TestLoadImage: loaded",!0,m,I),I.onerror=b(rn,_,"TestLoadImage: error",!1,m,I),I.onabort=b(rn,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=b(rn,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Ju(c,m){const _=new os,I=new AbortController,M=setTimeout(()=>{I.abort(),rn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(M),W.ok?rn(_,"TestPingServer: ok",!0,m):rn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),rn(_,"TestPingServer: error",!1,m)})}function rn(c,m,_,I,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),I(_)}catch{}}function Vd(){this.g=new Wa}function Zu(c,m,_){const I=_||"";try{oi(c,function(M,W){let se=M;y(M)&&(se=$a(M)),m.push(I+W+"="+encodeURIComponent(se))})}catch(M){throw m.push(I+"type="+encodeURIComponent("_badmap")),M}}function br(c){this.l=c.Ub||null,this.j=c.eb||!1}U(br,is),br.prototype.g=function(){return new fs(this.l,this.j)},br.prototype.i=(function(c){return function(){return c}})({});function fs(c,m){It.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(fs,It),n=fs.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Kn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ec(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ec(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Wn(this):Kn(this),this.readyState==3&&ec(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},n.Qa=function(c){this.g&&(this.response=c,Wn(this))},n.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Kn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Kn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vr(c){let m="";return ce(c,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function di(c,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=Vr(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Ge(c,m,_))}function tt(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(tt,It);var Od=/^https?$/i,tl=["POST","PUT"];n=tt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bn.g(),this.v=this.o?fo(this.o):fo(Bn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(W){ps(this,W);return}if(c=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var M in I)_.set(M,I[M]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())_.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),M=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(tl,m,void 0))||I||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,se]of _)this.g.setRequestHeader(W,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){ps(this,W)}};function ps(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,So(c),gn(c)}function So(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Tt(this,"complete"),Tt(this,"abort"),gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},n.bb=function(){nl(this)};function nl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||sn(c)!=4||c.Z()!=2)){if(c.u&&sn(c)==4)ja(c.Ea,0,c);else if(Tt(c,"readystatechange"),sn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=se===0){var M=String(c.D).match(hs)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),I=!Od.test(M?M.toLowerCase():"")}_=I}if(_)Tt(c,"complete"),Tt(c,"success");else{c.m=6;try{var W=2<sn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",So(c)}}finally{gn(c)}}}}function gn(c,m){if(c.g){Ao(c);const _=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Tt(c,"ready");try{_.onreadystatechange=I}catch{}}}function Ao(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function sn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),qa(m)}};function rl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ro(c){const m={};c=(c.g&&2<=sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(ne(c[I]))continue;var _=O(c[I]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=m[M]||[];m[M]=W,W.push(_)}C(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function il(c){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,c),this.cb=ur("retryDelaySeedMs",1e4,c),this.Wa=ur("forwardChannelMaxRetries",2,c),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new cs(c&&c.concurrentRequestLimit),this.Da=new Vd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(c,m,_,I){dt(0),this.W=c,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=ic(this,null,this.W),cr(this)};function Lt(c){if(Po(c),c.G==3){var m=c.U++,_=mn(c.I);if(Ge(_,"SID",c.K),Ge(_,"RID",m),Ge(_,"TYPE","terminate"),Or(c,_),m=new zn(c,c.j,m),m.L=2,m.v=ui(mn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=sc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Xe(m)}rc(c)}function Hn(c){c.g&&(sl(c),c.g.cancel(),c.g=null)}function Po(c){Hn(c),c.u&&(d.clearTimeout(c.u),c.u=null),xo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function cr(c){if(!pn(c.h)&&!c.s){c.s=!0;var m=c.Ga;ue||he(),ee||(ue(),ee=!0),ve.add(m,c),c.B=0}}function Ld(c,m){return Wu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Un(T(c.Ga,c,m),nc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new zn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),x(W,this.S)):W=this.S),this.m!==null||this.O||(M.H=W,W=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=fi(this,M,m),_=mn(this.I),Ge(_,"RID",c),Ge(_,"CVER",22),this.D&&Ge(_,"X-HTTP-Session-Id",this.D),Or(this,_),W&&(this.O?m="headers="+encodeURIComponent(String(Vr(W)))+"&"+m:this.m&&di(_,this.m,W)),Za(this.h,M),this.Ua&&Ge(_,"TYPE","init"),this.P?(Ge(_,"$req",m),Ge(_,"SID","null"),M.T=!0,Eo(M,_,null)):Eo(M,_,m),this.G=2}}else this.G==3&&(c?Co(this,c):this.i.length==0||pn(this.h)||Co(this))};function Co(c,m){var _;m?_=m.l:_=c.U++;const I=mn(c.I);Ge(I,"SID",c.K),Ge(I,"RID",_),Ge(I,"AID",c.T),Or(c,I),c.m&&c.o&&di(I,c.m,c.o),_=new zn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=fi(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Za(c.h,_),Eo(_,I,m)}function Or(c,m){c.H&&ce(c.H,function(_,I){Ge(m,I,_)}),c.l&&oi({},function(_,I){Ge(m,I,_)})}function fi(c,m,_){_=Math.min(c.i.length,_);var I=c.l?T(c.l.Na,c.l,c):null;e:{var M=c.i;let W=-1;for(;;){const se=["count="+_];W==-1?0<_?(W=M[0].g,se.push("ofs="+W)):W=0:se.push("ofs="+W);let We=!0;for(let St=0;St<_;St++){let Fe=M[St].g;const kt=M[St].map;if(Fe-=W,0>Fe)W=Math.max(0,M[St].g-100),We=!1;else try{Zu(kt,se,"req"+Fe+"_")}catch{I&&I(kt)}}if(We){I=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,I}function ms(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;ue||he(),ee||(ue(),ee=!0),ve.add(m,c),c.v=0}}function ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Un(T(c.Fa,c),nc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,tc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Un(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Hn(this),tc(this))};function sl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function tc(c){c.g=new zn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=mn(c.qa);Ge(m,"RID","rpc"),Ge(m,"SID",c.K),Ge(m,"AID",c.T),Ge(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ge(m,"TO",c.ja),Ge(m,"TYPE","xmlhttp"),Or(c,m),c.m&&c.o&&di(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ui(mn(m)),_.m=null,_.P=!0,Ya(_,c)}n.Za=function(){this.C!=null&&(this.C=null,Hn(this),ko(this),dt(19))};function xo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function No(c,m){var _=null;if(c.g==m){xo(c),sl(c),c.g=null;var I=2}else if(Xt(c.h,m))_=m.D,Ku(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=c.B;I=ss(),Tt(I,new go(I,_)),cr(c)}else ms(c);else if(M=m.s,M==3||M==0&&0<m.X||!(I==1&&Ld(c,m)||I==2&&ko(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),M){case 1:Lr(c,5);break;case 4:Lr(c,10);break;case 3:Lr(c,6);break;default:Lr(c,2)}}}function nc(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Lr(c,m){if(c.j.info("Error code "+m),m==2){var _=T(c.fb,c),I=c.Xa;const M=!I;I=new Dr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ds(I,"https"),ui(I),M?bd(I.toString(),_):Ju(I.toString(),_)}else dt(2);c.G=0,c.l&&c.l.sa(m),rc(c),Po(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function rc(c){if(c.G=0,c.ka=[],c.l){const m=Hu(c.h);(m.length!=0||c.i.length!=0)&&(N(c.ka,m),N(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function ic(c,m,_){var I=_ instanceof Dr?mn(_):new Dr(_);if(I.g!="")m&&(I.g=m+"."+I.g),ai(I,I.s);else{var M=d.location;I=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var W=new Dr(null);I&&ds(W,I),m&&(W.g=m),M&&ai(W,M),_&&(W.l=_),I=W}return _=c.D,m=c.ya,_&&m&&Ge(I,_,m),Ge(I,"VER",c.la),Or(c,I),I}function sc(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new tt(new br({eb:_})):new tt(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Do(){}Do.prototype.g=function(c,m){return new Yt(c,m)};function Yt(c,m){It.call(this),this.g=new il(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!ne(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ne(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new hr(this)}U(Yt,It),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){Lt(this.g)},Yt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=$a(c),c=_);m.i.push(new qu(m.Ya++,c)),m.G==3&&cr(m)},Yt.prototype.N=function(){this.g.l=null,delete this.j,Lt(this.g),delete this.g,Yt.aa.N.call(this)};function oc(c){sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}U(oc,sr);function ac(){mo.call(this),this.status=1}U(ac,mo);function hr(c){this.g=c}U(hr,ol),hr.prototype.ua=function(){Tt(this.g,"a")},hr.prototype.ta=function(c){Tt(this.g,new oc(c))},hr.prototype.sa=function(c){Tt(this.g,new ac)},hr.prototype.ra=function(){Tt(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,SI=function(){return new Do},TI=function(){return ss()},II=or,Mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,ph=_o,ju.COMPLETE="complete",wI=ju,po.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",It.prototype.listen=It.prototype.K,jl=po,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,EI=tt}).apply(typeof nh<"u"?nh:typeof self<"u"?self:typeof window<"u"?window:{});const Sv="@firebase/firestore",Av="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new ym("@firebase/firestore");function oa(){return Gs.logLevel}function J(n,...e){if(Gs.logLevel<=Oe.DEBUG){const t=e.map(Nm);Gs.debug(`Firestore (${Da}): ${n}`,...t)}}function en(n,...e){if(Gs.logLevel<=Oe.ERROR){const t=e.map(Nm);Gs.error(`Firestore (${Da}): ${n}`,...t)}}function Tr(n,...e){if(Gs.logLevel<=Oe.WARN){const t=e.map(Nm);Gs.warn(`Firestore (${Da}): ${n}`,...t)}}function Nm(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,AI(n,r,t)}function AI(n,e,t){let r=`FIRESTORE (${Da}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw en(r),new Error(r)}function we(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||AI(e,o,r)}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class ZC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ek{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Xr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Xr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new RI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class tk{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nk{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){we(this.o===void 0,3512);const r=a=>{a.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,J("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Rv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(we(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Rv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=ik(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Pe(n,e){return n<e?-1:n>e?1:0}function Fp(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return Pe(r,o);{const a=PI(),u=sk(a.encode(Pv(n,t)),a.encode(Pv(e,t)));return u!==0?u:Pe(r,o)}}t+=r>65535?2:1}return Pe(n.length,e.length)}function Pv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sk(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Pe(n[t],e[t]);return Pe(n.length,e.length)}function ga(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}function CI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__name__";class gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ge(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=gr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Pe(e.length,t.length)}static compareSegments(e,t){const r=gr.isNumericId(e),o=gr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?gr.extractNumericId(e).compare(gr.extractNumericId(t)):Fp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ji.fromString(e.substring(4,e.length-2))}}class qe extends gr{construct(e,t,r){return new qe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const ok=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends gr{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return ok.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cv}static keyField(){return new at([Cv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(qe.fromString(e))}static fromName(e){return new ae(qe.fromString(e).popFirst(5))}static empty(){return new ae(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e,t){if(!t)throw new oe(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ak(n,e,t,r){if(e===!0&&r===!0)throw new oe(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kv(n){if(!ae.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xv(n){if(ae.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sd(n);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pu(n,e){if(!xI(n))throw new oe(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=-62135596800,Dv=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Dv);return new $e(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nv)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dv}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pu(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:_t("string",$e._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new $e(0,0))}static max(){return new Te(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-1;class Vh{constructor(e,t,r,o){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=o}}function Up(n){return n.fields.find((e=>e.kind===2))}function Ns(n){return n.fields.filter((e=>e.kind!==2))}Vh.UNKNOWN_ID=-1;class mh{constructor(e,t){this.fieldPath=e,this.kind=t}}class au{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new au(0,Tn.min())}}function lk(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(r===1e9?new $e(t+1,0):new $e(t,r));return new Tn(o,ae.empty(),e)}function NI(n){return new Tn(n.readTime,n.key,ou)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(Te.min(),ae.empty(),ou)}static max(){return new Tn(Te.max(),ae.empty(),ou)}}function bm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==DI)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,r)=>{t(e)}))}static reject(e){return new F(((t,r)=>{r(e)}))}static waitFor(e){return new F(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(f=>r(f)))})),u=!0,a===o&&t()}))}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next((o=>o?F.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new F(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const y=f;t(e[y]).next((v=>{u[y]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new F(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="SimpleDb";class od{static open(e,t,r,o){try{return new od(t,e.transaction(o,r))}catch(a){throw new Hl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Xr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Hl(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const o=Vm(r.target.error);this.S.reject(new Hl(e,o))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(J(wn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ck(t)}}class Bi{static delete(e){return J(wn,"Removing database:",e),bs(Aw().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Vw())return!1;if(Bi.F())return!0;const e=Pt(),t=Bi.M(e),r=0<t&&t<10,o=VI(e),a=0<o&&o<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,Bi.M(Pt())===12.2&&en("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(J(wn,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const o=indexedDB.open(this.name,this.version);o.onsuccess=a=>{const u=a.target.result;t(u)},o.onblocked=()=>{r(new Hl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},o.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new oe(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new oe(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Hl(e,u))},o.onupgradeneeded=a=>{J(wn,'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;if(this.L!==null&&this.L!==a.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${a.oldVersion}, event.newVersion=${a.newVersion}, db.version=${u.version}`);this.B.q(u,o.transaction,a.oldVersion,this.version).next((()=>{J(wn,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const r=t.target;this.L=r.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var r;t.newVersion===null&&(Tr('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,o){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=od.open(this.db,e,a?"readonly":"readwrite",r),f=o(d).next((y=>(d.v(),y))).catch((y=>(d.abort(y),F.reject(y)))).toPromise();return f.catch((()=>{})),await d.D,f}catch(d){const f=d,y=f.name!=="FirebaseError"&&u<3;if(J(wn,"Transaction failed with error:",f.message,"Retrying:",y),this.close(),!y)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class uk{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return bs(this.$.delete())}}class Hl extends oe{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zi(n){return n.name==="IndexedDbTransactionError"}class ck{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(J(wn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(J(wn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),bs(r)}add(e){return J(wn,"ADD",this.store.name,e,e),bs(this.store.add(e))}get(e){return bs(this.store.get(e)).next((t=>(t===void 0&&(t=null),J(wn,"GET",this.store.name,e,t),t)))}delete(e){return J(wn,"DELETE",this.store.name,e),bs(this.store.delete(e))}count(){return J(wn,"COUNT",this.store.name),bs(this.store.count())}j(e,t){const r=this.options(e,t),o=r.index?this.store.index(r.index):this.store;if(typeof o.getAll=="function"){const a=o.getAll(r.range);return new F(((u,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{u(f.target.result)}}))}{const a=this.cursor(r),u=[];return this.J(a,((d,f)=>{u.push(f)})).next((()=>u))}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new F(((o,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{o(u.target.result)}}))}Y(e,t){J(wn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const o=this.cursor(r);return this.J(o,((a,u,d)=>d.delete()))}X(e,t){let r;t?r=e:(r={},t=e);const o=this.cursor(r);return this.J(o,t)}ee(e){const t=this.cursor({});return new F(((r,o)=>{t.onerror=a=>{const u=Vm(a.target.error);o(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next((d=>{d?u.continue():r()})):r()}}))}J(e,t){const r=[];return new F(((o,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void o();const f=new uk(d),y=t(d.primaryKey,d.value,f);if(y instanceof F){const v=y.catch((w=>(f.done(),F.reject(w))));r.push(v)}f.isDone?o():f.W===null?d.continue():d.continue(f.W)}})).next((()=>F.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function bs(n){return new F(((e,t)=>{n.onsuccess=r=>{const o=r.target.result;e(o)},n.onerror=r=>{const o=Vm(r.target.error);t(o)}}))}let bv=!1;function Vm(n){const e=Bi.M(Pt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new oe("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bv||(bv=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Gl="IndexBackfiller";class hk{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){J(Gl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();J(Gl,`Documents written: ${t}`)}catch(t){Zi(t)?J(Gl,"Ignoring IndexedDB error during index backfill: ",t):await ro(t)}await this.ne(6e4)}))}}class dk{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const r=new Set;let o=t,a=!0;return F.doWhile((()=>a===!0&&o>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((u=>{if(u!==null&&!r.has(u))return J(Gl,`Processing collection: ${u}`),this.se(e,u,o).next((d=>{o-=d,r.add(u)}));a=!1})))).next((()=>t-o))}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((o=>this.localStore.localDocuments.getNextDocuments(e,t,o,r).next((a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next((()=>this.oe(o,a))).next((d=>(J(Gl,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d)))).next((()=>u.size))}))))}oe(e,t){let r=e;return t.changes.forEach(((o,a)=>{const u=NI(a);bm(u,r)>0&&(r=u)})),new Tn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}On.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=-1;function ad(n){return n==null}function lu(n){return n===0&&1/n==-1/0}function fk(n){return typeof n=="number"&&Number.isInteger(n)&&!lu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="";function Qt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vv(e)),e=pk(n.get(t),e);return Vv(e)}function pk(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case Oh:t+="";break;default:t+=a}}return t}function Vv(n){return n+Oh+""}function yr(n){const e=n.length;if(we(e>=2,64408,{path:n}),e===2)return we(n.charAt(0)===Oh&&n.charAt(1)==="",56145,{path:n}),qe.emptyPath();const t=e-2,r=[];let o="";for(let a=0;a<e;){const u=n.indexOf(Oh,a);switch((u<0||u>t)&&ge(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(a,u);let f;o.length===0?f=d:(o+=d,f=o,o=""),r.push(f);break;case"":o+=n.substring(a,u),o+="\0";break;case"":o+=n.substring(a,u+1);break;default:ge(61167,{path:n})}a=u+2}return new qe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="remoteDocuments",Cu="owner",ea="owner",uu="mutationQueues",mk="userId",er="mutations",Ov="batchId",Fs="userMutationsIndex",Lv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e){return[n,Qt(e)]}function OI(n,e,t){return[n,Qt(e),t]}const gk={},ya="documentMutations",Lh="remoteDocumentsV14",yk=["prefixPath","collectionGroup","readTime","documentId"],yh="documentKeyIndex",_k=["prefixPath","collectionGroup","documentId"],LI="collectionGroupIndex",vk=["collectionGroup","readTime","prefixPath","documentId"],cu="remoteDocumentGlobal",jp="remoteDocumentGlobalKey",_a="targets",MI="queryTargetsIndex",Ek=["canonicalId","targetId"],va="targetDocuments",wk=["targetId","path"],Om="documentTargetsIndex",Ik=["path","targetId"],Mh="targetGlobalKey",Bs="targetGlobal",hu="collectionParents",Tk=["collectionId","parent"],Ea="clientMetadata",Sk="clientId",ld="bundles",Ak="bundleId",ud="namedQueries",Rk="name",Lm="indexConfiguration",Pk="indexId",Bp="collectionGroupIndex",Ck="collectionGroup",Ql="indexState",kk=["indexId","uid"],FI="sequenceNumberIndex",xk=["uid","sequenceNumber"],Xl="indexEntries",Nk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],UI="documentKeyIndex",Dk=["indexId","uid","orderedDocumentKey"],cd="documentOverlays",bk=["userId","collectionPath","documentId"],zp="collectionPathOverlayIndex",Vk=["userId","collectionPath","largestBatchId"],jI="collectionGroupOverlayIndex",Ok=["userId","collectionGroup","largestBatchId"],Mm="globals",Lk="name",BI=[uu,er,ya,Ds,_a,Cu,Bs,va,Ea,cu,hu,ld,ud],Mk=[...BI,cd],zI=[uu,er,ya,Lh,_a,Cu,Bs,va,Ea,cu,hu,ld,ud,cd],$I=zI,Fm=[...$I,Lm,Ql,Xl],Fk=Fm,qI=[...Fm,Mm],Uk=qI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends bI{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function Ct(n,e){const t=ke(n);return Bi.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function es(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function WI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Bt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rh(this.root,e,this.comparator,!1)}getReverseIterator(){return new rh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rh(this.root,e,this.comparator,!0)}}class rh{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Bt.RED,this.left=o??Bt.EMPTY,this.right=a??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Bt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fv(this.data.getIterator())}getIteratorFrom(e){return new Fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ta(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new fn([])}unionWith(e){let t=new He(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ga(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new KI("Invalid base64 string: "+a):a}})(e);return new wt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(n){if(we(!!n,39018),typeof n=="string"){let e=0;const t=jk.exec(n);if(we(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ei(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="server_timestamp",GI="__type__",QI="__previous_value__",XI="__local_write_time__";function Um(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[GI])===null||t===void 0?void 0:t.stringValue)===HI}function hd(n){const e=n.mapValue.fields[QI];return Um(e)?hd(e):e}function du(n){const e=Zr(n.mapValue.fields[XI].timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,t,r,o,a,u,d,f,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=y,this.isUsingEmulator=v}}const Fh="(default)";class Qs{constructor(e,t){this.projectId=e,this.database=t||Fh}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===Fh}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="__type__",YI="__max__",Mi={mapValue:{fields:{__type__:{stringValue:YI}}}},Bm="__vector__",wa="value",_h={nullValue:"NULL_VALUE"};function qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Um(n)?4:JI(n)?9007199254740991:dd(n)?10:11:ge(28295,{value:n})}function Sr(n,e){if(n===e)return!0;const t=qi(n);if(t!==qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return du(n).isEqual(du(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Zr(o.timestampValue),d=Zr(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return ei(o.bytesValue).isEqual(ei(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return rt(o.geoPointValue.latitude)===rt(a.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return rt(o.integerValue)===rt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=rt(o.doubleValue),d=rt(a.doubleValue);return u===d?lu(u)===lu(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return ga(n.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Mv(u)!==Mv(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Sr(u[f],d[f])))return!1;return!0})(n,e);default:return ge(52216,{left:n})}}function fu(n,e){return(n.values||[]).find((t=>Sr(t,e)))!==void 0}function Wi(n,e){if(n===e)return 0;const t=qi(n),r=qi(e);if(t!==r)return Pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=rt(a.integerValue||a.doubleValue),f=rt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Uv(n.timestampValue,e.timestampValue);case 4:return Uv(du(n),du(e));case 5:return Fp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=ei(a),f=ei(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let y=0;y<d.length&&y<f.length;y++){const v=Pe(d[y],f[y]);if(v!==0)return v}return Pe(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Pe(rt(a.latitude),rt(u.latitude));return d!==0?d:Pe(rt(a.longitude),rt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return jv(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,y,v;const w=a.fields||{},T=u.fields||{},b=(d=w[wa])===null||d===void 0?void 0:d.arrayValue,U=(f=T[wa])===null||f===void 0?void 0:f.arrayValue,z=Pe(((y=b==null?void 0:b.values)===null||y===void 0?void 0:y.length)||0,((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:jv(b,U)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Mi.mapValue&&u===Mi.mapValue)return 0;if(a===Mi.mapValue)return 1;if(u===Mi.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),y=u.fields||{},v=Object.keys(y);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Fp(f[w],v[w]);if(T!==0)return T;const b=Wi(d[f[w]],y[v[w]]);if(b!==0)return b}return Pe(f.length,v.length)})(n.mapValue,e.mapValue);default:throw ge(23264,{le:t})}}function Uv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=Zr(n),r=Zr(e),o=Pe(t.seconds,r.seconds);return o!==0?o:Pe(t.nanos,r.nanos)}function jv(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=Wi(t[o],r[o]);if(a)return a}return Pe(t.length,r.length)}function Ia(n){return qp(n)}function qp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Zr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ei(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=qp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${qp(t.fields[u])}`;return o+"}"})(n.mapValue):ge(61005,{value:n})}function vh(n){switch(qi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(n);return e?16+vh(e):16;case 5:return 2*n.stringValue.length;case 6:return ei(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+vh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return es(r.fields,((a,u)=>{o+=a.length+vh(u)})),o})(n.mapValue);default:throw ge(13486,{value:n})}}function pu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wp(n){return!!n&&"integerValue"in n}function mu(n){return!!n&&"arrayValue"in n}function Bv(n){return!!n&&"nullValue"in n}function zv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Eh(n){return!!n&&"mapValue"in n}function dd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jm])===null||t===void 0?void 0:t.stringValue)===Bm}function Yl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return es(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Yl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function JI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===YI}const ZI={mapValue:{fields:{[jm]:{stringValue:Bm},[wa]:{arrayValue:{}}}}};function zk(n){return"nullValue"in n?_h:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?pu(Qs.empty(),ae.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?dd(n)?ZI:{mapValue:{}}:ge(35942,{value:n})}function $k(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?pu(Qs.empty(),ae.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?ZI:"mapValue"in n?dd(n)?{mapValue:{}}:Mi:ge(61959,{value:n})}function $v(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function qv(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Eh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(t)}setAll(e){let t=at.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=Yl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());Eh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];Eh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){es(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new Gt(Yl(this.value))}}function e0(n){const e=[];return es(n.fields,((t,r)=>{const o=new at([t]);if(Eh(r)){const a=e0(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Te.min(),Te.min(),Te.min(),Gt.empty(),0)}static newFoundDocument(e,t,r,o){return new ht(e,1,t,Te.min(),r,o,0)}static newNoDocument(e,t){return new ht(e,2,t,Te.min(),Te.min(),Gt.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Te.min(),Te.min(),Gt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.position=e,this.inclusive=t}}function Wv(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(u.referenceValue),t.key):r=Wi(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Sr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t="asc"){this.field=e,this.dir=t}}function qk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{}class Le extends t0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Wk(e,t,r):t==="array-contains"?new Gk(e,r):t==="in"?new a0(e,r):t==="not-in"?new Qk(e,r):t==="array-contains-any"?new Xk(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Kk(e,r):new Hk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wi(t,this.value)):t!==null&&qi(this.value)===qi(t)&&this.matchesComparison(Wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends t0{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ke(e,t)}matches(e){return Sa(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Sa(n){return n.op==="and"}function Kp(n){return n.op==="or"}function zm(n){return n0(n)&&Sa(n)}function n0(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Hp(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+Ia(n.value);if(zm(n))return n.filters.map((e=>Hp(e))).join(",");{const e=n.filters.map((t=>Hp(t))).join(",");return`${n.op}(${e})`}}function r0(n,e){return n instanceof Le?(function(r,o){return o instanceof Le&&r.op===o.op&&r.field.isEqual(o.field)&&Sr(r.value,o.value)})(n,e):n instanceof Ke?(function(r,o){return o instanceof Ke&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&r0(u,o.filters[d])),!0):!1})(n,e):void ge(19439)}function i0(n,e){const t=n.filters.concat(e);return Ke.create(t,n.op)}function s0(n){return n instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ia(t.value)}`})(n):n instanceof Ke?(function(t){return t.op.toString()+" {"+t.getFilters().map(s0).join(" ,")+"}"})(n):"Filter"}class Wk extends Le{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kk extends Le{constructor(e,t){super(e,"in",t),this.keys=o0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hk extends Le{constructor(e,t){super(e,"not-in",t),this.keys=o0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function o0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ae.fromName(r.referenceValue)))}class Gk extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mu(t)&&fu(t.arrayValue,this.value)}}class a0 extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fu(this.value.arrayValue,t)}}class Qk extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(fu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fu(this.value.arrayValue,t)}}class Xk extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>fu(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Gp(n,e=null,t=[],r=[],o=null,a=null,u=null){return new Yk(n,e,t,r,o,a,u)}function Xs(n){const e=ke(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Hp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ia(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ia(r))).join(",")),e.Pe=t}return e.Pe}function ku(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!r0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Kv(n.startAt,e.startAt)&&Kv(n.endAt,e.endAt)}function Uh(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function jh(n,e){return n.filters.filter((t=>t instanceof Le&&t.field.isEqual(e)))}function Hv(n,e,t){let r=_h,o=!0;for(const a of jh(n,e)){let u=_h,d=!0;switch(a.op){case"<":case"<=":u=zk(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,d=!1;break;case"!=":case"not-in":u=_h}$v({value:r,inclusive:o},{value:u,inclusive:d})<0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];$v({value:r,inclusive:o},{value:u,inclusive:t.inclusive})<0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}function Gv(n,e,t){let r=Mi,o=!0;for(const a of jh(n,e)){let u=Mi,d=!0;switch(a.op){case">=":case">":u=$k(a.value),d=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,d=!1;break;case"!=":case"not-in":u=Mi}qv({value:r,inclusive:o},{value:u,inclusive:d})>0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];qv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})>0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Jk(n,e,t,r,o,a,u,d){return new ba(n,e,t,r,o,a,u,d)}function xu(n){return new ba(n)}function Qv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function l0(n){return n.collectionGroup!==null}function Jl(n){const e=ke(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new He(at.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new gu(a,r))})),t.has(at.keyField().canonicalString())||e.Te.push(new gu(at.keyField(),r))}return e.Te}function Ln(n){const e=ke(n);return e.Ie||(e.Ie=Zk(e,Jl(n))),e.Ie}function Zk(n,e){if(n.limitType==="F")return Gp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new gu(o.field,a)}));const t=n.endAt?new Ta(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ta(n.startAt.position,n.startAt.inclusive):null;return Gp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qp(n,e){const t=n.filters.concat([e]);return new ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xp(n,e,t){return new ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fd(n,e){return ku(Ln(n),Ln(e))&&n.limitType===e.limitType}function u0(n){return`${Xs(Ln(n))}|lt:${n.limitType}`}function aa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>s0(o))).join(", ")}]`),ad(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>Ia(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>Ia(o))).join(",")),`Target(${r})`})(Ln(n))}; limitType=${n.limitType})`}function Nu(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of Jl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,f){const y=Wv(u,d,f);return u.inclusive?y<=0:y<0})(r.startAt,Jl(r),o)||r.endAt&&!(function(u,d,f){const y=Wv(u,d,f);return u.inclusive?y>=0:y>0})(r.endAt,Jl(r),o))})(n,e)}function ex(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function c0(n){return(e,t)=>{let r=!1;for(const o of Jl(n)){const a=tx(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function tx(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),y=d.data.field(a);return f!==null&&y!==null?Wi(f,y):ge(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return WI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new it(ae.comparator);function In(){return nx}const h0=new it(ae.comparator);function Bl(...n){let e=h0;for(const t of n)e=e.insert(t.key,t);return e}function d0(n){let e=h0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function _r(){return Zl()}function f0(){return Zl()}function Zl(){return new ti((n=>n.toString()),((n,e)=>n.isEqual(e)))}const rx=new it(ae.comparator),ix=new He(ae.comparator);function De(...n){let e=ix;for(const t of n)e=e.add(t);return e}const sx=new He(Pe);function ox(){return sx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lu(e)?"-0":e}}function p0(n){return{integerValue:""+n}}function ax(n,e){return fk(e)?p0(e):$m(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this._=void 0}}function lx(n,e,t){return n instanceof Aa?(function(o,a){const u={fields:{[GI]:{stringValue:HI},[XI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Um(a)&&(a=hd(a)),a&&(u.fields[QI]=a),{mapValue:u}})(t,e):n instanceof Ra?g0(n,e):n instanceof Pa?y0(n,e):(function(o,a){const u=m0(o,a),d=Xv(u)+Xv(o.Ee);return Wp(u)&&Wp(o.Ee)?p0(d):$m(o.serializer,d)})(n,e)}function ux(n,e,t){return n instanceof Ra?g0(n,e):n instanceof Pa?y0(n,e):t}function m0(n,e){return n instanceof yu?(function(r){return Wp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Aa extends pd{}class Ra extends pd{constructor(e){super(),this.elements=e}}function g0(n,e){const t=_0(e);for(const r of n.elements)t.some((o=>Sr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Pa extends pd{constructor(e){super(),this.elements=e}}function y0(n,e){let t=_0(e);for(const r of n.elements)t=t.filter((o=>!Sr(o,r)));return{arrayValue:{values:t}}}class yu extends pd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Xv(n){return rt(n.integerValue||n.doubleValue)}function _0(n){return mu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,t){this.field=e,this.transform=t}}function cx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Ra&&o instanceof Ra||r instanceof Pa&&o instanceof Pa?ga(r.elements,o.elements,Sr):r instanceof yu&&o instanceof yu?Sr(r.Ee,o.Ee):r instanceof Aa&&o instanceof Aa})(n.transform,e.transform)}class hx{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class md{}function E0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gd(n.key,tn.none()):new Va(n.key,n.data,tn.none());{const t=n.data,r=Gt.empty();let o=new He(at.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new ni(n.key,r,new fn(o.toArray()),tn.none())}}function dx(n,e,t){n instanceof Va?(function(o,a,u){const d=o.value.clone(),f=Jv(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ni?(function(o,a,u){if(!wh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Jv(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(w0(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function eu(n,e,t,r){return n instanceof Va?(function(a,u,d,f){if(!wh(a.precondition,u))return d;const y=a.value.clone(),v=Zv(a.fieldTransforms,f,u);return y.setAll(v),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null})(n,e,t,r):n instanceof ni?(function(a,u,d,f){if(!wh(a.precondition,u))return d;const y=Zv(a.fieldTransforms,f,u),v=u.data;return v.setAll(w0(a)),v.setAll(y),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return wh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function fx(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=m0(r.transform,o||null);a!=null&&(t===null&&(t=Gt.empty()),t.set(r.field,a))}return t||null}function Yv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&ga(r,o,((a,u)=>cx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Va extends md{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ni extends md{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function w0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Jv(n,e,t){const r=new Map;we(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,ux(u,d,t[o]))}return r}function Zv(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,lx(a,u,e))}return r}class gd extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I0 extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&dx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=eu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=eu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=f0();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=E0(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Te.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&ga(this.mutations,e.mutations,((t,r)=>Yv(t,r)))&&ga(this.baseMutations,e.baseMutations,((t,r)=>Yv(t,r)))}}class Wm{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){we(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=(function(){return rx})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new Wm(e,t,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ue;function mx(n){switch(n){case K.OK:return ge(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function T0(n){if(n===void 0)return en("GRPC error has no .code"),K.UNKNOWN;switch(n){case yt.OK:return K.OK;case yt.CANCELLED:return K.CANCELLED;case yt.UNKNOWN:return K.UNKNOWN;case yt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case yt.INTERNAL:return K.INTERNAL;case yt.UNAVAILABLE:return K.UNAVAILABLE;case yt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case yt.NOT_FOUND:return K.NOT_FOUND;case yt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case yt.ABORTED:return K.ABORTED;case yt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case yt.DATA_LOSS:return K.DATA_LOSS;default:return ge(39323,{code:n})}}(Ue=yt||(yt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new ji([4294967295,4294967295],0);function eE(n){const e=PI().encode(n),t=new vI;return t.update(e),new Uint8Array(t.digest())}function tE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ji([t,r],0),new ji([o,a],0)]}class Hm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zl(`Invalid padding: ${t}`);if(r<0)throw new zl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ji.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(ji.fromNumber(r)));return o.compare(gx)===1&&(o=new ji([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=eE(e),[r,o]=tE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Hm(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=eE(e),[r,o]=tE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Du.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yd(Te.min(),o,new it(Pe),In(),De())}}class Du{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Du(r,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class S0{constructor(e,t){this.targetId=e,this.De=t}}class A0{constructor(e,t,r=wt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class nE{constructor(){this.ve=0,this.Ce=rE(),this.Fe=wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),t=De(),r=De();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:ge(38017,{changeType:a})}})),new Du(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=rE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class yx{constructor(e){this.We=e,this.Ge=new Map,this.ze=In(),this.je=ih(),this.Je=ih(),this.He=new it(Pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if(Uh(a))if(r===0){const u=new ae(a.path);this.Xe(t,u,ht.newNoDocument(u,Te.min()))}else we(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const y=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=ei(r).toUint8Array()}catch(f){if(f instanceof KI)return Tr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Hm(u,o,a)}catch(f){return Tr(f instanceof zl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Uh(d.target)){const f=new ae(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,ht.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=De();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const y=this.st(f);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const o=new yd(e,t,this.He,this.ze,r);return this.ze=In(),this.je=ih(),this.Je=ih(),this.He=new it(Pe),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new nE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new He(Pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new He(Pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new nE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ih(){return new it(ae.comparator)}function rE(){return new it(ae.comparator)}const _x={asc:"ASCENDING",desc:"DESCENDING"},vx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ex={and:"AND",or:"OR"};class wx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yp(n,e){return n.useProto3Json||ad(e)?e:{value:e}}function Ca(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ix(n,e){return Ca(n,e.toTimestamp())}function nn(n){return we(!!n,49232),Te.fromTimestamp((function(t){const r=Zr(t);return new $e(r.seconds,r.nanos)})(n))}function Gm(n,e){return Jp(n,e).canonicalString()}function Jp(n,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function P0(n){const e=qe.fromString(n);return we(L0(e),10190,{key:e.toString()}),e}function Bh(n,e){return Gm(n.databaseId,e.path)}function zs(n,e){const t=P0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(x0(t))}function C0(n,e){return Gm(n.databaseId,e)}function k0(n){const e=P0(n);return e.length===4?qe.emptyPath():x0(e)}function Zp(n){return new qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function x0(n){return we(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function iE(n,e,t){return{name:Bh(n,e),fields:t.value.mapValue.fields}}function Tx(n,e,t){const r=zs(n,e.name),o=nn(e.updateTime),a=e.createTime?nn(e.createTime):Te.min(),u=new Gt({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,o,a,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function Sx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ge(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(y,v){return y.useProto3Json?(we(v===void 0||typeof v=="string",58123),wt.fromBase64String(v||"")):(we(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),wt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(y){const v=y.code===void 0?K.UNKNOWN:T0(y.code);return new oe(v,y.message||"")})(u);t=new A0(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=zs(n,r.document.name),a=nn(r.document.updateTime),u=r.document.createTime?nn(r.document.createTime):Te.min(),d=new Gt({mapValue:{fields:r.document.fields}}),f=ht.newFoundDocument(o,a,u,d),y=r.targetIds||[],v=r.removedTargetIds||[];t=new Ih(y,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=zs(n,r.document),a=r.readTime?nn(r.readTime):Te.min(),u=ht.newNoDocument(o,a),d=r.removedTargetIds||[];t=new Ih([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=zs(n,r.document),a=r.removedTargetIds||[];t=new Ih([],a,o,null)}else{if(!("filter"in e))return ge(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new px(o,a),d=r.targetId;t=new S0(d,u)}}return t}function zh(n,e){let t;if(e instanceof Va)t={update:iE(n,e.key,e.value)};else if(e instanceof gd)t={delete:Bh(n,e.key)};else if(e instanceof ni)t={update:iE(n,e.key,e.data),updateMask:xx(e.fieldMask)};else{if(!(e instanceof I0))return ge(16599,{Rt:e.type});t={verify:Bh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Aa)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ra)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Pa)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof yu)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw ge(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:Ix(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ge(27497)})(n,e.precondition)),t}function em(n,e){const t=e.currentDocument?(function(a){return a.updateTime!==void 0?tn.updateTime(nn(a.updateTime)):a.exists!==void 0?tn.exists(a.exists):tn.none()})(e.currentDocument):tn.none(),r=e.updateTransforms?e.updateTransforms.map((o=>(function(u,d){let f=null;if("setToServerValue"in d)we(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),f=new Aa;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new Ra(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new Pa(v)}else"increment"in d?f=new yu(u,d.increment):ge(16584,{proto:d});const y=at.fromServerFormat(d.fieldPath);return new v0(y,f)})(n,o))):[];if(e.update){e.update.name;const o=zs(n,e.update.name),a=new Gt({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=(function(f){const y=f.fieldPaths||[];return new fn(y.map((v=>at.fromServerFormat(v))))})(e.updateMask);return new ni(o,a,u,t,r)}return new Va(o,a,t,r)}if(e.delete){const o=zs(n,e.delete);return new gd(o,t)}if(e.verify){const o=zs(n,e.verify);return new I0(o,t)}return ge(1463,{proto:e})}function Ax(n,e){return n&&n.length>0?(we(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?nn(o.updateTime):nn(a);return u.isEqual(Te.min())&&(u=nn(a)),new hx(u,o.transformResults||[])})(t,e)))):[]}function N0(n,e){return{documents:[C0(n,e.path)]}}function D0(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=C0(n,o);const a=(function(y){if(y.length!==0)return O0(Ke.create(y,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(y){if(y.length!==0)return y.map((v=>(function(T){return{field:la(T.field),direction:Px(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Yp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function b0(n){let e=k0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){we(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=V0(w);return T instanceof Ke&&zm(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(U){return new gu(ua(U.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,ad(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,b=w.values||[];return new Ta(b,T)})(t.startAt));let y=null;return t.endAt&&(y=(function(w){const T=!w.before,b=w.values||[];return new Ta(b,T)})(t.endAt)),Jk(e,o,u,a,d,"F",f,y)}function Rx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function V0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ua(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=ua(t.unaryFilter.field);return Le.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ua(t.unaryFilter.field);return Le.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ua(t.unaryFilter.field);return Le.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Le.create(ua(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ke.create(t.compositeFilter.filters.map((r=>V0(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(n):ge(30097,{filter:n})}function Px(n){return _x[n]}function Cx(n){return vx[n]}function kx(n){return Ex[n]}function la(n){return{fieldPath:n.canonicalString()}}function ua(n){return at.fromServerFormat(n.fieldPath)}function O0(n){return n instanceof Le?(function(t){if(t.op==="=="){if(zv(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NAN"}};if(Bv(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zv(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NOT_NAN"}};if(Bv(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:la(t.field),op:Cx(t.op),value:t.value}}})(n):n instanceof Ke?(function(t){const r=t.getFilters().map((o=>O0(o)));return r.length===1?r[0]:{compositeFilter:{op:kx(t.op),filters:r}}})(n):ge(54877,{filter:n})}function xx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function L0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,r,o,a=Te.min(),u=Te.min(),d=wt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.gt=e}}function Nx(n,e){let t;if(e.document)t=Tx(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ae.fromSegments(e.noDocument.path),o=Js(e.noDocument.readTime);t=ht.newNoDocument(r,o),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ge(56709);{const r=ae.fromSegments(e.unknownDocument.path),o=Js(e.unknownDocument.version);t=ht.newUnknownDocument(r,o)}}return e.readTime&&t.setReadTime((function(o){const a=new $e(o[0],o[1]);return Te.fromTimestamp(a)})(e.readTime)),t}function sE(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$h(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(a,u){return{name:Bh(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Ca(a,u.version.toTimestamp()),createTime:Ca(a,u.createTime.toTimestamp())}})(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ys(e.version)};else{if(!e.isUnknownDocument())return ge(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Ys(e.version)}}return r}function $h(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ys(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Js(n){const e=new $e(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function Vs(n,e){const t=(e.baseMutations||[]).map((a=>em(n.gt,a)));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map((a=>em(n.gt,a))),o=$e.fromMillis(e.localWriteTimeMs);return new qm(e.batchId,o,t,r)}function $l(n){const e=Js(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Js(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=(function(a){return a.documents!==void 0})(n.query)?(function(a){const u=a.documents.length;return we(u===1,1966,{count:u}),Ln(xu(k0(a.documents[0])))})(n.query):(function(a){return Ln(b0(a))})(n.query),new Gr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,wt.fromBase64String(n.resumeToken))}function F0(n,e){const t=Ys(e.snapshotVersion),r=Ys(e.lastLimboFreeSnapshotVersion);let o;o=Uh(e.target)?N0(n.gt,e.target):D0(n.gt,e.target).Vt;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Xs(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:o}}function U0(n){const e=b0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xp(e,e.limit,"L"):e}function gp(n,e){return new Km(e.largestBatchId,em(n.gt,e.overlayMutation))}function oE(n,e){const t=e.path.lastSegment();return[n,Qt(e.path.popLast()),t]}function aE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ys(r.readTime),documentKey:Qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{getBundleMetadata(e,t){return lE(e).get(t).next((r=>{if(r)return(function(a){return{id:a.bundleId,createTime:Js(a.createTime),version:a.version}})(r)}))}saveBundleMetadata(e,t){return lE(e).put((function(o){return{bundleId:o.id,createTime:Ys(nn(o.createTime)),version:o.version}})(t))}getNamedQuery(e,t){return uE(e).get(t).next((r=>{if(r)return(function(a){return{name:a.name,query:U0(a.bundledQuery),readTime:Js(a.readTime)}})(r)}))}saveNamedQuery(e,t){return uE(e).put((function(o){return{name:o.name,readTime:Ys(nn(o.readTime)),bundledQuery:o.bundledQuery}})(t))}}function lE(n){return Ct(n,ld)}function uE(n){return Ct(n,ud)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new _d(e,r)}getOverlay(e,t){return Nl(e).get(oE(this.userId,t)).next((r=>r?gp(this.serializer,r):null))}getOverlays(e,t){const r=_r();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){const o=[];return r.forEach(((a,u)=>{const d=new Km(t,u);o.push(this.wt(e,d))})),F.waitFor(o)}removeOverlaysForBatchId(e,t,r){const o=new Set;t.forEach((u=>o.add(Qt(u.getCollectionPath()))));const a=[];return o.forEach((u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(Nl(e).Y(zp,d))})),F.waitFor(a)}getOverlaysForCollection(e,t,r){const o=_r(),a=Qt(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return Nl(e).j(zp,u).next((d=>{for(const f of d){const y=gp(this.serializer,f);o.set(y.getKey(),y)}return o}))}getOverlaysForCollectionGroup(e,t,r,o){const a=_r();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nl(e).X({index:jI,range:d},((f,y,v)=>{const w=gp(this.serializer,y);a.size()<o||w.largestBatchId===u?(a.set(w.getKey(),w),u=w.largestBatchId):v.done()})).next((()=>a))}wt(e,t){return Nl(e).put((function(o,a,u){const[d,f,y]=oE(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:y,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:zh(o.gt,u.mutation)}})(this.serializer,this.userId,t))}}function Nl(n){return Ct(n,cd)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{St(e){return Ct(e,Mm)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?wt.fromUint8Array(r):wt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(rt(e.integerValue));else if("doubleValue"in e){const r=rt(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),lu(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Zr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(ei(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?JI(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):dd(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):ge(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const o of Object.keys(r))this.xt(o,t),this.Dt(r[o],t)}Lt(e,t){var r,o;const a=e.fields||{};this.Ct(t,53);const u=wa,d=((o=(r=a[u].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.length)||0;this.Ct(t,15),t.Ft(rt(d)),this.xt(u,t),this.Dt(a[u],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const o of r)this.Dt(o,t)}Bt(e,t){this.Ct(t,37),ae.fromName(e).path.forEach((r=>{this.Ct(t,60),this.$t(r,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Os.Ut=new Os;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=255;function Vx(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function cE(n){const e=64-(function(r){let o=0;for(let a=0;a<8;++a){const u=Vx(255&r[a]);if(o+=u,u!==8)break}return o})(n);return Math.ceil(e/8)}class Ox{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const o=t.codePointAt(0);this.Wt(240|o>>>18),this.Wt(128|63&o>>>12),this.Wt(128|63&o>>>6),this.Wt(128|63&o)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const o=t.codePointAt(0);this.jt(240|o>>>18),this.jt(128|63&o>>>12),this.jt(128|63&o>>>6),this.jt(128|63&o)}}this.Jt()}Zt(e){const t=this.Xt(e),r=cE(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=255&t[o]}tn(e){const t=this.Xt(e),r=cE(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=~(255&t[o])}nn(){this.rn(na),this.rn(255)}sn(){this._n(na),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let o=1;o<t.length;++o)t[o]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===na?(this.rn(na),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===na?(this._n(na),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}class Lx{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Mx{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Dl{constructor(){this.un=new Ox,this.cn=new Lx(this.un),this.ln=new Mx(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,o){this.Pn=e,this.Tn=t,this.In=r,this.dn=o}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Ls(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Th(this.In),directionalValue:Th(this.dn),orderedDocumentKey:Th(t),documentKey:r.path.toArray()}}Rn(e,t,r){const o=this.An(e,t,r);return[o.indexId,o.uid,o.arrayValue,o.directionalValue,o.orderedDocumentKey,o.documentKey]}}function ki(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=hE(n.In,e.In),t!==0?t:(t=hE(n.dn,e.dn),t!==0?t:ae.comparator(n.Tn,e.Tn)))}function hE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Th(n){return bw()?(function(t){let r="";for(let o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r})(n):n}function dE(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(n)}class fE{constructor(e){this.Vn=new He(((t,r)=>at.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(we(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Up(e);if(t!==void 0&&!this.yn(t))return!1;const r=Ns(e);let o=new Set,a=0,u=0;for(;a<r.length&&this.yn(r[a]);++a)o=o.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.Vn.size>0){const d=this.Vn.getIterator().getNext();if(!o.has(d.field.canonicalString())){const f=r[a];if(!this.wn(d,f)||!this.Sn(this.mn[u++],f))return!1}++a}for(;a<r.length;++a){const d=r[a];if(u>=this.mn.length||!this.Sn(this.mn[u++],d))return!1}return!0}bn(){if(this.gn)return null;let e=new He(at.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new mh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new mh(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new mh(r.field,r.dir==="asc"?0:1)));return new Vh(Vh.UNKNOWN_ID,this.collectionId,t,au.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){var e,t;if(we(n instanceof Le||n instanceof Ke,20012),n instanceof Le){if(n instanceof a0){const o=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((a=>Le.create(n.field,"==",a))))||[];return Ke.create(o,"or")}return n}const r=n.filters.map((o=>j0(o)));return Ke.create(r,n.op)}function Fx(n){if(n.getFilters().length===0)return[];const e=rm(j0(n));return we(B0(e),7391),tm(e)||nm(e)?[e]:e.getFilters()}function tm(n){return n instanceof Le}function nm(n){return n instanceof Ke&&zm(n)}function B0(n){return tm(n)||nm(n)||(function(t){if(t instanceof Ke&&Kp(t)){for(const r of t.getFilters())if(!tm(r)&&!nm(r))return!1;return!0}return!1})(n)}function rm(n){if(we(n instanceof Le||n instanceof Ke,34018),n instanceof Le)return n;if(n.filters.length===1)return rm(n.filters[0]);const e=n.filters.map((r=>rm(r)));let t=Ke.create(e,n.op);return t=qh(t),B0(t)?t:(we(t instanceof Ke,64498),we(Sa(t),40251),we(t.filters.length>1,57927),t.filters.reduce(((r,o)=>Qm(r,o))))}function Qm(n,e){let t;return we(n instanceof Le||n instanceof Ke,38388),we(e instanceof Le||e instanceof Ke,25473),t=n instanceof Le?e instanceof Le?(function(o,a){return Ke.create([o,a],"and")})(n,e):pE(n,e):e instanceof Le?pE(e,n):(function(o,a){if(we(o.filters.length>0&&a.filters.length>0,48005),Sa(o)&&Sa(a))return i0(o,a.getFilters());const u=Kp(o)?o:a,d=Kp(o)?a:o,f=u.filters.map((y=>Qm(y,d)));return Ke.create(f,"or")})(n,e),qh(t)}function pE(n,e){if(Sa(e))return i0(e,n.getFilters());{const t=e.filters.map((r=>Qm(n,r)));return Ke.create(t,"or")}}function qh(n){if(we(n instanceof Le||n instanceof Ke,11850),n instanceof Le)return n;const e=n.getFilters();if(e.length===1)return qh(e[0]);if(n0(n))return n;const t=e.map((o=>qh(o))),r=[];return t.forEach((o=>{o instanceof Le?r.push(o):o instanceof Ke&&(o.op===n.op?r.push(...o.filters):r.push(o))})),r.length===1?r[0]:Ke.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.Dn=new Xm}addToCollectionParentIndex(e,t){return this.Dn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Tn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class Xm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new He(qe.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new He(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="IndexedDbIndexManager",sh=new Uint8Array(0);class jx{constructor(e,t){this.databaseId=t,this.vn=new Xm,this.Cn=new ti((r=>Xs(r)),((r,o)=>ku(r,o))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const a={collectionId:r,parent:Qt(o)};return gE(e).put(a)}return F.resolve()}getCollectionParents(e,t){const r=[],o=IDBKeyRange.bound([t,""],[CI(t),""],!1,!0);return gE(e).j(o).next((a=>{for(const u of a){if(u.collectionId!==t)break;r.push(yr(u.parent))}return r}))}addFieldIndex(e,t){const r=bl(e),o=(function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map((f=>[f.fieldPath.canonicalString(),f.kind]))}})(t);delete o.indexId;const a=r.add(o);if(t.indexState){const u=ia(e);return a.next((d=>{u.put(aE(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return a.next()}deleteFieldIndex(e,t){const r=bl(e),o=ia(e),a=ra(e);return r.delete(t.indexId).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=bl(e),r=ra(e),o=ia(e);return t.Y().next((()=>r.Y())).next((()=>o.Y()))}createTargetIndexes(e,t){return F.forEach(this.Fn(t),(r=>this.getIndexType(e,r).next((o=>{if(o===0||o===1){const a=new fE(r).bn();if(a!=null)return this.addFieldIndex(e,a)}}))))}getDocumentsMatchingTarget(e,t){const r=ra(e);let o=!0;const a=new Map;return F.forEach(this.Fn(t),(u=>this.Mn(e,u).next((d=>{o&&(o=!!d),a.set(u,d)})))).next((()=>{if(o){let u=De();const d=[];return F.forEach(a,((f,y)=>{J(mE,`Using index ${(function(Z){return`id=${Z.indexId}|cg=${Z.collectionGroup}|f=${Z.fields.map((le=>`${le.fieldPath}:${le.kind}`)).join(",")}`})(f)} to execute ${Xs(t)}`);const v=(function(Z,le){const Ie=Up(le);if(Ie===void 0)return null;for(const ce of jh(Z,Ie.fieldPath))switch(ce.op){case"array-contains-any":return ce.value.arrayValue.values||[];case"array-contains":return[ce.value]}return null})(y,f),w=(function(Z,le){const Ie=new Map;for(const ce of Ns(le))for(const C of jh(Z,ce.fieldPath))switch(C.op){case"==":case"in":Ie.set(ce.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return Ie.set(ce.fieldPath.canonicalString(),C.value),Array.from(Ie.values())}return null})(y,f),T=(function(Z,le){const Ie=[];let ce=!0;for(const C of Ns(le)){const S=C.kind===0?Hv(Z,C.fieldPath,Z.startAt):Gv(Z,C.fieldPath,Z.startAt);Ie.push(S.value),ce&&(ce=S.inclusive)}return new Ta(Ie,ce)})(y,f),b=(function(Z,le){const Ie=[];let ce=!0;for(const C of Ns(le)){const S=C.kind===0?Gv(Z,C.fieldPath,Z.endAt):Hv(Z,C.fieldPath,Z.endAt);Ie.push(S.value),ce&&(ce=S.inclusive)}return new Ta(Ie,ce)})(y,f),U=this.xn(f,y,T),z=this.xn(f,y,b),N=this.On(f,y,w),te=this.Nn(f.indexId,v,U,T.inclusive,z,b.inclusive,N);return F.forEach(te,(ne=>r.H(ne,t.limit).next((Z=>{Z.forEach((le=>{const Ie=ae.fromSegments(le.documentKey);u.has(Ie)||(u=u.add(Ie),d.push(Ie))}))}))))})).next((()=>d))}return F.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Fx(Ke.create(e.filters,"and")).map((r=>Gp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,r,o,a,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),y=f/(t!=null?t.length:1),v=[];for(let w=0;w<f;++w){const T=t?this.Bn(t[w/y]):sh,b=this.Ln(e,T,r[w%y],o),U=this.kn(e,T,a[w%y],u),z=d.map((N=>this.Ln(e,T,N,!0)));v.push(...this.createRange(b,U,z))}return v}Ln(e,t,r,o){const a=new Ls(e,ae.empty(),t,r);return o?a:a.En()}kn(e,t,r,o){const a=new Ls(e,ae.empty(),t,r);return o?a.En():a}Mn(e,t){const r=new fE(t),o=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,o).next((a=>{let u=null;for(const d of a)r.pn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u}))}getIndexType(e,t){let r=2;const o=this.Fn(t);return F.forEach(o,(a=>this.Mn(e,a).next((u=>{u?r!==0&&u.fields.length<(function(f){let y=new He(at.comparator),v=!1;for(const w of f.filters)for(const T of w.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?v=!0:y=y.add(T.field));for(const w of f.orderBy)w.field.isKeyField()||(y=y.add(w.field));return y.size+(v?1:0)})(a)&&(r=1):r=0})))).next((()=>(function(u){return u.limit!==null})(t)&&o.length>1&&r===2?1:r))}qn(e,t){const r=new Dl;for(const o of Ns(e)){const a=t.data.field(o.fieldPath);if(a==null)return null;const u=r.hn(o.kind);Os.Ut.bt(a,u)}return r.an()}Bn(e){const t=new Dl;return Os.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new Dl;return Os.Ut.bt(pu(this.databaseId,t),r.hn((function(a){const u=Ns(a);return u.length===0?0:u[u.length-1].kind})(e))),r.an()}On(e,t,r){if(r===null)return[];let o=[];o.push(new Dl);let a=0;for(const u of Ns(e)){const d=r[a++];for(const f of o)if(this.$n(t,u.fieldPath)&&mu(d))o=this.Un(o,u,d);else{const y=f.hn(u.kind);Os.Ut.bt(d,y)}}return this.Kn(o)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const o=[...e],a=[];for(const u of r.arrayValue.values||[])for(const d of o){const f=new Dl;f.seed(d.an()),Os.Ut.bt(u,f.hn(t.kind)),a.push(f)}return a}$n(e,t){return!!e.filters.find((r=>r instanceof Le&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=bl(e),o=ia(e);return(t?r.j(Bp,IDBKeyRange.bound(t,t)):r.j()).next((a=>{const u=[];return F.forEach(a,(d=>o.get([d.indexId,this.uid]).next((f=>{u.push((function(v,w){const T=w?new au(w.sequenceNumber,new Tn(Js(w.readTime),new ae(yr(w.documentKey)),w.largestBatchId)):au.empty(),b=v.fields.map((([U,z])=>new mh(at.fromServerFormat(U),z)));return new Vh(v.indexId,v.collectionGroup,b,T)})(d,f))})))).next((()=>u))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,o)=>{const a=r.indexState.sequenceNumber-o.indexState.sequenceNumber;return a!==0?a:Pe(r.collectionGroup,o.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const o=bl(e),a=ia(e);return this.Wn(e).next((u=>o.j(Bp,IDBKeyRange.bound(t,t)).next((d=>F.forEach(d,(f=>a.put(aE(f.indexId,this.uid,u,r))))))))}updateIndexEntries(e,t){const r=new Map;return F.forEach(t,((o,a)=>{const u=r.get(o.collectionGroup);return(u?F.resolve(u):this.getFieldIndexes(e,o.collectionGroup)).next((d=>(r.set(o.collectionGroup,d),F.forEach(d,(f=>this.Gn(e,o,f).next((y=>{const v=this.zn(a,f);return y.isEqual(v)?F.resolve():this.jn(e,a,f,y,v)})))))))}))}Jn(e,t,r,o){return ra(e).put(o.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,o){return ra(e).delete(o.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const o=ra(e);let a=new He(ki);return o.X({index:UI,range:IDBKeyRange.only([r.indexId,this.uid,Th(this.Qn(r,t))])},((u,d)=>{a=a.add(new Ls(r.indexId,t,dE(d.arrayValue),dE(d.directionalValue)))})).next((()=>a))}zn(e,t){let r=new He(ki);const o=this.qn(t,e);if(o==null)return r;const a=Up(t);if(a!=null){const u=e.data.field(a.fieldPath);if(mu(u))for(const d of u.arrayValue.values||[])r=r.add(new Ls(t.indexId,e.key,this.Bn(d),o))}else r=r.add(new Ls(t.indexId,e.key,sh,o));return r}jn(e,t,r,o,a){J(mE,"Updating index entries for document '%s'",t.key);const u=[];return(function(f,y,v,w,T){const b=f.getIterator(),U=y.getIterator();let z=ta(b),N=ta(U);for(;z||N;){let te=!1,ne=!1;if(z&&N){const Z=v(z,N);Z<0?ne=!0:Z>0&&(te=!0)}else z!=null?ne=!0:te=!0;te?(w(N),N=ta(U)):ne?(T(z),z=ta(b)):(z=ta(b),N=ta(U))}})(o,a,ki,(d=>{u.push(this.Jn(e,t,r,d))}),(d=>{u.push(this.Hn(e,t,r,d))})),F.waitFor(u)}Wn(e){let t=1;return ia(e).X({index:FI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,o,a)=>{a.done(),t=o.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((u,d)=>ki(u,d))).filter(((u,d,f)=>!d||ki(u,f[d-1])!==0));const o=[];o.push(e);for(const u of r){const d=ki(u,e),f=ki(u,t);if(d===0)o[0]=e.En();else if(d>0&&f<0)o.push(u),o.push(u.En());else if(f>0)break}o.push(t);const a=[];for(let u=0;u<o.length;u+=2){if(this.Yn(o[u],o[u+1]))return[];const d=o[u].Rn(this.uid,sh,ae.empty()),f=o[u+1].Rn(this.uid,sh,ae.empty());a.push(IDBKeyRange.bound(d,f))}return a}Yn(e,t){return ki(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(yE)}getMinOffset(e,t){return F.mapArray(this.Fn(t),(r=>this.Mn(e,r).next((o=>o||ge(44426))))).next(yE)}}function gE(n){return Ct(n,hu)}function ra(n){return Ct(n,Xl)}function bl(n){return Ct(n,Lm)}function ia(n){return Ct(n,Ql)}function yE(n){we(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const o=n[r].indexState.offset;bm(o,e)<0&&(e=o),t<o.largestBatchId&&(t=o.largestBatchId)}return new Tn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},z0=41943040;class Ht{static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(n,e,t){const r=n.store(er),o=n.store(ya),a=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.X({range:u},((v,w,T)=>(d++,T.delete())));a.push(f.next((()=>{we(d===1,47070,{batchId:t.batchId})})));const y=[];for(const v of t.mutations){const w=OI(e,v.key.path,t.batchId);a.push(o.delete(w)),y.push(v.key)}return F.waitFor(a).next((()=>y))}function Wh(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ge(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(z0,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);class vd{constructor(e,t,r,o){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=o,this.Zn={}}static yt(e,t,r,o){we(e.uid!=="",64387);const a=e.isAuthenticated()?e.uid:"";return new vd(a,t,r,o)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xi(e).X({index:Fs,range:r},((o,a,u)=>{t=!1,u.done()})).next((()=>t))}addMutationBatch(e,t,r,o){const a=ca(e),u=xi(e);return u.add({}).next((d=>{we(typeof d=="number",49019);const f=new qm(d,t,r,o),y=(function(b,U,z){const N=z.baseMutations.map((ne=>zh(b.gt,ne))),te=z.mutations.map((ne=>zh(b.gt,ne)));return{userId:U,batchId:z.batchId,localWriteTimeMs:z.localWriteTime.toMillis(),baseMutations:N,mutations:te}})(this.serializer,this.userId,f),v=[];let w=new He(((T,b)=>Pe(T.canonicalString(),b.canonicalString())));for(const T of o){const b=OI(this.userId,T.key.path,d);w=w.add(T.key.path.popLast()),v.push(u.put(y)),v.push(a.put(b,gk))}return w.forEach((T=>{v.push(this.indexManager.addToCollectionParentIndex(e,T))})),e.addOnCommittedListener((()=>{this.Zn[d]=f.keys()})),F.waitFor(v).next((()=>f))}))}lookupMutationBatch(e,t){return xi(e).get(t).next((r=>r?(we(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Vs(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?F.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const o=r.keys();return this.Zn[t]=o,o}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return xi(e).X({index:Fs,range:o},((u,d,f)=>{d.userId===this.userId&&(we(d.batchId>=r,47524,{er:r}),a=Vs(this.serializer,d)),f.done()})).next((()=>a))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=js;return xi(e).X({index:Fs,range:t,reverse:!0},((o,a,u)=>{r=a.batchId,u.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,js],[this.userId,Number.POSITIVE_INFINITY]);return xi(e).j(Fs,t).next((r=>r.map((o=>Vs(this.serializer,o)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=gh(this.userId,t.path),o=IDBKeyRange.lowerBound(r),a=[];return ca(e).X({range:o},((u,d,f)=>{const[y,v,w]=u,T=yr(v);if(y===this.userId&&t.path.isEqual(T))return xi(e).get(w).next((b=>{if(!b)throw ge(61480,{tr:u,batchId:w});we(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:w}),a.push(Vs(this.serializer,b))}));f.done()})).next((()=>a))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(Pe);const o=[];return t.forEach((a=>{const u=gh(this.userId,a.path),d=IDBKeyRange.lowerBound(u),f=ca(e).X({range:d},((y,v,w)=>{const[T,b,U]=y,z=yr(b);T===this.userId&&a.path.isEqual(z)?r=r.add(U):w.done()}));o.push(f)})),F.waitFor(o).next((()=>this.nr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1,a=gh(this.userId,r),u=IDBKeyRange.lowerBound(a);let d=new He(Pe);return ca(e).X({range:u},((f,y,v)=>{const[w,T,b]=f,U=yr(T);w===this.userId&&r.isPrefixOf(U)?U.length===o&&(d=d.add(b)):v.done()})).next((()=>this.nr(e,d)))}nr(e,t){const r=[],o=[];return t.forEach((a=>{o.push(xi(e).get(a).next((u=>{if(u===null)throw ge(35274,{batchId:a});we(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:a}),r.push(Vs(this.serializer,u))})))})),F.waitFor(o).next((()=>r))}removeMutationBatch(e,t){return $0(e.ce,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),F.forEach(r,(o=>this.referenceDelegate.markPotentiallyOrphaned(e,o))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return F.resolve();const r=IDBKeyRange.lowerBound((function(u){return[u]})(this.userId)),o=[];return ca(e).X({range:r},((a,u,d)=>{if(a[0]===this.userId){const f=yr(a[1]);o.push(f)}else d.done()})).next((()=>{we(o.length===0,56720,{ir:o.map((a=>a.canonicalString()))})}))}))}containsKey(e,t){return q0(e,this.userId,t)}sr(e){return W0(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:js,lastStreamToken:""}))}}function q0(n,e,t){const r=gh(e,t.path),o=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return ca(n).X({range:a,Z:!0},((d,f,y)=>{const[v,w,T]=d;v===e&&w===o&&(u=!0),y.done()})).next((()=>u))}function xi(n){return Ct(n,er)}function ca(n){return Ct(n,ya)}function W0(n){return Ct(n,uu)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Zs(0)}static ur(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const r=new Zs(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>Te.fromTimestamp(new $e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.cr(e).next((o=>(o.highestListenSequenceNumber=t,r&&(o.lastRemoteSnapshotVersion=r.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),this.lr(e,o))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>sa(e).delete(t.targetId))).next((()=>this.cr(e))).next((r=>(we(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r))))}removeTargets(e,t,r){let o=0;const a=[];return sa(e).X(((u,d)=>{const f=$l(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(o++,a.push(this.removeTargetData(e,f)))})).next((()=>F.waitFor(a))).next((()=>o))}forEachTarget(e,t){return sa(e).X(((r,o)=>{const a=$l(o);t(a)}))}cr(e){return vE(e).get(Mh).next((t=>(we(t!==null,2888),t)))}lr(e,t){return vE(e).put(Mh,t)}hr(e,t){return sa(e).put(F0(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Xs(t),o=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return sa(e).X({range:o,index:MI},((u,d,f)=>{const y=$l(d);ku(t,y.target)&&(a=y,f.done())})).next((()=>a))}addMatchingKeys(e,t,r){const o=[],a=Oi(e);return t.forEach((u=>{const d=Qt(u.path);o.push(a.put({targetId:r,path:d})),o.push(this.referenceDelegate.addReference(e,r,u))})),F.waitFor(o)}removeMatchingKeys(e,t,r){const o=Oi(e);return F.forEach(t,(a=>{const u=Qt(a.path);return F.waitFor([o.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])}))}removeMatchingKeysForTargetId(e,t){const r=Oi(e),o=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(o)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),o=Oi(e);let a=De();return o.X({range:r,Z:!0},((u,d,f)=>{const y=yr(u[1]),v=new ae(y);a=a.add(v)})).next((()=>a))}containsKey(e,t){const r=Qt(t.path),o=IDBKeyRange.bound([r],[CI(r)],!1,!0);let a=0;return Oi(e).X({index:Om,Z:!0,range:o},(([u,d],f,y)=>{u!==0&&(a++,y.done())})).next((()=>a>0))}Et(e,t){return sa(e).get(t).next((r=>r?$l(r):null))}}function sa(n){return Ct(n,_a)}function vE(n){return Ct(n,Bs)}function Oi(n){return Ct(n,va)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="LruGarbageCollector",zx=1048576;function wE([n,e],[t,r]){const o=Pe(n,t);return o===0?Pe(e,r):o}class $x{constructor(e){this.Tr=e,this.buffer=new He(wE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class K0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){J(EE,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zi(t)?J(EE,"Ignoring IndexedDB error during garbage collection: ",t):await ro(t)}await this.Rr(3e5)}))}}class qx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(On.ue);const r=new $x(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(_E)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_E):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,f,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(y=Date.now(),oa()<=Oe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(y-f)+`ms
Total Duration: ${y-v}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function H0(n,e){return new qx(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,t){this.db=e,this.garbageCollector=H0(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((r,o)=>t(o)))}addReference(e,t,r){return oh(e,r)}removeReference(e,t,r){return oh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return oh(e,t)}Sr(e,t){return(function(o,a){let u=!1;return W0(o).ee((d=>q0(o,d,a).next((f=>(f&&(u=!0),F.resolve(!f)))))).next((()=>u))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[];let a=0;return this.wr(e,((u,d)=>{if(d<=t){const f=this.Sr(e,u).next((y=>{if(!y)return a++,r.getEntry(e,u).next((()=>(r.removeEntry(u,Te.min()),Oi(e).delete((function(w){return[0,Qt(w.path)]})(u)))))}));o.push(f)}})).next((()=>F.waitFor(o))).next((()=>r.apply(e))).next((()=>a))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return oh(e,t)}wr(e,t){const r=Oi(e);let o,a=On.ue;return r.X({index:Om},(([u,d],{path:f,sequenceNumber:y})=>{u===0?(a!==On.ue&&t(new ae(yr(o)),a),a=y,o=f):a=On.ue})).next((()=>{a!==On.ue&&t(new ae(yr(o)),a)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oh(n,e){return Oi(n).put((function(r,o){return{targetId:0,path:Qt(r.path),sequenceNumber:o}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.changes=new ti((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ks(e).put(r)}removeEntry(e,t,r){return ks(e).delete((function(a,u){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],$h(u),d[d.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=ht.newInvalidDocument(t);return ks(e).X({index:yh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r=this.Dr(t,a)})).next((()=>r))}vr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return ks(e).X({index:yh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r={document:this.Dr(t,a),size:Wh(a)}})).next((()=>r))}getEntries(e,t){let r=In();return this.Cr(e,t,((o,a)=>{const u=this.Dr(o,a);r=r.insert(o,u)})).next((()=>r))}Fr(e,t){let r=In(),o=new it(ae.comparator);return this.Cr(e,t,((a,u)=>{const d=this.Dr(a,u);r=r.insert(a,d),o=o.insert(a,Wh(u))})).next((()=>({documents:r,Mr:o})))}Cr(e,t,r){if(t.isEmpty())return F.resolve();let o=new He(SE);t.forEach((f=>o=o.add(f)));const a=IDBKeyRange.bound(Vl(o.first()),Vl(o.last())),u=o.getIterator();let d=u.getNext();return ks(e).X({index:yh,range:a},((f,y,v)=>{const w=ae.fromSegments([...y.prefixPath,y.collectionGroup,y.documentId]);for(;d&&SE(d,w)<0;)r(d,null),d=u.getNext();d&&d.isEqual(w)&&(r(d,y),d=u.hasNext()?u.getNext():null),d?v.G(Vl(d)):v.done()})).next((()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null}))}getDocumentsMatchingQuery(e,t,r,o,a){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),$h(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ks(e).j(IDBKeyRange.bound(d,f,!0)).next((y=>{a==null||a.incrementDocumentReadCount(y.length);let v=In();for(const w of y){const T=this.Dr(ae.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);T.isFoundDocument()&&(Nu(t,T)||o.has(T.key))&&(v=v.insert(T.key,T))}return v}))}getAllFromCollectionGroup(e,t,r,o){let a=In();const u=TE(t,r),d=TE(t,Tn.max());return ks(e).X({index:LI,range:IDBKeyRange.bound(u,d,!0)},((f,y,v)=>{const w=this.Dr(ae.fromSegments(y.prefixPath.concat(y.collectionGroup,y.documentId)),y);a=a.insert(w.key,w),a.size===o&&v.done()})).next((()=>a))}newChangeBuffer(e){return new Hx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return IE(e).get(jp).next((t=>(we(!!t,20021),t)))}br(e,t){return IE(e).put(jp,t)}Dr(e,t){if(t){const r=Nx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return ht.newInvalidDocument(e)}}function Q0(n){return new Kx(n)}class Hx extends G0{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new ti((r=>r.toString()),((r,o)=>r.isEqual(o)))}applyChanges(e){const t=[];let r=0,o=new He(((a,u)=>Pe(a.canonicalString(),u.canonicalString())));return this.changes.forEach(((a,u)=>{const d=this.Nr.get(a);if(t.push(this.Or.removeEntry(e,a,d.readTime)),u.isValidDocument()){const f=sE(this.Or.serializer,u);o=o.add(a.path.popLast());const y=Wh(f);r+=y-d.size,t.push(this.Or.addEntry(e,a,f))}else if(r-=d.size,this.trackRemovals){const f=sE(this.Or.serializer,u.convertToNoDocument(Te.min()));t.push(this.Or.addEntry(e,a,f))}})),o.forEach((a=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,a))})),t.push(this.Or.updateMetadata(e,r)),F.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:r,Mr:o})=>(o.forEach(((a,u)=>{this.Nr.set(a,{size:u,readTime:r.get(a).readTime})})),r)))}}function IE(n){return Ct(n,cu)}function ks(n){return Ct(n,Lh)}function Vl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function TE(n,e){const t=e.documentKey.path.toArray();return[n,$h(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function SE(n,e){const t=n.path.toArray(),r=e.path.toArray();let o=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(o=Pe(t[a],r[a]),o)return o;return o=Pe(t.length,r.length),o||(o=Pe(t[t.length-2],r[r.length-2]),o||Pe(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&eu(r.mutation,o,fn.empty(),$e.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,De()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=De()){const o=_r();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Bl();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=_r();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,De())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=In();const u=Zl(),d=(function(){return Zl()})();return t.forEach(((f,y)=>{const v=r.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof ni)?a=a.insert(y.key,y):v!==void 0?(u.set(y.key,v.mutation.getFieldMask()),eu(v.mutation,y,v.mutation.getFieldMask(),$e.now())):u.set(y.key,fn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((y,v)=>u.set(y,v))),t.forEach(((y,v)=>{var w;return d.set(y,new Gx(v,(w=u.get(y))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Zl();let o=new it(((u,d)=>u-d)),a=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const y=t.get(f);if(y===null)return;let v=r.get(f)||fn.empty();v=d.applyToLocalView(y,v),r.set(f,v);const w=(o.get(d.batchId)||De()).add(f);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),y=f.key,v=f.value,w=f0();v.forEach((T=>{if(!a.has(T)){const b=E0(t.get(T),r.get(T));b!==null&&w.set(T,b),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,y,w))}return F.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return ae.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):l0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):F.resolve(_r());let d=ou,f=a;return u.next((y=>F.forEach(y,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?F.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,y,a))).next((()=>this.computeViews(e,f,y,De()))).next((v=>({batchId:d,changes:d0(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let o=Bl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Bl();return this.indexManager.getCollectionParents(e,a).next((d=>F.forEach(d,(f=>{const y=(function(w,T){return new ba(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,r,o).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((f,y)=>{const v=y.getKey();u.get(v)===null&&(u=u.insert(v,ht.newInvalidDocument(v)))}));let d=Bl();return u.forEach(((f,y)=>{const v=a.get(f);v!==void 0&&eu(v.mutation,y,fn.empty(),$e.now()),Nu(t,y)&&(d=d.insert(f,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return F.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nn(o.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:U0(o.bundledQuery),readTime:nn(o.readTime)}})(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.overlays=new it(ae.comparator),this.kr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_r();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.wt(e,t,a)})),F.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const o=_r(),a=t.length+1,u=new ae(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,y=f.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return F.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new it(((y,v)=>y-v));const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>r){let v=a.get(y.largestBatchId);v===null&&(v=_r(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=_r(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((y,v)=>d.set(y,v))),!(d.size()>=o)););return F.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Km(t,r));let a=this.kr.get(t);a===void 0&&(a=De(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.qr=new He(bt.Qr),this.$r=new He(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new bt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new bt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ae(new qe([])),r=new bt(t,e),o=new bt(t,e+1),a=[];return this.$r.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ae(new qe([])),r=new bt(t,e),o=new bt(t,e+1);let a=De();return this.$r.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new bt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ae.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new He(bt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new qm(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,t){return F.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return F.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?js:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new bt(t,0),o=new bt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],(u=>{const d=this.Zr(u.Hr);a.push(d)})),F.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(Pe);return t.forEach((o=>{const a=new bt(o,0),u=new bt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const u=new bt(new ae(a),0);let d=new He(Pe);return this.Yr.forEachWhile((f=>{const y=f.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(d=d.add(f.Hr)),!0)}),u),F.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){we(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(t.mutations,(o=>{const a=new bt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new bt(t,0),o=this.Yr.firstAfterOrEqual(r);return F.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.ni=e,this.docs=(function(){return new it(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():ht.newInvalidDocument(o))})),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=In();const u=t.path,d=new ae(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:y,value:{document:v}}=f.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||bm(NI(v),r)<=0||(o.has(v.key)||Nu(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return F.resolve(a)}getAllFromCollectionGroup(e,t,r,o){ge(9500)}ri(e,t){return F.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new eN(this)}getSize(e){return F.resolve(this.size)}}class eN extends G0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)})),F.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.persistence=e,this.ii=new ti((t=>Xs(t)),ku),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new Ym,this.targetCount=0,this._i=Zs.ar()}forEachTarget(e,t){return this.ii.forEach(((r,o)=>t(o))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),F.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Zs(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.hr(t),F.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),F.waitFor(a).next((()=>o))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),F.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.ai={},this.overlays={},this.ui=new On(0),this.ci=!1,this.ci=!0,this.li=new Yx,this.referenceDelegate=e(this),this.hi=new tN(this),this.indexManager=new Ux,this.remoteDocumentCache=(function(o){return new Zx(o)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new M0(t),this.Ti=new Qx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Jx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const o=new nN(this.ui.next());return this.referenceDelegate.Ii(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class nN extends bI{constructor(e){super(),this.currentSequenceNumber=e}}class Ed{constructor(e){this.persistence=e,this.Ai=new Ym,this.Ri=null}static Vi(e){return new Ed(e)}get mi(){if(this.Ri)return this.Ri;throw ge(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const o=ae.fromPath(r);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return F.or([()=>F.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Kh{constructor(e,t){this.persistence=e,this.gi=new ti((r=>Qt(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=H0(this,t)}static Vi(e,t){return new Kh(e,t)}Ii(){}di(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return F.forEach(this.gi,((r,o)=>this.Sr(e,r,o).next((a=>a?F.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Te.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vh(e.data.value)),t}Sr(e,t,r){return F.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return F.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.serializer=e}q(e,t,r,o){const a=new od("createOrUpgrade",t);r<1&&o>=1&&((function(f){f.createObjectStore(Cu)})(e),(function(f){f.createObjectStore(uu,{keyPath:mk}),f.createObjectStore(er,{keyPath:Ov,autoIncrement:!0}).createIndex(Fs,Lv,{unique:!0}),f.createObjectStore(ya)})(e),AE(e),(function(f){f.createObjectStore(Ds)})(e));let u=F.resolve();return r<3&&o>=3&&(r!==0&&((function(f){f.deleteObjectStore(va),f.deleteObjectStore(_a),f.deleteObjectStore(Bs)})(e),AE(e)),u=u.next((()=>(function(f){const y=f.store(Bs),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return y.put(Mh,v)})(a)))),r<4&&o>=4&&(r!==0&&(u=u.next((()=>(function(f,y){return y.store(er).j().next((w=>{f.deleteObjectStore(er),f.createObjectStore(er,{keyPath:Ov,autoIncrement:!0}).createIndex(Fs,Lv,{unique:!0});const T=y.store(er),b=w.map((U=>T.put(U)));return F.waitFor(b)}))})(e,a)))),u=u.next((()=>{(function(f){f.createObjectStore(Ea,{keyPath:Sk})})(e)}))),r<5&&o>=5&&(u=u.next((()=>this.pi(a)))),r<6&&o>=6&&(u=u.next((()=>((function(f){f.createObjectStore(cu)})(e),this.yi(a))))),r<7&&o>=7&&(u=u.next((()=>this.wi(a)))),r<8&&o>=8&&(u=u.next((()=>this.Si(e,a)))),r<9&&o>=9&&(u=u.next((()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&o>=10&&(u=u.next((()=>this.bi(a)))),r<11&&o>=11&&(u=u.next((()=>{(function(f){f.createObjectStore(ld,{keyPath:Ak})})(e),(function(f){f.createObjectStore(ud,{keyPath:Rk})})(e)}))),r<12&&o>=12&&(u=u.next((()=>{(function(f){const y=f.createObjectStore(cd,{keyPath:bk});y.createIndex(zp,Vk,{unique:!1}),y.createIndex(jI,Ok,{unique:!1})})(e)}))),r<13&&o>=13&&(u=u.next((()=>(function(f){const y=f.createObjectStore(Lh,{keyPath:yk});y.createIndex(yh,_k),y.createIndex(LI,vk)})(e))).next((()=>this.Di(e,a))).next((()=>e.deleteObjectStore(Ds)))),r<14&&o>=14&&(u=u.next((()=>this.Ci(e,a)))),r<15&&o>=15&&(u=u.next((()=>(function(f){f.createObjectStore(Lm,{keyPath:Pk,autoIncrement:!0}).createIndex(Bp,Ck,{unique:!1}),f.createObjectStore(Ql,{keyPath:kk}).createIndex(FI,xk,{unique:!1}),f.createObjectStore(Xl,{keyPath:Nk}).createIndex(UI,Dk,{unique:!1})})(e)))),r<16&&o>=16&&(u=u.next((()=>{t.objectStore(Ql).clear()})).next((()=>{t.objectStore(Xl).clear()}))),r<17&&o>=17&&(u=u.next((()=>{(function(f){f.createObjectStore(Mm,{keyPath:Lk})})(e)}))),r<18&&o>=18&&bw()&&(u=u.next((()=>{t.objectStore(Ql).clear()})).next((()=>{t.objectStore(Xl).clear()}))),u}yi(e){let t=0;return e.store(Ds).X(((r,o)=>{t+=Wh(o)})).next((()=>{const r={byteSize:t};return e.store(cu).put(jp,r)}))}pi(e){const t=e.store(uu),r=e.store(er);return t.j().next((o=>F.forEach(o,(a=>{const u=IDBKeyRange.bound([a.userId,js],[a.userId,a.lastAcknowledgedBatchId]);return r.j(Fs,u).next((d=>F.forEach(d,(f=>{we(f.userId===a.userId,18650,"Cannot process batch from unexpected user",{batchId:f.batchId});const y=Vs(this.serializer,f);return $0(e,a.userId,y).next((()=>{}))}))))}))))}wi(e){const t=e.store(va),r=e.store(Ds);return e.store(Bs).get(Mh).next((o=>{const a=[];return r.X(((u,d)=>{const f=new qe(u),y=(function(w){return[0,Qt(w)]})(f);a.push(t.get(y).next((v=>v?F.resolve():(w=>t.put({targetId:0,path:Qt(w),sequenceNumber:o.highestListenSequenceNumber}))(f))))})).next((()=>F.waitFor(a)))}))}Si(e,t){e.createObjectStore(hu,{keyPath:Tk});const r=t.store(hu),o=new Xm,a=u=>{if(o.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:Qt(f)})}};return t.store(Ds).X({Z:!0},((u,d)=>{const f=new qe(u);return a(f.popLast())})).next((()=>t.store(ya).X({Z:!0},(([u,d,f],y)=>{const v=yr(d);return a(v.popLast())}))))}bi(e){const t=e.store(_a);return t.X(((r,o)=>{const a=$l(o),u=F0(this.serializer,a);return t.put(u)}))}Di(e,t){const r=t.store(Ds),o=[];return r.X(((a,u)=>{const d=t.store(Lh),f=(function(w){return w.document?new ae(qe.fromString(w.document.name).popFirst(5)):w.noDocument?ae.fromSegments(w.noDocument.path):w.unknownDocument?ae.fromSegments(w.unknownDocument.path):ge(36783)})(u).path.toArray(),y={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};o.push(d.put(y))})).next((()=>F.waitFor(o)))}Ci(e,t){const r=t.store(er),o=Q0(this.serializer),a=new Jm(Ed.Vi,this.serializer.gt);return r.j().next((u=>{const d=new Map;return u.forEach((f=>{var y;let v=(y=d.get(f.userId))!==null&&y!==void 0?y:De();Vs(this.serializer,f).keys().forEach((w=>v=v.add(w))),d.set(f.userId,v)})),F.forEach(d,((f,y)=>{const v=new jt(y),w=_d.yt(this.serializer,v),T=a.getIndexManager(v),b=vd.yt(v,this.serializer,T,a.referenceDelegate);return new X0(o,b,w,T).recalculateAndSaveOverlaysForDocumentKeys(new $p(t,On.ue),f).next()}))}))}}function AE(n){n.createObjectStore(va,{keyPath:wk}).createIndex(Om,Ik,{unique:!0}),n.createObjectStore(_a,{keyPath:"targetId"}).createIndex(MI,Ek,{unique:!0}),n.createObjectStore(Bs)}const Ni="IndexedDbPersistence",yp=18e5,_p=5e3,vp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",iN="main";class Zm{constructor(e,t,r,o,a,u,d,f,y,v,w=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=a,this.window=u,this.document=d,this.Mi=y,this.xi=v,this.Oi=w,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=T=>Promise.resolve(),!Zm.C())throw new oe(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Wx(this,o),this.Qi=t+iN,this.serializer=new M0(f),this.$i=new Bi(this.Qi,this.Oi,new rN(this.serializer)),this.li=new bx,this.hi=new Bx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Q0(this.serializer),this.Ti=new Dx,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,v===!1&&en(Ni,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new oe(K.FAILED_PRECONDITION,vp);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new On(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ah(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Zi(e))return J(Ni,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return J(Ni,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return Ol(e).get(ea).next((t=>F.resolve(this.Xi(t))))}es(e){return ah(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,yp)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Ct(t,Ea);return r.j().next((o=>{const a=this.rs(o,yp),u=o.filter((d=>a.indexOf(d)===-1));return F.forEach(u,(d=>r.delete(d.clientId))).next((()=>u))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?F.resolve(!0):Ol(e).get(ea).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,_p)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new oe(K.FAILED_PRECONDITION,vp);return!1}}return!(!this.networkEnabled||!this.inForeground)||ah(e).j().next((r=>this.rs(r,_p).find((o=>{if(this.clientId!==o.clientId){const a=!this.networkEnabled&&o.networkEnabled,u=!this.inForeground&&o.inForeground,d=this.networkEnabled===o.networkEnabled;if(a||u&&d)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&J(Ni,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Cu,Ea],(e=>{const t=new $p(e,On.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>ah(e).j().next((t=>this.rs(t,yp).map((r=>r.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return vd.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jx(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return _d.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){J(Ni,"Starting transaction:",e);const o=t==="readonly"?"readonly":"readwrite",a=(function(f){return f===18?Uk:f===17?qI:f===16?Fk:f===15?Fm:f===14?$I:f===13?zI:f===12?Mk:f===11?BI:void ge(60245)})(this.Oi);let u;return this.$i.runTransaction(e,o,a,(d=>(u=new $p(d,this.ui?this.ui.next():On.ue),t==="readwrite-primary"?this.Ji(u).next((f=>!!f||this.Hi(u))).next((f=>{if(!f)throw en(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new oe(K.FAILED_PRECONDITION,DI);return r(u)})).next((f=>this.Zi(u).next((()=>f)))):this.Ts(u).next((()=>r(u)))))).then((d=>(u.raiseOnCommittedEvent(),d)))}Ts(e){return Ol(e).get(ea).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,_p)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new oe(K.FAILED_PRECONDITION,vp)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ol(e).put(ea,t)}static C(){return Bi.C()}Yi(e){const t=Ol(e);return t.get(ea).next((r=>this.Xi(r)?(J(Ni,"Releasing primary lease."),t.delete(ea)):F.resolve()))}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(en(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Dw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return J(Ni,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return en(Ni,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){en("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ol(n){return Ct(n,Cu)}function ah(n){return Ct(n,Ea)}function sN(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=De(),o=De();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new eg(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Dw()?8:VI(Pt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new oN;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(oa()<=Oe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",aa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(oa()<=Oe.DEBUG&&J("QueryEngine","Query:",aa(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(oa()<=Oe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",aa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):F.resolve())}ps(e,t){if(Qv(t))return F.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Xp(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=De(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const y=this.bs(t,d);return this.Ds(t,y,u,f.readTime)?this.ps(e,Xp(t,null,"F")):this.vs(e,y,t,f)}))))})))))}ys(e,t,r,o){return Qv(t)||o.isEqual(Te.min())?F.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?F.resolve(null):(oa()<=Oe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),aa(t)),this.vs(e,u,t,lk(o,ou)).next((d=>d)))}))}bs(e,t){let r=new He(c0(e));return t.forEach(((o,a)=>{Nu(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return oa()<=Oe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",aa(t)),this.gs.getDocumentsMatchingQuery(e,t,Tn.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="LocalStore",aN=3e8;class lN{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Pe),this.Ms=new ti((a=>Xs(a)),ku),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function J0(n,e,t,r){return new lN(n,e,t,r)}async function Z0(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=De();for(const y of o){u.push(y.batchId);for(const v of y.mutations)f=f.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((y=>({Bs:y,removedBatchIds:u,addedBatchIds:d})))}))}))}function uN(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,y,v){const w=y.batch,T=w.keys();let b=F.resolve();return T.forEach((U=>{b=b.next((()=>v.getEntry(f,U))).next((z=>{const N=y.docVersions.get(U);we(N!==null,48541),z.version.compareTo(N)<0&&(w.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),v.addEntry(z)))}))})),b.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=De();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(f=f.add(d.batch.mutations[y].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function eT(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function cN(n,e){const t=ke(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let b=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?b=b.withResumeToken(wt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(v.resumeToken,r)),o=o.insert(w,b),(function(z,N,te){return z.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=aN?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(T,b,v)&&d.push(t.hi.updateTargetData(a,b))}));let f=In(),y=De();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(hN(a,u,e.documentUpdates).next((v=>{f=v.Ls,y=v.ks}))),!r.isEqual(Te.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return F.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,y))).next((()=>f))})).then((a=>(t.Fs=o,a)))}function hN(n,e,t){let r=De(),o=De();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=In();return t.forEach(((d,f)=>{const y=a.get(d);f.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!y.isValidDocument()||f.version.compareTo(y.version)>0||f.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):J(tg,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",f.version)})),{Ls:u,ks:o}}))}function dN(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=js),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function fN(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.hi.getTargetData(r,e).next((a=>a?(o=a,F.resolve(o)):t.hi.allocateTargetId(r).next((u=>(o=new Gr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function im(n,e,t){const r=ke(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Zi(u))throw u;J(tg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function RE(n,e,t){const r=ke(n);let o=Te.min(),a=De();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,y,v){const w=ke(f),T=w.Ms.get(v);return T!==void 0?F.resolve(w.Fs.get(T)):w.hi.getTargetData(y,v)})(r,u,Ln(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Te.min(),t?a:De()))).next((d=>(pN(r,ex(e),d),{documents:d,qs:a})))))}function pN(n,e,t){let r=n.xs.get(e)||Te.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class PE{constructor(){this.activeTargetIds=ox()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tT{constructor(){this.Fo=new PE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new PE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="ConnectivityMonitor";class kE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(CE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){J(CE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh=null;function sm(){return lh===null?lh=(function(){return 268435456+Math.round(2147483648*Math.random())})():lh++,"0x"+lh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="RestConnection",gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Fh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=sm(),d=this.Go(e,t.toUriEncodedString());J(Ep,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:y}=new URL(d),v=to(y);return this.jo(e,d,f,r,v).then((w=>(J(Ep,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Tr(Ep,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Da})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const r=gN[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class vN extends yN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=sm();return new Promise(((d,f)=>{const y=new EI;y.setWithCredentials(!0),y.listenOnce(wI.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case ph.NO_ERROR:const w=y.getResponseJson();J(Kt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case ph.TIMEOUT:J(Kt,`RPC '${e}' ${u} timed out`),f(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const T=y.getStatus();if(J(Kt,`RPC '${e}' ${u} failed with status:`,T,"response text:",y.getResponseText()),T>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const U=b==null?void 0:b.error;if(U&&U.status&&U.message){const z=(function(te){const ne=te.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ne)>=0?ne:K.UNKNOWN})(U.status);f(new oe(z,U.message))}else f(new oe(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else f(new oe(K.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{c_:e,streamId:u,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{J(Kt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);J(Kt,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,r,15)}))}P_(e,t,r){const o=sm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=SI(),d=TI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(f.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");J(Kt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,b=!1;const U=new _N({Ho:N=>{b?J(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,N):(T||(J(Kt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),J(Kt,`RPC '${e}' stream ${o} sending:`,N),w.send(N))},Yo:()=>w.close()}),z=(N,te,ne)=>{N.listen(te,(Z=>{try{ne(Z)}catch(le){setTimeout((()=>{throw le}),0)}}))};return z(w,jl.EventType.OPEN,(()=>{b||(J(Kt,`RPC '${e}' stream ${o} transport opened.`),U.s_())})),z(w,jl.EventType.CLOSE,(()=>{b||(b=!0,J(Kt,`RPC '${e}' stream ${o} transport closed`),U.__(),this.I_(w))})),z(w,jl.EventType.ERROR,(N=>{b||(b=!0,Tr(Kt,`RPC '${e}' stream ${o} transport errored. Name:`,N.name,"Message:",N.message),U.__(new oe(K.UNAVAILABLE,"The operation could not be completed")))})),z(w,jl.EventType.MESSAGE,(N=>{var te;if(!b){const ne=N.data[0];we(!!ne,16349);const Z=ne,le=(Z==null?void 0:Z.error)||((te=Z[0])===null||te===void 0?void 0:te.error);if(le){J(Kt,`RPC '${e}' stream ${o} received error:`,le);const Ie=le.status;let ce=(function(P){const x=yt[P];if(x!==void 0)return T0(x)})(Ie),C=le.message;ce===void 0&&(ce=K.INTERNAL,C="Unknown error status: "+Ie+" with message "+le.message),b=!0,U.__(new oe(ce,C)),w.close()}else J(Kt,`RPC '${e}' stream ${o} received:`,ne),U.a_(ne)}})),z(d,II.STAT_EVENT,(N=>{N.stat===Mp.PROXY?J(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):N.stat===Mp.NOPROXY&&J(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.o_()}),0),U}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return typeof window<"u"?window:null}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return new wx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&J("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="PersistentStream";class rT{constructor(e,t,r,o,a,u,d,f){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new nT(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(en(t.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.b_===t&&this.W_(r,o)}),(r=>{e((()=>{const o=new oe(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{r((()=>this.G_(o)))})),this.stream.onMessage((o=>{r((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return J(xE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(J(xE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wN extends rT{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Sx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Te.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?nn(u.readTime):Te.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Zp(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Uh(f)?{documents:N0(a,f)}:{query:D0(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=R0(a,u.resumeToken);const y=Yp(a,u.expectedCount);y!==null&&(d.expectedCount=y)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=Ca(a,u.snapshotVersion.toTimestamp());const y=Yp(a,u.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const r=Rx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Zp(this.serializer),t.removeTarget=e,this.k_(t)}}class IN extends rT{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ax(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Zp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>zh(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{}class SN extends TN{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Jp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(K.UNKNOWN,a.toString())}))}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Jp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(K.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(en(t),this._a=!1):J("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="RemoteStore";class RN{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{io(this)&&(J(eo,"Restarting streams for network reachability change."),await(async function(f){const y=ke(f);y.Ia.add(4),await bu(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Id(y)})(this))}))})),this.Aa=new AN(r,o)}}async function Id(n){if(io(n))for(const e of n.da)await e(!0)}async function bu(n){for(const e of n.da)await e(!1)}function iT(n,e){const t=ke(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),sg(t)?ig(t):Oa(t).x_()&&rg(t,e))}function ng(n,e){const t=ke(n),r=Oa(t);t.Ta.delete(e),r.x_()&&sT(t,e),t.Ta.size===0&&(r.x_()?r.B_():io(t)&&t.Aa.set("Unknown"))}function rg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oa(n).H_(e)}function sT(n,e){n.Ra.$e(e),Oa(n).Y_(e)}function ig(n){n.Ra=new yx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Oa(n).start(),n.Aa.aa()}function sg(n){return io(n)&&!Oa(n).M_()&&n.Ta.size>0}function io(n){return ke(n).Ia.size===0}function oT(n){n.Ra=void 0}async function PN(n){n.Aa.set("Online")}async function CN(n){n.Ta.forEach(((e,t)=>{rg(n,e)}))}async function kN(n,e){oT(n),sg(n)?(n.Aa.la(e),ig(n)):n.Aa.set("Unknown")}async function xN(n,e,t){if(n.Aa.set("Online"),e instanceof A0&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(r){J(eo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hh(n,r)}else if(e instanceof Ih?n.Ra.Ye(e):e instanceof S0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Te.min()))try{const r=await eT(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,y)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(y);v&&a.Ta.set(y,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,y)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(wt.EMPTY_BYTE_STRING,v.snapshotVersion)),sT(a,f);const w=new Gr(v.target,f,y,v.sequenceNumber);rg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){J(eo,"Failed to raise snapshot:",r),await Hh(n,r)}}async function Hh(n,e,t){if(!Zi(e))throw e;n.Ia.add(1),await bu(n),n.Aa.set("Offline"),t||(t=()=>eT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{J(eo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Id(n)}))}function aT(n,e){return e().catch((t=>Hh(n,t,e)))}async function Vu(n){const e=ke(n),t=Ki(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:js;for(;NN(e);)try{const o=await dN(e.localStore,r);if(o===null){e.Pa.length===0&&t.B_();break}r=o.batchId,DN(e,o)}catch(o){await Hh(e,o)}lT(e)&&uT(e)}function NN(n){return io(n)&&n.Pa.length<10}function DN(n,e){n.Pa.push(e);const t=Ki(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function lT(n){return io(n)&&!Ki(n).M_()&&n.Pa.length>0}function uT(n){Ki(n).start()}async function bN(n){Ki(n).na()}async function VN(n){const e=Ki(n);for(const t of n.Pa)e.X_(t.mutations)}async function ON(n,e,t){const r=n.Pa.shift(),o=Wm.from(r,e,t);await aT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Vu(n)}async function LN(n,e){e&&Ki(n).Z_&&await(async function(r,o){if((function(u){return mx(u)&&u!==K.ABORTED})(o.code)){const a=r.Pa.shift();Ki(r).N_(),await aT(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Vu(r)}})(n,e),lT(n)&&uT(n)}async function NE(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),J(eo,"RemoteStore received new credentials");const r=io(t);t.Ia.add(3),await bu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Id(t)}async function MN(n,e){const t=ke(n);e?(t.Ia.delete(2),await Id(t)):e||(t.Ia.add(2),await bu(t),t.Aa.set("Unknown"))}function Oa(n){return n.Va||(n.Va=(function(t,r,o){const a=ke(t);return a.ia(),new wN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:PN.bind(null,n),e_:CN.bind(null,n),n_:kN.bind(null,n),J_:xN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),sg(n)?ig(n):n.Aa.set("Unknown")):(await n.Va.stop(),oT(n))}))),n.Va}function Ki(n){return n.ma||(n.ma=(function(t,r,o){const a=ke(t);return a.ia(),new IN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:bN.bind(null,n),n_:LN.bind(null,n),ea:VN.bind(null,n),ta:ON.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Vu(n)):(await n.ma.stop(),n.Pa.length>0&&(J(eo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new og(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ag(n,e){if(en("AsyncQueue",`${e}: ${n}`),Zi(n))return new oe(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{static emptySet(e){return new pa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=Bl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new pa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.fa=new it(ae.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ge(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ka{constructor(e,t,r,o,a,u,d,f,y){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=y}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new ka(e,t,pa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class UN{constructor(){this.queries=bE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=ke(t),a=o.queries;o.queries=bE(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function bE(){return new ti((n=>u0(n)),fd)}async function cT(n,e){const t=ke(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new FN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=ag(u,`Initialization of query '${aa(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&lg(t)}async function hT(n,e){const t=ke(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jN(n,e){const t=ke(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&lg(t)}function BN(n,e,t){const r=ke(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function lg(n){n.Da.forEach((e=>{e.next()}))}var om,VE;(VE=om||(om={})).Fa="default",VE.Cache="cache";class dT{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ka(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ka.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.key=e}}class pT{constructor(e){this.key=e}}class zN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=c0(e),this.eu=new pa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new DE,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const T=o.get(v),b=Nu(this.query,w)?w:null,U=!!T&&this.mutatedKeys.has(T.key),z=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;T&&b?T.data.isEqual(b.data)?U!==z&&(r.track({type:3,doc:b}),N=!0):this.iu(T,b)||(r.track({type:2,doc:b}),N=!0,(f&&this.Xa(b,f)>0||y&&this.Xa(b,y)<0)&&(d=!0)):!T&&b?(r.track({type:0,doc:b}),N=!0):T&&!b&&(r.track({type:1,doc:T}),N=!0,(f||y)&&(d=!0)),N&&(b?(u=u.add(b),a=z?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(b,U){const z=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{At:N})}};return z(b)-z(U)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,y=f!==this.Ya;return this.Ya=f,u.length!==0||y?{snapshot:new ka(this.query,e.eu,a,u,e.mutatedKeys,f===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new DE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new pT(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new fT(r))})),t}uu(e){this.Ha=e.qs,this.Za=De();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ka.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ug="SyncEngine";class $N{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class qN{constructor(e){this.key=e,this.lu=!1}}class WN{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ti((d=>u0(d)),fd),this.Tu=new Map,this.Iu=new Set,this.du=new it(ae.comparator),this.Eu=new Map,this.Au=new Ym,this.Ru={},this.Vu=new Map,this.mu=Zs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function KN(n,e,t=!0){const r=ET(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await mT(r,e,t,!0),o}async function HN(n,e){const t=ET(n);await mT(t,e,!0,!1)}async function mT(n,e,t,r){const o=await fN(n.localStore,Ln(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await GN(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&iT(n.remoteStore,o),d}async function GN(n,e,t,r,o){n.gu=(w,T,b)=>(async function(z,N,te,ne){let Z=N.view.nu(te);Z.Ds&&(Z=await RE(z.localStore,N.query,!1).then((({documents:C})=>N.view.nu(C,Z))));const le=ne&&ne.targetChanges.get(N.targetId),Ie=ne&&ne.targetMismatches.get(N.targetId)!=null,ce=N.view.applyChanges(Z,z.isPrimaryClient,le,Ie);return LE(z,N.targetId,ce._u),ce.snapshot})(n,w,T,b);const a=await RE(n.localStore,e,!0),u=new zN(e,a.qs),d=u.nu(a.documents),f=Du.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),y=u.applyChanges(d,n.isPrimaryClient,f);LE(n,t,y._u);const v=new $N(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function QN(n,e,t){const r=ke(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter((u=>!fd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await im(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&ng(r.remoteStore,o.targetId),am(r,o.targetId)})).catch(ro)):(am(r,o.targetId),await im(r.localStore,o.targetId,!0))}async function XN(n,e){const t=ke(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ng(t.remoteStore,r.targetId))}async function YN(n,e,t){const r=wT(n);try{const o=await(function(u,d){const f=ke(u),y=$e.now(),v=d.reduce(((b,U)=>b.add(U.key)),De());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let U=In(),z=De();return f.Os.getEntries(b,v).next((N=>{U=N,U.forEach(((te,ne)=>{ne.isValidDocument()||(z=z.add(te))}))})).next((()=>f.localDocuments.getOverlayedDocuments(b,U))).next((N=>{w=N;const te=[];for(const ne of d){const Z=fx(ne,w.get(ne.key).overlayedDocument);Z!=null&&te.push(new ni(ne.key,Z,e0(Z.value.mapValue),tn.exists(!0)))}return f.mutationQueue.addMutationBatch(b,y,te,d)})).next((N=>{T=N;const te=N.applyToLocalDocumentSet(w,z);return f.documentOverlayCache.saveOverlays(b,N.batchId,te)}))})).then((()=>({batchId:T.batchId,changes:d0(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,f){let y=u.Ru[u.currentUser.toKey()];y||(y=new it(Pe)),y=y.insert(d,f),u.Ru[u.currentUser.toKey()]=y})(r,o.batchId,t),await Ou(r,o.changes),await Vu(r.remoteStore)}catch(o){const a=ag(o,"Failed to persist write");t.reject(a)}}async function gT(n,e){const t=ke(n);try{const r=await cN(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Eu.get(a);u&&(we(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?we(u.lu,14607):o.removedDocuments.size>0&&(we(u.lu,42227),u.lu=!1))})),await Ou(t,r,e)}catch(r){await ro(r)}}function OE(n,e,t){const r=ke(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const f=ke(u);f.onlineState=d;let y=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(y=!0)})),y&&lg(f)})(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JN(n,e,t){const r=ke(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new it(ae.comparator);u=u.insert(a,ht.newNoDocument(a,Te.min()));const d=De().add(a),f=new yd(Te.min(),new Map,new it(Pe),u,d);await gT(r,f),r.du=r.du.remove(a),r.Eu.delete(e),cg(r)}else await im(r.localStore,e,!1).then((()=>am(r,e,t))).catch(ro)}async function ZN(n,e){const t=ke(n),r=e.batch.batchId;try{const o=await uN(t.localStore,e);_T(t,r,null),yT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ou(t,o)}catch(o){await ro(o)}}async function eD(n,e,t){const r=ke(n);try{const o=await(function(u,d){const f=ke(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return f.mutationQueue.lookupMutationBatch(y,d).next((w=>(we(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(y,w)))).next((()=>f.mutationQueue.performConsistencyCheck(y))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(y,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>f.localDocuments.getDocuments(y,v)))}))})(r.localStore,e);_T(r,e,t),yT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ou(r,o)}catch(o){await ro(o)}}function yT(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function _T(n,e,t){const r=ke(n);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function am(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||vT(n,r)}))}function vT(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ng(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),cg(n))}function LE(n,e,t){for(const r of t)r instanceof fT?(n.Au.addReference(r.key,e),tD(n,r)):r instanceof pT?(J(ug,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||vT(n,r.key)):ge(19791,{yu:r})}function tD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(J(ug,"New document in limbo: "+t),n.Iu.add(r),cg(n))}function cg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ae(qe.fromString(e)),r=n.mu.next();n.Eu.set(r,new qN(t)),n.du=n.du.insert(t,r),iT(n.remoteStore,new Gr(Ln(xu(t.path)),r,"TargetPurposeLimboResolution",On.ue))}}async function Ou(n,e,t){const r=ke(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((y=>{var v;if((y||t)&&r.isPrimaryClient){const w=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(y){o.push(y);const w=eg.Es(f.targetId,y);a.push(w)}})))})),await Promise.all(u),r.hu.J_(o),await(async function(f,y){const v=ke(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>F.forEach(y,(T=>F.forEach(T.Is,(b=>v.persistence.referenceDelegate.addReference(w,T.targetId,b))).next((()=>F.forEach(T.ds,(b=>v.persistence.referenceDelegate.removeReference(w,T.targetId,b)))))))))}catch(w){if(!Zi(w))throw w;J(tg,"Failed to update sequence numbers: "+w)}for(const w of y){const T=w.targetId;if(!w.fromCache){const b=v.Fs.get(T),U=b.snapshotVersion,z=b.withLastLimboFreeSnapshotVersion(U);v.Fs=v.Fs.insert(T,z)}}})(r.localStore,a))}async function nD(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){J(ug,"User change. New user:",e.toKey());const r=await Z0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new oe(K.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ou(t,r.Bs)}}function rD(n,e){const t=ke(n),r=t.Eu.get(e);if(r&&r.lu)return De().add(r.key);{let o=De();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function ET(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JN.bind(null,e),e.hu.J_=jN.bind(null,e.eventManager),e.hu.pu=BN.bind(null,e.eventManager),e}function wT(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eD.bind(null,e),e}class _u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return J0(this.persistence,new Y0,e.initialUser,this.serializer)}Du(e){return new Jm(Ed.Vi,this.serializer)}bu(e){return new tT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_u.provider={build:()=>new _u};class iD extends _u{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){we(this.persistence.referenceDelegate instanceof Kh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new K0(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Jm((r=>Kh.Vi(r,t)),this.serializer)}}class sD extends _u{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await wT(this.Mu.syncEngine),await Vu(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return J0(this.persistence,new Y0,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new K0(r,e.asyncQueue,t)}Fu(e,t){const r=new dk(t,this.persistence);return new hk(e.asyncQueue,r)}Du(e){const t=sN(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Zm(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,EN(),Sh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new tT}}class Gh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>OE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nD.bind(null,this.syncEngine),await MN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UN})()}createDatastore(e){const t=wd(e.databaseInfo.databaseId),r=(function(a){return new vN(a)})(e.databaseInfo);return(function(a,u,d,f){return new SN(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new RN(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>OE(this.syncEngine,t,0)),(function(){return kE.C()?new kE:new mN})())}createSyncEngine(e,t){return(function(o,a,u,d,f,y,v){const w=new WN(o,a,u,d,f,y);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=ke(o);J(eo,"RemoteStore shutting down."),a.Ia.add(5),await bu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gh.provider={build:()=>new Gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="FirestoreClient";class oD{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{J(Hi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(J(Hi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ag(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function wp(n,e){n.asyncQueue.verifyOperationInProgress(),J(Hi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await Z0(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>{Tr("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Tr("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function ME(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aD(n);J(Hi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>NE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>NE(e.remoteStore,o))),n._onlineComponents=e}async function aD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J(Hi,"Using user provided OfflineComponentProvider");try{await wp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Tr("Error using user provided cache. Falling back to memory cache: "+t),await wp(n,new _u)}}else J(Hi,"Using default OfflineComponentProvider"),await wp(n,new iD(void 0));return n._offlineComponents}async function TT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J(Hi,"Using user provided OnlineComponentProvider"),await ME(n,n._uninitializedComponentsProvider._online)):(J(Hi,"Using default OnlineComponentProvider"),await ME(n,new Gh))),n._onlineComponents}function lD(n){return TT(n).then((e=>e.syncEngine))}async function lm(n){const e=await TT(n),t=e.eventManager;return t.onListen=KN.bind(null,e.syncEngine),t.onUnlisten=QN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XN.bind(null,e.syncEngine),t}function uD(n,e,t={}){const r=new Xr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,y){const v=new IT({next:T=>{v.Ou(),u.enqueueAndForget((()=>hT(a,w)));const b=T.docs.has(d);!b&&T.fromCache?y.reject(new oe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&T.fromCache&&f&&f.source==="server"?y.reject(new oe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(T)},error:T=>y.reject(T)}),w=new dT(xu(d.path),v,{includeMetadataChanges:!0,ka:!0});return cT(a,w)})(await lm(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firestore.googleapis.com",UE=!0;class jE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AT,this.ssl=UE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:UE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=z0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zx)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ST((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Td{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new JC;switch(r.type){case"firstParty":return new nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=FE.get(t);r&&(J("ComponentProvider","Removing Datastore"),FE.delete(t),r.terminate())})(this),Promise.resolve()}}function cD(n,e,t,r={}){var o;n=ir(n,Td);const a=to(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(mm(`https://${f}`),gm("Firestore",!0)),u.host!==AT&&u.host!==f&&Tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!qs(y,d)&&(n._setSettings(y),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=jt.MOCK_USER;else{v=xw(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new jt(T)}n._authCredentials=new ZC(new RI(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new so(this.firestore,e,this._query)}}class pt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Pu(t,pt._jsonSchema))return new pt(e,r||null,new ae(qe.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:_t("string",pt._jsonSchemaVersion),referencePath:_t("string")};class zi extends so{constructor(e,t,r){super(e,t,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new ae(e))}withConverter(e){return new zi(this.firestore,e,this._path)}}function hg(n,e,...t){if(n=Et(n),kI("collection","path",e),n instanceof Td){const r=qe.fromString(e,...t);return xv(r),new zi(n,null,r)}{if(!(n instanceof pt||n instanceof zi))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(qe.fromString(e,...t));return xv(r),new zi(n.firestore,null,r)}}function Sd(n,e,...t){if(n=Et(n),arguments.length===1&&(e=Dm.newId()),kI("doc","path",e),n instanceof Td){const r=qe.fromString(e,...t);return kv(r),new pt(n,null,new ae(r))}{if(!(n instanceof pt||n instanceof zi))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(qe.fromString(e,...t));return kv(r),new pt(n.firestore,n instanceof zi?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="AsyncQueue";class zE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new nT(this,"async_queue_retry"),this.oc=()=>{const r=Sh();r&&J(BE,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Sh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Sh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Xr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Zi(e))throw e;J(BE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,en("INTERNAL UNHANDLED ERROR: ",$E(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=og.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&ge(47125,{hc:$E(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function $E(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Gi extends Td{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new zE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zE(e),this._firestoreClient=void 0,await e}}}function hD(n,e){const t=typeof n=="object"?n:vm(),r=typeof n=="string"?n:Fh,o=td(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=Pw("firestore");a&&cD(o,...a)}return o}function dg(n){if(n._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RT(n),n._firestoreClient}function RT(n){var e,t,r;const o=n._freezeSettings(),a=(function(d,f,y,v){return new Bk(d,f,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,ST(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new oD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}function dD(n,e){Tr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return fD(n,Gh.provider,{build:r=>new sD(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function fD(n,e,t){if((n=ir(n,Gi))._firestoreClient||n._terminated)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new oe(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},RT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(wt.fromBase64String(e))}catch(t){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vn(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pu(e,Vn._jsonSchema))return Vn.fromBase64String(e.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:_t("string",Vn._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wr._jsonSchemaVersion}}static fromJSON(e){if(Pu(e,wr._jsonSchema))return new wr(e.latitude,e.longitude)}}wr._jsonSchemaVersion="firestore/geoPoint/1.0",wr._jsonSchema={type:_t("string",wr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pu(e,Ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ir(e.vectorValues);throw new oe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ir._jsonSchemaVersion="firestore/vectorValue/1.0",Ir._jsonSchema={type:_t("string",Ir._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=/^__.*__$/;class mD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,t,this.fieldTransforms):new Va(e,this.data,t,this.fieldTransforms)}}class PT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ni(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function CT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ec:n})}}class fg{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Qh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(CT(this.Ec)&&pD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wd(e)}Dc(e,t,r,o=!1){return new fg({Ec:e,methodName:t,bc:r,path:at.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pg(n){const e=n._freezeSettings(),t=wd(n._databaseId);return new gD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yD(n,e,t,r,o,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);gg("Data must be an object, but it was:",u,r);const d=kT(r,u);let f,y;if(a.merge)f=new fn(u.fieldMask),y=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=um(e,w,t);if(!u.contains(T))throw new oe(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);NT(v,T)||v.push(T)}f=new fn(v),y=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,y=u.fieldTransforms;return new mD(new Gt(d),f,y)}class Pd extends Rd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pd}}class mg extends Rd{_toFieldTransform(e){return new v0(e.path,new Aa)}isEqual(e){return e instanceof mg}}function _D(n,e,t,r){const o=n.Dc(1,e,t);gg("Data must be an object, but it was:",o,r);const a=[],u=Gt.empty();es(r,((f,y)=>{const v=yg(e,f,t);y=Et(y);const w=o.gc(v);if(y instanceof Pd)a.push(v);else{const T=Lu(y,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new fn(a);return new PT(u,d,o.fieldTransforms)}function vD(n,e,t,r,o,a){const u=n.Dc(1,e,t),d=[um(e,r,t)],f=[o];if(a.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(um(e,a[T])),f.push(a[T+1]);const y=[],v=Gt.empty();for(let T=d.length-1;T>=0;--T)if(!NT(y,d[T])){const b=d[T];let U=f[T];U=Et(U);const z=u.gc(b);if(U instanceof Pd)y.push(b);else{const N=Lu(U,z);N!=null&&(y.push(b),v.set(b,N))}}const w=new fn(y);return new PT(v,w,u.fieldTransforms)}function ED(n,e,t,r=!1){return Lu(t,n.Dc(r?4:3,e))}function Lu(n,e){if(xT(n=Et(n)))return gg("Unsupported field value:",e,n),kT(n,e);if(n instanceof Rd)return(function(r,o){if(!CT(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let f=Lu(d,o.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ax(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=$e.fromDate(r);return{timestampValue:Ca(o.serializer,a)}}if(r instanceof $e){const a=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(o.serializer,a)}}if(r instanceof wr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:R0(o.serializer,r._byteString)};if(r instanceof pt){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Gm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Ir)return(function(u,d){return{mapValue:{fields:{[jm]:{stringValue:Bm},[wa]:{arrayValue:{values:u.toArray().map((y=>{if(typeof y!="number")throw d.wc("VectorValues must only contain numeric values.");return $m(d.serializer,y)}))}}}}}})(r,o);throw o.wc(`Unsupported field value: ${sd(r)}`)})(n,e)}function kT(n,e){const t={};return WI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(n,((r,o)=>{const a=Lu(o,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function xT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof wr||n instanceof Vn||n instanceof pt||n instanceof Rd||n instanceof Ir)}function gg(n,e,t){if(!xT(t)||!xI(t)){const r=sd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function um(n,e,t){if((e=Et(e))instanceof Ad)return e._internalPath;if(typeof e=="string")return yg(n,e);throw Qh("Field path arguments must be of type string or ",n,!1,void 0,t)}const wD=new RegExp("[~\\*/\\[\\]]");function yg(n,e,t){if(e.search(wD)>=0)throw Qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ad(...e.split("."))._internalPath}catch{throw Qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new oe(K.INVALID_ARGUMENT,d+n+f)}function NT(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ID(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ID extends DT{data(){return super.data()}}function Cd(n,e){return typeof e=="string"?yg(n,e):e instanceof Ad?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{}class bT extends _g{}function SD(n,e,...t){let r=[];e instanceof _g&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof vg)).length,d=a.filter((f=>f instanceof kd)).length;if(u>1||u>0&&d>0)throw new oe(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class kd extends bT{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new kd(e,t,r)}_apply(e){const t=this._parse(e);return VT(e._query,t),new so(e.firestore,e.converter,Qp(e._query,t))}_parse(e){const t=pg(e.firestore);return(function(a,u,d,f,y,v,w){let T;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new oe(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){HE(w,v);const U=[];for(const z of w)U.push(KE(f,a,z));T={arrayValue:{values:U}}}else T=KE(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||HE(w,v),T=ED(d,u,w,v==="in"||v==="not-in");return Le.create(y,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function AD(n,e,t){const r=e,o=Cd("where",n);return kd._create(o,r,t)}class vg extends _g{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)VT(u,f),u=Qp(u,f)})(e._query,t),new so(e.firestore,e.converter,Qp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eg extends bT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Eg(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gu(a,u)})(e._query,this._field,this._direction);return new so(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new ba(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function WE(n,e="asc"){const t=e,r=Cd("orderBy",n);return Eg._create(r,t)}function KE(n,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new oe(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l0(e)&&t.indexOf("/")!==-1)throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(qe.fromString(t));if(!ae.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pu(n,new ae(r))}if(t instanceof pt)return pu(n,t._key);throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(t)}.`)}function HE(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VT(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class RD{convertValue(e,t="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return es(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[wa].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map((u=>rt(u.doubleValue)));return new Ir(a)}convertGeoPoint(e){return new wr(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(du(e));default:return null}}convertTimestamp(e){const t=Zr(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=qe.fromString(e);we(L0(r),9688,{name:e});const o=new Qs(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return o.isEqual(t)||en(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ql{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $s extends DT{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ah(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Cd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=$s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}$s._jsonSchemaVersion="firestore/documentSnapshot/1.0",$s._jsonSchema={type:_t("string",$s._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Ah extends $s{data(e={}){return super.data(e)}}class ma{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ql(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ah(this._firestore,this._userDataWriter,r.key,r,new ql(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const f=new Ah(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ql(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Ah(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ql(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:CD(d.type),doc:f,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ma._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(n){n=ir(n,pt);const e=ir(n.firestore,Gi);return uD(dg(e),n._key).then((t=>MT(e,n,t)))}ma._jsonSchemaVersion="firestore/querySnapshot/1.0",ma._jsonSchema={type:_t("string",ma._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class OT extends RD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function xD(n,e,t,...r){n=ir(n,pt);const o=ir(n.firestore,Gi),a=pg(o);let u;return u=typeof(e=Et(e))=="string"||e instanceof Ad?vD(a,"updateDoc",n._key,e,t,r):_D(a,"updateDoc",n._key,e),wg(o,[u.toMutation(n._key,tn.exists(!0))])}function ND(n){return wg(ir(n.firestore,Gi),[new gd(n._key,tn.none())])}function LT(n,e){const t=ir(n.firestore,Gi),r=Sd(n),o=PD(n.converter,e);return wg(t,[yD(pg(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then((()=>r))}function DD(n,...e){var t,r,o;n=Et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||qE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(qE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let f,y,v;if(n instanceof pt)y=ir(n.firestore,Gi),v=xu(n._key.path),f={next:w=>{e[u]&&e[u](MT(y,n,w))},error:e[u+1],complete:e[u+2]};else{const w=ir(n,so);y=ir(w.firestore,Gi),v=w._query;const T=new OT(y);f={next:b=>{e[u]&&e[u](new ma(y,T,w,b))},error:e[u+1],complete:e[u+2]},TD(n._query)}return(function(T,b,U,z){const N=new IT(z),te=new dT(b,N,U);return T.asyncQueue.enqueueAndForget((async()=>cT(await lm(T),te))),()=>{N.Ou(),T.asyncQueue.enqueueAndForget((async()=>hT(await lm(T),te)))}})(dg(y),v,d,f)}function wg(n,e){return(function(r,o){const a=new Xr;return r.asyncQueue.enqueueAndForget((async()=>YN(await lD(r),o,a))),a.promise})(dg(n),e)}function MT(n,e,t){const r=t.docs.get(e._key),o=new OT(n);return new $s(n,o,e._key,r,new ql(t.hasPendingWrites,t.fromCache),e.converter)}function FT(){return new mg("serverTimestamp")}(function(e,t=!0){(function(o){Da=o})(no),Ws(new $i("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Gi(new ek(r.getProvider("auth-internal")),new rk(u,r.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(y.options.projectId,v)})(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),vr(Sv,Av,e),vr(Sv,Av,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebasestorage.googleapis.com",bD="storageBucket",VD=120*1e3,OD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rr{constructor(e,t,r=0){super(Ip(e),`Firebase Storage: ${t} (${Ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ar;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ar||(Ar={}));function Ip(n){return"storage/"+n}function LD(){const n="An unknown error occurred, please check the error payload for server response.";return new Pr(Ar.UNKNOWN,n)}function MD(){return new Pr(Ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FD(){return new Pr(Ar.CANCELED,"User canceled the upload/download.")}function UD(n){return new Pr(Ar.INVALID_URL,"Invalid URL '"+n+"'.")}function jD(n){return new Pr(Ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function GE(n){return new Pr(Ar.INVALID_ARGUMENT,n)}function jT(){return new Pr(Ar.APP_DELETED,"The Firebase app was deleted.")}function BD(n){return new Pr(Ar.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=nr.makeFromUrl(e,t)}catch{return new nr(e,"")}if(r.path==="")return r;throw jD(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function y(le){le.path_=decodeURIComponent(le.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",b=new RegExp(`^https?://${w}/${v}/b/${o}/o${T}`,"i"),U={bucket:1,path:3},z=t===UT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",te=new RegExp(`^https?://${z}/${o}/${N}`,"i"),Z=[{regex:d,indices:f,postModify:a},{regex:b,indices:U,postModify:y},{regex:te,indices:{bucket:1,path:2},postModify:y}];for(let le=0;le<Z.length;le++){const Ie=Z[le],ce=Ie.regex.exec(e);if(ce){const C=ce[Ie.indices.bucket];let S=ce[Ie.indices.path];S||(S=""),r=new nr(C,S),Ie.postModify(r);break}}if(r==null)throw UD(e);return r}}class zD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let y=!1;function v(...N){y||(y=!0,e.apply(null,N))}function w(N){o=setTimeout(()=>{o=null,n(b,f())},N)}function T(){a&&clearTimeout(a)}function b(N,...te){if(y){T();return}if(N){T(),v.call(null,N,...te);return}if(f()||u){T(),v.call(null,N,...te);return}r<64&&(r*=2);let Z;d===1?(d=2,Z=0):Z=(r+Math.random())*1e3,w(Z)}let U=!1;function z(N){U||(U=!0,T(),!y&&(o!==null?(N||(d=2),clearTimeout(o),w(0)):N||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,z(!0)},t),z}function qD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(n){return n!==void 0}function QE(n,e,t,r){if(r<e)throw GE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw GE(`Invalid value for '${n}'. Expected ${t} or less.`)}function KD(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Xh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Xh||(Xh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,t,r,o,a,u,d,f,y,v,w,T=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,z)=>{this.resolve_=U,this.reject_=z,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new uh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,y)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Xh.NO_ERROR,f=a.getStatus();if(!d||HD(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Xh.ABORT;r(!1,new uh(!1,null,v));return}const y=this.successCodes_.indexOf(f)!==-1;r(!0,new uh(y,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());WD(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=LD();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?jT():FD();u(f)}else{const f=MD();u(f)}};this.canceled_?t(!1,new uh(!1,null,!0)):this.backoffId_=$D(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function QD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function XD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function JD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ZD(n,e,t,r,o,a,u=!0,d=!1){const f=KD(n.urlParams),y=n.url+f,v=Object.assign({},n.headers);return YD(v,e),QD(v,t),XD(v,a),JD(v,r),new GD(y,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function t2(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t){this._service=e,t instanceof nr?this._location=t:this._location=nr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yh(e,t)}get root(){const e=new nr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return t2(this._location.path)}get storage(){return this._service}get parent(){const e=e2(this._location.path);if(e===null)return null;const t=new nr(this._location.bucket,e);return new Yh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BD(e)}}function XE(n,e){const t=e==null?void 0:e[bD];return t==null?null:nr.makeFromBucketSpec(t,n)}function n2(n,e,t,r={}){n.host=`${e}:${t}`;const o=to(e);o&&(mm(`https://${n.host}/b`),gm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:xw(a,n.app.options.projectId))}class r2{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=UT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VD,this._maxUploadRetryTime=OD,this._requests=new Set,o!=null?this._bucket=nr.makeFromBucketSpec(o,this._host):this._bucket=XE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nr.makeFromBucketSpec(this._url,e):this._bucket=XE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new zD(jT());{const u=ZD(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const YE="@firebase/storage",JE="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="storage";function i2(n=vm(),e){n=Et(n);const r=td(n,BT).getImmediate({identifier:e}),o=Pw("storage");return o&&s2(r,...o),r}function s2(n,e,t,r={}){n2(n,e,t,r)}function o2(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new r2(t,r,o,e,no)}function a2(){Ws(new $i(BT,o2,"PUBLIC").setMultipleInstances(!0)),vr(YE,JE,""),vr(YE,JE,"esm2017")}a2();const l2={apiKey:"AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",authDomain:"m3notes-9712f.firebaseapp.com",projectId:"m3notes-9712f",storageBucket:"m3notes-9712f.firebasestorage.app",messagingSenderId:"312791889198",appId:"1:312791889198:android:defc0d0536797e190bb6bf"},Ig=Mw(l2),Ll=GC(Ig),oo=hD(Ig);i2(Ig);dD(oo).catch(n=>{n.code==="failed-precondition"?console.warn("Persistence failed: multiple tabs open"):n.code==="unimplemented"&&console.warn("Persistence not available in this browser")});const zT=G.createContext();function u2({children:n}){const[e,t]=G.useState(null),[r,o]=G.useState(!0);G.useEffect(()=>LP(Ll,v=>{t(v),o(!1)}),[]);const a=(y,v)=>bP(Ll,y,v),u=(y,v)=>DP(Ll,y,v),d=()=>rC(Ll,new Wr),f=()=>MP(Ll);return $.jsx(zT.Provider,{value:{user:e,loading:r,login:a,register:u,loginWithGoogle:d,logout:f},children:n})}const Mu=()=>G.useContext(zT);function c2(){const{login:n,register:e,loginWithGoogle:t}=Mu(),[r,o]=G.useState(""),[a,u]=G.useState(""),[d,f]=G.useState(!1),[y,v]=G.useState(""),[w,T]=G.useState(!1),[b,U]=G.useState(!1),z=async te=>{te.preventDefault(),v(""),T(!0);try{d?await e(r.trim(),a):await n(r.trim(),a)}catch(ne){v(ne.message||"Erreur")}finally{T(!1)}},N=async()=>{v(""),U(!0);try{await t()}catch(te){v(te.message||"Erreur de connexion Google")}finally{U(!1)}};return $.jsx("div",{className:"login-page",children:$.jsxs("div",{className:"login-card",children:[$.jsx("h1",{children:"M3Notes"}),$.jsx("p",{className:"subtitle",children:d?"Créer un compte":"Connexion"}),$.jsxs("form",{onSubmit:z,children:[$.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:te=>o(te.target.value),required:!0,autoFocus:!0}),$.jsx("input",{type:"password",placeholder:"Mot de passe",value:a,onChange:te=>u(te.target.value),required:!0,minLength:6}),y&&$.jsx("p",{className:"error",children:y}),$.jsx("button",{type:"submit",disabled:w,children:w?"…":d?"S'inscrire":"Se connecter"})]}),$.jsx("div",{className:"divider",children:$.jsx("span",{children:"ou"})}),$.jsxs("button",{className:"google-btn",onClick:N,disabled:b,type:"button",children:[$.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[$.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.93c1.71-1.58 2.69-3.9 2.69-6.64z"}),$.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.93-2.27c-.81.54-1.85.86-3.03.86-2.33 0-4.31-1.58-5.02-3.7H.96v2.34C2.44 15.98 5.48 18 9 18z"}),$.jsx("path",{fill:"#FBBC05",d:"M3.98 10.71c-.18-.54-.28-1.11-.28-1.71s.1-1.17.28-1.71V4.95H.96C.35 6.17 0 7.55 0 9s.35 2.83.96 4.05l3.02-2.34z"}),$.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.6-2.6C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.95l3.02 2.34C4.69 5.16 6.67 3.58 9 3.58z"})]}),b?"…":"Continuer avec Google"]}),$.jsx("button",{className:"switch",onClick:()=>f(!d),children:d?"Déjà un compte ? Se connecter":"Pas de compte ? S'inscrire"})]})})}/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=n=>{const e=d2(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},p2=G.createContext({}),m2=()=>G.useContext(p2),g2=G.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...d},f)=>{const{size:y=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,color:T="currentColor",className:b=""}=m2()??{},U=r??w?Number(t??v)*24/Number(e??y):t??v;return G.createElement("svg",{ref:f,...Tp,width:e??y??Tp.width,height:e??y??Tp.height,stroke:n??T,strokeWidth:U,className:$T("lucide",b,o),...!a&&!f2(d)&&{"aria-hidden":"true"},...d},[...u.map(([z,N])=>G.createElement(z,N)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(n,e)=>{const t=G.forwardRef(({className:r,...o},a)=>G.createElement(g2,{ref:a,iconNode:e,className:$T(`lucide-${h2(ZE(n))}`,`lucide-${n}`,r),...o}));return t.displayName=ZE(n),t};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],qT=Vt("archive",y2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],v2=Vt("arrow-left",_2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],w2=Vt("copy",E2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],T2=Vt("list-checks",I2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],A2=Vt("log-out",S2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],P2=Vt("moon",R2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],WT=Vt("pin",C2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],cm=Vt("plus",k2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],N2=Vt("share-2",x2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],b2=Vt("square-check-big",D2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],O2=Vt("square",V2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],M2=Vt("sticky-note",L2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],U2=Vt("sun",F2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],B2=Vt("tag",j2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],$2=Vt("text-align-start",z2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],W2=Vt("trash-2",q2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],H2=Vt("wifi-off",K2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ew=Vt("x",G2),KT=G.createContext();function Q2({children:n}){const[e,t]=G.useState(()=>{const o=localStorage.getItem("m3notes-theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light"),localStorage.setItem("m3notes-theme",e?"dark":"light")},[e]);const r=()=>t(o=>!o);return $.jsx(KT.Provider,{value:{dark:e,toggle:r},children:n})}const X2=()=>G.useContext(KT),Fu="notes";function Y2(n,e,t){let r=SD(hg(oo,Fu),AD("userId","==",n),WE("isPinned","desc"),WE("updatedAt","desc"));return DD(r,o=>{let a=o.docs.map(u=>({id:u.id,...u.data()}));e||(a=a.filter(u=>!u.isArchived)),t(a)},o=>{console.error("Notes subscription error:",o),t([])})}async function J2(n,e){return(await LT(hg(oo,Fu),{...e,userId:n,isPinned:!1,isArchived:!1,labels:e.labels||[],imageUrls:e.imageUrls||[],checklist:e.checklist||[],isChecklist:e.isChecklist||!1,createdAt:FT(),updatedAt:$e.now()})).id}async function Z2(n,e){await xD(Sd(oo,Fu,n),{...e,updatedAt:$e.now()})}async function eb(n){await ND(Sd(oo,Fu,n))}async function tb(n,e){return(await LT(hg(oo,Fu),{title:e.title||"",content:e.content||"",color:e.color||"DEFAULT",labels:e.labels||[],imageUrls:e.imageUrls||[],checklist:(e.checklist||[]).map(r=>({...r})),isChecklist:e.isChecklist||!1,userId:n,isPinned:!1,isArchived:!1,createdAt:FT(),updatedAt:$e.now()})).id}const nb={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function tw({note:n,onClick:e,onLabelClick:t}){var u;const r=nb[n.color]||"note-default",o=n.checklist||[],a=o.filter(d=>d.isChecked).length;return $.jsxs("div",{className:`note-card ${r}`,onClick:e,children:[n.isPinned&&$.jsx(WT,{className:"pin",size:16,fill:"currentColor"}),n.title&&$.jsx("h3",{className:"note-title",children:n.title}),n.isChecklist?$.jsxs($.Fragment,{children:[o.length>0&&$.jsxs("span",{className:"checklist-count",children:[a,"/",o.length]}),$.jsxs("ul",{className:"checklist",children:[o.slice(0,6).map((d,f)=>$.jsxs("li",{className:d.isChecked?"checked":"",children:[d.isChecked?$.jsx(b2,{size:14}):$.jsx(O2,{size:14})," ",d.text]},f)),o.length>6&&$.jsxs("li",{className:"more",children:["+",o.length-6,"…"]})]})]}):n.content&&$.jsx("p",{className:"note-content",children:n.content}),((u=n.labels)==null?void 0:u.length)>0&&$.jsx("div",{className:"labels",children:n.labels.slice(0,3).map(d=>$.jsx("span",{className:"label",onClick:f=>{t&&(f.stopPropagation(),t(d))},children:d},d))})]})}function HT({open:n,title:e="Confirmer",message:t,confirmLabel:r="Confirmer",cancelLabel:o="Annuler",danger:a=!1,onConfirm:u,onCancel:d}){return n?$.jsx("div",{className:"confirm-overlay",onClick:d,children:$.jsxs("div",{className:"confirm-box",onClick:f=>f.stopPropagation(),children:[$.jsx("h3",{children:e}),t&&$.jsx("p",{children:t}),$.jsxs("div",{className:"confirm-actions",children:[$.jsx("button",{className:"confirm-cancel",onClick:d,children:o}),$.jsx("button",{className:`confirm-ok ${a?"danger":""}`,onClick:u,children:r})]})]})}):null}const rb=5e3;function ib(){const{user:n,logout:e}=Mu(),{dark:t,toggle:r}=X2(),o=pm(),a=Zh(),[u,d]=G.useState([]),[f,y]=G.useState(!1),[v,w]=G.useState(""),[T,b]=G.useState(!0),[U,z]=G.useState(null),[N,te]=G.useState(null),[ne,Z]=G.useState("updatedAt"),[le,Ie]=G.useState(!1),ce=G.useRef(null),C=G.useRef(null);G.useEffect(()=>n?(b(!0),Y2(n.uid,f,ee=>{d(ee),b(!1)})):void 0,[n,f]),G.useEffect(()=>{var ee;const ue=(ee=a.state)==null?void 0:ee.deletedNoteId;ue&&C.current!==a.key&&(C.current=a.key,z(ue),ce.current=setTimeout(()=>{eb(ue).catch(ve=>console.error("Delete error:",ve)),z(null)},rb),o(a.pathname,{replace:!0,state:{}}))},[a,o]),G.useEffect(()=>()=>{ce.current&&clearTimeout(ce.current)},[]);const S=ue=>{te(ee=>ee===ue?null:ue)},P=()=>{ce.current&&clearTimeout(ce.current),z(null)},x=u.filter(ue=>ue.id!==U),O=[...new Set(x.flatMap(ue=>ue.labels||[]))].sort(),V=N?x.filter(ue=>(ue.labels||[]).includes(N)):x,R=v.trim()?V.filter(ue=>(ue.title||"").toLowerCase().includes(v.toLowerCase())||(ue.content||"").toLowerCase().includes(v.toLowerCase())||(ue.labels||[]).some(ee=>ee.toLowerCase().includes(v.toLowerCase()))):V,Qe=(ue,ee)=>{var L,H;const ve=(L=ue[ne])!=null&&L.toMillis?ue[ne].toMillis():0;return((H=ee[ne])!=null&&H.toMillis?ee[ne].toMillis():0)-ve},lt=R.filter(ue=>ue.isPinned).sort(Qe),ut=R.filter(ue=>!ue.isPinned).sort(Qe);return $.jsxs("div",{className:"home",children:[$.jsxs("header",{className:"topbar",children:[$.jsx("div",{className:"topbar-left",children:$.jsx("h1",{children:f?"Archives":"M3Notes"})}),$.jsx("div",{className:"search-box",children:$.jsx("input",{type:"search",placeholder:"Rechercher…",value:v,onChange:ue=>w(ue.target.value)})}),$.jsxs("div",{className:"topbar-actions",children:[$.jsx("button",{onClick:()=>y(!f),title:"Archives",children:f?$.jsx(M2,{size:20}):$.jsx(qT,{size:20})}),$.jsx("button",{onClick:r,title:"Thème",children:t?$.jsx(U2,{size:20}):$.jsx(P2,{size:20})}),$.jsx("button",{onClick:()=>Ie(!0),title:"Déconnexion",children:$.jsx(A2,{size:20})})]})]}),$.jsxs("div",{className:"filter-row",children:[O.length>0&&$.jsx("div",{className:"label-filter-bar",children:O.map(ue=>$.jsx("button",{className:`label-filter-chip ${N===ue?"active":""}`,onClick:()=>S(ue),children:ue},ue))}),$.jsxs("select",{className:"sort-select",value:ne,onChange:ue=>Z(ue.target.value),children:[$.jsx("option",{value:"updatedAt",children:"Dernière modification"}),$.jsx("option",{value:"createdAt",children:"Date de création"})]})]}),$.jsx("main",{className:"notes-area",children:T?$.jsx("p",{className:"empty",children:"Chargement…"}):R.length===0?$.jsx("p",{className:"empty",children:f?"Aucune note archivée":`Aucune note
Clique sur + pour commencer`}):$.jsxs($.Fragment,{children:[lt.length>0&&$.jsxs("section",{className:"notes-section",children:[ut.length>0&&$.jsx("h2",{className:"section-title",children:"Épinglées"}),$.jsx("div",{className:"notes-grid",children:lt.map(ue=>$.jsx(tw,{note:ue,onClick:()=>o(`/note/${ue.id}`),onLabelClick:S},ue.id))})]}),ut.length>0&&$.jsxs("section",{className:"notes-section",children:[lt.length>0&&$.jsx("h2",{className:"section-title",children:"Autres"}),$.jsx("div",{className:"notes-grid",children:ut.map(ue=>$.jsx(tw,{note:ue,onClick:()=>o(`/note/${ue.id}`),onLabelClick:S},ue.id))})]})]})}),U&&$.jsxs("div",{className:"snackbar",children:[$.jsx("span",{children:"Note supprimée"}),$.jsx("button",{onClick:P,children:"Annuler"})]}),$.jsx("button",{className:"fab",onClick:()=>o("/note/new"),title:"Nouvelle note",children:$.jsx(cm,{size:26})}),$.jsx(HT,{open:le,title:"Se deconnecter ?",confirmLabel:"Se deconnecter",onConfirm:()=>{Ie(!1),e()},onCancel:()=>Ie(!1)})]})}const Ut=[];for(let n=0;n<256;++n)Ut.push((n+256).toString(16).slice(1));function sb(n,e=0){return(Ut[n[e+0]]+Ut[n[e+1]]+Ut[n[e+2]]+Ut[n[e+3]]+"-"+Ut[n[e+4]]+Ut[n[e+5]]+"-"+Ut[n[e+6]]+Ut[n[e+7]]+"-"+Ut[n[e+8]]+Ut[n[e+9]]+"-"+Ut[n[e+10]]+Ut[n[e+11]]+Ut[n[e+12]]+Ut[n[e+13]]+Ut[n[e+14]]+Ut[n[e+15]]).toLowerCase()}let Sp;const ob=new Uint8Array(16);function ab(){if(!Sp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Sp=crypto.getRandomValues.bind(crypto)}return Sp(ob)}const lb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),nw={randomUUID:lb};function rw(n,e,t){var o;if(nw.randomUUID&&!n)return nw.randomUUID();n=n||{};const r=n.random??((o=n.rng)==null?void 0:o.call(n))??ab();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,sb(r)}const ub=[{key:"DEFAULT",label:"Blanc"},{key:"RED",label:"Rouge"},{key:"ORANGE",label:"Orange"},{key:"YELLOW",label:"Jaune"},{key:"GREEN",label:"Vert"},{key:"TEAL",label:"Turquoise"},{key:"BLUE",label:"Bleu"},{key:"DARK_BLUE",label:"Bleu foncé"},{key:"PURPLE",label:"Violet"},{key:"PINK",label:"Rose"},{key:"BROWN",label:"Marron"},{key:"GRAY",label:"Gris"}],iw={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function cb(){const{id:n}=MS(),e=n==="new",{user:t}=Mu(),r=pm(),[o,a]=G.useState(""),[u,d]=G.useState(""),[f,y]=G.useState("DEFAULT"),[v,w]=G.useState(!1),[T,b]=G.useState(!1),[U,z]=G.useState(!1),[N,te]=G.useState([]),[ne,Z]=G.useState(""),[le,Ie]=G.useState(!e),[ce,C]=G.useState([]),[S,P]=G.useState(""),[x,O]=G.useState(!1),[V,R]=G.useState(null);G.useEffect(()=>{e||!t||kD(Sd(oo,"notes",n)).then(re=>{if(re.exists()){const fe=re.data();a(fe.title||""),d(fe.content||""),y(fe.color||"DEFAULT"),w(fe.isPinned||!1),b(fe.isArchived||!1),z(fe.isChecklist||!1),te(fe.checklist||[]),C(fe.labels||[])}Ie(!1)})},[n,e,t]);const Qe=re=>{const fe=re.trim();fe&&(te([...N,{id:rw(),text:fe,isChecked:!1}]),Z(""))},lt=(re,fe)=>{te(N.map(et=>et.id===re?{...et,text:fe}:et))},ut=re=>{te(N.map(fe=>fe.id===re?{...fe,isChecked:!fe.isChecked}:fe))},ue=re=>{te(N.filter(fe=>fe.id!==re))},ee=()=>{const re=S.trim();re&&(ce.includes(re)||C([...ce,re]),P(""))},ve=re=>{C(ce.filter(fe=>fe!==re))},he=()=>{if(u.trim()&&N.length===0){const re=u.split(`
`).filter(fe=>fe.trim());te(re.map(fe=>({id:rw(),text:fe.trim(),isChecked:!1}))),d("")}z(!0)},L=()=>{N.length>0&&!u.trim()&&d(N.map(re=>re.text).join(`
`)),z(!1)},H=async()=>{if(!t)return;const re=N.filter(Fn=>Fn.text.trim()),fe={title:o.trim(),content:U?"":u.trim(),color:f,isPinned:v,isArchived:T,isChecklist:U,checklist:U?re:[],labels:ce},et=!fe.title&&!fe.content&&(!U||re.length===0);if(e){if(et){r("/");return}await J2(t.uid,fe)}else await Z2(n,fe);r("/")},Ee=async()=>{if(!t||e)return;const re=N.filter(fe=>fe.text.trim());await tb(t.uid,{title:o.trim(),content:U?"":u.trim(),color:f,labels:ce,isChecklist:U,checklist:U?re:[]}),r("/")},xe=async()=>{const re=[o.trim(),U?N.map(fe=>`- ${fe.text}`).join(`
`):u.trim()].filter(Boolean).join(`

`);if(navigator.share)try{await navigator.share({title:o.trim()||"Note",text:re})}catch(fe){fe.name!=="AbortError"&&console.error("Share error:",fe)}else navigator.clipboard&&(await navigator.clipboard.writeText(re),alert("Copié dans le presse-papiers"))},Ne=()=>{e||R({title:"Supprimer cette note ?",message:"Cette action est definitive.",confirmLabel:"Supprimer",danger:!0,onConfirm:()=>r("/",{state:{deletedNoteId:n}})})},Ve=()=>{R({title:T?"Desarchiver cette note ?":"Archiver cette note ?",message:T?"La note reapparaitra dans la liste principale.":"La note sera deplacee dans les archives.",confirmLabel:T?"Desarchiver":"Archiver",onConfirm:()=>b(!T)})},je=()=>{e||R({title:"Dupliquer cette note ?",message:"Une copie sera creee.",confirmLabel:"Dupliquer",onConfirm:Ee})};return le?$.jsx("div",{className:"note-page loading",children:"Chargement…"}):$.jsxs("div",{className:`note-page ${iw[f]||"note-default"}`,children:[$.jsxs("header",{className:"note-toolbar",children:[$.jsx("button",{className:"icon-btn",onClick:H,title:"Retour",children:$.jsx(v2,{size:22})}),$.jsxs("div",{className:"toolbar-actions",children:[$.jsx("button",{className:"icon-btn",onClick:U?L:he,title:U?"Passer en texte":"Passer en checklist",children:U?$.jsx($2,{size:20}):$.jsx(T2,{size:20})}),$.jsx("button",{className:`icon-btn ${x?"active":""}`,onClick:()=>O(!x),title:"Labels",children:$.jsx(B2,{size:20})}),$.jsx("button",{className:`icon-btn ${v?"active":""}`,onClick:()=>w(!v),title:"Épingler",children:$.jsx(WT,{size:20,fill:v?"currentColor":"none"})}),$.jsx("button",{className:`icon-btn ${T?"active":""}`,onClick:Ve,title:"Archiver",children:$.jsx(qT,{size:20})}),$.jsx("button",{className:"icon-btn",onClick:xe,title:"Partager",children:$.jsx(N2,{size:20})}),!e&&$.jsx("button",{className:"icon-btn",onClick:je,title:"Dupliquer",children:$.jsx(w2,{size:20})}),!e&&$.jsx("button",{className:"icon-btn",onClick:Ne,title:"Supprimer",children:$.jsx(W2,{size:20})})]})]}),$.jsx("div",{className:"color-picker",children:ub.map(re=>$.jsx("button",{className:`color-dot ${iw[re.key]} ${f===re.key?"selected":""}`,onClick:()=>y(re.key),title:re.label},re.key))}),$.jsx("input",{className:"note-title-input",placeholder:"Titre",value:o,onChange:re=>a(re.target.value),autoFocus:e}),(x||ce.length>0)&&$.jsxs("div",{className:"labels-editor",children:[ce.map(re=>$.jsxs("span",{className:"label-chip",children:[re,$.jsx("button",{onClick:()=>ve(re),title:"Retirer",children:$.jsx(ew,{size:12})})]},re)),x&&$.jsxs("div",{className:"label-input-row",children:[$.jsx("input",{className:"label-input",value:S,onChange:re=>P(re.target.value),onKeyDown:re=>{re.key==="Enter"&&(re.preventDefault(),ee())},onBlur:()=>ee(),placeholder:"Nouveau label",autoFocus:!0}),$.jsx("button",{type:"button",className:"label-add-btn",onMouseDown:re=>re.preventDefault(),onClick:ee,children:$.jsx(cm,{size:16})})]})]}),U?$.jsxs("div",{className:"checklist-editor",children:[N.map(re=>$.jsxs("div",{className:`checklist-row ${re.isChecked?"checked":""}`,children:[$.jsx("button",{className:"check-toggle",onClick:()=>ut(re.id),children:$.jsx("span",{className:"check-box"})}),$.jsx("input",{className:"checklist-item-input",value:re.text,onChange:fe=>lt(re.id,fe.target.value),placeholder:"Élément"}),$.jsx("button",{className:"remove-item",onClick:()=>ue(re.id),title:"Supprimer",children:$.jsx(ew,{size:16})})]},re.id)),$.jsxs("div",{className:"checklist-row new-item-row",children:[$.jsx(cm,{size:18,className:"add-icon"}),$.jsx("input",{className:"checklist-item-input",value:ne,onChange:re=>Z(re.target.value),onKeyDown:re=>{re.key==="Enter"&&(re.preventDefault(),Qe(ne))},placeholder:"Ajouter un élément"})]})]}):$.jsx("textarea",{className:"note-content-input",placeholder:"Note",value:u,onChange:re=>d(re.target.value),rows:12}),$.jsx(HT,{open:!!V,title:V==null?void 0:V.title,message:V==null?void 0:V.message,confirmLabel:V==null?void 0:V.confirmLabel,danger:V==null?void 0:V.danger,onConfirm:()=>{V==null||V.onConfirm(),R(null)},onCancel:()=>R(null)})]})}function hb(){const[n,e]=G.useState(navigator.onLine);return G.useEffect(()=>{const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t),window.addEventListener("offline",r),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}},[]),n?null:$.jsxs("div",{className:"sync-banner",children:[$.jsx(H2,{size:16}),$.jsx("span",{children:"Hors ligne — les changements seront synchronisés au retour du réseau"})]})}function sw({children:n}){const{user:e,loading:t}=Mu();return t?$.jsx("div",{className:"loading-screen",children:"Chargement…"}):e?n:$.jsx(Rp,{to:"/login",replace:!0})}function db(){const{user:n,loading:e}=Mu();return e?$.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"var(--bg)",color:"var(--text)"},children:"Chargement…"}):$.jsxs($.Fragment,{children:[$.jsx(hb,{}),$.jsxs(ZS,{children:[$.jsx(Ml,{path:"/login",element:n?$.jsx(Rp,{to:"/",replace:!0}):$.jsx(c2,{})}),$.jsx(Ml,{path:"/",element:$.jsx(sw,{children:$.jsx(ib,{})})}),$.jsx(Ml,{path:"/note/:id",element:$.jsx(sw,{children:$.jsx(cb,{})})}),$.jsx(Ml,{path:"*",element:$.jsx(Rp,{to:"/",replace:!0})})]})]})}aS.createRoot(document.getElementById("root")).render($.jsx(aw.StrictMode,{children:$.jsx(nA,{basename:"/m3notes-web",children:$.jsx(Q2,{children:$.jsx(u2,{children:$.jsx(db,{})})})})}));
