import{L as ec,I as Je,_ as tc,C as nc,r as ui,c as rc,F as sc,f as ve,n as ic,l as oc,y as ac,k as ko,p as uc,u as cc,o as lc,z as hc,A as Fo,h as Jn,d as Ee,M as dc,S as fc,X as mc,B as _c,D as qr,G as gc,H as pc,W as kn,J as yc,K as ci,N as Ic,O as Tc,P as Oo}from"./firebase-core-CqpQgNwS.js";const li="@firebase/firestore",hi="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new ec("@firebase/firestore");function Tt(){return rt.logLevel}function g(r,...e){if(rt.logLevel<=ve.DEBUG){const t=e.map(Is);rt.debug(`Firestore (${Bt}): ${r}`,...t)}}function se(r,...e){if(rt.logLevel<=ve.ERROR){const t=e.map(Is);rt.error(`Firestore (${Bt}): ${r}`,...t)}}function Ae(r,...e){if(rt.logLevel<=ve.WARN){const t=e.map(Is);rt.warn(`Firestore (${Bt}): ${r}`,...t)}}function Is(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Mo(r,n,t)}function Mo(r,e,t){let n=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw se(n),new Error(n)}function w(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Mo(e,s,n)}function V(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends sc{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ec{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(X.UNAUTHENTICATED)))}shutdown(){}}class Ac{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wc{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){w(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ve,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ve)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(w(typeof n.accessToken=="string",31837,{l:n}),new Lo(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return w(e===null||typeof e=="string",2055,{h:e}),new X(e)}}class vc{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=X.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Rc{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new vc(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(X.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class di{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vc{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rc(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){w(this.o===void 0,3512);const n=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new di(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(w(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new di(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function Uo(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Pc(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function R(r,e){return r<e?-1:r>e?1:0}function Qr(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return R(n,s);{const i=Uo(),o=bc(i.encode(fi(r,t)),i.encode(fi(e,t)));return o!==0?o:R(n,s)}}t+=n>65535?2:1}return R(r.length,e.length)}function fi(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function bc(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return R(r[t],e[t]);return R(r.length,e.length)}function Pt(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function qo(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="__name__";class ge{constructor(e,t,n){t===void 0?t=0:t>e.length&&E(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&E(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ge?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=ge.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return R(e.length,t.length)}static compareSegments(e,t){const n=ge.isNumericId(e),s=ge.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?ge.extractNumericId(e).compare(ge.extractNumericId(t)):Qr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Je.fromString(e.substring(4,e.length-2))}}class N extends ge{construct(e,t,n){return new N(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new N(t)}static emptyPath(){return new N([])}}const Sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends ge{construct(e,t,n){return new U(e,t,n)}static isValidIdentifier(e){return Sc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mi}static keyField(){return new U([mi])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(N.fromString(e))}static fromName(e){return new y(N.fromString(e).popFirst(5))}static empty(){return new y(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&N.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return N.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new N(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Dc(r,e,t,n){if(e===!0&&n===!0)throw new p(m.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function _i(r){if(!y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gi(r){if(y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zo(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function _r(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":E(12329,{type:typeof r})}function ie(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_r(r);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function $(r,e){const t={typeString:r};return e&&(t.value=e),t}function wn(r,e){if(!zo(r))throw new p(m.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new p(m.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=-62135596800,yi=1e6;class k{static now(){return k.fromMillis(Date.now())}static fromDate(e){return k.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*yi);return new k(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pi)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yi}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:k._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wn(e,k._jsonSchema))return new k(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}k._jsonSchemaVersion="firestore/timestamp/1.0",k._jsonSchema={type:$("string",k._jsonSchemaVersion),seconds:$("number"),nanoseconds:$("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{static fromTimestamp(e){return new v(e)}static min(){return new v(new k(0,0))}static max(){return new v(new k(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ln=-1;class Zn{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Wr(r){return r.fields.find((e=>e.kind===2))}function je(r){return r.fields.filter((e=>e.kind!==2))}Zn.UNKNOWN_ID=-1;class Bn{constructor(e,t){this.fieldPath=e,this.kind=t}}class hn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new hn(0,le.min())}}function Cc(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=v.fromTimestamp(n===1e9?new k(t+1,0):new k(t,n));return new le(s,y.empty(),e)}function Ko(r){return new le(r.readTime,r.key,ln)}class le{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new le(v.min(),y.empty(),ln)}static max(){return new le(v.max(),y.empty(),ln)}}function Es(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(r.documentKey,e.documentKey),t!==0?t:R(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jo{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(r){if(r.code!==m.FAILED_PRECONDITION||r.message!==Go)throw r;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new d(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof d?t:d.resolve(t)}catch(t){return d.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):d.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):d.reject(t)}static resolve(e){return new d(((t,n)=>{t(e)}))}static reject(e){return new d(((t,n)=>{n(e)}))}static waitFor(e){return new d(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=d.resolve(!1);for(const n of e)t=t.next((s=>s?d.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new d(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>s(l)))}}))}static doWhile(e,t){return new d(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="SimpleDb";class gr{static open(e,t,n,s){try{return new gr(t,e.transaction(s,n))}catch(i){throw new tn(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ve,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new tn(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=As(n.target.error);this.S.reject(new tn(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(g(ue,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Nc(t)}}class Oe{static delete(e){return g(ue,"Removing database:",e),Qe(Ic().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Tc())return!1;if(Oe.F())return!0;const e=Jn(),t=Oe.M(e),n=0<t&&t<10,s=$o(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Oe.M(Jn())===12.2&&se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(g(ue,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new tn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new tn(e,o))},s.onupgradeneeded=i=>{g(ue,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next((()=>{g(ue,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const n=t.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var n;t.newVersion===null&&(Ae('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=gr.open(this.db,e,i?"readonly":"readwrite",n),u=s(a).next((c=>(a.v(),c))).catch((c=>(a.abort(c),d.reject(c)))).toPromise();return u.catch((()=>{})),await a.D,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(g(ue,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function $o(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class xc{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Qe(this.$.delete())}}class tn extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ze(r){return r.name==="IndexedDbTransactionError"}class Nc{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(g(ue,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(g(ue,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Qe(n)}add(e){return g(ue,"ADD",this.store.name,e,e),Qe(this.store.add(e))}get(e){return Qe(this.store.get(e)).next((t=>(t===void 0&&(t=null),g(ue,"GET",this.store.name,e,t),t)))}delete(e){return g(ue,"DELETE",this.store.name,e),Qe(this.store.delete(e))}count(){return g(ue,"COUNT",this.store.name),Qe(this.store.count())}j(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new d(((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(n),o=[];return this.J(i,((a,u)=>{o.push(u)})).next((()=>o))}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new d(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}Y(e,t){g(ue,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const s=this.cursor(n);return this.J(s,((i,o,a)=>a.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.J(s,t)}ee(e){const t=this.cursor({});return new d(((n,s)=>{t.onerror=i=>{const o=As(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}J(e,t){const n=[];return new d(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new xc(a),c=t(a.primaryKey,a.value,u);if(c instanceof d){const l=c.catch((h=>(u.done(),d.reject(h))));n.push(l)}u.isDone?s():u.W===null?a.continue():a.continue(u.W)}})).next((()=>d.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Qe(r){return new d(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=As(n.target.error);t(s)}}))}let Ii=!1;function As(r){const e=Oe.M(Jn());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ii||(Ii=!0,setTimeout((()=>{throw n}),0)),n}}return r}const nn="IndexBackfiller";class kc{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){g(nn,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();g(nn,`Documents written: ${t}`)}catch(t){ze(t)?g(nn,"Ignoring IndexedDB error during index backfill: ",t):await lt(t)}await this.ne(6e4)}))}}class Fc{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const n=new Set;let s=t,i=!0;return d.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return g(nn,`Processing collection: ${o}`),this.se(e,o,s).next((a=>{s-=a,n.add(o)}));i=!1})))).next((()=>t-s))}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.oe(s,i))).next((a=>(g(nn,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}oe(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=Ko(i);Es(o,n)>0&&(n=o)})),new le(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class de{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}de.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=-1;function pr(r){return r==null}function dn(r){return r===0&&1/r==-1/0}function Oc(r){return typeof r=="number"&&Number.isInteger(r)&&!dn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="";function re(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ti(e)),e=Mc(r.get(t),e);return Ti(e)}function Mc(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case er:t+="";break;default:t+=i}}return t}function Ti(r){return r+er+""}function pe(r){const e=r.length;if(w(e>=2,64408,{path:r}),e===2)return w(r.charAt(0)===er&&r.charAt(1)==="",56145,{path:r}),N.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(er,i);switch((o<0||o>t)&&E(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:E(61167,{path:r})}i=o+2}return new N(n)}/**
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
 */const $e="remoteDocuments",vn="owner",mt="owner",fn="mutationQueues",Lc="userId",me="mutations",Ei="batchId",Ye="userMutationsIndex",Ai=["userId","batchId"];/**
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
 */function zn(r,e){return[r,re(e)]}function Qo(r,e,t){return[r,re(e),t]}const Uc={},bt="documentMutations",tr="remoteDocumentsV14",qc=["prefixPath","collectionGroup","readTime","documentId"],Kn="documentKeyIndex",Bc=["prefixPath","collectionGroup","documentId"],Wo="collectionGroupIndex",zc=["collectionGroup","readTime","prefixPath","documentId"],mn="remoteDocumentGlobal",Hr="remoteDocumentGlobalKey",St="targets",Ho="queryTargetsIndex",Kc=["canonicalId","targetId"],Dt="targetDocuments",Gc=["targetId","path"],ws="documentTargetsIndex",jc=["path","targetId"],nr="targetGlobalKey",et="targetGlobal",_n="collectionParents",$c=["collectionId","parent"],Ct="clientMetadata",Qc="clientId",yr="bundles",Wc="bundleId",Ir="namedQueries",Hc="name",vs="indexConfiguration",Xc="indexId",Xr="collectionGroupIndex",Yc="collectionGroup",rn="indexState",Jc=["indexId","uid"],Xo="sequenceNumberIndex",Zc=["uid","sequenceNumber"],sn="indexEntries",el=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Yo="documentKeyIndex",tl=["indexId","uid","orderedDocumentKey"],Tr="documentOverlays",nl=["userId","collectionPath","documentId"],Yr="collectionPathOverlayIndex",rl=["userId","collectionPath","largestBatchId"],Jo="collectionGroupOverlayIndex",sl=["userId","collectionGroup","largestBatchId"],Rs="globals",il="name",Zo=[fn,me,bt,$e,St,vn,et,Dt,Ct,mn,_n,yr,Ir],ol=[...Zo,Tr],ea=[fn,me,bt,tr,St,vn,et,Dt,Ct,mn,_n,yr,Ir,Tr],ta=ea,Vs=[...ta,vs,rn,sn],al=Vs,na=[...Vs,Rs],ul=na;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends jo{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function W(r,e){const t=V(r);return Oe.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ke(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ra(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.comparator=e,this.root=t||Y.EMPTY}insert(e,t){return new L(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Y.BLACK,null,null))}remove(e){return new L(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Y.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fn(this.root,e,this.comparator,!0)}}class Fn{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Y{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Y.RED,this.left=s??Y.EMPTY,this.right=i??Y.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Y(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Y.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Y.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw E(27949);return e+(this.isRed()?0:1)}}Y.EMPTY=null,Y.RED=!0,Y.BLACK=!1;Y.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Y(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.comparator=e,this.data=new L(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vi(this.data.getIterator())}getIteratorFrom(e){return new vi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof O)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new O(this.comparator);return t.data=e,t}}class vi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function _t(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.fields=e,e.sort(U.comparator)}static empty(){return new ae([])}unionWith(e){let t=new O(U.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ae(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pt(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class sa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sa("Invalid base64 string: "+i):i}})(e);return new Q(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Q(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const cl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(r){if(w(!!r,39018),typeof r=="string"){let e=0;const t=cl.exec(r);if(w(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:M(r.seconds),nanos:M(r.nanos)}}function M(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function be(r){return typeof r=="string"?Q.fromBase64String(r):Q.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="server_timestamp",oa="__type__",aa="__previous_value__",ua="__local_write_time__";function Ps(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[oa])===null||t===void 0?void 0:t.stringValue)===ia}function Er(r){const e=r.mapValue.fields[aa];return Ps(e)?Er(e):e}function gn(r){const e=Pe(r.mapValue.fields[ua].timestampValue);return new k(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n,s,i,o,a,u,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l}}const rr="(default)";class st{constructor(e,t){this.projectId=e,this.database=t||rr}static empty(){return new st("","")}get isDefaultDatabase(){return this.database===rr}isEqual(e){return e instanceof st&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="__type__",ca="__max__",Fe={mapValue:{fields:{__type__:{stringValue:ca}}}},Ss="__vector__",xt="value",Gn={nullValue:"NULL_VALUE"};function Le(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ps(r)?4:la(r)?9007199254740991:Ar(r)?10:11:E(28295,{value:r})}function we(r,e){if(r===e)return!0;const t=Le(r);if(t!==Le(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return gn(r).isEqual(gn(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pe(s.timestampValue),a=Pe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return be(s.bytesValue).isEqual(be(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=M(s.doubleValue),a=M(i.doubleValue);return o===a?dn(o)===dn(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return Pt(r.arrayValue.values||[],e.arrayValue.values||[],we);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wi(o)!==wi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!we(o[u],a[u])))return!1;return!0})(r,e);default:return E(52216,{left:r})}}function pn(r,e){return(r.values||[]).find((t=>we(t,e)))!==void 0}function Ue(r,e){if(r===e)return 0;const t=Le(r),n=Le(e);if(t!==n)return R(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=M(i.integerValue||i.doubleValue),u=M(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,e);case 3:return Ri(r.timestampValue,e.timestampValue);case 4:return Ri(gn(r),gn(e));case 5:return Qr(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=be(i),u=be(o);return a.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=R(a[c],u[c]);if(l!==0)return l}return R(a.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=R(M(i.latitude),M(o.latitude));return a!==0?a:R(M(i.longitude),M(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Vi(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var a,u,c,l;const h=i.fields||{},f=o.fields||{},_=(a=h[xt])===null||a===void 0?void 0:a.arrayValue,I=(u=f[xt])===null||u===void 0?void 0:u.arrayValue,A=R(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((l=I==null?void 0:I.values)===null||l===void 0?void 0:l.length)||0);return A!==0?A:Vi(_,I)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Fe.mapValue&&o===Fe.mapValue)return 0;if(i===Fe.mapValue)return 1;if(o===Fe.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=Qr(u[h],l[h]);if(f!==0)return f;const _=Ue(a[u[h]],c[l[h]]);if(_!==0)return _}return R(u.length,l.length)})(r.mapValue,e.mapValue);default:throw E(23264,{le:t})}}function Ri(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return R(r,e);const t=Pe(r),n=Pe(e),s=R(t.seconds,n.seconds);return s!==0?s:R(t.nanos,n.nanos)}function Vi(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ue(t[s],n[s]);if(i)return i}return R(t.length,n.length)}function Nt(r){return Zr(r)}function Zr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Pe(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return be(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return y.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Zr(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Zr(t.fields[o])}`;return s+"}"})(r.mapValue):E(61005,{value:r})}function jn(r){switch(Le(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Er(r);return e?16+jn(e):16;case 5:return 2*r.stringValue.length;case 6:return be(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+jn(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Ke(n.fields,((i,o)=>{s+=i.length+jn(o)})),s})(r.mapValue);default:throw E(13486,{value:r})}}function yn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function es(r){return!!r&&"integerValue"in r}function In(r){return!!r&&"arrayValue"in r}function Pi(r){return!!r&&"nullValue"in r}function bi(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $n(r){return!!r&&"mapValue"in r}function Ar(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[bs])===null||t===void 0?void 0:t.stringValue)===Ss}function on(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ke(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=on(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=on(r.arrayValue.values[t]);return e}return Object.assign({},r)}function la(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ca}const ha={mapValue:{fields:{[bs]:{stringValue:Ss},[xt]:{arrayValue:{}}}}};function hl(r){return"nullValue"in r?Gn:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?yn(st.empty(),y.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ar(r)?ha:{mapValue:{}}:E(35942,{value:r})}function dl(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?yn(st.empty(),y.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?ha:"mapValue"in r?Ar(r)?{mapValue:{}}:Fe:E(61959,{value:r})}function Si(r,e){const t=Ue(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Di(r,e){const t=Ue(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.value=e}static empty(){return new te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$n(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=on(t)}setAll(e){let t=U.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=on(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());$n(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];$n(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Ke(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new te(on(this.value))}}function da(r){const e=[];return Ke(r.fields,((t,n)=>{const s=new U([t]);if($n(n)){const i=da(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new ae(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new z(e,0,v.min(),v.min(),v.min(),te.empty(),0)}static newFoundDocument(e,t,n,s){return new z(e,1,t,v.min(),n,s,0)}static newNoDocument(e,t){return new z(e,2,t,v.min(),v.min(),te.empty(),0)}static newUnknownDocument(e,t){return new z(e,3,t,v.min(),v.min(),te.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(v.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=v.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kt{constructor(e,t){this.position=e,this.inclusive=t}}function Ci(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),t.key):n=Ue(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function xi(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!we(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tn{constructor(e,t="asc"){this.field=e,this.dir=t}}function fl(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class fa{}class D extends fa{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ml(e,t,n):t==="array-contains"?new pl(e,n):t==="in"?new Ia(e,n):t==="not-in"?new yl(e,n):t==="array-contains-any"?new Il(e,n):new D(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new _l(e,n):new gl(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ue(t,this.value)):t!==null&&Le(this.value)===Le(t)&&this.matchesComparison(Ue(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class F extends fa{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new F(e,t)}matches(e){return Ft(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ft(r){return r.op==="and"}function ts(r){return r.op==="or"}function Ds(r){return ma(r)&&Ft(r)}function ma(r){for(const e of r.filters)if(e instanceof F)return!1;return!0}function ns(r){if(r instanceof D)return r.field.canonicalString()+r.op.toString()+Nt(r.value);if(Ds(r))return r.filters.map((e=>ns(e))).join(",");{const e=r.filters.map((t=>ns(t))).join(",");return`${r.op}(${e})`}}function _a(r,e){return r instanceof D?(function(n,s){return s instanceof D&&n.op===s.op&&n.field.isEqual(s.field)&&we(n.value,s.value)})(r,e):r instanceof F?(function(n,s){return s instanceof F&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&_a(o,s.filters[a])),!0):!1})(r,e):void E(19439)}function ga(r,e){const t=r.filters.concat(e);return F.create(t,r.op)}function pa(r){return r instanceof D?(function(t){return`${t.field.canonicalString()} ${t.op} ${Nt(t.value)}`})(r):r instanceof F?(function(t){return t.op.toString()+" {"+t.getFilters().map(pa).join(" ,")+"}"})(r):"Filter"}class ml extends D{constructor(e,t,n){super(e,t,n),this.key=y.fromName(n.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class _l extends D{constructor(e,t){super(e,"in",t),this.keys=ya("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class gl extends D{constructor(e,t){super(e,"not-in",t),this.keys=ya("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ya(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>y.fromName(n.referenceValue)))}class pl extends D{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return In(t)&&pn(t.arrayValue,this.value)}}class Ia extends D{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pn(this.value.arrayValue,t)}}class yl extends D{constructor(e,t){super(e,"not-in",t)}matches(e){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!pn(this.value.arrayValue,t)}}class Il extends D{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!In(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>pn(this.value.arrayValue,n)))}}/**
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
 */class Tl{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function rs(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Tl(r,e,t,n,s,i,o)}function it(r){const e=V(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ns(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Nt(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Nt(n))).join(",")),e.Pe=t}return e.Pe}function Rn(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!fl(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!_a(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!xi(r.startAt,e.startAt)&&xi(r.endAt,e.endAt)}function sr(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ir(r,e){return r.filters.filter((t=>t instanceof D&&t.field.isEqual(e)))}function Ni(r,e,t){let n=Gn,s=!0;for(const i of ir(r,e)){let o=Gn,a=!0;switch(i.op){case"<":case"<=":o=hl(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Gn}Si({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Si({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function ki(r,e,t){let n=Fe,s=!0;for(const i of ir(r,e)){let o=Fe,a=!0;switch(i.op){case">=":case">":o=dl(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Fe}Di({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Di({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function El(r,e,t,n,s,i,o,a){return new zt(r,e,t,n,s,i,o,a)}function Vn(r){return new zt(r)}function Fi(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ta(r){return r.collectionGroup!==null}function an(r){const e=V(r);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new O(U.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Tn(i,n))})),t.has(U.keyField().canonicalString())||e.Te.push(new Tn(U.keyField(),n))}return e.Te}function fe(r){const e=V(r);return e.Ie||(e.Ie=Al(e,an(r))),e.Ie}function Al(r,e){if(r.limitType==="F")return rs(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Tn(s.field,i)}));const t=r.endAt?new kt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new kt(r.startAt.position,r.startAt.inclusive):null;return rs(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ss(r,e){const t=r.filters.concat([e]);return new zt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function is(r,e,t){return new zt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function wr(r,e){return Rn(fe(r),fe(e))&&r.limitType===e.limitType}function Ea(r){return`${it(fe(r))}|lt:${r.limitType}`}function Et(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>pa(s))).join(", ")}]`),pr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>Nt(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>Nt(s))).join(",")),`Target(${n})`})(fe(r))}; limitType=${r.limitType})`}function Pn(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of an(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const c=Ci(o,a,u);return o.inclusive?c<=0:c<0})(n.startAt,an(n),s)||n.endAt&&!(function(o,a,u){const c=Ci(o,a,u);return o.inclusive?c>=0:c>0})(n.endAt,an(n),s))})(r,e)}function wl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Aa(r){return(e,t)=>{let n=!1;for(const s of an(r)){const i=vl(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function vl(r,e,t){const n=r.field.isKeyField()?y.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Ue(u,c):E(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return E(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ke(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return ra(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new L(y.comparator);function ce(){return Rl}const wa=new L(y.comparator);function Yt(...r){let e=wa;for(const t of r)e=e.insert(t.key,t);return e}function va(r){let e=wa;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ye(){return un()}function Ra(){return un()}function un(){return new Se((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Vl=new L(y.comparator),Pl=new O(y.comparator);function P(...r){let e=Pl;for(const t of r)e=e.add(t);return e}const bl=new O(R);function Sl(){return bl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dn(e)?"-0":e}}function Va(r){return{integerValue:""+r}}function Dl(r,e){return Oc(e)?Va(e):Cs(r,e)}/**
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
 */class vr{constructor(){this._=void 0}}function Cl(r,e,t){return r instanceof Ot?(function(s,i){const o={fields:{[oa]:{stringValue:ia},[ua]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ps(i)&&(i=Er(i)),i&&(o.fields[aa]=i),{mapValue:o}})(t,e):r instanceof Mt?ba(r,e):r instanceof Lt?Sa(r,e):(function(s,i){const o=Pa(s,i),a=Oi(o)+Oi(s.Ee);return es(o)&&es(s.Ee)?Va(a):Cs(s.serializer,a)})(r,e)}function xl(r,e,t){return r instanceof Mt?ba(r,e):r instanceof Lt?Sa(r,e):t}function Pa(r,e){return r instanceof En?(function(n){return es(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class Ot extends vr{}class Mt extends vr{constructor(e){super(),this.elements=e}}function ba(r,e){const t=Da(e);for(const n of r.elements)t.some((s=>we(s,n)))||t.push(n);return{arrayValue:{values:t}}}class Lt extends vr{constructor(e){super(),this.elements=e}}function Sa(r,e){let t=Da(e);for(const n of r.elements)t=t.filter((s=>!we(s,n)));return{arrayValue:{values:t}}}class En extends vr{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Oi(r){return M(r.integerValue||r.doubleValue)}function Da(r){return In(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.field=e,this.transform=t}}function Nl(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof Mt&&s instanceof Mt||n instanceof Lt&&s instanceof Lt?Pt(n.elements,s.elements,we):n instanceof En&&s instanceof En?we(n.Ee,s.Ee):n instanceof Ot&&s instanceof Ot})(r.transform,e.transform)}class kl{constructor(e,t){this.version=e,this.transformResults=t}}class ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ne}static exists(e){return new ne(void 0,e)}static updateTime(e){return new ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qn(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rr{}function xa(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Vr(r.key,ne.none()):new Kt(r.key,r.data,ne.none());{const t=r.data,n=te.empty();let s=new O(U.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new De(r.key,n,new ae(s.toArray()),ne.none())}}function Fl(r,e,t){r instanceof Kt?(function(s,i,o){const a=s.value.clone(),u=Li(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof De?(function(s,i,o){if(!Qn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Li(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Na(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function cn(r,e,t,n){return r instanceof Kt?(function(i,o,a,u){if(!Qn(i.precondition,o))return a;const c=i.value.clone(),l=Ui(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof De?(function(i,o,a,u){if(!Qn(i.precondition,o))return a;const c=Ui(i.fieldTransforms,u,o),l=o.data;return l.setAll(Na(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(r,e,t,n):(function(i,o,a){return Qn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function Ol(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Pa(n.transform,s||null);i!=null&&(t===null&&(t=te.empty()),t.set(n.field,i))}return t||null}function Mi(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,((i,o)=>Nl(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Kt extends Rr{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class De extends Rr{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Na(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Li(r,e,t){const n=new Map;w(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,xl(o,a,t[s]))}return n}function Ui(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Cl(i,o,e))}return n}class Vr extends Rr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ka extends Rr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fl(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=cn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=cn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ra();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=xa(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(v.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),P())}isEqual(e){return this.batchId===e.batchId&&Pt(this.mutations,e.mutations,((t,n)=>Mi(t,n)))&&Pt(this.baseMutations,e.baseMutations,((t,n)=>Mi(t,n)))}}class Ns{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){w(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let s=(function(){return Vl})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ns(e,t,n,s)}}/**
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
 */class ks{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ml{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,C;function Ll(r){switch(r){case m.OK:return E(64938);case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0;default:return E(15467,{code:r})}}function Fa(r){if(r===void 0)return se("GRPC error has no .code"),m.UNKNOWN;switch(r){case j.OK:return m.OK;case j.CANCELLED:return m.CANCELLED;case j.UNKNOWN:return m.UNKNOWN;case j.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case j.INTERNAL:return m.INTERNAL;case j.UNAVAILABLE:return m.UNAVAILABLE;case j.UNAUTHENTICATED:return m.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case j.NOT_FOUND:return m.NOT_FOUND;case j.ALREADY_EXISTS:return m.ALREADY_EXISTS;case j.PERMISSION_DENIED:return m.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case j.ABORTED:return m.ABORTED;case j.OUT_OF_RANGE:return m.OUT_OF_RANGE;case j.UNIMPLEMENTED:return m.UNIMPLEMENTED;case j.DATA_LOSS:return m.DATA_LOSS;default:return E(39323,{code:r})}}(C=j||(j={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Ul=new Je([4294967295,4294967295],0);function qi(r){const e=Uo().encode(r),t=new dc;return t.update(e),new Uint8Array(t.digest())}function Bi(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Je([t,n],0),new Je([s,i],0)]}class Fs{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Jt(`Invalid padding: ${t}`);if(n<0)throw new Jt(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Jt(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Jt(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Je.fromNumber(this.fe)}pe(e,t,n){let s=e.add(t.multiply(Je.fromNumber(n)));return s.compare(Ul)===1&&(s=new Je([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=qi(e),[n,s]=Bi(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fs(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.fe===0)return;const t=qi(e),[n,s]=Bi(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Jt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,bn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pr(v.min(),s,new L(R),ce(),P())}}class bn{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new bn(n,t,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,n,s){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=s}}class Oa{constructor(e,t){this.targetId=e,this.De=t}}class Ma{constructor(e,t,n=Q.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class zi{constructor(){this.ve=0,this.Ce=Ki(),this.Fe=Q.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=P(),t=P(),n=P();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:E(38017,{changeType:i})}})),new bn(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Ki()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,w(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ql{constructor(e){this.We=e,this.Ge=new Map,this.ze=ce(),this.je=On(),this.Je=On(),this.He=new L(R)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:E(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,n=e.De.count,s=this.st(t);if(s){const i=s.target;if(sr(i))if(n===0){const o=new y(i.path);this.Xe(t,o,z.newNoDocument(o,v.min()))}else w(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const a=this._t(e),u=a?this.ut(a,e,o):1;if(u!==0){this.rt(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,c)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=be(n).toUint8Array()}catch(u){if(u instanceof sa)return Ae("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Fs(o,s,i)}catch(u){return Ae(u instanceof Jt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.fe===0?null:a}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const a=this.st(o);if(a){if(i.current&&sr(a.target)){const u=new y(a.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,z.newNoDocument(u,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let n=P();this.Je.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Pr(e,t,this.He,this.ze,n);return this.ze=ce(),this.je=On(),this.Je=On(),this.He=new L(R),s}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new zi,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new O(R),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new O(R),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||g("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zi),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function On(){return new L(y.comparator)}function Ki(){return new L(y.comparator)}const Bl={asc:"ASCENDING",desc:"DESCENDING"},zl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kl={and:"AND",or:"OR"};class Gl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function os(r,e){return r.useProto3Json||pr(e)?e:{value:e}}function Ut(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function La(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function jl(r,e){return Ut(r,e.toTimestamp())}function oe(r){return w(!!r,49232),v.fromTimestamp((function(t){const n=Pe(t);return new k(n.seconds,n.nanos)})(r))}function Os(r,e){return as(r,e).canonicalString()}function as(r,e){const t=(function(s){return new N(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Ua(r){const e=N.fromString(r);return w(Wa(e),10190,{key:e.toString()}),e}function or(r,e){return Os(r.databaseId,e.path)}function tt(r,e){const t=Ua(e);if(t.get(1)!==r.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new y(za(t))}function qa(r,e){return Os(r.databaseId,e)}function Ba(r){const e=Ua(r);return e.length===4?N.emptyPath():za(e)}function us(r){return new N(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function za(r){return w(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gi(r,e,t){return{name:or(r,e),fields:t.value.mapValue.fields}}function $l(r,e,t){const n=tt(r,e.name),s=oe(e.updateTime),i=e.createTime?oe(e.createTime):v.min(),o=new te({mapValue:{fields:e.fields}}),a=z.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Ql(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(w(l===void 0||typeof l=="string",58123),Q.fromBase64String(l||"")):(w(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),Q.fromUint8Array(l||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(c){const l=c.code===void 0?m.UNKNOWN:Fa(c.code);return new p(l,c.message||"")})(o);t=new Ma(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=tt(r,n.document.name),i=oe(n.document.updateTime),o=n.document.createTime?oe(n.document.createTime):v.min(),a=new te({mapValue:{fields:n.document.fields}}),u=z.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new Wn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=tt(r,n.document),i=n.readTime?oe(n.readTime):v.min(),o=z.newNoDocument(s,i),a=n.removedTargetIds||[];t=new Wn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=tt(r,n.document),i=n.removedTargetIds||[];t=new Wn([],i,s,null)}else{if(!("filter"in e))return E(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Ml(s,i),a=n.targetId;t=new Oa(a,o)}}return t}function ar(r,e){let t;if(e instanceof Kt)t={update:Gi(r,e.key,e.value)};else if(e instanceof Vr)t={delete:or(r,e.key)};else if(e instanceof De)t={update:Gi(r,e.key,e.data),updateMask:Zl(e.fieldMask)};else{if(!(e instanceof ka))return E(16599,{Rt:e.type});t={verify:or(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof Ot)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Lt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof En)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw E(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:jl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E(27497)})(r,e.precondition)),t}function cs(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?ne.updateTime(oe(i.updateTime)):i.exists!==void 0?ne.exists(i.exists):ne.none()})(e.currentDocument):ne.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let u=null;if("setToServerValue"in a)w(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),u=new Ot;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new Mt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new Lt(l)}else"increment"in a?u=new En(o,a.increment):E(16584,{proto:a});const c=U.fromServerFormat(a.fieldPath);return new Ca(c,u)})(r,s))):[];if(e.update){e.update.name;const s=tt(r,e.update.name),i=new te({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const c=u.fieldPaths||[];return new ae(c.map((l=>U.fromServerFormat(l))))})(e.updateMask);return new De(s,i,o,t,n)}return new Kt(s,i,t,n)}if(e.delete){const s=tt(r,e.delete);return new Vr(s,t)}if(e.verify){const s=tt(r,e.verify);return new ka(s,t)}return E(1463,{proto:e})}function Wl(r,e){return r&&r.length>0?(w(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?oe(s.updateTime):oe(i);return o.isEqual(v.min())&&(o=oe(i)),new kl(o,s.transformResults||[])})(t,e)))):[]}function Ka(r,e){return{documents:[qa(r,e.path)]}}function Ga(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=qa(r,s);const i=(function(c){if(c.length!==0)return Qa(F.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((l=>(function(f){return{field:At(f.field),direction:Xl(f.dir)}})(l)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=os(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Vt:t,parent:s}}function ja(r){let e=Ba(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){w(n===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(h){const f=$a(h);return f instanceof F&&Ds(f)?f.getFilters():[f]})(t.where));let o=[];t.orderBy&&(o=(function(h){return h.map((f=>(function(I){return new Tn(wt(I.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(f)))})(t.orderBy));let a=null;t.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,pr(f)?null:f})(t.limit));let u=null;t.startAt&&(u=(function(h){const f=!!h.before,_=h.values||[];return new kt(_,f)})(t.startAt));let c=null;return t.endAt&&(c=(function(h){const f=!h.before,_=h.values||[];return new kt(_,f)})(t.endAt)),El(e,s,o,i,a,"F",u,c)}function Hl(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $a(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=wt(t.unaryFilter.field);return D.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=wt(t.unaryFilter.field);return D.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wt(t.unaryFilter.field);return D.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wt(t.unaryFilter.field);return D.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return E(61313);default:return E(60726)}})(r):r.fieldFilter!==void 0?(function(t){return D.create(wt(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return E(58110);default:return E(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return F.create(t.compositeFilter.filters.map((n=>$a(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return E(1026)}})(t.compositeFilter.op))})(r):E(30097,{filter:r})}function Xl(r){return Bl[r]}function Yl(r){return zl[r]}function Jl(r){return Kl[r]}function At(r){return{fieldPath:r.canonicalString()}}function wt(r){return U.fromServerFormat(r.fieldPath)}function Qa(r){return r instanceof D?(function(t){if(t.op==="=="){if(bi(t.value))return{unaryFilter:{field:At(t.field),op:"IS_NAN"}};if(Pi(t.value))return{unaryFilter:{field:At(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bi(t.value))return{unaryFilter:{field:At(t.field),op:"IS_NOT_NAN"}};if(Pi(t.value))return{unaryFilter:{field:At(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:At(t.field),op:Yl(t.op),value:t.value}}})(r):r instanceof F?(function(t){const n=t.getFilters().map((s=>Qa(s)));return n.length===1?n[0]:{compositeFilter:{op:Jl(t.op),filters:n}}})(r):E(54877,{filter:r})}function Zl(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n,s,i=v.min(),o=v.min(),a=Q.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Re(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.gt=e}}function eh(r,e){let t;if(e.document)t=$l(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=y.fromSegments(e.noDocument.path),s=at(e.noDocument.readTime);t=z.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E(56709);{const n=y.fromSegments(e.unknownDocument.path),s=at(e.unknownDocument.version);t=z.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new k(s[0],s[1]);return v.fromTimestamp(i)})(e.readTime)),t}function ji(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ur(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:or(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ut(i,o.version.toTimestamp()),createTime:Ut(i,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:ot(e.version)};else{if(!e.isUnknownDocument())return E(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:ot(e.version)}}return n}function ur(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function ot(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function at(r){const e=new k(r.seconds,r.nanoseconds);return v.fromTimestamp(e)}function We(r,e){const t=(e.baseMutations||[]).map((i=>cs(r.gt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>cs(r.gt,i))),s=k.fromMillis(e.localWriteTimeMs);return new xs(e.batchId,s,t,n)}function Zt(r){const e=at(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?at(r.lastLimboFreeSnapshotVersion):v.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return w(o===1,1966,{count:o}),fe(Vn(Ba(i.documents[0])))})(r.query):(function(i){return fe(ja(i))})(r.query),new Re(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Q.fromBase64String(r.resumeToken))}function Xa(r,e){const t=ot(e.snapshotVersion),n=ot(e.lastLimboFreeSnapshotVersion);let s;s=sr(e.target)?Ka(r.gt,e.target):Ga(r.gt,e.target).Vt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:it(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Ya(r){const e=ja({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?is(e,e.limit,"L"):e}function Br(r,e){return new ks(e.largestBatchId,cs(r.gt,e.overlayMutation))}function $i(r,e){const t=e.path.lastSegment();return[r,re(e.path.popLast()),t]}function Qi(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:ot(n.readTime),documentKey:re(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{getBundleMetadata(e,t){return Wi(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:at(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Wi(e).put((function(s){return{bundleId:s.id,createTime:ot(oe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Hi(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Ya(i.bundledQuery),readTime:at(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Hi(e).put((function(s){return{name:s.name,readTime:ot(oe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Wi(r){return W(r,yr)}function Hi(r){return W(r,Ir)}/**
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
 */class br{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new br(e,n)}getOverlay(e,t){return $t(e).get($i(this.userId,t)).next((n=>n?Br(this.serializer,n):null))}getOverlays(e,t){const n=ye();return d.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const a=new ks(t,o);s.push(this.wt(e,a))})),d.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(re(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push($t(e).Y(Yr,a))})),d.waitFor(i)}getOverlaysForCollection(e,t,n){const s=ye(),i=re(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $t(e).j(Yr,o).next((a=>{for(const u of a){const c=Br(this.serializer,u);s.set(c.getKey(),c)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=ye();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $t(e).X({index:Jo,range:a},((u,c,l)=>{const h=Br(this.serializer,c);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()})).next((()=>i))}wt(e,t){return $t(e).put((function(s,i,o){const[a,u,c]=$i(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ar(s.gt,o.mutation)}})(this.serializer,this.userId,t))}}function $t(r){return W(r,Tr)}/**
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
 */class nh{St(e){return W(e,Rs)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?Q.fromUint8Array(n):Q.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class He{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(M(e.integerValue));else if("doubleValue"in e){const n=M(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),dn(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=Pe(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(be(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?la(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Ar(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):E(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const s of Object.keys(n))this.xt(s,t),this.Dt(n[s],t)}Lt(e,t){var n,s;const i=e.fields||{};this.Ct(t,53);const o=xt,a=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Ct(t,15),t.Ft(M(a)),this.xt(o,t),this.Dt(i[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const s of n)this.Dt(s,t)}Bt(e,t){this.Ct(t,37),y.fromName(e).path.forEach((n=>{this.Ct(t,60),this.$t(n,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}He.Ut=new He;/**
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
 */const gt=255;function rh(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Xi(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=rh(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class sh{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const s=t.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(e){const t=this.Xt(e),n=Xi(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Xt(e),n=Xi(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(gt),this.rn(255)}sn(){this._n(gt),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===gt?(this.rn(gt),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===gt?(this._n(gt),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class ih{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class oh{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Qt{constructor(){this.un=new sh,this.cn=new ih(this.un),this.ln=new oh(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Xe{constructor(e,t,n,s){this.Pn=e,this.Tn=t,this.In=n,this.dn=s}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Xe(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Hn(this.In),directionalValue:Hn(this.dn),orderedDocumentKey:Hn(t),documentKey:n.path.toArray()}}Rn(e,t,n){const s=this.An(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Ce(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=Yi(r.In,e.In),t!==0?t:(t=Yi(r.dn,e.dn),t!==0?t:y.comparator(r.Tn,e.Tn)))}function Yi(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Hn(r){return Oo()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function Ji(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class Zi{constructor(e){this.Vn=new O(((t,n)=>U.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(w(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Wr(e);if(t!==void 0&&!this.yn(t))return!1;const n=je(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.yn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=n[i];if(!this.wn(a,u)||!this.Sn(this.mn[o++],u))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.mn.length||!this.Sn(this.mn[o++],a))return!1}return!0}bn(){if(this.gn)return null;let e=new O(U.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Bn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Bn(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Bn(n.field,n.dir==="asc"?0:1)));return new Zn(Zn.UNKNOWN_ID,this.collectionId,t,hn.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Ja(r){var e,t;if(w(r instanceof D||r instanceof F,20012),r instanceof D){if(r instanceof Ia){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((i=>D.create(r.field,"==",i))))||[];return F.create(s,"or")}return r}const n=r.filters.map((s=>Ja(s)));return F.create(n,r.op)}function ah(r){if(r.getFilters().length===0)return[];const e=ds(Ja(r));return w(Za(e),7391),ls(e)||hs(e)?[e]:e.getFilters()}function ls(r){return r instanceof D}function hs(r){return r instanceof F&&Ds(r)}function Za(r){return ls(r)||hs(r)||(function(t){if(t instanceof F&&ts(t)){for(const n of t.getFilters())if(!ls(n)&&!hs(n))return!1;return!0}return!1})(r)}function ds(r){if(w(r instanceof D||r instanceof F,34018),r instanceof D)return r;if(r.filters.length===1)return ds(r.filters[0]);const e=r.filters.map((n=>ds(n)));let t=F.create(e,r.op);return t=cr(t),Za(t)?t:(w(t instanceof F,64498),w(Ft(t),40251),w(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Ms(n,s))))}function Ms(r,e){let t;return w(r instanceof D||r instanceof F,38388),w(e instanceof D||e instanceof F,25473),t=r instanceof D?e instanceof D?(function(s,i){return F.create([s,i],"and")})(r,e):eo(r,e):e instanceof D?eo(e,r):(function(s,i){if(w(s.filters.length>0&&i.filters.length>0,48005),Ft(s)&&Ft(i))return ga(s,i.getFilters());const o=ts(s)?s:i,a=ts(s)?i:s,u=o.filters.map((c=>Ms(c,a)));return F.create(u,"or")})(r,e),cr(t)}function eo(r,e){if(Ft(e))return ga(e,r.getFilters());{const t=e.filters.map((n=>Ms(r,n)));return F.create(t,"or")}}function cr(r){if(w(r instanceof D||r instanceof F,11850),r instanceof D)return r;const e=r.getFilters();if(e.length===1)return cr(e[0]);if(ma(r))return r;const t=e.map((s=>cr(s))),n=[];return t.forEach((s=>{s instanceof D?n.push(s):s instanceof F&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:F.create(n,r.op)}/**
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
 */class uh{constructor(){this.Dn=new Ls}addToCollectionParentIndex(e,t){return this.Dn.add(t),d.resolve()}getCollectionParents(e,t){return d.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return d.resolve()}deleteFieldIndex(e,t){return d.resolve()}deleteAllFieldIndexes(e){return d.resolve()}createTargetIndexes(e,t){return d.resolve()}getDocumentsMatchingTarget(e,t){return d.resolve(null)}getIndexType(e,t){return d.resolve(0)}getFieldIndexes(e,t){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}getMinOffset(e,t){return d.resolve(le.min())}getMinOffsetFromCollectionGroup(e,t){return d.resolve(le.min())}updateCollectionGroup(e,t,n){return d.resolve()}updateIndexEntries(e,t){return d.resolve()}}class Ls{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new O(N.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new O(N.comparator)).toArray()}}/**
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
 */const to="IndexedDbIndexManager",Mn=new Uint8Array(0);class ch{constructor(e,t){this.databaseId=t,this.vn=new Ls,this.Cn=new Se((n=>it(n)),((n,s)=>Rn(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:n,parent:re(s)};return no(e).put(i)}return d.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[qo(t),""],!1,!0);return no(e).j(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(pe(o.parent))}return n}))}addFieldIndex(e,t){const n=Wt(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=yt(e);return i.next((a=>{o.put(Qi(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Wt(e),s=yt(e),i=pt(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Wt(e),n=pt(e),s=yt(e);return t.Y().next((()=>n.Y())).next((()=>s.Y()))}createTargetIndexes(e,t){return d.forEach(this.Fn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new Zi(n).bn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=pt(e);let s=!0;const i=new Map;return d.forEach(this.Fn(t),(o=>this.Mn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=P();const a=[];return d.forEach(i,((u,c)=>{g(to,`Using index ${(function(b){return`id=${b.indexId}|cg=${b.collectionGroup}|f=${b.fields.map((q=>`${q.fieldPath}:${q.kind}`)).join(",")}`})(u)} to execute ${it(t)}`);const l=(function(b,q){const G=Wr(q);if(G===void 0)return null;for(const B of ir(b,G.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null})(c,u),h=(function(b,q){const G=new Map;for(const B of je(q))for(const J of ir(b,B.fieldPath))switch(J.op){case"==":case"in":G.set(B.fieldPath.canonicalString(),J.value);break;case"not-in":case"!=":return G.set(B.fieldPath.canonicalString(),J.value),Array.from(G.values())}return null})(c,u),f=(function(b,q){const G=[];let B=!0;for(const J of je(q)){const ft=J.kind===0?Ni(b,J.fieldPath,b.startAt):ki(b,J.fieldPath,b.startAt);G.push(ft.value),B&&(B=ft.inclusive)}return new kt(G,B)})(c,u),_=(function(b,q){const G=[];let B=!0;for(const J of je(q)){const ft=J.kind===0?ki(b,J.fieldPath,b.endAt):Ni(b,J.fieldPath,b.endAt);G.push(ft.value),B&&(B=ft.inclusive)}return new kt(G,B)})(c,u),I=this.xn(u,c,f),A=this.xn(u,c,_),T=this.On(u,c,h),x=this.Nn(u.indexId,l,I,f.inclusive,A,_.inclusive,T);return d.forEach(x,(S=>n.H(S,t.limit).next((b=>{b.forEach((q=>{const G=y.fromSegments(q.documentKey);o.has(G)||(o=o.add(G),a.push(G))}))}))))})).next((()=>a))}return d.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=ah(F.create(e.filters,"and")).map((n=>rs(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,n,s,i,o,a){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),c=u/(t!=null?t.length:1),l=[];for(let h=0;h<u;++h){const f=t?this.Bn(t[h/c]):Mn,_=this.Ln(e,f,n[h%c],s),I=this.kn(e,f,i[h%c],o),A=a.map((T=>this.Ln(e,f,T,!0)));l.push(...this.createRange(_,I,A))}return l}Ln(e,t,n,s){const i=new Xe(e,y.empty(),t,n);return s?i:i.En()}kn(e,t,n,s){const i=new Xe(e,y.empty(),t,n);return s?i.En():i}Mn(e,t){const n=new Zi(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)n.pn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const s=this.Fn(t);return d.forEach(s,(i=>this.Mn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(u){let c=new O(U.comparator),l=!1;for(const h of u.filters)for(const f of h.getFlattenedFilters())f.field.isKeyField()||(f.op==="array-contains"||f.op==="array-contains-any"?l=!0:c=c.add(f.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}qn(e,t){const n=new Qt;for(const s of je(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.hn(s.kind);He.Ut.bt(i,o)}return n.an()}Bn(e){const t=new Qt;return He.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Qt;return He.Ut.bt(yn(this.databaseId,t),n.hn((function(i){const o=je(i);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}On(e,t,n){if(n===null)return[];let s=[];s.push(new Qt);let i=0;for(const o of je(e)){const a=n[i++];for(const u of s)if(this.$n(t,o.fieldPath)&&In(a))s=this.Un(s,o,a);else{const c=u.hn(o.kind);He.Ut.bt(a,c)}}return this.Kn(s)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const u=new Qt;u.seed(a.an()),He.Ut.bt(o,u.hn(t.kind)),i.push(u)}return i}$n(e,t){return!!e.filters.find((n=>n instanceof D&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Wt(e),s=yt(e);return(t?n.j(Xr,IDBKeyRange.bound(t,t)):n.j()).next((i=>{const o=[];return d.forEach(i,(a=>s.get([a.indexId,this.uid]).next((u=>{o.push((function(l,h){const f=h?new hn(h.sequenceNumber,new le(at(h.readTime),new y(pe(h.documentKey)),h.largestBatchId)):hn.empty(),_=l.fields.map((([I,A])=>new Bn(U.fromServerFormat(I),A)));return new Zn(l.indexId,l.collectionGroup,_,f)})(a,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:R(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=Wt(e),i=yt(e);return this.Wn(e).next((o=>s.j(Xr,IDBKeyRange.bound(t,t)).next((a=>d.forEach(a,(u=>i.put(Qi(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return d.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?d.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(n.set(s.collectionGroup,a),d.forEach(a,(u=>this.Gn(e,s,u).next((c=>{const l=this.zn(i,u);return c.isEqual(l)?d.resolve():this.jn(e,i,u,c,l)})))))))}))}Jn(e,t,n,s){return pt(e).put(s.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,s){return pt(e).delete(s.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const s=pt(e);let i=new O(Ce);return s.X({index:Yo,range:IDBKeyRange.only([n.indexId,this.uid,Hn(this.Qn(n,t))])},((o,a)=>{i=i.add(new Xe(n.indexId,t,Ji(a.arrayValue),Ji(a.directionalValue)))})).next((()=>i))}zn(e,t){let n=new O(Ce);const s=this.qn(t,e);if(s==null)return n;const i=Wr(t);if(i!=null){const o=e.data.field(i.fieldPath);if(In(o))for(const a of o.arrayValue.values||[])n=n.add(new Xe(t.indexId,e.key,this.Bn(a),s))}else n=n.add(new Xe(t.indexId,e.key,Mn,s));return n}jn(e,t,n,s,i){g(to,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,c,l,h,f){const _=u.getIterator(),I=c.getIterator();let A=_t(_),T=_t(I);for(;A||T;){let x=!1,S=!1;if(A&&T){const b=l(A,T);b<0?S=!0:b>0&&(x=!0)}else A!=null?S=!0:x=!0;x?(h(T),T=_t(I)):S?(f(A),A=_t(_)):(A=_t(_),T=_t(I))}})(s,i,Ce,(a=>{o.push(this.Jn(e,t,n,a))}),(a=>{o.push(this.Hn(e,t,n,a))})),d.waitFor(o)}Wn(e){let t=1;return yt(e).X({index:Xo,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>Ce(o,a))).filter(((o,a,u)=>!a||Ce(o,u[a-1])!==0));const s=[];s.push(e);for(const o of n){const a=Ce(o,e),u=Ce(o,t);if(a===0)s[0]=e.En();else if(a>0&&u<0)s.push(o),s.push(o.En());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Yn(s[o],s[o+1]))return[];const a=s[o].Rn(this.uid,Mn,y.empty()),u=s[o+1].Rn(this.uid,Mn,y.empty());i.push(IDBKeyRange.bound(a,u))}return i}Yn(e,t){return Ce(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ro)}getMinOffset(e,t){return d.mapArray(this.Fn(t),(n=>this.Mn(e,n).next((s=>s||E(44426))))).next(ro)}}function no(r){return W(r,_n)}function pt(r){return W(r,sn)}function Wt(r){return W(r,vs)}function yt(r){return W(r,rn)}function ro(r){w(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Es(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new le(e.readTime,e.documentKey,t)}/**
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
 */const so={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eu=41943040;class ee{static withCacheSize(e){return new ee(e,ee.DEFAULT_COLLECTION_PERCENTILE,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r,e,t){const n=r.store(me),s=r.store(bt),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=n.X({range:o},((l,h,f)=>(a++,f.delete())));i.push(u.next((()=>{w(a===1,47070,{batchId:t.batchId})})));const c=[];for(const l of t.mutations){const h=Qo(e,l.key.path,t.batchId);i.push(s.delete(h)),c.push(l.key)}return d.waitFor(i).next((()=>c))}function lr(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw E(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee.DEFAULT_COLLECTION_PERCENTILE=10,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ee.DEFAULT=new ee(eu,ee.DEFAULT_COLLECTION_PERCENTILE,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ee.DISABLED=new ee(-1,0,0);class Sr{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static yt(e,t,n,s){w(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Sr(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xe(e).X({index:Ye,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=vt(e),o=xe(e);return o.add({}).next((a=>{w(typeof a=="number",49019);const u=new xs(a,t,n,s),c=(function(_,I,A){const T=A.baseMutations.map((S=>ar(_.gt,S))),x=A.mutations.map((S=>ar(_.gt,S)));return{userId:I,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:T,mutations:x}})(this.serializer,this.userId,u),l=[];let h=new O(((f,_)=>R(f.canonicalString(),_.canonicalString())));for(const f of s){const _=Qo(this.userId,f.key.path,a);h=h.add(f.key.path.popLast()),l.push(o.put(c)),l.push(i.put(_,Uc))}return h.forEach((f=>{l.push(this.indexManager.addToCollectionParentIndex(e,f))})),e.addOnCommittedListener((()=>{this.Zn[a]=u.keys()})),d.waitFor(l).next((()=>u))}))}lookupMutationBatch(e,t){return xe(e).get(t).next((n=>n?(w(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),We(this.serializer,n)):null))}Xn(e,t){return this.Zn[t]?d.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return xe(e).X({index:Ye,range:s},((o,a,u)=>{a.userId===this.userId&&(w(a.batchId>=n,47524,{er:n}),i=We(this.serializer,a)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ze;return xe(e).X({index:Ye,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ze],[this.userId,Number.POSITIVE_INFINITY]);return xe(e).j(Ye,t).next((n=>n.map((s=>We(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zn(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return vt(e).X({range:s},((o,a,u)=>{const[c,l,h]=o,f=pe(l);if(c===this.userId&&t.path.isEqual(f))return xe(e).get(h).next((_=>{if(!_)throw E(61480,{tr:o,batchId:h});w(_.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:_.userId,batchId:h}),i.push(We(this.serializer,_))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new O(R);const s=[];return t.forEach((i=>{const o=zn(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=vt(e).X({range:a},((c,l,h)=>{const[f,_,I]=c,A=pe(_);f===this.userId&&i.path.isEqual(A)?n=n.add(I):h.done()}));s.push(u)})),d.waitFor(s).next((()=>this.nr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=zn(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new O(R);return vt(e).X({range:o},((u,c,l)=>{const[h,f,_]=u,I=pe(f);h===this.userId&&n.isPrefixOf(I)?I.length===s&&(a=a.add(_)):l.done()})).next((()=>this.nr(e,a)))}nr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(xe(e).get(i).next((o=>{if(o===null)throw E(35274,{batchId:i});w(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(We(this.serializer,o))})))})),d.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return tu(e.ce,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),d.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return d.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return vt(e).X({range:n},((i,o,a)=>{if(i[0]===this.userId){const u=pe(i[1]);s.push(u)}else a.done()})).next((()=>{w(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return nu(e,this.userId,t)}sr(e){return ru(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ze,lastStreamToken:""}))}}function nu(r,e,t){const n=zn(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return vt(r).X({range:i,Z:!0},((a,u,c)=>{const[l,h,f]=a;l===e&&h===s&&(o=!0),c.done()})).next((()=>o))}function xe(r){return W(r,me)}function vt(r){return W(r,bt)}function ru(r){return W(r,fn)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ut(0)}static ur(){return new ut(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const n=new ut(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>v.fromTimestamp(new k(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.cr(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.lr(e,s))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>It(e).delete(t.targetId))).next((()=>this.cr(e))).next((n=>(w(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return It(e).X(((o,a)=>{const u=Zt(a);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>d.waitFor(i))).next((()=>s))}forEachTarget(e,t){return It(e).X(((n,s)=>{const i=Zt(s);t(i)}))}cr(e){return io(e).get(nr).next((t=>(w(t!==null,2888),t)))}lr(e,t){return io(e).put(nr,t)}hr(e,t){return It(e).put(Xa(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=it(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return It(e).X({range:s,index:Ho},((o,a,u)=>{const c=Zt(a);Rn(t,c.target)&&(i=c,u.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=ke(e);return t.forEach((o=>{const a=re(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))})),d.waitFor(s)}removeMatchingKeys(e,t,n){const s=ke(e);return d.forEach(t,(i=>{const o=re(i.path);return d.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=ke(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=ke(e);let i=P();return s.X({range:n,Z:!0},((o,a,u)=>{const c=pe(o[1]),l=new y(c);i=i.add(l)})).next((()=>i))}containsKey(e,t){const n=re(t.path),s=IDBKeyRange.bound([n],[qo(n)],!1,!0);let i=0;return ke(e).X({index:ws,Z:!0,range:s},(([o,a],u,c)=>{o!==0&&(i++,c.done())})).next((()=>i>0))}Et(e,t){return It(e).get(t).next((n=>n?Zt(n):null))}}function It(r){return W(r,St)}function io(r){return W(r,et)}function ke(r){return W(r,Dt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="LruGarbageCollector",hh=1048576;function ao([r,e],[t,n]){const s=R(r,t);return s===0?R(e,n):s}class dh{constructor(e){this.Tr=e,this.buffer=new O(ao),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ao(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class su{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){g(oo,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ze(t)?g(oo,"Ignoring IndexedDB error during garbage collection: ",t):await lt(t)}await this.Rr(3e5)}))}}class fh{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return d.resolve(de.ue);const n=new dh(t);return this.Vr.forEachTarget(e,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(g("LruGarbageCollector","Garbage collection skipped; disabled"),d.resolve(so)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),so):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s)))).next((h=>(n=h,a=Date.now(),this.removeTargets(e,n,t)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((h=>(c=Date.now(),Tt()<=ve.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),d.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function iu(r,e){return new fh(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t){this.db=e,this.garbageCollector=iu(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((n,s)=>t(s)))}addReference(e,t,n){return Ln(e,n)}removeReference(e,t,n){return Ln(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ln(e,t)}Sr(e,t){return(function(s,i){let o=!1;return ru(s).ee((a=>nu(s,a,i).next((u=>(u&&(o=!0),d.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(e,((o,a)=>{if(a<=t){const u=this.Sr(e,o).next((c=>{if(!c)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,v.min()),ke(e).delete((function(h){return[0,re(h.path)]})(o)))))}));s.push(u)}})).next((()=>d.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ln(e,t)}wr(e,t){const n=ke(e);let s,i=de.ue;return n.X({index:ws},(([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==de.ue&&t(new y(pe(s)),i),i=c,s=u):i=de.ue})).next((()=>{i!==de.ue&&t(new y(pe(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ln(r,e){return ke(r).put((function(n,s){return{targetId:0,path:re(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.changes=new Se((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?d.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ge(e).put(n)}removeEntry(e,t,n){return Ge(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ur(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.br(e,n))))}getEntry(e,t){let n=z.newInvalidDocument(t);return Ge(e).X({index:Kn,range:IDBKeyRange.only(Ht(t))},((s,i)=>{n=this.Dr(t,i)})).next((()=>n))}vr(e,t){let n={size:0,document:z.newInvalidDocument(t)};return Ge(e).X({index:Kn,range:IDBKeyRange.only(Ht(t))},((s,i)=>{n={document:this.Dr(t,i),size:lr(i)}})).next((()=>n))}getEntries(e,t){let n=ce();return this.Cr(e,t,((s,i)=>{const o=this.Dr(s,i);n=n.insert(s,o)})).next((()=>n))}Fr(e,t){let n=ce(),s=new L(y.comparator);return this.Cr(e,t,((i,o)=>{const a=this.Dr(i,o);n=n.insert(i,a),s=s.insert(i,lr(o))})).next((()=>({documents:n,Mr:s})))}Cr(e,t,n){if(t.isEmpty())return d.resolve();let s=new O(lo);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Ht(s.first()),Ht(s.last())),o=s.getIterator();let a=o.getNext();return Ge(e).X({index:Kn,range:i},((u,c,l)=>{const h=y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&lo(a,h)<0;)n(a,null),a=o.getNext();a&&a.isEqual(h)&&(n(a,c),a=o.hasNext()?o.getNext():null),a?l.G(Ht(a)):l.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),ur(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ge(e).j(IDBKeyRange.bound(a,u,!0)).next((c=>{i==null||i.incrementDocumentReadCount(c.length);let l=ce();for(const h of c){const f=this.Dr(y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);f.isFoundDocument()&&(Pn(t,f)||s.has(f.key))&&(l=l.insert(f.key,f))}return l}))}getAllFromCollectionGroup(e,t,n,s){let i=ce();const o=co(t,n),a=co(t,le.max());return Ge(e).X({index:Wo,range:IDBKeyRange.bound(o,a,!0)},((u,c,l)=>{const h=this.Dr(y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(h.key,h),i.size===s&&l.done()})).next((()=>i))}newChangeBuffer(e){return new gh(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return uo(e).get(Hr).next((t=>(w(!!t,20021),t)))}br(e,t){return uo(e).put(Hr,t)}Dr(e,t){if(t){const n=eh(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(v.min())))return n}return z.newInvalidDocument(e)}}function au(r){return new _h(r)}class gh extends ou{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Se((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new O(((i,o)=>R(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=ji(this.Or.serializer,o);s=s.add(i.path.popLast());const c=lr(u);n+=c-a.size,t.push(this.Or.addEntry(e,i,u))}else if(n-=a.size,this.trackRemovals){const u=ji(this.Or.serializer,o.convertToNoDocument(v.min()));t.push(this.Or.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Or.updateMetadata(e,n)),d.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:n,Mr:s})=>(s.forEach(((i,o)=>{this.Nr.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function uo(r){return W(r,mn)}function Ge(r){return W(r,tr)}function Ht(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function co(r,e){const t=e.documentKey.path.toArray();return[r,ur(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function lo(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=R(t[i],n[i]),s)return s;return s=R(t.length,n.length),s||(s=R(t[t.length-2],n[n.length-2]),s||R(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ph{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&cn(n.mutation,s,ae.empty(),k.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,P()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=P()){const s=ye();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Yt();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=ye();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,P())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=ce();const o=un(),a=(function(){return un()})();return t.forEach(((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof De)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),cn(l.mutation,c,l.mutation.getFieldMask(),k.now())):o.set(c.key,ae.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>{var h;return a.set(c,new ph(l,(h=o.get(c))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=un();let s=new L(((o,a)=>o-a)),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||ae.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||P()).add(u);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Ra();l.forEach((f=>{if(!i.has(f)){const _=xa(t.get(f),n.get(f));_!==null&&h.set(f,_),i=i.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return d.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ta(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):d.resolve(ye());let a=ln,u=i;return o.next((c=>d.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(e,l).next((f=>{u=u.insert(l,f)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,P()))).next((l=>({batchId:a,changes:va(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next((n=>{let s=Yt();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Yt();return this.indexManager.getCollectionParents(e,i).next((a=>d.forEach(a,(u=>{const c=(function(h,f){return new zt(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((l=>{l.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,z.newInvalidDocument(l)))}));let a=Yt();return o.forEach(((u,c)=>{const l=i.get(u);l!==void 0&&cn(l.mutation,c,ae.empty(),k.now()),Pn(t,c)&&(a=a.insert(u,c))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return d.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:oe(s.createTime)}})(t)),d.resolve()}getNamedQuery(e,t){return d.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Ya(s.bundledQuery),readTime:oe(s.readTime)}})(t)),d.resolve()}}/**
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
 */class Ih{constructor(){this.overlays=new L(y.comparator),this.kr=new Map}getOverlay(e,t){return d.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ye();return d.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.wt(e,t,i)})),d.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),d.resolve()}getOverlaysForCollection(e,t,n){const s=ye(),i=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new L(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=ye(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=ye(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=s)););return d.resolve(a)}wt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ks(t,n));let i=this.kr.get(t);i===void 0&&(i=P(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}/**
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
 */class Th{constructor(){this.sessionToken=Q.EMPTY_BYTE_STRING}getSessionToken(e){return d.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,d.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.qr=new O(H.Qr),this.$r=new O(H.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new H(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new H(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new y(new N([])),n=new H(t,e),s=new H(t,e+1),i=[];return this.$r.forEachInRange([n,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new y(new N([])),n=new H(t,e),s=new H(t,e+1);let i=P();return this.$r.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new H(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class H{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return y.comparator(e.key,t.key)||R(e.Hr,t.Hr)}static Ur(e,t){return R(e.Hr,t.Hr)||y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new O(H.Qr)}checkEmpty(e){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xs(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,t){return d.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?Ze:this.er-1)}getAllMutationBatches(e){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new H(t,0),s=new H(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(o=>{const a=this.Zr(o.Hr);i.push(a)})),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new O(R);return t.forEach((s=>{const i=new H(s,0),o=new H(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(a=>{n=n.add(a.Hr)}))})),d.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new H(new y(i),0);let a=new O(R);return this.Yr.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Hr)),!0)}),o),d.resolve(this.ei(a))}ei(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){w(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return d.forEach(t.mutations,(s=>{const i=new H(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new H(t,0),s=this.Yr.firstAfterOrEqual(n);return d.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,d.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.ni=e,this.docs=(function(){return new L(y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return d.resolve(n?n.document.mutableCopy():z.newInvalidDocument(t))}getEntries(e,t){let n=ce();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():z.newInvalidDocument(s))})),d.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=ce();const o=t.path,a=new y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Es(Ko(l),n)<=0||(s.has(l.key)||Pn(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(e,t,n,s){E(9500)}ri(e,t){return d.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new wh(this)}getSize(e){return d.resolve(this.size)}}class wh extends ou{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(n)})),d.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.persistence=e,this.ii=new Se((t=>it(t)),Rn),this.lastRemoteSnapshotVersion=v.min(),this.highestTargetId=0,this.si=0,this.oi=new Us,this.targetCount=0,this._i=ut.ar()}forEachTarget(e,t){return this.ii.forEach(((n,s)=>t(s))),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),d.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ut(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,d.resolve()}updateTargetData(e,t){return this.hr(t),d.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),d.waitFor(i).next((()=>s))}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return d.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),d.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),d.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),d.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return d.resolve(n)}containsKey(e,t){return d.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.ai={},this.overlays={},this.ui=new de(0),this.ci=!1,this.ci=!0,this.li=new Th,this.referenceDelegate=e(this),this.hi=new vh(this),this.indexManager=new uh,this.remoteDocumentCache=(function(s){return new Ah(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Ha(t),this.Ti=new yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ih,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Eh(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const s=new Rh(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return d.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class Rh extends jo{constructor(e){super(),this.currentSequenceNumber=e}}class Dr{constructor(e){this.persistence=e,this.Ai=new Us,this.Ri=null}static Vi(e){return new Dr(e)}get mi(){if(this.Ri)return this.Ri;throw E(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),d.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),d.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),d.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.mi,(n=>{const s=y.fromPath(n);return this.fi(e,s).next((i=>{i||t.removeEntry(s,v.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return d.or([()=>d.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class hr{constructor(e,t){this.persistence=e,this.gi=new Se((n=>re(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=iu(this,t)}static Vi(e,t){return new hr(e,t)}Ii(){}di(e){return d.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return d.forEach(this.gi,((n,s)=>this.Sr(e,n,s).next((i=>i?d.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((a=>{a||(n++,i.removeEntry(o,v.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),d.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),d.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),d.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),d.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jn(e.data.value)),t}Sr(e,t,n){return d.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return d.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.serializer=e}q(e,t,n,s){const i=new gr("createOrUpgrade",t);n<1&&s>=1&&((function(u){u.createObjectStore(vn)})(e),(function(u){u.createObjectStore(fn,{keyPath:Lc}),u.createObjectStore(me,{keyPath:Ei,autoIncrement:!0}).createIndex(Ye,Ai,{unique:!0}),u.createObjectStore(bt)})(e),ho(e),(function(u){u.createObjectStore($e)})(e));let o=d.resolve();return n<3&&s>=3&&(n!==0&&((function(u){u.deleteObjectStore(Dt),u.deleteObjectStore(St),u.deleteObjectStore(et)})(e),ho(e)),o=o.next((()=>(function(u){const c=u.store(et),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:v.min().toTimestamp(),targetCount:0};return c.put(nr,l)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(u,c){return c.store(me).j().next((h=>{u.deleteObjectStore(me),u.createObjectStore(me,{keyPath:Ei,autoIncrement:!0}).createIndex(Ye,Ai,{unique:!0});const f=c.store(me),_=h.map((I=>f.put(I)));return d.waitFor(_)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(Ct,{keyPath:Qc})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.pi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(mn)})(e),this.yi(i))))),n<7&&s>=7&&(o=o.next((()=>this.wi(i)))),n<8&&s>=8&&(o=o.next((()=>this.Si(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.bi(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(yr,{keyPath:Wc})})(e),(function(u){u.createObjectStore(Ir,{keyPath:Hc})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(u){const c=u.createObjectStore(Tr,{keyPath:nl});c.createIndex(Yr,rl,{unique:!1}),c.createIndex(Jo,sl,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(u){const c=u.createObjectStore(tr,{keyPath:qc});c.createIndex(Kn,Bc),c.createIndex(Wo,zc)})(e))).next((()=>this.Di(e,i))).next((()=>e.deleteObjectStore($e)))),n<14&&s>=14&&(o=o.next((()=>this.Ci(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(vs,{keyPath:Xc,autoIncrement:!0}).createIndex(Xr,Yc,{unique:!1}),u.createObjectStore(rn,{keyPath:Jc}).createIndex(Xo,Zc,{unique:!1}),u.createObjectStore(sn,{keyPath:el}).createIndex(Yo,tl,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(rn).clear()})).next((()=>{t.objectStore(sn).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Rs,{keyPath:il})})(e)}))),n<18&&s>=18&&Oo()&&(o=o.next((()=>{t.objectStore(rn).clear()})).next((()=>{t.objectStore(sn).clear()}))),o}yi(e){let t=0;return e.store($e).X(((n,s)=>{t+=lr(s)})).next((()=>{const n={byteSize:t};return e.store(mn).put(Hr,n)}))}pi(e){const t=e.store(fn),n=e.store(me);return t.j().next((s=>d.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Ze],[i.userId,i.lastAcknowledgedBatchId]);return n.j(Ye,o).next((a=>d.forEach(a,(u=>{w(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=We(this.serializer,u);return tu(e,i.userId,c).next((()=>{}))}))))}))))}wi(e){const t=e.store(Dt),n=e.store($e);return e.store(et).get(nr).next((s=>{const i=[];return n.X(((o,a)=>{const u=new N(o),c=(function(h){return[0,re(h)]})(u);i.push(t.get(c).next((l=>l?d.resolve():(h=>t.put({targetId:0,path:re(h),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>d.waitFor(i)))}))}Si(e,t){e.createObjectStore(_n,{keyPath:$c});const n=t.store(_n),s=new Ls,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return n.put({collectionId:a,parent:re(u)})}};return t.store($e).X({Z:!0},((o,a)=>{const u=new N(o);return i(u.popLast())})).next((()=>t.store(bt).X({Z:!0},(([o,a,u],c)=>{const l=pe(a);return i(l.popLast())}))))}bi(e){const t=e.store(St);return t.X(((n,s)=>{const i=Zt(s),o=Xa(this.serializer,i);return t.put(o)}))}Di(e,t){const n=t.store($e),s=[];return n.X(((i,o)=>{const a=t.store(tr),u=(function(h){return h.document?new y(N.fromString(h.document.name).popFirst(5)):h.noDocument?y.fromSegments(h.noDocument.path):h.unknownDocument?y.fromSegments(h.unknownDocument.path):E(36783)})(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))})).next((()=>d.waitFor(s)))}Ci(e,t){const n=t.store(me),s=au(this.serializer),i=new qs(Dr.Vi,this.serializer.gt);return n.j().next((o=>{const a=new Map;return o.forEach((u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:P();We(this.serializer,u).keys().forEach((h=>l=l.add(h))),a.set(u.userId,l)})),d.forEach(a,((u,c)=>{const l=new X(c),h=br.yt(this.serializer,l),f=i.getIndexManager(l),_=Sr.yt(l,this.serializer,f,i.referenceDelegate);return new uu(s,_,h,f).recalculateAndSaveOverlaysForDocumentKeys(new Jr(t,de.ue),u).next()}))}))}}function ho(r){r.createObjectStore(Dt,{keyPath:Gc}).createIndex(ws,jc,{unique:!0}),r.createObjectStore(St,{keyPath:"targetId"}).createIndex(Ho,Kc,{unique:!0}),r.createObjectStore(et)}const Ne="IndexedDbPersistence",zr=18e5,Kr=5e3,Gr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Ph="main";class Bs{constructor(e,t,n,s,i,o,a,u,c,l,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=i,this.window=o,this.document=a,this.Mi=c,this.xi=l,this.Oi=h,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=f=>Promise.resolve(),!Bs.C())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new mh(this,s),this.Qi=t+Ph,this.serializer=new Ha(u),this.$i=new Oe(this.Qi,this.Oi,new Vh(this.serializer)),this.li=new nh,this.hi=new lh(this.referenceDelegate,this.serializer),this.remoteDocumentCache=au(this.serializer),this.Ti=new th,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,l===!1&&se(Ne,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Gr);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new de(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Un(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(ze(e))return g(Ne,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return g(Ne,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return Xt(e).get(mt).next((t=>d.resolve(this.Xi(t))))}es(e){return Un(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,zr)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=W(t,Ct);return n.j().next((s=>{const i=this.rs(s,zr),o=s.filter((a=>i.indexOf(a)===-1));return d.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?d.resolve(!0):Xt(e).get(mt).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Kr)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Gr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Un(e).j().next((n=>this.rs(n,Kr).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&g(Ne,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[vn,Ct],(e=>{const t=new Jr(e,de.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>Un(e).j().next((t=>this.rs(t,zr).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Sr.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ch(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return br.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){g(Ne,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?ul:u===17?na:u===16?al:u===15?Vs:u===14?ta:u===13?ea:u===12?ol:u===11?Zo:void E(60245)})(this.Oi);let o;return this.$i.runTransaction(e,s,i,(a=>(o=new Jr(a,this.ui?this.ui.next():de.ue),t==="readwrite-primary"?this.Ji(o).next((u=>!!u||this.Hi(o))).next((u=>{if(!u)throw se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new p(m.FAILED_PRECONDITION,Go);return n(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ts(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ts(e){return Xt(e).get(mt).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Kr)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,Gr)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xt(e).put(mt,t)}static C(){return Oe.C()}Yi(e){const t=Xt(e);return t.get(mt).next((n=>this.Xi(n)?(g(Ne,"Releasing primary lease."),t.delete(mt)):d.resolve()))}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(se(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Fo()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return g(Ne,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return se(Ne,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){se("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xt(r){return W(r,vn)}function Un(r){return W(r,Ct)}function bh(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=s}static Es(e,t){let n=P(),s=P();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zs(e,t.fromCache,n,s)}}/**
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
 */class Sh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cu{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Fo()?8:$o(Jn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Sh;return this.ws(e,t,o).next((a=>{if(i.result=a,this.Rs)return this.Ss(e,t,o,a.size)}))})).next((()=>i.result))}Ss(e,t,n,s){return n.documentReadCount<this.Vs?(Tt()<=ve.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Et(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),d.resolve()):(Tt()<=ve.DEBUG&&g("QueryEngine","Query:",Et(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(Tt()<=ve.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Et(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fe(t))):d.resolve())}ps(e,t){if(Fi(t))return d.resolve(null);let n=fe(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=is(t,null,"F"),n=fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=P(...i);return this.gs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.bs(t,a);return this.Ds(t,c,o,u.readTime)?this.ps(e,is(t,null,"F")):this.vs(e,c,t,u)}))))})))))}ys(e,t,n,s){return Fi(t)||s.isEqual(v.min())?d.resolve(null):this.gs.getDocuments(e,n).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,n,s)?d.resolve(null):(Tt()<=ve.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Et(t)),this.vs(e,o,t,Cc(s,ln)).next((a=>a)))}))}bs(e,t){let n=new O(Aa(e));return t.forEach(((s,i)=>{Pn(e,i)&&(n=n.add(i))})),n}Ds(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,n){return Tt()<=ve.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Et(t)),this.gs.getDocumentsMatchingQuery(e,t,le.min(),n)}vs(e,t,n,s){return this.gs.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="LocalStore",Dh=3e8;class Ch{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new L(R),this.Ms=new Se((i=>it(i)),Rn),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uu(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function lu(r,e,t,n){return new Ch(r,e,t,n)}async function hu(r,e){const t=V(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=P();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({Bs:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function xh(r,e){const t=V(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(a,u,c,l){const h=c.batch,f=h.keys();let _=d.resolve();return f.forEach((I=>{_=_.next((()=>l.getEntry(u,I))).next((A=>{const T=c.docVersions.get(I);w(T!==null,48541),A.version.compareTo(T)<0&&(h.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),l.addEntry(A)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(u,h)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function du(r){const e=V(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Nh(r,e){const t=V(r),n=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const a=[];e.targetChanges.forEach(((l,h)=>{const f=s.get(h);if(!f)return;a.push(t.hi.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.hi.addMatchingKeys(i,l.addedDocuments,h))));let _=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Q.EMPTY_BYTE_STRING,v.min()).withLastLimboFreeSnapshotVersion(v.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),(function(A,T,x){return A.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=Dh?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(f,_,l)&&a.push(t.hi.updateTargetData(i,_))}));let u=ce(),c=P();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(kh(i,o,e.documentUpdates).next((l=>{u=l.Ls,c=l.ks}))),!n.isEqual(v.min())){const l=t.hi.getLastRemoteSnapshotVersion(i).next((h=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return d.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function kh(r,e,t){let n=P(),s=P();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=ce();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(v.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):g(Ks,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{Ls:o,ks:s}}))}function Fh(r,e){const t=V(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ze),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Oh(r,e){const t=V(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.hi.getTargetData(n,e).next((i=>i?(s=i,d.resolve(s)):t.hi.allocateTargetId(n).next((o=>(s=new Re(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function fs(r,e,t){const n=V(r),s=n.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ze(o))throw o;g(Ks,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(s.target)}function fo(r,e,t){const n=V(r);let s=v.min(),i=P();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,l){const h=V(u),f=h.Ms.get(l);return f!==void 0?d.resolve(h.Fs.get(f)):h.hi.getTargetData(c,l)})(n,o,fe(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:v.min(),t?i:P()))).next((a=>(Mh(n,wl(e),a),{documents:a,qs:i})))))}function Mh(r,e,t){let n=r.xs.get(e)||v.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(e,n)}class mo{constructor(){this.activeTargetIds=Sl()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fu{constructor(){this.Fo=new mo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new mo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Lh{xo(e){}shutdown(){}}/**
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
 */const _o="ConnectivityMonitor";class go{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){g(_o,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){g(_o,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qn=null;function ms(){return qn===null?qn=(function(){return 268435456+Math.round(2147483648*Math.random())})():qn++,"0x"+qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="RestConnection",Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qh{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===rr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=ms(),a=this.Go(e,t.toUriEncodedString());g(jr,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(a),l=ko(c);return this.jo(e,a,u,n,l).then((h=>(g(jr,`Received RPC '${e}' ${o}: `,h),h)),(h=>{throw Ae(jr,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",n),h}))}Jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bt})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const n=Uh[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class zh extends qh{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,s,i){const o=ms();return new Promise(((a,u)=>{const c=new mc;c.setWithCredentials(!0),c.listenOnce(_c.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case qr.NO_ERROR:const h=c.getResponseJson();g(Z,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case qr.TIMEOUT:g(Z,`RPC '${e}' ${o} timed out`),u(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const f=c.getStatus();if(g(Z,`RPC '${e}' ${o} failed with status:`,f,"response text:",c.getResponseText()),f>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const A=(function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(S)>=0?S:m.UNKNOWN})(I.status);u(new p(A,I.message))}else u(new p(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new p(m.UNAVAILABLE,"Connection failed."));break;default:E(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{g(Z,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(s);g(Z,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",l,n,15)}))}P_(e,t,n){const s=ms(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gc(),a=pc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");g(Z,`Creating RPC '${e}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);this.T_(h);let f=!1,_=!1;const I=new Bh({Ho:T=>{_?g(Z,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(g(Z,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),g(Z,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Yo:()=>h.close()}),A=(T,x,S)=>{T.listen(x,(b=>{try{S(b)}catch(q){setTimeout((()=>{throw q}),0)}}))};return A(h,kn.EventType.OPEN,(()=>{_||(g(Z,`RPC '${e}' stream ${s} transport opened.`),I.s_())})),A(h,kn.EventType.CLOSE,(()=>{_||(_=!0,g(Z,`RPC '${e}' stream ${s} transport closed`),I.__(),this.I_(h))})),A(h,kn.EventType.ERROR,(T=>{_||(_=!0,Ae(Z,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),I.__(new p(m.UNAVAILABLE,"The operation could not be completed")))})),A(h,kn.EventType.MESSAGE,(T=>{var x;if(!_){const S=T.data[0];w(!!S,16349);const b=S,q=(b==null?void 0:b.error)||((x=b[0])===null||x===void 0?void 0:x.error);if(q){g(Z,`RPC '${e}' stream ${s} received error:`,q);const G=q.status;let B=(function(Zu){const ai=j[Zu];if(ai!==void 0)return Fa(ai)})(G),J=q.message;B===void 0&&(B=m.INTERNAL,J="Unknown error status: "+G+" with message "+q.message),_=!0,I.__(new p(B,J)),h.close()}else g(Z,`RPC '${e}' stream ${s} received:`,S),I.a_(S)}})),A(a,yc.STAT_EVENT,(T=>{T.stat===ci.PROXY?g(Z,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===ci.NOPROXY&&g(Z,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{I.o_()}),0),I}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Kh(){return typeof window<"u"?window:null}function Xn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(r){return new Gl(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="PersistentStream";class _u{constructor(e,t,n,s,i,o,a,u){this.Fi=e,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mu(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(se(t.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===t&&this.W_(n,s)}),(n=>{e((()=>{const s=new p(m.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return g(po,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(g(po,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gh extends _u{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Ql(this.serializer,e),n=(function(i){if(!("targetChange"in i))return v.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?v.min():o.readTime?oe(o.readTime):v.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=us(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=sr(u)?{documents:Ka(i,u)}:{query:Ga(i,u).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=La(i,o.resumeToken);const c=os(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(v.min())>0){a.readTime=Ut(i,o.snapshotVersion.toTimestamp());const c=os(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,e);const n=Hl(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=us(this.serializer),t.removeTarget=e,this.k_(t)}}class jh extends _u{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return w(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,w(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){w(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Wl(e.writeResults,e.commitTime),n=oe(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=us(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ar(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{}class Qh extends $h{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,as(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())}))}Jo(e,t,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(e,as(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(m.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Wh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(se(t),this._a=!1):g("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="RemoteStore";class Hh{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{ht(this)&&(g(ct,"Restarting streams for network reachability change."),await(async function(u){const c=V(u);c.Ia.add(4),await Gt(c),c.Aa.set("Unknown"),c.Ia.delete(4),await Sn(c)})(this))}))})),this.Aa=new Wh(n,s)}}async function Sn(r){if(ht(r))for(const e of r.da)await e(!0)}async function Gt(r){for(const e of r.da)await e(!1)}function gu(r,e){const t=V(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Qs(t)?$s(t):jt(t).x_()&&js(t,e))}function Gs(r,e){const t=V(r),n=jt(t);t.Ta.delete(e),n.x_()&&pu(t,e),t.Ta.size===0&&(n.x_()?n.B_():ht(t)&&t.Aa.set("Unknown"))}function js(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(v.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jt(r).H_(e)}function pu(r,e){r.Ra.$e(e),jt(r).Y_(e)}function $s(r){r.Ra=new ql({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),jt(r).start(),r.Aa.aa()}function Qs(r){return ht(r)&&!jt(r).M_()&&r.Ta.size>0}function ht(r){return V(r).Ia.size===0}function yu(r){r.Ra=void 0}async function Xh(r){r.Aa.set("Online")}async function Yh(r){r.Ta.forEach(((e,t)=>{js(r,e)}))}async function Jh(r,e){yu(r),Qs(r)?(r.Aa.la(e),$s(r)):r.Aa.set("Unknown")}async function Zh(r,e,t){if(r.Aa.set("Online"),e instanceof Ma&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(r,e)}catch(n){g(ct,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await dr(r,n)}else if(e instanceof Wn?r.Ra.Ye(e):e instanceof Oa?r.Ra.it(e):r.Ra.et(e),!t.isEqual(v.min()))try{const n=await du(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Ra.Pt(o);return a.targetChanges.forEach(((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.Ta.get(c);l&&i.Ta.set(c,l.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,c)=>{const l=i.Ta.get(u);if(!l)return;i.Ta.set(u,l.withResumeToken(Q.EMPTY_BYTE_STRING,l.snapshotVersion)),pu(i,u);const h=new Re(l.target,u,c,l.sequenceNumber);js(i,h)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){g(ct,"Failed to raise snapshot:",n),await dr(r,n)}}async function dr(r,e,t){if(!ze(e))throw e;r.Ia.add(1),await Gt(r),r.Aa.set("Offline"),t||(t=()=>du(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{g(ct,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Sn(r)}))}function Iu(r,e){return e().catch((t=>dr(r,t,e)))}async function Dn(r){const e=V(r),t=qe(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ze;for(;ed(e);)try{const s=await Fh(e.localStore,n);if(s===null){e.Pa.length===0&&t.B_();break}n=s.batchId,td(e,s)}catch(s){await dr(e,s)}Tu(e)&&Eu(e)}function ed(r){return ht(r)&&r.Pa.length<10}function td(r,e){r.Pa.push(e);const t=qe(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Tu(r){return ht(r)&&!qe(r).M_()&&r.Pa.length>0}function Eu(r){qe(r).start()}async function nd(r){qe(r).na()}async function rd(r){const e=qe(r);for(const t of r.Pa)e.X_(t.mutations)}async function sd(r,e,t){const n=r.Pa.shift(),s=Ns.from(n,e,t);await Iu(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Dn(r)}async function id(r,e){e&&qe(r).Z_&&await(async function(n,s){if((function(o){return Ll(o)&&o!==m.ABORTED})(s.code)){const i=n.Pa.shift();qe(n).N_(),await Iu(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Dn(n)}})(r,e),Tu(r)&&Eu(r)}async function yo(r,e){const t=V(r);t.asyncQueue.verifyOperationInProgress(),g(ct,"RemoteStore received new credentials");const n=ht(t);t.Ia.add(3),await Gt(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Sn(t)}async function od(r,e){const t=V(r);e?(t.Ia.delete(2),await Sn(t)):e||(t.Ia.add(2),await Gt(t),t.Aa.set("Unknown"))}function jt(r){return r.Va||(r.Va=(function(t,n,s){const i=V(t);return i.ia(),new Gh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:Xh.bind(null,r),e_:Yh.bind(null,r),n_:Jh.bind(null,r),J_:Zh.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Qs(r)?$s(r):r.Aa.set("Unknown")):(await r.Va.stop(),yu(r))}))),r.Va}function qe(r){return r.ma||(r.ma=(function(t,n,s){const i=V(t);return i.ia(),new jh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:nd.bind(null,r),n_:id.bind(null,r),ea:rd.bind(null,r),ta:sd.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Dn(r)):(await r.ma.stop(),r.Pa.length>0&&(g(ct,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Ws(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hs(r,e){if(se("AsyncQueue",`${e}: ${r}`),ze(r))return new p(m.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{static emptySet(e){return new Rt(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||y.comparator(t.key,n.key):(t,n)=>y.comparator(t.key,n.key),this.keyedMap=Yt(),this.sortedSet=new L(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Rt;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.fa=new L(y.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):E(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class qt{constructor(e,t,n,s,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new qt(e,t,Rt.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class ud{constructor(){this.queries=To(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const s=V(t),i=s.queries;s.queries=To(),i.forEach(((o,a)=>{for(const u of a.wa)u.onError(n)}))})(this,new p(m.ABORTED,"Firestore shutting down"))}}function To(){return new Se((r=>Ea(r)),wr)}async function Au(r,e){const t=V(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(n=2):(i=new ad,n=e.ba()?0:1);try{switch(n){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Hs(o,`Initialization of query '${Et(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Xs(t)}async function wu(r,e){const t=V(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function cd(r,e){const t=V(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wa)a.Ca(s)&&(n=!0);o.ya=s}}n&&Xs(t)}function ld(r,e,t){const n=V(r),s=n.queries.get(e);if(s)for(const i of s.wa)i.onError(t);n.queries.delete(e)}function Xs(r){r.Da.forEach((e=>{e.next()}))}var _s,Eo;(Eo=_s||(_s={})).Fa="default",Eo.Cache="cache";class vu{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new qt(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=qt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==_s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.key=e}}class Vu{constructor(e){this.key=e}}class hd{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=P(),this.mutatedKeys=P(),this.Xa=Aa(e),this.eu=new Rt(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Io,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((l,h)=>{const f=s.get(l),_=Pn(this.query,h)?h:null,I=!!f&&this.mutatedKeys.has(f.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let T=!1;f&&_?f.data.isEqual(_.data)?I!==A&&(n.track({type:3,doc:_}),T=!0):this.iu(f,_)||(n.track({type:2,doc:_}),T=!0,(u&&this.Xa(_,u)>0||c&&this.Xa(_,c)<0)&&(a=!0)):!f&&_?(n.track({type:0,doc:_}),T=!0):f&&!_&&(n.track({type:1,doc:f}),T=!0,(u||c)&&(a=!0)),T&&(_?(o=o.add(_),i=A?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{eu:o,ru:n,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((l,h)=>(function(_,I){const A=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E(20277,{At:T})}};return A(_)-A(I)})(l.type,h.type)||this.Xa(l.doc,h.doc))),this.su(n),s=s!=null&&s;const a=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new qt(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Io,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=P(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new Vu(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new Ru(n))})),t}uu(e){this.Ha=e.qs,this.Za=P();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return qt.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ys="SyncEngine";class dd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fd{constructor(e){this.key=e,this.lu=!1}}class md{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Se((a=>Ea(a)),wr),this.Tu=new Map,this.Iu=new Set,this.du=new L(y.comparator),this.Eu=new Map,this.Au=new Us,this.Ru={},this.Vu=new Map,this.mu=ut.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function _d(r,e,t=!0){const n=xu(r);let s;const i=n.Pu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Pu(n,e,t,!0),s}async function gd(r,e){const t=xu(r);await Pu(t,e,!0,!1)}async function Pu(r,e,t,n){const s=await Oh(r.localStore,fe(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await pd(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&gu(r.remoteStore,s),a}async function pd(r,e,t,n,s){r.gu=(h,f,_)=>(async function(A,T,x,S){let b=T.view.nu(x);b.Ds&&(b=await fo(A.localStore,T.query,!1).then((({documents:J})=>T.view.nu(J,b))));const q=S&&S.targetChanges.get(T.targetId),G=S&&S.targetMismatches.get(T.targetId)!=null,B=T.view.applyChanges(b,A.isPrimaryClient,q,G);return wo(A,T.targetId,B._u),B.snapshot})(r,h,f,_);const i=await fo(r.localStore,e,!0),o=new hd(e,i.qs),a=o.nu(i.documents),u=bn.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);wo(r,t,c._u);const l=new dd(e,t,o);return r.Pu.set(e,l),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),c.snapshot}async function yd(r,e,t){const n=V(r),s=n.Pu.get(e),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((o=>!wr(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fs(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Gs(n.remoteStore,s.targetId),gs(n,s.targetId)})).catch(lt)):(gs(n,s.targetId),await fs(n.localStore,s.targetId,!0))}async function Id(r,e){const t=V(r),n=t.Pu.get(e),s=t.Tu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Gs(t.remoteStore,n.targetId))}async function Td(r,e,t){const n=Nu(r);try{const s=await(function(o,a){const u=V(o),c=k.now(),l=a.reduce(((_,I)=>_.add(I.key)),P());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let I=ce(),A=P();return u.Os.getEntries(_,l).next((T=>{I=T,I.forEach(((x,S)=>{S.isValidDocument()||(A=A.add(x))}))})).next((()=>u.localDocuments.getOverlayedDocuments(_,I))).next((T=>{h=T;const x=[];for(const S of a){const b=Ol(S,h.get(S.key).overlayedDocument);b!=null&&x.push(new De(S.key,b,da(b.value.mapValue),ne.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,x,a)})).next((T=>{f=T;const x=T.applyToLocalDocumentSet(h,A);return u.documentOverlayCache.saveOverlays(_,T.batchId,x)}))})).then((()=>({batchId:f.batchId,changes:va(h)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new L(R)),c=c.insert(a,u),o.Ru[o.currentUser.toKey()]=c})(n,s.batchId,t),await Cn(n,s.changes),await Dn(n.remoteStore)}catch(s){const i=Hs(s,"Failed to persist write");t.reject(i)}}async function bu(r,e){const t=V(r);try{const n=await Nh(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(w(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?w(o.lu,14607):s.removedDocuments.size>0&&(w(o.lu,42227),o.lu=!1))})),await Cn(t,n,e)}catch(n){await lt(n)}}function Ao(r,e,t){const n=V(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Pu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=V(o);u.onlineState=a;let c=!1;u.queries.forEach(((l,h)=>{for(const f of h.wa)f.va(a)&&(c=!0)})),c&&Xs(u)})(n.eventManager,e),s.length&&n.hu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Ed(r,e,t){const n=V(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Eu.get(e),i=s&&s.key;if(i){let o=new L(y.comparator);o=o.insert(i,z.newNoDocument(i,v.min()));const a=P().add(i),u=new Pr(v.min(),new Map,new L(R),o,a);await bu(n,u),n.du=n.du.remove(i),n.Eu.delete(e),Js(n)}else await fs(n.localStore,e,!1).then((()=>gs(n,e,t))).catch(lt)}async function Ad(r,e){const t=V(r),n=e.batch.batchId;try{const s=await xh(t.localStore,e);Du(t,n,null),Su(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Cn(t,s)}catch(s){await lt(s)}}async function wd(r,e,t){const n=V(r);try{const s=await(function(o,a){const u=V(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next((h=>(w(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(n.localStore,e);Du(n,e,t),Su(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Cn(n,s)}catch(s){await lt(s)}}function Su(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Du(r,e,t){const n=V(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ru[n.currentUser.toKey()]=s}}function gs(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||Cu(r,n)}))}function Cu(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Gs(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Js(r))}function wo(r,e,t){for(const n of t)n instanceof Ru?(r.Au.addReference(n.key,e),vd(r,n)):n instanceof Vu?(g(Ys,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||Cu(r,n.key)):E(19791,{yu:n})}function vd(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(g(Ys,"New document in limbo: "+t),r.Iu.add(n),Js(r))}function Js(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new y(N.fromString(e)),n=r.mu.next();r.Eu.set(n,new fd(t)),r.du=r.du.insert(t,n),gu(r.remoteStore,new Re(fe(Vn(t.path)),n,"TargetPurposeLimboResolution",de.ue))}}async function Cn(r,e,t){const n=V(r),s=[],i=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((a,u)=>{o.push(n.gu(u,e,t).then((c=>{var l;if((c||t)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=zs.Es(u.targetId,c);i.push(h)}})))})),await Promise.all(o),n.hu.J_(s),await(async function(u,c){const l=V(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>d.forEach(c,(f=>d.forEach(f.Is,(_=>l.persistence.referenceDelegate.addReference(h,f.targetId,_))).next((()=>d.forEach(f.ds,(_=>l.persistence.referenceDelegate.removeReference(h,f.targetId,_)))))))))}catch(h){if(!ze(h))throw h;g(Ks,"Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const _=l.Fs.get(f),I=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(I);l.Fs=l.Fs.insert(f,A)}}})(n.localStore,i))}async function Rd(r,e){const t=V(r);if(!t.currentUser.isEqual(e)){g(Ys,"User change. New user:",e.toKey());const n=await hu(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((a=>{a.forEach((u=>{u.reject(new p(m.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Cn(t,n.Bs)}}function Vd(r,e){const t=V(r),n=t.Eu.get(e);if(n&&n.lu)return P().add(n.key);{let s=P();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const a=t.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function xu(r){const e=V(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ed.bind(null,e),e.hu.J_=cd.bind(null,e.eventManager),e.hu.pu=ld.bind(null,e.eventManager),e}function Nu(r){const e=V(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ad.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wd.bind(null,e),e}class An{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return lu(this.persistence,new cu,e.initialUser,this.serializer)}Du(e){return new qs(Dr.Vi,this.serializer)}bu(e){return new fu}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}An.provider={build:()=>new An};class Pd extends An{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){w(this.persistence.referenceDelegate instanceof hr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new su(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ee.withCacheSize(this.cacheSizeBytes):ee.DEFAULT;return new qs((n=>hr.Vi(n,t)),this.serializer)}}class bd extends An{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await Nu(this.Mu.syncEngine),await Dn(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return lu(this.persistence,new cu,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new su(n,e.asyncQueue,t)}Fu(e,t){const n=new Fc(t,this.persistence);return new kc(e.asyncQueue,n)}Du(e){const t=bh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?ee.withCacheSize(this.cacheSizeBytes):ee.DEFAULT;return new Bs(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Kh(),Xn(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new fu}}class fr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ao(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rd.bind(null,this.syncEngine),await od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ud})()}createDatastore(e){const t=Cr(e.databaseInfo.databaseId),n=(function(i){return new zh(i)})(e.databaseInfo);return(function(i,o,a,u){return new Qh(i,o,a,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new Hh(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ao(this.syncEngine,t,0)),(function(){return go.C()?new go:new Lh})())}createSyncEngine(e,t){return(function(s,i,o,a,u,c,l){const h=new md(s,i,o,a,u,c);return l&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=V(s);g(ct,"RemoteStore shutting down."),i.Ia.add(5),await Gt(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}fr.provider={build:()=>new fr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):se("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="FirestoreClient";class Sd{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=X.UNAUTHENTICATED,this.clientId=Ts.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{g(Be,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(g(Be,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Hs(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function $r(r,e){r.asyncQueue.verifyOperationInProgress(),g(Be,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await hu(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ae("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{g("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ae("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=e}async function vo(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Fu(r);g(Be,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>yo(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>yo(e.remoteStore,s))),r._onlineComponents=e}async function Fu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){g(Be,"Using user provided OfflineComponentProvider");try{await $r(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===m.FAILED_PRECONDITION||s.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ae("Error using user provided cache. Falling back to memory cache: "+t),await $r(r,new An)}}else g(Be,"Using default OfflineComponentProvider"),await $r(r,new Pd(void 0));return r._offlineComponents}async function Zs(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(g(Be,"Using user provided OnlineComponentProvider"),await vo(r,r._uninitializedComponentsProvider._online)):(g(Be,"Using default OnlineComponentProvider"),await vo(r,new fr))),r._onlineComponents}function Ou(r){return Fu(r).then((e=>e.persistence))}function Mu(r){return Zs(r).then((e=>e.remoteStore))}function Dd(r){return Zs(r).then((e=>e.syncEngine))}async function ps(r){const e=await Zs(r),t=e.eventManager;return t.onListen=_d.bind(null,e.syncEngine),t.onUnlisten=yd.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gd.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Id.bind(null,e.syncEngine),t}function Cd(r){return r.asyncQueue.enqueue((async()=>{const e=await Ou(r),t=await Mu(r);return e.setNetworkEnabled(!0),(function(s){const i=V(s);return i.Ia.delete(0),Sn(i)})(t)}))}function xd(r){return r.asyncQueue.enqueue((async()=>{const e=await Ou(r),t=await Mu(r);return e.setNetworkEnabled(!1),(async function(s){const i=V(s);i.Ia.add(0),await Gt(i),i.Aa.set("Offline")})(t)}))}function Nd(r,e,t={}){const n=new Ve;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new ku({next:f=>{l.Ou(),o.enqueueAndForget((()=>wu(i,h)));const _=f.docs.has(a);!_&&f.fromCache?c.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&u&&u.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new vu(Vn(a.path),l,{includeMetadataChanges:!0,ka:!0});return Au(i,h)})(await ps(r),r.asyncQueue,e,t,n))),n.promise}/**
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
 */function Lu(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="firestore.googleapis.com",Vo=!0;class Po{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uu,this.ssl=Vo}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Vo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hh)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lu((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xr{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Po({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Po(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Ec;switch(n.type){case"firstParty":return new Rc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Ro.get(t);n&&(g("ComponentProvider","Removing Datastore"),Ro.delete(t),n.terminate())})(this),Promise.resolve()}}function kd(r,e,t,n={}){var s;r=ie(r,xr);const i=ko(e),o=r._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;i&&(uc(`https://${u}`),cc("Firestore",!0)),o.host!==Uu&&o.host!==u&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:n});if(!lc(c,a)&&(r._setSettings(c),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=X.MOCK_USER;else{l=hc(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new X(f)}r._authCredentials=new Ac(new Lo(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new dt(this.firestore,e,this._query)}}class K{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Me(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K(this.firestore,e,this._key)}toJSON(){return{type:K._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(wn(t,K._jsonSchema))return new K(e,n||null,new y(N.fromString(t.referencePath)))}}K._jsonSchemaVersion="firestore/documentReference/1.0",K._jsonSchema={type:$("string",K._jsonSchemaVersion),referencePath:$("string")};class Me extends dt{constructor(e,t,n){super(e,t,Vn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new K(this.firestore,null,new y(e))}withConverter(e){return new Me(this.firestore,e,this._path)}}function Xd(r,e,...t){if(r=Ee(r),Bo("collection","path",e),r instanceof xr){const n=N.fromString(e,...t);return gi(n),new Me(r,null,n)}{if(!(r instanceof K||r instanceof Me))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(N.fromString(e,...t));return gi(n),new Me(r.firestore,null,n)}}function Fd(r,e,...t){if(r=Ee(r),arguments.length===1&&(e=Ts.newId()),Bo("doc","path",e),r instanceof xr){const n=N.fromString(e,...t);return _i(n),new K(r,null,new y(n))}{if(!(r instanceof K||r instanceof Me))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(N.fromString(e,...t));return _i(n),new K(r.firestore,r instanceof Me?r.converter:null,new y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="AsyncQueue";class So{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mu(this,"async_queue_retry"),this.oc=()=>{const n=Xn();n&&g(bo,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=Xn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xn();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ve;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ze(e))throw e;g(bo,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,se("INTERNAL UNHANDLED ERROR: ",Do(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ws.createAndSchedule(this,e,t,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&E(47125,{hc:Do(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Do(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class _e extends xr{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new So,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new So(e),this._firestoreClient=void 0,await e}}}function Yd(r,e){const t=typeof r=="object"?r:ic(),n=typeof r=="string"?r:rr,s=oc(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=ac("firestore");i&&kd(s,...i)}return s}function xn(r){if(r._terminated)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qu(r),r._firestoreClient}function qu(r){var e,t,n;const s=r._freezeSettings(),i=(function(a,u,c,l){return new ll(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Lu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Sd(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}})(r._componentsProvider))}function Jd(r,e){Ae("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Od(r,fr.provider,{build:n=>new bd(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function Od(r,e,t){if((r=ie(r,_e))._firestoreClient||r._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},qu(r)}function Zd(r){return Cd(xn(r=ie(r,_e)))}function ef(r){return xd(xn(r=ie(r,_e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this._byteString=e}static fromBase64String(e){try{return new he(Q.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new he(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:he._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wn(e,he._jsonSchema))return he.fromBase64String(e.bytes)}}he._jsonSchemaVersion="firestore/bytes/1.0",he._jsonSchema={type:$("string",he._jsonSchemaVersion),bytes:$("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ie._jsonSchemaVersion}}static fromJSON(e){if(wn(e,Ie._jsonSchema))return new Ie(e.latitude,e.longitude)}}Ie._jsonSchemaVersion="firestore/geoPoint/1.0",Ie._jsonSchema={type:$("string",Ie._jsonSchemaVersion),latitude:$("number"),longitude:$("number")};/**
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
 */class Te{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Te._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wn(e,Te._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Te(e.vectorValues);throw new p(m.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Te._jsonSchemaVersion="firestore/vectorValue/1.0",Te._jsonSchema={type:$("string",Te._jsonSchemaVersion),vectorValues:$("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=/^__.*__$/;class Ld{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new De(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kt(e,this.data,t,this.fieldTransforms)}}class Bu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new De(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{Ec:r})}}class ei{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ei(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.fc(e),s}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return mr(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zu(this.Ec)&&Md.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ud{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Cr(e)}Dc(e,t,n,s=!1){return new ei({Ec:e,methodName:t,bc:n,path:U.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fr(r){const e=r._freezeSettings(),t=Cr(r._databaseId);return new Ud(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ku(r,e,t,n,s,i={}){const o=r.Dc(i.merge||i.mergeFields?2:0,e,t,s);ni("Data must be an object, but it was:",o,n);const a=Gu(n,o);let u,c;if(i.merge)u=new ae(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=ys(e,h,t);if(!o.contains(f))throw new p(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$u(l,f)||l.push(f)}u=new ae(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Ld(new te(a),u,c)}class Or extends kr{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Or}}class ti extends kr{_toFieldTransform(e){return new Ca(e.path,new Ot)}isEqual(e){return e instanceof ti}}function qd(r,e,t,n){const s=r.Dc(1,e,t);ni("Data must be an object, but it was:",s,n);const i=[],o=te.empty();Ke(n,((u,c)=>{const l=ri(e,u,t);c=Ee(c);const h=s.gc(l);if(c instanceof Or)i.push(l);else{const f=Nn(c,h);f!=null&&(i.push(l),o.set(l,f))}}));const a=new ae(i);return new Bu(o,a,s.fieldTransforms)}function Bd(r,e,t,n,s,i){const o=r.Dc(1,e,t),a=[ys(e,n,t)],u=[s];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ys(e,i[f])),u.push(i[f+1]);const c=[],l=te.empty();for(let f=a.length-1;f>=0;--f)if(!$u(c,a[f])){const _=a[f];let I=u[f];I=Ee(I);const A=o.gc(_);if(I instanceof Or)c.push(_);else{const T=Nn(I,A);T!=null&&(c.push(_),l.set(_,T))}}const h=new ae(c);return new Bu(l,h,o.fieldTransforms)}function zd(r,e,t,n=!1){return Nn(t,r.Dc(n?4:3,e))}function Nn(r,e){if(ju(r=Ee(r)))return ni("Unsupported field value:",e,r),Gu(r,e);if(r instanceof kr)return(function(n,s){if(!zu(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let u=Nn(a,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Dl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=k.fromDate(n);return{timestampValue:Ut(s.serializer,i)}}if(n instanceof k){const i=new k(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ut(s.serializer,i)}}if(n instanceof Ie)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof he)return{bytesValue:La(s.serializer,n._byteString)};if(n instanceof K){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Os(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Te)return(function(o,a){return{mapValue:{fields:{[bs]:{stringValue:Ss},[xt]:{arrayValue:{values:o.toArray().map((c=>{if(typeof c!="number")throw a.wc("VectorValues must only contain numeric values.");return Cs(a.serializer,c)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${_r(n)}`)})(r,e)}function Gu(r,e){const t={};return ra(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ke(r,((n,s)=>{const i=Nn(s,e.Vc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function ju(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof k||r instanceof Ie||r instanceof he||r instanceof K||r instanceof kr||r instanceof Te)}function ni(r,e,t){if(!ju(t)||!zo(t)){const n=_r(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function ys(r,e,t){if((e=Ee(e))instanceof Nr)return e._internalPath;if(typeof e=="string")return ri(r,e);throw mr("Field path arguments must be of type string or ",r,!1,void 0,t)}const Kd=new RegExp("[~\\*/\\[\\]]");function ri(r,e,t){if(e.search(Kd)>=0)throw mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Nr(...e.split("."))._internalPath}catch{throw mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function mr(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new p(m.INVALID_ARGUMENT,a+r+u)}function $u(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new K(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gd extends Qu{data(){return super.data()}}function Mr(r,e){return typeof e=="string"?ri(r,e):e instanceof Nr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class si{}class Wu extends si{}function tf(r,e,...t){let n=[];e instanceof si&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof ii)).length,a=i.filter((u=>u instanceof Lr)).length;if(o>1||o>0&&a>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Lr extends Wu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Lr(e,t,n)}_apply(e){const t=this._parse(e);return Hu(e._query,t),new dt(e.firestore,e.converter,ss(e._query,t))}_parse(e){const t=Fr(e.firestore);return(function(i,o,a,u,c,l,h){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){No(h,l);const I=[];for(const A of h)I.push(xo(u,i,A));f={arrayValue:{values:I}}}else f=xo(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||No(h,l),f=zd(a,o,h,l==="in"||l==="not-in");return D.create(c,l,f)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function nf(r,e,t){const n=e,s=Mr("where",r);return Lr._create(s,n,t)}class ii extends si{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ii(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:F.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Hu(o,u),o=ss(o,u)})(e._query,t),new dt(e.firestore,e.converter,ss(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oi extends Wu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oi(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tn(i,o)})(e._query,this._field,this._direction);return new dt(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new zt(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function rf(r,e="asc"){const t=e,n=Mr("orderBy",r);return oi._create(n,t)}function xo(r,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ta(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(N.fromString(t));if(!y.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yn(r,new y(n))}if(t instanceof K)return yn(r,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_r(t)}.`)}function No(r,e){if(!Array.isArray(r)||r.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hu(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $d{convertValue(e,t="none"){switch(Le(e)){case 0:return null;case 1:return e.booleanValue;case 2:return M(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(be(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw E(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ke(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[xt].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((o=>M(o.doubleValue)));return new Te(i)}convertGeoPoint(e){return new Ie(M(e.latitude),M(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Er(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(gn(e));default:return null}}convertTimestamp(e){const t=Pe(e);return new k(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=N.fromString(e);w(Wa(n),9688,{name:e});const s=new st(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(t)||se(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class en{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nt extends Qu{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Mr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new p(m.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=nt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}nt._jsonSchemaVersion="firestore/documentSnapshot/1.0",nt._jsonSchema={type:$("string",nt._jsonSchemaVersion),bundleSource:$("string","DocumentSnapshot"),bundleName:$("string"),bundle:$("string")};class Yn extends nt{data(e={}){return super.data(e)}}class Vt{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new en(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Yn(this._firestore,this._userDataWriter,n.key,n,new en(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const u=new Yn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new en(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new Yn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new en(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Qd(a.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new p(m.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ts.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r){r=ie(r,K);const e=ie(r.firestore,_e);return Nd(xn(e),r._key).then((t=>Ju(e,r,t)))}Vt._jsonSchemaVersion="firestore/querySnapshot/1.0",Vt._jsonSchema={type:$("string",Vt._jsonSchemaVersion),bundleSource:$("string","QuerySnapshot"),bundleName:$("string"),bundle:$("string")};class Yu extends $d{constructor(e){super(),this.firestore=e}convertBytes(e){return new he(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}function of(r,e,t){r=ie(r,K);const n=ie(r.firestore,_e),s=Xu(r.converter,e);return Ur(n,[Ku(Fr(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ne.none())])}function af(r,e,t,...n){r=ie(r,K);const s=ie(r.firestore,_e),i=Fr(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Nr?Bd(i,"updateDoc",r._key,e,t,n):qd(i,"updateDoc",r._key,e),Ur(s,[o.toMutation(r._key,ne.exists(!0))])}function uf(r){return Ur(ie(r.firestore,_e),[new Vr(r._key,ne.none())])}function cf(r,e){const t=ie(r.firestore,_e),n=Fd(r),s=Xu(r.converter,e);return Ur(t,[Ku(Fr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ne.exists(!1))]).then((()=>n))}function lf(r,...e){var t,n,s;r=Ee(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Co(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Co(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(r instanceof K)c=ie(r.firestore,_e),l=Vn(r._key.path),u={next:h=>{e[o]&&e[o](Ju(c,r,h))},error:e[o+1],complete:e[o+2]};else{const h=ie(r,dt);c=ie(h.firestore,_e),l=h._query;const f=new Yu(c);u={next:_=>{e[o]&&e[o](new Vt(c,f,h,_))},error:e[o+1],complete:e[o+2]},jd(r._query)}return(function(f,_,I,A){const T=new ku(A),x=new vu(_,T,I);return f.asyncQueue.enqueueAndForget((async()=>Au(await ps(f),x))),()=>{T.Ou(),f.asyncQueue.enqueueAndForget((async()=>wu(await ps(f),x)))}})(xn(c),l,a,u)}function Ur(r,e){return(function(n,s){const i=new Ve;return n.asyncQueue.enqueueAndForget((async()=>Td(await Dd(n),s,i))),i.promise})(xn(r),e)}function Ju(r,e,t){const n=t.docs.get(e._key),s=new Yu(r);return new nt(r,s,e._key,n,new en(t.hasPendingWrites,t.fromCache),e.converter)}function hf(){return new ti("serverTimestamp")}(function(e,t=!0){(function(s){Bt=s})(fc),tc(new nc("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new _e(new wc(n.getProvider("auth-internal")),new Vc(o,n.getProvider("app-check-internal")),(function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new st(c.options.projectId,l)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),ui(li,hi,e),ui(li,hi,"esm2017")})();export{k as T,Zd as a,lf as b,Xd as c,ef as d,Jd as e,uf as f,Yd as g,Fd as h,cf as i,sf as j,hf as k,rf as o,tf as q,of as s,af as u,nf as w};
