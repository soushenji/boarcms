(function () {
  'use strict';

  /**
   * 移动端 header
   */
  function pageMenu () {
    menuSelect();
    mobileMenu();
    pcMenu();
  }

  function menuSelect(){
    var navs = document.querySelectorAll(".nav-list li a");
    if (!navs) {
      return;
    }
    navs.forEach(function (nav) {
      if (!nav.parentNode.children[1]) {
        return;
      }
      nav.addEventListener("click", function () {
        this.parentNode.classList.toggle("active");
      });
    });
  }

  function mobileMenu() {
    document.querySelector('.mobile-siderbar-show-button')?.addEventListener('click', function () {
      document.querySelector('.app-menu').classList.toggle('show');
    });
  }

  function pcMenu() {
    document.querySelector('.menu-toggle-button')?.addEventListener('click', function () {
      document.querySelector('.app-menu').classList.toggle('hide');
    });
  }

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        var c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return ""
  }

  function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    var cookieStr = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    cookieStr += "; path=/";
    document.cookie = cookieStr;
  }

  function darkMode(){
    if (document.querySelector(".night-mode-button")) {
      document.querySelectorAll(".night-mode-button").forEach(function (btn) {
        btn.addEventListener("click", darkMode);
      });
    }

    function darkMode() {
      console.log("cookie: ", getCookie("darkMode"));
      var isDarkMode = document.body.classList.contains('dark-mode');
      if (isDarkMode) {
        setCookie("darkMode", 0);
      } else {
        setCookie("darkMode", 1);
      }
      document.body.classList.toggle("dark-mode");
      document.querySelectorAll(".night-mode-button").forEach(function (btn) {
        btn.classList.toggle("sun-icon");
      });
    }
  }

  var e,t=function(e,t){return function(){return e.apply(t,arguments)}},r=Object.prototype.toString,n=(e=Object.create(null),function(t){var n=r.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())});function o(e){return e=e.toLowerCase(),function(t){return n(t)===e}}function i(e){return Array.isArray(e)}function s(e){return void 0===e}var a=o("ArrayBuffer");function u(e){return "number"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==n(e))return !1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var l=o("Date"),p=o("File"),d=o("Blob"),h=o("FileList");function m(e){return "[object Function]"===r.call(e)}var y=o("URLSearchParams");function v(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e);}var E,b=(E="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return E&&e instanceof E});var g,w=o("HTMLFormElement"),O=(g=Object.prototype.hasOwnProperty,function(e,t){return g.call(e,t)}),R={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||r.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return "undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return "string"==typeof e},isNumber:u,isObject:c,isPlainObject:f,isUndefined:s,isDate:l,isFile:p,isBlob:d,isFunction:m,isStream:function(e){return c(e)&&m(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){var e;return ("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:v,merge:function e(){var t={};function r(r,n){f(t[n])&&f(r)?t[n]=e(t[n],r):f(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r;}for(var n=0,o=arguments.length;n<o;n++)v(arguments[n],r);return t},extend:function(e,r,n){return v(r,(function(r,o){e[o]=n&&"function"==typeof r?t(r,n):r;})),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r);},toFlatObject:function(e,t,r,n){var o,i,s,a={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],n&&!n(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==r&&Object.getPrototypeOf(e);}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:n,kindOfTest:o,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return -1!==n&&n===r},toArray:function(e){if(!e)return null;if(i(e))return e;var t=e.length;if(!u(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:b,isFileList:h,forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var o=r.value;t.call(e,o[0],o[1]);}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:w,hasOwnProperty:O};function S(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o);}R.inherits(S,Error,{toJSON:function(){return {message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var A=S.prototype,T={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){T[e]={value:e};})),Object.defineProperties(S,T),Object.defineProperty(A,"isAxiosError",{value:!0}),S.from=function(e,t,r,n,o,i){var s=Object.create(A);return R.toFlatObject(e,s,(function(e){return e!==Error.prototype})),S.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var j=S,N="object"==typeof self?self.FormData:window.FormData;function _(e){return R.isPlainObject(e)||R.isArray(e)}function x(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function C(e,t,r){return e?e.concat(t).map((function(e,t){return e=x(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var B=R.toFlatObject(R,{},null,(function(e){return /^is[A-Z]/.test(e)}));var P=function(e,t,r){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new(N||FormData);var n,o=(r=R.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return !R.isUndefined(t[e])}))).metaTokens,i=r.visitor||f,s=r.dots,a=r.indexes,u=(r.Blob||"undefined"!=typeof Blob&&Blob)&&((n=t)&&R.isFunction(n.append)&&"FormData"===n[Symbol.toStringTag]&&n[Symbol.iterator]);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return "";if(R.isDate(e))return e.toISOString();if(!u&&R.isBlob(e))throw new j("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(e)||R.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function f(e,r,n){var i=e;if(e&&!n&&"object"==typeof e)if(R.endsWith(r,"{}"))r=o?r:r.slice(0,-2),e=JSON.stringify(e);else if(R.isArray(e)&&function(e){return R.isArray(e)&&!e.some(_)}(e)||R.isFileList(e)||R.endsWith(r,"[]")&&(i=R.toArray(e)))return r=x(r),i.forEach((function(e,n){!R.isUndefined(e)&&t.append(!0===a?C([r],n,s):null===a?r:r+"[]",c(e));})),!1;return !!_(e)||(t.append(C(n,r,s),c(e)),!1)}var l=[],p=Object.assign(B,{defaultVisitor:f,convertValue:c,isVisitable:_});if(!R.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!R.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),R.forEach(r,(function(r,o){!0===(!R.isUndefined(r)&&i.call(t,r,R.isString(o)?o.trim():o,n,p))&&e(r,n?n.concat(o):[o]);})),l.pop();}}(e),t};function U(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function D(e,t){this._pairs=[],e&&P(e,this,t);}var F=D.prototype;F.append=function(e,t){this._pairs.push([e,t]);},F.toString=function(e){var t=e?function(t){return e.call(this,t,U)}:U;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var L=D;function k(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var q=function(e,t,r){if(!t)return e;var n=e.indexOf("#");-1!==n&&(e=e.slice(0,n));var o=r&&r.encode||k,i=R.isURLSearchParams(t)?t.toString():new L(t,r).toString(o);return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e};function I(){this.handlers=[];}I.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null);},I.prototype.clear=function(){this.handlers&&(this.handlers=[]);},I.prototype.forEach=function(e){R.forEach(this.handlers,(function(t){null!==t&&e(t);}));};var M=I,H=function(e,t){R.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n]);}));},J={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:L,FormData:FormData,Blob:Blob},protocols:["http","https","file","blob","url"]};var z=function(e){function t(e,r,n,o){var i=e[o++],s=Number.isFinite(+i),a=o>=e.length;return i=!i&&R.isArray(n)?n.length:i,a?(R.hasOwnProperty(n,i)?n[i]=[n[i],r]:n[i]=r,!s):(n[i]&&R.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&R.isArray(n[i])&&(n[i]=function(e){var t,r,n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){var r={};return R.forEachEntry(e,(function(e,n){t(function(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return "[]"===e[0]?"":e[1]||e[0]}))}(e),n,r,0);})),r}return null},W=R.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),R.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),R.isString(n)&&s.push("path="+n),R.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ");},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5);}}:{write:function(){},read:function(){return null},remove:function(){}},X=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},K=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],$=R.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=R.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return !0};function Q(e,t,r){j.call(this,null==e?"canceled":e,j.ERR_CANCELED,t,r),this.name="CanceledError";}R.inherits(Q,j,{__CANCEL__:!0});var G=Q,Y=function(e){return new Promise((function(t,r){var n,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n);}R.isFormData(o)&&R.isStandardBrowserEnv()&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+f);}var l=X(e.baseURL,e.url);function p(){if(u){var n,o,i,c,f,l="getAllResponseHeaders"in u?(n=u.getAllResponseHeaders(),f={},n?(R.forEach(n.split("\n"),(function(e){if(c=e.indexOf(":"),o=R.trim(e.slice(0,c)).toLowerCase(),i=R.trim(e.slice(c+1)),o){if(f[o]&&K.indexOf(o)>=0)return;f[o]="set-cookie"===o?(f[o]?f[o]:[]).concat([i]):f[o]?f[o]+", "+i:i;}})),f):f):null;!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new j("Request failed with status code "+r.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r);}((function(e){t(e),a();}),(function(e){r(e),a();}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:l,config:e,request:u}),u=null;}}if(u.open(e.method.toUpperCase(),q(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(p);},u.onabort=function(){u&&(r(new j("Request aborted",j.ECONNABORTED,e,u)),u=null);},u.onerror=function(){r(new j("Network Error",j.ERR_NETWORK,e,u)),u=null;},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||J;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new j(t,n.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,e,u)),u=null;},R.isStandardBrowserEnv()){var d=(e.withCredentials||$(l))&&e.xsrfCookieName?W.read(e.xsrfCookieName):void 0;d&&(i[e.xsrfHeaderName]=d);}"setRequestHeader"in u&&R.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e);})),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(n=function(t){u&&(r(!t||t.type?new G(null,e,req):t),u.abort(),u=null);},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n))),o||(o=null);var h,m=(h=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l))&&h[1]||"";m&&-1===V.protocols.indexOf(m)?r(new j("Unsupported protocol "+m+":",j.ERR_BAD_REQUEST,e)):u.send(o);}))},Z={"Content-Type":"application/x-www-form-urlencoded"};function ee(e,t){!R.isUndefined(e)&&R.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t);}var te,re={transitional:J,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(te=Y),te),transformRequest:[function(e,t){H(t,"Accept"),H(t,"Content-Type");var r,n=t&&t["Content-Type"]||"",o=n.indexOf("application/json")>-1,i=R.isObject(e);if(i&&R.isHTMLForm(e)&&(e=new FormData(e)),R.isFormData(e))return o&&o?JSON.stringify(z(e)):e;if(R.isArrayBuffer(e)||R.isBuffer(e)||R.isStream(e)||R.isFile(e)||R.isBlob(e))return e;if(R.isArrayBufferView(e))return e.buffer;if(R.isURLSearchParams(e))return ee(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();if(i){if(-1!==n.indexOf("application/x-www-form-urlencoded"))return function(e,t){return P(e,new V.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return V.isNode&&R.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((r=R.isFileList(e))||n.indexOf("multipart/form-data")>-1){var s=this.env&&this.env.FormData;return P(r?{"files[]":e}:e,s&&new s,this.formSerializer)}}return i||o?(ee(t,"application/json"),function(e,t,r){if(R.isString(e))try{return (t||JSON.parse)(e),R.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return (r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||re.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&R.isString(e)&&(r&&!this.responseType||n)){var o=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw j.from(e,j.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:V.classes.FormData,Blob:V.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],(function(e){re.headers[e]={};})),R.forEach(["post","put","patch"],(function(e){re.headers[e]=R.merge(Z);}));var ne=re,oe=function(e,t,r,n){var o=this||ne;return R.forEach(n,(function(n){e=n.call(o,e,t,r);})),e},ie=function(e){return !(!e||!e.__CANCEL__)};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new G}var ae=function(e){return se(e),e.headers=e.headers||{},e.data=oe.call(e,e.data,e.headers,null,e.transformRequest),H(e.headers,"Accept"),H(e.headers,"Content-Type"),e.headers=R.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),R.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t];})),(e.adapter||ne.adapter)(e).then((function(t){return se(e),t.data=oe.call(e,t.data,t.headers,t.status,e.transformResponse),t}),(function(t){return ie(t)||(se(e),t&&t.response&&(t.response.data=oe.call(e,t.response.data,t.response.headers,t.response.status,e.transformResponse))),Promise.reject(t)}))},ue=function(e,t){t=t||{};var r={};function n(e,t){return R.isPlainObject(e)&&R.isPlainObject(t)?R.merge(e,t):R.isPlainObject(t)?R.merge({},t):R.isArray(t)?t.slice():t}function o(r){return R.isUndefined(t[r])?R.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function i(e){if(!R.isUndefined(t[e]))return n(void 0,t[e])}function s(r){return R.isUndefined(t[r])?R.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function a(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return R.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,n=t(e);R.isUndefined(n)&&t!==a||(r[e]=n);})),r},ce="1.0.0-alpha.1",fe=ce,le={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e};}));var pe={};le.transitional=function(e,t,r){function n(e,t){return "[Axios v"+fe+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,i){if(!1===e)throw new j(n(o," has been removed"+(t?" in "+t:"")),j.ERR_DEPRECATED);return t&&!pe[o]&&(pe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var de={assertOptions:function(e,t,r){if("object"!=typeof e)throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new j("option "+i+" must be "+u,j.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new j("Unknown option "+i,j.ERR_BAD_OPTION)}},validators:le},he=de.validators;function me(e){this.defaults=e,this.interceptors={request:new M,response:new M};}me.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=ue(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&de.assertOptions(r,{silentJSONParsing:he.transitional(he.boolean),forcedJSONParsing:he.transitional(he.boolean),clarifyTimeoutError:he.transitional(he.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected));}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected);})),!o){var a=[ae,void 0];for(Array.prototype.unshift.apply(a,n),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;n.length;){var c=n.shift(),f=n.shift();try{u=c(u);}catch(e){f(e);break}}try{i=ae(u);}catch(e){return Promise.reject(e)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},me.prototype.getUri=function(e){e=ue(this.defaults,e);var t=X(e.baseURL,e.url);return q(t,e.params,e.paramsSerializer)},R.forEach(["delete","get","head","options"],(function(e){me.prototype[e]=function(t,r){return this.request(ue(r||{},{method:e,url:t,data:(r||{}).data}))};})),R.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(ue(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}me.prototype[e]=t(),me.prototype[e+"Form"]=t(!0);}));var ye=me;function ve(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e;}));var r=this;this.promise.then((function(e){if(r._listeners){for(var t=r._listeners.length;t-- >0;)r._listeners[t](e);r._listeners=null;}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e;})).then(e);return n.cancel=function(){r.unsubscribe(t);},n},e((function(e,n,o){r.reason||(r.reason=new G(e,n,o),t(r.reason));}));}ve.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ve.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e];},ve.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1);}},ve.source=function(){var e;return {token:new ve((function(t){e=t;})),cancel:e}};var Ee=ve;var be=function e(r){var n=new ye(r),o=t(ye.prototype.request,n);return R.extend(o,ye.prototype,n),R.extend(o,n),o.create=function(t){return e(ue(r,t))},o}(ne);be.Axios=ye,be.CanceledError=G,be.CancelToken=Ee,be.isCancel=ie,be.VERSION=ce,be.toFormData=P,be.AxiosError=j,be.Cancel=be.CanceledError,be.all=function(e){return Promise.all(e)},be.spread=function(e){return function(t){return e.apply(null,t)}},be.isAxiosError=function(e){return R.isObject(e)&&!0===e.isAxiosError},be.formToJSON=function(e){return z(R.isHTMLForm(e)?new FormData(e):e)};var ge=be,we=be;ge.default=we;

  /**
   * @LightTip.js
   * @author popeyesailorman(yangfan)
   * @version
   * @Created: 20-05-15
   * @edit: 20-05-15
   */

  class LightTip extends HTMLElement {
      static get observedAttributes () {
          return ['open'];
      }

      constructor () {
          super();

          if (arguments.length) {
              LightTip.custom.apply(this, arguments);
          }
      }

      get type () {
          return this.getAttribute('type');
      }

      get time () {
          let strTime = this.getAttribute('time');
          if (!isNaN(strTime) && !isNaN(parseFloat(strTime))) {
              return Number(strTime);
          }

          return 3000;
      }

      set type (value) {
          this.setAttribute('type', value);
      }

      set time (value) {
          this.setAttribute('time', value);
      }

      get open () {
          return this.hasAttribute('open');
      }

      set open (value) {
          this.toggleAttribute('open', value);
      }

      connectedCallback () {
          // 自定义元素设置 tabIndex=0 代表改元素可聚焦，并可通过键盘导航来聚焦到该元素
          this.setAttribute('tabIndex', 0);
          this.setAttribute('role', 'tooltip');

          if (!this.closeMode) {
              this.closeMode = 'hide';
          }

          // 点击组件本身或按键盘 esc/enter 键即可关闭组件
          this.addEventListener('click', () => {
              // 移除元素
              this[this.closeMode]();
          });

          // 全局事件
          this.dispatchEvent(new CustomEvent('connected', {
              detail: {
                  type: 'ui-lighttip'
              }
          }));

          this.isConnectedCallback = true;
      }

      attributeChangedCallback (name, oldValue, newValue) {
          // 让按钮或者之前的触发元素重新获取焦点，便于继续操作
          if (name == 'open' && typeof oldValue !== typeof newValue) {
              if (typeof newValue === 'string') {
                  clearTimeout(this.timer);
                  this.timer = setTimeout(() => {
                      // 标志量，是否是因为时间到关闭
                      this.isTimeHide = true;
                      // 关闭提示
                      this[this.closeMode]();
                      this.position();
                  }, this.time);

                  this.setAttribute('data-tid', this.timer);
                  this.classList.add('ESC');

                  // 组件的 z-index 层级计算
                  this.zIndex();

                  // 组件的定位，不同的提示位置不重叠
                  this.position();
              } else {
                  this.classList.remove('ESC');
              }
              this.tabIndex();

              this.isTimeHide = null;
          }
      }

      zIndex () {
          // 只对<body>子元素进行层级最大化计算处理，这里lighttip默认的z-index值是19
          var numZIndexNew = 19;
          this.parentElement && [...this.parentElement.childNodes].forEach(function (eleChild) {
              if (eleChild.nodeType != 1) {
                  return;
              }
              var objStyleChild = window.getComputedStyle(eleChild);
              var numZIndexChild = objStyleChild.zIndex * 1;
              if (numZIndexChild && objStyleChild.display != 'none') {
                  numZIndexNew = Math.max(numZIndexChild + 1, numZIndexNew);
              }
          });
          this.style.zIndex = numZIndexNew;
      }

      // 定位处理
      position () {
          var elesOpen = [...document.querySelectorAll('ui-lighttip[open]:not([type="loading"])')];
          // 基于 data-tid 排序
          var elesOpenSort = elesOpen.sort(function (eleA, eleB) {
              return (eleA.getAttribute('data-tid') || 0) - (eleB.getAttribute('data-tid') || 0);
          });
          // 确定提示内容
          var objMatchText = {};
          var numIndex = -1;

          elesOpenSort.forEach((ele) => {
              let strText = ele.textContent;
              if (typeof objMatchText[strText] == 'undefined') {
                  numIndex++;
                  objMatchText[strText] = numIndex;
              }
              ele.style.setProperty('--ui-sort-index', objMatchText[strText]);
          });
      }

      // 新的元素层级总是最高
      tabIndex () {
          var eleContainer = this;
          var eleLastActive = LightTip.lastActiveElement;
          if (this.open == true) {
              var eleActiveElement = document.activeElement;
              
              // 键盘索引起始位置定位在提示元素上
              if (eleActiveElement && !eleActiveElement.closest('[keepfocus]')) {
                  if (eleContainer !== eleActiveElement) {
                      LightTip.lastActiveElement = eleActiveElement;
                  }
                  
                  eleContainer.focus();
              }
          } else if (eleLastActive && !eleLastActive.matches('body')) {
              // 获取焦点但不会定位
              eleLastActive.focus({
                  preventScroll: true
              });
              // 如果不是键盘关闭提示，而是点击的话，之前的焦点元素失焦
              // 这里实现有问题，如果是时间到了自动关闭的话，这里不应该失焦
              if (!window.isKeyEvent && !this.isTimeHide) {
                  eleLastActive.blur();
              }
              LightTip.lastActiveElement = null;
          }
          return this;
      }

      // success
      static success (text, time = 3000) {
          return this.custom(text, 'success', time);
      }
      // error
      static error (text, time = 3000) {
          return this.custom(text, 'error', time);
      }
      // normal
      static normal (text, time = 3000) {
          return this.custom(text, 'normal', time);
      }
      // loading
      static loading (text) {
          text = text || '正在加载中...';
          return this.custom(text, 'loading');
      }
      // 调用方法处理
      static custom (text = '', type, time) {
          // 如果是静态方法执行
          // 创建ui-lighttip自定义元素
          if (!this.matches || !this.matches('ui-lighttip')) {
              return LightTip.custom.apply(document.createElement('ui-lighttip'), arguments);
          }

          if (typeof text == 'object') {
              type = text;
              text = '';
          }

          if (typeof text != 'string') {
              return this;
          }

          this.closeMode = 'remove';

          // 如果传入的类型是object形式
          if (type && typeof type === 'object') {
              LightTip.custom.call(this, text, type.type, type.time);
              return;
          }
          // 如果type的类型是number，则赋值给time
          if (typeof type === 'number') {
              LightTip.custom.call(this, text, time, type);
              return;
          }

          if (type == 'loading') {
              if (!text) {
                  text = '正在加载中...';
              }
              time = 999999;
          }

          if (time) {
              this.time = time;
          }
          if (type) {
              this.type = type;
          }

          this.innerHTML = text;
          // 提高无障碍
          if (type == 'success') {
              this.setAttribute('aria-lable', '操作成功');
          } else if (type == 'error') {
              this.setAttribute('aria-lable', '操作失败');
          }

          // append内存中创建的ui-lighttip元素
          if (!this.parentElement) {
              document.body.appendChild(this);

              this.dispatchEvent(new CustomEvent('DOMContentLoaded'));
          }

          this.show();

          return this;
      }
      remove () {
          if (this.parentElement) {
              this.parentElement.removeChild(this);
          }
          this.open = false;
      }
      show () {
          if (this.time > 0) {
              this.open = true;
          }
      }
      hide () {
          this.open = false;
      }
  }

  if (!customElements.get('ui-lighttip')) {
      customElements.define('ui-lighttip', LightTip);
  }

  // 将该方法定义为 window 全局使用的方法
  window.LightTip = LightTip;

  function fetchWrapper (url, options = {}) {
    let _csrf = getCookie('_csrf');
    
    let reqOptions = {};

    if( url.slice(0,4) !== 'http'){
      url = document.querySelector('input[name="site_url"]').value + url;
    }

    // console.log('url',url)
    let urlObj = new URL(url);

    let searchString = urlObj.search;
    let searchArr = new URLSearchParams(searchString);
    searchArr.append('_csrf', _csrf);

    url = urlObj.pathname + '?' + searchArr.toString();

    reqOptions = Object.assign(options, reqOptions);

    return fetch(url, reqOptions).then(handleResponse);
  }


  async function handleResponse(response) {
    // console.log('response: ', response)
    // if (!response.ok) {
    //   const error = response.statusText;
    //   return Promise.reject(error);
    // }
    
    return response;
  }

  function thumbnail () {
    document.querySelectorAll(".upload-button").forEach(function (btn) {
      // console.log(btn);
      btn.addEventListener("click", uploadButtonHandler);
    });
    document.querySelectorAll(".delete-button").forEach(function (btn) {
      btn.addEventListener("click", deleteButtonHandler);
    });
    // renderThumbnail();
  }

  async function uploadButtonHandler(event) {
    var that = this;
    // 删除所有上传表单组件
    document.querySelectorAll('input[name="upload-input-control"]').forEach(function (i) {
      i.remove();
    });

    // 增加上传表单组件
    var uploadInputControlString = '<input type="file" name="upload-input-control" class="upload-input-control" style="display:none;">';
    document.querySelector('body').insertAdjacentHTML("beforeend", uploadInputControlString);

    // 绑定表单组件事件
    var uploadInputControl = document.querySelector('input[name="upload-input-control"]');
    uploadInputControl.click();
    uploadInputControl.onchange = async function () {
      if (!this.files[0] || this.files[0] == undefined) return;

      var fd = new FormData();
      fd.append("file", this.files[0]);

      try{
        let url = '/v1/upload?thumbnail=true';
        let res = await fetchWrapper(url, {
            method: 'POST',
            // headers: new Headers({'content-type': 'multipart/form-data'}),
            body: fd
        });
        let responseJson = await res.json();
        console.log('responseJson',responseJson);
        if (res.status == 201) {
          LightTip.success('修改成功', 1000);
          var imageString = `<img src="${responseJson.url}"/>`;
          that.parentNode.parentNode.querySelector('.thumbnail-image').innerHTML = imageString;
          that.parentNode.parentNode.querySelector('input[name="thumbnail_id"]').value = responseJson.id;
        } else {
          LightTip.error('修改失败', 1000);
        }
      }catch(e){
        console.log(e);
        LightTip.error(e.message, 1000);
      }
    };
  }


  async function deleteButtonHandler() {
    this.parentNode.parentNode.querySelector('.thumbnail-image').innerHTML = "";
    this.parentNode.parentNode.querySelector('input[name="thumbnail_id"]').value = '';
  }

  function preview () {
    document.querySelectorAll(".preview-image").forEach(function (item) {
      item.addEventListener("click", imagePreviewHandler);
    });
  }

  function imagePreviewHandler() {
    console.log('xxxxxx: ', this);
    // var imageSelector = this.querySelector('img');
    var url = this.src;
    imagePreview(url);
  }

  function imagePreview(url) {
    var html = '<div class="image-preview-background">\
                <div class="image-preview-background-color"></div>\
              </div>';
    document.querySelector('body').insertAdjacentHTML("beforeend", html);

    var img = new Image();
    img.src = url;
    document.querySelector('.image-preview-background').appendChild(img);
    document.querySelector('.image-preview-background img').classList.add("image-preview-image");
    img.onload = function () {
      imagePreviewSize(img);
    };
    document.querySelector('.image-preview-background').addEventListener("click", function () {
      document.querySelector('body').removeChild(this);
    });
    document.querySelector('.image-preview-background').addEventListener("mousewheel", function (e) {
      e.preventDefault();
    });
  }

  function imagePreviewSize(img) {
    var myClientWidth = document.documentElement.clientWidth * 0.8;
    var myClientHeight = document.documentElement.clientHeight * 0.8;

    if (myClientWidth > myClientHeight) {
      img.width = myClientHeight;
      img.height = myClientHeight;
    } else {
      img.width = myClientWidth;
      img.height = myClientWidth;
    }

    document.querySelector('.image-preview-image').style.top = "calc(50% - " + img.height / 2 + "px)";
    document.querySelector('.image-preview-image').style.left = "calc(50% - " + img.width / 2 + "px)";
    return false;
  }

  function selectInit(){
    // console.log('select');
    var checkAllControl = document.querySelector('.check-all');
    if(!checkAllControl) return;
    
    checkAllControl.addEventListener('click', function (){
      var inputCheckbox = document.querySelectorAll('input[name="ids"]');
      for(var i=0; i<inputCheckbox.length; i++){
        inputCheckbox[i].checked = checkAllControl.checked ? true : false;
      }
    });
    

    
    // console.log(inputCheckbox);
  }

  pageMenu();
  darkMode();
  thumbnail();
  preview();
  selectInit();

})();
