"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9009:function(e,t,n){n.d(t,{JU:function(){return iT},QT:function(){return iY},ad:function(){return iC},pl:function(){return iJ}});var r,i,s=n(5723),a=n(6574),o=n(9858),l=n(8954),u=n(1197),c=n(9079);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="10.8.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(m.logLevel<=o.in.DEBUG){let t=n.map(w);m.debug("Firestore (".concat(f,"): ").concat(e),...t)}}function y(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(m.logLevel<=o.in.ERROR){let t=n.map(w);m.error("Firestore (".concat(f,"): ").concat(e),...t)}}function v(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(m.logLevel<=o.in.WARN){let t=n.map(w);m.warn("Firestore (".concat(f,"): ").concat(e),...t)}}function w(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(f,") INTERNAL ASSERTION FAILED: ")+e;throw y(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(e))}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class b{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class A{start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new S;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new S,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new S)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||E(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||E(),new d(e)}constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class D{T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}}class N{getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.l=e,this.h=t,this.P=n}}class k{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));let n=e.token!==this.R;return this.R=e.token,p("FirebaseAppCheckTokenProvider","Received ".concat(n?"new":"existing"," token.")),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||E(),this.R=e.token,new k(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}function V(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static fromTimestamp(e){return new P(e)}static min(){return new P(new O(0,0))}static max(){return new P(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&E(),void 0===n?n=e.length-t:n>e.length-t&&E(),this.segments=e,this.offset=t,this.len=n}}class F extends M{construct(e,t,n){return new F(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=[];for(let e of t){if(e.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,"Invalid segment (".concat(e,"). Paths must not contain // in them."));r.push(...e.split("/").filter(e=>e.length>0))}return new F(r)}static emptyPath(){return new F([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends M{construct(e,t,n){return new q(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new T(_.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromPath(e){return new B(F.fromString(e))}static fromName(e){return new B(F.fromString(e).popFirst(5))}static empty(){return new B(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new F(e.slice()))}constructor(e){this.path=e}}/**
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
 */class z{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}z.UNKNOWN_ID=-1;class K{static min(){return new K(P.min(),B.empty(),-1)}static max(){return new K(P.max(),B.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}class Q{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}constructor(){this.onCommittedListeners=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e){if(e.code!==_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof G?t:G.resolve(t)}catch(e){return G.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,n)=>{t(e)})}static reject(e){return new G((t,n)=>{n(e)})}static waitFor(e){return new G((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=G.resolve(!1);for(let n of e)t=t.next(e=>e?G.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new G((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new G((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static open(e,t,n,r){try{return new W(t,e.transaction(r,n))}catch(e){throw new X(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new $(this.transaction.objectStore(e))}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new S,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new X(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=et(t.target.error);this.V.reject(new X(e,n))}}}class H{static delete(e){return p("SimpleDb","Removing database:",e),Z(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,l.hl)())return!1;if(H.C())return!0;let e=(0,l.z$)(),t=H.S(e),n=H.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==c&&"YES"===(null===(e=c.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new X(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new T(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new X(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=W.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),G.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===H.S((0,l.z$)())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}}class Y{get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Z(this.k.delete())}constructor(e){this.k=e,this.q=!1,this.K=null}}class X extends T{constructor(e,t){super(_.UNAVAILABLE,"IndexedDB transaction '".concat(e,"' failed: ").concat(t)),this.name="IndexedDbTransactionError"}}function J(e){return"IndexedDbTransactionError"===e.name}class ${put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Z(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Z(this.store.add(e))}get(e){return Z(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Z(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Z(this.store.count())}W(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new G((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new G((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){p("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new G((n,r)=>{t.onerror=e=>{r(et(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new G((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new Y(i),a=t(i.primaryKey,i.value,s);if(a instanceof G){let e=a.catch(e=>(s.done(),G.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>G.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}constructor(e){this.store=e}}function Z(e){return new G((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(et(e.target.error))}})}let ee=!1;function et(e){let t=H.S((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new T("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '".concat(t,"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."));return ee||(ee=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
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
 */class en{se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}}function er(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function es(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ea(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}en._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{insert(e,t){return new eo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eu.BLACK,null,null))}remove(e){return new eo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push("".concat(t,":").concat(n)),!1)),"{".concat(e.join(", "),"}")}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||eu.EMPTY}}class el{getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class eu{copy(e,t,n,r,i){return new eu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eu.RED,this.left=null!=r?r:eu.EMPTY,this.right=null!=i?i:eu.EMPTY,this.size=this.left.size+1+this.right.size}}eu.EMPTY=null,eu.RED=!0,eu.BLACK=!1,eu.EMPTY=new class{get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eh(this.data.getIterator())}getIteratorFrom(e){return new eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ec)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ec(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new eo(this.comparator)}}class eh{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static empty(){return new ed([])}unionWith(e){let t=new ec(q.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ed(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}constructor(e){this.fields=e,e.sort(q.comparator)}}/**
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
 */class ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static fromBase64String(e){return new em(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ef("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new em(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}em.EMPTY_BYTE_STRING=new em("");let eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ep(e){if(e||E(),"string"==typeof e){let t=0,n=eg.exec(e);if(n||E(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ey(e.seconds),nanos:ey(e.nanos)}}function ey(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ev(e){return"string"==typeof e?em.fromBase64String(e):em.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eE(e){let t=e.mapValue.fields.__previous_value__;return ew(t)?eE(t):t}function e_(e){let t=ep(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class eS{static empty(){return new eS("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof eS&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eC(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ew(e)?4:eM(e)?9007199254740991:10:E()}function eb(e,t){if(e===t)return!0;let n=eC(e);if(n!==eC(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e_(e).isEqual(e_(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ep(e.timestampValue),r=ep(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ev(e.bytesValue).isEqual(ev(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ey(e.geoPointValue.latitude)===ey(t.geoPointValue.latitude)&&ey(e.geoPointValue.longitude)===ey(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ey(e.integerValue)===ey(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ey(e.doubleValue),r=ey(t.doubleValue);return n===r?er(n)===er(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],eb);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ei(n)!==ei(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eb(n[e],r[e])))return!1;return!0}(e,t);default:return E()}}function eA(e,t){return void 0!==(e.values||[]).find(e=>eb(e,t))}function eD(e,t){if(e===t)return 0;let n=eC(e),r=eC(t);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ey(e.integerValue||e.doubleValue),r=ey(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eN(e.timestampValue,t.timestampValue);case 4:return eN(e_(e),e_(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ev(e),r=ev(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=L(n[e],r[e]);if(0!==t)return t}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=L(ey(e.latitude),ey(t.latitude));return 0!==n?n:L(ey(e.longitude),ey(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eD(n[e],r[e]);if(t)return t}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eI.mapValue&&t===eI.mapValue)return 0;if(e===eI.mapValue)return 1;if(t===eI.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=L(r[e],s[e]);if(0!==t)return t;let a=eD(n[r[e]],i[s[e]]);if(0!==a)return a}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw E()}}function eN(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);let n=ep(e),r=ep(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function ek(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ep(e);return"time(".concat(t.seconds,",").concat(t.nanos,")")}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ev(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,B.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,"geo(".concat(n.latitude,",").concat(n.longitude,")")):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ek(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+="".concat(i,":").concat(ek(e.fields[i]));return n+"}"}(e.mapValue):E()}function ex(e){return!!e&&"integerValue"in e}function eR(e){return!!e&&"arrayValue"in e}function eL(e){return!!e&&"nullValue"in e}function eV(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eO(e){return!!e&&"mapValue"in e}function eP(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return es(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eP(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eP(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eM(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{static empty(){return new eF({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eO(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eP(t)}setAll(e){let t=q.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eP(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eO(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eb(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eO(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(es(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eF(eP(this.value))}constructor(e){this.value=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{static newInvalidDocument(e){return new eU(e,0,P.min(),P.min(),P.min(),eF.empty(),0)}static newFoundDocument(e,t,n,r){return new eU(e,1,t,P.min(),n,r,0)}static newNoDocument(e,t){return new eU(e,2,t,P.min(),P.min(),eF.empty(),0)}static newUnknownDocument(e,t){return new eU(e,3,t,P.min(),P.min(),eF.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(P.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eF.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eF.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eU&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eU(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}}/**
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
 */class eq{constructor(e,t){this.position=e,this.inclusive=t}}function eB(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),n.key):eD(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ez(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eb(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class eK{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class eQ{}class ej extends eQ{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eY(e,t,n):"array-contains"===t?new eZ(e,n):"in"===t?new e0(e,n):"not-in"===t?new e1(e,n):"array-contains-any"===t?new e2(e,n):new ej(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eX(e,n):new eJ(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eD(t,this.value)):null!==t&&eC(this.value)===eC(t)&&this.matchesComparison(eD(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class eG extends eQ{static create(e,t){return new eG(e,t)}matches(e){return eW(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}}function eW(e){return"and"===e.op}function eH(e){for(let t of e.filters)if(t instanceof eG)return!1;return!0}class eY extends ej{matches(e){let t=B.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}}class eX extends ej{matches(e){return this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"in",t),this.keys=e$("in",t)}}class eJ extends ej{matches(e){return!this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"not-in",t),this.keys=e$("not-in",t)}}function e$(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>B.fromName(e.referenceValue))}class eZ extends ej{matches(e){let t=e.data.field(this.field);return eR(t)&&eA(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class e0 extends ej{matches(e){let t=e.data.field(this.field);return null!==t&&eA(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class e1 extends ej{matches(e){if(eA(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eA(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class e2 extends ej{matches(e){let t=e.data.field(this.field);return!(!eR(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eA(this.value.arrayValue,e))}constructor(e,t){super(e,"array-contains-any",t)}}/**
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
 */class e4{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function e3(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new e4(e,t,n,r,i,s,a)}function e9(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ej)return t.field.canonicalString()+t.op.toString()+ek(t.value);if(eH(t)&&eW(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return"".concat(t.op,"(").concat(n,")")}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ek(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ek(e)).join(",")),e.ce=t}return e.ce}function e5(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ej?n instanceof ej&&t.op===n.op&&t.field.isEqual(n.field)&&eb(t.value,n.value):t instanceof eG?n instanceof eG&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void E()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ez(e.startAt,t.startAt)&&ez(e.endAt,t.endAt)}function e8(e){return B.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function e7(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function te(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ec(q.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new eK(t,r))}),n.has(q.keyField().canonicalString())||e.le.push(new eK(q.keyField(),r))}return e.le}function tt(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return e3(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eK(e.field,t)});let n=e.endAt?new eq(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eq(e.startAt.position,e.startAt.inclusive):null;return e3(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,te(e))),e.he}function tn(e,t,n){return new e6(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tr(e,t){return e5(tt(e),tt(t))&&e.limitType===t.limitType}function ti(e){return"".concat(e9(tt(e)),"|lt:").concat(e.limitType)}function ts(e){var t;let n;return"Query(target=".concat((n=(t=tt(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map(e=>(function e(t){return t instanceof ej?"".concat(t.field.canonicalString()," ").concat(t.op," ").concat(ek(t.value)):t instanceof eG?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", "),"]")),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map(e=>"".concat(e.field.canonicalString()," (").concat(e.dir,")")).join(", "),"]")),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ek(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ek(e)).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")")}function ta(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):B.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of te(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eB(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,te(e),t))&&(!e.endAt||!!function(e,t,n){let r=eB(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,te(e),t))}function to(e){return(t,n)=>{let r=!1;for(let i of te(e)){let e=function(e,t,n){let r=e.field.isKeyField()?B.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eD(r,i):E()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return E()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ea(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=new eo(B.comparator),tc=new eo(B.comparator);function th(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=tc;for(let e of t)r=r.insert(e.key,e);return r}function td(e){let t=tc;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tf(){return new tl(e=>e.toString(),(e,t)=>e.isEqual(t))}let tm=new eo(B.comparator),tg=new ec(B.comparator);function tp(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=tg;for(let e of t)r=r.add(e);return r}let ty=new ec(L);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function tw(e){return{integerValue:""+e}}/**
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
 */class tE{constructor(){this._=void 0}}function t_(e,t){return e instanceof tA?ex(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tT extends tE{}class tS extends tE{constructor(e){super(),this.elements=e}}function tI(e,t){let n=tN(t);for(let t of e.elements)n.some(e=>eb(e,t))||n.push(t);return{arrayValue:{values:n}}}class tC extends tE{constructor(e){super(),this.elements=e}}function tb(e,t){let n=tN(t);for(let t of e.elements)n=n.filter(e=>!eb(e,t));return{arrayValue:{values:n}}}class tA extends tE{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tD(e){return ey(e.integerValue||e.doubleValue)}function tN(e){return eR(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tk{constructor(e,t){this.version=e,this.transformResults=t}}class tx{static none(){return new tx}static exists(e){return new tx(void 0,e)}static updateTime(e){return new tx(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function tR(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tL{}function tV(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tz(e.key,tx.none()):new tM(e.key,e.data,tx.none());{let n=e.data,r=eF.empty(),i=new ec(q.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tF(e.key,r,new ed(i.toArray()),tx.none())}}function tO(e,t,n,r){return e instanceof tM?function(e,t,n,r){if(!tR(e.precondition,t))return n;let i=e.value.clone(),s=tB(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tF?function(e,t,n,r){if(!tR(e.precondition,t))return n;let i=tB(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tU(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tR(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tP(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&V(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tS&&r instanceof tS||n instanceof tC&&r instanceof tC?V(n.elements,r.elements,eb):n instanceof tA&&r instanceof tA?eb(n.Ie,r.Ie):n instanceof tT&&r instanceof tT)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tM extends tL{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class tF extends tL{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function tU(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tq(e,t,n){var r;let i=new Map;e.length===n.length||E();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tS?tI(o,l):o instanceof tC?tb(o,l):r))}return i}function tB(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tT?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ew(t)&&(t=eE(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof tS?tI(e,s):e instanceof tC?tb(e,s):function(e,t){let n=t_(e,t),r=tD(n)+tD(e.Ie);return ex(n)&&ex(e.Ie)?tw(r):tv(e.serializer,r)}(e,s))}return r}class tz extends tL{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class tK extends tL{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tM?function(e,t,n){let r=e.value.clone(),i=tq(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tF?function(e,t,n){if(!tR(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tq(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tU(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tO(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tO(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tf();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tV(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tp())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>tP(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>tP(e,t))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class tj{static from(e,t,n){e.mutations.length===n.length||E();let r=tm,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new tj(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}/**
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
 */class tG{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}constructor(e,t){this.largestBatchId=e,this.mutation=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t){this.count=e,this.unchangedNames=t}}function tH(e){if(void 0===e)return y("GRPC error has no .code"),_.UNKNOWN;switch(e){case r.OK:return _.OK;case r.CANCELLED:return _.CANCELLED;case r.UNKNOWN:return _.UNKNOWN;case r.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case r.INTERNAL:return _.INTERNAL;case r.UNAVAILABLE:return _.UNAVAILABLE;case r.UNAUTHENTICATED:return _.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case r.NOT_FOUND:return _.NOT_FOUND;case r.ALREADY_EXISTS:return _.ALREADY_EXISTS;case r.PERMISSION_DENIED:return _.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case r.ABORTED:return _.ABORTED;case r.OUT_OF_RANGE:return _.OUT_OF_RANGE;case r.UNIMPLEMENTED:return _.UNIMPLEMENTED;case r.DATA_LOSS:return _.DATA_LOSS;default:return E()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let tY=new u.z8([4294967295,4294967295],0);function tX(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function tJ(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class t${de(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(tY)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=tJ(tX(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new t$(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=tJ(tX(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tZ("Invalid padding: ".concat(t));if(n<0||e.length>0&&0===this.hashCount)throw new tZ("Invalid hash count: ".concat(n));if(0===e.length&&0!==t)throw new tZ("Invalid padding when bitmap length is 0: ".concat(t));this.Te=8*e.length-t,this.Ee=u.z8.fromNumber(this.Te)}}class tZ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,t1.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new t0(P.min(),r,new eo(L),tu,tp())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class t1{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new t1(n,t,tp(),tp(),tp())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class t4{constructor(e,t){this.targetId=e,this.fe=t}}class t3{constructor(e,t,n=em.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class t9{get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=tp(),t=tp(),n=tp();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:E()}}),new t1(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=t6()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||E()}Be(){this.Se=!0,this.we=!0}constructor(){this.ge=0,this.pe=t6(),this.ye=em.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}}class t5{$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(e8(i)){if(0===n){let e=new B(i.path);this.We(t,e,eU.newNoDocument(e,P.min()))}else 1===n||E()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=ev(i).toUint8Array()}catch(e){if(e instanceof ef)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new t$(t,s,a)}catch(e){return v(e instanceof tZ?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.nt(),s="projects/".concat(i.projectId,"/databases/").concat(i.database,"/documents/").concat(n.path.canonicalString());e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&e8(i.target)){let t=new B(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,eU.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=tp();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new t0(e,t,this.Ke,this.qe,n);return this.qe=tu,this.Qe=t8(),this.Ke=new eo(L),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new t9,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new ec(L),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new t9),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Le=e,this.ke=new Map,this.qe=tu,this.Qe=t8(),this.Ke=new eo(L)}}function t8(){return new eo(B.comparator)}function t6(){return new eo(B.comparator)}let t7={asc:"ASCENDING",desc:"DESCENDING"},ne={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nt={and:"AND",or:"OR"};class nn{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nr(e,t){return e.useProto3Json||null==t?t:{value:t}}function ni(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function ns(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function na(e){return e||E(),P.fromTimestamp(function(e){let t=ep(e);return new O(t.seconds,t.nanos)}(e))}function no(e,t){return nl(e,t).canonicalString()}function nl(e,t){let n=new F(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nu(e){let t=F.fromString(e);return nv(t)||E(),t}function nc(e,t){return no(e.databaseId,t.path)}function nh(e,t){let n=nu(t);if(n.get(1)!==e.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(nm(n))}function nd(e,t){return no(e.databaseId,t)}function nf(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nm(e){return e.length>4&&"documents"===e.get(4)||E(),e.popFirst(5)}function ng(e,t,n){return{name:nc(e,t),fields:n.value.mapValue.fields}}function np(e){return{fieldPath:e.canonicalString()}}function ny(e){return q.fromServerFormat(e.fieldPath)}function nv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{withSequenceNumber(e){return new nw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,r,i=P.min(),s=P.min(),a=em.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.ct=e}}/**
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
 */class n_{Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ey(e.integerValue));else if("doubleValue"in e){let n=ey(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),er(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At("".concat(n.seconds||"")),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(ev(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?eM(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):E()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),B.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}constructor(){}}n_.bt=new n_;/**
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
 */class nT{addToCollectionParentIndex(e,t){return this._n.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(K.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(K.min())}updateCollectionGroup(e,t,n){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}constructor(){this._n=new nS}}class nS{add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ec(F.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ec(F.comparator)).toArray()}constructor(){this.index={}}}new Uint8Array(0);class nI{static withCacheSize(e){return new nI(e,nI.DEFAULT_COLLECTION_PERCENTILE,nI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nI.DEFAULT_COLLECTION_PERCENTILE=10,nI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nI.DEFAULT=new nI(41943040,nI.DEFAULT_COLLECTION_PERCENTILE,nI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nI.DISABLED=new nI(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{next(){return this.On+=2,this.On}static Nn(){return new nC(0)}static Bn(){return new nC(-1)}constructor(e){this.On=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eU.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?G.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new tl(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tO(n.mutation,e,ed.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tp()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:tp(),r=tf();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=th();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tf();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tp()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tu,s=tf(),a=tf();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tF)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tO(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,ed.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nA(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tf(),r=new eo((e,t)=>e-t),i=tp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ed.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tp()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tf();l.forEach(e=>{if(!i.has(e)){let r=tV(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return G.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):G.resolve(tf()),a=-1,o=i;return s.next(t=>G.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?G.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tp())).next(e=>({batchId:a,changes:td(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=th();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=th();return this.indexManager.getCollectionParents(e,i).next(a=>G.forEach(a,a=>{let o=new e6(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eU.newInvalidDocument(r)))});let n=th();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tO(s.mutation,r,ed.empty(),O.now()),ta(t,r)&&(n=n.insert(e,r))}),n})}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{getBundleMetadata(e,t){return G.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:na(t.createTime)}),G.resolve()}getNamedQuery(e,t){return G.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nu(e);return 4===t.length?F.emptyPath():nm(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||E();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ny(e.unaryFilter.field);return ej.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=ny(e.unaryFilter.field);return ej.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=ny(e.unaryFilter.field);return ej.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ny(e.unaryFilter.field);return ej.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(t):void 0!==t.fieldFilter?ej.create(ny(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eG.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op)):E()}(e);return n instanceof eG&&eH(t=n)&&eW(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eK(ny(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new eq(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new eq(e.values||[],t)}(i.endAt)),new e6(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tn(t,t.limit,"L"):t}(t.bundledQuery),readTime:na(t.readTime)}),G.resolve()}constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}}/**
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
 */class nk{getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tf();return G.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),G.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),G.resolve()}getOverlaysForCollection(e,t,n){let r=tf(),i=t.length+1,s=new B(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return G.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eo((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tf(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tf(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return G.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tG(t,n));let i=this.hr.get(t);void 0===i&&(i=tp(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}constructor(){this.overlays=new eo(B.comparator),this.hr=new Map}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new nR(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new nR(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new B(new F([])),n=new nR(t,e),r=new nR(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new B(new F([])),n=new nR(t,e),r=new nR(t,e+1),i=tp();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nR(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.Pr=new ec(nR.Ir),this.Tr=new ec(nR.Er)}}class nR{static Ir(e,t){return B.comparator(e.key,t.key)||L(e.pr,t.pr)}static Er(e,t){return L(e.pr,t.pr)||B.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.pr=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{checkEmpty(e){return G.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tQ(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new nR(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return G.resolve(s)}lookupMutationBatch(e,t){return G.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return G.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nR(t,0),r=new nR(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ec(L);return t.forEach(e=>{let t=new nR(e,0),r=new nR(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),G.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;B.isDocumentKey(i)||(i=i.child(""));let s=new nR(new B(i),0),a=new ec(L);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),G.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||E(),this.mutationQueue.shift();let n=this.wr;return G.forEach(t.mutations,r=>{let i=new nR(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new nR(t,0),r=this.wr.firstAfterOrEqual(n);return G.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ec(nR.Ir)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return G.resolve(n?n.document.mutableCopy():eU.newInvalidDocument(t))}getEntries(e,t){let n=tu;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eU.newInvalidDocument(e))}),G.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tu,s=t.path,a=new B(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=B.comparator(e.documentKey,t.documentKey))?n:L(e.largestBatchId,t.largestBatchId)}(new K(a.readTime,a.key,-1),n)||(r.has(a.key)||ta(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,t,n,r){E()}Fr(e,t){return G.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nO(this)}getSize(e){return G.resolve(this.size)}constructor(e){this.vr=e,this.docs=new eo(B.comparator),this.size=0}}class nO extends nb{applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),G.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}constructor(e){super(),this.ar=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),G.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new nC(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.qn(t),G.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),G.waitFor(i).next(()=>r)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return G.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),G.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),G.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return G.resolve(n)}containsKey(e,t){return G.resolve(this.Nr.containsKey(t))}constructor(e){this.persistence=e,this.Mr=new tl(e=>e9(e),e5),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Or=0,this.Nr=new nx,this.targetCount=0,this.Br=nC.Nn()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new nL(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let r=new nF(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return G.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}constructor(e,t){this.Lr={},this.overlays={},this.kr=new en(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nP(this),this.indexManager=new nT,this.remoteDocumentCache=new nV(e=>this.referenceDelegate.Kr(e)),this.serializer=new nE(t),this.$r=new nN(this.serializer)}}class nF extends Q{constructor(e){super(),this.currentSequenceNumber=e}}class nU{static Hr(e){return new nU(e)}get Jr(){if(this.jr)return this.jr;throw E()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),G.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),G.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Jr,n=>{let r=B.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return G.or([()=>G.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}constructor(e){this.persistence=e,this.zr=new nx,this.jr=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{static Ki(e,t){let n=tp(),r=tp();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nq(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}}/**
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
 */class nB{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}constructor(){this._documentReadCount=0}}/**
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
 */class nz{initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nB;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(g()<=o.in.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",ts(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),G.resolve()):(g()<=o.in.DEBUG&&p("QueryEngine","Query:",ts(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(g()<=o.in.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",ts(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):G.resolve())}ji(e,t){if(e7(t))return G.resolve(null);let n=tt(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tt(t=tn(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tp(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,tn(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return e7(t)||r.isEqual(P.min())?G.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?G.resolve(null):(g()<=o.in.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ts(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new K(P.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r)),B.empty(),-1)}(r,0)).next(e=>e))})}Zi(e,t){let n=new ec(to(e));return t.forEach((t,r)=>{ta(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return g()<=o.in.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ts(t)),this.zi.getDocumentsMatchingQuery(e,t,K.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,l.G6)()?8:H.v((0,l.z$)())>0?6:4}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new eo(L),this.rs=new tl(e=>e9(e),e5),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}}async function nQ(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tp();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function nj(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function nG(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers for target ".concat(t,": ").concat(e))}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function nW(e,t,n){let r=P.min(),i=tp();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?G.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,tt(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:tp())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||P.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(r,s),{documents:n,hs:i}}))}class nH{As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}constructor(){this.activeTargetIds=ty}}class nY{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new nH,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.no=new nH,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}/**
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
 */class nX{io(e){}shutdown(){}}/**
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
 */class nJ{io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}}/**
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
 */let n$=null;function nZ(){return null===n$?n$=268435456+Math.round(2147483648*Math.random()):n$++,"0x"+n$.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}constructor(e){this.lo=e.lo,this.ho=e.ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n2="WebChannelConnection";class n4 extends class{get wo(){return!1}So(e,t,n,r,i){let s=nZ(),a=this.bo(e,t.toUriEncodedString());p("RestConnection","Sending RPC '".concat(e,"' ").concat(s,":"),a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,r,i),this.Co(e,a,o,n).then(t=>(p("RestConnection","Received RPC '".concat(e,"' ").concat(s,": "),t),t),t=>{throw v("RestConnection","RPC '".concat(e,"' ").concat(s," failed with error: "),t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=n0[e];return"".concat(this.fo,"/v1/").concat(t,":").concat(n)}terminate(){}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po="projects/".concat(n,"/databases/").concat(r),this.yo="(default)"===this.databaseId.database?"project_id=".concat(n):"project_id=".concat(n,"&database_id=").concat(r)}}{Co(e,t,n,r){let i=nZ();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();p(n2,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:p(n2,"RPC '".concat(e,"' ").concat(i," timed out")),a(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(p(n2,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(_.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{p(n2,"RPC '".concat(e,"' ").concat(i," completed."))}});let l=JSON.stringify(r);p(n2,"RPC '".concat(e,"' ").concat(i," sending request:"),r),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let i=nZ(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");p(n2,"Creating RPC '".concat(e,"' stream ").concat(i,": ").concat(h),l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new n1({lo:t=>{m?p(n2,"Not sending because RPC '".concat(e,"' stream ").concat(i," is closed:"),t):(f||(p(n2,"Opening RPC '".concat(e,"' stream ").concat(i," transport.")),d.open(),f=!0),p(n2,"RPC '".concat(e,"' stream ").concat(i," sending:"),t),d.send(t))},ho:()=>d.close()}),y=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return y(d,u.ii.EventType.OPEN,()=>{m||p(n2,"RPC '".concat(e,"' stream ").concat(i," transport opened."))}),y(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,p(n2,"RPC '".concat(e,"' stream ").concat(i," transport closed")),g.Vo())}),y(d,u.ii.EventType.ERROR,t=>{m||(m=!0,v(n2,"RPC '".concat(e,"' stream ").concat(i," transport errored:"),t),g.Vo(new T(_.UNAVAILABLE,"The operation could not be completed")))}),y(d,u.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||E();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){p(n2,"RPC '".concat(e,"' stream ").concat(i," received error:"),a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return tH(t)}(t),s=a.message;void 0===n&&(n=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.Vo(new T(n,s)),d.close()}else p(n2,"RPC '".concat(e,"' stream ").concat(i," received:"),s),g.mo(s)}}),y(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?p(n2,"RPC '".concat(e,"' stream ").concat(i," detected buffering proxy")):t.stat===u.kN.NOPROXY&&p(n2,"RPC '".concat(e,"' stream ").concat(i," detected no buffering proxy"))}),setTimeout(()=>{g.Ro()},0),g}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}function n3(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n9(e){return new nn(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff","Backing off for ".concat(r," ms (base delay: ").concat(this.No," ms, delay with jitter: ").concat(t," ms, last attempt: ").concat(n," ms ago)")),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.Wo===t&&this.o_(n,r)},t=>{e(()=>{let e=new T(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return p("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}constructor(e,t,n,r,i,s,a,o){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new n5(e,t)}}class n6 extends n8{a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:E(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||E(),em.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||E(),em.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new t3(s,a,o,l&&new T(void 0===l.code?_.UNKNOWN:tH(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nh(e,r.document.name),s=na(r.document.updateTime),a=r.document.createTime?na(r.document.createTime):P.min(),o=new eF({mapValue:{fields:r.document.fields}}),l=eU.newFoundDocument(i,s,a,o);n=new t2(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nh(e,r.document),s=r.readTime?na(r.readTime):P.min(),a=eU.newNoDocument(i,s);n=new t2([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nh(e,r.document);n=new t2([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return E();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new tW(r,i);n=new t4(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?na(t.readTime):P.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=nf(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=e8(r)?{documents:{documents:[nd(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nd(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ej?function(e){if("=="===e.op){if(eV(e.value))return{unaryFilter:{field:np(e.field),op:"IS_NAN"}};if(eL(e.value))return{unaryFilter:{field:np(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eV(e.value))return{unaryFilter:{field:np(e.field),op:"IS_NOT_NAN"}};if(eL(e.value))return{unaryFilter:{field:np(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:np(e.field),op:ne[e.op],value:e.value}}}(t):t instanceof eG?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nt[t.op],filters:n}}}(t):E()}(eG.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:np(e.field),direction:t7[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nr(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ut:s,parent:i}}(e,r).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ns(e,t.resumeToken);let r=nr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){n.readTime=ni(e,t.snapshotVersion.toTimestamp());let r=nr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=nf(this.serializer),t.removeTarget=e,this.t_(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}class n7 extends n8{get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||E(),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||E(),t.map(e=>{let t;return(t=e.updateTime?na(e.updateTime):na(n)).isEqual(P.min())&&(t=na(n)),new tk(t,e.transformResults||[])})):[]),i=na(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&E(),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=nf(this.serializer),this.t_(e)}I_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tM)r={update:ng(e,t.key,t.value)};else if(t instanceof tz)r={delete:nc(e,t.key)};else if(t instanceof tF)r={update:ng(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tK))return E();r={verify:nc(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tT)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tS)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tC)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tA)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw E()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ni(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:E()),r})(this.serializer,e))};this.t_(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends class{}{R_(){if(this.A_)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[s,a]=i;return this.connection.So(e,nl(t,n),r,s,a)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(_.UNKNOWN,e.toString())})}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(s=>{let[a,o]=s;return this.connection.vo(e,nl(t,n),r,a,o,i)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(_.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}}class rt{p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.g_?(y(t),this.g_=!1):p("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{n.enqueueAndForget(async()=>{rh(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await ri(e),e.x_.set("Unknown"),e.v_.delete(4),await rr(e)}(this))})}),this.x_=new rt(n,r)}}async function rr(e){if(rh(e))for(let t of e.F_)await t(!0)}async function ri(e){for(let t of e.F_)await t(!1)}function rs(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),rc(e)?ru(e):rb(e).Jo()&&ro(e,t))}function ra(e,t){let n=rb(e);e.C_.delete(t),n.Jo()&&rl(e,t),0===e.C_.size&&(n.Jo()?n.Xo():rh(e)&&e.x_.set("Unknown"))}function ro(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rb(e).c_(t)}function rl(e,t){e.O_.Oe(t),rb(e).l_(t)}function ru(e){e.O_=new t5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),rb(e).start(),e.x_.p_()}function rc(e){return rh(e)&&!rb(e).Ho()&&e.C_.size>0}function rh(e){return 0===e.v_.size}async function rd(e){e.C_.forEach((t,n)=>{ro(e,t)})}async function rf(e,t){e.O_=void 0,rc(e)?(e.x_.S_(t),ru(e)):e.x_.set("Unknown")}async function rm(e,t,n){if(e.x_.set("Online"),t instanceof t3&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rg(e,n)}else if(t instanceof t2?e.O_.$e(t):t instanceof t4?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(P.min()))try{let t=await nj(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(em.EMPTY_BYTE_STRING,r.snapshotVersion)),rl(e,t);let i=new nw(r.target,t,n,r.sequenceNumber);ro(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await rg(e,t)}}async function rg(e,t,n){if(!J(t))throw t;e.v_.add(1),await ri(e),e.x_.set("Offline"),n||(n=()=>nj(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await rr(e)})}function rp(e,t){return t().catch(n=>rg(e,n,t))}async function ry(e){let t=rA(e),n=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;rh(e)&&e.D_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.D_.length&&t.Xo();break}n=r.batchId,function(e,t){e.D_.push(t);let n=rA(e);n.Jo()&&n.P_&&n.I_(t.mutations)}(e,r)}catch(t){await rg(e,t)}rv(e)&&rw(e)}function rv(e){return rh(e)&&!rA(e).Ho()&&e.D_.length>0}function rw(e){rA(e).start()}async function rE(e){rA(e).d_()}async function r_(e){let t=rA(e);for(let n of e.D_)t.I_(n.mutations)}async function rT(e,t,n){let r=e.D_.shift(),i=tj.from(r,t,n);await rp(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ry(e)}async function rS(e,t){t&&rA(e).P_&&await async function(e,t){var n;if(function(e){switch(e){default:return E();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}(n=t.code)&&n!==_.ABORTED){let n=e.D_.shift();rA(e).Zo(),await rp(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ry(e)}}(e,t),rv(e)&&rw(e)}async function rI(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=rh(e);e.v_.add(3),await ri(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await rr(e)}async function rC(e,t){t?(e.v_.delete(2),await rr(e)):t||(e.v_.add(2),await ri(e),e.x_.set("Unknown"))}function rb(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={Po:rd.bind(null,e),To:rf.bind(null,e),u_:rm.bind(null,e)},t.R_(),new n6(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.N_.Zo(),rc(e)?ru(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}function rA(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Po:rE.bind(null,e),To:rS.bind(null,e),E_:r_.bind(null,e),T_:rT.bind(null,e)},t.R_(),new n7(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.B_.Zo(),await ry(e)):(await e.B_.stop(),e.D_.length>0&&(p("RemoteStore","Stopping write stream with ".concat(e.D_.length," pending writes")),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new rD(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}}function rN(e,t){if(y("AsyncQueue","".concat(t,": ").concat(e)),J(e))return new T(_.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{static emptySet(e){return new rk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rk)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(e,t)=>B.comparator(e.key,t.key),this.keyedMap=th(),this.sortedSet=new eo(this.comparator)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{track(e){let t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):E():this.L_=this.L_.insert(t,e)}k_(){let e=[];return this.L_.inorderTraversal((t,n)=>{e.push(n)}),e}constructor(){this.L_=new eo(B.comparator)}}class rR{static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rR(e,t,rk.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.q_=void 0,this.Q_=[]}}class rV{constructor(){this.queries=new tl(e=>ti(e),tr),this.onlineState="Unknown",this.K_=new Set}}async function rO(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new rL),r)try{i.q_=await e.onListen(n)}catch(n){let e=rN(n,"Initialization of query '".concat(ts(t.query),"' failed"));return void t.onError(e)}e.queries.set(n,i),i.Q_.push(t),t.U_(e.onlineState),i.q_&&t.W_(i.q_)&&rU(e)}async function rP(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),r=0===i.Q_.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function rM(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.W_(r)&&(n=!0);i.q_=r}}n&&rU(e)}function rF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Q_)e.onError(n);e.queries.delete(t)}function rU(e){e.K_.forEach(e=>{e.next()})}class rq{W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rR(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=rR.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e){this.key=e}}class rz{constructor(e){this.key=e}}class rK{get la(){return this.oa}ha(e,t){let n=t?t.Pa:new rx,r=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=ta(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ua(c,o)>0||l&&0>this.ua(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let s=e.Pa.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.Ta(n),r=null!=r&&r;let a=t&&!r?this.Ea():[],o=0===this.aa.size&&this.current&&!r?1:0,l=o!==this._a;return(this._a=o,0!==s.length||l)?{snapshot:new rR(this.query,e.ca,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new rx,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=tp(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new rz(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new rB(n))}),t}Ra(e){this.oa=e.hs,this.aa=tp();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return rR.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=tp(),this.mutatedKeys=tp(),this.ua=to(e),this.ca=new rk(this.ua)}}class rQ{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rj{constructor(e){this.key=e,this.ma=!1}}class rG{get isPrimaryClient(){return!0===this.Fa}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new tl(e=>ti(e),tr),this.pa=new Map,this.ya=new Set,this.wa=new eo(B.comparator),this.Sa=new Map,this.ba=new nx,this.Da={},this.Ca=new Map,this.va=nC.Bn(),this.onlineState="Unknown",this.Fa=void 0}}async function rW(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=rJ.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ie.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rZ.bind(null,e),e.fa.u_=rM.bind(null,e.eventManager),e.fa.xa=rF.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (n=a.localStore,r=tt(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Qr.getTargetData(e,r).next(i=>i?(t=i,G.resolve(t)):n.Qr.allocateTargetId(e).next(i=>(t=new nw(r,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await rH(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&rs(a.remoteStore,e)}return s}async function rH(e,t,n,r,i){e.Ma=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ha(n);i.Xi&&(i=await nW(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.ha(n,i)}));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return r5(e,t.targetId,o.da),o.snapshot})(e,t,n,r);let s=await nW(e.localStore,t,!0),a=new rK(t,s.hs),o=a.ha(s.documents),l=t1.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);r5(e,n,u.da);let c=new rQ(t,n,a);return e.ga.set(t,c),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function rY(e,t){let n=e.ga.get(t),r=e.pa.get(n.targetId);if(r.length>1)return e.pa.set(n.targetId,r.filter(e=>!tr(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nG(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),ra(e.remoteStore,n.targetId),r3(e,n.targetId)}).catch(j)):(r3(e,n.targetId),await nG(e.localStore,n.targetId,!0))}async function rX(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=r0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r1.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),tp());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tu,l=tp();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=t_(r.transform,e||null);null!=i&&(null===n&&(n=eF.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tF(e.key,t,function e(t){let n=[];return es(t.fields,(t,r)=>{let i=new q([t]);if(eO(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ed(n)}(t.value.mapValue),tx.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:td(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new eo(L)),e=e.insert(r,n),i.Da[i.currentUser.toKey()]=e,await r6(i,s.changes),await ry(i.remoteStore)}catch(t){let e=rN(t,"Failed to persist write");n.reject(e)}}async function rJ(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(em.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Qr.updateTargetData(i,c))});let c=tu,h=tp();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=tp(),o=tp(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tu;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(P.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{cs:t,ls:o}})).next(e=>{c=e.cs,h=e.ls})),!n.isEqual(P.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return G.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Sa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||E(),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?r.ma||E():t.removedDocuments.size>0&&(r.ma||E(),r.ma=!1))}),await r6(e,n,t)}catch(e){await j(e)}}function r$(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ga.forEach((e,n)=>{let r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Q_)e.U_(t)&&(n=!0)}),n&&rU(r),i.length&&e.fa.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function rZ(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Sa.get(t),i=r&&r.key;if(i){let n=new eo(B.comparator);n=n.insert(i,eU.newNoDocument(i,P.min()));let r=tp().add(i),s=new t0(P.min(),new Map,new eo(L),n,r);await rJ(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),r8(e)}else await nG(e.localStore,t,!1).then(()=>r3(e,t,n)).catch(j)}async function r0(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=G.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||E(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});r4(e,r,null),r2(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await r6(e,i)}catch(e){await j(e)}}async function r1(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||E(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});r4(e,t,n),r2(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await r6(e,i)}catch(e){await j(e)}}function r2(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function r4(e,t,n){let r=e.Da[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Da[e.currentUser.toKey()]=r}}function r3(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(t=>{e.ba.containsKey(t)||r9(e,t)})}function r9(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(ra(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),r8(e))}function r5(e,t,n){for(let r of n)r instanceof rB?(e.ba.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(p("SyncEngine","New document in limbo: "+n),e.ya.add(r),r8(e))}(e,r)):r instanceof rz?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||r9(e,r.key)):E()}function r8(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new B(F.fromString(t)),r=e.va.next();e.Sa.set(r,new rj(n)),e.wa=e.wa.insert(n,r),rs(e.remoteStore,new nw(tt(new e6(n.path)),r,"TargetPurposeLimboResolution",en._e))}}async function r6(e,t,n){let r=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nq.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.u_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>G.forEach(t,t=>G.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>G.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function r7(e,t){if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let n=await nQ(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new T(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await r6(e,n.us)}}function ie(e,t){let n=e.Sa.get(t);if(n&&n.ma)return tp().add(n.key);{let n=tp(),r=e.pa.get(t);if(!r)return n;for(let t of r){let r=e.ga.get(t);n=n.unionWith(r.view.la)}return n}}class it{async initialize(e){this.serializer=n9(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new nK(t,new nz,e.initialUser,this.serializer)}createPersistence(e){return new nM(nU.Hr,this.serializer)}createSharedClientState(e){return new nY}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ir{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>r$(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=r7.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rV}createDatastore(e){let t=n9(e.databaseInfo.databaseId),n=new n4(e.databaseInfo);return new re(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rn(t,this.datastore,e.asyncQueue,e=>r$(this.syncEngine,e,0),nJ.D()?new nJ:new nX)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rG(e,t,n,r,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){p("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await ri(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ii{next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):y("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}constructor(e){this.observer=e,this.muted=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rN(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}}async function ia(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nQ(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function io(e,t){e.asyncQueue.verifyOperationInProgress();let n=await il(e);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rI(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rI(t.remoteStore,n)),e._onlineComponents=t}async function il(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await ia(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await ia(e,new it)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await ia(e,new it)}return e._offlineComponents}async function iu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await io(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await io(e,new ir))),e._onlineComponents}async function ic(e){let t=await iu(e),n=t.eventManager;return n.onListen=rW.bind(null,t.syncEngine),n.onUnlisten=rY.bind(null,t.syncEngine),n}/**
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
 */function ih(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id=new Map;function im(e){if(!B.isDocumentKey(e))throw new T(_.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function ig(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?"a custom ".concat(n," object"):"an object"}}return"function"==typeof e?"a function":E()}function ip(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ig(e);throw new T(_.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new T(_.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ih(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new T(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new T(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new T(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class iv{get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=id.get(e);t&&(p("ComponentProvider","Removing Datastore"),id.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{withConverter(e){return new iw(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class iE{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new i_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iE(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class i_ extends iw{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iE(this.firestore,null,new B(e))}withConverter(e){return new i_(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,new e6(n)),this._path=n,this.type="collection"}}function iT(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=(0,l.m9)(e),1==arguments.length&&(t=R.newId()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new T(_.INVALID_ARGUMENT,"Function ".concat("doc","() cannot be called with an empty ").concat(t,"."))}(0,"path",t),e instanceof iv){let n=F.fromString(t,...r);return im(n),new iE(e,null,new B(n))}{if(!(e instanceof iE||e instanceof i_))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return im(n),new iE(e.firestore,e instanceof i_?e.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let t=n3();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let t=new S;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!J(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let t=this.Xa.then(()=>(this.iu=!0,e().catch(e=>{let t;throw this.ru=e,this.iu=!1,y("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.iu=!1,e))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);let r=rD.createAndSchedule(this,e,t,n,e=>this.lu(e));return this.nu.push(r),r}au(){this.ru&&E()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{for(let t of(this.nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let t=this.nu.indexOf(e);this.nu.splice(t,1)}constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new n5(this,"async_queue_retry"),this._u=()=>{let e=n3();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=n3();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}}class iI extends iv{_terminate(){return this._firestoreClient||iA(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new iS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function iC(e,t){let n="object"==typeof e?e:(0,s.Mq)(),r=(0,s.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n){var r;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=(e=ip(e,iv))._getSettings(),a="".concat(t,":").concat(n);if("firestore.googleapis.com"!==s.host&&s.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new b(new I(t,n))}}(r,...e)}return r}function ib(e){return e._firestoreClient||iA(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iA(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new eT(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ih(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new is(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{static fromBase64String(e){try{return new iD(em.fromBase64String(e))}catch(e){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iD(em.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iR=/^__.*__$/;class iL{toMutation(e,t){return null!==this.fieldMask?new tF(e,this.data,this.fieldMask,t,this.fieldTransforms):new tM(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function iV(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class iO{get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new iO(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.mu(e),r}fu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return iB(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(0===e.length)throw this.pu("Document fields must not be empty");if(iV(this.du)&&iR.test(e))throw this.pu('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class iP{Su(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new iO({du:e,methodName:t,wu:n,path:q.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n9(e)}}function iM(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof ix||e instanceof iD||e instanceof iE||e instanceof ik)}function iF(e,t,n){if(!iM(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ig(n);throw"an object"===r?t.pu(e+" a custom object"):t.pu(e+" "+r)}}let iU=RegExp("[~\\*/\\[\\]]");function iq(e,t,n){if(t.search(iU)>=0)throw iB("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,n);try{return new iN(...t.split("."))._internalPath}catch(r){throw iB("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,n)}}function iB(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o="Function ".concat(t,"() called with invalid data");n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=" in field ".concat(r)),a&&(l+=" in document ".concat(i)),l+=")"),new T(_.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{get id(){return this._key.path.lastSegment()}get ref(){return new iE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new iK(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(iQ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class iK extends iz{data(){return super.data()}}function iQ(e,t){return"string"==typeof t?iq(e,t):t instanceof iN?t._internalPath:t._delegate._internalPath}class ij{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(eC(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ey(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ev(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n={};return es(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new ix(ey(e.latitude),ey(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eE(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e_(e));default:return null}}convertTimestamp(e){let t=ep(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=F.fromString(e);nv(n)||E();let r=new eS(n.get(1),n.get(3)),i=new B(n.popFirst(5));return r.isEqual(t)||y("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class iW extends iz{exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){let t=new iH(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){let n=this._document.data.field(iQ("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class iH extends iW{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iY(e){e=ip(e,iE);let t=ip(e.firestore,iI);return(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ii({next:s=>{t.enqueueAndForget(()=>rP(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new rq(new e6(n.path),s,{includeMetadataChanges:!0,Z_:!0});return rO(e,a)})(await ic(e),e.asyncQueue,t,n,r)),r.promise})(ib(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new iX(e);return new iW(e,i,t._key,r,new iG(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class iX extends ij{convertBytes(e){return new iD(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iE(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function iJ(e,t,n){var r,i;e=ip(e,iE);let s=ip(e.firestore,iI),a=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return i=[(function(e,t,n,r,i){let s,a,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=e.Su(o.merge||o.mergeFields?2:0,t,n,i);iF("Data must be an object, but it was:",u,r);let c=function e(t,n){let r={};return ea(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):es(t,(t,i)=>{let s=function t(n,r){if(iM(n=(0,l.m9)(n)))return iF("Unsupported field value:",r,n),e(n,r);if(n instanceof ik)return function(e,t){if(!iV(t.du))throw t.pu("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.pu("".concat(e._methodName,"() is not currently supported inside arrays"));let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),n instanceof Array){if(r.settings.Vu&&4!==r.du)throw r.pu("Nested arrays are not supported");return function(e,n){let r=[],i=0;for(let s of e){let e=t(s,n.gu(i));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),i++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!er(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tw(r):tv(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:ni(t.serializer,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ni(t.serializer,n)}}if(e instanceof ix)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iD)return{bytesValue:ns(t.serializer,e._byteString)};if(e instanceof iE){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.pu("Document reference is for database ".concat(r.projectId,"/").concat(r.database," but should be for database ").concat(n.projectId,"/").concat(n.database));return{referenceValue:no(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.pu("Unsupported field value: ".concat(ig(e)))}(n,r)}(i,n.Ru(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(r,u);if(o.merge)s=new ed(u.fieldMask),a=u.fieldTransforms;else if(o.mergeFields){let e=[];for(let r of o.mergeFields){let i=function(e,t,n){if((t=(0,l.m9)(t))instanceof iN)return t._internalPath;if("string"==typeof t)return iq(e,t);throw iB("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!u.contains(i))throw new T(_.INVALID_ARGUMENT,"Field '".concat(i,"' is specified in your field mask but missing from your input data."));(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}s=new ed(e),a=u.fieldTransforms.filter(e=>s.covers(e.field))}else s=null,a=u.fieldTransforms;return new iL(new eF(c),s,a)})(function(e){let t=e._freezeSettings(),n=n9(e._databaseId);return new iP(e._databaseId,!!t.ignoreUndefinedProperties,n)}(s),"setDoc",e._key,a,null!==e.converter,n).toMutation(e._key,tx.none())],function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>rX(await iu(e).then(e=>e.syncEngine),t,n)),n.promise}(ib(s),i)}new WeakMap,function(){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];f=s.Jn,(0,s.Xd)(new a.wA("firestore",(t,n)=>{let{instanceIdentifier:r,options:i}=n,s=t.getProvider("app").getImmediate(),a=new iI(new A(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eS(e.options.projectId,t)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(h,"4.4.2",void 0),(0,s.KN)(h,"4.4.2","esm2017")}()}}]);