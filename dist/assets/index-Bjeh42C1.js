function jS(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function XE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tp={exports:{}},kl={},np={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function BS(){if(Ty)return xe;Ty=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function b(O,K,_e){this.props=O,this.context=K,this.refs=z,this.updater=_e||x}b.prototype.isReactComponent={},b.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},b.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ie(){}ie.prototype=b.prototype;function Q(O,K,_e){this.props=O,this.context=K,this.refs=z,this.updater=_e||x}var Y=Q.prototype=new ie;Y.constructor=Q,j(Y,b.prototype),Y.isPureReactComponent=!0;var ae=Array.isArray,Ie=Object.prototype.hasOwnProperty,ge={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(O,K,_e){var Pe,ke={},be=null,Ue=null;if(K!=null)for(Pe in K.ref!==void 0&&(Ue=K.ref),K.key!==void 0&&(be=""+K.key),K)Ie.call(K,Pe)&&!k.hasOwnProperty(Pe)&&(ke[Pe]=K[Pe]);var je=arguments.length-2;if(je===1)ke.children=_e;else if(1<je){for(var Ge=Array(je),Rt=0;Rt<je;Rt++)Ge[Rt]=arguments[Rt+2];ke.children=Ge}if(O&&O.defaultProps)for(Pe in je=O.defaultProps,je)ke[Pe]===void 0&&(ke[Pe]=je[Pe]);return{$$typeof:n,type:O,key:be,ref:Ue,props:ke,_owner:ge.current}}function P(O,K){return{$$typeof:n,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_e){return K[_e]})}var L=/\/+/g;function R(O,K){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):K.toString(36)}function lt(O,K,_e,Pe,ke){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Ue=!1;if(O===null)Ue=!0;else switch(be){case"string":case"number":Ue=!0;break;case"object":switch(O.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=O,ke=ke(Ue),O=Pe===""?"."+R(Ue,0):Pe,ae(ke)?(_e="",O!=null&&(_e=O.replace(L,"$&/")+"/"),lt(ke,K,_e,"",function(Rt){return Rt})):ke!=null&&(N(ke)&&(ke=P(ke,_e+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(L,"$&/")+"/")+O)),K.push(ke)),1;if(Ue=0,Pe=Pe===""?".":Pe+":",ae(O))for(var je=0;je<O.length;je++){be=O[je];var Ge=Pe+R(be,je);Ue+=lt(be,K,_e,Ge,ke)}else if(Ge=T(O),typeof Ge=="function")for(O=Ge.call(O),je=0;!(be=O.next()).done;)be=be.value,Ge=Pe+R(be,je++),Ue+=lt(be,K,_e,Ge,ke);else if(be==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Ft(O,K,_e){if(O==null)return O;var Pe=[],ke=0;return lt(O,Pe,"","",function(be){return K.call(_e,be,ke++)}),Pe}function Ut(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(_e){(O._status===0||O._status===-1)&&(O._status=1,O._result=_e)},function(_e){(O._status===0||O._status===-1)&&(O._status=2,O._result=_e)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var Ke={current:null},se={transition:null},ve={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:se,ReactCurrentOwner:ge};function ue(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Ft,forEach:function(O,K,_e){Ft(O,function(){K.apply(this,arguments)},_e)},count:function(O){var K=0;return Ft(O,function(){K++}),K},toArray:function(O){return Ft(O,function(K){return K})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=b,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=Q,xe.StrictMode=r,xe.Suspense=f,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,xe.act=ue,xe.cloneElement=function(O,K,_e){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Pe=j({},O.props),ke=O.key,be=O.ref,Ue=O._owner;if(K!=null){if(K.ref!==void 0&&(be=K.ref,Ue=ge.current),K.key!==void 0&&(ke=""+K.key),O.type&&O.type.defaultProps)var je=O.type.defaultProps;for(Ge in K)Ie.call(K,Ge)&&!k.hasOwnProperty(Ge)&&(Pe[Ge]=K[Ge]===void 0&&je!==void 0?je[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)Pe.children=_e;else if(1<Ge){je=Array(Ge);for(var Rt=0;Rt<Ge;Rt++)je[Rt]=arguments[Rt+2];Pe.children=je}return{$$typeof:n,type:O.type,key:ke,ref:be,props:Pe,_owner:Ue}},xe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},xe.createElement=S,xe.createFactory=function(O){var K=S.bind(null,O);return K.type=O,K},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:d,render:O}},xe.isValidElement=N,xe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Ut}},xe.memo=function(O,K){return{$$typeof:_,type:O,compare:K===void 0?null:K}},xe.startTransition=function(O){var K=se.transition;se.transition={};try{O()}finally{se.transition=K}},xe.unstable_act=ue,xe.useCallback=function(O,K){return Ke.current.useCallback(O,K)},xe.useContext=function(O){return Ke.current.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O){return Ke.current.useDeferredValue(O)},xe.useEffect=function(O,K){return Ke.current.useEffect(O,K)},xe.useId=function(){return Ke.current.useId()},xe.useImperativeHandle=function(O,K,_e){return Ke.current.useImperativeHandle(O,K,_e)},xe.useInsertionEffect=function(O,K){return Ke.current.useInsertionEffect(O,K)},xe.useLayoutEffect=function(O,K){return Ke.current.useLayoutEffect(O,K)},xe.useMemo=function(O,K){return Ke.current.useMemo(O,K)},xe.useReducer=function(O,K,_e){return Ke.current.useReducer(O,K,_e)},xe.useRef=function(O){return Ke.current.useRef(O)},xe.useState=function(O){return Ke.current.useState(O)},xe.useSyncExternalStore=function(O,K,_e){return Ke.current.useSyncExternalStore(O,K,_e)},xe.useTransition=function(){return Ke.current.useTransition()},xe.version="18.3.1",xe}var Sy;function am(){return Sy||(Sy=1,np.exports=BS()),np.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function zS(){if(Ay)return kl;Ay=1;var n=am(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,_){var v,w={},T=null,x=null;_!==void 0&&(T=""+_),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:x,props:w,_owner:o.current}}return kl.Fragment=t,kl.jsx=u,kl.jsxs=u,kl}var Ry;function $S(){return Ry||(Ry=1,tp.exports=zS()),tp.exports}var re=$S(),Z=am();const YE=XE(Z),qS=jS({__proto__:null,default:YE},[Z]);var Yc={},rp={exports:{}},un={},ip={exports:{}},sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function WS(){return Py||(Py=1,(function(n){function e(se,ve){var ue=se.length;se.push(ve);e:for(;0<ue;){var O=ue-1>>>1,K=se[O];if(0<o(K,ve))se[O]=ve,se[ue]=K,ue=O;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var ve=se[0],ue=se.pop();if(ue!==ve){se[0]=ue;e:for(var O=0,K=se.length,_e=K>>>1;O<_e;){var Pe=2*(O+1)-1,ke=se[Pe],be=Pe+1,Ue=se[be];if(0>o(ke,ue))be<K&&0>o(Ue,ke)?(se[O]=Ue,se[be]=ue,O=be):(se[O]=ke,se[Pe]=ue,O=Pe);else if(be<K&&0>o(Ue,ue))se[O]=Ue,se[be]=ue,O=be;else break e}}return ve}function o(se,ve){var ue=se.sortIndex-ve.sortIndex;return ue!==0?ue:se.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],_=[],v=1,w=null,T=3,x=!1,j=!1,z=!1,b=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(se){for(var ve=t(_);ve!==null;){if(ve.callback===null)r(_);else if(ve.startTime<=se)r(_),ve.sortIndex=ve.expirationTime,e(f,ve);else break;ve=t(_)}}function ae(se){if(z=!1,Y(se),!j)if(t(f)!==null)j=!0,Ut(Ie);else{var ve=t(_);ve!==null&&Ke(ae,ve.startTime-se)}}function Ie(se,ve){j=!1,z&&(z=!1,ie(S),S=-1),x=!0;var ue=T;try{for(Y(ve),w=t(f);w!==null&&(!(w.expirationTime>ve)||se&&!V());){var O=w.callback;if(typeof O=="function"){w.callback=null,T=w.priorityLevel;var K=O(w.expirationTime<=ve);ve=n.unstable_now(),typeof K=="function"?w.callback=K:w===t(f)&&r(f),Y(ve)}else r(f);w=t(f)}if(w!==null)var _e=!0;else{var Pe=t(_);Pe!==null&&Ke(ae,Pe.startTime-ve),_e=!1}return _e}finally{w=null,T=ue,x=!1}}var ge=!1,k=null,S=-1,P=5,N=-1;function V(){return!(n.unstable_now()-N<P)}function L(){if(k!==null){var se=n.unstable_now();N=se;var ve=!0;try{ve=k(!0,se)}finally{ve?R():(ge=!1,k=null)}}else ge=!1}var R;if(typeof Q=="function")R=function(){Q(L)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ft=lt.port2;lt.port1.onmessage=L,R=function(){Ft.postMessage(null)}}else R=function(){b(L,0)};function Ut(se){k=se,ge||(ge=!0,R())}function Ke(se,ve){S=b(function(){se(n.unstable_now())},ve)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){j||x||(j=!0,Ut(Ie))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(T){case 1:case 2:case 3:var ve=3;break;default:ve=T}var ue=T;T=ve;try{return se()}finally{T=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ve){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ue=T;T=se;try{return ve()}finally{T=ue}},n.unstable_scheduleCallback=function(se,ve,ue){var O=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,se){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ue+K,se={id:v++,callback:ve,priorityLevel:se,startTime:ue,expirationTime:K,sortIndex:-1},ue>O?(se.sortIndex=ue,e(_,se),t(f)===null&&se===t(_)&&(z?(ie(S),S=-1):z=!0,Ke(ae,ue-O))):(se.sortIndex=K,e(f,se),j||x||(j=!0,Ut(Ie))),se},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(se){var ve=T;return function(){var ue=T;T=ve;try{return se.apply(this,arguments)}finally{T=ue}}}})(sp)),sp}var Cy;function KS(){return Cy||(Cy=1,ip.exports=WS()),ip.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function HS(){if(ky)return un;ky=1;var n=am(),e=KS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:_.test(i)?w[i]=!0:(v[i]=!0,!1)}function x(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function j(i,s,l,h){if(s===null||typeof s>"u"||x(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(i,s,l,h,p,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){b[i]=new z(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];b[s]=new z(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){b[i]=new z(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){b[i]=new z(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){b[i]=new z(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){b[i]=new z(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){b[i]=new z(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){b[i]=new z(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){b[i]=new z(i,5,!1,i.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function Q(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(ie,Q);b[s]=new z(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(ie,Q);b[s]=new z(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(ie,Q);b[s]=new z(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){b[i]=new z(i,1,!1,i.toLowerCase(),null,!1,!1)}),b.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){b[i]=new z(i,1,!1,i.toLowerCase(),null,!0,!0)});function Y(i,s,l,h){var p=b.hasOwnProperty(s)?b[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(j(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),ge=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Ft=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),se=Symbol.iterator;function ve(i){return i===null||typeof i!="object"?null:(i=se&&i[se]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,O;function K(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var _e=!1;function Pe(i,s){if(!i||_e)return"";_e=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(i,[],s)}else{try{s.call()}catch($){h=$}i.call(s.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),g=h.stack.split(`
`),E=p.length-1,A=g.length-1;1<=E&&0<=A&&p[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(p[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||p[E]!==g[A]){var C=`
`+p[E].replace(" at new "," at ");return i.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",i.displayName)),C}while(1<=E&&0<=A);break}}}finally{_e=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function ke(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case ge:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case lt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case L:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ft:return s=i.displayName||null,s!==null?s:be(i.type)||"Memo";case Ut:s=i._payload,i=i._init;try{return be(i(s))}catch{}}return null}function Ue(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Rt(i){var s=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Rr(i){i._valueTracker||(i._valueTracker=Rt(i))}function io(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ge(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ti(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Zi(i,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function so(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=je(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Oa(i,s){s=s.checked,s!=null&&Y(i,"checked",s,!1)}function La(i,s){Oa(i,s);var l=je(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?oo(i,s.type,l):s.hasOwnProperty("defaultValue")&&oo(i,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Lu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function oo(i,s,l){(s!=="number"||ti(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Pr=Array.isArray;function Cr(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+je(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Ma(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ao(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Pr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:je(l)}}function lo(i,s){var l=je(s.value),h=je(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Fa(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function vt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?vt(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var kr,Ua=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=kr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ni(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ts=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(i){ts.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),es[s]=es[i]})});function ja(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||es.hasOwnProperty(i)&&es[i]?(""+s).trim():s+"px"}function Ba(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ja(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var za=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(i,s){if(s){if(za[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function qa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function uo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var co=null,In=null,nr=null;function ho(i){if(i=pl(i)){if(typeof co!="function")throw Error(t(280));var s=i.stateNode;s&&(s=dc(s),co(i.stateNode,i.type,s))}}function rr(i){In?nr?nr.push(i):nr=[i]:In=i}function Wa(){if(In){var i=In,s=nr;if(nr=In=null,ho(i),s)for(i=0;i<s.length;i++)ho(s[i])}}function rs(i,s){return i(s)}function Ka(){}var xr=!1;function Ha(i,s,l){if(xr)return i(s,l);xr=!0;try{return rs(i,s,l)}finally{xr=!1,(In!==null||nr!==null)&&(Ka(),Wa())}}function ut(i,s){var l=i.stateNode;if(l===null)return null;var h=dc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var fo=!1;if(d)try{var On={};Object.defineProperty(On,"passive",{get:function(){fo=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{fo=!1}function is(i,s,l,h,p,g,E,A,C){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(G){this.onError(G)}}var ss=!1,po=null,Ln=!1,Ga=null,Cd={onError:function(i){ss=!0,po=i}};function mo(i,s,l,h,p,g,E,A,C){ss=!1,po=null,is.apply(Cd,arguments)}function Mu(i,s,l,h,p,g,E,A,C){if(mo.apply(this,arguments),ss){if(ss){var $=po;ss=!1,po=null}else throw Error(t(198));Ln||(Ln=!0,Ga=$)}}function Mn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function os(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Fn(i){if(Mn(i)!==i)throw Error(t(188))}function Fu(i){var s=i.alternate;if(!s){if(s=Mn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return Fn(p),i;if(g===h)return Fn(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var E=!1,A=p.child;A;){if(A===l){E=!0,l=p,h=g;break}if(A===h){E=!0,h=p,l=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===l){E=!0,l=g,h=p;break}if(A===h){E=!0,h=g,l=p;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Qa(i){return i=Fu(i),i!==null?go(i):null}function go(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=go(i);if(s!==null)return s;i=i.sibling}return null}var _o=e.unstable_scheduleCallback,Xa=e.unstable_cancelCallback,Uu=e.unstable_shouldYield,kd=e.unstable_requestPaint,Qe=e.unstable_now,ju=e.unstable_getCurrentPriorityLevel,as=e.unstable_ImmediatePriority,ri=e.unstable_UserBlockingPriority,Tn=e.unstable_NormalPriority,Ya=e.unstable_LowPriority,Bu=e.unstable_IdlePriority,ls=null,hn=null;function zu(i){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:qu,Ja=Math.log,$u=Math.LN2;function qu(i){return i>>>=0,i===0?32:31-(Ja(i)/$u|0)|0}var yo=64,vo=4194304;function ii(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function us(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,g=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~p;A!==0?h=ii(A):(g&=E,g!==0&&(h=ii(g)))}else E=l&~p,E!==0?h=ii(E):g!==0&&(h=ii(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Gt(s),p=1<<l,h|=i[l],s&=~p;return h}function xd(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var E=31-Gt(g),A=1<<E,C=p[E];C===-1?((A&l)===0||(A&h)!==0)&&(p[E]=xd(A,s)):C<=s&&(i.expiredLanes|=A),g&=~A}}function dn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function cs(){var i=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),i}function si(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function oi(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Gt(s),i[s]=l}function He(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Gt(l),g=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~g}}function ai(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Gt(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var Ve=0;function li(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Wu,Eo,Ku,Hu,Gu,Za=!1,ir=[],Dt=null,Un=null,jn=null,ui=new Map,Sn=new Map,sr=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qu(i,s){switch(i){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":ui.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function tn(i,s,l,h,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=pl(s),s!==null&&Eo(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Dd(i,s,l,h,p){switch(s){case"focusin":return Dt=tn(Dt,i,s,l,h,p),!0;case"dragenter":return Un=tn(Un,i,s,l,h,p),!0;case"mouseover":return jn=tn(jn,i,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return ui.set(g,tn(ui.get(g)||null,i,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Sn.set(g,tn(Sn.get(g)||null,i,s,l,h,p)),!0}return!1}function Xu(i){var s=ms(i.target);if(s!==null){var l=Mn(s);if(l!==null){if(s=l.tag,s===13){if(s=os(l),s!==null){i.blockedOn=s,Gu(i.priority,function(){Ku(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Dr(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=wo(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);ns=h,l.target.dispatchEvent(h),ns=null}else return s=pl(l),s!==null&&Eo(s),i.blockedOn=l,!1;s.shift()}return!0}function hs(i,s,l){Dr(i)&&l.delete(s)}function Yu(){Za=!1,Dt!==null&&Dr(Dt)&&(Dt=null),Un!==null&&Dr(Un)&&(Un=null),jn!==null&&Dr(jn)&&(jn=null),ui.forEach(hs),Sn.forEach(hs)}function Bn(i,s){i.blockedOn===s&&(i.blockedOn=null,Za||(Za=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yu)))}function zn(i){function s(p){return Bn(p,i)}if(0<ir.length){Bn(ir[0],i);for(var l=1;l<ir.length;l++){var h=ir[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Dt!==null&&Bn(Dt,i),Un!==null&&Bn(Un,i),jn!==null&&Bn(jn,i),ui.forEach(s),Sn.forEach(s),l=0;l<sr.length;l++)h=sr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<sr.length&&(l=sr[0],l.blockedOn===null);)Xu(l),l.blockedOn===null&&sr.shift()}var Vr=ae.ReactCurrentBatchConfig,ci=!0;function Ze(i,s,l,h){var p=Ve,g=Vr.transition;Vr.transition=null;try{Ve=1,el(i,s,l,h)}finally{Ve=p,Vr.transition=g}}function Vd(i,s,l,h){var p=Ve,g=Vr.transition;Vr.transition=null;try{Ve=4,el(i,s,l,h)}finally{Ve=p,Vr.transition=g}}function el(i,s,l,h){if(ci){var p=wo(i,s,l,h);if(p===null)qd(i,s,h,ds,l),Qu(i,h);else if(Dd(p,i,s,l,h))h.stopPropagation();else if(Qu(i,h),s&4&&-1<Nd.indexOf(i)){for(;p!==null;){var g=pl(p);if(g!==null&&Wu(g),g=wo(i,s,l,h),g===null&&qd(i,s,h,ds,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else qd(i,s,h,null,l)}}var ds=null;function wo(i,s,l,h){if(ds=null,i=uo(h),i=ms(i),i!==null)if(s=Mn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=os(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ds=i,null}function tl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case as:return 1;case ri:return 4;case Tn:case Ya:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var fn=null,Io=null,nn=null;function nl(){if(nn)return nn;var i,s=Io,l=s.length,h,p="value"in fn?fn.value:fn.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===p[g-h];h++);return nn=p.slice(i,1<h?1-h:void 0)}function To(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function or(){return!0}function rl(){return!1}function Vt(i){function s(l,h,p,g,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?or:rl,this.isPropagationStopped=rl,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),s}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Vt($n),ar=ue({},$n,{view:0,detail:0}),bd=Vt(ar),Ao,br,hi,fs=ue({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==hi&&(hi&&i.type==="mousemove"?(Ao=i.screenX-hi.screenX,br=i.screenY-hi.screenY):br=Ao=0,hi=i),Ao)},movementY:function(i){return"movementY"in i?i.movementY:br}}),Ro=Vt(fs),il=ue({},fs,{dataTransfer:0}),Ju=Vt(il),Po=ue({},ar,{relatedTarget:0}),Co=Vt(Po),Zu=ue({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Or=Vt(Zu),ec=ue({},$n,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),tc=Vt(ec),nc=ue({},$n,{data:0}),sl=Vt(nc),ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ic(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=rc[i])?!!s[i]:!1}function lr(){return ic}var c=ue({},ar,{key:function(i){if(i.key){var s=ko[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=To(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Qt[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(i){return i.type==="keypress"?To(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?To(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Vt(c),y=ue({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Vt(y),M=ue({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),q=Vt(M),te=ue({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Vt(te),wt=ue({},fs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Vt(wt),Pt=[9,13,27,32],dt=d&&"CompositionEvent"in window,An=null;d&&"documentMode"in document&&(An=document.documentMode);var pn=d&&"TextEvent"in window&&!An,ps=d&&(!dt||An&&8<An&&11>=An),xo=" ",_g=!1;function yg(i,s){switch(i){case"keyup":return Pt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var No=!1;function M0(i,s){switch(i){case"compositionend":return vg(s);case"keypress":return s.which!==32?null:(_g=!0,xo);case"textInput":return i=s.data,i===xo&&_g?null:i;default:return null}}function F0(i,s){if(No)return i==="compositionend"||!dt&&yg(i,s)?(i=nl(),nn=Io=fn=null,No=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ps&&s.locale!=="ko"?null:s.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!U0[i.type]:s==="textarea"}function wg(i,s,l,h){rr(h),s=uc(s,"onChange"),0<s.length&&(l=new So("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var ol=null,al=null;function j0(i){Ug(i,0)}function sc(i){var s=Lo(i);if(io(s))return i}function B0(i,s){if(i==="change")return s}var Ig=!1;if(d){var Od;if(d){var Ld="oninput"in document;if(!Ld){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Ld=typeof Tg.oninput=="function"}Od=Ld}else Od=!1;Ig=Od&&(!document.documentMode||9<document.documentMode)}function Sg(){ol&&(ol.detachEvent("onpropertychange",Ag),al=ol=null)}function Ag(i){if(i.propertyName==="value"&&sc(al)){var s=[];wg(s,al,i,uo(i)),Ha(j0,s)}}function z0(i,s,l){i==="focusin"?(Sg(),ol=s,al=l,ol.attachEvent("onpropertychange",Ag)):i==="focusout"&&Sg()}function $0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return sc(al)}function q0(i,s){if(i==="click")return sc(s)}function W0(i,s){if(i==="input"||i==="change")return sc(s)}function K0(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var qn=typeof Object.is=="function"?Object.is:K0;function ll(i,s){if(qn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!qn(i[p],s[p]))return!1}return!0}function Rg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Pg(i,s){var l=Rg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rg(l)}}function Cg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Cg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function kg(){for(var i=window,s=ti();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ti(i.document)}return s}function Md(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function H0(i){var s=kg(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Cg(l.ownerDocument.documentElement,l)){if(h!==null&&Md(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!i.extend&&g>h&&(p=h,h=g,g=p),p=Pg(l,g);var E=Pg(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var G0=d&&"documentMode"in document&&11>=document.documentMode,Do=null,Fd=null,ul=null,Ud=!1;function xg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ud||Do==null||Do!==ti(h)||(h=Do,"selectionStart"in h&&Md(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ul&&ll(ul,h)||(ul=h,h=uc(Fd,"onSelect"),0<h.length&&(s=new So("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Do)))}function oc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Vo={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},jd={},Ng={};d&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function ac(i){if(jd[i])return jd[i];if(!Vo[i])return i;var s=Vo[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Ng)return jd[i]=s[l];return i}var Dg=ac("animationend"),Vg=ac("animationiteration"),bg=ac("animationstart"),Og=ac("transitionend"),Lg=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(i,s){Lg.set(i,s),a(s,[i])}for(var Bd=0;Bd<Mg.length;Bd++){var zd=Mg[Bd],Q0=zd.toLowerCase(),X0=zd[0].toUpperCase()+zd.slice(1);di(Q0,"on"+X0)}di(Dg,"onAnimationEnd"),di(Vg,"onAnimationIteration"),di(bg,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Og,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(cl));function Fg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Mu(h,s,void 0,i),i.currentTarget=null}function Ug(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var A=h[E],C=A.instance,$=A.currentTarget;if(A=A.listener,C!==g&&p.isPropagationStopped())break e;Fg(p,A,$),g=C}else for(E=0;E<h.length;E++){if(A=h[E],C=A.instance,$=A.currentTarget,A=A.listener,C!==g&&p.isPropagationStopped())break e;Fg(p,A,$),g=C}}}if(Ln)throw i=Ga,Ln=!1,Ga=null,i}function Ye(i,s){var l=s[Xd];l===void 0&&(l=s[Xd]=new Set);var h=i+"__bubble";l.has(h)||(jg(s,i,2,!1),l.add(h))}function $d(i,s,l){var h=0;s&&(h|=4),jg(l,i,h,s)}var lc="_reactListening"+Math.random().toString(36).slice(2);function hl(i){if(!i[lc]){i[lc]=!0,r.forEach(function(l){l!=="selectionchange"&&(Y0.has(l)||$d(l,!1,i),$d(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[lc]||(s[lc]=!0,$d("selectionchange",!1,s))}}function jg(i,s,l,h){switch(tl(s)){case 1:var p=Ze;break;case 4:p=Vd;break;default:p=el}l=p.bind(null,s,l,i),p=void 0,!fo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function qd(i,s,l,h,p){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var C=E.tag;if((C===3||C===4)&&(C=E.stateNode.containerInfo,C===p||C.nodeType===8&&C.parentNode===p))return;E=E.return}for(;A!==null;){if(E=ms(A),E===null)return;if(C=E.tag,C===5||C===6){h=g=E;continue e}A=A.parentNode}}h=h.return}Ha(function(){var $=g,G=uo(l),X=[];e:{var H=Lg.get(i);if(H!==void 0){var le=So,he=i;switch(i){case"keypress":if(To(l)===0)break e;case"keydown":case"keyup":le=m;break;case"focusin":he="focus",le=Co;break;case"focusout":he="blur",le=Co;break;case"beforeblur":case"afterblur":le=Co;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Ju;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=q;break;case Dg:case Vg:case bg:le=Or;break;case Og:le=$e;break;case"scroll":le=bd;break;case"wheel":le=Oe;break;case"copy":case"cut":case"paste":le=tc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=I}var fe=(s&4)!==0,ct=!fe&&i==="scroll",U=fe?H!==null?H+"Capture":null:H;fe=[];for(var D=$,B;D!==null;){B=D;var ee=B.stateNode;if(B.tag===5&&ee!==null&&(B=ee,U!==null&&(ee=ut(D,U),ee!=null&&fe.push(dl(D,ee,B)))),ct)break;D=D.return}0<fe.length&&(H=new le(H,he,null,l,G),X.push({event:H,listeners:fe}))}}if((s&7)===0){e:{if(H=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",H&&l!==ns&&(he=l.relatedTarget||l.fromElement)&&(ms(he)||he[Lr]))break e;if((le||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,le?(he=l.relatedTarget||l.toElement,le=$,he=he?ms(he):null,he!==null&&(ct=Mn(he),he!==ct||he.tag!==5&&he.tag!==6)&&(he=null)):(le=null,he=$),le!==he)){if(fe=Ro,ee="onMouseLeave",U="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(fe=I,ee="onPointerLeave",U="onPointerEnter",D="pointer"),ct=le==null?H:Lo(le),B=he==null?H:Lo(he),H=new fe(ee,D+"leave",le,l,G),H.target=ct,H.relatedTarget=B,ee=null,ms(G)===$&&(fe=new fe(U,D+"enter",he,l,G),fe.target=B,fe.relatedTarget=ct,ee=fe),ct=ee,le&&he)t:{for(fe=le,U=he,D=0,B=fe;B;B=bo(B))D++;for(B=0,ee=U;ee;ee=bo(ee))B++;for(;0<D-B;)fe=bo(fe),D--;for(;0<B-D;)U=bo(U),B--;for(;D--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=bo(fe),U=bo(U)}fe=null}else fe=null;le!==null&&Bg(X,H,le,fe,!1),he!==null&&ct!==null&&Bg(X,ct,he,fe,!0)}}e:{if(H=$?Lo($):window,le=H.nodeName&&H.nodeName.toLowerCase(),le==="select"||le==="input"&&H.type==="file")var pe=B0;else if(Eg(H))if(Ig)pe=W0;else{pe=$0;var Ee=z0}else(le=H.nodeName)&&le.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(pe=q0);if(pe&&(pe=pe(i,$))){wg(X,pe,l,G);break e}Ee&&Ee(i,H,$),i==="focusout"&&(Ee=H._wrapperState)&&Ee.controlled&&H.type==="number"&&oo(H,"number",H.value)}switch(Ee=$?Lo($):window,i){case"focusin":(Eg(Ee)||Ee.contentEditable==="true")&&(Do=Ee,Fd=$,ul=null);break;case"focusout":ul=Fd=Do=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,xg(X,l,G);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":xg(X,l,G)}var we;if(dt)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else No?yg(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(ps&&l.locale!=="ko"&&(No||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&No&&(we=nl()):(fn=G,Io="value"in fn?fn.value:fn.textContent,No=!0)),Ee=uc($,Ae),0<Ee.length&&(Ae=new sl(Ae,i,null,l,G),X.push({event:Ae,listeners:Ee}),we?Ae.data=we:(we=vg(l),we!==null&&(Ae.data=we)))),(we=pn?M0(i,l):F0(i,l))&&($=uc($,"onBeforeInput"),0<$.length&&(G=new sl("onBeforeInput","beforeinput",null,l,G),X.push({event:G,listeners:$}),G.data=we))}Ug(X,s)})}function dl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function uc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=ut(i,l),g!=null&&h.unshift(dl(i,g,p)),g=ut(i,s),g!=null&&h.push(dl(i,g,p))),i=i.return}return h}function bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Bg(i,s,l,h,p){for(var g=s._reactName,E=[];l!==null&&l!==h;){var A=l,C=A.alternate,$=A.stateNode;if(C!==null&&C===h)break;A.tag===5&&$!==null&&(A=$,p?(C=ut(l,g),C!=null&&E.unshift(dl(l,C,A))):p||(C=ut(l,g),C!=null&&E.push(dl(l,C,A)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var J0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function zg(i){return(typeof i=="string"?i:""+i).replace(J0,`
`).replace(Z0,"")}function cc(i,s,l){if(s=zg(s),zg(i)!==s&&l)throw Error(t(425))}function hc(){}var Wd=null,Kd=null;function Hd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(i){return $g.resolve(null).then(i).catch(nS)}:Gd;function nS(i){setTimeout(function(){throw i})}function Qd(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),zn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);zn(s)}function fi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function qg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),ur="__reactFiber$"+Oo,fl="__reactProps$"+Oo,Lr="__reactContainer$"+Oo,Xd="__reactEvents$"+Oo,rS="__reactListeners$"+Oo,iS="__reactHandles$"+Oo;function ms(i){var s=i[ur];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Lr]||l[ur]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=qg(i);i!==null;){if(l=i[ur])return l;i=qg(i)}return s}i=l,l=i.parentNode}return null}function pl(i){return i=i[ur]||i[Lr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Lo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function dc(i){return i[fl]||null}var Yd=[],Mo=-1;function pi(i){return{current:i}}function Je(i){0>Mo||(i.current=Yd[Mo],Yd[Mo]=null,Mo--)}function Xe(i,s){Mo++,Yd[Mo]=i.current,i.current=s}var mi={},jt=pi(mi),rn=pi(!1),gs=mi;function Fo(i,s){var l=i.type.contextTypes;if(!l)return mi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function sn(i){return i=i.childContextTypes,i!=null}function fc(){Je(rn),Je(jt)}function Wg(i,s,l){if(jt.current!==mi)throw Error(t(168));Xe(jt,s),Xe(rn,l)}function Kg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,Ue(i)||"Unknown",p));return ue({},l,h)}function pc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||mi,gs=jt.current,Xe(jt,i),Xe(rn,rn.current),!0}function Hg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Kg(i,s,gs),h.__reactInternalMemoizedMergedChildContext=i,Je(rn),Je(jt),Xe(jt,i)):Je(rn),Xe(rn,l)}var Mr=null,mc=!1,Jd=!1;function Gg(i){Mr===null?Mr=[i]:Mr.push(i)}function sS(i){mc=!0,Gg(i)}function gi(){if(!Jd&&Mr!==null){Jd=!0;var i=0,s=Ve;try{var l=Mr;for(Ve=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Mr=null,mc=!1}catch(p){throw Mr!==null&&(Mr=Mr.slice(i+1)),_o(as,gi),p}finally{Ve=s,Jd=!1}}return null}var Uo=[],jo=0,gc=null,_c=0,Rn=[],Pn=0,_s=null,Fr=1,Ur="";function ys(i,s){Uo[jo++]=_c,Uo[jo++]=gc,gc=i,_c=s}function Qg(i,s,l){Rn[Pn++]=Fr,Rn[Pn++]=Ur,Rn[Pn++]=_s,_s=i;var h=Fr;i=Ur;var p=32-Gt(h)-1;h&=~(1<<p),l+=1;var g=32-Gt(s)+p;if(30<g){var E=p-p%5;g=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Fr=1<<32-Gt(s)+p|l<<p|h,Ur=g+i}else Fr=1<<g|l<<p|h,Ur=i}function Zd(i){i.return!==null&&(ys(i,1),Qg(i,1,0))}function ef(i){for(;i===gc;)gc=Uo[--jo],Uo[jo]=null,_c=Uo[--jo],Uo[jo]=null;for(;i===_s;)_s=Rn[--Pn],Rn[Pn]=null,Ur=Rn[--Pn],Rn[Pn]=null,Fr=Rn[--Pn],Rn[Pn]=null}var mn=null,gn=null,et=!1,Wn=null;function Xg(i,s){var l=Nn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Yg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,mn=i,gn=fi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,mn=i,gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=_s!==null?{id:Fr,overflow:Ur}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Nn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,mn=i,gn=null,!0):!1;default:return!1}}function tf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function nf(i){if(et){var s=gn;if(s){var l=s;if(!Yg(i,s)){if(tf(i))throw Error(t(418));s=fi(l.nextSibling);var h=mn;s&&Yg(i,s)?Xg(h,l):(i.flags=i.flags&-4097|2,et=!1,mn=i)}}else{if(tf(i))throw Error(t(418));i.flags=i.flags&-4097|2,et=!1,mn=i}}}function Jg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;mn=i}function yc(i){if(i!==mn)return!1;if(!et)return Jg(i),et=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Hd(i.type,i.memoizedProps)),s&&(s=gn)){if(tf(i))throw Zg(),Error(t(418));for(;s;)Xg(i,s),s=fi(s.nextSibling)}if(Jg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){gn=fi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}gn=null}}else gn=mn?fi(i.stateNode.nextSibling):null;return!0}function Zg(){for(var i=gn;i;)i=fi(i.nextSibling)}function Bo(){gn=mn=null,et=!1}function rf(i){Wn===null?Wn=[i]:Wn.push(i)}var oS=ae.ReactCurrentBatchConfig;function ml(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=p.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function vc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function e_(i){var s=i._init;return s(i._payload)}function t_(i){function s(U,D){if(i){var B=U.deletions;B===null?(U.deletions=[D],U.flags|=16):B.push(D)}}function l(U,D){if(!i)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function h(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function p(U,D){return U=Si(U,D),U.index=0,U.sibling=null,U}function g(U,D,B){return U.index=B,i?(B=U.alternate,B!==null?(B=B.index,B<D?(U.flags|=2,D):B):(U.flags|=2,D)):(U.flags|=1048576,D)}function E(U){return i&&U.alternate===null&&(U.flags|=2),U}function A(U,D,B,ee){return D===null||D.tag!==6?(D=Qf(B,U.mode,ee),D.return=U,D):(D=p(D,B),D.return=U,D)}function C(U,D,B,ee){var pe=B.type;return pe===k?G(U,D,B.props.children,ee,B.key):D!==null&&(D.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Ut&&e_(pe)===D.type)?(ee=p(D,B.props),ee.ref=ml(U,D,B),ee.return=U,ee):(ee=$c(B.type,B.key,B.props,null,U.mode,ee),ee.ref=ml(U,D,B),ee.return=U,ee)}function $(U,D,B,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Xf(B,U.mode,ee),D.return=U,D):(D=p(D,B.children||[]),D.return=U,D)}function G(U,D,B,ee,pe){return D===null||D.tag!==7?(D=Rs(B,U.mode,ee,pe),D.return=U,D):(D=p(D,B),D.return=U,D)}function X(U,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Qf(""+D,U.mode,B),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return B=$c(D.type,D.key,D.props,null,U.mode,B),B.ref=ml(U,null,D),B.return=U,B;case ge:return D=Xf(D,U.mode,B),D.return=U,D;case Ut:var ee=D._init;return X(U,ee(D._payload),B)}if(Pr(D)||ve(D))return D=Rs(D,U.mode,B,null),D.return=U,D;vc(U,D)}return null}function H(U,D,B,ee){var pe=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return pe!==null?null:A(U,D,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:return B.key===pe?C(U,D,B,ee):null;case ge:return B.key===pe?$(U,D,B,ee):null;case Ut:return pe=B._init,H(U,D,pe(B._payload),ee)}if(Pr(B)||ve(B))return pe!==null?null:G(U,D,B,ee,null);vc(U,B)}return null}function le(U,D,B,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(B)||null,A(D,U,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ie:return U=U.get(ee.key===null?B:ee.key)||null,C(D,U,ee,pe);case ge:return U=U.get(ee.key===null?B:ee.key)||null,$(D,U,ee,pe);case Ut:var Ee=ee._init;return le(U,D,B,Ee(ee._payload),pe)}if(Pr(ee)||ve(ee))return U=U.get(B)||null,G(D,U,ee,pe,null);vc(D,ee)}return null}function he(U,D,B,ee){for(var pe=null,Ee=null,we=D,Ae=D=0,xt=null;we!==null&&Ae<B.length;Ae++){we.index>Ae?(xt=we,we=null):xt=we.sibling;var Fe=H(U,we,B[Ae],ee);if(Fe===null){we===null&&(we=xt);break}i&&we&&Fe.alternate===null&&s(U,we),D=g(Fe,D,Ae),Ee===null?pe=Fe:Ee.sibling=Fe,Ee=Fe,we=xt}if(Ae===B.length)return l(U,we),et&&ys(U,Ae),pe;if(we===null){for(;Ae<B.length;Ae++)we=X(U,B[Ae],ee),we!==null&&(D=g(we,D,Ae),Ee===null?pe=we:Ee.sibling=we,Ee=we);return et&&ys(U,Ae),pe}for(we=h(U,we);Ae<B.length;Ae++)xt=le(we,U,Ae,B[Ae],ee),xt!==null&&(i&&xt.alternate!==null&&we.delete(xt.key===null?Ae:xt.key),D=g(xt,D,Ae),Ee===null?pe=xt:Ee.sibling=xt,Ee=xt);return i&&we.forEach(function(Ai){return s(U,Ai)}),et&&ys(U,Ae),pe}function fe(U,D,B,ee){var pe=ve(B);if(typeof pe!="function")throw Error(t(150));if(B=pe.call(B),B==null)throw Error(t(151));for(var Ee=pe=null,we=D,Ae=D=0,xt=null,Fe=B.next();we!==null&&!Fe.done;Ae++,Fe=B.next()){we.index>Ae?(xt=we,we=null):xt=we.sibling;var Ai=H(U,we,Fe.value,ee);if(Ai===null){we===null&&(we=xt);break}i&&we&&Ai.alternate===null&&s(U,we),D=g(Ai,D,Ae),Ee===null?pe=Ai:Ee.sibling=Ai,Ee=Ai,we=xt}if(Fe.done)return l(U,we),et&&ys(U,Ae),pe;if(we===null){for(;!Fe.done;Ae++,Fe=B.next())Fe=X(U,Fe.value,ee),Fe!==null&&(D=g(Fe,D,Ae),Ee===null?pe=Fe:Ee.sibling=Fe,Ee=Fe);return et&&ys(U,Ae),pe}for(we=h(U,we);!Fe.done;Ae++,Fe=B.next())Fe=le(we,U,Ae,Fe.value,ee),Fe!==null&&(i&&Fe.alternate!==null&&we.delete(Fe.key===null?Ae:Fe.key),D=g(Fe,D,Ae),Ee===null?pe=Fe:Ee.sibling=Fe,Ee=Fe);return i&&we.forEach(function(US){return s(U,US)}),et&&ys(U,Ae),pe}function ct(U,D,B,ee){if(typeof B=="object"&&B!==null&&B.type===k&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:e:{for(var pe=B.key,Ee=D;Ee!==null;){if(Ee.key===pe){if(pe=B.type,pe===k){if(Ee.tag===7){l(U,Ee.sibling),D=p(Ee,B.props.children),D.return=U,U=D;break e}}else if(Ee.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Ut&&e_(pe)===Ee.type){l(U,Ee.sibling),D=p(Ee,B.props),D.ref=ml(U,Ee,B),D.return=U,U=D;break e}l(U,Ee);break}else s(U,Ee);Ee=Ee.sibling}B.type===k?(D=Rs(B.props.children,U.mode,ee,B.key),D.return=U,U=D):(ee=$c(B.type,B.key,B.props,null,U.mode,ee),ee.ref=ml(U,D,B),ee.return=U,U=ee)}return E(U);case ge:e:{for(Ee=B.key;D!==null;){if(D.key===Ee)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){l(U,D.sibling),D=p(D,B.children||[]),D.return=U,U=D;break e}else{l(U,D);break}else s(U,D);D=D.sibling}D=Xf(B,U.mode,ee),D.return=U,U=D}return E(U);case Ut:return Ee=B._init,ct(U,D,Ee(B._payload),ee)}if(Pr(B))return he(U,D,B,ee);if(ve(B))return fe(U,D,B,ee);vc(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(l(U,D.sibling),D=p(D,B),D.return=U,U=D):(l(U,D),D=Qf(B,U.mode,ee),D.return=U,U=D),E(U)):l(U,D)}return ct}var zo=t_(!0),n_=t_(!1),Ec=pi(null),wc=null,$o=null,sf=null;function of(){sf=$o=wc=null}function af(i){var s=Ec.current;Je(Ec),i._currentValue=s}function lf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function qo(i,s){wc=i,sf=$o=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(on=!0),i.firstContext=null)}function Cn(i){var s=i._currentValue;if(sf!==i)if(i={context:i,memoizedValue:s,next:null},$o===null){if(wc===null)throw Error(t(308));$o=i,wc.dependencies={lanes:0,firstContext:i}}else $o=$o.next=i;return s}var vs=null;function uf(i){vs===null?vs=[i]:vs.push(i)}function r_(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,uf(s)):(l.next=p.next,p.next=l),s.interleaved=l,jr(i,h)}function jr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var _i=!1;function cf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Br(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function yi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Me&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,jr(i,l)}return p=h.interleaved,p===null?(s.next=s,uf(h)):(s.next=p.next,p.next=s),h.interleaved=s,jr(i,l)}function Ic(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,ai(i,l)}}function s_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Tc(i,s,l,h){var p=i.updateQueue;_i=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var C=A,$=C.next;C.next=null,E===null?g=$:E.next=$,E=C;var G=i.alternate;G!==null&&(G=G.updateQueue,A=G.lastBaseUpdate,A!==E&&(A===null?G.firstBaseUpdate=$:A.next=$,G.lastBaseUpdate=C))}if(g!==null){var X=p.baseState;E=0,G=$=C=null,A=g;do{var H=A.lane,le=A.eventTime;if((h&H)===H){G!==null&&(G=G.next={eventTime:le,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=i,fe=A;switch(H=s,le=l,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){X=he.call(le,X,H);break e}X=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,H=typeof he=="function"?he.call(le,X,H):he,H==null)break e;X=ue({},X,H);break e;case 2:_i=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,H=p.effects,H===null?p.effects=[A]:H.push(A))}else le={eventTime:le,lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},G===null?($=G=le,C=X):G=G.next=le,E|=H;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;H=A,A=H.next,H.next=null,p.lastBaseUpdate=H,p.shared.pending=null}}while(!0);if(G===null&&(C=X),p.baseState=C,p.firstBaseUpdate=$,p.lastBaseUpdate=G,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Is|=E,i.lanes=E,i.memoizedState=X}}function o_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var gl={},cr=pi(gl),_l=pi(gl),yl=pi(gl);function Es(i){if(i===gl)throw Error(t(174));return i}function hf(i,s){switch(Xe(yl,s),Xe(_l,i),Xe(cr,gl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Et(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Et(s,i)}Je(cr),Xe(cr,s)}function Wo(){Je(cr),Je(_l),Je(yl)}function a_(i){Es(yl.current);var s=Es(cr.current),l=Et(s,i.type);s!==l&&(Xe(_l,i),Xe(cr,l))}function df(i){_l.current===i&&(Je(cr),Je(_l))}var rt=pi(0);function Sc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ff=[];function pf(){for(var i=0;i<ff.length;i++)ff[i]._workInProgressVersionPrimary=null;ff.length=0}var Ac=ae.ReactCurrentDispatcher,mf=ae.ReactCurrentBatchConfig,ws=0,it=null,It=null,Ct=null,Rc=!1,vl=!1,El=0,aS=0;function Bt(){throw Error(t(321))}function gf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!qn(i[l],s[l]))return!1;return!0}function _f(i,s,l,h,p,g){if(ws=g,it=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ac.current=i===null||i.memoizedState===null?hS:dS,i=l(h,p),vl){g=0;do{if(vl=!1,El=0,25<=g)throw Error(t(301));g+=1,Ct=It=null,s.updateQueue=null,Ac.current=fS,i=l(h,p)}while(vl)}if(Ac.current=kc,s=It!==null&&It.next!==null,ws=0,Ct=It=it=null,Rc=!1,s)throw Error(t(300));return i}function yf(){var i=El!==0;return El=0,i}function hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?it.memoizedState=Ct=i:Ct=Ct.next=i,Ct}function kn(){if(It===null){var i=it.alternate;i=i!==null?i.memoizedState:null}else i=It.next;var s=Ct===null?it.memoizedState:Ct.next;if(s!==null)Ct=s,It=i;else{if(i===null)throw Error(t(310));It=i,i={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Ct===null?it.memoizedState=Ct=i:Ct=Ct.next=i}return Ct}function wl(i,s){return typeof s=="function"?s(i):s}function vf(i){var s=kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=It,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var A=E=null,C=null,$=g;do{var G=$.lane;if((ws&G)===G)C!==null&&(C=C.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var X={lane:G,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};C===null?(A=C=X,E=h):C=C.next=X,it.lanes|=G,Is|=G}$=$.next}while($!==null&&$!==g);C===null?E=h:C.next=A,qn(h,s.memoizedState)||(on=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=C,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do g=p.lane,it.lanes|=g,Is|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Ef(i){var s=kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do g=i(g,E.action),E=E.next;while(E!==p);qn(g,s.memoizedState)||(on=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function l_(){}function u_(i,s){var l=it,h=kn(),p=s(),g=!qn(h.memoizedState,p);if(g&&(h.memoizedState=p,on=!0),h=h.queue,wf(d_.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,Il(9,h_.bind(null,l,h,p,s),void 0,null),kt===null)throw Error(t(349));(ws&30)!==0||c_(l,s,p)}return p}function c_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function h_(i,s,l,h){s.value=l,s.getSnapshot=h,f_(s)&&p_(i)}function d_(i,s,l){return l(function(){f_(s)&&p_(i)})}function f_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!qn(i,l)}catch{return!0}}function p_(i){var s=jr(i,1);s!==null&&Qn(s,i,1,-1)}function m_(i){var s=hr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:i},s.queue=i,i=i.dispatch=cS.bind(null,it,i),[s.memoizedState,i]}function Il(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function g_(){return kn().memoizedState}function Pc(i,s,l,h){var p=hr();it.flags|=i,p.memoizedState=Il(1|s,l,void 0,h===void 0?null:h)}function Cc(i,s,l,h){var p=kn();h=h===void 0?null:h;var g=void 0;if(It!==null){var E=It.memoizedState;if(g=E.destroy,h!==null&&gf(h,E.deps)){p.memoizedState=Il(s,l,g,h);return}}it.flags|=i,p.memoizedState=Il(1|s,l,g,h)}function __(i,s){return Pc(8390656,8,i,s)}function wf(i,s){return Cc(2048,8,i,s)}function y_(i,s){return Cc(4,2,i,s)}function v_(i,s){return Cc(4,4,i,s)}function E_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function w_(i,s,l){return l=l!=null?l.concat([i]):null,Cc(4,4,E_.bind(null,s,i),l)}function If(){}function I_(i,s){var l=kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&gf(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function T_(i,s){var l=kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&gf(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function S_(i,s,l){return(ws&21)===0?(i.baseState&&(i.baseState=!1,on=!0),i.memoizedState=l):(qn(l,s)||(l=cs(),it.lanes|=l,Is|=l,i.baseState=!0),s)}function lS(i,s){var l=Ve;Ve=l!==0&&4>l?l:4,i(!0);var h=mf.transition;mf.transition={};try{i(!1),s()}finally{Ve=l,mf.transition=h}}function A_(){return kn().memoizedState}function uS(i,s,l){var h=Ii(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},R_(i))P_(s,l);else if(l=r_(i,s,l,h),l!==null){var p=Yt();Qn(l,i,h,p),C_(l,s,h)}}function cS(i,s,l){var h=Ii(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(R_(i))P_(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,l);if(p.hasEagerState=!0,p.eagerState=A,qn(A,E)){var C=s.interleaved;C===null?(p.next=p,uf(s)):(p.next=C.next,C.next=p),s.interleaved=p;return}}catch{}finally{}l=r_(i,s,p,h),l!==null&&(p=Yt(),Qn(l,i,h,p),C_(l,s,h))}}function R_(i){var s=i.alternate;return i===it||s!==null&&s===it}function P_(i,s){vl=Rc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function C_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,ai(i,l)}}var kc={readContext:Cn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},hS={readContext:Cn,useCallback:function(i,s){return hr().memoizedState=[i,s===void 0?null:s],i},useContext:Cn,useEffect:__,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Pc(4194308,4,E_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Pc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Pc(4,2,i,s)},useMemo:function(i,s){var l=hr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=hr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=uS.bind(null,it,i),[h.memoizedState,i]},useRef:function(i){var s=hr();return i={current:i},s.memoizedState=i},useState:m_,useDebugValue:If,useDeferredValue:function(i){return hr().memoizedState=i},useTransition:function(){var i=m_(!1),s=i[0];return i=lS.bind(null,i[1]),hr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=it,p=hr();if(et){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kt===null)throw Error(t(349));(ws&30)!==0||c_(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,__(d_.bind(null,h,g,i),[i]),h.flags|=2048,Il(9,h_.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=hr(),s=kt.identifierPrefix;if(et){var l=Ur,h=Fr;l=(h&~(1<<32-Gt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=El++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=aS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},dS={readContext:Cn,useCallback:I_,useContext:Cn,useEffect:wf,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:v_,useMemo:T_,useReducer:vf,useRef:g_,useState:function(){return vf(wl)},useDebugValue:If,useDeferredValue:function(i){var s=kn();return S_(s,It.memoizedState,i)},useTransition:function(){var i=vf(wl)[0],s=kn().memoizedState;return[i,s]},useMutableSource:l_,useSyncExternalStore:u_,useId:A_,unstable_isNewReconciler:!1},fS={readContext:Cn,useCallback:I_,useContext:Cn,useEffect:wf,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:v_,useMemo:T_,useReducer:Ef,useRef:g_,useState:function(){return Ef(wl)},useDebugValue:If,useDeferredValue:function(i){var s=kn();return It===null?s.memoizedState=i:S_(s,It.memoizedState,i)},useTransition:function(){var i=Ef(wl)[0],s=kn().memoizedState;return[i,s]},useMutableSource:l_,useSyncExternalStore:u_,useId:A_,unstable_isNewReconciler:!1};function Kn(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Tf(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:ue({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var xc={isMounted:function(i){return(i=i._reactInternals)?Mn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Yt(),p=Ii(i),g=Br(h,p);g.payload=s,l!=null&&(g.callback=l),s=yi(i,g,p),s!==null&&(Qn(s,i,p,h),Ic(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Yt(),p=Ii(i),g=Br(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=yi(i,g,p),s!==null&&(Qn(s,i,p,h),Ic(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Yt(),h=Ii(i),p=Br(l,h);p.tag=2,s!=null&&(p.callback=s),s=yi(i,p,h),s!==null&&(Qn(s,i,h,l),Ic(s,i,h))}};function k_(i,s,l,h,p,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!ll(l,h)||!ll(p,g):!0}function x_(i,s,l){var h=!1,p=mi,g=s.contextType;return typeof g=="object"&&g!==null?g=Cn(g):(p=sn(s)?gs:jt.current,h=s.contextTypes,g=(h=h!=null)?Fo(i,p):mi),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),s}function N_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&xc.enqueueReplaceState(s,s.state,null)}function Sf(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},cf(i);var g=s.contextType;typeof g=="object"&&g!==null?p.context=Cn(g):(g=sn(s)?gs:jt.current,p.context=Fo(i,g)),p.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Tf(i,s,g,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&xc.enqueueReplaceState(p,p.state,null),Tc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ko(i,s){try{var l="",h=s;do l+=ke(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:p,digest:null}}function Af(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Rf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function D_(i,s,l){l=Br(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Mc||(Mc=!0,Bf=h),Rf(i,s)},l}function V_(i,s,l){l=Br(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Rf(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Rf(i,s),typeof h!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function b_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new pS;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=CS.bind(null,i,s,l),s.then(i,i))}function O_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function L_(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Br(-1,1),s.tag=2,yi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var mS=ae.ReactCurrentOwner,on=!1;function Xt(i,s,l,h){s.child=i===null?n_(s,null,l,h):zo(s,i.child,l,h)}function M_(i,s,l,h,p){l=l.render;var g=s.ref;return qo(s,p),h=_f(i,s,l,h,g,p),l=yf(),i!==null&&!on?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,zr(i,s,p)):(et&&l&&Zd(s),s.flags|=1,Xt(i,s,h,p),s.child)}function F_(i,s,l,h,p){if(i===null){var g=l.type;return typeof g=="function"&&!Gf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,U_(i,s,g,h,p)):(i=$c(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&p)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:ll,l(E,h)&&i.ref===s.ref)return zr(i,s,p)}return s.flags|=1,i=Si(g,h),i.ref=s.ref,i.return=s,s.child=i}function U_(i,s,l,h,p){if(i!==null){var g=i.memoizedProps;if(ll(g,h)&&i.ref===s.ref)if(on=!1,s.pendingProps=h=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(on=!0);else return s.lanes=i.lanes,zr(i,s,p)}return Pf(i,s,l,h,p)}function j_(i,s,l){var h=s.pendingProps,p=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Go,_n),_n|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Xe(Go,_n),_n|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Xe(Go,_n),_n|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Xe(Go,_n),_n|=h;return Xt(i,s,p,l),s.child}function B_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Pf(i,s,l,h,p){var g=sn(l)?gs:jt.current;return g=Fo(s,g),qo(s,p),l=_f(i,s,l,h,g,p),h=yf(),i!==null&&!on?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,zr(i,s,p)):(et&&h&&Zd(s),s.flags|=1,Xt(i,s,l,p),s.child)}function z_(i,s,l,h,p){if(sn(l)){var g=!0;pc(s)}else g=!1;if(qo(s,p),s.stateNode===null)Dc(i,s),x_(s,l,h),Sf(s,l,h,p),h=!0;else if(i===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var C=E.context,$=l.contextType;typeof $=="object"&&$!==null?$=Cn($):($=sn(l)?gs:jt.current,$=Fo(s,$));var G=l.getDerivedStateFromProps,X=typeof G=="function"||typeof E.getSnapshotBeforeUpdate=="function";X||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||C!==$)&&N_(s,E,h,$),_i=!1;var H=s.memoizedState;E.state=H,Tc(s,h,E,p),C=s.memoizedState,A!==h||H!==C||rn.current||_i?(typeof G=="function"&&(Tf(s,l,G,h),C=s.memoizedState),(A=_i||k_(s,l,A,h,H,C,$))?(X||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=C),E.props=h,E.state=C,E.context=$,h=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,i_(i,s),A=s.memoizedProps,$=s.type===s.elementType?A:Kn(s.type,A),E.props=$,X=s.pendingProps,H=E.context,C=l.contextType,typeof C=="object"&&C!==null?C=Cn(C):(C=sn(l)?gs:jt.current,C=Fo(s,C));var le=l.getDerivedStateFromProps;(G=typeof le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==X||H!==C)&&N_(s,E,h,C),_i=!1,H=s.memoizedState,E.state=H,Tc(s,h,E,p);var he=s.memoizedState;A!==X||H!==he||rn.current||_i?(typeof le=="function"&&(Tf(s,l,le,h),he=s.memoizedState),($=_i||k_(s,l,$,h,H,he,C)||!1)?(G||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,he,C),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,he,C)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=he),E.props=h,E.state=he,E.context=C,h=$):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(s.flags|=1024),h=!1)}return Cf(i,s,l,h,g,p)}function Cf(i,s,l,h,p,g){B_(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return p&&Hg(s,l,!1),zr(i,s,g);h=s.stateNode,mS.current=s;var A=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=zo(s,i.child,null,g),s.child=zo(s,null,A,g)):Xt(i,s,A,g),s.memoizedState=h.state,p&&Hg(s,l,!0),s.child}function $_(i){var s=i.stateNode;s.pendingContext?Wg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Wg(i,s.context,!1),hf(i,s.containerInfo)}function q_(i,s,l,h,p){return Bo(),rf(p),s.flags|=256,Xt(i,s,l,h),s.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function xf(i){return{baseLanes:i,cachePool:null,transitions:null}}function W_(i,s,l){var h=s.pendingProps,p=rt.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Xe(rt,p&1),i===null)return nf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=qc(E,h,0,null),i=Rs(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=xf(l),s.memoizedState=kf,i):Nf(s,E));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return gS(i,s,E,h,A,p,l);if(g){g=h.fallback,E=s.mode,p=i.child,A=p.sibling;var C={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=C,s.deletions=null):(h=Si(p,C),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?g=Si(A,g):(g=Rs(g,E,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=i.child.memoizedState,E=E===null?xf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=i.childLanes&~l,s.memoizedState=kf,h}return g=i.child,i=g.sibling,h=Si(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function Nf(i,s){return s=qc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Nc(i,s,l,h){return h!==null&&rf(h),zo(s,i.child,null,l),i=Nf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function gS(i,s,l,h,p,g,E){if(l)return s.flags&256?(s.flags&=-257,h=Af(Error(t(422))),Nc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=qc({mode:"visible",children:h.children},p,0,null),g=Rs(g,p,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&zo(s,i.child,null,E),s.child.memoizedState=xf(E),s.memoizedState=kf,g);if((s.mode&1)===0)return Nc(i,s,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Af(g,h,void 0),Nc(i,s,E,h)}if(A=(E&i.childLanes)!==0,on||A){if(h=kt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,jr(i,p),Qn(h,i,p,-1))}return Hf(),h=Af(Error(t(421))),Nc(i,s,E,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=kS.bind(null,i),p._reactRetry=s,null):(i=g.treeContext,gn=fi(p.nextSibling),mn=s,et=!0,Wn=null,i!==null&&(Rn[Pn++]=Fr,Rn[Pn++]=Ur,Rn[Pn++]=_s,Fr=i.id,Ur=i.overflow,_s=s),s=Nf(s,h.children),s.flags|=4096,s)}function K_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),lf(i.return,s,l)}function Df(i,s,l,h,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function H_(i,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(Xt(i,s,h.children,l),h=rt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&K_(i,l,s);else if(i.tag===19)K_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Xe(rt,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Sc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Df(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Sc(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Df(s,!0,l,null,g);break;case"together":Df(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Dc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function zr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Is|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Si(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Si(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function _S(i,s,l){switch(s.tag){case 3:$_(s),Bo();break;case 5:a_(s);break;case 1:sn(s.type)&&pc(s);break;case 4:hf(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Xe(Ec,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Xe(rt,rt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?W_(i,s,l):(Xe(rt,rt.current&1),i=zr(i,s,l),i!==null?i.sibling:null);Xe(rt,rt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return H_(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(rt,rt.current),h)break;return null;case 22:case 23:return s.lanes=0,j_(i,s,l)}return zr(i,s,l)}var G_,Vf,Q_,X_;G_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Vf=function(){},Q_=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,Es(cr.current);var g=null;switch(l){case"input":p=Zi(i,p),h=Zi(i,h),g=[];break;case"select":p=ue({},p,{value:void 0}),h=ue({},h,{value:void 0}),g=[];break;case"textarea":p=Ma(i,p),h=Ma(i,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=hc)}$a(l,h);var E;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var A=p[$];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var C=h[$];if(A=p!=null?p[$]:void 0,h.hasOwnProperty($)&&C!==A&&(C!=null||A!=null))if($==="style")if(A){for(E in A)!A.hasOwnProperty(E)||C&&C.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in C)C.hasOwnProperty(E)&&A[E]!==C[E]&&(l||(l={}),l[E]=C[E])}else l||(g||(g=[]),g.push($,l)),l=C;else $==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,A=A?A.__html:void 0,C!=null&&A!==C&&(g=g||[]).push($,C)):$==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push($,""+C):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(C!=null&&$==="onScroll"&&Ye("scroll",i),g||A===C||(g=[])):(g=g||[]).push($,C))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},X_=function(i,s,l,h){l!==h&&(s.flags|=4)};function Tl(i,s){if(!et)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function zt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function yS(i,s,l){var h=s.pendingProps;switch(ef(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return sn(s.type)&&fc(),zt(s),null;case 3:return h=s.stateNode,Wo(),Je(rn),Je(jt),pf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(yc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Wn!==null&&(qf(Wn),Wn=null))),Vf(i,s),zt(s),null;case 5:df(s);var p=Es(yl.current);if(l=s.type,i!==null&&s.stateNode!=null)Q_(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(i=Es(cr.current),yc(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[ur]=s,h[fl]=g,i=(s.mode&1)!==0,l){case"dialog":Ye("cancel",h),Ye("close",h);break;case"iframe":case"object":case"embed":Ye("load",h);break;case"video":case"audio":for(p=0;p<cl.length;p++)Ye(cl[p],h);break;case"source":Ye("error",h);break;case"img":case"image":case"link":Ye("error",h),Ye("load",h);break;case"details":Ye("toggle",h);break;case"input":so(h,g),Ye("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ye("invalid",h);break;case"textarea":ao(h,g),Ye("invalid",h)}$a(l,g),p=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&cc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&cc(h.textContent,A,i),p=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Ye("scroll",h)}switch(l){case"input":Rr(h),Lu(h,g,!0);break;case"textarea":Rr(h),Fa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=hc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=vt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[ur]=s,i[fl]=h,G_(i,s,!1,!1),s.stateNode=i;e:{switch(E=qa(l,h),l){case"dialog":Ye("cancel",i),Ye("close",i),p=h;break;case"iframe":case"object":case"embed":Ye("load",i),p=h;break;case"video":case"audio":for(p=0;p<cl.length;p++)Ye(cl[p],i);p=h;break;case"source":Ye("error",i),p=h;break;case"img":case"image":case"link":Ye("error",i),Ye("load",i),p=h;break;case"details":Ye("toggle",i),p=h;break;case"input":so(i,h),p=Zi(i,h),Ye("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ue({},h,{value:void 0}),Ye("invalid",i);break;case"textarea":ao(i,h),p=Ma(i,h),Ye("invalid",i);break;default:p=h}$a(l,p),A=p;for(g in A)if(A.hasOwnProperty(g)){var C=A[g];g==="style"?Ba(i,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ua(i,C)):g==="children"?typeof C=="string"?(l!=="textarea"||C!=="")&&ni(i,C):typeof C=="number"&&ni(i,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ye("scroll",i):C!=null&&Y(i,g,C,E))}switch(l){case"input":Rr(i),Lu(i,h,!1);break;case"textarea":Rr(i),Fa(i);break;case"option":h.value!=null&&i.setAttribute("value",""+je(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?Cr(i,!!h.multiple,g,!1):h.defaultValue!=null&&Cr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=hc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(i&&s.stateNode!=null)X_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Es(yl.current),Es(cr.current),yc(s)){if(h=s.stateNode,l=s.memoizedProps,h[ur]=s,(g=h.nodeValue!==l)&&(i=mn,i!==null))switch(i.tag){case 3:cc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&cc(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[ur]=s,s.stateNode=h}return zt(s),null;case 13:if(Je(rt),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(et&&gn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Zg(),Bo(),s.flags|=98560,g=!1;else if(g=yc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ur]=s}else Bo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zt(s),g=!1}else Wn!==null&&(qf(Wn),Wn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(rt.current&1)!==0?Tt===0&&(Tt=3):Hf())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return Wo(),Vf(i,s),i===null&&hl(s.stateNode.containerInfo),zt(s),null;case 10:return af(s.type._context),zt(s),null;case 17:return sn(s.type)&&fc(),zt(s),null;case 19:if(Je(rt),g=s.memoizedState,g===null)return zt(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)Tl(g,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=Sc(i),E!==null){for(s.flags|=128,Tl(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,i=E.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xe(rt,rt.current&1|2),s.child}i=i.sibling}g.tail!==null&&Qe()>Qo&&(s.flags|=128,h=!0,Tl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Sc(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Tl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!et)return zt(s),null}else 2*Qe()-g.renderingStartTime>Qo&&l!==1073741824&&(s.flags|=128,h=!0,Tl(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Qe(),s.sibling=null,l=rt.current,Xe(rt,h?l&1|2:l&1),s):(zt(s),null);case 22:case 23:return Kf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(_n&1073741824)!==0&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function vS(i,s){switch(ef(s),s.tag){case 1:return sn(s.type)&&fc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Wo(),Je(rn),Je(jt),pf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return df(s),null;case 13:if(Je(rt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Bo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Je(rt),null;case 4:return Wo(),null;case 10:return af(s.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Vc=!1,$t=!1,ES=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Ho(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ot(i,s,h)}else l.current=null}function bf(i,s,l){try{l()}catch(h){ot(i,s,h)}}var Y_=!1;function wS(i,s){if(Wd=ci,i=kg(),Md(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,A=-1,C=-1,$=0,G=0,X=i,H=null;t:for(;;){for(var le;X!==l||p!==0&&X.nodeType!==3||(A=E+p),X!==g||h!==0&&X.nodeType!==3||(C=E+h),X.nodeType===3&&(E+=X.nodeValue.length),(le=X.firstChild)!==null;)H=X,X=le;for(;;){if(X===i)break t;if(H===l&&++$===p&&(A=E),H===g&&++G===h&&(C=E),(le=X.nextSibling)!==null)break;X=H,H=X.parentNode}X=le}l=A===-1||C===-1?null:{start:A,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Kd={focusedElem:i,selectionRange:l},ci=!1,ce=s;ce!==null;)if(s=ce,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ce=i;else for(;ce!==null;){s=ce;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,ct=he.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Kn(s.type,fe),ct);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){ot(s,s.return,ee)}if(i=s.sibling,i!==null){i.return=s.return,ce=i;break}ce=s.return}return he=Y_,Y_=!1,he}function Sl(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&bf(s,l,g)}p=p.next}while(p!==h)}}function bc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Of(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function J_(i){var s=i.alternate;s!==null&&(i.alternate=null,J_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ur],delete s[fl],delete s[Xd],delete s[rS],delete s[iS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Z_(i){return i.tag===5||i.tag===3||i.tag===4}function ey(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Z_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Lf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=hc));else if(h!==4&&(i=i.child,i!==null))for(Lf(i,s,l),i=i.sibling;i!==null;)Lf(i,s,l),i=i.sibling}function Mf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Mf(i,s,l),i=i.sibling;i!==null;)Mf(i,s,l),i=i.sibling}var bt=null,Hn=!1;function vi(i,s,l){for(l=l.child;l!==null;)ty(i,s,l),l=l.sibling}function ty(i,s,l){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 5:$t||Ho(l,s);case 6:var h=bt,p=Hn;bt=null,vi(i,s,l),bt=h,Hn=p,bt!==null&&(Hn?(i=bt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):bt.removeChild(l.stateNode));break;case 18:bt!==null&&(Hn?(i=bt,l=l.stateNode,i.nodeType===8?Qd(i.parentNode,l):i.nodeType===1&&Qd(i,l),zn(i)):Qd(bt,l.stateNode));break;case 4:h=bt,p=Hn,bt=l.stateNode.containerInfo,Hn=!0,vi(i,s,l),bt=h,Hn=p;break;case 0:case 11:case 14:case 15:if(!$t&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&bf(l,s,E),p=p.next}while(p!==h)}vi(i,s,l);break;case 1:if(!$t&&(Ho(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){ot(l,s,A)}vi(i,s,l);break;case 21:vi(i,s,l);break;case 22:l.mode&1?($t=(h=$t)||l.memoizedState!==null,vi(i,s,l),$t=h):vi(i,s,l);break;default:vi(i,s,l)}}function ny(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new ES),s.forEach(function(h){var p=xS.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Gn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=i,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:bt=A.stateNode,Hn=!1;break e;case 3:bt=A.stateNode.containerInfo,Hn=!0;break e;case 4:bt=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if(bt===null)throw Error(t(160));ty(g,E,p),bt=null,Hn=!1;var C=p.alternate;C!==null&&(C.return=null),p.return=null}catch($){ot(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ry(s,i),s=s.sibling}function ry(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Gn(s,i),dr(i),h&4){try{Sl(3,i,i.return),bc(3,i)}catch(fe){ot(i,i.return,fe)}try{Sl(5,i,i.return)}catch(fe){ot(i,i.return,fe)}}break;case 1:Gn(s,i),dr(i),h&512&&l!==null&&Ho(l,l.return);break;case 5:if(Gn(s,i),dr(i),h&512&&l!==null&&Ho(l,l.return),i.flags&32){var p=i.stateNode;try{ni(p,"")}catch(fe){ot(i,i.return,fe)}}if(h&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,E=l!==null?l.memoizedProps:g,A=i.type,C=i.updateQueue;if(i.updateQueue=null,C!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Oa(p,g),qa(A,E);var $=qa(A,g);for(E=0;E<C.length;E+=2){var G=C[E],X=C[E+1];G==="style"?Ba(p,X):G==="dangerouslySetInnerHTML"?Ua(p,X):G==="children"?ni(p,X):Y(p,G,X,$)}switch(A){case"input":La(p,g);break;case"textarea":lo(p,g);break;case"select":var H=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var le=g.value;le!=null?Cr(p,!!g.multiple,le,!1):H!==!!g.multiple&&(g.defaultValue!=null?Cr(p,!!g.multiple,g.defaultValue,!0):Cr(p,!!g.multiple,g.multiple?[]:"",!1))}p[fl]=g}catch(fe){ot(i,i.return,fe)}}break;case 6:if(Gn(s,i),dr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(fe){ot(i,i.return,fe)}}break;case 3:if(Gn(s,i),dr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{zn(s.containerInfo)}catch(fe){ot(i,i.return,fe)}break;case 4:Gn(s,i),dr(i);break;case 13:Gn(s,i),dr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(jf=Qe())),h&4&&ny(i);break;case 22:if(G=l!==null&&l.memoizedState!==null,i.mode&1?($t=($=$t)||G,Gn(s,i),$t=$):Gn(s,i),dr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!G&&(i.mode&1)!==0)for(ce=i,G=i.child;G!==null;){for(X=ce=G;ce!==null;){switch(H=ce,le=H.child,H.tag){case 0:case 11:case 14:case 15:Sl(4,H,H.return);break;case 1:Ho(H,H.return);var he=H.stateNode;if(typeof he.componentWillUnmount=="function"){h=H,l=H.return;try{s=h,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){ot(h,l,fe)}}break;case 5:Ho(H,H.return);break;case 22:if(H.memoizedState!==null){oy(X);continue}}le!==null?(le.return=H,ce=le):oy(X)}G=G.sibling}e:for(G=null,X=i;;){if(X.tag===5){if(G===null){G=X;try{p=X.stateNode,$?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=X.stateNode,C=X.memoizedProps.style,E=C!=null&&C.hasOwnProperty("display")?C.display:null,A.style.display=ja("display",E))}catch(fe){ot(i,i.return,fe)}}}else if(X.tag===6){if(G===null)try{X.stateNode.nodeValue=$?"":X.memoizedProps}catch(fe){ot(i,i.return,fe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===i)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===i)break e;for(;X.sibling===null;){if(X.return===null||X.return===i)break e;G===X&&(G=null),X=X.return}G===X&&(G=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Gn(s,i),dr(i),h&4&&ny(i);break;case 21:break;default:Gn(s,i),dr(i)}}function dr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Z_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ni(p,""),h.flags&=-33);var g=ey(i);Mf(i,g,p);break;case 3:case 4:var E=h.stateNode.containerInfo,A=ey(i);Lf(i,A,E);break;default:throw Error(t(161))}}catch(C){ot(i,i.return,C)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function IS(i,s,l){ce=i,iy(i)}function iy(i,s,l){for(var h=(i.mode&1)!==0;ce!==null;){var p=ce,g=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Vc;if(!E){var A=p.alternate,C=A!==null&&A.memoizedState!==null||$t;A=Vc;var $=$t;if(Vc=E,($t=C)&&!$)for(ce=p;ce!==null;)E=ce,C=E.child,E.tag===22&&E.memoizedState!==null?ay(p):C!==null?(C.return=E,ce=C):ay(p);for(;g!==null;)ce=g,iy(g),g=g.sibling;ce=p,Vc=A,$t=$}sy(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,ce=g):sy(i)}}function sy(i){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:$t||bc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!$t)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Kn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&o_(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}o_(s,E,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&l.focus();break;case"img":C.src&&(l.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var G=$.memoizedState;if(G!==null){var X=G.dehydrated;X!==null&&zn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||s.flags&512&&Of(s)}catch(H){ot(s,s.return,H)}}if(s===i){ce=null;break}if(l=s.sibling,l!==null){l.return=s.return,ce=l;break}ce=s.return}}function oy(i){for(;ce!==null;){var s=ce;if(s===i){ce=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ce=l;break}ce=s.return}}function ay(i){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{bc(4,s)}catch(C){ot(s,l,C)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(C){ot(s,p,C)}}var g=s.return;try{Of(s)}catch(C){ot(s,g,C)}break;case 5:var E=s.return;try{Of(s)}catch(C){ot(s,E,C)}}}catch(C){ot(s,s.return,C)}if(s===i){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var TS=Math.ceil,Oc=ae.ReactCurrentDispatcher,Ff=ae.ReactCurrentOwner,xn=ae.ReactCurrentBatchConfig,Me=0,kt=null,ft=null,Ot=0,_n=0,Go=pi(0),Tt=0,Al=null,Is=0,Lc=0,Uf=0,Rl=null,an=null,jf=0,Qo=1/0,$r=null,Mc=!1,Bf=null,Ei=null,Fc=!1,wi=null,Uc=0,Pl=0,zf=null,jc=-1,Bc=0;function Yt(){return(Me&6)!==0?Qe():jc!==-1?jc:jc=Qe()}function Ii(i){return(i.mode&1)===0?1:(Me&2)!==0&&Ot!==0?Ot&-Ot:oS.transition!==null?(Bc===0&&(Bc=cs()),Bc):(i=Ve,i!==0||(i=window.event,i=i===void 0?16:tl(i.type)),i)}function Qn(i,s,l,h){if(50<Pl)throw Pl=0,zf=null,Error(t(185));oi(i,l,h),((Me&2)===0||i!==kt)&&(i===kt&&((Me&2)===0&&(Lc|=l),Tt===4&&Ti(i,Ot)),ln(i,h),l===1&&Me===0&&(s.mode&1)===0&&(Qo=Qe()+500,mc&&gi()))}function ln(i,s){var l=i.callbackNode;Nr(i,s);var h=us(i,i===kt?Ot:0);if(h===0)l!==null&&Xa(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Xa(l),s===1)i.tag===0?sS(uy.bind(null,i)):Gg(uy.bind(null,i)),tS(function(){(Me&6)===0&&gi()}),l=null;else{switch(li(h)){case 1:l=as;break;case 4:l=ri;break;case 16:l=Tn;break;case 536870912:l=Bu;break;default:l=Tn}l=_y(l,ly.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function ly(i,s){if(jc=-1,Bc=0,(Me&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Xo()&&i.callbackNode!==l)return null;var h=us(i,i===kt?Ot:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=zc(i,h);else{s=h;var p=Me;Me|=2;var g=hy();(kt!==i||Ot!==s)&&($r=null,Qo=Qe()+500,Ss(i,s));do try{RS();break}catch(A){cy(i,A)}while(!0);of(),Oc.current=g,Me=p,ft!==null?s=0:(kt=null,Ot=0,s=Tt)}if(s!==0){if(s===2&&(p=dn(i),p!==0&&(h=p,s=$f(i,p))),s===1)throw l=Al,Ss(i,0),Ti(i,h),ln(i,Qe()),l;if(s===6)Ti(i,h);else{if(p=i.current.alternate,(h&30)===0&&!SS(p)&&(s=zc(i,h),s===2&&(g=dn(i),g!==0&&(h=g,s=$f(i,g))),s===1))throw l=Al,Ss(i,0),Ti(i,h),ln(i,Qe()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:As(i,an,$r);break;case 3:if(Ti(i,h),(h&130023424)===h&&(s=jf+500-Qe(),10<s)){if(us(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Yt(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Gd(As.bind(null,i,an,$r),s);break}As(i,an,$r);break;case 4:if(Ti(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var E=31-Gt(h);g=1<<E,E=s[E],E>p&&(p=E),h&=~g}if(h=p,h=Qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*TS(h/1960))-h,10<h){i.timeoutHandle=Gd(As.bind(null,i,an,$r),h);break}As(i,an,$r);break;case 5:As(i,an,$r);break;default:throw Error(t(329))}}}return ln(i,Qe()),i.callbackNode===l?ly.bind(null,i):null}function $f(i,s){var l=Rl;return i.current.memoizedState.isDehydrated&&(Ss(i,s).flags|=256),i=zc(i,s),i!==2&&(s=an,an=l,s!==null&&qf(s)),i}function qf(i){an===null?an=i:an.push.apply(an,i)}function SS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!qn(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ti(i,s){for(s&=~Uf,s&=~Lc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Gt(s),h=1<<l;i[l]=-1,s&=~h}}function uy(i){if((Me&6)!==0)throw Error(t(327));Xo();var s=us(i,0);if((s&1)===0)return ln(i,Qe()),null;var l=zc(i,s);if(i.tag!==0&&l===2){var h=dn(i);h!==0&&(s=h,l=$f(i,h))}if(l===1)throw l=Al,Ss(i,0),Ti(i,s),ln(i,Qe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,As(i,an,$r),ln(i,Qe()),null}function Wf(i,s){var l=Me;Me|=1;try{return i(s)}finally{Me=l,Me===0&&(Qo=Qe()+500,mc&&gi())}}function Ts(i){wi!==null&&wi.tag===0&&(Me&6)===0&&Xo();var s=Me;Me|=1;var l=xn.transition,h=Ve;try{if(xn.transition=null,Ve=1,i)return i()}finally{Ve=h,xn.transition=l,Me=s,(Me&6)===0&&gi()}}function Kf(){_n=Go.current,Je(Go)}function Ss(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,eS(l)),ft!==null)for(l=ft.return;l!==null;){var h=l;switch(ef(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&fc();break;case 3:Wo(),Je(rn),Je(jt),pf();break;case 5:df(h);break;case 4:Wo();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:af(h.type._context);break;case 22:case 23:Kf()}l=l.return}if(kt=i,ft=i=Si(i.current,null),Ot=_n=s,Tt=0,Al=null,Uf=Lc=Is=0,an=Rl=null,vs!==null){for(s=0;s<vs.length;s++)if(l=vs[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=p,h.next=E}l.pending=h}vs=null}return i}function cy(i,s){do{var l=ft;try{if(of(),Ac.current=kc,Rc){for(var h=it.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Rc=!1}if(ws=0,Ct=It=it=null,vl=!1,El=0,Ff.current=null,l===null||l.return===null){Tt=1,Al=s,ft=null;break}e:{var g=i,E=l.return,A=l,C=s;if(s=Ot,A.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=C,G=A,X=G.tag;if((G.mode&1)===0&&(X===0||X===11||X===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var le=O_(E);if(le!==null){le.flags&=-257,L_(le,E,A,g,s),le.mode&1&&b_(g,$,s),s=le,C=$;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(C),s.updateQueue=fe}else he.add(C);break e}else{if((s&1)===0){b_(g,$,s),Hf();break e}C=Error(t(426))}}else if(et&&A.mode&1){var ct=O_(E);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),L_(ct,E,A,g,s),rf(Ko(C,A));break e}}g=C=Ko(C,A),Tt!==4&&(Tt=2),Rl===null?Rl=[g]:Rl.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=D_(g,C,s);s_(g,U);break e;case 1:A=C;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ei===null||!Ei.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=V_(g,A,s);s_(g,ee);break e}}g=g.return}while(g!==null)}fy(l)}catch(pe){s=pe,ft===l&&l!==null&&(ft=l=l.return);continue}break}while(!0)}function hy(){var i=Oc.current;return Oc.current=kc,i===null?kc:i}function Hf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),kt===null||(Is&268435455)===0&&(Lc&268435455)===0||Ti(kt,Ot)}function zc(i,s){var l=Me;Me|=2;var h=hy();(kt!==i||Ot!==s)&&($r=null,Ss(i,s));do try{AS();break}catch(p){cy(i,p)}while(!0);if(of(),Me=l,Oc.current=h,ft!==null)throw Error(t(261));return kt=null,Ot=0,Tt}function AS(){for(;ft!==null;)dy(ft)}function RS(){for(;ft!==null&&!Uu();)dy(ft)}function dy(i){var s=gy(i.alternate,i,_n);i.memoizedProps=i.pendingProps,s===null?fy(i):ft=s,Ff.current=null}function fy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=yS(l,s,_n),l!==null){ft=l;return}}else{if(l=vS(l,s),l!==null){l.flags&=32767,ft=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Tt=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=i}while(s!==null);Tt===0&&(Tt=5)}function As(i,s,l){var h=Ve,p=xn.transition;try{xn.transition=null,Ve=1,PS(i,s,l,h)}finally{xn.transition=p,Ve=h}return null}function PS(i,s,l,h){do Xo();while(wi!==null);if((Me&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(He(i,g),i===kt&&(ft=kt=null,Ot=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Fc||(Fc=!0,_y(Tn,function(){return Xo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=xn.transition,xn.transition=null;var E=Ve;Ve=1;var A=Me;Me|=4,Ff.current=null,wS(i,l),ry(l,i),H0(Kd),ci=!!Wd,Kd=Wd=null,i.current=l,IS(l),kd(),Me=A,Ve=E,xn.transition=g}else i.current=l;if(Fc&&(Fc=!1,wi=i,Uc=p),g=i.pendingLanes,g===0&&(Ei=null),zu(l.stateNode),ln(i,Qe()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Mc)throw Mc=!1,i=Bf,Bf=null,i;return(Uc&1)!==0&&i.tag!==0&&Xo(),g=i.pendingLanes,(g&1)!==0?i===zf?Pl++:(Pl=0,zf=i):Pl=0,gi(),null}function Xo(){if(wi!==null){var i=li(Uc),s=xn.transition,l=Ve;try{if(xn.transition=null,Ve=16>i?16:i,wi===null)var h=!1;else{if(i=wi,wi=null,Uc=0,(Me&6)!==0)throw Error(t(331));var p=Me;for(Me|=4,ce=i.current;ce!==null;){var g=ce,E=g.child;if((ce.flags&16)!==0){var A=g.deletions;if(A!==null){for(var C=0;C<A.length;C++){var $=A[C];for(ce=$;ce!==null;){var G=ce;switch(G.tag){case 0:case 11:case 15:Sl(8,G,g)}var X=G.child;if(X!==null)X.return=G,ce=X;else for(;ce!==null;){G=ce;var H=G.sibling,le=G.return;if(J_(G),G===$){ce=null;break}if(H!==null){H.return=le,ce=H;break}ce=le}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var ct=fe.sibling;fe.sibling=null,fe=ct}while(fe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ce=E;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Sl(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ce=U;break e}ce=g.return}}var D=i.current;for(ce=D;ce!==null;){E=ce;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,ce=B;else e:for(E=D;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:bc(9,A)}}catch(pe){ot(A,A.return,pe)}if(A===E){ce=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ce=ee;break e}ce=A.return}}if(Me=p,gi(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ls,i)}catch{}h=!0}return h}finally{Ve=l,xn.transition=s}}return!1}function py(i,s,l){s=Ko(l,s),s=D_(i,s,1),i=yi(i,s,1),s=Yt(),i!==null&&(oi(i,1,s),ln(i,s))}function ot(i,s,l){if(i.tag===3)py(i,i,l);else for(;s!==null;){if(s.tag===3){py(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ei===null||!Ei.has(h))){i=Ko(l,i),i=V_(s,i,1),s=yi(s,i,1),i=Yt(),s!==null&&(oi(s,1,i),ln(s,i));break}}s=s.return}}function CS(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Yt(),i.pingedLanes|=i.suspendedLanes&l,kt===i&&(Ot&l)===l&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>Qe()-jf?Ss(i,0):Uf|=l),ln(i,s)}function my(i,s){s===0&&((i.mode&1)===0?s=1:(s=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var l=Yt();i=jr(i,s),i!==null&&(oi(i,s,l),ln(i,l))}function kS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),my(i,l)}function xS(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),my(i,l)}var gy;gy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||rn.current)on=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return on=!1,_S(i,s,l);on=(i.flags&131072)!==0}else on=!1,et&&(s.flags&1048576)!==0&&Qg(s,_c,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Dc(i,s),i=s.pendingProps;var p=Fo(s,jt.current);qo(s,l),p=_f(null,s,h,i,p,l);var g=yf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,sn(h)?(g=!0,pc(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,cf(s),p.updater=xc,s.stateNode=p,p._reactInternals=s,Sf(s,h,i,l),s=Cf(null,s,h,!0,g,l)):(s.tag=0,et&&g&&Zd(s),Xt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Dc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=DS(h),i=Kn(h,i),p){case 0:s=Pf(null,s,h,i,l);break e;case 1:s=z_(null,s,h,i,l);break e;case 11:s=M_(null,s,h,i,l);break e;case 14:s=F_(null,s,h,Kn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Kn(h,p),Pf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Kn(h,p),z_(i,s,h,p,l);case 3:e:{if($_(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,i_(i,s),Tc(s,h,null,l);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=Ko(Error(t(423)),s),s=q_(i,s,h,l,p);break e}else if(h!==p){p=Ko(Error(t(424)),s),s=q_(i,s,h,l,p);break e}else for(gn=fi(s.stateNode.containerInfo.firstChild),mn=s,et=!0,Wn=null,l=n_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bo(),h===p){s=zr(i,s,l);break e}Xt(i,s,h,l)}s=s.child}return s;case 5:return a_(s),i===null&&nf(s),h=s.type,p=s.pendingProps,g=i!==null?i.memoizedProps:null,E=p.children,Hd(h,p)?E=null:g!==null&&Hd(h,g)&&(s.flags|=32),B_(i,s),Xt(i,s,E,l),s.child;case 6:return i===null&&nf(s),null;case 13:return W_(i,s,l);case 4:return hf(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=zo(s,null,h,l):Xt(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Kn(h,p),M_(i,s,h,p,l);case 7:return Xt(i,s,s.pendingProps,l),s.child;case 8:return Xt(i,s,s.pendingProps.children,l),s.child;case 12:return Xt(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,E=p.value,Xe(Ec,h._currentValue),h._currentValue=E,g!==null)if(qn(g.value,E)){if(g.children===p.children&&!rn.current){s=zr(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var C=A.firstContext;C!==null;){if(C.context===h){if(g.tag===1){C=Br(-1,l&-l),C.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var G=$.pending;G===null?C.next=C:(C.next=G.next,G.next=C),$.pending=C}}g.lanes|=l,C=g.alternate,C!==null&&(C.lanes|=l),lf(g.return,l,s),A.lanes|=l;break}C=C.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),lf(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Xt(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,qo(s,l),p=Cn(p),h=h(p),s.flags|=1,Xt(i,s,h,l),s.child;case 14:return h=s.type,p=Kn(h,s.pendingProps),p=Kn(h.type,p),F_(i,s,h,p,l);case 15:return U_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Kn(h,p),Dc(i,s),s.tag=1,sn(h)?(i=!0,pc(s)):i=!1,qo(s,l),x_(s,h,p),Sf(s,h,p,l),Cf(null,s,h,!0,i,l);case 19:return H_(i,s,l);case 22:return j_(i,s,l)}throw Error(t(156,s.tag))};function _y(i,s){return _o(i,s)}function NS(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(i,s,l,h){return new NS(i,s,l,h)}function Gf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function DS(i){if(typeof i=="function")return Gf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===Ft)return 14}return 2}function Si(i,s){var l=i.alternate;return l===null?(l=Nn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function $c(i,s,l,h,p,g){var E=2;if(h=i,typeof i=="function")Gf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case k:return Rs(l.children,p,g,s);case S:E=8,p|=8;break;case P:return i=Nn(12,l,s,p|2),i.elementType=P,i.lanes=g,i;case R:return i=Nn(13,l,s,p),i.elementType=R,i.lanes=g,i;case lt:return i=Nn(19,l,s,p),i.elementType=lt,i.lanes=g,i;case Ke:return qc(l,p,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:E=10;break e;case V:E=9;break e;case L:E=11;break e;case Ft:E=14;break e;case Ut:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Nn(E,l,s,p),s.elementType=i,s.type=h,s.lanes=g,s}function Rs(i,s,l,h){return i=Nn(7,i,h,s),i.lanes=l,i}function qc(i,s,l,h){return i=Nn(22,i,h,s),i.elementType=Ke,i.lanes=l,i.stateNode={isHidden:!1},i}function Qf(i,s,l){return i=Nn(6,i,null,s),i.lanes=l,i}function Xf(i,s,l){return s=Nn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function VS(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Yf(i,s,l,h,p,g,E,A,C){return i=new VS(i,s,l,A,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Nn(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(g),i}function bS(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function yy(i){if(!i)return mi;i=i._reactInternals;e:{if(Mn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(sn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(sn(l))return Kg(i,l,s)}return s}function vy(i,s,l,h,p,g,E,A,C){return i=Yf(l,h,!0,i,p,g,E,A,C),i.context=yy(null),l=i.current,h=Yt(),p=Ii(l),g=Br(h,p),g.callback=s??null,yi(l,g,p),i.current.lanes=p,oi(i,p,h),ln(i,h),i}function Wc(i,s,l,h){var p=s.current,g=Yt(),E=Ii(p);return l=yy(l),s.context===null?s.context=l:s.pendingContext=l,s=Br(g,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=yi(p,s,E),i!==null&&(Qn(i,p,E,g),Ic(i,p,E)),E}function Kc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ey(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Jf(i,s){Ey(i,s),(i=i.alternate)&&Ey(i,s)}function OS(){return null}var wy=typeof reportError=="function"?reportError:function(i){console.error(i)};function Zf(i){this._internalRoot=i}Hc.prototype.render=Zf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Wc(i,s,null,null)},Hc.prototype.unmount=Zf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ts(function(){Wc(null,i,null,null)}),s[Lr]=null}};function Hc(i){this._internalRoot=i}Hc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Hu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<sr.length&&s!==0&&s<sr[l].priority;l++);sr.splice(l,0,i),l===0&&Xu(i)}};function ep(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Gc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function LS(i,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var $=Kc(E);g.call($)}}var E=vy(s,h,i,0,null,!1,!1,"",Iy);return i._reactRootContainer=E,i[Lr]=E.current,hl(i.nodeType===8?i.parentNode:i),Ts(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var $=Kc(C);A.call($)}}var C=Yf(i,0,!1,null,null,!1,!1,"",Iy);return i._reactRootContainer=C,i[Lr]=C.current,hl(i.nodeType===8?i.parentNode:i),Ts(function(){Wc(s,C,l,h)}),C}function Qc(i,s,l,h,p){var g=l._reactRootContainer;if(g){var E=g;if(typeof p=="function"){var A=p;p=function(){var C=Kc(E);A.call(C)}}Wc(s,E,i,p)}else E=LS(l,s,i,p,h);return Kc(E)}Wu=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=ii(s.pendingLanes);l!==0&&(ai(s,l|1),ln(s,Qe()),(Me&6)===0&&(Qo=Qe()+500,gi()))}break;case 13:Ts(function(){var h=jr(i,1);if(h!==null){var p=Yt();Qn(h,i,1,p)}}),Jf(i,1)}},Eo=function(i){if(i.tag===13){var s=jr(i,134217728);if(s!==null){var l=Yt();Qn(s,i,134217728,l)}Jf(i,134217728)}},Ku=function(i){if(i.tag===13){var s=Ii(i),l=jr(i,s);if(l!==null){var h=Yt();Qn(l,i,s,h)}Jf(i,s)}},Hu=function(){return Ve},Gu=function(i,s){var l=Ve;try{return Ve=i,s()}finally{Ve=l}},co=function(i,s,l){switch(s){case"input":if(La(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=dc(h);if(!p)throw Error(t(90));io(h),La(h,p)}}}break;case"textarea":lo(i,l);break;case"select":s=l.value,s!=null&&Cr(i,!!l.multiple,s,!1)}},rs=Wf,Ka=Ts;var MS={usingClientEntryPoint:!1,Events:[pl,Lo,dc,rr,Wa,Wf]},Cl={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:Cl.bundleType,version:Cl.version,rendererPackageName:Cl.rendererPackageName,rendererConfig:Cl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Qa(i),i===null?null:i.stateNode},findFiberByHostInstance:Cl.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{ls=Xc.inject(FS),hn=Xc}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS,un.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ep(s))throw Error(t(200));return bS(i,s,null,l)},un.createRoot=function(i,s){if(!ep(i))throw Error(t(299));var l=!1,h="",p=wy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Yf(i,1,!1,null,null,l,!1,h,p),i[Lr]=s.current,hl(i.nodeType===8?i.parentNode:i),new Zf(s)},un.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Qa(s),i=i===null?null:i.stateNode,i},un.flushSync=function(i){return Ts(i)},un.hydrate=function(i,s,l){if(!Gc(s))throw Error(t(200));return Qc(null,i,s,!0,l)},un.hydrateRoot=function(i,s,l){if(!ep(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",E=wy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=vy(s,null,i,1,l??null,p,!1,g,E),i[Lr]=s.current,hl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Hc(s)},un.render=function(i,s,l){if(!Gc(s))throw Error(t(200));return Qc(null,i,s,!1,l)},un.unmountComponentAtNode=function(i){if(!Gc(i))throw Error(t(40));return i._reactRootContainer?(Ts(function(){Qc(null,null,i,!1,function(){i._reactRootContainer=null,i[Lr]=null})}),!0):!1},un.unstable_batchedUpdates=Wf,un.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Gc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Qc(i,s,l,!1,h)},un.version="18.3.1-next-f1338f8080-20240426",un}var xy;function JE(){if(xy)return rp.exports;xy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rp.exports=HS(),rp.exports}var Ny;function GS(){if(Ny)return Yc;Ny=1;var n=JE();return Yc.createRoot=n.createRoot,Yc.hydrateRoot=n.hydrateRoot,Yc}var QS=GS();const XS=XE(QS);JE();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Zl.apply(null,arguments)}var Oi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Oi||(Oi={}));const Dy="popstate";function YS(n){n===void 0&&(n={});function e(r,o){let{pathname:a,search:u,hash:d}=r.location;return Ip("",{pathname:a,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:ZE(o)}return ZS(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JS(){return Math.random().toString(36).substr(2,8)}function Vy(n,e){return{usr:n.state,key:n.key,idx:e}}function Ip(n,e,t,r){return t===void 0&&(t=null),Zl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ca(e):e,{state:t,key:e&&e.key||r||JS()})}function ZE(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ca(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function ZS(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,d=Oi.Pop,f=null,_=v();_==null&&(_=0,u.replaceState(Zl({},u.state,{idx:_}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=Oi.Pop;let b=v(),ie=b==null?null:b-_;_=b,f&&f({action:d,location:z.location,delta:ie})}function T(b,ie){d=Oi.Push;let Q=Ip(z.location,b,ie);_=v()+1;let Y=Vy(Q,_),ae=z.createHref(Q);try{u.pushState(Y,"",ae)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(ae)}a&&f&&f({action:d,location:z.location,delta:1})}function x(b,ie){d=Oi.Replace;let Q=Ip(z.location,b,ie);_=v();let Y=Vy(Q,_),ae=z.createHref(Q);u.replaceState(Y,"",ae),a&&f&&f({action:d,location:z.location,delta:0})}function j(b){let ie=o.location.origin!=="null"?o.location.origin:o.location.href,Q=typeof b=="string"?b:ZE(b);return Q=Q.replace(/ $/,"%20"),gt(ie,"No window.location.(origin|href) available to create URL for href: "+Q),new URL(Q,ie)}let z={get action(){return d},get location(){return n(o,u)},listen(b){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Dy,w),f=b,()=>{o.removeEventListener(Dy,w),f=null}},createHref(b){return e(o,b)},createURL:j,encodeLocation(b){let ie=j(b);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:T,replace:x,go(b){return u.go(b)}};return z}var by;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(by||(by={}));function eA(n,e,t){return t===void 0&&(t="/"),tA(n,e,t)}function tA(n,e,t,r){let o=typeof e=="string"?Ca(e):e,a=nw(o.pathname||"/",t);if(a==null)return null;let u=ew(n);nA(u);let d=null,f=pA(a);for(let _=0;d==null&&_<u.length;++_)d=hA(u[_],f);return d}function ew(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(gt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let _=Ls([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(gt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),ew(a.children,e,v,_)),!(a.path==null&&!a.index)&&e.push({path:_,score:uA(_,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,u);else for(let f of tw(a.path))o(a,u,f)}),e}function tw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=tw(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function nA(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cA(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const rA=/^:[\w-]+$/,iA=3,sA=2,oA=1,aA=10,lA=-2,Oy=n=>n==="*";function uA(n,e){let t=n.split("/"),r=t.length;return t.some(Oy)&&(r+=lA),e&&(r+=sA),t.filter(o=>!Oy(o)).reduce((o,a)=>o+(rA.test(a)?iA:a===""?oA:aA),r)}function cA(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function hA(n,e,t){let{routesMeta:r}=n,o={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],_=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=dA({path:f.relativePath,caseSensitive:f.caseSensitive,end:_},v),T=f.route;if(!w)return null;Object.assign(o,w.params),u.push({params:o,pathname:Ls([a,w.pathname]),pathnameBase:vA(Ls([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=Ls([a,w.pathnameBase]))}return u}function dA(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=fA(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((_,v,w)=>{let{paramName:T,isOptional:x}=v;if(T==="*"){let z=d[w]||"";u=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const j=d[w];return x&&!j?_[T]=void 0:_[T]=(j||"").replace(/%2F/g,"/"),_},{}),pathname:a,pathnameBase:u,pattern:n}}function fA(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),lm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function pA(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function nw(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const mA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gA=n=>mA.test(n);function _A(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?Ca(n):n,a;if(t)if(gA(t))a=t;else{if(t.includes("//")){let u=t;t=sw(t),lm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=Ly(t.substring(1),"/"):a=Ly(t,e)}else a=e;return{pathname:a,search:EA(r),hash:wA(o)}}function Ly(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function op(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yA(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function rw(n,e){let t=yA(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function iw(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=Ca(n):(o=Zl({},n),gt(!o.pathname||!o.pathname.includes("?"),op("?","pathname","search",o)),gt(!o.pathname||!o.pathname.includes("#"),op("#","pathname","hash",o)),gt(!o.search||!o.search.includes("#"),op("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=_A(o,d),_=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(_||v)&&(f.pathname+="/"),f}const sw=n=>n.replace(/\/\/+/g,"/"),Ls=n=>sw(n.join("/")),vA=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EA=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wA=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function IA(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ow=["post","put","patch","delete"];new Set(ow);const TA=["get",...ow];new Set(TA);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},eu.apply(null,arguments)}const um=Z.createContext(null),SA=Z.createContext(null),_u=Z.createContext(null),Xh=Z.createContext(null),Gi=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),aw=Z.createContext(null);function yu(){return Z.useContext(Xh)!=null}function cm(){return yu()||gt(!1),Z.useContext(Xh).location}function lw(n){Z.useContext(_u).static||Z.useLayoutEffect(n)}function hm(){let{isDataRoute:n}=Z.useContext(Gi);return n?FA():AA()}function AA(){yu()||gt(!1);let n=Z.useContext(um),{basename:e,future:t,navigator:r}=Z.useContext(_u),{matches:o}=Z.useContext(Gi),{pathname:a}=cm(),u=JSON.stringify(rw(o,t.v7_relativeSplatPath)),d=Z.useRef(!1);return lw(()=>{d.current=!0}),Z.useCallback(function(_,v){if(v===void 0&&(v={}),!d.current)return;if(typeof _=="number"){r.go(_);return}let w=iw(_,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Ls([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function RA(){let{matches:n}=Z.useContext(Gi),e=n[n.length-1];return e?e.params:{}}function PA(n,e){return CA(n,e)}function CA(n,e,t,r){yu()||gt(!1);let{navigator:o}=Z.useContext(_u),{matches:a}=Z.useContext(Gi),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let _=cm(),v;if(e){var w;let b=typeof e=="string"?Ca(e):e;f==="/"||(w=b.pathname)!=null&&w.startsWith(f)||gt(!1),v=b}else v=_;let T=v.pathname||"/",x=T;if(f!=="/"){let b=f.replace(/^\//,"").split("/");x="/"+T.replace(/^\//,"").split("/").slice(b.length).join("/")}let j=eA(n,{pathname:x}),z=VA(j&&j.map(b=>Object.assign({},b,{params:Object.assign({},d,b.params),pathname:Ls([f,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?f:Ls([f,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,t,r);return e&&z?Z.createElement(Xh.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Oi.Pop}},z):z}function kA(){let n=MA(),e=IA(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:o},t):null,null)}const xA=Z.createElement(kA,null);class NA extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(Gi.Provider,{value:this.props.routeContext},Z.createElement(aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DA(n){let{routeContext:e,match:t,children:r}=n,o=Z.useContext(um);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(Gi.Provider,{value:e},r)}function VA(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||gt(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,_=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(_=v),w.route.id){let{loaderData:T,errors:x}=t,j=w.route.loader&&T[w.route.id]===void 0&&(!x||x[w.route.id]===void 0);if(w.route.lazy||j){f=!0,_>=0?u=u.slice(0,_+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let x,j=!1,z=null,b=null;t&&(x=d&&w.route.id?d[w.route.id]:void 0,z=w.route.errorElement||xA,f&&(_<0&&T===0?(UA("route-fallback"),j=!0,b=null):_===T&&(j=!0,b=w.route.hydrateFallbackElement||null)));let ie=e.concat(u.slice(0,T+1)),Q=()=>{let Y;return x?Y=z:j?Y=b:w.route.Component?Y=Z.createElement(w.route.Component,null):w.route.element?Y=w.route.element:Y=v,Z.createElement(DA,{match:w,routeContext:{outlet:v,matches:ie,isDataRoute:t!=null},children:Y})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?Z.createElement(NA,{location:t.location,revalidation:t.revalidation,component:z,error:x,children:Q(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):Q()},null)}var uw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(uw||{}),cw=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(cw||{});function bA(n){let e=Z.useContext(um);return e||gt(!1),e}function OA(n){let e=Z.useContext(SA);return e||gt(!1),e}function LA(n){let e=Z.useContext(Gi);return e||gt(!1),e}function hw(n){let e=LA(),t=e.matches[e.matches.length-1];return t.route.id||gt(!1),t.route.id}function MA(){var n;let e=Z.useContext(aw),t=OA(),r=hw();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function FA(){let{router:n}=bA(uw.UseNavigateStable),e=hw(cw.UseNavigateStable),t=Z.useRef(!1);return lw(()=>{t.current=!0}),Z.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,eu({fromRouteId:e},a)))},[n,e])}const My={};function UA(n,e,t){My[n]||(My[n]=!0)}function jA(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Tp(n){let{to:e,replace:t,state:r,relative:o}=n;yu()||gt(!1);let{future:a,static:u}=Z.useContext(_u),{matches:d}=Z.useContext(Gi),{pathname:f}=cm(),_=hm(),v=iw(e,rw(d,a.v7_relativeSplatPath),f,o==="path"),w=JSON.stringify(v);return Z.useEffect(()=>_(JSON.parse(w),{replace:t,state:r,relative:o}),[_,w,o,t,r]),null}function Ol(n){gt(!1)}function BA(n){let{basename:e="/",children:t=null,location:r,navigationType:o=Oi.Pop,navigator:a,static:u=!1,future:d}=n;yu()&&gt(!1);let f=e.replace(/^\/*/,"/"),_=Z.useMemo(()=>({basename:f,navigator:a,static:u,future:eu({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=Ca(r));let{pathname:v="/",search:w="",hash:T="",state:x=null,key:j="default"}=r,z=Z.useMemo(()=>{let b=nw(v,f);return b==null?null:{location:{pathname:b,search:w,hash:T,state:x,key:j},navigationType:o}},[f,v,w,T,x,j,o]);return z==null?null:Z.createElement(_u.Provider,{value:_},Z.createElement(Xh.Provider,{children:t,value:z}))}function zA(n){let{children:e,location:t}=n;return PA(Sp(e),t)}new Promise(()=>{});function Sp(n,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(n,(r,o)=>{if(!Z.isValidElement(r))return;let a=[...e,o];if(r.type===Z.Fragment){t.push.apply(t,Sp(r.props.children,a));return}r.type!==Ol&&gt(!1),!r.props.index||!r.props.children||gt(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Sp(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $A="6";try{window.__reactRouterVersion=$A}catch{}const qA="startTransition",Fy=qS[qA];function WA(n){let{basename:e,children:t,future:r,window:o}=n,a=Z.useRef();a.current==null&&(a.current=YS({window:o,v5Compat:!0}));let u=a.current,[d,f]=Z.useState({action:u.action,location:u.location}),{v7_startTransition:_}=r||{},v=Z.useCallback(w=>{_&&Fy?Fy(()=>f(w)):f(w)},[f,_]);return Z.useLayoutEffect(()=>u.listen(v),[u,v]),Z.useEffect(()=>jA(r),[r]),Z.createElement(BA,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}var Uy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Uy||(Uy={}));var jy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));const KA=()=>{};var By={};/**
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
 */const dw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},HA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,_=f?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|_>>6,x=_&63;f||(x=64,u||(T=64)),r.push(t[v],t[w],t[T],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):HA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new GA;const T=a<<2|d>>4;if(r.push(T),_!==64){const x=d<<4&240|_>>2;if(r.push(x),w!==64){const j=_<<6&192|w;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class GA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QA=function(n){const e=dw(n);return fw.encodeByteArray(e,!0)},Sh=function(n){return QA(n).replace(/\./g,"")},pw=function(n){try{return fw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XA=()=>mw().__FIREBASE_DEFAULTS__,YA=()=>{if(typeof process>"u"||typeof By>"u")return;const n=By.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pw(n[1]);return e&&JSON.parse(e)},Yh=()=>{try{return KA()||XA()||YA()||JA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gw=n=>{var e,t;return(t=(e=Yh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_w=n=>{const e=gw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yw=()=>{var n;return(n=Yh())===null||n===void 0?void 0:n.config},vw=n=>{var e;return(e=Yh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ZA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Js(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ew(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Sh(JSON.stringify(t)),Sh(JSON.stringify(u)),""].join(".")}const $l={};function e1(){const n={prod:[],emulator:[]};for(const e of Object.keys($l))$l[e]?n.emulator.push(e):n.prod.push(e);return n}function t1(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let zy=!1;function fm(n,e){if(typeof window>"u"||typeof document>"u"||!Js(window.location.host)||$l[n]===e||$l[n]||zy)return;$l[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=e1().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,x){T.setAttribute("width","24"),T.setAttribute("id",x),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function _(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{zy=!0,u()},T}function v(T,x){T.setAttribute("id",x),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=t1(r),x=t("text"),j=document.getElementById(x)||document.createElement("span"),z=t("learnmore"),b=document.getElementById(z)||document.createElement("a"),ie=t("preprendIcon"),Q=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Y=T.element;d(Y),v(b,z);const ae=_();f(Q,ie),Y.append(Q,j,b,ae),document.body.appendChild(Y)}a?(j.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function ww(){var n;const e=(n=Yh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function s1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iw(){return!ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tw(){return!ww()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Sw(){try{return typeof indexedDB=="object"}catch{return!1}}function a1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const l1="FirebaseError";class Sr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=l1,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vu.prototype.create)}}class vu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?u1(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Sr(o,d,r)}}function u1(n,e){return n.replace(c1,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const c1=/\{\$([^}]+)}/g;function h1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if($y(a)&&$y(u)){if(!Bs(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function $y(n){return n!==null&&typeof n=="object"}/**
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
 */function Eu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ll(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Ml(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function d1(n,e){const t=new f1(n,e);return t.subscribe.bind(t)}class f1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");p1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=ap),o.error===void 0&&(o.error=ap),o.complete===void 0&&(o.complete=ap);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ap(){}/**
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
 */function _t(n){return n&&n._delegate?n._delegate:n}class zi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cs="[DEFAULT]";/**
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
 */class m1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ZA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_1(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:g1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g1(n){return n===Cs?void 0:n}function _1(n){return n.instantiationMode==="EAGER"}/**
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
 */class y1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new m1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const v1={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},E1=Ne.INFO,w1={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},I1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=w1[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=E1,this._logHandler=I1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const T1=(n,e)=>e.some(t=>n instanceof t);let qy,Wy;function S1(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aw=new WeakMap,Ap=new WeakMap,Rw=new WeakMap,lp=new WeakMap,mm=new WeakMap;function R1(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Mi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Aw.set(t,n)}).catch(()=>{}),mm.set(e,n),e}function P1(n){if(Ap.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Ap.set(n,e)}let Rp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ap.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function C1(n){Rp=n(Rp)}function k1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(up(this),e,...t);return Rw.set(r,e.sort?e.sort():[e]),Mi(r)}:A1().includes(n)?function(...e){return n.apply(up(this),e),Mi(Aw.get(this))}:function(...e){return Mi(n.apply(up(this),e))}}function x1(n){return typeof n=="function"?k1(n):(n instanceof IDBTransaction&&P1(n),T1(n,S1())?new Proxy(n,Rp):n)}function Mi(n){if(n instanceof IDBRequest)return R1(n);if(lp.has(n))return lp.get(n);const e=x1(n);return e!==n&&(lp.set(n,e),mm.set(e,n)),e}const up=n=>mm.get(n);function N1(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Mi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Mi(u.result),f.oldVersion,f.newVersion,Mi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const D1=["get","getKey","getAll","getAllKeys","count"],V1=["put","add","delete","clear"],cp=new Map;function Ky(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cp.get(e))return cp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=V1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||D1.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let _=f.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&f.done]))[0]};return cp.set(e,a),a}C1(n=>({...n,get:(e,t,r)=>Ky(e,t)||n.get(e,t,r),has:(e,t)=>!!Ky(e,t)||n.has(e,t)}));/**
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
 */class b1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(O1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function O1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pp="@firebase/app",Hy="0.13.2";/**
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
 */const Qr=new pm("@firebase/app"),L1="@firebase/app-compat",M1="@firebase/analytics-compat",F1="@firebase/analytics",U1="@firebase/app-check-compat",j1="@firebase/app-check",B1="@firebase/auth",z1="@firebase/auth-compat",$1="@firebase/database",q1="@firebase/data-connect",W1="@firebase/database-compat",K1="@firebase/functions",H1="@firebase/functions-compat",G1="@firebase/installations",Q1="@firebase/installations-compat",X1="@firebase/messaging",Y1="@firebase/messaging-compat",J1="@firebase/performance",Z1="@firebase/performance-compat",eR="@firebase/remote-config",tR="@firebase/remote-config-compat",nR="@firebase/storage",rR="@firebase/storage-compat",iR="@firebase/firestore",sR="@firebase/ai",oR="@firebase/firestore-compat",aR="firebase",lR="11.10.0";/**
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
 */const Cp="[DEFAULT]",uR={[Pp]:"fire-core",[L1]:"fire-core-compat",[F1]:"fire-analytics",[M1]:"fire-analytics-compat",[j1]:"fire-app-check",[U1]:"fire-app-check-compat",[B1]:"fire-auth",[z1]:"fire-auth-compat",[$1]:"fire-rtdb",[q1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[K1]:"fire-fn",[H1]:"fire-fn-compat",[G1]:"fire-iid",[Q1]:"fire-iid-compat",[X1]:"fire-fcm",[Y1]:"fire-fcm-compat",[J1]:"fire-perf",[Z1]:"fire-perf-compat",[eR]:"fire-rc",[tR]:"fire-rc-compat",[nR]:"fire-gcs",[rR]:"fire-gcs-compat",[iR]:"fire-fst",[oR]:"fire-fst-compat",[sR]:"fire-vertex","fire-js":"fire-js",[aR]:"fire-js-all"};/**
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
 */const Ah=new Map,cR=new Map,kp=new Map;function Gy(n,e){try{n.container.addComponent(e)}catch(t){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zs(n){const e=n.name;if(kp.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;kp.set(e,n);for(const t of Ah.values())Gy(t,n);for(const t of cR.values())Gy(t,n);return!0}function Jh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fi=new vu("app","Firebase",hR);/**
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
 */class dR{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=lR;function Pw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cp,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Fi.create("bad-app-name",{appName:String(o)});if(t||(t=yw()),!t)throw Fi.create("no-options");const a=Ah.get(o);if(a){if(Bs(t,a.options)&&Bs(r,a.config))return a;throw Fi.create("duplicate-app",{appName:o})}const u=new y1(o);for(const f of kp.values())u.addComponent(f);const d=new dR(t,r,u);return Ah.set(o,d),d}function gm(n=Cp){const e=Ah.get(n);if(!e&&n===Cp&&yw())return Pw();if(!e)throw Fi.create("no-app",{appName:n});return e}function gr(n,e,t){var r;let o=(r=uR[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(d.join(" "));return}zs(new zi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const fR="firebase-heartbeat-database",pR=1,tu="firebase-heartbeat-store";let hp=null;function Cw(){return hp||(hp=N1(fR,pR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fi.create("idb-open",{originalErrorMessage:n.message})})),hp}async function mR(n){try{const t=(await Cw()).transaction(tu),r=await t.objectStore(tu).get(kw(n));return await t.done,r}catch(e){if(e instanceof Sr)Qr.warn(e.message);else{const t=Fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(t.message)}}}async function Qy(n,e){try{const r=(await Cw()).transaction(tu,"readwrite");await r.objectStore(tu).put(e,kw(n)),await r.done}catch(t){if(t instanceof Sr)Qr.warn(t.message);else{const r=Fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qr.warn(r.message)}}}function kw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gR=1024,_R=30;class yR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ER(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Xy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>_R){const u=wR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xy(),{heartbeatsToSend:r,unsentEntries:o}=vR(this._heartbeatsCache.heartbeats),a=Sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Qr.warn(t),""}}}function Xy(){return new Date().toISOString().substring(0,10)}function vR(n,e=gR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Yy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Yy(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sw()?a1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Yy(n){return Sh(JSON.stringify({version:2,heartbeats:n})).length}function wR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function IR(n){zs(new zi("platform-logger",e=>new b1(e),"PRIVATE")),zs(new zi("heartbeat",e=>new yR(e),"PRIVATE")),gr(Pp,Hy,n),gr(Pp,Hy,"esm2017"),gr("fire-js","")}IR("");function _m(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TR=xw,Nw=new vu("auth","Firebase",xw());/**
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
 */const Rh=new pm("@firebase/auth");function SR(n,...e){Rh.logLevel<=Ne.WARN&&Rh.warn(`Auth (${Zs}): ${n}`,...e)}function lh(n,...e){Rh.logLevel<=Ne.ERROR&&Rh.error(`Auth (${Zs}): ${n}`,...e)}/**
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
 */function er(n,...e){throw ym(n,...e)}function _r(n,...e){return ym(n,...e)}function Dw(n,e,t){const r=Object.assign(Object.assign({},TR()),{[e]:t});return new vu("auth","Firebase",r).create(e,{appName:n.name})}function Hr(n){return Dw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ym(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nw.create(n,...e)}function Te(n,e,...t){if(!n)throw ym(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lh(e),new Error(e)}function Xr(n,e){n||qr(e)}/**
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
 */function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function AR(){return Jy()==="http:"||Jy()==="https:"}function Jy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function RR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||i1()||"connection"in navigator)?navigator.onLine:!0}function PR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xr(t>e,"Short delay should be less than long delay!"),this.isMobile=n1()||s1()}get(){return RR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(n,e){Xr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xR=new wu(3e4,6e4);function Qi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xi(n,e,t,r,o={}){return bw(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Eu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:f},a);return r1()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Js(n.emulatorConfig.host)&&(_.credentials="include"),Vw.fetch()(await Ow(n,n.config.apiHost,t,d),_)})}async function bw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},CR),e);try{const o=new DR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Jc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,_]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jc(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Jc(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Jc(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Dw(n,v,_);er(n,v)}}catch(o){if(o instanceof Sr)throw o;er(n,"network-request-failed",{message:String(o)})}}async function Iu(n,e,t,r,o={}){const a=await Xi(n,e,t,r,o);return"mfaPendingCredential"in a&&er(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ow(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?vm(n.config,o):`${n.config.apiScheme}://${o}`;return kR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function NR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),xR.get())})}}function Jc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=_r(n,e,r);return o.customData._tokenResponse=t,o}function Zy(n){return n!==void 0&&n.enterprise!==void 0}class VR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bR(n,e){return Xi(n,"GET","/v2/recaptchaConfig",Qi(n,e))}/**
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
 */async function OR(n,e){return Xi(n,"POST","/v1/accounts:delete",e)}async function Ph(n,e){return Xi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ql(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LR(n,e=!1){const t=_t(n),r=await t.getIdToken(e),o=Em(r);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:ql(dp(o.auth_time)),issuedAtTime:ql(dp(o.iat)),expirationTime:ql(dp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function dp(n){return Number(n)*1e3}function Em(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return lh("JWT malformed, contained fewer than 3 sections"),null;try{const o=pw(t);return o?JSON.parse(o):(lh("Failed to decode base64 JWT payload"),null)}catch(o){return lh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ev(n){const e=Em(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Sr&&MR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function MR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class FR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Np{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ql(this.lastLoginAt),this.creationTime=ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ch(n){var e;const t=n.auth,r=await n.getIdToken(),o=await nu(n,Ph(t,{idToken:r}));Te(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Lw(a.providerUserInfo):[],d=jR(n.providerData,u),f=n.isAnonymous,_=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?_:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Np(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function UR(n){const e=_t(n);await Ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Lw(n){return n.map(e=>{var{providerId:t}=e,r=_m(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BR(n,e){const t=await bw(n,{},async()=>{const r=Eu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await Ow(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Js(n.emulatorConfig.host)&&(f.credentials="include"),Vw.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zR(n,e){return Xi(n,"POST","/v2/accounts:revokeToken",Qi(n,e))}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ev(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=ev(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await BR(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new ua;return r&&(Te(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Te(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Te(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
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
 */function Ri(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=_m(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Np(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await nu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LR(this,e)}reload(){return UR(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ch(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await nu(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,f,_,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,x=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,j=(u=t.photoURL)!==null&&u!==void 0?u:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,b=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ie=(_=t.createdAt)!==null&&_!==void 0?_:void 0,Q=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Y,emailVerified:ae,isAnonymous:Ie,providerData:ge,stsTokenManager:k}=t;Te(Y&&k,e,"internal-error");const S=ua.fromJSON(this.name,k);Te(typeof Y=="string",e,"internal-error"),Ri(w,e.name),Ri(T,e.name),Te(typeof ae=="boolean",e,"internal-error"),Te(typeof Ie=="boolean",e,"internal-error"),Ri(x,e.name),Ri(j,e.name),Ri(z,e.name),Ri(b,e.name),Ri(ie,e.name),Ri(Q,e.name);const P=new Yn({uid:Y,auth:e,email:T,emailVerified:ae,displayName:w,isAnonymous:Ie,photoURL:j,phoneNumber:x,tenantId:z,stsTokenManager:S,createdAt:ie,lastLoginAt:Q});return ge&&Array.isArray(ge)&&(P.providerData=ge.map(N=>Object.assign({},N))),b&&(P._redirectEventId=b),P}static async _fromIdTokenResponse(e,t,r=!1){const o=new ua;o.updateFromServerResponse(t);const a=new Yn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Ch(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Lw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new ua;d.updateFromIdToken(r);const f=new Yn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Np(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,_),f}}/**
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
 */const tv=new Map;function Wr(n){Xr(n instanceof Function,"Expected a class definition");let e=tv.get(n);return e?(Xr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,tv.set(n,e),e)}/**
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
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mw.type="NONE";const nv=Mw;/**
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
 */function uh(n,e,t){return`firebase:${n}:${e}:${t}`}class ca{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=uh(this.userKey,o.apiKey,a),this.fullPersistenceKey=uh("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ph(this.auth,{idToken:e}).catch(()=>{});return t?Yn._fromGetAccountInfoResponse(this.auth,t,e):null}return Yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ca(Wr(nv),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Wr(nv);const u=uh(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const v=await _._get(u);if(v){let w;if(typeof v=="string"){const T=await Ph(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Yn._fromGetAccountInfoResponse(e,T,v)}else w=Yn._fromJSON(e,v);_!==a&&(d=w),a=_;break}}catch{}const f=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ca(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new ca(a,e,r))}}/**
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
 */function rv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(qw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fw(n=St()){return/firefox\//i.test(n)}function Uw(n=St()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(n=St()){return/crios\//i.test(n)}function Bw(n=St()){return/iemobile/i.test(n)}function zw(n=St()){return/android/i.test(n)}function $w(n=St()){return/blackberry/i.test(n)}function qw(n=St()){return/webos/i.test(n)}function wm(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $R(n=St()){var e;return wm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qR(){return o1()&&document.documentMode===10}function Ww(n=St()){return wm(n)||zw(n)||qw(n)||$w(n)||/windows phone/i.test(n)||Bw(n)}/**
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
 */function Kw(n,e=[]){let t;switch(n){case"Browser":t=rv(St());break;case"Worker":t=`${rv(St())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zs}/${r}`}/**
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
 */class WR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function KR(n,e={}){return Xi(n,"GET","/v2/passwordPolicy",Qi(n,e))}/**
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
 */const HR=6;class GR{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:HR,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class QR{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new WR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await ca.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ph(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ch(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Hr(this));const t=e?_t(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KR(this),t=new GR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await ca.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&SR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function eo(n){return _t(n)}class iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=d1(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XR(n){Zh=n}function Hw(n){return Zh.loadJS(n)}function YR(){return Zh.recaptchaEnterpriseScript}function JR(){return Zh.gapiScript}function ZR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eP{constructor(){this.enterprise=new tP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nP="recaptcha-enterprise",Gw="NO_RECAPTCHA";class rP{constructor(e){this.type=nP,this.auth=eo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{bR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new VR(f);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;Zy(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(_=>{u(_)}).catch(()=>{u(Gw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&Zy(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=YR();f.length!==0&&(f+=d),Hw(f).then(()=>{o(d,a,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function sv(n,e,t,r=!1,o=!1){const a=new rP(n);let u;if(o)u=Gw;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Dp(n,e,t,r,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await sv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await sv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function iP(n,e){const t=Jh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Bs(a,e??{}))return o;er(o,"already-initialized")}return t.initialize({options:e})}function sP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Wr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oP(n,e,t){const r=eo(n);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=Qw(e),{host:u,port:d}=aP(e),f=d===null?"":`:${d}`,_={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Bs(_,r.config.emulator)&&Bs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Js(u)?(dm(`${a}//${u}${f}`),fm("Auth",!0)):lP()}function Qw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aP(n){const e=Qw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:ov(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:ov(u)}}}function ov(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Im{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function uP(n,e){return Xi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cP(n,e){return Iu(n,"POST","/v1/accounts:signInWithPassword",Qi(n,e))}/**
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
 */async function hP(n,e){return Iu(n,"POST","/v1/accounts:signInWithEmailLink",Qi(n,e))}async function dP(n,e){return Iu(n,"POST","/v1/accounts:signInWithEmailLink",Qi(n,e))}/**
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
 */class ru extends Im{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ru(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ru(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,t,"signInWithPassword",cP);case"emailLink":return hP(e,{email:this._email,oobCode:this._password});default:er(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,r,"signUpPassword",uP);case"emailLink":return dP(e,{idToken:t,email:this._email,oobCode:this._password});default:er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ha(n,e){return Iu(n,"POST","/v1/accounts:signInWithIdp",Qi(n,e))}/**
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
 */const fP="http://localhost";class $s extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=_m(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new $s(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return ha(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ha(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ha(e,t)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Eu(t)}return e}}/**
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
 */function pP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mP(n){const e=Ll(Ml(n)).link,t=e?Ll(Ml(e)).deep_link_id:null,r=Ll(Ml(n)).deep_link_id;return(r?Ll(Ml(r)).link:null)||r||t||e||n}class Tm{constructor(e){var t,r,o,a,u,d;const f=Ll(Ml(e)),_=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=pP((o=f.mode)!==null&&o!==void 0?o:null);Te(_&&v&&w,"argument-error"),this.apiKey=_,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=mP(e);try{return new Tm(t)}catch{return null}}}/**
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
 */class ka{constructor(){this.providerId=ka.PROVIDER_ID}static credential(e,t){return ru._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tm.parseLink(t);return Te(r,"argument-error"),ru._fromEmailAndCode(e,r.code,r.tenantId)}}ka.PROVIDER_ID="password";ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tu extends Xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xi extends Tu{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.FACEBOOK_SIGN_IN_METHOD="facebook.com";xi.PROVIDER_ID="facebook.com";/**
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
 */class Ni extends Tu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $s._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ni.credential(t,r)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
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
 */class Di extends Tu{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.GITHUB_SIGN_IN_METHOD="github.com";Di.PROVIDER_ID="github.com";/**
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
 */class Vi extends Tu{constructor(){super("twitter.com")}static credential(e,t){return $s._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vi.credential(t,r)}catch{return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com";Vi.PROVIDER_ID="twitter.com";/**
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
 */async function gP(n,e){return Iu(n,"POST","/v1/accounts:signUp",Qi(n,e))}/**
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
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Yn._fromIdTokenResponse(e,r,o),u=av(r);return new qs({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=av(r);return new qs({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function av(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class kh extends Sr{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,kh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new kh(e,t,r,o)}}function Yw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?kh._fromErrorAndOperation(n,a,e,r):a})}async function _P(n,e,t=!1){const r=await nu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qs._forOperation(n,"link",r)}/**
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
 */async function yP(n,e,t=!1){const{auth:r}=n;if(vn(r.app))return Promise.reject(Hr(r));const o="reauthenticate";try{const a=await nu(n,Yw(r,o,e,n),t);Te(a.idToken,r,"internal-error");const u=Em(a.idToken);Te(u,r,"internal-error");const{sub:d}=u;return Te(n.uid===d,r,"user-mismatch"),qs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&er(r,"user-mismatch"),a}}/**
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
 */async function Jw(n,e,t=!1){if(vn(n.app))return Promise.reject(Hr(n));const r="signIn",o=await Yw(n,r,e),a=await qs._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function vP(n,e){return Jw(eo(n),e)}/**
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
 */async function Zw(n){const e=eo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EP(n,e,t){if(vn(n.app))return Promise.reject(Hr(n));const r=eo(n),u=await Dp(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&Zw(n),f}),d=await qs._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function wP(n,e,t){return vn(n.app)?Promise.reject(Hr(n)):vP(_t(n),ka.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zw(n),r})}function IP(n,e,t,r){return _t(n).onIdTokenChanged(e,t,r)}function TP(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function SP(n,e,t,r){return _t(n).onAuthStateChanged(e,t,r)}function AP(n){return _t(n).signOut()}const xh="__sak";/**
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
 */class eI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xh,"1"),this.storage.removeItem(xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RP=1e3,PP=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);qR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,PP):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const CP=tI;/**
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
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nI.type="SESSION";const rI=nI;/**
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
 */function kP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),f=await kP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
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
 */function Sm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const _=Sm("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===_)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function yr(){return window}function NP(n){yr().location.href=n}/**
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
 */function iI(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function DP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bP(){return iI()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",OP=1,Nh="firebaseLocalStorage",oI="fbase_key";class Su{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(n,e){return n.transaction([Nh],e?"readwrite":"readonly").objectStore(Nh)}function LP(){const n=indexedDB.deleteDatabase(sI);return new Su(n).toPromise()}function Vp(){const n=indexedDB.open(sI,OP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Nh,{keyPath:oI})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Nh)?e(r):(r.close(),await LP(),e(await Vp()))})})}async function lv(n,e,t){const r=td(n,!0).put({[oI]:e,value:t});return new Su(r).toPromise()}async function MP(n,e){const t=td(n,!1).get(e),r=await new Su(t).toPromise();return r===void 0?null:r.value}function uv(n,e){const t=td(n,!0).delete(e);return new Su(t).toPromise()}const FP=800,UP=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>UP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(bP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await DP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await lv(e,xh,"1"),await uv(e,xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>MP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=td(o,!1).getAll();return new Su(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const jP=aI;new wu(3e4,6e4);/**
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
 */function BP(n,e){return e?Wr(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Am extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ha(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ha(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ha(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zP(n){return Jw(n.auth,new Am(n),n.bypassAuthState)}function $P(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),yP(t,new Am(n),n.bypassAuthState)}async function qP(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),_P(t,new Am(n),n.bypassAuthState)}/**
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
 */class lI{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zP;case"linkViaPopup":case"linkViaRedirect":return qP;case"reauthViaPopup":case"reauthViaRedirect":return $P;default:er(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WP=new wu(2e3,1e4);class la extends lI{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,la.currentPopupAction&&la.currentPopupAction.cancel(),la.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,la.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WP.get())};e()}}la.currentPopupAction=null;/**
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
 */const KP="pendingRedirect",ch=new Map;class HP extends lI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const r=await GP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GP(n,e){const t=YP(e),r=XP(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function QP(n,e){ch.set(n._key(),e)}function XP(n){return Wr(n._redirectPersistence)}function YP(n){return uh(KP,n.config.apiKey,n.name)}async function JP(n,e,t=!1){if(vn(n.app))return Promise.reject(Hr(n));const r=eo(n),o=BP(r,e),u=await new HP(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const ZP=600*1e3;class eC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_r(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZP&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(e))}saveEventToCache(e){this.cachedEventUids.add(cv(e)),this.lastProcessedEventTime=Date.now()}}function cv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(n);default:return!1}}/**
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
 */async function nC(n,e={}){return Xi(n,"GET","/v1/projects",e)}/**
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
 */const rC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iC=/^https?/;async function sC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nC(n);for(const t of e)try{if(oC(t))return}catch{}er(n,"unauthorized-domain")}function oC(n){const e=xp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!iC.test(t))return!1;if(rC.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const aC=new wu(3e4,6e4);function hv(){const n=yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lC(n){return new Promise((e,t)=>{var r,o,a;function u(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),t(_r(n,"network-request-failed"))},timeout:aC.get()})}if(!((o=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=yr().gapi)===null||a===void 0)&&a.load)u();else{const d=ZR("iframefcb");return yr()[d]=()=>{gapi.load?u():t(_r(n,"network-request-failed"))},Hw(`${JR()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw hh=null,e})}let hh=null;function uC(n){return hh=hh||lC(n),hh}/**
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
 */const cC=new wu(5e3,15e3),hC="__/auth/iframe",dC="emulator/auth/iframe",fC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mC(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vm(e,dC):`https://${n.config.authDomain}/${hC}`,r={apiKey:e.apiKey,appName:n.name,v:Zs},o=pC.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Eu(r).slice(1)}`}async function gC(n){const e=await uC(n),t=yr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:mC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fC,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=_r(n,"network-request-failed"),d=yr().setTimeout(()=>{a(u)},cC.get());function f(){yr().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const _C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yC=500,vC=600,EC="_blank",wC="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IC(n,e,t,r=yC,o=vC){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},_C),{width:r.toString(),height:o.toString(),top:a,left:u}),_=St().toLowerCase();t&&(d=jw(_)?EC:t),Fw(_)&&(e=e||wC,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[x,j])=>`${T}${x}=${j},`,"");if($R(_)&&d!=="_self")return TC(e||"",d),new dv(null);const w=window.open(e||"",d,v);Te(w,n,"popup-blocked");try{w.focus()}catch{}return new dv(w)}function TC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const SC="__/auth/handler",AC="emulator/auth/handler",RC=encodeURIComponent("fac");async function fv(n,e,t,r,o,a){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zs,eventId:o};if(e instanceof Xw){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",h1(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Tu){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),_=f?`#${RC}=${encodeURIComponent(f)}`:"";return`${PC(n)}?${Eu(d).slice(1)}${_}`}function PC({config:n}){return n.emulator?vm(n,AC):`https://${n.authDomain}/${SC}`}/**
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
 */const fp="webStorageSupport";class CC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=JP,this._overrideRedirectResult=QP}async _openPopup(e,t,r,o){var a;Xr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await fv(e,t,r,xp(),o);return IC(e,u,Sm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await fv(e,t,r,xp(),o);return NP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Xr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await gC(e),r=new eC(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fp,{type:fp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[fp];u!==void 0&&t(!!u),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ww()||Uw()||wm()}}const kC=CC;var pv="@firebase/auth",mv="1.10.8";/**
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
 */class xC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DC(n){zs(new zi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Te(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kw(n)},_=new QR(r,o,a,f);return sP(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zs(new zi("auth-internal",e=>{const t=eo(e.getProvider("auth").getImmediate());return(r=>new xC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(pv,mv,NC(n)),gr(pv,mv,"esm2017")}/**
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
 */const VC=300,bC=vw("authIdTokenMaxAge")||VC;let gv=null;const OC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bC)return;const o=t==null?void 0:t.token;gv!==o&&(gv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function LC(n=gm()){const e=Jh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iP(n,{popupRedirectResolver:kC,persistence:[jP,CP,rI]}),r=vw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=OC(a.toString());TP(t,u,()=>u(t.currentUser)),IP(t,d=>u(d))}}const o=gw("auth");return o&&oP(t,`http://${o}`),t}function MC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}XR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=_r("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",MC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DC("Browser");var FC="firebase",UC="11.10.0";/**
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
 */gr(FC,UC,"app");var _v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ui,cI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function P(){}P.prototype=S.prototype,k.D=S.prototype,k.prototype=new P,k.prototype.constructor=k,k.C=function(N,V,L){for(var R=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)R[lt-2]=arguments[lt];return S.prototype[V].apply(N,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,P){P||(P=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(V=0;16>V;++V)N[V]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=k.g[0],P=k.g[1],V=k.g[2];var L=k.g[3],R=S+(L^P&(V^L))+N[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=L+(V^S&(P^V))+N[1]+3905402710&4294967295,L=S+(R<<12&4294967295|R>>>20),R=V+(P^L&(S^P))+N[2]+606105819&4294967295,V=L+(R<<17&4294967295|R>>>15),R=P+(S^V&(L^S))+N[3]+3250441966&4294967295,P=V+(R<<22&4294967295|R>>>10),R=S+(L^P&(V^L))+N[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(V^S&(P^V))+N[5]+1200080426&4294967295,L=S+(R<<12&4294967295|R>>>20),R=V+(P^L&(S^P))+N[6]+2821735955&4294967295,V=L+(R<<17&4294967295|R>>>15),R=P+(S^V&(L^S))+N[7]+4249261313&4294967295,P=V+(R<<22&4294967295|R>>>10),R=S+(L^P&(V^L))+N[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(V^S&(P^V))+N[9]+2336552879&4294967295,L=S+(R<<12&4294967295|R>>>20),R=V+(P^L&(S^P))+N[10]+4294925233&4294967295,V=L+(R<<17&4294967295|R>>>15),R=P+(S^V&(L^S))+N[11]+2304563134&4294967295,P=V+(R<<22&4294967295|R>>>10),R=S+(L^P&(V^L))+N[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(V^S&(P^V))+N[13]+4254626195&4294967295,L=S+(R<<12&4294967295|R>>>20),R=V+(P^L&(S^P))+N[14]+2792965006&4294967295,V=L+(R<<17&4294967295|R>>>15),R=P+(S^V&(L^S))+N[15]+1236535329&4294967295,P=V+(R<<22&4294967295|R>>>10),R=S+(V^L&(P^V))+N[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^V&(S^P))+N[6]+3225465664&4294967295,L=S+(R<<9&4294967295|R>>>23),R=V+(S^P&(L^S))+N[11]+643717713&4294967295,V=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(V^L))+N[0]+3921069994&4294967295,P=V+(R<<20&4294967295|R>>>12),R=S+(V^L&(P^V))+N[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^V&(S^P))+N[10]+38016083&4294967295,L=S+(R<<9&4294967295|R>>>23),R=V+(S^P&(L^S))+N[15]+3634488961&4294967295,V=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(V^L))+N[4]+3889429448&4294967295,P=V+(R<<20&4294967295|R>>>12),R=S+(V^L&(P^V))+N[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^V&(S^P))+N[14]+3275163606&4294967295,L=S+(R<<9&4294967295|R>>>23),R=V+(S^P&(L^S))+N[3]+4107603335&4294967295,V=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(V^L))+N[8]+1163531501&4294967295,P=V+(R<<20&4294967295|R>>>12),R=S+(V^L&(P^V))+N[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^V&(S^P))+N[2]+4243563512&4294967295,L=S+(R<<9&4294967295|R>>>23),R=V+(S^P&(L^S))+N[7]+1735328473&4294967295,V=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(V^L))+N[12]+2368359562&4294967295,P=V+(R<<20&4294967295|R>>>12),R=S+(P^V^L)+N[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^V)+N[8]+2272392833&4294967295,L=S+(R<<11&4294967295|R>>>21),R=V+(L^S^P)+N[11]+1839030562&4294967295,V=L+(R<<16&4294967295|R>>>16),R=P+(V^L^S)+N[14]+4259657740&4294967295,P=V+(R<<23&4294967295|R>>>9),R=S+(P^V^L)+N[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^V)+N[4]+1272893353&4294967295,L=S+(R<<11&4294967295|R>>>21),R=V+(L^S^P)+N[7]+4139469664&4294967295,V=L+(R<<16&4294967295|R>>>16),R=P+(V^L^S)+N[10]+3200236656&4294967295,P=V+(R<<23&4294967295|R>>>9),R=S+(P^V^L)+N[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^V)+N[0]+3936430074&4294967295,L=S+(R<<11&4294967295|R>>>21),R=V+(L^S^P)+N[3]+3572445317&4294967295,V=L+(R<<16&4294967295|R>>>16),R=P+(V^L^S)+N[6]+76029189&4294967295,P=V+(R<<23&4294967295|R>>>9),R=S+(P^V^L)+N[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^V)+N[12]+3873151461&4294967295,L=S+(R<<11&4294967295|R>>>21),R=V+(L^S^P)+N[15]+530742520&4294967295,V=L+(R<<16&4294967295|R>>>16),R=P+(V^L^S)+N[2]+3299628645&4294967295,P=V+(R<<23&4294967295|R>>>9),R=S+(V^(P|~L))+N[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~V))+N[7]+1126891415&4294967295,L=S+(R<<10&4294967295|R>>>22),R=V+(S^(L|~P))+N[14]+2878612391&4294967295,V=L+(R<<15&4294967295|R>>>17),R=P+(L^(V|~S))+N[5]+4237533241&4294967295,P=V+(R<<21&4294967295|R>>>11),R=S+(V^(P|~L))+N[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~V))+N[3]+2399980690&4294967295,L=S+(R<<10&4294967295|R>>>22),R=V+(S^(L|~P))+N[10]+4293915773&4294967295,V=L+(R<<15&4294967295|R>>>17),R=P+(L^(V|~S))+N[1]+2240044497&4294967295,P=V+(R<<21&4294967295|R>>>11),R=S+(V^(P|~L))+N[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~V))+N[15]+4264355552&4294967295,L=S+(R<<10&4294967295|R>>>22),R=V+(S^(L|~P))+N[6]+2734768916&4294967295,V=L+(R<<15&4294967295|R>>>17),R=P+(L^(V|~S))+N[13]+1309151649&4294967295,P=V+(R<<21&4294967295|R>>>11),R=S+(V^(P|~L))+N[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~V))+N[11]+3174756917&4294967295,L=S+(R<<10&4294967295|R>>>22),R=V+(S^(L|~P))+N[2]+718787259&4294967295,V=L+(R<<15&4294967295|R>>>17),R=P+(L^(V|~S))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+V&4294967295,k.g[3]=k.g[3]+L&4294967295}r.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var P=S-this.blockSize,N=this.B,V=this.h,L=0;L<S;){if(V==0)for(;L<=P;)o(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<S;)if(N[V++]=k.charCodeAt(L++),V==this.blockSize){o(this,N),V=0;break}}else for(;L<S;)if(N[V++]=k[L++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var P=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=P&255,P/=256;for(this.u(k),k=Array(16),S=P=0;4>S;++S)for(var N=0;32>N;N+=8)k[P++]=this.g[S]>>>N&255;return k};function a(k,S){var P=d;return Object.prototype.hasOwnProperty.call(P,k)?P[k]:P[k]=S(k)}function u(k,S){this.h=S;for(var P=[],N=!0,V=k.length-1;0<=V;V--){var L=k[V]|0;N&&L==S||(P[V]=L,N=!1)}this.g=P}var d={};function f(k){return-128<=k&&128>k?a(k,function(S){return new u([S|0],0>S?-1:0)}):new u([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return w;if(0>k)return b(_(-k));for(var S=[],P=1,N=0;k>=P;N++)S[N]=k/P|0,P*=4294967296;return new u(S,0)}function v(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return b(v(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=_(Math.pow(S,8)),N=w,V=0;V<k.length;V+=8){var L=Math.min(8,k.length-V),R=parseInt(k.substring(V,V+L),S);8>L?(L=_(Math.pow(S,L)),N=N.j(L).add(_(R))):(N=N.j(P),N=N.add(_(R)))}return N}var w=f(0),T=f(1),x=f(16777216);n=u.prototype,n.m=function(){if(z(this))return-b(this).m();for(var k=0,S=1,P=0;P<this.g.length;P++){var N=this.i(P);k+=(0<=N?N:4294967296+N)*S,S*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(j(this))return"0";if(z(this))return"-"+b(this).toString(k);for(var S=_(Math.pow(k,6)),P=this,N="";;){var V=ae(P,S).g;P=ie(P,V.j(S));var L=((0<P.g.length?P.g[0]:P.h)>>>0).toString(k);if(P=V,j(P))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function j(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=ie(this,k),z(k)?-1:j(k)?0:1};function b(k){for(var S=k.g.length,P=[],N=0;N<S;N++)P[N]=~k.g[N];return new u(P,~k.h).add(T)}n.abs=function(){return z(this)?b(this):this},n.add=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],N=0,V=0;V<=S;V++){var L=N+(this.i(V)&65535)+(k.i(V)&65535),R=(L>>>16)+(this.i(V)>>>16)+(k.i(V)>>>16);N=R>>>16,L&=65535,R&=65535,P[V]=R<<16|L}return new u(P,P[P.length-1]&-2147483648?-1:0)};function ie(k,S){return k.add(b(S))}n.j=function(k){if(j(this)||j(k))return w;if(z(this))return z(k)?b(this).j(b(k)):b(b(this).j(k));if(z(k))return b(this.j(b(k)));if(0>this.l(x)&&0>k.l(x))return _(this.m()*k.m());for(var S=this.g.length+k.g.length,P=[],N=0;N<2*S;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<k.g.length;V++){var L=this.i(N)>>>16,R=this.i(N)&65535,lt=k.i(V)>>>16,Ft=k.i(V)&65535;P[2*N+2*V]+=R*Ft,Q(P,2*N+2*V),P[2*N+2*V+1]+=L*Ft,Q(P,2*N+2*V+1),P[2*N+2*V+1]+=R*lt,Q(P,2*N+2*V+1),P[2*N+2*V+2]+=L*lt,Q(P,2*N+2*V+2)}for(N=0;N<S;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=S;N<2*S;N++)P[N]=0;return new u(P,0)};function Q(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function Y(k,S){this.g=k,this.h=S}function ae(k,S){if(j(S))throw Error("division by zero");if(j(k))return new Y(w,w);if(z(k))return S=ae(b(k),S),new Y(b(S.g),b(S.h));if(z(S))return S=ae(k,b(S)),new Y(b(S.g),S.h);if(30<k.g.length){if(z(k)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,N=S;0>=N.l(k);)P=Ie(P),N=Ie(N);var V=ge(P,1),L=ge(N,1);for(N=ge(N,2),P=ge(P,2);!j(N);){var R=L.add(N);0>=R.l(k)&&(V=V.add(P),L=R),N=ge(N,1),P=ge(P,1)}return S=ie(k,V.j(S)),new Y(V,S)}for(V=w;0<=k.l(S);){for(P=Math.max(1,Math.floor(k.m()/S.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=_(P),R=L.j(S);z(R)||0<R.l(k);)P-=N,L=_(P),R=L.j(S);j(L)&&(L=T),V=V.add(L),k=ie(k,R)}return new Y(V,k)}n.A=function(k){return ae(this,k).h},n.and=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)&k.i(N);return new u(P,this.h&k.h)},n.or=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)|k.i(N);return new u(P,this.h|k.h)},n.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)^k.i(N);return new u(P,this.h^k.h)};function Ie(k){for(var S=k.g.length+1,P=[],N=0;N<S;N++)P[N]=k.i(N)<<1|k.i(N-1)>>>31;return new u(P,k.h)}function ge(k,S){var P=S>>5;S%=32;for(var N=k.g.length-P,V=[],L=0;L<N;L++)V[L]=0<S?k.i(L+P)>>>S|k.i(L+P+1)<<32-S:k.i(L+P);return new u(V,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=v,Ui=u}).apply(typeof _v<"u"?_v:typeof self<"u"?self:typeof window<"u"?window:{});var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hI,Fl,dI,dh,bp,fI,pI,mI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zc=="object"&&Zc];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var M=c[I];if(!(M in y))break e;y=y[M]}c=c[c.length-1],I=y[c],m=m(I),m!=I&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,I=!1,M={next:function(){if(!I&&y<c.length){var q=y++;return{value:m(q,c[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function w(c,m,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,I),c.apply(m,M)}}return function(){return c.apply(m,arguments)}}function T(c,m,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function x(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function j(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,M,q){for(var te=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)te[$e-2]=arguments[$e];return m.prototype[M].apply(I,te)}}function z(c){const m=c.length;if(0<m){const y=Array(m);for(let I=0;I<m;I++)y[I]=c[I];return y}return[]}function b(c,m){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const M=c.length||0,q=I.length||0;c.length=M+q;for(let te=0;te<q;te++)c[M+te]=I[te]}else c.push(I)}}class ie{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Q(c){return/^[\s\xa0]*$/.test(c)}function Y(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function ae(c){return ae[" "](c),c}ae[" "]=function(){};var Ie=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ge(c,m,y){for(const I in c)m.call(y,c[I],I,c)}function k(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function S(c){const m={};for(const y in c)m[y]=c[y];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,I;for(let M=1;M<arguments.length;M++){I=arguments[M];for(y in I)c[y]=I[y];for(let q=0;q<P.length;q++)y=P[q],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function V(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function L(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ve;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class lt{constructor(){this.h=this.g=null}add(m,y){const I=Ft.get();I.set(m,y),this.h?this.h.next=I:this.g=I,this.h=I}}var Ft=new ie(()=>new Ut,c=>c.reset());class Ut{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,se=!1,ve=new lt,ue=()=>{const c=d.Promise.resolve(void 0);Ke=()=>{c.then(O)}};var O=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){L(y)}var m=Ft;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}se=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Pe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c})();function ke(c,m){if(_e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(Ie){e:{try{ae(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ke.aa.h.call(this)}}j(ke,_e);var be={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function Ge(c,m,y,I,M){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!I,this.ha=M,this.key=++je,this.da=this.fa=!1}function Rt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Rr(c){this.src=c,this.g={},this.h=0}Rr.prototype.add=function(c,m,y,I,M){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var te=ti(c,m,I,M);return-1<te?(m=c[te],y||(m.fa=!1)):(m=new Ge(m,this.src,q,!!I,M),m.fa=y,c.push(m)),m};function io(c,m){var y=m.type;if(y in c.g){var I=c.g[y],M=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=M)&&Array.prototype.splice.call(I,M,1),q&&(Rt(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ti(c,m,y,I){for(var M=0;M<c.length;++M){var q=c[M];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==I)return M}return-1}var Zi="closure_lm_"+(1e6*Math.random()|0),so={};function Oa(c,m,y,I,M){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Oa(c,m[q],y,I,M);return null}return y=Fa(y),c&&c[Ue]?c.K(m,y,_(I)?!!I.capture:!1,M):La(c,m,y,!1,I,M)}function La(c,m,y,I,M,q){if(!m)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,$e=ao(c);if($e||(c[Zi]=$e=new Rr(c)),y=$e.add(m,y,I,te,q),y.proxy)return y;if(I=Lu(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Pe||(M=te),M===void 0&&(M=!1),c.addEventListener(m.toString(),I,M);else if(c.attachEvent)c.attachEvent(Cr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Lu(){function c(y){return m.call(c.src,c.listener,y)}const m=Ma;return c}function oo(c,m,y,I,M){if(Array.isArray(m))for(var q=0;q<m.length;q++)oo(c,m[q],y,I,M);else I=_(I)?!!I.capture:!!I,y=Fa(y),c&&c[Ue]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],y=ti(q,y,I,M),-1<y&&(Rt(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=ao(c))&&(m=c.g[m.toString()],c=-1,m&&(c=ti(m,y,I,M)),(y=-1<c?m[c]:null)&&Pr(y))}function Pr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ue])io(m.i,c);else{var y=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(y,I,c.capture):m.detachEvent?m.detachEvent(Cr(y),I):m.addListener&&m.removeListener&&m.removeListener(I),(y=ao(m))?(io(y,c),y.h==0&&(y.src=null,m[Zi]=null)):Rt(c)}}}function Cr(c){return c in so?so[c]:so[c]="on"+c}function Ma(c,m){if(c.da)c=!0;else{m=new ke(m,this);var y=c.listener,I=c.ha||c.src;c.fa&&Pr(c),c=y.call(I,m)}return c}function ao(c){return c=c[Zi],c instanceof Rr?c:null}var lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fa(c){return typeof c=="function"?c:(c[lo]||(c[lo]=function(m){return c.handleEvent(m)}),c[lo])}function vt(){K.call(this),this.i=new Rr(this),this.M=this,this.F=null}j(vt,K),vt.prototype[Ue]=!0,vt.prototype.removeEventListener=function(c,m,y,I){oo(this,c,m,y,I)};function Et(c,m){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new _e(m,c);else if(m instanceof _e)m.target=m.target||c;else{var M=m;m=new _e(I,c),N(m,M)}if(M=!0,y)for(var q=y.length-1;0<=q;q--){var te=m.g=y[q];M=kr(te,I,!0,m)&&M}if(te=m.g=c,M=kr(te,I,!0,m)&&M,M=kr(te,I,!1,m)&&M,y)for(q=0;q<y.length;q++)te=m.g=y[q],M=kr(te,I,!1,m)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],I=0;I<y.length;I++)Rt(y[I]);delete c.g[m],c.h--}}this.F=null},vt.prototype.K=function(c,m,y,I){return this.i.add(String(c),m,!1,y,I)},vt.prototype.L=function(c,m,y,I){return this.i.add(String(c),m,!0,y,I)};function kr(c,m,y,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,q=0;q<m.length;++q){var te=m[q];if(te&&!te.da&&te.capture==y){var $e=te.listener,wt=te.ha||te.src;te.fa&&io(c.i,te),M=$e.call(wt,I)!==!1&&M}}return M&&!I.defaultPrevented}function Ua(c,m,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function ni(c){c.g=Ua(()=>{c.g=null,c.i&&(c.i=!1,ni(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class es extends K{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ni(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(c){K.call(this),this.h=c,this.g={}}j(ts,K);var ja=[];function Ba(c){ge(c.g,function(m,y){this.g.hasOwnProperty(y)&&Pr(m)},c),c.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Ba(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var za=d.JSON.stringify,$a=d.JSON.parse,qa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ns(){}ns.prototype.h=null;function uo(c){return c.h||(c.h=c.i())}function co(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nr(){_e.call(this,"d")}j(nr,_e);function ho(){_e.call(this,"c")}j(ho,_e);var rr={},Wa=null;function rs(){return Wa=Wa||new vt}rr.La="serverreachability";function Ka(c){_e.call(this,rr.La,c)}j(Ka,_e);function xr(c){const m=rs();Et(m,new Ka(m))}rr.STAT_EVENT="statevent";function Ha(c,m){_e.call(this,rr.STAT_EVENT,c),this.stat=m}j(Ha,_e);function ut(c){const m=rs();Et(m,new Ha(m,c))}rr.Ma="timingevent";function fo(c,m){_e.call(this,rr.Ma,c),this.size=m}j(fo,_e);function On(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function is(){this.g=!0}is.prototype.xa=function(){this.g=!1};function ss(c,m,y,I,M,q){c.info(function(){if(c.g)if(q)for(var te="",$e=q.split("&"),wt=0;wt<$e.length;wt++){var Oe=$e[wt].split("=");if(1<Oe.length){var Pt=Oe[0];Oe=Oe[1];var dt=Pt.split("_");te=2<=dt.length&&dt[1]=="type"?te+(Pt+"="+Oe+"&"):te+(Pt+"=redacted&")}}else te=null;else te=q;return"XMLHTTP REQ ("+I+") [attempt "+M+"]: "+m+`
`+y+`
`+te})}function po(c,m,y,I,M,q,te){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+M+"]: "+m+`
`+y+`
`+q+" "+te})}function Ln(c,m,y,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Cd(c,y)+(I?" "+I:"")})}function Ga(c,m){c.info(function(){return"TIMEOUT: "+m})}is.prototype.info=function(){};function Cd(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var M=I[1];if(Array.isArray(M)&&!(1>M.length)){var q=M[0];if(q!="noop"&&q!="stop"&&q!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return za(y)}catch{return m}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mn;function os(){}j(os,ns),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},Mn=new os;function Fn(c,m,y,I){this.j=c,this.i=m,this.l=y,this.R=I||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fu}function Fu(){this.i=null,this.g="",this.h=!1}var Qa={},go={};function _o(c,m,y){c.L=1,c.v=ai(dn(m)),c.m=y,c.P=!0,Xa(c,null)}function Xa(c,m){c.F=Date.now(),Qe(c),c.A=dn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),ui(y.i,"t",I),c.C=0,y=c.j.J,c.h=new Fu,c.g=nc(c.j,y?m:null,!c.m),0<c.O&&(c.M=new es(T(c.Y,c,c.g),c.O)),m=c.U,y=c.g,I=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(ja[0]=M.toString()),M=ja);for(var q=0;q<M.length;q++){var te=Oa(y,M[q],I||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),xr(),ss(c.i,c.u,c.A,c.l,c.R,c.m)}Fn.prototype.ca=function(c){c=c.target;const m=this.M;m&&nn(c)==3?m.j():this.Y(c)},Fn.prototype.Y=function(c){try{if(c==this.g)e:{const dt=nn(this.g);var m=this.g.Ba();const An=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||nl(this.g)))){this.J||dt!=4||m==7||(m==8||0>=An?xr(3):xr(2)),as(this);var y=this.g.Z();this.X=y;t:if(Uu(this)){var I=nl(this.g);c="";var M=I.length,q=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),ri(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!(q&&m==M-1)});I.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,po(this.i,this.u,this.A,this.l,this.R,dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,wt=this.g;if(($e=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q($e)){var Oe=$e;break t}}Oe=null}if(y=Oe)Ln(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ya(this,y);else{this.o=!1,this.s=3,ut(12),Tn(this),ri(this);break e}}if(this.P){y=!0;let pn;for(;!this.J&&this.C<te.length;)if(pn=kd(this,te),pn==go){dt==4&&(this.s=4,ut(14),y=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Qa){this.s=4,ut(15),Ln(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Ln(this.i,this.l,pn,null),Ya(this,pn);if(Uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||te.length!=0||this.h.h||(this.s=1,ut(16),y=!1),this.o=this.o&&y,!y)Ln(this.i,this.l,te,"[Invalid Chunked Response]"),Tn(this),ri(this);else if(0<te.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),il(Pt),Pt.M=!0,ut(11))}}else Ln(this.i,this.l,te,null),Ya(this,te);dt==4&&Tn(this),this.o&&!this.J&&(dt==4?Co(this.j,this):(this.o=!1,Qe(this)))}else To(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Tn(this),ri(this)}}}catch{}finally{}};function Uu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function kd(c,m){var y=c.C,I=m.indexOf(`
`,y);return I==-1?go:(y=Number(m.substring(y,I)),isNaN(y)?Qa:(I+=1,I+y>m.length?go:(m=m.slice(I,I+y),c.C=I+y,m)))}Fn.prototype.cancel=function(){this.J=!0,Tn(this)};function Qe(c){c.S=Date.now()+c.I,ju(c,c.I)}function ju(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=On(T(c.ba,c),m)}function as(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Fn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ga(this.i,this.A),this.L!=2&&(xr(),ut(17)),Tn(this),this.s=2,ri(this)):ju(this,this.S-c)};function ri(c){c.j.G==0||c.J||Co(c.j,c)}function Tn(c){as(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Ba(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ya(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||Gt(y.h,c))){if(!c.K&&Gt(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var M=I;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Po(y),$n(y);else break e;Ro(y),ut(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=On(T(y.Za,y),6e3));if(1>=zu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Or(y,11)}else if((c.K||y.g==c)&&Po(y),!Q(m))for(M=y.Da.g.parse(m),m=0;m<M.length;m++){let Oe=M[m];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Pt=Oe[3];Pt!=null&&(y.la=Pt,y.j.info("VER="+y.la));const dt=Oe[4];dt!=null&&(y.Aa=dt,y.j.info("SVER="+y.Aa));const An=Oe[5];An!=null&&typeof An=="number"&&0<An&&(I=1.5*An,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const pn=c.g;if(pn){const ps=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var q=I.h;q.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ja(q,q.h),q.h=null))}if(I.D){const xo=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(I.ya=xo,He(I.I,I.D,xo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var te=c;if(I.qa=tc(I,I.J?I.ia:null,I.W),te.K){$u(I.h,te);var $e=te,wt=I.L;wt&&($e.I=wt),$e.B&&(as($e),Qe($e)),I.g=te}else fs(I);0<y.i.length&&ar(y)}else Oe[0]!="stop"&&Oe[0]!="close"||Or(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Or(y,7):Vt(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}xr(4)}catch{}}var Bu=class{constructor(c,m){this.g=c,this.map=m}};function ls(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function zu(c){return c.h?1:c.g?c.g.size:0}function Gt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ja(c,m){c.g?c.g.add(m):c.h=m}function $u(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}ls.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function qu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return z(c.i)}function yo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,I=0;I<y;I++)m.push(c[I]);return m}m=[],y=0;for(I in c)m[y++]=c[I];return m}function vo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const I in c)m[y++]=I;return m}}}function ii(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=vo(c),I=yo(c),M=I.length,q=0;q<M;q++)m.call(void 0,I[q],y&&y[q],c)}var us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xd(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),M=null;if(0<=I){var q=c[y].substring(0,I);M=c[y].substring(I+1)}else q=c[y];m(q,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Nr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Nr){this.h=c.h,cs(this,c.j),this.o=c.o,this.g=c.g,si(this,c.s),this.l=c.l;var m=c.i,y=new ir;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),oi(this,y),this.m=c.m}else c&&(m=String(c).match(us))?(this.h=!1,cs(this,m[1]||"",!0),this.o=Ve(m[2]||""),this.g=Ve(m[3]||"",!0),si(this,m[4]),this.l=Ve(m[5]||"",!0),oi(this,m[6]||"",!0),this.m=Ve(m[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Nr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(li(m,Eo,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(li(m,Eo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(li(y,y.charAt(0)=="/"?Hu:Ku,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",li(y,Za)),c.join("")};function dn(c){return new Nr(c)}function cs(c,m,y){c.j=y?Ve(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function si(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function oi(c,m,y){m instanceof ir?(c.i=m,sr(c.i,c.h)):(y||(m=li(m,Gu)),c.i=new ir(m,c.h))}function He(c,m,y){c.i.set(m,y)}function ai(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ve(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function li(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Wu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Wu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Eo=/[#\/\?@]/g,Ku=/[#\?:]/g,Hu=/[#\?]/g,Gu=/[#\?@]/g,Za=/#/g;function ir(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Dt(c){c.g||(c.g=new Map,c.h=0,c.i&&xd(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=ir.prototype,n.add=function(c,m){Dt(this),this.i=null,c=Sn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Un(c,m){Dt(c),m=Sn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function jn(c,m){return Dt(c),m=Sn(c,m),c.g.has(m)}n.forEach=function(c,m){Dt(this),this.g.forEach(function(y,I){y.forEach(function(M){c.call(m,M,I,this)},this)},this)},n.na=function(){Dt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let I=0;I<m.length;I++){const M=c[I];for(let q=0;q<M.length;q++)y.push(m[I])}return y},n.V=function(c){Dt(this);let m=[];if(typeof c=="string")jn(this,c)&&(m=m.concat(this.g.get(Sn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return Dt(this),this.i=null,c=Sn(this,c),jn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function ui(c,m,y){Un(c,m),0<y.length&&(c.i=null,c.g.set(Sn(c,m),z(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var I=m[y];const q=encodeURIComponent(String(I)),te=this.V(I);for(I=0;I<te.length;I++){var M=q;te[I]!==""&&(M+="="+encodeURIComponent(String(te[I]))),c.push(M)}}return this.i=c.join("&")};function Sn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function sr(c,m){m&&!c.j&&(Dt(c),c.i=null,c.g.forEach(function(y,I){var M=I.toLowerCase();I!=M&&(Un(this,I),ui(this,M,y))},c)),c.j=m}function Nd(c,m){const y=new is;if(d.Image){const I=new Image;I.onload=x(tn,y,"TestLoadImage: loaded",!0,m,I),I.onerror=x(tn,y,"TestLoadImage: error",!1,m,I),I.onabort=x(tn,y,"TestLoadImage: abort",!1,m,I),I.ontimeout=x(tn,y,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Qu(c,m){const y=new is,I=new AbortController,M=setTimeout(()=>{I.abort(),tn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then(q=>{clearTimeout(M),q.ok?tn(y,"TestPingServer: ok",!0,m):tn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),tn(y,"TestPingServer: error",!1,m)})}function tn(c,m,y,I,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),I(y)}catch{}}function Dd(){this.g=new qa}function Xu(c,m,y){const I=y||"";try{ii(c,function(M,q){let te=M;_(M)&&(te=za(M)),m.push(I+q+"="+encodeURIComponent(te))})}catch(M){throw m.push(I+"type="+encodeURIComponent("_badmap")),M}}function Dr(c){this.l=c.Ub||null,this.j=c.eb||!1}j(Dr,ns),Dr.prototype.g=function(){return new hs(this.l,this.j)},Dr.prototype.i=(function(c){return function(){return c}})({});function hs(c,m){vt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(hs,vt),n=hs.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,zn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Bn(this):zn(this),this.readyState==3&&Yu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Bn(this))},n.Qa=function(c){this.g&&(this.response=c,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,zn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vr(c){let m="";return ge(c,function(y,I){m+=I,m+=":",m+=y,m+=`\r
`}),m}function ci(c,m,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Vr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):He(c,m,y))}function Ze(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ze,vt);var Vd=/^https?$/i,el=["POST","PUT"];n=Ze.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mn.g(),this.v=this.o?uo(this.o):uo(Mn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){ds(this,q);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var M in I)y.set(M,I[M]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())y.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),M=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(el,m,void 0))||I||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of y)this.g.setRequestHeader(q,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Io(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){ds(this,q)}};function ds(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,wo(c),fn(c)}function wo(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Et(this,"complete"),Et(this,"abort"),fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tl(this):this.bb())},n.bb=function(){tl(this)};function tl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||nn(c)!=4||c.Z()!=2)){if(c.u&&nn(c)==4)Ua(c.Ea,0,c);else if(Et(c,"readystatechange"),nn(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var I;if(I=te===0){var M=String(c.D).match(us)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),I=!Vd.test(M?M.toLowerCase():"")}y=I}if(y)Et(c,"complete"),Et(c,"success");else{c.m=6;try{var q=2<nn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",wo(c)}}finally{fn(c)}}}}function fn(c,m){if(c.g){Io(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Et(c,"ready");try{y.onreadystatechange=I}catch{}}}function Io(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function nn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),$a(m)}};function nl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function To(c){const m={};c=(c.g&&2<=nn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(Q(c[I]))continue;var y=V(c[I]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[M]||[];m[M]=q,q.push(y)}k(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function rl(c){this.Aa=0,this.i=[],this.j=new is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,c),this.cb=or("retryDelaySeedMs",1e4,c),this.Wa=or("forwardChannelMaxRetries",2,c),this.wa=or("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ls(c&&c.concurrentRequestLimit),this.Da=new Dd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rl.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,I){ut(0),this.W=c,this.H=m||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=tc(this,null,this.W),ar(this)};function Vt(c){if(So(c),c.G==3){var m=c.U++,y=dn(c.I);if(He(y,"SID",c.K),He(y,"RID",m),He(y,"TYPE","terminate"),br(c,y),m=new Fn(c,c.j,m),m.L=2,m.v=ai(dn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=nc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Qe(m)}ec(c)}function $n(c){c.g&&(il(c),c.g.cancel(),c.g=null)}function So(c){$n(c),c.u&&(d.clearTimeout(c.u),c.u=null),Po(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function ar(c){if(!hn(c.h)&&!c.s){c.s=!0;var m=c.Ga;Ke||ue(),se||(Ke(),se=!0),ve.add(m,c),c.B=0}}function bd(c,m){return zu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=On(T(c.Ga,c,m),Zu(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new Fn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(M.H=q,q=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=hi(this,M,m),y=dn(this.I),He(y,"RID",c),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),br(this,y),q&&(this.O?m="headers="+encodeURIComponent(String(Vr(q)))+"&"+m:this.m&&ci(y,this.m,q)),Ja(this.h,M),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",m),He(y,"SID","null"),M.T=!0,_o(M,y,null)):_o(M,y,m),this.G=2}}else this.G==3&&(c?Ao(this,c):this.i.length==0||hn(this.h)||Ao(this))};function Ao(c,m){var y;m?y=m.l:y=c.U++;const I=dn(c.I);He(I,"SID",c.K),He(I,"RID",y),He(I,"AID",c.T),br(c,I),c.m&&c.o&&ci(I,c.m,c.o),y=new Fn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=hi(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ja(c.h,y),_o(y,I,m)}function br(c,m){c.H&&ge(c.H,function(y,I){He(m,I,y)}),c.l&&ii({},function(y,I){He(m,I,y)})}function hi(c,m,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var M=c.i;let q=-1;for(;;){const te=["count="+y];q==-1?0<y?(q=M[0].g,te.push("ofs="+q)):q=0:te.push("ofs="+q);let $e=!0;for(let wt=0;wt<y;wt++){let Oe=M[wt].g;const Pt=M[wt].map;if(Oe-=q,0>Oe)q=Math.max(0,M[wt].g-100),$e=!1;else try{Xu(Pt,te,"req"+Oe+"_")}catch{I&&I(Pt)}}if($e){I=te.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,I}function fs(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Ke||ue(),se||(Ke(),se=!0),ve.add(m,c),c.v=0}}function Ro(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=On(T(c.Fa,c),Zu(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=On(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),$n(this),Ju(this))};function il(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Ju(c){c.g=new Fn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=dn(c.qa);He(m,"RID","rpc"),He(m,"SID",c.K),He(m,"AID",c.T),He(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(m,"TO",c.ja),He(m,"TYPE","xmlhttp"),br(c,m),c.m&&c.o&&ci(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=ai(dn(m)),y.m=null,y.P=!0,Xa(y,c)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),Ro(this),ut(19))};function Po(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Co(c,m){var y=null;if(c.g==m){Po(c),il(c),c.g=null;var I=2}else if(Gt(c.h,m))y=m.D,$u(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var M=c.B;I=rs(),Et(I,new fo(I,y)),ar(c)}else fs(c);else if(M=m.s,M==3||M==0&&0<m.X||!(I==1&&bd(c,m)||I==2&&Ro(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),M){case 1:Or(c,5);break;case 4:Or(c,10);break;case 3:Or(c,6);break;default:Or(c,2)}}}function Zu(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Or(c,m){if(c.j.info("Error code "+m),m==2){var y=T(c.fb,c),I=c.Xa;const M=!I;I=new Nr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||cs(I,"https"),ai(I),M?Nd(I.toString(),y):Qu(I.toString(),y)}else ut(2);c.G=0,c.l&&c.l.sa(m),ec(c),So(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function ec(c){if(c.G=0,c.ka=[],c.l){const m=qu(c.h);(m.length!=0||c.i.length!=0)&&(b(c.ka,m),b(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function tc(c,m,y){var I=y instanceof Nr?dn(y):new Nr(y);if(I.g!="")m&&(I.g=m+"."+I.g),si(I,I.s);else{var M=d.location;I=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var q=new Nr(null);I&&cs(q,I),m&&(q.g=m),M&&si(q,M),y&&(q.l=y),I=q}return y=c.D,m=c.ya,y&&m&&He(I,y,m),He(I,"VER",c.la),br(c,I),I}function nc(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Ze(new Dr({eb:y})):new Ze(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}n=sl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ko(){}ko.prototype.g=function(c,m){return new Qt(c,m)};function Qt(c,m){vt.call(this),this.g=new rl(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!Q(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Q(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new lr(this)}j(Qt,vt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Vt(this.g)},Qt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=za(c),c=y);m.i.push(new Bu(m.Ya++,c)),m.G==3&&ar(m)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,Qt.aa.N.call(this)};function rc(c){nr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}j(rc,nr);function ic(){ho.call(this),this.status=1}j(ic,ho);function lr(c){this.g=c}j(lr,sl),lr.prototype.ua=function(){Et(this.g,"a")},lr.prototype.ta=function(c){Et(this.g,new rc(c))},lr.prototype.sa=function(c){Et(this.g,new ic)},lr.prototype.ra=function(){Et(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,mI=function(){return new ko},pI=function(){return rs()},fI=rr,bp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,dh=mo,Mu.COMPLETE="complete",dI=Mu,co.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Fl=co,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,hI=Ze}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore",vv="4.8.0";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let xa="11.10.0";/**
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
 */const Ws=new pm("@firebase/firestore");function ra(){return Ws.logLevel}function J(n,...e){if(Ws.logLevel<=Ne.DEBUG){const t=e.map(Rm);Ws.debug(`Firestore (${xa}): ${n}`,...t)}}function Jt(n,...e){if(Ws.logLevel<=Ne.ERROR){const t=e.map(Rm);Ws.error(`Firestore (${xa}): ${n}`,...t)}}function wr(n,...e){if(Ws.logLevel<=Ne.WARN){const t=e.map(Rm);Ws.warn(`Firestore (${xa}): ${n}`,...t)}}function Rm(n){if(typeof n=="string")return n;try{/**
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
 */function de(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gI(n,r,t)}function gI(n,e,t){let r=`FIRESTORE (${xa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Jt(r),new Error(r)}function me(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||gI(e,o,r)}function Re(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Sr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class _I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class BC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zC{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new _I(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class $C{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $C(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const r=a=>{a.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,J("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ev(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function yI(){return new TextEncoder}/**
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
 */class Pm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=KC(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function Op(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return Se(r,o);{const a=yI(),u=HC(a.encode(wv(n,t)),a.encode(wv(e,t)));return u!==0?u:Se(r,o)}}t+=r>65535?2:1}return Se(n.length,e.length)}function wv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function HC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function pa(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}function vI(n){return n+"\0"}/**
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
 */const Iv="__name__";class fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&de(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&de(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=fr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Se(e.length,t.length)}static compareSegments(e,t){const r=fr.isNumericId(e),o=fr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?fr.extractNumericId(e).compare(fr.extractNumericId(t)):Op(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ui.fromString(e.substring(4,e.length-2))}}class Be extends fr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new Be(t)}static emptyPath(){return new Be([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends fr{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iv}static keyField(){return new st([Iv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Be.fromString(e))}static fromName(e){return new oe(Be.fromString(e).popFirst(5))}static empty(){return new oe(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Be(e.slice()))}}/**
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
 */function EI(n,e,t){if(!t)throw new ne(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function QC(n,e,t,r){if(e===!0&&r===!0)throw new ne(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tv(n){if(!oe.isDocumentKey(n))throw new ne(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sv(n){if(oe.isDocumentKey(n))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":de(12329,{type:typeof n})}function Zn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nd(n);throw new ne(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Au(n,e){if(!wI(n))throw new ne(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ne(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const Av=-62135596800,Rv=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rv);return new ze(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Av)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rv}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Au(e,ze._jsonSchema))return new ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Av;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ze._jsonSchemaVersion="firestore/timestamp/1.0",ze._jsonSchema={type:mt("string",ze._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new ze(0,0))}static max(){return new ye(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const iu=-1;class Dh{constructor(e,t,r,o){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=o}}function Lp(n){return n.fields.find((e=>e.kind===2))}function ks(n){return n.fields.filter((e=>e.kind!==2))}Dh.UNKNOWN_ID=-1;class fh{constructor(e,t){this.fieldPath=e,this.kind=t}}class su{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new su(0,wn.min())}}function XC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(r===1e9?new ze(t+1,0):new ze(t,r));return new wn(o,oe.empty(),e)}function II(n){return new wn(n.readTime,n.key,iu)}class wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wn(ye.min(),oe.empty(),iu)}static max(){return new wn(ye.max(),oe.empty(),iu)}}function Cm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
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
 */const TI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function to(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==TI)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,r)=>{t(e)}))}static reject(e){return new F(((t,r)=>{r(e)}))}static waitFor(e){return new F(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(f=>r(f)))})),u=!0,a===o&&t()}))}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next((o=>o?F.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new F(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const _=f;t(e[_]).next((v=>{u[_]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new F(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}/**
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
 */const yn="SimpleDb";class rd{static open(e,t,r,o){try{return new rd(t,e.transaction(o,r))}catch(a){throw new Wl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Gr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Wl(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const o=km(r.target.error);this.S.reject(new Wl(e,o))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(J(yn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new JC(t)}}class ji{static delete(e){return J(yn,"Removing database:",e),Ns(mw().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Sw())return!1;if(ji.F())return!0;const e=St(),t=ji.M(e),r=0<t&&t<10,o=AI(e),a=0<o&&o<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,ji.M(St())===12.2&&Jt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(J(yn,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const o=indexedDB.open(this.name,this.version);o.onsuccess=a=>{const u=a.target.result;t(u)},o.onblocked=()=>{r(new Wl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},o.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new ne(W.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new ne(W.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Wl(e,u))},o.onupgradeneeded=a=>{J(yn,'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;if(this.L!==null&&this.L!==a.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${a.oldVersion}, event.newVersion=${a.newVersion}, db.version=${u.version}`);this.B.q(u,o.transaction,a.oldVersion,this.version).next((()=>{J(yn,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const r=t.target;this.L=r.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var r;t.newVersion===null&&(wr('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,o){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=rd.open(this.db,e,a?"readonly":"readwrite",r),f=o(d).next((_=>(d.v(),_))).catch((_=>(d.abort(_),F.reject(_)))).toPromise();return f.catch((()=>{})),await d.D,f}catch(d){const f=d,_=f.name!=="FirebaseError"&&u<3;if(J(yn,"Transaction failed with error:",f.message,"Retrying:",_),this.close(),!_)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function AI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class YC{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Ns(this.$.delete())}}class Wl extends ne{constructor(e,t){super(W.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Yi(n){return n.name==="IndexedDbTransactionError"}class JC{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(J(yn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(J(yn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ns(r)}add(e){return J(yn,"ADD",this.store.name,e,e),Ns(this.store.add(e))}get(e){return Ns(this.store.get(e)).next((t=>(t===void 0&&(t=null),J(yn,"GET",this.store.name,e,t),t)))}delete(e){return J(yn,"DELETE",this.store.name,e),Ns(this.store.delete(e))}count(){return J(yn,"COUNT",this.store.name),Ns(this.store.count())}j(e,t){const r=this.options(e,t),o=r.index?this.store.index(r.index):this.store;if(typeof o.getAll=="function"){const a=o.getAll(r.range);return new F(((u,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{u(f.target.result)}}))}{const a=this.cursor(r),u=[];return this.J(a,((d,f)=>{u.push(f)})).next((()=>u))}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new F(((o,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{o(u.target.result)}}))}Y(e,t){J(yn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const o=this.cursor(r);return this.J(o,((a,u,d)=>d.delete()))}X(e,t){let r;t?r=e:(r={},t=e);const o=this.cursor(r);return this.J(o,t)}ee(e){const t=this.cursor({});return new F(((r,o)=>{t.onerror=a=>{const u=km(a.target.error);o(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next((d=>{d?u.continue():r()})):r()}}))}J(e,t){const r=[];return new F(((o,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void o();const f=new YC(d),_=t(d.primaryKey,d.value,f);if(_ instanceof F){const v=_.catch((w=>(f.done(),F.reject(w))));r.push(v)}f.isDone?o():f.W===null?d.continue():d.continue(f.W)}})).next((()=>F.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ns(n){return new F(((e,t)=>{n.onsuccess=r=>{const o=r.target.result;e(o)},n.onerror=r=>{const o=km(r.target.error);t(o)}}))}let Pv=!1;function km(n){const e=ji.M(St());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ne("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pv||(Pv=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Kl="IndexBackfiller";class ZC{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){J(Kl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();J(Kl,`Documents written: ${t}`)}catch(t){Yi(t)?J(Kl,"Ignoring IndexedDB error during index backfill: ",t):await to(t)}await this.ne(6e4)}))}}class ek{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const r=new Set;let o=t,a=!0;return F.doWhile((()=>a===!0&&o>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((u=>{if(u!==null&&!r.has(u))return J(Kl,`Processing collection: ${u}`),this.se(e,u,o).next((d=>{o-=d,r.add(u)}));a=!1})))).next((()=>t-o))}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((o=>this.localStore.localDocuments.getNextDocuments(e,t,o,r).next((a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next((()=>this.oe(o,a))).next((d=>(J(Kl,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d)))).next((()=>u.size))}))))}oe(e,t){let r=e;return t.changes.forEach(((o,a)=>{const u=II(a);Cm(u,r)>0&&(r=u)})),new wn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Vn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Vn.ue=-1;/**
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
 */const Ms=-1;function id(n){return n==null}function ou(n){return n===0&&1/n==-1/0}function tk(n){return typeof n=="number"&&Number.isInteger(n)&&!ou(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vh="";function Ht(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cv(e)),e=nk(n.get(t),e);return Cv(e)}function nk(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case Vh:t+="";break;default:t+=a}}return t}function Cv(n){return n+Vh+""}function pr(n){const e=n.length;if(me(e>=2,64408,{path:n}),e===2)return me(n.charAt(0)===Vh&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,r=[];let o="";for(let a=0;a<e;){const u=n.indexOf(Vh,a);switch((u<0||u>t)&&de(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(a,u);let f;o.length===0?f=d:(o+=d,f=o,o=""),r.push(f);break;case"":o+=n.substring(a,u),o+="\0";break;case"":o+=n.substring(a,u+1);break;default:de(61167,{path:n})}a=u+2}return new Be(r)}/**
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
 */const xs="remoteDocuments",Ru="owner",Yo="owner",au="mutationQueues",rk="userId",Xn="mutations",kv="batchId",Os="userMutationsIndex",xv=["userId","batchId"];/**
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
 */function ph(n,e){return[n,Ht(e)]}function RI(n,e,t){return[n,Ht(e),t]}const ik={},ma="documentMutations",bh="remoteDocumentsV14",sk=["prefixPath","collectionGroup","readTime","documentId"],mh="documentKeyIndex",ok=["prefixPath","collectionGroup","documentId"],PI="collectionGroupIndex",ak=["collectionGroup","readTime","prefixPath","documentId"],lu="remoteDocumentGlobal",Mp="remoteDocumentGlobalKey",ga="targets",CI="queryTargetsIndex",lk=["canonicalId","targetId"],_a="targetDocuments",uk=["targetId","path"],xm="documentTargetsIndex",ck=["path","targetId"],Oh="targetGlobalKey",Fs="targetGlobal",uu="collectionParents",hk=["collectionId","parent"],ya="clientMetadata",dk="clientId",sd="bundles",fk="bundleId",od="namedQueries",pk="name",Nm="indexConfiguration",mk="indexId",Fp="collectionGroupIndex",gk="collectionGroup",Hl="indexState",_k=["indexId","uid"],kI="sequenceNumberIndex",yk=["uid","sequenceNumber"],Gl="indexEntries",vk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xI="documentKeyIndex",Ek=["indexId","uid","orderedDocumentKey"],ad="documentOverlays",wk=["userId","collectionPath","documentId"],Up="collectionPathOverlayIndex",Ik=["userId","collectionPath","largestBatchId"],NI="collectionGroupOverlayIndex",Tk=["userId","collectionGroup","largestBatchId"],Dm="globals",Sk="name",DI=[au,Xn,ma,xs,ga,Ru,Fs,_a,ya,lu,uu,sd,od],Ak=[...DI,ad],VI=[au,Xn,ma,bh,ga,Ru,Fs,_a,ya,lu,uu,sd,od,ad],bI=VI,Vm=[...bI,Nm,Hl,Gl],Rk=Vm,OI=[...Vm,Dm],Pk=OI;/**
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
 */class jp extends SI{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function At(n,e){const t=Re(n);return ji.N(t.ce,e)}/**
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
 */function Nv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function LI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eh(this.root,e,this.comparator,!0)}}class eh{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Mt.RED,this.left=o??Mt.EMPTY,this.right=a??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Mt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dv(this.data.getIterator())}getIteratorFrom(e){return new Dv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Dv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jo(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new cn([])}unionWith(e){let t=new We(st.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class MI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new MI("Invalid base64 string: "+a):a}})(e);return new yt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Ck=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=Ck.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jr(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
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
 */const FI="server_timestamp",UI="__type__",jI="__previous_value__",BI="__local_write_time__";function bm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[UI])===null||t===void 0?void 0:t.stringValue)===FI}function ld(n){const e=n.mapValue.fields[jI];return bm(e)?ld(e):e}function cu(n){const e=Yr(n.mapValue.fields[BI].timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class kk{constructor(e,t,r,o,a,u,d,f,_,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=_,this.isUsingEmulator=v}}const Lh="(default)";class Ks{constructor(e,t){this.projectId=e,this.database=t||Lh}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database===Lh}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Om="__type__",zI="__max__",Li={mapValue:{fields:{__type__:{stringValue:zI}}}},Lm="__vector__",va="value",gh={nullValue:"NULL_VALUE"};function $i(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bm(n)?4:$I(n)?9007199254740991:ud(n)?10:11:de(28295,{value:n})}function Ir(n,e){if(n===e)return!0;const t=$i(n);if(t!==$i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return cu(n).isEqual(cu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Yr(o.timestampValue),d=Yr(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Jr(o.bytesValue).isEqual(Jr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return tt(o.geoPointValue.latitude)===tt(a.geoPointValue.latitude)&&tt(o.geoPointValue.longitude)===tt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return tt(o.integerValue)===tt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=tt(o.doubleValue),d=tt(a.doubleValue);return u===d?ou(u)===ou(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return pa(n.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Nv(u)!==Nv(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Ir(u[f],d[f])))return!1;return!0})(n,e);default:return de(52216,{left:n})}}function hu(n,e){return(n.values||[]).find((t=>Ir(t,e)))!==void 0}function qi(n,e){if(n===e)return 0;const t=$i(n),r=$i(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=tt(a.integerValue||a.doubleValue),f=tt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Vv(n.timestampValue,e.timestampValue);case 4:return Vv(cu(n),cu(e));case 5:return Op(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Jr(a),f=Jr(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let _=0;_<d.length&&_<f.length;_++){const v=Se(d[_],f[_]);if(v!==0)return v}return Se(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Se(tt(a.latitude),tt(u.latitude));return d!==0?d:Se(tt(a.longitude),tt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return bv(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,_,v;const w=a.fields||{},T=u.fields||{},x=(d=w[va])===null||d===void 0?void 0:d.arrayValue,j=(f=T[va])===null||f===void 0?void 0:f.arrayValue,z=Se(((_=x==null?void 0:x.values)===null||_===void 0?void 0:_.length)||0,((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:bv(x,j)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Li.mapValue&&u===Li.mapValue)return 0;if(a===Li.mapValue)return 1;if(u===Li.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),_=u.fields||{},v=Object.keys(_);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Op(f[w],v[w]);if(T!==0)return T;const x=qi(d[f[w]],_[v[w]]);if(x!==0)return x}return Se(f.length,v.length)})(n.mapValue,e.mapValue);default:throw de(23264,{le:t})}}function Vv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Yr(n),r=Yr(e),o=Se(t.seconds,r.seconds);return o!==0?o:Se(t.nanos,r.nanos)}function bv(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=qi(t[o],r[o]);if(a)return a}return Se(t.length,r.length)}function Ea(n){return Bp(n)}function Bp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Yr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Jr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return oe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=Bp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${Bp(t.fields[u])}`;return o+"}"})(n.mapValue):de(61005,{value:n})}function _h(n){switch($i(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ld(n);return e?16+_h(e):16;case 5:return 2*n.stringValue.length;case 6:return Jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+_h(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Ji(r.fields,((a,u)=>{o+=a.length+_h(u)})),o})(n.mapValue);default:throw de(13486,{value:n})}}function du(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zp(n){return!!n&&"integerValue"in n}function fu(n){return!!n&&"arrayValue"in n}function Ov(n){return!!n&&"nullValue"in n}function Lv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yh(n){return!!n&&"mapValue"in n}function ud(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Om])===null||t===void 0?void 0:t.stringValue)===Lm}function Ql(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ji(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ql(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ql(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $I(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zI}const qI={mapValue:{fields:{[Om]:{stringValue:Lm},[va]:{arrayValue:{}}}}};function xk(n){return"nullValue"in n?gh:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?du(Ks.empty(),oe.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ud(n)?qI:{mapValue:{}}:de(35942,{value:n})}function Nk(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?du(Ks.empty(),oe.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?qI:"mapValue"in n?ud(n)?{mapValue:{}}:Li:de(61959,{value:n})}function Mv(n,e){const t=qi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Fv(n,e){const t=qi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!yh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ql(t)}setAll(e){let t=st.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=Ql(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());yh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];yh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Ji(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new Kt(Ql(this.value))}}function WI(n){const e=[];return Ji(n.fields,((t,r)=>{const o=new st([t]);if(yh(r)){const a=WI(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new cn(e)}/**
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
 */class at{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new at(e,0,ye.min(),ye.min(),ye.min(),Kt.empty(),0)}static newFoundDocument(e,t,r,o){return new at(e,1,t,ye.min(),r,o,0)}static newNoDocument(e,t){return new at(e,2,t,ye.min(),ye.min(),Kt.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,ye.min(),ye.min(),Kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wa{constructor(e,t){this.position=e,this.inclusive=t}}function Uv(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=oe.comparator(oe.fromName(u.referenceValue),t.key):r=qi(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function jv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ir(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class KI{}class De extends KI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Vk(e,t,r):t==="array-contains"?new Lk(e,r):t==="in"?new JI(e,r):t==="not-in"?new Mk(e,r):t==="array-contains-any"?new Fk(e,r):new De(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bk(e,r):new Ok(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qi(t,this.value)):t!==null&&$i(this.value)===$i(t)&&this.matchesComparison(qi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends KI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new qe(e,t)}matches(e){return Ia(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ia(n){return n.op==="and"}function $p(n){return n.op==="or"}function Mm(n){return HI(n)&&Ia(n)}function HI(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function qp(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+Ea(n.value);if(Mm(n))return n.filters.map((e=>qp(e))).join(",");{const e=n.filters.map((t=>qp(t))).join(",");return`${n.op}(${e})`}}function GI(n,e){return n instanceof De?(function(r,o){return o instanceof De&&r.op===o.op&&r.field.isEqual(o.field)&&Ir(r.value,o.value)})(n,e):n instanceof qe?(function(r,o){return o instanceof qe&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&GI(u,o.filters[d])),!0):!1})(n,e):void de(19439)}function QI(n,e){const t=n.filters.concat(e);return qe.create(t,n.op)}function XI(n){return n instanceof De?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ea(t.value)}`})(n):n instanceof qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(XI).join(" ,")+"}"})(n):"Filter"}class Vk extends De{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class bk extends De{constructor(e,t){super(e,"in",t),this.keys=YI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ok extends De{constructor(e,t){super(e,"not-in",t),this.keys=YI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function YI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>oe.fromName(r.referenceValue)))}class Lk extends De{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fu(t)&&hu(t.arrayValue,this.value)}}class JI extends De{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hu(this.value.arrayValue,t)}}class Mk extends De{constructor(e,t){super(e,"not-in",t)}matches(e){if(hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hu(this.value.arrayValue,t)}}class Fk extends De{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>hu(this.value.arrayValue,r)))}}/**
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
 */class Uk{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Wp(n,e=null,t=[],r=[],o=null,a=null,u=null){return new Uk(n,e,t,r,o,a,u)}function Hs(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>qp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),id(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ea(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ea(r))).join(",")),e.Pe=t}return e.Pe}function Pu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!GI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jv(n.startAt,e.startAt)&&jv(n.endAt,e.endAt)}function Mh(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fh(n,e){return n.filters.filter((t=>t instanceof De&&t.field.isEqual(e)))}function Bv(n,e,t){let r=gh,o=!0;for(const a of Fh(n,e)){let u=gh,d=!0;switch(a.op){case"<":case"<=":u=xk(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,d=!1;break;case"!=":case"not-in":u=gh}Mv({value:r,inclusive:o},{value:u,inclusive:d})<0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Mv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})<0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}function zv(n,e,t){let r=Li,o=!0;for(const a of Fh(n,e)){let u=Li,d=!0;switch(a.op){case">=":case">":u=Nk(a.value),d=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,d=!1;break;case"!=":case"not-in":u=Li}Fv({value:r,inclusive:o},{value:u,inclusive:d})>0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Fv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})>0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}/**
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
 */class Na{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jk(n,e,t,r,o,a,u,d){return new Na(n,e,t,r,o,a,u,d)}function Cu(n){return new Na(n)}function $v(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ZI(n){return n.collectionGroup!==null}function Xl(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new We(st.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new pu(a,r))})),t.has(st.keyField().canonicalString())||e.Te.push(new pu(st.keyField(),r))}return e.Te}function bn(n){const e=Re(n);return e.Ie||(e.Ie=Bk(e,Xl(n))),e.Ie}function Bk(n,e){if(n.limitType==="F")return Wp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new pu(o.field,a)}));const t=n.endAt?new wa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wa(n.startAt.position,n.startAt.inclusive):null;return Wp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Kp(n,e){const t=n.filters.concat([e]);return new Na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Hp(n,e,t){return new Na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cd(n,e){return Pu(bn(n),bn(e))&&n.limitType===e.limitType}function eT(n){return`${Hs(bn(n))}|lt:${n.limitType}`}function ia(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>XI(o))).join(", ")}]`),id(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>Ea(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>Ea(o))).join(",")),`Target(${r})`})(bn(n))}; limitType=${n.limitType})`}function ku(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):oe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of Xl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,f){const _=Uv(u,d,f);return u.inclusive?_<=0:_<0})(r.startAt,Xl(r),o)||r.endAt&&!(function(u,d,f){const _=Uv(u,d,f);return u.inclusive?_>=0:_>0})(r.endAt,Xl(r),o))})(n,e)}function zk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tT(n){return(e,t)=>{let r=!1;for(const o of Xl(n)){const a=$k(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function $k(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),_=d.data.field(a);return f!==null&&_!==null?qi(f,_):de(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:n.dir})}}/**
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
 */class Zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return LI(this.inner)}size(){return this.innerSize}}/**
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
 */const qk=new nt(oe.comparator);function En(){return qk}const nT=new nt(oe.comparator);function Ul(...n){let e=nT;for(const t of n)e=e.insert(t.key,t);return e}function rT(n){let e=nT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function mr(){return Yl()}function iT(){return Yl()}function Yl(){return new Zr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Wk=new nt(oe.comparator),Kk=new We(oe.comparator);function Ce(...n){let e=Kk;for(const t of n)e=e.add(t);return e}const Hk=new We(Se);function Gk(){return Hk}/**
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
 */function Fm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function sT(n){return{integerValue:""+n}}function Qk(n,e){return tk(e)?sT(e):Fm(n,e)}/**
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
 */class hd{constructor(){this._=void 0}}function Xk(n,e,t){return n instanceof Ta?(function(o,a){const u={fields:{[UI]:{stringValue:FI},[BI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&bm(a)&&(a=ld(a)),a&&(u.fields[jI]=a),{mapValue:u}})(t,e):n instanceof Sa?aT(n,e):n instanceof Aa?lT(n,e):(function(o,a){const u=oT(o,a),d=qv(u)+qv(o.Ee);return zp(u)&&zp(o.Ee)?sT(d):Fm(o.serializer,d)})(n,e)}function Yk(n,e,t){return n instanceof Sa?aT(n,e):n instanceof Aa?lT(n,e):t}function oT(n,e){return n instanceof mu?(function(r){return zp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Ta extends hd{}class Sa extends hd{constructor(e){super(),this.elements=e}}function aT(n,e){const t=uT(e);for(const r of n.elements)t.some((o=>Ir(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Aa extends hd{constructor(e){super(),this.elements=e}}function lT(n,e){let t=uT(e);for(const r of n.elements)t=t.filter((o=>!Ir(o,r)));return{arrayValue:{values:t}}}class mu extends hd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qv(n){return tt(n.integerValue||n.doubleValue)}function uT(n){return fu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cT{constructor(e,t){this.field=e,this.transform=t}}function Jk(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Sa&&o instanceof Sa||r instanceof Aa&&o instanceof Aa?pa(r.elements,o.elements,Ir):r instanceof mu&&o instanceof mu?Ir(r.Ee,o.Ee):r instanceof Ta&&o instanceof Ta})(n.transform,e.transform)}class Zk{constructor(e,t){this.version=e,this.transformResults=t}}class Zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dd{}function hT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fd(n.key,Zt.none()):new Da(n.key,n.data,Zt.none());{const t=n.data,r=Kt.empty();let o=new We(st.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new ei(n.key,r,new cn(o.toArray()),Zt.none())}}function ex(n,e,t){n instanceof Da?(function(o,a,u){const d=o.value.clone(),f=Kv(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ei?(function(o,a,u){if(!vh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Kv(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(dT(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Jl(n,e,t,r){return n instanceof Da?(function(a,u,d,f){if(!vh(a.precondition,u))return d;const _=a.value.clone(),v=Hv(a.fieldTransforms,f,u);return _.setAll(v),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof ei?(function(a,u,d,f){if(!vh(a.precondition,u))return d;const _=Hv(a.fieldTransforms,f,u),v=u.data;return v.setAll(dT(a)),v.setAll(_),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return vh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function tx(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=oT(r.transform,o||null);a!=null&&(t===null&&(t=Kt.empty()),t.set(r.field,a))}return t||null}function Wv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&pa(r,o,((a,u)=>Jk(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Da extends dd{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ei extends dd{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function dT(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Kv(n,e,t){const r=new Map;me(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,Yk(u,d,t[o]))}return r}function Hv(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,Xk(a,u,e))}return r}class fd extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fT extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Um{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&ex(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=iT();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=hT(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(ye.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,((t,r)=>Wv(t,r)))&&pa(this.baseMutations,e.baseMutations,((t,r)=>Wv(t,r)))}}class jm{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){me(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=(function(){return Wk})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new jm(e,t,r,o)}}/**
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
 */class Bm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,Le;function rx(n){switch(n){case W.OK:return de(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return de(15467,{code:n})}}function pT(n){if(n===void 0)return Jt("GRPC error has no .code"),W.UNKNOWN;switch(n){case pt.OK:return W.OK;case pt.CANCELLED:return W.CANCELLED;case pt.UNKNOWN:return W.UNKNOWN;case pt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case pt.INTERNAL:return W.INTERNAL;case pt.UNAVAILABLE:return W.UNAVAILABLE;case pt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case pt.NOT_FOUND:return W.NOT_FOUND;case pt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case pt.ABORTED:return W.ABORTED;case pt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case pt.DATA_LOSS:return W.DATA_LOSS;default:return de(39323,{code:n})}}(Le=pt||(pt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ix=new Ui([4294967295,4294967295],0);function Gv(n){const e=yI().encode(n),t=new cI;return t.update(e),new Uint8Array(t.digest())}function Qv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ui([t,r],0),new Ui([o,a],0)]}class zm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jl(`Invalid padding: ${t}`);if(r<0)throw new jl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ui.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(Ui.fromNumber(r)));return o.compare(ix)===1&&(o=new Ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Gv(e),[r,o]=Qv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new zm(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=Gv(e),[r,o]=Qv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pd(ye.min(),o,new nt(Se),En(),Ce())}}class xu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xu(r,t,Ce(),Ce(),Ce())}}/**
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
 */class Eh{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class mT{constructor(e,t){this.targetId=e,this.De=t}}class gT{constructor(e,t,r=yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Xv{constructor(){this.ve=0,this.Ce=Yv(),this.Fe=yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ce(),t=Ce(),r=Ce();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:de(38017,{changeType:a})}})),new xu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Yv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sx{constructor(e){this.We=e,this.Ge=new Map,this.ze=En(),this.je=th(),this.Je=th(),this.He=new nt(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:de(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if(Mh(a))if(r===0){const u=new oe(a.path);this.Xe(t,u,at.newNoDocument(u,ye.min()))}else me(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const _=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=Jr(r).toUint8Array()}catch(f){if(f instanceof MI)return wr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new zm(u,o,a)}catch(f){return wr(f instanceof jl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Mh(d.target)){const f=new oe(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,at.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Ce();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const _=this.st(f);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const o=new pd(e,t,this.He,this.ze,r);return this.ze=En(),this.je=th(),this.Je=th(),this.He=new nt(Se),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Xv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new We(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new We(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Xv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function th(){return new nt(oe.comparator)}function Yv(){return new nt(oe.comparator)}const ox={asc:"ASCENDING",desc:"DESCENDING"},ax={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lx={and:"AND",or:"OR"};class ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gp(n,e){return n.useProto3Json||id(e)?e:{value:e}}function Ra(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _T(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cx(n,e){return Ra(n,e.toTimestamp())}function en(n){return me(!!n,49232),ye.fromTimestamp((function(t){const r=Yr(t);return new ze(r.seconds,r.nanos)})(n))}function $m(n,e){return Qp(n,e).canonicalString()}function Qp(n,e){const t=(function(o){return new Be(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function yT(n){const e=Be.fromString(n);return me(PT(e),10190,{key:e.toString()}),e}function Uh(n,e){return $m(n.databaseId,e.path)}function Us(n,e){const t=yT(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(wT(t))}function vT(n,e){return $m(n.databaseId,e)}function ET(n){const e=yT(n);return e.length===4?Be.emptyPath():wT(e)}function Xp(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wT(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jv(n,e,t){return{name:Uh(n,e),fields:t.value.mapValue.fields}}function hx(n,e,t){const r=Us(n,e.name),o=en(e.updateTime),a=e.createTime?en(e.createTime):ye.min(),u=new Kt({mapValue:{fields:e.fields}}),d=at.newFoundDocument(r,o,a,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function dx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:de(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,v){return _.useProto3Json?(me(v===void 0||typeof v=="string",58123),yt.fromBase64String(v||"")):(me(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const v=_.code===void 0?W.UNKNOWN:pT(_.code);return new ne(v,_.message||"")})(u);t=new gT(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Us(n,r.document.name),a=en(r.document.updateTime),u=r.document.createTime?en(r.document.createTime):ye.min(),d=new Kt({mapValue:{fields:r.document.fields}}),f=at.newFoundDocument(o,a,u,d),_=r.targetIds||[],v=r.removedTargetIds||[];t=new Eh(_,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Us(n,r.document),a=r.readTime?en(r.readTime):ye.min(),u=at.newNoDocument(o,a),d=r.removedTargetIds||[];t=new Eh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Us(n,r.document),a=r.removedTargetIds||[];t=new Eh([],a,o,null)}else{if(!("filter"in e))return de(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new nx(o,a),d=r.targetId;t=new mT(d,u)}}return t}function jh(n,e){let t;if(e instanceof Da)t={update:Jv(n,e.key,e.value)};else if(e instanceof fd)t={delete:Uh(n,e.key)};else if(e instanceof ei)t={update:Jv(n,e.key,e.data),updateMask:yx(e.fieldMask)};else{if(!(e instanceof fT))return de(16599,{Rt:e.type});t={verify:Uh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Ta)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Sa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Aa)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof mu)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw de(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:cx(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:de(27497)})(n,e.precondition)),t}function Yp(n,e){const t=e.currentDocument?(function(a){return a.updateTime!==void 0?Zt.updateTime(en(a.updateTime)):a.exists!==void 0?Zt.exists(a.exists):Zt.none()})(e.currentDocument):Zt.none(),r=e.updateTransforms?e.updateTransforms.map((o=>(function(u,d){let f=null;if("setToServerValue"in d)me(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),f=new Ta;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new Sa(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new Aa(v)}else"increment"in d?f=new mu(u,d.increment):de(16584,{proto:d});const _=st.fromServerFormat(d.fieldPath);return new cT(_,f)})(n,o))):[];if(e.update){e.update.name;const o=Us(n,e.update.name),a=new Kt({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=(function(f){const _=f.fieldPaths||[];return new cn(_.map((v=>st.fromServerFormat(v))))})(e.updateMask);return new ei(o,a,u,t,r)}return new Da(o,a,t,r)}if(e.delete){const o=Us(n,e.delete);return new fd(o,t)}if(e.verify){const o=Us(n,e.verify);return new fT(o,t)}return de(1463,{proto:e})}function fx(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?en(o.updateTime):en(a);return u.isEqual(ye.min())&&(u=en(a)),new Zk(u,o.transformResults||[])})(t,e)))):[]}function IT(n,e){return{documents:[vT(n,e.path)]}}function TT(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vT(n,o);const a=(function(_){if(_.length!==0)return RT(qe.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((v=>(function(T){return{field:sa(T.field),direction:mx(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Gp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function ST(n){let e=ET(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){me(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=AT(w);return T instanceof qe&&Mm(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(j){return new pu(oa(j.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,id(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,x=w.values||[];return new wa(x,T)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const T=!w.before,x=w.values||[];return new wa(x,T)})(t.endAt)),jk(e,o,u,a,d,"F",f,_)}function px(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function AT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=oa(t.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=oa(t.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=oa(t.unaryFilter.field);return De.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=oa(t.unaryFilter.field);return De.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}})(n):n.fieldFilter!==void 0?(function(t){return De.create(oa(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qe.create(t.compositeFilter.filters.map((r=>AT(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return de(1026)}})(t.compositeFilter.op))})(n):de(30097,{filter:n})}function mx(n){return ox[n]}function gx(n){return ax[n]}function _x(n){return lx[n]}function sa(n){return{fieldPath:n.canonicalString()}}function oa(n){return st.fromServerFormat(n.fieldPath)}function RT(n){return n instanceof De?(function(t){if(t.op==="=="){if(Lv(t.value))return{unaryFilter:{field:sa(t.field),op:"IS_NAN"}};if(Ov(t.value))return{unaryFilter:{field:sa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lv(t.value))return{unaryFilter:{field:sa(t.field),op:"IS_NOT_NAN"}};if(Ov(t.value))return{unaryFilter:{field:sa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sa(t.field),op:gx(t.op),value:t.value}}})(n):n instanceof qe?(function(t){const r=t.getFilters().map((o=>RT(o)));return r.length===1?r[0]:{compositeFilter:{op:_x(t.op),filters:r}}})(n):de(54877,{filter:n})}function yx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function PT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Kr{constructor(e,t,r,o,a=ye.min(),u=ye.min(),d=yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CT{constructor(e){this.gt=e}}function vx(n,e){let t;if(e.document)t=hx(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=oe.fromSegments(e.noDocument.path),o=Qs(e.noDocument.readTime);t=at.newNoDocument(r,o),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return de(56709);{const r=oe.fromSegments(e.unknownDocument.path),o=Qs(e.unknownDocument.version);t=at.newUnknownDocument(r,o)}}return e.readTime&&t.setReadTime((function(o){const a=new ze(o[0],o[1]);return ye.fromTimestamp(a)})(e.readTime)),t}function Zv(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Bh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(a,u){return{name:Uh(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Ra(a,u.version.toTimestamp()),createTime:Ra(a,u.createTime.toTimestamp())}})(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Gs(e.version)};else{if(!e.isUnknownDocument())return de(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Gs(e.version)}}return r}function Bh(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Gs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Qs(n){const e=new ze(n.seconds,n.nanoseconds);return ye.fromTimestamp(e)}function Ds(n,e){const t=(e.baseMutations||[]).map((a=>Yp(n.gt,a)));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map((a=>Yp(n.gt,a))),o=ze.fromMillis(e.localWriteTimeMs);return new Um(e.batchId,o,t,r)}function Bl(n){const e=Qs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Qs(n.lastLimboFreeSnapshotVersion):ye.min();let r;return r=(function(a){return a.documents!==void 0})(n.query)?(function(a){const u=a.documents.length;return me(u===1,1966,{count:u}),bn(Cu(ET(a.documents[0])))})(n.query):(function(a){return bn(ST(a))})(n.query),new Kr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,yt.fromBase64String(n.resumeToken))}function kT(n,e){const t=Gs(e.snapshotVersion),r=Gs(e.lastLimboFreeSnapshotVersion);let o;o=Mh(e.target)?IT(n.gt,e.target):TT(n.gt,e.target).Vt;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Hs(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:o}}function xT(n){const e=ST({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hp(e,e.limit,"L"):e}function pp(n,e){return new Bm(e.largestBatchId,Yp(n.gt,e.overlayMutation))}function eE(n,e){const t=e.path.lastSegment();return[n,Ht(e.path.popLast()),t]}function tE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Gs(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Ex{getBundleMetadata(e,t){return nE(e).get(t).next((r=>{if(r)return(function(a){return{id:a.bundleId,createTime:Qs(a.createTime),version:a.version}})(r)}))}saveBundleMetadata(e,t){return nE(e).put((function(o){return{bundleId:o.id,createTime:Gs(en(o.createTime)),version:o.version}})(t))}getNamedQuery(e,t){return rE(e).get(t).next((r=>{if(r)return(function(a){return{name:a.name,query:xT(a.bundledQuery),readTime:Qs(a.readTime)}})(r)}))}saveNamedQuery(e,t){return rE(e).put((function(o){return{name:o.name,readTime:Gs(en(o.readTime)),bundledQuery:o.bundledQuery}})(t))}}function nE(n){return At(n,sd)}function rE(n){return At(n,od)}/**
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
 */class md{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new md(e,r)}getOverlay(e,t){return xl(e).get(eE(this.userId,t)).next((r=>r?pp(this.serializer,r):null))}getOverlays(e,t){const r=mr();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){const o=[];return r.forEach(((a,u)=>{const d=new Bm(t,u);o.push(this.wt(e,d))})),F.waitFor(o)}removeOverlaysForBatchId(e,t,r){const o=new Set;t.forEach((u=>o.add(Ht(u.getCollectionPath()))));const a=[];return o.forEach((u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(xl(e).Y(Up,d))})),F.waitFor(a)}getOverlaysForCollection(e,t,r){const o=mr(),a=Ht(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return xl(e).j(Up,u).next((d=>{for(const f of d){const _=pp(this.serializer,f);o.set(_.getKey(),_)}return o}))}getOverlaysForCollectionGroup(e,t,r,o){const a=mr();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xl(e).X({index:NI,range:d},((f,_,v)=>{const w=pp(this.serializer,_);a.size()<o||w.largestBatchId===u?(a.set(w.getKey(),w),u=w.largestBatchId):v.done()})).next((()=>a))}wt(e,t){return xl(e).put((function(o,a,u){const[d,f,_]=eE(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:_,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:jh(o.gt,u.mutation)}})(this.serializer,this.userId,t))}}function xl(n){return At(n,ad)}/**
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
 */class wx{St(e){return At(e,Dm)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?yt.fromUint8Array(r):yt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Vs{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(tt(e.integerValue));else if("doubleValue"in e){const r=tt(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),ou(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Yr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Jr(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?$I(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):ud(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):de(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const o of Object.keys(r))this.xt(o,t),this.Dt(r[o],t)}Lt(e,t){var r,o;const a=e.fields||{};this.Ct(t,53);const u=va,d=((o=(r=a[u].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.length)||0;this.Ct(t,15),t.Ft(tt(d)),this.xt(u,t),this.Dt(a[u],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const o of r)this.Dt(o,t)}Bt(e,t){this.Ct(t,37),oe.fromName(e).path.forEach((r=>{this.Ct(t,60),this.$t(r,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Vs.Ut=new Vs;/**
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
 */const Zo=255;function Ix(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function iE(n){const e=64-(function(r){let o=0;for(let a=0;a<8;++a){const u=Ix(255&r[a]);if(o+=u,u!==8)break}return o})(n);return Math.ceil(e/8)}class Tx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const o=t.codePointAt(0);this.Wt(240|o>>>18),this.Wt(128|63&o>>>12),this.Wt(128|63&o>>>6),this.Wt(128|63&o)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const o=t.codePointAt(0);this.jt(240|o>>>18),this.jt(128|63&o>>>12),this.jt(128|63&o>>>6),this.jt(128|63&o)}}this.Jt()}Zt(e){const t=this.Xt(e),r=iE(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=255&t[o]}tn(e){const t=this.Xt(e),r=iE(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=~(255&t[o])}nn(){this.rn(Zo),this.rn(255)}sn(){this._n(Zo),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let o=1;o<t.length;++o)t[o]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Zo?(this.rn(Zo),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Zo?(this._n(Zo),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}class Sx{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Ax{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Nl{constructor(){this.un=new Tx,this.cn=new Sx(this.un),this.ln=new Ax(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class bs{constructor(e,t,r,o){this.Pn=e,this.Tn=t,this.In=r,this.dn=o}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new bs(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:wh(this.In),directionalValue:wh(this.dn),orderedDocumentKey:wh(t),documentKey:r.path.toArray()}}Rn(e,t,r){const o=this.An(e,t,r);return[o.indexId,o.uid,o.arrayValue,o.directionalValue,o.orderedDocumentKey,o.documentKey]}}function Pi(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=sE(n.In,e.In),t!==0?t:(t=sE(n.dn,e.dn),t!==0?t:oe.comparator(n.Tn,e.Tn)))}function sE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function wh(n){return Tw()?(function(t){let r="";for(let o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r})(n):n}function oE(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(n)}class aE{constructor(e){this.Vn=new We(((t,r)=>st.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(me(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Lp(e);if(t!==void 0&&!this.yn(t))return!1;const r=ks(e);let o=new Set,a=0,u=0;for(;a<r.length&&this.yn(r[a]);++a)o=o.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.Vn.size>0){const d=this.Vn.getIterator().getNext();if(!o.has(d.field.canonicalString())){const f=r[a];if(!this.wn(d,f)||!this.Sn(this.mn[u++],f))return!1}++a}for(;a<r.length;++a){const d=r[a];if(u>=this.mn.length||!this.Sn(this.mn[u++],d))return!1}return!0}bn(){if(this.gn)return null;let e=new We(st.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new fh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new fh(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new fh(r.field,r.dir==="asc"?0:1)));return new Dh(Dh.UNKNOWN_ID,this.collectionId,t,su.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function NT(n){var e,t;if(me(n instanceof De||n instanceof qe,20012),n instanceof De){if(n instanceof JI){const o=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((a=>De.create(n.field,"==",a))))||[];return qe.create(o,"or")}return n}const r=n.filters.map((o=>NT(o)));return qe.create(r,n.op)}function Rx(n){if(n.getFilters().length===0)return[];const e=em(NT(n));return me(DT(e),7391),Jp(e)||Zp(e)?[e]:e.getFilters()}function Jp(n){return n instanceof De}function Zp(n){return n instanceof qe&&Mm(n)}function DT(n){return Jp(n)||Zp(n)||(function(t){if(t instanceof qe&&$p(t)){for(const r of t.getFilters())if(!Jp(r)&&!Zp(r))return!1;return!0}return!1})(n)}function em(n){if(me(n instanceof De||n instanceof qe,34018),n instanceof De)return n;if(n.filters.length===1)return em(n.filters[0]);const e=n.filters.map((r=>em(r)));let t=qe.create(e,n.op);return t=zh(t),DT(t)?t:(me(t instanceof qe,64498),me(Ia(t),40251),me(t.filters.length>1,57927),t.filters.reduce(((r,o)=>qm(r,o))))}function qm(n,e){let t;return me(n instanceof De||n instanceof qe,38388),me(e instanceof De||e instanceof qe,25473),t=n instanceof De?e instanceof De?(function(o,a){return qe.create([o,a],"and")})(n,e):lE(n,e):e instanceof De?lE(e,n):(function(o,a){if(me(o.filters.length>0&&a.filters.length>0,48005),Ia(o)&&Ia(a))return QI(o,a.getFilters());const u=$p(o)?o:a,d=$p(o)?a:o,f=u.filters.map((_=>qm(_,d)));return qe.create(f,"or")})(n,e),zh(t)}function lE(n,e){if(Ia(e))return QI(e,n.getFilters());{const t=e.filters.map((r=>qm(n,r)));return qe.create(t,"or")}}function zh(n){if(me(n instanceof De||n instanceof qe,11850),n instanceof De)return n;const e=n.getFilters();if(e.length===1)return zh(e[0]);if(HI(n))return n;const t=e.map((o=>zh(o))),r=[];return t.forEach((o=>{o instanceof De?r.push(o):o instanceof qe&&(o.op===n.op?r.push(...o.filters):r.push(o))})),r.length===1?r[0]:qe.create(r,n.op)}/**
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
 */class Px{constructor(){this.Dn=new Wm}addToCollectionParentIndex(e,t){return this.Dn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(wn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class Wm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new We(Be.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new We(Be.comparator)).toArray()}}/**
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
 */const uE="IndexedDbIndexManager",nh=new Uint8Array(0);class Cx{constructor(e,t){this.databaseId=t,this.vn=new Wm,this.Cn=new Zr((r=>Hs(r)),((r,o)=>Pu(r,o))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const a={collectionId:r,parent:Ht(o)};return cE(e).put(a)}return F.resolve()}getCollectionParents(e,t){const r=[],o=IDBKeyRange.bound([t,""],[vI(t),""],!1,!0);return cE(e).j(o).next((a=>{for(const u of a){if(u.collectionId!==t)break;r.push(pr(u.parent))}return r}))}addFieldIndex(e,t){const r=Dl(e),o=(function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map((f=>[f.fieldPath.canonicalString(),f.kind]))}})(t);delete o.indexId;const a=r.add(o);if(t.indexState){const u=ta(e);return a.next((d=>{u.put(tE(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return a.next()}deleteFieldIndex(e,t){const r=Dl(e),o=ta(e),a=ea(e);return r.delete(t.indexId).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Dl(e),r=ea(e),o=ta(e);return t.Y().next((()=>r.Y())).next((()=>o.Y()))}createTargetIndexes(e,t){return F.forEach(this.Fn(t),(r=>this.getIndexType(e,r).next((o=>{if(o===0||o===1){const a=new aE(r).bn();if(a!=null)return this.addFieldIndex(e,a)}}))))}getDocumentsMatchingTarget(e,t){const r=ea(e);let o=!0;const a=new Map;return F.forEach(this.Fn(t),(u=>this.Mn(e,u).next((d=>{o&&(o=!!d),a.set(u,d)})))).next((()=>{if(o){let u=Ce();const d=[];return F.forEach(a,((f,_)=>{J(uE,`Using index ${(function(Y){return`id=${Y.indexId}|cg=${Y.collectionGroup}|f=${Y.fields.map((ae=>`${ae.fieldPath}:${ae.kind}`)).join(",")}`})(f)} to execute ${Hs(t)}`);const v=(function(Y,ae){const Ie=Lp(ae);if(Ie===void 0)return null;for(const ge of Fh(Y,Ie.fieldPath))switch(ge.op){case"array-contains-any":return ge.value.arrayValue.values||[];case"array-contains":return[ge.value]}return null})(_,f),w=(function(Y,ae){const Ie=new Map;for(const ge of ks(ae))for(const k of Fh(Y,ge.fieldPath))switch(k.op){case"==":case"in":Ie.set(ge.fieldPath.canonicalString(),k.value);break;case"not-in":case"!=":return Ie.set(ge.fieldPath.canonicalString(),k.value),Array.from(Ie.values())}return null})(_,f),T=(function(Y,ae){const Ie=[];let ge=!0;for(const k of ks(ae)){const S=k.kind===0?Bv(Y,k.fieldPath,Y.startAt):zv(Y,k.fieldPath,Y.startAt);Ie.push(S.value),ge&&(ge=S.inclusive)}return new wa(Ie,ge)})(_,f),x=(function(Y,ae){const Ie=[];let ge=!0;for(const k of ks(ae)){const S=k.kind===0?zv(Y,k.fieldPath,Y.endAt):Bv(Y,k.fieldPath,Y.endAt);Ie.push(S.value),ge&&(ge=S.inclusive)}return new wa(Ie,ge)})(_,f),j=this.xn(f,_,T),z=this.xn(f,_,x),b=this.On(f,_,w),ie=this.Nn(f.indexId,v,j,T.inclusive,z,x.inclusive,b);return F.forEach(ie,(Q=>r.H(Q,t.limit).next((Y=>{Y.forEach((ae=>{const Ie=oe.fromSegments(ae.documentKey);u.has(Ie)||(u=u.add(Ie),d.push(Ie))}))}))))})).next((()=>d))}return F.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Rx(qe.create(e.filters,"and")).map((r=>Wp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,r,o,a,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),_=f/(t!=null?t.length:1),v=[];for(let w=0;w<f;++w){const T=t?this.Bn(t[w/_]):nh,x=this.Ln(e,T,r[w%_],o),j=this.kn(e,T,a[w%_],u),z=d.map((b=>this.Ln(e,T,b,!0)));v.push(...this.createRange(x,j,z))}return v}Ln(e,t,r,o){const a=new bs(e,oe.empty(),t,r);return o?a:a.En()}kn(e,t,r,o){const a=new bs(e,oe.empty(),t,r);return o?a.En():a}Mn(e,t){const r=new aE(t),o=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,o).next((a=>{let u=null;for(const d of a)r.pn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u}))}getIndexType(e,t){let r=2;const o=this.Fn(t);return F.forEach(o,(a=>this.Mn(e,a).next((u=>{u?r!==0&&u.fields.length<(function(f){let _=new We(st.comparator),v=!1;for(const w of f.filters)for(const T of w.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?v=!0:_=_.add(T.field));for(const w of f.orderBy)w.field.isKeyField()||(_=_.add(w.field));return _.size+(v?1:0)})(a)&&(r=1):r=0})))).next((()=>(function(u){return u.limit!==null})(t)&&o.length>1&&r===2?1:r))}qn(e,t){const r=new Nl;for(const o of ks(e)){const a=t.data.field(o.fieldPath);if(a==null)return null;const u=r.hn(o.kind);Vs.Ut.bt(a,u)}return r.an()}Bn(e){const t=new Nl;return Vs.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new Nl;return Vs.Ut.bt(du(this.databaseId,t),r.hn((function(a){const u=ks(a);return u.length===0?0:u[u.length-1].kind})(e))),r.an()}On(e,t,r){if(r===null)return[];let o=[];o.push(new Nl);let a=0;for(const u of ks(e)){const d=r[a++];for(const f of o)if(this.$n(t,u.fieldPath)&&fu(d))o=this.Un(o,u,d);else{const _=f.hn(u.kind);Vs.Ut.bt(d,_)}}return this.Kn(o)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const o=[...e],a=[];for(const u of r.arrayValue.values||[])for(const d of o){const f=new Nl;f.seed(d.an()),Vs.Ut.bt(u,f.hn(t.kind)),a.push(f)}return a}$n(e,t){return!!e.filters.find((r=>r instanceof De&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Dl(e),o=ta(e);return(t?r.j(Fp,IDBKeyRange.bound(t,t)):r.j()).next((a=>{const u=[];return F.forEach(a,(d=>o.get([d.indexId,this.uid]).next((f=>{u.push((function(v,w){const T=w?new su(w.sequenceNumber,new wn(Qs(w.readTime),new oe(pr(w.documentKey)),w.largestBatchId)):su.empty(),x=v.fields.map((([j,z])=>new fh(st.fromServerFormat(j),z)));return new Dh(v.indexId,v.collectionGroup,x,T)})(d,f))})))).next((()=>u))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,o)=>{const a=r.indexState.sequenceNumber-o.indexState.sequenceNumber;return a!==0?a:Se(r.collectionGroup,o.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const o=Dl(e),a=ta(e);return this.Wn(e).next((u=>o.j(Fp,IDBKeyRange.bound(t,t)).next((d=>F.forEach(d,(f=>a.put(tE(f.indexId,this.uid,u,r))))))))}updateIndexEntries(e,t){const r=new Map;return F.forEach(t,((o,a)=>{const u=r.get(o.collectionGroup);return(u?F.resolve(u):this.getFieldIndexes(e,o.collectionGroup)).next((d=>(r.set(o.collectionGroup,d),F.forEach(d,(f=>this.Gn(e,o,f).next((_=>{const v=this.zn(a,f);return _.isEqual(v)?F.resolve():this.jn(e,a,f,_,v)})))))))}))}Jn(e,t,r,o){return ea(e).put(o.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,o){return ea(e).delete(o.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const o=ea(e);let a=new We(Pi);return o.X({index:xI,range:IDBKeyRange.only([r.indexId,this.uid,wh(this.Qn(r,t))])},((u,d)=>{a=a.add(new bs(r.indexId,t,oE(d.arrayValue),oE(d.directionalValue)))})).next((()=>a))}zn(e,t){let r=new We(Pi);const o=this.qn(t,e);if(o==null)return r;const a=Lp(t);if(a!=null){const u=e.data.field(a.fieldPath);if(fu(u))for(const d of u.arrayValue.values||[])r=r.add(new bs(t.indexId,e.key,this.Bn(d),o))}else r=r.add(new bs(t.indexId,e.key,nh,o));return r}jn(e,t,r,o,a){J(uE,"Updating index entries for document '%s'",t.key);const u=[];return(function(f,_,v,w,T){const x=f.getIterator(),j=_.getIterator();let z=Jo(x),b=Jo(j);for(;z||b;){let ie=!1,Q=!1;if(z&&b){const Y=v(z,b);Y<0?Q=!0:Y>0&&(ie=!0)}else z!=null?Q=!0:ie=!0;ie?(w(b),b=Jo(j)):Q?(T(z),z=Jo(x)):(z=Jo(x),b=Jo(j))}})(o,a,Pi,(d=>{u.push(this.Jn(e,t,r,d))}),(d=>{u.push(this.Hn(e,t,r,d))})),F.waitFor(u)}Wn(e){let t=1;return ta(e).X({index:kI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,o,a)=>{a.done(),t=o.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((u,d)=>Pi(u,d))).filter(((u,d,f)=>!d||Pi(u,f[d-1])!==0));const o=[];o.push(e);for(const u of r){const d=Pi(u,e),f=Pi(u,t);if(d===0)o[0]=e.En();else if(d>0&&f<0)o.push(u),o.push(u.En());else if(f>0)break}o.push(t);const a=[];for(let u=0;u<o.length;u+=2){if(this.Yn(o[u],o[u+1]))return[];const d=o[u].Rn(this.uid,nh,oe.empty()),f=o[u+1].Rn(this.uid,nh,oe.empty());a.push(IDBKeyRange.bound(d,f))}return a}Yn(e,t){return Pi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(hE)}getMinOffset(e,t){return F.mapArray(this.Fn(t),(r=>this.Mn(e,r).next((o=>o||de(44426))))).next(hE)}}function cE(n){return At(n,uu)}function ea(n){return At(n,Gl)}function Dl(n){return At(n,Nm)}function ta(n){return At(n,Hl)}function hE(n){me(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const o=n[r].indexState.offset;Cm(o,e)<0&&(e=o),t<o.largestBatchId&&(t=o.largestBatchId)}return new wn(e.readTime,e.documentKey,t)}/**
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
 */const dE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VT=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function bT(n,e,t){const r=n.store(Xn),o=n.store(ma),a=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.X({range:u},((v,w,T)=>(d++,T.delete())));a.push(f.next((()=>{me(d===1,47070,{batchId:t.batchId})})));const _=[];for(const v of t.mutations){const w=RI(e,v.key.path,t.batchId);a.push(o.delete(w)),_.push(v.key)}return F.waitFor(a).next((()=>_))}function $h(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw de(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(VT,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class gd{constructor(e,t,r,o){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=o,this.Zn={}}static yt(e,t,r,o){me(e.uid!=="",64387);const a=e.isAuthenticated()?e.uid:"";return new gd(a,t,r,o)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ci(e).X({index:Os,range:r},((o,a,u)=>{t=!1,u.done()})).next((()=>t))}addMutationBatch(e,t,r,o){const a=aa(e),u=Ci(e);return u.add({}).next((d=>{me(typeof d=="number",49019);const f=new Um(d,t,r,o),_=(function(x,j,z){const b=z.baseMutations.map((Q=>jh(x.gt,Q))),ie=z.mutations.map((Q=>jh(x.gt,Q)));return{userId:j,batchId:z.batchId,localWriteTimeMs:z.localWriteTime.toMillis(),baseMutations:b,mutations:ie}})(this.serializer,this.userId,f),v=[];let w=new We(((T,x)=>Se(T.canonicalString(),x.canonicalString())));for(const T of o){const x=RI(this.userId,T.key.path,d);w=w.add(T.key.path.popLast()),v.push(u.put(_)),v.push(a.put(x,ik))}return w.forEach((T=>{v.push(this.indexManager.addToCollectionParentIndex(e,T))})),e.addOnCommittedListener((()=>{this.Zn[d]=f.keys()})),F.waitFor(v).next((()=>f))}))}lookupMutationBatch(e,t){return Ci(e).get(t).next((r=>r?(me(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Ds(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?F.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const o=r.keys();return this.Zn[t]=o,o}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return Ci(e).X({index:Os,range:o},((u,d,f)=>{d.userId===this.userId&&(me(d.batchId>=r,47524,{er:r}),a=Ds(this.serializer,d)),f.done()})).next((()=>a))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Ms;return Ci(e).X({index:Os,range:t,reverse:!0},((o,a,u)=>{r=a.batchId,u.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ms],[this.userId,Number.POSITIVE_INFINITY]);return Ci(e).j(Os,t).next((r=>r.map((o=>Ds(this.serializer,o)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ph(this.userId,t.path),o=IDBKeyRange.lowerBound(r),a=[];return aa(e).X({range:o},((u,d,f)=>{const[_,v,w]=u,T=pr(v);if(_===this.userId&&t.path.isEqual(T))return Ci(e).get(w).next((x=>{if(!x)throw de(61480,{tr:u,batchId:w});me(x.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:x.userId,batchId:w}),a.push(Ds(this.serializer,x))}));f.done()})).next((()=>a))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(Se);const o=[];return t.forEach((a=>{const u=ph(this.userId,a.path),d=IDBKeyRange.lowerBound(u),f=aa(e).X({range:d},((_,v,w)=>{const[T,x,j]=_,z=pr(x);T===this.userId&&a.path.isEqual(z)?r=r.add(j):w.done()}));o.push(f)})),F.waitFor(o).next((()=>this.nr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1,a=ph(this.userId,r),u=IDBKeyRange.lowerBound(a);let d=new We(Se);return aa(e).X({range:u},((f,_,v)=>{const[w,T,x]=f,j=pr(T);w===this.userId&&r.isPrefixOf(j)?j.length===o&&(d=d.add(x)):v.done()})).next((()=>this.nr(e,d)))}nr(e,t){const r=[],o=[];return t.forEach((a=>{o.push(Ci(e).get(a).next((u=>{if(u===null)throw de(35274,{batchId:a});me(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:a}),r.push(Ds(this.serializer,u))})))})),F.waitFor(o).next((()=>r))}removeMutationBatch(e,t){return bT(e.ce,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),F.forEach(r,(o=>this.referenceDelegate.markPotentiallyOrphaned(e,o))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return F.resolve();const r=IDBKeyRange.lowerBound((function(u){return[u]})(this.userId)),o=[];return aa(e).X({range:r},((a,u,d)=>{if(a[0]===this.userId){const f=pr(a[1]);o.push(f)}else d.done()})).next((()=>{me(o.length===0,56720,{ir:o.map((a=>a.canonicalString()))})}))}))}containsKey(e,t){return OT(e,this.userId,t)}sr(e){return LT(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ms,lastStreamToken:""}))}}function OT(n,e,t){const r=ph(e,t.path),o=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return aa(n).X({range:a,Z:!0},((d,f,_)=>{const[v,w,T]=d;v===e&&w===o&&(u=!0),_.done()})).next((()=>u))}function Ci(n){return At(n,Xn)}function aa(n){return At(n,ma)}function LT(n){return At(n,au)}/**
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
 */class Xs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Xs(0)}static ur(){return new Xs(-1)}}/**
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
 */class kx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const r=new Xs(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>ye.fromTimestamp(new ze(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.cr(e).next((o=>(o.highestListenSequenceNumber=t,r&&(o.lastRemoteSnapshotVersion=r.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),this.lr(e,o))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>na(e).delete(t.targetId))).next((()=>this.cr(e))).next((r=>(me(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r))))}removeTargets(e,t,r){let o=0;const a=[];return na(e).X(((u,d)=>{const f=Bl(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(o++,a.push(this.removeTargetData(e,f)))})).next((()=>F.waitFor(a))).next((()=>o))}forEachTarget(e,t){return na(e).X(((r,o)=>{const a=Bl(o);t(a)}))}cr(e){return fE(e).get(Oh).next((t=>(me(t!==null,2888),t)))}lr(e,t){return fE(e).put(Oh,t)}hr(e,t){return na(e).put(kT(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Hs(t),o=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return na(e).X({range:o,index:CI},((u,d,f)=>{const _=Bl(d);Pu(t,_.target)&&(a=_,f.done())})).next((()=>a))}addMatchingKeys(e,t,r){const o=[],a=bi(e);return t.forEach((u=>{const d=Ht(u.path);o.push(a.put({targetId:r,path:d})),o.push(this.referenceDelegate.addReference(e,r,u))})),F.waitFor(o)}removeMatchingKeys(e,t,r){const o=bi(e);return F.forEach(t,(a=>{const u=Ht(a.path);return F.waitFor([o.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])}))}removeMatchingKeysForTargetId(e,t){const r=bi(e),o=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(o)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),o=bi(e);let a=Ce();return o.X({range:r,Z:!0},((u,d,f)=>{const _=pr(u[1]),v=new oe(_);a=a.add(v)})).next((()=>a))}containsKey(e,t){const r=Ht(t.path),o=IDBKeyRange.bound([r],[vI(r)],!1,!0);let a=0;return bi(e).X({index:xm,Z:!0,range:o},(([u,d],f,_)=>{u!==0&&(a++,_.done())})).next((()=>a>0))}Et(e,t){return na(e).get(t).next((r=>r?Bl(r):null))}}function na(n){return At(n,ga)}function fE(n){return At(n,Fs)}function bi(n){return At(n,_a)}/**
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
 */const pE="LruGarbageCollector",xx=1048576;function mE([n,e],[t,r]){const o=Se(n,t);return o===0?Se(e,r):o}class Nx{constructor(e){this.Tr=e,this.buffer=new We(mE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){J(pE,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yi(t)?J(pE,"Ignoring IndexedDB error during garbage collection: ",t):await to(t)}await this.Rr(3e5)}))}}class Dx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Vn.ue);const r=new Nx(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(dE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dE):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,f,_;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),ra()<=Ne.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(_-f)+`ms
Total Duration: ${_-v}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function FT(n,e){return new Dx(n,e)}/**
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
 */class Vx{constructor(e,t){this.db=e,this.garbageCollector=FT(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((r,o)=>t(o)))}addReference(e,t,r){return rh(e,r)}removeReference(e,t,r){return rh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return rh(e,t)}Sr(e,t){return(function(o,a){let u=!1;return LT(o).ee((d=>OT(o,d,a).next((f=>(f&&(u=!0),F.resolve(!f)))))).next((()=>u))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[];let a=0;return this.wr(e,((u,d)=>{if(d<=t){const f=this.Sr(e,u).next((_=>{if(!_)return a++,r.getEntry(e,u).next((()=>(r.removeEntry(u,ye.min()),bi(e).delete((function(w){return[0,Ht(w.path)]})(u)))))}));o.push(f)}})).next((()=>F.waitFor(o))).next((()=>r.apply(e))).next((()=>a))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return rh(e,t)}wr(e,t){const r=bi(e);let o,a=Vn.ue;return r.X({index:xm},(([u,d],{path:f,sequenceNumber:_})=>{u===0?(a!==Vn.ue&&t(new oe(pr(o)),a),a=_,o=f):a=Vn.ue})).next((()=>{a!==Vn.ue&&t(new oe(pr(o)),a)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rh(n,e){return bi(n).put((function(r,o){return{targetId:0,path:Ht(r.path),sequenceNumber:o}})(e,n.currentSequenceNumber))}/**
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
 */class UT{constructor(){this.changes=new Zr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Ps(e).put(r)}removeEntry(e,t,r){return Ps(e).delete((function(a,u){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Bh(u),d[d.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=at.newInvalidDocument(t);return Ps(e).X({index:mh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r=this.Dr(t,a)})).next((()=>r))}vr(e,t){let r={size:0,document:at.newInvalidDocument(t)};return Ps(e).X({index:mh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r={document:this.Dr(t,a),size:$h(a)}})).next((()=>r))}getEntries(e,t){let r=En();return this.Cr(e,t,((o,a)=>{const u=this.Dr(o,a);r=r.insert(o,u)})).next((()=>r))}Fr(e,t){let r=En(),o=new nt(oe.comparator);return this.Cr(e,t,((a,u)=>{const d=this.Dr(a,u);r=r.insert(a,d),o=o.insert(a,$h(u))})).next((()=>({documents:r,Mr:o})))}Cr(e,t,r){if(t.isEmpty())return F.resolve();let o=new We(yE);t.forEach((f=>o=o.add(f)));const a=IDBKeyRange.bound(Vl(o.first()),Vl(o.last())),u=o.getIterator();let d=u.getNext();return Ps(e).X({index:mh,range:a},((f,_,v)=>{const w=oe.fromSegments([..._.prefixPath,_.collectionGroup,_.documentId]);for(;d&&yE(d,w)<0;)r(d,null),d=u.getNext();d&&d.isEqual(w)&&(r(d,_),d=u.hasNext()?u.getNext():null),d?v.G(Vl(d)):v.done()})).next((()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null}))}getDocumentsMatchingQuery(e,t,r,o,a){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Bh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ps(e).j(IDBKeyRange.bound(d,f,!0)).next((_=>{a==null||a.incrementDocumentReadCount(_.length);let v=En();for(const w of _){const T=this.Dr(oe.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);T.isFoundDocument()&&(ku(t,T)||o.has(T.key))&&(v=v.insert(T.key,T))}return v}))}getAllFromCollectionGroup(e,t,r,o){let a=En();const u=_E(t,r),d=_E(t,wn.max());return Ps(e).X({index:PI,range:IDBKeyRange.bound(u,d,!0)},((f,_,v)=>{const w=this.Dr(oe.fromSegments(_.prefixPath.concat(_.collectionGroup,_.documentId)),_);a=a.insert(w.key,w),a.size===o&&v.done()})).next((()=>a))}newChangeBuffer(e){return new Ox(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return gE(e).get(Mp).next((t=>(me(!!t,20021),t)))}br(e,t){return gE(e).put(Mp,t)}Dr(e,t){if(t){const r=vx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ye.min())))return r}return at.newInvalidDocument(e)}}function jT(n){return new bx(n)}class Ox extends UT{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Zr((r=>r.toString()),((r,o)=>r.isEqual(o)))}applyChanges(e){const t=[];let r=0,o=new We(((a,u)=>Se(a.canonicalString(),u.canonicalString())));return this.changes.forEach(((a,u)=>{const d=this.Nr.get(a);if(t.push(this.Or.removeEntry(e,a,d.readTime)),u.isValidDocument()){const f=Zv(this.Or.serializer,u);o=o.add(a.path.popLast());const _=$h(f);r+=_-d.size,t.push(this.Or.addEntry(e,a,f))}else if(r-=d.size,this.trackRemovals){const f=Zv(this.Or.serializer,u.convertToNoDocument(ye.min()));t.push(this.Or.addEntry(e,a,f))}})),o.forEach((a=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,a))})),t.push(this.Or.updateMetadata(e,r)),F.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:r,Mr:o})=>(o.forEach(((a,u)=>{this.Nr.set(a,{size:u,readTime:r.get(a).readTime})})),r)))}}function gE(n){return At(n,lu)}function Ps(n){return At(n,bh)}function Vl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function _E(n,e){const t=e.documentKey.path.toArray();return[n,Bh(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function yE(n,e){const t=n.path.toArray(),r=e.path.toArray();let o=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(o=Se(t[a],r[a]),o)return o;return o=Se(t.length,r.length),o||(o=Se(t[t.length-2],r[r.length-2]),o||Se(t[t.length-1],r[r.length-1]))}/**
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
 */class Lx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class BT{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Jl(r.mutation,o,cn.empty(),ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ce()){const o=mr();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Ul();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=mr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ce())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=En();const u=Yl(),d=(function(){return Yl()})();return t.forEach(((f,_)=>{const v=r.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof ei)?a=a.insert(_.key,_):v!==void 0?(u.set(_.key,v.mutation.getFieldMask()),Jl(v.mutation,_,v.mutation.getFieldMask(),ze.now())):u.set(_.key,cn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((_,v)=>u.set(_,v))),t.forEach(((_,v)=>{var w;return d.set(_,new Lx(v,(w=u.get(_))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Yl();let o=new nt(((u,d)=>u-d)),a=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const _=t.get(f);if(_===null)return;let v=r.get(f)||cn.empty();v=d.applyToLocalView(_,v),r.set(f,v);const w=(o.get(d.batchId)||Ce()).add(f);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),_=f.key,v=f.value,w=iT();v.forEach((T=>{if(!a.has(T)){const x=hT(t.get(T),r.get(T));x!==null&&w.set(T,x),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return F.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return oe.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ZI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):F.resolve(mr());let d=iu,f=a;return u.next((_=>F.forEach(_,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?F.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,f,_,Ce()))).next((v=>({batchId:d,changes:rT(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((r=>{let o=Ul();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Ul();return this.indexManager.getCollectionParents(e,a).next((d=>F.forEach(d,(f=>{const _=(function(w,T){return new Na(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((f,_)=>{const v=_.getKey();u.get(v)===null&&(u=u.insert(v,at.newInvalidDocument(v)))}));let d=Ul();return u.forEach(((f,_)=>{const v=a.get(f);v!==void 0&&Jl(v.mutation,_,cn.empty(),ze.now()),ku(t,_)&&(d=d.insert(f,_))})),d}))}}/**
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
 */class Mx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return F.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:en(o.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:xT(o.bundledQuery),readTime:en(o.readTime)}})(t)),F.resolve()}}/**
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
 */class Fx{constructor(){this.overlays=new nt(oe.comparator),this.kr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mr();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.wt(e,t,a)})),F.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const o=mr(),a=t.length+1,u=new oe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,_=f.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return F.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new nt(((_,v)=>_-v));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let v=a.get(_.largestBatchId);v===null&&(v=mr(),a=a.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const d=mr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((_,v)=>d.set(_,v))),!(d.size()>=o)););return F.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Bm(t,r));let a=this.kr.get(t);a===void 0&&(a=Ce(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class Ux{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class Km{constructor(){this.qr=new We(Nt.Qr),this.$r=new We(Nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Nt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Nt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new oe(new Be([])),r=new Nt(t,e),o=new Nt(t,e+1),a=[];return this.$r.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new oe(new Be([])),r=new Nt(t,e),o=new Nt(t,e+1);let a=Ce();return this.$r.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Nt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Nt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return oe.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||oe.comparator(e.key,t.key)}}/**
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
 */class jx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new We(Nt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Um(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new Nt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,t){return F.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return F.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Ms:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],(u=>{const d=this.Zr(u.Hr);a.push(d)})),F.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(Se);return t.forEach((o=>{const a=new Nt(o,0),u=new Nt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;oe.isDocumentKey(a)||(a=a.child(""));const u=new Nt(new oe(a),0);let d=new We(Se);return this.Yr.forEachWhile((f=>{const _=f.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(f.Hr)),!0)}),u),F.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){me(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(t.mutations,(o=>{const a=new Nt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Nt(t,0),o=this.Yr.firstAfterOrEqual(r);return F.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Bx{constructor(e){this.ni=e,this.docs=(function(){return new nt(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let r=En();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():at.newInvalidDocument(o))})),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=En();const u=t.path,d=new oe(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:_,value:{document:v}}=f.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||Cm(II(v),r)<=0||(o.has(v.key)||ku(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return F.resolve(a)}getAllFromCollectionGroup(e,t,r,o){de(9500)}ri(e,t){return F.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new zx(this)}getSize(e){return F.resolve(this.size)}}class zx extends UT{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)})),F.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class $x{constructor(e){this.persistence=e,this.ii=new Zr((t=>Hs(t)),Pu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.si=0,this.oi=new Km,this.targetCount=0,this._i=Xs.ar()}forEachTarget(e,t){return this.ii.forEach(((r,o)=>t(o))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),F.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Xs(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.hr(t),F.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),F.waitFor(a).next((()=>o))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),F.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.oi.containsKey(t))}}/**
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
 */class Hm{constructor(e,t){this.ai={},this.overlays={},this.ui=new Vn(0),this.ci=!1,this.ci=!0,this.li=new Ux,this.referenceDelegate=e(this),this.hi=new $x(this),this.indexManager=new Px,this.remoteDocumentCache=(function(o){return new Bx(o)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new CT(t),this.Ti=new Mx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new jx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const o=new qx(this.ui.next());return this.referenceDelegate.Ii(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class qx extends SI{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.Ai=new Km,this.Ri=null}static Vi(e){return new _d(e)}get mi(){if(this.Ri)return this.Ri;throw de(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const o=oe.fromPath(r);return this.fi(e,o).next((a=>{a||t.removeEntry(o,ye.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return F.or([()=>F.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qh{constructor(e,t){this.persistence=e,this.gi=new Zr((r=>Ht(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=FT(this,t)}static Vi(e,t){return new qh(e,t)}Ii(){}di(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return F.forEach(this.gi,((r,o)=>this.Sr(e,r,o).next((a=>a?F.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,ye.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_h(e.data.value)),t}Sr(e,t,r){return F.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return F.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wx{constructor(e){this.serializer=e}q(e,t,r,o){const a=new rd("createOrUpgrade",t);r<1&&o>=1&&((function(f){f.createObjectStore(Ru)})(e),(function(f){f.createObjectStore(au,{keyPath:rk}),f.createObjectStore(Xn,{keyPath:kv,autoIncrement:!0}).createIndex(Os,xv,{unique:!0}),f.createObjectStore(ma)})(e),vE(e),(function(f){f.createObjectStore(xs)})(e));let u=F.resolve();return r<3&&o>=3&&(r!==0&&((function(f){f.deleteObjectStore(_a),f.deleteObjectStore(ga),f.deleteObjectStore(Fs)})(e),vE(e)),u=u.next((()=>(function(f){const _=f.store(Fs),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ye.min().toTimestamp(),targetCount:0};return _.put(Oh,v)})(a)))),r<4&&o>=4&&(r!==0&&(u=u.next((()=>(function(f,_){return _.store(Xn).j().next((w=>{f.deleteObjectStore(Xn),f.createObjectStore(Xn,{keyPath:kv,autoIncrement:!0}).createIndex(Os,xv,{unique:!0});const T=_.store(Xn),x=w.map((j=>T.put(j)));return F.waitFor(x)}))})(e,a)))),u=u.next((()=>{(function(f){f.createObjectStore(ya,{keyPath:dk})})(e)}))),r<5&&o>=5&&(u=u.next((()=>this.pi(a)))),r<6&&o>=6&&(u=u.next((()=>((function(f){f.createObjectStore(lu)})(e),this.yi(a))))),r<7&&o>=7&&(u=u.next((()=>this.wi(a)))),r<8&&o>=8&&(u=u.next((()=>this.Si(e,a)))),r<9&&o>=9&&(u=u.next((()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&o>=10&&(u=u.next((()=>this.bi(a)))),r<11&&o>=11&&(u=u.next((()=>{(function(f){f.createObjectStore(sd,{keyPath:fk})})(e),(function(f){f.createObjectStore(od,{keyPath:pk})})(e)}))),r<12&&o>=12&&(u=u.next((()=>{(function(f){const _=f.createObjectStore(ad,{keyPath:wk});_.createIndex(Up,Ik,{unique:!1}),_.createIndex(NI,Tk,{unique:!1})})(e)}))),r<13&&o>=13&&(u=u.next((()=>(function(f){const _=f.createObjectStore(bh,{keyPath:sk});_.createIndex(mh,ok),_.createIndex(PI,ak)})(e))).next((()=>this.Di(e,a))).next((()=>e.deleteObjectStore(xs)))),r<14&&o>=14&&(u=u.next((()=>this.Ci(e,a)))),r<15&&o>=15&&(u=u.next((()=>(function(f){f.createObjectStore(Nm,{keyPath:mk,autoIncrement:!0}).createIndex(Fp,gk,{unique:!1}),f.createObjectStore(Hl,{keyPath:_k}).createIndex(kI,yk,{unique:!1}),f.createObjectStore(Gl,{keyPath:vk}).createIndex(xI,Ek,{unique:!1})})(e)))),r<16&&o>=16&&(u=u.next((()=>{t.objectStore(Hl).clear()})).next((()=>{t.objectStore(Gl).clear()}))),r<17&&o>=17&&(u=u.next((()=>{(function(f){f.createObjectStore(Dm,{keyPath:Sk})})(e)}))),r<18&&o>=18&&Tw()&&(u=u.next((()=>{t.objectStore(Hl).clear()})).next((()=>{t.objectStore(Gl).clear()}))),u}yi(e){let t=0;return e.store(xs).X(((r,o)=>{t+=$h(o)})).next((()=>{const r={byteSize:t};return e.store(lu).put(Mp,r)}))}pi(e){const t=e.store(au),r=e.store(Xn);return t.j().next((o=>F.forEach(o,(a=>{const u=IDBKeyRange.bound([a.userId,Ms],[a.userId,a.lastAcknowledgedBatchId]);return r.j(Os,u).next((d=>F.forEach(d,(f=>{me(f.userId===a.userId,18650,"Cannot process batch from unexpected user",{batchId:f.batchId});const _=Ds(this.serializer,f);return bT(e,a.userId,_).next((()=>{}))}))))}))))}wi(e){const t=e.store(_a),r=e.store(xs);return e.store(Fs).get(Oh).next((o=>{const a=[];return r.X(((u,d)=>{const f=new Be(u),_=(function(w){return[0,Ht(w)]})(f);a.push(t.get(_).next((v=>v?F.resolve():(w=>t.put({targetId:0,path:Ht(w),sequenceNumber:o.highestListenSequenceNumber}))(f))))})).next((()=>F.waitFor(a)))}))}Si(e,t){e.createObjectStore(uu,{keyPath:hk});const r=t.store(uu),o=new Wm,a=u=>{if(o.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:Ht(f)})}};return t.store(xs).X({Z:!0},((u,d)=>{const f=new Be(u);return a(f.popLast())})).next((()=>t.store(ma).X({Z:!0},(([u,d,f],_)=>{const v=pr(d);return a(v.popLast())}))))}bi(e){const t=e.store(ga);return t.X(((r,o)=>{const a=Bl(o),u=kT(this.serializer,a);return t.put(u)}))}Di(e,t){const r=t.store(xs),o=[];return r.X(((a,u)=>{const d=t.store(bh),f=(function(w){return w.document?new oe(Be.fromString(w.document.name).popFirst(5)):w.noDocument?oe.fromSegments(w.noDocument.path):w.unknownDocument?oe.fromSegments(w.unknownDocument.path):de(36783)})(u).path.toArray(),_={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};o.push(d.put(_))})).next((()=>F.waitFor(o)))}Ci(e,t){const r=t.store(Xn),o=jT(this.serializer),a=new Hm(_d.Vi,this.serializer.gt);return r.j().next((u=>{const d=new Map;return u.forEach((f=>{var _;let v=(_=d.get(f.userId))!==null&&_!==void 0?_:Ce();Ds(this.serializer,f).keys().forEach((w=>v=v.add(w))),d.set(f.userId,v)})),F.forEach(d,((f,_)=>{const v=new Lt(_),w=md.yt(this.serializer,v),T=a.getIndexManager(v),x=gd.yt(v,this.serializer,T,a.referenceDelegate);return new BT(o,x,w,T).recalculateAndSaveOverlaysForDocumentKeys(new jp(t,Vn.ue),f).next()}))}))}}function vE(n){n.createObjectStore(_a,{keyPath:uk}).createIndex(xm,ck,{unique:!0}),n.createObjectStore(ga,{keyPath:"targetId"}).createIndex(CI,lk,{unique:!0}),n.createObjectStore(Fs)}const ki="IndexedDbPersistence",mp=18e5,gp=5e3,_p="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Kx="main";class Gm{constructor(e,t,r,o,a,u,d,f,_,v,w=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=a,this.window=u,this.document=d,this.Mi=_,this.xi=v,this.Oi=w,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=T=>Promise.resolve(),!Gm.C())throw new ne(W.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vx(this,o),this.Qi=t+Kx,this.serializer=new CT(f),this.$i=new ji(this.Qi,this.Oi,new Wx(this.serializer)),this.li=new wx,this.hi=new kx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jT(this.serializer),this.Ti=new Ex,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,v===!1&&Jt(ki,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ne(W.FAILED_PRECONDITION,_p);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new Vn(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ih(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Yi(e))return J(ki,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return J(ki,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return bl(e).get(Yo).next((t=>F.resolve(this.Xi(t))))}es(e){return ih(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,mp)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=At(t,ya);return r.j().next((o=>{const a=this.rs(o,mp),u=o.filter((d=>a.indexOf(d)===-1));return F.forEach(u,(d=>r.delete(d.clientId))).next((()=>u))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?F.resolve(!0):bl(e).get(Yo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,gp)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new ne(W.FAILED_PRECONDITION,_p);return!1}}return!(!this.networkEnabled||!this.inForeground)||ih(e).j().next((r=>this.rs(r,gp).find((o=>{if(this.clientId!==o.clientId){const a=!this.networkEnabled&&o.networkEnabled,u=!this.inForeground&&o.inForeground,d=this.networkEnabled===o.networkEnabled;if(a||u&&d)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&J(ki,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Ru,ya],(e=>{const t=new jp(e,Vn.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>ih(e).j().next((t=>this.rs(t,mp).map((r=>r.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return gd.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Cx(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return md.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){J(ki,"Starting transaction:",e);const o=t==="readonly"?"readonly":"readwrite",a=(function(f){return f===18?Pk:f===17?OI:f===16?Rk:f===15?Vm:f===14?bI:f===13?VI:f===12?Ak:f===11?DI:void de(60245)})(this.Oi);let u;return this.$i.runTransaction(e,o,a,(d=>(u=new jp(d,this.ui?this.ui.next():Vn.ue),t==="readwrite-primary"?this.Ji(u).next((f=>!!f||this.Hi(u))).next((f=>{if(!f)throw Jt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new ne(W.FAILED_PRECONDITION,TI);return r(u)})).next((f=>this.Zi(u).next((()=>f)))):this.Ts(u).next((()=>r(u)))))).then((d=>(u.raiseOnCommittedEvent(),d)))}Ts(e){return bl(e).get(Yo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,gp)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ne(W.FAILED_PRECONDITION,_p)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bl(e).put(Yo,t)}static C(){return ji.C()}Yi(e){const t=bl(e);return t.get(Yo).next((r=>this.Xi(r)?(J(ki,"Releasing primary lease."),t.delete(Yo)):F.resolve()))}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Jt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Iw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return J(ki,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Jt(ki,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Jt("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bl(n){return At(n,Ru)}function ih(n){return At(n,ya)}function Hx(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Qm{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=Ce(),o=Ce();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Qm(e,t.fromCache,r,o)}}/**
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
 */class Gx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zT{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Iw()?8:AI(St())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Gx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(ra()<=Ne.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",ia(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ra()<=Ne.DEBUG&&J("QueryEngine","Query:",ia(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(ra()<=Ne.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",ia(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(t))):F.resolve())}ps(e,t){if($v(t))return F.resolve(null);let r=bn(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Hp(t,null,"F"),r=bn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Ce(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const _=this.bs(t,d);return this.Ds(t,_,u,f.readTime)?this.ps(e,Hp(t,null,"F")):this.vs(e,_,t,f)}))))})))))}ys(e,t,r,o){return $v(t)||o.isEqual(ye.min())?F.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?F.resolve(null):(ra()<=Ne.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ia(t)),this.vs(e,u,t,XC(o,iu)).next((d=>d)))}))}bs(e,t){let r=new We(tT(e));return t.forEach(((o,a)=>{ku(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return ra()<=Ne.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",ia(t)),this.gs.getDocumentsMatchingQuery(e,t,wn.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Xm="LocalStore",Qx=3e8;class Xx{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Se),this.Ms=new Zr((a=>Hs(a)),Pu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BT(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function $T(n,e,t,r){return new Xx(n,e,t,r)}async function qT(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Ce();for(const _ of o){u.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}for(const _ of a){d.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((_=>({Bs:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function Yx(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,_,v){const w=_.batch,T=w.keys();let x=F.resolve();return T.forEach((j=>{x=x.next((()=>v.getEntry(f,j))).next((z=>{const b=_.docVersions.get(j);me(b!==null,48541),z.version.compareTo(b)<0&&(w.applyToRemoteDocument(z,_),z.isValidDocument()&&(z.setReadTime(_.commitVersion),v.addEntry(z)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Ce();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(f=f.add(d.batch.mutations[_].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function WT(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Jx(n,e){const t=Re(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let x=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?x=x.withResumeToken(yt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,r)),o=o.insert(w,x),(function(z,b,ie){return z.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=Qx?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(T,x,v)&&d.push(t.hi.updateTargetData(a,x))}));let f=En(),_=Ce();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(Zx(a,u,e.documentUpdates).next((v=>{f=v.Ls,_=v.ks}))),!r.isEqual(ye.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return F.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,_))).next((()=>f))})).then((a=>(t.Fs=o,a)))}function Zx(n,e,t){let r=Ce(),o=Ce();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=En();return t.forEach(((d,f)=>{const _=a.get(d);f.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(ye.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!_.isValidDocument()||f.version.compareTo(_.version)>0||f.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):J(Xm,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",f.version)})),{Ls:u,ks:o}}))}function eN(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ms),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function tN(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.hi.getTargetData(r,e).next((a=>a?(o=a,F.resolve(o)):t.hi.allocateTargetId(r).next((u=>(o=new Kr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function tm(n,e,t){const r=Re(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Yi(u))throw u;J(Xm,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function EE(n,e,t){const r=Re(n);let o=ye.min(),a=Ce();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,_,v){const w=Re(f),T=w.Ms.get(v);return T!==void 0?F.resolve(w.Fs.get(T)):w.hi.getTargetData(_,v)})(r,u,bn(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:ye.min(),t?a:Ce()))).next((d=>(nN(r,zk(e),d),{documents:d,qs:a})))))}function nN(n,e,t){let r=n.xs.get(e)||ye.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class wE{constructor(){this.activeTargetIds=Gk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KT{constructor(){this.Fo=new wE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new wE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rN{xo(e){}shutdown(){}}/**
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
 */const IE="ConnectivityMonitor";class TE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(IE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){J(IE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sh=null;function nm(){return sh===null?sh=(function(){return 268435456+Math.round(2147483648*Math.random())})():sh++,"0x"+sh.toString(16)}/**
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
 */const yp="RestConnection",iN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Lh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=nm(),d=this.Go(e,t.toUriEncodedString());J(yp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:_}=new URL(d),v=Js(_);return this.jo(e,d,f,r,v).then((w=>(J(yp,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw wr(yp,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const r=iN[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class oN{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const qt="WebChannelConnection";class aN extends sN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=nm();return new Promise(((d,f)=>{const _=new hI;_.setWithCredentials(!0),_.listenOnce(dI.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case dh.NO_ERROR:const w=_.getResponseJson();J(qt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case dh.TIMEOUT:J(qt,`RPC '${e}' ${u} timed out`),f(new ne(W.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const T=_.getStatus();if(J(qt,`RPC '${e}' ${u} failed with status:`,T,"response text:",_.getResponseText()),T>0){let x=_.getResponseJson();Array.isArray(x)&&(x=x[0]);const j=x==null?void 0:x.error;if(j&&j.status&&j.message){const z=(function(ie){const Q=ie.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Q)>=0?Q:W.UNKNOWN})(j.status);f(new ne(z,j.message))}else f(new ne(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else f(new ne(W.UNAVAILABLE,"Connection failed."));break;default:de(9055,{c_:e,streamId:u,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{J(qt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);J(qt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",v,r,15)}))}P_(e,t,r){const o=nm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=mI(),d=pI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(f.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");J(qt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,x=!1;const j=new oN({Ho:b=>{x?J(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(T||(J(qt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),J(qt,`RPC '${e}' stream ${o} sending:`,b),w.send(b))},Yo:()=>w.close()}),z=(b,ie,Q)=>{b.listen(ie,(Y=>{try{Q(Y)}catch(ae){setTimeout((()=>{throw ae}),0)}}))};return z(w,Fl.EventType.OPEN,(()=>{x||(J(qt,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),z(w,Fl.EventType.CLOSE,(()=>{x||(x=!0,J(qt,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(w))})),z(w,Fl.EventType.ERROR,(b=>{x||(x=!0,wr(qt,`RPC '${e}' stream ${o} transport errored. Name:`,b.name,"Message:",b.message),j.__(new ne(W.UNAVAILABLE,"The operation could not be completed")))})),z(w,Fl.EventType.MESSAGE,(b=>{var ie;if(!x){const Q=b.data[0];me(!!Q,16349);const Y=Q,ae=(Y==null?void 0:Y.error)||((ie=Y[0])===null||ie===void 0?void 0:ie.error);if(ae){J(qt,`RPC '${e}' stream ${o} received error:`,ae);const Ie=ae.status;let ge=(function(P){const N=pt[P];if(N!==void 0)return pT(N)})(Ie),k=ae.message;ge===void 0&&(ge=W.INTERNAL,k="Unknown error status: "+Ie+" with message "+ae.message),x=!0,j.__(new ne(ge,k)),w.close()}else J(qt,`RPC '${e}' stream ${o} received:`,Q),j.a_(Q)}})),z(d,fI.STAT_EVENT,(b=>{b.stat===bp.PROXY?J(qt,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===bp.NOPROXY&&J(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
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
 */function lN(){return typeof window<"u"?window:null}function Ih(){return typeof document<"u"?document:null}/**
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
 */function yd(n){return new ux(n,!0)}/**
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
 */class HT{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&J("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const SE="PersistentStream";class GT{constructor(e,t,r,o,a,u,d,f){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new HT(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.b_===t&&this.W_(r,o)}),(r=>{e((()=>{const o=new ne(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{r((()=>this.G_(o)))})),this.stream.onMessage((o=>{r((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return J(SE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(J(SE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uN extends GT{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return ye.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ye.min():u.readTime?en(u.readTime):ye.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Xp(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Mh(f)?{documents:IT(a,f)}:{query:TT(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=_T(a,u.resumeToken);const _=Gp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(ye.min())>0){d.readTime=Ra(a,u.snapshotVersion.toTimestamp());const _=Gp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=px(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Xp(this.serializer),t.removeTarget=e,this.k_(t)}}class cN extends GT{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=fx(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Xp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>jh(this.serializer,r)))};this.k_(t)}}/**
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
 */class hN{}class dN extends hN{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Qp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(W.UNKNOWN,a.toString())}))}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Qp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne(W.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class fN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Jt(t),this._a=!1):J("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ys="RemoteStore";class pN{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{no(this)&&(J(Ys,"Restarting streams for network reachability change."),await(async function(f){const _=Re(f);_.Ia.add(4),await Nu(_),_.Aa.set("Unknown"),_.Ia.delete(4),await vd(_)})(this))}))})),this.Aa=new fN(r,o)}}async function vd(n){if(no(n))for(const e of n.da)await e(!0)}async function Nu(n){for(const e of n.da)await e(!1)}function QT(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),eg(t)?Zm(t):Va(t).x_()&&Jm(t,e))}function Ym(n,e){const t=Re(n),r=Va(t);t.Ta.delete(e),r.x_()&&XT(t,e),t.Ta.size===0&&(r.x_()?r.B_():no(t)&&t.Aa.set("Unknown"))}function Jm(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Va(n).H_(e)}function XT(n,e){n.Ra.$e(e),Va(n).Y_(e)}function Zm(n){n.Ra=new sx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Va(n).start(),n.Aa.aa()}function eg(n){return no(n)&&!Va(n).M_()&&n.Ta.size>0}function no(n){return Re(n).Ia.size===0}function YT(n){n.Ra=void 0}async function mN(n){n.Aa.set("Online")}async function gN(n){n.Ta.forEach(((e,t)=>{Jm(n,e)}))}async function _N(n,e){YT(n),eg(n)?(n.Aa.la(e),Zm(n)):n.Aa.set("Unknown")}async function yN(n,e,t){if(n.Aa.set("Online"),e instanceof gT&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(r){J(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wh(n,r)}else if(e instanceof Eh?n.Ra.Ye(e):e instanceof mT?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ye.min()))try{const r=await WT(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,_)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(_);v&&a.Ta.set(_,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,_)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(yt.EMPTY_BYTE_STRING,v.snapshotVersion)),XT(a,f);const w=new Kr(v.target,f,_,v.sequenceNumber);Jm(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){J(Ys,"Failed to raise snapshot:",r),await Wh(n,r)}}async function Wh(n,e,t){if(!Yi(e))throw e;n.Ia.add(1),await Nu(n),n.Aa.set("Offline"),t||(t=()=>WT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{J(Ys,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await vd(n)}))}function JT(n,e){return e().catch((t=>Wh(n,t,e)))}async function Du(n){const e=Re(n),t=Wi(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ms;for(;vN(e);)try{const o=await eN(e.localStore,r);if(o===null){e.Pa.length===0&&t.B_();break}r=o.batchId,EN(e,o)}catch(o){await Wh(e,o)}ZT(e)&&e0(e)}function vN(n){return no(n)&&n.Pa.length<10}function EN(n,e){n.Pa.push(e);const t=Wi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function ZT(n){return no(n)&&!Wi(n).M_()&&n.Pa.length>0}function e0(n){Wi(n).start()}async function wN(n){Wi(n).na()}async function IN(n){const e=Wi(n);for(const t of n.Pa)e.X_(t.mutations)}async function TN(n,e,t){const r=n.Pa.shift(),o=jm.from(r,e,t);await JT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Du(n)}async function SN(n,e){e&&Wi(n).Z_&&await(async function(r,o){if((function(u){return rx(u)&&u!==W.ABORTED})(o.code)){const a=r.Pa.shift();Wi(r).N_(),await JT(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Du(r)}})(n,e),ZT(n)&&e0(n)}async function AE(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),J(Ys,"RemoteStore received new credentials");const r=no(t);t.Ia.add(3),await Nu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await vd(t)}async function AN(n,e){const t=Re(n);e?(t.Ia.delete(2),await vd(t)):e||(t.Ia.add(2),await Nu(t),t.Aa.set("Unknown"))}function Va(n){return n.Va||(n.Va=(function(t,r,o){const a=Re(t);return a.ia(),new uN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:mN.bind(null,n),e_:gN.bind(null,n),n_:_N.bind(null,n),J_:yN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),eg(n)?Zm(n):n.Aa.set("Unknown")):(await n.Va.stop(),YT(n))}))),n.Va}function Wi(n){return n.ma||(n.ma=(function(t,r,o){const a=Re(t);return a.ia(),new cN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:wN.bind(null,n),n_:SN.bind(null,n),ea:IN.bind(null,n),ta:TN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Du(n)):(await n.ma.stop(),n.Pa.length>0&&(J(Ys,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class tg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new tg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ng(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),Yi(n))return new ne(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class da{static emptySet(e){return new da(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=Ul(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof da)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new da;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class RE{constructor(){this.fa=new nt(oe.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):de(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Pa{constructor(e,t,r,o,a,u,d,f,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Pa(e,t,da.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class RN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class PN{constructor(){this.queries=PE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=Re(t),a=o.queries;o.queries=PE(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new ne(W.ABORTED,"Firestore shutting down"))}}function PE(){return new Zr((n=>eT(n)),cd)}async function t0(n,e){const t=Re(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new RN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=ng(u,`Initialization of query '${ia(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&rg(t)}async function n0(n,e){const t=Re(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function CN(n,e){const t=Re(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&rg(t)}function kN(n,e,t){const r=Re(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function rg(n){n.Da.forEach((e=>{e.next()}))}var rm,CE;(CE=rm||(rm={})).Fa="default",CE.Cache="cache";class r0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Pa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Pa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==rm.Cache}}/**
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
 */class i0{constructor(e){this.key=e}}class s0{constructor(e){this.key=e}}class xN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ce(),this.mutatedKeys=Ce(),this.Xa=tT(e),this.eu=new da(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new RE,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const T=o.get(v),x=ku(this.query,w)?w:null,j=!!T&&this.mutatedKeys.has(T.key),z=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let b=!1;T&&x?T.data.isEqual(x.data)?j!==z&&(r.track({type:3,doc:x}),b=!0):this.iu(T,x)||(r.track({type:2,doc:x}),b=!0,(f&&this.Xa(x,f)>0||_&&this.Xa(x,_)<0)&&(d=!0)):!T&&x?(r.track({type:0,doc:x}),b=!0):T&&!x&&(r.track({type:1,doc:T}),b=!0,(f||_)&&(d=!0)),b&&(x?(u=u.add(x),a=z?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(x,j){const z=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{At:b})}};return z(x)-z(j)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,_=f!==this.Ya;return this.Ya=f,u.length!==0||_?{snapshot:new Pa(this.query,e.eu,a,u,e.mutatedKeys,f===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new RE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ce(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new s0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new i0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Ce();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Pa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ig="SyncEngine";class NN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class DN{constructor(e){this.key=e,this.lu=!1}}class VN{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Zr((d=>eT(d)),cd),this.Tu=new Map,this.Iu=new Set,this.du=new nt(oe.comparator),this.Eu=new Map,this.Au=new Km,this.Ru={},this.Vu=new Map,this.mu=Xs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bN(n,e,t=!0){const r=h0(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await o0(r,e,t,!0),o}async function ON(n,e){const t=h0(n);await o0(t,e,!0,!1)}async function o0(n,e,t,r){const o=await tN(n.localStore,bn(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await LN(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&QT(n.remoteStore,o),d}async function LN(n,e,t,r,o){n.gu=(w,T,x)=>(async function(z,b,ie,Q){let Y=b.view.nu(ie);Y.Ds&&(Y=await EE(z.localStore,b.query,!1).then((({documents:k})=>b.view.nu(k,Y))));const ae=Q&&Q.targetChanges.get(b.targetId),Ie=Q&&Q.targetMismatches.get(b.targetId)!=null,ge=b.view.applyChanges(Y,z.isPrimaryClient,ae,Ie);return xE(z,b.targetId,ge._u),ge.snapshot})(n,w,T,x);const a=await EE(n.localStore,e,!0),u=new xN(e,a.qs),d=u.nu(a.documents),f=xu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,f);xE(n,t,_._u);const v=new NN(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),_.snapshot}async function MN(n,e,t){const r=Re(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter((u=>!cd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await tm(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&Ym(r.remoteStore,o.targetId),im(r,o.targetId)})).catch(to)):(im(r,o.targetId),await tm(r.localStore,o.targetId,!0))}async function FN(n,e){const t=Re(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ym(t.remoteStore,r.targetId))}async function UN(n,e,t){const r=d0(n);try{const o=await(function(u,d){const f=Re(u),_=ze.now(),v=d.reduce(((x,j)=>x.add(j.key)),Ce());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let j=En(),z=Ce();return f.Os.getEntries(x,v).next((b=>{j=b,j.forEach(((ie,Q)=>{Q.isValidDocument()||(z=z.add(ie))}))})).next((()=>f.localDocuments.getOverlayedDocuments(x,j))).next((b=>{w=b;const ie=[];for(const Q of d){const Y=tx(Q,w.get(Q.key).overlayedDocument);Y!=null&&ie.push(new ei(Q.key,Y,WI(Y.value.mapValue),Zt.exists(!0)))}return f.mutationQueue.addMutationBatch(x,_,ie,d)})).next((b=>{T=b;const ie=b.applyToLocalDocumentSet(w,z);return f.documentOverlayCache.saveOverlays(x,b.batchId,ie)}))})).then((()=>({batchId:T.batchId,changes:rT(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,f){let _=u.Ru[u.currentUser.toKey()];_||(_=new nt(Se)),_=_.insert(d,f),u.Ru[u.currentUser.toKey()]=_})(r,o.batchId,t),await Vu(r,o.changes),await Du(r.remoteStore)}catch(o){const a=ng(o,"Failed to persist write");t.reject(a)}}async function a0(n,e){const t=Re(n);try{const r=await Jx(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Eu.get(a);u&&(me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?me(u.lu,14607):o.removedDocuments.size>0&&(me(u.lu,42227),u.lu=!1))})),await Vu(t,r,e)}catch(r){await to(r)}}function kE(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const f=Re(u);f.onlineState=d;let _=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(_=!0)})),_&&rg(f)})(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jN(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new nt(oe.comparator);u=u.insert(a,at.newNoDocument(a,ye.min()));const d=Ce().add(a),f=new pd(ye.min(),new Map,new nt(Se),u,d);await a0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),sg(r)}else await tm(r.localStore,e,!1).then((()=>im(r,e,t))).catch(to)}async function BN(n,e){const t=Re(n),r=e.batch.batchId;try{const o=await Yx(t.localStore,e);u0(t,r,null),l0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(t,o)}catch(o){await to(o)}}async function zN(n,e,t){const r=Re(n);try{const o=await(function(u,d){const f=Re(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let v;return f.mutationQueue.lookupMutationBatch(_,d).next((w=>(me(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(_,w)))).next((()=>f.mutationQueue.performConsistencyCheck(_))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(_,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,v))).next((()=>f.localDocuments.getDocuments(_,v)))}))})(r.localStore,e);u0(r,e,t),l0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vu(r,o)}catch(o){await to(o)}}function l0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function u0(n,e,t){const r=Re(n);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function im(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||c0(n,r)}))}function c0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ym(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),sg(n))}function xE(n,e,t){for(const r of t)r instanceof i0?(n.Au.addReference(r.key,e),$N(n,r)):r instanceof s0?(J(ig,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||c0(n,r.key)):de(19791,{yu:r})}function $N(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(J(ig,"New document in limbo: "+t),n.Iu.add(r),sg(n))}function sg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new oe(Be.fromString(e)),r=n.mu.next();n.Eu.set(r,new DN(t)),n.du=n.du.insert(t,r),QT(n.remoteStore,new Kr(bn(Cu(t.path)),r,"TargetPurposeLimboResolution",Vn.ue))}}async function Vu(n,e,t){const r=Re(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((_=>{var v;if((_||t)&&r.isPrimaryClient){const w=_?!_.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(_){o.push(_);const w=Qm.Es(f.targetId,_);a.push(w)}})))})),await Promise.all(u),r.hu.J_(o),await(async function(f,_){const v=Re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>F.forEach(_,(T=>F.forEach(T.Is,(x=>v.persistence.referenceDelegate.addReference(w,T.targetId,x))).next((()=>F.forEach(T.ds,(x=>v.persistence.referenceDelegate.removeReference(w,T.targetId,x)))))))))}catch(w){if(!Yi(w))throw w;J(Xm,"Failed to update sequence numbers: "+w)}for(const w of _){const T=w.targetId;if(!w.fromCache){const x=v.Fs.get(T),j=x.snapshotVersion,z=x.withLastLimboFreeSnapshotVersion(j);v.Fs=v.Fs.insert(T,z)}}})(r.localStore,a))}async function qN(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){J(ig,"User change. New user:",e.toKey());const r=await qT(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ne(W.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vu(t,r.Bs)}}function WN(n,e){const t=Re(n),r=t.Eu.get(e);if(r&&r.lu)return Ce().add(r.key);{let o=Ce();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function h0(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=a0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.hu.J_=CN.bind(null,e.eventManager),e.hu.pu=kN.bind(null,e.eventManager),e}function d0(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zN.bind(null,e),e}class gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return $T(this.persistence,new zT,e.initialUser,this.serializer)}Du(e){return new Hm(_d.Vi,this.serializer)}bu(e){return new KT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gu.provider={build:()=>new gu};class KN extends gu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){me(this.persistence.referenceDelegate instanceof qh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MT(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Hm((r=>qh.Vi(r,t)),this.serializer)}}class HN extends gu{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await d0(this.Mu.syncEngine),await Du(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return $T(this.persistence,new zT,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new MT(r,e.asyncQueue,t)}Fu(e,t){const r=new ek(t,this.persistence);return new ZC(e.asyncQueue,r)}Du(e){const t=Hx(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Gm(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,lN(),Ih(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new KT}}class Kh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qN.bind(null,this.syncEngine),await AN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PN})()}createDatastore(e){const t=yd(e.databaseInfo.databaseId),r=(function(a){return new aN(a)})(e.databaseInfo);return(function(a,u,d,f){return new dN(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new pN(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>kE(this.syncEngine,t,0)),(function(){return TE.C()?new TE:new rN})())}createSyncEngine(e,t){return(function(o,a,u,d,f,_,v){const w=new VN(o,a,u,d,f,_);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Re(o);J(Ys,"RemoteStore shutting down."),a.Ia.add(5),await Nu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kh.provider={build:()=>new Kh};/**
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
 */class f0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ki="FirestoreClient";class GN{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Pm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{J(Ki,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(J(Ki,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ng(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function vp(n,e){n.asyncQueue.verifyOperationInProgress(),J(Ki,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await qT(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>{wr("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{wr("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function NE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QN(n);J(Ki,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>AE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>AE(e.remoteStore,o))),n._onlineComponents=e}async function QN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J(Ki,"Using user provided OfflineComponentProvider");try{await vp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wr("Error using user provided cache. Falling back to memory cache: "+t),await vp(n,new gu)}}else J(Ki,"Using default OfflineComponentProvider"),await vp(n,new KN(void 0));return n._offlineComponents}async function p0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J(Ki,"Using user provided OnlineComponentProvider"),await NE(n,n._uninitializedComponentsProvider._online)):(J(Ki,"Using default OnlineComponentProvider"),await NE(n,new Kh))),n._onlineComponents}function XN(n){return p0(n).then((e=>e.syncEngine))}async function sm(n){const e=await p0(n),t=e.eventManager;return t.onListen=bN.bind(null,e.syncEngine),t.onUnlisten=MN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ON.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FN.bind(null,e.syncEngine),t}function YN(n,e,t={}){const r=new Gr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,_){const v=new f0({next:T=>{v.Ou(),u.enqueueAndForget((()=>n0(a,w)));const x=T.docs.has(d);!x&&T.fromCache?_.reject(new ne(W.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&T.fromCache&&f&&f.source==="server"?_.reject(new ne(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(T)},error:T=>_.reject(T)}),w=new r0(Cu(d.path),v,{includeMetadataChanges:!0,ka:!0});return t0(a,w)})(await sm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function m0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const DE=new Map;/**
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
 */const g0="firestore.googleapis.com",VE=!0;class bE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g0,this.ssl=VE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:VE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xx)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ed{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jC;switch(r.type){case"firstParty":return new qC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=DE.get(t);r&&(J("ComponentProvider","Removing Datastore"),DE.delete(t),r.terminate())})(this),Promise.resolve()}}function JN(n,e,t,r={}){var o;n=Zn(n,Ed);const a=Js(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(dm(`https://${f}`),fm("Firestore",!0)),u.host!==g0&&u.host!==f&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Bs(_,d)&&(n._setSettings(_),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=Lt.MOCK_USER;else{v=Ew(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Lt(T)}n._authCredentials=new BC(new _I(v,w))}}/**
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
 */class ro{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class ht{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Au(t,ht._jsonSchema))return new ht(e,r||null,new oe(Be.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:mt("string",ht._jsonSchemaVersion),referencePath:mt("string")};class Bi extends ro{constructor(e,t,r){super(e,t,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new oe(e))}withConverter(e){return new Bi(this.firestore,e,this._path)}}function _0(n,e,...t){if(n=_t(n),EI("collection","path",e),n instanceof Ed){const r=Be.fromString(e,...t);return Sv(r),new Bi(n,null,r)}{if(!(n instanceof ht||n instanceof Bi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return Sv(r),new Bi(n.firestore,null,r)}}function wd(n,e,...t){if(n=_t(n),arguments.length===1&&(e=Pm.newId()),EI("doc","path",e),n instanceof Ed){const r=Be.fromString(e,...t);return Tv(r),new ht(n,null,new oe(r))}{if(!(n instanceof ht||n instanceof Bi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return Tv(r),new ht(n.firestore,n instanceof Bi?n.converter:null,new oe(r))}}/**
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
 */const OE="AsyncQueue";class LE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new HT(this,"async_queue_retry"),this.oc=()=>{const r=Ih();r&&J(OE,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ih();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ih();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Gr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Yi(e))throw e;J(OE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Jt("INTERNAL UNHANDLED ERROR: ",ME(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=tg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&de(47125,{hc:ME(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ME(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function FE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Hi extends Ed{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new LE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new LE(e),this._firestoreClient=void 0,await e}}}function ZN(n,e){const t=typeof n=="object"?n:gm(),r=typeof n=="string"?n:Lh,o=Jh(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=_w("firestore");a&&JN(o,...a)}return o}function og(n){if(n._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||y0(n),n._firestoreClient}function y0(n){var e,t,r;const o=n._freezeSettings(),a=(function(d,f,_,v){return new kk(d,f,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,m0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new GN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}function eD(n,e){wr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return tD(n,Kh.provider,{build:r=>new HN(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function tD(n,e,t){if((n=Zn(n,Hi))._firestoreClient||n._terminated)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ne(W.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},y0(n)}/**
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
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(yt.fromBase64String(e))}catch(t){throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dn(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Au(e,Dn._jsonSchema))return Dn.fromBase64String(e.bytes)}}Dn._jsonSchemaVersion="firestore/bytes/1.0",Dn._jsonSchema={type:mt("string",Dn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class Id{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Td{constructor(e){this._methodName=e}}/**
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
 */class vr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vr._jsonSchemaVersion}}static fromJSON(e){if(Au(e,vr._jsonSchema))return new vr(e.latitude,e.longitude)}}vr._jsonSchemaVersion="firestore/geoPoint/1.0",vr._jsonSchema={type:mt("string",vr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Er{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Au(e,Er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Er(e.vectorValues);throw new ne(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Er._jsonSchemaVersion="firestore/vectorValue/1.0",Er._jsonSchema={type:mt("string",Er._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const nD=/^__.*__$/;class rD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,t,this.fieldTransforms):new Da(e,this.data,t,this.fieldTransforms)}}class v0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ei(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function E0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ec:n})}}class ag{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ag(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Hh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(E0(this.Ec)&&nD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class iD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yd(e)}Dc(e,t,r,o=!1){return new ag({Ec:e,methodName:t,bc:r,path:st.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lg(n){const e=n._freezeSettings(),t=yd(n._databaseId);return new iD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sD(n,e,t,r,o,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);cg("Data must be an object, but it was:",u,r);const d=w0(r,u);let f,_;if(a.merge)f=new cn(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=om(e,w,t);if(!u.contains(T))throw new ne(W.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);T0(v,T)||v.push(T)}f=new cn(v),_=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,_=u.fieldTransforms;return new rD(new Kt(d),f,_)}class Sd extends Td{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sd}}class ug extends Td{_toFieldTransform(e){return new cT(e.path,new Ta)}isEqual(e){return e instanceof ug}}function oD(n,e,t,r){const o=n.Dc(1,e,t);cg("Data must be an object, but it was:",o,r);const a=[],u=Kt.empty();Ji(r,((f,_)=>{const v=hg(e,f,t);_=_t(_);const w=o.gc(v);if(_ instanceof Sd)a.push(v);else{const T=bu(_,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new cn(a);return new v0(u,d,o.fieldTransforms)}function aD(n,e,t,r,o,a){const u=n.Dc(1,e,t),d=[om(e,r,t)],f=[o];if(a.length%2!=0)throw new ne(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(om(e,a[T])),f.push(a[T+1]);const _=[],v=Kt.empty();for(let T=d.length-1;T>=0;--T)if(!T0(_,d[T])){const x=d[T];let j=f[T];j=_t(j);const z=u.gc(x);if(j instanceof Sd)_.push(x);else{const b=bu(j,z);b!=null&&(_.push(x),v.set(x,b))}}const w=new cn(_);return new v0(v,w,u.fieldTransforms)}function lD(n,e,t,r=!1){return bu(t,n.Dc(r?4:3,e))}function bu(n,e){if(I0(n=_t(n)))return cg("Unsupported field value:",e,n),w0(n,e);if(n instanceof Td)return(function(r,o){if(!E0(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let f=bu(d,o.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qk(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ze.fromDate(r);return{timestampValue:Ra(o.serializer,a)}}if(r instanceof ze){const a=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ra(o.serializer,a)}}if(r instanceof vr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:_T(o.serializer,r._byteString)};if(r instanceof ht){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:$m(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Er)return(function(u,d){return{mapValue:{fields:{[Om]:{stringValue:Lm},[va]:{arrayValue:{values:u.toArray().map((_=>{if(typeof _!="number")throw d.wc("VectorValues must only contain numeric values.");return Fm(d.serializer,_)}))}}}}}})(r,o);throw o.wc(`Unsupported field value: ${nd(r)}`)})(n,e)}function w0(n,e){const t={};return LI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(n,((r,o)=>{const a=bu(o,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function I0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ze||n instanceof vr||n instanceof Dn||n instanceof ht||n instanceof Td||n instanceof Er)}function cg(n,e,t){if(!I0(t)||!wI(t)){const r=nd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function om(n,e,t){if((e=_t(e))instanceof Id)return e._internalPath;if(typeof e=="string")return hg(n,e);throw Hh("Field path arguments must be of type string or ",n,!1,void 0,t)}const uD=new RegExp("[~\\*/\\[\\]]");function hg(n,e,t){if(e.search(uD)>=0)throw Hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Id(...e.split("."))._internalPath}catch{throw Hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new ne(W.INVALID_ARGUMENT,d+n+f)}function T0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class S0{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cD extends S0{data(){return super.data()}}function Ad(n,e){return typeof e=="string"?hg(n,e):e instanceof Id?e._internalPath:e._delegate._internalPath}/**
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
 */function hD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dg{}class A0 extends dg{}function dD(n,e,...t){let r=[];e instanceof dg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof fg)).length,d=a.filter((f=>f instanceof Rd)).length;if(u>1||u>0&&d>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class Rd extends A0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Rd(e,t,r)}_apply(e){const t=this._parse(e);return R0(e._query,t),new ro(e.firestore,e.converter,Kp(e._query,t))}_parse(e){const t=lg(e.firestore);return(function(a,u,d,f,_,v,w){let T;if(_.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){BE(w,v);const j=[];for(const z of w)j.push(jE(f,a,z));T={arrayValue:{values:j}}}else T=jE(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||BE(w,v),T=lD(d,u,w,v==="in"||v==="not-in");return De.create(_,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fD(n,e,t){const r=e,o=Ad("where",n);return Rd._create(o,r,t)}class fg extends dg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)R0(u,f),u=Kp(u,f)})(e._query,t),new ro(e.firestore,e.converter,Kp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pg extends A0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pg(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pu(a,u)})(e._query,this._field,this._direction);return new ro(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new Na(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function UE(n,e="asc"){const t=e,r=Ad("orderBy",n);return pg._create(r,t)}function jE(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ZI(e)&&t.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!oe.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return du(n,new oe(r))}if(t instanceof ht)return du(n,t._key);throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nd(t)}.`)}function BE(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function R0(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pD{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ji(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[va].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map((u=>tt(u.doubleValue)));return new Er(a)}convertGeoPoint(e){return new vr(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ld(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(cu(e));default:return null}}convertTimestamp(e){const t=Yr(e);return new ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);me(PT(r),9688,{name:e});const o=new Ks(r.get(1),r.get(3)),a=new oe(r.popFirst(5));return o.isEqual(t)||Jt(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function mD(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class zl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class js extends S0{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=js._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}js._jsonSchemaVersion="firestore/documentSnapshot/1.0",js._jsonSchema={type:mt("string",js._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Th extends js{data(e={}){return super.data(e)}}class fa{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new zl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Th(this._firestore,this._userDataWriter,r.key,r,new zl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const f=new Th(o._firestore,o._userDataWriter,d.doc.key,d.doc,new zl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Th(o._firestore,o._userDataWriter,d.doc.key,d.doc,new zl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:gD(d.type),doc:f,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:n})}}/**
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
 */function _D(n){n=Zn(n,ht);const e=Zn(n.firestore,Hi);return YN(og(e),n._key).then((t=>C0(e,n,t)))}fa._jsonSchemaVersion="firestore/querySnapshot/1.0",fa._jsonSchema={type:mt("string",fa._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class P0 extends pD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function yD(n,e,t,...r){n=Zn(n,ht);const o=Zn(n.firestore,Hi),a=lg(o);let u;return u=typeof(e=_t(e))=="string"||e instanceof Id?aD(a,"updateDoc",n._key,e,t,r):oD(a,"updateDoc",n._key,e),mg(o,[u.toMutation(n._key,Zt.exists(!0))])}function vD(n){return mg(Zn(n.firestore,Hi),[new fd(n._key,Zt.none())])}function ED(n,e){const t=Zn(n.firestore,Hi),r=wd(n),o=mD(n.converter,e);return mg(t,[sD(lg(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then((()=>r))}function wD(n,...e){var t,r,o;n=_t(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||FE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(FE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let f,_,v;if(n instanceof ht)_=Zn(n.firestore,Hi),v=Cu(n._key.path),f={next:w=>{e[u]&&e[u](C0(_,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Zn(n,ro);_=Zn(w.firestore,Hi),v=w._query;const T=new P0(_);f={next:x=>{e[u]&&e[u](new fa(_,T,w,x))},error:e[u+1],complete:e[u+2]},hD(n._query)}return(function(T,x,j,z){const b=new f0(z),ie=new r0(x,b,j);return T.asyncQueue.enqueueAndForget((async()=>t0(await sm(T),ie))),()=>{b.Ou(),T.asyncQueue.enqueueAndForget((async()=>n0(await sm(T),ie)))}})(og(_),v,d,f)}function mg(n,e){return(function(r,o){const a=new Gr;return r.asyncQueue.enqueueAndForget((async()=>UN(await XN(r),o,a))),a.promise})(og(n),e)}function C0(n,e,t){const r=t.docs.get(e._key),o=new P0(n);return new js(n,o,e._key,r,new zl(t.hasPendingWrites,t.fromCache),e.converter)}function ID(){return new ug("serverTimestamp")}(function(e,t=!0){(function(o){xa=o})(Zs),zs(new zi("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Hi(new zC(r.getProvider("auth-internal")),new WC(u,r.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(_.options.projectId,v)})(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),gr(yv,vv,e),gr(yv,vv,"esm2017")})();/**
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
 */const k0="firebasestorage.googleapis.com",TD="storageBucket",SD=120*1e3,AD=600*1e3;/**
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
 */class Ar extends Sr{constructor(e,t,r=0){super(Ep(e),`Firebase Storage: ${t} (${Ep(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ar.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ep(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tr||(Tr={}));function Ep(n){return"storage/"+n}function RD(){const n="An unknown error occurred, please check the error payload for server response.";return new Ar(Tr.UNKNOWN,n)}function PD(){return new Ar(Tr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CD(){return new Ar(Tr.CANCELED,"User canceled the upload/download.")}function kD(n){return new Ar(Tr.INVALID_URL,"Invalid URL '"+n+"'.")}function xD(n){return new Ar(Tr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zE(n){return new Ar(Tr.INVALID_ARGUMENT,n)}function x0(){return new Ar(Tr.APP_DELETED,"The Firebase app was deleted.")}function ND(n){return new Ar(Tr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Jn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Jn.makeFromUrl(e,t)}catch{return new Jn(e,"")}if(r.path==="")return r;throw xD(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function _(ae){ae.path_=decodeURIComponent(ae.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",x=new RegExp(`^https?://${w}/${v}/b/${o}/o${T}`,"i"),j={bucket:1,path:3},z=t===k0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",ie=new RegExp(`^https?://${z}/${o}/${b}`,"i"),Y=[{regex:d,indices:f,postModify:a},{regex:x,indices:j,postModify:_},{regex:ie,indices:{bucket:1,path:2},postModify:_}];for(let ae=0;ae<Y.length;ae++){const Ie=Y[ae],ge=Ie.regex.exec(e);if(ge){const k=ge[Ie.indices.bucket];let S=ge[Ie.indices.path];S||(S=""),r=new Jn(k,S),Ie.postModify(r);break}}if(r==null)throw kD(e);return r}}class DD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function VD(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let _=!1;function v(...b){_||(_=!0,e.apply(null,b))}function w(b){o=setTimeout(()=>{o=null,n(x,f())},b)}function T(){a&&clearTimeout(a)}function x(b,...ie){if(_){T();return}if(b){T(),v.call(null,b,...ie);return}if(f()||u){T(),v.call(null,b,...ie);return}r<64&&(r*=2);let Y;d===1?(d=2,Y=0):Y=(r+Math.random())*1e3,w(Y)}let j=!1;function z(b){j||(j=!0,T(),!_&&(o!==null?(b||(d=2),clearTimeout(o),w(0)):b||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,z(!0)},t),z}function bD(n){n(!1)}/**
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
 */function OD(n){return n!==void 0}function $E(n,e,t,r){if(r<e)throw zE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw zE(`Invalid value for '${n}'. Expected ${t} or less.`)}function LD(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Gh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Gh||(Gh={}));/**
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
 */function MD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class FD{constructor(e,t,r,o,a,u,d,f,_,v,w,T=!0,x=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,z)=>{this.resolve_=j,this.reject_=z,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new oh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,_)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Gh.NO_ERROR,f=a.getStatus();if(!d||MD(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Gh.ABORT;r(!1,new oh(!1,null,v));return}const _=this.successCodes_.indexOf(f)!==-1;r(!0,new oh(_,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());OD(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=RD();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?x0():CD();u(f)}else{const f=PD();u(f)}};this.canceled_?t(!1,new oh(!1,null,!0)):this.backoffId_=VD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function UD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function jD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function zD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $D(n,e,t,r,o,a,u=!0,d=!1){const f=LD(n.urlParams),_=n.url+f,v=Object.assign({},n.headers);return BD(v,e),UD(v,t),jD(v,a),zD(v,r),new FD(_,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
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
 */function qD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Qh{constructor(e,t){this._service=e,t instanceof Jn?this._location=t:this._location=Jn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qh(e,t)}get root(){const e=new Jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WD(this._location.path)}get storage(){return this._service}get parent(){const e=qD(this._location.path);if(e===null)return null;const t=new Jn(this._location.bucket,e);return new Qh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ND(e)}}function qE(n,e){const t=e==null?void 0:e[TD];return t==null?null:Jn.makeFromBucketSpec(t,n)}function KD(n,e,t,r={}){n.host=`${e}:${t}`;const o=Js(e);o&&(dm(`https://${n.host}/b`),fm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Ew(a,n.app.options.projectId))}class HD{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=k0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SD,this._maxUploadRetryTime=AD,this._requests=new Set,o!=null?this._bucket=Jn.makeFromBucketSpec(o,this._host):this._bucket=qE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jn.makeFromBucketSpec(this._url,e):this._bucket=qE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new DD(x0());{const u=$D(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const WE="@firebase/storage",KE="0.13.14";/**
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
 */const N0="storage";function GD(n=gm(),e){n=_t(n);const r=Jh(n,N0).getImmediate({identifier:e}),o=_w("storage");return o&&QD(r,...o),r}function QD(n,e,t,r={}){KD(n,e,t,r)}function XD(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new HD(t,r,o,e,Zs)}function YD(){zs(new zi(N0,XD,"PUBLIC").setMultipleInstances(!0)),gr(WE,KE,""),gr(WE,KE,"esm2017")}YD();const JD={apiKey:"AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",authDomain:"m3notes-9712f.firebaseapp.com",projectId:"m3notes-9712f",storageBucket:"m3notes-9712f.firebasestorage.app",messagingSenderId:"312791889198",appId:"1:312791889198:android:defc0d0536797e190bb6bf"},gg=Pw(JD),ah=LC(gg),ba=ZN(gg);GD(gg);eD(ba).catch(n=>{n.code==="failed-precondition"?console.warn("Persistence failed: multiple tabs open"):n.code==="unimplemented"&&console.warn("Persistence not available in this browser")});const D0=Z.createContext();function ZD({children:n}){const[e,t]=Z.useState(null),[r,o]=Z.useState(!0);Z.useEffect(()=>SP(ah,_=>{t(_),o(!1)}),[]);const a=(f,_)=>wP(ah,f,_),u=(f,_)=>EP(ah,f,_),d=()=>AP(ah);return re.jsx(D0.Provider,{value:{user:e,loading:r,login:a,register:u,logout:d},children:n})}const Ou=()=>Z.useContext(D0);function eV(){const{login:n,register:e}=Ou(),[t,r]=Z.useState(""),[o,a]=Z.useState(""),[u,d]=Z.useState(!1),[f,_]=Z.useState(""),[v,w]=Z.useState(!1),T=async x=>{x.preventDefault(),_(""),w(!0);try{u?await e(t.trim(),o):await n(t.trim(),o)}catch(j){_(j.message||"Erreur")}finally{w(!1)}};return re.jsx("div",{className:"login-page",children:re.jsxs("div",{className:"login-card",children:[re.jsx("h1",{children:"M3Notes"}),re.jsx("p",{className:"subtitle",children:u?"Créer un compte":"Connexion"}),re.jsxs("form",{onSubmit:T,children:[re.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:x=>r(x.target.value),required:!0,autoFocus:!0}),re.jsx("input",{type:"password",placeholder:"Mot de passe",value:o,onChange:x=>a(x.target.value),required:!0,minLength:6}),f&&re.jsx("p",{className:"error",children:f}),re.jsx("button",{type:"submit",disabled:v,children:v?"…":u?"S'inscrire":"Se connecter"})]}),re.jsx("button",{className:"switch",onClick:()=>d(!u),children:u?"Déjà un compte ? Se connecter":"Pas de compte ? S'inscrire"})]})})}/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=n=>{const e=nV(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},iV=Z.createContext({}),sV=()=>Z.useContext(iV),oV=Z.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...d},f)=>{const{size:_=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,color:T="currentColor",className:x=""}=sV()??{},j=r??w?Number(t??v)*24/Number(e??_):t??v;return Z.createElement("svg",{ref:f,...wp,width:e??_??wp.width,height:e??_??wp.height,stroke:n??T,strokeWidth:j,className:V0("lucide",x,o),...!a&&!rV(d)&&{"aria-hidden":"true"},...d},[...u.map(([z,b])=>Z.createElement(z,b)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=(n,e)=>{const t=Z.forwardRef(({className:r,...o},a)=>Z.createElement(oV,{ref:a,iconNode:e,className:V0(`lucide-${tV(HE(n))}`,`lucide-${n}`,r),...o}));return t.displayName=HE(n),t};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],b0=tr("archive",aV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],uV=tr("arrow-left",lV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],hV=tr("log-out",cV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],fV=tr("moon",dV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],O0=tr("pin",pV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gV=tr("plus",mV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yV=tr("square-check-big",_V);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],EV=tr("square",vV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],IV=tr("sticky-note",wV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],SV=tr("sun",TV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],RV=tr("trash-2",AV),L0=Z.createContext();function PV({children:n}){const[e,t]=Z.useState(()=>{const o=localStorage.getItem("m3notes-theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});Z.useEffect(()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light"),localStorage.setItem("m3notes-theme",e?"dark":"light")},[e]);const r=()=>t(o=>!o);return re.jsx(L0.Provider,{value:{dark:e,toggle:r},children:n})}const CV=()=>Z.useContext(L0),Pd="notes";function kV(n,e,t){let r=dD(_0(ba,Pd),fD("userId","==",n),UE("isPinned","desc"),UE("updatedAt","desc"));return wD(r,o=>{let a=o.docs.map(u=>({id:u.id,...u.data()}));e||(a=a.filter(u=>!u.isArchived)),t(a)},o=>{console.error("Notes subscription error:",o),t([])})}async function xV(n,e){return(await ED(_0(ba,Pd),{...e,userId:n,isPinned:!1,isArchived:!1,labels:e.labels||[],imageUrls:e.imageUrls||[],checklist:e.checklist||[],isChecklist:e.isChecklist||!1,createdAt:ID(),updatedAt:ze.now()})).id}async function NV(n,e){await yD(wd(ba,Pd,n),{...e,updatedAt:ze.now()})}async function DV(n){await vD(wd(ba,Pd,n))}const VV={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function bV({note:n,onClick:e}){var r;const t=VV[n.color]||"note-default";return re.jsxs("div",{className:`note-card ${t}`,onClick:e,children:[n.isPinned&&re.jsx(O0,{className:"pin",size:16,fill:"currentColor"}),n.title&&re.jsx("h3",{className:"note-title",children:n.title}),n.isChecklist?re.jsxs("ul",{className:"checklist",children:[(n.checklist||[]).slice(0,6).map((o,a)=>re.jsxs("li",{className:o.isChecked?"checked":"",children:[o.isChecked?re.jsx(yV,{size:14}):re.jsx(EV,{size:14})," ",o.text]},a)),(n.checklist||[]).length>6&&re.jsxs("li",{className:"more",children:["+",n.checklist.length-6,"…"]})]}):n.content&&re.jsx("p",{className:"note-content",children:n.content}),((r=n.labels)==null?void 0:r.length)>0&&re.jsx("div",{className:"labels",children:n.labels.slice(0,3).map(o=>re.jsx("span",{className:"label",children:o},o))})]})}function OV(){const{user:n,logout:e}=Ou(),{dark:t,toggle:r}=CV(),o=hm(),[a,u]=Z.useState([]),[d,f]=Z.useState(!1),[_,v]=Z.useState(""),[w,T]=Z.useState(!0);Z.useEffect(()=>n?(T(!0),kV(n.uid,d,z=>{u(z),T(!1)})):void 0,[n,d]);const x=_.trim()?a.filter(j=>(j.title||"").toLowerCase().includes(_.toLowerCase())||(j.content||"").toLowerCase().includes(_.toLowerCase())||(j.labels||[]).some(z=>z.toLowerCase().includes(_.toLowerCase()))):a;return re.jsxs("div",{className:"home",children:[re.jsxs("header",{className:"topbar",children:[re.jsx("div",{className:"topbar-left",children:re.jsx("h1",{children:d?"Archives":"M3Notes"})}),re.jsx("div",{className:"search-box",children:re.jsx("input",{type:"search",placeholder:"Rechercher…",value:_,onChange:j=>v(j.target.value)})}),re.jsxs("div",{className:"topbar-actions",children:[re.jsx("button",{onClick:()=>f(!d),title:"Archives",children:d?re.jsx(IV,{size:20}):re.jsx(b0,{size:20})}),re.jsx("button",{onClick:r,title:"Thème",children:t?re.jsx(SV,{size:20}):re.jsx(fV,{size:20})}),re.jsx("button",{onClick:e,title:"Déconnexion",children:re.jsx(hV,{size:20})})]})]}),re.jsx("main",{className:"notes-area",children:w?re.jsx("p",{className:"empty",children:"Chargement…"}):x.length===0?re.jsx("p",{className:"empty",children:d?"Aucune note archivée":`Aucune note
Clique sur + pour commencer`}):re.jsx("div",{className:"notes-grid",children:x.map(j=>re.jsx(bV,{note:j,onClick:()=>o(`/note/${j.id}`)},j.id))})}),re.jsx("button",{className:"fab",onClick:()=>o("/note/new"),title:"Nouvelle note",children:re.jsx(gV,{size:26})})]})}const LV=[{key:"DEFAULT",label:"Blanc"},{key:"RED",label:"Rouge"},{key:"ORANGE",label:"Orange"},{key:"YELLOW",label:"Jaune"},{key:"GREEN",label:"Vert"},{key:"TEAL",label:"Turquoise"},{key:"BLUE",label:"Bleu"},{key:"DARK_BLUE",label:"Bleu foncé"},{key:"PURPLE",label:"Violet"},{key:"PINK",label:"Rose"},{key:"BROWN",label:"Marron"},{key:"GRAY",label:"Gris"}],GE={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function MV(){const{id:n}=RA(),e=n==="new",{user:t}=Ou(),r=hm(),[o,a]=Z.useState(""),[u,d]=Z.useState(""),[f,_]=Z.useState("DEFAULT"),[v,w]=Z.useState(!1),[T,x]=Z.useState(!1),[j,z]=Z.useState(!e);Z.useEffect(()=>{e||!t||_D(wd(ba,"notes",n)).then(Q=>{if(Q.exists()){const Y=Q.data();a(Y.title||""),d(Y.content||""),_(Y.color||"DEFAULT"),w(Y.isPinned||!1),x(Y.isArchived||!1)}z(!1)})},[n,e,t]);const b=async()=>{if(!t)return;const Q={title:o.trim(),content:u.trim(),color:f,isPinned:v,isArchived:T};if(e){if(!Q.title&&!Q.content){r("/");return}await xV(t.uid,Q)}else await NV(n,Q);r("/")},ie=async()=>{!e&&confirm("Supprimer cette note ?")&&(await DV(n),r("/"))};return j?re.jsx("div",{className:"note-page loading",children:"Chargement…"}):re.jsxs("div",{className:`note-page ${GE[f]||"note-default"}`,children:[re.jsxs("header",{className:"note-toolbar",children:[re.jsx("button",{className:"icon-btn",onClick:b,title:"Retour",children:re.jsx(uV,{size:22})}),re.jsxs("div",{className:"toolbar-actions",children:[re.jsx("button",{className:`icon-btn ${v?"active":""}`,onClick:()=>w(!v),title:"Épingler",children:re.jsx(O0,{size:20,fill:v?"currentColor":"none"})}),re.jsx("button",{className:`icon-btn ${T?"active":""}`,onClick:()=>x(!T),title:"Archiver",children:re.jsx(b0,{size:20})}),!e&&re.jsx("button",{className:"icon-btn",onClick:ie,title:"Supprimer",children:re.jsx(RV,{size:20})})]})]}),re.jsx("div",{className:"color-picker",children:LV.map(Q=>re.jsx("button",{className:`color-dot ${GE[Q.key]} ${f===Q.key?"selected":""}`,onClick:()=>_(Q.key),title:Q.label},Q.key))}),re.jsx("input",{className:"note-title-input",placeholder:"Titre",value:o,onChange:Q=>a(Q.target.value),autoFocus:e}),re.jsx("textarea",{className:"note-content-input",placeholder:"Note",value:u,onChange:Q=>d(Q.target.value),rows:12})]})}function QE({children:n}){const{user:e,loading:t}=Ou();return t?re.jsx("div",{className:"loading-screen",children:"Chargement…"}):e?n:re.jsx(Tp,{to:"/login",replace:!0})}function FV(){const{user:n,loading:e}=Ou();return e?re.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"var(--bg)",color:"var(--text)"},children:"Chargement…"}):re.jsxs(zA,{children:[re.jsx(Ol,{path:"/login",element:n?re.jsx(Tp,{to:"/",replace:!0}):re.jsx(eV,{})}),re.jsx(Ol,{path:"/",element:re.jsx(QE,{children:re.jsx(OV,{})})}),re.jsx(Ol,{path:"/note/:id",element:re.jsx(QE,{children:re.jsx(MV,{})})}),re.jsx(Ol,{path:"*",element:re.jsx(Tp,{to:"/",replace:!0})})]})}XS.createRoot(document.getElementById("root")).render(re.jsx(YE.StrictMode,{children:re.jsx(WA,{basename:"/m3notes-web",children:re.jsx(PV,{children:re.jsx(ZD,{children:re.jsx(FV,{})})})})}));
