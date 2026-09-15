import{F as Dl,d as ee,L as xl,f as ke,o as rr,k as ui,p as Qa,u as Nl,y as kl,n as Fl,l as Wa,z as Ol,A as Ml,I as yt,B as Ll,D as ql,h as Or,G as Ha,X as Ul,H as Bl,J as Ps,K as zl,M as Gl,W as yr,N as $l,O as Io,P as Ja,Q as Kl,S as jl,_ as Ql,C as Wl,r as To,c as Hl}from"./firebase-core-BKVkiGoc.js";const Eo="@firebase/firestore",wo="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new xl("@firebase/firestore");function $t(){return Xe.logLevel}function Um(r){Xe.setLogLevel(r)}function p(r,...e){if(Xe.logLevel<=ke.DEBUG){const t=e.map(ci);Xe.debug(`Firestore (${pn}): ${r}`,...t)}}function J(r,...e){if(Xe.logLevel<=ke.ERROR){const t=e.map(ci);Xe.error(`Firestore (${pn}): ${r}`,...t)}}function fe(r,...e){if(Xe.logLevel<=ke.WARN){const t=e.map(ci);Xe.warn(`Firestore (${pn}): ${r}`,...t)}}function ci(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function A(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Xa(r,n,t)}function Xa(r,e,t){let n=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw J(n),new Error(n)}function v(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Xa(e,s,n)}function Bm(r,e){r||A(57014,e)}function w(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Dl{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(se.UNAUTHENTICATED)))}shutdown(){}}class Xl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Yl{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){v(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ie,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ie)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(v(typeof n.accessToken=="string",31837,{l:n}),new Ya(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return v(e===null||typeof e=="string",2055,{h:e}),new se(e)}}class Zl{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eh{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Zl(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Os{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class th{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hl(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){v(this.o===void 0,3512);const n=i=>{i.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Os(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(v(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Os(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class zm{getToken(){return Promise.resolve(new Os(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function li(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=nh(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function P(r,e){return r<e?-1:r>e?1:0}function Ms(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return P(n,s);{const i=li(),o=rh(i.encode(Ao(r,t)),i.encode(Ao(e,t)));return o!==0?o:P(n,s)}}t+=n>65535?2:1}return P(r.length,e.length)}function Ao(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function rh(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return P(r[t],e[t]);return P(r.length,e.length)}function Jt(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function Za(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="__name__";class Re{constructor(e,t,n){t===void 0?t=0:t>e.length&&A(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&A(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Re.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Re?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Re.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return P(e.length,t.length)}static compareSegments(e,t){const n=Re.isNumericId(e),s=Re.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Re.extractNumericId(e).compare(Re.extractNumericId(t)):Ms(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}}class D extends Re{construct(e,t,n){return new D(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new D(t)}static emptyPath(){return new D([])}}const sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends Re{construct(e,t,n){return new j(e,t,n)}static isValidIdentifier(e){return sh.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ls}static keyField(){return new j([Ls])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new g(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new g(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new g(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(D.fromString(e))}static fromName(e){return new E(D.fromString(e).popFirst(5))}static empty(){return new E(D.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&D.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return D.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new D(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e,t){if(!t)throw new g(m.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function ih(r,e,t,n){if(e===!0&&n===!0)throw new g(m.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vo(r){if(!E.isDocumentKey(r))throw new g(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ro(r){if(E.isDocumentKey(r))throw new g(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function eu(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Zr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":A(12329,{type:typeof r})}function x(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new g(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zr(r);throw new g(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function tu(r,e){if(e<=0)throw new g(m.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Z(r,e){const t={typeString:r};return e&&(t.value=e),t}function xt(r,e){if(!eu(r))throw new g(m.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new g(m.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=-62135596800,Po=1e6;class M{static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Po);return new M(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vo)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Po}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:M._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xt(e,M._jsonSchema))return new M(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}M._jsonSchemaVersion="firestore/timestamp/1.0",M._jsonSchema={type:Z("string",M._jsonSchemaVersion),seconds:Z("number"),nanoseconds:Z("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static fromTimestamp(e){return new R(e)}static min(){return new R(new M(0,0))}static max(){return new R(new M(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xt=-1;class Yt{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function qs(r){return r.fields.find((e=>e.kind===2))}function ht(r){return r.fields.filter((e=>e.kind!==2))}function oh(r,e){let t=P(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=ah(r.fields[n],e.fields[n]),t!==0)return t;return P(r.fields.length,e.fields.length)}Yt.UNKNOWN_ID=-1;class It{constructor(e,t){this.fieldPath=e,this.kind=t}}function ah(r,e){const t=j.comparator(r.fieldPath,e.fieldPath);return t!==0?t:P(r.kind,e.kind)}class Zt{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zt(0,Ee.min())}}function nu(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=R.fromTimestamp(n===1e9?new M(t+1,0):new M(t,n));return new Ee(s,E.empty(),e)}function ru(r){return new Ee(r.readTime,r.key,Xt)}class Ee{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ee(R.min(),E.empty(),Xt)}static max(){return new Ee(R.max(),E.empty(),Xt)}}function fi(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(r.documentKey,e.documentKey),t!==0?t:P(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(r){if(r.code!==m.FAILED_PRECONDITION||r.message!==su)throw r;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):f.reject(t)}static resolve(e){return new f(((t,n)=>{t(e)}))}static reject(e){return new f(((t,n)=>{n(e)}))}static waitFor(e){return new f(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=f.resolve(!1);for(const n of e)t=t.next((s=>s?f.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new f(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>s(l)))}}))}static doWhile(e,t){return new f(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="SimpleDb";class es{static open(e,t,n,s){try{return new es(t,e.transaction(s,n))}catch(i){throw new Fn(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ie,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Fn(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=mi(n.target.error);this.S.reject(new Fn(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(p(pe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ch(t)}}class Se{static delete(e){return p(pe,"Removing database:",e),ft(Ll().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ql())return!1;if(Se.F())return!0;const e=Or(),t=Se.M(e),n=0<t&&t<10,s=ou(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Se.M(Or())===12.2&&J("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(p(pe,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Fn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new g(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new g(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Fn(e,o))},s.onupgradeneeded=i=>{p(pe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next((()=>{p(pe,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const n=t.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var n;t.newVersion===null&&(fe('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=es.open(this.db,e,i?"readonly":"readwrite",n),u=s(a).next((c=>(a.v(),c))).catch((c=>(a.abort(c),f.reject(c)))).toPromise();return u.catch((()=>{})),await a.D,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(p(pe,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ou(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class uh{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return ft(this.$.delete())}}class Fn extends g{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function it(r){return r.name==="IndexedDbTransactionError"}class ch{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(p(pe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(p(pe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ft(n)}add(e){return p(pe,"ADD",this.store.name,e,e),ft(this.store.add(e))}get(e){return ft(this.store.get(e)).next((t=>(t===void 0&&(t=null),p(pe,"GET",this.store.name,e,t),t)))}delete(e){return p(pe,"DELETE",this.store.name,e),ft(this.store.delete(e))}count(){return p(pe,"COUNT",this.store.name),ft(this.store.count())}j(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new f(((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(n),o=[];return this.J(i,((a,u)=>{o.push(u)})).next((()=>o))}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new f(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}Y(e,t){p(pe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const s=this.cursor(n);return this.J(s,((i,o,a)=>a.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.J(s,t)}ee(e){const t=this.cursor({});return new f(((n,s)=>{t.onerror=i=>{const o=mi(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}J(e,t){const n=[];return new f(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new uh(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch((h=>(u.done(),f.reject(h))));n.push(l)}u.isDone?s():u.W===null?a.continue():a.continue(u.W)}})).next((()=>f.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ft(r){return new f(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=mi(n.target.error);t(s)}}))}let bo=!1;function mi(r){const e=Se.M(Or());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bo||(bo=!0,setTimeout((()=>{throw n}),0)),n}}return r}const On="IndexBackfiller";class lh{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){p(On,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();p(On,`Documents written: ${t}`)}catch(t){it(t)?p(On,"Ignoring IndexedDB error during index backfill: ",t):await st(t)}await this.ne(6e4)}))}}class hh{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const n=new Set;let s=t,i=!0;return f.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return p(On,`Processing collection: ${o}`),this.se(e,o,s).next((a=>{s-=a,n.add(o)}));i=!1})))).next((()=>t-s))}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.oe(s,i))).next((a=>(p(On,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}oe(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=ru(i);fi(o,n)>0&&(n=o)})),new Ee(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}me.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=-1;function sr(r){return r==null}function Gn(r){return r===0&&1/r==-1/0}function au(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="";function he(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=So(e)),e=dh(r.get(t),e);return So(e)}function dh(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Mr:t+="";break;default:t+=i}}return t}function So(r){return r+Mr+""}function Pe(r){const e=r.length;if(v(e>=2,64408,{path:r}),e===2)return v(r.charAt(0)===Mr&&r.charAt(1)==="",56145,{path:r}),D.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Mr,i);switch((o<0||o>t)&&A(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:A(61167,{path:r})}i=o+2}return new D(n)}/**
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
 */const dt="remoteDocuments",ir="owner",Lt="owner",$n="mutationQueues",fh="userId",we="mutations",Co="batchId",pt="userMutationsIndex",Do=["userId","batchId"];/**
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
 */function Vr(r,e){return[r,he(e)]}function uu(r,e,t){return[r,he(e),t]}const mh={},en="documentMutations",Lr="remoteDocumentsV14",_h=["prefixPath","collectionGroup","readTime","documentId"],Pr="documentKeyIndex",gh=["prefixPath","collectionGroup","documentId"],cu="collectionGroupIndex",ph=["collectionGroup","readTime","prefixPath","documentId"],Kn="remoteDocumentGlobal",Us="remoteDocumentGlobalKey",tn="targets",lu="queryTargetsIndex",yh=["canonicalId","targetId"],nn="targetDocuments",Ih=["targetId","path"],_i="documentTargetsIndex",Th=["path","targetId"],qr="targetGlobalKey",Tt="targetGlobal",jn="collectionParents",Eh=["collectionId","parent"],rn="clientMetadata",wh="clientId",ts="bundles",Ah="bundleId",ns="namedQueries",vh="name",gi="indexConfiguration",Rh="indexId",Bs="collectionGroupIndex",Vh="collectionGroup",Mn="indexState",Ph=["indexId","uid"],hu="sequenceNumberIndex",bh=["uid","sequenceNumber"],Ln="indexEntries",Sh=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],du="documentKeyIndex",Ch=["indexId","uid","orderedDocumentKey"],rs="documentOverlays",Dh=["userId","collectionPath","documentId"],zs="collectionPathOverlayIndex",xh=["userId","collectionPath","largestBatchId"],fu="collectionGroupOverlayIndex",Nh=["userId","collectionGroup","largestBatchId"],pi="globals",kh="name",mu=[$n,we,en,dt,tn,ir,Tt,nn,rn,Kn,jn,ts,ns],Fh=[...mu,rs],_u=[$n,we,en,Lr,tn,ir,Tt,nn,rn,Kn,jn,ts,ns,rs],gu=_u,yi=[...gu,gi,Mn,Ln],Oh=yi,pu=[...yi,pi],Mh=pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends iu{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function te(r,e){const t=w(r);return Se.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ot(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function yu(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Iu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ir(this.root,e,this.comparator,!0)}}class Ir{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ae.RED,this.left=s??ae.EMPTY,this.right=i??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ae(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw A(43730,{key:this.key,value:this.value});if(this.right.isRed())throw A(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw A(27949);return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw A(57766)}get value(){throw A(16141)}get color(){throw A(16727)}get left(){throw A(29726)}get right(){throw A(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(e){return new No(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class No{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function qt(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.fields=e,e.sort(j.comparator)}static empty(){return new _e([])}unionWith(e){let t=new q(j.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new _e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jt(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tu("Invalid base64 string: "+i):i}})(e);return new H(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new H(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}H.EMPTY_BYTE_STRING=new H("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oe(r){if(v(!!r,39018),typeof r=="string"){let e=0;const t=Lh.exec(r);if(v(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:K(r.seconds),nanos:K(r.nanos)}}function K(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Me(r){return typeof r=="string"?H.fromBase64String(r):H.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="server_timestamp",wu="__type__",Au="__previous_value__",vu="__local_write_time__";function ss(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[wu])===null||t===void 0?void 0:t.stringValue)===Eu}function is(r){const e=r.mapValue.fields[Au];return ss(e)?is(e):e}function Qn(r){const e=Oe(r.mapValue.fields[vu].timestampValue);return new M(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,n,s,i,o,a,u,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l}}const Wn="(default)";class wt{constructor(e,t){this.projectId=e,this.database=t||Wn}static empty(){return new wt("","")}get isDefaultDatabase(){return this.database===Wn}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="__type__",Ru="__max__",Qe={mapValue:{fields:{__type__:{stringValue:Ru}}}},Ti="__vector__",sn="value",br={nullValue:"NULL_VALUE"};function Ye(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ss(r)?4:Vu(r)?9007199254740991:os(r)?10:11:A(28295,{value:r})}function Ne(r,e){if(r===e)return!0;const t=Ye(r);if(t!==Ye(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Qn(r).isEqual(Qn(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Oe(s.timestampValue),a=Oe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return Me(s.bytesValue).isEqual(Me(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return K(s.geoPointValue.latitude)===K(i.geoPointValue.latitude)&&K(s.geoPointValue.longitude)===K(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return K(s.integerValue)===K(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=K(s.doubleValue),a=K(i.doubleValue);return o===a?Gn(o)===Gn(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return Jt(r.arrayValue.values||[],e.arrayValue.values||[],Ne);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(xo(o)!==xo(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ne(o[u],a[u])))return!1;return!0})(r,e);default:return A(52216,{left:r})}}function Hn(r,e){return(r.values||[]).find((t=>Ne(t,e)))!==void 0}function Ze(r,e){if(r===e)return 0;const t=Ye(r),n=Ye(e);if(t!==n)return P(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=K(i.integerValue||i.doubleValue),u=K(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,e);case 3:return ko(r.timestampValue,e.timestampValue);case 4:return ko(Qn(r),Qn(e));case 5:return Ms(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=Me(i),u=Me(o);return a.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=P(a[c],u[c]);if(l!==0)return l}return P(a.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=P(K(i.latitude),K(o.latitude));return a!==0?a:P(K(i.longitude),K(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Fo(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var a,u,c,l;const h=i.fields||{},d=o.fields||{},_=(a=h[sn])===null||a===void 0?void 0:a.arrayValue,I=(u=d[sn])===null||u===void 0?void 0:u.arrayValue,y=P(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((l=I==null?void 0:I.values)===null||l===void 0?void 0:l.length)||0);return y!==0?y:Fo(_,I)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Qe.mapValue&&o===Qe.mapValue)return 0;if(i===Qe.mapValue)return 1;if(o===Qe.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=Ms(u[h],l[h]);if(d!==0)return d;const _=Ze(a[u[h]],c[l[h]]);if(_!==0)return _}return P(u.length,l.length)})(r.mapValue,e.mapValue);default:throw A(23264,{le:t})}}function ko(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return P(r,e);const t=Oe(r),n=Oe(e),s=P(t.seconds,n.seconds);return s!==0?s:P(t.nanos,n.nanos)}function Fo(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ze(t[s],n[s]);if(i)return i}return P(t.length,n.length)}function on(r){return $s(r)}function $s(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Oe(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Me(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return E.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=$s(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${$s(t.fields[o])}`;return s+"}"})(r.mapValue):A(61005,{value:r})}function Sr(r){switch(Ye(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=is(r);return e?16+Sr(e):16;case 5:return 2*r.stringValue.length;case 6:return Me(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Sr(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return ot(n.fields,((i,o)=>{s+=i.length+Sr(o)})),s})(r.mapValue);default:throw A(13486,{value:r})}}function At(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ks(r){return!!r&&"integerValue"in r}function Jn(r){return!!r&&"arrayValue"in r}function Oo(r){return!!r&&"nullValue"in r}function Mo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Cr(r){return!!r&&"mapValue"in r}function os(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ii])===null||t===void 0?void 0:t.stringValue)===Ti}function qn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ot(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qn(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qn(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Vu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ru}const Pu={mapValue:{fields:{[Ii]:{stringValue:Ti},[sn]:{arrayValue:{}}}}};function Uh(r){return"nullValue"in r?br:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?At(wt.empty(),E.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?os(r)?Pu:{mapValue:{}}:A(35942,{value:r})}function Bh(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?At(wt.empty(),E.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Pu:"mapValue"in r?os(r)?{mapValue:{}}:Qe:A(61959,{value:r})}function Lo(r,e){const t=Ze(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function qo(r,e){const t=Ze(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Cr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(t)}setAll(e){let t=j.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=qn(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Cr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ne(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){ot(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new ue(qn(this.value))}}function bu(r){const e=[];return ot(r.fields,((t,n)=>{const s=new j([t]);if(Cr(n)){const i=bu(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new _e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new G(e,0,R.min(),R.min(),R.min(),ue.empty(),0)}static newFoundDocument(e,t,n,s){return new G(e,1,t,R.min(),n,s,0)}static newNoDocument(e,t){return new G(e,2,t,R.min(),R.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new G(e,3,t,R.min(),R.min(),ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class et{constructor(e,t){this.position=e,this.inclusive=t}}function Uo(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=E.comparator(E.fromName(o.referenceValue),t.key):n=Ze(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Bo(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ne(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Xn{constructor(e,t="asc"){this.field=e,this.dir=t}}function zh(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Su{}class N extends Su{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Gh(e,t,n):t==="array-contains"?new jh(e,n):t==="in"?new Fu(e,n):t==="not-in"?new Qh(e,n):t==="array-contains-any"?new Wh(e,n):new N(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new $h(e,n):new Kh(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ze(t,this.value)):t!==null&&Ye(this.value)===Ye(t)&&this.matchesComparison(Ze(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class L extends Su{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new L(e,t)}matches(e){return an(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function an(r){return r.op==="and"}function js(r){return r.op==="or"}function Ei(r){return Cu(r)&&an(r)}function Cu(r){for(const e of r.filters)if(e instanceof L)return!1;return!0}function Qs(r){if(r instanceof N)return r.field.canonicalString()+r.op.toString()+on(r.value);if(Ei(r))return r.filters.map((e=>Qs(e))).join(",");{const e=r.filters.map((t=>Qs(t))).join(",");return`${r.op}(${e})`}}function Du(r,e){return r instanceof N?(function(n,s){return s instanceof N&&n.op===s.op&&n.field.isEqual(s.field)&&Ne(n.value,s.value)})(r,e):r instanceof L?(function(n,s){return s instanceof L&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&Du(o,s.filters[a])),!0):!1})(r,e):void A(19439)}function xu(r,e){const t=r.filters.concat(e);return L.create(t,r.op)}function Nu(r){return r instanceof N?(function(t){return`${t.field.canonicalString()} ${t.op} ${on(t.value)}`})(r):r instanceof L?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nu).join(" ,")+"}"})(r):"Filter"}class Gh extends N{constructor(e,t,n){super(e,t,n),this.key=E.fromName(n.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class $h extends N{constructor(e,t){super(e,"in",t),this.keys=ku("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Kh extends N{constructor(e,t){super(e,"not-in",t),this.keys=ku("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ku(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>E.fromName(n.referenceValue)))}class jh extends N{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jn(t)&&Hn(t.arrayValue,this.value)}}class Fu extends N{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hn(this.value.arrayValue,t)}}class Qh extends N{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hn(this.value.arrayValue,t)}}class Wh extends N{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Hn(this.value.arrayValue,n)))}}/**
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
 */class Hh{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function Ws(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Hh(r,e,t,n,s,i,o)}function vt(r){const e=w(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Qs(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),sr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>on(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>on(n))).join(",")),e.Pe=t}return e.Pe}function or(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!zh(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Du(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Bo(r.startAt,e.startAt)&&Bo(r.endAt,e.endAt)}function Ur(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Br(r,e){return r.filters.filter((t=>t instanceof N&&t.field.isEqual(e)))}function zo(r,e,t){let n=br,s=!0;for(const i of Br(r,e)){let o=br,a=!0;switch(i.op){case"<":case"<=":o=Uh(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=br}Lo({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Lo({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Go(r,e,t){let n=Qe,s=!0;for(const i of Br(r,e)){let o=Qe,a=!0;switch(i.op){case">=":case">":o=Bh(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Qe}qo({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];qo({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ou(r,e,t,n,s,i,o,a){return new Le(r,e,t,n,s,i,o,a)}function yn(r){return new Le(r)}function $o(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wi(r){return r.collectionGroup!==null}function Wt(r){const e=w(r);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new q(j.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Xn(i,n))})),t.has(j.keyField().canonicalString())||e.Te.push(new Xn(j.keyField(),n))}return e.Te}function de(r){const e=w(r);return e.Ie||(e.Ie=Lu(e,Wt(r))),e.Ie}function Mu(r){const e=w(r);return e.de||(e.de=Lu(e,r.explicitOrderBy)),e.de}function Lu(r,e){if(r.limitType==="F")return Ws(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Xn(s.field,i)}));const t=r.endAt?new et(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new et(r.startAt.position,r.startAt.inclusive):null;return Ws(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Hs(r,e){const t=r.filters.concat([e]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function zr(r,e,t){return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ar(r,e){return or(de(r),de(e))&&r.limitType===e.limitType}function qu(r){return`${vt(de(r))}|lt:${r.limitType}`}function Kt(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>Nu(s))).join(", ")}]`),sr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>on(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>on(s))).join(",")),`Target(${n})`})(de(r))}; limitType=${r.limitType})`}function ur(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of Wt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const c=Uo(o,a,u);return o.inclusive?c<=0:c<0})(n.startAt,Wt(n),s)||n.endAt&&!(function(o,a,u){const c=Uo(o,a,u);return o.inclusive?c>=0:c>0})(n.endAt,Wt(n),s))})(r,e)}function Uu(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Bu(r){return(e,t)=>{let n=!1;for(const s of Wt(r)){const i=Jh(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Jh(r,e,t){const n=r.field.isKeyField()?E.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Ze(u,c):A(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return A(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ot(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Iu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new z(E.comparator);function ge(){return Xh}const zu=new z(E.comparator);function xn(...r){let e=zu;for(const t of r)e=e.insert(t.key,t);return e}function Gu(r){let e=zu;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function be(){return Un()}function $u(){return Un()}function Un(){return new qe((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Yh=new z(E.comparator),Zh=new q(E.comparator);function C(...r){let e=Zh;for(const t of r)e=e.add(t);return e}const ed=new q(P);function Ai(){return ed}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(e)?"-0":e}}function Ku(r){return{integerValue:""+r}}function ju(r,e){return au(e)?Ku(e):vi(r,e)}/**
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
 */class as{constructor(){this._=void 0}}function td(r,e,t){return r instanceof un?(function(s,i){const o={fields:{[wu]:{stringValue:Eu},[vu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ss(i)&&(i=is(i)),i&&(o.fields[Au]=i),{mapValue:o}})(t,e):r instanceof Rt?Wu(r,e):r instanceof Vt?Hu(r,e):(function(s,i){const o=Qu(s,i),a=Ko(o)+Ko(s.Ee);return Ks(o)&&Ks(s.Ee)?Ku(a):vi(s.serializer,a)})(r,e)}function nd(r,e,t){return r instanceof Rt?Wu(r,e):r instanceof Vt?Hu(r,e):t}function Qu(r,e){return r instanceof cn?(function(n){return Ks(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class un extends as{}class Rt extends as{constructor(e){super(),this.elements=e}}function Wu(r,e){const t=Ju(e);for(const n of r.elements)t.some((s=>Ne(s,n)))||t.push(n);return{arrayValue:{values:t}}}class Vt extends as{constructor(e){super(),this.elements=e}}function Hu(r,e){let t=Ju(e);for(const n of r.elements)t=t.filter((s=>!Ne(s,n)));return{arrayValue:{values:t}}}class cn extends as{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ko(r){return K(r.integerValue||r.doubleValue)}function Ju(r){return Jn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.field=e,this.transform=t}}function rd(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof Rt&&s instanceof Rt||n instanceof Vt&&s instanceof Vt?Jt(n.elements,s.elements,Ne):n instanceof cn&&s instanceof cn?Ne(n.Ee,s.Ee):n instanceof un&&s instanceof un})(r.transform,e.transform)}class sd{constructor(e,t){this.version=e,this.transformResults=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class us{}function Xu(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tn(r.key,Q.none()):new In(r.key,r.data,Q.none());{const t=r.data,n=ue.empty();let s=new q(j.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Ue(r.key,n,new _e(s.toArray()),Q.none())}}function id(r,e,t){r instanceof In?(function(s,i,o){const a=s.value.clone(),u=Qo(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof Ue?(function(s,i,o){if(!Dr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Qo(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Yu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Bn(r,e,t,n){return r instanceof In?(function(i,o,a,u){if(!Dr(i.precondition,o))return a;const c=i.value.clone(),l=Wo(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof Ue?(function(i,o,a,u){if(!Dr(i.precondition,o))return a;const c=Wo(i.fieldTransforms,u,o),l=o.data;return l.setAll(Yu(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(r,e,t,n):(function(i,o,a){return Dr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function od(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Qu(n.transform,s||null);i!=null&&(t===null&&(t=ue.empty()),t.set(n.field,i))}return t||null}function jo(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Jt(n,s,((i,o)=>rd(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class In extends us{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ue extends us{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Qo(r,e,t){const n=new Map;v(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,nd(o,a,t[s]))}return n}function Wo(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,td(i,o,e))}return n}class Tn extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ri extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&id(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Bn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Bn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$u();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=Xu(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(R.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),C())}isEqual(e){return this.batchId===e.batchId&&Jt(this.mutations,e.mutations,((t,n)=>jo(t,n)))&&Jt(this.baseMutations,e.baseMutations,((t,n)=>jo(t,n)))}}class Pi{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){v(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let s=(function(){return Yh})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Pi(e,t,n,s)}}/**
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
 */class bi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Zu{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,k;function ec(r){switch(r){case m.OK:return A(64938);case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0;default:return A(15467,{code:r})}}function tc(r){if(r===void 0)return J("GRPC error has no .code"),m.UNKNOWN;switch(r){case Y.OK:return m.OK;case Y.CANCELLED:return m.CANCELLED;case Y.UNKNOWN:return m.UNKNOWN;case Y.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Y.INTERNAL:return m.INTERNAL;case Y.UNAVAILABLE:return m.UNAVAILABLE;case Y.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Y.NOT_FOUND:return m.NOT_FOUND;case Y.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Y.ABORTED:return m.ABORTED;case Y.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Y.DATA_LOSS:return m.DATA_LOSS;default:return A(39323,{code:r})}}(k=Y||(Y={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Gr=null;/**
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
 */const ud=new yt([4294967295,4294967295],0);function Ho(r){const e=li().encode(r),t=new Kl;return t.update(e),new Uint8Array(t.digest())}function Jo(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yt([t,n],0),new yt([s,i],0)]}class Si{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Nn(`Invalid padding: ${t}`);if(n<0)throw new Nn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Nn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Nn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=yt.fromNumber(this.fe)}pe(e,t,n){let s=e.add(t.multiply(yt.fromNumber(n)));return s.compare(ud)===1&&(s=new yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Ho(e),[n,s]=Jo(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Si(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.fe===0)return;const t=Ho(e),[n,s]=Jo(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,hr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new lr(R.min(),s,new z(P),ge(),C())}}class hr{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new hr(n,t,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,n,s){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=s}}class nc{constructor(e,t){this.targetId=e,this.De=t}}class rc{constructor(e,t,n=H.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Xo{constructor(){this.ve=0,this.Ce=Yo(),this.Fe=H.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=C(),t=C(),n=C();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:A(38017,{changeType:i})}})),new hr(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Yo()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,v(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class cd{constructor(e){this.We=e,this.Ge=new Map,this.ze=ge(),this.je=Tr(),this.Je=Tr(),this.He=new z(P)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:A(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,n=e.De.count,s=this.st(t);if(s){const i=s.target;if(Ur(i))if(n===0){const o=new E(i.path);this.Xe(t,o,G.newNoDocument(o,R.min()))}else v(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const a=this._t(e),u=a?this.ut(a,e,o):1;if(u!==0){this.rt(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,c)}Gr==null||Gr.ct((function(l,h,d,_,I){var y,T,V,S,b,O;const $={localCacheCount:l,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},F=h.unchangedNames;return F&&($.bloomFilter={applied:I===0,hashCount:(y=F==null?void 0:F.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(S=(V=(T=F==null?void 0:F.bits)===null||T===void 0?void 0:T.bitmap)===null||V===void 0?void 0:V.length)!==null&&S!==void 0?S:0,padding:(O=(b=F==null?void 0:F.bits)===null||b===void 0?void 0:b.padding)!==null&&O!==void 0?O:0,mightContain:ne=>{var ve;return(ve=_==null?void 0:_.mightContain(ne))!==null&&ve!==void 0&&ve}}),$})(o,e.De,this.We.lt(),a,u))}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Me(n).toUint8Array()}catch(u){if(u instanceof Tu)return fe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Si(o,s,i)}catch(u){return fe(u instanceof Nn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.fe===0?null:a}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const a=this.st(o);if(a){if(i.current&&Ur(a.target)){const u=new E(a.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,G.newNoDocument(u,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let n=C();this.Je.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new lr(e,t,this.He,this.ze,n);return this.ze=ge(),this.je=Tr(),this.Je=Tr(),this.He=new z(P),s}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Xo,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new q(P),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new q(P),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||p("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Xo),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Tr(){return new z(E.comparator)}function Yo(){return new z(E.comparator)}const ld={asc:"ASCENDING",desc:"DESCENDING"},hd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dd={and:"AND",or:"OR"};class fd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Js(r,e){return r.useProto3Json||sr(e)?e:{value:e}}function ln(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sc(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function md(r,e){return ln(r,e.toTimestamp())}function X(r){return v(!!r,49232),R.fromTimestamp((function(t){const n=Oe(t);return new M(n.seconds,n.nanos)})(r))}function Ci(r,e){return Xs(r,e).canonicalString()}function Xs(r,e){const t=(function(s){return new D(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function ic(r){const e=D.fromString(r);return v(mc(e),10190,{key:e.toString()}),e}function Yn(r,e){return Ci(r.databaseId,e.path)}function Ce(r,e){const t=ic(e);if(t.get(1)!==r.databaseId.projectId)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new E(uc(t))}function oc(r,e){return Ci(r.databaseId,e)}function ac(r){const e=ic(r);return e.length===4?D.emptyPath():uc(e)}function Ys(r){return new D(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uc(r){return v(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Zo(r,e,t){return{name:Yn(r,e),fields:t.value.mapValue.fields}}function cs(r,e,t){const n=Ce(r,e.name),s=X(e.updateTime),i=e.createTime?X(e.createTime):R.min(),o=new ue({mapValue:{fields:e.fields}}),a=G.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function _d(r,e){return"found"in e?(function(n,s){v(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ce(n,s.found.name),o=X(s.found.updateTime),a=s.found.createTime?X(s.found.createTime):R.min(),u=new ue({mapValue:{fields:s.found.fields}});return G.newFoundDocument(i,o,a,u)})(r,e):"missing"in e?(function(n,s){v(!!s.missing,3894),v(!!s.readTime,22933);const i=Ce(n,s.missing),o=X(s.readTime);return G.newNoDocument(i,o)})(r,e):A(7234,{result:e})}function gd(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(v(l===void 0||typeof l=="string",58123),H.fromBase64String(l||"")):(v(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),H.fromUint8Array(l||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(c){const l=c.code===void 0?m.UNKNOWN:tc(c.code);return new g(l,c.message||"")})(o);t=new rc(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ce(r,n.document.name),i=X(n.document.updateTime),o=n.document.createTime?X(n.document.createTime):R.min(),a=new ue({mapValue:{fields:n.document.fields}}),u=G.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new xr(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ce(r,n.document),i=n.readTime?X(n.readTime):R.min(),o=G.newNoDocument(s,i),a=n.removedTargetIds||[];t=new xr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ce(r,n.document),i=n.removedTargetIds||[];t=new xr([],i,s,null)}else{if(!("filter"in e))return A(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new ad(s,i),a=n.targetId;t=new nc(a,o)}}return t}function Zn(r,e){let t;if(e instanceof In)t={update:Zo(r,e.key,e.value)};else if(e instanceof Tn)t={delete:Yn(r,e.key)};else if(e instanceof Ue)t={update:Zo(r,e.key,e.data),updateMask:wd(e.fieldMask)};else{if(!(e instanceof Ri))return A(16599,{Rt:e.type});t={verify:Yn(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof un)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cn)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw A(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:md(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A(27497)})(r,e.precondition)),t}function Zs(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Q.updateTime(X(i.updateTime)):i.exists!==void 0?Q.exists(i.exists):Q.none()})(e.currentDocument):Q.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let u=null;if("setToServerValue"in a)v(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),u=new un;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new Rt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new Vt(l)}else"increment"in a?u=new cn(o,a.increment):A(16584,{proto:a});const c=j.fromServerFormat(a.fieldPath);return new cr(c,u)})(r,s))):[];if(e.update){e.update.name;const s=Ce(r,e.update.name),i=new ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const c=u.fieldPaths||[];return new _e(c.map((l=>j.fromServerFormat(l))))})(e.updateMask);return new Ue(s,i,o,t,n)}return new In(s,i,t,n)}if(e.delete){const s=Ce(r,e.delete);return new Tn(s,t)}if(e.verify){const s=Ce(r,e.verify);return new Ri(s,t)}return A(1463,{proto:e})}function pd(r,e){return r&&r.length>0?(v(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?X(s.updateTime):X(i);return o.isEqual(R.min())&&(o=X(i)),new sd(o,s.transformResults||[])})(t,e)))):[]}function cc(r,e){return{documents:[oc(r,e.path)]}}function ls(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=oc(r,s);const i=(function(c){if(c.length!==0)return fc(L.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((l=>(function(d){return{field:Ke(d.field),direction:Id(d.dir)}})(l)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Js(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Vt:t,parent:s}}function lc(r,e,t,n){const{Vt:s,parent:i}=ls(r,e),o={},a=[];let u=0;return t.forEach((c=>{const l=n?c.alias:"aggregate_"+u++;o[l]=c.alias,c.aggregateType==="count"?a.push({alias:l,count:{}}):c.aggregateType==="avg"?a.push({alias:l,avg:{field:Ke(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:l,sum:{field:Ke(c.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ft:o,parent:i}}function hc(r){let e=ac(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){v(n===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(h){const d=dc(h);return d instanceof L&&Ei(d)?d.getFilters():[d]})(t.where));let o=[];t.orderBy&&(o=(function(h){return h.map((d=>(function(I){return new Xn(jt(I.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(d)))})(t.orderBy));let a=null;t.limit&&(a=(function(h){let d;return d=typeof h=="object"?h.value:h,sr(d)?null:d})(t.limit));let u=null;t.startAt&&(u=(function(h){const d=!!h.before,_=h.values||[];return new et(_,d)})(t.startAt));let c=null;return t.endAt&&(c=(function(h){const d=!h.before,_=h.values||[];return new et(_,d)})(t.endAt)),Ou(e,s,o,i,a,"F",u,c)}function yd(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dc(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=jt(t.unaryFilter.field);return N.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=jt(t.unaryFilter.field);return N.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jt(t.unaryFilter.field);return N.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jt(t.unaryFilter.field);return N.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return A(61313);default:return A(60726)}})(r):r.fieldFilter!==void 0?(function(t){return N.create(jt(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return A(58110);default:return A(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return L.create(t.compositeFilter.filters.map((n=>dc(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A(1026)}})(t.compositeFilter.op))})(r):A(30097,{filter:r})}function Id(r){return ld[r]}function Td(r){return hd[r]}function Ed(r){return dd[r]}function Ke(r){return{fieldPath:r.canonicalString()}}function jt(r){return j.fromServerFormat(r.fieldPath)}function fc(r){return r instanceof N?(function(t){if(t.op==="=="){if(Mo(t.value))return{unaryFilter:{field:Ke(t.field),op:"IS_NAN"}};if(Oo(t.value))return{unaryFilter:{field:Ke(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mo(t.value))return{unaryFilter:{field:Ke(t.field),op:"IS_NOT_NAN"}};if(Oo(t.value))return{unaryFilter:{field:Ke(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(t.field),op:Td(t.op),value:t.value}}})(r):r instanceof L?(function(t){const n=t.getFilters().map((s=>fc(s)));return n.length===1?n[0]:{compositeFilter:{op:Ed(t.op),filters:n}}})(r):A(54877,{filter:r})}function wd(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mc(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,n,s,i=R.min(),o=R.min(),a=H.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Fe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.gt=e}}function Ad(r,e){let t;if(e.document)t=cs(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=E.fromSegments(e.noDocument.path),s=bt(e.noDocument.readTime);t=G.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A(56709);{const n=E.fromSegments(e.unknownDocument.path),s=bt(e.unknownDocument.version);t=G.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new M(s[0],s[1]);return R.fromTimestamp(i)})(e.readTime)),t}function ea(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$r(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:Yn(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ln(i,o.version.toTimestamp()),createTime:ln(i,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Pt(e.version)};else{if(!e.isUnknownDocument())return A(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Pt(e.version)}}return n}function $r(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Pt(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function bt(r){const e=new M(r.seconds,r.nanoseconds);return R.fromTimestamp(e)}function mt(r,e){const t=(e.baseMutations||[]).map((i=>Zs(r.gt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>Zs(r.gt,i))),s=M.fromMillis(e.localWriteTimeMs);return new Vi(e.batchId,s,t,n)}function kn(r){const e=bt(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?bt(r.lastLimboFreeSnapshotVersion):R.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return v(o===1,1966,{count:o}),de(yn(ac(i.documents[0])))})(r.query):(function(i){return de(hc(i))})(r.query),new Fe(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,H.fromBase64String(r.resumeToken))}function gc(r,e){const t=Pt(e.snapshotVersion),n=Pt(e.lastLimboFreeSnapshotVersion);let s;s=Ur(e.target)?cc(r.gt,e.target):ls(r.gt,e.target).Vt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:vt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function hs(r){const e=hc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?zr(e,e.limit,"L"):e}function bs(r,e){return new bi(e.largestBatchId,Zs(r.gt,e.overlayMutation))}function ta(r,e){const t=e.path.lastSegment();return[r,he(e.path.popLast()),t]}function na(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Pt(n.readTime),documentKey:he(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{getBundleMetadata(e,t){return ra(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:bt(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return ra(e).put((function(s){return{bundleId:s.id,createTime:Pt(X(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return sa(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:hs(i.bundledQuery),readTime:bt(i.readTime)}})(n)}))}saveNamedQuery(e,t){return sa(e).put((function(s){return{name:s.name,readTime:Pt(X(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function ra(r){return te(r,ts)}function sa(r){return te(r,ns)}/**
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
 */class ds{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new ds(e,n)}getOverlay(e,t){return Pn(e).get(ta(this.userId,t)).next((n=>n?bs(this.serializer,n):null))}getOverlays(e,t){const n=be();return f.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const a=new bi(t,o);s.push(this.wt(e,a))})),f.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(he(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Pn(e).Y(zs,a))})),f.waitFor(i)}getOverlaysForCollection(e,t,n){const s=be(),i=he(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Pn(e).j(zs,o).next((a=>{for(const u of a){const c=bs(this.serializer,u);s.set(c.getKey(),c)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=be();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Pn(e).X({index:fu,range:a},((u,c,l)=>{const h=bs(this.serializer,c);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()})).next((()=>i))}wt(e,t){return Pn(e).put((function(s,i,o){const[a,u,c]=ta(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Zn(s.gt,o.mutation)}})(this.serializer,this.userId,t))}}function Pn(r){return te(r,rs)}/**
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
 */class Rd{St(e){return te(e,pi)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?H.fromUint8Array(n):H.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class _t{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(K(e.integerValue));else if("doubleValue"in e){const n=K(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),Gn(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=Oe(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Me(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Vu(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):os(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):A(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const s of Object.keys(n))this.xt(s,t),this.Dt(n[s],t)}Lt(e,t){var n,s;const i=e.fields||{};this.Ct(t,53);const o=sn,a=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Ct(t,15),t.Ft(K(a)),this.xt(o,t),this.Dt(i[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const s of n)this.Dt(s,t)}Bt(e,t){this.Ct(t,37),E.fromName(e).path.forEach((n=>{this.Ct(t,60),this.$t(n,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}_t.Ut=new _t;/**
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
 */const Ut=255;function Vd(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function ia(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=Vd(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class Pd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const s=t.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(e){const t=this.Xt(e),n=ia(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Xt(e),n=ia(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(Ut),this.rn(255)}sn(){this._n(Ut),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Ut?(this.rn(Ut),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Ut?(this._n(Ut),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class bd{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Sd{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class bn{constructor(){this.un=new Pd,this.cn=new bd(this.un),this.ln=new Sd(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class gt{constructor(e,t,n,s){this.Pn=e,this.Tn=t,this.In=n,this.dn=s}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new gt(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Nr(this.In),directionalValue:Nr(this.dn),orderedDocumentKey:Nr(t),documentKey:n.path.toArray()}}Rn(e,t,n){const s=this.An(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ze(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=oa(r.In,e.In),t!==0?t:(t=oa(r.dn,e.dn),t!==0?t:E.comparator(r.Tn,e.Tn)))}function oa(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Nr(r){return Ja()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function aa(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class ua{constructor(e){this.Vn=new q(((t,n)=>j.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(v(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=qs(e);if(t!==void 0&&!this.yn(t))return!1;const n=ht(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.yn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=n[i];if(!this.wn(a,u)||!this.Sn(this.mn[o++],u))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.mn.length||!this.Sn(this.mn[o++],a))return!1}return!0}bn(){if(this.gn)return null;let e=new q(j.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new It(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new It(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new It(n.field,n.dir==="asc"?0:1)));return new Yt(Yt.UNKNOWN_ID,this.collectionId,t,Zt.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function pc(r){var e,t;if(v(r instanceof N||r instanceof L,20012),r instanceof N){if(r instanceof Fu){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((i=>N.create(r.field,"==",i))))||[];return L.create(s,"or")}return r}const n=r.filters.map((s=>pc(s)));return L.create(n,r.op)}function Cd(r){if(r.getFilters().length===0)return[];const e=ni(pc(r));return v(yc(e),7391),ei(e)||ti(e)?[e]:e.getFilters()}function ei(r){return r instanceof N}function ti(r){return r instanceof L&&Ei(r)}function yc(r){return ei(r)||ti(r)||(function(t){if(t instanceof L&&js(t)){for(const n of t.getFilters())if(!ei(n)&&!ti(n))return!1;return!0}return!1})(r)}function ni(r){if(v(r instanceof N||r instanceof L,34018),r instanceof N)return r;if(r.filters.length===1)return ni(r.filters[0]);const e=r.filters.map((n=>ni(n)));let t=L.create(e,r.op);return t=Kr(t),yc(t)?t:(v(t instanceof L,64498),v(an(t),40251),v(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Di(n,s))))}function Di(r,e){let t;return v(r instanceof N||r instanceof L,38388),v(e instanceof N||e instanceof L,25473),t=r instanceof N?e instanceof N?(function(s,i){return L.create([s,i],"and")})(r,e):ca(r,e):e instanceof N?ca(e,r):(function(s,i){if(v(s.filters.length>0&&i.filters.length>0,48005),an(s)&&an(i))return xu(s,i.getFilters());const o=js(s)?s:i,a=js(s)?i:s,u=o.filters.map((c=>Di(c,a)));return L.create(u,"or")})(r,e),Kr(t)}function ca(r,e){if(an(e))return xu(e,r.getFilters());{const t=e.filters.map((n=>Di(r,n)));return L.create(t,"or")}}function Kr(r){if(v(r instanceof N||r instanceof L,11850),r instanceof N)return r;const e=r.getFilters();if(e.length===1)return Kr(e[0]);if(Cu(r))return r;const t=e.map((s=>Kr(s))),n=[];return t.forEach((s=>{s instanceof N?n.push(s):s instanceof L&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:L.create(n,r.op)}/**
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
 */class Dd{constructor(){this.Dn=new xi}addToCollectionParentIndex(e,t){return this.Dn.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}deleteAllFieldIndexes(e){return f.resolve()}createTargetIndexes(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ee.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ee.min())}updateCollectionGroup(e,t,n){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class xi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new q(D.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new q(D.comparator)).toArray()}}/**
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
 */const la="IndexedDbIndexManager",Er=new Uint8Array(0);class xd{constructor(e,t){this.databaseId=t,this.vn=new xi,this.Cn=new qe((n=>vt(n)),((n,s)=>or(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:n,parent:he(s)};return ha(e).put(i)}return f.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Za(t),""],!1,!0);return ha(e).j(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Pe(o.parent))}return n}))}addFieldIndex(e,t){const n=Sn(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=zt(e);return i.next((a=>{o.put(na(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Sn(e),s=zt(e),i=Bt(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Sn(e),n=Bt(e),s=zt(e);return t.Y().next((()=>n.Y())).next((()=>s.Y()))}createTargetIndexes(e,t){return f.forEach(this.Fn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new ua(n).bn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Bt(e);let s=!0;const i=new Map;return f.forEach(this.Fn(t),(o=>this.Mn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=C();const a=[];return f.forEach(i,((u,c)=>{p(la,`Using index ${(function(b){return`id=${b.indexId}|cg=${b.collectionGroup}|f=${b.fields.map((O=>`${O.fieldPath}:${O.kind}`)).join(",")}`})(u)} to execute ${vt(t)}`);const l=(function(b,O){const $=qs(O);if($===void 0)return null;for(const F of Br(b,$.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null})(c,u),h=(function(b,O){const $=new Map;for(const F of ht(O))for(const ne of Br(b,F.fieldPath))switch(ne.op){case"==":case"in":$.set(F.fieldPath.canonicalString(),ne.value);break;case"not-in":case"!=":return $.set(F.fieldPath.canonicalString(),ne.value),Array.from($.values())}return null})(c,u),d=(function(b,O){const $=[];let F=!0;for(const ne of ht(O)){const ve=ne.kind===0?zo(b,ne.fieldPath,b.startAt):Go(b,ne.fieldPath,b.startAt);$.push(ve.value),F&&(F=ve.inclusive)}return new et($,F)})(c,u),_=(function(b,O){const $=[];let F=!0;for(const ne of ht(O)){const ve=ne.kind===0?Go(b,ne.fieldPath,b.endAt):zo(b,ne.fieldPath,b.endAt);$.push(ve.value),F&&(F=ve.inclusive)}return new et($,F)})(c,u),I=this.xn(u,c,d),y=this.xn(u,c,_),T=this.On(u,c,h),V=this.Nn(u.indexId,l,I,d.inclusive,y,_.inclusive,T);return f.forEach(V,(S=>n.H(S,t.limit).next((b=>{b.forEach((O=>{const $=E.fromSegments(O.documentKey);o.has($)||(o=o.add($),a.push($))}))}))))})).next((()=>a))}return f.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Cd(L.create(e.filters,"and")).map((n=>Ws(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,n,s,i,o,a){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),c=u/(t!=null?t.length:1),l=[];for(let h=0;h<u;++h){const d=t?this.Bn(t[h/c]):Er,_=this.Ln(e,d,n[h%c],s),I=this.kn(e,d,i[h%c],o),y=a.map((T=>this.Ln(e,d,T,!0)));l.push(...this.createRange(_,I,y))}return l}Ln(e,t,n,s){const i=new gt(e,E.empty(),t,n);return s?i:i.En()}kn(e,t,n,s){const i=new gt(e,E.empty(),t,n);return s?i.En():i}Mn(e,t){const n=new ua(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)n.pn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const s=this.Fn(t);return f.forEach(s,(i=>this.Mn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(u){let c=new q(j.comparator),l=!1;for(const h of u.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:c=c.add(d.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}qn(e,t){const n=new bn;for(const s of ht(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.hn(s.kind);_t.Ut.bt(i,o)}return n.an()}Bn(e){const t=new bn;return _t.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new bn;return _t.Ut.bt(At(this.databaseId,t),n.hn((function(i){const o=ht(i);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}On(e,t,n){if(n===null)return[];let s=[];s.push(new bn);let i=0;for(const o of ht(e)){const a=n[i++];for(const u of s)if(this.$n(t,o.fieldPath)&&Jn(a))s=this.Un(s,o,a);else{const c=u.hn(o.kind);_t.Ut.bt(a,c)}}return this.Kn(s)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const u=new bn;u.seed(a.an()),_t.Ut.bt(o,u.hn(t.kind)),i.push(u)}return i}$n(e,t){return!!e.filters.find((n=>n instanceof N&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Sn(e),s=zt(e);return(t?n.j(Bs,IDBKeyRange.bound(t,t)):n.j()).next((i=>{const o=[];return f.forEach(i,(a=>s.get([a.indexId,this.uid]).next((u=>{o.push((function(l,h){const d=h?new Zt(h.sequenceNumber,new Ee(bt(h.readTime),new E(Pe(h.documentKey)),h.largestBatchId)):Zt.empty(),_=l.fields.map((([I,y])=>new It(j.fromServerFormat(I),y)));return new Yt(l.indexId,l.collectionGroup,_,d)})(a,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:P(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=Sn(e),i=zt(e);return this.Wn(e).next((o=>s.j(Bs,IDBKeyRange.bound(t,t)).next((a=>f.forEach(a,(u=>i.put(na(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return f.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(n.set(s.collectionGroup,a),f.forEach(a,(u=>this.Gn(e,s,u).next((c=>{const l=this.zn(i,u);return c.isEqual(l)?f.resolve():this.jn(e,i,u,c,l)})))))))}))}Jn(e,t,n,s){return Bt(e).put(s.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,s){return Bt(e).delete(s.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const s=Bt(e);let i=new q(ze);return s.X({index:du,range:IDBKeyRange.only([n.indexId,this.uid,Nr(this.Qn(n,t))])},((o,a)=>{i=i.add(new gt(n.indexId,t,aa(a.arrayValue),aa(a.directionalValue)))})).next((()=>i))}zn(e,t){let n=new q(ze);const s=this.qn(t,e);if(s==null)return n;const i=qs(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Jn(o))for(const a of o.arrayValue.values||[])n=n.add(new gt(t.indexId,e.key,this.Bn(a),s))}else n=n.add(new gt(t.indexId,e.key,Er,s));return n}jn(e,t,n,s,i){p(la,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,c,l,h,d){const _=u.getIterator(),I=c.getIterator();let y=qt(_),T=qt(I);for(;y||T;){let V=!1,S=!1;if(y&&T){const b=l(y,T);b<0?S=!0:b>0&&(V=!0)}else y!=null?S=!0:V=!0;V?(h(T),T=qt(I)):S?(d(y),y=qt(_)):(y=qt(_),T=qt(I))}})(s,i,ze,(a=>{o.push(this.Jn(e,t,n,a))}),(a=>{o.push(this.Hn(e,t,n,a))})),f.waitFor(o)}Wn(e){let t=1;return zt(e).X({index:hu,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>ze(o,a))).filter(((o,a,u)=>!a||ze(o,u[a-1])!==0));const s=[];s.push(e);for(const o of n){const a=ze(o,e),u=ze(o,t);if(a===0)s[0]=e.En();else if(a>0&&u<0)s.push(o),s.push(o.En());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Yn(s[o],s[o+1]))return[];const a=s[o].Rn(this.uid,Er,E.empty()),u=s[o+1].Rn(this.uid,Er,E.empty());i.push(IDBKeyRange.bound(a,u))}return i}Yn(e,t){return ze(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(da)}getMinOffset(e,t){return f.mapArray(this.Fn(t),(n=>this.Mn(e,n).next((s=>s||A(44426))))).next(da)}}function ha(r){return te(r,jn)}function Bt(r){return te(r,Ln)}function Sn(r){return te(r,gi)}function zt(r){return te(r,Mn)}function da(r){v(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;fi(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ee(e.readTime,e.documentKey,t)}/**
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
 */const fa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ic=41943040;class le{static withCacheSize(e){return new le(e,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(r,e,t){const n=r.store(we),s=r.store(en),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=n.X({range:o},((l,h,d)=>(a++,d.delete())));i.push(u.next((()=>{v(a===1,47070,{batchId:t.batchId})})));const c=[];for(const l of t.mutations){const h=uu(e,l.key.path,t.batchId);i.push(s.delete(h)),c.push(l.key)}return f.waitFor(i).next((()=>c))}function jr(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw A(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le.DEFAULT_COLLECTION_PERCENTILE=10,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,le.DEFAULT=new le(Ic,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),le.DISABLED=new le(-1,0,0);class fs{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static yt(e,t,n,s){v(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new fs(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ge(e).X({index:pt,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=Qt(e),o=Ge(e);return o.add({}).next((a=>{v(typeof a=="number",49019);const u=new Vi(a,t,n,s),c=(function(_,I,y){const T=y.baseMutations.map((S=>Zn(_.gt,S))),V=y.mutations.map((S=>Zn(_.gt,S)));return{userId:I,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:T,mutations:V}})(this.serializer,this.userId,u),l=[];let h=new q(((d,_)=>P(d.canonicalString(),_.canonicalString())));for(const d of s){const _=uu(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(i.put(_,mh))}return h.forEach((d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))})),e.addOnCommittedListener((()=>{this.Zn[a]=u.keys()})),f.waitFor(l).next((()=>u))}))}lookupMutationBatch(e,t){return Ge(e).get(t).next((n=>n?(v(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),mt(this.serializer,n)):null))}Xn(e,t){return this.Zn[t]?f.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ge(e).X({index:pt,range:s},((o,a,u)=>{a.userId===this.userId&&(v(a.batchId>=n,47524,{er:n}),i=mt(this.serializer,a)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Je;return Ge(e).X({index:pt,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Je],[this.userId,Number.POSITIVE_INFINITY]);return Ge(e).j(pt,t).next((n=>n.map((s=>mt(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vr(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Qt(e).X({range:s},((o,a,u)=>{const[c,l,h]=o,d=Pe(l);if(c===this.userId&&t.path.isEqual(d))return Ge(e).get(h).next((_=>{if(!_)throw A(61480,{tr:o,batchId:h});v(_.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:_.userId,batchId:h}),i.push(mt(this.serializer,_))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new q(P);const s=[];return t.forEach((i=>{const o=Vr(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Qt(e).X({range:a},((c,l,h)=>{const[d,_,I]=c,y=Pe(_);d===this.userId&&i.path.isEqual(y)?n=n.add(I):h.done()}));s.push(u)})),f.waitFor(s).next((()=>this.nr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Vr(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new q(P);return Qt(e).X({range:o},((u,c,l)=>{const[h,d,_]=u,I=Pe(d);h===this.userId&&n.isPrefixOf(I)?I.length===s&&(a=a.add(_)):l.done()})).next((()=>this.nr(e,a)))}nr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(Ge(e).get(i).next((o=>{if(o===null)throw A(35274,{batchId:i});v(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(mt(this.serializer,o))})))})),f.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Tc(e.ce,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),f.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return f.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return Qt(e).X({range:n},((i,o,a)=>{if(i[0]===this.userId){const u=Pe(i[1]);s.push(u)}else a.done()})).next((()=>{v(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Ec(e,this.userId,t)}sr(e){return wc(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Je,lastStreamToken:""}))}}function Ec(r,e,t){const n=Vr(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Qt(r).X({range:i,Z:!0},((a,u,c)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),c.done()})).next((()=>o))}function Ge(r){return te(r,we)}function Qt(r){return te(r,en)}function wc(r){return te(r,$n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new St(0)}static ur(){return new St(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const n=new St(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>R.fromTimestamp(new M(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.cr(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.lr(e,s))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Gt(e).delete(t.targetId))).next((()=>this.cr(e))).next((n=>(v(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Gt(e).X(((o,a)=>{const u=kn(a);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>f.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Gt(e).X(((n,s)=>{const i=kn(s);t(i)}))}cr(e){return ma(e).get(qr).next((t=>(v(t!==null,2888),t)))}lr(e,t){return ma(e).put(qr,t)}hr(e,t){return Gt(e).put(gc(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=vt(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Gt(e).X({range:s,index:lu},((o,a,u)=>{const c=kn(a);or(t,c.target)&&(i=c,u.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=je(e);return t.forEach((o=>{const a=he(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))})),f.waitFor(s)}removeMatchingKeys(e,t,n){const s=je(e);return f.forEach(t,(i=>{const o=he(i.path);return f.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=je(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=je(e);let i=C();return s.X({range:n,Z:!0},((o,a,u)=>{const c=Pe(o[1]),l=new E(c);i=i.add(l)})).next((()=>i))}containsKey(e,t){const n=he(t.path),s=IDBKeyRange.bound([n],[Za(n)],!1,!0);let i=0;return je(e).X({index:_i,Z:!0,range:s},(([o,a],u,c)=>{o!==0&&(i++,c.done())})).next((()=>i>0))}Et(e,t){return Gt(e).get(t).next((n=>n?kn(n):null))}}function Gt(r){return te(r,tn)}function ma(r){return te(r,Tt)}function je(r){return te(r,nn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="LruGarbageCollector",Ac=1048576;function ga([r,e],[t,n]){const s=P(r,t);return s===0?P(e,n):s}class kd{constructor(e){this.Tr=e,this.buffer=new q(ga),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ga(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vc{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){p(_a,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){it(t)?p(_a,"Ignoring IndexedDB error during garbage collection: ",t):await st(t)}await this.Rr(3e5)}))}}class Fd{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return f.resolve(me.ue);const n=new kd(t);return this.Vr.forEachTarget(e,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(p("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(fa)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fa):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s)))).next((h=>(n=h,a=Date.now(),this.removeTargets(e,n,t)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((h=>(c=Date.now(),$t()<=ke.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function Rc(r,e){return new Fd(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.db=e,this.garbageCollector=Rc(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((n,s)=>t(s)))}addReference(e,t,n){return wr(e,n)}removeReference(e,t,n){return wr(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return wr(e,t)}Sr(e,t){return(function(s,i){let o=!1;return wc(s).ee((a=>Ec(s,a,i).next((u=>(u&&(o=!0),f.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(e,((o,a)=>{if(a<=t){const u=this.Sr(e,o).next((c=>{if(!c)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,R.min()),je(e).delete((function(h){return[0,he(h.path)]})(o)))))}));s.push(u)}})).next((()=>f.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return wr(e,t)}wr(e,t){const n=je(e);let s,i=me.ue;return n.X({index:_i},(([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==me.ue&&t(new E(Pe(s)),i),i=c,s=u):i=me.ue})).next((()=>{i!==me.ue&&t(new E(Pe(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function wr(r,e){return je(r).put((function(n,s){return{targetId:0,path:he(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.changes=new qe((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?f.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return lt(e).put(n)}removeEntry(e,t,n){return lt(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],$r(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.br(e,n))))}getEntry(e,t){let n=G.newInvalidDocument(t);return lt(e).X({index:Pr,range:IDBKeyRange.only(Cn(t))},((s,i)=>{n=this.Dr(t,i)})).next((()=>n))}vr(e,t){let n={size:0,document:G.newInvalidDocument(t)};return lt(e).X({index:Pr,range:IDBKeyRange.only(Cn(t))},((s,i)=>{n={document:this.Dr(t,i),size:jr(i)}})).next((()=>n))}getEntries(e,t){let n=ge();return this.Cr(e,t,((s,i)=>{const o=this.Dr(s,i);n=n.insert(s,o)})).next((()=>n))}Fr(e,t){let n=ge(),s=new z(E.comparator);return this.Cr(e,t,((i,o)=>{const a=this.Dr(i,o);n=n.insert(i,a),s=s.insert(i,jr(o))})).next((()=>({documents:n,Mr:s})))}Cr(e,t,n){if(t.isEmpty())return f.resolve();let s=new q(Ia);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Cn(s.first()),Cn(s.last())),o=s.getIterator();let a=o.getNext();return lt(e).X({index:Pr,range:i},((u,c,l)=>{const h=E.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Ia(a,h)<0;)n(a,null),a=o.getNext();a&&a.isEqual(h)&&(n(a,c),a=o.hasNext()?o.getNext():null),a?l.G(Cn(a)):l.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),$r(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return lt(e).j(IDBKeyRange.bound(a,u,!0)).next((c=>{i==null||i.incrementDocumentReadCount(c.length);let l=ge();for(const h of c){const d=this.Dr(E.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(ur(t,d)||s.has(d.key))&&(l=l.insert(d.key,d))}return l}))}getAllFromCollectionGroup(e,t,n,s){let i=ge();const o=ya(t,n),a=ya(t,Ee.max());return lt(e).X({index:cu,range:IDBKeyRange.bound(o,a,!0)},((u,c,l)=>{const h=this.Dr(E.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(h.key,h),i.size===s&&l.done()})).next((()=>i))}newChangeBuffer(e){return new Ld(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return pa(e).get(Us).next((t=>(v(!!t,20021),t)))}br(e,t){return pa(e).put(Us,t)}Dr(e,t){if(t){const n=Ad(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(R.min())))return n}return G.newInvalidDocument(e)}}function Pc(r){return new Md(r)}class Ld extends Vc{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new qe((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new q(((i,o)=>P(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=ea(this.Or.serializer,o);s=s.add(i.path.popLast());const c=jr(u);n+=c-a.size,t.push(this.Or.addEntry(e,i,u))}else if(n-=a.size,this.trackRemovals){const u=ea(this.Or.serializer,o.convertToNoDocument(R.min()));t.push(this.Or.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Or.updateMetadata(e,n)),f.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:n,Mr:s})=>(s.forEach(((i,o)=>{this.Nr.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function pa(r){return te(r,Kn)}function lt(r){return te(r,Lr)}function Cn(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ya(r,e){const t=e.documentKey.path.toArray();return[r,$r(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ia(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=P(t[i],n[i]),s)return s;return s=P(t.length,n.length),s||(s=P(t[t.length-2],n[n.length-2]),s||P(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&Bn(n.mutation,s,_e.empty(),M.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,C()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=C()){const s=be();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=xn();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=be();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,C())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=ge();const o=Un(),a=(function(){return Un()})();return t.forEach(((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Ue)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Bn(l.mutation,c,l.mutation.getFieldMask(),M.now())):o.set(c.key,_e.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>{var h;return a.set(c,new qd(l,(h=o.get(c))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Un();let s=new z(((o,a)=>o-a)),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||_e.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||C()).add(u);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=$u();l.forEach((d=>{if(!i.has(d)){const _=Xu(t.get(d),n.get(d));_!==null&&h.set(d,_),i=i.add(d)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return f.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):f.resolve(be());let a=Xt,u=i;return o.next((c=>f.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next((d=>{u=u.insert(l,d)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,C()))).next((l=>({batchId:a,changes:Gu(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next((n=>{let s=xn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=xn();return this.indexManager.getCollectionParents(e,i).next((a=>f.forEach(a,(u=>{const c=(function(h,d){return new Le(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((l=>{l.forEach(((h,d)=>{o=o.insert(h,d)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,G.newInvalidDocument(l)))}));let a=xn();return o.forEach(((u,c)=>{const l=i.get(u);l!==void 0&&Bn(l.mutation,c,_e.empty(),M.now()),ur(t,c)&&(a=a.insert(u,c))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return f.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:X(s.createTime)}})(t)),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:hs(s.bundledQuery),readTime:X(s.readTime)}})(t)),f.resolve()}}/**
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
 */class Bd{constructor(){this.overlays=new z(E.comparator),this.kr=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const n=be();return f.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.wt(e,t,i)})),f.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),f.resolve()}getOverlaysForCollection(e,t,n){const s=be(),i=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return f.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new z(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=be(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=be(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=s)););return f.resolve(a)}wt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new bi(t,n));let i=this.kr.get(t);i===void 0&&(i=C(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}/**
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
 */class zd{constructor(){this.sessionToken=H.EMPTY_BYTE_STRING}getSessionToken(e){return f.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,f.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.qr=new q(re.Qr),this.$r=new q(re.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new re(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new re(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new E(new D([])),n=new re(t,e),s=new re(t,e+1),i=[];return this.$r.forEachInRange([n,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new E(new D([])),n=new re(t,e),s=new re(t,e+1);let i=C();return this.$r.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new re(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class re{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return E.comparator(e.key,t.key)||P(e.Hr,t.Hr)}static Ur(e,t){return P(e.Hr,t.Hr)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new q(re.Qr)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vi(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new re(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?Je:this.er-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new re(t,0),s=new re(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(o=>{const a=this.Zr(o.Hr);i.push(a)})),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new q(P);return t.forEach((s=>{const i=new re(s,0),o=new re(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(a=>{n=n.add(a.Hr)}))})),f.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;E.isDocumentKey(i)||(i=i.child(""));const o=new re(new E(i),0);let a=new q(P);return this.Yr.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Hr)),!0)}),o),f.resolve(this.ei(a))}ei(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){v(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return f.forEach(t.mutations,(s=>{const i=new re(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new re(t,0),s=this.Yr.firstAfterOrEqual(n);return f.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.ni=e,this.docs=(function(){return new z(E.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return f.resolve(n?n.document.mutableCopy():G.newInvalidDocument(t))}getEntries(e,t){let n=ge();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():G.newInvalidDocument(s))})),f.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=ge();const o=t.path,a=new E(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fi(ru(l),n)<=0||(s.has(l.key)||ur(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,n,s){A(9500)}ri(e,t){return f.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Kd(this)}getSize(e){return f.resolve(this.size)}}class Kd extends Vc{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(n)})),f.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.persistence=e,this.ii=new qe((t=>vt(t)),or),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.si=0,this.oi=new Ni,this.targetCount=0,this._i=St.ar()}forEachTarget(e,t){return this.ii.forEach(((n,s)=>t(s))),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),f.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new St(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.hr(t),f.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),f.waitFor(i).next((()=>s))}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return f.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),f.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),f.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return f.resolve(n)}containsKey(e,t){return f.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.ai={},this.overlays={},this.ui=new me(0),this.ci=!1,this.ci=!0,this.li=new zd,this.referenceDelegate=e(this),this.hi=new jd(this),this.indexManager=new Dd,this.remoteDocumentCache=(function(s){return new $d(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new _c(t),this.Ti=new Ud(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Gd(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const s=new Qd(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return f.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class Qd extends iu{constructor(e){super(),this.currentSequenceNumber=e}}class ms{constructor(e){this.persistence=e,this.Ai=new Ni,this.Ri=null}static Vi(e){return new ms(e)}get mi(){if(this.Ri)return this.Ri;throw A(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),f.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),f.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.mi,(n=>{const s=E.fromPath(n);return this.fi(e,s).next((i=>{i||t.removeEntry(s,R.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return f.or([()=>f.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qr{constructor(e,t){this.persistence=e,this.gi=new qe((n=>he(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Rc(this,t)}static Vi(e,t){return new Qr(e,t)}Ii(){}di(e){return f.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return f.forEach(this.gi,((n,s)=>this.Sr(e,n,s).next((i=>i?f.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((a=>{a||(n++,i.removeEntry(o,R.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),f.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),f.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),f.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),f.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sr(e.data.value)),t}Sr(e,t,n){return f.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return f.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.serializer=e}q(e,t,n,s){const i=new es("createOrUpgrade",t);n<1&&s>=1&&((function(u){u.createObjectStore(ir)})(e),(function(u){u.createObjectStore($n,{keyPath:fh}),u.createObjectStore(we,{keyPath:Co,autoIncrement:!0}).createIndex(pt,Do,{unique:!0}),u.createObjectStore(en)})(e),Ta(e),(function(u){u.createObjectStore(dt)})(e));let o=f.resolve();return n<3&&s>=3&&(n!==0&&((function(u){u.deleteObjectStore(nn),u.deleteObjectStore(tn),u.deleteObjectStore(Tt)})(e),Ta(e)),o=o.next((()=>(function(u){const c=u.store(Tt),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:R.min().toTimestamp(),targetCount:0};return c.put(qr,l)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(u,c){return c.store(we).j().next((h=>{u.deleteObjectStore(we),u.createObjectStore(we,{keyPath:Co,autoIncrement:!0}).createIndex(pt,Do,{unique:!0});const d=c.store(we),_=h.map((I=>d.put(I)));return f.waitFor(_)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(rn,{keyPath:wh})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.pi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Kn)})(e),this.yi(i))))),n<7&&s>=7&&(o=o.next((()=>this.wi(i)))),n<8&&s>=8&&(o=o.next((()=>this.Si(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.bi(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(ts,{keyPath:Ah})})(e),(function(u){u.createObjectStore(ns,{keyPath:vh})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(u){const c=u.createObjectStore(rs,{keyPath:Dh});c.createIndex(zs,xh,{unique:!1}),c.createIndex(fu,Nh,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(u){const c=u.createObjectStore(Lr,{keyPath:_h});c.createIndex(Pr,gh),c.createIndex(cu,ph)})(e))).next((()=>this.Di(e,i))).next((()=>e.deleteObjectStore(dt)))),n<14&&s>=14&&(o=o.next((()=>this.Ci(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(gi,{keyPath:Rh,autoIncrement:!0}).createIndex(Bs,Vh,{unique:!1}),u.createObjectStore(Mn,{keyPath:Ph}).createIndex(hu,bh,{unique:!1}),u.createObjectStore(Ln,{keyPath:Sh}).createIndex(du,Ch,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(Mn).clear()})).next((()=>{t.objectStore(Ln).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(pi,{keyPath:kh})})(e)}))),n<18&&s>=18&&Ja()&&(o=o.next((()=>{t.objectStore(Mn).clear()})).next((()=>{t.objectStore(Ln).clear()}))),o}yi(e){let t=0;return e.store(dt).X(((n,s)=>{t+=jr(s)})).next((()=>{const n={byteSize:t};return e.store(Kn).put(Us,n)}))}pi(e){const t=e.store($n),n=e.store(we);return t.j().next((s=>f.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Je],[i.userId,i.lastAcknowledgedBatchId]);return n.j(pt,o).next((a=>f.forEach(a,(u=>{v(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=mt(this.serializer,u);return Tc(e,i.userId,c).next((()=>{}))}))))}))))}wi(e){const t=e.store(nn),n=e.store(dt);return e.store(Tt).get(qr).next((s=>{const i=[];return n.X(((o,a)=>{const u=new D(o),c=(function(h){return[0,he(h)]})(u);i.push(t.get(c).next((l=>l?f.resolve():(h=>t.put({targetId:0,path:he(h),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>f.waitFor(i)))}))}Si(e,t){e.createObjectStore(jn,{keyPath:Eh});const n=t.store(jn),s=new xi,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return n.put({collectionId:a,parent:he(u)})}};return t.store(dt).X({Z:!0},((o,a)=>{const u=new D(o);return i(u.popLast())})).next((()=>t.store(en).X({Z:!0},(([o,a,u],c)=>{const l=Pe(a);return i(l.popLast())}))))}bi(e){const t=e.store(tn);return t.X(((n,s)=>{const i=kn(s),o=gc(this.serializer,i);return t.put(o)}))}Di(e,t){const n=t.store(dt),s=[];return n.X(((i,o)=>{const a=t.store(Lr),u=(function(h){return h.document?new E(D.fromString(h.document.name).popFirst(5)):h.noDocument?E.fromSegments(h.noDocument.path):h.unknownDocument?E.fromSegments(h.unknownDocument.path):A(36783)})(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))})).next((()=>f.waitFor(s)))}Ci(e,t){const n=t.store(we),s=Pc(this.serializer),i=new ki(ms.Vi,this.serializer.gt);return n.j().next((o=>{const a=new Map;return o.forEach((u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:C();mt(this.serializer,u).keys().forEach((h=>l=l.add(h))),a.set(u.userId,l)})),f.forEach(a,((u,c)=>{const l=new se(c),h=ds.yt(this.serializer,l),d=i.getIndexManager(l),_=fs.yt(l,this.serializer,d,i.referenceDelegate);return new bc(s,_,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Gs(t,me.ue),u).next()}))}))}}function Ta(r){r.createObjectStore(nn,{keyPath:Ih}).createIndex(_i,Th,{unique:!0}),r.createObjectStore(tn,{keyPath:"targetId"}).createIndex(lu,yh,{unique:!0}),r.createObjectStore(Tt)}const $e="IndexedDbPersistence",Ss=18e5,Cs=5e3,Ds="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Sc="main";class Fi{constructor(e,t,n,s,i,o,a,u,c,l,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=i,this.window=o,this.document=a,this.Mi=c,this.xi=l,this.Oi=h,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=d=>Promise.resolve(),!Fi.C())throw new g(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Od(this,s),this.Qi=t+Sc,this.serializer=new _c(u),this.$i=new Se(this.Qi,this.Oi,new Wd(this.serializer)),this.li=new Rd,this.hi=new Nd(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pc(this.serializer),this.Ti=new vd,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,l===!1&&J($e,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,Ds);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new me(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ar(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(it(e))return p($e,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p($e,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return Dn(e).get(Lt).next((t=>f.resolve(this.Xi(t))))}es(e){return Ar(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Ss)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=te(t,rn);return n.j().next((s=>{const i=this.rs(s,Ss),o=s.filter((a=>i.indexOf(a)===-1));return f.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?f.resolve(!0):Dn(e).get(Lt).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Cs)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,Ds);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ar(e).j().next((n=>this.rs(n,Cs).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&p($e,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[ir,rn],(e=>{const t=new Gs(e,me.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>Ar(e).j().next((t=>this.rs(t,Ss).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return fs.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xd(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return ds.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){p($e,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?Mh:u===17?pu:u===16?Oh:u===15?yi:u===14?gu:u===13?_u:u===12?Fh:u===11?mu:void A(60245)})(this.Oi);let o;return this.$i.runTransaction(e,s,i,(a=>(o=new Gs(a,this.ui?this.ui.next():me.ue),t==="readwrite-primary"?this.Ji(o).next((u=>!!u||this.Hi(o))).next((u=>{if(!u)throw J(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new g(m.FAILED_PRECONDITION,su);return n(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ts(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ts(e){return Dn(e).get(Lt).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Cs)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(m.FAILED_PRECONDITION,Ds)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Dn(e).put(Lt,t)}static C(){return Se.C()}Yi(e){const t=Dn(e);return t.get(Lt).next((n=>this.Xi(n)?(p($e,"Releasing primary lease."),t.delete(Lt)):f.resolve()))}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(J(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Ha()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return p($e,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return J($e,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){J("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Dn(r){return te(r,ir)}function Ar(r){return te(r,rn)}function Oi(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=s}static Es(e,t){let n=C(),s=C();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mi(e,t.fromCache,n,s)}}/**
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
 */class Hd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cc{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ha()?8:ou(Or())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Hd;return this.ws(e,t,o).next((a=>{if(i.result=a,this.Rs)return this.Ss(e,t,o,a.size)}))})).next((()=>i.result))}Ss(e,t,n,s){return n.documentReadCount<this.Vs?($t()<=ke.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",Kt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),f.resolve()):($t()<=ke.DEBUG&&p("QueryEngine","Query:",Kt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?($t()<=ke.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",Kt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,de(t))):f.resolve())}ps(e,t){if($o(t))return f.resolve(null);let n=de(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=zr(t,null,"F"),n=de(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=C(...i);return this.gs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.bs(t,a);return this.Ds(t,c,o,u.readTime)?this.ps(e,zr(t,null,"F")):this.vs(e,c,t,u)}))))})))))}ys(e,t,n,s){return $o(t)||s.isEqual(R.min())?f.resolve(null):this.gs.getDocuments(e,n).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,n,s)?f.resolve(null):($t()<=ke.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kt(t)),this.vs(e,o,t,nu(s,Xt)).next((a=>a)))}))}bs(e,t){let n=new q(Bu(e));return t.forEach(((s,i)=>{ur(e,i)&&(n=n.add(i))})),n}Ds(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,n){return $t()<=ke.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Kt(t)),this.gs.getDocumentsMatchingQuery(e,t,Ee.min(),n)}vs(e,t,n,s){return this.gs.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="LocalStore",Jd=3e8;class Xd{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new z(P),this.Ms=new qe((i=>vt(i)),or),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bc(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Dc(r,e,t,n){return new Xd(r,e,t,n)}async function xc(r,e){const t=w(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=C();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({Bs:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function Yd(r,e){const t=w(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(a,u,c,l){const h=c.batch,d=h.keys();let _=f.resolve();return d.forEach((I=>{_=_.next((()=>l.getEntry(u,I))).next((y=>{const T=c.docVersions.get(I);v(T!==null,48541),y.version.compareTo(T)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(u,h)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=C();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Nc(r){const e=w(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Zd(r,e){const t=w(r),n=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const a=[];e.targetChanges.forEach(((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.hi.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.hi.addMatchingKeys(i,l.addedDocuments,h))));let _=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(H.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),(function(y,T,V){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=Jd?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(d,_,l)&&a.push(t.hi.updateTargetData(i,_))}));let u=ge(),c=C();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(kc(i,o,e.documentUpdates).next((l=>{u=l.Ls,c=l.ks}))),!n.isEqual(R.min())){const l=t.hi.getLastRemoteSnapshotVersion(i).next((h=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return f.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function kc(r,e,t){let n=C(),s=C();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=ge();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(R.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):p(Li,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{Ls:o,ks:s}}))}function ef(r,e){const t=w(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Je),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function hn(r,e){const t=w(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.hi.getTargetData(n,e).next((i=>i?(s=i,f.resolve(s)):t.hi.allocateTargetId(n).next((o=>(s=new Fe(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function dn(r,e,t){const n=w(r),s=n.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!it(o))throw o;p(Li,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(s.target)}function Wr(r,e,t){const n=w(r);let s=R.min(),i=C();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,l){const h=w(u),d=h.Ms.get(l);return d!==void 0?f.resolve(h.Fs.get(d)):h.hi.getTargetData(c,l)})(n,o,de(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:R.min(),t?i:C()))).next((a=>(Mc(n,Uu(e),a),{documents:a,qs:i})))))}function Fc(r,e){const t=w(r),n=w(t.hi),s=t.Fs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.Et(i,e).next((o=>o?o.target:null))))}function Oc(r,e){const t=w(r),n=t.xs.get(e)||R.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Os.getAllFromCollectionGroup(s,e,nu(n,Xt),Number.MAX_SAFE_INTEGER))).then((s=>(Mc(t,e,s),s)))}function Mc(r,e,t){let n=r.xs.get(e)||R.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(e,n)}async function tf(r,e,t,n){const s=w(r);let i=C(),o=ge();for(const c of t){const l=e.Qs(c.metadata.name);c.document&&(i=i.add(l));const h=e.$s(c);h.setReadTime(e.Us(c.metadata.readTime)),o=o.insert(l,h)}const a=s.Os.newChangeBuffer({trackRemovals:!0}),u=await hn(s,(function(l){return de(yn(D.fromString(`__bundle__/docs/${l}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(c=>kc(c,a,o).next((l=>(a.apply(c),l))).next((l=>s.hi.removeMatchingKeysForTargetId(c,u.targetId).next((()=>s.hi.addMatchingKeys(c,i,u.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(c,l.Ls,l.ks))).next((()=>l.Ls))))))}async function nf(r,e,t=C()){const n=await hn(r,de(hs(e.bundledQuery))),s=w(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=X(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Ti.saveNamedQuery(i,e);const a=n.withResumeToken(H.EMPTY_BYTE_STRING,o);return s.Fs=s.Fs.insert(a.targetId,a),s.hi.updateTargetData(i,a).next((()=>s.hi.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.hi.addMatchingKeys(i,t,n.targetId))).next((()=>s.Ti.saveNamedQuery(i,e)))}))}/**
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
 */const Lc="firestore_clients";function Ea(r,e){return`${Lc}_${r}_${e}`}const qc="firestore_mutations";function wa(r,e,t){let n=`${qc}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Uc="firestore_targets";function xs(r,e){return`${Uc}_${r}_${e}`}/**
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
 */const Ve="SharedClientState";class Hr{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Ks(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new g(s.error.code,s.error.message))),o?new Hr(e,t,s.state,i):(J(Ve,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zn{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new g(n.error.code,n.error.message))),i?new zn(e,n.state,s):(J(Ve,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jr{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ai();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=au(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Jr(e,i):(J(Ve,`Failed to parse client data for instance '${e}': ${t}`),null)}}class qi{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new qi(t.clientId,t.onlineState):(J(Ve,`Failed to parse online state: ${e}`),null)}}class ri{constructor(){this.activeTargetIds=Ai()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ns{constructor(e,t,n,s,i){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new z(P),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Ea(this.persistenceKey,this.js),this.eo=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new ri),this.no=new RegExp(`^${Lc}_${o}_([^_]*)$`),this.ro=new RegExp(`^${qc}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Uc}_${o}_(\\d+)$`),this.so=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.oo=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const n of e){if(n===this.js)continue;const s=this.getItem(Ea(this.persistenceKey,n));if(s){const i=Jr.Ks(n,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const t=this.storage.getItem(this.so);if(t){const n=this.ao(t);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(xs(this.persistenceKey,e));if(s){const i=zn.Ks(e,s);i&&(n=i.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(xs(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.ho(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p(Ve,"READ",e,t),t}setItem(e,t){p(Ve,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){p(Ve,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(p(Ve,"EVENT",t.key,t.newValue),t.key===this.Xs)return void J("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const n=this.Ao(t.key);return this.Ro(n,null)}{const n=this.Vo(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(t.key===this.so){if(t.newValue!==null){const n=this.ao(t.newValue);if(n)return this.uo(n)}}else if(t.key===this.eo){const n=(function(i){let o=me.ue;if(i!=null)try{const a=JSON.parse(i);v(typeof a=="number",30636,{wo:i}),o=a}catch(a){J(Ve,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);n!==me.ue&&this.sequenceNumberHandler(n)}else if(t.key===this.oo){const n=this.So(t.newValue);await Promise.all(n.map((s=>this.syncEngine.bo(s))))}}}else this.Zs.push(t)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const s=new Hr(this.currentUser,e,t,n),i=wa(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}ho(e){const t=wa(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const s=xs(this.persistenceKey,e),i=new zn(e,t,n);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return Jr.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Hr.Ks(new se(i),s,t)}po(e,t){const n=this.io.exec(e),s=Number(n[1]);return zn.Ks(s,t)}ao(e){return qi.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);p(Ve,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),s=this.co(this.Ys),i=this.co(n),o=[],a=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||a.push(u)})),this.syncEngine.Co(o,a).then((()=>{this.Ys=n}))}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Ai();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class Bc{constructor(){this.Fo=new ri,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ri,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rf{xo(e){}shutdown(){}}/**
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
 */const Aa="ConnectivityMonitor";class va{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){p(Aa,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){p(Aa,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vr=null;function si(){return vr===null?vr=(function(){return 268435456+Math.round(2147483648*Math.random())})():vr++,"0x"+vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RestConnection",sf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class of{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===Wn?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=si(),a=this.Go(e,t.toUriEncodedString());p(ks,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(a),l=ui(c);return this.jo(e,a,u,n,l).then((h=>(p(ks,`Received RPC '${e}' ${o}: `,h),h)),(h=>{throw fe(ks,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",n),h}))}Jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const n=sf[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="WebChannelConnection";class uf extends of{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,s,i){const o=si();return new Promise(((a,u)=>{const c=new Ul;c.setWithCredentials(!0),c.listenOnce(Bl.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case Ps.NO_ERROR:const h=c.getResponseJson();p(ce,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case Ps.TIMEOUT:p(ce,`RPC '${e}' ${o} timed out`),u(new g(m.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const d=c.getStatus();if(p(ce,`RPC '${e}' ${o} failed with status:`,d,"response text:",c.getResponseText()),d>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const y=(function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(S)>=0?S:m.UNKNOWN})(I.status);u(new g(y,I.message))}else u(new g(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new g(m.UNAVAILABLE,"Connection failed."));break;default:A(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{p(ce,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(s);p(ce,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",l,n,15)}))}P_(e,t,n){const s=si(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zl(),a=Gl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");p(ce,`Creating RPC '${e}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);this.T_(h);let d=!1,_=!1;const I=new af({Ho:T=>{_?p(ce,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(d||(p(ce,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),p(ce,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Yo:()=>h.close()}),y=(T,V,S)=>{T.listen(V,(b=>{try{S(b)}catch(O){setTimeout((()=>{throw O}),0)}}))};return y(h,yr.EventType.OPEN,(()=>{_||(p(ce,`RPC '${e}' stream ${s} transport opened.`),I.s_())})),y(h,yr.EventType.CLOSE,(()=>{_||(_=!0,p(ce,`RPC '${e}' stream ${s} transport closed`),I.__(),this.I_(h))})),y(h,yr.EventType.ERROR,(T=>{_||(_=!0,fe(ce,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),I.__(new g(m.UNAVAILABLE,"The operation could not be completed")))})),y(h,yr.EventType.MESSAGE,(T=>{var V;if(!_){const S=T.data[0];v(!!S,16349);const b=S,O=(b==null?void 0:b.error)||((V=b[0])===null||V===void 0?void 0:V.error);if(O){p(ce,`RPC '${e}' stream ${s} received error:`,O);const $=O.status;let F=(function(Cl){const yo=Y[Cl];if(yo!==void 0)return tc(yo)})($),ne=O.message;F===void 0&&(F=m.INTERNAL,ne="Unknown error status: "+$+" with message "+O.message),_=!0,I.__(new g(F,ne)),h.close()}else p(ce,`RPC '${e}' stream ${s} received:`,S),I.a_(S)}})),y(a,$l.STAT_EVENT,(T=>{T.stat===Io.PROXY?p(ce,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Io.NOPROXY&&p(ce,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{I.o_()}),0),I}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zc(){return typeof window<"u"?window:null}function kr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r){return new fd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="PersistentStream";class Gc{constructor(e,t,n,s,i,o,a,u){this.Fi=e,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ui(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(J(t.toString()),J("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===t&&this.W_(n,s)}),(n=>{e((()=>{const s=new g(m.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return p(Ra,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(p(Ra,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cf extends Gc{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=gd(this.serializer,e),n=(function(i){if(!("targetChange"in i))return R.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?X(o.readTime):R.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Ys(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=Ur(u)?{documents:cc(i,u)}:{query:ls(i,u).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sc(i,o.resumeToken);const c=Js(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=ln(i,o.snapshotVersion.toTimestamp());const c=Js(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,e);const n=yd(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Ys(this.serializer),t.removeTarget=e,this.k_(t)}}class lf extends Gc{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return v(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,v(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){v(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=pd(e.writeResults,e.commitTime),n=X(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Ys(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Zn(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{}class df extends hf{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Xs(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(m.UNKNOWN,i.toString())}))}Jo(e,t,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(e,Xs(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new g(m.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class ff{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(J(t),this._a=!1):p("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="RemoteStore";class mf{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{at(this)&&(p(Ct,"Restarting streams for network reachability change."),await(async function(u){const c=w(u);c.Ia.add(4),await En(c),c.Aa.set("Unknown"),c.Ia.delete(4),await dr(c)})(this))}))})),this.Aa=new ff(n,s)}}async function dr(r){if(at(r))for(const e of r.da)await e(!0)}async function En(r){for(const e of r.da)await e(!1)}function _s(r,e){const t=w(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Gi(t)?zi(t):An(t).x_()&&Bi(t,e))}function fn(r,e){const t=w(r),n=An(t);t.Ta.delete(e),n.x_()&&$c(t,e),t.Ta.size===0&&(n.x_()?n.B_():at(t)&&t.Aa.set("Unknown"))}function Bi(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}An(r).H_(e)}function $c(r,e){r.Ra.$e(e),An(r).Y_(e)}function zi(r){r.Ra=new cd({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),An(r).start(),r.Aa.aa()}function Gi(r){return at(r)&&!An(r).M_()&&r.Ta.size>0}function at(r){return w(r).Ia.size===0}function Kc(r){r.Ra=void 0}async function _f(r){r.Aa.set("Online")}async function gf(r){r.Ta.forEach(((e,t)=>{Bi(r,e)}))}async function pf(r,e){Kc(r),Gi(r)?(r.Aa.la(e),zi(r)):r.Aa.set("Unknown")}async function yf(r,e,t){if(r.Aa.set("Online"),e instanceof rc&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(r,e)}catch(n){p(Ct,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xr(r,n)}else if(e instanceof xr?r.Ra.Ye(e):e instanceof nc?r.Ra.it(e):r.Ra.et(e),!t.isEqual(R.min()))try{const n=await Nc(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Ra.Pt(o);return a.targetChanges.forEach(((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.Ta.get(c);l&&i.Ta.set(c,l.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,c)=>{const l=i.Ta.get(u);if(!l)return;i.Ta.set(u,l.withResumeToken(H.EMPTY_BYTE_STRING,l.snapshotVersion)),$c(i,u);const h=new Fe(l.target,u,c,l.sequenceNumber);Bi(i,h)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){p(Ct,"Failed to raise snapshot:",n),await Xr(r,n)}}async function Xr(r,e,t){if(!it(e))throw e;r.Ia.add(1),await En(r),r.Aa.set("Offline"),t||(t=()=>Nc(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{p(Ct,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await dr(r)}))}function jc(r,e){return e().catch((t=>Xr(r,t,e)))}async function wn(r){const e=w(r),t=tt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Je;for(;If(e);)try{const s=await ef(e.localStore,n);if(s===null){e.Pa.length===0&&t.B_();break}n=s.batchId,Tf(e,s)}catch(s){await Xr(e,s)}Qc(e)&&Wc(e)}function If(r){return at(r)&&r.Pa.length<10}function Tf(r,e){r.Pa.push(e);const t=tt(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Qc(r){return at(r)&&!tt(r).M_()&&r.Pa.length>0}function Wc(r){tt(r).start()}async function Ef(r){tt(r).na()}async function wf(r){const e=tt(r);for(const t of r.Pa)e.X_(t.mutations)}async function Af(r,e,t){const n=r.Pa.shift(),s=Pi.from(n,e,t);await jc(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await wn(r)}async function vf(r,e){e&&tt(r).Z_&&await(async function(n,s){if((function(o){return ec(o)&&o!==m.ABORTED})(s.code)){const i=n.Pa.shift();tt(n).N_(),await jc(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wn(n)}})(r,e),Qc(r)&&Wc(r)}async function Va(r,e){const t=w(r);t.asyncQueue.verifyOperationInProgress(),p(Ct,"RemoteStore received new credentials");const n=at(t);t.Ia.add(3),await En(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await dr(t)}async function ii(r,e){const t=w(r);e?(t.Ia.delete(2),await dr(t)):e||(t.Ia.add(2),await En(t),t.Aa.set("Unknown"))}function An(r){return r.Va||(r.Va=(function(t,n,s){const i=w(t);return i.ia(),new cf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:_f.bind(null,r),e_:gf.bind(null,r),n_:pf.bind(null,r),J_:yf.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Gi(r)?zi(r):r.Aa.set("Unknown")):(await r.Va.stop(),Kc(r))}))),r.Va}function tt(r){return r.ma||(r.ma=(function(t,n,s){const i=w(t);return i.ia(),new lf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ef.bind(null,r),n_:vf.bind(null,r),ea:wf.bind(null,r),ta:Af.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await wn(r)):(await r.ma.stop(),r.Pa.length>0&&(p(Ct,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new $i(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vn(r,e){if(J("AsyncQueue",`${e}: ${r}`),it(r))return new g(m.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{static emptySet(e){return new Et(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||E.comparator(t.key,n.key):(t,n)=>E.comparator(t.key,n.key),this.keyedMap=xn(),this.sortedSet=new z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Et;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.fa=new z(E.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):A(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Dt{constructor(e,t,n,s,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Dt(e,t,Et.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ar(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Vf{constructor(){this.queries=ba(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const s=w(t),i=s.queries;s.queries=ba(),i.forEach(((o,a)=>{for(const u of a.wa)u.onError(n)}))})(this,new g(m.ABORTED,"Firestore shutting down"))}}function ba(){return new qe((r=>qu(r)),ar)}async function Ki(r,e){const t=w(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(n=2):(i=new Rf,n=e.ba()?0:1);try{switch(n){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=vn(o,`Initialization of query '${Kt(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Qi(t)}async function ji(r,e){const t=w(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Pf(r,e){const t=w(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wa)a.Ca(s)&&(n=!0);o.ya=s}}n&&Qi(t)}function bf(r,e,t){const n=w(r),s=n.queries.get(e);if(s)for(const i of s.wa)i.onError(t);n.queries.delete(e)}function Qi(r){r.Da.forEach((e=>{e.next()}))}var oi,Sa;(Sa=oi||(oi={})).Fa="default",Sa.Cache="cache";class Wi{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Dt(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Dt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==oi.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.qa=e,this.byteLength=t}Qa(){return"metadata"in this.qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.serializer=e}Qs(e){return Ce(this.serializer,e)}$s(e){return e.metadata.exists?cs(this.serializer,e.document,!1):G.newNoDocument(this.Qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return X(e)}}class Hi{constructor(e,t){this.$a=e,this.serializer=t,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=Jc(e)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Ua.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Ka.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;const n=D.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.qa.document&&(this.Ka[this.Ka.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){const t=new Map,n=new Ca(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Qs(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||C()).add(i);t.set(o,a)}}return t}async za(e){const t=await tf(e,new Ca(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const s of this.Ua)await nf(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:t}}}function Jc(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.key=e}}class Yc{constructor(e){this.key=e}}class Zc{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=C(),this.mutatedKeys=C(),this.Xa=Bu(e),this.eu=new Et(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Pa,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((l,h)=>{const d=s.get(l),_=ur(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),y=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let T=!1;d&&_?d.data.isEqual(_.data)?I!==y&&(n.track({type:3,doc:_}),T=!0):this.iu(d,_)||(n.track({type:2,doc:_}),T=!0,(u&&this.Xa(_,u)>0||c&&this.Xa(_,c)<0)&&(a=!0)):!d&&_?(n.track({type:0,doc:_}),T=!0):d&&!_&&(n.track({type:1,doc:d}),T=!0,(u||c)&&(a=!0)),T&&(_?(o=o.add(_),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{eu:o,ru:n,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((l,h)=>(function(_,I){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A(20277,{At:T})}};return y(_)-y(I)})(l.type,h.type)||this.Xa(l.doc,h.doc))),this.su(n),s=s!=null&&s;const a=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Dt(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pa,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=C(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new Yc(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new Xc(n))})),t}uu(e){this.Ha=e.qs,this.Za=C();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Dt.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ut="SyncEngine";class Sf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cf{constructor(e){this.key=e,this.lu=!1}}class Df{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new qe((a=>qu(a)),ar),this.Tu=new Map,this.Iu=new Set,this.du=new z(E.comparator),this.Eu=new Map,this.Au=new Ni,this.Ru={},this.Vu=new Map,this.mu=St.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function xf(r,e,t=!0){const n=gs(r);let s;const i=n.Pu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await el(n,e,t,!0),s}async function Nf(r,e){const t=gs(r);await el(t,e,!0,!1)}async function el(r,e,t,n){const s=await hn(r.localStore,de(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Ji(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&_s(r.remoteStore,s),a}async function Ji(r,e,t,n,s){r.gu=(h,d,_)=>(async function(y,T,V,S){let b=T.view.nu(V);b.Ds&&(b=await Wr(y.localStore,T.query,!1).then((({documents:ne})=>T.view.nu(ne,b))));const O=S&&S.targetChanges.get(T.targetId),$=S&&S.targetMismatches.get(T.targetId)!=null,F=T.view.applyChanges(b,y.isPrimaryClient,O,$);return ai(y,T.targetId,F._u),F.snapshot})(r,h,d,_);const i=await Wr(r.localStore,e,!0),o=new Zc(e,i.qs),a=o.nu(i.documents),u=hr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);ai(r,t,c._u);const l=new Sf(e,t,o);return r.Pu.set(e,l),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),c.snapshot}async function kf(r,e,t){const n=w(r),s=n.Pu.get(e),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((o=>!ar(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await dn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&fn(n.remoteStore,s.targetId),mn(n,s.targetId)})).catch(st)):(mn(n,s.targetId),await dn(n.localStore,s.targetId,!0))}async function Ff(r,e){const t=w(r),n=t.Pu.get(e),s=t.Tu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),fn(t.remoteStore,n.targetId))}async function Of(r,e,t){const n=eo(r);try{const s=await(function(o,a){const u=w(o),c=M.now(),l=a.reduce(((_,I)=>_.add(I.key)),C());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let I=ge(),y=C();return u.Os.getEntries(_,l).next((T=>{I=T,I.forEach(((V,S)=>{S.isValidDocument()||(y=y.add(V))}))})).next((()=>u.localDocuments.getOverlayedDocuments(_,I))).next((T=>{h=T;const V=[];for(const S of a){const b=od(S,h.get(S.key).overlayedDocument);b!=null&&V.push(new Ue(S.key,b,bu(b.value.mapValue),Q.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,V,a)})).next((T=>{d=T;const V=T.applyToLocalDocumentSet(h,y);return u.documentOverlayCache.saveOverlays(_,T.batchId,V)}))})).then((()=>({batchId:d.batchId,changes:Gu(h)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new z(P)),c=c.insert(a,u),o.Ru[o.currentUser.toKey()]=c})(n,s.batchId,t),await Be(n,s.changes),await wn(n.remoteStore)}catch(s){const i=vn(s,"Failed to persist write");t.reject(i)}}async function tl(r,e){const t=w(r);try{const n=await Zd(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(v(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?v(o.lu,14607):s.removedDocuments.size>0&&(v(o.lu,42227),o.lu=!1))})),await Be(t,n,e)}catch(n){await st(n)}}function Da(r,e,t){const n=w(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Pu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=w(o);u.onlineState=a;let c=!1;u.queries.forEach(((l,h)=>{for(const d of h.wa)d.va(a)&&(c=!0)})),c&&Qi(u)})(n.eventManager,e),s.length&&n.hu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Mf(r,e,t){const n=w(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Eu.get(e),i=s&&s.key;if(i){let o=new z(E.comparator);o=o.insert(i,G.newNoDocument(i,R.min()));const a=C().add(i),u=new lr(R.min(),new Map,new z(P),o,a);await tl(n,u),n.du=n.du.remove(i),n.Eu.delete(e),Zi(n)}else await dn(n.localStore,e,!1).then((()=>mn(n,e,t))).catch(st)}async function Lf(r,e){const t=w(r),n=e.batch.batchId;try{const s=await Yd(t.localStore,e);Yi(t,n,null),Xi(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Be(t,s)}catch(s){await st(s)}}async function qf(r,e,t){const n=w(r);try{const s=await(function(o,a){const u=w(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next((h=>(v(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(n.localStore,e);Yi(n,e,t),Xi(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Be(n,s)}catch(s){await st(s)}}async function Uf(r,e){const t=w(r);at(t.remoteStore)||p(ut,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const a=w(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(n===Je)return void e.resolve();const s=t.Vu.get(n)||[];s.push(e),t.Vu.set(n,s)}catch(n){const s=vn(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Xi(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Yi(r,e,t){const n=w(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ru[n.currentUser.toKey()]=s}}function mn(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||nl(r,n)}))}function nl(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(fn(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Zi(r))}function ai(r,e,t){for(const n of t)n instanceof Xc?(r.Au.addReference(n.key,e),Bf(r,n)):n instanceof Yc?(p(ut,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||nl(r,n.key)):A(19791,{yu:n})}function Bf(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(p(ut,"New document in limbo: "+t),r.Iu.add(n),Zi(r))}function Zi(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new E(D.fromString(e)),n=r.mu.next();r.Eu.set(n,new Cf(t)),r.du=r.du.insert(t,n),_s(r.remoteStore,new Fe(de(yn(t.path)),n,"TargetPurposeLimboResolution",me.ue))}}async function Be(r,e,t){const n=w(r),s=[],i=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((a,u)=>{o.push(n.gu(u,e,t).then((c=>{var l;if((c||t)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=Mi.Es(u.targetId,c);i.push(h)}})))})),await Promise.all(o),n.hu.J_(s),await(async function(u,c){const l=w(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>f.forEach(c,(d=>f.forEach(d.Is,(_=>l.persistence.referenceDelegate.addReference(h,d.targetId,_))).next((()=>f.forEach(d.ds,(_=>l.persistence.referenceDelegate.removeReference(h,d.targetId,_)))))))))}catch(h){if(!it(h))throw h;p(Li,"Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const _=l.Fs.get(d),I=_.snapshotVersion,y=_.withLastLimboFreeSnapshotVersion(I);l.Fs=l.Fs.insert(d,y)}}})(n.localStore,i))}async function zf(r,e){const t=w(r);if(!t.currentUser.isEqual(e)){p(ut,"User change. New user:",e.toKey());const n=await xc(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((a=>{a.forEach((u=>{u.reject(new g(m.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Be(t,n.Bs)}}function Gf(r,e){const t=w(r),n=t.Eu.get(e);if(n&&n.lu)return C().add(n.key);{let s=C();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const a=t.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}async function $f(r,e){const t=w(r),n=await Wr(t.localStore,e.query,!0),s=e.view.uu(n);return t.isPrimaryClient&&ai(t,e.targetId,s._u),s}async function Kf(r,e){const t=w(r);return Oc(t.localStore,e).then((n=>Be(t,n)))}async function jf(r,e,t,n){const s=w(r),i=await(function(a,u){const c=w(a),l=w(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",(h=>l.Xn(h,u).next((d=>d?c.localDocuments.getDocuments(h,d):f.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await wn(s.remoteStore):t==="acknowledged"||t==="rejected"?(Yi(s,e,n||null),Xi(s,e),(function(a,u){w(w(a).mutationQueue).rr(u)})(s.localStore,e)):A(6720,"Unknown batchState",{wu:t}),await Be(s,i)):p(ut,"Cannot apply mutation batch with id: "+e)}async function Qf(r,e){const t=w(r);if(gs(t),eo(t),e===!0&&t.fu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await xa(t,n.toArray());t.fu=!0,await ii(t.remoteStore,!0);for(const i of s)_s(t.remoteStore,i)}else if(e===!1&&t.fu!==!1){const n=[];let s=Promise.resolve();t.Tu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(mn(t,o),dn(t.localStore,o,!0)))),fn(t.remoteStore,o)})),await s,await xa(t,n),(function(o){const a=w(o);a.Eu.forEach(((u,c)=>{fn(a.remoteStore,c)})),a.Au.jr(),a.Eu=new Map,a.du=new z(E.comparator)})(t),t.fu=!1,await ii(t.remoteStore,!1)}}async function xa(r,e,t){const n=w(r),s=[],i=[];for(const o of e){let a;const u=n.Tu.get(o);if(u&&u.length!==0){a=await hn(n.localStore,de(u[0]));for(const c of u){const l=n.Pu.get(c),h=await $f(n,l);h.snapshot&&i.push(h.snapshot)}}else{const c=await Fc(n.localStore,o);a=await hn(n.localStore,c),await Ji(n,rl(c),o,!1,a.resumeToken)}s.push(a)}return n.hu.J_(i),s}function rl(r){return Ou(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Wf(r){return(function(t){return w(w(t).persistence).Ps()})(w(r).localStore)}async function Hf(r,e,t,n){const s=w(r);if(s.fu)return void p(ut,"Ignoring unexpected query state notification.");const i=s.Tu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Oc(s.localStore,Uu(i[0])),a=lr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",H.EMPTY_BYTE_STRING);await Be(s,o,a);break}case"rejected":await dn(s.localStore,e,!0),mn(s,e,n);break;default:A(64155,t)}}async function Jf(r,e,t){const n=gs(r);if(n.fu){for(const s of e){if(n.Tu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){p(ut,"Adding an already active target "+s);continue}const i=await Fc(n.localStore,s),o=await hn(n.localStore,i);await Ji(n,rl(i),o.targetId,!1,o.resumeToken),_s(n.remoteStore,o)}for(const s of t)n.Tu.has(s)&&await dn(n.localStore,s,!1).then((()=>{fn(n.remoteStore,s),mn(n,s)})).catch(st)}}function gs(r){const e=w(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mf.bind(null,e),e.hu.J_=Pf.bind(null,e.eventManager),e.hu.pu=bf.bind(null,e.eventManager),e}function eo(r){const e=w(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qf.bind(null,e),e}function Xf(r,e,t){const n=w(r);(async function(i,o,a){try{const u=await o.getMetadata();if(await(function(_,I){const y=w(_),T=X(I.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",(V=>y.Ti.getBundleMetadata(V,I.id))).then((V=>!!V&&V.createTime.compareTo(T)>=0))})(i.localStore,u))return await o.close(),a._completeWith((function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}})(u)),Promise.resolve(new Set);a._updateProgress(Jc(u));const c=new Hi(u,o.serializer);let l=await o.Su();for(;l;){const d=await c.Wa(l);d&&a._updateProgress(d),l=await o.Su()}const h=await c.za(i.localStore);return await Be(i,h.Ja,void 0),await(function(_,I){const y=w(_);return y.persistence.runTransaction("Save bundle","readwrite",(T=>y.Ti.saveBundleMetadata(T,I)))})(i.localStore,u),a._completeWith(h.progress),Promise.resolve(h.ja)}catch(u){return fe(ut,`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class _n{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nt(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Dc(this.persistence,new Cc,e.initialUser,this.serializer)}Du(e){return new ki(ms.Vi,this.serializer)}bu(e){return new Bc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_n.provider={build:()=>new _n};class to extends _n{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){v(this.persistence.referenceDelegate instanceof Qr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new vc(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?le.withCacheSize(this.cacheSizeBytes):le.DEFAULT;return new ki((n=>Qr.Vi(n,t)),this.serializer)}}class no extends _n{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await eo(this.Mu.syncEngine),await wn(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Dc(this.persistence,new Cc,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new vc(n,e.asyncQueue,t)}Fu(e,t){const n=new hh(t,this.persistence);return new lh(e.asyncQueue,n)}Du(e){const t=Oi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?le.withCacheSize(this.cacheSizeBytes):le.DEFAULT;return new Fi(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,zc(),kr(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Bc}}class sl extends no{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Ns&&(this.sharedClientState.syncEngine={Do:jf.bind(null,t),vo:Hf.bind(null,t),Co:Jf.bind(null,t),Ps:Wf.bind(null,t),bo:Kf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await Qf(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(e){const t=zc();if(!Ns.C(t))throw new g(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Oi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ns(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class nt{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Da(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=zf.bind(null,this.syncEngine),await ii(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Vf})()}createDatastore(e){const t=Nt(e.databaseInfo.databaseId),n=(function(i){return new uf(i)})(e.databaseInfo);return(function(i,o,a,u){return new df(i,o,a,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new mf(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Da(this.syncEngine,t,0)),(function(){return va.C()?new va:new rf})())}createSyncEngine(e,t){return(function(s,i,o,a,u,c,l){const h=new Df(s,i,o,a,u,c);return l&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=w(s);p(Ct,"RemoteStore shutting down."),i.Ia.add(5),await En(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nt.provider={build:()=>new nt};function Na(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ps{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):J("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){this.Nu=e,this.serializer=t,this.metadata=new ie,this.buffer=new Uint8Array,this.Bu=(function(){return new TextDecoder("utf-8")})(),this.Lu().then((n=>{n&&n.Qa()?this.metadata.resolve(n.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const e=await this.ku();if(e===null)return null;const t=this.Bu.decode(e),n=Number(t);isNaN(n)&&this.qu(`length string (${t}) is not valid number`);const s=await this.Qu(n);return new Hc(JSON.parse(s),e.length+n)}$u(){return this.buffer.findIndex((e=>e===123))}async ku(){for(;this.$u()<0&&!await this.Uu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const t=this.Bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Uu(){const e=await this.Nu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Zf{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.qa)}`);this.metadata=n;do n=this.Su(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.ku(),t=this.Qu(e);return new Hc(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new g(m.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ku(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new g(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=w(s),a={documents:i.map((h=>Yn(o.serializer,h)))},u=await o.Jo("BatchGetDocuments",o.serializer.databaseId,D.emptyPath(),a,i.length),c=new Map;u.forEach((h=>{const d=_d(o.serializer,h);c.set(d.key.toString(),d)}));const l=[];return i.forEach((h=>{const d=c.get(h.toString());v(!!d,55234,{key:h}),l.push(d)})),l})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Tn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=E.fromPath(n);this.mutations.push(new Ri(s,this.precondition(s)))})),await(async function(n,s){const i=w(n),o={writes:s.map((a=>Zn(i.serializer,a)))};await i.Wo("Commit",i.serializer.databaseId,D.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A(50498,{Wu:e.constructor.name});t=R.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new g(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(R.min())?Q.exists(!1):Q.updateTime(t):Q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(R.min()))throw new g(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Q.updateTime(t)}return Q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class tm{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Gu=n.maxAttempts,this.F_=new Ui(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new em(this.datastore),t=this.Ju(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Hu(s)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(e){try{const t=this.updateFunction(e);return!sr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ec(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="FirestoreClient";class nm{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=hi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{p(rt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(p(rt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=vn(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Fs(r,e){r.asyncQueue.verifyOperationInProgress(),p(rt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await xc(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>{fe("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{p("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{fe("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=e}async function ka(r,e){r.asyncQueue.verifyOperationInProgress();const t=await ro(r);p(rt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Va(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Va(e.remoteStore,s))),r._onlineComponents=e}async function ro(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){p(rt,"Using user provided OfflineComponentProvider");try{await Fs(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===m.FAILED_PRECONDITION||s.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;fe("Error using user provided cache. Falling back to memory cache: "+t),await Fs(r,new _n)}}else p(rt,"Using default OfflineComponentProvider"),await Fs(r,new to(void 0));return r._offlineComponents}async function ys(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(p(rt,"Using user provided OnlineComponentProvider"),await ka(r,r._uninitializedComponentsProvider._online)):(p(rt,"Using default OnlineComponentProvider"),await ka(r,new nt))),r._onlineComponents}function il(r){return ro(r).then((e=>e.persistence))}function Rn(r){return ro(r).then((e=>e.localStore))}function ol(r){return ys(r).then((e=>e.remoteStore))}function so(r){return ys(r).then((e=>e.syncEngine))}function al(r){return ys(r).then((e=>e.datastore))}async function gn(r){const e=await ys(r),t=e.eventManager;return t.onListen=xf.bind(null,e.syncEngine),t.onUnlisten=kf.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nf.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ff.bind(null,e.syncEngine),t}function rm(r){return r.asyncQueue.enqueue((async()=>{const e=await il(r),t=await ol(r);return e.setNetworkEnabled(!0),(function(s){const i=w(s);return i.Ia.delete(0),dr(i)})(t)}))}function sm(r){return r.asyncQueue.enqueue((async()=>{const e=await il(r),t=await ol(r);return e.setNetworkEnabled(!1),(async function(s){const i=w(s);i.Ia.add(0),await En(i),i.Aa.set("Offline")})(t)}))}function im(r,e){const t=new ie;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await(function(c,l){const h=w(c);return h.persistence.runTransaction("read document","readonly",(d=>h.localDocuments.getDocument(d,l)))})(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=vn(a,`Failed to get document '${i} from cache`);o.reject(u)}})(await Rn(r),e,t))),t.promise}function ul(r,e,t={}){const n=new ie;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new ps({next:d=>{l.Ou(),o.enqueueAndForget((()=>ji(i,h)));const _=d.docs.has(a);!_&&d.fromCache?c.reject(new g(m.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&d.fromCache&&u&&u.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Wi(yn(a.path),l,{includeMetadataChanges:!0,ka:!0});return Ki(i,h)})(await gn(r),r.asyncQueue,e,t,n))),n.promise}function om(r,e){const t=new ie;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await Wr(s,i,!0),u=new Zc(i,a.qs),c=u.nu(a.documents),l=u.applyChanges(c,!1);o.resolve(l.snapshot)}catch(a){const u=vn(a,`Failed to execute query '${i} against cache`);o.reject(u)}})(await Rn(r),e,t))),t.promise}function cl(r,e,t={}){const n=new ie;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new ps({next:d=>{l.Ou(),o.enqueueAndForget((()=>ji(i,h))),d.fromCache&&u.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Wi(a,l,{includeMetadataChanges:!0,ka:!0});return Ki(i,h)})(await gn(r),r.asyncQueue,e,t,n))),n.promise}function am(r,e,t){const n=new ie;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await al(r);n.resolve((async function(o,a,u){var c;const l=w(o),{request:h,ft:d,parent:_}=lc(l.serializer,Mu(a),u);l.connection.Qo||delete h.parent;const I=(await l.Jo("RunAggregationQuery",l.serializer.databaseId,_,h,1)).filter((T=>!!T.result));v(I.length===1,64727);const y=(c=I[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(y).reduce(((T,V)=>(T[d[V]]=y[V],T)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function um(r,e){const t=new ps(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){w(s).Da.add(i),i.next()})(await gn(r),t))),()=>{t.Ou(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){w(s).Da.delete(i)})(await gn(r),t)))}}function cm(r,e,t,n){const s=(function(o,a){let u;return u=typeof o=="string"?li().encode(o):o,(function(l,h){return new Yf(l,h)})((function(l,h){if(l instanceof Uint8Array)return Na(l,h);if(l instanceof ArrayBuffer)return Na(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),a)})(t,Nt(e));r.asyncQueue.enqueueAndForget((async()=>{Xf(await so(r),s,n)}))}function lm(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=w(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Ti.getNamedQuery(o,s)))})(await Rn(r),e)))}function ll(r,e){return(function(n,s){return new Zf(n,s)})(r,e)}function hm(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=w(n),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((c=>(function(h,d,_,I,y){h=[...h],d=[...d],h.sort(_),d.sort(_);const T=h.length,V=d.length;let S=0,b=0;for(;S<V&&b<T;){const O=_(h[b],d[S]);O<0?y(h[b++]):O>0?I(d[S++]):(S++,b++)}for(;S<V;)I(d[S++]);for(;b<T;)y(h[b++])})(c,s,oh,(l=>{a.push(o.addFieldIndex(u,l))}),(l=>{a.push(o.deleteFieldIndex(u,l))})))).next((()=>f.waitFor(a)))))})(await Rn(r),e)))}function dm(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){w(n).Cs.Rs=s})(await Rn(r),e)))}function fm(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=w(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Rn(r))))}/**
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
 */function hl(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="firestore.googleapis.com",Oa=!0;class Ma{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new g(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dl,this.ssl=Oa}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Oa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ic;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ac)throw new g(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ih("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hl((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new g(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fr{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ma({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new g(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ma(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Jl;switch(n.type){case"firstParty":return new eh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new g(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Fa.get(t);n&&(p("ComponentProvider","Removing Datastore"),Fa.delete(t),n.terminate())})(this),Promise.resolve()}}function mm(r,e,t,n={}){var s;r=x(r,fr);const i=ui(e),o=r._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Qa(`https://${u}`),Nl("Firestore",!0)),o.host!==dl&&o.host!==u&&fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:n});if(!rr(c,a)&&(r._setSettings(c),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=se.MOCK_USER;else{l=kl(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new g(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new se(d)}r._authCredentials=new Xl(new Ya(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oe(this.firestore,e,this._query)}}class U{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new De(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new U(this.firestore,e,this._key)}toJSON(){return{type:U._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(xt(t,U._jsonSchema))return new U(e,n||null,new E(D.fromString(t.referencePath)))}}U._jsonSchemaVersion="firestore/documentReference/1.0",U._jsonSchema={type:Z("string",U._jsonSchemaVersion),referencePath:Z("string")};class De extends oe{constructor(e,t,n){super(e,t,yn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new U(this.firestore,null,new E(e))}withConverter(e){return new De(this.firestore,e,this._path)}}function Km(r,e,...t){if(r=ee(r),di("collection","path",e),r instanceof fr){const n=D.fromString(e,...t);return Ro(n),new De(r,null,n)}{if(!(r instanceof U||r instanceof De))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(D.fromString(e,...t));return Ro(n),new De(r.firestore,null,n)}}function jm(r,e){if(r=x(r,fr),di("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new oe(r,null,(function(n){return new Le(D.emptyPath(),n)})(e))}function _m(r,e,...t){if(r=ee(r),arguments.length===1&&(e=hi.newId()),di("doc","path",e),r instanceof fr){const n=D.fromString(e,...t);return vo(n),new U(r,null,new E(n))}{if(!(r instanceof U||r instanceof De))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(D.fromString(e,...t));return vo(n),new U(r.firestore,r instanceof De?r.converter:null,new E(n))}}function Qm(r,e){return r=ee(r),e=ee(e),(r instanceof U||r instanceof De)&&(e instanceof U||e instanceof De)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function fl(r,e){return r=ee(r),e=ee(e),r instanceof oe&&e instanceof oe&&r.firestore===e.firestore&&ar(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="AsyncQueue";class qa{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ui(this,"async_queue_retry"),this.oc=()=>{const n=kr();n&&p(La,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=kr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=kr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ie;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!it(e))throw e;p(La,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,J("INTERNAL UNHANDLED ERROR: ",Ua(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=$i.createAndSchedule(this,e,t,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&A(47125,{hc:Ua(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ua(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Ht(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class gm{constructor(){this._progressObserver={},this._taskCompletionResolver=new ie,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=-1;class B extends fr{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new qa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qa(e),this._firestoreClient=void 0,await e}}}function Hm(r,e,t){t||(t=Wn);const n=Wa(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(rr(i,e))return s;throw new g(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new g(m.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ac)throw new g(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ui(e.host)&&Qa(e.host),n.initialize({options:e,instanceIdentifier:t})}function Jm(r,e){const t=typeof r=="object"?r:Fl(),n=typeof r=="string"?r:e||Wn,s=Wa(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Ol("firestore");i&&mm(s,...i)}return s}function W(r){if(r._terminated)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ml(r),r._firestoreClient}function ml(r){var e,t,n;const s=r._freezeSettings(),i=(function(a,u,c,l){return new qh(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hl(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new nm(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}})(r._componentsProvider))}function Xm(r,e){fe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return _l(r,nt.provider,{build:n=>new no(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Ym(r){fe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();_l(r,nt.provider,{build:t=>new sl(t,e.cacheSizeBytes)})}function _l(r,e,t){if((r=x(r,B))._firestoreClient||r._terminated)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new g(m.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},ml(r)}function Zm(r){if(r._initialized&&!r._terminated)throw new g(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ie;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Se.C())return Promise.resolve();const s=n+Sc;await Se.delete(s)})(Oi(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function e_(r){return(function(t){const n=new ie;return t.asyncQueue.enqueueAndForget((async()=>Uf(await so(t),n))),n.promise})(W(r=x(r,B)))}function t_(r){return rm(W(r=x(r,B)))}function n_(r){return sm(W(r=x(r,B)))}function r_(r){return Ml(r.app,"firestore",r._databaseId.database),r._delete()}function Ba(r,e){const t=W(r=x(r,B)),n=new gm;return cm(t,r._databaseId,e,n),n}function pm(r,e){return lm(W(r=x(r,B)),e).then((t=>t?new oe(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class er{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class ym{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(H.fromBase64String(e))}catch(t){throw new g(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ye(H.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xt(e,ye._jsonSchema))return ye.fromBase64String(e.bytes)}}ye._jsonSchemaVersion="firestore/bytes/1.0",ye._jsonSchema={type:Z("string",ye._jsonSchemaVersion),bytes:Z("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function s_(){return new kt(Ls)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xe._jsonSchemaVersion}}static fromJSON(e){if(xt(e,xe._jsonSchema))return new xe(e.latitude,e.longitude)}}xe._jsonSchemaVersion="firestore/geoPoint/1.0",xe._jsonSchema={type:Z("string",xe._jsonSchemaVersion),latitude:Z("number"),longitude:Z("number")};/**
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
 */class Ae{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xt(e,Ae._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ae(e.vectorValues);throw new g(m.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ae._jsonSchemaVersion="firestore/vectorValue/1.0",Ae._jsonSchema={type:Z("string",Ae._jsonSchemaVersion),vectorValues:Z("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=/^__.*__$/;class Tm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ue(e,this.data,this.fieldMask,t,this.fieldTransforms):new In(e,this.data,t,this.fieldTransforms)}}class gl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ue(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pl(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A(40011,{Ec:r})}}class Is{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Is(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.fc(e),s}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Yr(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pl(this.Ec)&&Im.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Em{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Nt(e)}Dc(e,t,n,s=!1){return new Is({Ec:e,methodName:t,bc:n,path:j.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ot(r){const e=r._freezeSettings(),t=Nt(r._databaseId);return new Em(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ts(r,e,t,n,s,i={}){const o=r.Dc(i.merge||i.mergeFields?2:0,e,t,s);ho("Data must be an object, but it was:",o,n);const a=Tl(n,o);let u,c;if(i.merge)u=new _e(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=tr(e,h,t);if(!o.contains(d))throw new g(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wl(l,d)||l.push(d)}u=new _e(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Tm(new ue(a),u,c)}class mr extends Ft{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mr}}function yl(r,e,t){return new Is({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class io extends Ft{_toFieldTransform(e){return new cr(e.path,new un)}isEqual(e){return e instanceof io}}class oo extends Ft{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=yl(this,e,!0),n=this.vc.map((i=>Mt(i,t))),s=new Rt(n);return new cr(e.path,s)}isEqual(e){return e instanceof oo&&rr(this.vc,e.vc)}}class ao extends Ft{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=yl(this,e,!0),n=this.vc.map((i=>Mt(i,t))),s=new Vt(n);return new cr(e.path,s)}isEqual(e){return e instanceof ao&&rr(this.vc,e.vc)}}class uo extends Ft{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new cn(e.serializer,ju(e.serializer,this.Cc));return new cr(e.path,t)}isEqual(e){return e instanceof uo&&this.Cc===e.Cc}}function co(r,e,t,n){const s=r.Dc(1,e,t);ho("Data must be an object, but it was:",s,n);const i=[],o=ue.empty();ot(n,((u,c)=>{const l=Es(e,u,t);c=ee(c);const h=s.gc(l);if(c instanceof mr)i.push(l);else{const d=Mt(c,h);d!=null&&(i.push(l),o.set(l,d))}}));const a=new _e(i);return new gl(o,a,s.fieldTransforms)}function lo(r,e,t,n,s,i){const o=r.Dc(1,e,t),a=[tr(e,n,t)],u=[s];if(i.length%2!=0)throw new g(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(tr(e,i[d])),u.push(i[d+1]);const c=[],l=ue.empty();for(let d=a.length-1;d>=0;--d)if(!wl(c,a[d])){const _=a[d];let I=u[d];I=ee(I);const y=o.gc(_);if(I instanceof mr)c.push(_);else{const T=Mt(I,y);T!=null&&(c.push(_),l.set(_,T))}}const h=new _e(c);return new gl(l,h,o.fieldTransforms)}function Il(r,e,t,n=!1){return Mt(t,r.Dc(n?4:3,e))}function Mt(r,e){if(El(r=ee(r)))return ho("Unsupported field value:",e,r),Tl(r,e);if(r instanceof Ft)return(function(n,s){if(!pl(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let u=Mt(a,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ju(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=M.fromDate(n);return{timestampValue:ln(s.serializer,i)}}if(n instanceof M){const i=new M(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ln(s.serializer,i)}}if(n instanceof xe)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ye)return{bytesValue:sc(s.serializer,n._byteString)};if(n instanceof U){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ci(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ae)return(function(o,a){return{mapValue:{fields:{[Ii]:{stringValue:Ti},[sn]:{arrayValue:{values:o.toArray().map((c=>{if(typeof c!="number")throw a.wc("VectorValues must only contain numeric values.");return vi(a.serializer,c)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${Zr(n)}`)})(r,e)}function Tl(r,e){const t={};return Iu(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ot(r,((n,s)=>{const i=Mt(s,e.Vc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function El(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof M||r instanceof xe||r instanceof ye||r instanceof U||r instanceof Ft||r instanceof Ae)}function ho(r,e,t){if(!El(t)||!eu(t)){const n=Zr(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function tr(r,e,t){if((e=ee(e))instanceof kt)return e._internalPath;if(typeof e=="string")return Es(r,e);throw Yr("Field path arguments must be of type string or ",r,!1,void 0,t)}const wm=new RegExp("[~\\*/\\[\\]]");function Es(r,e,t){if(e.search(wm)>=0)throw Yr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kt(...e.split("."))._internalPath}catch{throw Yr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Yr(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new g(m.INVALID_ARGUMENT,a+r+u)}function wl(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new U(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Am(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ws("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Am extends nr{data(){return super.data()}}function ws(r,e){return typeof e=="string"?Es(r,e):e instanceof kt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new g(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fo{}class _r extends fo{}function i_(r,e,...t){let n=[];e instanceof fo&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof Vn)).length,a=i.filter((u=>u instanceof gr)).length;if(o>1||o>0&&a>0)throw new g(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class gr extends _r{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new gr(e,t,n)}_apply(e){const t=this._parse(e);return Rl(e._query,t),new oe(e.firestore,e.converter,Hs(e._query,t))}_parse(e){const t=Ot(e.firestore);return(function(i,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ga(h,l);const I=[];for(const y of h)I.push(za(u,i,y));d={arrayValue:{values:I}}}else d=za(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ga(h,l),d=Il(a,o,h,l==="in"||l==="not-in");return N.create(c,l,d)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function o_(r,e,t){const n=e,s=ws("where",r);return gr._create(s,n,t)}class Vn extends fo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Rl(o,u),o=Hs(o,u)})(e._query,t),new oe(e.firestore,e.converter,Hs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function a_(...r){return r.forEach((e=>Vl("or",e))),Vn._create("or",r)}function u_(...r){return r.forEach((e=>Vl("and",e))),Vn._create("and",r)}class mo extends _r{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mo(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xn(i,o)})(e._query,this._field,this._direction);return new oe(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Le(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function c_(r,e="asc"){const t=e,n=ws("orderBy",r);return mo._create(n,t)}class As extends _r{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new As(e,t,n)}_apply(e){return new oe(e.firestore,e.converter,zr(e._query,this._limit,this._limitType))}}function l_(r){return tu("limit",r),As._create("limit",r,"F")}function h_(r){return tu("limitToLast",r),As._create("limitToLast",r,"L")}class vs extends _r{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new vs(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new oe(e.firestore,e.converter,(function(s,i){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(e._query,t))}}function d_(...r){return vs._create("startAt",r,!0)}function f_(...r){return vs._create("startAfter",r,!1)}class Rs extends _r{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Rs(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new oe(e.firestore,e.converter,(function(s,i){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(e._query,t))}}function m_(...r){return Rs._create("endBefore",r,!1)}function __(...r){return Rs._create("endAt",r,!0)}function vl(r,e,t,n){if(t[0]=ee(t[0]),t[0]instanceof nr)return(function(i,o,a,u,c){if(!u)throw new g(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Wt(i))if(h.field.isKeyField())l.push(At(o,u.key));else{const d=u.data.field(h.field);if(ss(d))throw new g(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const _=h.field.canonicalString();throw new g(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}l.push(d)}return new et(l,c)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Ot(r.firestore);return(function(o,a,u,c,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let I=0;I<l.length;I++){const y=l[I];if(d[I].field.isKeyField()){if(typeof y!="string")throw new g(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!wi(o)&&y.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const T=o.path.child(D.fromString(y));if(!E.isDocumentKey(T))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const V=new E(T);_.push(At(a,V))}else{const T=Il(u,c,y);_.push(T)}}return new et(_,h)})(r._query,r.firestore._databaseId,s,e,t,n)}}function za(r,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new g(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wi(e)&&t.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(D.fromString(t));if(!E.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return At(r,new E(n))}if(t instanceof U)return At(r,t._key);throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zr(t)}.`)}function Ga(r,e){if(!Array.isArray(r)||r.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rl(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Vl(r,e){if(!(e instanceof gr||e instanceof Vn))throw new g(m.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Pl{convertValue(e,t="none"){switch(Ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return K(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw A(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ot(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[sn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((o=>K(o.doubleValue)));return new Ae(i)}convertGeoPoint(e){return new xe(K(e.latitude),K(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=is(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const t=Oe(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=D.fromString(e);v(mc(n),9688,{name:e});const s=new wt(n.get(1),n.get(3)),i=new E(n.popFirst(5));return s.isEqual(t)||J(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class _o extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new U(this.firestore,null,t)}}/**
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
 */function g_(r){return new er("sum",tr("sum",r))}function p_(r){return new er("avg",tr("average",r))}function vm(){return new er("count")}function y_(r,e){var t,n;return r instanceof er&&e instanceof er&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((n=e._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function I_(r,e){return fl(r.query,e.query)&&rr(r.data(),e.data())}/**
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
 */const bl="NOT SUPPORTED";class We{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ie extends nr{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ws("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new g(m.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ie._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function T_(r,e,t){if(xt(e,Ie._jsonSchema)){if(e.bundle===bl)throw new g(m.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Nt(r._databaseId),s=ll(e.bundle,n),i=s.Ku(),o=new Hi(s.getMetadata(),n);for(const l of i)o.Wa(l);const a=o.documents;if(a.length!==1)throw new g(m.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const u=cs(n,a[0].document),c=new E(D.fromString(e.bundleName));return new Ie(r,new _o(r),c,u,new We(!1,!1),t||null)}}Ie._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ie._jsonSchema={type:Z("string",Ie._jsonSchemaVersion),bundleSource:Z("string","DocumentSnapshot"),bundleName:Z("string"),bundle:Z("string")};class Fr extends Ie{data(e={}){return super.data(e)}}class Te{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new We(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Fr(this._firestore,this._userDataWriter,n.key,n,new We(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const u=new Fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new We(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new Fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new We(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Rm(a.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new g(m.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Te._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function E_(r,e,t){if(xt(e,Te._jsonSchema)){if(e.bundle===bl)throw new g(m.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Nt(r._databaseId),s=ll(e.bundle,n),i=s.Ku(),o=new Hi(s.getMetadata(),n);for(const d of i)o.Wa(d);if(o.queries.length!==1)throw new g(m.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=hs(o.queries[0].bundledQuery),u=o.documents;let c=new Et;u.map((d=>{const _=cs(n,d.document);c=c.add(_)}));const l=Dt.fromInitialDocuments(a,c,C(),!1,!1),h=new oe(r,t||null,a);return new Te(r,new _o(r),h,l)}}function Rm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A(61501,{type:r})}}function w_(r,e){return r instanceof Ie&&e instanceof Ie?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Te&&e instanceof Te&&r._firestore===e._firestore&&fl(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(r){r=x(r,U);const e=x(r.firestore,B);return ul(W(e),r._key).then((t=>go(e,r,t)))}Te._jsonSchemaVersion="firestore/querySnapshot/1.0",Te._jsonSchema={type:Z("string",Te._jsonSchemaVersion),bundleSource:Z("string","QuerySnapshot"),bundleName:Z("string"),bundle:Z("string")};class ct extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new U(this.firestore,null,t)}}function v_(r){r=x(r,U);const e=x(r.firestore,B),t=W(e),n=new ct(e);return im(t,r._key).then((s=>new Ie(e,n,r._key,s,new We(s!==null&&s.hasLocalMutations,!0),r.converter)))}function R_(r){r=x(r,U);const e=x(r.firestore,B);return ul(W(e),r._key,{source:"server"}).then((t=>go(e,r,t)))}function V_(r){r=x(r,oe);const e=x(r.firestore,B),t=W(e),n=new ct(e);return Al(r._query),cl(t,r._query).then((s=>new Te(e,n,r,s)))}function P_(r){r=x(r,oe);const e=x(r.firestore,B),t=W(e),n=new ct(e);return om(t,r._query).then((s=>new Te(e,n,r,s)))}function b_(r){r=x(r,oe);const e=x(r.firestore,B),t=W(e),n=new ct(e);return cl(t,r._query,{source:"server"}).then((s=>new Te(e,n,r,s)))}function S_(r,e,t){r=x(r,U);const n=x(r.firestore,B),s=Vs(r.converter,e,t);return pr(n,[Ts(Ot(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Q.none())])}function C_(r,e,t,...n){r=x(r,U);const s=x(r.firestore,B),i=Ot(s);let o;return o=typeof(e=ee(e))=="string"||e instanceof kt?lo(i,"updateDoc",r._key,e,t,n):co(i,"updateDoc",r._key,e),pr(s,[o.toMutation(r._key,Q.exists(!0))])}function D_(r){return pr(x(r.firestore,B),[new Tn(r._key,Q.none())])}function x_(r,e){const t=x(r.firestore,B),n=_m(r),s=Vs(r.converter,e);return pr(t,[Ts(Ot(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Q.exists(!1))]).then((()=>n))}function $a(r,...e){var t,n,s;r=ee(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ht(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ht(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(r instanceof U)c=x(r.firestore,B),l=yn(r._key.path),u={next:h=>{e[o]&&e[o](go(c,r,h))},error:e[o+1],complete:e[o+2]};else{const h=x(r,oe);c=x(h.firestore,B),l=h._query;const d=new ct(c);u={next:_=>{e[o]&&e[o](new Te(c,d,h,_))},error:e[o+1],complete:e[o+2]},Al(r._query)}return(function(d,_,I,y){const T=new ps(y),V=new Wi(_,T,I);return d.asyncQueue.enqueueAndForget((async()=>Ki(await gn(d),V))),()=>{T.Ou(),d.asyncQueue.enqueueAndForget((async()=>ji(await gn(d),V)))}})(W(c),l,a,u)}function N_(r,e,...t){const n=ee(r),s=(function(u){const c={bundle:"",bundleName:"",bundleSource:""},l=["bundle","bundleName","bundleSource"];for(const h of l){if(!(h in u)){c.error=`snapshotJson missing required field: ${h}`;break}const d=u[h];if(typeof d!="string"){c.error=`snapshotJson field '${h}' must be a string.`;break}if(d.length===0){c.error=`snapshotJson field '${h}' cannot be an empty string.`;break}h==="bundle"?c.bundle=d:h==="bundleName"?c.bundleName=d:h==="bundleSource"&&(c.bundleSource=d)}return c})(e);if(s.error)throw new g(m.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||Ht(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&Ht(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(c,l,h,d,_){let I,y=!1;return Ba(c,l.bundle).then((()=>pm(c,l.bundleName))).then((V=>{V&&!y&&(_&&V.withConverter(_),I=$a(V,h||{},d))})).catch((V=>(d.error&&d.error(V),()=>{}))),()=>{y||(y=!0,I&&I())}})(n,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&Ht(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(c,l,h,d,_){let I,y=!1;return Ba(c,l.bundle).then((()=>{if(!y){const V=new U(c,_||null,E.fromPath(l.bundleName));I=$a(V,h||{},d)}})).catch((V=>(d.error&&d.error(V),()=>{}))),()=>{y||(y=!0,I&&I())}})(n,s,i,a,t[o])}throw new g(m.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function k_(r,e){return um(W(r=x(r,B)),Ht(e)?e:{next:e})}function pr(r,e){return(function(n,s){const i=new ie;return n.asyncQueue.enqueueAndForget((async()=>Of(await so(n),s,i))),i.promise})(W(r),e)}function go(r,e,t){const n=t.docs.get(e._key),s=new ct(r);return new Ie(r,s,e._key,n,new We(t.hasPendingWrites,t.fromCache),e.converter)}function F_(r){return Vm(r,{count:vm()})}function Vm(r,e){const t=x(r.firestore,B),n=W(t),s=yu(e,((i,o)=>new Zu(o,i.aggregateType,i._internalFieldPath)));return am(n,r._query,s).then((i=>(function(a,u,c){const l=new ct(a);return new ym(u,l,c)})(t,r,i)))}class Pm{constructor(e){this.kind="memory",this._onlineComponentProvider=nt.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new to(void 0)}}toJSON(){return{kind:this.kind}}}class bm{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Nm(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Sm{constructor(){this.kind="memoryEager",this._offlineComponentProvider=_n.provider}toJSON(){return{kind:this.kind}}}class Cm{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new to(e)}}toJSON(){return{kind:this.kind}}}function O_(){return new Sm}function M_(r){return new Cm(r==null?void 0:r.cacheSizeBytes)}function L_(r){return new Pm(r)}function q_(r){return new bm(r)}class Dm{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=nt.provider,this._offlineComponentProvider={build:t=>new no(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class xm{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=nt.provider,this._offlineComponentProvider={build:t=>new sl(t,e==null?void 0:e.cacheSizeBytes)}}}function Nm(r){return new Dm(r==null?void 0:r.forceOwnership)}function U_(){return new xm}/**
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
 */const km={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ot(e)}set(e,t,n){this._verifyNotCommitted();const s=He(e,this._firestore),i=Vs(s.converter,t,n),o=Ts(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Q.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=He(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof kt?lo(this._dataReader,"WriteBatch.update",i._key,t,n,s):co(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Q.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=He(e,this._firestore);return this._mutations=this._mutations.concat(new Tn(t._key,Q.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function He(r,e){if((r=ee(r)).firestore!==e)throw new g(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ot(e)}get(e){const t=He(e,this._firestore),n=new _o(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return A(24041);const i=s[0];if(i.isFoundDocument())return new nr(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new nr(this._firestore,n,t._key,null,t.converter);throw A(18433,{doc:i})}))}set(e,t,n){const s=He(e,this._firestore),i=Vs(s.converter,t,n),o=Ts(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=He(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof kt?lo(this._dataReader,"Transaction.update",i._key,t,n,s):co(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=He(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm extends Om{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=He(e,this._firestore),n=new ct(this._firestore);return super.get(e).then((s=>new Ie(this._firestore,n,t._key,s._document,new We(!1,!1),t.converter)))}}function B_(r,e,t){r=x(r,B);const n=Object.assign(Object.assign({},km),t);return(function(i){if(i.maxAttempts<1)throw new g(m.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(i,o,a){const u=new ie;return i.asyncQueue.enqueueAndForget((async()=>{const c=await al(i);new tm(i.asyncQueue,c,a,o,u).zu()})),u.promise})(W(r),(s=>e(new Mm(r,s))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return new mr("deleteField")}function G_(){return new io("serverTimestamp")}function $_(...r){return new oo("arrayUnion",r)}function K_(...r){return new ao("arrayRemove",r)}function j_(r){return new uo("increment",r)}function Q_(r){return new Ae(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(r){return W(r=x(r,B)),new Fm(r,(e=>pr(r,e)))}/**
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
 */function H_(r,e){const t=W(r=x(r,B));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return fe("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(c){try{return JSON.parse(c)}catch(l){throw new g(m.INVALID_ARGUMENT,"Failed to parse JSON: "+(l==null?void 0:l.message))}})(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=Ka(u,"collectionGroup"),l=[];if(Array.isArray(u.fields))for(const h of u.fields){const d=Es("setIndexConfiguration",Ka(h,"fieldPath"));h.arrayConfig==="CONTAINS"?l.push(new It(d,2)):h.order==="ASCENDING"?l.push(new It(d,0)):h.order==="DESCENDING"&&l.push(new It(d,1))}a.push(new Yt(Yt.UNKNOWN_ID,c,l,Zt.empty()))}return a})(e);return hm(t,n)}function Ka(r,e){if(typeof r[e]!="string")throw new g(m.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class Lm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function J_(r){var e;r=x(r,B);const t=ja.get(r);if(t)return t;if(((e=W(r)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const n=new Lm(r);return ja.set(r,n),n}function X_(r){Sl(r,!0)}function Y_(r){Sl(r,!1)}function Z_(r){fm(W(r._firestore)).then((e=>p("deleting all persistent cache indexes succeeded"))).catch((e=>fe("deleting all persistent cache indexes failed",e)))}function Sl(r,e){dm(W(r._firestore),e).then((t=>p(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>fe(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const ja=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(r){var e;const t=(e=W(x(r.firestore,B))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return t===void 0?null:ls(t,de(r._query)).Vt}function tg(r,e){var t;const n=yu(e,((i,o)=>new Zu(o,i.aggregateType,i._internalFieldPath))),s=(t=W(x(r.firestore,B))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return s===void 0?null:lc(s,Mu(r._query),n,!0).request}/**
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
 */class ng{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return po.instance.onExistenceFilterMismatch(e)}}class po{constructor(){this.Fc=new Map}static get instance(){return Rr||(Rr=new po,(function(t){if(Gr)throw new Error("a TestingHooksSpi instance is already set");Gr=t})(Rr)),Rr}ct(e){this.Fc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Fc;return n.set(t,e),()=>n.delete(t)}}let Rr=null;(function(e,t=!0){(function(s){pn=s})(jl),Ql(new Wl("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new B(new Yl(n.getProvider("auth-internal")),new th(o,n.getProvider("app-check-internal")),(function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new g(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(c.options.projectId,l)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),To(Eo,wo,e),To(Eo,wo,"esm2017")})();export{Km as $,Pl as A,ye as B,De as C,U as D,tg as E,kt as F,xe as G,eg as H,$m as I,fe as J,ih as K,gm as L,x_ as M,y_ as N,I_ as O,Lm as P,oe as Q,u_ as R,We as S,M as T,K_ as U,Ae as V,Fm as W,$_ as X,p_ as Y,Zm as Z,hi as _,er as a,o_ as a$,jm as a0,mm as a1,vm as a2,Z_ as a3,D_ as a4,z_ as a5,n_ as a6,Y_ as a7,_m as a8,s_ as a9,M_ as aA,pm as aB,$a as aC,N_ as aD,k_ as aE,a_ as aF,c_ as aG,q_ as aH,U_ as aI,Nm as aJ,i_ as aK,fl as aL,E_ as aM,Qm as aN,B_ as aO,G_ as aP,S_ as aQ,H_ as aR,Um as aS,w_ as aT,f_ as aU,d_ as aV,g_ as aW,r_ as aX,C_ as aY,Q_ as aZ,e_ as a_,T_ as aa,Xm as ab,Ym as ac,t_ as ad,X_ as ae,__ as af,m_ as ag,W as ah,pr as ai,Vm as aj,F_ as ak,A_ as al,v_ as am,R_ as an,V_ as ao,P_ as ap,b_ as aq,Jm as ar,J_ as as,j_ as at,Hm as au,l_ as av,h_ as aw,Ba as ax,O_ as ay,L_ as az,ym as b,W_ as b0,Ie as c,Ft as d,B as e,g as f,Vn as g,_r as h,Fr as i,Rs as j,gr as k,As as l,mo as m,Te as n,vs as o,Mm as p,H as q,wt as r,E as s,zm as t,Wm as u,Jl as v,j as w,ng as x,x as y,Bm as z};
