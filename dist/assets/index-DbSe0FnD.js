function WS(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function ew(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var np={exports:{}},xl={},rp={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function KS(){if(Ay)return Ne;Ay=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,z={};function V(O,K,ve){this.props=O,this.context=K,this.refs=z,this.updater=ve||N}V.prototype.isReactComponent={},V.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},V.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function re(){}re.prototype=V.prototype;function ne(O,K,ve){this.props=O,this.context=K,this.refs=z,this.updater=ve||N}var ee=ne.prototype=new re;ee.constructor=ne,M(ee,V.prototype),ee.isPureReactComponent=!0;var ae=Array.isArray,we=Object.prototype.hasOwnProperty,ge={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(O,K,ve){var Ce,xe={},Oe=null,je=null;if(K!=null)for(Ce in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(Oe=""+K.key),K)we.call(K,Ce)&&!k.hasOwnProperty(Ce)&&(xe[Ce]=K[Ce]);var Be=arguments.length-2;if(Be===1)xe.children=ve;else if(1<Be){for(var Ge=Array(Be),Ct=0;Ct<Be;Ct++)Ge[Ct]=arguments[Ct+2];xe.children=Ge}if(O&&O.defaultProps)for(Ce in Be=O.defaultProps,Be)xe[Ce]===void 0&&(xe[Ce]=Be[Ce]);return{$$typeof:n,type:O,key:Oe,ref:je,props:xe,_owner:ge.current}}function P(O,K){return{$$typeof:n,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function b(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return K[ve]})}var L=/\/+/g;function R(O,K){return typeof O=="object"&&O!==null&&O.key!=null?b(""+O.key):K.toString(36)}function rt(O,K,ve,Ce,xe){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var je=!1;if(O===null)je=!0;else switch(Oe){case"string":case"number":je=!0;break;case"object":switch(O.$$typeof){case n:case e:je=!0}}if(je)return je=O,xe=xe(je),O=Ce===""?"."+R(je,0):Ce,ae(xe)?(ve="",O!=null&&(ve=O.replace(L,"$&/")+"/"),rt(xe,K,ve,"",function(Ct){return Ct})):xe!=null&&(x(xe)&&(xe=P(xe,ve+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(L,"$&/")+"/")+O)),K.push(xe)),1;if(je=0,Ce=Ce===""?".":Ce+":",ae(O))for(var Be=0;Be<O.length;Be++){Oe=O[Be];var Ge=Ce+R(Oe,Be);je+=rt(Oe,K,ve,Ge,xe)}else if(Ge=T(O),typeof Ge=="function")for(O=Ge.call(O),Be=0;!(Oe=O.next()).done;)Oe=Oe.value,Ge=Ce+R(Oe,Be++),je+=rt(Oe,K,ve,Ge,xe);else if(Oe==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function Rt(O,K,ve){if(O==null)return O;var Ce=[],xe=0;return rt(O,Ce,"","",function(Oe){return K.call(ve,Oe,xe++)}),Ce}function Pt(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ce={current:null},H={transition:null},_e={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:ge};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Rt,forEach:function(O,K,ve){Rt(O,function(){K.apply(this,arguments)},ve)},count:function(O){var K=0;return Rt(O,function(){K++}),K},toArray:function(O){return Rt(O,function(K){return K})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=V,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=ne,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Ne.act=le,Ne.cloneElement=function(O,K,ve){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ce=M({},O.props),xe=O.key,Oe=O.ref,je=O._owner;if(K!=null){if(K.ref!==void 0&&(Oe=K.ref,je=ge.current),K.key!==void 0&&(xe=""+K.key),O.type&&O.type.defaultProps)var Be=O.type.defaultProps;for(Ge in K)we.call(K,Ge)&&!k.hasOwnProperty(Ge)&&(Ce[Ge]=K[Ge]===void 0&&Be!==void 0?Be[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)Ce.children=ve;else if(1<Ge){Be=Array(Ge);for(var Ct=0;Ct<Ge;Ct++)Be[Ct]=arguments[Ct+2];Ce.children=Be}return{$$typeof:n,type:O.type,key:xe,ref:Oe,props:Ce,_owner:je}},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Ne.createElement=S,Ne.createFactory=function(O){var K=S.bind(null,O);return K.type=O,K},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=x,Ne.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Pt}},Ne.memo=function(O,K){return{$$typeof:_,type:O,compare:K===void 0?null:K}},Ne.startTransition=function(O){var K=H.transition;H.transition={};try{O()}finally{H.transition=K}},Ne.unstable_act=le,Ne.useCallback=function(O,K){return ce.current.useCallback(O,K)},Ne.useContext=function(O){return ce.current.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O){return ce.current.useDeferredValue(O)},Ne.useEffect=function(O,K){return ce.current.useEffect(O,K)},Ne.useId=function(){return ce.current.useId()},Ne.useImperativeHandle=function(O,K,ve){return ce.current.useImperativeHandle(O,K,ve)},Ne.useInsertionEffect=function(O,K){return ce.current.useInsertionEffect(O,K)},Ne.useLayoutEffect=function(O,K){return ce.current.useLayoutEffect(O,K)},Ne.useMemo=function(O,K){return ce.current.useMemo(O,K)},Ne.useReducer=function(O,K,ve){return ce.current.useReducer(O,K,ve)},Ne.useRef=function(O){return ce.current.useRef(O)},Ne.useState=function(O){return ce.current.useState(O)},Ne.useSyncExternalStore=function(O,K,ve){return ce.current.useSyncExternalStore(O,K,ve)},Ne.useTransition=function(){return ce.current.useTransition()},Ne.version="18.3.1",Ne}var Ry;function um(){return Ry||(Ry=1,rp.exports=KS()),rp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function HS(){if(Py)return xl;Py=1;var n=um(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,_){var v,w={},T=null,N=null;_!==void 0&&(T=""+_),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(N=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:N,props:w,_owner:o.current}}return xl.Fragment=t,xl.jsx=u,xl.jsxs=u,xl}var Cy;function GS(){return Cy||(Cy=1,np.exports=HS()),np.exports}var Q=GS(),Z=um();const tw=ew(Z),QS=WS({__proto__:null,default:tw},[Z]);var Jc={},ip={exports:{}},cn={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function XS(){return ky||(ky=1,(function(n){function e(H,_e){var le=H.length;H.push(_e);e:for(;0<le;){var O=le-1>>>1,K=H[O];if(0<o(K,_e))H[O]=_e,H[le]=K,le=O;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var _e=H[0],le=H.pop();if(le!==_e){H[0]=le;e:for(var O=0,K=H.length,ve=K>>>1;O<ve;){var Ce=2*(O+1)-1,xe=H[Ce],Oe=Ce+1,je=H[Oe];if(0>o(xe,le))Oe<K&&0>o(je,xe)?(H[O]=je,H[Oe]=le,O=Oe):(H[O]=xe,H[Ce]=le,O=Ce);else if(Oe<K&&0>o(je,le))H[O]=je,H[Oe]=le,O=Oe;else break e}}return _e}function o(H,_e){var le=H.sortIndex-_e.sortIndex;return le!==0?le:H.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],_=[],v=1,w=null,T=3,N=!1,M=!1,z=!1,V=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(H){for(var _e=t(_);_e!==null;){if(_e.callback===null)r(_);else if(_e.startTime<=H)r(_),_e.sortIndex=_e.expirationTime,e(f,_e);else break;_e=t(_)}}function ae(H){if(z=!1,ee(H),!M)if(t(f)!==null)M=!0,Pt(we);else{var _e=t(_);_e!==null&&ce(ae,_e.startTime-H)}}function we(H,_e){M=!1,z&&(z=!1,re(S),S=-1),N=!0;var le=T;try{for(ee(_e),w=t(f);w!==null&&(!(w.expirationTime>_e)||H&&!b());){var O=w.callback;if(typeof O=="function"){w.callback=null,T=w.priorityLevel;var K=O(w.expirationTime<=_e);_e=n.unstable_now(),typeof K=="function"?w.callback=K:w===t(f)&&r(f),ee(_e)}else r(f);w=t(f)}if(w!==null)var ve=!0;else{var Ce=t(_);Ce!==null&&ce(ae,Ce.startTime-_e),ve=!1}return ve}finally{w=null,T=le,N=!1}}var ge=!1,k=null,S=-1,P=5,x=-1;function b(){return!(n.unstable_now()-x<P)}function L(){if(k!==null){var H=n.unstable_now();x=H;var _e=!0;try{_e=k(!0,H)}finally{_e?R():(ge=!1,k=null)}}else ge=!1}var R;if(typeof ne=="function")R=function(){ne(L)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Rt=rt.port2;rt.port1.onmessage=L,R=function(){Rt.postMessage(null)}}else R=function(){V(L,0)};function Pt(H){k=H,ge||(ge=!0,R())}function ce(H,_e){S=V(function(){H(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){M||N||(M=!0,Pt(we))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(H){switch(T){case 1:case 2:case 3:var _e=3;break;default:_e=T}var le=T;T=_e;try{return H()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,_e){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=T;T=H;try{return _e()}finally{T=le}},n.unstable_scheduleCallback=function(H,_e,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,H){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,H={id:v++,callback:_e,priorityLevel:H,startTime:le,expirationTime:K,sortIndex:-1},le>O?(H.sortIndex=le,e(_,H),t(f)===null&&H===t(_)&&(z?(re(S),S=-1):z=!0,ce(ae,le-O))):(H.sortIndex=K,e(f,H),M||N||(M=!0,Pt(we))),H},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(H){var _e=T;return function(){var le=T;T=_e;try{return H.apply(this,arguments)}finally{T=le}}}})(op)),op}var xy;function YS(){return xy||(xy=1,sp.exports=XS()),sp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function JS(){if(Ny)return cn;Ny=1;var n=um(),e=YS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:_.test(i)?w[i]=!0:(v[i]=!0,!1)}function N(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,h){if(s===null||typeof s>"u"||N(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(i,s,l,h,p,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){V[i]=new z(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];V[s]=new z(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){V[i]=new z(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){V[i]=new z(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){V[i]=new z(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){V[i]=new z(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){V[i]=new z(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){V[i]=new z(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){V[i]=new z(i,5,!1,i.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function ne(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(re,ne);V[s]=new z(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(re,ne);V[s]=new z(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(re,ne);V[s]=new z(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){V[i]=new z(i,1,!1,i.toLowerCase(),null,!1,!1)}),V.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){V[i]=new z(i,1,!1,i.toLowerCase(),null,!0,!0)});function ee(i,s,l,h){var p=V.hasOwnProperty(s)?V[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),ge=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function _e(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function K(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var ve=!1;function Ce(i,s){if(!i||ve)return"";ve=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(i,[],s)}else{try{s.call()}catch($){h=$}i.call(s.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),g=h.stack.split(`
`),E=p.length-1,A=g.length-1;1<=E&&0<=A&&p[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(p[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||p[E]!==g[A]){var C=`
`+p[E].replace(" at new "," at ");return i.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",i.displayName)),C}while(1<=E&&0<=A);break}}}finally{ve=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function xe(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Oe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case ge:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case rt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case b:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case L:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Rt:return s=i.displayName||null,s!==null?s:Oe(i.type)||"Memo";case Pt:s=i._payload,i=i._init;try{return Oe(i(s))}catch{}}return null}function je(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ct(i){var s=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pr(i){i._valueTracker||(i._valueTracker=Ct(i))}function so(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ge(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ni(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function es(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function oo(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Be(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function La(i,s){s=s.checked,s!=null&&ee(i,"checked",s,!1)}function Ma(i,s){La(i,s);var l=Be(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?ao(i,s.type,l):s.hasOwnProperty("defaultValue")&&ao(i,s.type,Be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Mu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ao(i,s,l){(s!=="number"||ni(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Cr=Array.isArray;function kr(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Be(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Fa(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function lo(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Cr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Be(l)}}function uo(i,s){var l=Be(s.value),h=Be(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ua(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function vt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?vt(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var xr,ja=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=xr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ri(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ns=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(i){ns.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ts[s]=ts[i]})});function Ba(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ts.hasOwnProperty(i)&&ts[i]?(""+s).trim():s+"px"}function za(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ba(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var $a=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(i,s){if(s){if($a[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Wa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function co(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ho=null,Sn=null,rr=null;function fo(i){if(i=ml(i)){if(typeof ho!="function")throw Error(t(280));var s=i.stateNode;s&&(s=fc(s),ho(i.stateNode,i.type,s))}}function ir(i){Sn?rr?rr.push(i):rr=[i]:Sn=i}function Ka(){if(Sn){var i=Sn,s=rr;if(rr=Sn=null,fo(i),s)for(i=0;i<s.length;i++)fo(s[i])}}function is(i,s){return i(s)}function Ha(){}var Nr=!1;function Ga(i,s,l){if(Nr)return i(s,l);Nr=!0;try{return is(i,s,l)}finally{Nr=!1,(Sn!==null||rr!==null)&&(Ha(),Ka())}}function ut(i,s){var l=i.stateNode;if(l===null)return null;var h=fc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var po=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){po=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{po=!1}function ss(i,s,l,h,p,g,E,A,C){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(X){this.onError(X)}}var os=!1,mo=null,Fn=!1,Qa=null,kd={onError:function(i){os=!0,mo=i}};function go(i,s,l,h,p,g,E,A,C){os=!1,mo=null,ss.apply(kd,arguments)}function Fu(i,s,l,h,p,g,E,A,C){if(go.apply(this,arguments),os){if(os){var $=mo;os=!1,mo=null}else throw Error(t(198));Fn||(Fn=!0,Qa=$)}}function Un(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function as(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function jn(i){if(Un(i)!==i)throw Error(t(188))}function Uu(i){var s=i.alternate;if(!s){if(s=Un(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return jn(p),i;if(g===h)return jn(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var E=!1,A=p.child;A;){if(A===l){E=!0,l=p,h=g;break}if(A===h){E=!0,h=p,l=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===l){E=!0,l=g,h=p;break}if(A===h){E=!0,h=g,l=p;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Xa(i){return i=Uu(i),i!==null?_o(i):null}function _o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=_o(i);if(s!==null)return s;i=i.sibling}return null}var yo=e.unstable_scheduleCallback,Ya=e.unstable_cancelCallback,ju=e.unstable_shouldYield,xd=e.unstable_requestPaint,Qe=e.unstable_now,Bu=e.unstable_getCurrentPriorityLevel,ls=e.unstable_ImmediatePriority,ii=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Ja=e.unstable_LowPriority,zu=e.unstable_IdlePriority,us=null,fn=null;function $u(i){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(us,i,void 0,(i.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Wu,Za=Math.log,qu=Math.LN2;function Wu(i){return i>>>=0,i===0?32:31-(Za(i)/qu|0)|0}var vo=64,Eo=4194304;function si(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function cs(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,g=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~p;A!==0?h=si(A):(g&=E,g!==0&&(h=si(g)))}else E=l&~p,E!==0?h=si(E):g!==0&&(h=si(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Qt(s),p=1<<l,h|=i[l],s&=~p;return h}function Nd(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var E=31-Qt(g),A=1<<E,C=p[E];C===-1?((A&l)===0||(A&h)!==0)&&(p[E]=Nd(A,s)):C<=s&&(i.expiredLanes|=A),g&=~A}}function pn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function hs(){var i=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),i}function oi(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ai(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Qt(s),i[s]=l}function He(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Qt(l),g=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~g}}function li(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Qt(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var be=0;function ui(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ku,wo,Hu,Gu,Qu,el=!1,sr=[],bt=null,Bn=null,zn=null,ci=new Map,Rn=new Map,or=[],Dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(i,s){switch(i){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(s.pointerId)}}function nn(i,s,l,h,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=ml(s),s!==null&&wo(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Vd(i,s,l,h,p){switch(s){case"focusin":return bt=nn(bt,i,s,l,h,p),!0;case"dragenter":return Bn=nn(Bn,i,s,l,h,p),!0;case"mouseover":return zn=nn(zn,i,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return ci.set(g,nn(ci.get(g)||null,i,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Rn.set(g,nn(Rn.get(g)||null,i,s,l,h,p)),!0}return!1}function Yu(i){var s=gs(i.target);if(s!==null){var l=Un(s);if(l!==null){if(s=l.tag,s===13){if(s=as(l),s!==null){i.blockedOn=s,Qu(i.priority,function(){Hu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Vr(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Io(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);rs=h,l.target.dispatchEvent(h),rs=null}else return s=ml(l),s!==null&&wo(s),i.blockedOn=l,!1;s.shift()}return!0}function ds(i,s,l){Vr(i)&&l.delete(s)}function Ju(){el=!1,bt!==null&&Vr(bt)&&(bt=null),Bn!==null&&Vr(Bn)&&(Bn=null),zn!==null&&Vr(zn)&&(zn=null),ci.forEach(ds),Rn.forEach(ds)}function $n(i,s){i.blockedOn===s&&(i.blockedOn=null,el||(el=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ju)))}function qn(i){function s(p){return $n(p,i)}if(0<sr.length){$n(sr[0],i);for(var l=1;l<sr.length;l++){var h=sr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(bt!==null&&$n(bt,i),Bn!==null&&$n(Bn,i),zn!==null&&$n(zn,i),ci.forEach(s),Rn.forEach(s),l=0;l<or.length;l++)h=or[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<or.length&&(l=or[0],l.blockedOn===null);)Yu(l),l.blockedOn===null&&or.shift()}var br=ae.ReactCurrentBatchConfig,hi=!0;function Ze(i,s,l,h){var p=be,g=br.transition;br.transition=null;try{be=1,tl(i,s,l,h)}finally{be=p,br.transition=g}}function bd(i,s,l,h){var p=be,g=br.transition;br.transition=null;try{be=4,tl(i,s,l,h)}finally{be=p,br.transition=g}}function tl(i,s,l,h){if(hi){var p=Io(i,s,l,h);if(p===null)Wd(i,s,h,fs,l),Xu(i,h);else if(Vd(p,i,s,l,h))h.stopPropagation();else if(Xu(i,h),s&4&&-1<Dd.indexOf(i)){for(;p!==null;){var g=ml(p);if(g!==null&&Ku(g),g=Io(i,s,l,h),g===null&&Wd(i,s,h,fs,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else Wd(i,s,h,null,l)}}var fs=null;function Io(i,s,l,h){if(fs=null,i=co(h),i=gs(i),i!==null)if(s=Un(i),s===null)i=null;else if(l=s.tag,l===13){if(i=as(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fs=i,null}function nl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case ls:return 1;case ii:return 4;case An:case Ja:return 16;case zu:return 536870912;default:return 16}default:return 16}}var mn=null,To=null,rn=null;function rl(){if(rn)return rn;var i,s=To,l=s.length,h,p="value"in mn?mn.value:mn.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===p[g-h];h++);return rn=p.slice(i,1<h?1-h:void 0)}function So(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ar(){return!0}function il(){return!1}function Ot(i){function s(l,h,p,g,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ar:il,this.isPropagationStopped=il,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ao=Ot(Wn),lr=le({},Wn,{view:0,detail:0}),Od=Ot(lr),Ro,Or,di,ps=le({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==di&&(di&&i.type==="mousemove"?(Ro=i.screenX-di.screenX,Or=i.screenY-di.screenY):Or=Ro=0,di=i),Ro)},movementY:function(i){return"movementY"in i?i.movementY:Or}}),Po=Ot(ps),sl=le({},ps,{dataTransfer:0}),Zu=Ot(sl),Co=le({},lr,{relatedTarget:0}),ko=Ot(Co),ec=le({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lr=Ot(ec),tc=le({},Wn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),nc=Ot(tc),rc=le({},Wn,{data:0}),ol=Ot(rc),xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ic[i])?!!s[i]:!1}function ur(){return sc}var c=le({},lr,{key:function(i){if(i.key){var s=xo[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=So(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xt[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(i){return i.type==="keypress"?So(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?So(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Ot(c),y=le({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ot(y),F=le({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),q=Ot(F),ie=le({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Ot(ie),wt=le({},ps,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Ot(wt),kt=[9,13,27,32],dt=d&&"CompositionEvent"in window,Pn=null;d&&"documentMode"in document&&(Pn=document.documentMode);var gn=d&&"TextEvent"in window&&!Pn,ms=d&&(!dt||Pn&&8<Pn&&11>=Pn),No=" ",vg=!1;function Eg(i,s){switch(i){case"keyup":return kt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Do=!1;function z0(i,s){switch(i){case"compositionend":return wg(s);case"keypress":return s.which!==32?null:(vg=!0,No);case"textInput":return i=s.data,i===No&&vg?null:i;default:return null}}function $0(i,s){if(Do)return i==="compositionend"||!dt&&Eg(i,s)?(i=rl(),rn=To=mn=null,Do=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ms&&s.locale!=="ko"?null:s.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!q0[i.type]:s==="textarea"}function Tg(i,s,l,h){ir(h),s=cc(s,"onChange"),0<s.length&&(l=new Ao("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var al=null,ll=null;function W0(i){Bg(i,0)}function oc(i){var s=Mo(i);if(so(s))return i}function K0(i,s){if(i==="change")return s}var Sg=!1;if(d){var Ld;if(d){var Md="oninput"in document;if(!Md){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),Md=typeof Ag.oninput=="function"}Ld=Md}else Ld=!1;Sg=Ld&&(!document.documentMode||9<document.documentMode)}function Rg(){al&&(al.detachEvent("onpropertychange",Pg),ll=al=null)}function Pg(i){if(i.propertyName==="value"&&oc(ll)){var s=[];Tg(s,ll,i,co(i)),Ga(W0,s)}}function H0(i,s,l){i==="focusin"?(Rg(),al=s,ll=l,al.attachEvent("onpropertychange",Pg)):i==="focusout"&&Rg()}function G0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return oc(ll)}function Q0(i,s){if(i==="click")return oc(s)}function X0(i,s){if(i==="input"||i==="change")return oc(s)}function Y0(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:Y0;function ul(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!Kn(i[p],s[p]))return!1}return!0}function Cg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function kg(i,s){var l=Cg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Cg(l)}}function xg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?xg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Ng(){for(var i=window,s=ni();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ni(i.document)}return s}function Fd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function J0(i){var s=Ng(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&xg(l.ownerDocument.documentElement,l)){if(h!==null&&Fd(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!i.extend&&g>h&&(p=h,h=g,g=p),p=kg(l,g);var E=kg(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Z0=d&&"documentMode"in document&&11>=document.documentMode,Vo=null,Ud=null,cl=null,jd=!1;function Dg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;jd||Vo==null||Vo!==ni(h)||(h=Vo,"selectionStart"in h&&Fd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),cl&&ul(cl,h)||(cl=h,h=cc(Ud,"onSelect"),0<h.length&&(s=new Ao("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Vo)))}function ac(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var bo={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},Bd={},Vg={};d&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function lc(i){if(Bd[i])return Bd[i];if(!bo[i])return i;var s=bo[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Vg)return Bd[i]=s[l];return i}var bg=lc("animationend"),Og=lc("animationiteration"),Lg=lc("animationstart"),Mg=lc("transitionend"),Fg=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(i,s){Fg.set(i,s),a(s,[i])}for(var zd=0;zd<Ug.length;zd++){var $d=Ug[zd],eS=$d.toLowerCase(),tS=$d[0].toUpperCase()+$d.slice(1);fi(eS,"on"+tS)}fi(bg,"onAnimationEnd"),fi(Og,"onAnimationIteration"),fi(Lg,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Mg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function jg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Fu(h,s,void 0,i),i.currentTarget=null}function Bg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var A=h[E],C=A.instance,$=A.currentTarget;if(A=A.listener,C!==g&&p.isPropagationStopped())break e;jg(p,A,$),g=C}else for(E=0;E<h.length;E++){if(A=h[E],C=A.instance,$=A.currentTarget,A=A.listener,C!==g&&p.isPropagationStopped())break e;jg(p,A,$),g=C}}}if(Fn)throw i=Qa,Fn=!1,Qa=null,i}function Ye(i,s){var l=s[Yd];l===void 0&&(l=s[Yd]=new Set);var h=i+"__bubble";l.has(h)||(zg(s,i,2,!1),l.add(h))}function qd(i,s,l){var h=0;s&&(h|=4),zg(l,i,h,s)}var uc="_reactListening"+Math.random().toString(36).slice(2);function dl(i){if(!i[uc]){i[uc]=!0,r.forEach(function(l){l!=="selectionchange"&&(nS.has(l)||qd(l,!1,i),qd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[uc]||(s[uc]=!0,qd("selectionchange",!1,s))}}function zg(i,s,l,h){switch(nl(s)){case 1:var p=Ze;break;case 4:p=bd;break;default:p=tl}l=p.bind(null,s,l,i),p=void 0,!po||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Wd(i,s,l,h,p){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var C=E.tag;if((C===3||C===4)&&(C=E.stateNode.containerInfo,C===p||C.nodeType===8&&C.parentNode===p))return;E=E.return}for(;A!==null;){if(E=gs(A),E===null)return;if(C=E.tag,C===5||C===6){h=g=E;continue e}A=A.parentNode}}h=h.return}Ga(function(){var $=g,X=co(l),Y=[];e:{var G=Fg.get(i);if(G!==void 0){var ue=Ao,de=i;switch(i){case"keypress":if(So(l)===0)break e;case"keydown":case"keyup":ue=m;break;case"focusin":de="focus",ue=ko;break;case"focusout":de="blur",ue=ko;break;case"beforeblur":case"afterblur":ue=ko;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Zu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=q;break;case bg:case Og:case Lg:ue=Lr;break;case Mg:ue=qe;break;case"scroll":ue=Od;break;case"wheel":ue=Le;break;case"copy":case"cut":case"paste":ue=nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=I}var pe=(s&4)!==0,ct=!pe&&i==="scroll",j=pe?G!==null?G+"Capture":null:G;pe=[];for(var D=$,B;D!==null;){B=D;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,j!==null&&(te=ut(D,j),te!=null&&pe.push(fl(D,te,B)))),ct)break;D=D.return}0<pe.length&&(G=new ue(G,de,null,l,X),Y.push({event:G,listeners:pe}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",G&&l!==rs&&(de=l.relatedTarget||l.fromElement)&&(gs(de)||de[Mr]))break e;if((ue||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,ue?(de=l.relatedTarget||l.toElement,ue=$,de=de?gs(de):null,de!==null&&(ct=Un(de),de!==ct||de.tag!==5&&de.tag!==6)&&(de=null)):(ue=null,de=$),ue!==de)){if(pe=Po,te="onMouseLeave",j="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(pe=I,te="onPointerLeave",j="onPointerEnter",D="pointer"),ct=ue==null?G:Mo(ue),B=de==null?G:Mo(de),G=new pe(te,D+"leave",ue,l,X),G.target=ct,G.relatedTarget=B,te=null,gs(X)===$&&(pe=new pe(j,D+"enter",de,l,X),pe.target=B,pe.relatedTarget=ct,te=pe),ct=te,ue&&de)t:{for(pe=ue,j=de,D=0,B=pe;B;B=Oo(B))D++;for(B=0,te=j;te;te=Oo(te))B++;for(;0<D-B;)pe=Oo(pe),D--;for(;0<B-D;)j=Oo(j),B--;for(;D--;){if(pe===j||j!==null&&pe===j.alternate)break t;pe=Oo(pe),j=Oo(j)}pe=null}else pe=null;ue!==null&&$g(Y,G,ue,pe,!1),de!==null&&ct!==null&&$g(Y,ct,de,pe,!0)}}e:{if(G=$?Mo($):window,ue=G.nodeName&&G.nodeName.toLowerCase(),ue==="select"||ue==="input"&&G.type==="file")var me=K0;else if(Ig(G))if(Sg)me=X0;else{me=G0;var Ie=H0}else(ue=G.nodeName)&&ue.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(me=Q0);if(me&&(me=me(i,$))){Tg(Y,me,l,X);break e}Ie&&Ie(i,G,$),i==="focusout"&&(Ie=G._wrapperState)&&Ie.controlled&&G.type==="number"&&ao(G,"number",G.value)}switch(Ie=$?Mo($):window,i){case"focusin":(Ig(Ie)||Ie.contentEditable==="true")&&(Vo=Ie,Ud=$,cl=null);break;case"focusout":cl=Ud=Vo=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,Dg(Y,l,X);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":Dg(Y,l,X)}var Te;if(dt)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Do?Eg(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(ms&&l.locale!=="ko"&&(Do||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Do&&(Te=rl()):(mn=X,To="value"in mn?mn.value:mn.textContent,Do=!0)),Ie=cc($,Re),0<Ie.length&&(Re=new ol(Re,i,null,l,X),Y.push({event:Re,listeners:Ie}),Te?Re.data=Te:(Te=wg(l),Te!==null&&(Re.data=Te)))),(Te=gn?z0(i,l):$0(i,l))&&($=cc($,"onBeforeInput"),0<$.length&&(X=new ol("onBeforeInput","beforeinput",null,l,X),Y.push({event:X,listeners:$}),X.data=Te))}Bg(Y,s)})}function fl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function cc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=ut(i,l),g!=null&&h.unshift(fl(i,g,p)),g=ut(i,s),g!=null&&h.push(fl(i,g,p))),i=i.return}return h}function Oo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function $g(i,s,l,h,p){for(var g=s._reactName,E=[];l!==null&&l!==h;){var A=l,C=A.alternate,$=A.stateNode;if(C!==null&&C===h)break;A.tag===5&&$!==null&&(A=$,p?(C=ut(l,g),C!=null&&E.unshift(fl(l,C,A))):p||(C=ut(l,g),C!=null&&E.push(fl(l,C,A)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var rS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function qg(i){return(typeof i=="string"?i:""+i).replace(rS,`
`).replace(iS,"")}function hc(i,s,l){if(s=qg(s),qg(i)!==s&&l)throw Error(t(425))}function dc(){}var Kd=null,Hd=null;function Gd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(i){return Wg.resolve(null).then(i).catch(aS)}:Qd;function aS(i){setTimeout(function(){throw i})}function Xd(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),qn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);qn(s)}function pi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Kg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),cr="__reactFiber$"+Lo,pl="__reactProps$"+Lo,Mr="__reactContainer$"+Lo,Yd="__reactEvents$"+Lo,lS="__reactListeners$"+Lo,uS="__reactHandles$"+Lo;function gs(i){var s=i[cr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Mr]||l[cr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Kg(i);i!==null;){if(l=i[cr])return l;i=Kg(i)}return s}i=l,l=i.parentNode}return null}function ml(i){return i=i[cr]||i[Mr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Mo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function fc(i){return i[pl]||null}var Jd=[],Fo=-1;function mi(i){return{current:i}}function Je(i){0>Fo||(i.current=Jd[Fo],Jd[Fo]=null,Fo--)}function Xe(i,s){Fo++,Jd[Fo]=i.current,i.current=s}var gi={},Bt=mi(gi),sn=mi(!1),_s=gi;function Uo(i,s){var l=i.type.contextTypes;if(!l)return gi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function on(i){return i=i.childContextTypes,i!=null}function pc(){Je(sn),Je(Bt)}function Hg(i,s,l){if(Bt.current!==gi)throw Error(t(168));Xe(Bt,s),Xe(sn,l)}function Gg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,je(i)||"Unknown",p));return le({},l,h)}function mc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||gi,_s=Bt.current,Xe(Bt,i),Xe(sn,sn.current),!0}function Qg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Gg(i,s,_s),h.__reactInternalMemoizedMergedChildContext=i,Je(sn),Je(Bt),Xe(Bt,i)):Je(sn),Xe(sn,l)}var Fr=null,gc=!1,Zd=!1;function Xg(i){Fr===null?Fr=[i]:Fr.push(i)}function cS(i){gc=!0,Xg(i)}function _i(){if(!Zd&&Fr!==null){Zd=!0;var i=0,s=be;try{var l=Fr;for(be=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Fr=null,gc=!1}catch(p){throw Fr!==null&&(Fr=Fr.slice(i+1)),yo(ls,_i),p}finally{be=s,Zd=!1}}return null}var jo=[],Bo=0,_c=null,yc=0,Cn=[],kn=0,ys=null,Ur=1,jr="";function vs(i,s){jo[Bo++]=yc,jo[Bo++]=_c,_c=i,yc=s}function Yg(i,s,l){Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=ys,ys=i;var h=Ur;i=jr;var p=32-Qt(h)-1;h&=~(1<<p),l+=1;var g=32-Qt(s)+p;if(30<g){var E=p-p%5;g=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Ur=1<<32-Qt(s)+p|l<<p|h,jr=g+i}else Ur=1<<g|l<<p|h,jr=i}function ef(i){i.return!==null&&(vs(i,1),Yg(i,1,0))}function tf(i){for(;i===_c;)_c=jo[--Bo],jo[Bo]=null,yc=jo[--Bo],jo[Bo]=null;for(;i===ys;)ys=Cn[--kn],Cn[kn]=null,jr=Cn[--kn],Cn[kn]=null,Ur=Cn[--kn],Cn[kn]=null}var _n=null,yn=null,et=!1,Hn=null;function Jg(i,s){var l=Vn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Zg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,_n=i,yn=pi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,_n=i,yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ys!==null?{id:Ur,overflow:jr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Vn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,_n=i,yn=null,!0):!1;default:return!1}}function nf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function rf(i){if(et){var s=yn;if(s){var l=s;if(!Zg(i,s)){if(nf(i))throw Error(t(418));s=pi(l.nextSibling);var h=_n;s&&Zg(i,s)?Jg(h,l):(i.flags=i.flags&-4097|2,et=!1,_n=i)}}else{if(nf(i))throw Error(t(418));i.flags=i.flags&-4097|2,et=!1,_n=i}}}function e_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;_n=i}function vc(i){if(i!==_n)return!1;if(!et)return e_(i),et=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Gd(i.type,i.memoizedProps)),s&&(s=yn)){if(nf(i))throw t_(),Error(t(418));for(;s;)Jg(i,s),s=pi(s.nextSibling)}if(e_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){yn=pi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}yn=null}}else yn=_n?pi(i.stateNode.nextSibling):null;return!0}function t_(){for(var i=yn;i;)i=pi(i.nextSibling)}function zo(){yn=_n=null,et=!1}function sf(i){Hn===null?Hn=[i]:Hn.push(i)}var hS=ae.ReactCurrentBatchConfig;function gl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=p.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ec(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function n_(i){var s=i._init;return s(i._payload)}function r_(i){function s(j,D){if(i){var B=j.deletions;B===null?(j.deletions=[D],j.flags|=16):B.push(D)}}function l(j,D){if(!i)return null;for(;D!==null;)s(j,D),D=D.sibling;return null}function h(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function p(j,D){return j=Ai(j,D),j.index=0,j.sibling=null,j}function g(j,D,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<D?(j.flags|=2,D):B):(j.flags|=2,D)):(j.flags|=1048576,D)}function E(j){return i&&j.alternate===null&&(j.flags|=2),j}function A(j,D,B,te){return D===null||D.tag!==6?(D=Xf(B,j.mode,te),D.return=j,D):(D=p(D,B),D.return=j,D)}function C(j,D,B,te){var me=B.type;return me===k?X(j,D,B.props.children,te,B.key):D!==null&&(D.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Pt&&n_(me)===D.type)?(te=p(D,B.props),te.ref=gl(j,D,B),te.return=j,te):(te=qc(B.type,B.key,B.props,null,j.mode,te),te.ref=gl(j,D,B),te.return=j,te)}function $(j,D,B,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Yf(B,j.mode,te),D.return=j,D):(D=p(D,B.children||[]),D.return=j,D)}function X(j,D,B,te,me){return D===null||D.tag!==7?(D=Ps(B,j.mode,te,me),D.return=j,D):(D=p(D,B),D.return=j,D)}function Y(j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Xf(""+D,j.mode,B),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case we:return B=qc(D.type,D.key,D.props,null,j.mode,B),B.ref=gl(j,null,D),B.return=j,B;case ge:return D=Yf(D,j.mode,B),D.return=j,D;case Pt:var te=D._init;return Y(j,te(D._payload),B)}if(Cr(D)||_e(D))return D=Ps(D,j.mode,B,null),D.return=j,D;Ec(j,D)}return null}function G(j,D,B,te){var me=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return me!==null?null:A(j,D,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case we:return B.key===me?C(j,D,B,te):null;case ge:return B.key===me?$(j,D,B,te):null;case Pt:return me=B._init,G(j,D,me(B._payload),te)}if(Cr(B)||_e(B))return me!==null?null:X(j,D,B,te,null);Ec(j,B)}return null}function ue(j,D,B,te,me){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(B)||null,A(D,j,""+te,me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case we:return j=j.get(te.key===null?B:te.key)||null,C(D,j,te,me);case ge:return j=j.get(te.key===null?B:te.key)||null,$(D,j,te,me);case Pt:var Ie=te._init;return ue(j,D,B,Ie(te._payload),me)}if(Cr(te)||_e(te))return j=j.get(B)||null,X(D,j,te,me,null);Ec(D,te)}return null}function de(j,D,B,te){for(var me=null,Ie=null,Te=D,Re=D=0,Dt=null;Te!==null&&Re<B.length;Re++){Te.index>Re?(Dt=Te,Te=null):Dt=Te.sibling;var Ue=G(j,Te,B[Re],te);if(Ue===null){Te===null&&(Te=Dt);break}i&&Te&&Ue.alternate===null&&s(j,Te),D=g(Ue,D,Re),Ie===null?me=Ue:Ie.sibling=Ue,Ie=Ue,Te=Dt}if(Re===B.length)return l(j,Te),et&&vs(j,Re),me;if(Te===null){for(;Re<B.length;Re++)Te=Y(j,B[Re],te),Te!==null&&(D=g(Te,D,Re),Ie===null?me=Te:Ie.sibling=Te,Ie=Te);return et&&vs(j,Re),me}for(Te=h(j,Te);Re<B.length;Re++)Dt=ue(Te,j,Re,B[Re],te),Dt!==null&&(i&&Dt.alternate!==null&&Te.delete(Dt.key===null?Re:Dt.key),D=g(Dt,D,Re),Ie===null?me=Dt:Ie.sibling=Dt,Ie=Dt);return i&&Te.forEach(function(Ri){return s(j,Ri)}),et&&vs(j,Re),me}function pe(j,D,B,te){var me=_e(B);if(typeof me!="function")throw Error(t(150));if(B=me.call(B),B==null)throw Error(t(151));for(var Ie=me=null,Te=D,Re=D=0,Dt=null,Ue=B.next();Te!==null&&!Ue.done;Re++,Ue=B.next()){Te.index>Re?(Dt=Te,Te=null):Dt=Te.sibling;var Ri=G(j,Te,Ue.value,te);if(Ri===null){Te===null&&(Te=Dt);break}i&&Te&&Ri.alternate===null&&s(j,Te),D=g(Ri,D,Re),Ie===null?me=Ri:Ie.sibling=Ri,Ie=Ri,Te=Dt}if(Ue.done)return l(j,Te),et&&vs(j,Re),me;if(Te===null){for(;!Ue.done;Re++,Ue=B.next())Ue=Y(j,Ue.value,te),Ue!==null&&(D=g(Ue,D,Re),Ie===null?me=Ue:Ie.sibling=Ue,Ie=Ue);return et&&vs(j,Re),me}for(Te=h(j,Te);!Ue.done;Re++,Ue=B.next())Ue=ue(Te,j,Re,Ue.value,te),Ue!==null&&(i&&Ue.alternate!==null&&Te.delete(Ue.key===null?Re:Ue.key),D=g(Ue,D,Re),Ie===null?me=Ue:Ie.sibling=Ue,Ie=Ue);return i&&Te.forEach(function(qS){return s(j,qS)}),et&&vs(j,Re),me}function ct(j,D,B,te){if(typeof B=="object"&&B!==null&&B.type===k&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case we:e:{for(var me=B.key,Ie=D;Ie!==null;){if(Ie.key===me){if(me=B.type,me===k){if(Ie.tag===7){l(j,Ie.sibling),D=p(Ie,B.props.children),D.return=j,j=D;break e}}else if(Ie.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Pt&&n_(me)===Ie.type){l(j,Ie.sibling),D=p(Ie,B.props),D.ref=gl(j,Ie,B),D.return=j,j=D;break e}l(j,Ie);break}else s(j,Ie);Ie=Ie.sibling}B.type===k?(D=Ps(B.props.children,j.mode,te,B.key),D.return=j,j=D):(te=qc(B.type,B.key,B.props,null,j.mode,te),te.ref=gl(j,D,B),te.return=j,j=te)}return E(j);case ge:e:{for(Ie=B.key;D!==null;){if(D.key===Ie)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){l(j,D.sibling),D=p(D,B.children||[]),D.return=j,j=D;break e}else{l(j,D);break}else s(j,D);D=D.sibling}D=Yf(B,j.mode,te),D.return=j,j=D}return E(j);case Pt:return Ie=B._init,ct(j,D,Ie(B._payload),te)}if(Cr(B))return de(j,D,B,te);if(_e(B))return pe(j,D,B,te);Ec(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(l(j,D.sibling),D=p(D,B),D.return=j,j=D):(l(j,D),D=Xf(B,j.mode,te),D.return=j,j=D),E(j)):l(j,D)}return ct}var $o=r_(!0),i_=r_(!1),wc=mi(null),Ic=null,qo=null,of=null;function af(){of=qo=Ic=null}function lf(i){var s=wc.current;Je(wc),i._currentValue=s}function uf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Wo(i,s){Ic=i,of=qo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(an=!0),i.firstContext=null)}function xn(i){var s=i._currentValue;if(of!==i)if(i={context:i,memoizedValue:s,next:null},qo===null){if(Ic===null)throw Error(t(308));qo=i,Ic.dependencies={lanes:0,firstContext:i}}else qo=qo.next=i;return s}var Es=null;function cf(i){Es===null?Es=[i]:Es.push(i)}function s_(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,cf(s)):(l.next=p.next,p.next=l),s.interleaved=l,Br(i,h)}function Br(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var yi=!1;function hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Fe&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Br(i,l)}return p=h.interleaved,p===null?(s.next=s,cf(h)):(s.next=p.next,p.next=s),h.interleaved=s,Br(i,l)}function Tc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,li(i,l)}}function a_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Sc(i,s,l,h){var p=i.updateQueue;yi=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var C=A,$=C.next;C.next=null,E===null?g=$:E.next=$,E=C;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=C))}if(g!==null){var Y=p.baseState;E=0,X=$=C=null,A=g;do{var G=A.lane,ue=A.eventTime;if((h&G)===G){X!==null&&(X=X.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=i,pe=A;switch(G=s,ue=l,pe.tag){case 1:if(de=pe.payload,typeof de=="function"){Y=de.call(ue,Y,G);break e}Y=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=pe.payload,G=typeof de=="function"?de.call(ue,Y,G):de,G==null)break e;Y=le({},Y,G);break e;case 2:yi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,G=p.effects,G===null?p.effects=[A]:G.push(A))}else ue={eventTime:ue,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=ue,C=Y):X=X.next=ue,E|=G;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;G=A,A=G.next,G.next=null,p.lastBaseUpdate=G,p.shared.pending=null}}while(!0);if(X===null&&(C=Y),p.baseState=C,p.firstBaseUpdate=$,p.lastBaseUpdate=X,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Ts|=E,i.lanes=E,i.memoizedState=Y}}function l_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var _l={},hr=mi(_l),yl=mi(_l),vl=mi(_l);function ws(i){if(i===_l)throw Error(t(174));return i}function df(i,s){switch(Xe(vl,s),Xe(yl,i),Xe(hr,_l),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Et(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Et(s,i)}Je(hr),Xe(hr,s)}function Ko(){Je(hr),Je(yl),Je(vl)}function u_(i){ws(vl.current);var s=ws(hr.current),l=Et(s,i.type);s!==l&&(Xe(yl,i),Xe(hr,l))}function ff(i){yl.current===i&&(Je(hr),Je(yl))}var it=mi(0);function Ac(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pf=[];function mf(){for(var i=0;i<pf.length;i++)pf[i]._workInProgressVersionPrimary=null;pf.length=0}var Rc=ae.ReactCurrentDispatcher,gf=ae.ReactCurrentBatchConfig,Is=0,st=null,It=null,xt=null,Pc=!1,El=!1,wl=0,dS=0;function zt(){throw Error(t(321))}function _f(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function yf(i,s,l,h,p,g){if(Is=g,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Rc.current=i===null||i.memoizedState===null?gS:_S,i=l(h,p),El){g=0;do{if(El=!1,wl=0,25<=g)throw Error(t(301));g+=1,xt=It=null,s.updateQueue=null,Rc.current=yS,i=l(h,p)}while(El)}if(Rc.current=xc,s=It!==null&&It.next!==null,Is=0,xt=It=st=null,Pc=!1,s)throw Error(t(300));return i}function vf(){var i=wl!==0;return wl=0,i}function dr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?st.memoizedState=xt=i:xt=xt.next=i,xt}function Nn(){if(It===null){var i=st.alternate;i=i!==null?i.memoizedState:null}else i=It.next;var s=xt===null?st.memoizedState:xt.next;if(s!==null)xt=s,It=i;else{if(i===null)throw Error(t(310));It=i,i={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},xt===null?st.memoizedState=xt=i:xt=xt.next=i}return xt}function Il(i,s){return typeof s=="function"?s(i):s}function Ef(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=It,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var A=E=null,C=null,$=g;do{var X=$.lane;if((Is&X)===X)C!==null&&(C=C.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var Y={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};C===null?(A=C=Y,E=h):C=C.next=Y,st.lanes|=X,Ts|=X}$=$.next}while($!==null&&$!==g);C===null?E=h:C.next=A,Kn(h,s.memoizedState)||(an=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=C,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do g=p.lane,st.lanes|=g,Ts|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function wf(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do g=i(g,E.action),E=E.next;while(E!==p);Kn(g,s.memoizedState)||(an=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function c_(){}function h_(i,s){var l=st,h=Nn(),p=s(),g=!Kn(h.memoizedState,p);if(g&&(h.memoizedState=p,an=!0),h=h.queue,If(p_.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,Tl(9,f_.bind(null,l,h,p,s),void 0,null),Nt===null)throw Error(t(349));(Is&30)!==0||d_(l,s,p)}return p}function d_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function f_(i,s,l,h){s.value=l,s.getSnapshot=h,m_(s)&&g_(i)}function p_(i,s,l){return l(function(){m_(s)&&g_(i)})}function m_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function g_(i){var s=Br(i,1);s!==null&&Yn(s,i,1,-1)}function __(i){var s=dr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:i},s.queue=i,i=i.dispatch=mS.bind(null,st,i),[s.memoizedState,i]}function Tl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function y_(){return Nn().memoizedState}function Cc(i,s,l,h){var p=dr();st.flags|=i,p.memoizedState=Tl(1|s,l,void 0,h===void 0?null:h)}function kc(i,s,l,h){var p=Nn();h=h===void 0?null:h;var g=void 0;if(It!==null){var E=It.memoizedState;if(g=E.destroy,h!==null&&_f(h,E.deps)){p.memoizedState=Tl(s,l,g,h);return}}st.flags|=i,p.memoizedState=Tl(1|s,l,g,h)}function v_(i,s){return Cc(8390656,8,i,s)}function If(i,s){return kc(2048,8,i,s)}function E_(i,s){return kc(4,2,i,s)}function w_(i,s){return kc(4,4,i,s)}function I_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function T_(i,s,l){return l=l!=null?l.concat([i]):null,kc(4,4,I_.bind(null,s,i),l)}function Tf(){}function S_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_f(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function A_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_f(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function R_(i,s,l){return(Is&21)===0?(i.baseState&&(i.baseState=!1,an=!0),i.memoizedState=l):(Kn(l,s)||(l=hs(),st.lanes|=l,Ts|=l,i.baseState=!0),s)}function fS(i,s){var l=be;be=l!==0&&4>l?l:4,i(!0);var h=gf.transition;gf.transition={};try{i(!1),s()}finally{be=l,gf.transition=h}}function P_(){return Nn().memoizedState}function pS(i,s,l){var h=Ti(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},C_(i))k_(s,l);else if(l=s_(i,s,l,h),l!==null){var p=Jt();Yn(l,i,h,p),x_(l,s,h)}}function mS(i,s,l){var h=Ti(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(C_(i))k_(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,l);if(p.hasEagerState=!0,p.eagerState=A,Kn(A,E)){var C=s.interleaved;C===null?(p.next=p,cf(s)):(p.next=C.next,C.next=p),s.interleaved=p;return}}catch{}finally{}l=s_(i,s,p,h),l!==null&&(p=Jt(),Yn(l,i,h,p),x_(l,s,h))}}function C_(i){var s=i.alternate;return i===st||s!==null&&s===st}function k_(i,s){El=Pc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function x_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,li(i,l)}}var xc={readContext:xn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},gS={readContext:xn,useCallback:function(i,s){return dr().memoizedState=[i,s===void 0?null:s],i},useContext:xn,useEffect:v_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Cc(4194308,4,I_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Cc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Cc(4,2,i,s)},useMemo:function(i,s){var l=dr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=dr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=pS.bind(null,st,i),[h.memoizedState,i]},useRef:function(i){var s=dr();return i={current:i},s.memoizedState=i},useState:__,useDebugValue:Tf,useDeferredValue:function(i){return dr().memoizedState=i},useTransition:function(){var i=__(!1),s=i[0];return i=fS.bind(null,i[1]),dr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=st,p=dr();if(et){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Nt===null)throw Error(t(349));(Is&30)!==0||d_(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,v_(p_.bind(null,h,g,i),[i]),h.flags|=2048,Tl(9,f_.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=dr(),s=Nt.identifierPrefix;if(et){var l=jr,h=Ur;l=(h&~(1<<32-Qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=wl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=dS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},_S={readContext:xn,useCallback:S_,useContext:xn,useEffect:If,useImperativeHandle:T_,useInsertionEffect:E_,useLayoutEffect:w_,useMemo:A_,useReducer:Ef,useRef:y_,useState:function(){return Ef(Il)},useDebugValue:Tf,useDeferredValue:function(i){var s=Nn();return R_(s,It.memoizedState,i)},useTransition:function(){var i=Ef(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:c_,useSyncExternalStore:h_,useId:P_,unstable_isNewReconciler:!1},yS={readContext:xn,useCallback:S_,useContext:xn,useEffect:If,useImperativeHandle:T_,useInsertionEffect:E_,useLayoutEffect:w_,useMemo:A_,useReducer:wf,useRef:y_,useState:function(){return wf(Il)},useDebugValue:Tf,useDeferredValue:function(i){var s=Nn();return It===null?s.memoizedState=i:R_(s,It.memoizedState,i)},useTransition:function(){var i=wf(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:c_,useSyncExternalStore:h_,useId:P_,unstable_isNewReconciler:!1};function Gn(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Sf(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Nc={isMounted:function(i){return(i=i._reactInternals)?Un(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Jt(),p=Ti(i),g=zr(h,p);g.payload=s,l!=null&&(g.callback=l),s=vi(i,g,p),s!==null&&(Yn(s,i,p,h),Tc(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Jt(),p=Ti(i),g=zr(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=vi(i,g,p),s!==null&&(Yn(s,i,p,h),Tc(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Jt(),h=Ti(i),p=zr(l,h);p.tag=2,s!=null&&(p.callback=s),s=vi(i,p,h),s!==null&&(Yn(s,i,h,l),Tc(s,i,h))}};function N_(i,s,l,h,p,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!ul(l,h)||!ul(p,g):!0}function D_(i,s,l){var h=!1,p=gi,g=s.contextType;return typeof g=="object"&&g!==null?g=xn(g):(p=on(s)?_s:Bt.current,h=s.contextTypes,g=(h=h!=null)?Uo(i,p):gi),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),s}function V_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Nc.enqueueReplaceState(s,s.state,null)}function Af(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},hf(i);var g=s.contextType;typeof g=="object"&&g!==null?p.context=xn(g):(g=on(s)?_s:Bt.current,p.context=Uo(i,g)),p.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Sf(i,s,g,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Nc.enqueueReplaceState(p,p.state,null),Sc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ho(i,s){try{var l="",h=s;do l+=xe(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:p,digest:null}}function Rf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Pf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var vS=typeof WeakMap=="function"?WeakMap:Map;function b_(i,s,l){l=zr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Fc||(Fc=!0,zf=h),Pf(i,s)},l}function O_(i,s,l){l=zr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Pf(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Pf(i,s),typeof h!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function L_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new vS;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=VS.bind(null,i,s,l),s.then(i,i))}function M_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function F_(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=zr(-1,1),s.tag=2,vi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var ES=ae.ReactCurrentOwner,an=!1;function Yt(i,s,l,h){s.child=i===null?i_(s,null,l,h):$o(s,i.child,l,h)}function U_(i,s,l,h,p){l=l.render;var g=s.ref;return Wo(s,p),h=yf(i,s,l,h,g,p),l=vf(),i!==null&&!an?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(et&&l&&ef(s),s.flags|=1,Yt(i,s,h,p),s.child)}function j_(i,s,l,h,p){if(i===null){var g=l.type;return typeof g=="function"&&!Qf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,B_(i,s,g,h,p)):(i=qc(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&p)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:ul,l(E,h)&&i.ref===s.ref)return $r(i,s,p)}return s.flags|=1,i=Ai(g,h),i.ref=s.ref,i.return=s,s.child=i}function B_(i,s,l,h,p){if(i!==null){var g=i.memoizedProps;if(ul(g,h)&&i.ref===s.ref)if(an=!1,s.pendingProps=h=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(an=!0);else return s.lanes=i.lanes,$r(i,s,p)}return Cf(i,s,l,h,p)}function z_(i,s,l){var h=s.pendingProps,p=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Qo,vn),vn|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Xe(Qo,vn),vn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Xe(Qo,vn),vn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Xe(Qo,vn),vn|=h;return Yt(i,s,p,l),s.child}function $_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Cf(i,s,l,h,p){var g=on(l)?_s:Bt.current;return g=Uo(s,g),Wo(s,p),l=yf(i,s,l,h,g,p),h=vf(),i!==null&&!an?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(et&&h&&ef(s),s.flags|=1,Yt(i,s,l,p),s.child)}function q_(i,s,l,h,p){if(on(l)){var g=!0;mc(s)}else g=!1;if(Wo(s,p),s.stateNode===null)Vc(i,s),D_(s,l,h),Af(s,l,h,p),h=!0;else if(i===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var C=E.context,$=l.contextType;typeof $=="object"&&$!==null?$=xn($):($=on(l)?_s:Bt.current,$=Uo(s,$));var X=l.getDerivedStateFromProps,Y=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||C!==$)&&V_(s,E,h,$),yi=!1;var G=s.memoizedState;E.state=G,Sc(s,h,E,p),C=s.memoizedState,A!==h||G!==C||sn.current||yi?(typeof X=="function"&&(Sf(s,l,X,h),C=s.memoizedState),(A=yi||N_(s,l,A,h,G,C,$))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=C),E.props=h,E.state=C,E.context=$,h=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,o_(i,s),A=s.memoizedProps,$=s.type===s.elementType?A:Gn(s.type,A),E.props=$,Y=s.pendingProps,G=E.context,C=l.contextType,typeof C=="object"&&C!==null?C=xn(C):(C=on(l)?_s:Bt.current,C=Uo(s,C));var ue=l.getDerivedStateFromProps;(X=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==Y||G!==C)&&V_(s,E,h,C),yi=!1,G=s.memoizedState,E.state=G,Sc(s,h,E,p);var de=s.memoizedState;A!==Y||G!==de||sn.current||yi?(typeof ue=="function"&&(Sf(s,l,ue,h),de=s.memoizedState),($=yi||N_(s,l,$,h,G,de,C)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,de,C),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,de,C)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=de),E.props=h,E.state=de,E.context=C,h=$):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),h=!1)}return kf(i,s,l,h,g,p)}function kf(i,s,l,h,p,g){$_(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return p&&Qg(s,l,!1),$r(i,s,g);h=s.stateNode,ES.current=s;var A=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=$o(s,i.child,null,g),s.child=$o(s,null,A,g)):Yt(i,s,A,g),s.memoizedState=h.state,p&&Qg(s,l,!0),s.child}function W_(i){var s=i.stateNode;s.pendingContext?Hg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Hg(i,s.context,!1),df(i,s.containerInfo)}function K_(i,s,l,h,p){return zo(),sf(p),s.flags|=256,Yt(i,s,l,h),s.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Nf(i){return{baseLanes:i,cachePool:null,transitions:null}}function H_(i,s,l){var h=s.pendingProps,p=it.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Xe(it,p&1),i===null)return rf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Wc(E,h,0,null),i=Ps(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=Nf(l),s.memoizedState=xf,i):Df(s,E));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return wS(i,s,E,h,A,p,l);if(g){g=h.fallback,E=s.mode,p=i.child,A=p.sibling;var C={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=C,s.deletions=null):(h=Ai(p,C),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?g=Ai(A,g):(g=Ps(g,E,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=i.child.memoizedState,E=E===null?Nf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=i.childLanes&~l,s.memoizedState=xf,h}return g=i.child,i=g.sibling,h=Ai(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function Df(i,s){return s=Wc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Dc(i,s,l,h){return h!==null&&sf(h),$o(s,i.child,null,l),i=Df(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function wS(i,s,l,h,p,g,E){if(l)return s.flags&256?(s.flags&=-257,h=Rf(Error(t(422))),Dc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=Wc({mode:"visible",children:h.children},p,0,null),g=Ps(g,p,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&$o(s,i.child,null,E),s.child.memoizedState=Nf(E),s.memoizedState=xf,g);if((s.mode&1)===0)return Dc(i,s,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Rf(g,h,void 0),Dc(i,s,E,h)}if(A=(E&i.childLanes)!==0,an||A){if(h=Nt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Br(i,p),Yn(h,i,p,-1))}return Gf(),h=Rf(Error(t(421))),Dc(i,s,E,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=bS.bind(null,i),p._reactRetry=s,null):(i=g.treeContext,yn=pi(p.nextSibling),_n=s,et=!0,Hn=null,i!==null&&(Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=ys,Ur=i.id,jr=i.overflow,ys=s),s=Df(s,h.children),s.flags|=4096,s)}function G_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),uf(i.return,s,l)}function Vf(i,s,l,h,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function Q_(i,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(Yt(i,s,h.children,l),h=it.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&G_(i,l,s);else if(i.tag===19)G_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Xe(it,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Ac(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Vf(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ac(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Vf(s,!0,l,null,g);break;case"together":Vf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $r(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ts|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ai(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ai(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function IS(i,s,l){switch(s.tag){case 3:W_(s),zo();break;case 5:u_(s);break;case 1:on(s.type)&&mc(s);break;case 4:df(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Xe(wc,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Xe(it,it.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?H_(i,s,l):(Xe(it,it.current&1),i=$r(i,s,l),i!==null?i.sibling:null);Xe(it,it.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return Q_(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(it,it.current),h)break;return null;case 22:case 23:return s.lanes=0,z_(i,s,l)}return $r(i,s,l)}var X_,bf,Y_,J_;X_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},bf=function(){},Y_=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,ws(hr.current);var g=null;switch(l){case"input":p=es(i,p),h=es(i,h),g=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),g=[];break;case"textarea":p=Fa(i,p),h=Fa(i,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=dc)}qa(l,h);var E;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var A=p[$];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var C=h[$];if(A=p!=null?p[$]:void 0,h.hasOwnProperty($)&&C!==A&&(C!=null||A!=null))if($==="style")if(A){for(E in A)!A.hasOwnProperty(E)||C&&C.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in C)C.hasOwnProperty(E)&&A[E]!==C[E]&&(l||(l={}),l[E]=C[E])}else l||(g||(g=[]),g.push($,l)),l=C;else $==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,A=A?A.__html:void 0,C!=null&&A!==C&&(g=g||[]).push($,C)):$==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push($,""+C):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(C!=null&&$==="onScroll"&&Ye("scroll",i),g||A===C||(g=[])):(g=g||[]).push($,C))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},J_=function(i,s,l,h){l!==h&&(s.flags|=4)};function Sl(i,s){if(!et)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function $t(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function TS(i,s,l){var h=s.pendingProps;switch(tf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return on(s.type)&&pc(),$t(s),null;case 3:return h=s.stateNode,Ko(),Je(sn),Je(Bt),mf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(vc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Hn!==null&&(Wf(Hn),Hn=null))),bf(i,s),$t(s),null;case 5:ff(s);var p=ws(vl.current);if(l=s.type,i!==null&&s.stateNode!=null)Y_(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(i=ws(hr.current),vc(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[cr]=s,h[pl]=g,i=(s.mode&1)!==0,l){case"dialog":Ye("cancel",h),Ye("close",h);break;case"iframe":case"object":case"embed":Ye("load",h);break;case"video":case"audio":for(p=0;p<hl.length;p++)Ye(hl[p],h);break;case"source":Ye("error",h);break;case"img":case"image":case"link":Ye("error",h),Ye("load",h);break;case"details":Ye("toggle",h);break;case"input":oo(h,g),Ye("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ye("invalid",h);break;case"textarea":lo(h,g),Ye("invalid",h)}qa(l,g),p=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,A,i),p=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Ye("scroll",h)}switch(l){case"input":Pr(h),Mu(h,g,!0);break;case"textarea":Pr(h),Ua(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=dc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=vt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[cr]=s,i[pl]=h,X_(i,s,!1,!1),s.stateNode=i;e:{switch(E=Wa(l,h),l){case"dialog":Ye("cancel",i),Ye("close",i),p=h;break;case"iframe":case"object":case"embed":Ye("load",i),p=h;break;case"video":case"audio":for(p=0;p<hl.length;p++)Ye(hl[p],i);p=h;break;case"source":Ye("error",i),p=h;break;case"img":case"image":case"link":Ye("error",i),Ye("load",i),p=h;break;case"details":Ye("toggle",i),p=h;break;case"input":oo(i,h),p=es(i,h),Ye("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),Ye("invalid",i);break;case"textarea":lo(i,h),p=Fa(i,h),Ye("invalid",i);break;default:p=h}qa(l,p),A=p;for(g in A)if(A.hasOwnProperty(g)){var C=A[g];g==="style"?za(i,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&ja(i,C)):g==="children"?typeof C=="string"?(l!=="textarea"||C!=="")&&ri(i,C):typeof C=="number"&&ri(i,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ye("scroll",i):C!=null&&ee(i,g,C,E))}switch(l){case"input":Pr(i),Mu(i,h,!1);break;case"textarea":Pr(i),Ua(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Be(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?kr(i,!!h.multiple,g,!1):h.defaultValue!=null&&kr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=dc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(i&&s.stateNode!=null)J_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=ws(vl.current),ws(hr.current),vc(s)){if(h=s.stateNode,l=s.memoizedProps,h[cr]=s,(g=h.nodeValue!==l)&&(i=_n,i!==null))switch(i.tag){case 3:hc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&hc(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[cr]=s,s.stateNode=h}return $t(s),null;case 13:if(Je(it),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(et&&yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)t_(),zo(),s.flags|=98560,g=!1;else if(g=vc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[cr]=s}else zo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),g=!1}else Hn!==null&&(Wf(Hn),Hn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(it.current&1)!==0?Tt===0&&(Tt=3):Gf())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return Ko(),bf(i,s),i===null&&dl(s.stateNode.containerInfo),$t(s),null;case 10:return lf(s.type._context),$t(s),null;case 17:return on(s.type)&&pc(),$t(s),null;case 19:if(Je(it),g=s.memoizedState,g===null)return $t(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)Sl(g,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=Ac(i),E!==null){for(s.flags|=128,Sl(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,i=E.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xe(it,it.current&1|2),s.child}i=i.sibling}g.tail!==null&&Qe()>Xo&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Ac(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Sl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!et)return $t(s),null}else 2*Qe()-g.renderingStartTime>Xo&&l!==1073741824&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Qe(),s.sibling=null,l=it.current,Xe(it,h?l&1|2:l&1),s):($t(s),null);case 22:case 23:return Hf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(vn&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function SS(i,s){switch(tf(s),s.tag){case 1:return on(s.type)&&pc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ko(),Je(sn),Je(Bt),mf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return ff(s),null;case 13:if(Je(it),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));zo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Je(it),null;case 4:return Ko(),null;case 10:return lf(s.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var bc=!1,qt=!1,AS=typeof WeakSet=="function"?WeakSet:Set,he=null;function Go(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){at(i,s,h)}else l.current=null}function Of(i,s,l){try{l()}catch(h){at(i,s,h)}}var Z_=!1;function RS(i,s){if(Kd=hi,i=Ng(),Fd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,A=-1,C=-1,$=0,X=0,Y=i,G=null;t:for(;;){for(var ue;Y!==l||p!==0&&Y.nodeType!==3||(A=E+p),Y!==g||h!==0&&Y.nodeType!==3||(C=E+h),Y.nodeType===3&&(E+=Y.nodeValue.length),(ue=Y.firstChild)!==null;)G=Y,Y=ue;for(;;){if(Y===i)break t;if(G===l&&++$===p&&(A=E),G===g&&++X===h&&(C=E),(ue=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ue}l=A===-1||C===-1?null:{start:A,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hd={focusedElem:i,selectionRange:l},hi=!1,he=s;he!==null;)if(s=he,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,he=i;else for(;he!==null;){s=he;try{var de=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var pe=de.memoizedProps,ct=de.memoizedState,j=s.stateNode,D=j.getSnapshotBeforeUpdate(s.elementType===s.type?pe:Gn(s.type,pe),ct);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){at(s,s.return,te)}if(i=s.sibling,i!==null){i.return=s.return,he=i;break}he=s.return}return de=Z_,Z_=!1,de}function Al(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&Of(s,l,g)}p=p.next}while(p!==h)}}function Oc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Lf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function ey(i){var s=i.alternate;s!==null&&(i.alternate=null,ey(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[cr],delete s[pl],delete s[Yd],delete s[lS],delete s[uS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function ty(i){return i.tag===5||i.tag===3||i.tag===4}function ny(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ty(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Mf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=dc));else if(h!==4&&(i=i.child,i!==null))for(Mf(i,s,l),i=i.sibling;i!==null;)Mf(i,s,l),i=i.sibling}function Ff(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ff(i,s,l),i=i.sibling;i!==null;)Ff(i,s,l),i=i.sibling}var Lt=null,Qn=!1;function Ei(i,s,l){for(l=l.child;l!==null;)ry(i,s,l),l=l.sibling}function ry(i,s,l){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(us,l)}catch{}switch(l.tag){case 5:qt||Go(l,s);case 6:var h=Lt,p=Qn;Lt=null,Ei(i,s,l),Lt=h,Qn=p,Lt!==null&&(Qn?(i=Lt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Lt.removeChild(l.stateNode));break;case 18:Lt!==null&&(Qn?(i=Lt,l=l.stateNode,i.nodeType===8?Xd(i.parentNode,l):i.nodeType===1&&Xd(i,l),qn(i)):Xd(Lt,l.stateNode));break;case 4:h=Lt,p=Qn,Lt=l.stateNode.containerInfo,Qn=!0,Ei(i,s,l),Lt=h,Qn=p;break;case 0:case 11:case 14:case 15:if(!qt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Of(l,s,E),p=p.next}while(p!==h)}Ei(i,s,l);break;case 1:if(!qt&&(Go(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){at(l,s,A)}Ei(i,s,l);break;case 21:Ei(i,s,l);break;case 22:l.mode&1?(qt=(h=qt)||l.memoizedState!==null,Ei(i,s,l),qt=h):Ei(i,s,l);break;default:Ei(i,s,l)}}function iy(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new AS),s.forEach(function(h){var p=OS.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Xn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=i,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:Lt=A.stateNode,Qn=!1;break e;case 3:Lt=A.stateNode.containerInfo,Qn=!0;break e;case 4:Lt=A.stateNode.containerInfo,Qn=!0;break e}A=A.return}if(Lt===null)throw Error(t(160));ry(g,E,p),Lt=null,Qn=!1;var C=p.alternate;C!==null&&(C.return=null),p.return=null}catch($){at(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)sy(s,i),s=s.sibling}function sy(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Xn(s,i),fr(i),h&4){try{Al(3,i,i.return),Oc(3,i)}catch(pe){at(i,i.return,pe)}try{Al(5,i,i.return)}catch(pe){at(i,i.return,pe)}}break;case 1:Xn(s,i),fr(i),h&512&&l!==null&&Go(l,l.return);break;case 5:if(Xn(s,i),fr(i),h&512&&l!==null&&Go(l,l.return),i.flags&32){var p=i.stateNode;try{ri(p,"")}catch(pe){at(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,E=l!==null?l.memoizedProps:g,A=i.type,C=i.updateQueue;if(i.updateQueue=null,C!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&La(p,g),Wa(A,E);var $=Wa(A,g);for(E=0;E<C.length;E+=2){var X=C[E],Y=C[E+1];X==="style"?za(p,Y):X==="dangerouslySetInnerHTML"?ja(p,Y):X==="children"?ri(p,Y):ee(p,X,Y,$)}switch(A){case"input":Ma(p,g);break;case"textarea":uo(p,g);break;case"select":var G=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var ue=g.value;ue!=null?kr(p,!!g.multiple,ue,!1):G!==!!g.multiple&&(g.defaultValue!=null?kr(p,!!g.multiple,g.defaultValue,!0):kr(p,!!g.multiple,g.multiple?[]:"",!1))}p[pl]=g}catch(pe){at(i,i.return,pe)}}break;case 6:if(Xn(s,i),fr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(pe){at(i,i.return,pe)}}break;case 3:if(Xn(s,i),fr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{qn(s.containerInfo)}catch(pe){at(i,i.return,pe)}break;case 4:Xn(s,i),fr(i);break;case 13:Xn(s,i),fr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(Bf=Qe())),h&4&&iy(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(qt=($=qt)||X,Xn(s,i),qt=$):Xn(s,i),fr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!X&&(i.mode&1)!==0)for(he=i,X=i.child;X!==null;){for(Y=he=X;he!==null;){switch(G=he,ue=G.child,G.tag){case 0:case 11:case 14:case 15:Al(4,G,G.return);break;case 1:Go(G,G.return);var de=G.stateNode;if(typeof de.componentWillUnmount=="function"){h=G,l=G.return;try{s=h,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(pe){at(h,l,pe)}}break;case 5:Go(G,G.return);break;case 22:if(G.memoizedState!==null){ly(Y);continue}}ue!==null?(ue.return=G,he=ue):ly(Y)}X=X.sibling}e:for(X=null,Y=i;;){if(Y.tag===5){if(X===null){X=Y;try{p=Y.stateNode,$?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Y.stateNode,C=Y.memoizedProps.style,E=C!=null&&C.hasOwnProperty("display")?C.display:null,A.style.display=Ba("display",E))}catch(pe){at(i,i.return,pe)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=$?"":Y.memoizedProps}catch(pe){at(i,i.return,pe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===i)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===i)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===i)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Xn(s,i),fr(i),h&4&&iy(i);break;case 21:break;default:Xn(s,i),fr(i)}}function fr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(ty(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ri(p,""),h.flags&=-33);var g=ny(i);Ff(i,g,p);break;case 3:case 4:var E=h.stateNode.containerInfo,A=ny(i);Mf(i,A,E);break;default:throw Error(t(161))}}catch(C){at(i,i.return,C)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function PS(i,s,l){he=i,oy(i)}function oy(i,s,l){for(var h=(i.mode&1)!==0;he!==null;){var p=he,g=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||bc;if(!E){var A=p.alternate,C=A!==null&&A.memoizedState!==null||qt;A=bc;var $=qt;if(bc=E,(qt=C)&&!$)for(he=p;he!==null;)E=he,C=E.child,E.tag===22&&E.memoizedState!==null?uy(p):C!==null?(C.return=E,he=C):uy(p);for(;g!==null;)he=g,oy(g),g=g.sibling;he=p,bc=A,qt=$}ay(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,he=g):ay(i)}}function ay(i){for(;he!==null;){var s=he;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:qt||Oc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!qt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Gn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&l_(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}l_(s,E,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&l.focus();break;case"img":C.src&&(l.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&qn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||s.flags&512&&Lf(s)}catch(G){at(s,s.return,G)}}if(s===i){he=null;break}if(l=s.sibling,l!==null){l.return=s.return,he=l;break}he=s.return}}function ly(i){for(;he!==null;){var s=he;if(s===i){he=null;break}var l=s.sibling;if(l!==null){l.return=s.return,he=l;break}he=s.return}}function uy(i){for(;he!==null;){var s=he;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Oc(4,s)}catch(C){at(s,l,C)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(C){at(s,p,C)}}var g=s.return;try{Lf(s)}catch(C){at(s,g,C)}break;case 5:var E=s.return;try{Lf(s)}catch(C){at(s,E,C)}}}catch(C){at(s,s.return,C)}if(s===i){he=null;break}var A=s.sibling;if(A!==null){A.return=s.return,he=A;break}he=s.return}}var CS=Math.ceil,Lc=ae.ReactCurrentDispatcher,Uf=ae.ReactCurrentOwner,Dn=ae.ReactCurrentBatchConfig,Fe=0,Nt=null,ft=null,Mt=0,vn=0,Qo=mi(0),Tt=0,Rl=null,Ts=0,Mc=0,jf=0,Pl=null,ln=null,Bf=0,Xo=1/0,qr=null,Fc=!1,zf=null,wi=null,Uc=!1,Ii=null,jc=0,Cl=0,$f=null,Bc=-1,zc=0;function Jt(){return(Fe&6)!==0?Qe():Bc!==-1?Bc:Bc=Qe()}function Ti(i){return(i.mode&1)===0?1:(Fe&2)!==0&&Mt!==0?Mt&-Mt:hS.transition!==null?(zc===0&&(zc=hs()),zc):(i=be,i!==0||(i=window.event,i=i===void 0?16:nl(i.type)),i)}function Yn(i,s,l,h){if(50<Cl)throw Cl=0,$f=null,Error(t(185));ai(i,l,h),((Fe&2)===0||i!==Nt)&&(i===Nt&&((Fe&2)===0&&(Mc|=l),Tt===4&&Si(i,Mt)),un(i,h),l===1&&Fe===0&&(s.mode&1)===0&&(Xo=Qe()+500,gc&&_i()))}function un(i,s){var l=i.callbackNode;Dr(i,s);var h=cs(i,i===Nt?Mt:0);if(h===0)l!==null&&Ya(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Ya(l),s===1)i.tag===0?cS(hy.bind(null,i)):Xg(hy.bind(null,i)),oS(function(){(Fe&6)===0&&_i()}),l=null;else{switch(ui(h)){case 1:l=ls;break;case 4:l=ii;break;case 16:l=An;break;case 536870912:l=zu;break;default:l=An}l=vy(l,cy.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function cy(i,s){if(Bc=-1,zc=0,(Fe&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Yo()&&i.callbackNode!==l)return null;var h=cs(i,i===Nt?Mt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=$c(i,h);else{s=h;var p=Fe;Fe|=2;var g=fy();(Nt!==i||Mt!==s)&&(qr=null,Xo=Qe()+500,As(i,s));do try{NS();break}catch(A){dy(i,A)}while(!0);af(),Lc.current=g,Fe=p,ft!==null?s=0:(Nt=null,Mt=0,s=Tt)}if(s!==0){if(s===2&&(p=pn(i),p!==0&&(h=p,s=qf(i,p))),s===1)throw l=Rl,As(i,0),Si(i,h),un(i,Qe()),l;if(s===6)Si(i,h);else{if(p=i.current.alternate,(h&30)===0&&!kS(p)&&(s=$c(i,h),s===2&&(g=pn(i),g!==0&&(h=g,s=qf(i,g))),s===1))throw l=Rl,As(i,0),Si(i,h),un(i,Qe()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Rs(i,ln,qr);break;case 3:if(Si(i,h),(h&130023424)===h&&(s=Bf+500-Qe(),10<s)){if(cs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Jt(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Qd(Rs.bind(null,i,ln,qr),s);break}Rs(i,ln,qr);break;case 4:if(Si(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var E=31-Qt(h);g=1<<E,E=s[E],E>p&&(p=E),h&=~g}if(h=p,h=Qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*CS(h/1960))-h,10<h){i.timeoutHandle=Qd(Rs.bind(null,i,ln,qr),h);break}Rs(i,ln,qr);break;case 5:Rs(i,ln,qr);break;default:throw Error(t(329))}}}return un(i,Qe()),i.callbackNode===l?cy.bind(null,i):null}function qf(i,s){var l=Pl;return i.current.memoizedState.isDehydrated&&(As(i,s).flags|=256),i=$c(i,s),i!==2&&(s=ln,ln=l,s!==null&&Wf(s)),i}function Wf(i){ln===null?ln=i:ln.push.apply(ln,i)}function kS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!Kn(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(i,s){for(s&=~jf,s&=~Mc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Qt(s),h=1<<l;i[l]=-1,s&=~h}}function hy(i){if((Fe&6)!==0)throw Error(t(327));Yo();var s=cs(i,0);if((s&1)===0)return un(i,Qe()),null;var l=$c(i,s);if(i.tag!==0&&l===2){var h=pn(i);h!==0&&(s=h,l=qf(i,h))}if(l===1)throw l=Rl,As(i,0),Si(i,s),un(i,Qe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Rs(i,ln,qr),un(i,Qe()),null}function Kf(i,s){var l=Fe;Fe|=1;try{return i(s)}finally{Fe=l,Fe===0&&(Xo=Qe()+500,gc&&_i())}}function Ss(i){Ii!==null&&Ii.tag===0&&(Fe&6)===0&&Yo();var s=Fe;Fe|=1;var l=Dn.transition,h=be;try{if(Dn.transition=null,be=1,i)return i()}finally{be=h,Dn.transition=l,Fe=s,(Fe&6)===0&&_i()}}function Hf(){vn=Qo.current,Je(Qo)}function As(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,sS(l)),ft!==null)for(l=ft.return;l!==null;){var h=l;switch(tf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&pc();break;case 3:Ko(),Je(sn),Je(Bt),mf();break;case 5:ff(h);break;case 4:Ko();break;case 13:Je(it);break;case 19:Je(it);break;case 10:lf(h.type._context);break;case 22:case 23:Hf()}l=l.return}if(Nt=i,ft=i=Ai(i.current,null),Mt=vn=s,Tt=0,Rl=null,jf=Mc=Ts=0,ln=Pl=null,Es!==null){for(s=0;s<Es.length;s++)if(l=Es[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=p,h.next=E}l.pending=h}Es=null}return i}function dy(i,s){do{var l=ft;try{if(af(),Rc.current=xc,Pc){for(var h=st.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Pc=!1}if(Is=0,xt=It=st=null,El=!1,wl=0,Uf.current=null,l===null||l.return===null){Tt=1,Rl=s,ft=null;break}e:{var g=i,E=l.return,A=l,C=s;if(s=Mt,A.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=C,X=A,Y=X.tag;if((X.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=X.alternate;G?(X.updateQueue=G.updateQueue,X.memoizedState=G.memoizedState,X.lanes=G.lanes):(X.updateQueue=null,X.memoizedState=null)}var ue=M_(E);if(ue!==null){ue.flags&=-257,F_(ue,E,A,g,s),ue.mode&1&&L_(g,$,s),s=ue,C=$;var de=s.updateQueue;if(de===null){var pe=new Set;pe.add(C),s.updateQueue=pe}else de.add(C);break e}else{if((s&1)===0){L_(g,$,s),Gf();break e}C=Error(t(426))}}else if(et&&A.mode&1){var ct=M_(E);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),F_(ct,E,A,g,s),sf(Ho(C,A));break e}}g=C=Ho(C,A),Tt!==4&&(Tt=2),Pl===null?Pl=[g]:Pl.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=b_(g,C,s);a_(g,j);break e;case 1:A=C;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(wi===null||!wi.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=O_(g,A,s);a_(g,te);break e}}g=g.return}while(g!==null)}my(l)}catch(me){s=me,ft===l&&l!==null&&(ft=l=l.return);continue}break}while(!0)}function fy(){var i=Lc.current;return Lc.current=xc,i===null?xc:i}function Gf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Nt===null||(Ts&268435455)===0&&(Mc&268435455)===0||Si(Nt,Mt)}function $c(i,s){var l=Fe;Fe|=2;var h=fy();(Nt!==i||Mt!==s)&&(qr=null,As(i,s));do try{xS();break}catch(p){dy(i,p)}while(!0);if(af(),Fe=l,Lc.current=h,ft!==null)throw Error(t(261));return Nt=null,Mt=0,Tt}function xS(){for(;ft!==null;)py(ft)}function NS(){for(;ft!==null&&!ju();)py(ft)}function py(i){var s=yy(i.alternate,i,vn);i.memoizedProps=i.pendingProps,s===null?my(i):ft=s,Uf.current=null}function my(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=TS(l,s,vn),l!==null){ft=l;return}}else{if(l=SS(l,s),l!==null){l.flags&=32767,ft=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Tt=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=i}while(s!==null);Tt===0&&(Tt=5)}function Rs(i,s,l){var h=be,p=Dn.transition;try{Dn.transition=null,be=1,DS(i,s,l,h)}finally{Dn.transition=p,be=h}return null}function DS(i,s,l,h){do Yo();while(Ii!==null);if((Fe&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(He(i,g),i===Nt&&(ft=Nt=null,Mt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Uc||(Uc=!0,vy(An,function(){return Yo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Dn.transition,Dn.transition=null;var E=be;be=1;var A=Fe;Fe|=4,Uf.current=null,RS(i,l),sy(l,i),J0(Hd),hi=!!Kd,Hd=Kd=null,i.current=l,PS(l),xd(),Fe=A,be=E,Dn.transition=g}else i.current=l;if(Uc&&(Uc=!1,Ii=i,jc=p),g=i.pendingLanes,g===0&&(wi=null),$u(l.stateNode),un(i,Qe()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Fc)throw Fc=!1,i=zf,zf=null,i;return(jc&1)!==0&&i.tag!==0&&Yo(),g=i.pendingLanes,(g&1)!==0?i===$f?Cl++:(Cl=0,$f=i):Cl=0,_i(),null}function Yo(){if(Ii!==null){var i=ui(jc),s=Dn.transition,l=be;try{if(Dn.transition=null,be=16>i?16:i,Ii===null)var h=!1;else{if(i=Ii,Ii=null,jc=0,(Fe&6)!==0)throw Error(t(331));var p=Fe;for(Fe|=4,he=i.current;he!==null;){var g=he,E=g.child;if((he.flags&16)!==0){var A=g.deletions;if(A!==null){for(var C=0;C<A.length;C++){var $=A[C];for(he=$;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:Al(8,X,g)}var Y=X.child;if(Y!==null)Y.return=X,he=Y;else for(;he!==null;){X=he;var G=X.sibling,ue=X.return;if(ey(X),X===$){he=null;break}if(G!==null){G.return=ue,he=G;break}he=ue}}}var de=g.alternate;if(de!==null){var pe=de.child;if(pe!==null){de.child=null;do{var ct=pe.sibling;pe.sibling=null,pe=ct}while(pe!==null)}}he=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,he=E;else e:for(;he!==null;){if(g=he,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Al(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,he=j;break e}he=g.return}}var D=i.current;for(he=D;he!==null;){E=he;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,he=B;else e:for(E=D;he!==null;){if(A=he,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Oc(9,A)}}catch(me){at(A,A.return,me)}if(A===E){he=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,he=te;break e}he=A.return}}if(Fe=p,_i(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(us,i)}catch{}h=!0}return h}finally{be=l,Dn.transition=s}}return!1}function gy(i,s,l){s=Ho(l,s),s=b_(i,s,1),i=vi(i,s,1),s=Jt(),i!==null&&(ai(i,1,s),un(i,s))}function at(i,s,l){if(i.tag===3)gy(i,i,l);else for(;s!==null;){if(s.tag===3){gy(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(wi===null||!wi.has(h))){i=Ho(l,i),i=O_(s,i,1),s=vi(s,i,1),i=Jt(),s!==null&&(ai(s,1,i),un(s,i));break}}s=s.return}}function VS(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Jt(),i.pingedLanes|=i.suspendedLanes&l,Nt===i&&(Mt&l)===l&&(Tt===4||Tt===3&&(Mt&130023424)===Mt&&500>Qe()-Bf?As(i,0):jf|=l),un(i,s)}function _y(i,s){s===0&&((i.mode&1)===0?s=1:(s=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var l=Jt();i=Br(i,s),i!==null&&(ai(i,s,l),un(i,l))}function bS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),_y(i,l)}function OS(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),_y(i,l)}var yy;yy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||sn.current)an=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return an=!1,IS(i,s,l);an=(i.flags&131072)!==0}else an=!1,et&&(s.flags&1048576)!==0&&Yg(s,yc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Vc(i,s),i=s.pendingProps;var p=Uo(s,Bt.current);Wo(s,l),p=yf(null,s,h,i,p,l);var g=vf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,on(h)?(g=!0,mc(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,hf(s),p.updater=Nc,s.stateNode=p,p._reactInternals=s,Af(s,h,i,l),s=kf(null,s,h,!0,g,l)):(s.tag=0,et&&g&&ef(s),Yt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Vc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=MS(h),i=Gn(h,i),p){case 0:s=Cf(null,s,h,i,l);break e;case 1:s=q_(null,s,h,i,l);break e;case 11:s=U_(null,s,h,i,l);break e;case 14:s=j_(null,s,h,Gn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),Cf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),q_(i,s,h,p,l);case 3:e:{if(W_(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,o_(i,s),Sc(s,h,null,l);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=Ho(Error(t(423)),s),s=K_(i,s,h,l,p);break e}else if(h!==p){p=Ho(Error(t(424)),s),s=K_(i,s,h,l,p);break e}else for(yn=pi(s.stateNode.containerInfo.firstChild),_n=s,et=!0,Hn=null,l=i_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(zo(),h===p){s=$r(i,s,l);break e}Yt(i,s,h,l)}s=s.child}return s;case 5:return u_(s),i===null&&rf(s),h=s.type,p=s.pendingProps,g=i!==null?i.memoizedProps:null,E=p.children,Gd(h,p)?E=null:g!==null&&Gd(h,g)&&(s.flags|=32),$_(i,s),Yt(i,s,E,l),s.child;case 6:return i===null&&rf(s),null;case 13:return H_(i,s,l);case 4:return df(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=$o(s,null,h,l):Yt(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),U_(i,s,h,p,l);case 7:return Yt(i,s,s.pendingProps,l),s.child;case 8:return Yt(i,s,s.pendingProps.children,l),s.child;case 12:return Yt(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,E=p.value,Xe(wc,h._currentValue),h._currentValue=E,g!==null)if(Kn(g.value,E)){if(g.children===p.children&&!sn.current){s=$r(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var C=A.firstContext;C!==null;){if(C.context===h){if(g.tag===1){C=zr(-1,l&-l),C.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?C.next=C:(C.next=X.next,X.next=C),$.pending=C}}g.lanes|=l,C=g.alternate,C!==null&&(C.lanes|=l),uf(g.return,l,s),A.lanes|=l;break}C=C.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),uf(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Yt(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Wo(s,l),p=xn(p),h=h(p),s.flags|=1,Yt(i,s,h,l),s.child;case 14:return h=s.type,p=Gn(h,s.pendingProps),p=Gn(h.type,p),j_(i,s,h,p,l);case 15:return B_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),Vc(i,s),s.tag=1,on(h)?(i=!0,mc(s)):i=!1,Wo(s,l),D_(s,h,p),Af(s,h,p,l),kf(null,s,h,!0,i,l);case 19:return Q_(i,s,l);case 22:return z_(i,s,l)}throw Error(t(156,s.tag))};function vy(i,s){return yo(i,s)}function LS(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(i,s,l,h){return new LS(i,s,l,h)}function Qf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function MS(i){if(typeof i=="function")return Qf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===Rt)return 14}return 2}function Ai(i,s){var l=i.alternate;return l===null?(l=Vn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function qc(i,s,l,h,p,g){var E=2;if(h=i,typeof i=="function")Qf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case k:return Ps(l.children,p,g,s);case S:E=8,p|=8;break;case P:return i=Vn(12,l,s,p|2),i.elementType=P,i.lanes=g,i;case R:return i=Vn(13,l,s,p),i.elementType=R,i.lanes=g,i;case rt:return i=Vn(19,l,s,p),i.elementType=rt,i.lanes=g,i;case ce:return Wc(l,p,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:E=10;break e;case b:E=9;break e;case L:E=11;break e;case Rt:E=14;break e;case Pt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Vn(E,l,s,p),s.elementType=i,s.type=h,s.lanes=g,s}function Ps(i,s,l,h){return i=Vn(7,i,h,s),i.lanes=l,i}function Wc(i,s,l,h){return i=Vn(22,i,h,s),i.elementType=ce,i.lanes=l,i.stateNode={isHidden:!1},i}function Xf(i,s,l){return i=Vn(6,i,null,s),i.lanes=l,i}function Yf(i,s,l){return s=Vn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function FS(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Jf(i,s,l,h,p,g,E,A,C){return i=new FS(i,s,l,A,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Vn(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(g),i}function US(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function Ey(i){if(!i)return gi;i=i._reactInternals;e:{if(Un(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(on(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(on(l))return Gg(i,l,s)}return s}function wy(i,s,l,h,p,g,E,A,C){return i=Jf(l,h,!0,i,p,g,E,A,C),i.context=Ey(null),l=i.current,h=Jt(),p=Ti(l),g=zr(h,p),g.callback=s??null,vi(l,g,p),i.current.lanes=p,ai(i,p,h),un(i,h),i}function Kc(i,s,l,h){var p=s.current,g=Jt(),E=Ti(p);return l=Ey(l),s.context===null?s.context=l:s.pendingContext=l,s=zr(g,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=vi(p,s,E),i!==null&&(Yn(i,p,E,g),Tc(i,p,E)),E}function Hc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Iy(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Zf(i,s){Iy(i,s),(i=i.alternate)&&Iy(i,s)}function jS(){return null}var Ty=typeof reportError=="function"?reportError:function(i){console.error(i)};function ep(i){this._internalRoot=i}Gc.prototype.render=ep.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Kc(i,s,null,null)},Gc.prototype.unmount=ep.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ss(function(){Kc(null,i,null,null)}),s[Mr]=null}};function Gc(i){this._internalRoot=i}Gc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Gu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<or.length&&s!==0&&s<or[l].priority;l++);or.splice(l,0,i),l===0&&Yu(i)}};function tp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Qc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function BS(i,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var $=Hc(E);g.call($)}}var E=wy(s,h,i,0,null,!1,!1,"",Sy);return i._reactRootContainer=E,i[Mr]=E.current,dl(i.nodeType===8?i.parentNode:i),Ss(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var $=Hc(C);A.call($)}}var C=Jf(i,0,!1,null,null,!1,!1,"",Sy);return i._reactRootContainer=C,i[Mr]=C.current,dl(i.nodeType===8?i.parentNode:i),Ss(function(){Kc(s,C,l,h)}),C}function Xc(i,s,l,h,p){var g=l._reactRootContainer;if(g){var E=g;if(typeof p=="function"){var A=p;p=function(){var C=Hc(E);A.call(C)}}Kc(s,E,i,p)}else E=BS(l,s,i,p,h);return Hc(E)}Ku=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=si(s.pendingLanes);l!==0&&(li(s,l|1),un(s,Qe()),(Fe&6)===0&&(Xo=Qe()+500,_i()))}break;case 13:Ss(function(){var h=Br(i,1);if(h!==null){var p=Jt();Yn(h,i,1,p)}}),Zf(i,1)}},wo=function(i){if(i.tag===13){var s=Br(i,134217728);if(s!==null){var l=Jt();Yn(s,i,134217728,l)}Zf(i,134217728)}},Hu=function(i){if(i.tag===13){var s=Ti(i),l=Br(i,s);if(l!==null){var h=Jt();Yn(l,i,s,h)}Zf(i,s)}},Gu=function(){return be},Qu=function(i,s){var l=be;try{return be=i,s()}finally{be=l}},ho=function(i,s,l){switch(s){case"input":if(Ma(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=fc(h);if(!p)throw Error(t(90));so(h),Ma(h,p)}}}break;case"textarea":uo(i,l);break;case"select":s=l.value,s!=null&&kr(i,!!l.multiple,s,!1)}},is=Kf,Ha=Ss;var zS={usingClientEntryPoint:!1,Events:[ml,Mo,fc,ir,Ka,Kf]},kl={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Xa(i),i===null?null:i.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{us=Yc.inject($S),fn=Yc}catch{}}return cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS,cn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(s))throw Error(t(200));return US(i,s,null,l)},cn.createRoot=function(i,s){if(!tp(i))throw Error(t(299));var l=!1,h="",p=Ty;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Jf(i,1,!1,null,null,l,!1,h,p),i[Mr]=s.current,dl(i.nodeType===8?i.parentNode:i),new ep(s)},cn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Xa(s),i=i===null?null:i.stateNode,i},cn.flushSync=function(i){return Ss(i)},cn.hydrate=function(i,s,l){if(!Qc(s))throw Error(t(200));return Xc(null,i,s,!0,l)},cn.hydrateRoot=function(i,s,l){if(!tp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",E=Ty;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=wy(s,null,i,1,l??null,p,!1,g,E),i[Mr]=s.current,dl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Gc(s)},cn.render=function(i,s,l){if(!Qc(s))throw Error(t(200));return Xc(null,i,s,!1,l)},cn.unmountComponentAtNode=function(i){if(!Qc(i))throw Error(t(40));return i._reactRootContainer?(Ss(function(){Xc(null,null,i,!1,function(){i._reactRootContainer=null,i[Mr]=null})}),!0):!1},cn.unstable_batchedUpdates=Kf,cn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Qc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Xc(i,s,l,!1,h)},cn.version="18.3.1-next-f1338f8080-20240426",cn}var Dy;function nw(){if(Dy)return ip.exports;Dy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ip.exports=JS(),ip.exports}var Vy;function ZS(){if(Vy)return Jc;Vy=1;var n=nw();return Jc.createRoot=n.createRoot,Jc.hydrateRoot=n.hydrateRoot,Jc}var e1=ZS();const t1=ew(e1);nw();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},eu.apply(null,arguments)}var Li;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Li||(Li={}));const by="popstate";function n1(n){n===void 0&&(n={});function e(r,o){let{pathname:a,search:u,hash:d}=r.location;return Sp("",{pathname:a,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:rw(o)}return i1(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function cm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function r1(){return Math.random().toString(36).substr(2,8)}function Oy(n,e){return{usr:n.state,key:n.key,idx:e}}function Sp(n,e,t,r){return t===void 0&&(t=null),eu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ka(e):e,{state:t,key:e&&e.key||r||r1()})}function rw(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ka(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function i1(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,d=Li.Pop,f=null,_=v();_==null&&(_=0,u.replaceState(eu({},u.state,{idx:_}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=Li.Pop;let V=v(),re=V==null?null:V-_;_=V,f&&f({action:d,location:z.location,delta:re})}function T(V,re){d=Li.Push;let ne=Sp(z.location,V,re);_=v()+1;let ee=Oy(ne,_),ae=z.createHref(ne);try{u.pushState(ee,"",ae)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(ae)}a&&f&&f({action:d,location:z.location,delta:1})}function N(V,re){d=Li.Replace;let ne=Sp(z.location,V,re);_=v();let ee=Oy(ne,_),ae=z.createHref(ne);u.replaceState(ee,"",ae),a&&f&&f({action:d,location:z.location,delta:0})}function M(V){let re=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof V=="string"?V:rw(V);return ne=ne.replace(/ $/,"%20"),gt(re,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,re)}let z={get action(){return d},get location(){return n(o,u)},listen(V){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(by,w),f=V,()=>{o.removeEventListener(by,w),f=null}},createHref(V){return e(o,V)},createURL:M,encodeLocation(V){let re=M(V);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:T,replace:N,go(V){return u.go(V)}};return z}var Ly;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ly||(Ly={}));function s1(n,e,t){return t===void 0&&(t="/"),o1(n,e,t)}function o1(n,e,t,r){let o=typeof e=="string"?ka(e):e,a=ow(o.pathname||"/",t);if(a==null)return null;let u=iw(n);a1(u);let d=null,f=v1(a);for(let _=0;d==null&&_<u.length;++_)d=g1(u[_],f);return d}function iw(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(gt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let _=Ms([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(gt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),iw(a.children,e,v,_)),!(a.path==null&&!a.index)&&e.push({path:_,score:p1(_,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,u);else for(let f of sw(a.path))o(a,u,f)}),e}function sw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=sw(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function a1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:m1(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const l1=/^:[\w-]+$/,u1=3,c1=2,h1=1,d1=10,f1=-2,My=n=>n==="*";function p1(n,e){let t=n.split("/"),r=t.length;return t.some(My)&&(r+=f1),e&&(r+=c1),t.filter(o=>!My(o)).reduce((o,a)=>o+(l1.test(a)?u1:a===""?h1:d1),r)}function m1(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function g1(n,e,t){let{routesMeta:r}=n,o={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],_=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=_1({path:f.relativePath,caseSensitive:f.caseSensitive,end:_},v),T=f.route;if(!w)return null;Object.assign(o,w.params),u.push({params:o,pathname:Ms([a,w.pathname]),pathnameBase:S1(Ms([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=Ms([a,w.pathnameBase]))}return u}function _1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=y1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((_,v,w)=>{let{paramName:T,isOptional:N}=v;if(T==="*"){let z=d[w]||"";u=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const M=d[w];return N&&!M?_[T]=void 0:_[T]=(M||"").replace(/%2F/g,"/"),_},{}),pathname:a,pathnameBase:u,pattern:n}}function y1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),cm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function v1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function ow(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const E1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w1=n=>E1.test(n);function I1(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?ka(n):n,a;if(t)if(w1(t))a=t;else{if(t.includes("//")){let u=t;t=uw(t),cm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=Fy(t.substring(1),"/"):a=Fy(t,e)}else a=e;return{pathname:a,search:A1(r),hash:R1(o)}}function Fy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ap(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function aw(n,e){let t=T1(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function lw(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=ka(n):(o=eu({},n),gt(!o.pathname||!o.pathname.includes("?"),ap("?","pathname","search",o)),gt(!o.pathname||!o.pathname.includes("#"),ap("#","pathname","hash",o)),gt(!o.search||!o.search.includes("#"),ap("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=I1(o,d),_=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(_||v)&&(f.pathname+="/"),f}const uw=n=>n.replace(/\/\/+/g,"/"),Ms=n=>uw(n.join("/")),S1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),A1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,R1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function P1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const cw=["post","put","patch","delete"];new Set(cw);const C1=["get",...cw];new Set(C1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tu.apply(null,arguments)}const hm=Z.createContext(null),k1=Z.createContext(null),yu=Z.createContext(null),Yh=Z.createContext(null),Qi=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),hw=Z.createContext(null);function vu(){return Z.useContext(Yh)!=null}function dm(){return vu()||gt(!1),Z.useContext(Yh).location}function dw(n){Z.useContext(yu).static||Z.useLayoutEffect(n)}function fm(){let{isDataRoute:n}=Z.useContext(Qi);return n?$1():x1()}function x1(){vu()||gt(!1);let n=Z.useContext(hm),{basename:e,future:t,navigator:r}=Z.useContext(yu),{matches:o}=Z.useContext(Qi),{pathname:a}=dm(),u=JSON.stringify(aw(o,t.v7_relativeSplatPath)),d=Z.useRef(!1);return dw(()=>{d.current=!0}),Z.useCallback(function(_,v){if(v===void 0&&(v={}),!d.current)return;if(typeof _=="number"){r.go(_);return}let w=lw(_,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Ms([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function N1(){let{matches:n}=Z.useContext(Qi),e=n[n.length-1];return e?e.params:{}}function D1(n,e){return V1(n,e)}function V1(n,e,t,r){vu()||gt(!1);let{navigator:o}=Z.useContext(yu),{matches:a}=Z.useContext(Qi),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let _=dm(),v;if(e){var w;let V=typeof e=="string"?ka(e):e;f==="/"||(w=V.pathname)!=null&&w.startsWith(f)||gt(!1),v=V}else v=_;let T=v.pathname||"/",N=T;if(f!=="/"){let V=f.replace(/^\//,"").split("/");N="/"+T.replace(/^\//,"").split("/").slice(V.length).join("/")}let M=s1(n,{pathname:N}),z=F1(M&&M.map(V=>Object.assign({},V,{params:Object.assign({},d,V.params),pathname:Ms([f,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?f:Ms([f,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),a,t,r);return e&&z?Z.createElement(Yh.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Li.Pop}},z):z}function b1(){let n=z1(),e=P1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:o},t):null,null)}const O1=Z.createElement(b1,null);class L1 extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(Qi.Provider,{value:this.props.routeContext},Z.createElement(hw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M1(n){let{routeContext:e,match:t,children:r}=n,o=Z.useContext(hm);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(Qi.Provider,{value:e},r)}function F1(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||gt(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,_=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(_=v),w.route.id){let{loaderData:T,errors:N}=t,M=w.route.loader&&T[w.route.id]===void 0&&(!N||N[w.route.id]===void 0);if(w.route.lazy||M){f=!0,_>=0?u=u.slice(0,_+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let N,M=!1,z=null,V=null;t&&(N=d&&w.route.id?d[w.route.id]:void 0,z=w.route.errorElement||O1,f&&(_<0&&T===0?(q1("route-fallback"),M=!0,V=null):_===T&&(M=!0,V=w.route.hydrateFallbackElement||null)));let re=e.concat(u.slice(0,T+1)),ne=()=>{let ee;return N?ee=z:M?ee=V:w.route.Component?ee=Z.createElement(w.route.Component,null):w.route.element?ee=w.route.element:ee=v,Z.createElement(M1,{match:w,routeContext:{outlet:v,matches:re,isDataRoute:t!=null},children:ee})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?Z.createElement(L1,{location:t.location,revalidation:t.revalidation,component:z,error:N,children:ne(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):ne()},null)}var fw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(fw||{}),pw=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(pw||{});function U1(n){let e=Z.useContext(hm);return e||gt(!1),e}function j1(n){let e=Z.useContext(k1);return e||gt(!1),e}function B1(n){let e=Z.useContext(Qi);return e||gt(!1),e}function mw(n){let e=B1(),t=e.matches[e.matches.length-1];return t.route.id||gt(!1),t.route.id}function z1(){var n;let e=Z.useContext(hw),t=j1(),r=mw();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function $1(){let{router:n}=U1(fw.UseNavigateStable),e=mw(pw.UseNavigateStable),t=Z.useRef(!1);return dw(()=>{t.current=!0}),Z.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,tu({fromRouteId:e},a)))},[n,e])}const Uy={};function q1(n,e,t){Uy[n]||(Uy[n]=!0)}function W1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Ap(n){let{to:e,replace:t,state:r,relative:o}=n;vu()||gt(!1);let{future:a,static:u}=Z.useContext(yu),{matches:d}=Z.useContext(Qi),{pathname:f}=dm(),_=fm(),v=lw(e,aw(d,a.v7_relativeSplatPath),f,o==="path"),w=JSON.stringify(v);return Z.useEffect(()=>_(JSON.parse(w),{replace:t,state:r,relative:o}),[_,w,o,t,r]),null}function Ll(n){gt(!1)}function K1(n){let{basename:e="/",children:t=null,location:r,navigationType:o=Li.Pop,navigator:a,static:u=!1,future:d}=n;vu()&&gt(!1);let f=e.replace(/^\/*/,"/"),_=Z.useMemo(()=>({basename:f,navigator:a,static:u,future:tu({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=ka(r));let{pathname:v="/",search:w="",hash:T="",state:N=null,key:M="default"}=r,z=Z.useMemo(()=>{let V=ow(v,f);return V==null?null:{location:{pathname:V,search:w,hash:T,state:N,key:M},navigationType:o}},[f,v,w,T,N,M,o]);return z==null?null:Z.createElement(yu.Provider,{value:_},Z.createElement(Yh.Provider,{children:t,value:z}))}function H1(n){let{children:e,location:t}=n;return D1(Rp(e),t)}new Promise(()=>{});function Rp(n,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(n,(r,o)=>{if(!Z.isValidElement(r))return;let a=[...e,o];if(r.type===Z.Fragment){t.push.apply(t,Rp(r.props.children,a));return}r.type!==Ll&&gt(!1),!r.props.index||!r.props.children||gt(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Rp(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const G1="6";try{window.__reactRouterVersion=G1}catch{}const Q1="startTransition",jy=QS[Q1];function X1(n){let{basename:e,children:t,future:r,window:o}=n,a=Z.useRef();a.current==null&&(a.current=n1({window:o,v5Compat:!0}));let u=a.current,[d,f]=Z.useState({action:u.action,location:u.location}),{v7_startTransition:_}=r||{},v=Z.useCallback(w=>{_&&jy?jy(()=>f(w)):f(w)},[f,_]);return Z.useLayoutEffect(()=>u.listen(v),[u,v]),Z.useEffect(()=>W1(r),[r]),Z.createElement(K1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}var By;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(By||(By={}));var zy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(zy||(zy={}));const Y1=()=>{};var $y={};/**
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
 */const gw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},J1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},_w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,_=f?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|_>>6,N=_&63;f||(N=64,u||(T=64)),r.push(t[v],t[w],t[T],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):J1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new Z1;const T=a<<2|d>>4;if(r.push(T),_!==64){const N=d<<4&240|_>>2;if(r.push(N),w!==64){const M=_<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eA=function(n){const e=gw(n);return _w.encodeByteArray(e,!0)},Ah=function(n){return eA(n).replace(/\./g,"")},yw=function(n){try{return _w.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tA=()=>vw().__FIREBASE_DEFAULTS__,nA=()=>{if(typeof process>"u"||typeof $y>"u")return;const n=$y.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yw(n[1]);return e&&JSON.parse(e)},Jh=()=>{try{return Y1()||tA()||nA()||rA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ew=n=>{var e,t;return(t=(e=Jh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ww=n=>{const e=Ew(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Iw=()=>{var n;return(n=Jh())===null||n===void 0?void 0:n.config},Tw=n=>{var e;return(e=Jh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class iA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Sw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ah(JSON.stringify(t)),Ah(JSON.stringify(u)),""].join(".")}const ql={};function sA(){const n={prod:[],emulator:[]};for(const e of Object.keys(ql))ql[e]?n.emulator.push(e):n.prod.push(e);return n}function oA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qy=!1;function mm(n,e){if(typeof window>"u"||typeof document>"u"||!Zs(window.location.host)||ql[n]===e||ql[n]||qy)return;ql[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=sA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,N){T.setAttribute("width","24"),T.setAttribute("id",N),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function _(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{qy=!0,u()},T}function v(T,N){T.setAttribute("id",N),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=oA(r),N=t("text"),M=document.getElementById(N)||document.createElement("span"),z=t("learnmore"),V=document.getElementById(z)||document.createElement("a"),re=t("preprendIcon"),ne=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const ee=T.element;d(ee),v(V,z);const ae=_();f(ne,re),ee.append(ne,M,V,ae),document.body.appendChild(ee)}a?(M.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Aw(){var n;const e=(n=Jh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hA(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rw(){return!Aw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pw(){return!Aw()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function dA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const fA="FirebaseError";class Ar extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fA,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eu.prototype.create)}}class Eu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?pA(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Ar(o,d,r)}}function pA(n,e){return n.replace(mA,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const mA=/\{\$([^}]+)}/g;function gA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Wy(a)&&Wy(u)){if(!zs(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Wy(n){return n!==null&&typeof n=="object"}/**
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
 */function wu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ml(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Fl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function _A(n,e){const t=new yA(n,e);return t.subscribe.bind(t)}class yA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=lp),o.error===void 0&&(o.error=lp),o.complete===void 0&&(o.complete=lp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lp(){}/**
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
 */function _t(n){return n&&n._delegate?n._delegate:n}class $i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class EA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new iA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IA(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wA(n){return n===ks?void 0:n}function IA(n){return n.instantiationMode==="EAGER"}/**
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
 */class TA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new EA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const SA={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},AA=De.INFO,RA={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},PA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=RA[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gm{constructor(e){this.name=e,this._logLevel=AA,this._logHandler=PA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const CA=(n,e)=>e.some(t=>n instanceof t);let Ky,Hy;function kA(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xA(){return Hy||(Hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,Pp=new WeakMap,xw=new WeakMap,up=new WeakMap,_m=new WeakMap;function NA(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Fi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&kw.set(t,n)}).catch(()=>{}),_m.set(e,n),e}function DA(n){if(Pp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Pp.set(n,e)}let Cp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function VA(n){Cp=n(Cp)}function bA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(cp(this),e,...t);return xw.set(r,e.sort?e.sort():[e]),Fi(r)}:xA().includes(n)?function(...e){return n.apply(cp(this),e),Fi(kw.get(this))}:function(...e){return Fi(n.apply(cp(this),e))}}function OA(n){return typeof n=="function"?bA(n):(n instanceof IDBTransaction&&DA(n),CA(n,kA())?new Proxy(n,Cp):n)}function Fi(n){if(n instanceof IDBRequest)return NA(n);if(up.has(n))return up.get(n);const e=OA(n);return e!==n&&(up.set(n,e),_m.set(e,n)),e}const cp=n=>_m.get(n);function LA(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Fi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Fi(u.result),f.oldVersion,f.newVersion,Fi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const MA=["get","getKey","getAll","getAllKeys","count"],FA=["put","add","delete","clear"],hp=new Map;function Gy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hp.get(e))return hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=FA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||MA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let _=f.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&f.done]))[0]};return hp.set(e,a),a}VA(n=>({...n,get:(e,t,r)=>Gy(e,t)||n.get(e,t,r),has:(e,t)=>!!Gy(e,t)||n.has(e,t)}));/**
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
 */class UA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kp="@firebase/app",Qy="0.13.2";/**
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
 */const Xr=new gm("@firebase/app"),BA="@firebase/app-compat",zA="@firebase/analytics-compat",$A="@firebase/analytics",qA="@firebase/app-check-compat",WA="@firebase/app-check",KA="@firebase/auth",HA="@firebase/auth-compat",GA="@firebase/database",QA="@firebase/data-connect",XA="@firebase/database-compat",YA="@firebase/functions",JA="@firebase/functions-compat",ZA="@firebase/installations",eR="@firebase/installations-compat",tR="@firebase/messaging",nR="@firebase/messaging-compat",rR="@firebase/performance",iR="@firebase/performance-compat",sR="@firebase/remote-config",oR="@firebase/remote-config-compat",aR="@firebase/storage",lR="@firebase/storage-compat",uR="@firebase/firestore",cR="@firebase/ai",hR="@firebase/firestore-compat",dR="firebase",fR="11.10.0";/**
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
 */const xp="[DEFAULT]",pR={[kp]:"fire-core",[BA]:"fire-core-compat",[$A]:"fire-analytics",[zA]:"fire-analytics-compat",[WA]:"fire-app-check",[qA]:"fire-app-check-compat",[KA]:"fire-auth",[HA]:"fire-auth-compat",[GA]:"fire-rtdb",[QA]:"fire-data-connect",[XA]:"fire-rtdb-compat",[YA]:"fire-fn",[JA]:"fire-fn-compat",[ZA]:"fire-iid",[eR]:"fire-iid-compat",[tR]:"fire-fcm",[nR]:"fire-fcm-compat",[rR]:"fire-perf",[iR]:"fire-perf-compat",[sR]:"fire-rc",[oR]:"fire-rc-compat",[aR]:"fire-gcs",[lR]:"fire-gcs-compat",[uR]:"fire-fst",[hR]:"fire-fst-compat",[cR]:"fire-vertex","fire-js":"fire-js",[dR]:"fire-js-all"};/**
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
 */const Rh=new Map,mR=new Map,Np=new Map;function Xy(n,e){try{n.container.addComponent(e)}catch(t){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $s(n){const e=n.name;if(Np.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;Np.set(e,n);for(const t of Rh.values())Xy(t,n);for(const t of mR.values())Xy(t,n);return!0}function Zh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const gR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ui=new Eu("app","Firebase",gR);/**
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
 */class _R{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=fR;function Nw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xp,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=Iw()),!t)throw Ui.create("no-options");const a=Rh.get(o);if(a){if(zs(t,a.options)&&zs(r,a.config))return a;throw Ui.create("duplicate-app",{appName:o})}const u=new TA(o);for(const f of Np.values())u.addComponent(f);const d=new _R(t,r,u);return Rh.set(o,d),d}function ym(n=xp){const e=Rh.get(n);if(!e&&n===xp&&Iw())return Nw();if(!e)throw Ui.create("no-app",{appName:n});return e}function _r(n,e,t){var r;let o=(r=pR[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(d.join(" "));return}$s(new $i(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const yR="firebase-heartbeat-database",vR=1,nu="firebase-heartbeat-store";let dp=null;function Dw(){return dp||(dp=LA(yR,vR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),dp}async function ER(n){try{const t=(await Dw()).transaction(nu),r=await t.objectStore(nu).get(Vw(n));return await t.done,r}catch(e){if(e instanceof Ar)Xr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(t.message)}}}async function Yy(n,e){try{const r=(await Dw()).transaction(nu,"readwrite");await r.objectStore(nu).put(e,Vw(n)),await r.done}catch(t){if(t instanceof Ar)Xr.warn(t.message);else{const r=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xr.warn(r.message)}}}function Vw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wR=1024,IR=30;class TR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Jy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>IR){const u=RR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jy(),{heartbeatsToSend:r,unsentEntries:o}=SR(this._heartbeatsCache.heartbeats),a=Ah(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Xr.warn(t),""}}}function Jy(){return new Date().toISOString().substring(0,10)}function SR(n,e=wR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Zy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zy(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class AR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?dA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ER(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Zy(n){return Ah(JSON.stringify({version:2,heartbeats:n})).length}function RR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function PR(n){$s(new $i("platform-logger",e=>new UA(e),"PRIVATE")),$s(new $i("heartbeat",e=>new TR(e),"PRIVATE")),_r(kp,Qy,n),_r(kp,Qy,"esm2017"),_r("fire-js","")}PR("");function vm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function bw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CR=bw,Ow=new Eu("auth","Firebase",bw());/**
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
 */const Ph=new gm("@firebase/auth");function kR(n,...e){Ph.logLevel<=De.WARN&&Ph.warn(`Auth (${eo}): ${n}`,...e)}function uh(n,...e){Ph.logLevel<=De.ERROR&&Ph.error(`Auth (${eo}): ${n}`,...e)}/**
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
 */function nr(n,...e){throw Em(n,...e)}function yr(n,...e){return Em(n,...e)}function Lw(n,e,t){const r=Object.assign(Object.assign({},CR()),{[e]:t});return new Eu("auth","Firebase",r).create(e,{appName:n.name})}function Gr(n){return Lw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Em(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ow.create(n,...e)}function Se(n,e,...t){if(!n)throw Em(e,...t)}function Wr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uh(e),new Error(e)}function Yr(n,e){n||Wr(e)}/**
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
 */function Dp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xR(){return ev()==="http:"||ev()==="https:"}function ev(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function NR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xR()||uA()||"connection"in navigator)?navigator.onLine:!0}function DR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Iu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yr(t>e,"Short delay should be less than long delay!"),this.isMobile=aA()||cA()}get(){return NR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wm(n,e){Yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OR=new Iu(3e4,6e4);function Xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yi(n,e,t,r,o={}){return Fw(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=wu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:f},a);return lA()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(_.credentials="include"),Mw.fetch()(await Uw(n,n.config.apiHost,t,d),_)})}async function Fw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},VR),e);try{const o=new MR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Zc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,_]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zc(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Zc(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Zc(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Lw(n,v,_);nr(n,v)}}catch(o){if(o instanceof Ar)throw o;nr(n,"network-request-failed",{message:String(o)})}}async function Tu(n,e,t,r,o={}){const a=await Yi(n,e,t,r,o);return"mfaPendingCredential"in a&&nr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Uw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?wm(n.config,o):`${n.config.apiScheme}://${o}`;return bR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function LR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(yr(this.auth,"network-request-failed")),OR.get())})}}function Zc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=yr(n,e,r);return o.customData._tokenResponse=t,o}function tv(n){return n!==void 0&&n.enterprise!==void 0}class FR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return LR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UR(n,e){return Yi(n,"GET","/v2/recaptchaConfig",Xi(n,e))}/**
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
 */async function jR(n,e){return Yi(n,"POST","/v1/accounts:delete",e)}async function Ch(n,e){return Yi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(n,e=!1){const t=_t(n),r=await t.getIdToken(e),o=Im(r);Se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Wl(fp(o.auth_time)),issuedAtTime:Wl(fp(o.iat)),expirationTime:Wl(fp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function fp(n){return Number(n)*1e3}function Im(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return uh("JWT malformed, contained fewer than 3 sections"),null;try{const o=yw(t);return o?JSON.parse(o):(uh("Failed to decode base64 JWT payload"),null)}catch(o){return uh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function nv(n){const e=Im(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ru(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ar&&zR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wl(this.lastLoginAt),this.creationTime=Wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kh(n){var e;const t=n.auth,r=await n.getIdToken(),o=await ru(n,Ch(t,{idToken:r}));Se(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?jw(a.providerUserInfo):[],d=WR(n.providerData,u),f=n.isAnonymous,_=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?_:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Vp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function qR(n){const e=_t(n);await kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function jw(n){return n.map(e=>{var{providerId:t}=e,r=vm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KR(n,e){const t=await Fw(n,{},async()=>{const r=wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await Uw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(f.credentials="include"),Mw.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HR(n,e){return Yi(n,"POST","/v2/accounts:revokeToken",Xi(n,e))}/**
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
 */class ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=nv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await KR(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new ca;return r&&(Se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Se(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Se(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ca,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
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
 */function Pi(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=vm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ru(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BR(this,e)}reload(){return qR(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await ru(this,jR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,f,_,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,re=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ne=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ee,emailVerified:ae,isAnonymous:we,providerData:ge,stsTokenManager:k}=t;Se(ee&&k,e,"internal-error");const S=ca.fromJSON(this.name,k);Se(typeof ee=="string",e,"internal-error"),Pi(w,e.name),Pi(T,e.name),Se(typeof ae=="boolean",e,"internal-error"),Se(typeof we=="boolean",e,"internal-error"),Pi(N,e.name),Pi(M,e.name),Pi(z,e.name),Pi(V,e.name),Pi(re,e.name),Pi(ne,e.name);const P=new Zn({uid:ee,auth:e,email:T,emailVerified:ae,displayName:w,isAnonymous:we,photoURL:M,phoneNumber:N,tenantId:z,stsTokenManager:S,createdAt:re,lastLoginAt:ne});return ge&&Array.isArray(ge)&&(P.providerData=ge.map(x=>Object.assign({},x))),V&&(P._redirectEventId=V),P}static async _fromIdTokenResponse(e,t,r=!1){const o=new ca;o.updateFromServerResponse(t);const a=new Zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await kh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?jw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new ca;d.updateFromIdToken(r);const f=new Zn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,_),f}}/**
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
 */const rv=new Map;function Kr(n){Yr(n instanceof Function,"Expected a class definition");let e=rv.get(n);return e?(Yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rv.set(n,e),e)}/**
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
 */class Bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bw.type="NONE";const iv=Bw;/**
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
 */function ch(n,e,t){return`firebase:${n}:${e}:${t}`}class ha{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=ch(this.userKey,o.apiKey,a),this.fullPersistenceKey=ch("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ch(this.auth,{idToken:e}).catch(()=>{});return t?Zn._fromGetAccountInfoResponse(this.auth,t,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ha(Kr(iv),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Kr(iv);const u=ch(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const v=await _._get(u);if(v){let w;if(typeof v=="string"){const T=await Ch(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Zn._fromGetAccountInfoResponse(e,T,v)}else w=Zn._fromJSON(e,v);_!==a&&(d=w),a=_;break}}catch{}const f=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ha(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new ha(a,e,r))}}/**
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
 */function sv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ww(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(Gw(e))return"Webos";if($w(e))return"Safari";if((e.includes("chrome/")||qw(e))&&!e.includes("edge/"))return"Chrome";if(Kw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zw(n=St()){return/firefox\//i.test(n)}function $w(n=St()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qw(n=St()){return/crios\//i.test(n)}function Ww(n=St()){return/iemobile/i.test(n)}function Kw(n=St()){return/android/i.test(n)}function Hw(n=St()){return/blackberry/i.test(n)}function Gw(n=St()){return/webos/i.test(n)}function Tm(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function GR(n=St()){var e;return Tm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QR(){return hA()&&document.documentMode===10}function Qw(n=St()){return Tm(n)||Kw(n)||Gw(n)||Hw(n)||/windows phone/i.test(n)||Ww(n)}/**
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
 */function Xw(n,e=[]){let t;switch(n){case"Browser":t=sv(St());break;case"Worker":t=`${sv(St())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${eo}/${r}`}/**
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
 */class XR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YR(n,e={}){return Yi(n,"GET","/v2/passwordPolicy",Xi(n,e))}/**
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
 */const JR=6;class ZR{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:JR,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class eP{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ov(this),this.idTokenSubscription=new ov(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await ha.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ch(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Gr(this));const t=e?_t(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YR(this),t=new ZR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await HR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await ha.create(this,[Kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function to(n){return _t(n)}class ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=_A(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tP(n){ed=n}function Yw(n){return ed.loadJS(n)}function nP(){return ed.recaptchaEnterpriseScript}function rP(){return ed.gapiScript}function iP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sP{constructor(){this.enterprise=new oP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const aP="recaptcha-enterprise",Jw="NO_RECAPTCHA";class lP{constructor(e){this.type=aP,this.auth=to(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{UR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new FR(f);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;tv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(_=>{u(_)}).catch(()=>{u(Jw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&tv(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=nP();f.length!==0&&(f+=d),Yw(f).then(()=>{o(d,a,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function av(n,e,t,r=!1,o=!1){const a=new lP(n);let u;if(o)u=Jw;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function bp(n,e,t,r,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await av(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await av(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function uP(n,e){const t=Zh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(zs(a,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function cP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Kr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hP(n,e,t){const r=to(n);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=Zw(e),{host:u,port:d}=dP(e),f=d===null?"":`:${d}`,_={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(zs(_,r.config.emulator)&&zs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Zs(u)?(pm(`${a}//${u}${f}`),mm("Auth",!0)):fP()}function Zw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dP(n){const e=Zw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:lv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:lv(u)}}}function lv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Sm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,t){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function pP(n,e){return Yi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mP(n,e){return Tu(n,"POST","/v1/accounts:signInWithPassword",Xi(n,e))}/**
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
 */async function gP(n,e){return Tu(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}async function _P(n,e){return Tu(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}/**
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
 */class iu extends Sm{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new iu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new iu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,t,"signInWithPassword",mP);case"emailLink":return gP(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,r,"signUpPassword",pP);case"emailLink":return _P(e,{idToken:t,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function da(n,e){return Tu(n,"POST","/v1/accounts:signInWithIdp",Xi(n,e))}/**
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
 */const yP="http://localhost";class qs extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=vm(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new qs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return da(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,da(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,da(e,t)}buildRequest(){const e={requestUri:yP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wu(t)}return e}}/**
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
 */function vP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EP(n){const e=Ml(Fl(n)).link,t=e?Ml(Fl(e)).deep_link_id:null,r=Ml(Fl(n)).deep_link_id;return(r?Ml(Fl(r)).link:null)||r||t||e||n}class Am{constructor(e){var t,r,o,a,u,d;const f=Ml(Fl(e)),_=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=vP((o=f.mode)!==null&&o!==void 0?o:null);Se(_&&v&&w,"argument-error"),this.apiKey=_,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=EP(e);try{return new Am(t)}catch{return null}}}/**
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
 */class xa{constructor(){this.providerId=xa.PROVIDER_ID}static credential(e,t){return iu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Am.parseLink(t);return Se(r,"argument-error"),iu._fromEmailAndCode(e,r.code,r.tenantId)}}xa.PROVIDER_ID="password";xa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Su extends eI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ni extends Su{constructor(){super("facebook.com")}static credential(e){return qs._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
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
 */class Di extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qs._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Di.credential(t,r)}catch{return null}}}Di.GOOGLE_SIGN_IN_METHOD="google.com";Di.PROVIDER_ID="google.com";/**
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
 */class Vi extends Su{constructor(){super("github.com")}static credential(e){return qs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
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
 */class bi extends Su{constructor(){super("twitter.com")}static credential(e,t){return qs._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bi.credential(t,r)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
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
 */async function wP(n,e){return Tu(n,"POST","/v1/accounts:signUp",Xi(n,e))}/**
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
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Zn._fromIdTokenResponse(e,r,o),u=uv(r);return new Ws({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=uv(r);return new Ws({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function uv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xh extends Ar{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,xh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new xh(e,t,r,o)}}function tI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?xh._fromErrorAndOperation(n,a,e,r):a})}async function IP(n,e,t=!1){const r=await ru(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ws._forOperation(n,"link",r)}/**
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
 */async function TP(n,e,t=!1){const{auth:r}=n;if(wn(r.app))return Promise.reject(Gr(r));const o="reauthenticate";try{const a=await ru(n,tI(r,o,e,n),t);Se(a.idToken,r,"internal-error");const u=Im(a.idToken);Se(u,r,"internal-error");const{sub:d}=u;return Se(n.uid===d,r,"user-mismatch"),Ws._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),a}}/**
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
 */async function nI(n,e,t=!1){if(wn(n.app))return Promise.reject(Gr(n));const r="signIn",o=await tI(n,r,e),a=await Ws._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function SP(n,e){return nI(to(n),e)}/**
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
 */async function rI(n){const e=to(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AP(n,e,t){if(wn(n.app))return Promise.reject(Gr(n));const r=to(n),u=await bp(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&rI(n),f}),d=await Ws._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function RP(n,e,t){return wn(n.app)?Promise.reject(Gr(n)):SP(_t(n),xa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rI(n),r})}function PP(n,e,t,r){return _t(n).onIdTokenChanged(e,t,r)}function CP(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function kP(n,e,t,r){return _t(n).onAuthStateChanged(e,t,r)}function xP(n){return _t(n).signOut()}const Nh="__sak";/**
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
 */class iI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nh,"1"),this.storage.removeItem(Nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NP=1e3,DP=10;class sI extends iI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);QR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,DP):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},NP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sI.type="LOCAL";const VP=sI;/**
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
 */class oI extends iI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oI.type="SESSION";const aI=oI;/**
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
 */function bP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),f=await bP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
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
 */function Rm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class OP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const _=Rm("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===_)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function vr(){return window}function LP(n){vr().location.href=n}/**
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
 */function lI(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function MP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function UP(){return lI()?self:null}/**
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
 */const uI="firebaseLocalStorageDb",jP=1,Dh="firebaseLocalStorage",cI="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nd(n,e){return n.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function BP(){const n=indexedDB.deleteDatabase(uI);return new Au(n).toPromise()}function Op(){const n=indexedDB.open(uI,jP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Dh,{keyPath:cI})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Dh)?e(r):(r.close(),await BP(),e(await Op()))})})}async function cv(n,e,t){const r=nd(n,!0).put({[cI]:e,value:t});return new Au(r).toPromise()}async function zP(n,e){const t=nd(n,!1).get(e),r=await new Au(t).toPromise();return r===void 0?null:r.value}function hv(n,e){const t=nd(n,!0).delete(e);return new Au(t).toPromise()}const $P=800,qP=3;class hI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Op(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(UP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MP(),!this.activeServiceWorker)return;this.sender=new OP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Op();return await cv(e,Nh,"1"),await hv(e,Nh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=nd(o,!1).getAll();return new Au(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hI.type="LOCAL";const WP=hI;new Iu(3e4,6e4);/**
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
 */function KP(n,e){return e?Kr(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return da(e,this._buildIdpRequest())}_linkToIdToken(e,t){return da(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return da(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HP(n){return nI(n.auth,new Pm(n),n.bypassAuthState)}function GP(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),TP(t,new Pm(n),n.bypassAuthState)}async function QP(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),IP(t,new Pm(n),n.bypassAuthState)}/**
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
 */class dI{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HP;case"linkViaPopup":case"linkViaRedirect":return QP;case"reauthViaPopup":case"reauthViaRedirect":return GP;default:nr(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XP=new Iu(2e3,1e4);class ua extends dI{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,ua.currentPopupAction&&ua.currentPopupAction.cancel(),ua.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ua.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XP.get())};e()}}ua.currentPopupAction=null;/**
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
 */const YP="pendingRedirect",hh=new Map;class JP extends dI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hh.get(this.auth._key());if(!e){try{const r=await ZP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hh.set(this.auth._key(),e)}return this.bypassAuthState||hh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZP(n,e){const t=nC(e),r=tC(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function eC(n,e){hh.set(n._key(),e)}function tC(n){return Kr(n._redirectPersistence)}function nC(n){return ch(YP,n.config.apiKey,n.name)}async function rC(n,e,t=!1){if(wn(n.app))return Promise.reject(Gr(n));const r=to(n),o=KP(r,e),u=await new JP(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const iC=600*1e3;class sC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(yr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fI(n);default:return!1}}/**
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
 */async function aC(n,e={}){return Yi(n,"GET","/v1/projects",e)}/**
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
 */const lC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uC=/^https?/;async function cC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await aC(n);for(const t of e)try{if(hC(t))return}catch{}nr(n,"unauthorized-domain")}function hC(n){const e=Dp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!uC.test(t))return!1;if(lC.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const dC=new Iu(3e4,6e4);function fv(){const n=vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fC(n){return new Promise((e,t)=>{var r,o,a;function u(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),t(yr(n,"network-request-failed"))},timeout:dC.get()})}if(!((o=(r=vr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=vr().gapi)===null||a===void 0)&&a.load)u();else{const d=iP("iframefcb");return vr()[d]=()=>{gapi.load?u():t(yr(n,"network-request-failed"))},Yw(`${rP()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw dh=null,e})}let dh=null;function pC(n){return dh=dh||fC(n),dh}/**
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
 */const mC=new Iu(5e3,15e3),gC="__/auth/iframe",_C="emulator/auth/iframe",yC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EC(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wm(e,_C):`https://${n.config.authDomain}/${gC}`,r={apiKey:e.apiKey,appName:n.name,v:eo},o=vC.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${wu(r).slice(1)}`}async function wC(n){const e=await pC(n),t=vr().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:EC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yC,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=yr(n,"network-request-failed"),d=vr().setTimeout(()=>{a(u)},mC.get());function f(){vr().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TC=500,SC=600,AC="_blank",RC="http://localhost";class pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PC(n,e,t,r=TC,o=SC){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},IC),{width:r.toString(),height:o.toString(),top:a,left:u}),_=St().toLowerCase();t&&(d=qw(_)?AC:t),zw(_)&&(e=e||RC,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[N,M])=>`${T}${N}=${M},`,"");if(GR(_)&&d!=="_self")return CC(e||"",d),new pv(null);const w=window.open(e||"",d,v);Se(w,n,"popup-blocked");try{w.focus()}catch{}return new pv(w)}function CC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const kC="__/auth/handler",xC="emulator/auth/handler",NC=encodeURIComponent("fac");async function mv(n,e,t,r,o,a){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:eo,eventId:o};if(e instanceof eI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",gA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Su){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),_=f?`#${NC}=${encodeURIComponent(f)}`:"";return`${DC(n)}?${wu(d).slice(1)}${_}`}function DC({config:n}){return n.emulator?wm(n,xC):`https://${n.authDomain}/${kC}`}/**
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
 */const pp="webStorageSupport";class VC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aI,this._completeRedirectFn=rC,this._overrideRedirectResult=eC}async _openPopup(e,t,r,o){var a;Yr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await mv(e,t,r,Dp(),o);return PC(e,u,Rm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await mv(e,t,r,Dp(),o);return LP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Yr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wC(e),r=new sC(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pp,{type:pp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[pp];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qw()||$w()||Tm()}}const bC=VC;var gv="@firebase/auth",_v="1.10.8";/**
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
 */class OC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MC(n){$s(new $i("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xw(n)},_=new eP(r,o,a,f);return cP(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$s(new $i("auth-internal",e=>{const t=to(e.getProvider("auth").getImmediate());return(r=>new OC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(gv,_v,LC(n)),_r(gv,_v,"esm2017")}/**
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
 */const FC=300,UC=Tw("authIdTokenMaxAge")||FC;let yv=null;const jC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>UC)return;const o=t==null?void 0:t.token;yv!==o&&(yv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function BC(n=ym()){const e=Zh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=uP(n,{popupRedirectResolver:bC,persistence:[WP,VP,aI]}),r=Tw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=jC(a.toString());CP(t,u,()=>u(t.currentUser)),PP(t,d=>u(d))}}const o=Ew("auth");return o&&hP(t,`http://${o}`),t}function zC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=yr("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",zC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MC("Browser");var $C="firebase",qC="11.10.0";/**
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
 */_r($C,qC,"app");var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,pI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function P(){}P.prototype=S.prototype,k.D=S.prototype,k.prototype=new P,k.prototype.constructor=k,k.C=function(x,b,L){for(var R=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)R[rt-2]=arguments[rt];return S.prototype[b].apply(x,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,P){P||(P=0);var x=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)x[b]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(b=0;16>b;++b)x[b]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=k.g[0],P=k.g[1],b=k.g[2];var L=k.g[3],R=S+(L^P&(b^L))+x[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=L+(b^S&(P^b))+x[1]+3905402710&4294967295,L=S+(R<<12&4294967295|R>>>20),R=b+(P^L&(S^P))+x[2]+606105819&4294967295,b=L+(R<<17&4294967295|R>>>15),R=P+(S^b&(L^S))+x[3]+3250441966&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(L^P&(b^L))+x[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(b^S&(P^b))+x[5]+1200080426&4294967295,L=S+(R<<12&4294967295|R>>>20),R=b+(P^L&(S^P))+x[6]+2821735955&4294967295,b=L+(R<<17&4294967295|R>>>15),R=P+(S^b&(L^S))+x[7]+4249261313&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(L^P&(b^L))+x[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(b^S&(P^b))+x[9]+2336552879&4294967295,L=S+(R<<12&4294967295|R>>>20),R=b+(P^L&(S^P))+x[10]+4294925233&4294967295,b=L+(R<<17&4294967295|R>>>15),R=P+(S^b&(L^S))+x[11]+2304563134&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(L^P&(b^L))+x[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=L+(b^S&(P^b))+x[13]+4254626195&4294967295,L=S+(R<<12&4294967295|R>>>20),R=b+(P^L&(S^P))+x[14]+2792965006&4294967295,b=L+(R<<17&4294967295|R>>>15),R=P+(S^b&(L^S))+x[15]+1236535329&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(b^L&(P^b))+x[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^b&(S^P))+x[6]+3225465664&4294967295,L=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(L^S))+x[11]+643717713&4294967295,b=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(b^L))+x[0]+3921069994&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^L&(P^b))+x[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^b&(S^P))+x[10]+38016083&4294967295,L=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(L^S))+x[15]+3634488961&4294967295,b=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(b^L))+x[4]+3889429448&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^L&(P^b))+x[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^b&(S^P))+x[14]+3275163606&4294967295,L=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(L^S))+x[3]+4107603335&4294967295,b=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(b^L))+x[8]+1163531501&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^L&(P^b))+x[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=L+(P^b&(S^P))+x[2]+4243563512&4294967295,L=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(L^S))+x[7]+1735328473&4294967295,b=L+(R<<14&4294967295|R>>>18),R=P+(L^S&(b^L))+x[12]+2368359562&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(P^b^L)+x[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^b)+x[8]+2272392833&4294967295,L=S+(R<<11&4294967295|R>>>21),R=b+(L^S^P)+x[11]+1839030562&4294967295,b=L+(R<<16&4294967295|R>>>16),R=P+(b^L^S)+x[14]+4259657740&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^L)+x[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^b)+x[4]+1272893353&4294967295,L=S+(R<<11&4294967295|R>>>21),R=b+(L^S^P)+x[7]+4139469664&4294967295,b=L+(R<<16&4294967295|R>>>16),R=P+(b^L^S)+x[10]+3200236656&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^L)+x[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^b)+x[0]+3936430074&4294967295,L=S+(R<<11&4294967295|R>>>21),R=b+(L^S^P)+x[3]+3572445317&4294967295,b=L+(R<<16&4294967295|R>>>16),R=P+(b^L^S)+x[6]+76029189&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^L)+x[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=L+(S^P^b)+x[12]+3873151461&4294967295,L=S+(R<<11&4294967295|R>>>21),R=b+(L^S^P)+x[15]+530742520&4294967295,b=L+(R<<16&4294967295|R>>>16),R=P+(b^L^S)+x[2]+3299628645&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(b^(P|~L))+x[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~b))+x[7]+1126891415&4294967295,L=S+(R<<10&4294967295|R>>>22),R=b+(S^(L|~P))+x[14]+2878612391&4294967295,b=L+(R<<15&4294967295|R>>>17),R=P+(L^(b|~S))+x[5]+4237533241&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~L))+x[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~b))+x[3]+2399980690&4294967295,L=S+(R<<10&4294967295|R>>>22),R=b+(S^(L|~P))+x[10]+4293915773&4294967295,b=L+(R<<15&4294967295|R>>>17),R=P+(L^(b|~S))+x[1]+2240044497&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~L))+x[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~b))+x[15]+4264355552&4294967295,L=S+(R<<10&4294967295|R>>>22),R=b+(S^(L|~P))+x[6]+2734768916&4294967295,b=L+(R<<15&4294967295|R>>>17),R=P+(L^(b|~S))+x[13]+1309151649&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~L))+x[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=L+(P^(S|~b))+x[11]+3174756917&4294967295,L=S+(R<<10&4294967295|R>>>22),R=b+(S^(L|~P))+x[2]+718787259&4294967295,b=L+(R<<15&4294967295|R>>>17),R=P+(L^(b|~S))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+b&4294967295,k.g[3]=k.g[3]+L&4294967295}r.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var P=S-this.blockSize,x=this.B,b=this.h,L=0;L<S;){if(b==0)for(;L<=P;)o(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<S;)if(x[b++]=k.charCodeAt(L++),b==this.blockSize){o(this,x),b=0;break}}else for(;L<S;)if(x[b++]=k[L++],b==this.blockSize){o(this,x),b=0;break}}this.h=b,this.o+=S},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var P=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=P&255,P/=256;for(this.u(k),k=Array(16),S=P=0;4>S;++S)for(var x=0;32>x;x+=8)k[P++]=this.g[S]>>>x&255;return k};function a(k,S){var P=d;return Object.prototype.hasOwnProperty.call(P,k)?P[k]:P[k]=S(k)}function u(k,S){this.h=S;for(var P=[],x=!0,b=k.length-1;0<=b;b--){var L=k[b]|0;x&&L==S||(P[b]=L,x=!1)}this.g=P}var d={};function f(k){return-128<=k&&128>k?a(k,function(S){return new u([S|0],0>S?-1:0)}):new u([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return w;if(0>k)return V(_(-k));for(var S=[],P=1,x=0;k>=P;x++)S[x]=k/P|0,P*=4294967296;return new u(S,0)}function v(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return V(v(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=_(Math.pow(S,8)),x=w,b=0;b<k.length;b+=8){var L=Math.min(8,k.length-b),R=parseInt(k.substring(b,b+L),S);8>L?(L=_(Math.pow(S,L)),x=x.j(L).add(_(R))):(x=x.j(P),x=x.add(_(R)))}return x}var w=f(0),T=f(1),N=f(16777216);n=u.prototype,n.m=function(){if(z(this))return-V(this).m();for(var k=0,S=1,P=0;P<this.g.length;P++){var x=this.i(P);k+=(0<=x?x:4294967296+x)*S,S*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(M(this))return"0";if(z(this))return"-"+V(this).toString(k);for(var S=_(Math.pow(k,6)),P=this,x="";;){var b=ae(P,S).g;P=re(P,b.j(S));var L=((0<P.g.length?P.g[0]:P.h)>>>0).toString(k);if(P=b,M(P))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function M(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=re(this,k),z(k)?-1:M(k)?0:1};function V(k){for(var S=k.g.length,P=[],x=0;x<S;x++)P[x]=~k.g[x];return new u(P,~k.h).add(T)}n.abs=function(){return z(this)?V(this):this},n.add=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],x=0,b=0;b<=S;b++){var L=x+(this.i(b)&65535)+(k.i(b)&65535),R=(L>>>16)+(this.i(b)>>>16)+(k.i(b)>>>16);x=R>>>16,L&=65535,R&=65535,P[b]=R<<16|L}return new u(P,P[P.length-1]&-2147483648?-1:0)};function re(k,S){return k.add(V(S))}n.j=function(k){if(M(this)||M(k))return w;if(z(this))return z(k)?V(this).j(V(k)):V(V(this).j(k));if(z(k))return V(this.j(V(k)));if(0>this.l(N)&&0>k.l(N))return _(this.m()*k.m());for(var S=this.g.length+k.g.length,P=[],x=0;x<2*S;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var b=0;b<k.g.length;b++){var L=this.i(x)>>>16,R=this.i(x)&65535,rt=k.i(b)>>>16,Rt=k.i(b)&65535;P[2*x+2*b]+=R*Rt,ne(P,2*x+2*b),P[2*x+2*b+1]+=L*Rt,ne(P,2*x+2*b+1),P[2*x+2*b+1]+=R*rt,ne(P,2*x+2*b+1),P[2*x+2*b+2]+=L*rt,ne(P,2*x+2*b+2)}for(x=0;x<S;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=S;x<2*S;x++)P[x]=0;return new u(P,0)};function ne(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function ee(k,S){this.g=k,this.h=S}function ae(k,S){if(M(S))throw Error("division by zero");if(M(k))return new ee(w,w);if(z(k))return S=ae(V(k),S),new ee(V(S.g),V(S.h));if(z(S))return S=ae(k,V(S)),new ee(V(S.g),S.h);if(30<k.g.length){if(z(k)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,x=S;0>=x.l(k);)P=we(P),x=we(x);var b=ge(P,1),L=ge(x,1);for(x=ge(x,2),P=ge(P,2);!M(x);){var R=L.add(x);0>=R.l(k)&&(b=b.add(P),L=R),x=ge(x,1),P=ge(P,1)}return S=re(k,b.j(S)),new ee(b,S)}for(b=w;0<=k.l(S);){for(P=Math.max(1,Math.floor(k.m()/S.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=_(P),R=L.j(S);z(R)||0<R.l(k);)P-=x,L=_(P),R=L.j(S);M(L)&&(L=T),b=b.add(L),k=re(k,R)}return new ee(b,k)}n.A=function(k){return ae(this,k).h},n.and=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)&k.i(x);return new u(P,this.h&k.h)},n.or=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)|k.i(x);return new u(P,this.h|k.h)},n.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)^k.i(x);return new u(P,this.h^k.h)};function we(k){for(var S=k.g.length+1,P=[],x=0;x<S;x++)P[x]=k.i(x)<<1|k.i(x-1)>>>31;return new u(P,k.h)}function ge(k,S){var P=S>>5;S%=32;for(var x=k.g.length-P,b=[],L=0;L<x;L++)b[L]=0<S?k.i(L+P)>>>S|k.i(L+P+1)<<32-S:k.i(L+P);return new u(b,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=v,ji=u}).apply(typeof vv<"u"?vv:typeof self<"u"?self:typeof window<"u"?window:{});var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mI,Ul,gI,fh,Lp,_I,yI,vI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof eh=="object"&&eh];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in y))break e;y=y[F]}c=c[c.length-1],I=y[c],m=m(I),m!=I&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,I=!1,F={next:function(){if(!I&&y<c.length){var q=y++;return{value:m(q,c[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function w(c,m,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(m,F)}}return function(){return c.apply(m,arguments)}}function T(c,m,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function N(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function M(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,F,q){for(var ie=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ie[qe-2]=arguments[qe];return m.prototype[F].apply(I,ie)}}function z(c){const m=c.length;if(0<m){const y=Array(m);for(let I=0;I<m;I++)y[I]=c[I];return y}return[]}function V(c,m){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const F=c.length||0,q=I.length||0;c.length=F+q;for(let ie=0;ie<q;ie++)c[F+ie]=I[ie]}else c.push(I)}}class re{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(c){return/^[\s\xa0]*$/.test(c)}function ee(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function ae(c){return ae[" "](c),c}ae[" "]=function(){};var we=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function ge(c,m,y){for(const I in c)m.call(y,c[I],I,c)}function k(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function S(c){const m={};for(const y in c)m[y]=c[y];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,m){let y,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(y in I)c[y]=I[y];for(let q=0;q<P.length;q++)y=P[q],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function b(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function L(c){d.setTimeout(()=>{throw c},0)}function R(){var c=_e;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class rt{constructor(){this.h=this.g=null}add(m,y){const I=Rt.get();I.set(m,y),this.h?this.h.next=I:this.g=I,this.h=I}}var Rt=new re(()=>new Pt,c=>c.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,H=!1,_e=new rt,le=()=>{const c=d.Promise.resolve(void 0);ce=()=>{c.then(O)}};var O=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){L(y)}var m=Rt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}H=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Ce=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c})();function xe(c,m){if(ve.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(we){e:{try{ae(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Oe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}M(xe,ve);var Oe={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ge(c,m,y,I,F){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!I,this.ha=F,this.key=++Be,this.da=this.fa=!1}function Ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Pr(c){this.src=c,this.g={},this.h=0}Pr.prototype.add=function(c,m,y,I,F){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ie=ni(c,m,I,F);return-1<ie?(m=c[ie],y||(m.fa=!1)):(m=new Ge(m,this.src,q,!!I,F),m.fa=y,c.push(m)),m};function so(c,m){var y=m.type;if(y in c.g){var I=c.g[y],F=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(I,F,1),q&&(Ct(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ni(c,m,y,I){for(var F=0;F<c.length;++F){var q=c[F];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==I)return F}return-1}var es="closure_lm_"+(1e6*Math.random()|0),oo={};function La(c,m,y,I,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)La(c,m[q],y,I,F);return null}return y=Ua(y),c&&c[je]?c.K(m,y,_(I)?!!I.capture:!1,F):Ma(c,m,y,!1,I,F)}function Ma(c,m,y,I,F,q){if(!m)throw Error("Invalid event type");var ie=_(F)?!!F.capture:!!F,qe=lo(c);if(qe||(c[es]=qe=new Pr(c)),y=qe.add(m,y,I,ie,q),y.proxy)return y;if(I=Mu(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Ce||(F=ie),F===void 0&&(F=!1),c.addEventListener(m.toString(),I,F);else if(c.attachEvent)c.attachEvent(kr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Mu(){function c(y){return m.call(c.src,c.listener,y)}const m=Fa;return c}function ao(c,m,y,I,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)ao(c,m[q],y,I,F);else I=_(I)?!!I.capture:!!I,y=Ua(y),c&&c[je]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],y=ni(q,y,I,F),-1<y&&(Ct(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=lo(c))&&(m=c.g[m.toString()],c=-1,m&&(c=ni(m,y,I,F)),(y=-1<c?m[c]:null)&&Cr(y))}function Cr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[je])so(m.i,c);else{var y=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(y,I,c.capture):m.detachEvent?m.detachEvent(kr(y),I):m.addListener&&m.removeListener&&m.removeListener(I),(y=lo(m))?(so(y,c),y.h==0&&(y.src=null,m[es]=null)):Ct(c)}}}function kr(c){return c in oo?oo[c]:oo[c]="on"+c}function Fa(c,m){if(c.da)c=!0;else{m=new xe(m,this);var y=c.listener,I=c.ha||c.src;c.fa&&Cr(c),c=y.call(I,m)}return c}function lo(c){return c=c[es],c instanceof Pr?c:null}var uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ua(c){return typeof c=="function"?c:(c[uo]||(c[uo]=function(m){return c.handleEvent(m)}),c[uo])}function vt(){K.call(this),this.i=new Pr(this),this.M=this,this.F=null}M(vt,K),vt.prototype[je]=!0,vt.prototype.removeEventListener=function(c,m,y,I){ao(this,c,m,y,I)};function Et(c,m){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new ve(m,c);else if(m instanceof ve)m.target=m.target||c;else{var F=m;m=new ve(I,c),x(m,F)}if(F=!0,y)for(var q=y.length-1;0<=q;q--){var ie=m.g=y[q];F=xr(ie,I,!0,m)&&F}if(ie=m.g=c,F=xr(ie,I,!0,m)&&F,F=xr(ie,I,!1,m)&&F,y)for(q=0;q<y.length;q++)ie=m.g=y[q],F=xr(ie,I,!1,m)&&F}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],I=0;I<y.length;I++)Ct(y[I]);delete c.g[m],c.h--}}this.F=null},vt.prototype.K=function(c,m,y,I){return this.i.add(String(c),m,!1,y,I)},vt.prototype.L=function(c,m,y,I){return this.i.add(String(c),m,!0,y,I)};function xr(c,m,y,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var ie=m[q];if(ie&&!ie.da&&ie.capture==y){var qe=ie.listener,wt=ie.ha||ie.src;ie.fa&&so(c.i,ie),F=qe.call(wt,I)!==!1&&F}}return F&&!I.defaultPrevented}function ja(c,m,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function ri(c){c.g=ja(()=>{c.g=null,c.i&&(c.i=!1,ri(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ts extends K{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(c){K.call(this),this.h=c,this.g={}}M(ns,K);var Ba=[];function za(c){ge(c.g,function(m,y){this.g.hasOwnProperty(y)&&Cr(m)},c),c.g={}}ns.prototype.N=function(){ns.aa.N.call(this),za(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $a=d.JSON.stringify,qa=d.JSON.parse,Wa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function rs(){}rs.prototype.h=null;function co(c){return c.h||(c.h=c.i())}function ho(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rr(){ve.call(this,"d")}M(rr,ve);function fo(){ve.call(this,"c")}M(fo,ve);var ir={},Ka=null;function is(){return Ka=Ka||new vt}ir.La="serverreachability";function Ha(c){ve.call(this,ir.La,c)}M(Ha,ve);function Nr(c){const m=is();Et(m,new Ha(m))}ir.STAT_EVENT="statevent";function Ga(c,m){ve.call(this,ir.STAT_EVENT,c),this.stat=m}M(Ga,ve);function ut(c){const m=is();Et(m,new Ga(m,c))}ir.Ma="timingevent";function po(c,m){ve.call(this,ir.Ma,c),this.size=m}M(po,ve);function Mn(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function os(c,m,y,I,F,q){c.info(function(){if(c.g)if(q)for(var ie="",qe=q.split("&"),wt=0;wt<qe.length;wt++){var Le=qe[wt].split("=");if(1<Le.length){var kt=Le[0];Le=Le[1];var dt=kt.split("_");ie=2<=dt.length&&dt[1]=="type"?ie+(kt+"="+Le+"&"):ie+(kt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+m+`
`+y+`
`+ie})}function mo(c,m,y,I,F,q,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+m+`
`+y+`
`+q+" "+ie})}function Fn(c,m,y,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+kd(c,y)+(I?" "+I:"")})}function Qa(c,m){c.info(function(){return"TIMEOUT: "+m})}ss.prototype.info=function(){};function kd(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return $a(y)}catch{return m}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function as(){}M(as,rs),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},Un=new as;function jn(c,m,y,I){this.j=c,this.i=m,this.l=y,this.R=I||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var Xa={},_o={};function yo(c,m,y){c.L=1,c.v=li(pn(m)),c.m=y,c.P=!0,Ya(c,null)}function Ya(c,m){c.F=Date.now(),Qe(c),c.A=pn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),ci(y.i,"t",I),c.C=0,y=c.j.J,c.h=new Uu,c.g=rc(c.j,y?m:null,!c.m),0<c.O&&(c.M=new ts(T(c.Y,c,c.g),c.O)),m=c.U,y=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(Ba[0]=F.toString()),F=Ba);for(var q=0;q<F.length;q++){var ie=La(y,F[q],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Nr(),os(c.i,c.u,c.A,c.l,c.R,c.m)}jn.prototype.ca=function(c){c=c.target;const m=this.M;m&&rn(c)==3?m.j():this.Y(c)},jn.prototype.Y=function(c){try{if(c==this.g)e:{const dt=rn(this.g);var m=this.g.Ba();const Pn=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||rl(this.g)))){this.J||dt!=4||m==7||(m==8||0>=Pn?Nr(3):Nr(2)),ls(this);var y=this.g.Z();this.X=y;t:if(ju(this)){var I=rl(this.g);c="";var F=I.length,q=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),ii(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!(q&&m==F-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,mo(this.i,this.u,this.A,this.l,this.R,dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,wt=this.g;if((qe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(qe)){var Le=qe;break t}}Le=null}if(y=Le)Fn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,y);else{this.o=!1,this.s=3,ut(12),An(this),ii(this);break e}}if(this.P){y=!0;let gn;for(;!this.J&&this.C<ie.length;)if(gn=xd(this,ie),gn==_o){dt==4&&(this.s=4,ut(14),y=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Xa){this.s=4,ut(15),Fn(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Fn(this.i,this.l,gn,null),Ja(this,gn);if(ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||ie.length!=0||this.h.h||(this.s=1,ut(16),y=!1),this.o=this.o&&y,!y)Fn(this.i,this.l,ie,"[Invalid Chunked Response]"),An(this),ii(this);else if(0<ie.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),sl(kt),kt.M=!0,ut(11))}}else Fn(this.i,this.l,ie,null),Ja(this,ie);dt==4&&An(this),this.o&&!this.J&&(dt==4?ko(this.j,this):(this.o=!1,Qe(this)))}else So(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),An(this),ii(this)}}}catch{}finally{}};function ju(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function xd(c,m){var y=c.C,I=m.indexOf(`
`,y);return I==-1?_o:(y=Number(m.substring(y,I)),isNaN(y)?Xa:(I+=1,I+y>m.length?_o:(m=m.slice(I,I+y),c.C=I+y,m)))}jn.prototype.cancel=function(){this.J=!0,An(this)};function Qe(c){c.S=Date.now()+c.I,Bu(c,c.I)}function Bu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mn(T(c.ba,c),m)}function ls(c){c.B&&(d.clearTimeout(c.B),c.B=null)}jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qa(this.i,this.A),this.L!=2&&(Nr(),ut(17)),An(this),this.s=2,ii(this)):Bu(this,this.S-c)};function ii(c){c.j.G==0||c.J||ko(c.j,c)}function An(c){ls(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,za(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ja(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||Qt(y.h,c))){if(!c.K&&Qt(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Co(y),Wn(y);else break e;Po(y),ut(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=Mn(T(y.Za,y),6e3));if(1>=$u(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Lr(y,11)}else if((c.K||y.g==c)&&Co(y),!ne(m))for(F=y.Da.g.parse(m),m=0;m<F.length;m++){let Le=F[m];if(y.T=Le[0],Le=Le[1],y.G==2)if(Le[0]=="c"){y.K=Le[1],y.ia=Le[2];const kt=Le[3];kt!=null&&(y.la=kt,y.j.info("VER="+y.la));const dt=Le[4];dt!=null&&(y.Aa=dt,y.j.info("SVER="+y.Aa));const Pn=Le[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(I=1.5*Pn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const gn=c.g;if(gn){const ms=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var q=I.h;q.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Za(q,q.h),q.h=null))}if(I.D){const No=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(I.ya=No,He(I.I,I.D,No))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ie=c;if(I.qa=nc(I,I.J?I.ia:null,I.W),ie.K){qu(I.h,ie);var qe=ie,wt=I.L;wt&&(qe.I=wt),qe.B&&(ls(qe),Qe(qe)),I.g=ie}else ps(I);0<y.i.length&&lr(y)}else Le[0]!="stop"&&Le[0]!="close"||Lr(y,7);else y.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Lr(y,7):Ot(y):Le[0]!="noop"&&y.l&&y.l.ta(Le),y.v=0)}}Nr(4)}catch{}}var zu=class{constructor(c,m){this.g=c,this.map=m}};function us(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $u(c){return c.h?1:c.g?c.g.size:0}function Qt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Za(c,m){c.g?c.g.add(m):c.h=m}function qu(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}us.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Wu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return z(c.i)}function vo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,I=0;I<y;I++)m.push(c[I]);return m}m=[],y=0;for(I in c)m[y++]=c[I];return m}function Eo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const I in c)m[y++]=I;return m}}}function si(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=Eo(c),I=vo(c),F=I.length,q=0;q<F;q++)m.call(void 0,I[q],y&&y[q],c)}var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nd(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),F=null;if(0<=I){var q=c[y].substring(0,I);F=c[y].substring(I+1)}else q=c[y];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Dr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Dr){this.h=c.h,hs(this,c.j),this.o=c.o,this.g=c.g,oi(this,c.s),this.l=c.l;var m=c.i,y=new sr;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),ai(this,y),this.m=c.m}else c&&(m=String(c).match(cs))?(this.h=!1,hs(this,m[1]||"",!0),this.o=be(m[2]||""),this.g=be(m[3]||"",!0),oi(this,m[4]),this.l=be(m[5]||"",!0),ai(this,m[6]||"",!0),this.m=be(m[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}Dr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(ui(m,wo,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ui(m,wo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ui(y,y.charAt(0)=="/"?Gu:Hu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ui(y,el)),c.join("")};function pn(c){return new Dr(c)}function hs(c,m,y){c.j=y?be(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function oi(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function ai(c,m,y){m instanceof sr?(c.i=m,or(c.i,c.h)):(y||(m=ui(m,Qu)),c.i=new sr(m,c.h))}function He(c,m,y){c.i.set(m,y)}function li(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function be(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ui(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Ku),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ku(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,Hu=/[#\?:]/g,Gu=/[#\?]/g,Qu=/[#\?@]/g,el=/#/g;function sr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function bt(c){c.g||(c.g=new Map,c.h=0,c.i&&Nd(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=sr.prototype,n.add=function(c,m){bt(this),this.i=null,c=Rn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Bn(c,m){bt(c),m=Rn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function zn(c,m){return bt(c),m=Rn(c,m),c.g.has(m)}n.forEach=function(c,m){bt(this),this.g.forEach(function(y,I){y.forEach(function(F){c.call(m,F,I,this)},this)},this)},n.na=function(){bt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let I=0;I<m.length;I++){const F=c[I];for(let q=0;q<F.length;q++)y.push(m[I])}return y},n.V=function(c){bt(this);let m=[];if(typeof c=="string")zn(this,c)&&(m=m.concat(this.g.get(Rn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return bt(this),this.i=null,c=Rn(this,c),zn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function ci(c,m,y){Bn(c,m),0<y.length&&(c.i=null,c.g.set(Rn(c,m),z(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var I=m[y];const q=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var F=q;ie[I]!==""&&(F+="="+encodeURIComponent(String(ie[I]))),c.push(F)}}return this.i=c.join("&")};function Rn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function or(c,m){m&&!c.j&&(bt(c),c.i=null,c.g.forEach(function(y,I){var F=I.toLowerCase();I!=F&&(Bn(this,I),ci(this,F,y))},c)),c.j=m}function Dd(c,m){const y=new ss;if(d.Image){const I=new Image;I.onload=N(nn,y,"TestLoadImage: loaded",!0,m,I),I.onerror=N(nn,y,"TestLoadImage: error",!1,m,I),I.onabort=N(nn,y,"TestLoadImage: abort",!1,m,I),I.ontimeout=N(nn,y,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Xu(c,m){const y=new ss,I=new AbortController,F=setTimeout(()=>{I.abort(),nn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then(q=>{clearTimeout(F),q.ok?nn(y,"TestPingServer: ok",!0,m):nn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),nn(y,"TestPingServer: error",!1,m)})}function nn(c,m,y,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(y)}catch{}}function Vd(){this.g=new Wa}function Yu(c,m,y){const I=y||"";try{si(c,function(F,q){let ie=F;_(F)&&(ie=$a(F)),m.push(I+q+"="+encodeURIComponent(ie))})}catch(F){throw m.push(I+"type="+encodeURIComponent("_badmap")),F}}function Vr(c){this.l=c.Ub||null,this.j=c.eb||!1}M(Vr,rs),Vr.prototype.g=function(){return new ds(this.l,this.j)},Vr.prototype.i=(function(c){return function(){return c}})({});function ds(c,m){vt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(ds,vt),n=ds.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,qn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ju(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ju(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?$n(this):qn(this),this.readyState==3&&Ju(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,$n(this))},n.Qa=function(c){this.g&&(this.response=c,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function qn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function br(c){let m="";return ge(c,function(y,I){m+=I,m+=":",m+=y,m+=`\r
`}),m}function hi(c,m,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=br(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):He(c,m,y))}function Ze(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Ze,vt);var bd=/^https?$/i,tl=["POST","PUT"];n=Ze.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?co(this.o):co(Un),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){fs(this,q);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)y.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())y.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(tl,m,void 0))||I||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of y)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{To(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){fs(this,q)}};function fs(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Io(c),mn(c)}function Io(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Et(this,"complete"),Et(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},n.bb=function(){nl(this)};function nl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||rn(c)!=4||c.Z()!=2)){if(c.u&&rn(c)==4)ja(c.Ea,0,c);else if(Et(c,"readystatechange"),rn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var I;if(I=ie===0){var F=String(c.D).match(cs)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!bd.test(F?F.toLowerCase():"")}y=I}if(y)Et(c,"complete"),Et(c,"success");else{c.m=6;try{var q=2<rn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Io(c)}}finally{mn(c)}}}}function mn(c,m){if(c.g){To(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Et(c,"ready");try{y.onreadystatechange=I}catch{}}}function To(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function rn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),qa(m)}};function rl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function So(c){const m={};c=(c.g&&2<=rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(ne(c[I]))continue;var y=b(c[I]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[F]||[];m[F]=q,q.push(y)}k(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function il(c){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,c),this.cb=ar("retryDelaySeedMs",1e4,c),this.Wa=ar("forwardChannelMaxRetries",2,c),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new us(c&&c.concurrentRequestLimit),this.Da=new Vd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,I){ut(0),this.W=c,this.H=m||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=nc(this,null,this.W),lr(this)};function Ot(c){if(Ao(c),c.G==3){var m=c.U++,y=pn(c.I);if(He(y,"SID",c.K),He(y,"RID",m),He(y,"TYPE","terminate"),Or(c,y),m=new jn(c,c.j,m),m.L=2,m.v=li(pn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=rc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Qe(m)}tc(c)}function Wn(c){c.g&&(sl(c),c.g.cancel(),c.g=null)}function Ao(c){Wn(c),c.u&&(d.clearTimeout(c.u),c.u=null),Co(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function lr(c){if(!fn(c.h)&&!c.s){c.s=!0;var m=c.Ga;ce||le(),H||(ce(),H=!0),_e.add(m,c),c.B=0}}function Od(c,m){return $u(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mn(T(c.Ga,c,m),ec(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new jn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),x(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=di(this,F,m),y=pn(this.I),He(y,"RID",c),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Or(this,y),q&&(this.O?m="headers="+encodeURIComponent(String(br(q)))+"&"+m:this.m&&hi(y,this.m,q)),Za(this.h,F),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",m),He(y,"SID","null"),F.T=!0,yo(F,y,null)):yo(F,y,m),this.G=2}}else this.G==3&&(c?Ro(this,c):this.i.length==0||fn(this.h)||Ro(this))};function Ro(c,m){var y;m?y=m.l:y=c.U++;const I=pn(c.I);He(I,"SID",c.K),He(I,"RID",y),He(I,"AID",c.T),Or(c,I),c.m&&c.o&&hi(I,c.m,c.o),y=new jn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=di(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Za(c.h,y),yo(y,I,m)}function Or(c,m){c.H&&ge(c.H,function(y,I){He(m,I,y)}),c.l&&si({},function(y,I){He(m,I,y)})}function di(c,m,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let q=-1;for(;;){const ie=["count="+y];q==-1?0<y?(q=F[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let qe=!0;for(let wt=0;wt<y;wt++){let Le=F[wt].g;const kt=F[wt].map;if(Le-=q,0>Le)q=Math.max(0,F[wt].g-100),qe=!1;else try{Yu(kt,ie,"req"+Le+"_")}catch{I&&I(kt)}}if(qe){I=ie.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,I}function ps(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;ce||le(),H||(ce(),H=!0),_e.add(m,c),c.v=0}}function Po(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mn(T(c.Fa,c),ec(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Wn(this),Zu(this))};function sl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Zu(c){c.g=new jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=pn(c.qa);He(m,"RID","rpc"),He(m,"SID",c.K),He(m,"AID",c.T),He(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(m,"TO",c.ja),He(m,"TYPE","xmlhttp"),Or(c,m),c.m&&c.o&&hi(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=li(pn(m)),y.m=null,y.P=!0,Ya(y,c)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),Po(this),ut(19))};function Co(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ko(c,m){var y=null;if(c.g==m){Co(c),sl(c),c.g=null;var I=2}else if(Qt(c.h,m))y=m.D,qu(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var F=c.B;I=is(),Et(I,new po(I,y)),lr(c)}else ps(c);else if(F=m.s,F==3||F==0&&0<m.X||!(I==1&&Od(c,m)||I==2&&Po(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),F){case 1:Lr(c,5);break;case 4:Lr(c,10);break;case 3:Lr(c,6);break;default:Lr(c,2)}}}function ec(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Lr(c,m){if(c.j.info("Error code "+m),m==2){var y=T(c.fb,c),I=c.Xa;const F=!I;I=new Dr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||hs(I,"https"),li(I),F?Dd(I.toString(),y):Xu(I.toString(),y)}else ut(2);c.G=0,c.l&&c.l.sa(m),tc(c),Ao(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function tc(c){if(c.G=0,c.ka=[],c.l){const m=Wu(c.h);(m.length!=0||c.i.length!=0)&&(V(c.ka,m),V(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function nc(c,m,y){var I=y instanceof Dr?pn(y):new Dr(y);if(I.g!="")m&&(I.g=m+"."+I.g),oi(I,I.s);else{var F=d.location;I=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new Dr(null);I&&hs(q,I),m&&(q.g=m),F&&oi(q,F),y&&(q.l=y),I=q}return y=c.D,m=c.ya,y&&m&&He(I,y,m),He(I,"VER",c.la),Or(c,I),I}function rc(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Ze(new Vr({eb:y})):new Ze(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xo(){}xo.prototype.g=function(c,m){return new Xt(c,m)};function Xt(c,m){vt.call(this),this.g=new il(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!ne(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ne(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ur(this)}M(Xt,vt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Ot(this.g)},Xt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=$a(c),c=y);m.i.push(new zu(m.Ya++,c)),m.G==3&&lr(m)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Xt.aa.N.call(this)};function ic(c){rr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}M(ic,rr);function sc(){fo.call(this),this.status=1}M(sc,fo);function ur(c){this.g=c}M(ur,ol),ur.prototype.ua=function(){Et(this.g,"a")},ur.prototype.ta=function(c){Et(this.g,new ic(c))},ur.prototype.sa=function(c){Et(this.g,new sc)},ur.prototype.ra=function(){Et(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,vI=function(){return new xo},yI=function(){return is()},_I=ir,Lp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,fh=go,Fu.COMPLETE="complete",gI=Fu,ho.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Ul=ho,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,mI=Ze}).apply(typeof eh<"u"?eh:typeof self<"u"?self:typeof window<"u"?window:{});const Ev="@firebase/firestore",wv="4.8.0";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Na="11.10.0";/**
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
 */const Ks=new gm("@firebase/firestore");function ia(){return Ks.logLevel}function J(n,...e){if(Ks.logLevel<=De.DEBUG){const t=e.map(Cm);Ks.debug(`Firestore (${Na}): ${n}`,...t)}}function Zt(n,...e){if(Ks.logLevel<=De.ERROR){const t=e.map(Cm);Ks.error(`Firestore (${Na}): ${n}`,...t)}}function Ir(n,...e){if(Ks.logLevel<=De.WARN){const t=e.map(Cm);Ks.warn(`Firestore (${Na}): ${n}`,...t)}}function Cm(n){if(typeof n=="string")return n;try{/**
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
 */function fe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,EI(n,r,t)}function EI(n,e,t){let r=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Zt(r),new Error(r)}function ye(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||EI(e,o,r)}function Pe(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class wI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class KC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class HC{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new wI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class GC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class QC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new GC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Iv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=a=>{a.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,J("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Iv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Iv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function II(){return new TextEncoder}/**
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
 */class km{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=YC(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Ae(n,e){return n<e?-1:n>e?1:0}function Mp(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return Ae(r,o);{const a=II(),u=JC(a.encode(Tv(n,t)),a.encode(Tv(e,t)));return u!==0?u:Ae(r,o)}}t+=r>65535?2:1}return Ae(n.length,e.length)}function Tv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function JC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function ma(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}function TI(n){return n+"\0"}/**
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
 */const Sv="__name__";class pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&fe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=pr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Ae(e.length,t.length)}static compareSegments(e,t){const r=pr.isNumericId(e),o=pr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?pr.extractNumericId(e).compare(pr.extractNumericId(t)):Mp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ji.fromString(e.substring(4,e.length-2))}}class ze extends pr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new ze(t)}static emptyPath(){return new ze([])}}const ZC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends pr{construct(e,t,r){return new ot(e,t,r)}static isValidIdentifier(e){return ZC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sv}static keyField(){return new ot([Sv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(t)}static emptyPath(){return new ot([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(ze.fromString(e))}static fromName(e){return new oe(ze.fromString(e).popFirst(5))}static empty(){return new oe(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new ze(e.slice()))}}/**
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
 */function SI(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ek(n,e,t,r){if(e===!0&&r===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Av(n){if(!oe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rv(n){if(oe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function AI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function rd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fe(12329,{type:typeof n})}function tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rd(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ru(n,e){if(!AI(n))throw new se(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pv=-62135596800,Cv=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cv);return new $e(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pv)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ru(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:mt("string",$e._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new $e(0,0))}static max(){return new Ee(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const su=-1;class Vh{constructor(e,t,r,o){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=o}}function Fp(n){return n.fields.find((e=>e.kind===2))}function xs(n){return n.fields.filter((e=>e.kind!==2))}Vh.UNKNOWN_ID=-1;class ph{constructor(e,t){this.fieldPath=e,this.kind=t}}class ou{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ou(0,Tn.min())}}function tk(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(r===1e9?new $e(t+1,0):new $e(t,r));return new Tn(o,oe.empty(),e)}function RI(n){return new Tn(n.readTime,n.key,su)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(Ee.min(),oe.empty(),su)}static max(){return new Tn(Ee.max(),oe.empty(),su)}}function xm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
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
 */const PI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function no(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==PI)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):U.reject(t)}static resolve(e){return new U(((t,r)=>{t(e)}))}static reject(e){return new U(((t,r)=>{r(e)}))}static waitFor(e){return new U(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(f=>r(f)))})),u=!0,a===o&&t()}))}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next((o=>o?U.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new U(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const _=f;t(e[_]).next((v=>{u[_]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new U(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}/**
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
 */const En="SimpleDb";class id{static open(e,t,r,o){try{return new id(t,e.transaction(o,r))}catch(a){throw new Kl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Qr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Kl(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const o=Nm(r.target.error);this.S.reject(new Kl(e,o))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(J(En,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rk(t)}}class Bi{static delete(e){return J(En,"Removing database:",e),Ds(vw().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Cw())return!1;if(Bi.F())return!0;const e=St(),t=Bi.M(e),r=0<t&&t<10,o=kI(e),a=0<o&&o<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,Bi.M(St())===12.2&&Zt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(J(En,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const o=indexedDB.open(this.name,this.version);o.onsuccess=a=>{const u=a.target.result;t(u)},o.onblocked=()=>{r(new Kl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},o.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new se(W.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new se(W.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Kl(e,u))},o.onupgradeneeded=a=>{J(En,'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;if(this.L!==null&&this.L!==a.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${a.oldVersion}, event.newVersion=${a.newVersion}, db.version=${u.version}`);this.B.q(u,o.transaction,a.oldVersion,this.version).next((()=>{J(En,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const r=t.target;this.L=r.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var r;t.newVersion===null&&(Ir('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,o){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=id.open(this.db,e,a?"readonly":"readwrite",r),f=o(d).next((_=>(d.v(),_))).catch((_=>(d.abort(_),U.reject(_)))).toPromise();return f.catch((()=>{})),await d.D,f}catch(d){const f=d,_=f.name!=="FirebaseError"&&u<3;if(J(En,"Transaction failed with error:",f.message,"Retrying:",_),this.close(),!_)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function kI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class nk{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Ds(this.$.delete())}}class Kl extends se{constructor(e,t){super(W.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ji(n){return n.name==="IndexedDbTransactionError"}class rk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(J(En,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(J(En,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ds(r)}add(e){return J(En,"ADD",this.store.name,e,e),Ds(this.store.add(e))}get(e){return Ds(this.store.get(e)).next((t=>(t===void 0&&(t=null),J(En,"GET",this.store.name,e,t),t)))}delete(e){return J(En,"DELETE",this.store.name,e),Ds(this.store.delete(e))}count(){return J(En,"COUNT",this.store.name),Ds(this.store.count())}j(e,t){const r=this.options(e,t),o=r.index?this.store.index(r.index):this.store;if(typeof o.getAll=="function"){const a=o.getAll(r.range);return new U(((u,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{u(f.target.result)}}))}{const a=this.cursor(r),u=[];return this.J(a,((d,f)=>{u.push(f)})).next((()=>u))}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new U(((o,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{o(u.target.result)}}))}Y(e,t){J(En,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const o=this.cursor(r);return this.J(o,((a,u,d)=>d.delete()))}X(e,t){let r;t?r=e:(r={},t=e);const o=this.cursor(r);return this.J(o,t)}ee(e){const t=this.cursor({});return new U(((r,o)=>{t.onerror=a=>{const u=Nm(a.target.error);o(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next((d=>{d?u.continue():r()})):r()}}))}J(e,t){const r=[];return new U(((o,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void o();const f=new nk(d),_=t(d.primaryKey,d.value,f);if(_ instanceof U){const v=_.catch((w=>(f.done(),U.reject(w))));r.push(v)}f.isDone?o():f.W===null?d.continue():d.continue(f.W)}})).next((()=>U.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ds(n){return new U(((e,t)=>{n.onsuccess=r=>{const o=r.target.result;e(o)},n.onerror=r=>{const o=Nm(r.target.error);t(o)}}))}let kv=!1;function Nm(n){const e=Bi.M(St());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new se("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return kv||(kv=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Hl="IndexBackfiller";class ik{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){J(Hl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();J(Hl,`Documents written: ${t}`)}catch(t){Ji(t)?J(Hl,"Ignoring IndexedDB error during index backfill: ",t):await no(t)}await this.ne(6e4)}))}}class sk{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const r=new Set;let o=t,a=!0;return U.doWhile((()=>a===!0&&o>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((u=>{if(u!==null&&!r.has(u))return J(Hl,`Processing collection: ${u}`),this.se(e,u,o).next((d=>{o-=d,r.add(u)}));a=!1})))).next((()=>t-o))}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((o=>this.localStore.localDocuments.getNextDocuments(e,t,o,r).next((a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next((()=>this.oe(o,a))).next((d=>(J(Hl,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d)))).next((()=>u.size))}))))}oe(e,t){let r=e;return t.changes.forEach(((o,a)=>{const u=RI(a);xm(u,r)>0&&(r=u)})),new Tn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Fs=-1;function sd(n){return n==null}function au(n){return n===0&&1/n==-1/0}function ok(n){return typeof n=="number"&&Number.isInteger(n)&&!au(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const bh="";function Gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xv(e)),e=ak(n.get(t),e);return xv(e)}function ak(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case bh:t+="";break;default:t+=a}}return t}function xv(n){return n+bh+""}function mr(n){const e=n.length;if(ye(e>=2,64408,{path:n}),e===2)return ye(n.charAt(0)===bh&&n.charAt(1)==="",56145,{path:n}),ze.emptyPath();const t=e-2,r=[];let o="";for(let a=0;a<e;){const u=n.indexOf(bh,a);switch((u<0||u>t)&&fe(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(a,u);let f;o.length===0?f=d:(o+=d,f=o,o=""),r.push(f);break;case"":o+=n.substring(a,u),o+="\0";break;case"":o+=n.substring(a,u+1);break;default:fe(61167,{path:n})}a=u+2}return new ze(r)}/**
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
 */const Ns="remoteDocuments",Pu="owner",Jo="owner",lu="mutationQueues",lk="userId",Jn="mutations",Nv="batchId",Ls="userMutationsIndex",Dv=["userId","batchId"];/**
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
 */function mh(n,e){return[n,Gt(e)]}function xI(n,e,t){return[n,Gt(e),t]}const uk={},ga="documentMutations",Oh="remoteDocumentsV14",ck=["prefixPath","collectionGroup","readTime","documentId"],gh="documentKeyIndex",hk=["prefixPath","collectionGroup","documentId"],NI="collectionGroupIndex",dk=["collectionGroup","readTime","prefixPath","documentId"],uu="remoteDocumentGlobal",Up="remoteDocumentGlobalKey",_a="targets",DI="queryTargetsIndex",fk=["canonicalId","targetId"],ya="targetDocuments",pk=["targetId","path"],Dm="documentTargetsIndex",mk=["path","targetId"],Lh="targetGlobalKey",Us="targetGlobal",cu="collectionParents",gk=["collectionId","parent"],va="clientMetadata",_k="clientId",od="bundles",yk="bundleId",ad="namedQueries",vk="name",Vm="indexConfiguration",Ek="indexId",jp="collectionGroupIndex",wk="collectionGroup",Gl="indexState",Ik=["indexId","uid"],VI="sequenceNumberIndex",Tk=["uid","sequenceNumber"],Ql="indexEntries",Sk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],bI="documentKeyIndex",Ak=["indexId","uid","orderedDocumentKey"],ld="documentOverlays",Rk=["userId","collectionPath","documentId"],Bp="collectionPathOverlayIndex",Pk=["userId","collectionPath","largestBatchId"],OI="collectionGroupOverlayIndex",Ck=["userId","collectionGroup","largestBatchId"],bm="globals",kk="name",LI=[lu,Jn,ga,Ns,_a,Pu,Us,ya,va,uu,cu,od,ad],xk=[...LI,ld],MI=[lu,Jn,ga,Oh,_a,Pu,Us,ya,va,uu,cu,od,ad,ld],FI=MI,Om=[...FI,Vm,Gl,Ql],Nk=Om,UI=[...Om,bm],Dk=UI;/**
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
 */class zp extends CI{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function At(n,e){const t=Pe(n);return Bi.N(t.ce,e)}/**
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
 */function Vv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||jt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new th(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new th(this.root,e,this.comparator,!1)}getReverseIterator(){return new th(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new th(this.root,e,this.comparator,!0)}}class th{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??jt.RED,this.left=o??jt.EMPTY,this.right=a??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new jt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return jt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(e){return new bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zo(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new hn([])}unionWith(e){let t=new Ke(ot.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ma(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class BI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new BI("Invalid base64 string: "+a):a}})(e);return new yt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Vk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Vk.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zr(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
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
 */const zI="server_timestamp",$I="__type__",qI="__previous_value__",WI="__local_write_time__";function Lm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[$I])===null||t===void 0?void 0:t.stringValue)===zI}function ud(n){const e=n.mapValue.fields[qI];return Lm(e)?ud(e):e}function hu(n){const e=Jr(n.mapValue.fields[WI].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class bk{constructor(e,t,r,o,a,u,d,f,_,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=_,this.isUsingEmulator=v}}const Mh="(default)";class Hs{constructor(e,t){this.projectId=e,this.database=t||Mh}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===Mh}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mm="__type__",KI="__max__",Mi={mapValue:{fields:{__type__:{stringValue:KI}}}},Fm="__vector__",Ea="value",_h={nullValue:"NULL_VALUE"};function qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lm(n)?4:HI(n)?9007199254740991:cd(n)?10:11:fe(28295,{value:n})}function Tr(n,e){if(n===e)return!0;const t=qi(n);if(t!==qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hu(n).isEqual(hu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Jr(o.timestampValue),d=Jr(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Zr(o.bytesValue).isEqual(Zr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return tt(o.geoPointValue.latitude)===tt(a.geoPointValue.latitude)&&tt(o.geoPointValue.longitude)===tt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return tt(o.integerValue)===tt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=tt(o.doubleValue),d=tt(a.doubleValue);return u===d?au(u)===au(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return ma(n.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Vv(u)!==Vv(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Tr(u[f],d[f])))return!1;return!0})(n,e);default:return fe(52216,{left:n})}}function du(n,e){return(n.values||[]).find((t=>Tr(t,e)))!==void 0}function Wi(n,e){if(n===e)return 0;const t=qi(n),r=qi(e);if(t!==r)return Ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=tt(a.integerValue||a.doubleValue),f=tt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Ov(n.timestampValue,e.timestampValue);case 4:return Ov(hu(n),hu(e));case 5:return Mp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Zr(a),f=Zr(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let _=0;_<d.length&&_<f.length;_++){const v=Ae(d[_],f[_]);if(v!==0)return v}return Ae(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Ae(tt(a.latitude),tt(u.latitude));return d!==0?d:Ae(tt(a.longitude),tt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Lv(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,_,v;const w=a.fields||{},T=u.fields||{},N=(d=w[Ea])===null||d===void 0?void 0:d.arrayValue,M=(f=T[Ea])===null||f===void 0?void 0:f.arrayValue,z=Ae(((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0,((v=M==null?void 0:M.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:Lv(N,M)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Mi.mapValue&&u===Mi.mapValue)return 0;if(a===Mi.mapValue)return 1;if(u===Mi.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),_=u.fields||{},v=Object.keys(_);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Mp(f[w],v[w]);if(T!==0)return T;const N=Wi(d[f[w]],_[v[w]]);if(N!==0)return N}return Ae(f.length,v.length)})(n.mapValue,e.mapValue);default:throw fe(23264,{le:t})}}function Ov(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Jr(n),r=Jr(e),o=Ae(t.seconds,r.seconds);return o!==0?o:Ae(t.nanos,r.nanos)}function Lv(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=Wi(t[o],r[o]);if(a)return a}return Ae(t.length,r.length)}function wa(n){return $p(n)}function $p(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Jr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return oe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=$p(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${$p(t.fields[u])}`;return o+"}"})(n.mapValue):fe(61005,{value:n})}function yh(n){switch(qi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ud(n);return e?16+yh(e):16;case 5:return 2*n.stringValue.length;case 6:return Zr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+yh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Zi(r.fields,((a,u)=>{o+=a.length+yh(u)})),o})(n.mapValue);default:throw fe(13486,{value:n})}}function fu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qp(n){return!!n&&"integerValue"in n}function pu(n){return!!n&&"arrayValue"in n}function Mv(n){return!!n&&"nullValue"in n}function Fv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vh(n){return!!n&&"mapValue"in n}function cd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mm])===null||t===void 0?void 0:t.stringValue)===Fm}function Xl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zi(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Xl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function HI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===KI}const GI={mapValue:{fields:{[Mm]:{stringValue:Fm},[Ea]:{arrayValue:{}}}}};function Ok(n){return"nullValue"in n?_h:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?fu(Hs.empty(),oe.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?cd(n)?GI:{mapValue:{}}:fe(35942,{value:n})}function Lk(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?fu(Hs.empty(),oe.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?GI:"mapValue"in n?cd(n)?{mapValue:{}}:Mi:fe(61959,{value:n})}function Uv(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function jv(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xl(t)}setAll(e){let t=ot.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=Xl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];vh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Zi(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new Ht(Xl(this.value))}}function QI(n){const e=[];return Zi(n.fields,((t,r)=>{const o=new ot([t]);if(vh(r)){const a=QI(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new hn(e)}/**
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
 */class lt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new lt(e,0,Ee.min(),Ee.min(),Ee.min(),Ht.empty(),0)}static newFoundDocument(e,t,r,o){return new lt(e,1,t,Ee.min(),r,o,0)}static newNoDocument(e,t){return new lt(e,2,t,Ee.min(),Ee.min(),Ht.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,Ee.min(),Ee.min(),Ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ia{constructor(e,t){this.position=e,this.inclusive=t}}function Bv(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=oe.comparator(oe.fromName(u.referenceValue),t.key):r=Wi(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function zv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class XI{}class Ve extends XI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Fk(e,t,r):t==="array-contains"?new Bk(e,r):t==="in"?new nT(e,r):t==="not-in"?new zk(e,r):t==="array-contains-any"?new $k(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Uk(e,r):new jk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wi(t,this.value)):t!==null&&qi(this.value)===qi(t)&&this.matchesComparison(Wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends XI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new We(e,t)}matches(e){return Ta(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ta(n){return n.op==="and"}function Wp(n){return n.op==="or"}function Um(n){return YI(n)&&Ta(n)}function YI(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function Kp(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+wa(n.value);if(Um(n))return n.filters.map((e=>Kp(e))).join(",");{const e=n.filters.map((t=>Kp(t))).join(",");return`${n.op}(${e})`}}function JI(n,e){return n instanceof Ve?(function(r,o){return o instanceof Ve&&r.op===o.op&&r.field.isEqual(o.field)&&Tr(r.value,o.value)})(n,e):n instanceof We?(function(r,o){return o instanceof We&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&JI(u,o.filters[d])),!0):!1})(n,e):void fe(19439)}function ZI(n,e){const t=n.filters.concat(e);return We.create(t,n.op)}function eT(n){return n instanceof Ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${wa(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(eT).join(" ,")+"}"})(n):"Filter"}class Fk extends Ve{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uk extends Ve{constructor(e,t){super(e,"in",t),this.keys=tT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jk extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=tT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function tT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>oe.fromName(r.referenceValue)))}class Bk extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pu(t)&&du(t.arrayValue,this.value)}}class nT extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&du(this.value.arrayValue,t)}}class zk extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!du(this.value.arrayValue,t)}}class $k extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>du(this.value.arrayValue,r)))}}/**
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
 */class qk{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Hp(n,e=null,t=[],r=[],o=null,a=null,u=null){return new qk(n,e,t,r,o,a,u)}function Gs(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Kp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),sd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>wa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>wa(r))).join(",")),e.Pe=t}return e.Pe}function Cu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Mk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!JI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zv(n.startAt,e.startAt)&&zv(n.endAt,e.endAt)}function Fh(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Uh(n,e){return n.filters.filter((t=>t instanceof Ve&&t.field.isEqual(e)))}function $v(n,e,t){let r=_h,o=!0;for(const a of Uh(n,e)){let u=_h,d=!0;switch(a.op){case"<":case"<=":u=Ok(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,d=!1;break;case"!=":case"not-in":u=_h}Uv({value:r,inclusive:o},{value:u,inclusive:d})<0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Uv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})<0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}function qv(n,e,t){let r=Mi,o=!0;for(const a of Uh(n,e)){let u=Mi,d=!0;switch(a.op){case">=":case">":u=Lk(a.value),d=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,d=!1;break;case"!=":case"not-in":u=Mi}jv({value:r,inclusive:o},{value:u,inclusive:d})>0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];jv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})>0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}/**
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
 */class Da{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Wk(n,e,t,r,o,a,u,d){return new Da(n,e,t,r,o,a,u,d)}function ku(n){return new Da(n)}function Wv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rT(n){return n.collectionGroup!==null}function Yl(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ke(ot.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new mu(a,r))})),t.has(ot.keyField().canonicalString())||e.Te.push(new mu(ot.keyField(),r))}return e.Te}function Ln(n){const e=Pe(n);return e.Ie||(e.Ie=Kk(e,Yl(n))),e.Ie}function Kk(n,e){if(n.limitType==="F")return Hp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new mu(o.field,a)}));const t=n.endAt?new Ia(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ia(n.startAt.position,n.startAt.inclusive):null;return Hp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Gp(n,e){const t=n.filters.concat([e]);return new Da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qp(n,e,t){return new Da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hd(n,e){return Cu(Ln(n),Ln(e))&&n.limitType===e.limitType}function iT(n){return`${Gs(Ln(n))}|lt:${n.limitType}`}function sa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>eT(o))).join(", ")}]`),sd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>wa(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>wa(o))).join(",")),`Target(${r})`})(Ln(n))}; limitType=${n.limitType})`}function xu(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):oe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of Yl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,f){const _=Bv(u,d,f);return u.inclusive?_<=0:_<0})(r.startAt,Yl(r),o)||r.endAt&&!(function(u,d,f){const _=Bv(u,d,f);return u.inclusive?_>=0:_>0})(r.endAt,Yl(r),o))})(n,e)}function Hk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sT(n){return(e,t)=>{let r=!1;for(const o of Yl(n)){const a=Gk(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Gk(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),_=d.data.field(a);return f!==null&&_!==null?Wi(f,_):fe(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:n.dir})}}/**
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
 */class ei{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return jI(this.inner)}size(){return this.innerSize}}/**
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
 */const Qk=new nt(oe.comparator);function In(){return Qk}const oT=new nt(oe.comparator);function jl(...n){let e=oT;for(const t of n)e=e.insert(t.key,t);return e}function aT(n){let e=oT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function gr(){return Jl()}function lT(){return Jl()}function Jl(){return new ei((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Xk=new nt(oe.comparator),Yk=new Ke(oe.comparator);function ke(...n){let e=Yk;for(const t of n)e=e.add(t);return e}const Jk=new Ke(Ae);function Zk(){return Jk}/**
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
 */function jm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function uT(n){return{integerValue:""+n}}function ex(n,e){return ok(e)?uT(e):jm(n,e)}/**
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
 */class dd{constructor(){this._=void 0}}function tx(n,e,t){return n instanceof Sa?(function(o,a){const u={fields:{[$I]:{stringValue:zI},[WI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Lm(a)&&(a=ud(a)),a&&(u.fields[qI]=a),{mapValue:u}})(t,e):n instanceof Aa?hT(n,e):n instanceof Ra?dT(n,e):(function(o,a){const u=cT(o,a),d=Kv(u)+Kv(o.Ee);return qp(u)&&qp(o.Ee)?uT(d):jm(o.serializer,d)})(n,e)}function nx(n,e,t){return n instanceof Aa?hT(n,e):n instanceof Ra?dT(n,e):t}function cT(n,e){return n instanceof gu?(function(r){return qp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Sa extends dd{}class Aa extends dd{constructor(e){super(),this.elements=e}}function hT(n,e){const t=fT(e);for(const r of n.elements)t.some((o=>Tr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Ra extends dd{constructor(e){super(),this.elements=e}}function dT(n,e){let t=fT(e);for(const r of n.elements)t=t.filter((o=>!Tr(o,r)));return{arrayValue:{values:t}}}class gu extends dd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Kv(n){return tt(n.integerValue||n.doubleValue)}function fT(n){return pu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class pT{constructor(e,t){this.field=e,this.transform=t}}function rx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Aa&&o instanceof Aa||r instanceof Ra&&o instanceof Ra?ma(r.elements,o.elements,Tr):r instanceof gu&&o instanceof gu?Tr(r.Ee,o.Ee):r instanceof Sa&&o instanceof Sa})(n.transform,e.transform)}class ix{constructor(e,t){this.version=e,this.transformResults=t}}class en{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fd{}function mT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pd(n.key,en.none()):new Va(n.key,n.data,en.none());{const t=n.data,r=Ht.empty();let o=new Ke(ot.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new ti(n.key,r,new hn(o.toArray()),en.none())}}function sx(n,e,t){n instanceof Va?(function(o,a,u){const d=o.value.clone(),f=Gv(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ti?(function(o,a,u){if(!Eh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Gv(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(gT(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Zl(n,e,t,r){return n instanceof Va?(function(a,u,d,f){if(!Eh(a.precondition,u))return d;const _=a.value.clone(),v=Qv(a.fieldTransforms,f,u);return _.setAll(v),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof ti?(function(a,u,d,f){if(!Eh(a.precondition,u))return d;const _=Qv(a.fieldTransforms,f,u),v=u.data;return v.setAll(gT(a)),v.setAll(_),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Eh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function ox(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=cT(r.transform,o||null);a!=null&&(t===null&&(t=Ht.empty()),t.set(r.field,a))}return t||null}function Hv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&ma(r,o,((a,u)=>rx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Va extends fd{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ti extends fd{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function gT(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Gv(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,nx(u,d,t[o]))}return r}function Qv(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,tx(a,u,e))}return r}class pd extends fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _T extends fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bm{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&sx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lT();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=mT(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Ee.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&ma(this.mutations,e.mutations,((t,r)=>Hv(t,r)))&&ma(this.baseMutations,e.baseMutations,((t,r)=>Hv(t,r)))}}class zm{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){ye(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=(function(){return Xk})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new zm(e,t,r,o)}}/**
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
 */class $m{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ax{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,Me;function lx(n){switch(n){case W.OK:return fe(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return fe(15467,{code:n})}}function yT(n){if(n===void 0)return Zt("GRPC error has no .code"),W.UNKNOWN;switch(n){case pt.OK:return W.OK;case pt.CANCELLED:return W.CANCELLED;case pt.UNKNOWN:return W.UNKNOWN;case pt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case pt.INTERNAL:return W.INTERNAL;case pt.UNAVAILABLE:return W.UNAVAILABLE;case pt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case pt.NOT_FOUND:return W.NOT_FOUND;case pt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case pt.ABORTED:return W.ABORTED;case pt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case pt.DATA_LOSS:return W.DATA_LOSS;default:return fe(39323,{code:n})}}(Me=pt||(pt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ux=new ji([4294967295,4294967295],0);function Xv(n){const e=II().encode(n),t=new pI;return t.update(e),new Uint8Array(t.digest())}function Yv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ji([t,r],0),new ji([o,a],0)]}class qm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bl(`Invalid padding: ${t}`);if(r<0)throw new Bl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ji.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(ji.fromNumber(r)));return o.compare(ux)===1&&(o=new ji([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Xv(e),[r,o]=Yv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new qm(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=Xv(e),[r,o]=Yv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class md{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new md(Ee.min(),o,new nt(Ae),In(),ke())}}class Nu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Nu(r,t,ke(),ke(),ke())}}/**
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
 */class wh{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class vT{constructor(e,t){this.targetId=e,this.De=t}}class ET{constructor(e,t,r=yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Jv{constructor(){this.ve=0,this.Ce=Zv(),this.Fe=yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),r=ke();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:fe(38017,{changeType:a})}})),new Nu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Zv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class cx{constructor(e){this.We=e,this.Ge=new Map,this.ze=In(),this.je=nh(),this.Je=nh(),this.He=new nt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if(Fh(a))if(r===0){const u=new oe(a.path);this.Xe(t,u,lt.newNoDocument(u,Ee.min()))}else ye(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const _=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=Zr(r).toUint8Array()}catch(f){if(f instanceof BI)return Ir("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new qm(u,o,a)}catch(f){return Ir(f instanceof Bl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Fh(d.target)){const f=new oe(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,lt.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=ke();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const _=this.st(f);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const o=new md(e,t,this.He,this.ze,r);return this.ze=In(),this.je=nh(),this.Je=nh(),this.He=new nt(Ae),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Jv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ke(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ke(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Jv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function nh(){return new nt(oe.comparator)}function Zv(){return new nt(oe.comparator)}const hx={asc:"ASCENDING",desc:"DESCENDING"},dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fx={and:"AND",or:"OR"};class px{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xp(n,e){return n.useProto3Json||sd(e)?e:{value:e}}function Pa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mx(n,e){return Pa(n,e.toTimestamp())}function tn(n){return ye(!!n,49232),Ee.fromTimestamp((function(t){const r=Jr(t);return new $e(r.seconds,r.nanos)})(n))}function Wm(n,e){return Yp(n,e).canonicalString()}function Yp(n,e){const t=(function(o){return new ze(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function IT(n){const e=ze.fromString(n);return ye(NT(e),10190,{key:e.toString()}),e}function jh(n,e){return Wm(n.databaseId,e.path)}function js(n,e){const t=IT(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(AT(t))}function TT(n,e){return Wm(n.databaseId,e)}function ST(n){const e=IT(n);return e.length===4?ze.emptyPath():AT(e)}function Jp(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function AT(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function eE(n,e,t){return{name:jh(n,e),fields:t.value.mapValue.fields}}function gx(n,e,t){const r=js(n,e.name),o=tn(e.updateTime),a=e.createTime?tn(e.createTime):Ee.min(),u=new Ht({mapValue:{fields:e.fields}}),d=lt.newFoundDocument(r,o,a,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function _x(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:fe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,v){return _.useProto3Json?(ye(v===void 0||typeof v=="string",58123),yt.fromBase64String(v||"")):(ye(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const v=_.code===void 0?W.UNKNOWN:yT(_.code);return new se(v,_.message||"")})(u);t=new ET(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=js(n,r.document.name),a=tn(r.document.updateTime),u=r.document.createTime?tn(r.document.createTime):Ee.min(),d=new Ht({mapValue:{fields:r.document.fields}}),f=lt.newFoundDocument(o,a,u,d),_=r.targetIds||[],v=r.removedTargetIds||[];t=new wh(_,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=js(n,r.document),a=r.readTime?tn(r.readTime):Ee.min(),u=lt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new wh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=js(n,r.document),a=r.removedTargetIds||[];t=new wh([],a,o,null)}else{if(!("filter"in e))return fe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new ax(o,a),d=r.targetId;t=new vT(d,u)}}return t}function Bh(n,e){let t;if(e instanceof Va)t={update:eE(n,e.key,e.value)};else if(e instanceof pd)t={delete:jh(n,e.key)};else if(e instanceof ti)t={update:eE(n,e.key,e.data),updateMask:Tx(e.fieldMask)};else{if(!(e instanceof _T))return fe(16599,{Rt:e.type});t={verify:jh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Sa)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Aa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ra)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof gu)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw fe(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:mx(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:fe(27497)})(n,e.precondition)),t}function Zp(n,e){const t=e.currentDocument?(function(a){return a.updateTime!==void 0?en.updateTime(tn(a.updateTime)):a.exists!==void 0?en.exists(a.exists):en.none()})(e.currentDocument):en.none(),r=e.updateTransforms?e.updateTransforms.map((o=>(function(u,d){let f=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),f=new Sa;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new Aa(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new Ra(v)}else"increment"in d?f=new gu(u,d.increment):fe(16584,{proto:d});const _=ot.fromServerFormat(d.fieldPath);return new pT(_,f)})(n,o))):[];if(e.update){e.update.name;const o=js(n,e.update.name),a=new Ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=(function(f){const _=f.fieldPaths||[];return new hn(_.map((v=>ot.fromServerFormat(v))))})(e.updateMask);return new ti(o,a,u,t,r)}return new Va(o,a,t,r)}if(e.delete){const o=js(n,e.delete);return new pd(o,t)}if(e.verify){const o=js(n,e.verify);return new _T(o,t)}return fe(1463,{proto:e})}function yx(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?tn(o.updateTime):tn(a);return u.isEqual(Ee.min())&&(u=tn(a)),new ix(u,o.transformResults||[])})(t,e)))):[]}function RT(n,e){return{documents:[TT(n,e.path)]}}function PT(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=TT(n,o);const a=(function(_){if(_.length!==0)return xT(We.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((v=>(function(T){return{field:oa(T.field),direction:Ex(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Xp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function CT(n){let e=ST(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ye(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=kT(w);return T instanceof We&&Um(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(M){return new mu(aa(M.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,sd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,N=w.values||[];return new Ia(N,T)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const T=!w.before,N=w.values||[];return new Ia(N,T)})(t.endAt)),Wk(e,o,u,a,d,"F",f,_)}function vx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=aa(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=aa(t.unaryFilter.field);return Ve.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=aa(t.unaryFilter.field);return Ve.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=aa(t.unaryFilter.field);return Ve.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ve.create(aa(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((r=>kT(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(n):fe(30097,{filter:n})}function Ex(n){return hx[n]}function wx(n){return dx[n]}function Ix(n){return fx[n]}function oa(n){return{fieldPath:n.canonicalString()}}function aa(n){return ot.fromServerFormat(n.fieldPath)}function xT(n){return n instanceof Ve?(function(t){if(t.op==="=="){if(Fv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NAN"}};if(Mv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NOT_NAN"}};if(Mv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oa(t.field),op:wx(t.op),value:t.value}}})(n):n instanceof We?(function(t){const r=t.getFilters().map((o=>xT(o)));return r.length===1?r[0]:{compositeFilter:{op:Ix(t.op),filters:r}}})(n):fe(54877,{filter:n})}function Tx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function NT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Hr{constructor(e,t,r,o,a=Ee.min(),u=Ee.min(),d=yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DT{constructor(e){this.gt=e}}function Sx(n,e){let t;if(e.document)t=gx(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=oe.fromSegments(e.noDocument.path),o=Xs(e.noDocument.readTime);t=lt.newNoDocument(r,o),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return fe(56709);{const r=oe.fromSegments(e.unknownDocument.path),o=Xs(e.unknownDocument.version);t=lt.newUnknownDocument(r,o)}}return e.readTime&&t.setReadTime((function(o){const a=new $e(o[0],o[1]);return Ee.fromTimestamp(a)})(e.readTime)),t}function tE(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(a,u){return{name:jh(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Pa(a,u.version.toTimestamp()),createTime:Pa(a,u.createTime.toTimestamp())}})(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Qs(e.version)};else{if(!e.isUnknownDocument())return fe(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Qs(e.version)}}return r}function zh(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Qs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xs(n){const e=new $e(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function Vs(n,e){const t=(e.baseMutations||[]).map((a=>Zp(n.gt,a)));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map((a=>Zp(n.gt,a))),o=$e.fromMillis(e.localWriteTimeMs);return new Bm(e.batchId,o,t,r)}function zl(n){const e=Xs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Xs(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=(function(a){return a.documents!==void 0})(n.query)?(function(a){const u=a.documents.length;return ye(u===1,1966,{count:u}),Ln(ku(ST(a.documents[0])))})(n.query):(function(a){return Ln(CT(a))})(n.query),new Hr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,yt.fromBase64String(n.resumeToken))}function VT(n,e){const t=Qs(e.snapshotVersion),r=Qs(e.lastLimboFreeSnapshotVersion);let o;o=Fh(e.target)?RT(n.gt,e.target):PT(n.gt,e.target).Vt;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Gs(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:o}}function bT(n){const e=CT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qp(e,e.limit,"L"):e}function mp(n,e){return new $m(e.largestBatchId,Zp(n.gt,e.overlayMutation))}function nE(n,e){const t=e.path.lastSegment();return[n,Gt(e.path.popLast()),t]}function rE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Qs(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Ax{getBundleMetadata(e,t){return iE(e).get(t).next((r=>{if(r)return(function(a){return{id:a.bundleId,createTime:Xs(a.createTime),version:a.version}})(r)}))}saveBundleMetadata(e,t){return iE(e).put((function(o){return{bundleId:o.id,createTime:Qs(tn(o.createTime)),version:o.version}})(t))}getNamedQuery(e,t){return sE(e).get(t).next((r=>{if(r)return(function(a){return{name:a.name,query:bT(a.bundledQuery),readTime:Xs(a.readTime)}})(r)}))}saveNamedQuery(e,t){return sE(e).put((function(o){return{name:o.name,readTime:Qs(tn(o.readTime)),bundledQuery:o.bundledQuery}})(t))}}function iE(n){return At(n,od)}function sE(n){return At(n,ad)}/**
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
 */class gd{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new gd(e,r)}getOverlay(e,t){return Nl(e).get(nE(this.userId,t)).next((r=>r?mp(this.serializer,r):null))}getOverlays(e,t){const r=gr();return U.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){const o=[];return r.forEach(((a,u)=>{const d=new $m(t,u);o.push(this.wt(e,d))})),U.waitFor(o)}removeOverlaysForBatchId(e,t,r){const o=new Set;t.forEach((u=>o.add(Gt(u.getCollectionPath()))));const a=[];return o.forEach((u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(Nl(e).Y(Bp,d))})),U.waitFor(a)}getOverlaysForCollection(e,t,r){const o=gr(),a=Gt(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return Nl(e).j(Bp,u).next((d=>{for(const f of d){const _=mp(this.serializer,f);o.set(_.getKey(),_)}return o}))}getOverlaysForCollectionGroup(e,t,r,o){const a=gr();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nl(e).X({index:OI,range:d},((f,_,v)=>{const w=mp(this.serializer,_);a.size()<o||w.largestBatchId===u?(a.set(w.getKey(),w),u=w.largestBatchId):v.done()})).next((()=>a))}wt(e,t){return Nl(e).put((function(o,a,u){const[d,f,_]=nE(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:_,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Bh(o.gt,u.mutation)}})(this.serializer,this.userId,t))}}function Nl(n){return At(n,ld)}/**
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
 */class Rx{St(e){return At(e,bm)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?yt.fromUint8Array(r):yt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class bs{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(tt(e.integerValue));else if("doubleValue"in e){const r=tt(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),au(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Jr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Zr(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?HI(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):cd(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):fe(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const o of Object.keys(r))this.xt(o,t),this.Dt(r[o],t)}Lt(e,t){var r,o;const a=e.fields||{};this.Ct(t,53);const u=Ea,d=((o=(r=a[u].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.length)||0;this.Ct(t,15),t.Ft(tt(d)),this.xt(u,t),this.Dt(a[u],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const o of r)this.Dt(o,t)}Bt(e,t){this.Ct(t,37),oe.fromName(e).path.forEach((r=>{this.Ct(t,60),this.$t(r,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}bs.Ut=new bs;/**
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
 */const ea=255;function Px(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function oE(n){const e=64-(function(r){let o=0;for(let a=0;a<8;++a){const u=Px(255&r[a]);if(o+=u,u!==8)break}return o})(n);return Math.ceil(e/8)}class Cx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const o=t.codePointAt(0);this.Wt(240|o>>>18),this.Wt(128|63&o>>>12),this.Wt(128|63&o>>>6),this.Wt(128|63&o)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const o=t.codePointAt(0);this.jt(240|o>>>18),this.jt(128|63&o>>>12),this.jt(128|63&o>>>6),this.jt(128|63&o)}}this.Jt()}Zt(e){const t=this.Xt(e),r=oE(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=255&t[o]}tn(e){const t=this.Xt(e),r=oE(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=~(255&t[o])}nn(){this.rn(ea),this.rn(255)}sn(){this._n(ea),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let o=1;o<t.length;++o)t[o]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===ea?(this.rn(ea),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===ea?(this._n(ea),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}class kx{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class xx{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Dl{constructor(){this.un=new Cx,this.cn=new kx(this.un),this.ln=new xx(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Os{constructor(e,t,r,o){this.Pn=e,this.Tn=t,this.In=r,this.dn=o}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Os(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Ih(this.In),directionalValue:Ih(this.dn),orderedDocumentKey:Ih(t),documentKey:r.path.toArray()}}Rn(e,t,r){const o=this.An(e,t,r);return[o.indexId,o.uid,o.arrayValue,o.directionalValue,o.orderedDocumentKey,o.documentKey]}}function Ci(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=aE(n.In,e.In),t!==0?t:(t=aE(n.dn,e.dn),t!==0?t:oe.comparator(n.Tn,e.Tn)))}function aE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ih(n){return Pw()?(function(t){let r="";for(let o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r})(n):n}function lE(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(n)}class uE{constructor(e){this.Vn=new Ke(((t,r)=>ot.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(ye(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Fp(e);if(t!==void 0&&!this.yn(t))return!1;const r=xs(e);let o=new Set,a=0,u=0;for(;a<r.length&&this.yn(r[a]);++a)o=o.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.Vn.size>0){const d=this.Vn.getIterator().getNext();if(!o.has(d.field.canonicalString())){const f=r[a];if(!this.wn(d,f)||!this.Sn(this.mn[u++],f))return!1}++a}for(;a<r.length;++a){const d=r[a];if(u>=this.mn.length||!this.Sn(this.mn[u++],d))return!1}return!0}bn(){if(this.gn)return null;let e=new Ke(ot.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ph(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ph(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ph(r.field,r.dir==="asc"?0:1)));return new Vh(Vh.UNKNOWN_ID,this.collectionId,t,ou.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function OT(n){var e,t;if(ye(n instanceof Ve||n instanceof We,20012),n instanceof Ve){if(n instanceof nT){const o=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((a=>Ve.create(n.field,"==",a))))||[];return We.create(o,"or")}return n}const r=n.filters.map((o=>OT(o)));return We.create(r,n.op)}function Nx(n){if(n.getFilters().length===0)return[];const e=nm(OT(n));return ye(LT(e),7391),em(e)||tm(e)?[e]:e.getFilters()}function em(n){return n instanceof Ve}function tm(n){return n instanceof We&&Um(n)}function LT(n){return em(n)||tm(n)||(function(t){if(t instanceof We&&Wp(t)){for(const r of t.getFilters())if(!em(r)&&!tm(r))return!1;return!0}return!1})(n)}function nm(n){if(ye(n instanceof Ve||n instanceof We,34018),n instanceof Ve)return n;if(n.filters.length===1)return nm(n.filters[0]);const e=n.filters.map((r=>nm(r)));let t=We.create(e,n.op);return t=$h(t),LT(t)?t:(ye(t instanceof We,64498),ye(Ta(t),40251),ye(t.filters.length>1,57927),t.filters.reduce(((r,o)=>Km(r,o))))}function Km(n,e){let t;return ye(n instanceof Ve||n instanceof We,38388),ye(e instanceof Ve||e instanceof We,25473),t=n instanceof Ve?e instanceof Ve?(function(o,a){return We.create([o,a],"and")})(n,e):cE(n,e):e instanceof Ve?cE(e,n):(function(o,a){if(ye(o.filters.length>0&&a.filters.length>0,48005),Ta(o)&&Ta(a))return ZI(o,a.getFilters());const u=Wp(o)?o:a,d=Wp(o)?a:o,f=u.filters.map((_=>Km(_,d)));return We.create(f,"or")})(n,e),$h(t)}function cE(n,e){if(Ta(e))return ZI(e,n.getFilters());{const t=e.filters.map((r=>Km(n,r)));return We.create(t,"or")}}function $h(n){if(ye(n instanceof Ve||n instanceof We,11850),n instanceof Ve)return n;const e=n.getFilters();if(e.length===1)return $h(e[0]);if(YI(n))return n;const t=e.map((o=>$h(o))),r=[];return t.forEach((o=>{o instanceof Ve?r.push(o):o instanceof We&&(o.op===n.op?r.push(...o.filters):r.push(o))})),r.length===1?r[0]:We.create(r,n.op)}/**
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
 */class Dx{constructor(){this.Dn=new Hm}addToCollectionParentIndex(e,t){return this.Dn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Tn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Hm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Ke(ze.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Ke(ze.comparator)).toArray()}}/**
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
 */const hE="IndexedDbIndexManager",rh=new Uint8Array(0);class Vx{constructor(e,t){this.databaseId=t,this.vn=new Hm,this.Cn=new ei((r=>Gs(r)),((r,o)=>Cu(r,o))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const a={collectionId:r,parent:Gt(o)};return dE(e).put(a)}return U.resolve()}getCollectionParents(e,t){const r=[],o=IDBKeyRange.bound([t,""],[TI(t),""],!1,!0);return dE(e).j(o).next((a=>{for(const u of a){if(u.collectionId!==t)break;r.push(mr(u.parent))}return r}))}addFieldIndex(e,t){const r=Vl(e),o=(function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map((f=>[f.fieldPath.canonicalString(),f.kind]))}})(t);delete o.indexId;const a=r.add(o);if(t.indexState){const u=na(e);return a.next((d=>{u.put(rE(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return a.next()}deleteFieldIndex(e,t){const r=Vl(e),o=na(e),a=ta(e);return r.delete(t.indexId).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Vl(e),r=ta(e),o=na(e);return t.Y().next((()=>r.Y())).next((()=>o.Y()))}createTargetIndexes(e,t){return U.forEach(this.Fn(t),(r=>this.getIndexType(e,r).next((o=>{if(o===0||o===1){const a=new uE(r).bn();if(a!=null)return this.addFieldIndex(e,a)}}))))}getDocumentsMatchingTarget(e,t){const r=ta(e);let o=!0;const a=new Map;return U.forEach(this.Fn(t),(u=>this.Mn(e,u).next((d=>{o&&(o=!!d),a.set(u,d)})))).next((()=>{if(o){let u=ke();const d=[];return U.forEach(a,((f,_)=>{J(hE,`Using index ${(function(ee){return`id=${ee.indexId}|cg=${ee.collectionGroup}|f=${ee.fields.map((ae=>`${ae.fieldPath}:${ae.kind}`)).join(",")}`})(f)} to execute ${Gs(t)}`);const v=(function(ee,ae){const we=Fp(ae);if(we===void 0)return null;for(const ge of Uh(ee,we.fieldPath))switch(ge.op){case"array-contains-any":return ge.value.arrayValue.values||[];case"array-contains":return[ge.value]}return null})(_,f),w=(function(ee,ae){const we=new Map;for(const ge of xs(ae))for(const k of Uh(ee,ge.fieldPath))switch(k.op){case"==":case"in":we.set(ge.fieldPath.canonicalString(),k.value);break;case"not-in":case"!=":return we.set(ge.fieldPath.canonicalString(),k.value),Array.from(we.values())}return null})(_,f),T=(function(ee,ae){const we=[];let ge=!0;for(const k of xs(ae)){const S=k.kind===0?$v(ee,k.fieldPath,ee.startAt):qv(ee,k.fieldPath,ee.startAt);we.push(S.value),ge&&(ge=S.inclusive)}return new Ia(we,ge)})(_,f),N=(function(ee,ae){const we=[];let ge=!0;for(const k of xs(ae)){const S=k.kind===0?qv(ee,k.fieldPath,ee.endAt):$v(ee,k.fieldPath,ee.endAt);we.push(S.value),ge&&(ge=S.inclusive)}return new Ia(we,ge)})(_,f),M=this.xn(f,_,T),z=this.xn(f,_,N),V=this.On(f,_,w),re=this.Nn(f.indexId,v,M,T.inclusive,z,N.inclusive,V);return U.forEach(re,(ne=>r.H(ne,t.limit).next((ee=>{ee.forEach((ae=>{const we=oe.fromSegments(ae.documentKey);u.has(we)||(u=u.add(we),d.push(we))}))}))))})).next((()=>d))}return U.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Nx(We.create(e.filters,"and")).map((r=>Hp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,r,o,a,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),_=f/(t!=null?t.length:1),v=[];for(let w=0;w<f;++w){const T=t?this.Bn(t[w/_]):rh,N=this.Ln(e,T,r[w%_],o),M=this.kn(e,T,a[w%_],u),z=d.map((V=>this.Ln(e,T,V,!0)));v.push(...this.createRange(N,M,z))}return v}Ln(e,t,r,o){const a=new Os(e,oe.empty(),t,r);return o?a:a.En()}kn(e,t,r,o){const a=new Os(e,oe.empty(),t,r);return o?a.En():a}Mn(e,t){const r=new uE(t),o=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,o).next((a=>{let u=null;for(const d of a)r.pn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u}))}getIndexType(e,t){let r=2;const o=this.Fn(t);return U.forEach(o,(a=>this.Mn(e,a).next((u=>{u?r!==0&&u.fields.length<(function(f){let _=new Ke(ot.comparator),v=!1;for(const w of f.filters)for(const T of w.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?v=!0:_=_.add(T.field));for(const w of f.orderBy)w.field.isKeyField()||(_=_.add(w.field));return _.size+(v?1:0)})(a)&&(r=1):r=0})))).next((()=>(function(u){return u.limit!==null})(t)&&o.length>1&&r===2?1:r))}qn(e,t){const r=new Dl;for(const o of xs(e)){const a=t.data.field(o.fieldPath);if(a==null)return null;const u=r.hn(o.kind);bs.Ut.bt(a,u)}return r.an()}Bn(e){const t=new Dl;return bs.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new Dl;return bs.Ut.bt(fu(this.databaseId,t),r.hn((function(a){const u=xs(a);return u.length===0?0:u[u.length-1].kind})(e))),r.an()}On(e,t,r){if(r===null)return[];let o=[];o.push(new Dl);let a=0;for(const u of xs(e)){const d=r[a++];for(const f of o)if(this.$n(t,u.fieldPath)&&pu(d))o=this.Un(o,u,d);else{const _=f.hn(u.kind);bs.Ut.bt(d,_)}}return this.Kn(o)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const o=[...e],a=[];for(const u of r.arrayValue.values||[])for(const d of o){const f=new Dl;f.seed(d.an()),bs.Ut.bt(u,f.hn(t.kind)),a.push(f)}return a}$n(e,t){return!!e.filters.find((r=>r instanceof Ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Vl(e),o=na(e);return(t?r.j(jp,IDBKeyRange.bound(t,t)):r.j()).next((a=>{const u=[];return U.forEach(a,(d=>o.get([d.indexId,this.uid]).next((f=>{u.push((function(v,w){const T=w?new ou(w.sequenceNumber,new Tn(Xs(w.readTime),new oe(mr(w.documentKey)),w.largestBatchId)):ou.empty(),N=v.fields.map((([M,z])=>new ph(ot.fromServerFormat(M),z)));return new Vh(v.indexId,v.collectionGroup,N,T)})(d,f))})))).next((()=>u))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,o)=>{const a=r.indexState.sequenceNumber-o.indexState.sequenceNumber;return a!==0?a:Ae(r.collectionGroup,o.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const o=Vl(e),a=na(e);return this.Wn(e).next((u=>o.j(jp,IDBKeyRange.bound(t,t)).next((d=>U.forEach(d,(f=>a.put(rE(f.indexId,this.uid,u,r))))))))}updateIndexEntries(e,t){const r=new Map;return U.forEach(t,((o,a)=>{const u=r.get(o.collectionGroup);return(u?U.resolve(u):this.getFieldIndexes(e,o.collectionGroup)).next((d=>(r.set(o.collectionGroup,d),U.forEach(d,(f=>this.Gn(e,o,f).next((_=>{const v=this.zn(a,f);return _.isEqual(v)?U.resolve():this.jn(e,a,f,_,v)})))))))}))}Jn(e,t,r,o){return ta(e).put(o.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,o){return ta(e).delete(o.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const o=ta(e);let a=new Ke(Ci);return o.X({index:bI,range:IDBKeyRange.only([r.indexId,this.uid,Ih(this.Qn(r,t))])},((u,d)=>{a=a.add(new Os(r.indexId,t,lE(d.arrayValue),lE(d.directionalValue)))})).next((()=>a))}zn(e,t){let r=new Ke(Ci);const o=this.qn(t,e);if(o==null)return r;const a=Fp(t);if(a!=null){const u=e.data.field(a.fieldPath);if(pu(u))for(const d of u.arrayValue.values||[])r=r.add(new Os(t.indexId,e.key,this.Bn(d),o))}else r=r.add(new Os(t.indexId,e.key,rh,o));return r}jn(e,t,r,o,a){J(hE,"Updating index entries for document '%s'",t.key);const u=[];return(function(f,_,v,w,T){const N=f.getIterator(),M=_.getIterator();let z=Zo(N),V=Zo(M);for(;z||V;){let re=!1,ne=!1;if(z&&V){const ee=v(z,V);ee<0?ne=!0:ee>0&&(re=!0)}else z!=null?ne=!0:re=!0;re?(w(V),V=Zo(M)):ne?(T(z),z=Zo(N)):(z=Zo(N),V=Zo(M))}})(o,a,Ci,(d=>{u.push(this.Jn(e,t,r,d))}),(d=>{u.push(this.Hn(e,t,r,d))})),U.waitFor(u)}Wn(e){let t=1;return na(e).X({index:VI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,o,a)=>{a.done(),t=o.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((u,d)=>Ci(u,d))).filter(((u,d,f)=>!d||Ci(u,f[d-1])!==0));const o=[];o.push(e);for(const u of r){const d=Ci(u,e),f=Ci(u,t);if(d===0)o[0]=e.En();else if(d>0&&f<0)o.push(u),o.push(u.En());else if(f>0)break}o.push(t);const a=[];for(let u=0;u<o.length;u+=2){if(this.Yn(o[u],o[u+1]))return[];const d=o[u].Rn(this.uid,rh,oe.empty()),f=o[u+1].Rn(this.uid,rh,oe.empty());a.push(IDBKeyRange.bound(d,f))}return a}Yn(e,t){return Ci(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fE)}getMinOffset(e,t){return U.mapArray(this.Fn(t),(r=>this.Mn(e,r).next((o=>o||fe(44426))))).next(fE)}}function dE(n){return At(n,cu)}function ta(n){return At(n,Ql)}function Vl(n){return At(n,Vm)}function na(n){return At(n,Gl)}function fE(n){ye(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const o=n[r].indexState.offset;xm(o,e)<0&&(e=o),t<o.largestBatchId&&(t=o.largestBatchId)}return new Tn(e.readTime,e.documentKey,t)}/**
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
 */const pE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function FT(n,e,t){const r=n.store(Jn),o=n.store(ga),a=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.X({range:u},((v,w,T)=>(d++,T.delete())));a.push(f.next((()=>{ye(d===1,47070,{batchId:t.batchId})})));const _=[];for(const v of t.mutations){const w=xI(e,v.key.path,t.batchId);a.push(o.delete(w)),_.push(v.key)}return U.waitFor(a).next((()=>_))}function qh(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw fe(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(MT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class _d{constructor(e,t,r,o){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=o,this.Zn={}}static yt(e,t,r,o){ye(e.uid!=="",64387);const a=e.isAuthenticated()?e.uid:"";return new _d(a,t,r,o)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ki(e).X({index:Ls,range:r},((o,a,u)=>{t=!1,u.done()})).next((()=>t))}addMutationBatch(e,t,r,o){const a=la(e),u=ki(e);return u.add({}).next((d=>{ye(typeof d=="number",49019);const f=new Bm(d,t,r,o),_=(function(N,M,z){const V=z.baseMutations.map((ne=>Bh(N.gt,ne))),re=z.mutations.map((ne=>Bh(N.gt,ne)));return{userId:M,batchId:z.batchId,localWriteTimeMs:z.localWriteTime.toMillis(),baseMutations:V,mutations:re}})(this.serializer,this.userId,f),v=[];let w=new Ke(((T,N)=>Ae(T.canonicalString(),N.canonicalString())));for(const T of o){const N=xI(this.userId,T.key.path,d);w=w.add(T.key.path.popLast()),v.push(u.put(_)),v.push(a.put(N,uk))}return w.forEach((T=>{v.push(this.indexManager.addToCollectionParentIndex(e,T))})),e.addOnCommittedListener((()=>{this.Zn[d]=f.keys()})),U.waitFor(v).next((()=>f))}))}lookupMutationBatch(e,t){return ki(e).get(t).next((r=>r?(ye(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Vs(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?U.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const o=r.keys();return this.Zn[t]=o,o}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return ki(e).X({index:Ls,range:o},((u,d,f)=>{d.userId===this.userId&&(ye(d.batchId>=r,47524,{er:r}),a=Vs(this.serializer,d)),f.done()})).next((()=>a))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Fs;return ki(e).X({index:Ls,range:t,reverse:!0},((o,a,u)=>{r=a.batchId,u.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fs],[this.userId,Number.POSITIVE_INFINITY]);return ki(e).j(Ls,t).next((r=>r.map((o=>Vs(this.serializer,o)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=mh(this.userId,t.path),o=IDBKeyRange.lowerBound(r),a=[];return la(e).X({range:o},((u,d,f)=>{const[_,v,w]=u,T=mr(v);if(_===this.userId&&t.path.isEqual(T))return ki(e).get(w).next((N=>{if(!N)throw fe(61480,{tr:u,batchId:w});ye(N.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:N.userId,batchId:w}),a.push(Vs(this.serializer,N))}));f.done()})).next((()=>a))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(Ae);const o=[];return t.forEach((a=>{const u=mh(this.userId,a.path),d=IDBKeyRange.lowerBound(u),f=la(e).X({range:d},((_,v,w)=>{const[T,N,M]=_,z=mr(N);T===this.userId&&a.path.isEqual(z)?r=r.add(M):w.done()}));o.push(f)})),U.waitFor(o).next((()=>this.nr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1,a=mh(this.userId,r),u=IDBKeyRange.lowerBound(a);let d=new Ke(Ae);return la(e).X({range:u},((f,_,v)=>{const[w,T,N]=f,M=mr(T);w===this.userId&&r.isPrefixOf(M)?M.length===o&&(d=d.add(N)):v.done()})).next((()=>this.nr(e,d)))}nr(e,t){const r=[],o=[];return t.forEach((a=>{o.push(ki(e).get(a).next((u=>{if(u===null)throw fe(35274,{batchId:a});ye(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:a}),r.push(Vs(this.serializer,u))})))})),U.waitFor(o).next((()=>r))}removeMutationBatch(e,t){return FT(e.ce,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),U.forEach(r,(o=>this.referenceDelegate.markPotentiallyOrphaned(e,o))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return U.resolve();const r=IDBKeyRange.lowerBound((function(u){return[u]})(this.userId)),o=[];return la(e).X({range:r},((a,u,d)=>{if(a[0]===this.userId){const f=mr(a[1]);o.push(f)}else d.done()})).next((()=>{ye(o.length===0,56720,{ir:o.map((a=>a.canonicalString()))})}))}))}containsKey(e,t){return UT(e,this.userId,t)}sr(e){return jT(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fs,lastStreamToken:""}))}}function UT(n,e,t){const r=mh(e,t.path),o=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return la(n).X({range:a,Z:!0},((d,f,_)=>{const[v,w,T]=d;v===e&&w===o&&(u=!0),_.done()})).next((()=>u))}function ki(n){return At(n,Jn)}function la(n){return At(n,ga)}function jT(n){return At(n,lu)}/**
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
 */class Ys{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ys(0)}static ur(){return new Ys(-1)}}/**
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
 */class bx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const r=new Ys(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>Ee.fromTimestamp(new $e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.cr(e).next((o=>(o.highestListenSequenceNumber=t,r&&(o.lastRemoteSnapshotVersion=r.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),this.lr(e,o))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>ra(e).delete(t.targetId))).next((()=>this.cr(e))).next((r=>(ye(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r))))}removeTargets(e,t,r){let o=0;const a=[];return ra(e).X(((u,d)=>{const f=zl(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(o++,a.push(this.removeTargetData(e,f)))})).next((()=>U.waitFor(a))).next((()=>o))}forEachTarget(e,t){return ra(e).X(((r,o)=>{const a=zl(o);t(a)}))}cr(e){return mE(e).get(Lh).next((t=>(ye(t!==null,2888),t)))}lr(e,t){return mE(e).put(Lh,t)}hr(e,t){return ra(e).put(VT(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Gs(t),o=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return ra(e).X({range:o,index:DI},((u,d,f)=>{const _=zl(d);Cu(t,_.target)&&(a=_,f.done())})).next((()=>a))}addMatchingKeys(e,t,r){const o=[],a=Oi(e);return t.forEach((u=>{const d=Gt(u.path);o.push(a.put({targetId:r,path:d})),o.push(this.referenceDelegate.addReference(e,r,u))})),U.waitFor(o)}removeMatchingKeys(e,t,r){const o=Oi(e);return U.forEach(t,(a=>{const u=Gt(a.path);return U.waitFor([o.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])}))}removeMatchingKeysForTargetId(e,t){const r=Oi(e),o=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(o)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),o=Oi(e);let a=ke();return o.X({range:r,Z:!0},((u,d,f)=>{const _=mr(u[1]),v=new oe(_);a=a.add(v)})).next((()=>a))}containsKey(e,t){const r=Gt(t.path),o=IDBKeyRange.bound([r],[TI(r)],!1,!0);let a=0;return Oi(e).X({index:Dm,Z:!0,range:o},(([u,d],f,_)=>{u!==0&&(a++,_.done())})).next((()=>a>0))}Et(e,t){return ra(e).get(t).next((r=>r?zl(r):null))}}function ra(n){return At(n,_a)}function mE(n){return At(n,Us)}function Oi(n){return At(n,ya)}/**
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
 */const gE="LruGarbageCollector",Ox=1048576;function _E([n,e],[t,r]){const o=Ae(n,t);return o===0?Ae(e,r):o}class Lx{constructor(e){this.Tr=e,this.buffer=new Ke(_E),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_E(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){J(gE,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ji(t)?J(gE,"Ignoring IndexedDB error during garbage collection: ",t):await no(t)}await this.Rr(3e5)}))}}class Mx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return U.resolve(On.ue);const r=new Lx(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(pE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pE):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,f,_;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),ia()<=De.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(_-f)+`ms
Total Duration: ${_-v}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function zT(n,e){return new Mx(n,e)}/**
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
 */class Fx{constructor(e,t){this.db=e,this.garbageCollector=zT(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((r,o)=>t(o)))}addReference(e,t,r){return ih(e,r)}removeReference(e,t,r){return ih(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ih(e,t)}Sr(e,t){return(function(o,a){let u=!1;return jT(o).ee((d=>UT(o,d,a).next((f=>(f&&(u=!0),U.resolve(!f)))))).next((()=>u))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[];let a=0;return this.wr(e,((u,d)=>{if(d<=t){const f=this.Sr(e,u).next((_=>{if(!_)return a++,r.getEntry(e,u).next((()=>(r.removeEntry(u,Ee.min()),Oi(e).delete((function(w){return[0,Gt(w.path)]})(u)))))}));o.push(f)}})).next((()=>U.waitFor(o))).next((()=>r.apply(e))).next((()=>a))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ih(e,t)}wr(e,t){const r=Oi(e);let o,a=On.ue;return r.X({index:Dm},(([u,d],{path:f,sequenceNumber:_})=>{u===0?(a!==On.ue&&t(new oe(mr(o)),a),a=_,o=f):a=On.ue})).next((()=>{a!==On.ue&&t(new oe(mr(o)),a)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ih(n,e){return Oi(n).put((function(r,o){return{targetId:0,path:Gt(r.path),sequenceNumber:o}})(e,n.currentSequenceNumber))}/**
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
 */class $T{constructor(){this.changes=new ei((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ux{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Cs(e).put(r)}removeEntry(e,t,r){return Cs(e).delete((function(a,u){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],zh(u),d[d.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=lt.newInvalidDocument(t);return Cs(e).X({index:gh,range:IDBKeyRange.only(bl(t))},((o,a)=>{r=this.Dr(t,a)})).next((()=>r))}vr(e,t){let r={size:0,document:lt.newInvalidDocument(t)};return Cs(e).X({index:gh,range:IDBKeyRange.only(bl(t))},((o,a)=>{r={document:this.Dr(t,a),size:qh(a)}})).next((()=>r))}getEntries(e,t){let r=In();return this.Cr(e,t,((o,a)=>{const u=this.Dr(o,a);r=r.insert(o,u)})).next((()=>r))}Fr(e,t){let r=In(),o=new nt(oe.comparator);return this.Cr(e,t,((a,u)=>{const d=this.Dr(a,u);r=r.insert(a,d),o=o.insert(a,qh(u))})).next((()=>({documents:r,Mr:o})))}Cr(e,t,r){if(t.isEmpty())return U.resolve();let o=new Ke(EE);t.forEach((f=>o=o.add(f)));const a=IDBKeyRange.bound(bl(o.first()),bl(o.last())),u=o.getIterator();let d=u.getNext();return Cs(e).X({index:gh,range:a},((f,_,v)=>{const w=oe.fromSegments([..._.prefixPath,_.collectionGroup,_.documentId]);for(;d&&EE(d,w)<0;)r(d,null),d=u.getNext();d&&d.isEqual(w)&&(r(d,_),d=u.hasNext()?u.getNext():null),d?v.G(bl(d)):v.done()})).next((()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null}))}getDocumentsMatchingQuery(e,t,r,o,a){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),zh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Cs(e).j(IDBKeyRange.bound(d,f,!0)).next((_=>{a==null||a.incrementDocumentReadCount(_.length);let v=In();for(const w of _){const T=this.Dr(oe.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);T.isFoundDocument()&&(xu(t,T)||o.has(T.key))&&(v=v.insert(T.key,T))}return v}))}getAllFromCollectionGroup(e,t,r,o){let a=In();const u=vE(t,r),d=vE(t,Tn.max());return Cs(e).X({index:NI,range:IDBKeyRange.bound(u,d,!0)},((f,_,v)=>{const w=this.Dr(oe.fromSegments(_.prefixPath.concat(_.collectionGroup,_.documentId)),_);a=a.insert(w.key,w),a.size===o&&v.done()})).next((()=>a))}newChangeBuffer(e){return new jx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return yE(e).get(Up).next((t=>(ye(!!t,20021),t)))}br(e,t){return yE(e).put(Up,t)}Dr(e,t){if(t){const r=Sx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return lt.newInvalidDocument(e)}}function qT(n){return new Ux(n)}class jx extends $T{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new ei((r=>r.toString()),((r,o)=>r.isEqual(o)))}applyChanges(e){const t=[];let r=0,o=new Ke(((a,u)=>Ae(a.canonicalString(),u.canonicalString())));return this.changes.forEach(((a,u)=>{const d=this.Nr.get(a);if(t.push(this.Or.removeEntry(e,a,d.readTime)),u.isValidDocument()){const f=tE(this.Or.serializer,u);o=o.add(a.path.popLast());const _=qh(f);r+=_-d.size,t.push(this.Or.addEntry(e,a,f))}else if(r-=d.size,this.trackRemovals){const f=tE(this.Or.serializer,u.convertToNoDocument(Ee.min()));t.push(this.Or.addEntry(e,a,f))}})),o.forEach((a=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,a))})),t.push(this.Or.updateMetadata(e,r)),U.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:r,Mr:o})=>(o.forEach(((a,u)=>{this.Nr.set(a,{size:u,readTime:r.get(a).readTime})})),r)))}}function yE(n){return At(n,uu)}function Cs(n){return At(n,Oh)}function bl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vE(n,e){const t=e.documentKey.path.toArray();return[n,zh(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function EE(n,e){const t=n.path.toArray(),r=e.path.toArray();let o=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(o=Ae(t[a],r[a]),o)return o;return o=Ae(t.length,r.length),o||(o=Ae(t[t.length-2],r[r.length-2]),o||Ae(t[t.length-1],r[r.length-1]))}/**
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
 */class Bx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class WT{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Zl(r.mutation,o,hn.empty(),$e.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ke()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ke()){const o=gr();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=jl();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=gr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ke())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=In();const u=Jl(),d=(function(){return Jl()})();return t.forEach(((f,_)=>{const v=r.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof ti)?a=a.insert(_.key,_):v!==void 0?(u.set(_.key,v.mutation.getFieldMask()),Zl(v.mutation,_,v.mutation.getFieldMask(),$e.now())):u.set(_.key,hn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((_,v)=>u.set(_,v))),t.forEach(((_,v)=>{var w;return d.set(_,new Bx(v,(w=u.get(_))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Jl();let o=new nt(((u,d)=>u-d)),a=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const _=t.get(f);if(_===null)return;let v=r.get(f)||hn.empty();v=d.applyToLocalView(_,v),r.set(f,v);const w=(o.get(d.batchId)||ke()).add(f);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),_=f.key,v=f.value,w=lT();v.forEach((T=>{if(!a.has(T)){const N=mT(t.get(T),r.get(T));N!==null&&w.set(T,N),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return U.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return oe.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):U.resolve(gr());let d=su,f=a;return u.next((_=>U.forEach(_,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?U.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,f,_,ke()))).next((v=>({batchId:d,changes:aT(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((r=>{let o=jl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=jl();return this.indexManager.getCollectionParents(e,a).next((d=>U.forEach(d,(f=>{const _=(function(w,T){return new Da(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((f,_)=>{const v=_.getKey();u.get(v)===null&&(u=u.insert(v,lt.newInvalidDocument(v)))}));let d=jl();return u.forEach(((f,_)=>{const v=a.get(f);v!==void 0&&Zl(v.mutation,_,hn.empty(),$e.now()),xu(t,_)&&(d=d.insert(f,_))})),d}))}}/**
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
 */class zx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return U.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tn(o.createTime)}})(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:bT(o.bundledQuery),readTime:tn(o.readTime)}})(t)),U.resolve()}}/**
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
 */class $x{constructor(){this.overlays=new nt(oe.comparator),this.kr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gr();return U.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.wt(e,t,a)})),U.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const o=gr(),a=t.length+1,u=new oe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,_=f.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return U.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new nt(((_,v)=>_-v));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let v=a.get(_.largestBatchId);v===null&&(v=gr(),a=a.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const d=gr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((_,v)=>d.set(_,v))),!(d.size()>=o)););return U.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new $m(t,r));let a=this.kr.get(t);a===void 0&&(a=ke(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class qx{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class Gm{constructor(){this.qr=new Ke(Vt.Qr),this.$r=new Ke(Vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Vt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Vt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new oe(new ze([])),r=new Vt(t,e),o=new Vt(t,e+1),a=[];return this.$r.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new oe(new ze([])),r=new Vt(t,e),o=new Vt(t,e+1);let a=ke();return this.$r.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Vt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Vt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return oe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||oe.comparator(e.key,t.key)}}/**
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
 */class Wx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Vt.Qr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Bm(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new Vt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return U.resolve(u)}lookupMutationBatch(e,t){return U.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return U.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Fs:this.er-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Vt(t,0),o=new Vt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],(u=>{const d=this.Zr(u.Hr);a.push(d)})),U.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(Ae);return t.forEach((o=>{const a=new Vt(o,0),u=new Vt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),U.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;oe.isDocumentKey(a)||(a=a.child(""));const u=new Vt(new oe(a),0);let d=new Ke(Ae);return this.Yr.forEachWhile((f=>{const _=f.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(f.Hr)),!0)}),u),U.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ye(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return U.forEach(t.mutations,(o=>{const a=new Vt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Vt(t,0),o=this.Yr.firstAfterOrEqual(r);return U.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Kx{constructor(e){this.ni=e,this.docs=(function(){return new nt(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():lt.newInvalidDocument(o))})),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=In();const u=t.path,d=new oe(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:_,value:{document:v}}=f.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||xm(RI(v),r)<=0||(o.has(v.key)||xu(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return U.resolve(a)}getAllFromCollectionGroup(e,t,r,o){fe(9500)}ri(e,t){return U.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Hx(this)}getSize(e){return U.resolve(this.size)}}class Hx extends $T{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)})),U.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Gx{constructor(e){this.persistence=e,this.ii=new ei((t=>Gs(t)),Cu),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Gm,this.targetCount=0,this._i=Ys.ar()}forEachTarget(e,t){return this.ii.forEach(((r,o)=>t(o))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),U.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ys(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.hr(t),U.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),U.waitFor(a).next((()=>o))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),U.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.oi.containsKey(t))}}/**
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
 */class Qm{constructor(e,t){this.ai={},this.overlays={},this.ui=new On(0),this.ci=!1,this.ci=!0,this.li=new qx,this.referenceDelegate=e(this),this.hi=new Gx(this),this.indexManager=new Dx,this.remoteDocumentCache=(function(o){return new Kx(o)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new DT(t),this.Ti=new zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $x,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Wx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const o=new Qx(this.ui.next());return this.referenceDelegate.Ii(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return U.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Qx extends CI{constructor(e){super(),this.currentSequenceNumber=e}}class yd{constructor(e){this.persistence=e,this.Ai=new Gm,this.Ri=null}static Vi(e){return new yd(e)}get mi(){if(this.Ri)return this.Ri;throw fe(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.mi,(r=>{const o=oe.fromPath(r);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return U.or([()=>U.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Wh{constructor(e,t){this.persistence=e,this.gi=new ei((r=>Gt(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=zT(this,t)}static Vi(e,t){return new Wh(e,t)}Ii(){}di(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return U.forEach(this.gi,((r,o)=>this.Sr(e,r,o).next((a=>a?U.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ee.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),U.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yh(e.data.value)),t}Sr(e,t,r){return U.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return U.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xx{constructor(e){this.serializer=e}q(e,t,r,o){const a=new id("createOrUpgrade",t);r<1&&o>=1&&((function(f){f.createObjectStore(Pu)})(e),(function(f){f.createObjectStore(lu,{keyPath:lk}),f.createObjectStore(Jn,{keyPath:Nv,autoIncrement:!0}).createIndex(Ls,Dv,{unique:!0}),f.createObjectStore(ga)})(e),wE(e),(function(f){f.createObjectStore(Ns)})(e));let u=U.resolve();return r<3&&o>=3&&(r!==0&&((function(f){f.deleteObjectStore(ya),f.deleteObjectStore(_a),f.deleteObjectStore(Us)})(e),wE(e)),u=u.next((()=>(function(f){const _=f.store(Us),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return _.put(Lh,v)})(a)))),r<4&&o>=4&&(r!==0&&(u=u.next((()=>(function(f,_){return _.store(Jn).j().next((w=>{f.deleteObjectStore(Jn),f.createObjectStore(Jn,{keyPath:Nv,autoIncrement:!0}).createIndex(Ls,Dv,{unique:!0});const T=_.store(Jn),N=w.map((M=>T.put(M)));return U.waitFor(N)}))})(e,a)))),u=u.next((()=>{(function(f){f.createObjectStore(va,{keyPath:_k})})(e)}))),r<5&&o>=5&&(u=u.next((()=>this.pi(a)))),r<6&&o>=6&&(u=u.next((()=>((function(f){f.createObjectStore(uu)})(e),this.yi(a))))),r<7&&o>=7&&(u=u.next((()=>this.wi(a)))),r<8&&o>=8&&(u=u.next((()=>this.Si(e,a)))),r<9&&o>=9&&(u=u.next((()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&o>=10&&(u=u.next((()=>this.bi(a)))),r<11&&o>=11&&(u=u.next((()=>{(function(f){f.createObjectStore(od,{keyPath:yk})})(e),(function(f){f.createObjectStore(ad,{keyPath:vk})})(e)}))),r<12&&o>=12&&(u=u.next((()=>{(function(f){const _=f.createObjectStore(ld,{keyPath:Rk});_.createIndex(Bp,Pk,{unique:!1}),_.createIndex(OI,Ck,{unique:!1})})(e)}))),r<13&&o>=13&&(u=u.next((()=>(function(f){const _=f.createObjectStore(Oh,{keyPath:ck});_.createIndex(gh,hk),_.createIndex(NI,dk)})(e))).next((()=>this.Di(e,a))).next((()=>e.deleteObjectStore(Ns)))),r<14&&o>=14&&(u=u.next((()=>this.Ci(e,a)))),r<15&&o>=15&&(u=u.next((()=>(function(f){f.createObjectStore(Vm,{keyPath:Ek,autoIncrement:!0}).createIndex(jp,wk,{unique:!1}),f.createObjectStore(Gl,{keyPath:Ik}).createIndex(VI,Tk,{unique:!1}),f.createObjectStore(Ql,{keyPath:Sk}).createIndex(bI,Ak,{unique:!1})})(e)))),r<16&&o>=16&&(u=u.next((()=>{t.objectStore(Gl).clear()})).next((()=>{t.objectStore(Ql).clear()}))),r<17&&o>=17&&(u=u.next((()=>{(function(f){f.createObjectStore(bm,{keyPath:kk})})(e)}))),r<18&&o>=18&&Pw()&&(u=u.next((()=>{t.objectStore(Gl).clear()})).next((()=>{t.objectStore(Ql).clear()}))),u}yi(e){let t=0;return e.store(Ns).X(((r,o)=>{t+=qh(o)})).next((()=>{const r={byteSize:t};return e.store(uu).put(Up,r)}))}pi(e){const t=e.store(lu),r=e.store(Jn);return t.j().next((o=>U.forEach(o,(a=>{const u=IDBKeyRange.bound([a.userId,Fs],[a.userId,a.lastAcknowledgedBatchId]);return r.j(Ls,u).next((d=>U.forEach(d,(f=>{ye(f.userId===a.userId,18650,"Cannot process batch from unexpected user",{batchId:f.batchId});const _=Vs(this.serializer,f);return FT(e,a.userId,_).next((()=>{}))}))))}))))}wi(e){const t=e.store(ya),r=e.store(Ns);return e.store(Us).get(Lh).next((o=>{const a=[];return r.X(((u,d)=>{const f=new ze(u),_=(function(w){return[0,Gt(w)]})(f);a.push(t.get(_).next((v=>v?U.resolve():(w=>t.put({targetId:0,path:Gt(w),sequenceNumber:o.highestListenSequenceNumber}))(f))))})).next((()=>U.waitFor(a)))}))}Si(e,t){e.createObjectStore(cu,{keyPath:gk});const r=t.store(cu),o=new Hm,a=u=>{if(o.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:Gt(f)})}};return t.store(Ns).X({Z:!0},((u,d)=>{const f=new ze(u);return a(f.popLast())})).next((()=>t.store(ga).X({Z:!0},(([u,d,f],_)=>{const v=mr(d);return a(v.popLast())}))))}bi(e){const t=e.store(_a);return t.X(((r,o)=>{const a=zl(o),u=VT(this.serializer,a);return t.put(u)}))}Di(e,t){const r=t.store(Ns),o=[];return r.X(((a,u)=>{const d=t.store(Oh),f=(function(w){return w.document?new oe(ze.fromString(w.document.name).popFirst(5)):w.noDocument?oe.fromSegments(w.noDocument.path):w.unknownDocument?oe.fromSegments(w.unknownDocument.path):fe(36783)})(u).path.toArray(),_={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};o.push(d.put(_))})).next((()=>U.waitFor(o)))}Ci(e,t){const r=t.store(Jn),o=qT(this.serializer),a=new Qm(yd.Vi,this.serializer.gt);return r.j().next((u=>{const d=new Map;return u.forEach((f=>{var _;let v=(_=d.get(f.userId))!==null&&_!==void 0?_:ke();Vs(this.serializer,f).keys().forEach((w=>v=v.add(w))),d.set(f.userId,v)})),U.forEach(d,((f,_)=>{const v=new Ut(_),w=gd.yt(this.serializer,v),T=a.getIndexManager(v),N=_d.yt(v,this.serializer,T,a.referenceDelegate);return new WT(o,N,w,T).recalculateAndSaveOverlaysForDocumentKeys(new zp(t,On.ue),f).next()}))}))}}function wE(n){n.createObjectStore(ya,{keyPath:pk}).createIndex(Dm,mk,{unique:!0}),n.createObjectStore(_a,{keyPath:"targetId"}).createIndex(DI,fk,{unique:!0}),n.createObjectStore(Us)}const xi="IndexedDbPersistence",gp=18e5,_p=5e3,yp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Yx="main";class Xm{constructor(e,t,r,o,a,u,d,f,_,v,w=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=a,this.window=u,this.document=d,this.Mi=_,this.xi=v,this.Oi=w,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=T=>Promise.resolve(),!Xm.C())throw new se(W.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Fx(this,o),this.Qi=t+Yx,this.serializer=new DT(f),this.$i=new Bi(this.Qi,this.Oi,new Xx(this.serializer)),this.li=new Rx,this.hi=new bx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qT(this.serializer),this.Ti=new Ax,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,v===!1&&Zt(xi,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new se(W.FAILED_PRECONDITION,yp);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new On(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>sh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Ji(e))return J(xi,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return J(xi,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return Ol(e).get(Jo).next((t=>U.resolve(this.Xi(t))))}es(e){return sh(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,gp)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=At(t,va);return r.j().next((o=>{const a=this.rs(o,gp),u=o.filter((d=>a.indexOf(d)===-1));return U.forEach(u,(d=>r.delete(d.clientId))).next((()=>u))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?U.resolve(!0):Ol(e).get(Jo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,_p)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new se(W.FAILED_PRECONDITION,yp);return!1}}return!(!this.networkEnabled||!this.inForeground)||sh(e).j().next((r=>this.rs(r,_p).find((o=>{if(this.clientId!==o.clientId){const a=!this.networkEnabled&&o.networkEnabled,u=!this.inForeground&&o.inForeground,d=this.networkEnabled===o.networkEnabled;if(a||u&&d)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&J(xi,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Pu,va],(e=>{const t=new zp(e,On.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>sh(e).j().next((t=>this.rs(t,gp).map((r=>r.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return _d.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Vx(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return gd.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){J(xi,"Starting transaction:",e);const o=t==="readonly"?"readonly":"readwrite",a=(function(f){return f===18?Dk:f===17?UI:f===16?Nk:f===15?Om:f===14?FI:f===13?MI:f===12?xk:f===11?LI:void fe(60245)})(this.Oi);let u;return this.$i.runTransaction(e,o,a,(d=>(u=new zp(d,this.ui?this.ui.next():On.ue),t==="readwrite-primary"?this.Ji(u).next((f=>!!f||this.Hi(u))).next((f=>{if(!f)throw Zt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new se(W.FAILED_PRECONDITION,PI);return r(u)})).next((f=>this.Zi(u).next((()=>f)))):this.Ts(u).next((()=>r(u)))))).then((d=>(u.raiseOnCommittedEvent(),d)))}Ts(e){return Ol(e).get(Jo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,_p)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new se(W.FAILED_PRECONDITION,yp)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ol(e).put(Jo,t)}static C(){return Bi.C()}Yi(e){const t=Ol(e);return t.get(Jo).next((r=>this.Xi(r)?(J(xi,"Releasing primary lease."),t.delete(Jo)):U.resolve()))}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Zt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Rw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return J(xi,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Zt(xi,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Zt("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ol(n){return At(n,Pu)}function sh(n){return At(n,va)}function Jx(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Ym{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=ke(),o=ke();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Ym(e,t.fromCache,r,o)}}/**
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
 */class Zx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KT{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Rw()?8:kI(St())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Zx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(ia()<=De.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",sa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(ia()<=De.DEBUG&&J("QueryEngine","Query:",sa(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(ia()<=De.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",sa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):U.resolve())}ps(e,t){if(Wv(t))return U.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qp(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=ke(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const _=this.bs(t,d);return this.Ds(t,_,u,f.readTime)?this.ps(e,Qp(t,null,"F")):this.vs(e,_,t,f)}))))})))))}ys(e,t,r,o){return Wv(t)||o.isEqual(Ee.min())?U.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?U.resolve(null):(ia()<=De.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),sa(t)),this.vs(e,u,t,tk(o,su)).next((d=>d)))}))}bs(e,t){let r=new Ke(sT(e));return t.forEach(((o,a)=>{xu(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return ia()<=De.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",sa(t)),this.gs.getDocumentsMatchingQuery(e,t,Tn.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Jm="LocalStore",eN=3e8;class tN{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Ae),this.Ms=new ei((a=>Gs(a)),Cu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WT(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function HT(n,e,t,r){return new tN(n,e,t,r)}async function GT(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=ke();for(const _ of o){u.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}for(const _ of a){d.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((_=>({Bs:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function nN(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,_,v){const w=_.batch,T=w.keys();let N=U.resolve();return T.forEach((M=>{N=N.next((()=>v.getEntry(f,M))).next((z=>{const V=_.docVersions.get(M);ye(V!==null,48541),z.version.compareTo(V)<0&&(w.applyToRemoteDocument(z,_),z.isValidDocument()&&(z.setReadTime(_.commitVersion),v.addEntry(z)))}))})),N.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=ke();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(f=f.add(d.batch.mutations[_].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function QT(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function rN(n,e){const t=Pe(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let N=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(yt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):v.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(v.resumeToken,r)),o=o.insert(w,N),(function(z,V,re){return z.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=eN?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(T,N,v)&&d.push(t.hi.updateTargetData(a,N))}));let f=In(),_=ke();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(iN(a,u,e.documentUpdates).next((v=>{f=v.Ls,_=v.ks}))),!r.isEqual(Ee.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return U.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,_))).next((()=>f))})).then((a=>(t.Fs=o,a)))}function iN(n,e,t){let r=ke(),o=ke();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=In();return t.forEach(((d,f)=>{const _=a.get(d);f.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Ee.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!_.isValidDocument()||f.version.compareTo(_.version)>0||f.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):J(Jm,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",f.version)})),{Ls:u,ks:o}}))}function sN(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function oN(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.hi.getTargetData(r,e).next((a=>a?(o=a,U.resolve(o)):t.hi.allocateTargetId(r).next((u=>(o=new Hr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function rm(n,e,t){const r=Pe(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Ji(u))throw u;J(Jm,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function IE(n,e,t){const r=Pe(n);let o=Ee.min(),a=ke();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,_,v){const w=Pe(f),T=w.Ms.get(v);return T!==void 0?U.resolve(w.Fs.get(T)):w.hi.getTargetData(_,v)})(r,u,Ln(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Ee.min(),t?a:ke()))).next((d=>(aN(r,Hk(e),d),{documents:d,qs:a})))))}function aN(n,e,t){let r=n.xs.get(e)||Ee.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class TE{constructor(){this.activeTargetIds=Zk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XT{constructor(){this.Fo=new TE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new TE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lN{xo(e){}shutdown(){}}/**
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
 */const SE="ConnectivityMonitor";class AE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(SE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){J(SE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oh=null;function im(){return oh===null?oh=(function(){return 268435456+Math.round(2147483648*Math.random())})():oh++,"0x"+oh.toString(16)}/**
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
 */const vp="RestConnection",uN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Mh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=im(),d=this.Go(e,t.toUriEncodedString());J(vp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:_}=new URL(d),v=Zs(_);return this.jo(e,d,f,r,v).then((w=>(J(vp,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ir(vp,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Na})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const r=uN[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class hN{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Wt="WebChannelConnection";class dN extends cN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=im();return new Promise(((d,f)=>{const _=new mI;_.setWithCredentials(!0),_.listenOnce(gI.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case fh.NO_ERROR:const w=_.getResponseJson();J(Wt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case fh.TIMEOUT:J(Wt,`RPC '${e}' ${u} timed out`),f(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const T=_.getStatus();if(J(Wt,`RPC '${e}' ${u} failed with status:`,T,"response text:",_.getResponseText()),T>0){let N=_.getResponseJson();Array.isArray(N)&&(N=N[0]);const M=N==null?void 0:N.error;if(M&&M.status&&M.message){const z=(function(re){const ne=re.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ne)>=0?ne:W.UNKNOWN})(M.status);f(new se(z,M.message))}else f(new se(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else f(new se(W.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{c_:e,streamId:u,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{J(Wt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);J(Wt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",v,r,15)}))}P_(e,t,r){const o=im(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=vI(),d=yI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(f.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");J(Wt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,N=!1;const M=new hN({Ho:V=>{N?J(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(T||(J(Wt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),J(Wt,`RPC '${e}' stream ${o} sending:`,V),w.send(V))},Yo:()=>w.close()}),z=(V,re,ne)=>{V.listen(re,(ee=>{try{ne(ee)}catch(ae){setTimeout((()=>{throw ae}),0)}}))};return z(w,Ul.EventType.OPEN,(()=>{N||(J(Wt,`RPC '${e}' stream ${o} transport opened.`),M.s_())})),z(w,Ul.EventType.CLOSE,(()=>{N||(N=!0,J(Wt,`RPC '${e}' stream ${o} transport closed`),M.__(),this.I_(w))})),z(w,Ul.EventType.ERROR,(V=>{N||(N=!0,Ir(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),M.__(new se(W.UNAVAILABLE,"The operation could not be completed")))})),z(w,Ul.EventType.MESSAGE,(V=>{var re;if(!N){const ne=V.data[0];ye(!!ne,16349);const ee=ne,ae=(ee==null?void 0:ee.error)||((re=ee[0])===null||re===void 0?void 0:re.error);if(ae){J(Wt,`RPC '${e}' stream ${o} received error:`,ae);const we=ae.status;let ge=(function(P){const x=pt[P];if(x!==void 0)return yT(x)})(we),k=ae.message;ge===void 0&&(ge=W.INTERNAL,k="Unknown error status: "+we+" with message "+ae.message),N=!0,M.__(new se(ge,k)),w.close()}else J(Wt,`RPC '${e}' stream ${o} received:`,ne),M.a_(ne)}})),z(d,_I.STAT_EVENT,(V=>{V.stat===Lp.PROXY?J(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Lp.NOPROXY&&J(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
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
 */function fN(){return typeof window<"u"?window:null}function Th(){return typeof document<"u"?document:null}/**
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
 */function vd(n){return new px(n,!0)}/**
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
 */class YT{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&J("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const RE="PersistentStream";class JT{constructor(e,t,r,o,a,u,d,f){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new YT(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.b_===t&&this.W_(r,o)}),(r=>{e((()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{r((()=>this.G_(o)))})),this.stream.onMessage((o=>{r((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return J(RE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(J(RE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pN extends JT{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=_x(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ee.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?tn(u.readTime):Ee.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Jp(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Fh(f)?{documents:RT(a,f)}:{query:PT(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=wT(a,u.resumeToken);const _=Xp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=Pa(a,u.snapshotVersion.toTimestamp());const _=Xp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=vx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Jp(this.serializer),t.removeTarget=e,this.k_(t)}}class mN extends JT{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=yx(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Jp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Bh(this.serializer,r)))};this.k_(t)}}/**
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
 */class gN{}class _N extends gN{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Yp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(W.UNKNOWN,a.toString())}))}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Yp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(W.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class yN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zt(t),this._a=!1):J("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Js="RemoteStore";class vN{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{ro(this)&&(J(Js,"Restarting streams for network reachability change."),await(async function(f){const _=Pe(f);_.Ia.add(4),await Du(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Ed(_)})(this))}))})),this.Aa=new yN(r,o)}}async function Ed(n){if(ro(n))for(const e of n.da)await e(!0)}async function Du(n){for(const e of n.da)await e(!1)}function ZT(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ng(t)?tg(t):ba(t).x_()&&eg(t,e))}function Zm(n,e){const t=Pe(n),r=ba(t);t.Ta.delete(e),r.x_()&&e0(t,e),t.Ta.size===0&&(r.x_()?r.B_():ro(t)&&t.Aa.set("Unknown"))}function eg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ba(n).H_(e)}function e0(n,e){n.Ra.$e(e),ba(n).Y_(e)}function tg(n){n.Ra=new cx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ba(n).start(),n.Aa.aa()}function ng(n){return ro(n)&&!ba(n).M_()&&n.Ta.size>0}function ro(n){return Pe(n).Ia.size===0}function t0(n){n.Ra=void 0}async function EN(n){n.Aa.set("Online")}async function wN(n){n.Ta.forEach(((e,t)=>{eg(n,e)}))}async function IN(n,e){t0(n),ng(n)?(n.Aa.la(e),tg(n)):n.Aa.set("Unknown")}async function TN(n,e,t){if(n.Aa.set("Online"),e instanceof ET&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(r){J(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kh(n,r)}else if(e instanceof wh?n.Ra.Ye(e):e instanceof vT?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ee.min()))try{const r=await QT(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,_)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(_);v&&a.Ta.set(_,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,_)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(yt.EMPTY_BYTE_STRING,v.snapshotVersion)),e0(a,f);const w=new Hr(v.target,f,_,v.sequenceNumber);eg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){J(Js,"Failed to raise snapshot:",r),await Kh(n,r)}}async function Kh(n,e,t){if(!Ji(e))throw e;n.Ia.add(1),await Du(n),n.Aa.set("Offline"),t||(t=()=>QT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{J(Js,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ed(n)}))}function n0(n,e){return e().catch((t=>Kh(n,t,e)))}async function Vu(n){const e=Pe(n),t=Ki(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fs;for(;SN(e);)try{const o=await sN(e.localStore,r);if(o===null){e.Pa.length===0&&t.B_();break}r=o.batchId,AN(e,o)}catch(o){await Kh(e,o)}r0(e)&&i0(e)}function SN(n){return ro(n)&&n.Pa.length<10}function AN(n,e){n.Pa.push(e);const t=Ki(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function r0(n){return ro(n)&&!Ki(n).M_()&&n.Pa.length>0}function i0(n){Ki(n).start()}async function RN(n){Ki(n).na()}async function PN(n){const e=Ki(n);for(const t of n.Pa)e.X_(t.mutations)}async function CN(n,e,t){const r=n.Pa.shift(),o=zm.from(r,e,t);await n0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Vu(n)}async function kN(n,e){e&&Ki(n).Z_&&await(async function(r,o){if((function(u){return lx(u)&&u!==W.ABORTED})(o.code)){const a=r.Pa.shift();Ki(r).N_(),await n0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Vu(r)}})(n,e),r0(n)&&i0(n)}async function PE(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),J(Js,"RemoteStore received new credentials");const r=ro(t);t.Ia.add(3),await Du(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ed(t)}async function xN(n,e){const t=Pe(n);e?(t.Ia.delete(2),await Ed(t)):e||(t.Ia.add(2),await Du(t),t.Aa.set("Unknown"))}function ba(n){return n.Va||(n.Va=(function(t,r,o){const a=Pe(t);return a.ia(),new pN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:EN.bind(null,n),e_:wN.bind(null,n),n_:IN.bind(null,n),J_:TN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),ng(n)?tg(n):n.Aa.set("Unknown")):(await n.Va.stop(),t0(n))}))),n.Va}function Ki(n){return n.ma||(n.ma=(function(t,r,o){const a=Pe(t);return a.ia(),new mN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:RN.bind(null,n),n_:kN.bind(null,n),ea:PN.bind(null,n),ta:CN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Vu(n)):(await n.ma.stop(),n.Pa.length>0&&(J(Js,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class rg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new rg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(n,e){if(Zt("AsyncQueue",`${e}: ${n}`),Ji(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fa{static emptySet(e){return new fa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=jl(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class CE{constructor(){this.fa=new nt(oe.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):fe(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ca{constructor(e,t,r,o,a,u,d,f,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ca(e,t,fa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class NN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class DN{constructor(){this.queries=kE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=Pe(t),a=o.queries;o.queries=kE(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new se(W.ABORTED,"Firestore shutting down"))}}function kE(){return new ei((n=>iT(n)),hd)}async function s0(n,e){const t=Pe(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new NN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=ig(u,`Initialization of query '${sa(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&sg(t)}async function o0(n,e){const t=Pe(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function VN(n,e){const t=Pe(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&sg(t)}function bN(n,e,t){const r=Pe(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function sg(n){n.Da.forEach((e=>{e.next()}))}var sm,xE;(xE=sm||(sm={})).Fa="default",xE.Cache="cache";class a0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ca(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==sm.Cache}}/**
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
 */class l0{constructor(e){this.key=e}}class u0{constructor(e){this.key=e}}class ON{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=sT(e),this.eu=new fa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new CE,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const T=o.get(v),N=xu(this.query,w)?w:null,M=!!T&&this.mutatedKeys.has(T.key),z=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let V=!1;T&&N?T.data.isEqual(N.data)?M!==z&&(r.track({type:3,doc:N}),V=!0):this.iu(T,N)||(r.track({type:2,doc:N}),V=!0,(f&&this.Xa(N,f)>0||_&&this.Xa(N,_)<0)&&(d=!0)):!T&&N?(r.track({type:0,doc:N}),V=!0):T&&!N&&(r.track({type:1,doc:T}),V=!0,(f||_)&&(d=!0)),V&&(N?(u=u.add(N),a=z?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(N,M){const z=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{At:V})}};return z(N)-z(M)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,_=f!==this.Ya;return this.Ya=f,u.length!==0||_?{snapshot:new Ca(this.query,e.eu,a,u,e.mutatedKeys,f===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new CE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new u0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new l0(r))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ca.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const og="SyncEngine";class LN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class MN{constructor(e){this.key=e,this.lu=!1}}class FN{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ei((d=>iT(d)),hd),this.Tu=new Map,this.Iu=new Set,this.du=new nt(oe.comparator),this.Eu=new Map,this.Au=new Gm,this.Ru={},this.Vu=new Map,this.mu=Ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function UN(n,e,t=!0){const r=m0(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await c0(r,e,t,!0),o}async function jN(n,e){const t=m0(n);await c0(t,e,!0,!1)}async function c0(n,e,t,r){const o=await oN(n.localStore,Ln(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await BN(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&ZT(n.remoteStore,o),d}async function BN(n,e,t,r,o){n.gu=(w,T,N)=>(async function(z,V,re,ne){let ee=V.view.nu(re);ee.Ds&&(ee=await IE(z.localStore,V.query,!1).then((({documents:k})=>V.view.nu(k,ee))));const ae=ne&&ne.targetChanges.get(V.targetId),we=ne&&ne.targetMismatches.get(V.targetId)!=null,ge=V.view.applyChanges(ee,z.isPrimaryClient,ae,we);return DE(z,V.targetId,ge._u),ge.snapshot})(n,w,T,N);const a=await IE(n.localStore,e,!0),u=new ON(e,a.qs),d=u.nu(a.documents),f=Nu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,f);DE(n,t,_._u);const v=new LN(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),_.snapshot}async function zN(n,e,t){const r=Pe(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter((u=>!hd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await rm(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&Zm(r.remoteStore,o.targetId),om(r,o.targetId)})).catch(no)):(om(r,o.targetId),await rm(r.localStore,o.targetId,!0))}async function $N(n,e){const t=Pe(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Zm(t.remoteStore,r.targetId))}async function qN(n,e,t){const r=g0(n);try{const o=await(function(u,d){const f=Pe(u),_=$e.now(),v=d.reduce(((N,M)=>N.add(M.key)),ke());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let M=In(),z=ke();return f.Os.getEntries(N,v).next((V=>{M=V,M.forEach(((re,ne)=>{ne.isValidDocument()||(z=z.add(re))}))})).next((()=>f.localDocuments.getOverlayedDocuments(N,M))).next((V=>{w=V;const re=[];for(const ne of d){const ee=ox(ne,w.get(ne.key).overlayedDocument);ee!=null&&re.push(new ti(ne.key,ee,QI(ee.value.mapValue),en.exists(!0)))}return f.mutationQueue.addMutationBatch(N,_,re,d)})).next((V=>{T=V;const re=V.applyToLocalDocumentSet(w,z);return f.documentOverlayCache.saveOverlays(N,V.batchId,re)}))})).then((()=>({batchId:T.batchId,changes:aT(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,f){let _=u.Ru[u.currentUser.toKey()];_||(_=new nt(Ae)),_=_.insert(d,f),u.Ru[u.currentUser.toKey()]=_})(r,o.batchId,t),await bu(r,o.changes),await Vu(r.remoteStore)}catch(o){const a=ig(o,"Failed to persist write");t.reject(a)}}async function h0(n,e){const t=Pe(n);try{const r=await rN(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Eu.get(a);u&&(ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?ye(u.lu,14607):o.removedDocuments.size>0&&(ye(u.lu,42227),u.lu=!1))})),await bu(t,r,e)}catch(r){await no(r)}}function NE(n,e,t){const r=Pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const f=Pe(u);f.onlineState=d;let _=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(_=!0)})),_&&sg(f)})(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WN(n,e,t){const r=Pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new nt(oe.comparator);u=u.insert(a,lt.newNoDocument(a,Ee.min()));const d=ke().add(a),f=new md(Ee.min(),new Map,new nt(Ae),u,d);await h0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),ag(r)}else await rm(r.localStore,e,!1).then((()=>om(r,e,t))).catch(no)}async function KN(n,e){const t=Pe(n),r=e.batch.batchId;try{const o=await nN(t.localStore,e);f0(t,r,null),d0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bu(t,o)}catch(o){await no(o)}}async function HN(n,e,t){const r=Pe(n);try{const o=await(function(u,d){const f=Pe(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let v;return f.mutationQueue.lookupMutationBatch(_,d).next((w=>(ye(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(_,w)))).next((()=>f.mutationQueue.performConsistencyCheck(_))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(_,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,v))).next((()=>f.localDocuments.getDocuments(_,v)))}))})(r.localStore,e);f0(r,e,t),d0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bu(r,o)}catch(o){await no(o)}}function d0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function f0(n,e,t){const r=Pe(n);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function om(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||p0(n,r)}))}function p0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Zm(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ag(n))}function DE(n,e,t){for(const r of t)r instanceof l0?(n.Au.addReference(r.key,e),GN(n,r)):r instanceof u0?(J(og,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||p0(n,r.key)):fe(19791,{yu:r})}function GN(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(J(og,"New document in limbo: "+t),n.Iu.add(r),ag(n))}function ag(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new oe(ze.fromString(e)),r=n.mu.next();n.Eu.set(r,new MN(t)),n.du=n.du.insert(t,r),ZT(n.remoteStore,new Hr(Ln(ku(t.path)),r,"TargetPurposeLimboResolution",On.ue))}}async function bu(n,e,t){const r=Pe(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((_=>{var v;if((_||t)&&r.isPrimaryClient){const w=_?!_.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(_){o.push(_);const w=Ym.Es(f.targetId,_);a.push(w)}})))})),await Promise.all(u),r.hu.J_(o),await(async function(f,_){const v=Pe(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>U.forEach(_,(T=>U.forEach(T.Is,(N=>v.persistence.referenceDelegate.addReference(w,T.targetId,N))).next((()=>U.forEach(T.ds,(N=>v.persistence.referenceDelegate.removeReference(w,T.targetId,N)))))))))}catch(w){if(!Ji(w))throw w;J(Jm,"Failed to update sequence numbers: "+w)}for(const w of _){const T=w.targetId;if(!w.fromCache){const N=v.Fs.get(T),M=N.snapshotVersion,z=N.withLastLimboFreeSnapshotVersion(M);v.Fs=v.Fs.insert(T,z)}}})(r.localStore,a))}async function QN(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){J(og,"User change. New user:",e.toKey());const r=await GT(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new se(W.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bu(t,r.Bs)}}function XN(n,e){const t=Pe(n),r=t.Eu.get(e);if(r&&r.lu)return ke().add(r.key);{let o=ke();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function m0(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WN.bind(null,e),e.hu.J_=VN.bind(null,e.eventManager),e.hu.pu=bN.bind(null,e.eventManager),e}function g0(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HN.bind(null,e),e}class _u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return HT(this.persistence,new KT,e.initialUser,this.serializer)}Du(e){return new Qm(yd.Vi,this.serializer)}bu(e){return new XT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_u.provider={build:()=>new _u};class YN extends _u{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ye(this.persistence.referenceDelegate instanceof Wh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new BT(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Qm((r=>Wh.Vi(r,t)),this.serializer)}}class JN extends _u{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await g0(this.Mu.syncEngine),await Vu(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return HT(this.persistence,new KT,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new BT(r,e.asyncQueue,t)}Fu(e,t){const r=new sk(t,this.persistence);return new ik(e.asyncQueue,r)}Du(e){const t=Jx(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Xm(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,fN(),Th(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new XT}}class Hh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>NE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await xN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DN})()}createDatastore(e){const t=vd(e.databaseInfo.databaseId),r=(function(a){return new dN(a)})(e.databaseInfo);return(function(a,u,d,f){return new _N(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new vN(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>NE(this.syncEngine,t,0)),(function(){return AE.C()?new AE:new lN})())}createSyncEngine(e,t){return(function(o,a,u,d,f,_,v){const w=new FN(o,a,u,d,f,_);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Pe(o);J(Js,"RemoteStore shutting down."),a.Ia.add(5),await Du(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hh.provider={build:()=>new Hh};/**
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
 */class _0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Hi="FirestoreClient";class ZN{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{J(Hi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(J(Hi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ig(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ep(n,e){n.asyncQueue.verifyOperationInProgress(),J(Hi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await GT(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ir("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ir("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function VE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eD(n);J(Hi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>PE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>PE(e.remoteStore,o))),n._onlineComponents=e}async function eD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J(Hi,"Using user provided OfflineComponentProvider");try{await Ep(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await Ep(n,new _u)}}else J(Hi,"Using default OfflineComponentProvider"),await Ep(n,new YN(void 0));return n._offlineComponents}async function y0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J(Hi,"Using user provided OnlineComponentProvider"),await VE(n,n._uninitializedComponentsProvider._online)):(J(Hi,"Using default OnlineComponentProvider"),await VE(n,new Hh))),n._onlineComponents}function tD(n){return y0(n).then((e=>e.syncEngine))}async function am(n){const e=await y0(n),t=e.eventManager;return t.onListen=UN.bind(null,e.syncEngine),t.onUnlisten=zN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$N.bind(null,e.syncEngine),t}function nD(n,e,t={}){const r=new Qr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,_){const v=new _0({next:T=>{v.Ou(),u.enqueueAndForget((()=>o0(a,w)));const N=T.docs.has(d);!N&&T.fromCache?_.reject(new se(W.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&T.fromCache&&f&&f.source==="server"?_.reject(new se(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(T)},error:T=>_.reject(T)}),w=new a0(ku(d.path),v,{includeMetadataChanges:!0,ka:!0});return s0(a,w)})(await am(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function v0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bE=new Map;/**
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
 */const E0="firestore.googleapis.com",OE=!0;class LE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E0,this.ssl=OE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:OE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ox)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new WC;switch(r.type){case"firstParty":return new QC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=bE.get(t);r&&(J("ComponentProvider","Removing Datastore"),bE.delete(t),r.terminate())})(this),Promise.resolve()}}function rD(n,e,t,r={}){var o;n=tr(n,wd);const a=Zs(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(pm(`https://${f}`),mm("Firestore",!0)),u.host!==E0&&u.host!==f&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!zs(_,d)&&(n._setSettings(_),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=Ut.MOCK_USER;else{v=Sw(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ut(T)}n._authCredentials=new KC(new wI(v,w))}}/**
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
 */class io{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new io(this.firestore,e,this._query)}}class ht{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ru(t,ht._jsonSchema))return new ht(e,r||null,new oe(ze.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:mt("string",ht._jsonSchemaVersion),referencePath:mt("string")};class zi extends io{constructor(e,t,r){super(e,t,ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new oe(e))}withConverter(e){return new zi(this.firestore,e,this._path)}}function w0(n,e,...t){if(n=_t(n),SI("collection","path",e),n instanceof wd){const r=ze.fromString(e,...t);return Rv(r),new zi(n,null,r)}{if(!(n instanceof ht||n instanceof zi))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return Rv(r),new zi(n.firestore,null,r)}}function Id(n,e,...t){if(n=_t(n),arguments.length===1&&(e=km.newId()),SI("doc","path",e),n instanceof wd){const r=ze.fromString(e,...t);return Av(r),new ht(n,null,new oe(r))}{if(!(n instanceof ht||n instanceof zi))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return Av(r),new ht(n.firestore,n instanceof zi?n.converter:null,new oe(r))}}/**
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
 */const ME="AsyncQueue";class FE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new YT(this,"async_queue_retry"),this.oc=()=>{const r=Th();r&&J(ME,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Th();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Th();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ji(e))throw e;J(ME,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Zt("INTERNAL UNHANDLED ERROR: ",UE(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=rg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&fe(47125,{hc:UE(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function UE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function jE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Gi extends wd{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new FE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new FE(e),this._firestoreClient=void 0,await e}}}function iD(n,e){const t=typeof n=="object"?n:ym(),r=typeof n=="string"?n:Mh,o=Zh(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=ww("firestore");a&&rD(o,...a)}return o}function lg(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||I0(n),n._firestoreClient}function I0(n){var e,t,r;const o=n._freezeSettings(),a=(function(d,f,_,v){return new bk(d,f,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,v0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new ZN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}function sD(n,e){Ir("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return oD(n,Hh.provider,{build:r=>new JN(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function oD(n,e,t){if((n=tr(n,Gi))._firestoreClient||n._terminated)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new se(W.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},I0(n)}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(yt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ru(e,bn._jsonSchema))return bn.fromBase64String(e.bytes)}}bn._jsonSchemaVersion="firestore/bytes/1.0",bn._jsonSchema={type:mt("string",bn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class Td{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sd{constructor(e){this._methodName=e}}/**
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
 */class Er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Ru(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:mt("string",Er._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ru(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wr(e.vectorValues);throw new se(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:mt("string",wr._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const aD=/^__.*__$/;class lD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,t,this.fieldTransforms):new Va(e,this.data,t,this.fieldTransforms)}}class T0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ti(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function S0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ec:n})}}class ug{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ug(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(S0(this.Ec)&&aD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class uD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vd(e)}Dc(e,t,r,o=!1){return new ug({Ec:e,methodName:t,bc:r,path:ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cg(n){const e=n._freezeSettings(),t=vd(n._databaseId);return new uD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cD(n,e,t,r,o,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);dg("Data must be an object, but it was:",u,r);const d=A0(r,u);let f,_;if(a.merge)f=new hn(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=lm(e,w,t);if(!u.contains(T))throw new se(W.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);P0(v,T)||v.push(T)}f=new hn(v),_=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,_=u.fieldTransforms;return new lD(new Ht(d),f,_)}class Ad extends Sd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ad}}class hg extends Sd{_toFieldTransform(e){return new pT(e.path,new Sa)}isEqual(e){return e instanceof hg}}function hD(n,e,t,r){const o=n.Dc(1,e,t);dg("Data must be an object, but it was:",o,r);const a=[],u=Ht.empty();Zi(r,((f,_)=>{const v=fg(e,f,t);_=_t(_);const w=o.gc(v);if(_ instanceof Ad)a.push(v);else{const T=Ou(_,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new hn(a);return new T0(u,d,o.fieldTransforms)}function dD(n,e,t,r,o,a){const u=n.Dc(1,e,t),d=[lm(e,r,t)],f=[o];if(a.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(lm(e,a[T])),f.push(a[T+1]);const _=[],v=Ht.empty();for(let T=d.length-1;T>=0;--T)if(!P0(_,d[T])){const N=d[T];let M=f[T];M=_t(M);const z=u.gc(N);if(M instanceof Ad)_.push(N);else{const V=Ou(M,z);V!=null&&(_.push(N),v.set(N,V))}}const w=new hn(_);return new T0(v,w,u.fieldTransforms)}function fD(n,e,t,r=!1){return Ou(t,n.Dc(r?4:3,e))}function Ou(n,e){if(R0(n=_t(n)))return dg("Unsupported field value:",e,n),A0(n,e);if(n instanceof Sd)return(function(r,o){if(!S0(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let f=Ou(d,o.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ex(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=$e.fromDate(r);return{timestampValue:Pa(o.serializer,a)}}if(r instanceof $e){const a=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pa(o.serializer,a)}}if(r instanceof Er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:wT(o.serializer,r._byteString)};if(r instanceof ht){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Wm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof wr)return(function(u,d){return{mapValue:{fields:{[Mm]:{stringValue:Fm},[Ea]:{arrayValue:{values:u.toArray().map((_=>{if(typeof _!="number")throw d.wc("VectorValues must only contain numeric values.");return jm(d.serializer,_)}))}}}}}})(r,o);throw o.wc(`Unsupported field value: ${rd(r)}`)})(n,e)}function A0(n,e){const t={};return jI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(n,((r,o)=>{const a=Ou(o,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function R0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof Er||n instanceof bn||n instanceof ht||n instanceof Sd||n instanceof wr)}function dg(n,e,t){if(!R0(t)||!AI(t)){const r=rd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function lm(n,e,t){if((e=_t(e))instanceof Td)return e._internalPath;if(typeof e=="string")return fg(n,e);throw Gh("Field path arguments must be of type string or ",n,!1,void 0,t)}const pD=new RegExp("[~\\*/\\[\\]]");function fg(n,e,t){if(e.search(pD)>=0)throw Gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Td(...e.split("."))._internalPath}catch{throw Gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new se(W.INVALID_ARGUMENT,d+n+f)}function P0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class C0{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mD extends C0{data(){return super.data()}}function Rd(n,e){return typeof e=="string"?fg(n,e):e instanceof Td?e._internalPath:e._delegate._internalPath}/**
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
 */function gD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pg{}class k0 extends pg{}function _D(n,e,...t){let r=[];e instanceof pg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof mg)).length,d=a.filter((f=>f instanceof Pd)).length;if(u>1||u>0&&d>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class Pd extends k0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Pd(e,t,r)}_apply(e){const t=this._parse(e);return x0(e._query,t),new io(e.firestore,e.converter,Gp(e._query,t))}_parse(e){const t=cg(e.firestore);return(function(a,u,d,f,_,v,w){let T;if(_.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){$E(w,v);const M=[];for(const z of w)M.push(zE(f,a,z));T={arrayValue:{values:M}}}else T=zE(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||$E(w,v),T=fD(d,u,w,v==="in"||v==="not-in");return Ve.create(_,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yD(n,e,t){const r=e,o=Rd("where",n);return Pd._create(o,r,t)}class mg extends pg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)x0(u,f),u=Gp(u,f)})(e._query,t),new io(e.firestore,e.converter,Gp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gg extends k0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gg(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mu(a,u)})(e._query,this._field,this._direction);return new io(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new Da(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function BE(n,e="asc"){const t=e,r=Rd("orderBy",n);return gg._create(r,t)}function zE(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rT(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!oe.isDocumentKey(r))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fu(n,new oe(r))}if(t instanceof ht)return fu(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rd(t)}.`)}function $E(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function x0(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vD{convertValue(e,t="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zi(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Ea].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map((u=>tt(u.doubleValue)));return new wr(a)}convertGeoPoint(e){return new Er(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ud(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hu(e));default:return null}}convertTimestamp(e){const t=Jr(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ye(NT(r),9688,{name:e});const o=new Hs(r.get(1),r.get(3)),a=new oe(r.popFirst(5));return o.isEqual(t)||Zt(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function ED(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class $l{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bs extends C0{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Bs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Bs._jsonSchema={type:mt("string",Bs._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Sh extends Bs{data(e={}){return super.data(e)}}class pa{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $l(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Sh(this._firestore,this._userDataWriter,r.key,r,new $l(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const f=new Sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:wD(d.type),doc:f,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:n})}}/**
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
 */function ID(n){n=tr(n,ht);const e=tr(n.firestore,Gi);return nD(lg(e),n._key).then((t=>D0(e,n,t)))}pa._jsonSchemaVersion="firestore/querySnapshot/1.0",pa._jsonSchema={type:mt("string",pa._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class N0 extends vD{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function TD(n,e,t,...r){n=tr(n,ht);const o=tr(n.firestore,Gi),a=cg(o);let u;return u=typeof(e=_t(e))=="string"||e instanceof Td?dD(a,"updateDoc",n._key,e,t,r):hD(a,"updateDoc",n._key,e),_g(o,[u.toMutation(n._key,en.exists(!0))])}function SD(n){return _g(tr(n.firestore,Gi),[new pd(n._key,en.none())])}function AD(n,e){const t=tr(n.firestore,Gi),r=Id(n),o=ED(n.converter,e);return _g(t,[cD(cg(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then((()=>r))}function RD(n,...e){var t,r,o;n=_t(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||jE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(jE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let f,_,v;if(n instanceof ht)_=tr(n.firestore,Gi),v=ku(n._key.path),f={next:w=>{e[u]&&e[u](D0(_,n,w))},error:e[u+1],complete:e[u+2]};else{const w=tr(n,io);_=tr(w.firestore,Gi),v=w._query;const T=new N0(_);f={next:N=>{e[u]&&e[u](new pa(_,T,w,N))},error:e[u+1],complete:e[u+2]},gD(n._query)}return(function(T,N,M,z){const V=new _0(z),re=new a0(N,V,M);return T.asyncQueue.enqueueAndForget((async()=>s0(await am(T),re))),()=>{V.Ou(),T.asyncQueue.enqueueAndForget((async()=>o0(await am(T),re)))}})(lg(_),v,d,f)}function _g(n,e){return(function(r,o){const a=new Qr;return r.asyncQueue.enqueueAndForget((async()=>qN(await tD(r),o,a))),a.promise})(lg(n),e)}function D0(n,e,t){const r=t.docs.get(e._key),o=new N0(n);return new Bs(n,o,e._key,r,new $l(t.hasPendingWrites,t.fromCache),e.converter)}function PD(){return new hg("serverTimestamp")}(function(e,t=!0){(function(o){Na=o})(eo),$s(new $i("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Gi(new HC(r.getProvider("auth-internal")),new XC(u,r.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(_.options.projectId,v)})(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),_r(Ev,wv,e),_r(Ev,wv,"esm2017")})();/**
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
 */const V0="firebasestorage.googleapis.com",CD="storageBucket",kD=120*1e3,xD=600*1e3;/**
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
 */class Rr extends Ar{constructor(e,t,r=0){super(wp(e),`Firebase Storage: ${t} (${wp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Sr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Sr||(Sr={}));function wp(n){return"storage/"+n}function ND(){const n="An unknown error occurred, please check the error payload for server response.";return new Rr(Sr.UNKNOWN,n)}function DD(){return new Rr(Sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VD(){return new Rr(Sr.CANCELED,"User canceled the upload/download.")}function bD(n){return new Rr(Sr.INVALID_URL,"Invalid URL '"+n+"'.")}function OD(n){return new Rr(Sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qE(n){return new Rr(Sr.INVALID_ARGUMENT,n)}function b0(){return new Rr(Sr.APP_DELETED,"The Firebase app was deleted.")}function LD(n){return new Rr(Sr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class er{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=er.makeFromUrl(e,t)}catch{return new er(e,"")}if(r.path==="")return r;throw OD(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function _(ae){ae.path_=decodeURIComponent(ae.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",N=new RegExp(`^https?://${w}/${v}/b/${o}/o${T}`,"i"),M={bucket:1,path:3},z=t===V0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",re=new RegExp(`^https?://${z}/${o}/${V}`,"i"),ee=[{regex:d,indices:f,postModify:a},{regex:N,indices:M,postModify:_},{regex:re,indices:{bucket:1,path:2},postModify:_}];for(let ae=0;ae<ee.length;ae++){const we=ee[ae],ge=we.regex.exec(e);if(ge){const k=ge[we.indices.bucket];let S=ge[we.indices.path];S||(S=""),r=new er(k,S),we.postModify(r);break}}if(r==null)throw bD(e);return r}}class MD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FD(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let _=!1;function v(...V){_||(_=!0,e.apply(null,V))}function w(V){o=setTimeout(()=>{o=null,n(N,f())},V)}function T(){a&&clearTimeout(a)}function N(V,...re){if(_){T();return}if(V){T(),v.call(null,V,...re);return}if(f()||u){T(),v.call(null,V,...re);return}r<64&&(r*=2);let ee;d===1?(d=2,ee=0):ee=(r+Math.random())*1e3,w(ee)}let M=!1;function z(V){M||(M=!0,T(),!_&&(o!==null?(V||(d=2),clearTimeout(o),w(0)):V||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,z(!0)},t),z}function UD(n){n(!1)}/**
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
 */function jD(n){return n!==void 0}function WE(n,e,t,r){if(r<e)throw qE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qE(`Invalid value for '${n}'. Expected ${t} or less.`)}function BD(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Qh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Qh||(Qh={}));/**
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
 */function zD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class $D{constructor(e,t,r,o,a,u,d,f,_,v,w,T=!0,N=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,z)=>{this.resolve_=M,this.reject_=z,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new ah(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,_)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Qh.NO_ERROR,f=a.getStatus();if(!d||zD(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Qh.ABORT;r(!1,new ah(!1,null,v));return}const _=this.successCodes_.indexOf(f)!==-1;r(!0,new ah(_,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());jD(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=ND();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?b0():VD();u(f)}else{const f=DD();u(f)}};this.canceled_?t(!1,new ah(!1,null,!0)):this.backoffId_=FD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ah{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function WD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function GD(n,e,t,r,o,a,u=!0,d=!1){const f=BD(n.urlParams),_=n.url+f,v=Object.assign({},n.headers);return KD(v,e),qD(v,t),WD(v,a),HD(v,r),new $D(_,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
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
 */function QD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Xh{constructor(e,t){this._service=e,t instanceof er?this._location=t:this._location=er.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xh(e,t)}get root(){const e=new er(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XD(this._location.path)}get storage(){return this._service}get parent(){const e=QD(this._location.path);if(e===null)return null;const t=new er(this._location.bucket,e);return new Xh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LD(e)}}function KE(n,e){const t=e==null?void 0:e[CD];return t==null?null:er.makeFromBucketSpec(t,n)}function YD(n,e,t,r={}){n.host=`${e}:${t}`;const o=Zs(e);o&&(pm(`https://${n.host}/b`),mm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Sw(a,n.app.options.projectId))}class JD{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=V0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kD,this._maxUploadRetryTime=xD,this._requests=new Set,o!=null?this._bucket=er.makeFromBucketSpec(o,this._host):this._bucket=KE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=er.makeFromBucketSpec(this._url,e):this._bucket=KE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){WE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){WE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new MD(b0());{const u=GD(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const HE="@firebase/storage",GE="0.13.14";/**
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
 */const O0="storage";function ZD(n=ym(),e){n=_t(n);const r=Zh(n,O0).getImmediate({identifier:e}),o=ww("storage");return o&&eV(r,...o),r}function eV(n,e,t,r={}){YD(n,e,t,r)}function tV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new JD(t,r,o,e,eo)}function nV(){$s(new $i(O0,tV,"PUBLIC").setMultipleInstances(!0)),_r(HE,GE,""),_r(HE,GE,"esm2017")}nV();const rV={apiKey:"AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",authDomain:"m3notes-9712f.firebaseapp.com",projectId:"m3notes-9712f",storageBucket:"m3notes-9712f.firebasestorage.app",messagingSenderId:"312791889198",appId:"1:312791889198:android:defc0d0536797e190bb6bf"},yg=Nw(rV),lh=BC(yg),Oa=iD(yg);ZD(yg);sD(Oa).catch(n=>{n.code==="failed-precondition"?console.warn("Persistence failed: multiple tabs open"):n.code==="unimplemented"&&console.warn("Persistence not available in this browser")});const L0=Z.createContext();function iV({children:n}){const[e,t]=Z.useState(null),[r,o]=Z.useState(!0);Z.useEffect(()=>kP(lh,_=>{t(_),o(!1)}),[]);const a=(f,_)=>RP(lh,f,_),u=(f,_)=>AP(lh,f,_),d=()=>xP(lh);return Q.jsx(L0.Provider,{value:{user:e,loading:r,login:a,register:u,logout:d},children:n})}const Lu=()=>Z.useContext(L0);function sV(){const{login:n,register:e}=Lu(),[t,r]=Z.useState(""),[o,a]=Z.useState(""),[u,d]=Z.useState(!1),[f,_]=Z.useState(""),[v,w]=Z.useState(!1),T=async N=>{N.preventDefault(),_(""),w(!0);try{u?await e(t.trim(),o):await n(t.trim(),o)}catch(M){_(M.message||"Erreur")}finally{w(!1)}};return Q.jsx("div",{className:"login-page",children:Q.jsxs("div",{className:"login-card",children:[Q.jsx("h1",{children:"M3Notes"}),Q.jsx("p",{className:"subtitle",children:u?"Créer un compte":"Connexion"}),Q.jsxs("form",{onSubmit:T,children:[Q.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:N=>r(N.target.value),required:!0,autoFocus:!0}),Q.jsx("input",{type:"password",placeholder:"Mot de passe",value:o,onChange:N=>a(N.target.value),required:!0,minLength:6}),f&&Q.jsx("p",{className:"error",children:f}),Q.jsx("button",{type:"submit",disabled:v,children:v?"…":u?"S'inscrire":"Se connecter"})]}),Q.jsx("button",{className:"switch",onClick:()=>d(!u),children:u?"Déjà un compte ? Se connecter":"Pas de compte ? S'inscrire"})]})})}/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=n=>{const e=aV(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ip={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},uV=Z.createContext({}),cV=()=>Z.useContext(uV),hV=Z.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...d},f)=>{const{size:_=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,color:T="currentColor",className:N=""}=cV()??{},M=r??w?Number(t??v)*24/Number(e??_):t??v;return Z.createElement("svg",{ref:f,...Ip,width:e??_??Ip.width,height:e??_??Ip.height,stroke:n??T,strokeWidth:M,className:M0("lucide",N,o),...!a&&!lV(d)&&{"aria-hidden":"true"},...d},[...u.map(([z,V])=>Z.createElement(z,V)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(n,e)=>{const t=Z.forwardRef(({className:r,...o},a)=>Z.createElement(hV,{ref:a,iconNode:e,className:M0(`lucide-${oV(QE(n))}`,`lucide-${n}`,r),...o}));return t.displayName=QE(n),t};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],F0=dn("archive",dV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],pV=dn("arrow-left",fV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],gV=dn("list-checks",mV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],yV=dn("log-out",_V);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],EV=dn("moon",vV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],U0=dn("pin",wV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],j0=dn("plus",IV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],SV=dn("square-check-big",TV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],RV=dn("square",AV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],CV=dn("sticky-note",PV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xV=dn("sun",kV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],DV=dn("text-align-start",NV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],bV=dn("trash-2",VV);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],LV=dn("x",OV),B0=Z.createContext();function MV({children:n}){const[e,t]=Z.useState(()=>{const o=localStorage.getItem("m3notes-theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});Z.useEffect(()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light"),localStorage.setItem("m3notes-theme",e?"dark":"light")},[e]);const r=()=>t(o=>!o);return Q.jsx(B0.Provider,{value:{dark:e,toggle:r},children:n})}const FV=()=>Z.useContext(B0),Cd="notes";function UV(n,e,t){let r=_D(w0(Oa,Cd),yD("userId","==",n),BE("isPinned","desc"),BE("updatedAt","desc"));return RD(r,o=>{let a=o.docs.map(u=>({id:u.id,...u.data()}));e||(a=a.filter(u=>!u.isArchived)),t(a)},o=>{console.error("Notes subscription error:",o),t([])})}async function jV(n,e){return(await AD(w0(Oa,Cd),{...e,userId:n,isPinned:!1,isArchived:!1,labels:e.labels||[],imageUrls:e.imageUrls||[],checklist:e.checklist||[],isChecklist:e.isChecklist||!1,createdAt:PD(),updatedAt:$e.now()})).id}async function BV(n,e){await TD(Id(Oa,Cd,n),{...e,updatedAt:$e.now()})}async function zV(n){await SD(Id(Oa,Cd,n))}const $V={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function qV({note:n,onClick:e}){var r;const t=$V[n.color]||"note-default";return Q.jsxs("div",{className:`note-card ${t}`,onClick:e,children:[n.isPinned&&Q.jsx(U0,{className:"pin",size:16,fill:"currentColor"}),n.title&&Q.jsx("h3",{className:"note-title",children:n.title}),n.isChecklist?Q.jsxs("ul",{className:"checklist",children:[(n.checklist||[]).slice(0,6).map((o,a)=>Q.jsxs("li",{className:o.isChecked?"checked":"",children:[o.isChecked?Q.jsx(SV,{size:14}):Q.jsx(RV,{size:14})," ",o.text]},a)),(n.checklist||[]).length>6&&Q.jsxs("li",{className:"more",children:["+",n.checklist.length-6,"…"]})]}):n.content&&Q.jsx("p",{className:"note-content",children:n.content}),((r=n.labels)==null?void 0:r.length)>0&&Q.jsx("div",{className:"labels",children:n.labels.slice(0,3).map(o=>Q.jsx("span",{className:"label",children:o},o))})]})}function WV(){const{user:n,logout:e}=Lu(),{dark:t,toggle:r}=FV(),o=fm(),[a,u]=Z.useState([]),[d,f]=Z.useState(!1),[_,v]=Z.useState(""),[w,T]=Z.useState(!0);Z.useEffect(()=>n?(T(!0),UV(n.uid,d,z=>{u(z),T(!1)})):void 0,[n,d]);const N=_.trim()?a.filter(M=>(M.title||"").toLowerCase().includes(_.toLowerCase())||(M.content||"").toLowerCase().includes(_.toLowerCase())||(M.labels||[]).some(z=>z.toLowerCase().includes(_.toLowerCase()))):a;return Q.jsxs("div",{className:"home",children:[Q.jsxs("header",{className:"topbar",children:[Q.jsx("div",{className:"topbar-left",children:Q.jsx("h1",{children:d?"Archives":"M3Notes"})}),Q.jsx("div",{className:"search-box",children:Q.jsx("input",{type:"search",placeholder:"Rechercher…",value:_,onChange:M=>v(M.target.value)})}),Q.jsxs("div",{className:"topbar-actions",children:[Q.jsx("button",{onClick:()=>f(!d),title:"Archives",children:d?Q.jsx(CV,{size:20}):Q.jsx(F0,{size:20})}),Q.jsx("button",{onClick:r,title:"Thème",children:t?Q.jsx(xV,{size:20}):Q.jsx(EV,{size:20})}),Q.jsx("button",{onClick:e,title:"Déconnexion",children:Q.jsx(yV,{size:20})})]})]}),Q.jsx("main",{className:"notes-area",children:w?Q.jsx("p",{className:"empty",children:"Chargement…"}):N.length===0?Q.jsx("p",{className:"empty",children:d?"Aucune note archivée":`Aucune note
Clique sur + pour commencer`}):Q.jsx("div",{className:"notes-grid",children:N.map(M=>Q.jsx(qV,{note:M,onClick:()=>o(`/note/${M.id}`)},M.id))})}),Q.jsx("button",{className:"fab",onClick:()=>o("/note/new"),title:"Nouvelle note",children:Q.jsx(j0,{size:26})})]})}const Ft=[];for(let n=0;n<256;++n)Ft.push((n+256).toString(16).slice(1));function KV(n,e=0){return(Ft[n[e+0]]+Ft[n[e+1]]+Ft[n[e+2]]+Ft[n[e+3]]+"-"+Ft[n[e+4]]+Ft[n[e+5]]+"-"+Ft[n[e+6]]+Ft[n[e+7]]+"-"+Ft[n[e+8]]+Ft[n[e+9]]+"-"+Ft[n[e+10]]+Ft[n[e+11]]+Ft[n[e+12]]+Ft[n[e+13]]+Ft[n[e+14]]+Ft[n[e+15]]).toLowerCase()}let Tp;const HV=new Uint8Array(16);function GV(){if(!Tp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Tp=crypto.getRandomValues.bind(crypto)}return Tp(HV)}const QV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),XE={randomUUID:QV};function YE(n,e,t){var o;if(XE.randomUUID&&!n)return XE.randomUUID();n=n||{};const r=n.random??((o=n.rng)==null?void 0:o.call(n))??GV();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,KV(r)}function XV({open:n,title:e="Confirmer",message:t,confirmLabel:r="Confirmer",cancelLabel:o="Annuler",danger:a=!1,onConfirm:u,onCancel:d}){return n?Q.jsx("div",{className:"confirm-overlay",onClick:d,children:Q.jsxs("div",{className:"confirm-box",onClick:f=>f.stopPropagation(),children:[Q.jsx("h3",{children:e}),t&&Q.jsx("p",{children:t}),Q.jsxs("div",{className:"confirm-actions",children:[Q.jsx("button",{className:"confirm-cancel",onClick:d,children:o}),Q.jsx("button",{className:`confirm-ok ${a?"danger":""}`,onClick:u,children:r})]})]})}):null}const YV=[{key:"DEFAULT",label:"Blanc"},{key:"RED",label:"Rouge"},{key:"ORANGE",label:"Orange"},{key:"YELLOW",label:"Jaune"},{key:"GREEN",label:"Vert"},{key:"TEAL",label:"Turquoise"},{key:"BLUE",label:"Bleu"},{key:"DARK_BLUE",label:"Bleu foncé"},{key:"PURPLE",label:"Violet"},{key:"PINK",label:"Rose"},{key:"BROWN",label:"Marron"},{key:"GRAY",label:"Gris"}],JE={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function JV(){const{id:n}=N1(),e=n==="new",{user:t}=Lu(),r=fm(),[o,a]=Z.useState(""),[u,d]=Z.useState(""),[f,_]=Z.useState("DEFAULT"),[v,w]=Z.useState(!1),[T,N]=Z.useState(!1),[M,z]=Z.useState(!1),[V,re]=Z.useState([]),[ne,ee]=Z.useState(""),[ae,we]=Z.useState(!e),[ge,k]=Z.useState(!1);Z.useEffect(()=>{e||!t||ID(Id(Oa,"notes",n)).then(ce=>{if(ce.exists()){const H=ce.data();a(H.title||""),d(H.content||""),_(H.color||"DEFAULT"),w(H.isPinned||!1),N(H.isArchived||!1),z(H.isChecklist||!1),re(H.checklist||[])}we(!1)})},[n,e,t]);const S=ce=>{const H=ce.trim();H&&(re([...V,{id:YE(),text:H,isChecked:!1}]),ee(""))},P=(ce,H)=>{re(V.map(_e=>_e.id===ce?{..._e,text:H}:_e))},x=ce=>{re(V.map(H=>H.id===ce?{...H,isChecked:!H.isChecked}:H))},b=ce=>{re(V.filter(H=>H.id!==ce))},L=()=>{if(u.trim()&&V.length===0){const ce=u.split(`
`).filter(H=>H.trim());re(ce.map(H=>({id:YE(),text:H.trim(),isChecked:!1}))),d("")}z(!0)},R=()=>{V.length>0&&!u.trim()&&d(V.map(ce=>ce.text).join(`
`)),z(!1)},rt=async()=>{if(!t)return;const ce=V.filter(le=>le.text.trim()),H={title:o.trim(),content:M?"":u.trim(),color:f,isPinned:v,isArchived:T,isChecklist:M,checklist:M?ce:[]},_e=!H.title&&!H.content&&(!M||ce.length===0);if(e){if(_e){r("/");return}await jV(t.uid,H)}else await BV(n,H);r("/")},Rt=()=>{e||k(!0)},Pt=async()=>{await zV(n),r("/")};return ae?Q.jsx("div",{className:"note-page loading",children:"Chargement…"}):Q.jsxs("div",{className:`note-page ${JE[f]||"note-default"}`,children:[Q.jsxs("header",{className:"note-toolbar",children:[Q.jsx("button",{className:"icon-btn",onClick:rt,title:"Retour",children:Q.jsx(pV,{size:22})}),Q.jsxs("div",{className:"toolbar-actions",children:[Q.jsx("button",{className:"icon-btn",onClick:M?R:L,title:M?"Passer en texte":"Passer en checklist",children:M?Q.jsx(DV,{size:20}):Q.jsx(gV,{size:20})}),Q.jsx("button",{className:`icon-btn ${v?"active":""}`,onClick:()=>w(!v),title:"Épingler",children:Q.jsx(U0,{size:20,fill:v?"currentColor":"none"})}),Q.jsx("button",{className:`icon-btn ${T?"active":""}`,onClick:()=>N(!T),title:"Archiver",children:Q.jsx(F0,{size:20})}),!e&&Q.jsx("button",{className:"icon-btn",onClick:Rt,title:"Supprimer",children:Q.jsx(bV,{size:20})})]})]}),Q.jsx("div",{className:"color-picker",children:YV.map(ce=>Q.jsx("button",{className:`color-dot ${JE[ce.key]} ${f===ce.key?"selected":""}`,onClick:()=>_(ce.key),title:ce.label},ce.key))}),Q.jsx("input",{className:"note-title-input",placeholder:"Titre",value:o,onChange:ce=>a(ce.target.value),autoFocus:e}),M?Q.jsxs("div",{className:"checklist-editor",children:[V.map(ce=>Q.jsxs("div",{className:`checklist-row ${ce.isChecked?"checked":""}`,children:[Q.jsx("button",{className:"check-toggle",onClick:()=>x(ce.id),children:Q.jsx("span",{className:"check-box"})}),Q.jsx("input",{className:"checklist-item-input",value:ce.text,onChange:H=>P(ce.id,H.target.value),placeholder:"Élément"}),Q.jsx("button",{className:"remove-item",onClick:()=>b(ce.id),title:"Supprimer",children:Q.jsx(LV,{size:16})})]},ce.id)),Q.jsxs("div",{className:"checklist-row new-item-row",children:[Q.jsx(j0,{size:18,className:"add-icon"}),Q.jsx("input",{className:"checklist-item-input",value:ne,onChange:ce=>ee(ce.target.value),onKeyDown:ce=>{ce.key==="Enter"&&(ce.preventDefault(),S(ne))},placeholder:"Ajouter un élément"})]})]}):Q.jsx("textarea",{className:"note-content-input",placeholder:"Note",value:u,onChange:ce=>d(ce.target.value),rows:12}),Q.jsx(XV,{open:ge,title:"Supprimer cette note ?",message:"Cette action est definitive.",confirmLabel:"Supprimer",danger:!0,onConfirm:Pt,onCancel:()=>k(!1)})]})}function ZE({children:n}){const{user:e,loading:t}=Lu();return t?Q.jsx("div",{className:"loading-screen",children:"Chargement…"}):e?n:Q.jsx(Ap,{to:"/login",replace:!0})}function ZV(){const{user:n,loading:e}=Lu();return e?Q.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"var(--bg)",color:"var(--text)"},children:"Chargement…"}):Q.jsxs(H1,{children:[Q.jsx(Ll,{path:"/login",element:n?Q.jsx(Ap,{to:"/",replace:!0}):Q.jsx(sV,{})}),Q.jsx(Ll,{path:"/",element:Q.jsx(ZE,{children:Q.jsx(WV,{})})}),Q.jsx(Ll,{path:"/note/:id",element:Q.jsx(ZE,{children:Q.jsx(JV,{})})}),Q.jsx(Ll,{path:"*",element:Q.jsx(Ap,{to:"/",replace:!0})})]})}t1.createRoot(document.getElementById("root")).render(Q.jsx(tw.StrictMode,{children:Q.jsx(X1,{basename:"/m3notes-web",children:Q.jsx(MV,{children:Q.jsx(iV,{children:Q.jsx(ZV,{})})})})}));
