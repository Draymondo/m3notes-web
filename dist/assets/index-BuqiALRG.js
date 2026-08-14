function HS(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function rw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rp={exports:{}},xl={},ip={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function GS(){if(Ry)return Ne;Ry=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=w&&L[w]||L["@@iterator"],typeof L=="function"?L:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function V(L,H,ye){this.props=L,this.context=H,this.refs=z,this.updater=ye||D}V.prototype.isReactComponent={},V.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},V.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function re(){}re.prototype=V.prototype;function te(L,H,ye){this.props=L,this.context=H,this.refs=z,this.updater=ye||D}var J=te.prototype=new re;J.constructor=te,j(J,V.prototype),J.isPureReactComponent=!0;var le=Array.isArray,we=Object.prototype.hasOwnProperty,me={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(L,H,ye){var ke,Z={},he=null,De=null;if(H!=null)for(ke in H.ref!==void 0&&(De=H.ref),H.key!==void 0&&(he=""+H.key),H)we.call(H,ke)&&!x.hasOwnProperty(ke)&&(Z[ke]=H[ke]);var Fe=arguments.length-2;if(Fe===1)Z.children=ye;else if(1<Fe){for(var Ge=Array(Fe),Ct=0;Ct<Fe;Ct++)Ge[Ct]=arguments[Ct+2];Z.children=Ge}if(L&&L.defaultProps)for(ke in Fe=L.defaultProps,Fe)Z[ke]===void 0&&(Z[ke]=Fe[ke]);return{$$typeof:n,type:L,key:he,ref:De,props:Z,_owner:me.current}}function P(L,H){return{$$typeof:n,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return H[ye]})}var C=/\/+/g;function R(L,H){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):H.toString(36)}function Ye(L,H,ye,ke,Z){var he=typeof L;(he==="undefined"||he==="boolean")&&(L=null);var De=!1;if(L===null)De=!0;else switch(he){case"string":case"number":De=!0;break;case"object":switch(L.$$typeof){case n:case e:De=!0}}if(De)return De=L,Z=Z(De),L=ke===""?"."+R(De,0):ke,le(Z)?(ye="",L!=null&&(ye=L.replace(C,"$&/")+"/"),Ye(Z,H,ye,"",function(Ct){return Ct})):Z!=null&&(N(Z)&&(Z=P(Z,ye+(!Z.key||De&&De.key===Z.key?"":(""+Z.key).replace(C,"$&/")+"/")+L)),H.push(Z)),1;if(De=0,ke=ke===""?".":ke+":",le(L))for(var Fe=0;Fe<L.length;Fe++){he=L[Fe];var Ge=ke+R(he,Fe);De+=Ye(he,H,ye,Ge,Z)}else if(Ge=T(L),typeof Ge=="function")for(L=Ge.call(L),Fe=0;!(he=L.next()).done;)he=he.value,Ge=ke+R(he,Fe++),De+=Ye(he,H,ye,Ge,Z);else if(he==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return De}function Rt(L,H,ye){if(L==null)return L;var ke=[],Z=0;return Ye(L,ke,"","",function(he){return H.call(ye,he,Z++)}),ke}function Pt(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var $e={current:null},oe={transition:null},Ee={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:oe,ReactCurrentOwner:me};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Rt,forEach:function(L,H,ye){Rt(L,function(){H.apply(this,arguments)},ye)},count:function(L){var H=0;return Rt(L,function(){H++}),H},toArray:function(L){return Rt(L,function(H){return H})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ne.Component=V,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=te,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee,Ne.act=ue,Ne.cloneElement=function(L,H,ye){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var ke=j({},L.props),Z=L.key,he=L.ref,De=L._owner;if(H!=null){if(H.ref!==void 0&&(he=H.ref,De=me.current),H.key!==void 0&&(Z=""+H.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for(Ge in H)we.call(H,Ge)&&!x.hasOwnProperty(Ge)&&(ke[Ge]=H[Ge]===void 0&&Fe!==void 0?Fe[Ge]:H[Ge])}var Ge=arguments.length-2;if(Ge===1)ke.children=ye;else if(1<Ge){Fe=Array(Ge);for(var Ct=0;Ct<Ge;Ct++)Fe[Ct]=arguments[Ct+2];ke.children=Fe}return{$$typeof:n,type:L.type,key:Z,ref:he,props:ke,_owner:De}},Ne.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},Ne.createElement=S,Ne.createFactory=function(L){var H=S.bind(null,L);return H.type=L,H},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(L){return{$$typeof:d,render:L}},Ne.isValidElement=N,Ne.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Pt}},Ne.memo=function(L,H){return{$$typeof:_,type:L,compare:H===void 0?null:H}},Ne.startTransition=function(L){var H=oe.transition;oe.transition={};try{L()}finally{oe.transition=H}},Ne.unstable_act=ue,Ne.useCallback=function(L,H){return $e.current.useCallback(L,H)},Ne.useContext=function(L){return $e.current.useContext(L)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(L){return $e.current.useDeferredValue(L)},Ne.useEffect=function(L,H){return $e.current.useEffect(L,H)},Ne.useId=function(){return $e.current.useId()},Ne.useImperativeHandle=function(L,H,ye){return $e.current.useImperativeHandle(L,H,ye)},Ne.useInsertionEffect=function(L,H){return $e.current.useInsertionEffect(L,H)},Ne.useLayoutEffect=function(L,H){return $e.current.useLayoutEffect(L,H)},Ne.useMemo=function(L,H){return $e.current.useMemo(L,H)},Ne.useReducer=function(L,H,ye){return $e.current.useReducer(L,H,ye)},Ne.useRef=function(L){return $e.current.useRef(L)},Ne.useState=function(L){return $e.current.useState(L)},Ne.useSyncExternalStore=function(L,H,ye){return $e.current.useSyncExternalStore(L,H,ye)},Ne.useTransition=function(){return $e.current.useTransition()},Ne.version="18.3.1",Ne}var Py;function hm(){return Py||(Py=1,ip.exports=GS()),ip.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function QS(){if(Cy)return xl;Cy=1;var n=hm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,_){var v,w={},T=null,D=null;_!==void 0&&(T=""+_),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(D=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:D,props:w,_owner:o.current}}return xl.Fragment=t,xl.jsx=u,xl.jsxs=u,xl}var ky;function XS(){return ky||(ky=1,rp.exports=QS()),rp.exports}var W=XS(),G=hm();const iw=rw(G),YS=HS({__proto__:null,default:iw},[G]);var Jc={},sp={exports:{}},hn={},op={exports:{}},ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function JS(){return xy||(xy=1,(function(n){function e(oe,Ee){var ue=oe.length;oe.push(Ee);e:for(;0<ue;){var L=ue-1>>>1,H=oe[L];if(0<o(H,Ee))oe[L]=Ee,oe[ue]=H,ue=L;else break e}}function t(oe){return oe.length===0?null:oe[0]}function r(oe){if(oe.length===0)return null;var Ee=oe[0],ue=oe.pop();if(ue!==Ee){oe[0]=ue;e:for(var L=0,H=oe.length,ye=H>>>1;L<ye;){var ke=2*(L+1)-1,Z=oe[ke],he=ke+1,De=oe[he];if(0>o(Z,ue))he<H&&0>o(De,Z)?(oe[L]=De,oe[he]=ue,L=he):(oe[L]=Z,oe[ke]=ue,L=ke);else if(he<H&&0>o(De,ue))oe[L]=De,oe[he]=ue,L=he;else break e}}return Ee}function o(oe,Ee){var ue=oe.sortIndex-Ee.sortIndex;return ue!==0?ue:oe.id-Ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],_=[],v=1,w=null,T=3,D=!1,j=!1,z=!1,V=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(oe){for(var Ee=t(_);Ee!==null;){if(Ee.callback===null)r(_);else if(Ee.startTime<=oe)r(_),Ee.sortIndex=Ee.expirationTime,e(f,Ee);else break;Ee=t(_)}}function le(oe){if(z=!1,J(oe),!j)if(t(f)!==null)j=!0,Pt(we);else{var Ee=t(_);Ee!==null&&$e(le,Ee.startTime-oe)}}function we(oe,Ee){j=!1,z&&(z=!1,re(S),S=-1),D=!0;var ue=T;try{for(J(Ee),w=t(f);w!==null&&(!(w.expirationTime>Ee)||oe&&!O());){var L=w.callback;if(typeof L=="function"){w.callback=null,T=w.priorityLevel;var H=L(w.expirationTime<=Ee);Ee=n.unstable_now(),typeof H=="function"?w.callback=H:w===t(f)&&r(f),J(Ee)}else r(f);w=t(f)}if(w!==null)var ye=!0;else{var ke=t(_);ke!==null&&$e(le,ke.startTime-Ee),ye=!1}return ye}finally{w=null,T=ue,D=!1}}var me=!1,x=null,S=-1,P=5,N=-1;function O(){return!(n.unstable_now()-N<P)}function C(){if(x!==null){var oe=n.unstable_now();N=oe;var Ee=!0;try{Ee=x(!0,oe)}finally{Ee?R():(me=!1,x=null)}}else me=!1}var R;if(typeof te=="function")R=function(){te(C)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Rt=Ye.port2;Ye.port1.onmessage=C,R=function(){Rt.postMessage(null)}}else R=function(){V(C,0)};function Pt(oe){x=oe,me||(me=!0,R())}function $e(oe,Ee){S=V(function(){oe(n.unstable_now())},Ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){j||D||(j=!0,Pt(we))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(oe){switch(T){case 1:case 2:case 3:var Ee=3;break;default:Ee=T}var ue=T;T=Ee;try{return oe()}finally{T=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,Ee){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ue=T;T=oe;try{return Ee()}finally{T=ue}},n.unstable_scheduleCallback=function(oe,Ee,ue){var L=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?L+ue:L):ue=L,oe){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ue+H,oe={id:v++,callback:Ee,priorityLevel:oe,startTime:ue,expirationTime:H,sortIndex:-1},ue>L?(oe.sortIndex=ue,e(_,oe),t(f)===null&&oe===t(_)&&(z?(re(S),S=-1):z=!0,$e(le,ue-L))):(oe.sortIndex=H,e(f,oe),j||D||(j=!0,Pt(we))),oe},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(oe){var Ee=T;return function(){var ue=T;T=Ee;try{return oe.apply(this,arguments)}finally{T=ue}}}})(ap)),ap}var Ny;function ZS(){return Ny||(Ny=1,op.exports=JS()),op.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function e1(){if(Dy)return hn;Dy=1;var n=hm(),e=ZS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:_.test(i)?w[i]=!0:(v[i]=!0,!1)}function D(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function j(i,s,l,h){if(s===null||typeof s>"u"||D(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(i,s,l,h,p,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){V[i]=new z(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];V[s]=new z(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){V[i]=new z(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){V[i]=new z(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){V[i]=new z(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){V[i]=new z(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){V[i]=new z(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){V[i]=new z(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){V[i]=new z(i,5,!1,i.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function te(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(re,te);V[s]=new z(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(re,te);V[s]=new z(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(re,te);V[s]=new z(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){V[i]=new z(i,1,!1,i.toLowerCase(),null,!1,!1)}),V.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){V[i]=new z(i,1,!1,i.toLowerCase(),null,!0,!0)});function J(i,s,l,h){var p=V.hasOwnProperty(s)?V[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(j(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),me=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),oe=Symbol.iterator;function Ee(i){return i===null||typeof i!="object"?null:(i=oe&&i[oe]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,L;function H(i){if(L===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+i}var ye=!1;function ke(i,s){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(i,[],s)}else{try{s.call()}catch($){h=$}i.call(s.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),g=h.stack.split(`
`),E=p.length-1,A=g.length-1;1<=E&&0<=A&&p[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(p[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||p[E]!==g[A]){var k=`
`+p[E].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=E&&0<=A);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?H(i):""}function Z(i){switch(i.tag){case 5:return H(i.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return i=ke(i.type,!1),i;case 11:return i=ke(i.type.render,!1),i;case 1:return i=ke(i.type,!0),i;default:return""}}function he(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case me:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case Ye:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case C:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Rt:return s=i.displayName||null,s!==null?s:he(i.type)||"Memo";case Pt:s=i._payload,i=i._init;try{return he(i(s))}catch{}}return null}function De(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ct(i){var s=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pr(i){i._valueTracker||(i._valueTracker=Ct(i))}function so(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ge(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ni(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function es(i,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function oo(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Fe(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function La(i,s){s=s.checked,s!=null&&J(i,"checked",s,!1)}function Ma(i,s){La(i,s);var l=Fe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?ao(i,s.type,l):s.hasOwnProperty("defaultValue")&&ao(i,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Mu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ao(i,s,l){(s!=="number"||ni(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Cr=Array.isArray;function kr(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Fe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Fa(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function lo(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Cr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Fe(l)}}function uo(i,s){var l=Fe(s.value),h=Fe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ua(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function vt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?vt(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var xr,ja=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=xr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ri(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ns=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(i){ns.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ts[s]=ts[i]})});function Ba(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ts.hasOwnProperty(i)&&ts[i]?(""+s).trim():s+"px"}function za(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ba(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var $a=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(i,s){if(s){if($a[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Wa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function co(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ho=null,Sn=null,rr=null;function fo(i){if(i=ml(i)){if(typeof ho!="function")throw Error(t(280));var s=i.stateNode;s&&(s=fc(s),ho(i.stateNode,i.type,s))}}function ir(i){Sn?rr?rr.push(i):rr=[i]:Sn=i}function Ka(){if(Sn){var i=Sn,s=rr;if(rr=Sn=null,fo(i),s)for(i=0;i<s.length;i++)fo(s[i])}}function is(i,s){return i(s)}function Ha(){}var Nr=!1;function Ga(i,s,l){if(Nr)return i(s,l);Nr=!0;try{return is(i,s,l)}finally{Nr=!1,(Sn!==null||rr!==null)&&(Ha(),Ka())}}function ut(i,s){var l=i.stateNode;if(l===null)return null;var h=fc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var po=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){po=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{po=!1}function ss(i,s,l,h,p,g,E,A,k){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(X){this.onError(X)}}var os=!1,mo=null,Fn=!1,Qa=null,xd={onError:function(i){os=!0,mo=i}};function go(i,s,l,h,p,g,E,A,k){os=!1,mo=null,ss.apply(xd,arguments)}function Fu(i,s,l,h,p,g,E,A,k){if(go.apply(this,arguments),os){if(os){var $=mo;os=!1,mo=null}else throw Error(t(198));Fn||(Fn=!0,Qa=$)}}function Un(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function as(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function jn(i){if(Un(i)!==i)throw Error(t(188))}function Uu(i){var s=i.alternate;if(!s){if(s=Un(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return jn(p),i;if(g===h)return jn(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var E=!1,A=p.child;A;){if(A===l){E=!0,l=p,h=g;break}if(A===h){E=!0,h=p,l=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===l){E=!0,l=g,h=p;break}if(A===h){E=!0,h=g,l=p;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Xa(i){return i=Uu(i),i!==null?_o(i):null}function _o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=_o(i);if(s!==null)return s;i=i.sibling}return null}var yo=e.unstable_scheduleCallback,Ya=e.unstable_cancelCallback,ju=e.unstable_shouldYield,Nd=e.unstable_requestPaint,Qe=e.unstable_now,Bu=e.unstable_getCurrentPriorityLevel,ls=e.unstable_ImmediatePriority,ii=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Ja=e.unstable_LowPriority,zu=e.unstable_IdlePriority,us=null,fn=null;function $u(i){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(us,i,void 0,(i.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Wu,Za=Math.log,qu=Math.LN2;function Wu(i){return i>>>=0,i===0?32:31-(Za(i)/qu|0)|0}var vo=64,Eo=4194304;function si(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function cs(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,g=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~p;A!==0?h=si(A):(g&=E,g!==0&&(h=si(g)))}else E=l&~p,E!==0?h=si(E):g!==0&&(h=si(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Qt(s),p=1<<l,h|=i[l],s&=~p;return h}function Dd(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var E=31-Qt(g),A=1<<E,k=p[E];k===-1?((A&l)===0||(A&h)!==0)&&(p[E]=Dd(A,s)):k<=s&&(i.expiredLanes|=A),g&=~A}}function pn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function hs(){var i=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),i}function oi(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ai(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Qt(s),i[s]=l}function He(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Qt(l),g=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~g}}function li(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Qt(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var Oe=0;function ui(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ku,wo,Hu,Gu,Qu,el=!1,sr=[],Vt=null,Bn=null,zn=null,ci=new Map,Rn=new Map,or=[],bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(i,s){switch(i){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(s.pointerId)}}function rn(i,s,l,h,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=ml(s),s!==null&&wo(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Vd(i,s,l,h,p){switch(s){case"focusin":return Vt=rn(Vt,i,s,l,h,p),!0;case"dragenter":return Bn=rn(Bn,i,s,l,h,p),!0;case"mouseover":return zn=rn(zn,i,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return ci.set(g,rn(ci.get(g)||null,i,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Rn.set(g,rn(Rn.get(g)||null,i,s,l,h,p)),!0}return!1}function Yu(i){var s=gs(i.target);if(s!==null){var l=Un(s);if(l!==null){if(s=l.tag,s===13){if(s=as(l),s!==null){i.blockedOn=s,Qu(i.priority,function(){Hu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function br(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Io(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);rs=h,l.target.dispatchEvent(h),rs=null}else return s=ml(l),s!==null&&wo(s),i.blockedOn=l,!1;s.shift()}return!0}function ds(i,s,l){br(i)&&l.delete(s)}function Ju(){el=!1,Vt!==null&&br(Vt)&&(Vt=null),Bn!==null&&br(Bn)&&(Bn=null),zn!==null&&br(zn)&&(zn=null),ci.forEach(ds),Rn.forEach(ds)}function $n(i,s){i.blockedOn===s&&(i.blockedOn=null,el||(el=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ju)))}function qn(i){function s(p){return $n(p,i)}if(0<sr.length){$n(sr[0],i);for(var l=1;l<sr.length;l++){var h=sr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Vt!==null&&$n(Vt,i),Bn!==null&&$n(Bn,i),zn!==null&&$n(zn,i),ci.forEach(s),Rn.forEach(s),l=0;l<or.length;l++)h=or[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<or.length&&(l=or[0],l.blockedOn===null);)Yu(l),l.blockedOn===null&&or.shift()}var Vr=le.ReactCurrentBatchConfig,hi=!0;function et(i,s,l,h){var p=Oe,g=Vr.transition;Vr.transition=null;try{Oe=1,tl(i,s,l,h)}finally{Oe=p,Vr.transition=g}}function Od(i,s,l,h){var p=Oe,g=Vr.transition;Vr.transition=null;try{Oe=4,tl(i,s,l,h)}finally{Oe=p,Vr.transition=g}}function tl(i,s,l,h){if(hi){var p=Io(i,s,l,h);if(p===null)Kd(i,s,h,fs,l),Xu(i,h);else if(Vd(p,i,s,l,h))h.stopPropagation();else if(Xu(i,h),s&4&&-1<bd.indexOf(i)){for(;p!==null;){var g=ml(p);if(g!==null&&Ku(g),g=Io(i,s,l,h),g===null&&Kd(i,s,h,fs,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else Kd(i,s,h,null,l)}}var fs=null;function Io(i,s,l,h){if(fs=null,i=co(h),i=gs(i),i!==null)if(s=Un(i),s===null)i=null;else if(l=s.tag,l===13){if(i=as(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fs=i,null}function nl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case ls:return 1;case ii:return 4;case An:case Ja:return 16;case zu:return 536870912;default:return 16}default:return 16}}var mn=null,To=null,sn=null;function rl(){if(sn)return sn;var i,s=To,l=s.length,h,p="value"in mn?mn.value:mn.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&s[l-h]===p[g-h];h++);return sn=p.slice(i,1<h?1-h:void 0)}function So(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ar(){return!0}function il(){return!1}function Ot(i){function s(l,h,p,g,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ar:il,this.isPropagationStopped=il,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ao=Ot(Wn),lr=ue({},Wn,{view:0,detail:0}),Ld=Ot(lr),Ro,Or,di,ps=ue({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==di&&(di&&i.type==="mousemove"?(Ro=i.screenX-di.screenX,Or=i.screenY-di.screenY):Or=Ro=0,di=i),Ro)},movementY:function(i){return"movementY"in i?i.movementY:Or}}),Po=Ot(ps),sl=ue({},ps,{dataTransfer:0}),Zu=Ot(sl),Co=ue({},lr,{relatedTarget:0}),ko=Ot(Co),ec=ue({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lr=Ot(ec),tc=ue({},Wn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),nc=Ot(tc),rc=ue({},Wn,{data:0}),ol=Ot(rc),xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ic[i])?!!s[i]:!1}function ur(){return sc}var c=ue({},lr,{key:function(i){if(i.key){var s=xo[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=So(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xt[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(i){return i.type==="keypress"?So(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?So(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Ot(c),y=ue({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ot(y),M=ue({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),q=Ot(M),ie=ue({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Ot(ie),wt=ue({},ps,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Ot(wt),kt=[9,13,27,32],dt=d&&"CompositionEvent"in window,Pn=null;d&&"documentMode"in document&&(Pn=document.documentMode);var gn=d&&"TextEvent"in window&&!Pn,ms=d&&(!dt||Pn&&8<Pn&&11>=Pn),No=" ",Eg=!1;function wg(i,s){switch(i){case"keyup":return kt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Do=!1;function qT(i,s){switch(i){case"compositionend":return Ig(s);case"keypress":return s.which!==32?null:(Eg=!0,No);case"textInput":return i=s.data,i===No&&Eg?null:i;default:return null}}function WT(i,s){if(Do)return i==="compositionend"||!dt&&wg(i,s)?(i=rl(),sn=To=mn=null,Do=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ms&&s.locale!=="ko"?null:s.data;default:return null}}var KT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!KT[i.type]:s==="textarea"}function Sg(i,s,l,h){ir(h),s=cc(s,"onChange"),0<s.length&&(l=new Ao("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var al=null,ll=null;function HT(i){zg(i,0)}function oc(i){var s=Mo(i);if(so(s))return i}function GT(i,s){if(i==="change")return s}var Ag=!1;if(d){var Md;if(d){var Fd="oninput"in document;if(!Fd){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),Fd=typeof Rg.oninput=="function"}Md=Fd}else Md=!1;Ag=Md&&(!document.documentMode||9<document.documentMode)}function Pg(){al&&(al.detachEvent("onpropertychange",Cg),ll=al=null)}function Cg(i){if(i.propertyName==="value"&&oc(ll)){var s=[];Sg(s,ll,i,co(i)),Ga(HT,s)}}function QT(i,s,l){i==="focusin"?(Pg(),al=s,ll=l,al.attachEvent("onpropertychange",Cg)):i==="focusout"&&Pg()}function XT(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return oc(ll)}function YT(i,s){if(i==="click")return oc(s)}function JT(i,s){if(i==="input"||i==="change")return oc(s)}function ZT(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:ZT;function ul(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!Kn(i[p],s[p]))return!1}return!0}function kg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function xg(i,s){var l=kg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=kg(l)}}function Ng(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Ng(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Dg(){for(var i=window,s=ni();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ni(i.document)}return s}function Ud(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function eS(i){var s=Dg(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Ng(l.ownerDocument.documentElement,l)){if(h!==null&&Ud(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!i.extend&&g>h&&(p=h,h=g,g=p),p=xg(l,g);var E=xg(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var tS=d&&"documentMode"in document&&11>=document.documentMode,bo=null,jd=null,cl=null,Bd=!1;function bg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bd||bo==null||bo!==ni(h)||(h=bo,"selectionStart"in h&&Ud(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),cl&&ul(cl,h)||(cl=h,h=cc(jd,"onSelect"),0<h.length&&(s=new Ao("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=bo)))}function ac(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Vo={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},zd={},Vg={};d&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function lc(i){if(zd[i])return zd[i];if(!Vo[i])return i;var s=Vo[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Vg)return zd[i]=s[l];return i}var Og=lc("animationend"),Lg=lc("animationiteration"),Mg=lc("animationstart"),Fg=lc("transitionend"),Ug=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(i,s){Ug.set(i,s),a(s,[i])}for(var $d=0;$d<jg.length;$d++){var qd=jg[$d],nS=qd.toLowerCase(),rS=qd[0].toUpperCase()+qd.slice(1);fi(nS,"on"+rS)}fi(Og,"onAnimationEnd"),fi(Lg,"onAnimationIteration"),fi(Mg,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Fg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function Bg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Fu(h,s,void 0,i),i.currentTarget=null}function zg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var A=h[E],k=A.instance,$=A.currentTarget;if(A=A.listener,k!==g&&p.isPropagationStopped())break e;Bg(p,A,$),g=k}else for(E=0;E<h.length;E++){if(A=h[E],k=A.instance,$=A.currentTarget,A=A.listener,k!==g&&p.isPropagationStopped())break e;Bg(p,A,$),g=k}}}if(Fn)throw i=Qa,Fn=!1,Qa=null,i}function Je(i,s){var l=s[Jd];l===void 0&&(l=s[Jd]=new Set);var h=i+"__bubble";l.has(h)||($g(s,i,2,!1),l.add(h))}function Wd(i,s,l){var h=0;s&&(h|=4),$g(l,i,h,s)}var uc="_reactListening"+Math.random().toString(36).slice(2);function dl(i){if(!i[uc]){i[uc]=!0,r.forEach(function(l){l!=="selectionchange"&&(iS.has(l)||Wd(l,!1,i),Wd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[uc]||(s[uc]=!0,Wd("selectionchange",!1,s))}}function $g(i,s,l,h){switch(nl(s)){case 1:var p=et;break;case 4:p=Od;break;default:p=tl}l=p.bind(null,s,l,i),p=void 0,!po||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Kd(i,s,l,h,p){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;E=E.return}for(;A!==null;){if(E=gs(A),E===null)return;if(k=E.tag,k===5||k===6){h=g=E;continue e}A=A.parentNode}}h=h.return}Ga(function(){var $=g,X=co(l),Y=[];e:{var Q=Ug.get(i);if(Q!==void 0){var ce=Ao,fe=i;switch(i){case"keypress":if(So(l)===0)break e;case"keydown":case"keyup":ce=m;break;case"focusin":fe="focus",ce=ko;break;case"focusout":fe="blur",ce=ko;break;case"beforeblur":case"afterblur":ce=ko;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Zu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=q;break;case Og:case Lg:case Mg:ce=Lr;break;case Fg:ce=qe;break;case"scroll":ce=Ld;break;case"wheel":ce=Le;break;case"copy":case"cut":case"paste":ce=nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=I}var ge=(s&4)!==0,ct=!ge&&i==="scroll",U=ge?Q!==null?Q+"Capture":null:Q;ge=[];for(var b=$,B;b!==null;){B=b;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,U!==null&&(ne=ut(b,U),ne!=null&&ge.push(fl(b,ne,B)))),ct)break;b=b.return}0<ge.length&&(Q=new ce(Q,fe,null,l,X),Y.push({event:Q,listeners:ge}))}}if((s&7)===0){e:{if(Q=i==="mouseover"||i==="pointerover",ce=i==="mouseout"||i==="pointerout",Q&&l!==rs&&(fe=l.relatedTarget||l.fromElement)&&(gs(fe)||fe[Mr]))break e;if((ce||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ce?(fe=l.relatedTarget||l.toElement,ce=$,fe=fe?gs(fe):null,fe!==null&&(ct=Un(fe),fe!==ct||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ce=null,fe=$),ce!==fe)){if(ge=Po,ne="onMouseLeave",U="onMouseEnter",b="mouse",(i==="pointerout"||i==="pointerover")&&(ge=I,ne="onPointerLeave",U="onPointerEnter",b="pointer"),ct=ce==null?Q:Mo(ce),B=fe==null?Q:Mo(fe),Q=new ge(ne,b+"leave",ce,l,X),Q.target=ct,Q.relatedTarget=B,ne=null,gs(X)===$&&(ge=new ge(U,b+"enter",fe,l,X),ge.target=B,ge.relatedTarget=ct,ne=ge),ct=ne,ce&&fe)t:{for(ge=ce,U=fe,b=0,B=ge;B;B=Oo(B))b++;for(B=0,ne=U;ne;ne=Oo(ne))B++;for(;0<b-B;)ge=Oo(ge),b--;for(;0<B-b;)U=Oo(U),B--;for(;b--;){if(ge===U||U!==null&&ge===U.alternate)break t;ge=Oo(ge),U=Oo(U)}ge=null}else ge=null;ce!==null&&qg(Y,Q,ce,ge,!1),fe!==null&&ct!==null&&qg(Y,ct,fe,ge,!0)}}e:{if(Q=$?Mo($):window,ce=Q.nodeName&&Q.nodeName.toLowerCase(),ce==="select"||ce==="input"&&Q.type==="file")var _e=GT;else if(Tg(Q))if(Ag)_e=JT;else{_e=XT;var Te=QT}else(ce=Q.nodeName)&&ce.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(_e=YT);if(_e&&(_e=_e(i,$))){Sg(Y,_e,l,X);break e}Te&&Te(i,Q,$),i==="focusout"&&(Te=Q._wrapperState)&&Te.controlled&&Q.type==="number"&&ao(Q,"number",Q.value)}switch(Te=$?Mo($):window,i){case"focusin":(Tg(Te)||Te.contentEditable==="true")&&(bo=Te,jd=$,cl=null);break;case"focusout":cl=jd=bo=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,bg(Y,l,X);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":bg(Y,l,X)}var Se;if(dt)e:{switch(i){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Do?wg(i,l)&&(Pe="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Pe="onCompositionStart");Pe&&(ms&&l.locale!=="ko"&&(Do||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Do&&(Se=rl()):(mn=X,To="value"in mn?mn.value:mn.textContent,Do=!0)),Te=cc($,Pe),0<Te.length&&(Pe=new ol(Pe,i,null,l,X),Y.push({event:Pe,listeners:Te}),Se?Pe.data=Se:(Se=Ig(l),Se!==null&&(Pe.data=Se)))),(Se=gn?qT(i,l):WT(i,l))&&($=cc($,"onBeforeInput"),0<$.length&&(X=new ol("onBeforeInput","beforeinput",null,l,X),Y.push({event:X,listeners:$}),X.data=Se))}zg(Y,s)})}function fl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function cc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=ut(i,l),g!=null&&h.unshift(fl(i,g,p)),g=ut(i,s),g!=null&&h.push(fl(i,g,p))),i=i.return}return h}function Oo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function qg(i,s,l,h,p){for(var g=s._reactName,E=[];l!==null&&l!==h;){var A=l,k=A.alternate,$=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&$!==null&&(A=$,p?(k=ut(l,g),k!=null&&E.unshift(fl(l,k,A))):p||(k=ut(l,g),k!=null&&E.push(fl(l,k,A)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function Wg(i){return(typeof i=="string"?i:""+i).replace(sS,`
`).replace(oS,"")}function hc(i,s,l){if(s=Wg(s),Wg(i)!==s&&l)throw Error(t(425))}function dc(){}var Hd=null,Gd=null;function Qd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(i){return Kg.resolve(null).then(i).catch(uS)}:Xd;function uS(i){setTimeout(function(){throw i})}function Yd(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),qn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);qn(s)}function pi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Hg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),cr="__reactFiber$"+Lo,pl="__reactProps$"+Lo,Mr="__reactContainer$"+Lo,Jd="__reactEvents$"+Lo,cS="__reactListeners$"+Lo,hS="__reactHandles$"+Lo;function gs(i){var s=i[cr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Mr]||l[cr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Hg(i);i!==null;){if(l=i[cr])return l;i=Hg(i)}return s}i=l,l=i.parentNode}return null}function ml(i){return i=i[cr]||i[Mr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Mo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function fc(i){return i[pl]||null}var Zd=[],Fo=-1;function mi(i){return{current:i}}function Ze(i){0>Fo||(i.current=Zd[Fo],Zd[Fo]=null,Fo--)}function Xe(i,s){Fo++,Zd[Fo]=i.current,i.current=s}var gi={},Bt=mi(gi),on=mi(!1),_s=gi;function Uo(i,s){var l=i.type.contextTypes;if(!l)return gi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function an(i){return i=i.childContextTypes,i!=null}function pc(){Ze(on),Ze(Bt)}function Gg(i,s,l){if(Bt.current!==gi)throw Error(t(168));Xe(Bt,s),Xe(on,l)}function Qg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,De(i)||"Unknown",p));return ue({},l,h)}function mc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||gi,_s=Bt.current,Xe(Bt,i),Xe(on,on.current),!0}function Xg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Qg(i,s,_s),h.__reactInternalMemoizedMergedChildContext=i,Ze(on),Ze(Bt),Xe(Bt,i)):Ze(on),Xe(on,l)}var Fr=null,gc=!1,ef=!1;function Yg(i){Fr===null?Fr=[i]:Fr.push(i)}function dS(i){gc=!0,Yg(i)}function _i(){if(!ef&&Fr!==null){ef=!0;var i=0,s=Oe;try{var l=Fr;for(Oe=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Fr=null,gc=!1}catch(p){throw Fr!==null&&(Fr=Fr.slice(i+1)),yo(ls,_i),p}finally{Oe=s,ef=!1}}return null}var jo=[],Bo=0,_c=null,yc=0,Cn=[],kn=0,ys=null,Ur=1,jr="";function vs(i,s){jo[Bo++]=yc,jo[Bo++]=_c,_c=i,yc=s}function Jg(i,s,l){Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=ys,ys=i;var h=Ur;i=jr;var p=32-Qt(h)-1;h&=~(1<<p),l+=1;var g=32-Qt(s)+p;if(30<g){var E=p-p%5;g=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Ur=1<<32-Qt(s)+p|l<<p|h,jr=g+i}else Ur=1<<g|l<<p|h,jr=i}function tf(i){i.return!==null&&(vs(i,1),Jg(i,1,0))}function nf(i){for(;i===_c;)_c=jo[--Bo],jo[Bo]=null,yc=jo[--Bo],jo[Bo]=null;for(;i===ys;)ys=Cn[--kn],Cn[kn]=null,jr=Cn[--kn],Cn[kn]=null,Ur=Cn[--kn],Cn[kn]=null}var _n=null,yn=null,tt=!1,Hn=null;function Zg(i,s){var l=bn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function e_(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,_n=i,yn=pi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,_n=i,yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ys!==null?{id:Ur,overflow:jr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=bn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,_n=i,yn=null,!0):!1;default:return!1}}function rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function sf(i){if(tt){var s=yn;if(s){var l=s;if(!e_(i,s)){if(rf(i))throw Error(t(418));s=pi(l.nextSibling);var h=_n;s&&e_(i,s)?Zg(h,l):(i.flags=i.flags&-4097|2,tt=!1,_n=i)}}else{if(rf(i))throw Error(t(418));i.flags=i.flags&-4097|2,tt=!1,_n=i}}}function t_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;_n=i}function vc(i){if(i!==_n)return!1;if(!tt)return t_(i),tt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Qd(i.type,i.memoizedProps)),s&&(s=yn)){if(rf(i))throw n_(),Error(t(418));for(;s;)Zg(i,s),s=pi(s.nextSibling)}if(t_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){yn=pi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}yn=null}}else yn=_n?pi(i.stateNode.nextSibling):null;return!0}function n_(){for(var i=yn;i;)i=pi(i.nextSibling)}function zo(){yn=_n=null,tt=!1}function of(i){Hn===null?Hn=[i]:Hn.push(i)}var fS=le.ReactCurrentBatchConfig;function gl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=p.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ec(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function r_(i){var s=i._init;return s(i._payload)}function i_(i){function s(U,b){if(i){var B=U.deletions;B===null?(U.deletions=[b],U.flags|=16):B.push(b)}}function l(U,b){if(!i)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function h(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function p(U,b){return U=Ai(U,b),U.index=0,U.sibling=null,U}function g(U,b,B){return U.index=B,i?(B=U.alternate,B!==null?(B=B.index,B<b?(U.flags|=2,b):B):(U.flags|=2,b)):(U.flags|=1048576,b)}function E(U){return i&&U.alternate===null&&(U.flags|=2),U}function A(U,b,B,ne){return b===null||b.tag!==6?(b=Yf(B,U.mode,ne),b.return=U,b):(b=p(b,B),b.return=U,b)}function k(U,b,B,ne){var _e=B.type;return _e===x?X(U,b,B.props.children,ne,B.key):b!==null&&(b.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Pt&&r_(_e)===b.type)?(ne=p(b,B.props),ne.ref=gl(U,b,B),ne.return=U,ne):(ne=qc(B.type,B.key,B.props,null,U.mode,ne),ne.ref=gl(U,b,B),ne.return=U,ne)}function $(U,b,B,ne){return b===null||b.tag!==4||b.stateNode.containerInfo!==B.containerInfo||b.stateNode.implementation!==B.implementation?(b=Jf(B,U.mode,ne),b.return=U,b):(b=p(b,B.children||[]),b.return=U,b)}function X(U,b,B,ne,_e){return b===null||b.tag!==7?(b=Ps(B,U.mode,ne,_e),b.return=U,b):(b=p(b,B),b.return=U,b)}function Y(U,b,B){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Yf(""+b,U.mode,B),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case we:return B=qc(b.type,b.key,b.props,null,U.mode,B),B.ref=gl(U,null,b),B.return=U,B;case me:return b=Jf(b,U.mode,B),b.return=U,b;case Pt:var ne=b._init;return Y(U,ne(b._payload),B)}if(Cr(b)||Ee(b))return b=Ps(b,U.mode,B,null),b.return=U,b;Ec(U,b)}return null}function Q(U,b,B,ne){var _e=b!==null?b.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return _e!==null?null:A(U,b,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case we:return B.key===_e?k(U,b,B,ne):null;case me:return B.key===_e?$(U,b,B,ne):null;case Pt:return _e=B._init,Q(U,b,_e(B._payload),ne)}if(Cr(B)||Ee(B))return _e!==null?null:X(U,b,B,ne,null);Ec(U,B)}return null}function ce(U,b,B,ne,_e){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(B)||null,A(b,U,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case we:return U=U.get(ne.key===null?B:ne.key)||null,k(b,U,ne,_e);case me:return U=U.get(ne.key===null?B:ne.key)||null,$(b,U,ne,_e);case Pt:var Te=ne._init;return ce(U,b,B,Te(ne._payload),_e)}if(Cr(ne)||Ee(ne))return U=U.get(B)||null,X(b,U,ne,_e,null);Ec(b,ne)}return null}function fe(U,b,B,ne){for(var _e=null,Te=null,Se=b,Pe=b=0,Dt=null;Se!==null&&Pe<B.length;Pe++){Se.index>Pe?(Dt=Se,Se=null):Dt=Se.sibling;var je=Q(U,Se,B[Pe],ne);if(je===null){Se===null&&(Se=Dt);break}i&&Se&&je.alternate===null&&s(U,Se),b=g(je,b,Pe),Te===null?_e=je:Te.sibling=je,Te=je,Se=Dt}if(Pe===B.length)return l(U,Se),tt&&vs(U,Pe),_e;if(Se===null){for(;Pe<B.length;Pe++)Se=Y(U,B[Pe],ne),Se!==null&&(b=g(Se,b,Pe),Te===null?_e=Se:Te.sibling=Se,Te=Se);return tt&&vs(U,Pe),_e}for(Se=h(U,Se);Pe<B.length;Pe++)Dt=ce(Se,U,Pe,B[Pe],ne),Dt!==null&&(i&&Dt.alternate!==null&&Se.delete(Dt.key===null?Pe:Dt.key),b=g(Dt,b,Pe),Te===null?_e=Dt:Te.sibling=Dt,Te=Dt);return i&&Se.forEach(function(Ri){return s(U,Ri)}),tt&&vs(U,Pe),_e}function ge(U,b,B,ne){var _e=Ee(B);if(typeof _e!="function")throw Error(t(150));if(B=_e.call(B),B==null)throw Error(t(151));for(var Te=_e=null,Se=b,Pe=b=0,Dt=null,je=B.next();Se!==null&&!je.done;Pe++,je=B.next()){Se.index>Pe?(Dt=Se,Se=null):Dt=Se.sibling;var Ri=Q(U,Se,je.value,ne);if(Ri===null){Se===null&&(Se=Dt);break}i&&Se&&Ri.alternate===null&&s(U,Se),b=g(Ri,b,Pe),Te===null?_e=Ri:Te.sibling=Ri,Te=Ri,Se=Dt}if(je.done)return l(U,Se),tt&&vs(U,Pe),_e;if(Se===null){for(;!je.done;Pe++,je=B.next())je=Y(U,je.value,ne),je!==null&&(b=g(je,b,Pe),Te===null?_e=je:Te.sibling=je,Te=je);return tt&&vs(U,Pe),_e}for(Se=h(U,Se);!je.done;Pe++,je=B.next())je=ce(Se,U,Pe,je.value,ne),je!==null&&(i&&je.alternate!==null&&Se.delete(je.key===null?Pe:je.key),b=g(je,b,Pe),Te===null?_e=je:Te.sibling=je,Te=je);return i&&Se.forEach(function(KS){return s(U,KS)}),tt&&vs(U,Pe),_e}function ct(U,b,B,ne){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case we:e:{for(var _e=B.key,Te=b;Te!==null;){if(Te.key===_e){if(_e=B.type,_e===x){if(Te.tag===7){l(U,Te.sibling),b=p(Te,B.props.children),b.return=U,U=b;break e}}else if(Te.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Pt&&r_(_e)===Te.type){l(U,Te.sibling),b=p(Te,B.props),b.ref=gl(U,Te,B),b.return=U,U=b;break e}l(U,Te);break}else s(U,Te);Te=Te.sibling}B.type===x?(b=Ps(B.props.children,U.mode,ne,B.key),b.return=U,U=b):(ne=qc(B.type,B.key,B.props,null,U.mode,ne),ne.ref=gl(U,b,B),ne.return=U,U=ne)}return E(U);case me:e:{for(Te=B.key;b!==null;){if(b.key===Te)if(b.tag===4&&b.stateNode.containerInfo===B.containerInfo&&b.stateNode.implementation===B.implementation){l(U,b.sibling),b=p(b,B.children||[]),b.return=U,U=b;break e}else{l(U,b);break}else s(U,b);b=b.sibling}b=Jf(B,U.mode,ne),b.return=U,U=b}return E(U);case Pt:return Te=B._init,ct(U,b,Te(B._payload),ne)}if(Cr(B))return fe(U,b,B,ne);if(Ee(B))return ge(U,b,B,ne);Ec(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,b!==null&&b.tag===6?(l(U,b.sibling),b=p(b,B),b.return=U,U=b):(l(U,b),b=Yf(B,U.mode,ne),b.return=U,U=b),E(U)):l(U,b)}return ct}var $o=i_(!0),s_=i_(!1),wc=mi(null),Ic=null,qo=null,af=null;function lf(){af=qo=Ic=null}function uf(i){var s=wc.current;Ze(wc),i._currentValue=s}function cf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Wo(i,s){Ic=i,af=qo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ln=!0),i.firstContext=null)}function xn(i){var s=i._currentValue;if(af!==i)if(i={context:i,memoizedValue:s,next:null},qo===null){if(Ic===null)throw Error(t(308));qo=i,Ic.dependencies={lanes:0,firstContext:i}}else qo=qo.next=i;return s}var Es=null;function hf(i){Es===null?Es=[i]:Es.push(i)}function o_(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,hf(s)):(l.next=p.next,p.next=l),s.interleaved=l,Br(i,h)}function Br(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var yi=!1;function df(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Br(i,l)}return p=h.interleaved,p===null?(s.next=s,hf(h)):(s.next=p.next,p.next=s),h.interleaved=s,Br(i,l)}function Tc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,li(i,l)}}function l_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Sc(i,s,l,h){var p=i.updateQueue;yi=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var k=A,$=k.next;k.next=null,E===null?g=$:E.next=$,E=k;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=k))}if(g!==null){var Y=p.baseState;E=0,X=$=k=null,A=g;do{var Q=A.lane,ce=A.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:ce,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var fe=i,ge=A;switch(Q=s,ce=l,ge.tag){case 1:if(fe=ge.payload,typeof fe=="function"){Y=fe.call(ce,Y,Q);break e}Y=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ge.payload,Q=typeof fe=="function"?fe.call(ce,Y,Q):fe,Q==null)break e;Y=ue({},Y,Q);break e;case 2:yi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,Q=p.effects,Q===null?p.effects=[A]:Q.push(A))}else ce={eventTime:ce,lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=ce,k=Y):X=X.next=ce,E|=Q;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;Q=A,A=Q.next,Q.next=null,p.lastBaseUpdate=Q,p.shared.pending=null}}while(!0);if(X===null&&(k=Y),p.baseState=k,p.firstBaseUpdate=$,p.lastBaseUpdate=X,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Ts|=E,i.lanes=E,i.memoizedState=Y}}function u_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var _l={},hr=mi(_l),yl=mi(_l),vl=mi(_l);function ws(i){if(i===_l)throw Error(t(174));return i}function ff(i,s){switch(Xe(vl,s),Xe(yl,i),Xe(hr,_l),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Et(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Et(s,i)}Ze(hr),Xe(hr,s)}function Ko(){Ze(hr),Ze(yl),Ze(vl)}function c_(i){ws(vl.current);var s=ws(hr.current),l=Et(s,i.type);s!==l&&(Xe(yl,i),Xe(hr,l))}function pf(i){yl.current===i&&(Ze(hr),Ze(yl))}var it=mi(0);function Ac(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mf=[];function gf(){for(var i=0;i<mf.length;i++)mf[i]._workInProgressVersionPrimary=null;mf.length=0}var Rc=le.ReactCurrentDispatcher,_f=le.ReactCurrentBatchConfig,Is=0,st=null,It=null,xt=null,Pc=!1,El=!1,wl=0,pS=0;function zt(){throw Error(t(321))}function yf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function vf(i,s,l,h,p,g){if(Is=g,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Rc.current=i===null||i.memoizedState===null?yS:vS,i=l(h,p),El){g=0;do{if(El=!1,wl=0,25<=g)throw Error(t(301));g+=1,xt=It=null,s.updateQueue=null,Rc.current=ES,i=l(h,p)}while(El)}if(Rc.current=xc,s=It!==null&&It.next!==null,Is=0,xt=It=st=null,Pc=!1,s)throw Error(t(300));return i}function Ef(){var i=wl!==0;return wl=0,i}function dr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?st.memoizedState=xt=i:xt=xt.next=i,xt}function Nn(){if(It===null){var i=st.alternate;i=i!==null?i.memoizedState:null}else i=It.next;var s=xt===null?st.memoizedState:xt.next;if(s!==null)xt=s,It=i;else{if(i===null)throw Error(t(310));It=i,i={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},xt===null?st.memoizedState=xt=i:xt=xt.next=i}return xt}function Il(i,s){return typeof s=="function"?s(i):s}function wf(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=It,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var A=E=null,k=null,$=g;do{var X=$.lane;if((Is&X)===X)k!==null&&(k=k.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var Y={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};k===null?(A=k=Y,E=h):k=k.next=Y,st.lanes|=X,Ts|=X}$=$.next}while($!==null&&$!==g);k===null?E=h:k.next=A,Kn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=k,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do g=p.lane,st.lanes|=g,Ts|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function If(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do g=i(g,E.action),E=E.next;while(E!==p);Kn(g,s.memoizedState)||(ln=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function h_(){}function d_(i,s){var l=st,h=Nn(),p=s(),g=!Kn(h.memoizedState,p);if(g&&(h.memoizedState=p,ln=!0),h=h.queue,Tf(m_.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,Tl(9,p_.bind(null,l,h,p,s),void 0,null),Nt===null)throw Error(t(349));(Is&30)!==0||f_(l,s,p)}return p}function f_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function p_(i,s,l,h){s.value=l,s.getSnapshot=h,g_(s)&&__(i)}function m_(i,s,l){return l(function(){g_(s)&&__(i)})}function g_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function __(i){var s=Br(i,1);s!==null&&Yn(s,i,1,-1)}function y_(i){var s=dr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:i},s.queue=i,i=i.dispatch=_S.bind(null,st,i),[s.memoizedState,i]}function Tl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function v_(){return Nn().memoizedState}function Cc(i,s,l,h){var p=dr();st.flags|=i,p.memoizedState=Tl(1|s,l,void 0,h===void 0?null:h)}function kc(i,s,l,h){var p=Nn();h=h===void 0?null:h;var g=void 0;if(It!==null){var E=It.memoizedState;if(g=E.destroy,h!==null&&yf(h,E.deps)){p.memoizedState=Tl(s,l,g,h);return}}st.flags|=i,p.memoizedState=Tl(1|s,l,g,h)}function E_(i,s){return Cc(8390656,8,i,s)}function Tf(i,s){return kc(2048,8,i,s)}function w_(i,s){return kc(4,2,i,s)}function I_(i,s){return kc(4,4,i,s)}function T_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function S_(i,s,l){return l=l!=null?l.concat([i]):null,kc(4,4,T_.bind(null,s,i),l)}function Sf(){}function A_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&yf(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function R_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&yf(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function P_(i,s,l){return(Is&21)===0?(i.baseState&&(i.baseState=!1,ln=!0),i.memoizedState=l):(Kn(l,s)||(l=hs(),st.lanes|=l,Ts|=l,i.baseState=!0),s)}function mS(i,s){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var h=_f.transition;_f.transition={};try{i(!1),s()}finally{Oe=l,_f.transition=h}}function C_(){return Nn().memoizedState}function gS(i,s,l){var h=Ti(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},k_(i))x_(s,l);else if(l=o_(i,s,l,h),l!==null){var p=Jt();Yn(l,i,h,p),N_(l,s,h)}}function _S(i,s,l){var h=Ti(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(k_(i))x_(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,l);if(p.hasEagerState=!0,p.eagerState=A,Kn(A,E)){var k=s.interleaved;k===null?(p.next=p,hf(s)):(p.next=k.next,k.next=p),s.interleaved=p;return}}catch{}finally{}l=o_(i,s,p,h),l!==null&&(p=Jt(),Yn(l,i,h,p),N_(l,s,h))}}function k_(i){var s=i.alternate;return i===st||s!==null&&s===st}function x_(i,s){El=Pc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function N_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,li(i,l)}}var xc={readContext:xn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},yS={readContext:xn,useCallback:function(i,s){return dr().memoizedState=[i,s===void 0?null:s],i},useContext:xn,useEffect:E_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Cc(4194308,4,T_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Cc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Cc(4,2,i,s)},useMemo:function(i,s){var l=dr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=dr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=gS.bind(null,st,i),[h.memoizedState,i]},useRef:function(i){var s=dr();return i={current:i},s.memoizedState=i},useState:y_,useDebugValue:Sf,useDeferredValue:function(i){return dr().memoizedState=i},useTransition:function(){var i=y_(!1),s=i[0];return i=mS.bind(null,i[1]),dr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=st,p=dr();if(tt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Nt===null)throw Error(t(349));(Is&30)!==0||f_(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,E_(m_.bind(null,h,g,i),[i]),h.flags|=2048,Tl(9,p_.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=dr(),s=Nt.identifierPrefix;if(tt){var l=jr,h=Ur;l=(h&~(1<<32-Qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=wl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=pS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},vS={readContext:xn,useCallback:A_,useContext:xn,useEffect:Tf,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:I_,useMemo:R_,useReducer:wf,useRef:v_,useState:function(){return wf(Il)},useDebugValue:Sf,useDeferredValue:function(i){var s=Nn();return P_(s,It.memoizedState,i)},useTransition:function(){var i=wf(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:h_,useSyncExternalStore:d_,useId:C_,unstable_isNewReconciler:!1},ES={readContext:xn,useCallback:A_,useContext:xn,useEffect:Tf,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:I_,useMemo:R_,useReducer:If,useRef:v_,useState:function(){return If(Il)},useDebugValue:Sf,useDeferredValue:function(i){var s=Nn();return It===null?s.memoizedState=i:P_(s,It.memoizedState,i)},useTransition:function(){var i=If(Il)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:h_,useSyncExternalStore:d_,useId:C_,unstable_isNewReconciler:!1};function Gn(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Af(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:ue({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Nc={isMounted:function(i){return(i=i._reactInternals)?Un(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Jt(),p=Ti(i),g=zr(h,p);g.payload=s,l!=null&&(g.callback=l),s=vi(i,g,p),s!==null&&(Yn(s,i,p,h),Tc(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Jt(),p=Ti(i),g=zr(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=vi(i,g,p),s!==null&&(Yn(s,i,p,h),Tc(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Jt(),h=Ti(i),p=zr(l,h);p.tag=2,s!=null&&(p.callback=s),s=vi(i,p,h),s!==null&&(Yn(s,i,h,l),Tc(s,i,h))}};function D_(i,s,l,h,p,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!ul(l,h)||!ul(p,g):!0}function b_(i,s,l){var h=!1,p=gi,g=s.contextType;return typeof g=="object"&&g!==null?g=xn(g):(p=an(s)?_s:Bt.current,h=s.contextTypes,g=(h=h!=null)?Uo(i,p):gi),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),s}function V_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Nc.enqueueReplaceState(s,s.state,null)}function Rf(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},df(i);var g=s.contextType;typeof g=="object"&&g!==null?p.context=xn(g):(g=an(s)?_s:Bt.current,p.context=Uo(i,g)),p.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Af(i,s,g,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Nc.enqueueReplaceState(p,p.state,null),Sc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ho(i,s){try{var l="",h=s;do l+=Z(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:p,digest:null}}function Pf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Cf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function O_(i,s,l){l=zr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Fc||(Fc=!0,$f=h),Cf(i,s)},l}function L_(i,s,l){l=zr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Cf(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Cf(i,s),typeof h!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function M_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new wS;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=OS.bind(null,i,s,l),s.then(i,i))}function F_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function U_(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=zr(-1,1),s.tag=2,vi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var IS=le.ReactCurrentOwner,ln=!1;function Yt(i,s,l,h){s.child=i===null?s_(s,null,l,h):$o(s,i.child,l,h)}function j_(i,s,l,h,p){l=l.render;var g=s.ref;return Wo(s,p),h=vf(i,s,l,h,g,p),l=Ef(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(tt&&l&&tf(s),s.flags|=1,Yt(i,s,h,p),s.child)}function B_(i,s,l,h,p){if(i===null){var g=l.type;return typeof g=="function"&&!Xf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,z_(i,s,g,h,p)):(i=qc(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&p)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:ul,l(E,h)&&i.ref===s.ref)return $r(i,s,p)}return s.flags|=1,i=Ai(g,h),i.ref=s.ref,i.return=s,s.child=i}function z_(i,s,l,h,p){if(i!==null){var g=i.memoizedProps;if(ul(g,h)&&i.ref===s.ref)if(ln=!1,s.pendingProps=h=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(ln=!0);else return s.lanes=i.lanes,$r(i,s,p)}return kf(i,s,l,h,p)}function $_(i,s,l){var h=s.pendingProps,p=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Qo,vn),vn|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Xe(Qo,vn),vn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Xe(Qo,vn),vn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Xe(Qo,vn),vn|=h;return Yt(i,s,p,l),s.child}function q_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kf(i,s,l,h,p){var g=an(l)?_s:Bt.current;return g=Uo(s,g),Wo(s,p),l=vf(i,s,l,h,g,p),h=Ef(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$r(i,s,p)):(tt&&h&&tf(s),s.flags|=1,Yt(i,s,l,p),s.child)}function W_(i,s,l,h,p){if(an(l)){var g=!0;mc(s)}else g=!1;if(Wo(s,p),s.stateNode===null)bc(i,s),b_(s,l,h),Rf(s,l,h,p),h=!0;else if(i===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var k=E.context,$=l.contextType;typeof $=="object"&&$!==null?$=xn($):($=an(l)?_s:Bt.current,$=Uo(s,$));var X=l.getDerivedStateFromProps,Y=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||k!==$)&&V_(s,E,h,$),yi=!1;var Q=s.memoizedState;E.state=Q,Sc(s,h,E,p),k=s.memoizedState,A!==h||Q!==k||on.current||yi?(typeof X=="function"&&(Af(s,l,X,h),k=s.memoizedState),(A=yi||D_(s,l,A,h,Q,k,$))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),E.props=h,E.state=k,E.context=$,h=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,a_(i,s),A=s.memoizedProps,$=s.type===s.elementType?A:Gn(s.type,A),E.props=$,Y=s.pendingProps,Q=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=xn(k):(k=an(l)?_s:Bt.current,k=Uo(s,k));var ce=l.getDerivedStateFromProps;(X=typeof ce=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==Y||Q!==k)&&V_(s,E,h,k),yi=!1,Q=s.memoizedState,E.state=Q,Sc(s,h,E,p);var fe=s.memoizedState;A!==Y||Q!==fe||on.current||yi?(typeof ce=="function"&&(Af(s,l,ce,h),fe=s.memoizedState),($=yi||D_(s,l,$,h,Q,fe,k)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,fe,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,fe,k)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=fe),E.props=h,E.state=fe,E.context=k,h=$):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),h=!1)}return xf(i,s,l,h,g,p)}function xf(i,s,l,h,p,g){q_(i,s);var E=(s.flags&128)!==0;if(!h&&!E)return p&&Xg(s,l,!1),$r(i,s,g);h=s.stateNode,IS.current=s;var A=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&E?(s.child=$o(s,i.child,null,g),s.child=$o(s,null,A,g)):Yt(i,s,A,g),s.memoizedState=h.state,p&&Xg(s,l,!0),s.child}function K_(i){var s=i.stateNode;s.pendingContext?Gg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Gg(i,s.context,!1),ff(i,s.containerInfo)}function H_(i,s,l,h,p){return zo(),of(p),s.flags|=256,Yt(i,s,l,h),s.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Df(i){return{baseLanes:i,cachePool:null,transitions:null}}function G_(i,s,l){var h=s.pendingProps,p=it.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Xe(it,p&1),i===null)return sf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,i=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Wc(E,h,0,null),i=Ps(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=Df(l),s.memoizedState=Nf,i):bf(s,E));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return TS(i,s,E,h,A,p,l);if(g){g=h.fallback,E=s.mode,p=i.child,A=p.sibling;var k={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Ai(p,k),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?g=Ai(A,g):(g=Ps(g,E,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=i.child.memoizedState,E=E===null?Df(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=i.childLanes&~l,s.memoizedState=Nf,h}return g=i.child,i=g.sibling,h=Ai(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function bf(i,s){return s=Wc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Dc(i,s,l,h){return h!==null&&of(h),$o(s,i.child,null,l),i=bf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function TS(i,s,l,h,p,g,E){if(l)return s.flags&256?(s.flags&=-257,h=Pf(Error(t(422))),Dc(i,s,E,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=Wc({mode:"visible",children:h.children},p,0,null),g=Ps(g,p,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&$o(s,i.child,null,E),s.child.memoizedState=Df(E),s.memoizedState=Nf,g);if((s.mode&1)===0)return Dc(i,s,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Pf(g,h,void 0),Dc(i,s,E,h)}if(A=(E&i.childLanes)!==0,ln||A){if(h=Nt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Br(i,p),Yn(h,i,p,-1))}return Qf(),h=Pf(Error(t(421))),Dc(i,s,E,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=LS.bind(null,i),p._reactRetry=s,null):(i=g.treeContext,yn=pi(p.nextSibling),_n=s,tt=!0,Hn=null,i!==null&&(Cn[kn++]=Ur,Cn[kn++]=jr,Cn[kn++]=ys,Ur=i.id,jr=i.overflow,ys=s),s=bf(s,h.children),s.flags|=4096,s)}function Q_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),cf(i.return,s,l)}function Vf(i,s,l,h,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function X_(i,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(Yt(i,s,h.children,l),h=it.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Q_(i,l,s);else if(i.tag===19)Q_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Xe(it,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Ac(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Vf(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ac(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Vf(s,!0,l,null,g);break;case"together":Vf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $r(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ts|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ai(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ai(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function SS(i,s,l){switch(s.tag){case 3:K_(s),zo();break;case 5:c_(s);break;case 1:an(s.type)&&mc(s);break;case 4:ff(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Xe(wc,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Xe(it,it.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?G_(i,s,l):(Xe(it,it.current&1),i=$r(i,s,l),i!==null?i.sibling:null);Xe(it,it.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return X_(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(it,it.current),h)break;return null;case 22:case 23:return s.lanes=0,$_(i,s,l)}return $r(i,s,l)}var Y_,Of,J_,Z_;Y_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Of=function(){},J_=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,ws(hr.current);var g=null;switch(l){case"input":p=es(i,p),h=es(i,h),g=[];break;case"select":p=ue({},p,{value:void 0}),h=ue({},h,{value:void 0}),g=[];break;case"textarea":p=Fa(i,p),h=Fa(i,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=dc)}qa(l,h);var E;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var A=p[$];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var k=h[$];if(A=p!=null?p[$]:void 0,h.hasOwnProperty($)&&k!==A&&(k!=null||A!=null))if($==="style")if(A){for(E in A)!A.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&A[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(g||(g=[]),g.push($,l)),l=k;else $==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push($,k)):$==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push($,""+k):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(k!=null&&$==="onScroll"&&Je("scroll",i),g||A===k||(g=[])):(g=g||[]).push($,k))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},Z_=function(i,s,l,h){l!==h&&(s.flags|=4)};function Sl(i,s){if(!tt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function $t(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function AS(i,s,l){var h=s.pendingProps;switch(nf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return an(s.type)&&pc(),$t(s),null;case 3:return h=s.stateNode,Ko(),Ze(on),Ze(Bt),gf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(vc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Hn!==null&&(Kf(Hn),Hn=null))),Of(i,s),$t(s),null;case 5:pf(s);var p=ws(vl.current);if(l=s.type,i!==null&&s.stateNode!=null)J_(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(i=ws(hr.current),vc(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[cr]=s,h[pl]=g,i=(s.mode&1)!==0,l){case"dialog":Je("cancel",h),Je("close",h);break;case"iframe":case"object":case"embed":Je("load",h);break;case"video":case"audio":for(p=0;p<hl.length;p++)Je(hl[p],h);break;case"source":Je("error",h);break;case"img":case"image":case"link":Je("error",h),Je("load",h);break;case"details":Je("toggle",h);break;case"input":oo(h,g),Je("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Je("invalid",h);break;case"textarea":lo(h,g),Je("invalid",h)}qa(l,g),p=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,A,i),p=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Je("scroll",h)}switch(l){case"input":Pr(h),Mu(h,g,!0);break;case"textarea":Pr(h),Ua(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=dc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=vt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[cr]=s,i[pl]=h,Y_(i,s,!1,!1),s.stateNode=i;e:{switch(E=Wa(l,h),l){case"dialog":Je("cancel",i),Je("close",i),p=h;break;case"iframe":case"object":case"embed":Je("load",i),p=h;break;case"video":case"audio":for(p=0;p<hl.length;p++)Je(hl[p],i);p=h;break;case"source":Je("error",i),p=h;break;case"img":case"image":case"link":Je("error",i),Je("load",i),p=h;break;case"details":Je("toggle",i),p=h;break;case"input":oo(i,h),p=es(i,h),Je("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ue({},h,{value:void 0}),Je("invalid",i);break;case"textarea":lo(i,h),p=Fa(i,h),Je("invalid",i);break;default:p=h}qa(l,p),A=p;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?za(i,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ja(i,k)):g==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&ri(i,k):typeof k=="number"&&ri(i,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Je("scroll",i):k!=null&&J(i,g,k,E))}switch(l){case"input":Pr(i),Mu(i,h,!1);break;case"textarea":Pr(i),Ua(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Fe(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?kr(i,!!h.multiple,g,!1):h.defaultValue!=null&&kr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=dc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(i&&s.stateNode!=null)Z_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=ws(vl.current),ws(hr.current),vc(s)){if(h=s.stateNode,l=s.memoizedProps,h[cr]=s,(g=h.nodeValue!==l)&&(i=_n,i!==null))switch(i.tag){case 3:hc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&hc(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[cr]=s,s.stateNode=h}return $t(s),null;case 13:if(Ze(it),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(tt&&yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)n_(),zo(),s.flags|=98560,g=!1;else if(g=vc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[cr]=s}else zo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),g=!1}else Hn!==null&&(Kf(Hn),Hn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(it.current&1)!==0?Tt===0&&(Tt=3):Qf())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return Ko(),Of(i,s),i===null&&dl(s.stateNode.containerInfo),$t(s),null;case 10:return uf(s.type._context),$t(s),null;case 17:return an(s.type)&&pc(),$t(s),null;case 19:if(Ze(it),g=s.memoizedState,g===null)return $t(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)Sl(g,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=Ac(i),E!==null){for(s.flags|=128,Sl(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,i=E.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xe(it,it.current&1|2),s.child}i=i.sibling}g.tail!==null&&Qe()>Xo&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Ac(E),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Sl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!tt)return $t(s),null}else 2*Qe()-g.renderingStartTime>Xo&&l!==1073741824&&(s.flags|=128,h=!0,Sl(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Qe(),s.sibling=null,l=it.current,Xe(it,h?l&1|2:l&1),s):($t(s),null);case 22:case 23:return Gf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(vn&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function RS(i,s){switch(nf(s),s.tag){case 1:return an(s.type)&&pc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ko(),Ze(on),Ze(Bt),gf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return pf(s),null;case 13:if(Ze(it),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));zo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(it),null;case 4:return Ko(),null;case 10:return uf(s.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var Vc=!1,qt=!1,PS=typeof WeakSet=="function"?WeakSet:Set,de=null;function Go(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){at(i,s,h)}else l.current=null}function Lf(i,s,l){try{l()}catch(h){at(i,s,h)}}var ey=!1;function CS(i,s){if(Hd=hi,i=Dg(),Ud(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,A=-1,k=-1,$=0,X=0,Y=i,Q=null;t:for(;;){for(var ce;Y!==l||p!==0&&Y.nodeType!==3||(A=E+p),Y!==g||h!==0&&Y.nodeType!==3||(k=E+h),Y.nodeType===3&&(E+=Y.nodeValue.length),(ce=Y.firstChild)!==null;)Q=Y,Y=ce;for(;;){if(Y===i)break t;if(Q===l&&++$===p&&(A=E),Q===g&&++X===h&&(k=E),(ce=Y.nextSibling)!==null)break;Y=Q,Q=Y.parentNode}Y=ce}l=A===-1||k===-1?null:{start:A,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gd={focusedElem:i,selectionRange:l},hi=!1,de=s;de!==null;)if(s=de,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,de=i;else for(;de!==null;){s=de;try{var fe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var ge=fe.memoizedProps,ct=fe.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?ge:Gn(s.type,ge),ct);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){at(s,s.return,ne)}if(i=s.sibling,i!==null){i.return=s.return,de=i;break}de=s.return}return fe=ey,ey=!1,fe}function Al(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&Lf(s,l,g)}p=p.next}while(p!==h)}}function Oc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Mf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function ty(i){var s=i.alternate;s!==null&&(i.alternate=null,ty(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[cr],delete s[pl],delete s[Jd],delete s[cS],delete s[hS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function ny(i){return i.tag===5||i.tag===3||i.tag===4}function ry(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ny(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ff(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=dc));else if(h!==4&&(i=i.child,i!==null))for(Ff(i,s,l),i=i.sibling;i!==null;)Ff(i,s,l),i=i.sibling}function Uf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Uf(i,s,l),i=i.sibling;i!==null;)Uf(i,s,l),i=i.sibling}var Lt=null,Qn=!1;function Ei(i,s,l){for(l=l.child;l!==null;)iy(i,s,l),l=l.sibling}function iy(i,s,l){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(us,l)}catch{}switch(l.tag){case 5:qt||Go(l,s);case 6:var h=Lt,p=Qn;Lt=null,Ei(i,s,l),Lt=h,Qn=p,Lt!==null&&(Qn?(i=Lt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Lt.removeChild(l.stateNode));break;case 18:Lt!==null&&(Qn?(i=Lt,l=l.stateNode,i.nodeType===8?Yd(i.parentNode,l):i.nodeType===1&&Yd(i,l),qn(i)):Yd(Lt,l.stateNode));break;case 4:h=Lt,p=Qn,Lt=l.stateNode.containerInfo,Qn=!0,Ei(i,s,l),Lt=h,Qn=p;break;case 0:case 11:case 14:case 15:if(!qt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Lf(l,s,E),p=p.next}while(p!==h)}Ei(i,s,l);break;case 1:if(!qt&&(Go(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){at(l,s,A)}Ei(i,s,l);break;case 21:Ei(i,s,l);break;case 22:l.mode&1?(qt=(h=qt)||l.memoizedState!==null,Ei(i,s,l),qt=h):Ei(i,s,l);break;default:Ei(i,s,l)}}function sy(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new PS),s.forEach(function(h){var p=MS.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Xn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=i,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:Lt=A.stateNode,Qn=!1;break e;case 3:Lt=A.stateNode.containerInfo,Qn=!0;break e;case 4:Lt=A.stateNode.containerInfo,Qn=!0;break e}A=A.return}if(Lt===null)throw Error(t(160));iy(g,E,p),Lt=null,Qn=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch($){at(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)oy(s,i),s=s.sibling}function oy(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Xn(s,i),fr(i),h&4){try{Al(3,i,i.return),Oc(3,i)}catch(ge){at(i,i.return,ge)}try{Al(5,i,i.return)}catch(ge){at(i,i.return,ge)}}break;case 1:Xn(s,i),fr(i),h&512&&l!==null&&Go(l,l.return);break;case 5:if(Xn(s,i),fr(i),h&512&&l!==null&&Go(l,l.return),i.flags&32){var p=i.stateNode;try{ri(p,"")}catch(ge){at(i,i.return,ge)}}if(h&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,E=l!==null?l.memoizedProps:g,A=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&La(p,g),Wa(A,E);var $=Wa(A,g);for(E=0;E<k.length;E+=2){var X=k[E],Y=k[E+1];X==="style"?za(p,Y):X==="dangerouslySetInnerHTML"?ja(p,Y):X==="children"?ri(p,Y):J(p,X,Y,$)}switch(A){case"input":Ma(p,g);break;case"textarea":uo(p,g);break;case"select":var Q=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var ce=g.value;ce!=null?kr(p,!!g.multiple,ce,!1):Q!==!!g.multiple&&(g.defaultValue!=null?kr(p,!!g.multiple,g.defaultValue,!0):kr(p,!!g.multiple,g.multiple?[]:"",!1))}p[pl]=g}catch(ge){at(i,i.return,ge)}}break;case 6:if(Xn(s,i),fr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(ge){at(i,i.return,ge)}}break;case 3:if(Xn(s,i),fr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{qn(s.containerInfo)}catch(ge){at(i,i.return,ge)}break;case 4:Xn(s,i),fr(i);break;case 13:Xn(s,i),fr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(zf=Qe())),h&4&&sy(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(qt=($=qt)||X,Xn(s,i),qt=$):Xn(s,i),fr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!X&&(i.mode&1)!==0)for(de=i,X=i.child;X!==null;){for(Y=de=X;de!==null;){switch(Q=de,ce=Q.child,Q.tag){case 0:case 11:case 14:case 15:Al(4,Q,Q.return);break;case 1:Go(Q,Q.return);var fe=Q.stateNode;if(typeof fe.componentWillUnmount=="function"){h=Q,l=Q.return;try{s=h,fe.props=s.memoizedProps,fe.state=s.memoizedState,fe.componentWillUnmount()}catch(ge){at(h,l,ge)}}break;case 5:Go(Q,Q.return);break;case 22:if(Q.memoizedState!==null){uy(Y);continue}}ce!==null?(ce.return=Q,de=ce):uy(Y)}X=X.sibling}e:for(X=null,Y=i;;){if(Y.tag===5){if(X===null){X=Y;try{p=Y.stateNode,$?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Y.stateNode,k=Y.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Ba("display",E))}catch(ge){at(i,i.return,ge)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=$?"":Y.memoizedProps}catch(ge){at(i,i.return,ge)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===i)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===i)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===i)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Xn(s,i),fr(i),h&4&&sy(i);break;case 21:break;default:Xn(s,i),fr(i)}}function fr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(ny(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ri(p,""),h.flags&=-33);var g=ry(i);Uf(i,g,p);break;case 3:case 4:var E=h.stateNode.containerInfo,A=ry(i);Ff(i,A,E);break;default:throw Error(t(161))}}catch(k){at(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function kS(i,s,l){de=i,ay(i)}function ay(i,s,l){for(var h=(i.mode&1)!==0;de!==null;){var p=de,g=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Vc;if(!E){var A=p.alternate,k=A!==null&&A.memoizedState!==null||qt;A=Vc;var $=qt;if(Vc=E,(qt=k)&&!$)for(de=p;de!==null;)E=de,k=E.child,E.tag===22&&E.memoizedState!==null?cy(p):k!==null?(k.return=E,de=k):cy(p);for(;g!==null;)de=g,ay(g),g=g.sibling;de=p,Vc=A,qt=$}ly(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,de=g):ly(i)}}function ly(i){for(;de!==null;){var s=de;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:qt||Oc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!qt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Gn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&u_(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}u_(s,E,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&qn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||s.flags&512&&Mf(s)}catch(Q){at(s,s.return,Q)}}if(s===i){de=null;break}if(l=s.sibling,l!==null){l.return=s.return,de=l;break}de=s.return}}function uy(i){for(;de!==null;){var s=de;if(s===i){de=null;break}var l=s.sibling;if(l!==null){l.return=s.return,de=l;break}de=s.return}}function cy(i){for(;de!==null;){var s=de;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Oc(4,s)}catch(k){at(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(k){at(s,p,k)}}var g=s.return;try{Mf(s)}catch(k){at(s,g,k)}break;case 5:var E=s.return;try{Mf(s)}catch(k){at(s,E,k)}}}catch(k){at(s,s.return,k)}if(s===i){de=null;break}var A=s.sibling;if(A!==null){A.return=s.return,de=A;break}de=s.return}}var xS=Math.ceil,Lc=le.ReactCurrentDispatcher,jf=le.ReactCurrentOwner,Dn=le.ReactCurrentBatchConfig,Ue=0,Nt=null,ft=null,Mt=0,vn=0,Qo=mi(0),Tt=0,Rl=null,Ts=0,Mc=0,Bf=0,Pl=null,un=null,zf=0,Xo=1/0,qr=null,Fc=!1,$f=null,wi=null,Uc=!1,Ii=null,jc=0,Cl=0,qf=null,Bc=-1,zc=0;function Jt(){return(Ue&6)!==0?Qe():Bc!==-1?Bc:Bc=Qe()}function Ti(i){return(i.mode&1)===0?1:(Ue&2)!==0&&Mt!==0?Mt&-Mt:fS.transition!==null?(zc===0&&(zc=hs()),zc):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:nl(i.type)),i)}function Yn(i,s,l,h){if(50<Cl)throw Cl=0,qf=null,Error(t(185));ai(i,l,h),((Ue&2)===0||i!==Nt)&&(i===Nt&&((Ue&2)===0&&(Mc|=l),Tt===4&&Si(i,Mt)),cn(i,h),l===1&&Ue===0&&(s.mode&1)===0&&(Xo=Qe()+500,gc&&_i()))}function cn(i,s){var l=i.callbackNode;Dr(i,s);var h=cs(i,i===Nt?Mt:0);if(h===0)l!==null&&Ya(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Ya(l),s===1)i.tag===0?dS(dy.bind(null,i)):Yg(dy.bind(null,i)),lS(function(){(Ue&6)===0&&_i()}),l=null;else{switch(ui(h)){case 1:l=ls;break;case 4:l=ii;break;case 16:l=An;break;case 536870912:l=zu;break;default:l=An}l=Ey(l,hy.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function hy(i,s){if(Bc=-1,zc=0,(Ue&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Yo()&&i.callbackNode!==l)return null;var h=cs(i,i===Nt?Mt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=$c(i,h);else{s=h;var p=Ue;Ue|=2;var g=py();(Nt!==i||Mt!==s)&&(qr=null,Xo=Qe()+500,As(i,s));do try{bS();break}catch(A){fy(i,A)}while(!0);lf(),Lc.current=g,Ue=p,ft!==null?s=0:(Nt=null,Mt=0,s=Tt)}if(s!==0){if(s===2&&(p=pn(i),p!==0&&(h=p,s=Wf(i,p))),s===1)throw l=Rl,As(i,0),Si(i,h),cn(i,Qe()),l;if(s===6)Si(i,h);else{if(p=i.current.alternate,(h&30)===0&&!NS(p)&&(s=$c(i,h),s===2&&(g=pn(i),g!==0&&(h=g,s=Wf(i,g))),s===1))throw l=Rl,As(i,0),Si(i,h),cn(i,Qe()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Rs(i,un,qr);break;case 3:if(Si(i,h),(h&130023424)===h&&(s=zf+500-Qe(),10<s)){if(cs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Jt(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Xd(Rs.bind(null,i,un,qr),s);break}Rs(i,un,qr);break;case 4:if(Si(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var E=31-Qt(h);g=1<<E,E=s[E],E>p&&(p=E),h&=~g}if(h=p,h=Qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*xS(h/1960))-h,10<h){i.timeoutHandle=Xd(Rs.bind(null,i,un,qr),h);break}Rs(i,un,qr);break;case 5:Rs(i,un,qr);break;default:throw Error(t(329))}}}return cn(i,Qe()),i.callbackNode===l?hy.bind(null,i):null}function Wf(i,s){var l=Pl;return i.current.memoizedState.isDehydrated&&(As(i,s).flags|=256),i=$c(i,s),i!==2&&(s=un,un=l,s!==null&&Kf(s)),i}function Kf(i){un===null?un=i:un.push.apply(un,i)}function NS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!Kn(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(i,s){for(s&=~Bf,s&=~Mc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Qt(s),h=1<<l;i[l]=-1,s&=~h}}function dy(i){if((Ue&6)!==0)throw Error(t(327));Yo();var s=cs(i,0);if((s&1)===0)return cn(i,Qe()),null;var l=$c(i,s);if(i.tag!==0&&l===2){var h=pn(i);h!==0&&(s=h,l=Wf(i,h))}if(l===1)throw l=Rl,As(i,0),Si(i,s),cn(i,Qe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Rs(i,un,qr),cn(i,Qe()),null}function Hf(i,s){var l=Ue;Ue|=1;try{return i(s)}finally{Ue=l,Ue===0&&(Xo=Qe()+500,gc&&_i())}}function Ss(i){Ii!==null&&Ii.tag===0&&(Ue&6)===0&&Yo();var s=Ue;Ue|=1;var l=Dn.transition,h=Oe;try{if(Dn.transition=null,Oe=1,i)return i()}finally{Oe=h,Dn.transition=l,Ue=s,(Ue&6)===0&&_i()}}function Gf(){vn=Qo.current,Ze(Qo)}function As(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,aS(l)),ft!==null)for(l=ft.return;l!==null;){var h=l;switch(nf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&pc();break;case 3:Ko(),Ze(on),Ze(Bt),gf();break;case 5:pf(h);break;case 4:Ko();break;case 13:Ze(it);break;case 19:Ze(it);break;case 10:uf(h.type._context);break;case 22:case 23:Gf()}l=l.return}if(Nt=i,ft=i=Ai(i.current,null),Mt=vn=s,Tt=0,Rl=null,Bf=Mc=Ts=0,un=Pl=null,Es!==null){for(s=0;s<Es.length;s++)if(l=Es[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=p,h.next=E}l.pending=h}Es=null}return i}function fy(i,s){do{var l=ft;try{if(lf(),Rc.current=xc,Pc){for(var h=st.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Pc=!1}if(Is=0,xt=It=st=null,El=!1,wl=0,jf.current=null,l===null||l.return===null){Tt=1,Rl=s,ft=null;break}e:{var g=i,E=l.return,A=l,k=s;if(s=Mt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var $=k,X=A,Y=X.tag;if((X.mode&1)===0&&(Y===0||Y===11||Y===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ce=F_(E);if(ce!==null){ce.flags&=-257,U_(ce,E,A,g,s),ce.mode&1&&M_(g,$,s),s=ce,k=$;var fe=s.updateQueue;if(fe===null){var ge=new Set;ge.add(k),s.updateQueue=ge}else fe.add(k);break e}else{if((s&1)===0){M_(g,$,s),Qf();break e}k=Error(t(426))}}else if(tt&&A.mode&1){var ct=F_(E);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),U_(ct,E,A,g,s),of(Ho(k,A));break e}}g=k=Ho(k,A),Tt!==4&&(Tt=2),Pl===null?Pl=[g]:Pl.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=O_(g,k,s);l_(g,U);break e;case 1:A=k;var b=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(wi===null||!wi.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=L_(g,A,s);l_(g,ne);break e}}g=g.return}while(g!==null)}gy(l)}catch(_e){s=_e,ft===l&&l!==null&&(ft=l=l.return);continue}break}while(!0)}function py(){var i=Lc.current;return Lc.current=xc,i===null?xc:i}function Qf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Nt===null||(Ts&268435455)===0&&(Mc&268435455)===0||Si(Nt,Mt)}function $c(i,s){var l=Ue;Ue|=2;var h=py();(Nt!==i||Mt!==s)&&(qr=null,As(i,s));do try{DS();break}catch(p){fy(i,p)}while(!0);if(lf(),Ue=l,Lc.current=h,ft!==null)throw Error(t(261));return Nt=null,Mt=0,Tt}function DS(){for(;ft!==null;)my(ft)}function bS(){for(;ft!==null&&!ju();)my(ft)}function my(i){var s=vy(i.alternate,i,vn);i.memoizedProps=i.pendingProps,s===null?gy(i):ft=s,jf.current=null}function gy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=AS(l,s,vn),l!==null){ft=l;return}}else{if(l=RS(l,s),l!==null){l.flags&=32767,ft=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Tt=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=i}while(s!==null);Tt===0&&(Tt=5)}function Rs(i,s,l){var h=Oe,p=Dn.transition;try{Dn.transition=null,Oe=1,VS(i,s,l,h)}finally{Dn.transition=p,Oe=h}return null}function VS(i,s,l,h){do Yo();while(Ii!==null);if((Ue&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(He(i,g),i===Nt&&(ft=Nt=null,Mt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Uc||(Uc=!0,Ey(An,function(){return Yo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Dn.transition,Dn.transition=null;var E=Oe;Oe=1;var A=Ue;Ue|=4,jf.current=null,CS(i,l),oy(l,i),eS(Gd),hi=!!Hd,Gd=Hd=null,i.current=l,kS(l),Nd(),Ue=A,Oe=E,Dn.transition=g}else i.current=l;if(Uc&&(Uc=!1,Ii=i,jc=p),g=i.pendingLanes,g===0&&(wi=null),$u(l.stateNode),cn(i,Qe()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Fc)throw Fc=!1,i=$f,$f=null,i;return(jc&1)!==0&&i.tag!==0&&Yo(),g=i.pendingLanes,(g&1)!==0?i===qf?Cl++:(Cl=0,qf=i):Cl=0,_i(),null}function Yo(){if(Ii!==null){var i=ui(jc),s=Dn.transition,l=Oe;try{if(Dn.transition=null,Oe=16>i?16:i,Ii===null)var h=!1;else{if(i=Ii,Ii=null,jc=0,(Ue&6)!==0)throw Error(t(331));var p=Ue;for(Ue|=4,de=i.current;de!==null;){var g=de,E=g.child;if((de.flags&16)!==0){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var $=A[k];for(de=$;de!==null;){var X=de;switch(X.tag){case 0:case 11:case 15:Al(8,X,g)}var Y=X.child;if(Y!==null)Y.return=X,de=Y;else for(;de!==null;){X=de;var Q=X.sibling,ce=X.return;if(ty(X),X===$){de=null;break}if(Q!==null){Q.return=ce,de=Q;break}de=ce}}}var fe=g.alternate;if(fe!==null){var ge=fe.child;if(ge!==null){fe.child=null;do{var ct=ge.sibling;ge.sibling=null,ge=ct}while(ge!==null)}}de=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,de=E;else e:for(;de!==null;){if(g=de,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Al(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,de=U;break e}de=g.return}}var b=i.current;for(de=b;de!==null;){E=de;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,de=B;else e:for(E=b;de!==null;){if(A=de,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Oc(9,A)}}catch(_e){at(A,A.return,_e)}if(A===E){de=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,de=ne;break e}de=A.return}}if(Ue=p,_i(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(us,i)}catch{}h=!0}return h}finally{Oe=l,Dn.transition=s}}return!1}function _y(i,s,l){s=Ho(l,s),s=O_(i,s,1),i=vi(i,s,1),s=Jt(),i!==null&&(ai(i,1,s),cn(i,s))}function at(i,s,l){if(i.tag===3)_y(i,i,l);else for(;s!==null;){if(s.tag===3){_y(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(wi===null||!wi.has(h))){i=Ho(l,i),i=L_(s,i,1),s=vi(s,i,1),i=Jt(),s!==null&&(ai(s,1,i),cn(s,i));break}}s=s.return}}function OS(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Jt(),i.pingedLanes|=i.suspendedLanes&l,Nt===i&&(Mt&l)===l&&(Tt===4||Tt===3&&(Mt&130023424)===Mt&&500>Qe()-zf?As(i,0):Bf|=l),cn(i,s)}function yy(i,s){s===0&&((i.mode&1)===0?s=1:(s=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var l=Jt();i=Br(i,s),i!==null&&(ai(i,s,l),cn(i,l))}function LS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),yy(i,l)}function MS(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),yy(i,l)}var vy;vy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ln=!1,SS(i,s,l);ln=(i.flags&131072)!==0}else ln=!1,tt&&(s.flags&1048576)!==0&&Jg(s,yc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;bc(i,s),i=s.pendingProps;var p=Uo(s,Bt.current);Wo(s,l),p=vf(null,s,h,i,p,l);var g=Ef();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(g=!0,mc(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,df(s),p.updater=Nc,s.stateNode=p,p._reactInternals=s,Rf(s,h,i,l),s=xf(null,s,h,!0,g,l)):(s.tag=0,tt&&g&&tf(s),Yt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(bc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=US(h),i=Gn(h,i),p){case 0:s=kf(null,s,h,i,l);break e;case 1:s=W_(null,s,h,i,l);break e;case 11:s=j_(null,s,h,i,l);break e;case 14:s=B_(null,s,h,Gn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),kf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),W_(i,s,h,p,l);case 3:e:{if(K_(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,a_(i,s),Sc(s,h,null,l);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=Ho(Error(t(423)),s),s=H_(i,s,h,l,p);break e}else if(h!==p){p=Ho(Error(t(424)),s),s=H_(i,s,h,l,p);break e}else for(yn=pi(s.stateNode.containerInfo.firstChild),_n=s,tt=!0,Hn=null,l=s_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(zo(),h===p){s=$r(i,s,l);break e}Yt(i,s,h,l)}s=s.child}return s;case 5:return c_(s),i===null&&sf(s),h=s.type,p=s.pendingProps,g=i!==null?i.memoizedProps:null,E=p.children,Qd(h,p)?E=null:g!==null&&Qd(h,g)&&(s.flags|=32),q_(i,s),Yt(i,s,E,l),s.child;case 6:return i===null&&sf(s),null;case 13:return G_(i,s,l);case 4:return ff(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=$o(s,null,h,l):Yt(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),j_(i,s,h,p,l);case 7:return Yt(i,s,s.pendingProps,l),s.child;case 8:return Yt(i,s,s.pendingProps.children,l),s.child;case 12:return Yt(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,E=p.value,Xe(wc,h._currentValue),h._currentValue=E,g!==null)if(Kn(g.value,E)){if(g.children===p.children&&!on.current){s=$r(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=zr(-1,l&-l),k.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?k.next=k:(k.next=X.next,X.next=k),$.pending=k}}g.lanes|=l,k=g.alternate,k!==null&&(k.lanes|=l),cf(g.return,l,s),A.lanes|=l;break}k=k.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),cf(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Yt(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Wo(s,l),p=xn(p),h=h(p),s.flags|=1,Yt(i,s,h,l),s.child;case 14:return h=s.type,p=Gn(h,s.pendingProps),p=Gn(h.type,p),B_(i,s,h,p,l);case 15:return z_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Gn(h,p),bc(i,s),s.tag=1,an(h)?(i=!0,mc(s)):i=!1,Wo(s,l),b_(s,h,p),Rf(s,h,p,l),xf(null,s,h,!0,i,l);case 19:return X_(i,s,l);case 22:return $_(i,s,l)}throw Error(t(156,s.tag))};function Ey(i,s){return yo(i,s)}function FS(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(i,s,l,h){return new FS(i,s,l,h)}function Xf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function US(i){if(typeof i=="function")return Xf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===C)return 11;if(i===Rt)return 14}return 2}function Ai(i,s){var l=i.alternate;return l===null?(l=bn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function qc(i,s,l,h,p,g){var E=2;if(h=i,typeof i=="function")Xf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case x:return Ps(l.children,p,g,s);case S:E=8,p|=8;break;case P:return i=bn(12,l,s,p|2),i.elementType=P,i.lanes=g,i;case R:return i=bn(13,l,s,p),i.elementType=R,i.lanes=g,i;case Ye:return i=bn(19,l,s,p),i.elementType=Ye,i.lanes=g,i;case $e:return Wc(l,p,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:E=10;break e;case O:E=9;break e;case C:E=11;break e;case Rt:E=14;break e;case Pt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=bn(E,l,s,p),s.elementType=i,s.type=h,s.lanes=g,s}function Ps(i,s,l,h){return i=bn(7,i,h,s),i.lanes=l,i}function Wc(i,s,l,h){return i=bn(22,i,h,s),i.elementType=$e,i.lanes=l,i.stateNode={isHidden:!1},i}function Yf(i,s,l){return i=bn(6,i,null,s),i.lanes=l,i}function Jf(i,s,l){return s=bn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function jS(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zf(i,s,l,h,p,g,E,A,k){return i=new jS(i,s,l,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=bn(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(g),i}function BS(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function wy(i){if(!i)return gi;i=i._reactInternals;e:{if(Un(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(an(l))return Qg(i,l,s)}return s}function Iy(i,s,l,h,p,g,E,A,k){return i=Zf(l,h,!0,i,p,g,E,A,k),i.context=wy(null),l=i.current,h=Jt(),p=Ti(l),g=zr(h,p),g.callback=s??null,vi(l,g,p),i.current.lanes=p,ai(i,p,h),cn(i,h),i}function Kc(i,s,l,h){var p=s.current,g=Jt(),E=Ti(p);return l=wy(l),s.context===null?s.context=l:s.pendingContext=l,s=zr(g,E),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=vi(p,s,E),i!==null&&(Yn(i,p,E,g),Tc(i,p,E)),E}function Hc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ty(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ep(i,s){Ty(i,s),(i=i.alternate)&&Ty(i,s)}function zS(){return null}var Sy=typeof reportError=="function"?reportError:function(i){console.error(i)};function tp(i){this._internalRoot=i}Gc.prototype.render=tp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Kc(i,s,null,null)},Gc.prototype.unmount=tp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ss(function(){Kc(null,i,null,null)}),s[Mr]=null}};function Gc(i){this._internalRoot=i}Gc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Gu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<or.length&&s!==0&&s<or[l].priority;l++);or.splice(l,0,i),l===0&&Yu(i)}};function np(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Qc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function $S(i,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var $=Hc(E);g.call($)}}var E=Iy(s,h,i,0,null,!1,!1,"",Ay);return i._reactRootContainer=E,i[Mr]=E.current,dl(i.nodeType===8?i.parentNode:i),Ss(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var $=Hc(k);A.call($)}}var k=Zf(i,0,!1,null,null,!1,!1,"",Ay);return i._reactRootContainer=k,i[Mr]=k.current,dl(i.nodeType===8?i.parentNode:i),Ss(function(){Kc(s,k,l,h)}),k}function Xc(i,s,l,h,p){var g=l._reactRootContainer;if(g){var E=g;if(typeof p=="function"){var A=p;p=function(){var k=Hc(E);A.call(k)}}Kc(s,E,i,p)}else E=$S(l,s,i,p,h);return Hc(E)}Ku=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=si(s.pendingLanes);l!==0&&(li(s,l|1),cn(s,Qe()),(Ue&6)===0&&(Xo=Qe()+500,_i()))}break;case 13:Ss(function(){var h=Br(i,1);if(h!==null){var p=Jt();Yn(h,i,1,p)}}),ep(i,1)}},wo=function(i){if(i.tag===13){var s=Br(i,134217728);if(s!==null){var l=Jt();Yn(s,i,134217728,l)}ep(i,134217728)}},Hu=function(i){if(i.tag===13){var s=Ti(i),l=Br(i,s);if(l!==null){var h=Jt();Yn(l,i,s,h)}ep(i,s)}},Gu=function(){return Oe},Qu=function(i,s){var l=Oe;try{return Oe=i,s()}finally{Oe=l}},ho=function(i,s,l){switch(s){case"input":if(Ma(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=fc(h);if(!p)throw Error(t(90));so(h),Ma(h,p)}}}break;case"textarea":uo(i,l);break;case"select":s=l.value,s!=null&&kr(i,!!l.multiple,s,!1)}},is=Hf,Ha=Ss;var qS={usingClientEntryPoint:!1,Events:[ml,Mo,fc,ir,Ka,Hf]},kl={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Xa(i),i===null?null:i.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{us=Yc.inject(WS),fn=Yc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS,hn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(s))throw Error(t(200));return BS(i,s,null,l)},hn.createRoot=function(i,s){if(!np(i))throw Error(t(299));var l=!1,h="",p=Sy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Zf(i,1,!1,null,null,l,!1,h,p),i[Mr]=s.current,dl(i.nodeType===8?i.parentNode:i),new tp(s)},hn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Xa(s),i=i===null?null:i.stateNode,i},hn.flushSync=function(i){return Ss(i)},hn.hydrate=function(i,s,l){if(!Qc(s))throw Error(t(200));return Xc(null,i,s,!0,l)},hn.hydrateRoot=function(i,s,l){if(!np(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",E=Sy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=Iy(s,null,i,1,l??null,p,!1,g,E),i[Mr]=s.current,dl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Gc(s)},hn.render=function(i,s,l){if(!Qc(s))throw Error(t(200));return Xc(null,i,s,!1,l)},hn.unmountComponentAtNode=function(i){if(!Qc(i))throw Error(t(40));return i._reactRootContainer?(Ss(function(){Xc(null,null,i,!1,function(){i._reactRootContainer=null,i[Mr]=null})}),!0):!1},hn.unstable_batchedUpdates=Hf,hn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Qc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Xc(i,s,l,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var by;function sw(){if(by)return sp.exports;by=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sp.exports=e1(),sp.exports}var Vy;function t1(){if(Vy)return Jc;Vy=1;var n=sw();return Jc.createRoot=n.createRoot,Jc.hydrateRoot=n.hydrateRoot,Jc}var n1=t1();const r1=rw(n1);sw();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},eu.apply(null,arguments)}var Li;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Li||(Li={}));const Oy="popstate";function i1(n){n===void 0&&(n={});function e(r,o){let{pathname:a,search:u,hash:d}=r.location;return Ap("",{pathname:a,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:ow(o)}return o1(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function dm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function s1(){return Math.random().toString(36).substr(2,8)}function Ly(n,e){return{usr:n.state,key:n.key,idx:e}}function Ap(n,e,t,r){return t===void 0&&(t=null),eu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ka(e):e,{state:t,key:e&&e.key||r||s1()})}function ow(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ka(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function o1(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,d=Li.Pop,f=null,_=v();_==null&&(_=0,u.replaceState(eu({},u.state,{idx:_}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=Li.Pop;let V=v(),re=V==null?null:V-_;_=V,f&&f({action:d,location:z.location,delta:re})}function T(V,re){d=Li.Push;let te=Ap(z.location,V,re);_=v()+1;let J=Ly(te,_),le=z.createHref(te);try{u.pushState(J,"",le)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(le)}a&&f&&f({action:d,location:z.location,delta:1})}function D(V,re){d=Li.Replace;let te=Ap(z.location,V,re);_=v();let J=Ly(te,_),le=z.createHref(te);u.replaceState(J,"",le),a&&f&&f({action:d,location:z.location,delta:0})}function j(V){let re=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof V=="string"?V:ow(V);return te=te.replace(/ $/,"%20"),gt(re,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,re)}let z={get action(){return d},get location(){return n(o,u)},listen(V){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Oy,w),f=V,()=>{o.removeEventListener(Oy,w),f=null}},createHref(V){return e(o,V)},createURL:j,encodeLocation(V){let re=j(V);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:T,replace:D,go(V){return u.go(V)}};return z}var My;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(My||(My={}));function a1(n,e,t){return t===void 0&&(t="/"),l1(n,e,t)}function l1(n,e,t,r){let o=typeof e=="string"?ka(e):e,a=uw(o.pathname||"/",t);if(a==null)return null;let u=aw(n);u1(u);let d=null,f=w1(a);for(let _=0;d==null&&_<u.length;++_)d=y1(u[_],f);return d}function aw(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(gt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let _=Ms([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(gt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),aw(a.children,e,v,_)),!(a.path==null&&!a.index)&&e.push({path:_,score:g1(_,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,u);else for(let f of lw(a.path))o(a,u,f)}),e}function lw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=lw(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function u1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:_1(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const c1=/^:[\w-]+$/,h1=3,d1=2,f1=1,p1=10,m1=-2,Fy=n=>n==="*";function g1(n,e){let t=n.split("/"),r=t.length;return t.some(Fy)&&(r+=m1),e&&(r+=d1),t.filter(o=>!Fy(o)).reduce((o,a)=>o+(c1.test(a)?h1:a===""?f1:p1),r)}function _1(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function y1(n,e,t){let{routesMeta:r}=n,o={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],_=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=v1({path:f.relativePath,caseSensitive:f.caseSensitive,end:_},v),T=f.route;if(!w)return null;Object.assign(o,w.params),u.push({params:o,pathname:Ms([a,w.pathname]),pathnameBase:R1(Ms([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=Ms([a,w.pathnameBase]))}return u}function v1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=E1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((_,v,w)=>{let{paramName:T,isOptional:D}=v;if(T==="*"){let z=d[w]||"";u=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const j=d[w];return D&&!j?_[T]=void 0:_[T]=(j||"").replace(/%2F/g,"/"),_},{}),pathname:a,pathnameBase:u,pattern:n}}function E1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),dm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function w1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function uw(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const I1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T1=n=>I1.test(n);function S1(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?ka(n):n,a;if(t)if(T1(t))a=t;else{if(t.includes("//")){let u=t;t=dw(t),dm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=Uy(t.substring(1),"/"):a=Uy(t,e)}else a=e;return{pathname:a,search:P1(r),hash:C1(o)}}function Uy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function lp(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cw(n,e){let t=A1(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function hw(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=ka(n):(o=eu({},n),gt(!o.pathname||!o.pathname.includes("?"),lp("?","pathname","search",o)),gt(!o.pathname||!o.pathname.includes("#"),lp("#","pathname","hash",o)),gt(!o.search||!o.search.includes("#"),lp("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=S1(o,d),_=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(_||v)&&(f.pathname+="/"),f}const dw=n=>n.replace(/\/\/+/g,"/"),Ms=n=>dw(n.join("/")),R1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),P1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,C1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function k1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const fw=["post","put","patch","delete"];new Set(fw);const x1=["get",...fw];new Set(x1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tu.apply(null,arguments)}const fm=G.createContext(null),N1=G.createContext(null),yu=G.createContext(null),Yh=G.createContext(null),Qi=G.createContext({outlet:null,matches:[],isDataRoute:!1}),pw=G.createContext(null);function vu(){return G.useContext(Yh)!=null}function Jh(){return vu()||gt(!1),G.useContext(Yh).location}function mw(n){G.useContext(yu).static||G.useLayoutEffect(n)}function pm(){let{isDataRoute:n}=G.useContext(Qi);return n?W1():D1()}function D1(){vu()||gt(!1);let n=G.useContext(fm),{basename:e,future:t,navigator:r}=G.useContext(yu),{matches:o}=G.useContext(Qi),{pathname:a}=Jh(),u=JSON.stringify(cw(o,t.v7_relativeSplatPath)),d=G.useRef(!1);return mw(()=>{d.current=!0}),G.useCallback(function(_,v){if(v===void 0&&(v={}),!d.current)return;if(typeof _=="number"){r.go(_);return}let w=hw(_,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Ms([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function b1(){let{matches:n}=G.useContext(Qi),e=n[n.length-1];return e?e.params:{}}function V1(n,e){return O1(n,e)}function O1(n,e,t,r){vu()||gt(!1);let{navigator:o}=G.useContext(yu),{matches:a}=G.useContext(Qi),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let _=Jh(),v;if(e){var w;let V=typeof e=="string"?ka(e):e;f==="/"||(w=V.pathname)!=null&&w.startsWith(f)||gt(!1),v=V}else v=_;let T=v.pathname||"/",D=T;if(f!=="/"){let V=f.replace(/^\//,"").split("/");D="/"+T.replace(/^\//,"").split("/").slice(V.length).join("/")}let j=a1(n,{pathname:D}),z=j1(j&&j.map(V=>Object.assign({},V,{params:Object.assign({},d,V.params),pathname:Ms([f,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?f:Ms([f,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),a,t,r);return e&&z?G.createElement(Yh.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Li.Pop}},z):z}function L1(){let n=q1(),e=k1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:o},t):null,null)}const M1=G.createElement(L1,null);class F1 extends G.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?G.createElement(Qi.Provider,{value:this.props.routeContext},G.createElement(pw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U1(n){let{routeContext:e,match:t,children:r}=n,o=G.useContext(fm);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),G.createElement(Qi.Provider,{value:e},r)}function j1(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||gt(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,_=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(_=v),w.route.id){let{loaderData:T,errors:D}=t,j=w.route.loader&&T[w.route.id]===void 0&&(!D||D[w.route.id]===void 0);if(w.route.lazy||j){f=!0,_>=0?u=u.slice(0,_+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let D,j=!1,z=null,V=null;t&&(D=d&&w.route.id?d[w.route.id]:void 0,z=w.route.errorElement||M1,f&&(_<0&&T===0?(K1("route-fallback"),j=!0,V=null):_===T&&(j=!0,V=w.route.hydrateFallbackElement||null)));let re=e.concat(u.slice(0,T+1)),te=()=>{let J;return D?J=z:j?J=V:w.route.Component?J=G.createElement(w.route.Component,null):w.route.element?J=w.route.element:J=v,G.createElement(U1,{match:w,routeContext:{outlet:v,matches:re,isDataRoute:t!=null},children:J})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?G.createElement(F1,{location:t.location,revalidation:t.revalidation,component:z,error:D,children:te(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):te()},null)}var gw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(gw||{}),_w=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(_w||{});function B1(n){let e=G.useContext(fm);return e||gt(!1),e}function z1(n){let e=G.useContext(N1);return e||gt(!1),e}function $1(n){let e=G.useContext(Qi);return e||gt(!1),e}function yw(n){let e=$1(),t=e.matches[e.matches.length-1];return t.route.id||gt(!1),t.route.id}function q1(){var n;let e=G.useContext(pw),t=z1(),r=yw();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function W1(){let{router:n}=B1(gw.UseNavigateStable),e=yw(_w.UseNavigateStable),t=G.useRef(!1);return mw(()=>{t.current=!0}),G.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,tu({fromRouteId:e},a)))},[n,e])}const jy={};function K1(n,e,t){jy[n]||(jy[n]=!0)}function H1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Rp(n){let{to:e,replace:t,state:r,relative:o}=n;vu()||gt(!1);let{future:a,static:u}=G.useContext(yu),{matches:d}=G.useContext(Qi),{pathname:f}=Jh(),_=pm(),v=hw(e,cw(d,a.v7_relativeSplatPath),f,o==="path"),w=JSON.stringify(v);return G.useEffect(()=>_(JSON.parse(w),{replace:t,state:r,relative:o}),[_,w,o,t,r]),null}function Ll(n){gt(!1)}function G1(n){let{basename:e="/",children:t=null,location:r,navigationType:o=Li.Pop,navigator:a,static:u=!1,future:d}=n;vu()&&gt(!1);let f=e.replace(/^\/*/,"/"),_=G.useMemo(()=>({basename:f,navigator:a,static:u,future:tu({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=ka(r));let{pathname:v="/",search:w="",hash:T="",state:D=null,key:j="default"}=r,z=G.useMemo(()=>{let V=uw(v,f);return V==null?null:{location:{pathname:V,search:w,hash:T,state:D,key:j},navigationType:o}},[f,v,w,T,D,j,o]);return z==null?null:G.createElement(yu.Provider,{value:_},G.createElement(Yh.Provider,{children:t,value:z}))}function Q1(n){let{children:e,location:t}=n;return V1(Pp(e),t)}new Promise(()=>{});function Pp(n,e){e===void 0&&(e=[]);let t=[];return G.Children.forEach(n,(r,o)=>{if(!G.isValidElement(r))return;let a=[...e,o];if(r.type===G.Fragment){t.push.apply(t,Pp(r.props.children,a));return}r.type!==Ll&&gt(!1),!r.props.index||!r.props.children||gt(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Pp(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const X1="6";try{window.__reactRouterVersion=X1}catch{}const Y1="startTransition",By=YS[Y1];function J1(n){let{basename:e,children:t,future:r,window:o}=n,a=G.useRef();a.current==null&&(a.current=i1({window:o,v5Compat:!0}));let u=a.current,[d,f]=G.useState({action:u.action,location:u.location}),{v7_startTransition:_}=r||{},v=G.useCallback(w=>{_&&By?By(()=>f(w)):f(w)},[f,_]);return G.useLayoutEffect(()=>u.listen(v),[u,v]),G.useEffect(()=>H1(r),[r]),G.createElement(G1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}var zy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(zy||(zy={}));var $y;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})($y||($y={}));const Z1=()=>{};var qy={};/**
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
 */const vw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,_=f?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|_>>6,D=_&63;f||(D=64,u||(T=64)),r.push(t[v],t[w],t[T],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new tA;const T=a<<2|d>>4;if(r.push(T),_!==64){const D=d<<4&240|_>>2;if(r.push(D),w!==64){const j=_<<6&192|w;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nA=function(n){const e=vw(n);return Ew.encodeByteArray(e,!0)},Ah=function(n){return nA(n).replace(/\./g,"")},ww=function(n){try{return Ew.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rA=()=>Iw().__FIREBASE_DEFAULTS__,iA=()=>{if(typeof process>"u"||typeof qy>"u")return;const n=qy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ww(n[1]);return e&&JSON.parse(e)},Zh=()=>{try{return Z1()||rA()||iA()||sA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tw=n=>{var e,t;return(t=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sw=n=>{const e=Tw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Aw=()=>{var n;return(n=Zh())===null||n===void 0?void 0:n.config},Rw=n=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class oA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Pw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ah(JSON.stringify(t)),Ah(JSON.stringify(u)),""].join(".")}const ql={};function aA(){const n={prod:[],emulator:[]};for(const e of Object.keys(ql))ql[e]?n.emulator.push(e):n.prod.push(e);return n}function lA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Wy=!1;function gm(n,e){if(typeof window>"u"||typeof document>"u"||!Zs(window.location.host)||ql[n]===e||ql[n]||Wy)return;ql[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=aA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,D){T.setAttribute("width","24"),T.setAttribute("id",D),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function _(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Wy=!0,u()},T}function v(T,D){T.setAttribute("id",D),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=lA(r),D=t("text"),j=document.getElementById(D)||document.createElement("span"),z=t("learnmore"),V=document.getElementById(z)||document.createElement("a"),re=t("preprendIcon"),te=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const J=T.element;d(J),v(V,z);const le=_();f(te,re),J.append(te,j,V,le),document.body.appendChild(J)}a?(j.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Cw(){var n;const e=(n=Zh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fA(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kw(){return!Cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){return!Cw()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function pA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const mA="FirebaseError";class Ar extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mA,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eu.prototype.create)}}class Eu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?gA(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Ar(o,d,r)}}function gA(n,e){return n.replace(_A,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const _A=/\{\$([^}]+)}/g;function yA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Ky(a)&&Ky(u)){if(!zs(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Ky(n){return n!==null&&typeof n=="object"}/**
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
 */function wu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ml(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Fl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vA(n,e){const t=new EA(n,e);return t.subscribe.bind(t)}class EA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=up),o.error===void 0&&(o.error=up),o.complete===void 0&&(o.complete=up);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function up(){}/**
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
 */class IA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new oA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SA(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TA(n){return n===ks?void 0:n}function SA(n){return n.instantiationMode==="EAGER"}/**
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
 */class AA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new IA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const RA={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},PA=be.INFO,CA={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},kA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=CA[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _m{constructor(e){this.name=e,this._logLevel=PA,this._logHandler=kA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const xA=(n,e)=>e.some(t=>n instanceof t);let Hy,Gy;function NA(){return Hy||(Hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DA(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Cp=new WeakMap,bw=new WeakMap,cp=new WeakMap,ym=new WeakMap;function bA(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Fi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Dw.set(t,n)}).catch(()=>{}),ym.set(e,n),e}function VA(n){if(Cp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Cp.set(n,e)}let kp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OA(n){kp=n(kp)}function LA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hp(this),e,...t);return bw.set(r,e.sort?e.sort():[e]),Fi(r)}:DA().includes(n)?function(...e){return n.apply(hp(this),e),Fi(Dw.get(this))}:function(...e){return Fi(n.apply(hp(this),e))}}function MA(n){return typeof n=="function"?LA(n):(n instanceof IDBTransaction&&VA(n),xA(n,NA())?new Proxy(n,kp):n)}function Fi(n){if(n instanceof IDBRequest)return bA(n);if(cp.has(n))return cp.get(n);const e=MA(n);return e!==n&&(cp.set(n,e),ym.set(e,n)),e}const hp=n=>ym.get(n);function FA(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Fi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Fi(u.result),f.oldVersion,f.newVersion,Fi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const UA=["get","getKey","getAll","getAllKeys","count"],jA=["put","add","delete","clear"],dp=new Map;function Qy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(dp.get(e))return dp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=jA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||UA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let _=f.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&f.done]))[0]};return dp.set(e,a),a}OA(n=>({...n,get:(e,t,r)=>Qy(e,t)||n.get(e,t,r),has:(e,t)=>!!Qy(e,t)||n.has(e,t)}));/**
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
 */class BA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",Xy="0.13.2";/**
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
 */const Xr=new _m("@firebase/app"),$A="@firebase/app-compat",qA="@firebase/analytics-compat",WA="@firebase/analytics",KA="@firebase/app-check-compat",HA="@firebase/app-check",GA="@firebase/auth",QA="@firebase/auth-compat",XA="@firebase/database",YA="@firebase/data-connect",JA="@firebase/database-compat",ZA="@firebase/functions",eR="@firebase/functions-compat",tR="@firebase/installations",nR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",sR="@firebase/performance",oR="@firebase/performance-compat",aR="@firebase/remote-config",lR="@firebase/remote-config-compat",uR="@firebase/storage",cR="@firebase/storage-compat",hR="@firebase/firestore",dR="@firebase/ai",fR="@firebase/firestore-compat",pR="firebase",mR="11.10.0";/**
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
 */const Np="[DEFAULT]",gR={[xp]:"fire-core",[$A]:"fire-core-compat",[WA]:"fire-analytics",[qA]:"fire-analytics-compat",[HA]:"fire-app-check",[KA]:"fire-app-check-compat",[GA]:"fire-auth",[QA]:"fire-auth-compat",[XA]:"fire-rtdb",[YA]:"fire-data-connect",[JA]:"fire-rtdb-compat",[ZA]:"fire-fn",[eR]:"fire-fn-compat",[tR]:"fire-iid",[nR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[sR]:"fire-perf",[oR]:"fire-perf-compat",[aR]:"fire-rc",[lR]:"fire-rc-compat",[uR]:"fire-gcs",[cR]:"fire-gcs-compat",[hR]:"fire-fst",[fR]:"fire-fst-compat",[dR]:"fire-vertex","fire-js":"fire-js",[pR]:"fire-js-all"};/**
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
 */const Rh=new Map,_R=new Map,Dp=new Map;function Yy(n,e){try{n.container.addComponent(e)}catch(t){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $s(n){const e=n.name;if(Dp.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;Dp.set(e,n);for(const t of Rh.values())Yy(t,n);for(const t of _R.values())Yy(t,n);return!0}function ed(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ui=new Eu("app","Firebase",yR);/**
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
 */class vR{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=mR;function Vw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Np,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=Aw()),!t)throw Ui.create("no-options");const a=Rh.get(o);if(a){if(zs(t,a.options)&&zs(r,a.config))return a;throw Ui.create("duplicate-app",{appName:o})}const u=new AA(o);for(const f of Dp.values())u.addComponent(f);const d=new vR(t,r,u);return Rh.set(o,d),d}function vm(n=Np){const e=Rh.get(n);if(!e&&n===Np&&Aw())return Vw();if(!e)throw Ui.create("no-app",{appName:n});return e}function _r(n,e,t){var r;let o=(r=gR[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(d.join(" "));return}$s(new $i(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const ER="firebase-heartbeat-database",wR=1,nu="firebase-heartbeat-store";let fp=null;function Ow(){return fp||(fp=FA(ER,wR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),fp}async function IR(n){try{const t=(await Ow()).transaction(nu),r=await t.objectStore(nu).get(Lw(n));return await t.done,r}catch(e){if(e instanceof Ar)Xr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(t.message)}}}async function Jy(n,e){try{const r=(await Ow()).transaction(nu,"readwrite");await r.objectStore(nu).put(e,Lw(n)),await r.done}catch(t){if(t instanceof Ar)Xr.warn(t.message);else{const r=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xr.warn(r.message)}}}function Lw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const TR=1024,SR=30;class AR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Zy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>SR){const u=CR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zy(),{heartbeatsToSend:r,unsentEntries:o}=RR(this._heartbeatsCache.heartbeats),a=Ah(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Xr.warn(t),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function RR(n,e=TR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),ev(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ev(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class PR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?pA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await IR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ev(n){return Ah(JSON.stringify({version:2,heartbeats:n})).length}function CR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function kR(n){$s(new $i("platform-logger",e=>new BA(e),"PRIVATE")),$s(new $i("heartbeat",e=>new AR(e),"PRIVATE")),_r(xp,Xy,n),_r(xp,Xy,"esm2017"),_r("fire-js","")}kR("");function Em(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function Mw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xR=Mw,Fw=new Eu("auth","Firebase",Mw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new _m("@firebase/auth");function NR(n,...e){Ph.logLevel<=be.WARN&&Ph.warn(`Auth (${eo}): ${n}`,...e)}function uh(n,...e){Ph.logLevel<=be.ERROR&&Ph.error(`Auth (${eo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,...e){throw wm(n,...e)}function yr(n,...e){return wm(n,...e)}function Uw(n,e,t){const r=Object.assign(Object.assign({},xR()),{[e]:t});return new Eu("auth","Firebase",r).create(e,{appName:n.name})}function Gr(n){return Uw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fw.create(n,...e)}function Ae(n,e,...t){if(!n)throw wm(e,...t)}function Wr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uh(e),new Error(e)}function Yr(n,e){n||Wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DR(){return tv()==="http:"||tv()==="https:"}function tv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DR()||hA()||"connection"in navigator)?navigator.onLine:!0}function VR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yr(t>e,"Short delay should be less than long delay!"),this.isMobile=uA()||dA()}get(){return bR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e){Yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MR=new Iu(3e4,6e4);function Xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yi(n,e,t,r,o={}){return Bw(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=wu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:f},a);return cA()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(_.credentials="include"),jw.fetch()(await zw(n,n.config.apiHost,t,d),_)})}async function Bw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},OR),e);try{const o=new UR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Zc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,_]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zc(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Zc(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Zc(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Uw(n,v,_);nr(n,v)}}catch(o){if(o instanceof Ar)throw o;nr(n,"network-request-failed",{message:String(o)})}}async function Tu(n,e,t,r,o={}){const a=await Yi(n,e,t,r,o);return"mfaPendingCredential"in a&&nr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function zw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?Im(n.config,o):`${n.config.apiScheme}://${o}`;return LR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function FR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(yr(this.auth,"network-request-failed")),MR.get())})}}function Zc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=yr(n,e,r);return o.customData._tokenResponse=t,o}function nv(n){return n!==void 0&&n.enterprise!==void 0}class jR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return FR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BR(n,e){return Yi(n,"GET","/v2/recaptchaConfig",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(n,e){return Yi(n,"POST","/v1/accounts:delete",e)}async function Ch(n,e){return Yi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $R(n,e=!1){const t=_t(n),r=await t.getIdToken(e),o=Tm(r);Ae(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Wl(pp(o.auth_time)),issuedAtTime:Wl(pp(o.iat)),expirationTime:Wl(pp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function pp(n){return Number(n)*1e3}function Tm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return uh("JWT malformed, contained fewer than 3 sections"),null;try{const o=ww(t);return o?JSON.parse(o):(uh("Failed to decode base64 JWT payload"),null)}catch(o){return uh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function rv(n){const e=Tm(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ar&&qR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function kh(n){var e;const t=n.auth,r=await n.getIdToken(),o=await ru(n,Ch(t,{idToken:r}));Ae(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?$w(a.providerUserInfo):[],d=HR(n.providerData,u),f=n.isAnonymous,_=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?_:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Vp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function KR(n){const e=_t(n);await kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function $w(n){return n.map(e=>{var{providerId:t}=e,r=Em(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){const t=await Bw(n,{},async()=>{const r=wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await zw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(f.credentials="include"),jw.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QR(n,e){return Yi(n,"POST","/v2/accounts:revokeToken",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=rv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await GR(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new ca;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Ae(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Ae(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ca,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ru(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $R(this,e)}reload(){return KR(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await ru(this,zR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,f,_,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,D=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,j=(u=t.photoURL)!==null&&u!==void 0?u:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,re=(_=t.createdAt)!==null&&_!==void 0?_:void 0,te=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:J,emailVerified:le,isAnonymous:we,providerData:me,stsTokenManager:x}=t;Ae(J&&x,e,"internal-error");const S=ca.fromJSON(this.name,x);Ae(typeof J=="string",e,"internal-error"),Pi(w,e.name),Pi(T,e.name),Ae(typeof le=="boolean",e,"internal-error"),Ae(typeof we=="boolean",e,"internal-error"),Pi(D,e.name),Pi(j,e.name),Pi(z,e.name),Pi(V,e.name),Pi(re,e.name),Pi(te,e.name);const P=new Zn({uid:J,auth:e,email:T,emailVerified:le,displayName:w,isAnonymous:we,photoURL:j,phoneNumber:D,tenantId:z,stsTokenManager:S,createdAt:re,lastLoginAt:te});return me&&Array.isArray(me)&&(P.providerData=me.map(N=>Object.assign({},N))),V&&(P._redirectEventId=V),P}static async _fromIdTokenResponse(e,t,r=!1){const o=new ca;o.updateFromServerResponse(t);const a=new Zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await kh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Ae(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?$w(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new ca;d.updateFromIdToken(r);const f=new Zn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,_),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new Map;function Kr(n){Yr(n instanceof Function,"Expected a class definition");let e=iv.get(n);return e?(Yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,iv.set(n,e),e)}/**
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
 */class qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qw.type="NONE";const sv=qw;/**
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
 */function ch(n,e,t){return`firebase:${n}:${e}:${t}`}class ha{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=ch(this.userKey,o.apiKey,a),this.fullPersistenceKey=ch("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ch(this.auth,{idToken:e}).catch(()=>{});return t?Zn._fromGetAccountInfoResponse(this.auth,t,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ha(Kr(sv),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Kr(sv);const u=ch(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const v=await _._get(u);if(v){let w;if(typeof v=="string"){const T=await Ch(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Zn._fromGetAccountInfoResponse(e,T,v)}else w=Zn._fromJSON(e,v);_!==a&&(d=w),a=_;break}}catch{}const f=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ha(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new ha(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ww(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xw(e))return"Blackberry";if(Yw(e))return"Webos";if(Kw(e))return"Safari";if((e.includes("chrome/")||Hw(e))&&!e.includes("edge/"))return"Chrome";if(Qw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ww(n=St()){return/firefox\//i.test(n)}function Kw(n=St()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hw(n=St()){return/crios\//i.test(n)}function Gw(n=St()){return/iemobile/i.test(n)}function Qw(n=St()){return/android/i.test(n)}function Xw(n=St()){return/blackberry/i.test(n)}function Yw(n=St()){return/webos/i.test(n)}function Sm(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XR(n=St()){var e;return Sm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YR(){return fA()&&document.documentMode===10}function Jw(n=St()){return Sm(n)||Qw(n)||Yw(n)||Xw(n)||/windows phone/i.test(n)||Gw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e=[]){let t;switch(n){case"Browser":t=ov(St());break;case"Worker":t=`${ov(St())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${eo}/${r}`}/**
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
 */class JR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZR(n,e={}){return Yi(n,"GET","/v2/passwordPolicy",Xi(n,e))}/**
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
 */const eP=6;class tP{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:eP,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new JR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await ha.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ch(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Gr(this));const t=e?_t(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZR(this),t=new tP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await QR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kr(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await ha.create(this,[Kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&NR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function to(n){return _t(n)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=vA(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rP(n){td=n}function eI(n){return td.loadJS(n)}function iP(){return td.recaptchaEnterpriseScript}function sP(){return td.gapiScript}function oP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class aP{constructor(){this.enterprise=new lP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const uP="recaptcha-enterprise",tI="NO_RECAPTCHA";class cP{constructor(e){this.type=uP,this.auth=to(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{BR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new jR(f);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;nv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(_=>{u(_)}).catch(()=>{u(tI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&nv(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=iP();f.length!==0&&(f+=d),eI(f).then(()=>{o(d,a,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function lv(n,e,t,r=!1,o=!1){const a=new cP(n);let u;if(o)u=tI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Op(n,e,t,r,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await lv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await lv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(n,e){const t=ed(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(zs(a,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function dP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Kr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fP(n,e,t){const r=to(n);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=nI(e),{host:u,port:d}=pP(e),f=d===null?"":`:${d}`,_={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(zs(_,r.config.emulator)&&zs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Zs(u)?(mm(`${a}//${u}${f}`),gm("Auth",!0)):mP()}function nI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pP(n){const e=nI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:uv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:uv(u)}}}function uv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,t){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function gP(n,e){return Yi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(n,e){return Tu(n,"POST","/v1/accounts:signInWithPassword",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(n,e){return Tu(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}async function vP(n,e){return Tu(n,"POST","/v1/accounts:signInWithEmailLink",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Am{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new iu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new iu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Op(e,t,"signInWithPassword",_P);case"emailLink":return yP(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Op(e,r,"signUpPassword",gP);case"emailLink":return vP(e,{idToken:t,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const EP="http://localhost";class qs extends Am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=Em(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new qs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return da(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,da(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,da(e,t)}buildRequest(){const e={requestUri:EP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IP(n){const e=Ml(Fl(n)).link,t=e?Ml(Fl(e)).deep_link_id:null,r=Ml(Fl(n)).deep_link_id;return(r?Ml(Fl(r)).link:null)||r||t||e||n}class Rm{constructor(e){var t,r,o,a,u,d;const f=Ml(Fl(e)),_=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=wP((o=f.mode)!==null&&o!==void 0?o:null);Ae(_&&v&&w,"argument-error"),this.apiKey=_,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=IP(e);try{return new Rm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.providerId=xa.PROVIDER_ID}static credential(e,t){return iu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Rm.parseLink(t);return Ae(r,"argument-error"),iu._fromEmailAndCode(e,r.code,r.tenantId)}}xa.PROVIDER_ID="password";xa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Su extends rI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bi extends Su{constructor(){super("github.com")}static credential(e){return qs._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Su{constructor(){super("twitter.com")}static credential(e,t){return qs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vi.credential(t,r)}catch{return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com";Vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e){return Tu(n,"POST","/v1/accounts:signUp",Xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Zn._fromIdTokenResponse(e,r,o),u=cv(r);return new Ws({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=cv(r);return new Ws({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function cv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Ar{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,xh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new xh(e,t,r,o)}}function iI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?xh._fromErrorAndOperation(n,a,e,r):a})}async function SP(n,e,t=!1){const r=await ru(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ws._forOperation(n,"link",r)}/**
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
 */async function AP(n,e,t=!1){const{auth:r}=n;if(wn(r.app))return Promise.reject(Gr(r));const o="reauthenticate";try{const a=await ru(n,iI(r,o,e,n),t);Ae(a.idToken,r,"internal-error");const u=Tm(a.idToken);Ae(u,r,"internal-error");const{sub:d}=u;return Ae(n.uid===d,r,"user-mismatch"),Ws._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,e,t=!1){if(wn(n.app))return Promise.reject(Gr(n));const r="signIn",o=await iI(n,r,e),a=await Ws._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function RP(n,e){return sI(to(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n){const e=to(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PP(n,e,t){if(wn(n.app))return Promise.reject(Gr(n));const r=to(n),u=await Op(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&oI(n),f}),d=await Ws._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function CP(n,e,t){return wn(n.app)?Promise.reject(Gr(n)):RP(_t(n),xa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oI(n),r})}function kP(n,e,t,r){return _t(n).onIdTokenChanged(e,t,r)}function xP(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function NP(n,e,t,r){return _t(n).onAuthStateChanged(e,t,r)}function DP(n){return _t(n).signOut()}const Nh="__sak";/**
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
 */class aI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nh,"1"),this.storage.removeItem(Nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=1e3,VP=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);YR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,VP):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const OP=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uI.type="SESSION";const cI=uI;/**
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
 */function LP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new nd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),f=await LP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class MP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const _=Pm("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===_)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){return window}function FP(n){vr().location.href=n}/**
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
 */function hI(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function UP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BP(){return hI()?self:null}/**
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
 */const dI="firebaseLocalStorageDb",zP=1,Dh="firebaseLocalStorage",fI="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rd(n,e){return n.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function $P(){const n=indexedDB.deleteDatabase(dI);return new Au(n).toPromise()}function Lp(){const n=indexedDB.open(dI,zP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Dh,{keyPath:fI})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Dh)?e(r):(r.close(),await $P(),e(await Lp()))})})}async function hv(n,e,t){const r=rd(n,!0).put({[fI]:e,value:t});return new Au(r).toPromise()}async function qP(n,e){const t=rd(n,!1).get(e),r=await new Au(t).toPromise();return r===void 0?null:r.value}function dv(n,e){const t=rd(n,!0).delete(e);return new Au(t).toPromise()}const WP=800,KP=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>KP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(BP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await UP(),!this.activeServiceWorker)return;this.sender=new MP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lp();return await hv(e,Nh,"1"),await dv(e,Nh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=rd(o,!1).getAll();return new Au(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const HP=pI;new Iu(3e4,6e4);/**
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
 */function GP(n,e){return e?Kr(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cm extends Am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return da(e,this._buildIdpRequest())}_linkToIdToken(e,t){return da(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return da(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QP(n){return sI(n.auth,new Cm(n),n.bypassAuthState)}function XP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),AP(t,new Cm(n),n.bypassAuthState)}async function YP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),SP(t,new Cm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QP;case"linkViaPopup":case"linkViaRedirect":return YP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:nr(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Iu(2e3,1e4);class ua extends mI{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,ua.currentPopupAction&&ua.currentPopupAction.cancel(),ua.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ua.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JP.get())};e()}}ua.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="pendingRedirect",hh=new Map;class eC extends mI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hh.get(this.auth._key());if(!e){try{const r=await tC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hh.set(this.auth._key(),e)}return this.bypassAuthState||hh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(n,e){const t=iC(e),r=rC(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function nC(n,e){hh.set(n._key(),e)}function rC(n){return Kr(n._redirectPersistence)}function iC(n){return ch(ZP,n.config.apiKey,n.name)}async function sC(n,e,t=!1){if(wn(n.app))return Promise.reject(Gr(n));const r=to(n),o=GP(r,e),u=await new eC(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=600*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(yr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(fv(e))}saveEventToCache(e){this.cachedEventUids.add(fv(e)),this.lastProcessedEventTime=Date.now()}}function fv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(n,e={}){return Yi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hC=/^https?/;async function dC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uC(n);for(const t of e)try{if(fC(t))return}catch{}nr(n,"unauthorized-domain")}function fC(n){const e=bp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!hC.test(t))return!1;if(cC.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const pC=new Iu(3e4,6e4);function pv(){const n=vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mC(n){return new Promise((e,t)=>{var r,o,a;function u(){pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pv(),t(yr(n,"network-request-failed"))},timeout:pC.get()})}if(!((o=(r=vr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=vr().gapi)===null||a===void 0)&&a.load)u();else{const d=oP("iframefcb");return vr()[d]=()=>{gapi.load?u():t(yr(n,"network-request-failed"))},eI(`${sP()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw dh=null,e})}let dh=null;function gC(n){return dh=dh||mC(n),dh}/**
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
 */const _C=new Iu(5e3,15e3),yC="__/auth/iframe",vC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Im(e,vC):`https://${n.config.authDomain}/${yC}`,r={apiKey:e.apiKey,appName:n.name,v:eo},o=wC.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${wu(r).slice(1)}`}async function TC(n){const e=await gC(n),t=vr().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:IC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=yr(n,"network-request-failed"),d=vr().setTimeout(()=>{a(u)},_C.get());function f(){vr().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,RC=600,PC="_blank",CC="http://localhost";class mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kC(n,e,t,r=AC,o=RC){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},SC),{width:r.toString(),height:o.toString(),top:a,left:u}),_=St().toLowerCase();t&&(d=Hw(_)?PC:t),Ww(_)&&(e=e||CC,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[D,j])=>`${T}${D}=${j},`,"");if(XR(_)&&d!=="_self")return xC(e||"",d),new mv(null);const w=window.open(e||"",d,v);Ae(w,n,"popup-blocked");try{w.focus()}catch{}return new mv(w)}function xC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const NC="__/auth/handler",DC="emulator/auth/handler",bC=encodeURIComponent("fac");async function gv(n,e,t,r,o,a){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:eo,eventId:o};if(e instanceof rI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",yA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Su){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),_=f?`#${bC}=${encodeURIComponent(f)}`:"";return`${VC(n)}?${wu(d).slice(1)}${_}`}function VC({config:n}){return n.emulator?Im(n,DC):`https://${n.authDomain}/${NC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cI,this._completeRedirectFn=sC,this._overrideRedirectResult=nC}async _openPopup(e,t,r,o){var a;Yr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await gv(e,t,r,bp(),o);return kC(e,u,Pm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await gv(e,t,r,bp(),o);return FP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Yr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await TC(e),r=new aC(e);return t.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mp,{type:mp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[mp];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jw()||Kw()||Sm()}}const LC=OC;var _v="@firebase/auth",yv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UC(n){$s(new $i("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ae(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zw(n)},_=new nP(r,o,a,f);return dP(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$s(new $i("auth-internal",e=>{const t=to(e.getProvider("auth").getImmediate());return(r=>new MC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(_v,yv,FC(n)),_r(_v,yv,"esm2017")}/**
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
 */const jC=300,BC=Rw("authIdTokenMaxAge")||jC;let vv=null;const zC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>BC)return;const o=t==null?void 0:t.token;vv!==o&&(vv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $C(n=vm()){const e=ed(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hP(n,{popupRedirectResolver:LC,persistence:[HP,OP,cI]}),r=Rw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=zC(a.toString());xP(t,u,()=>u(t.currentUser)),kP(t,d=>u(d))}}const o=Tw("auth");return o&&fP(t,`http://${o}`),t}function qC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=yr("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",qC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UC("Browser");var WC="firebase",KC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(WC,KC,"app");var Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,_I;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function P(){}P.prototype=S.prototype,x.D=S.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(N,O,C){for(var R=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)R[Ye-2]=arguments[Ye];return S.prototype[O].apply(N,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,P){P||(P=0);var N=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)N[O]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(O=0;16>O;++O)N[O]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=x.g[0],P=x.g[1],O=x.g[2];var C=x.g[3],R=S+(C^P&(O^C))+N[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=C+(O^S&(P^O))+N[1]+3905402710&4294967295,C=S+(R<<12&4294967295|R>>>20),R=O+(P^C&(S^P))+N[2]+606105819&4294967295,O=C+(R<<17&4294967295|R>>>15),R=P+(S^O&(C^S))+N[3]+3250441966&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(C^P&(O^C))+N[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=C+(O^S&(P^O))+N[5]+1200080426&4294967295,C=S+(R<<12&4294967295|R>>>20),R=O+(P^C&(S^P))+N[6]+2821735955&4294967295,O=C+(R<<17&4294967295|R>>>15),R=P+(S^O&(C^S))+N[7]+4249261313&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(C^P&(O^C))+N[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=C+(O^S&(P^O))+N[9]+2336552879&4294967295,C=S+(R<<12&4294967295|R>>>20),R=O+(P^C&(S^P))+N[10]+4294925233&4294967295,O=C+(R<<17&4294967295|R>>>15),R=P+(S^O&(C^S))+N[11]+2304563134&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(C^P&(O^C))+N[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=C+(O^S&(P^O))+N[13]+4254626195&4294967295,C=S+(R<<12&4294967295|R>>>20),R=O+(P^C&(S^P))+N[14]+2792965006&4294967295,O=C+(R<<17&4294967295|R>>>15),R=P+(S^O&(C^S))+N[15]+1236535329&4294967295,P=O+(R<<22&4294967295|R>>>10),R=S+(O^C&(P^O))+N[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=C+(P^O&(S^P))+N[6]+3225465664&4294967295,C=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(C^S))+N[11]+643717713&4294967295,O=C+(R<<14&4294967295|R>>>18),R=P+(C^S&(O^C))+N[0]+3921069994&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^C&(P^O))+N[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=C+(P^O&(S^P))+N[10]+38016083&4294967295,C=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(C^S))+N[15]+3634488961&4294967295,O=C+(R<<14&4294967295|R>>>18),R=P+(C^S&(O^C))+N[4]+3889429448&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^C&(P^O))+N[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=C+(P^O&(S^P))+N[14]+3275163606&4294967295,C=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(C^S))+N[3]+4107603335&4294967295,O=C+(R<<14&4294967295|R>>>18),R=P+(C^S&(O^C))+N[8]+1163531501&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(O^C&(P^O))+N[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=C+(P^O&(S^P))+N[2]+4243563512&4294967295,C=S+(R<<9&4294967295|R>>>23),R=O+(S^P&(C^S))+N[7]+1735328473&4294967295,O=C+(R<<14&4294967295|R>>>18),R=P+(C^S&(O^C))+N[12]+2368359562&4294967295,P=O+(R<<20&4294967295|R>>>12),R=S+(P^O^C)+N[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=C+(S^P^O)+N[8]+2272392833&4294967295,C=S+(R<<11&4294967295|R>>>21),R=O+(C^S^P)+N[11]+1839030562&4294967295,O=C+(R<<16&4294967295|R>>>16),R=P+(O^C^S)+N[14]+4259657740&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^C)+N[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=C+(S^P^O)+N[4]+1272893353&4294967295,C=S+(R<<11&4294967295|R>>>21),R=O+(C^S^P)+N[7]+4139469664&4294967295,O=C+(R<<16&4294967295|R>>>16),R=P+(O^C^S)+N[10]+3200236656&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^C)+N[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=C+(S^P^O)+N[0]+3936430074&4294967295,C=S+(R<<11&4294967295|R>>>21),R=O+(C^S^P)+N[3]+3572445317&4294967295,O=C+(R<<16&4294967295|R>>>16),R=P+(O^C^S)+N[6]+76029189&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(P^O^C)+N[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=C+(S^P^O)+N[12]+3873151461&4294967295,C=S+(R<<11&4294967295|R>>>21),R=O+(C^S^P)+N[15]+530742520&4294967295,O=C+(R<<16&4294967295|R>>>16),R=P+(O^C^S)+N[2]+3299628645&4294967295,P=O+(R<<23&4294967295|R>>>9),R=S+(O^(P|~C))+N[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=C+(P^(S|~O))+N[7]+1126891415&4294967295,C=S+(R<<10&4294967295|R>>>22),R=O+(S^(C|~P))+N[14]+2878612391&4294967295,O=C+(R<<15&4294967295|R>>>17),R=P+(C^(O|~S))+N[5]+4237533241&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~C))+N[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=C+(P^(S|~O))+N[3]+2399980690&4294967295,C=S+(R<<10&4294967295|R>>>22),R=O+(S^(C|~P))+N[10]+4293915773&4294967295,O=C+(R<<15&4294967295|R>>>17),R=P+(C^(O|~S))+N[1]+2240044497&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~C))+N[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=C+(P^(S|~O))+N[15]+4264355552&4294967295,C=S+(R<<10&4294967295|R>>>22),R=O+(S^(C|~P))+N[6]+2734768916&4294967295,O=C+(R<<15&4294967295|R>>>17),R=P+(C^(O|~S))+N[13]+1309151649&4294967295,P=O+(R<<21&4294967295|R>>>11),R=S+(O^(P|~C))+N[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=C+(P^(S|~O))+N[11]+3174756917&4294967295,C=S+(R<<10&4294967295|R>>>22),R=O+(S^(C|~P))+N[2]+718787259&4294967295,O=C+(R<<15&4294967295|R>>>17),R=P+(C^(O|~S))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+C&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var P=S-this.blockSize,N=this.B,O=this.h,C=0;C<S;){if(O==0)for(;C<=P;)o(this,x,C),C+=this.blockSize;if(typeof x=="string"){for(;C<S;)if(N[O++]=x.charCodeAt(C++),O==this.blockSize){o(this,N),O=0;break}}else for(;C<S;)if(N[O++]=x[C++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var P=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=P&255,P/=256;for(this.u(x),x=Array(16),S=P=0;4>S;++S)for(var N=0;32>N;N+=8)x[P++]=this.g[S]>>>N&255;return x};function a(x,S){var P=d;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=S(x)}function u(x,S){this.h=S;for(var P=[],N=!0,O=x.length-1;0<=O;O--){var C=x[O]|0;N&&C==S||(P[O]=C,N=!1)}this.g=P}var d={};function f(x){return-128<=x&&128>x?a(x,function(S){return new u([S|0],0>S?-1:0)}):new u([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return w;if(0>x)return V(_(-x));for(var S=[],P=1,N=0;x>=P;N++)S[N]=x/P|0,P*=4294967296;return new u(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return V(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=_(Math.pow(S,8)),N=w,O=0;O<x.length;O+=8){var C=Math.min(8,x.length-O),R=parseInt(x.substring(O,O+C),S);8>C?(C=_(Math.pow(S,C)),N=N.j(C).add(_(R))):(N=N.j(P),N=N.add(_(R)))}return N}var w=f(0),T=f(1),D=f(16777216);n=u.prototype,n.m=function(){if(z(this))return-V(this).m();for(var x=0,S=1,P=0;P<this.g.length;P++){var N=this.i(P);x+=(0<=N?N:4294967296+N)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(j(this))return"0";if(z(this))return"-"+V(this).toString(x);for(var S=_(Math.pow(x,6)),P=this,N="";;){var O=le(P,S).g;P=re(P,O.j(S));var C=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=O,j(P))return C+N;for(;6>C.length;)C="0"+C;N=C+N}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function j(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function z(x){return x.h==-1}n.l=function(x){return x=re(this,x),z(x)?-1:j(x)?0:1};function V(x){for(var S=x.g.length,P=[],N=0;N<S;N++)P[N]=~x.g[N];return new u(P,~x.h).add(T)}n.abs=function(){return z(this)?V(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0,O=0;O<=S;O++){var C=N+(this.i(O)&65535)+(x.i(O)&65535),R=(C>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);N=R>>>16,C&=65535,R&=65535,P[O]=R<<16|C}return new u(P,P[P.length-1]&-2147483648?-1:0)};function re(x,S){return x.add(V(S))}n.j=function(x){if(j(this)||j(x))return w;if(z(this))return z(x)?V(this).j(V(x)):V(V(this).j(x));if(z(x))return V(this.j(V(x)));if(0>this.l(D)&&0>x.l(D))return _(this.m()*x.m());for(var S=this.g.length+x.g.length,P=[],N=0;N<2*S;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<x.g.length;O++){var C=this.i(N)>>>16,R=this.i(N)&65535,Ye=x.i(O)>>>16,Rt=x.i(O)&65535;P[2*N+2*O]+=R*Rt,te(P,2*N+2*O),P[2*N+2*O+1]+=C*Rt,te(P,2*N+2*O+1),P[2*N+2*O+1]+=R*Ye,te(P,2*N+2*O+1),P[2*N+2*O+2]+=C*Ye,te(P,2*N+2*O+2)}for(N=0;N<S;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=S;N<2*S;N++)P[N]=0;return new u(P,0)};function te(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function J(x,S){this.g=x,this.h=S}function le(x,S){if(j(S))throw Error("division by zero");if(j(x))return new J(w,w);if(z(x))return S=le(V(x),S),new J(V(S.g),V(S.h));if(z(S))return S=le(x,V(S)),new J(V(S.g),S.h);if(30<x.g.length){if(z(x)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,N=S;0>=N.l(x);)P=we(P),N=we(N);var O=me(P,1),C=me(N,1);for(N=me(N,2),P=me(P,2);!j(N);){var R=C.add(N);0>=R.l(x)&&(O=O.add(P),C=R),N=me(N,1),P=me(P,1)}return S=re(x,O.j(S)),new J(O,S)}for(O=w;0<=x.l(S);){for(P=Math.max(1,Math.floor(x.m()/S.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),C=_(P),R=C.j(S);z(R)||0<R.l(x);)P-=N,C=_(P),R=C.j(S);j(C)&&(C=T),O=O.add(C),x=re(x,R)}return new J(O,x)}n.A=function(x){return le(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)&x.i(N);return new u(P,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)|x.i(N);return new u(P,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)^x.i(N);return new u(P,this.h^x.h)};function we(x){for(var S=x.g.length+1,P=[],N=0;N<S;N++)P[N]=x.i(N)<<1|x.i(N-1)>>>31;return new u(P,x.h)}function me(x,S){var P=S>>5;S%=32;for(var N=x.g.length-P,O=[],C=0;C<N;C++)O[C]=0<S?x.i(C+P)>>>S|x.i(C+P+1)<<32-S:x.i(C+P);return new u(O,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_I=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=v,ji=u}).apply(typeof Ev<"u"?Ev:typeof self<"u"?self:typeof window<"u"?window:{});var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yI,Ul,vI,fh,Mp,EI,wI,II;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof eh=="object"&&eh];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var M=c[I];if(!(M in y))break e;y=y[M]}c=c[c.length-1],I=y[c],m=m(I),m!=I&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,I=!1,M={next:function(){if(!I&&y<c.length){var q=y++;return{value:m(q,c[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function w(c,m,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,I),c.apply(m,M)}}return function(){return c.apply(m,arguments)}}function T(c,m,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function D(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function j(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,M,q){for(var ie=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ie[qe-2]=arguments[qe];return m.prototype[M].apply(I,ie)}}function z(c){const m=c.length;if(0<m){const y=Array(m);for(let I=0;I<m;I++)y[I]=c[I];return y}return[]}function V(c,m){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const M=c.length||0,q=I.length||0;c.length=M+q;for(let ie=0;ie<q;ie++)c[M+ie]=I[ie]}else c.push(I)}}class re{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function te(c){return/^[\s\xa0]*$/.test(c)}function J(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var we=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function me(c,m,y){for(const I in c)m.call(y,c[I],I,c)}function x(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function S(c){const m={};for(const y in c)m[y]=c[y];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,I;for(let M=1;M<arguments.length;M++){I=arguments[M];for(y in I)c[y]=I[y];for(let q=0;q<P.length;q++)y=P[q],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function O(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function C(c){d.setTimeout(()=>{throw c},0)}function R(){var c=Ee;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Ye{constructor(){this.h=this.g=null}add(m,y){const I=Rt.get();I.set(m,y),this.h?this.h.next=I:this.g=I,this.h=I}}var Rt=new re(()=>new Pt,c=>c.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,oe=!1,Ee=new Ye,ue=()=>{const c=d.Promise.resolve(void 0);$e=()=>{c.then(L)}};var L=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){C(y)}var m=Rt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}oe=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var ke=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c})();function Z(c,m){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(we){e:{try{le(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:he[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Z.aa.h.call(this)}}j(Z,ye);var he={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Ge(c,m,y,I,M){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!I,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function Ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Pr(c){this.src=c,this.g={},this.h=0}Pr.prototype.add=function(c,m,y,I,M){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ie=ni(c,m,I,M);return-1<ie?(m=c[ie],y||(m.fa=!1)):(m=new Ge(m,this.src,q,!!I,M),m.fa=y,c.push(m)),m};function so(c,m){var y=m.type;if(y in c.g){var I=c.g[y],M=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=M)&&Array.prototype.splice.call(I,M,1),q&&(Ct(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ni(c,m,y,I){for(var M=0;M<c.length;++M){var q=c[M];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==I)return M}return-1}var es="closure_lm_"+(1e6*Math.random()|0),oo={};function La(c,m,y,I,M){if(Array.isArray(m)){for(var q=0;q<m.length;q++)La(c,m[q],y,I,M);return null}return y=Ua(y),c&&c[De]?c.K(m,y,_(I)?!!I.capture:!1,M):Ma(c,m,y,!1,I,M)}function Ma(c,m,y,I,M,q){if(!m)throw Error("Invalid event type");var ie=_(M)?!!M.capture:!!M,qe=lo(c);if(qe||(c[es]=qe=new Pr(c)),y=qe.add(m,y,I,ie,q),y.proxy)return y;if(I=Mu(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)ke||(M=ie),M===void 0&&(M=!1),c.addEventListener(m.toString(),I,M);else if(c.attachEvent)c.attachEvent(kr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Mu(){function c(y){return m.call(c.src,c.listener,y)}const m=Fa;return c}function ao(c,m,y,I,M){if(Array.isArray(m))for(var q=0;q<m.length;q++)ao(c,m[q],y,I,M);else I=_(I)?!!I.capture:!!I,y=Ua(y),c&&c[De]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],y=ni(q,y,I,M),-1<y&&(Ct(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=lo(c))&&(m=c.g[m.toString()],c=-1,m&&(c=ni(m,y,I,M)),(y=-1<c?m[c]:null)&&Cr(y))}function Cr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[De])so(m.i,c);else{var y=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(y,I,c.capture):m.detachEvent?m.detachEvent(kr(y),I):m.addListener&&m.removeListener&&m.removeListener(I),(y=lo(m))?(so(y,c),y.h==0&&(y.src=null,m[es]=null)):Ct(c)}}}function kr(c){return c in oo?oo[c]:oo[c]="on"+c}function Fa(c,m){if(c.da)c=!0;else{m=new Z(m,this);var y=c.listener,I=c.ha||c.src;c.fa&&Cr(c),c=y.call(I,m)}return c}function lo(c){return c=c[es],c instanceof Pr?c:null}var uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ua(c){return typeof c=="function"?c:(c[uo]||(c[uo]=function(m){return c.handleEvent(m)}),c[uo])}function vt(){H.call(this),this.i=new Pr(this),this.M=this,this.F=null}j(vt,H),vt.prototype[De]=!0,vt.prototype.removeEventListener=function(c,m,y,I){ao(this,c,m,y,I)};function Et(c,m){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new ye(m,c);else if(m instanceof ye)m.target=m.target||c;else{var M=m;m=new ye(I,c),N(m,M)}if(M=!0,y)for(var q=y.length-1;0<=q;q--){var ie=m.g=y[q];M=xr(ie,I,!0,m)&&M}if(ie=m.g=c,M=xr(ie,I,!0,m)&&M,M=xr(ie,I,!1,m)&&M,y)for(q=0;q<y.length;q++)ie=m.g=y[q],M=xr(ie,I,!1,m)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],I=0;I<y.length;I++)Ct(y[I]);delete c.g[m],c.h--}}this.F=null},vt.prototype.K=function(c,m,y,I){return this.i.add(String(c),m,!1,y,I)},vt.prototype.L=function(c,m,y,I){return this.i.add(String(c),m,!0,y,I)};function xr(c,m,y,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,q=0;q<m.length;++q){var ie=m[q];if(ie&&!ie.da&&ie.capture==y){var qe=ie.listener,wt=ie.ha||ie.src;ie.fa&&so(c.i,ie),M=qe.call(wt,I)!==!1&&M}}return M&&!I.defaultPrevented}function ja(c,m,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function ri(c){c.g=ja(()=>{c.g=null,c.i&&(c.i=!1,ri(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ts extends H{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(c){H.call(this),this.h=c,this.g={}}j(ns,H);var Ba=[];function za(c){me(c.g,function(m,y){this.g.hasOwnProperty(y)&&Cr(m)},c),c.g={}}ns.prototype.N=function(){ns.aa.N.call(this),za(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $a=d.JSON.stringify,qa=d.JSON.parse,Wa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function rs(){}rs.prototype.h=null;function co(c){return c.h||(c.h=c.i())}function ho(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rr(){ye.call(this,"d")}j(rr,ye);function fo(){ye.call(this,"c")}j(fo,ye);var ir={},Ka=null;function is(){return Ka=Ka||new vt}ir.La="serverreachability";function Ha(c){ye.call(this,ir.La,c)}j(Ha,ye);function Nr(c){const m=is();Et(m,new Ha(m))}ir.STAT_EVENT="statevent";function Ga(c,m){ye.call(this,ir.STAT_EVENT,c),this.stat=m}j(Ga,ye);function ut(c){const m=is();Et(m,new Ga(m,c))}ir.Ma="timingevent";function po(c,m){ye.call(this,ir.Ma,c),this.size=m}j(po,ye);function Mn(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function os(c,m,y,I,M,q){c.info(function(){if(c.g)if(q)for(var ie="",qe=q.split("&"),wt=0;wt<qe.length;wt++){var Le=qe[wt].split("=");if(1<Le.length){var kt=Le[0];Le=Le[1];var dt=kt.split("_");ie=2<=dt.length&&dt[1]=="type"?ie+(kt+"="+Le+"&"):ie+(kt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+I+") [attempt "+M+"]: "+m+`
`+y+`
`+ie})}function mo(c,m,y,I,M,q,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+M+"]: "+m+`
`+y+`
`+q+" "+ie})}function Fn(c,m,y,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+xd(c,y)+(I?" "+I:"")})}function Qa(c,m){c.info(function(){return"TIMEOUT: "+m})}ss.prototype.info=function(){};function xd(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var M=I[1];if(Array.isArray(M)&&!(1>M.length)){var q=M[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<M.length;ie++)M[ie]=""}}}}return $a(y)}catch{return m}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function as(){}j(as,rs),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},Un=new as;function jn(c,m,y,I){this.j=c,this.i=m,this.l=y,this.R=I||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var Xa={},_o={};function yo(c,m,y){c.L=1,c.v=li(pn(m)),c.m=y,c.P=!0,Ya(c,null)}function Ya(c,m){c.F=Date.now(),Qe(c),c.A=pn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),ci(y.i,"t",I),c.C=0,y=c.j.J,c.h=new Uu,c.g=rc(c.j,y?m:null,!c.m),0<c.O&&(c.M=new ts(T(c.Y,c,c.g),c.O)),m=c.U,y=c.g,I=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ba[0]=M.toString()),M=Ba);for(var q=0;q<M.length;q++){var ie=La(y,M[q],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Nr(),os(c.i,c.u,c.A,c.l,c.R,c.m)}jn.prototype.ca=function(c){c=c.target;const m=this.M;m&&sn(c)==3?m.j():this.Y(c)},jn.prototype.Y=function(c){try{if(c==this.g)e:{const dt=sn(this.g);var m=this.g.Ba();const Pn=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||rl(this.g)))){this.J||dt!=4||m==7||(m==8||0>=Pn?Nr(3):Nr(2)),ls(this);var y=this.g.Z();this.X=y;t:if(ju(this)){var I=rl(this.g);c="";var M=I.length,q=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),ii(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!(q&&m==M-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,mo(this.i,this.u,this.A,this.l,this.R,dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,wt=this.g;if((qe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(qe)){var Le=qe;break t}}Le=null}if(y=Le)Fn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,y);else{this.o=!1,this.s=3,ut(12),An(this),ii(this);break e}}if(this.P){y=!0;let gn;for(;!this.J&&this.C<ie.length;)if(gn=Nd(this,ie),gn==_o){dt==4&&(this.s=4,ut(14),y=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Xa){this.s=4,ut(15),Fn(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Fn(this.i,this.l,gn,null),Ja(this,gn);if(ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||ie.length!=0||this.h.h||(this.s=1,ut(16),y=!1),this.o=this.o&&y,!y)Fn(this.i,this.l,ie,"[Invalid Chunked Response]"),An(this),ii(this);else if(0<ie.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),sl(kt),kt.M=!0,ut(11))}}else Fn(this.i,this.l,ie,null),Ja(this,ie);dt==4&&An(this),this.o&&!this.J&&(dt==4?ko(this.j,this):(this.o=!1,Qe(this)))}else So(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),An(this),ii(this)}}}catch{}finally{}};function ju(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Nd(c,m){var y=c.C,I=m.indexOf(`
`,y);return I==-1?_o:(y=Number(m.substring(y,I)),isNaN(y)?Xa:(I+=1,I+y>m.length?_o:(m=m.slice(I,I+y),c.C=I+y,m)))}jn.prototype.cancel=function(){this.J=!0,An(this)};function Qe(c){c.S=Date.now()+c.I,Bu(c,c.I)}function Bu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mn(T(c.ba,c),m)}function ls(c){c.B&&(d.clearTimeout(c.B),c.B=null)}jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qa(this.i,this.A),this.L!=2&&(Nr(),ut(17)),An(this),this.s=2,ii(this)):Bu(this,this.S-c)};function ii(c){c.j.G==0||c.J||ko(c.j,c)}function An(c){ls(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,za(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ja(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||Qt(y.h,c))){if(!c.K&&Qt(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var M=I;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Co(y),Wn(y);else break e;Po(y),ut(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Mn(T(y.Za,y),6e3));if(1>=$u(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Lr(y,11)}else if((c.K||y.g==c)&&Co(y),!te(m))for(M=y.Da.g.parse(m),m=0;m<M.length;m++){let Le=M[m];if(y.T=Le[0],Le=Le[1],y.G==2)if(Le[0]=="c"){y.K=Le[1],y.ia=Le[2];const kt=Le[3];kt!=null&&(y.la=kt,y.j.info("VER="+y.la));const dt=Le[4];dt!=null&&(y.Aa=dt,y.j.info("SVER="+y.Aa));const Pn=Le[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(I=1.5*Pn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const gn=c.g;if(gn){const ms=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var q=I.h;q.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Za(q,q.h),q.h=null))}if(I.D){const No=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(I.ya=No,He(I.I,I.D,No))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ie=c;if(I.qa=nc(I,I.J?I.ia:null,I.W),ie.K){qu(I.h,ie);var qe=ie,wt=I.L;wt&&(qe.I=wt),qe.B&&(ls(qe),Qe(qe)),I.g=ie}else ps(I);0<y.i.length&&lr(y)}else Le[0]!="stop"&&Le[0]!="close"||Lr(y,7);else y.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Lr(y,7):Ot(y):Le[0]!="noop"&&y.l&&y.l.ta(Le),y.v=0)}}Nr(4)}catch{}}var zu=class{constructor(c,m){this.g=c,this.map=m}};function us(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $u(c){return c.h?1:c.g?c.g.size:0}function Qt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Za(c,m){c.g?c.g.add(m):c.h=m}function qu(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}us.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Wu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return z(c.i)}function vo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,I=0;I<y;I++)m.push(c[I]);return m}m=[],y=0;for(I in c)m[y++]=c[I];return m}function Eo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const I in c)m[y++]=I;return m}}}function si(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=Eo(c),I=vo(c),M=I.length,q=0;q<M;q++)m.call(void 0,I[q],y&&y[q],c)}var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dd(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),M=null;if(0<=I){var q=c[y].substring(0,I);M=c[y].substring(I+1)}else q=c[y];m(q,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Dr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Dr){this.h=c.h,hs(this,c.j),this.o=c.o,this.g=c.g,oi(this,c.s),this.l=c.l;var m=c.i,y=new sr;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),ai(this,y),this.m=c.m}else c&&(m=String(c).match(cs))?(this.h=!1,hs(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),oi(this,m[4]),this.l=Oe(m[5]||"",!0),ai(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}Dr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(ui(m,wo,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ui(m,wo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ui(y,y.charAt(0)=="/"?Gu:Hu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ui(y,el)),c.join("")};function pn(c){return new Dr(c)}function hs(c,m,y){c.j=y?Oe(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function oi(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function ai(c,m,y){m instanceof sr?(c.i=m,or(c.i,c.h)):(y||(m=ui(m,Qu)),c.i=new sr(m,c.h))}function He(c,m,y){c.i.set(m,y)}function li(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oe(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ui(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Ku),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ku(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,Hu=/[#\?:]/g,Gu=/[#\?]/g,Qu=/[#\?@]/g,el=/#/g;function sr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Vt(c){c.g||(c.g=new Map,c.h=0,c.i&&Dd(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=sr.prototype,n.add=function(c,m){Vt(this),this.i=null,c=Rn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Bn(c,m){Vt(c),m=Rn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function zn(c,m){return Vt(c),m=Rn(c,m),c.g.has(m)}n.forEach=function(c,m){Vt(this),this.g.forEach(function(y,I){y.forEach(function(M){c.call(m,M,I,this)},this)},this)},n.na=function(){Vt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let I=0;I<m.length;I++){const M=c[I];for(let q=0;q<M.length;q++)y.push(m[I])}return y},n.V=function(c){Vt(this);let m=[];if(typeof c=="string")zn(this,c)&&(m=m.concat(this.g.get(Rn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return Vt(this),this.i=null,c=Rn(this,c),zn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function ci(c,m,y){Bn(c,m),0<y.length&&(c.i=null,c.g.set(Rn(c,m),z(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var I=m[y];const q=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var M=q;ie[I]!==""&&(M+="="+encodeURIComponent(String(ie[I]))),c.push(M)}}return this.i=c.join("&")};function Rn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function or(c,m){m&&!c.j&&(Vt(c),c.i=null,c.g.forEach(function(y,I){var M=I.toLowerCase();I!=M&&(Bn(this,I),ci(this,M,y))},c)),c.j=m}function bd(c,m){const y=new ss;if(d.Image){const I=new Image;I.onload=D(rn,y,"TestLoadImage: loaded",!0,m,I),I.onerror=D(rn,y,"TestLoadImage: error",!1,m,I),I.onabort=D(rn,y,"TestLoadImage: abort",!1,m,I),I.ontimeout=D(rn,y,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Xu(c,m){const y=new ss,I=new AbortController,M=setTimeout(()=>{I.abort(),rn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then(q=>{clearTimeout(M),q.ok?rn(y,"TestPingServer: ok",!0,m):rn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),rn(y,"TestPingServer: error",!1,m)})}function rn(c,m,y,I,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),I(y)}catch{}}function Vd(){this.g=new Wa}function Yu(c,m,y){const I=y||"";try{si(c,function(M,q){let ie=M;_(M)&&(ie=$a(M)),m.push(I+q+"="+encodeURIComponent(ie))})}catch(M){throw m.push(I+"type="+encodeURIComponent("_badmap")),M}}function br(c){this.l=c.Ub||null,this.j=c.eb||!1}j(br,rs),br.prototype.g=function(){return new ds(this.l,this.j)},br.prototype.i=(function(c){return function(){return c}})({});function ds(c,m){vt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(ds,vt),n=ds.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,qn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ju(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ju(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?$n(this):qn(this),this.readyState==3&&Ju(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,$n(this))},n.Qa=function(c){this.g&&(this.response=c,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function qn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vr(c){let m="";return me(c,function(y,I){m+=I,m+=":",m+=y,m+=`\r
`}),m}function hi(c,m,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=Vr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):He(c,m,y))}function et(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(et,vt);var Od=/^https?$/i,tl=["POST","PUT"];n=et.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?co(this.o):co(Un),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){fs(this,q);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var M in I)y.set(M,I[M]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())y.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),M=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(tl,m,void 0))||I||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of y)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{To(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){fs(this,q)}};function fs(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Io(c),mn(c)}function Io(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Et(this,"complete"),Et(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},n.bb=function(){nl(this)};function nl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||sn(c)!=4||c.Z()!=2)){if(c.u&&sn(c)==4)ja(c.Ea,0,c);else if(Et(c,"readystatechange"),sn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var I;if(I=ie===0){var M=String(c.D).match(cs)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),I=!Od.test(M?M.toLowerCase():"")}y=I}if(y)Et(c,"complete"),Et(c,"success");else{c.m=6;try{var q=2<sn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Io(c)}}finally{mn(c)}}}}function mn(c,m){if(c.g){To(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Et(c,"ready");try{y.onreadystatechange=I}catch{}}}function To(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function sn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),qa(m)}};function rl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function So(c){const m={};c=(c.g&&2<=sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(te(c[I]))continue;var y=O(c[I]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[M]||[];m[M]=q,q.push(y)}x(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function il(c){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,c),this.cb=ar("retryDelaySeedMs",1e4,c),this.Wa=ar("forwardChannelMaxRetries",2,c),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new us(c&&c.concurrentRequestLimit),this.Da=new Vd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,I){ut(0),this.W=c,this.H=m||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=nc(this,null,this.W),lr(this)};function Ot(c){if(Ao(c),c.G==3){var m=c.U++,y=pn(c.I);if(He(y,"SID",c.K),He(y,"RID",m),He(y,"TYPE","terminate"),Or(c,y),m=new jn(c,c.j,m),m.L=2,m.v=li(pn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=rc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Qe(m)}tc(c)}function Wn(c){c.g&&(sl(c),c.g.cancel(),c.g=null)}function Ao(c){Wn(c),c.u&&(d.clearTimeout(c.u),c.u=null),Co(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function lr(c){if(!fn(c.h)&&!c.s){c.s=!0;var m=c.Ga;$e||ue(),oe||($e(),oe=!0),Ee.add(m,c),c.B=0}}function Ld(c,m){return $u(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mn(T(c.Ga,c,m),ec(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new jn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(M.H=q,q=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=di(this,M,m),y=pn(this.I),He(y,"RID",c),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Or(this,y),q&&(this.O?m="headers="+encodeURIComponent(String(Vr(q)))+"&"+m:this.m&&hi(y,this.m,q)),Za(this.h,M),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",m),He(y,"SID","null"),M.T=!0,yo(M,y,null)):yo(M,y,m),this.G=2}}else this.G==3&&(c?Ro(this,c):this.i.length==0||fn(this.h)||Ro(this))};function Ro(c,m){var y;m?y=m.l:y=c.U++;const I=pn(c.I);He(I,"SID",c.K),He(I,"RID",y),He(I,"AID",c.T),Or(c,I),c.m&&c.o&&hi(I,c.m,c.o),y=new jn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=di(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Za(c.h,y),yo(y,I,m)}function Or(c,m){c.H&&me(c.H,function(y,I){He(m,I,y)}),c.l&&si({},function(y,I){He(m,I,y)})}function di(c,m,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var M=c.i;let q=-1;for(;;){const ie=["count="+y];q==-1?0<y?(q=M[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let qe=!0;for(let wt=0;wt<y;wt++){let Le=M[wt].g;const kt=M[wt].map;if(Le-=q,0>Le)q=Math.max(0,M[wt].g-100),qe=!1;else try{Yu(kt,ie,"req"+Le+"_")}catch{I&&I(kt)}}if(qe){I=ie.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,I}function ps(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;$e||ue(),oe||($e(),oe=!0),Ee.add(m,c),c.v=0}}function Po(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mn(T(c.Fa,c),ec(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Wn(this),Zu(this))};function sl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Zu(c){c.g=new jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=pn(c.qa);He(m,"RID","rpc"),He(m,"SID",c.K),He(m,"AID",c.T),He(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(m,"TO",c.ja),He(m,"TYPE","xmlhttp"),Or(c,m),c.m&&c.o&&hi(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=li(pn(m)),y.m=null,y.P=!0,Ya(y,c)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),Po(this),ut(19))};function Co(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ko(c,m){var y=null;if(c.g==m){Co(c),sl(c),c.g=null;var I=2}else if(Qt(c.h,m))y=m.D,qu(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var M=c.B;I=is(),Et(I,new po(I,y)),lr(c)}else ps(c);else if(M=m.s,M==3||M==0&&0<m.X||!(I==1&&Ld(c,m)||I==2&&Po(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),M){case 1:Lr(c,5);break;case 4:Lr(c,10);break;case 3:Lr(c,6);break;default:Lr(c,2)}}}function ec(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Lr(c,m){if(c.j.info("Error code "+m),m==2){var y=T(c.fb,c),I=c.Xa;const M=!I;I=new Dr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||hs(I,"https"),li(I),M?bd(I.toString(),y):Xu(I.toString(),y)}else ut(2);c.G=0,c.l&&c.l.sa(m),tc(c),Ao(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function tc(c){if(c.G=0,c.ka=[],c.l){const m=Wu(c.h);(m.length!=0||c.i.length!=0)&&(V(c.ka,m),V(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function nc(c,m,y){var I=y instanceof Dr?pn(y):new Dr(y);if(I.g!="")m&&(I.g=m+"."+I.g),oi(I,I.s);else{var M=d.location;I=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var q=new Dr(null);I&&hs(q,I),m&&(q.g=m),M&&oi(q,M),y&&(q.l=y),I=q}return y=c.D,m=c.ya,y&&m&&He(I,y,m),He(I,"VER",c.la),Or(c,I),I}function rc(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new et(new br({eb:y})):new et(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xo(){}xo.prototype.g=function(c,m){return new Xt(c,m)};function Xt(c,m){vt.call(this),this.g=new il(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!te(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!te(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ur(this)}j(Xt,vt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Ot(this.g)},Xt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=$a(c),c=y);m.i.push(new zu(m.Ya++,c)),m.G==3&&lr(m)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Xt.aa.N.call(this)};function ic(c){rr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}j(ic,rr);function sc(){fo.call(this),this.status=1}j(sc,fo);function ur(c){this.g=c}j(ur,ol),ur.prototype.ua=function(){Et(this.g,"a")},ur.prototype.ta=function(c){Et(this.g,new ic(c))},ur.prototype.sa=function(c){Et(this.g,new sc)},ur.prototype.ra=function(){Et(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,II=function(){return new xo},wI=function(){return is()},EI=ir,Mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,fh=go,Fu.COMPLETE="complete",vI=Fu,ho.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Ul=ho,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,yI=et}).apply(typeof eh<"u"?eh:typeof self<"u"?self:typeof window<"u"?window:{});const wv="@firebase/firestore",Iv="4.8.0";/**
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
 */const Ks=new _m("@firebase/firestore");function ia(){return Ks.logLevel}function ee(n,...e){if(Ks.logLevel<=be.DEBUG){const t=e.map(km);Ks.debug(`Firestore (${Na}): ${n}`,...t)}}function Zt(n,...e){if(Ks.logLevel<=be.ERROR){const t=e.map(km);Ks.error(`Firestore (${Na}): ${n}`,...t)}}function Ir(n,...e){if(Ks.logLevel<=be.WARN){const t=e.map(km);Ks.warn(`Firestore (${Na}): ${n}`,...t)}}function km(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,TI(n,r,t)}function TI(n,e,t){let r=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Zt(r),new Error(r)}function ve(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||TI(e,o,r)}function Ce(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class SI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class GC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class QC{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new SI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class XC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new XC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0,3512);const r=a=>{a.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ee("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function AI(){return new TextEncoder}/**
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
 */class xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=ZC(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Fp(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return Re(r,o);{const a=AI(),u=ek(a.encode(Sv(n,t)),a.encode(Sv(e,t)));return u!==0?u:Re(r,o)}}t+=r>65535?2:1}return Re(n.length,e.length)}function Sv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ek(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function ma(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}function RI(n){return n+"\0"}/**
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
 */const Av="__name__";class pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&pe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=pr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Re(e.length,t.length)}static compareSegments(e,t){const r=pr.isNumericId(e),o=pr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?pr.extractNumericId(e).compare(pr.extractNumericId(t)):Fp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ji.fromString(e.substring(4,e.length-2))}}class Be extends pr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new Be(t)}static emptyPath(){return new Be([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends pr{construct(e,t,r){return new ot(e,t,r)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Av}static keyField(){return new ot([Av])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new se(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new se(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(t)}static emptyPath(){return new ot([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Be.fromString(e))}static fromName(e){return new ae(Be.fromString(e).popFirst(5))}static empty(){return new ae(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Be(e.slice()))}}/**
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
 */function PI(n,e,t){if(!t)throw new se(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nk(n,e,t,r){if(e===!0&&r===!0)throw new se(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rv(n){if(!ae.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pv(n){if(ae.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function CI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function id(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe(12329,{type:typeof n})}function tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=id(n);throw new se(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ru(n,e){if(!CI(n))throw new se(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const Cv=-62135596800,kv=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*kv);return new ze(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cv)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kv}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ru(e,ze._jsonSchema))return new ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ze._jsonSchemaVersion="firestore/timestamp/1.0",ze._jsonSchema={type:mt("string",ze._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new ze(0,0))}static max(){return new Ie(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const su=-1;class bh{constructor(e,t,r,o){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=o}}function Up(n){return n.fields.find((e=>e.kind===2))}function xs(n){return n.fields.filter((e=>e.kind!==2))}bh.UNKNOWN_ID=-1;class ph{constructor(e,t){this.fieldPath=e,this.kind=t}}class ou{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ou(0,Tn.min())}}function rk(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(r===1e9?new ze(t+1,0):new ze(t,r));return new Tn(o,ae.empty(),e)}function kI(n){return new Tn(n.readTime,n.key,su)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(Ie.min(),ae.empty(),su)}static max(){return new Tn(Ie.max(),ae.empty(),su)}}function Nm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function no(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==xI)throw n;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,r)=>{t(e)}))}static reject(e){return new F(((t,r)=>{r(e)}))}static waitFor(e){return new F(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(f=>r(f)))})),u=!0,a===o&&t()}))}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next((o=>o?F.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new F(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const _=f;t(e[_]).next((v=>{u[_]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new F(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}/**
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
 */const En="SimpleDb";class sd{static open(e,t,r,o){try{return new sd(t,e.transaction(o,r))}catch(a){throw new Kl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Qr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Kl(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const o=Dm(r.target.error);this.S.reject(new Kl(e,o))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ee(En,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new sk(t)}}class Bi{static delete(e){return ee(En,"Removing database:",e),Ds(Iw().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Nw())return!1;if(Bi.F())return!0;const e=St(),t=Bi.M(e),r=0<t&&t<10,o=DI(e),a=0<o&&o<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,Bi.M(St())===12.2&&Zt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(ee(En,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const o=indexedDB.open(this.name,this.version);o.onsuccess=a=>{const u=a.target.result;t(u)},o.onblocked=()=>{r(new Kl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},o.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new se(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new se(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Kl(e,u))},o.onupgradeneeded=a=>{ee(En,'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;if(this.L!==null&&this.L!==a.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${a.oldVersion}, event.newVersion=${a.newVersion}, db.version=${u.version}`);this.B.q(u,o.transaction,a.oldVersion,this.version).next((()=>{ee(En,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const r=t.target;this.L=r.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var r;t.newVersion===null&&(Ir('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,o){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=sd.open(this.db,e,a?"readonly":"readwrite",r),f=o(d).next((_=>(d.v(),_))).catch((_=>(d.abort(_),F.reject(_)))).toPromise();return f.catch((()=>{})),await d.D,f}catch(d){const f=d,_=f.name!=="FirebaseError"&&u<3;if(ee(En,"Transaction failed with error:",f.message,"Retrying:",_),this.close(),!_)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function DI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class ik{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Ds(this.$.delete())}}class Kl extends se{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ji(n){return n.name==="IndexedDbTransactionError"}class sk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ee(En,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ee(En,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ds(r)}add(e){return ee(En,"ADD",this.store.name,e,e),Ds(this.store.add(e))}get(e){return Ds(this.store.get(e)).next((t=>(t===void 0&&(t=null),ee(En,"GET",this.store.name,e,t),t)))}delete(e){return ee(En,"DELETE",this.store.name,e),Ds(this.store.delete(e))}count(){return ee(En,"COUNT",this.store.name),Ds(this.store.count())}j(e,t){const r=this.options(e,t),o=r.index?this.store.index(r.index):this.store;if(typeof o.getAll=="function"){const a=o.getAll(r.range);return new F(((u,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{u(f.target.result)}}))}{const a=this.cursor(r),u=[];return this.J(a,((d,f)=>{u.push(f)})).next((()=>u))}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new F(((o,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{o(u.target.result)}}))}Y(e,t){ee(En,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const o=this.cursor(r);return this.J(o,((a,u,d)=>d.delete()))}X(e,t){let r;t?r=e:(r={},t=e);const o=this.cursor(r);return this.J(o,t)}ee(e){const t=this.cursor({});return new F(((r,o)=>{t.onerror=a=>{const u=Dm(a.target.error);o(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next((d=>{d?u.continue():r()})):r()}}))}J(e,t){const r=[];return new F(((o,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void o();const f=new ik(d),_=t(d.primaryKey,d.value,f);if(_ instanceof F){const v=_.catch((w=>(f.done(),F.reject(w))));r.push(v)}f.isDone?o():f.W===null?d.continue():d.continue(f.W)}})).next((()=>F.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ds(n){return new F(((e,t)=>{n.onsuccess=r=>{const o=r.target.result;e(o)},n.onerror=r=>{const o=Dm(r.target.error);t(o)}}))}let xv=!1;function Dm(n){const e=Bi.M(St());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new se("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xv||(xv=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Hl="IndexBackfiller";class ok{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){ee(Hl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();ee(Hl,`Documents written: ${t}`)}catch(t){Ji(t)?ee(Hl,"Ignoring IndexedDB error during index backfill: ",t):await no(t)}await this.ne(6e4)}))}}class ak{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const r=new Set;let o=t,a=!0;return F.doWhile((()=>a===!0&&o>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((u=>{if(u!==null&&!r.has(u))return ee(Hl,`Processing collection: ${u}`),this.se(e,u,o).next((d=>{o-=d,r.add(u)}));a=!1})))).next((()=>t-o))}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((o=>this.localStore.localDocuments.getNextDocuments(e,t,o,r).next((a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next((()=>this.oe(o,a))).next((d=>(ee(Hl,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d)))).next((()=>u.size))}))))}oe(e,t){let r=e;return t.changes.forEach(((o,a)=>{const u=kI(a);Nm(u,r)>0&&(r=u)})),new Tn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Fs=-1;function od(n){return n==null}function au(n){return n===0&&1/n==-1/0}function lk(n){return typeof n=="number"&&Number.isInteger(n)&&!au(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vh="";function Gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Nv(e)),e=uk(n.get(t),e);return Nv(e)}function uk(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case Vh:t+="";break;default:t+=a}}return t}function Nv(n){return n+Vh+""}function mr(n){const e=n.length;if(ve(e>=2,64408,{path:n}),e===2)return ve(n.charAt(0)===Vh&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,r=[];let o="";for(let a=0;a<e;){const u=n.indexOf(Vh,a);switch((u<0||u>t)&&pe(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(a,u);let f;o.length===0?f=d:(o+=d,f=o,o=""),r.push(f);break;case"":o+=n.substring(a,u),o+="\0";break;case"":o+=n.substring(a,u+1);break;default:pe(61167,{path:n})}a=u+2}return new Be(r)}/**
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
 */const Ns="remoteDocuments",Pu="owner",Jo="owner",lu="mutationQueues",ck="userId",Jn="mutations",Dv="batchId",Ls="userMutationsIndex",bv=["userId","batchId"];/**
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
 */function mh(n,e){return[n,Gt(e)]}function bI(n,e,t){return[n,Gt(e),t]}const hk={},ga="documentMutations",Oh="remoteDocumentsV14",dk=["prefixPath","collectionGroup","readTime","documentId"],gh="documentKeyIndex",fk=["prefixPath","collectionGroup","documentId"],VI="collectionGroupIndex",pk=["collectionGroup","readTime","prefixPath","documentId"],uu="remoteDocumentGlobal",jp="remoteDocumentGlobalKey",_a="targets",OI="queryTargetsIndex",mk=["canonicalId","targetId"],ya="targetDocuments",gk=["targetId","path"],bm="documentTargetsIndex",_k=["path","targetId"],Lh="targetGlobalKey",Us="targetGlobal",cu="collectionParents",yk=["collectionId","parent"],va="clientMetadata",vk="clientId",ad="bundles",Ek="bundleId",ld="namedQueries",wk="name",Vm="indexConfiguration",Ik="indexId",Bp="collectionGroupIndex",Tk="collectionGroup",Gl="indexState",Sk=["indexId","uid"],LI="sequenceNumberIndex",Ak=["uid","sequenceNumber"],Ql="indexEntries",Rk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],MI="documentKeyIndex",Pk=["indexId","uid","orderedDocumentKey"],ud="documentOverlays",Ck=["userId","collectionPath","documentId"],zp="collectionPathOverlayIndex",kk=["userId","collectionPath","largestBatchId"],FI="collectionGroupOverlayIndex",xk=["userId","collectionGroup","largestBatchId"],Om="globals",Nk="name",UI=[lu,Jn,ga,Ns,_a,Pu,Us,ya,va,uu,cu,ad,ld],Dk=[...UI,ud],jI=[lu,Jn,ga,Oh,_a,Pu,Us,ya,va,uu,cu,ad,ld,ud],BI=jI,Lm=[...BI,Vm,Gl,Ql],bk=Lm,zI=[...Lm,Om],Vk=zI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends NI{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function At(n,e){const t=Ce(n);return Bi.N(t.ce,e)}/**
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
 */function Vv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $I(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||jt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new th(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new th(this.root,e,this.comparator,!1)}getReverseIterator(){return new th(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new th(this.root,e,this.comparator,!0)}}class th{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??jt.RED,this.left=o??jt.EMPTY,this.right=a??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new jt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return jt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ov(this.data.getIterator())}getIteratorFrom(e){return new Ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class Ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zo(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new dn([])}unionWith(e){let t=new Ke(ot.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ma(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class qI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new qI("Invalid base64 string: "+a):a}})(e);return new yt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Ok=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(n){if(ve(!!n,39018),typeof n=="string"){let e=0;const t=Ok.exec(n);if(ve(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zr(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="server_timestamp",KI="__type__",HI="__previous_value__",GI="__local_write_time__";function Mm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[KI])===null||t===void 0?void 0:t.stringValue)===WI}function cd(n){const e=n.mapValue.fields[HI];return Mm(e)?cd(e):e}function hu(n){const e=Jr(n.mapValue.fields[GI].timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class Lk{constructor(e,t,r,o,a,u,d,f,_,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=_,this.isUsingEmulator=v}}const Mh="(default)";class Hs{constructor(e,t){this.projectId=e,this.database=t||Mh}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===Mh}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="__type__",QI="__max__",Mi={mapValue:{fields:{__type__:{stringValue:QI}}}},Um="__vector__",Ea="value",_h={nullValue:"NULL_VALUE"};function qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mm(n)?4:XI(n)?9007199254740991:hd(n)?10:11:pe(28295,{value:n})}function Tr(n,e){if(n===e)return!0;const t=qi(n);if(t!==qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hu(n).isEqual(hu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Jr(o.timestampValue),d=Jr(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Zr(o.bytesValue).isEqual(Zr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return nt(o.geoPointValue.latitude)===nt(a.geoPointValue.latitude)&&nt(o.geoPointValue.longitude)===nt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return nt(o.integerValue)===nt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=nt(o.doubleValue),d=nt(a.doubleValue);return u===d?au(u)===au(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return ma(n.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Vv(u)!==Vv(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Tr(u[f],d[f])))return!1;return!0})(n,e);default:return pe(52216,{left:n})}}function du(n,e){return(n.values||[]).find((t=>Tr(t,e)))!==void 0}function Wi(n,e){if(n===e)return 0;const t=qi(n),r=qi(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=nt(a.integerValue||a.doubleValue),f=nt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Lv(n.timestampValue,e.timestampValue);case 4:return Lv(hu(n),hu(e));case 5:return Fp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Zr(a),f=Zr(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let _=0;_<d.length&&_<f.length;_++){const v=Re(d[_],f[_]);if(v!==0)return v}return Re(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Re(nt(a.latitude),nt(u.latitude));return d!==0?d:Re(nt(a.longitude),nt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Mv(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,_,v;const w=a.fields||{},T=u.fields||{},D=(d=w[Ea])===null||d===void 0?void 0:d.arrayValue,j=(f=T[Ea])===null||f===void 0?void 0:f.arrayValue,z=Re(((_=D==null?void 0:D.values)===null||_===void 0?void 0:_.length)||0,((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:Mv(D,j)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Mi.mapValue&&u===Mi.mapValue)return 0;if(a===Mi.mapValue)return 1;if(u===Mi.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),_=u.fields||{},v=Object.keys(_);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Fp(f[w],v[w]);if(T!==0)return T;const D=Wi(d[f[w]],_[v[w]]);if(D!==0)return D}return Re(f.length,v.length)})(n.mapValue,e.mapValue);default:throw pe(23264,{le:t})}}function Lv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Jr(n),r=Jr(e),o=Re(t.seconds,r.seconds);return o!==0?o:Re(t.nanos,r.nanos)}function Mv(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=Wi(t[o],r[o]);if(a)return a}return Re(t.length,r.length)}function wa(n){return qp(n)}function qp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Jr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=qp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${qp(t.fields[u])}`;return o+"}"})(n.mapValue):pe(61005,{value:n})}function yh(n){switch(qi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cd(n);return e?16+yh(e):16;case 5:return 2*n.stringValue.length;case 6:return Zr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+yh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Zi(r.fields,((a,u)=>{o+=a.length+yh(u)})),o})(n.mapValue);default:throw pe(13486,{value:n})}}function fu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wp(n){return!!n&&"integerValue"in n}function pu(n){return!!n&&"arrayValue"in n}function Fv(n){return!!n&&"nullValue"in n}function Uv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vh(n){return!!n&&"mapValue"in n}function hd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fm])===null||t===void 0?void 0:t.stringValue)===Um}function Xl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zi(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Xl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function XI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===QI}const YI={mapValue:{fields:{[Fm]:{stringValue:Um},[Ea]:{arrayValue:{}}}}};function Mk(n){return"nullValue"in n?_h:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?fu(Hs.empty(),ae.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?hd(n)?YI:{mapValue:{}}:pe(35942,{value:n})}function Fk(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?fu(Hs.empty(),ae.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?YI:"mapValue"in n?hd(n)?{mapValue:{}}:Mi:pe(61959,{value:n})}function jv(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Bv(n,e){const t=Wi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xl(t)}setAll(e){let t=ot.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=Xl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];vh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Zi(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new Ht(Xl(this.value))}}function JI(n){const e=[];return Zi(n.fields,((t,r)=>{const o=new ot([t]);if(vh(r)){const a=JI(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new dn(e)}/**
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
 */class lt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new lt(e,0,Ie.min(),Ie.min(),Ie.min(),Ht.empty(),0)}static newFoundDocument(e,t,r,o){return new lt(e,1,t,Ie.min(),r,o,0)}static newNoDocument(e,t){return new lt(e,2,t,Ie.min(),Ie.min(),Ht.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,Ie.min(),Ie.min(),Ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ia{constructor(e,t){this.position=e,this.inclusive=t}}function zv(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(u.referenceValue),t.key):r=Wi(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function $v(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Uk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ZI{}class Ve extends ZI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jk(e,t,r):t==="array-contains"?new $k(e,r):t==="in"?new s0(e,r):t==="not-in"?new qk(e,r):t==="array-contains-any"?new Wk(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Bk(e,r):new zk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wi(t,this.value)):t!==null&&qi(this.value)===qi(t)&&this.matchesComparison(Wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends ZI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new We(e,t)}matches(e){return Ta(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ta(n){return n.op==="and"}function Kp(n){return n.op==="or"}function jm(n){return e0(n)&&Ta(n)}function e0(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function Hp(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+wa(n.value);if(jm(n))return n.filters.map((e=>Hp(e))).join(",");{const e=n.filters.map((t=>Hp(t))).join(",");return`${n.op}(${e})`}}function t0(n,e){return n instanceof Ve?(function(r,o){return o instanceof Ve&&r.op===o.op&&r.field.isEqual(o.field)&&Tr(r.value,o.value)})(n,e):n instanceof We?(function(r,o){return o instanceof We&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&t0(u,o.filters[d])),!0):!1})(n,e):void pe(19439)}function n0(n,e){const t=n.filters.concat(e);return We.create(t,n.op)}function r0(n){return n instanceof Ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${wa(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(r0).join(" ,")+"}"})(n):"Filter"}class jk extends Ve{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class Bk extends Ve{constructor(e,t){super(e,"in",t),this.keys=i0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zk extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=i0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function i0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ae.fromName(r.referenceValue)))}class $k extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pu(t)&&du(t.arrayValue,this.value)}}class s0 extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&du(this.value.arrayValue,t)}}class qk extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!du(this.value.arrayValue,t)}}class Wk extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>du(this.value.arrayValue,r)))}}/**
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
 */class Kk{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Gp(n,e=null,t=[],r=[],o=null,a=null,u=null){return new Kk(n,e,t,r,o,a,u)}function Gs(n){const e=Ce(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Hp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),od(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>wa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>wa(r))).join(",")),e.Pe=t}return e.Pe}function Cu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Uk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!t0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$v(n.startAt,e.startAt)&&$v(n.endAt,e.endAt)}function Fh(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Uh(n,e){return n.filters.filter((t=>t instanceof Ve&&t.field.isEqual(e)))}function qv(n,e,t){let r=_h,o=!0;for(const a of Uh(n,e)){let u=_h,d=!0;switch(a.op){case"<":case"<=":u=Mk(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,d=!1;break;case"!=":case"not-in":u=_h}jv({value:r,inclusive:o},{value:u,inclusive:d})<0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];jv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})<0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}function Wv(n,e,t){let r=Mi,o=!0;for(const a of Uh(n,e)){let u=Mi,d=!0;switch(a.op){case">=":case">":u=Fk(a.value),d=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,d=!1;break;case"!=":case"not-in":u=Mi}Bv({value:r,inclusive:o},{value:u,inclusive:d})>0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Bv({value:r,inclusive:o},{value:u,inclusive:t.inclusive})>0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}/**
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
 */class Da{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Hk(n,e,t,r,o,a,u,d){return new Da(n,e,t,r,o,a,u,d)}function ku(n){return new Da(n)}function Kv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function o0(n){return n.collectionGroup!==null}function Yl(n){const e=Ce(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ke(ot.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new mu(a,r))})),t.has(ot.keyField().canonicalString())||e.Te.push(new mu(ot.keyField(),r))}return e.Te}function Ln(n){const e=Ce(n);return e.Ie||(e.Ie=Gk(e,Yl(n))),e.Ie}function Gk(n,e){if(n.limitType==="F")return Gp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new mu(o.field,a)}));const t=n.endAt?new Ia(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ia(n.startAt.position,n.startAt.inclusive):null;return Gp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qp(n,e){const t=n.filters.concat([e]);return new Da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xp(n,e,t){return new Da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function dd(n,e){return Cu(Ln(n),Ln(e))&&n.limitType===e.limitType}function a0(n){return`${Gs(Ln(n))}|lt:${n.limitType}`}function sa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>r0(o))).join(", ")}]`),od(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>wa(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>wa(o))).join(",")),`Target(${r})`})(Ln(n))}; limitType=${n.limitType})`}function xu(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of Yl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,f){const _=zv(u,d,f);return u.inclusive?_<=0:_<0})(r.startAt,Yl(r),o)||r.endAt&&!(function(u,d,f){const _=zv(u,d,f);return u.inclusive?_>=0:_>0})(r.endAt,Yl(r),o))})(n,e)}function Qk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function l0(n){return(e,t)=>{let r=!1;for(const o of Yl(n)){const a=Xk(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Xk(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),_=d.data.field(a);return f!==null&&_!==null?Wi(f,_):pe(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:n.dir})}}/**
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
 */class ei{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return $I(this.inner)}size(){return this.innerSize}}/**
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
 */const Yk=new rt(ae.comparator);function In(){return Yk}const u0=new rt(ae.comparator);function jl(...n){let e=u0;for(const t of n)e=e.insert(t.key,t);return e}function c0(n){let e=u0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function gr(){return Jl()}function h0(){return Jl()}function Jl(){return new ei((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Jk=new rt(ae.comparator),Zk=new Ke(ae.comparator);function xe(...n){let e=Zk;for(const t of n)e=e.add(t);return e}const ex=new Ke(Re);function tx(){return ex}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function d0(n){return{integerValue:""+n}}function nx(n,e){return lk(e)?d0(e):Bm(n,e)}/**
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
 */class fd{constructor(){this._=void 0}}function rx(n,e,t){return n instanceof Sa?(function(o,a){const u={fields:{[KI]:{stringValue:WI},[GI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Mm(a)&&(a=cd(a)),a&&(u.fields[HI]=a),{mapValue:u}})(t,e):n instanceof Aa?p0(n,e):n instanceof Ra?m0(n,e):(function(o,a){const u=f0(o,a),d=Hv(u)+Hv(o.Ee);return Wp(u)&&Wp(o.Ee)?d0(d):Bm(o.serializer,d)})(n,e)}function ix(n,e,t){return n instanceof Aa?p0(n,e):n instanceof Ra?m0(n,e):t}function f0(n,e){return n instanceof gu?(function(r){return Wp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Sa extends fd{}class Aa extends fd{constructor(e){super(),this.elements=e}}function p0(n,e){const t=g0(e);for(const r of n.elements)t.some((o=>Tr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Ra extends fd{constructor(e){super(),this.elements=e}}function m0(n,e){let t=g0(e);for(const r of n.elements)t=t.filter((o=>!Tr(o,r)));return{arrayValue:{values:t}}}class gu extends fd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Hv(n){return nt(n.integerValue||n.doubleValue)}function g0(n){return pu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class _0{constructor(e,t){this.field=e,this.transform=t}}function sx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Aa&&o instanceof Aa||r instanceof Ra&&o instanceof Ra?ma(r.elements,o.elements,Tr):r instanceof gu&&o instanceof gu?Tr(r.Ee,o.Ee):r instanceof Sa&&o instanceof Sa})(n.transform,e.transform)}class ox{constructor(e,t){this.version=e,this.transformResults=t}}class en{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pd{}function y0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new md(n.key,en.none()):new ba(n.key,n.data,en.none());{const t=n.data,r=Ht.empty();let o=new Ke(ot.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new ti(n.key,r,new dn(o.toArray()),en.none())}}function ax(n,e,t){n instanceof ba?(function(o,a,u){const d=o.value.clone(),f=Qv(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ti?(function(o,a,u){if(!Eh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Qv(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(v0(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Zl(n,e,t,r){return n instanceof ba?(function(a,u,d,f){if(!Eh(a.precondition,u))return d;const _=a.value.clone(),v=Xv(a.fieldTransforms,f,u);return _.setAll(v),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof ti?(function(a,u,d,f){if(!Eh(a.precondition,u))return d;const _=Xv(a.fieldTransforms,f,u),v=u.data;return v.setAll(v0(a)),v.setAll(_),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Eh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function lx(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=f0(r.transform,o||null);a!=null&&(t===null&&(t=Ht.empty()),t.set(r.field,a))}return t||null}function Gv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&ma(r,o,((a,u)=>sx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ba extends pd{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ti extends pd{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function v0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Qv(n,e,t){const r=new Map;ve(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,ix(u,d,t[o]))}return r}function Xv(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,rx(a,u,e))}return r}class md extends pd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E0 extends pd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zm{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&ax(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=h0();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=y0(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Ie.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&ma(this.mutations,e.mutations,((t,r)=>Gv(t,r)))&&ma(this.baseMutations,e.baseMutations,((t,r)=>Gv(t,r)))}}class $m{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){ve(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=(function(){return Jk})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new $m(e,t,r,o)}}/**
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
 */class qm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ux{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,Me;function cx(n){switch(n){case K.OK:return pe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe(15467,{code:n})}}function w0(n){if(n===void 0)return Zt("GRPC error has no .code"),K.UNKNOWN;switch(n){case pt.OK:return K.OK;case pt.CANCELLED:return K.CANCELLED;case pt.UNKNOWN:return K.UNKNOWN;case pt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case pt.INTERNAL:return K.INTERNAL;case pt.UNAVAILABLE:return K.UNAVAILABLE;case pt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case pt.NOT_FOUND:return K.NOT_FOUND;case pt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case pt.ABORTED:return K.ABORTED;case pt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case pt.DATA_LOSS:return K.DATA_LOSS;default:return pe(39323,{code:n})}}(Me=pt||(pt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hx=new ji([4294967295,4294967295],0);function Yv(n){const e=AI().encode(n),t=new _I;return t.update(e),new Uint8Array(t.digest())}function Jv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ji([t,r],0),new ji([o,a],0)]}class Wm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bl(`Invalid padding: ${t}`);if(r<0)throw new Bl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ji.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(ji.fromNumber(r)));return o.compare(hx)===1&&(o=new ji([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Yv(e),[r,o]=Jv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Wm(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=Yv(e),[r,o]=Jv(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new gd(Ie.min(),o,new rt(Re),In(),xe())}}class Nu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Nu(r,t,xe(),xe(),xe())}}/**
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
 */class wh{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class I0{constructor(e,t){this.targetId=e,this.De=t}}class T0{constructor(e,t,r=yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Zv{constructor(){this.ve=0,this.Ce=eE(),this.Fe=yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=xe(),t=xe(),r=xe();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:pe(38017,{changeType:a})}})),new Nu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=eE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dx{constructor(e){this.We=e,this.Ge=new Map,this.ze=In(),this.je=nh(),this.Je=nh(),this.He=new rt(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if(Fh(a))if(r===0){const u=new ae(a.path);this.Xe(t,u,lt.newNoDocument(u,Ie.min()))}else ve(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const _=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=Zr(r).toUint8Array()}catch(f){if(f instanceof qI)return Ir("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Wm(u,o,a)}catch(f){return Ir(f instanceof Bl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Fh(d.target)){const f=new ae(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,lt.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=xe();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const _=this.st(f);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const o=new gd(e,t,this.He,this.ze,r);return this.ze=In(),this.je=nh(),this.Je=nh(),this.He=new rt(Re),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Zv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ke(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ke(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ee("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Zv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function nh(){return new rt(ae.comparator)}function eE(){return new rt(ae.comparator)}const fx={asc:"ASCENDING",desc:"DESCENDING"},px={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mx={and:"AND",or:"OR"};class gx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yp(n,e){return n.useProto3Json||od(e)?e:{value:e}}function Pa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _x(n,e){return Pa(n,e.toTimestamp())}function tn(n){return ve(!!n,49232),Ie.fromTimestamp((function(t){const r=Jr(t);return new ze(r.seconds,r.nanos)})(n))}function Km(n,e){return Jp(n,e).canonicalString()}function Jp(n,e){const t=(function(o){return new Be(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function A0(n){const e=Be.fromString(n);return ve(V0(e),10190,{key:e.toString()}),e}function jh(n,e){return Km(n.databaseId,e.path)}function js(n,e){const t=A0(e);if(t.get(1)!==n.databaseId.projectId)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(C0(t))}function R0(n,e){return Km(n.databaseId,e)}function P0(n){const e=A0(n);return e.length===4?Be.emptyPath():C0(e)}function Zp(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function C0(n){return ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tE(n,e,t){return{name:jh(n,e),fields:t.value.mapValue.fields}}function yx(n,e,t){const r=js(n,e.name),o=tn(e.updateTime),a=e.createTime?tn(e.createTime):Ie.min(),u=new Ht({mapValue:{fields:e.fields}}),d=lt.newFoundDocument(r,o,a,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function vx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,v){return _.useProto3Json?(ve(v===void 0||typeof v=="string",58123),yt.fromBase64String(v||"")):(ve(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const v=_.code===void 0?K.UNKNOWN:w0(_.code);return new se(v,_.message||"")})(u);t=new T0(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=js(n,r.document.name),a=tn(r.document.updateTime),u=r.document.createTime?tn(r.document.createTime):Ie.min(),d=new Ht({mapValue:{fields:r.document.fields}}),f=lt.newFoundDocument(o,a,u,d),_=r.targetIds||[],v=r.removedTargetIds||[];t=new wh(_,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=js(n,r.document),a=r.readTime?tn(r.readTime):Ie.min(),u=lt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new wh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=js(n,r.document),a=r.removedTargetIds||[];t=new wh([],a,o,null)}else{if(!("filter"in e))return pe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new ux(o,a),d=r.targetId;t=new I0(d,u)}}return t}function Bh(n,e){let t;if(e instanceof ba)t={update:tE(n,e.key,e.value)};else if(e instanceof md)t={delete:jh(n,e.key)};else if(e instanceof ti)t={update:tE(n,e.key,e.data),updateMask:Ax(e.fieldMask)};else{if(!(e instanceof E0))return pe(16599,{Rt:e.type});t={verify:jh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Sa)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Aa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ra)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof gu)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw pe(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:_x(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:pe(27497)})(n,e.precondition)),t}function em(n,e){const t=e.currentDocument?(function(a){return a.updateTime!==void 0?en.updateTime(tn(a.updateTime)):a.exists!==void 0?en.exists(a.exists):en.none()})(e.currentDocument):en.none(),r=e.updateTransforms?e.updateTransforms.map((o=>(function(u,d){let f=null;if("setToServerValue"in d)ve(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),f=new Sa;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new Aa(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new Ra(v)}else"increment"in d?f=new gu(u,d.increment):pe(16584,{proto:d});const _=ot.fromServerFormat(d.fieldPath);return new _0(_,f)})(n,o))):[];if(e.update){e.update.name;const o=js(n,e.update.name),a=new Ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=(function(f){const _=f.fieldPaths||[];return new dn(_.map((v=>ot.fromServerFormat(v))))})(e.updateMask);return new ti(o,a,u,t,r)}return new ba(o,a,t,r)}if(e.delete){const o=js(n,e.delete);return new md(o,t)}if(e.verify){const o=js(n,e.verify);return new E0(o,t)}return pe(1463,{proto:e})}function Ex(n,e){return n&&n.length>0?(ve(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?tn(o.updateTime):tn(a);return u.isEqual(Ie.min())&&(u=tn(a)),new ox(u,o.transformResults||[])})(t,e)))):[]}function k0(n,e){return{documents:[R0(n,e.path)]}}function x0(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=R0(n,o);const a=(function(_){if(_.length!==0)return b0(We.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((v=>(function(T){return{field:oa(T.field),direction:Ix(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Yp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function N0(n){let e=P0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ve(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=D0(w);return T instanceof We&&jm(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(j){return new mu(aa(j.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,od(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,D=w.values||[];return new Ia(D,T)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const T=!w.before,D=w.values||[];return new Ia(D,T)})(t.endAt)),Hk(e,o,u,a,d,"F",f,_)}function wx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function D0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=aa(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=aa(t.unaryFilter.field);return Ve.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=aa(t.unaryFilter.field);return Ve.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=aa(t.unaryFilter.field);return Ve.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ve.create(aa(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((r=>D0(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(n):pe(30097,{filter:n})}function Ix(n){return fx[n]}function Tx(n){return px[n]}function Sx(n){return mx[n]}function oa(n){return{fieldPath:n.canonicalString()}}function aa(n){return ot.fromServerFormat(n.fieldPath)}function b0(n){return n instanceof Ve?(function(t){if(t.op==="=="){if(Uv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NAN"}};if(Fv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NOT_NAN"}};if(Fv(t.value))return{unaryFilter:{field:oa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oa(t.field),op:Tx(t.op),value:t.value}}})(n):n instanceof We?(function(t){const r=t.getFilters().map((o=>b0(o)));return r.length===1?r[0]:{compositeFilter:{op:Sx(t.op),filters:r}}})(n):pe(54877,{filter:n})}function Ax(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function V0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Hr{constructor(e,t,r,o,a=Ie.min(),u=Ie.min(),d=yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class O0{constructor(e){this.gt=e}}function Rx(n,e){let t;if(e.document)t=yx(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ae.fromSegments(e.noDocument.path),o=Xs(e.noDocument.readTime);t=lt.newNoDocument(r,o),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return pe(56709);{const r=ae.fromSegments(e.unknownDocument.path),o=Xs(e.unknownDocument.version);t=lt.newUnknownDocument(r,o)}}return e.readTime&&t.setReadTime((function(o){const a=new ze(o[0],o[1]);return Ie.fromTimestamp(a)})(e.readTime)),t}function nE(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(a,u){return{name:jh(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Pa(a,u.version.toTimestamp()),createTime:Pa(a,u.createTime.toTimestamp())}})(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Qs(e.version)};else{if(!e.isUnknownDocument())return pe(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Qs(e.version)}}return r}function zh(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Qs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xs(n){const e=new ze(n.seconds,n.nanoseconds);return Ie.fromTimestamp(e)}function bs(n,e){const t=(e.baseMutations||[]).map((a=>em(n.gt,a)));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map((a=>em(n.gt,a))),o=ze.fromMillis(e.localWriteTimeMs);return new zm(e.batchId,o,t,r)}function zl(n){const e=Xs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Xs(n.lastLimboFreeSnapshotVersion):Ie.min();let r;return r=(function(a){return a.documents!==void 0})(n.query)?(function(a){const u=a.documents.length;return ve(u===1,1966,{count:u}),Ln(ku(P0(a.documents[0])))})(n.query):(function(a){return Ln(N0(a))})(n.query),new Hr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,yt.fromBase64String(n.resumeToken))}function L0(n,e){const t=Qs(e.snapshotVersion),r=Qs(e.lastLimboFreeSnapshotVersion);let o;o=Fh(e.target)?k0(n.gt,e.target):x0(n.gt,e.target).Vt;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Gs(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:o}}function M0(n){const e=N0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xp(e,e.limit,"L"):e}function gp(n,e){return new qm(e.largestBatchId,em(n.gt,e.overlayMutation))}function rE(n,e){const t=e.path.lastSegment();return[n,Gt(e.path.popLast()),t]}function iE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Qs(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{getBundleMetadata(e,t){return sE(e).get(t).next((r=>{if(r)return(function(a){return{id:a.bundleId,createTime:Xs(a.createTime),version:a.version}})(r)}))}saveBundleMetadata(e,t){return sE(e).put((function(o){return{bundleId:o.id,createTime:Qs(tn(o.createTime)),version:o.version}})(t))}getNamedQuery(e,t){return oE(e).get(t).next((r=>{if(r)return(function(a){return{name:a.name,query:M0(a.bundledQuery),readTime:Xs(a.readTime)}})(r)}))}saveNamedQuery(e,t){return oE(e).put((function(o){return{name:o.name,readTime:Qs(tn(o.readTime)),bundledQuery:o.bundledQuery}})(t))}}function sE(n){return At(n,ad)}function oE(n){return At(n,ld)}/**
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
 */class _d{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new _d(e,r)}getOverlay(e,t){return Nl(e).get(rE(this.userId,t)).next((r=>r?gp(this.serializer,r):null))}getOverlays(e,t){const r=gr();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){const o=[];return r.forEach(((a,u)=>{const d=new qm(t,u);o.push(this.wt(e,d))})),F.waitFor(o)}removeOverlaysForBatchId(e,t,r){const o=new Set;t.forEach((u=>o.add(Gt(u.getCollectionPath()))));const a=[];return o.forEach((u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(Nl(e).Y(zp,d))})),F.waitFor(a)}getOverlaysForCollection(e,t,r){const o=gr(),a=Gt(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return Nl(e).j(zp,u).next((d=>{for(const f of d){const _=gp(this.serializer,f);o.set(_.getKey(),_)}return o}))}getOverlaysForCollectionGroup(e,t,r,o){const a=gr();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nl(e).X({index:FI,range:d},((f,_,v)=>{const w=gp(this.serializer,_);a.size()<o||w.largestBatchId===u?(a.set(w.getKey(),w),u=w.largestBatchId):v.done()})).next((()=>a))}wt(e,t){return Nl(e).put((function(o,a,u){const[d,f,_]=rE(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:_,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Bh(o.gt,u.mutation)}})(this.serializer,this.userId,t))}}function Nl(n){return At(n,ud)}/**
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
 */class Cx{St(e){return At(e,Om)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?yt.fromUint8Array(r):yt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Vs{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(nt(e.integerValue));else if("doubleValue"in e){const r=nt(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),au(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Jr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Zr(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?XI(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):hd(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):pe(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const o of Object.keys(r))this.xt(o,t),this.Dt(r[o],t)}Lt(e,t){var r,o;const a=e.fields||{};this.Ct(t,53);const u=Ea,d=((o=(r=a[u].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.length)||0;this.Ct(t,15),t.Ft(nt(d)),this.xt(u,t),this.Dt(a[u],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const o of r)this.Dt(o,t)}Bt(e,t){this.Ct(t,37),ae.fromName(e).path.forEach((r=>{this.Ct(t,60),this.$t(r,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Vs.Ut=new Vs;/**
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
 */const ea=255;function kx(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function aE(n){const e=64-(function(r){let o=0;for(let a=0;a<8;++a){const u=kx(255&r[a]);if(o+=u,u!==8)break}return o})(n);return Math.ceil(e/8)}class xx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const o=t.codePointAt(0);this.Wt(240|o>>>18),this.Wt(128|63&o>>>12),this.Wt(128|63&o>>>6),this.Wt(128|63&o)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const o=t.codePointAt(0);this.jt(240|o>>>18),this.jt(128|63&o>>>12),this.jt(128|63&o>>>6),this.jt(128|63&o)}}this.Jt()}Zt(e){const t=this.Xt(e),r=aE(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=255&t[o]}tn(e){const t=this.Xt(e),r=aE(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=~(255&t[o])}nn(){this.rn(ea),this.rn(255)}sn(){this._n(ea),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let o=1;o<t.length;++o)t[o]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===ea?(this.rn(ea),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===ea?(this._n(ea),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}class Nx{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Dx{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Dl{constructor(){this.un=new xx,this.cn=new Nx(this.un),this.ln=new Dx(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Os{constructor(e,t,r,o){this.Pn=e,this.Tn=t,this.In=r,this.dn=o}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Os(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Ih(this.In),directionalValue:Ih(this.dn),orderedDocumentKey:Ih(t),documentKey:r.path.toArray()}}Rn(e,t,r){const o=this.An(e,t,r);return[o.indexId,o.uid,o.arrayValue,o.directionalValue,o.orderedDocumentKey,o.documentKey]}}function Ci(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=lE(n.In,e.In),t!==0?t:(t=lE(n.dn,e.dn),t!==0?t:ae.comparator(n.Tn,e.Tn)))}function lE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ih(n){return xw()?(function(t){let r="";for(let o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r})(n):n}function uE(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(n)}class cE{constructor(e){this.Vn=new Ke(((t,r)=>ot.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(ve(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Up(e);if(t!==void 0&&!this.yn(t))return!1;const r=xs(e);let o=new Set,a=0,u=0;for(;a<r.length&&this.yn(r[a]);++a)o=o.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.Vn.size>0){const d=this.Vn.getIterator().getNext();if(!o.has(d.field.canonicalString())){const f=r[a];if(!this.wn(d,f)||!this.Sn(this.mn[u++],f))return!1}++a}for(;a<r.length;++a){const d=r[a];if(u>=this.mn.length||!this.Sn(this.mn[u++],d))return!1}return!0}bn(){if(this.gn)return null;let e=new Ke(ot.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ph(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ph(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ph(r.field,r.dir==="asc"?0:1)));return new bh(bh.UNKNOWN_ID,this.collectionId,t,ou.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function F0(n){var e,t;if(ve(n instanceof Ve||n instanceof We,20012),n instanceof Ve){if(n instanceof s0){const o=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((a=>Ve.create(n.field,"==",a))))||[];return We.create(o,"or")}return n}const r=n.filters.map((o=>F0(o)));return We.create(r,n.op)}function bx(n){if(n.getFilters().length===0)return[];const e=rm(F0(n));return ve(U0(e),7391),tm(e)||nm(e)?[e]:e.getFilters()}function tm(n){return n instanceof Ve}function nm(n){return n instanceof We&&jm(n)}function U0(n){return tm(n)||nm(n)||(function(t){if(t instanceof We&&Kp(t)){for(const r of t.getFilters())if(!tm(r)&&!nm(r))return!1;return!0}return!1})(n)}function rm(n){if(ve(n instanceof Ve||n instanceof We,34018),n instanceof Ve)return n;if(n.filters.length===1)return rm(n.filters[0]);const e=n.filters.map((r=>rm(r)));let t=We.create(e,n.op);return t=$h(t),U0(t)?t:(ve(t instanceof We,64498),ve(Ta(t),40251),ve(t.filters.length>1,57927),t.filters.reduce(((r,o)=>Hm(r,o))))}function Hm(n,e){let t;return ve(n instanceof Ve||n instanceof We,38388),ve(e instanceof Ve||e instanceof We,25473),t=n instanceof Ve?e instanceof Ve?(function(o,a){return We.create([o,a],"and")})(n,e):hE(n,e):e instanceof Ve?hE(e,n):(function(o,a){if(ve(o.filters.length>0&&a.filters.length>0,48005),Ta(o)&&Ta(a))return n0(o,a.getFilters());const u=Kp(o)?o:a,d=Kp(o)?a:o,f=u.filters.map((_=>Hm(_,d)));return We.create(f,"or")})(n,e),$h(t)}function hE(n,e){if(Ta(e))return n0(e,n.getFilters());{const t=e.filters.map((r=>Hm(n,r)));return We.create(t,"or")}}function $h(n){if(ve(n instanceof Ve||n instanceof We,11850),n instanceof Ve)return n;const e=n.getFilters();if(e.length===1)return $h(e[0]);if(e0(n))return n;const t=e.map((o=>$h(o))),r=[];return t.forEach((o=>{o instanceof Ve?r.push(o):o instanceof We&&(o.op===n.op?r.push(...o.filters):r.push(o))})),r.length===1?r[0]:We.create(r,n.op)}/**
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
 */class Vx{constructor(){this.Dn=new Gm}addToCollectionParentIndex(e,t){return this.Dn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Tn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class Gm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Ke(Be.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Ke(Be.comparator)).toArray()}}/**
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
 */const dE="IndexedDbIndexManager",rh=new Uint8Array(0);class Ox{constructor(e,t){this.databaseId=t,this.vn=new Gm,this.Cn=new ei((r=>Gs(r)),((r,o)=>Cu(r,o))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const a={collectionId:r,parent:Gt(o)};return fE(e).put(a)}return F.resolve()}getCollectionParents(e,t){const r=[],o=IDBKeyRange.bound([t,""],[RI(t),""],!1,!0);return fE(e).j(o).next((a=>{for(const u of a){if(u.collectionId!==t)break;r.push(mr(u.parent))}return r}))}addFieldIndex(e,t){const r=bl(e),o=(function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map((f=>[f.fieldPath.canonicalString(),f.kind]))}})(t);delete o.indexId;const a=r.add(o);if(t.indexState){const u=na(e);return a.next((d=>{u.put(iE(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return a.next()}deleteFieldIndex(e,t){const r=bl(e),o=na(e),a=ta(e);return r.delete(t.indexId).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=bl(e),r=ta(e),o=na(e);return t.Y().next((()=>r.Y())).next((()=>o.Y()))}createTargetIndexes(e,t){return F.forEach(this.Fn(t),(r=>this.getIndexType(e,r).next((o=>{if(o===0||o===1){const a=new cE(r).bn();if(a!=null)return this.addFieldIndex(e,a)}}))))}getDocumentsMatchingTarget(e,t){const r=ta(e);let o=!0;const a=new Map;return F.forEach(this.Fn(t),(u=>this.Mn(e,u).next((d=>{o&&(o=!!d),a.set(u,d)})))).next((()=>{if(o){let u=xe();const d=[];return F.forEach(a,((f,_)=>{ee(dE,`Using index ${(function(J){return`id=${J.indexId}|cg=${J.collectionGroup}|f=${J.fields.map((le=>`${le.fieldPath}:${le.kind}`)).join(",")}`})(f)} to execute ${Gs(t)}`);const v=(function(J,le){const we=Up(le);if(we===void 0)return null;for(const me of Uh(J,we.fieldPath))switch(me.op){case"array-contains-any":return me.value.arrayValue.values||[];case"array-contains":return[me.value]}return null})(_,f),w=(function(J,le){const we=new Map;for(const me of xs(le))for(const x of Uh(J,me.fieldPath))switch(x.op){case"==":case"in":we.set(me.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return we.set(me.fieldPath.canonicalString(),x.value),Array.from(we.values())}return null})(_,f),T=(function(J,le){const we=[];let me=!0;for(const x of xs(le)){const S=x.kind===0?qv(J,x.fieldPath,J.startAt):Wv(J,x.fieldPath,J.startAt);we.push(S.value),me&&(me=S.inclusive)}return new Ia(we,me)})(_,f),D=(function(J,le){const we=[];let me=!0;for(const x of xs(le)){const S=x.kind===0?Wv(J,x.fieldPath,J.endAt):qv(J,x.fieldPath,J.endAt);we.push(S.value),me&&(me=S.inclusive)}return new Ia(we,me)})(_,f),j=this.xn(f,_,T),z=this.xn(f,_,D),V=this.On(f,_,w),re=this.Nn(f.indexId,v,j,T.inclusive,z,D.inclusive,V);return F.forEach(re,(te=>r.H(te,t.limit).next((J=>{J.forEach((le=>{const we=ae.fromSegments(le.documentKey);u.has(we)||(u=u.add(we),d.push(we))}))}))))})).next((()=>d))}return F.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=bx(We.create(e.filters,"and")).map((r=>Gp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,r,o,a,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),_=f/(t!=null?t.length:1),v=[];for(let w=0;w<f;++w){const T=t?this.Bn(t[w/_]):rh,D=this.Ln(e,T,r[w%_],o),j=this.kn(e,T,a[w%_],u),z=d.map((V=>this.Ln(e,T,V,!0)));v.push(...this.createRange(D,j,z))}return v}Ln(e,t,r,o){const a=new Os(e,ae.empty(),t,r);return o?a:a.En()}kn(e,t,r,o){const a=new Os(e,ae.empty(),t,r);return o?a.En():a}Mn(e,t){const r=new cE(t),o=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,o).next((a=>{let u=null;for(const d of a)r.pn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u}))}getIndexType(e,t){let r=2;const o=this.Fn(t);return F.forEach(o,(a=>this.Mn(e,a).next((u=>{u?r!==0&&u.fields.length<(function(f){let _=new Ke(ot.comparator),v=!1;for(const w of f.filters)for(const T of w.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?v=!0:_=_.add(T.field));for(const w of f.orderBy)w.field.isKeyField()||(_=_.add(w.field));return _.size+(v?1:0)})(a)&&(r=1):r=0})))).next((()=>(function(u){return u.limit!==null})(t)&&o.length>1&&r===2?1:r))}qn(e,t){const r=new Dl;for(const o of xs(e)){const a=t.data.field(o.fieldPath);if(a==null)return null;const u=r.hn(o.kind);Vs.Ut.bt(a,u)}return r.an()}Bn(e){const t=new Dl;return Vs.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new Dl;return Vs.Ut.bt(fu(this.databaseId,t),r.hn((function(a){const u=xs(a);return u.length===0?0:u[u.length-1].kind})(e))),r.an()}On(e,t,r){if(r===null)return[];let o=[];o.push(new Dl);let a=0;for(const u of xs(e)){const d=r[a++];for(const f of o)if(this.$n(t,u.fieldPath)&&pu(d))o=this.Un(o,u,d);else{const _=f.hn(u.kind);Vs.Ut.bt(d,_)}}return this.Kn(o)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const o=[...e],a=[];for(const u of r.arrayValue.values||[])for(const d of o){const f=new Dl;f.seed(d.an()),Vs.Ut.bt(u,f.hn(t.kind)),a.push(f)}return a}$n(e,t){return!!e.filters.find((r=>r instanceof Ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=bl(e),o=na(e);return(t?r.j(Bp,IDBKeyRange.bound(t,t)):r.j()).next((a=>{const u=[];return F.forEach(a,(d=>o.get([d.indexId,this.uid]).next((f=>{u.push((function(v,w){const T=w?new ou(w.sequenceNumber,new Tn(Xs(w.readTime),new ae(mr(w.documentKey)),w.largestBatchId)):ou.empty(),D=v.fields.map((([j,z])=>new ph(ot.fromServerFormat(j),z)));return new bh(v.indexId,v.collectionGroup,D,T)})(d,f))})))).next((()=>u))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,o)=>{const a=r.indexState.sequenceNumber-o.indexState.sequenceNumber;return a!==0?a:Re(r.collectionGroup,o.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const o=bl(e),a=na(e);return this.Wn(e).next((u=>o.j(Bp,IDBKeyRange.bound(t,t)).next((d=>F.forEach(d,(f=>a.put(iE(f.indexId,this.uid,u,r))))))))}updateIndexEntries(e,t){const r=new Map;return F.forEach(t,((o,a)=>{const u=r.get(o.collectionGroup);return(u?F.resolve(u):this.getFieldIndexes(e,o.collectionGroup)).next((d=>(r.set(o.collectionGroup,d),F.forEach(d,(f=>this.Gn(e,o,f).next((_=>{const v=this.zn(a,f);return _.isEqual(v)?F.resolve():this.jn(e,a,f,_,v)})))))))}))}Jn(e,t,r,o){return ta(e).put(o.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,o){return ta(e).delete(o.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const o=ta(e);let a=new Ke(Ci);return o.X({index:MI,range:IDBKeyRange.only([r.indexId,this.uid,Ih(this.Qn(r,t))])},((u,d)=>{a=a.add(new Os(r.indexId,t,uE(d.arrayValue),uE(d.directionalValue)))})).next((()=>a))}zn(e,t){let r=new Ke(Ci);const o=this.qn(t,e);if(o==null)return r;const a=Up(t);if(a!=null){const u=e.data.field(a.fieldPath);if(pu(u))for(const d of u.arrayValue.values||[])r=r.add(new Os(t.indexId,e.key,this.Bn(d),o))}else r=r.add(new Os(t.indexId,e.key,rh,o));return r}jn(e,t,r,o,a){ee(dE,"Updating index entries for document '%s'",t.key);const u=[];return(function(f,_,v,w,T){const D=f.getIterator(),j=_.getIterator();let z=Zo(D),V=Zo(j);for(;z||V;){let re=!1,te=!1;if(z&&V){const J=v(z,V);J<0?te=!0:J>0&&(re=!0)}else z!=null?te=!0:re=!0;re?(w(V),V=Zo(j)):te?(T(z),z=Zo(D)):(z=Zo(D),V=Zo(j))}})(o,a,Ci,(d=>{u.push(this.Jn(e,t,r,d))}),(d=>{u.push(this.Hn(e,t,r,d))})),F.waitFor(u)}Wn(e){let t=1;return na(e).X({index:LI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,o,a)=>{a.done(),t=o.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((u,d)=>Ci(u,d))).filter(((u,d,f)=>!d||Ci(u,f[d-1])!==0));const o=[];o.push(e);for(const u of r){const d=Ci(u,e),f=Ci(u,t);if(d===0)o[0]=e.En();else if(d>0&&f<0)o.push(u),o.push(u.En());else if(f>0)break}o.push(t);const a=[];for(let u=0;u<o.length;u+=2){if(this.Yn(o[u],o[u+1]))return[];const d=o[u].Rn(this.uid,rh,ae.empty()),f=o[u+1].Rn(this.uid,rh,ae.empty());a.push(IDBKeyRange.bound(d,f))}return a}Yn(e,t){return Ci(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pE)}getMinOffset(e,t){return F.mapArray(this.Fn(t),(r=>this.Mn(e,r).next((o=>o||pe(44426))))).next(pE)}}function fE(n){return At(n,cu)}function ta(n){return At(n,Ql)}function bl(n){return At(n,Vm)}function na(n){return At(n,Gl)}function pE(n){ve(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const o=n[r].indexState.offset;Nm(o,e)<0&&(e=o),t<o.largestBatchId&&(t=o.largestBatchId)}return new Tn(e.readTime,e.documentKey,t)}/**
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
 */const mE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},j0=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n,e,t){const r=n.store(Jn),o=n.store(ga),a=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.X({range:u},((v,w,T)=>(d++,T.delete())));a.push(f.next((()=>{ve(d===1,47070,{batchId:t.batchId})})));const _=[];for(const v of t.mutations){const w=bI(e,v.key.path,t.batchId);a.push(o.delete(w)),_.push(v.key)}return F.waitFor(a).next((()=>_))}function qh(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw pe(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(j0,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class yd{constructor(e,t,r,o){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=o,this.Zn={}}static yt(e,t,r,o){ve(e.uid!=="",64387);const a=e.isAuthenticated()?e.uid:"";return new yd(a,t,r,o)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ki(e).X({index:Ls,range:r},((o,a,u)=>{t=!1,u.done()})).next((()=>t))}addMutationBatch(e,t,r,o){const a=la(e),u=ki(e);return u.add({}).next((d=>{ve(typeof d=="number",49019);const f=new zm(d,t,r,o),_=(function(D,j,z){const V=z.baseMutations.map((te=>Bh(D.gt,te))),re=z.mutations.map((te=>Bh(D.gt,te)));return{userId:j,batchId:z.batchId,localWriteTimeMs:z.localWriteTime.toMillis(),baseMutations:V,mutations:re}})(this.serializer,this.userId,f),v=[];let w=new Ke(((T,D)=>Re(T.canonicalString(),D.canonicalString())));for(const T of o){const D=bI(this.userId,T.key.path,d);w=w.add(T.key.path.popLast()),v.push(u.put(_)),v.push(a.put(D,hk))}return w.forEach((T=>{v.push(this.indexManager.addToCollectionParentIndex(e,T))})),e.addOnCommittedListener((()=>{this.Zn[d]=f.keys()})),F.waitFor(v).next((()=>f))}))}lookupMutationBatch(e,t){return ki(e).get(t).next((r=>r?(ve(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),bs(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?F.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const o=r.keys();return this.Zn[t]=o,o}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return ki(e).X({index:Ls,range:o},((u,d,f)=>{d.userId===this.userId&&(ve(d.batchId>=r,47524,{er:r}),a=bs(this.serializer,d)),f.done()})).next((()=>a))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Fs;return ki(e).X({index:Ls,range:t,reverse:!0},((o,a,u)=>{r=a.batchId,u.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fs],[this.userId,Number.POSITIVE_INFINITY]);return ki(e).j(Ls,t).next((r=>r.map((o=>bs(this.serializer,o)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=mh(this.userId,t.path),o=IDBKeyRange.lowerBound(r),a=[];return la(e).X({range:o},((u,d,f)=>{const[_,v,w]=u,T=mr(v);if(_===this.userId&&t.path.isEqual(T))return ki(e).get(w).next((D=>{if(!D)throw pe(61480,{tr:u,batchId:w});ve(D.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:D.userId,batchId:w}),a.push(bs(this.serializer,D))}));f.done()})).next((()=>a))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(Re);const o=[];return t.forEach((a=>{const u=mh(this.userId,a.path),d=IDBKeyRange.lowerBound(u),f=la(e).X({range:d},((_,v,w)=>{const[T,D,j]=_,z=mr(D);T===this.userId&&a.path.isEqual(z)?r=r.add(j):w.done()}));o.push(f)})),F.waitFor(o).next((()=>this.nr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1,a=mh(this.userId,r),u=IDBKeyRange.lowerBound(a);let d=new Ke(Re);return la(e).X({range:u},((f,_,v)=>{const[w,T,D]=f,j=mr(T);w===this.userId&&r.isPrefixOf(j)?j.length===o&&(d=d.add(D)):v.done()})).next((()=>this.nr(e,d)))}nr(e,t){const r=[],o=[];return t.forEach((a=>{o.push(ki(e).get(a).next((u=>{if(u===null)throw pe(35274,{batchId:a});ve(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:a}),r.push(bs(this.serializer,u))})))})),F.waitFor(o).next((()=>r))}removeMutationBatch(e,t){return B0(e.ce,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),F.forEach(r,(o=>this.referenceDelegate.markPotentiallyOrphaned(e,o))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return F.resolve();const r=IDBKeyRange.lowerBound((function(u){return[u]})(this.userId)),o=[];return la(e).X({range:r},((a,u,d)=>{if(a[0]===this.userId){const f=mr(a[1]);o.push(f)}else d.done()})).next((()=>{ve(o.length===0,56720,{ir:o.map((a=>a.canonicalString()))})}))}))}containsKey(e,t){return z0(e,this.userId,t)}sr(e){return $0(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fs,lastStreamToken:""}))}}function z0(n,e,t){const r=mh(e,t.path),o=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return la(n).X({range:a,Z:!0},((d,f,_)=>{const[v,w,T]=d;v===e&&w===o&&(u=!0),_.done()})).next((()=>u))}function ki(n){return At(n,Jn)}function la(n){return At(n,ga)}function $0(n){return At(n,lu)}/**
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
 */class Lx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const r=new Ys(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>Ie.fromTimestamp(new ze(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.cr(e).next((o=>(o.highestListenSequenceNumber=t,r&&(o.lastRemoteSnapshotVersion=r.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),this.lr(e,o))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>ra(e).delete(t.targetId))).next((()=>this.cr(e))).next((r=>(ve(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r))))}removeTargets(e,t,r){let o=0;const a=[];return ra(e).X(((u,d)=>{const f=zl(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(o++,a.push(this.removeTargetData(e,f)))})).next((()=>F.waitFor(a))).next((()=>o))}forEachTarget(e,t){return ra(e).X(((r,o)=>{const a=zl(o);t(a)}))}cr(e){return gE(e).get(Lh).next((t=>(ve(t!==null,2888),t)))}lr(e,t){return gE(e).put(Lh,t)}hr(e,t){return ra(e).put(L0(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Gs(t),o=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return ra(e).X({range:o,index:OI},((u,d,f)=>{const _=zl(d);Cu(t,_.target)&&(a=_,f.done())})).next((()=>a))}addMatchingKeys(e,t,r){const o=[],a=Oi(e);return t.forEach((u=>{const d=Gt(u.path);o.push(a.put({targetId:r,path:d})),o.push(this.referenceDelegate.addReference(e,r,u))})),F.waitFor(o)}removeMatchingKeys(e,t,r){const o=Oi(e);return F.forEach(t,(a=>{const u=Gt(a.path);return F.waitFor([o.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])}))}removeMatchingKeysForTargetId(e,t){const r=Oi(e),o=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(o)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),o=Oi(e);let a=xe();return o.X({range:r,Z:!0},((u,d,f)=>{const _=mr(u[1]),v=new ae(_);a=a.add(v)})).next((()=>a))}containsKey(e,t){const r=Gt(t.path),o=IDBKeyRange.bound([r],[RI(r)],!1,!0);let a=0;return Oi(e).X({index:bm,Z:!0,range:o},(([u,d],f,_)=>{u!==0&&(a++,_.done())})).next((()=>a>0))}Et(e,t){return ra(e).get(t).next((r=>r?zl(r):null))}}function ra(n){return At(n,_a)}function gE(n){return At(n,Us)}function Oi(n){return At(n,ya)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="LruGarbageCollector",Mx=1048576;function yE([n,e],[t,r]){const o=Re(n,t);return o===0?Re(e,r):o}class Fx{constructor(e){this.Tr=e,this.buffer=new Ke(yE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class q0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ee(_E,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ji(t)?ee(_E,"Ignoring IndexedDB error during garbage collection: ",t):await no(t)}await this.Rr(3e5)}))}}class Ux{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(On.ue);const r=new Fx(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(mE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mE):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,f,_;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),ia()<=be.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(_-f)+`ms
Total Duration: ${_-v}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function W0(n,e){return new Ux(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t){this.db=e,this.garbageCollector=W0(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((r,o)=>t(o)))}addReference(e,t,r){return ih(e,r)}removeReference(e,t,r){return ih(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ih(e,t)}Sr(e,t){return(function(o,a){let u=!1;return $0(o).ee((d=>z0(o,d,a).next((f=>(f&&(u=!0),F.resolve(!f)))))).next((()=>u))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[];let a=0;return this.wr(e,((u,d)=>{if(d<=t){const f=this.Sr(e,u).next((_=>{if(!_)return a++,r.getEntry(e,u).next((()=>(r.removeEntry(u,Ie.min()),Oi(e).delete((function(w){return[0,Gt(w.path)]})(u)))))}));o.push(f)}})).next((()=>F.waitFor(o))).next((()=>r.apply(e))).next((()=>a))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ih(e,t)}wr(e,t){const r=Oi(e);let o,a=On.ue;return r.X({index:bm},(([u,d],{path:f,sequenceNumber:_})=>{u===0?(a!==On.ue&&t(new ae(mr(o)),a),a=_,o=f):a=On.ue})).next((()=>{a!==On.ue&&t(new ae(mr(o)),a)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ih(n,e){return Oi(n).put((function(r,o){return{targetId:0,path:Gt(r.path),sequenceNumber:o}})(e,n.currentSequenceNumber))}/**
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
 */class K0{constructor(){this.changes=new ei((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Cs(e).put(r)}removeEntry(e,t,r){return Cs(e).delete((function(a,u){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],zh(u),d[d.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=lt.newInvalidDocument(t);return Cs(e).X({index:gh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r=this.Dr(t,a)})).next((()=>r))}vr(e,t){let r={size:0,document:lt.newInvalidDocument(t)};return Cs(e).X({index:gh,range:IDBKeyRange.only(Vl(t))},((o,a)=>{r={document:this.Dr(t,a),size:qh(a)}})).next((()=>r))}getEntries(e,t){let r=In();return this.Cr(e,t,((o,a)=>{const u=this.Dr(o,a);r=r.insert(o,u)})).next((()=>r))}Fr(e,t){let r=In(),o=new rt(ae.comparator);return this.Cr(e,t,((a,u)=>{const d=this.Dr(a,u);r=r.insert(a,d),o=o.insert(a,qh(u))})).next((()=>({documents:r,Mr:o})))}Cr(e,t,r){if(t.isEmpty())return F.resolve();let o=new Ke(wE);t.forEach((f=>o=o.add(f)));const a=IDBKeyRange.bound(Vl(o.first()),Vl(o.last())),u=o.getIterator();let d=u.getNext();return Cs(e).X({index:gh,range:a},((f,_,v)=>{const w=ae.fromSegments([..._.prefixPath,_.collectionGroup,_.documentId]);for(;d&&wE(d,w)<0;)r(d,null),d=u.getNext();d&&d.isEqual(w)&&(r(d,_),d=u.hasNext()?u.getNext():null),d?v.G(Vl(d)):v.done()})).next((()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null}))}getDocumentsMatchingQuery(e,t,r,o,a){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),zh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Cs(e).j(IDBKeyRange.bound(d,f,!0)).next((_=>{a==null||a.incrementDocumentReadCount(_.length);let v=In();for(const w of _){const T=this.Dr(ae.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);T.isFoundDocument()&&(xu(t,T)||o.has(T.key))&&(v=v.insert(T.key,T))}return v}))}getAllFromCollectionGroup(e,t,r,o){let a=In();const u=EE(t,r),d=EE(t,Tn.max());return Cs(e).X({index:VI,range:IDBKeyRange.bound(u,d,!0)},((f,_,v)=>{const w=this.Dr(ae.fromSegments(_.prefixPath.concat(_.collectionGroup,_.documentId)),_);a=a.insert(w.key,w),a.size===o&&v.done()})).next((()=>a))}newChangeBuffer(e){return new zx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return vE(e).get(jp).next((t=>(ve(!!t,20021),t)))}br(e,t){return vE(e).put(jp,t)}Dr(e,t){if(t){const r=Rx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ie.min())))return r}return lt.newInvalidDocument(e)}}function H0(n){return new Bx(n)}class zx extends K0{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new ei((r=>r.toString()),((r,o)=>r.isEqual(o)))}applyChanges(e){const t=[];let r=0,o=new Ke(((a,u)=>Re(a.canonicalString(),u.canonicalString())));return this.changes.forEach(((a,u)=>{const d=this.Nr.get(a);if(t.push(this.Or.removeEntry(e,a,d.readTime)),u.isValidDocument()){const f=nE(this.Or.serializer,u);o=o.add(a.path.popLast());const _=qh(f);r+=_-d.size,t.push(this.Or.addEntry(e,a,f))}else if(r-=d.size,this.trackRemovals){const f=nE(this.Or.serializer,u.convertToNoDocument(Ie.min()));t.push(this.Or.addEntry(e,a,f))}})),o.forEach((a=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,a))})),t.push(this.Or.updateMetadata(e,r)),F.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:r,Mr:o})=>(o.forEach(((a,u)=>{this.Nr.set(a,{size:u,readTime:r.get(a).readTime})})),r)))}}function vE(n){return At(n,uu)}function Cs(n){return At(n,Oh)}function Vl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function EE(n,e){const t=e.documentKey.path.toArray();return[n,zh(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function wE(n,e){const t=n.path.toArray(),r=e.path.toArray();let o=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(o=Re(t[a],r[a]),o)return o;return o=Re(t.length,r.length),o||(o=Re(t[t.length-2],r[r.length-2]),o||Re(t[t.length-1],r[r.length-1]))}/**
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
 */class $x{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class G0{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Zl(r.mutation,o,dn.empty(),ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,xe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=xe()){const o=gr();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=jl();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=gr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,xe())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=In();const u=Jl(),d=(function(){return Jl()})();return t.forEach(((f,_)=>{const v=r.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof ti)?a=a.insert(_.key,_):v!==void 0?(u.set(_.key,v.mutation.getFieldMask()),Zl(v.mutation,_,v.mutation.getFieldMask(),ze.now())):u.set(_.key,dn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((_,v)=>u.set(_,v))),t.forEach(((_,v)=>{var w;return d.set(_,new $x(v,(w=u.get(_))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Jl();let o=new rt(((u,d)=>u-d)),a=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const _=t.get(f);if(_===null)return;let v=r.get(f)||dn.empty();v=d.applyToLocalView(_,v),r.set(f,v);const w=(o.get(d.batchId)||xe()).add(f);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),_=f.key,v=f.value,w=h0();v.forEach((T=>{if(!a.has(T)){const D=y0(t.get(T),r.get(T));D!==null&&w.set(T,D),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return F.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return ae.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):o0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):F.resolve(gr());let d=su,f=a;return u.next((_=>F.forEach(_,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?F.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,f,_,xe()))).next((v=>({batchId:d,changes:c0(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let o=jl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=jl();return this.indexManager.getCollectionParents(e,a).next((d=>F.forEach(d,(f=>{const _=(function(w,T){return new Da(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((f,_)=>{const v=_.getKey();u.get(v)===null&&(u=u.insert(v,lt.newInvalidDocument(v)))}));let d=jl();return u.forEach(((f,_)=>{const v=a.get(f);v!==void 0&&Zl(v.mutation,_,dn.empty(),ze.now()),xu(t,_)&&(d=d.insert(f,_))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return F.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tn(o.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:M0(o.bundledQuery),readTime:tn(o.readTime)}})(t)),F.resolve()}}/**
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
 */class Wx{constructor(){this.overlays=new rt(ae.comparator),this.kr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gr();return F.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.wt(e,t,a)})),F.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const o=gr(),a=t.length+1,u=new ae(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,_=f.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return F.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new rt(((_,v)=>_-v));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let v=a.get(_.largestBatchId);v===null&&(v=gr(),a=a.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const d=gr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((_,v)=>d.set(_,v))),!(d.size()>=o)););return F.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new qm(t,r));let a=this.kr.get(t);a===void 0&&(a=xe(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class Kx{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class Qm{constructor(){this.qr=new Ke(bt.Qr),this.$r=new Ke(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new bt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new bt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ae(new Be([])),r=new bt(t,e),o=new bt(t,e+1),a=[];return this.$r.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ae(new Be([])),r=new bt(t,e),o=new bt(t,e+1);let a=xe();return this.$r.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new bt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ae.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||ae.comparator(e.key,t.key)}}/**
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
 */class Hx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ke(bt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new zm(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,t){return F.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return F.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Fs:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new bt(t,0),o=new bt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],(u=>{const d=this.Zr(u.Hr);a.push(d)})),F.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(Re);return t.forEach((o=>{const a=new bt(o,0),u=new bt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const u=new bt(new ae(a),0);let d=new Ke(Re);return this.Yr.forEachWhile((f=>{const _=f.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(f.Hr)),!0)}),u),F.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ve(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(t.mutations,(o=>{const a=new bt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new bt(t,0),o=this.Yr.firstAfterOrEqual(r);return F.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gx{constructor(e){this.ni=e,this.docs=(function(){return new rt(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():lt.newInvalidDocument(o))})),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=In();const u=t.path,d=new ae(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:_,value:{document:v}}=f.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||Nm(kI(v),r)<=0||(o.has(v.key)||xu(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return F.resolve(a)}getAllFromCollectionGroup(e,t,r,o){pe(9500)}ri(e,t){return F.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Qx(this)}getSize(e){return F.resolve(this.size)}}class Qx extends K0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)})),F.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Xx{constructor(e){this.persistence=e,this.ii=new ei((t=>Gs(t)),Cu),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Qm,this.targetCount=0,this._i=Ys.ar()}forEachTarget(e,t){return this.ii.forEach(((r,o)=>t(o))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),F.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ys(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.hr(t),F.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),F.waitFor(a).next((()=>o))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),F.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.oi.containsKey(t))}}/**
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
 */class Xm{constructor(e,t){this.ai={},this.overlays={},this.ui=new On(0),this.ci=!1,this.ci=!0,this.li=new Kx,this.referenceDelegate=e(this),this.hi=new Xx(this),this.indexManager=new Vx,this.remoteDocumentCache=(function(o){return new Gx(o)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new O0(t),this.Ti=new qx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Hx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ee("MemoryPersistence","Starting transaction:",e);const o=new Yx(this.ui.next());return this.referenceDelegate.Ii(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Yx extends NI{constructor(e){super(),this.currentSequenceNumber=e}}class vd{constructor(e){this.persistence=e,this.Ai=new Qm,this.Ri=null}static Vi(e){return new vd(e)}get mi(){if(this.Ri)return this.Ri;throw pe(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const o=ae.fromPath(r);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return F.or([()=>F.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Wh{constructor(e,t){this.persistence=e,this.gi=new ei((r=>Gt(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=W0(this,t)}static Vi(e,t){return new Wh(e,t)}Ii(){}di(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return F.forEach(this.gi,((r,o)=>this.Sr(e,r,o).next((a=>a?F.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ie.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yh(e.data.value)),t}Sr(e,t,r){return F.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return F.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.serializer=e}q(e,t,r,o){const a=new sd("createOrUpgrade",t);r<1&&o>=1&&((function(f){f.createObjectStore(Pu)})(e),(function(f){f.createObjectStore(lu,{keyPath:ck}),f.createObjectStore(Jn,{keyPath:Dv,autoIncrement:!0}).createIndex(Ls,bv,{unique:!0}),f.createObjectStore(ga)})(e),IE(e),(function(f){f.createObjectStore(Ns)})(e));let u=F.resolve();return r<3&&o>=3&&(r!==0&&((function(f){f.deleteObjectStore(ya),f.deleteObjectStore(_a),f.deleteObjectStore(Us)})(e),IE(e)),u=u.next((()=>(function(f){const _=f.store(Us),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ie.min().toTimestamp(),targetCount:0};return _.put(Lh,v)})(a)))),r<4&&o>=4&&(r!==0&&(u=u.next((()=>(function(f,_){return _.store(Jn).j().next((w=>{f.deleteObjectStore(Jn),f.createObjectStore(Jn,{keyPath:Dv,autoIncrement:!0}).createIndex(Ls,bv,{unique:!0});const T=_.store(Jn),D=w.map((j=>T.put(j)));return F.waitFor(D)}))})(e,a)))),u=u.next((()=>{(function(f){f.createObjectStore(va,{keyPath:vk})})(e)}))),r<5&&o>=5&&(u=u.next((()=>this.pi(a)))),r<6&&o>=6&&(u=u.next((()=>((function(f){f.createObjectStore(uu)})(e),this.yi(a))))),r<7&&o>=7&&(u=u.next((()=>this.wi(a)))),r<8&&o>=8&&(u=u.next((()=>this.Si(e,a)))),r<9&&o>=9&&(u=u.next((()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&o>=10&&(u=u.next((()=>this.bi(a)))),r<11&&o>=11&&(u=u.next((()=>{(function(f){f.createObjectStore(ad,{keyPath:Ek})})(e),(function(f){f.createObjectStore(ld,{keyPath:wk})})(e)}))),r<12&&o>=12&&(u=u.next((()=>{(function(f){const _=f.createObjectStore(ud,{keyPath:Ck});_.createIndex(zp,kk,{unique:!1}),_.createIndex(FI,xk,{unique:!1})})(e)}))),r<13&&o>=13&&(u=u.next((()=>(function(f){const _=f.createObjectStore(Oh,{keyPath:dk});_.createIndex(gh,fk),_.createIndex(VI,pk)})(e))).next((()=>this.Di(e,a))).next((()=>e.deleteObjectStore(Ns)))),r<14&&o>=14&&(u=u.next((()=>this.Ci(e,a)))),r<15&&o>=15&&(u=u.next((()=>(function(f){f.createObjectStore(Vm,{keyPath:Ik,autoIncrement:!0}).createIndex(Bp,Tk,{unique:!1}),f.createObjectStore(Gl,{keyPath:Sk}).createIndex(LI,Ak,{unique:!1}),f.createObjectStore(Ql,{keyPath:Rk}).createIndex(MI,Pk,{unique:!1})})(e)))),r<16&&o>=16&&(u=u.next((()=>{t.objectStore(Gl).clear()})).next((()=>{t.objectStore(Ql).clear()}))),r<17&&o>=17&&(u=u.next((()=>{(function(f){f.createObjectStore(Om,{keyPath:Nk})})(e)}))),r<18&&o>=18&&xw()&&(u=u.next((()=>{t.objectStore(Gl).clear()})).next((()=>{t.objectStore(Ql).clear()}))),u}yi(e){let t=0;return e.store(Ns).X(((r,o)=>{t+=qh(o)})).next((()=>{const r={byteSize:t};return e.store(uu).put(jp,r)}))}pi(e){const t=e.store(lu),r=e.store(Jn);return t.j().next((o=>F.forEach(o,(a=>{const u=IDBKeyRange.bound([a.userId,Fs],[a.userId,a.lastAcknowledgedBatchId]);return r.j(Ls,u).next((d=>F.forEach(d,(f=>{ve(f.userId===a.userId,18650,"Cannot process batch from unexpected user",{batchId:f.batchId});const _=bs(this.serializer,f);return B0(e,a.userId,_).next((()=>{}))}))))}))))}wi(e){const t=e.store(ya),r=e.store(Ns);return e.store(Us).get(Lh).next((o=>{const a=[];return r.X(((u,d)=>{const f=new Be(u),_=(function(w){return[0,Gt(w)]})(f);a.push(t.get(_).next((v=>v?F.resolve():(w=>t.put({targetId:0,path:Gt(w),sequenceNumber:o.highestListenSequenceNumber}))(f))))})).next((()=>F.waitFor(a)))}))}Si(e,t){e.createObjectStore(cu,{keyPath:yk});const r=t.store(cu),o=new Gm,a=u=>{if(o.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:Gt(f)})}};return t.store(Ns).X({Z:!0},((u,d)=>{const f=new Be(u);return a(f.popLast())})).next((()=>t.store(ga).X({Z:!0},(([u,d,f],_)=>{const v=mr(d);return a(v.popLast())}))))}bi(e){const t=e.store(_a);return t.X(((r,o)=>{const a=zl(o),u=L0(this.serializer,a);return t.put(u)}))}Di(e,t){const r=t.store(Ns),o=[];return r.X(((a,u)=>{const d=t.store(Oh),f=(function(w){return w.document?new ae(Be.fromString(w.document.name).popFirst(5)):w.noDocument?ae.fromSegments(w.noDocument.path):w.unknownDocument?ae.fromSegments(w.unknownDocument.path):pe(36783)})(u).path.toArray(),_={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};o.push(d.put(_))})).next((()=>F.waitFor(o)))}Ci(e,t){const r=t.store(Jn),o=H0(this.serializer),a=new Xm(vd.Vi,this.serializer.gt);return r.j().next((u=>{const d=new Map;return u.forEach((f=>{var _;let v=(_=d.get(f.userId))!==null&&_!==void 0?_:xe();bs(this.serializer,f).keys().forEach((w=>v=v.add(w))),d.set(f.userId,v)})),F.forEach(d,((f,_)=>{const v=new Ut(_),w=_d.yt(this.serializer,v),T=a.getIndexManager(v),D=yd.yt(v,this.serializer,T,a.referenceDelegate);return new G0(o,D,w,T).recalculateAndSaveOverlaysForDocumentKeys(new $p(t,On.ue),f).next()}))}))}}function IE(n){n.createObjectStore(ya,{keyPath:gk}).createIndex(bm,_k,{unique:!0}),n.createObjectStore(_a,{keyPath:"targetId"}).createIndex(OI,mk,{unique:!0}),n.createObjectStore(Us)}const xi="IndexedDbPersistence",_p=18e5,yp=5e3,vp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Zx="main";class Ym{constructor(e,t,r,o,a,u,d,f,_,v,w=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=a,this.window=u,this.document=d,this.Mi=_,this.xi=v,this.Oi=w,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=T=>Promise.resolve(),!Ym.C())throw new se(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jx(this,o),this.Qi=t+Zx,this.serializer=new O0(f),this.$i=new Bi(this.Qi,this.Oi,new Jx(this.serializer)),this.li=new Cx,this.hi=new Lx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=H0(this.serializer),this.Ti=new Px,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,v===!1&&Zt(xi,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new se(K.FAILED_PRECONDITION,vp);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new On(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>sh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Ji(e))return ee(xi,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ee(xi,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return Ol(e).get(Jo).next((t=>F.resolve(this.Xi(t))))}es(e){return sh(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,_p)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=At(t,va);return r.j().next((o=>{const a=this.rs(o,_p),u=o.filter((d=>a.indexOf(d)===-1));return F.forEach(u,(d=>r.delete(d.clientId))).next((()=>u))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?F.resolve(!0):Ol(e).get(Jo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,yp)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new se(K.FAILED_PRECONDITION,vp);return!1}}return!(!this.networkEnabled||!this.inForeground)||sh(e).j().next((r=>this.rs(r,yp).find((o=>{if(this.clientId!==o.clientId){const a=!this.networkEnabled&&o.networkEnabled,u=!this.inForeground&&o.inForeground,d=this.networkEnabled===o.networkEnabled;if(a||u&&d)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ee(xi,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Pu,va],(e=>{const t=new $p(e,On.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>sh(e).j().next((t=>this.rs(t,_p).map((r=>r.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return yd.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ox(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return _d.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){ee(xi,"Starting transaction:",e);const o=t==="readonly"?"readonly":"readwrite",a=(function(f){return f===18?Vk:f===17?zI:f===16?bk:f===15?Lm:f===14?BI:f===13?jI:f===12?Dk:f===11?UI:void pe(60245)})(this.Oi);let u;return this.$i.runTransaction(e,o,a,(d=>(u=new $p(d,this.ui?this.ui.next():On.ue),t==="readwrite-primary"?this.Ji(u).next((f=>!!f||this.Hi(u))).next((f=>{if(!f)throw Zt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new se(K.FAILED_PRECONDITION,xI);return r(u)})).next((f=>this.Zi(u).next((()=>f)))):this.Ts(u).next((()=>r(u)))))).then((d=>(u.raiseOnCommittedEvent(),d)))}Ts(e){return Ol(e).get(Jo).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,yp)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new se(K.FAILED_PRECONDITION,vp)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ol(e).put(Jo,t)}static C(){return Bi.C()}Yi(e){const t=Ol(e);return t.get(Jo).next((r=>this.Xi(r)?(ee(xi,"Releasing primary lease."),t.delete(Jo)):F.resolve()))}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Zt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;kw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return ee(xi,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Zt(xi,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Zt("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ol(n){return At(n,Pu)}function sh(n){return At(n,va)}function eN(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Jm{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=xe(),o=xe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Jm(e,t.fromCache,r,o)}}/**
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
 */class tN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return kw()?8:DI(St())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new tN;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(ia()<=be.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",sa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ia()<=be.DEBUG&&ee("QueryEngine","Query:",sa(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(ia()<=be.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",sa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):F.resolve())}ps(e,t){if(Kv(t))return F.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Xp(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=xe(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const _=this.bs(t,d);return this.Ds(t,_,u,f.readTime)?this.ps(e,Xp(t,null,"F")):this.vs(e,_,t,f)}))))})))))}ys(e,t,r,o){return Kv(t)||o.isEqual(Ie.min())?F.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?F.resolve(null):(ia()<=be.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),sa(t)),this.vs(e,u,t,rk(o,su)).next((d=>d)))}))}bs(e,t){let r=new Ke(l0(e));return t.forEach(((o,a)=>{xu(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return ia()<=be.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",sa(t)),this.gs.getDocumentsMatchingQuery(e,t,Tn.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="LocalStore",nN=3e8;class rN{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new rt(Re),this.Ms=new ei((a=>Gs(a)),Cu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function X0(n,e,t,r){return new rN(n,e,t,r)}async function Y0(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=xe();for(const _ of o){u.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}for(const _ of a){d.push(_.batchId);for(const v of _.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((_=>({Bs:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function iN(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,_,v){const w=_.batch,T=w.keys();let D=F.resolve();return T.forEach((j=>{D=D.next((()=>v.getEntry(f,j))).next((z=>{const V=_.docVersions.get(j);ve(V!==null,48541),z.version.compareTo(V)<0&&(w.applyToRemoteDocument(z,_),z.isValidDocument()&&(z.setReadTime(_.commitVersion),v.addEntry(z)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=xe();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(f=f.add(d.batch.mutations[_].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function J0(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function sN(n,e){const t=Ce(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let D=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?D=D.withResumeToken(yt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,r)),o=o.insert(w,D),(function(z,V,re){return z.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=nN?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(T,D,v)&&d.push(t.hi.updateTargetData(a,D))}));let f=In(),_=xe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(oN(a,u,e.documentUpdates).next((v=>{f=v.Ls,_=v.ks}))),!r.isEqual(Ie.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return F.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,_))).next((()=>f))})).then((a=>(t.Fs=o,a)))}function oN(n,e,t){let r=xe(),o=xe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=In();return t.forEach(((d,f)=>{const _=a.get(d);f.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Ie.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!_.isValidDocument()||f.version.compareTo(_.version)>0||f.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ee(Zm,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",f.version)})),{Ls:u,ks:o}}))}function aN(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function lN(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.hi.getTargetData(r,e).next((a=>a?(o=a,F.resolve(o)):t.hi.allocateTargetId(r).next((u=>(o=new Hr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function im(n,e,t){const r=Ce(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Ji(u))throw u;ee(Zm,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function TE(n,e,t){const r=Ce(n);let o=Ie.min(),a=xe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,_,v){const w=Ce(f),T=w.Ms.get(v);return T!==void 0?F.resolve(w.Fs.get(T)):w.hi.getTargetData(_,v)})(r,u,Ln(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Ie.min(),t?a:xe()))).next((d=>(uN(r,Qk(e),d),{documents:d,qs:a})))))}function uN(n,e,t){let r=n.xs.get(e)||Ie.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class SE{constructor(){this.activeTargetIds=tx()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z0{constructor(){this.Fo=new SE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new SE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cN{xo(e){}shutdown(){}}/**
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
 */const AE="ConnectivityMonitor";class RE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ee(AE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ee(AE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oh=null;function sm(){return oh===null?oh=(function(){return 268435456+Math.round(2147483648*Math.random())})():oh++,"0x"+oh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="RestConnection",hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Mh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=sm(),d=this.Go(e,t.toUriEncodedString());ee(Ep,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:_}=new URL(d),v=Zs(_);return this.jo(e,d,f,r,v).then((w=>(ee(Ep,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ir(Ep,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Na})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const r=hN[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class fN{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Wt="WebChannelConnection";class pN extends dN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=sm();return new Promise(((d,f)=>{const _=new yI;_.setWithCredentials(!0),_.listenOnce(vI.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case fh.NO_ERROR:const w=_.getResponseJson();ee(Wt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case fh.TIMEOUT:ee(Wt,`RPC '${e}' ${u} timed out`),f(new se(K.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const T=_.getStatus();if(ee(Wt,`RPC '${e}' ${u} failed with status:`,T,"response text:",_.getResponseText()),T>0){let D=_.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D==null?void 0:D.error;if(j&&j.status&&j.message){const z=(function(re){const te=re.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(te)>=0?te:K.UNKNOWN})(j.status);f(new se(z,j.message))}else f(new se(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else f(new se(K.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{c_:e,streamId:u,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ee(Wt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);ee(Wt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",v,r,15)}))}P_(e,t,r){const o=sm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=II(),d=wI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(f.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ee(Wt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,D=!1;const j=new fN({Ho:V=>{D?ee(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(T||(ee(Wt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),ee(Wt,`RPC '${e}' stream ${o} sending:`,V),w.send(V))},Yo:()=>w.close()}),z=(V,re,te)=>{V.listen(re,(J=>{try{te(J)}catch(le){setTimeout((()=>{throw le}),0)}}))};return z(w,Ul.EventType.OPEN,(()=>{D||(ee(Wt,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),z(w,Ul.EventType.CLOSE,(()=>{D||(D=!0,ee(Wt,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(w))})),z(w,Ul.EventType.ERROR,(V=>{D||(D=!0,Ir(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),j.__(new se(K.UNAVAILABLE,"The operation could not be completed")))})),z(w,Ul.EventType.MESSAGE,(V=>{var re;if(!D){const te=V.data[0];ve(!!te,16349);const J=te,le=(J==null?void 0:J.error)||((re=J[0])===null||re===void 0?void 0:re.error);if(le){ee(Wt,`RPC '${e}' stream ${o} received error:`,le);const we=le.status;let me=(function(P){const N=pt[P];if(N!==void 0)return w0(N)})(we),x=le.message;me===void 0&&(me=K.INTERNAL,x="Unknown error status: "+we+" with message "+le.message),D=!0,j.__(new se(me,x)),w.close()}else ee(Wt,`RPC '${e}' stream ${o} received:`,te),j.a_(te)}})),z(d,EI.STAT_EVENT,(V=>{V.stat===Mp.PROXY?ee(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Mp.NOPROXY&&ee(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function mN(){return typeof window<"u"?window:null}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){return new gx(n,!0)}/**
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
 */class eT{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&ee("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const PE="PersistentStream";class tT{constructor(e,t,r,o,a,u,d,f){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new eT(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.b_===t&&this.W_(r,o)}),(r=>{e((()=>{const o=new se(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{r((()=>this.G_(o)))})),this.stream.onMessage((o=>{r((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ee(PE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ee(PE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gN extends tT{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=vx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ie.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ie.min():u.readTime?tn(u.readTime):Ie.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Zp(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Fh(f)?{documents:k0(a,f)}:{query:x0(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=S0(a,u.resumeToken);const _=Yp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Pa(a,u.snapshotVersion.toTimestamp());const _=Yp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=wx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Zp(this.serializer),t.removeTarget=e,this.k_(t)}}class _N extends tT{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ex(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Zp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Bh(this.serializer,r)))};this.k_(t)}}/**
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
 */class yN{}class vN extends yN{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Jp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(K.UNKNOWN,a.toString())}))}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Jp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(K.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class EN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zt(t),this._a=!1):ee("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Js="RemoteStore";class wN{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{ro(this)&&(ee(Js,"Restarting streams for network reachability change."),await(async function(f){const _=Ce(f);_.Ia.add(4),await Du(_),_.Aa.set("Unknown"),_.Ia.delete(4),await wd(_)})(this))}))})),this.Aa=new EN(r,o)}}async function wd(n){if(ro(n))for(const e of n.da)await e(!0)}async function Du(n){for(const e of n.da)await e(!1)}function nT(n,e){const t=Ce(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),rg(t)?ng(t):Va(t).x_()&&tg(t,e))}function eg(n,e){const t=Ce(n),r=Va(t);t.Ta.delete(e),r.x_()&&rT(t,e),t.Ta.size===0&&(r.x_()?r.B_():ro(t)&&t.Aa.set("Unknown"))}function tg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Va(n).H_(e)}function rT(n,e){n.Ra.$e(e),Va(n).Y_(e)}function ng(n){n.Ra=new dx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Va(n).start(),n.Aa.aa()}function rg(n){return ro(n)&&!Va(n).M_()&&n.Ta.size>0}function ro(n){return Ce(n).Ia.size===0}function iT(n){n.Ra=void 0}async function IN(n){n.Aa.set("Online")}async function TN(n){n.Ta.forEach(((e,t)=>{tg(n,e)}))}async function SN(n,e){iT(n),rg(n)?(n.Aa.la(e),ng(n)):n.Aa.set("Unknown")}async function AN(n,e,t){if(n.Aa.set("Online"),e instanceof T0&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(r){ee(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kh(n,r)}else if(e instanceof wh?n.Ra.Ye(e):e instanceof I0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ie.min()))try{const r=await J0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,_)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(_);v&&a.Ta.set(_,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,_)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(yt.EMPTY_BYTE_STRING,v.snapshotVersion)),rT(a,f);const w=new Hr(v.target,f,_,v.sequenceNumber);tg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ee(Js,"Failed to raise snapshot:",r),await Kh(n,r)}}async function Kh(n,e,t){if(!Ji(e))throw e;n.Ia.add(1),await Du(n),n.Aa.set("Offline"),t||(t=()=>J0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ee(Js,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await wd(n)}))}function sT(n,e){return e().catch((t=>Kh(n,t,e)))}async function bu(n){const e=Ce(n),t=Ki(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fs;for(;RN(e);)try{const o=await aN(e.localStore,r);if(o===null){e.Pa.length===0&&t.B_();break}r=o.batchId,PN(e,o)}catch(o){await Kh(e,o)}oT(e)&&aT(e)}function RN(n){return ro(n)&&n.Pa.length<10}function PN(n,e){n.Pa.push(e);const t=Ki(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function oT(n){return ro(n)&&!Ki(n).M_()&&n.Pa.length>0}function aT(n){Ki(n).start()}async function CN(n){Ki(n).na()}async function kN(n){const e=Ki(n);for(const t of n.Pa)e.X_(t.mutations)}async function xN(n,e,t){const r=n.Pa.shift(),o=$m.from(r,e,t);await sT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await bu(n)}async function NN(n,e){e&&Ki(n).Z_&&await(async function(r,o){if((function(u){return cx(u)&&u!==K.ABORTED})(o.code)){const a=r.Pa.shift();Ki(r).N_(),await sT(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await bu(r)}})(n,e),oT(n)&&aT(n)}async function CE(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),ee(Js,"RemoteStore received new credentials");const r=ro(t);t.Ia.add(3),await Du(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await wd(t)}async function DN(n,e){const t=Ce(n);e?(t.Ia.delete(2),await wd(t)):e||(t.Ia.add(2),await Du(t),t.Aa.set("Unknown"))}function Va(n){return n.Va||(n.Va=(function(t,r,o){const a=Ce(t);return a.ia(),new gN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:IN.bind(null,n),e_:TN.bind(null,n),n_:SN.bind(null,n),J_:AN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),rg(n)?ng(n):n.Aa.set("Unknown")):(await n.Va.stop(),iT(n))}))),n.Va}function Ki(n){return n.ma||(n.ma=(function(t,r,o){const a=Ce(t);return a.ia(),new _N(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:CN.bind(null,n),n_:NN.bind(null,n),ea:kN.bind(null,n),ta:xN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await bu(n)):(await n.ma.stop(),n.Pa.length>0&&(ee(Js,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class ig{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new ig(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sg(n,e){if(Zt("AsyncQueue",`${e}: ${n}`),Ji(n))return new se(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fa{static emptySet(e){return new fa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=jl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class kE{constructor(){this.fa=new rt(ae.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):pe(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ca{constructor(e,t,r,o,a,u,d,f,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ca(e,t,fa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class bN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class VN{constructor(){this.queries=xE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=Ce(t),a=o.queries;o.queries=xE(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new se(K.ABORTED,"Firestore shutting down"))}}function xE(){return new ei((n=>a0(n)),dd)}async function lT(n,e){const t=Ce(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new bN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=sg(u,`Initialization of query '${sa(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&og(t)}async function uT(n,e){const t=Ce(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ON(n,e){const t=Ce(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&og(t)}function LN(n,e,t){const r=Ce(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function og(n){n.Da.forEach((e=>{e.next()}))}var om,NE;(NE=om||(om={})).Fa="default",NE.Cache="cache";class cT{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ca(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==om.Cache}}/**
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
 */class hT{constructor(e){this.key=e}}class dT{constructor(e){this.key=e}}class MN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=xe(),this.mutatedKeys=xe(),this.Xa=l0(e),this.eu=new fa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new kE,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,w)=>{const T=o.get(v),D=xu(this.query,w)?w:null,j=!!T&&this.mutatedKeys.has(T.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let V=!1;T&&D?T.data.isEqual(D.data)?j!==z&&(r.track({type:3,doc:D}),V=!0):this.iu(T,D)||(r.track({type:2,doc:D}),V=!0,(f&&this.Xa(D,f)>0||_&&this.Xa(D,_)<0)&&(d=!0)):!T&&D?(r.track({type:0,doc:D}),V=!0):T&&!D&&(r.track({type:1,doc:T}),V=!0,(f||_)&&(d=!0)),V&&(D?(u=u.add(D),a=z?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(D,j){const z=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{At:V})}};return z(D)-z(j)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,_=f!==this.Ya;return this.Ya=f,u.length!==0||_?{snapshot:new Ca(this.query,e.eu,a,u,e.mutatedKeys,f===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new kE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=xe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new dT(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new hT(r))})),t}uu(e){this.Ha=e.qs,this.Za=xe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ca.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ag="SyncEngine";class FN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class UN{constructor(e){this.key=e,this.lu=!1}}class jN{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ei((d=>a0(d)),dd),this.Tu=new Map,this.Iu=new Set,this.du=new rt(ae.comparator),this.Eu=new Map,this.Au=new Qm,this.Ru={},this.Vu=new Map,this.mu=Ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function BN(n,e,t=!0){const r=yT(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await fT(r,e,t,!0),o}async function zN(n,e){const t=yT(n);await fT(t,e,!0,!1)}async function fT(n,e,t,r){const o=await lN(n.localStore,Ln(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await $N(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&nT(n.remoteStore,o),d}async function $N(n,e,t,r,o){n.gu=(w,T,D)=>(async function(z,V,re,te){let J=V.view.nu(re);J.Ds&&(J=await TE(z.localStore,V.query,!1).then((({documents:x})=>V.view.nu(x,J))));const le=te&&te.targetChanges.get(V.targetId),we=te&&te.targetMismatches.get(V.targetId)!=null,me=V.view.applyChanges(J,z.isPrimaryClient,le,we);return bE(z,V.targetId,me._u),me.snapshot})(n,w,T,D);const a=await TE(n.localStore,e,!0),u=new MN(e,a.qs),d=u.nu(a.documents),f=Nu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,f);bE(n,t,_._u);const v=new FN(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),_.snapshot}async function qN(n,e,t){const r=Ce(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter((u=>!dd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await im(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&eg(r.remoteStore,o.targetId),am(r,o.targetId)})).catch(no)):(am(r,o.targetId),await im(r.localStore,o.targetId,!0))}async function WN(n,e){const t=Ce(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),eg(t.remoteStore,r.targetId))}async function KN(n,e,t){const r=vT(n);try{const o=await(function(u,d){const f=Ce(u),_=ze.now(),v=d.reduce(((D,j)=>D.add(j.key)),xe());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let j=In(),z=xe();return f.Os.getEntries(D,v).next((V=>{j=V,j.forEach(((re,te)=>{te.isValidDocument()||(z=z.add(re))}))})).next((()=>f.localDocuments.getOverlayedDocuments(D,j))).next((V=>{w=V;const re=[];for(const te of d){const J=lx(te,w.get(te.key).overlayedDocument);J!=null&&re.push(new ti(te.key,J,JI(J.value.mapValue),en.exists(!0)))}return f.mutationQueue.addMutationBatch(D,_,re,d)})).next((V=>{T=V;const re=V.applyToLocalDocumentSet(w,z);return f.documentOverlayCache.saveOverlays(D,V.batchId,re)}))})).then((()=>({batchId:T.batchId,changes:c0(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,f){let _=u.Ru[u.currentUser.toKey()];_||(_=new rt(Re)),_=_.insert(d,f),u.Ru[u.currentUser.toKey()]=_})(r,o.batchId,t),await Vu(r,o.changes),await bu(r.remoteStore)}catch(o){const a=sg(o,"Failed to persist write");t.reject(a)}}async function pT(n,e){const t=Ce(n);try{const r=await sN(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Eu.get(a);u&&(ve(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?ve(u.lu,14607):o.removedDocuments.size>0&&(ve(u.lu,42227),u.lu=!1))})),await Vu(t,r,e)}catch(r){await no(r)}}function DE(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const f=Ce(u);f.onlineState=d;let _=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(_=!0)})),_&&og(f)})(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HN(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new rt(ae.comparator);u=u.insert(a,lt.newNoDocument(a,Ie.min()));const d=xe().add(a),f=new gd(Ie.min(),new Map,new rt(Re),u,d);await pT(r,f),r.du=r.du.remove(a),r.Eu.delete(e),lg(r)}else await im(r.localStore,e,!1).then((()=>am(r,e,t))).catch(no)}async function GN(n,e){const t=Ce(n),r=e.batch.batchId;try{const o=await iN(t.localStore,e);gT(t,r,null),mT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(t,o)}catch(o){await no(o)}}async function QN(n,e,t){const r=Ce(n);try{const o=await(function(u,d){const f=Ce(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let v;return f.mutationQueue.lookupMutationBatch(_,d).next((w=>(ve(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(_,w)))).next((()=>f.mutationQueue.performConsistencyCheck(_))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(_,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,v))).next((()=>f.localDocuments.getDocuments(_,v)))}))})(r.localStore,e);gT(r,e,t),mT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vu(r,o)}catch(o){await no(o)}}function mT(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function gT(n,e,t){const r=Ce(n);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function am(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||_T(n,r)}))}function _T(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(eg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),lg(n))}function bE(n,e,t){for(const r of t)r instanceof hT?(n.Au.addReference(r.key,e),XN(n,r)):r instanceof dT?(ee(ag,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||_T(n,r.key)):pe(19791,{yu:r})}function XN(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ee(ag,"New document in limbo: "+t),n.Iu.add(r),lg(n))}function lg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ae(Be.fromString(e)),r=n.mu.next();n.Eu.set(r,new UN(t)),n.du=n.du.insert(t,r),nT(n.remoteStore,new Hr(Ln(ku(t.path)),r,"TargetPurposeLimboResolution",On.ue))}}async function Vu(n,e,t){const r=Ce(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((_=>{var v;if((_||t)&&r.isPrimaryClient){const w=_?!_.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(_){o.push(_);const w=Jm.Es(f.targetId,_);a.push(w)}})))})),await Promise.all(u),r.hu.J_(o),await(async function(f,_){const v=Ce(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>F.forEach(_,(T=>F.forEach(T.Is,(D=>v.persistence.referenceDelegate.addReference(w,T.targetId,D))).next((()=>F.forEach(T.ds,(D=>v.persistence.referenceDelegate.removeReference(w,T.targetId,D)))))))))}catch(w){if(!Ji(w))throw w;ee(Zm,"Failed to update sequence numbers: "+w)}for(const w of _){const T=w.targetId;if(!w.fromCache){const D=v.Fs.get(T),j=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(j);v.Fs=v.Fs.insert(T,z)}}})(r.localStore,a))}async function YN(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){ee(ag,"User change. New user:",e.toKey());const r=await Y0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new se(K.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vu(t,r.Bs)}}function JN(n,e){const t=Ce(n),r=t.Eu.get(e);if(r&&r.lu)return xe().add(r.key);{let o=xe();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function yT(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HN.bind(null,e),e.hu.J_=ON.bind(null,e.eventManager),e.hu.pu=LN.bind(null,e.eventManager),e}function vT(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QN.bind(null,e),e}class _u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ed(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}Du(e){return new Xm(vd.Vi,this.serializer)}bu(e){return new Z0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_u.provider={build:()=>new _u};class ZN extends _u{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ve(this.persistence.referenceDelegate instanceof Wh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new q0(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Xm((r=>Wh.Vi(r,t)),this.serializer)}}class eD extends _u{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await vT(this.Mu.syncEngine),await bu(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new q0(r,e.asyncQueue,t)}Fu(e,t){const r=new ak(t,this.persistence);return new ok(e.asyncQueue,r)}Du(e){const t=eN(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Ym(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,mN(),Th(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Z0}}class Hh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>DE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YN.bind(null,this.syncEngine),await DN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new VN})()}createDatastore(e){const t=Ed(e.databaseInfo.databaseId),r=(function(a){return new pN(a)})(e.databaseInfo);return(function(a,u,d,f){return new vN(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new wN(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>DE(this.syncEngine,t,0)),(function(){return RE.C()?new RE:new cN})())}createSyncEngine(e,t){return(function(o,a,u,d,f,_,v){const w=new jN(o,a,u,d,f,_);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Ce(o);ee(Js,"RemoteStore shutting down."),a.Ia.add(5),await Du(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ET{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Hi="FirestoreClient";class tD{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ee(Hi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ee(Hi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=sg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function wp(n,e){n.asyncQueue.verifyOperationInProgress(),ee(Hi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await Y0(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ir("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ee("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ir("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function VE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nD(n);ee(Hi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>CE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>CE(e.remoteStore,o))),n._onlineComponents=e}async function nD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ee(Hi,"Using user provided OfflineComponentProvider");try{await wp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await wp(n,new _u)}}else ee(Hi,"Using default OfflineComponentProvider"),await wp(n,new ZN(void 0));return n._offlineComponents}async function wT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ee(Hi,"Using user provided OnlineComponentProvider"),await VE(n,n._uninitializedComponentsProvider._online)):(ee(Hi,"Using default OnlineComponentProvider"),await VE(n,new Hh))),n._onlineComponents}function rD(n){return wT(n).then((e=>e.syncEngine))}async function lm(n){const e=await wT(n),t=e.eventManager;return t.onListen=BN.bind(null,e.syncEngine),t.onUnlisten=qN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WN.bind(null,e.syncEngine),t}function iD(n,e,t={}){const r=new Qr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,_){const v=new ET({next:T=>{v.Ou(),u.enqueueAndForget((()=>uT(a,w)));const D=T.docs.has(d);!D&&T.fromCache?_.reject(new se(K.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&T.fromCache&&f&&f.source==="server"?_.reject(new se(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(T)},error:T=>_.reject(T)}),w=new cT(ku(d.path),v,{includeMetadataChanges:!0,ka:!0});return lT(a,w)})(await lm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function IT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="firestore.googleapis.com",LE=!0;class ME{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TT,this.ssl=LE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:LE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mx)throw new se(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ME({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ME(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new HC;switch(r.type){case"firstParty":return new YC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=OE.get(t);r&&(ee("ComponentProvider","Removing Datastore"),OE.delete(t),r.terminate())})(this),Promise.resolve()}}function sD(n,e,t,r={}){var o;n=tr(n,Id);const a=Zs(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(mm(`https://${f}`),gm("Firestore",!0)),u.host!==TT&&u.host!==f&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!zs(_,d)&&(n._setSettings(_),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=Ut.MOCK_USER;else{v=Pw(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new se(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ut(T)}n._authCredentials=new GC(new SI(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new io(this.firestore,e,this._query)}}class ht{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ru(t,ht._jsonSchema))return new ht(e,r||null,new ae(Be.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:mt("string",ht._jsonSchemaVersion),referencePath:mt("string")};class zi extends io{constructor(e,t,r){super(e,t,ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new ae(e))}withConverter(e){return new zi(this.firestore,e,this._path)}}function ST(n,e,...t){if(n=_t(n),PI("collection","path",e),n instanceof Id){const r=Be.fromString(e,...t);return Pv(r),new zi(n,null,r)}{if(!(n instanceof ht||n instanceof zi))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return Pv(r),new zi(n.firestore,null,r)}}function Td(n,e,...t){if(n=_t(n),arguments.length===1&&(e=xm.newId()),PI("doc","path",e),n instanceof Id){const r=Be.fromString(e,...t);return Rv(r),new ht(n,null,new ae(r))}{if(!(n instanceof ht||n instanceof zi))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return Rv(r),new ht(n.firestore,n instanceof zi?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="AsyncQueue";class UE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new eT(this,"async_queue_retry"),this.oc=()=>{const r=Th();r&&ee(FE,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Th();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Th();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ji(e))throw e;ee(FE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Zt("INTERNAL UNHANDLED ERROR: ",jE(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=ig.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&pe(47125,{hc:jE(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function jE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function BE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Gi extends Id{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new UE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new UE(e),this._firestoreClient=void 0,await e}}}function oD(n,e){const t=typeof n=="object"?n:vm(),r=typeof n=="string"?n:Mh,o=ed(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=Sw("firestore");a&&sD(o,...a)}return o}function ug(n){if(n._terminated)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AT(n),n._firestoreClient}function AT(n){var e,t,r;const o=n._freezeSettings(),a=(function(d,f,_,v){return new Lk(d,f,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,IT(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new tD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}function aD(n,e){Ir("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return lD(n,Hh.provider,{build:r=>new eD(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function lD(n,e,t){if((n=tr(n,Gi))._firestoreClient||n._terminated)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new se(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},AT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(yt.fromBase64String(e))}catch(t){throw new se(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vn(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ru(e,Vn._jsonSchema))return Vn.fromBase64String(e.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:mt("string",Vn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this._methodName=e}}/**
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
 */class Er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Ru(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:mt("string",Er._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ru(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wr(e.vectorValues);throw new se(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:mt("string",wr._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const uD=/^__.*__$/;class cD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,t,this.fieldTransforms):new ba(e,this.data,t,this.fieldTransforms)}}class RT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ti(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ec:n})}}class cg{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(PT(this.Ec)&&uD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class hD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ed(e)}Dc(e,t,r,o=!1){return new cg({Ec:e,methodName:t,bc:r,path:ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(n){const e=n._freezeSettings(),t=Ed(n._databaseId);return new hD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dD(n,e,t,r,o,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);fg("Data must be an object, but it was:",u,r);const d=CT(r,u);let f,_;if(a.merge)f=new dn(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=um(e,w,t);if(!u.contains(T))throw new se(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);xT(v,T)||v.push(T)}f=new dn(v),_=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,_=u.fieldTransforms;return new cD(new Ht(d),f,_)}class Rd extends Ad{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rd}}class dg extends Ad{_toFieldTransform(e){return new _0(e.path,new Sa)}isEqual(e){return e instanceof dg}}function fD(n,e,t,r){const o=n.Dc(1,e,t);fg("Data must be an object, but it was:",o,r);const a=[],u=Ht.empty();Zi(r,((f,_)=>{const v=pg(e,f,t);_=_t(_);const w=o.gc(v);if(_ instanceof Rd)a.push(v);else{const T=Ou(_,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new dn(a);return new RT(u,d,o.fieldTransforms)}function pD(n,e,t,r,o,a){const u=n.Dc(1,e,t),d=[um(e,r,t)],f=[o];if(a.length%2!=0)throw new se(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(um(e,a[T])),f.push(a[T+1]);const _=[],v=Ht.empty();for(let T=d.length-1;T>=0;--T)if(!xT(_,d[T])){const D=d[T];let j=f[T];j=_t(j);const z=u.gc(D);if(j instanceof Rd)_.push(D);else{const V=Ou(j,z);V!=null&&(_.push(D),v.set(D,V))}}const w=new dn(_);return new RT(v,w,u.fieldTransforms)}function mD(n,e,t,r=!1){return Ou(t,n.Dc(r?4:3,e))}function Ou(n,e){if(kT(n=_t(n)))return fg("Unsupported field value:",e,n),CT(n,e);if(n instanceof Ad)return(function(r,o){if(!PT(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let f=Ou(d,o.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nx(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ze.fromDate(r);return{timestampValue:Pa(o.serializer,a)}}if(r instanceof ze){const a=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pa(o.serializer,a)}}if(r instanceof Er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:S0(o.serializer,r._byteString)};if(r instanceof ht){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Km(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof wr)return(function(u,d){return{mapValue:{fields:{[Fm]:{stringValue:Um},[Ea]:{arrayValue:{values:u.toArray().map((_=>{if(typeof _!="number")throw d.wc("VectorValues must only contain numeric values.");return Bm(d.serializer,_)}))}}}}}})(r,o);throw o.wc(`Unsupported field value: ${id(r)}`)})(n,e)}function CT(n,e){const t={};return $I(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(n,((r,o)=>{const a=Ou(o,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function kT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ze||n instanceof Er||n instanceof Vn||n instanceof ht||n instanceof Ad||n instanceof wr)}function fg(n,e,t){if(!kT(t)||!CI(t)){const r=id(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function um(n,e,t){if((e=_t(e))instanceof Sd)return e._internalPath;if(typeof e=="string")return pg(n,e);throw Gh("Field path arguments must be of type string or ",n,!1,void 0,t)}const gD=new RegExp("[~\\*/\\[\\]]");function pg(n,e,t){if(e.search(gD)>=0)throw Gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sd(...e.split("."))._internalPath}catch{throw Gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new se(K.INVALID_ARGUMENT,d+n+f)}function xT(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _D(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _D extends NT{data(){return super.data()}}function Pd(n,e){return typeof e=="string"?pg(n,e):e instanceof Sd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mg{}class DT extends mg{}function vD(n,e,...t){let r=[];e instanceof mg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof gg)).length,d=a.filter((f=>f instanceof Cd)).length;if(u>1||u>0&&d>0)throw new se(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class Cd extends DT{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Cd(e,t,r)}_apply(e){const t=this._parse(e);return bT(e._query,t),new io(e.firestore,e.converter,Qp(e._query,t))}_parse(e){const t=hg(e.firestore);return(function(a,u,d,f,_,v,w){let T;if(_.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){qE(w,v);const j=[];for(const z of w)j.push($E(f,a,z));T={arrayValue:{values:j}}}else T=$E(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||qE(w,v),T=mD(d,u,w,v==="in"||v==="not-in");return Ve.create(_,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ED(n,e,t){const r=e,o=Pd("where",n);return Cd._create(o,r,t)}class gg extends mg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)bT(u,f),u=Qp(u,f)})(e._query,t),new io(e.firestore,e.converter,Qp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _g extends DT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _g(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mu(a,u)})(e._query,this._field,this._direction);return new io(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new Da(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function zE(n,e="asc"){const t=e,r=Pd("orderBy",n);return _g._create(r,t)}function $E(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new se(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!o0(e)&&t.indexOf("/")!==-1)throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!ae.isDocumentKey(r))throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fu(n,new ae(r))}if(t instanceof ht)return fu(n,t._key);throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(t)}.`)}function qE(n,e){if(!Array.isArray(n)||n.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bT(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wD{convertValue(e,t="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zi(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Ea].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map((u=>nt(u.doubleValue)));return new wr(a)}convertGeoPoint(e){return new Er(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hu(e));default:return null}}convertTimestamp(e){const t=Jr(e);return new ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);ve(V0(r),9688,{name:e});const o=new Hs(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return o.isEqual(t)||Zt(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class $l{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bs extends NT{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Bs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Bs._jsonSchema={type:mt("string",Bs._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Sh extends Bs{data(e={}){return super.data(e)}}class pa{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $l(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Sh(this._firestore,this._userDataWriter,r.key,r,new $l(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const f=new Sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:TD(d.type),doc:f,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(n){n=tr(n,ht);const e=tr(n.firestore,Gi);return iD(ug(e),n._key).then((t=>OT(e,n,t)))}pa._jsonSchemaVersion="firestore/querySnapshot/1.0",pa._jsonSchema={type:mt("string",pa._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class VT extends wD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function AD(n,e,t,...r){n=tr(n,ht);const o=tr(n.firestore,Gi),a=hg(o);let u;return u=typeof(e=_t(e))=="string"||e instanceof Sd?pD(a,"updateDoc",n._key,e,t,r):fD(a,"updateDoc",n._key,e),yg(o,[u.toMutation(n._key,en.exists(!0))])}function RD(n){return yg(tr(n.firestore,Gi),[new md(n._key,en.none())])}function PD(n,e){const t=tr(n.firestore,Gi),r=Td(n),o=ID(n.converter,e);return yg(t,[dD(hg(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then((()=>r))}function CD(n,...e){var t,r,o;n=_t(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||BE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(BE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let f,_,v;if(n instanceof ht)_=tr(n.firestore,Gi),v=ku(n._key.path),f={next:w=>{e[u]&&e[u](OT(_,n,w))},error:e[u+1],complete:e[u+2]};else{const w=tr(n,io);_=tr(w.firestore,Gi),v=w._query;const T=new VT(_);f={next:D=>{e[u]&&e[u](new pa(_,T,w,D))},error:e[u+1],complete:e[u+2]},yD(n._query)}return(function(T,D,j,z){const V=new ET(z),re=new cT(D,V,j);return T.asyncQueue.enqueueAndForget((async()=>lT(await lm(T),re))),()=>{V.Ou(),T.asyncQueue.enqueueAndForget((async()=>uT(await lm(T),re)))}})(ug(_),v,d,f)}function yg(n,e){return(function(r,o){const a=new Qr;return r.asyncQueue.enqueueAndForget((async()=>KN(await rD(r),o,a))),a.promise})(ug(n),e)}function OT(n,e,t){const r=t.docs.get(e._key),o=new VT(n);return new Bs(n,o,e._key,r,new $l(t.hasPendingWrites,t.fromCache),e.converter)}function kD(){return new dg("serverTimestamp")}(function(e,t=!0){(function(o){Na=o})(eo),$s(new $i("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Gi(new QC(r.getProvider("auth-internal")),new JC(u,r.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(_.options.projectId,v)})(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),_r(wv,Iv,e),_r(wv,Iv,"esm2017")})();/**
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
 */const LT="firebasestorage.googleapis.com",xD="storageBucket",ND=120*1e3,DD=600*1e3;/**
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
 */class Rr extends Ar{constructor(e,t,r=0){super(Ip(e),`Firebase Storage: ${t} (${Ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Sr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Sr||(Sr={}));function Ip(n){return"storage/"+n}function bD(){const n="An unknown error occurred, please check the error payload for server response.";return new Rr(Sr.UNKNOWN,n)}function VD(){return new Rr(Sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OD(){return new Rr(Sr.CANCELED,"User canceled the upload/download.")}function LD(n){return new Rr(Sr.INVALID_URL,"Invalid URL '"+n+"'.")}function MD(n){return new Rr(Sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function WE(n){return new Rr(Sr.INVALID_ARGUMENT,n)}function MT(){return new Rr(Sr.APP_DELETED,"The Firebase app was deleted.")}function FD(n){return new Rr(Sr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class er{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=er.makeFromUrl(e,t)}catch{return new er(e,"")}if(r.path==="")return r;throw MD(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function _(le){le.path_=decodeURIComponent(le.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",D=new RegExp(`^https?://${w}/${v}/b/${o}/o${T}`,"i"),j={bucket:1,path:3},z=t===LT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",re=new RegExp(`^https?://${z}/${o}/${V}`,"i"),J=[{regex:d,indices:f,postModify:a},{regex:D,indices:j,postModify:_},{regex:re,indices:{bucket:1,path:2},postModify:_}];for(let le=0;le<J.length;le++){const we=J[le],me=we.regex.exec(e);if(me){const x=me[we.indices.bucket];let S=me[we.indices.path];S||(S=""),r=new er(x,S),we.postModify(r);break}}if(r==null)throw LD(e);return r}}class UD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jD(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let _=!1;function v(...V){_||(_=!0,e.apply(null,V))}function w(V){o=setTimeout(()=>{o=null,n(D,f())},V)}function T(){a&&clearTimeout(a)}function D(V,...re){if(_){T();return}if(V){T(),v.call(null,V,...re);return}if(f()||u){T(),v.call(null,V,...re);return}r<64&&(r*=2);let J;d===1?(d=2,J=0):J=(r+Math.random())*1e3,w(J)}let j=!1;function z(V){j||(j=!0,T(),!_&&(o!==null?(V||(d=2),clearTimeout(o),w(0)):V||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,z(!0)},t),z}function BD(n){n(!1)}/**
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
 */function zD(n){return n!==void 0}function KE(n,e,t,r){if(r<e)throw WE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw WE(`Invalid value for '${n}'. Expected ${t} or less.`)}function $D(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var Qh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Qh||(Qh={}));/**
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
 */function qD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class WD{constructor(e,t,r,o,a,u,d,f,_,v,w,T=!0,D=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=D,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,z)=>{this.resolve_=j,this.reject_=z,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new ah(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,_)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Qh.NO_ERROR,f=a.getStatus();if(!d||qD(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Qh.ABORT;r(!1,new ah(!1,null,v));return}const _=this.successCodes_.indexOf(f)!==-1;r(!0,new ah(_,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());zD(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=bD();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?MT():OD();u(f)}else{const f=VD();u(f)}};this.canceled_?t(!1,new ah(!1,null,!0)):this.backoffId_=jD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ah{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function KD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function QD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function XD(n,e,t,r,o,a,u=!0,d=!1){const f=$D(n.urlParams),_=n.url+f,v=Object.assign({},n.headers);return GD(v,e),KD(v,t),HD(v,a),QD(v,r),new WD(_,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
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
 */function YD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function JD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Xh{constructor(e,t){this._service=e,t instanceof er?this._location=t:this._location=er.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xh(e,t)}get root(){const e=new er(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JD(this._location.path)}get storage(){return this._service}get parent(){const e=YD(this._location.path);if(e===null)return null;const t=new er(this._location.bucket,e);return new Xh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw FD(e)}}function HE(n,e){const t=e==null?void 0:e[xD];return t==null?null:er.makeFromBucketSpec(t,n)}function ZD(n,e,t,r={}){n.host=`${e}:${t}`;const o=Zs(e);o&&(mm(`https://${n.host}/b`),gm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Pw(a,n.app.options.projectId))}class eb{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=LT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ND,this._maxUploadRetryTime=DD,this._requests=new Set,o!=null?this._bucket=er.makeFromBucketSpec(o,this._host):this._bucket=HE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=er.makeFromBucketSpec(this._url,e):this._bucket=HE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){KE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){KE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xh(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new UD(MT());{const u=XD(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const GE="@firebase/storage",QE="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="storage";function tb(n=vm(),e){n=_t(n);const r=ed(n,FT).getImmediate({identifier:e}),o=Sw("storage");return o&&nb(r,...o),r}function nb(n,e,t,r={}){ZD(n,e,t,r)}function rb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new eb(t,r,o,e,eo)}function ib(){$s(new $i(FT,rb,"PUBLIC").setMultipleInstances(!0)),_r(GE,QE,""),_r(GE,QE,"esm2017")}ib();const sb={apiKey:"AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",authDomain:"m3notes-9712f.firebaseapp.com",projectId:"m3notes-9712f",storageBucket:"m3notes-9712f.firebasestorage.app",messagingSenderId:"312791889198",appId:"1:312791889198:android:defc0d0536797e190bb6bf"},vg=Vw(sb),lh=$C(vg),Oa=oD(vg);tb(vg);aD(Oa).catch(n=>{n.code==="failed-precondition"?console.warn("Persistence failed: multiple tabs open"):n.code==="unimplemented"&&console.warn("Persistence not available in this browser")});const UT=G.createContext();function ob({children:n}){const[e,t]=G.useState(null),[r,o]=G.useState(!0);G.useEffect(()=>NP(lh,_=>{t(_),o(!1)}),[]);const a=(f,_)=>CP(lh,f,_),u=(f,_)=>PP(lh,f,_),d=()=>DP(lh);return W.jsx(UT.Provider,{value:{user:e,loading:r,login:a,register:u,logout:d},children:n})}const Lu=()=>G.useContext(UT);function ab(){const{login:n,register:e}=Lu(),[t,r]=G.useState(""),[o,a]=G.useState(""),[u,d]=G.useState(!1),[f,_]=G.useState(""),[v,w]=G.useState(!1),T=async D=>{D.preventDefault(),_(""),w(!0);try{u?await e(t.trim(),o):await n(t.trim(),o)}catch(j){_(j.message||"Erreur")}finally{w(!1)}};return W.jsx("div",{className:"login-page",children:W.jsxs("div",{className:"login-card",children:[W.jsx("h1",{children:"M3Notes"}),W.jsx("p",{className:"subtitle",children:u?"Créer un compte":"Connexion"}),W.jsxs("form",{onSubmit:T,children:[W.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:D=>r(D.target.value),required:!0,autoFocus:!0}),W.jsx("input",{type:"password",placeholder:"Mot de passe",value:o,onChange:D=>a(D.target.value),required:!0,minLength:6}),f&&W.jsx("p",{className:"error",children:f}),W.jsx("button",{type:"submit",disabled:v,children:v?"…":u?"S'inscrire":"Se connecter"})]}),W.jsx("button",{className:"switch",onClick:()=>d(!u),children:u?"Déjà un compte ? Se connecter":"Pas de compte ? S'inscrire"})]})})}/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=n=>{const e=ub(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},hb=G.createContext({}),db=()=>G.useContext(hb),fb=G.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...d},f)=>{const{size:_=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,color:T="currentColor",className:D=""}=db()??{},j=r??w?Number(t??v)*24/Number(e??_):t??v;return G.createElement("svg",{ref:f,...Tp,width:e??_??Tp.width,height:e??_??Tp.height,stroke:n??T,strokeWidth:j,className:jT("lucide",D,o),...!a&&!cb(d)&&{"aria-hidden":"true"},...d},[...u.map(([z,V])=>G.createElement(z,V)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(n,e)=>{const t=G.forwardRef(({className:r,...o},a)=>G.createElement(fb,{ref:a,iconNode:e,className:jT(`lucide-${lb(XE(n))}`,`lucide-${n}`,r),...o}));return t.displayName=XE(n),t};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],BT=nn("archive",pb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gb=nn("arrow-left",mb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],yb=nn("list-checks",_b);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Eb=nn("log-out",vb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ib=nn("moon",wb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],zT=nn("pin",Tb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],cm=nn("plus",Sb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rb=nn("square-check-big",Ab);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Cb=nn("square",Pb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],xb=nn("sticky-note",kb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Db=nn("sun",Nb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Vb=nn("tag",bb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],Lb=nn("text-align-start",Ob);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Fb=nn("trash-2",Mb);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],YE=nn("x",Ub),$T=G.createContext();function jb({children:n}){const[e,t]=G.useState(()=>{const o=localStorage.getItem("m3notes-theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light"),localStorage.setItem("m3notes-theme",e?"dark":"light")},[e]);const r=()=>t(o=>!o);return W.jsx($T.Provider,{value:{dark:e,toggle:r},children:n})}const Bb=()=>G.useContext($T),kd="notes";function zb(n,e,t){let r=vD(ST(Oa,kd),ED("userId","==",n),zE("isPinned","desc"),zE("updatedAt","desc"));return CD(r,o=>{let a=o.docs.map(u=>({id:u.id,...u.data()}));e||(a=a.filter(u=>!u.isArchived)),t(a)},o=>{console.error("Notes subscription error:",o),t([])})}async function $b(n,e){return(await PD(ST(Oa,kd),{...e,userId:n,isPinned:!1,isArchived:!1,labels:e.labels||[],imageUrls:e.imageUrls||[],checklist:e.checklist||[],isChecklist:e.isChecklist||!1,createdAt:kD(),updatedAt:ze.now()})).id}async function qb(n,e){await AD(Td(Oa,kd,n),{...e,updatedAt:ze.now()})}async function Wb(n){await RD(Td(Oa,kd,n))}const Kb={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function JE({note:n,onClick:e,onLabelClick:t}){var u;const r=Kb[n.color]||"note-default",o=n.checklist||[],a=o.filter(d=>d.isChecked).length;return W.jsxs("div",{className:`note-card ${r}`,onClick:e,children:[n.isPinned&&W.jsx(zT,{className:"pin",size:16,fill:"currentColor"}),n.title&&W.jsx("h3",{className:"note-title",children:n.title}),n.isChecklist?W.jsxs(W.Fragment,{children:[o.length>0&&W.jsxs("span",{className:"checklist-count",children:[a,"/",o.length]}),W.jsxs("ul",{className:"checklist",children:[o.slice(0,6).map((d,f)=>W.jsxs("li",{className:d.isChecked?"checked":"",children:[d.isChecked?W.jsx(Rb,{size:14}):W.jsx(Cb,{size:14})," ",d.text]},f)),o.length>6&&W.jsxs("li",{className:"more",children:["+",o.length-6,"…"]})]})]}):n.content&&W.jsx("p",{className:"note-content",children:n.content}),((u=n.labels)==null?void 0:u.length)>0&&W.jsx("div",{className:"labels",children:n.labels.slice(0,3).map(d=>W.jsx("span",{className:"label",onClick:f=>{t&&(f.stopPropagation(),t(d))},children:d},d))})]})}const Hb=5e3;function Gb(){const{user:n,logout:e}=Lu(),{dark:t,toggle:r}=Bb(),o=pm(),a=Jh(),[u,d]=G.useState([]),[f,_]=G.useState(!1),[v,w]=G.useState(""),[T,D]=G.useState(!0),[j,z]=G.useState(null),[V,re]=G.useState(null),te=G.useRef(null),J=G.useRef(null);G.useEffect(()=>n?(D(!0),zb(n.uid,f,R=>{d(R),D(!1)})):void 0,[n,f]),G.useEffect(()=>{var R;const C=(R=a.state)==null?void 0:R.deletedNoteId;C&&J.current!==a.key&&(J.current=a.key,z(C),te.current=setTimeout(()=>{Wb(C).catch(Ye=>console.error("Delete error:",Ye)),z(null)},Hb),o(a.pathname,{replace:!0,state:{}}))},[a,o]),G.useEffect(()=>()=>{te.current&&clearTimeout(te.current)},[]);const le=C=>{re(R=>R===C?null:C)},we=()=>{te.current&&clearTimeout(te.current),z(null)},me=u.filter(C=>C.id!==j),x=[...new Set(me.flatMap(C=>C.labels||[]))].sort(),S=V?me.filter(C=>(C.labels||[]).includes(V)):me,P=v.trim()?S.filter(C=>(C.title||"").toLowerCase().includes(v.toLowerCase())||(C.content||"").toLowerCase().includes(v.toLowerCase())||(C.labels||[]).some(R=>R.toLowerCase().includes(v.toLowerCase()))):S,N=P.filter(C=>C.isPinned),O=P.filter(C=>!C.isPinned);return W.jsxs("div",{className:"home",children:[W.jsxs("header",{className:"topbar",children:[W.jsx("div",{className:"topbar-left",children:W.jsx("h1",{children:f?"Archives":"M3Notes"})}),W.jsx("div",{className:"search-box",children:W.jsx("input",{type:"search",placeholder:"Rechercher…",value:v,onChange:C=>w(C.target.value)})}),W.jsxs("div",{className:"topbar-actions",children:[W.jsx("button",{onClick:()=>_(!f),title:"Archives",children:f?W.jsx(xb,{size:20}):W.jsx(BT,{size:20})}),W.jsx("button",{onClick:r,title:"Thème",children:t?W.jsx(Db,{size:20}):W.jsx(Ib,{size:20})}),W.jsx("button",{onClick:e,title:"Déconnexion",children:W.jsx(Eb,{size:20})})]})]}),x.length>0&&W.jsx("div",{className:"label-filter-bar",children:x.map(C=>W.jsx("button",{className:`label-filter-chip ${V===C?"active":""}`,onClick:()=>le(C),children:C},C))}),W.jsx("main",{className:"notes-area",children:T?W.jsx("p",{className:"empty",children:"Chargement…"}):P.length===0?W.jsx("p",{className:"empty",children:f?"Aucune note archivée":`Aucune note
Clique sur + pour commencer`}):W.jsxs(W.Fragment,{children:[N.length>0&&W.jsxs("section",{className:"notes-section",children:[O.length>0&&W.jsx("h2",{className:"section-title",children:"Épinglées"}),W.jsx("div",{className:"notes-grid",children:N.map(C=>W.jsx(JE,{note:C,onClick:()=>o(`/note/${C.id}`),onLabelClick:le},C.id))})]}),O.length>0&&W.jsxs("section",{className:"notes-section",children:[N.length>0&&W.jsx("h2",{className:"section-title",children:"Autres"}),W.jsx("div",{className:"notes-grid",children:O.map(C=>W.jsx(JE,{note:C,onClick:()=>o(`/note/${C.id}`),onLabelClick:le},C.id))})]})]})}),j&&W.jsxs("div",{className:"snackbar",children:[W.jsx("span",{children:"Note supprimée"}),W.jsx("button",{onClick:we,children:"Annuler"})]}),W.jsx("button",{className:"fab",onClick:()=>o("/note/new"),title:"Nouvelle note",children:W.jsx(cm,{size:26})})]})}const Ft=[];for(let n=0;n<256;++n)Ft.push((n+256).toString(16).slice(1));function Qb(n,e=0){return(Ft[n[e+0]]+Ft[n[e+1]]+Ft[n[e+2]]+Ft[n[e+3]]+"-"+Ft[n[e+4]]+Ft[n[e+5]]+"-"+Ft[n[e+6]]+Ft[n[e+7]]+"-"+Ft[n[e+8]]+Ft[n[e+9]]+"-"+Ft[n[e+10]]+Ft[n[e+11]]+Ft[n[e+12]]+Ft[n[e+13]]+Ft[n[e+14]]+Ft[n[e+15]]).toLowerCase()}let Sp;const Xb=new Uint8Array(16);function Yb(){if(!Sp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Sp=crypto.getRandomValues.bind(crypto)}return Sp(Xb)}const Jb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ZE={randomUUID:Jb};function ew(n,e,t){var o;if(ZE.randomUUID&&!n)return ZE.randomUUID();n=n||{};const r=n.random??((o=n.rng)==null?void 0:o.call(n))??Yb();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Qb(r)}function Zb({open:n,title:e="Confirmer",message:t,confirmLabel:r="Confirmer",cancelLabel:o="Annuler",danger:a=!1,onConfirm:u,onCancel:d}){return n?W.jsx("div",{className:"confirm-overlay",onClick:d,children:W.jsxs("div",{className:"confirm-box",onClick:f=>f.stopPropagation(),children:[W.jsx("h3",{children:e}),t&&W.jsx("p",{children:t}),W.jsxs("div",{className:"confirm-actions",children:[W.jsx("button",{className:"confirm-cancel",onClick:d,children:o}),W.jsx("button",{className:`confirm-ok ${a?"danger":""}`,onClick:u,children:r})]})]})}):null}const e2=[{key:"DEFAULT",label:"Blanc"},{key:"RED",label:"Rouge"},{key:"ORANGE",label:"Orange"},{key:"YELLOW",label:"Jaune"},{key:"GREEN",label:"Vert"},{key:"TEAL",label:"Turquoise"},{key:"BLUE",label:"Bleu"},{key:"DARK_BLUE",label:"Bleu foncé"},{key:"PURPLE",label:"Violet"},{key:"PINK",label:"Rose"},{key:"BROWN",label:"Marron"},{key:"GRAY",label:"Gris"}],tw={DEFAULT:"note-default",RED:"note-red",ORANGE:"note-orange",YELLOW:"note-yellow",GREEN:"note-green",TEAL:"note-teal",BLUE:"note-blue",DARK_BLUE:"note-darkblue",PURPLE:"note-purple",PINK:"note-pink",BROWN:"note-brown",GRAY:"note-gray"};function t2(){const{id:n}=b1(),e=n==="new",{user:t}=Lu(),r=pm(),[o,a]=G.useState(""),[u,d]=G.useState(""),[f,_]=G.useState("DEFAULT"),[v,w]=G.useState(!1),[T,D]=G.useState(!1),[j,z]=G.useState(!1),[V,re]=G.useState([]),[te,J]=G.useState(""),[le,we]=G.useState(!e),[me,x]=G.useState(!1),[S,P]=G.useState([]),[N,O]=G.useState(""),[C,R]=G.useState(!1);G.useEffect(()=>{e||!t||SD(Td(Oa,"notes",n)).then(Z=>{if(Z.exists()){const he=Z.data();a(he.title||""),d(he.content||""),_(he.color||"DEFAULT"),w(he.isPinned||!1),D(he.isArchived||!1),z(he.isChecklist||!1),re(he.checklist||[]),P(he.labels||[])}we(!1)})},[n,e,t]);const Ye=Z=>{const he=Z.trim();he&&(re([...V,{id:ew(),text:he,isChecked:!1}]),J(""))},Rt=(Z,he)=>{re(V.map(De=>De.id===Z?{...De,text:he}:De))},Pt=Z=>{re(V.map(he=>he.id===Z?{...he,isChecked:!he.isChecked}:he))},$e=Z=>{re(V.filter(he=>he.id!==Z))},oe=()=>{const Z=N.trim();Z&&(S.includes(Z)||P([...S,Z]),O(""))},Ee=Z=>{P(S.filter(he=>he!==Z))},ue=()=>{if(u.trim()&&V.length===0){const Z=u.split(`
`).filter(he=>he.trim());re(Z.map(he=>({id:ew(),text:he.trim(),isChecked:!1}))),d("")}z(!0)},L=()=>{V.length>0&&!u.trim()&&d(V.map(Z=>Z.text).join(`
`)),z(!1)},H=async()=>{if(!t)return;const Z=V.filter(Fe=>Fe.text.trim()),he={title:o.trim(),content:j?"":u.trim(),color:f,isPinned:v,isArchived:T,isChecklist:j,checklist:j?Z:[],labels:S},De=!he.title&&!he.content&&(!j||Z.length===0);if(e){if(De){r("/");return}await $b(t.uid,he)}else await qb(n,he);r("/")},ye=()=>{e||x(!0)},ke=()=>{r("/",{state:{deletedNoteId:n}})};return le?W.jsx("div",{className:"note-page loading",children:"Chargement…"}):W.jsxs("div",{className:`note-page ${tw[f]||"note-default"}`,children:[W.jsxs("header",{className:"note-toolbar",children:[W.jsx("button",{className:"icon-btn",onClick:H,title:"Retour",children:W.jsx(gb,{size:22})}),W.jsxs("div",{className:"toolbar-actions",children:[W.jsx("button",{className:"icon-btn",onClick:j?L:ue,title:j?"Passer en texte":"Passer en checklist",children:j?W.jsx(Lb,{size:20}):W.jsx(yb,{size:20})}),W.jsx("button",{className:`icon-btn ${C?"active":""}`,onClick:()=>R(!C),title:"Labels",children:W.jsx(Vb,{size:20})}),W.jsx("button",{className:`icon-btn ${v?"active":""}`,onClick:()=>w(!v),title:"Épingler",children:W.jsx(zT,{size:20,fill:v?"currentColor":"none"})}),W.jsx("button",{className:`icon-btn ${T?"active":""}`,onClick:()=>D(!T),title:"Archiver",children:W.jsx(BT,{size:20})}),!e&&W.jsx("button",{className:"icon-btn",onClick:ye,title:"Supprimer",children:W.jsx(Fb,{size:20})})]})]}),W.jsx("div",{className:"color-picker",children:e2.map(Z=>W.jsx("button",{className:`color-dot ${tw[Z.key]} ${f===Z.key?"selected":""}`,onClick:()=>_(Z.key),title:Z.label},Z.key))}),W.jsx("input",{className:"note-title-input",placeholder:"Titre",value:o,onChange:Z=>a(Z.target.value),autoFocus:e}),(C||S.length>0)&&W.jsxs("div",{className:"labels-editor",children:[S.map(Z=>W.jsxs("span",{className:"label-chip",children:[Z,W.jsx("button",{onClick:()=>Ee(Z),title:"Retirer",children:W.jsx(YE,{size:12})})]},Z)),C&&W.jsxs("div",{className:"label-input-row",children:[W.jsx("input",{className:"label-input",value:N,onChange:Z=>O(Z.target.value),onKeyDown:Z=>{Z.key==="Enter"&&(Z.preventDefault(),oe())},onBlur:()=>oe(),placeholder:"Nouveau label",autoFocus:!0}),W.jsx("button",{type:"button",className:"label-add-btn",onMouseDown:Z=>Z.preventDefault(),onClick:oe,children:W.jsx(cm,{size:16})})]})]}),j?W.jsxs("div",{className:"checklist-editor",children:[V.map(Z=>W.jsxs("div",{className:`checklist-row ${Z.isChecked?"checked":""}`,children:[W.jsx("button",{className:"check-toggle",onClick:()=>Pt(Z.id),children:W.jsx("span",{className:"check-box"})}),W.jsx("input",{className:"checklist-item-input",value:Z.text,onChange:he=>Rt(Z.id,he.target.value),placeholder:"Élément"}),W.jsx("button",{className:"remove-item",onClick:()=>$e(Z.id),title:"Supprimer",children:W.jsx(YE,{size:16})})]},Z.id)),W.jsxs("div",{className:"checklist-row new-item-row",children:[W.jsx(cm,{size:18,className:"add-icon"}),W.jsx("input",{className:"checklist-item-input",value:te,onChange:Z=>J(Z.target.value),onKeyDown:Z=>{Z.key==="Enter"&&(Z.preventDefault(),Ye(te))},placeholder:"Ajouter un élément"})]})]}):W.jsx("textarea",{className:"note-content-input",placeholder:"Note",value:u,onChange:Z=>d(Z.target.value),rows:12}),W.jsx(Zb,{open:me,title:"Supprimer cette note ?",message:"Cette action est definitive.",confirmLabel:"Supprimer",danger:!0,onConfirm:ke,onCancel:()=>x(!1)})]})}function nw({children:n}){const{user:e,loading:t}=Lu();return t?W.jsx("div",{className:"loading-screen",children:"Chargement…"}):e?n:W.jsx(Rp,{to:"/login",replace:!0})}function n2(){const{user:n,loading:e}=Lu();return e?W.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"var(--bg)",color:"var(--text)"},children:"Chargement…"}):W.jsxs(Q1,{children:[W.jsx(Ll,{path:"/login",element:n?W.jsx(Rp,{to:"/",replace:!0}):W.jsx(ab,{})}),W.jsx(Ll,{path:"/",element:W.jsx(nw,{children:W.jsx(Gb,{})})}),W.jsx(Ll,{path:"/note/:id",element:W.jsx(nw,{children:W.jsx(t2,{})})}),W.jsx(Ll,{path:"*",element:W.jsx(Rp,{to:"/",replace:!0})})]})}r1.createRoot(document.getElementById("root")).render(W.jsx(iw.StrictMode,{children:W.jsx(J1,{basename:"/m3notes-web",children:W.jsx(jb,{children:W.jsx(ob,{children:W.jsx(n2,{})})})})}));
