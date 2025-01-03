/*! @name videojs-ogvjs @version 3.0.0 @license (MIT OR Apache-2.0) */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global = global || self, global.videojsOgvjs = factory(global.videojs));
}(this, function (videojs) { 'use strict';

  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var ogv = createCommonjsModule(function (module, exports) {
  !function webpackUniversalModuleDefinition(e,t){module.exports=t();}(window,function(){return function(e){var t={};function __webpack_require__(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,i){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i});},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(__webpack_require__.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(i,r,function(t){return e[t]}.bind(null,r));return i},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=20)}([function(e,t){e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}};},function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};},function(e,t){function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}e.exports=function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e};},function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(t)}e.exports=_getPrototypeOf;},function(e,t){function _typeof2(e){return (_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof2(e){return typeof e}:function _typeof2(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(t){return "function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?e.exports=_typeof=function _typeof(e){return _typeof2(e)}:e.exports=_typeof=function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},_typeof(t)}e.exports=_typeof;},function(e,t,i){var r=i(4),n=i(12);e.exports=function _possibleConstructorReturn(e,t){return !t||"object"!==r(t)&&"function"!=typeof t?n(e):t};},function(e,t,i){var r=i(26);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t);};},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")();}catch(e){"object"==typeof window&&(i=window);}e.exports=i;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(5)),s=r(i(3)),u=r(i(24)),d=r(i(6)),c=r(i(27)),f=r(i(28)),l=r(i(29)),h={audio:{proxy:c.default,worker:"ogv-worker-audio.js"},video:{proxy:f.default,worker:"ogv-worker-video.js"}},p={OGVDecoderAudioOpus:"audio",OGVDecoderAudioOpusW:"audio",OGVDecoderAudioVorbis:"audio",OGVDecoderAudioVorbisW:"audio",OGVDecoderVideoTheora:"video",OGVDecoderVideoTheoraW:"video",OGVDecoderVideoVP8:"video",OGVDecoderVideoVP8W:"video",OGVDecoderVideoVP9:"video",OGVDecoderVideoVP9W:"video",OGVDecoderVideoAV1:"video",OGVDecoderVideoAV1W:"video"},_=new(function(e){function OGVLoaderWeb(){var e;return (0, n.default)(this,OGVLoaderWeb),(e=(0, a.default)(this,(0, s.default)(OGVLoaderWeb).call(this))).scriptStatus={},e.scriptCallbacks={},e}return (0, d.default)(OGVLoaderWeb,e),(0, o.default)(OGVLoaderWeb,[{key:"getGlobal",value:function getGlobal(){return window}},{key:"defaultBase",value:function defaultBase(){for(var e,t,i=document.querySelectorAll("script"),r=/^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,n=0;n<i.length;n++)if((e=i[n].getAttribute("src"))&&(t=e.match(r)))return t[1]}},{key:"loadClass",value:function loadClass(e,t,i){(i=i||{}).worker?this.workerProxy(e,t):(0, u.default)((0, s.default)(OGVLoaderWeb.prototype),"loadClass",this).call(this,e,t,i);}},{key:"loadScript",value:function loadScript(e,t){var i=this;if("done"==this.scriptStatus[e])t();else if("loading"==this.scriptStatus[e])this.scriptCallbacks[e].push(t);else{this.scriptStatus[e]="loading",this.scriptCallbacks[e]=[t];var r=document.createElement("script"),n=function done(t){var r=i.scriptCallbacks[e];delete i.scriptCallbacks[e],i.scriptStatus[e]="done",r.forEach(function(e){e();});};r.addEventListener("load",n),r.addEventListener("error",n),r.src=e,document.querySelector("head").appendChild(r);}}},{key:"workerProxy",value:function workerProxy(e,t){var i=h[p[e]];if(!i)throw new Error("Requested worker for class with no proxy: "+e);var r,n=i.proxy,o=i.worker,a=this.urlForScript(this.scriptForClass(e)),s=this.urlForScript(o),u=function construct(t){return new n(r,e,t)};if(s.match(/^https?:|\/\//i)){var d,c,f,l,_,m=function completionCheck(){if(1==g&&1==y){try{_=new Blob([f+" "+l],{type:"application/javascript"});}catch(e){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,(_=new BlobBuilder).append(f+" "+l),_=_.getBlob();}r=new Worker(URL.createObjectURL(_)),t(function(e){return Promise.resolve(new u(e))});}},g=!1,y=!1;(d=new XMLHttpRequest).open("GET",a,!0),d.onreadystatechange=function(){4==d.readyState&&200==d.status&&(f=d.responseText,g=!0,m());},d.send(),(c=new XMLHttpRequest).open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&200==c.status&&(l=c.responseText,y=!0,m());},c.send();}else r=new Worker(s),t(function(e){return Promise.resolve(new u(e))});}}]),OGVLoaderWeb}(l.default));t.default=_;},function(e,t){!function(){function FrameSink(e,t){throw new Error("abstract")}FrameSink.prototype.drawFrame=function(e){throw new Error("abstract")},FrameSink.prototype.clear=function(){throw new Error("abstract")},e.exports=FrameSink;}();},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=i(18),o=function(e){function DownloadBackend(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DownloadBackend),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DownloadBackend.__proto__||Object.getPrototypeOf(DownloadBackend)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(DownloadBackend,n),r(DownloadBackend,[{key:"bufferToOffset",value:function bufferToOffset(e){var t=this;return new Promise(function(i,r){t.eof||t.offset>=e?i():function(){var n=null;t._onAbort=function(e){n(),r(e);};var o=function checkBuffer(){t.offset>=e&&!t.eof&&(n(),i());},a=function checkDone(){n(),i();},s=function checkError(){n(),r(new Error("error streaming"));};n=function oncomplete(){t.buffering=!1,t.off("buffer",o),t.off("done",a),t.off("error",s),t._onAbort=null;},t.buffering=!0,t.on("buffer",o),t.on("done",a),t.on("error",s);}();})}},{key:"initXHR",value:function initXHR(){(function get(e,t,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0})(DownloadBackend.prototype.__proto__||Object.getPrototypeOf(DownloadBackend.prototype),"initXHR",this).call(this);}},{key:"onXHRStart",value:function onXHRStart(){var e=this;this.xhr.addEventListener("progress",function(){return e.onXHRProgress()}),this.xhr.addEventListener("error",function(){return e.onXHRError()}),this.xhr.addEventListener("load",function(){return e.onXHRLoad()}),this.emit("open");}},{key:"onXHRProgress",value:function onXHRProgress(){throw new Error("abstract")}},{key:"onXHRError",value:function onXHRError(){this.emit("error");}},{key:"onXHRLoad",value:function onXHRLoad(){this.eof=!0,this.emit("done");}}]),DownloadBackend}();e.exports=o;},function(e,t){var i,r,n=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(i===setTimeout)return setTimeout(e,0);if((i===defaultSetTimout||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:defaultSetTimout;}catch(e){i=defaultSetTimout;}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout;}catch(e){r=defaultClearTimeout;}}();var o,a=[],s=!1,u=-1;function cleanUpNextTick(){s&&o&&(s=!1,o.length?a=o.concat(a):u=-1,a.length&&drainQueue());}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick);s=!0;for(var t=a.length;t;){for(o=a,a=[];++u<t;)o&&o[u].run();u=-1,t=a.length;}o=null,s=!1,function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e);}}function Item(e,t){this.fun=e,this.array=t;}function noop(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];a.push(new Item(e,t)),1!==a.length||s||runTimeout(drainQueue);},Item.prototype.run=function(){this.fun.apply(null,this.array);},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=noop,n.addListener=noop,n.once=noop,n.off=noop,n.removeListener=noop,n.removeAllListeners=noop,n.emit=noop,n.prependListener=noop,n.prependOnceListener=noop,n.listeners=function(e){return []},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return "/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};},function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2));var a=
  /**
   * Proxy object for web worker interface for codec classes.
   *
   * Used by the high-level player interface.
   *
   * @author Brion Vibber <brion@pobox.com>
   * @copyright 2015-2019 Brion Vibber
   * @license MIT-style
   */
  function OGVProxyClass(e){return function(){function _class(t,i,r){var o=this;for(var a in(0, n.default)(this,_class),r=r||{},this.worker=t,this.transferables=function(){var e=new ArrayBuffer(1024),i=new Uint8Array(e);try{return t.postMessage({action:"transferTest",bytes:i},[e]),!e.byteLength}catch(e){return !1}}(),e)e.hasOwnProperty(a)&&(this[a]=e[a]);this.processingQueue=0,Object.defineProperty(this,"processing",{get:function get(){return this.processingQueue>0}}),this.messageCount=0,this.pendingCallbacks={},this.worker.addEventListener("message",function(e){o.handleMessage(e);}),this.proxy("construct",[i,r],function(){});}return (0, o.default)(_class,[{key:"proxy",value:function proxy(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!this.worker)throw'Tried to call "'+e+'" method on closed proxy object';var n="callback-"+ ++this.messageCount+"-"+e;i&&(this.pendingCallbacks[n]=i);var o={action:e,callbackId:n,args:t||[]};this.processingQueue++,this.transferables?this.worker.postMessage(o,r):this.worker.postMessage(o);}},{key:"terminate",value:function terminate(){this.worker&&(this.worker.terminate(),this.worker=null,this.processingQueue=0,this.pendingCallbacks={});}},{key:"handleMessage",value:function handleMessage(e){if(this.processingQueue--,"callback"===e.data.action){var t=e.data,i=t.callbackId,r=t.args,n=this.pendingCallbacks[i];if(t.props)for(var o in t.props)t.props.hasOwnProperty(o)&&(this[o]=t.props[o]);n&&(delete this.pendingCallbacks[i],n.apply(this,r));}}}]),_class}()};t.default=a;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(15)),a={MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4},s=function OGVMediaError(e,t){(0, n.default)(this,OGVMediaError),this.code=e,this.message=t;};(0, o.default)(s,a),(0, o.default)(s.prototype,a);var u=s;t.default=u;},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function extend(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);};t.default=r;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1));function split(e,t,i){var r=e.split(t,i).map(function(e){return function trim(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}(e)});if("number"==typeof i)for(;r.length<i;)r.push(null);return r}var o=function OGVMediaType(e){(0, n.default)(this,OGVMediaType),e=String(e),this.major=null,this.minor=null,this.codecs=null;var t=split(e,";");if(t.length){var i=t.shift();if(i){var r=split(i,"/",2);this.major=r[0],this.minor=r[1];}for(var o in t){var a=t[o].match(/^codecs\s*=\s*"(.*?)"$/);if(a){this.codecs=split(a[1],",");break}}}};t.default=o;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=function(){function TinyEvents(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TinyEvents),this._e={};}return r(TinyEvents,[{key:"on",value:function on(e,t){(this._e[e]||(this._e[e]=[])).push(t);}},{key:"off",value:function off(e,t){var i=this._e[e]||[],r=i.indexOf(t);t>=0&&i.splice(r,1);}},{key:"emit",value:function emit(e,t){(this._e[e]||[]).slice().forEach(function(e){return e(t)});}}]),TinyEvents}();e.exports=n;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=i(17);function getXHRLength(e){if(206==e.status)return function getXHRRangeTotal(e){var t=getXHRRangeMatches(e);return t?parseInt(t[3],10):-1}(e);var t=e.getResponseHeader("Content-Length");return null===t||""===t?-1:parseInt(t,10)}function getXHRRangeMatches(e){var t=e.getResponseHeader("Content-Range");return t&&t.match(/^bytes (\d+)-(\d+)\/(\d+)/)}var o=function(e){function Backend(e){var t=e.url,i=e.offset,r=e.length,n=e.cachever,o=void 0===n?0:n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Backend);var a=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Backend.__proto__||Object.getPrototypeOf(Backend)).call(this));return a.url=t,a.offset=i,a.length=r,a.cachever=o,a.loaded=!1,a.seekable=!1,a.headers={},a.eof=!1,a.bytesRead=0,a.xhr=new XMLHttpRequest,a}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(Backend,n),r(Backend,[{key:"load",value:function load(){var e=this;return new Promise(function(t,i){var r=null;e._onAbort=function(e){r(),i(e);};var n=function checkOpen(){if(2==e.xhr.readyState){if(206==e.xhr.status){var n=function getXHRRangeStart(e){var t=getXHRRangeMatches(e);return t?parseInt(t[1],10):0}(e.xhr);if(e.offset!=n)return console.log("Expected start at "+e.offset+" but got "+n+"; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672"),e.cachever++,e.emit("cachever"),e.abort(),r(),void e.load().then(t).catch(i);e.seekable=!0;}e.xhr.status>=200&&e.xhr.status<300?(e.length=getXHRLength(e.xhr),e.headers=function getXHRHeaders(e){var t={};return e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var i=e.split(/:\s*/,2);i.length>1&&(t[i[0].toLowerCase()]=i[1]);}),t}(e.xhr),e.onXHRStart()):(r(),i(new Error("HTTP error "+e.xhr.status)));}},o=function checkError(){r(),i(new Error("network error"));},a=function checkBackendOpen(){r(),t();};r=function oncomplete(){e.xhr.removeEventListener("readystatechange",n),e.xhr.removeEventListener("error",o),e.off("open",a),e._onAbort=null;},e.initXHR(),e.xhr.addEventListener("readystatechange",n),e.xhr.addEventListener("error",o),e.on("open",a),e.xhr.send();})}},{key:"bufferToOffset",value:function bufferToOffset(e){return Promise.reject(new Error("abstract"))}},{key:"abort",value:function abort(){if(this.xhr.abort(),this._onAbort){var e=this._onAbort;this._onAbort=null;var t=new Error("Aborted");t.name="AbortError",e(t);}}},{key:"initXHR",value:function initXHR(){var e=this.url;this.cachever&&(e+="?buggy_cachever="+this.cachever),this.xhr.open("GET",e);var t=null;(this.offset||this.length)&&(t="bytes="+this.offset+"-"),this.length&&(t+=this.offset+this.length-1),null!==t&&this.xhr.setRequestHeader("Range",t);}},{key:"onXHRStart",value:function onXHRStart(){throw new Error("abstract")}}]),Backend}();e.exports=o;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=function(){function OGVTimeRanges(e){(0, n.default)(this,OGVTimeRanges),this._ranges=e,this.length=e.length;}return (0, o.default)(OGVTimeRanges,[{key:"start",value:function start(e){if(e<0||e>this.length||e!==(0|e))throw new RangeError("Invalid index");return this._ranges[e][0]}},{key:"end",value:function end(e){if(e<0||e>this.length||e!==(0|e))throw new RangeError("Invalid index");return this._ranges[e][1]}}]),OGVTimeRanges}();t.default=a;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OGVCompat",{enumerable:!0,get:function get(){return a.default}}),Object.defineProperty(t,"OGVLoader",{enumerable:!0,get:function get(){return s.default}}),Object.defineProperty(t,"OGVMediaError",{enumerable:!0,get:function get(){return u.default}}),Object.defineProperty(t,"OGVMediaType",{enumerable:!0,get:function get(){return d.default}}),Object.defineProperty(t,"OGVPlayer",{enumerable:!0,get:function get(){return c.default}}),Object.defineProperty(t,"OGVTimeRanges",{enumerable:!0,get:function get(){return f.default}}),t.OGVVersion=void 0;var n=r(i(4)),o=r(i(21)),a=r(i(22)),s=r(i(8)),u=r(i(14)),d=r(i(16)),c=r(i(31)),f=r(i(19));o.default.polyfill();t.OGVVersion="1.6.0-20190226222001-c4648f0","object"===("undefined"==typeof window?"undefined":(0, n.default)(window))&&(window.OGVCompat=a.default,window.OGVLoader=s.default,window.OGVMediaError=u.default,window.OGVMediaType=d.default,window.OGVTimeRanges=f.default,window.OGVPlayer=c.default,window.OGVVersion="1.6.0-20190226222001-c4648f0");},function(e,t,i){(function(t,i){
  /*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.5+7f2b526d
   */var r;r=function(){function isFunction(e){return "function"==typeof e}var e=Array.isArray?Array.isArray:function(e){return "[object Array]"===Object.prototype.toString.call(e)},r=0,n=void 0,o=void 0,a=function asap(e,t){l[r]=e,l[r+1]=t,2===(r+=2)&&(o?o(flush):h());},s="undefined"!=typeof window?window:void 0,u=s||{},d=u.MutationObserver||u.WebKitMutationObserver,c="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function useSetTimeout(){var e=setTimeout;return function(){return e(flush,1)}}var l=new Array(1e3);function flush(){for(var e=0;e<r;e+=2){(0, l[e])(l[e+1]),l[e]=void 0,l[e+1]=void 0;}r=0;}var h=void 0;function then(e,t){var i=this,r=new this.constructor(noop);void 0===r[p]&&makePromise(r);var n=i._state;if(n){var o=arguments[n-1];a(function(){return invokeCallback(n,r,o,i._result)});}else subscribe(i,r,e,t);return r}function resolve$1(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(noop);return resolve(t,e),t}h=c?function useNextTick(){return function(){return t.nextTick(flush)}}():d?function useMutationObserver(){var e=0,t=new d(flush),i=document.createTextNode("");return t.observe(i,{characterData:!0}),function(){i.data=e=++e%2;}}():f?function useMessageChannel(){var e=new MessageChannel;return e.port1.onmessage=flush,function(){return e.port2.postMessage(0)}}():void 0===s?function attemptVertx(){try{var e=Function("return this")().require("vertx");return n=e.runOnLoop||e.runOnContext,function useVertxTimer(){return void 0!==n?function(){n(flush);}:useSetTimeout()}()}catch(e){return useSetTimeout()}}():useSetTimeout();var p=Math.random().toString(36).substring(2);function noop(){}var _=void 0,m=1,g=2,y={error:null};function getThen(e){try{return e.then}catch(e){return y.error=e,y}}function handleMaybeThenable(e,t,i){t.constructor===e.constructor&&i===then&&t.constructor.resolve===resolve$1?function handleOwnThenable(e,t){t._state===m?fulfill(e,t._result):t._state===g?reject(e,t._result):subscribe(t,void 0,function(t){return resolve(e,t)},function(t){return reject(e,t)});}(e,t):i===y?(reject(e,y.error),y.error=null):void 0===i?fulfill(e,t):isFunction(i)?function handleForeignThenable(e,t,i){a(function(e){var r=!1,n=function tryThen(e,t,i,r){try{e.call(t,i,r);}catch(e){return e}}(i,t,function(i){r||(r=!0,t!==i?resolve(e,i):fulfill(e,i));},function(t){r||(r=!0,reject(e,t));},e._label);!r&&n&&(r=!0,reject(e,n));},e);}(e,t,i):fulfill(e,t);}function resolve(e,t){e===t?reject(e,function selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}()):!function objectOrFunction(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}(t)?fulfill(e,t):handleMaybeThenable(e,t,getThen(t));}function publishRejection(e){e._onerror&&e._onerror(e._result),publish(e);}function fulfill(e,t){e._state===_&&(e._result=t,e._state=m,0!==e._subscribers.length&&a(publish,e));}function reject(e,t){e._state===_&&(e._state=g,e._result=t,a(publishRejection,e));}function subscribe(e,t,i,r){var n=e._subscribers,o=n.length;e._onerror=null,n[o]=t,n[o+m]=i,n[o+g]=r,0===o&&e._state&&a(publish,e);}function publish(e){var t=e._subscribers,i=e._state;if(0!==t.length){for(var r=void 0,n=void 0,o=e._result,a=0;a<t.length;a+=3)r=t[a],n=t[a+i],r?invokeCallback(i,r,n,o):n(o);e._subscribers.length=0;}}function invokeCallback(e,t,i,r){var n=isFunction(i),o=void 0,a=void 0,s=void 0,u=void 0;if(n){if((o=function tryCatch(e,t){try{return e(t)}catch(e){return y.error=e,y}}(i,r))===y?(u=!0,a=o.error,o.error=null):s=!0,t===o)return void reject(t,function cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}())}else o=r,s=!0;t._state!==_||(n&&s?resolve(t,o):u?reject(t,a):e===m?fulfill(t,o):e===g&&reject(t,o));}var v=0;function makePromise(e){e[p]=v++,e._state=void 0,e._result=void 0,e._subscribers=[];}var b=function(){function Enumerator(t,i){this._instanceConstructor=t,this.promise=new t(noop),this.promise[p]||makePromise(this.promise),e(i)?(this.length=i.length,this._remaining=i.length,this._result=new Array(this.length),0===this.length?fulfill(this.promise,this._result):(this.length=this.length||0,this._enumerate(i),0===this._remaining&&fulfill(this.promise,this._result))):reject(this.promise,function validationError(){return new Error("Array Methods must be provided an Array")}());}return Enumerator.prototype._enumerate=function _enumerate(e){for(var t=0;this._state===_&&t<e.length;t++)this._eachEntry(e[t],t);},Enumerator.prototype._eachEntry=function _eachEntry(e,t){var i=this._instanceConstructor,r=i.resolve;if(r===resolve$1){var n=getThen(e);if(n===then&&e._state!==_)this._settledAt(e._state,t,e._result);else if("function"!=typeof n)this._remaining--,this._result[t]=e;else if(i===T){var o=new i(noop);handleMaybeThenable(o,e,n),this._willSettleAt(o,t);}else this._willSettleAt(new i(function(t){return t(e)}),t);}else this._willSettleAt(r(e),t);},Enumerator.prototype._settledAt=function _settledAt(e,t,i){var r=this.promise;r._state===_&&(this._remaining--,e===g?reject(r,i):this._result[t]=i),0===this._remaining&&fulfill(r,this._result);},Enumerator.prototype._willSettleAt=function _willSettleAt(e,t){var i=this;subscribe(e,void 0,function(e){return i._settledAt(m,t,e)},function(e){return i._settledAt(g,t,e)});},Enumerator}(),T=function(){function Promise(e){this[p]=function nextId(){return v++}(),this._result=this._state=void 0,this._subscribers=[],noop!==e&&("function"!=typeof e&&function needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof Promise?function initializePromise(e,t){try{t(function resolvePromise(t){resolve(e,t);},function rejectPromise(t){reject(e,t);});}catch(t){reject(e,t);}}(this,e):function needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}());}return Promise.prototype.catch=function _catch(e){return this.then(null,e)},Promise.prototype.finally=function _finally(e){var t=this.constructor;return isFunction(e)?this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})}):this.then(e,e)},Promise}();return T.prototype.then=then,T.all=function all(e){return new b(this,e).promise},T.race=function race(t){var i=this;return e(t)?new i(function(e,r){for(var n=t.length,o=0;o<n;o++)i.resolve(t[o]).then(e,r);}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},T.resolve=resolve$1,T.reject=function reject$1(e){var t=new this(noop);return reject(t,e),t},T._setScheduler=function setScheduler(e){o=e;},T._setAsap=function setAsap(e){a=e;},T._asap=a,T.polyfill=function polyfill(){var e=void 0;if(void 0!==i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")();}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve());}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=T;},T.Promise=T,T},e.exports=r();}).call(this,i(11),i(7));},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(23)),s=new(function(){function _class(){(0, n.default)(this,_class),this.benchmark=new a.default;}return (0, o.default)(_class,[{key:"hasTypedArrays",value:function hasTypedArrays(){return !!window.Uint32Array}},{key:"hasWebAudio",value:function hasWebAudio(){return !(!window.AudioContext&&!window.webkitAudioContext)}},{key:"hasFlash",value:function hasFlash(){if(-1!==navigator.userAgent.indexOf("Trident"))try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return !0}catch(e){return !1}return !1}},{key:"hasAudio",value:function hasAudio(){return this.hasWebAudio()||this.hasFlash()}},{key:"isBlacklisted",value:function isBlacklisted(e){var t=!1;return [/\(i.* OS [6789]_.* like Mac OS X\).* Mobile\/.* Safari\//,/\(Macintosh.* Version\/6\..* Safari\/\d/].forEach(function(i){e.match(i)&&(t=!0);}),t}},{key:"isSlow",value:function isSlow(){return this.benchmark.slow}},{key:"isTooSlow",value:function isTooSlow(){return this.benchmark.tooSlow}},{key:"supported",value:function supported(e){return "OGVDecoder"===e?this.hasTypedArrays()&&!this.isBlacklisted(navigator.userAgent):"OGVPlayer"===e&&(this.supported("OGVDecoder")&&this.hasAudio()&&!this.isTooSlow())}}]),_class}());t.default=s;},function(e,t,i){e.exports=function BogoSlow(){var e,t=this;e=window.performance&&window.performance.now?function timer(){return window.performance.now()}:function timer(){return Date.now()};var i=null;Object.defineProperty(t,"speed",{get:function get(){return null===i&&function run(){var t=0,r=e();!function fibonacci(e){return t++,e<2?e:fibonacci(e-2)+fibonacci(e-1)}(30);var n=e()-r;i=t/n;}(),i}}),Object.defineProperty(t,"slowCutoff",{get:function get(){return 5e4}}),Object.defineProperty(t,"tooSlowCutoff",{get:function get(){return 0}}),Object.defineProperty(t,"slow",{get:function get(){return t.speed<t.slowCutoff}}),Object.defineProperty(t,"tooSlow",{get:function get(){return t.speed<t.tooSlowCutoff}});};},function(e,t,i){i(3);var r=i(25);function _get(t,i,n){return "undefined"!=typeof Reflect&&Reflect.get?e.exports=_get=Reflect.get:e.exports=_get=function _get(e,t,i){var n=r(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}},_get(t,i,n||t)}e.exports=_get;},function(e,t,i){var r=i(3);e.exports=function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e};},function(e,t){function _setPrototypeOf(t,i){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(t,i)}e.exports=_setPrototypeOf;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(5)),s=r(i(3)),u=r(i(6)),d=function(e){function OGVDecoderAudioProxy(){return (0, n.default)(this,OGVDecoderAudioProxy),(0, a.default)(this,(0, s.default)(OGVDecoderAudioProxy).apply(this,arguments))}return (0, u.default)(OGVDecoderAudioProxy,e),(0, o.default)(OGVDecoderAudioProxy,[{key:"init",value:function init(e){this.proxy("init",[],e);}},{key:"processHeader",value:function processHeader(e,t){this.proxy("processHeader",[e],t,[e]);}},{key:"processAudio",value:function processAudio(e,t){this.proxy("processAudio",[e],t,[e]);}},{key:"close",value:function close(){this.terminate();}}]),OGVDecoderAudioProxy}((0, r(i(13)).default)({loadedMetadata:!1,audioFormat:null,audioBuffer:null,cpuTime:0}));t.default=d;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(5)),s=r(i(3)),u=r(i(6)),d=function(e){function OGVDecoderVideoProxy(){return (0, n.default)(this,OGVDecoderVideoProxy),(0, a.default)(this,(0, s.default)(OGVDecoderVideoProxy).apply(this,arguments))}return (0, u.default)(OGVDecoderVideoProxy,e),(0, o.default)(OGVDecoderVideoProxy,[{key:"init",value:function init(e){this.proxy("init",[],e);}},{key:"processHeader",value:function processHeader(e,t){this.proxy("processHeader",[e],t,[e]);}},{key:"processFrame",value:function processFrame(e,t){this.proxy("processFrame",[e],t,[e]);}},{key:"close",value:function close(){this.terminate();}},{key:"sync",value:function sync(){this.proxy("sync",[],function(){});}}]),OGVDecoderVideoProxy}((0, r(i(13)).default)({loadedMetadata:!1,videoFormat:null,frameBuffer:null,cpuTime:0}));t.default=d;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(30)),s={OGVDemuxerOgg:"ogv-demuxer-ogg.js",OGVDemuxerOggW:"ogv-demuxer-ogg-wasm.js",OGVDemuxerWebM:"ogv-demuxer-webm.js",OGVDemuxerWebMW:"ogv-demuxer-webm-wasm.js",OGVDecoderAudioOpus:"ogv-decoder-audio-opus.js",OGVDecoderAudioOpusW:"ogv-decoder-audio-opus-wasm.js",OGVDecoderAudioVorbis:"ogv-decoder-audio-vorbis.js",OGVDecoderAudioVorbisW:"ogv-decoder-audio-vorbis-wasm.js",OGVDecoderVideoTheora:"ogv-decoder-video-theora.js",OGVDecoderVideoTheoraW:"ogv-decoder-video-theora-wasm.js",OGVDecoderVideoVP8:"ogv-decoder-video-vp8.js",OGVDecoderVideoVP8W:"ogv-decoder-video-vp8-wasm.js",OGVDecoderVideoVP8MTW:"ogv-decoder-video-vp8-mt-wasm.js",OGVDecoderVideoVP9:"ogv-decoder-video-vp9.js",OGVDecoderVideoVP9W:"ogv-decoder-video-vp9-wasm.js",OGVDecoderVideoVP9MTW:"ogv-decoder-video-vp9-mt-wasm.js",OGVDecoderVideoAV1:"ogv-decoder-video-av1.js",OGVDecoderVideoAV1W:"ogv-decoder-video-av1-wasm.js",OGVDecoderVideoAV1MTW:"ogv-decoder-video-av1-mt-wasm.js"},u=function(){function OGVLoaderBase(){(0, n.default)(this,OGVLoaderBase),this.base=this.defaultBase();}return (0, o.default)(OGVLoaderBase,[{key:"defaultBase",value:function defaultBase(){}},{key:"wasmSupported",value:function wasmSupported(){return a.default.wasmSupported()}},{key:"scriptForClass",value:function scriptForClass(e){return s[e]}},{key:"urlForClass",value:function urlForClass(e){var t=this.scriptForClass(e);if(t)return this.urlForScript(t);throw new Error("asked for URL for unknown class "+e)}},{key:"urlForScript",value:function urlForScript(e){if(e){var t=this.base;return void 0===t?t="":t+="/",t+e+"?version="+encodeURIComponent("1.6.0-20190226222001-c4648f0")}throw new Error("asked for URL for unknown script "+e)}},{key:"loadClass",value:function loadClass(e,t,i){var r=this;i=i||{};var n=this.getGlobal(),o=this.urlForClass(e),a=function classWrapper(t){return (t=t||{}).locateFile=function(e){return "data:"===e.slice(0,5)?e:r.urlForScript(e)},t.mainScriptUrlOrBlob=r.scriptForClass(e)+"?version="+encodeURIComponent("1.6.0-20190226222001-c4648f0"),n[e](t)};"function"==typeof n[e]?t(a):this.loadScript(o,function(){t(a);});}}]),OGVLoaderBase}();t.default=u;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(4)),o=r(i(1)),a=r(i(2));var s=new(function(){function WebAssemblyChecker(){(0, o.default)(this,WebAssemblyChecker),this.tested=!1,this.testResult=void 0;}return (0, a.default)(WebAssemblyChecker,[{key:"wasmSupported",value:function wasmSupported(){if(!this.tested){try{"object"===("undefined"==typeof WebAssembly?"undefined":(0, n.default)(WebAssembly))?this.testResult=function testSafariWebAssemblyBug(){var e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}():this.testResult=!1;}catch(e){console.log("Exception while testing WebAssembly",e),this.testResult=!1;}this.tested=!0;}return this.testResult}}]),WebAssemblyChecker}());t.default=s;},function(e,t,i){(function(e){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=r(i(1)),s=r(i(2)),u=r(i(5)),d=r(i(3)),c=r(i(6)),f=r(i(12)),l=r(i(4)),h=r(i(34)),p=r(i(40)),_=r(i(49)),m=(r(i(50)),r(i(8))),g=r(i(51)),y=r(i(15)),v=r(i(14)),b=r(i(16)),T=r(i(19)),k=r(i(52)),w={NETWORK_EMPTY:0,NETWORK_IDLE:1,NETWORK_LOADING:2,NETWORK_NO_SOURCE:3,HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},P={INITIAL:"INITIAL",SEEKING_END:"SEEKING_END",LOADED:"LOADED",PRELOAD:"PRELOAD",READY:"READY",PLAYING:"PLAYING",SEEKING:"SEEKING",ENDED:"ENDED",ERROR:"ERROR"},E={NOT_SEEKING:"NOT_SEEKING",BISECT_TO_TARGET:"BISECT_TO_TARGET",BISECT_TO_KEYPOINT:"BISECT_TO_KEYPOINT",LINEAR_TO_TARGET:"LINEAR_TO_TARGET"},A={EXACT:"exact",FAST:"fast"};function OGVJSElement(){var e=document.createElement("ogvjs");return Object.setPrototypeOf?Object.setPrototypeOf(e,Object.getPrototypeOf(this)):e.__proto__=this.__proto__,e}o="undefined"==typeof performance||void 0===(0, l.default)(performance.now)?Date.now:performance.now.bind(performance),OGVJSElement.prototype=Object.create(HTMLElement.prototype,{});var x=function(t){function OGVPlayer(e){var t;return (0, a.default)(this,OGVPlayer),t=(0, u.default)(this,(0, d.default)(OGVPlayer).call(this)),(e=e||{}).base=e.base||m.default.base,t._options=e,t._instanceId="ogvjs"+ ++OGVPlayer.instanceCount,void 0!==e.worker?t._enableWorker=!!e.worker:t._enableWorker=!!window.Worker,void 0!==e.wasm?t._enableWASM=!!e.wasm:t._enableWASM=m.default.wasmSupported(),t._enableThreading=!!e.threading,t._state=P.INITIAL,t._seekState=E.NOT_SEEKING,t._detectedType=null,t._canvas=document.createElement("canvas"),t._frameSink=null,t.className=t._instanceId,(0, y.default)((0, f.default)((0, f.default)(t)),w),t._canvas.style.position="absolute",t._canvas.style.top="0",t._canvas.style.left="0",t._canvas.style.width="100%",t._canvas.style.height="100%",t._canvas.style.objectFit="contain",t.appendChild(t._canvas),t._startTime=o(),t._codec=null,t._audioInfo=null,t._videoInfo=null,t._actionQueue=[],t._audioFeeder=null,t._muted=!1,t._initialPlaybackPosition=0,t._initialPlaybackOffset=0,t._prebufferingAudio=!1,t._initialSeekTime=0,t._currentSrc="",t._streamEnded=!1,t._mediaError=null,t._dataEnded=!1,t._byteLength=0,t._duration=null,t._lastSeenTimestamp=null,t._nextProcessingTimer,t._nextFrameTimer=null,t._loading=!1,t._started=!1,t._paused=!0,t._ended=!1,t._startedPlaybackInDocument=!1,t._stream=void 0,t._framesProcessed=0,t._targetPerFrameTime=1e3/60,t._actualPerFrameTime=0,t._totalFrameTime=0,t._totalFrameCount=0,t._playTime=0,t._bufferTime=0,t._drawingTime=0,t._proxyTime=0,t._totalJitter=0,t._droppedAudio=0,t._delayedAudio=0,t._lateFrames=0,t._poster="",t._thumbnail=null,t._frameEndTimestamp=0,t._audioEndTimestamp=0,t._decodedFrames=[],t._pendingFrames=[],t._lastFrameDecodeTime=0,t._lastFrameVideoCpuTime=0,t._lastFrameAudioCpuTime=0,t._lastFrameDemuxerCpuTime=0,t._lastFrameDrawingTime=0,t._lastFrameBufferTime=0,t._lastFrameProxyTime=0,t._lastVideoCpuTime=0,t._lastAudioCpuTime=0,t._lastDemuxerCpuTime=0,t._lastBufferTime=0,t._lastProxyTime=0,t._lastDrawingTime=0,t._lastFrameTimestamp=0,t._currentVideoCpuTime=0,t._lastTimeUpdate=0,t._timeUpdateInterval=250,t._seekTargetTime=0,t._bisectTargetTime=0,t._seekMode=null,t._lastSeekPosition=null,t._seekBisector=null,t._didSeek=null,t._depth=0,t._needProcessing=!1,t._pendingFrame=0,t._pendingAudio=0,t._framePipelineDepth=8,t._frameParallelism=t._enableThreading?Math.min(4,navigator.hardwareConcurrency)||1:0,t._audioPipelineDepth=12,t._videoInfo=null,t._audioInfo=null,t._width=0,t._height=0,t._volume=1,Object.defineProperties((0, f.default)((0, f.default)(t)),{src:{get:function getSrc(){return this.getAttribute("src")||""},set:function setSrc(e){this.setAttribute("src",e),this._loading=!1,this._prepForLoad("interactive");}},buffered:{get:function getBuffered(){var e,t=this;return e=this._stream&&this._byteLength&&this._duration?this._stream.getBufferedRanges().map(function(e){return e.map(function(e){return e/t._stream.length*t._duration})}):[[0,0]],new T.default(e)}},seekable:{get:function getSeekable(){return this.duration<1/0&&this._stream&&this._stream.seekable&&this._codec&&this._codec.seekable?new T.default([[0,this._duration]]):new T.default([])}},currentTime:{get:function getCurrentTime(){return this._state==P.SEEKING?this._seekTargetTime:this._codec?this._state!=P.PLAYING||this._paused?this._initialPlaybackOffset:this._getPlaybackTime():this._initialSeekTime},set:function setCurrentTime(e){this._seek(e,A.EXACT);}},duration:{get:function getDuration(){return this._codec&&this._codec.loadedMetadata?null!==this._duration?this._duration:1/0:NaN}},paused:{get:function getPaused(){return this._paused}},ended:{get:function getEnded(){return this._ended}},seeking:{get:function getSeeking(){return this._state==P.SEEKING}},muted:{get:function getMuted(){return this._muted},set:function setMuted(e){this._muted=e,this._audioFeeder?this._audioFeeder.muted=this._muted:this._started&&!this._muted&&this._codec&&this._codec.hasAudio&&(this._log("unmuting: switching from timer to audio clock"),this._initAudioFeeder(),this._startPlayback(this._audioEndTimestamp)),this._fireEventAsync("volumechange");}},poster:{get:function getPoster(){return this._poster},set:function setPoster(e){var t=this;if(this._poster=e,!this._started){this._thumbnail&&this.removeChild(this._thumbnail);var i=new Image;i.src=this._poster,i.className="ogvjs-poster",i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.objectFit="contain",i.style.visibility="hidden",i.addEventListener("load",function(){t._thumbnail===i&&(OGVPlayer.styleManager.appendRule("."+t._instanceId,{width:i.naturalWidth+"px",height:i.naturalHeight+"px"}),OGVPlayer.updatePositionOnResize(),i.style.visibility="visible");}),this._thumbnail=i,this.appendChild(i);}}},videoWidth:{get:function getVideoWidth(){return this._videoInfo?this._videoInfo.displayWidth:0}},videoHeight:{get:function getVideoHeight(){return this._videoInfo?this._videoInfo.displayHeight:0}},ogvjsVideoFrameRate:{get:function getOgvJsVideoFrameRate(){return this._videoInfo?0==this._videoInfo.fps?this._totalFrameCount/(this._totalFrameTime/1e3):this._videoInfo.fps:0}},ogvjsAudioChannels:{get:function getOgvJsAudioChannels(){return this._audioInfo?this._audioInfo.channels:0}},ogvjsAudioSampleRate:{get:function getOgvJsAudioChannels(){return this._audioInfo?this._audioInfo.rate:0}},width:{get:function getWidth(){return this._width},set:function setWidth(e){this._width=parseInt(e,10),this.style.width=this._width+"px",OGVPlayer.updatePositionOnResize();}},height:{get:function getHeight(){return this._height},set:function setHeight(e){this._height=parseInt(e,10),this.style.height=this._height+"px",OGVPlayer.updatePositionOnResize();}},autoplay:{get:function getAutoplay(){return !1},set:function setAutoplay(e){}},controls:{get:function getControls(){return !1},set:function setControls(e){}},loop:{get:function getLoop(){return !1},set:function setLoop(e){}},crossOrigin:{get:function getCrossOrigin(){return null},set:function setCrossOrigin(e){}},currentSrc:{get:function getCurrentSrc(){return this._currentSrc}},defaultMuted:{get:function getDefaultMuted(){return !1}},defaultPlaybackRate:{get:function getDefaultPlaybackRate(){return 1}},error:{get:function getError(){return this._state===P.ERROR?this._mediaError?this._mediaError:new v.default("unknown error occurred in media procesing"):null}},preload:{get:function getPreload(){return this.getAttribute("preload")||""},set:function setPreload(e){this.setAttribute("preload",e);}},readyState:{get:function getReadyState(){return this._stream&&this._codec&&this._codec.loadedMetadata?OGVPlayer.HAVE_ENOUGH_DATA:OGVPlayer.HAVE_NOTHING}},networkState:{get:function getNetworkState(){return this._stream?this._stream.waiting?OGVPlayer.NETWORK_LOADING:OGVPlayer.NETWORK_IDLE:this.readyState==OGVPlayer.HAVE_NOTHING?OGVPlayer.NETWORK_EMPTY:OGVPlayer.NETWORK_NO_SOURCE}},playbackRate:{get:function getPlaybackRate(){return 1},set:function setPlaybackRate(e){}},played:{get:function getPlayed(){return new T.default([[0,this.currentTime]])}},volume:{get:function getVolume(){return this._volume},set:function setVolume(e){this._volume=+e,this._audioFeeder&&(this._audioFeeder.volume=this._volume),this._fireEventAsync("volumechange");}}}),t.onframecallback=null,t.onloadstate=null,t.onprogress=null,t.onsuspend=null,t.onabort=null,t.onemptied=null,t.onstalled=null,t.onloadedmetadata=null,t.onloadeddata=null,t.oncanplay=null,t.oncanplaythrough=null,t.onplaying=null,t.onwaiting=null,t.onseeking=null,t.onseeked=null,t.onended=null,t.ondurationchange=null,t.ontimeupdate=null,t.onplay=null,t.onpause=null,t.onratechange=null,t.onresize=null,t.onvolumechange=null,t}return (0, c.default)(OGVPlayer,t),(0, s.default)(OGVPlayer,[{key:"_time",value:function _time(e){var t=o();e();var i=o()-t;return this._lastFrameDecodeTime+=i,i}},{key:"_log",value:function _log(e){var t=this._options;if(t.debug){var i=o()-this._startTime;t.debugFilter&&!e.match(t.debugFilter)||console.log("["+Math.round(10*i)/10+"ms] "+e);}}},{key:"_fireEvent",value:function _fireEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._log("fireEvent "+e);var i,r="function"==typeof Event;for(var n in r?i=new CustomEvent(e):(i=document.createEvent("Event")).initEvent(e,!1,!1),t)t.hasOwnProperty(n)&&(i[n]=t[n]);var o=this.dispatchEvent(i);!r&&"resize"===e&&this.onresize&&o&&this.onresize.call(this,i);}},{key:"_fireEventAsync",value:function _fireEventAsync(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._log("fireEventAsync "+t),e(function(){i._fireEvent(t,r);});}},{key:"_initAudioFeeder",value:function _initAudioFeeder(){var e=this,t=this._options,i={base:t.base||m.default.base,bufferSize:8192};t.audioContext&&(i.audioContext=t.audioContext),t.audioDestination&&(i.output=t.audioDestination);var r=this._audioFeeder=new _.default(i);r.init(this._audioInfo.channels,this._audioInfo.rate),r.bufferThreshold=1,r.volume=this.volume,r.muted=this.muted,r.onbufferlow=function(){e._log("onbufferlow"),e._stream&&(e._stream.buffering||e._stream.seeking)||e._pendingAudio||e._pingProcessing();},r.onstarved=function(){e._dataEnded?e._log("onstarved: appear to have reached end of audio"):(e._log("onstarved: halting audio due to starvation"),e._stopPlayback(),e._prebufferingAudio=!0),e._isProcessing()||e._pingProcessing(0);};}},{key:"_startPlayback",value:function _startPlayback(e){if(this._audioFeeder){this._audioFeeder.start();var t=this._audioFeeder.getPlaybackState();this._initialPlaybackPosition=t.playbackPosition;}else this._initialPlaybackPosition=o()/1e3;void 0!==e&&(this._initialPlaybackOffset=e),this._prebufferingAudio=!1,this._log("continuing at "+this._initialPlaybackPosition+", "+this._initialPlaybackOffset);}},{key:"_stopPlayback",value:function _stopPlayback(){this._initialPlaybackOffset=this._getPlaybackTime(),this._log("pausing at "+this._initialPlaybackOffset),this._audioFeeder&&this._audioFeeder.stop();}},{key:"_getPlaybackTime",value:function _getPlaybackTime(e){return this._prebufferingAudio||this._paused?this._initialPlaybackOffset:(this._audioFeeder?(e=e||this._audioFeeder.getPlaybackState()).playbackPosition:o()/1e3)-this._initialPlaybackPosition+this._initialPlaybackOffset}},{key:"_stopVideo",value:function _stopVideo(){this._log("STOPPING"),this._state=P.INITIAL,this._seekState=E.NOT_SEEKING,this._started=!1,this._ended=!1,this._frameEndTimestamp=0,this._audioEndTimestamp=0,this._lastFrameDecodeTime=0,this._prebufferingAudio=!1,this._actionQueue.splice(0,this._actionQueue.length),this._stream&&(this._stream.abort(),this._stream=null,this._streamEnded=!1),this._codec&&(this._codec.close(),this._codec=null,this._pendingFrame=0,this._pendingAudio=0,this._dataEnded=!1),this._videoInfo=null,this._audioInfo=null,this._audioFeeder&&(this._audioFeeder.close(),this._audioFeeder=null),this._nextProcessingTimer&&(clearTimeout(this._nextProcessingTimer),this._nextProcessingTimer=null),this._nextFrameTimer&&(clearTimeout(this._nextFrameTimer),this._nextFrameTimer=null),this._frameSink&&(this._frameSink.clear(),this._frameSink=null),this._decodedFrames&&(this._decodedFrames=[]),this._pendingFrames&&(this._pendingFrames=[]),this._initialSeekTime=0,this._initialPlaybackPosition=0,this._initialPlaybackOffset=0,this._duration=null;}},{key:"_doFrameComplete",value:function _doFrameComplete(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._startedPlaybackInDocument&&!document.body.contains(this)&&e(function(){t.stop();});var r=o(),a=r-this._lastFrameTimestamp,s=this._actualPerFrameTime-this._targetPerFrameTime;this._totalJitter+=Math.abs(s),this._playTime+=a;var u={cpuTime:this._lastFrameDecodeTime,drawingTime:this._drawingTime-this._lastFrameDrawingTime,bufferTime:this._bufferTime-this._lastFrameBufferTime,proxyTime:this._proxyTime-this._lastFrameProxyTime,demuxerTime:0,videoTime:0,audioTime:0,clockTime:this._actualPerFrameTime,late:i.dropped,dropped:i.dropped};function n(e){return Math.round(10*e)/10}this._codec&&(u.demuxerTime=this._codec.demuxerCpuTime-this._lastFrameDemuxerCpuTime,u.videoTime+=this._currentVideoCpuTime-this._lastFrameVideoCpuTime,u.audioTime+=this._codec.audioCpuTime-this._lastFrameAudioCpuTime),u.cpuTime+=u.demuxerTime,this._lastFrameDecodeTime=0,this._lastFrameTimestamp=r,this._codec?(this._lastFrameVideoCpuTime=this._currentVideoCpuTime,this._lastFrameAudioCpuTime=this._codec.audioCpuTime,this._lastFrameDemuxerCpuTime=this._codec.demuxerCpuTime):(this._lastFrameVideoCpuTime=0,this._lastFrameAudioCpuTime=0,this._lastFrameDemuxerCpuTime=0),this._lastFrameDrawingTime=this._drawingTime,this._lastFrameBufferTime=this._bufferTime,this._lastFrameProxyTime=this._proxyTime,this._log("drew frame "+i.frameEndTimestamp+": clock time "+n(a)+" (jitter "+n(s)+") cpu: "+n(u.cpuTime)+" (mux: "+n(u.demuxerTime)+" buf: "+n(u.bufferTime)+" draw: "+n(u.drawingTime)+" proxy: "+n(u.proxyTime)+") vid: "+n(u.videoTime)+" aud: "+n(u.audioTime)),this._fireEventAsync("framecallback",u),(!this._lastTimeUpdate||r-this._lastTimeUpdate>=this._timeUpdateInterval)&&(this._lastTimeUpdate=r,this._fireEventAsync("timeupdate"));}},{key:"_seekStream",value:function _seekStream(e){var t=this;this._stream.seeking&&this._stream.abort(),this._stream.buffering&&this._stream.abort(),this._streamEnded=!1,this._dataEnded=!1,this._ended=!1,this._stream.seek(e).then(function(){t._readBytesAndWait();}).catch(function(e){t._onStreamError(e);});}},{key:"_onStreamError",value:function _onStreamError(e){"AbortError"===e.name?this._log("i/o promise canceled; ignoring"):(this._log("i/o error: "+e),this._mediaError=new v.default(v.default.MEDIA_ERR_NETWORK,String(e)),this._state=P.ERROR,this._stopPlayback());}},{key:"_seek",value:function _seek(e,t){var i=this;if(this._log("requested seek to "+e+", mode "+t),this.readyState==this.HAVE_NOTHING)return this._log("not yet loaded; saving seek position for later"),void(this._initialSeekTime=e);if(this._stream&&!this._stream.seekable)throw new Error("Cannot seek a non-seekable stream");if(this._codec&&!this._codec.seekable)throw new Error("Cannot seek in a non-seekable file");var r=function prepForSeek(r){i._stream&&i._stream.buffering&&i._stream.abort(),i._stream&&i._stream.seeking&&i._stream.abort(),i._actionQueue.splice(0,i._actionQueue.length),i._stopPlayback(),i._prebufferingAudio=!1,i._audioFeeder&&i._audioFeeder.flush(),i._state=P.SEEKING,i._seekTargetTime=e,i._seekMode=t,i._codec?i._codec.flush(r):r();};r(function(){i._isProcessing()||i._pingProcessing(0);}),this._actionQueue.push(function(){r(function(){i._doSeek(e);});});}},{key:"_doSeek",value:function _doSeek(e){var t=this;this._streamEnded=!1,this._dataEnded=!1,this._ended=!1,this._state=P.SEEKING,this._seekTargetTime=e,this._lastSeekPosition=-1,this._decodedFrames=[],this._pendingFrames=[],this._pendingFrame=0,this._pendingAudio=0,this._didSeek=!1,this._codec.seekToKeypoint(e,function(i){if(i)return t._seekState=E.LINEAR_TO_TARGET,t._fireEventAsync("seeking"),t._didSeek?void 0:void t._pingProcessing();t._codec.getKeypointOffset(e,function(e){e>0?(t._seekState=E.LINEAR_TO_TARGET,t._seekStream(e)):(t._seekState=E.BISECT_TO_TARGET,t._startBisection(t._seekTargetTime)),t._fireEventAsync("seeking");});});}},{key:"_startBisection",value:function _startBisection(e){var t=this,i=Math.max(0,this._stream.length-65536);this._bisectTargetTime=e,this._seekBisector=new g.default({start:0,end:i,process:function process(e,i,r){return r!=t._lastSeekPosition&&(t._lastSeekPosition=r,t._codec.flush(function(){t._seekStream(r);}),!0)}}),this._seekBisector.start();}},{key:"_continueSeekedPlayback",value:function _continueSeekedPlayback(){var e=this;this._seekState=E.NOT_SEEKING,this._state=P.READY,this._frameEndTimestamp=this._codec.frameTimestamp,this._audioEndTimestamp=this._codec.audioTimestamp,this._codec.hasAudio?this._seekTargetTime=this._codec.audioTimestamp:this._seekTargetTime=this._codec.frameTimestamp,this._initialPlaybackOffset=this._seekTargetTime;var t=function finishedSeeking(){e._lastTimeUpdate=e._seekTargetTime,e._fireEventAsync("timeupdate"),e._fireEventAsync("seeked"),e._isProcessing()||e._pingProcessing();};if(this._codec.hasVideo&&this._codec.frameReady)return this._codec.decodeFrame(function(i){i&&(e._thumbnail&&(e.removeChild(e._thumbnail),e._thumbnail=null),e._frameSink.drawFrame(e._codec.frameBuffer)),t();}),void this._codec.sync();t();}},{key:"_doProcessLinearSeeking",value:function _doProcessLinearSeeking(){var e,t=this;if(e=this._codec.hasVideo?this._targetPerFrameTime/1e3:1/256,this._codec.hasVideo){if(this._pendingFrame)return;if(!this._codec.frameReady)return void this._codec.process(function(e){e?t._pingProcessing():t._streamEnded?(t._log("stream ended during linear seeking on video"),t._dataEnded=!0,t._continueSeekedPlayback()):t._readBytesAndWait();});if(this._seekMode===A.FAST&&this._codec.keyframeTimestamp==this._codec.frameTimestamp)return void this._continueSeekedPlayback();if(this._codec.frameTimestamp+e<this._seekTargetTime)return this._codec.decodeFrame(function(){t._pingProcessing();}),void this._codec.sync();if(!this._codec.hasAudio)return void this._continueSeekedPlayback()}if(this._codec.hasAudio){if(this._pendingAudio)return;return this._codec.audioReady?this._codec.audioTimestamp+e<this._seekTargetTime?void this._codec.decodeAudio(function(){t._pingProcessing();}):void this._continueSeekedPlayback():void this._codec.process(function(e){e?t._pingProcessing():t._streamEnded?(t._log("stream ended during linear seeking on audio"),t._dataEnded=!0,t._continueSeekedPlayback()):t._readBytesAndWait();})}}},{key:"_doProcessBisectionSeek",value:function _doProcessBisectionSeek(){var e,t,i=this;if(this._codec.hasVideo)t=this._codec.frameTimestamp,e=this._targetPerFrameTime/1e3;else{if(!this._codec.hasAudio)throw new Error("Invalid seek state; no audio or video track available");t=this._codec.audioTimestamp,e=1/256;}t<0?this._codec.process(function(e){if(e)i._pingProcessing();else if(i._streamEnded){if(i._log("stream ended during bisection seek"),!i._seekBisector.right())throw i._log("failed going back"),new Error("not sure what to do")}else i._readBytesAndWait();}):t-e/2>this._bisectTargetTime?this._seekBisector.left()||(this._log("close enough (left)"),this._seekTargetTime=t,this._continueSeekedPlayback()):t+e/2<this._bisectTargetTime?this._seekBisector.right()||(this._log("close enough (right)"),this._seekState=E.LINEAR_TO_TARGET,this._pingProcessing()):this._seekState==E.BISECT_TO_TARGET&&this._codec.hasVideo&&this._codec.keyframeTimestamp<this._codec.frameTimestamp?(this._log("finding the keypoint now"),this._seekState=E.BISECT_TO_KEYPOINT,this._startBisection(this._codec.keyframeTimestamp)):(this._log("straight seeking now"),this._seekState=E.LINEAR_TO_TARGET,this._pingProcessing());}},{key:"_setupVideo",value:function _setupVideo(){this._videoInfo.fps>0?this._targetPerFrameTime=1e3/this._videoInfo.fps:this._targetPerFrameTime=16.667,this._canvas.width=this._videoInfo.displayWidth,this._canvas.height=this._videoInfo.displayHeight,OGVPlayer.styleManager.appendRule("."+this._instanceId,{width:this._videoInfo.displayWidth+"px",height:this._videoInfo.displayHeight+"px"}),OGVPlayer.updatePositionOnResize();var e={};void 0!==this._options.webGL&&(e.webGL=this._options.webGL),this._options.forceWebGL&&(e.webGL="required"),this._frameSink=h.default.attach(this._canvas,e);}},{key:"_doProcessing",value:function _doProcessing(){if(this._didSeek&&(this._didSeek=!1),this._nextProcessingTimer=null,this._isProcessing(),this._depth>0)throw new Error("REENTRANCY FAIL: doProcessing recursing unexpectedly");var e=0;do{if(this._needProcessing=!1,this._depth++,this._doProcessingLoop(),this._depth--,this._needProcessing&&this._isProcessing())throw new Error("REENTRANCY FAIL: waiting on input or codec but asked to keep processing");++e>500&&(this._log("stuck in processing loop; breaking with timer"),this._needProcessing=0,this._pingProcessing(0));}while(this._needProcessing)}},{key:"_doProcessingLoop",value:function _doProcessingLoop(){if(this._actionQueue.length)this._actionQueue.shift()();else if(this._state==P.INITIAL)this._doProcessInitial();else if(this._state==P.SEEKING_END)this._doProcessSeekingEnd();else if(this._state==P.LOADED)this._doProcessLoaded();else if(this._state==P.PRELOAD)this._doProcessPreload();else if(this._state==P.READY)this._doProcessReady();else if(this._state==P.SEEKING)this._doProcessSeeking();else if(this._state==P.PLAYING)this._doProcessPlay();else{if(this._state!=P.ERROR)throw new Error("Unexpected OGVPlayer state "+this._state);this._doProcessError();}}},{key:"_doProcessInitial",value:function _doProcessInitial(){var e=this;if(this._codec.loadedMetadata){if(!this._codec.hasVideo&&!this._codec.hasAudio)throw new Error("No audio or video found, something is wrong");this._codec.hasAudio&&(this._audioInfo=this._codec.audioFormat),this._codec.hasVideo&&(this._videoInfo=this._codec.videoFormat,this._setupVideo()),isNaN(this._codec.duration)||(this._duration=this._codec.duration),null===this._duration&&this._stream.seekable?(this._state=P.SEEKING_END,this._lastSeenTimestamp=-1,this._codec.flush(function(){e._seekStream(Math.max(0,e._stream.length-131072));})):(this._state=P.LOADED,this._pingProcessing());}else this._codec.process(function(t){if(t)e._pingProcessing();else{if(e._streamEnded)throw new Error("end of file before headers found");e._log("reading more cause we are out of data"),e._readBytesAndWait();}});}},{key:"_doProcessSeekingEnd",value:function _doProcessSeekingEnd(){var e=this;this._codec.frameReady?(this._log("saw frame with "+this._codec.frameTimestamp),this._lastSeenTimestamp=Math.max(this._lastSeenTimestamp,this._codec.frameTimestamp),this._codec.discardFrame(function(){e._pingProcessing();})):this._codec.audioReady?(this._log("saw audio with "+this._codec.audioTimestamp),this._lastSeenTimestamp=Math.max(this._lastSeenTimestamp,this._codec.audioTimestamp),this._codec.discardAudio(function(){e._pingProcessing();})):this._codec.process(function(t){t?e._pingProcessing():e._stream.eof?(e._log("seek-duration: we are at the end: "+e._lastSeenTimestamp),e._lastSeenTimestamp>0&&(e._duration=e._lastSeenTimestamp),e._state=P.LOADED,e._codec.flush(function(){e._streamEnded=!1,e._dataEnded=!1,e._seekStream(0);})):e._readBytesAndWait();});}},{key:"_doProcessLoaded",value:function _doProcessLoaded(){this._state=P.PRELOAD,this._fireEventAsync("loadedmetadata"),this._fireEventAsync("durationchange"),this._codec.hasVideo&&this._fireEventAsync("resize"),this._pingProcessing(0);}},{key:"_doProcessPreload",value:function _doProcessPreload(){var e=this;!this._codec.frameReady&&this._codec.hasVideo||!this._codec.audioReady&&this._codec.hasAudio?this._codec.process(function(t){t?e._pingProcessing():e._streamEnded?e._ended=!0:e._readBytesAndWait();}):(this._state=P.READY,this._fireEventAsync("loadeddata"),this._pingProcessing());}},{key:"_doProcessReady",value:function _doProcessReady(){var e=this;if(this._log("initial seek to "+this._initialSeekTime),this._initialSeekTime>0){var t=this._initialSeekTime;this._initialSeekTime=0,this._log("initial seek to "+t),this._doSeek(t);}else if(this._paused)this._log("paused while in ready");else{var i=function finishStartPlaying(){e._log("finishStartPlaying"),e._state=P.PLAYING,e._lastFrameTimestamp=o(),e._codec.hasAudio&&e._audioFeeder?e._prebufferingAudio=!0:e._startPlayback(),e._pingProcessing(0),e._fireEventAsync("play"),e._fireEventAsync("playing");};!this._codec.hasAudio||this._audioFeeder||this._muted?i():(this._initAudioFeeder(),this._audioFeeder.waitUntilReady(i));}}},{key:"_doProcessSeeking",value:function _doProcessSeeking(){if(this._seekState==E.NOT_SEEKING)throw new Error("seeking in invalid state (not seeking?)");if(this._seekState==E.BISECT_TO_TARGET)this._doProcessBisectionSeek();else if(this._seekState==E.BISECT_TO_KEYPOINT)this._doProcessBisectionSeek();else{if(this._seekState!=E.LINEAR_TO_TARGET)throw new Error("Invalid seek state "+this._seekState);this._doProcessLinearSeeking();}}},{key:"_doProcessPlay",value:function _doProcessPlay(){var e=this,t=this._codec;if(this._paused)this._log("paused during playback; stopping loop");else if((!t.hasAudio||t.audioReady||this._pendingAudio||this._dataEnded)&&(!t.hasVideo||t.frameReady||this._pendingFrame||this._decodedFrames.length||this._dataEnded)){var i,r,n,o=null,a=0,s=!1,u=0;if(t.hasAudio&&this._audioFeeder?(o=this._audioFeeder.getPlaybackState(),a=this._getPlaybackTime(o),s=this._dataEnded&&0==this._audioFeeder.durationBuffered,this._prebufferingAudio&&(this._audioFeeder.durationBuffered>=2*this._audioFeeder.bufferThreshold&&(!t.hasVideo||this._decodedFrames.length>=this._framePipelineDepth)||this._dataEnded)&&(this._log("prebuffering audio done; buffered to "+this._audioFeeder.durationBuffered),this._startPlayback(a),this._prebufferingAudio=!1),o.dropped!=this._droppedAudio&&this._log("dropped "+(o.dropped-this._droppedAudio)),o.delayed!=this._delayedAudio&&this._log("delayed "+(o.delayed-this._delayedAudio)),this._droppedAudio=o.dropped,this._delayedAudio=o.delayed,(i=this._audioFeeder.durationBuffered<=2*this._audioFeeder.bufferThreshold)&&(this._codec.audioReady?this._pendingAudio>=this._audioPipelineDepth&&(this._log("audio decode disabled: "+this._pendingAudio+" packets in flight"),i=!1):i=!1)):(a=this._getPlaybackTime(),i=this._codec.audioReady&&this._audioEndTimestamp<a),this._codec.hasVideo){r=this._decodedFrames.length>0,n=this._pendingFrame+this._decodedFrames.length<this._framePipelineDepth+this._frameParallelism&&this._codec.frameReady,r&&(u=1e3*(this._decodedFrames[0].frameEndTimestamp-a),this._actualPerFrameTime=this._targetPerFrameTime-u);var d=this._targetPerFrameTime;if(this._prebufferingAudio)n&&this._log("decoding a frame during prebuffering"),r=!1;else if(r&&this._dataEnded&&s)this._log("audio timeline ended? ready to draw frame");else if(r&&-u>=d){for(var c=-1,f=0;f<this._decodedFrames.length-1;f++)this._decodedFrames[f].frameEndTimestamp<a&&(c=f-1);if(c>=0)for(;c-- >=0;){this._lateFrames++;var l=this._decodedFrames.shift();this._log("skipping already-decoded late frame at "+l.frameEndTimestamp),u=1e3*(l.frameEndTimestamp-a),this._frameEndTimestamp=l.frameEndTimestamp,this._actualPerFrameTime=this._targetPerFrameTime-u,this._framesProcessed++,l.dropped=!0,this._doFrameComplete(l);}var h=this._codec.nextKeyframeTimestamp,p=h-this._targetPerFrameTime/1e3*(this._framePipelineDepth+this._pendingFrame);if(h>=0&&h!=this._codec.frameTimestamp&&a>=p){this._log("skipping late frame at "+this._decodedFrames[0].frameEndTimestamp+" vs "+a+", expect to see keyframe at "+h);for(var _=0;_<this._decodedFrames.length;_++){var m=this._decodedFrames[_];this._lateFrames++,this._framesProcessed++,this._frameEndTimestamp=m.frameEndTimestamp,u=1e3*(m.frameEndTimestamp-a),this._actualPerFrameTime=this._targetPerFrameTime-u,m.dropped=!0,this._doFrameComplete(m);}this._decodedFrames=[];for(var g=0;g<this._pendingFrames.length;g++){var y=this._pendingFrames[g];this._lateFrames++,this._framesProcessed++,this._frameEndTimestamp=y.frameEndTimestamp,u=1e3*(y.frameEndTimestamp-a),this._actualPerFrameTime=this._targetPerFrameTime-u,y.dropped=!0,this._doFrameComplete(y);}for(this._pendingFrames=[],this._pendingFrame=0;this._codec.frameReady&&this._codec.frameTimestamp<h;){var v={frameEndTimestamp:this._codec.frameTimestamp,dropped:!0};u=1e3*(v.frameEndTimestamp-a),this._actualPerFrameTime=this._targetPerFrameTime-u,this._lateFrames++,this._codec.discardFrame(function(){}),this._framesProcessed++,this._doFrameComplete(v);}return void(this._isProcessing()||this._pingProcessing())}}else r&&u<=4||(r=!1);}if(n){this._log("play loop: ready to decode frame; thread depth: "+this._pendingFrame+", have buffered: "+this._decodedFrames.length),0==this._videoInfo.fps&&this._codec.frameTimestamp-this._frameEndTimestamp>0&&(this._targetPerFrameTime=1e3*(this._codec.frameTimestamp-this._frameEndTimestamp)),this._totalFrameTime+=this._targetPerFrameTime,this._totalFrameCount++;var b=this._frameEndTimestamp=this._codec.frameTimestamp;this._pendingFrame++,this._pendingFrames.push({frameEndTimestamp:b});var T=this._pendingFrames,k=!1,w=this._time(function(){e._codec.decodeFrame(function(t){T===e._pendingFrames?(e._log("play loop callback: decoded frame"),e._pendingFrame--,e._pendingFrames.shift(),t?e._decodedFrames.push({yCbCrBuffer:e._codec.frameBuffer,videoCpuTime:e._codec.videoCpuTime,frameEndTimestamp:b}):e._log("Bad video packet or something"),e._codec.process(function(){e._isProcessing()||e._pingProcessing(k?void 0:0);})):e._log("play loop callback after flush, discarding");});});this._pendingFrame&&(k=!0,this._proxyTime+=w,this._pingProcessing(),this._dataEnded&&this._codec.sync());}else if(i){this._log("play loop: ready for audio; depth: "+this._pendingAudio),this._pendingAudio++;var P=this._codec.audioTimestamp,E=this._time(function(){e._codec.decodeAudio(function(t){if(e._pendingAudio--,e._log("play loop callback: decoded audio"),e._audioEndTimestamp=P,t){var i=e._codec.audioBuffer;if(i&&(e._bufferTime+=e._time(function(){e._audioFeeder&&e._audioFeeder.bufferData(i);}),!e._codec.hasVideo)){e._framesProcessed++;var r={frameEndTimestamp:e._audioEndTimestamp};e._doFrameComplete(r);}}e._isProcessing()||e._pingProcessing();});});this._pendingAudio&&(this._proxyTime+=E,this._codec.audioReady?this._pingProcessing():this._doProcessPlayDemux());}else if(r){this._log("play loop: ready to draw frame"),this._nextFrameTimer&&(clearTimeout(this._nextFrameTimer),this._nextFrameTimer=null),this._thumbnail&&(this.removeChild(this._thumbnail),this._thumbnail=null);var A=this._decodedFrames.shift();this._currentVideoCpuTime=A.videoCpuTime,this._drawingTime+=this._time(function(){e._frameSink.drawFrame(A.yCbCrBuffer);}),this._framesProcessed++,this._doFrameComplete(A),this._pingProcessing();}else if(!this._decodedFrames.length||this._nextFrameTimer||this._prebufferingAudio)if(this._dataEnded&&!(this._pendingAudio||this._pendingFrame||this._decodedFrames.length)){this._log("play loop: playback reached end of data "+[this._pendingAudio,this._pendingFrame,this._decodedFrames.length]);var x=0;this._codec.hasAudio&&this._audioFeeder&&(x=1e3*this._audioFeeder.durationBuffered),x>0?(this._log("play loop: ending pending "+x+" ms"),this._pingProcessing(Math.max(0,x))):(this._log("play loop: ENDING NOW: playback time "+this._getPlaybackTime()+"; frameEndTimestamp: "+this._frameEndTimestamp),this._stopPlayback(),this._prebufferingAudio=!1,this._initialPlaybackOffset=Math.max(this._audioEndTimestamp,this._frameEndTimestamp),this._ended=!0,this._paused=!0,this._fireEventAsync("pause"),this._fireEventAsync("ended"));}else this._prebufferingAudio&&(t.hasVideo&&!t.frameReady||t.hasAudio&&!t.audioReady)?(this._log("play loop: prebuffering demuxing"),this._doProcessPlayDemux()):this._log("play loop: waiting on async/timers");else{var O=u;this._log("play loop: setting a timer for drawing "+O),this._nextFrameTimer=setTimeout(function(){e._nextFrameTimer=null,e._pingProcessing();},O);}}else this._log("play loop: demuxing"),this._doProcessPlayDemux();}},{key:"_doProcessPlayDemux",value:function _doProcessPlayDemux(){var e=this,t=this._codec.frameReady,i=this._codec.audioReady;this._codec.process(function(r){e._codec.frameReady&&!t||e._codec.audioReady&&!i?(e._log("demuxer has packets"),e._pingProcessing()):r?(e._log("demuxer processing to find more packets"),e._pingProcessing()):(e._log("demuxer ran out of data"),e._streamEnded?(e._log("demuxer reached end of data stream"),e._dataEnded=!0,e._pingProcessing()):(e._log("demuxer loading more data"),e._readBytesAndWait()));});}},{key:"_doProcessError",value:function _doProcessError(){}},{key:"_isProcessing",value:function _isProcessing(){return this._stream&&(this._stream.buffering||this._stream.seeking)||this._codec&&this._codec.processing}},{key:"_readBytesAndWait",value:function _readBytesAndWait(){var e=this;if(this._stream.buffering||this._stream.seeking)this._log("readBytesAndWait during i/o");else{this._stream.read(32768).then(function(t){e._log("got input "+[t.byteLength]),t.byteLength&&e._actionQueue.push(function(){e._codec.receiveInput(t,function(){e._pingProcessing();});}),e._stream.eof&&(e._log("stream is at end!"),e._streamEnded=!0),e._isProcessing()||e._pingProcessing();}).catch(function(t){e._onStreamError(t);});}}},{key:"_pingProcessing",value:function _pingProcessing(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(this._stream&&this._stream.waiting)this._log("waiting on input");else{this._nextProcessingTimer&&(this._log("canceling old processing timer"),clearTimeout(this._nextProcessingTimer),this._nextProcessingTimer=null);t>-1/256?this._nextProcessingTimer=setTimeout(function(){e._pingProcessing();},t):this._depth?this._needProcessing=!0:this._doProcessing();}}},{key:"_startProcessingVideo",value:function _startProcessingVideo(e){var t=this;if(!this._started&&!this._codec){this._framesProcessed=0,this._bufferTime=0,this._drawingTime=0,this._proxyTime=0,this._started=!0,this._ended=!1;var i={base:this._options.base,worker:this._enableWorker,threading:this._enableThreading,wasm:this._enableWASM};this._options.memoryLimit&&!this._enableWASM&&(i.memoryLimit=this._options.memoryLimit),this._detectedType&&(i.type=this._detectedType),this._codec=new k.default(i),this._lastVideoCpuTime=0,this._lastAudioCpuTime=0,this._lastDemuxerCpuTime=0,this._lastBufferTime=0,this._lastDrawingTime=0,this._lastProxyTime=0,this._lastFrameVideoCpuTime=0,this._lastFrameAudioCpuTime=0,this._lastFrameDemuxerCpuTime=0,this._lastFrameBufferTime=0,this._lastFrameProxyTime=0,this._lastFrameDrawingTime=0,this._currentVideoCpuTime=0,this._codec.onseek=function(e){t._didSeek=!0,t._stream&&t._seekStream(e);},this._codec.init(function(){t._codec.receiveInput(e,function(){t._readBytesAndWait();});});}}},{key:"_loadCodec",value:function _loadCodec(e){var t=this;this._stream.read(1024).then(function(i){var r=new Uint8Array(i);r.length>4&&r[0]=="O".charCodeAt(0)&&r[1]=="g".charCodeAt(0)&&r[2]=="g".charCodeAt(0)&&r[3]=="S".charCodeAt(0)?t._detectedType="video/ogg":r.length>4&&26==r[0]&&69==r[1]&&223==r[2]&&163==r[3]?t._detectedType="video/webm":t._detectedType="video/ogg",e(i);});}},{key:"_prepForLoad",value:function _prepForLoad(e){var t=this;this._stopVideo();this._currentSrc="",this._loading=!0,this._actionQueue.push(function(){e&&"none"===t.preload?t._loading=!1:function doLoad(){t._options.stream?t._stream=t._options.stream:t._stream=new p.default({url:t.src,cacheSize:16777216,progressive:!1}),t._stream.load().then(function(){t._loading=!1,t._currentSrc=t.src,t._byteLength=t._stream.seekable?t._stream.length:0;var e=t._stream.headers["x-content-duration"];"string"==typeof e&&(t._duration=parseFloat(e)),t._loadCodec(function(e){t._startProcessingVideo(e);});}).catch(function(e){t._onStreamError(e);});}();}),this._pingProcessing(0);}},{key:"load",value:function load(){this._prepForLoad();}},{key:"canPlayType",value:function canPlayType(e){var t=new b.default(e);function checkTypes(e){if(t.codecs){var i=0,r=0;return t.codecs.forEach(function(t){e.indexOf(t)>=0?i++:r++;}),0===i?"":r>0?"":"probably"}return "maybe"}return "ogg"!==t.minor||"audio"!==t.major&&"video"!==t.major&&"application"!==t.major?"webm"!==t.minor||"audio"!==t.major&&"video"!==t.major?"":checkTypes(["vorbis","opus","vp8","vp9"]):checkTypes(["vorbis","opus","theora"])}},{key:"play",value:function play(){this._muted||this._options.audioContext||OGVPlayer.initSharedAudioContext(),this._paused&&(this._startedPlaybackInDocument=document.body.contains(this),this._paused=!1,this._state==P.SEEKING||(this._started&&this._codec&&this._codec.loadedMetadata?(this._ended&&this._stream&&this._byteLength?(this._log(".play() starting over after end"),this._seek(0)):this._log(".play() while already started"),this._state=P.READY,this._isProcessing()||this._pingProcessing()):this._loading?this._log(".play() while loading"):(this._log(".play() before started"),this._stream||this.load())));}},{key:"getPlaybackStats",value:function getPlaybackStats(){return {targetPerFrameTime:this._targetPerFrameTime,framesProcessed:this._framesProcessed,videoBytes:this._codec?this._codec.videoBytes:0,audioBytes:this._codec?this._codec.audioBytes:0,playTime:this._playTime,demuxingTime:this._codec?this._codec.demuxerCpuTime-this._lastDemuxerCpuTime:0,videoDecodingTime:this._codec?this._codec.videoCpuTime-this._lastVideoCpuTime:0,audioDecodingTime:this._codec?this._codec.audioCpuTime-this._lastAudioCpuTime:0,bufferTime:this._bufferTime-this._lastBufferTime,drawingTime:this._drawingTime-this._lastDrawingTime,proxyTime:this._proxyTime-this._lastProxyTime,droppedAudio:this._droppedAudio,delayedAudio:this._delayedAudio,jitter:this._totalJitter/this._framesProcessed,lateFrames:this._lateFrames}}},{key:"resetPlaybackStats",value:function resetPlaybackStats(){this._framesProcessed=0,this._playTime=0,this._codec&&(this._lastDemuxerCpuTime=this._codec.demuxerCpuTime,this._lastVideoCpuTime=this._codec.videoCpuTime,this._lastAudioCpuTime=this._codec.audioCpuTime,this._codec.videoBytes=0,this._codec.audioBytes=0),this._lastBufferTime=this._bufferTime,this._lastDrawingTime=this._drawingTime,this._lastProxyTime=this._proxyTime,this._totalJitter=0,this._totalFrameTime=0,this._totalFrameCount=0;}},{key:"getVideoFrameSink",value:function getVideoFrameSink(){return this._frameSink}},{key:"getCanvas",value:function getCanvas(){return this._canvas}},{key:"pause",value:function pause(){this._paused||(this._nextProcessingTimer&&(clearTimeout(this._nextProcessingTimer),this._nextProcessingTimer=null),this._stopPlayback(),this._prebufferingAudio=!1,this._paused=!0,this._fireEvent("pause"));}},{key:"stop",value:function stop(){this._stopVideo(),this._paused=!0;}},{key:"fastSeek",value:function fastSeek(e){this._seek(+e,A.FAST);}}],[{key:"initSharedAudioContext",value:function initSharedAudioContext(){_.default.initSharedAudioContext();}}]),OGVPlayer}(OGVJSElement);if((0, y.default)(x,w),x.instanceCount=0,x.styleManager=new function StyleManager(){var e=document.createElement("style");e.type="text/css",e.textContent="ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); ",document.head.appendChild(e);var t=e.sheet;this.appendRule=function(e,i){var r=[];for(var n in i)i.hasOwnProperty(n)&&r.push(n+":"+i[n]);var o=e+"{"+r.join(";")+"}";t.insertRule(o,t.cssRules.length-1);};},x.supportsObjectFit="string"==typeof document.createElement("canvas").style.objectFit,x.supportsObjectFit&&navigator.userAgent.match(/iPhone|iPad|iPod Touch/)&&(x.supportsObjectFit=!1),x.supportsObjectFit&&navigator.userAgent.match(/Edge/)&&(x.supportsObjectFit=!1),x.supportsObjectFit)x.updatePositionOnResize=function(){};else{x.updatePositionOnResize=function(){function fixup(e,t,i){var r=e.offsetParent||e.parentNode,n=t/i;if(n>r.offsetWidth/r.offsetHeight){var o=r.offsetWidth/n,a=(r.offsetHeight-o)/2;e.style.width="100%",e.style.height=o+"px",e.style.marginLeft=0,e.style.marginRight=0,e.style.marginTop=a+"px",e.style.marginBottom=a+"px";}else{var s=r.offsetHeight*n,u=(r.offsetWidth-s)/2;e.style.width=s+"px",e.style.height="100%",e.style.marginLeft=u+"px",e.style.marginRight=u+"px",e.style.marginTop=0,e.style.marginBottom=0;}}function queryOver(e,t){var i=document.querySelectorAll(e);Array.prototype.slice.call(i).forEach(t);}queryOver("ogvjs > canvas",function(e){fixup(e,e.width,e.height);}),queryOver("ogvjs > img",function(e){fixup(e,e.naturalWidth,e.naturalHeight);});};var O=function fullResizeVideo(){e(x.updatePositionOnResize);};window.addEventListener("resize",x.updatePositionOnResize),window.addEventListener("orientationchange",x.updatePositionOnResize),document.addEventListener("fullscreenchange",O),document.addEventListener("mozfullscreenchange",O),document.addEventListener("webkitfullscreenchange",O),document.addEventListener("MSFullscreenChange",O);}var S=x;t.default=S;}).call(this,i(32).setImmediate);},function(e,t,i){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function Timeout(e,t){this._id=e,this._clearFn=t;}t.setTimeout=function(){return new Timeout(n.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new Timeout(n.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close();},Timeout.prototype.unref=Timeout.prototype.ref=function(){},Timeout.prototype.close=function(){this._clearFn.call(r,this._id);},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t;},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1;},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function onTimeout(){e._onTimeout&&e._onTimeout();},t));},i(33),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate;}).call(this,i(7));},function(e,t,i){(function(e,t){!function(e,i){if(!e.setImmediate){var r,n=1,o={},a=!1,s=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?function installNextTickImplementation(){r=function(e){t.nextTick(function(){runIfPresent(e);});};}():!function canUsePostMessage(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1;},e.postMessage("","*"),e.onmessage=i,t}}()?e.MessageChannel?function installMessageChannelImplementation(){var e=new MessageChannel;e.port1.onmessage=function(e){runIfPresent(e.data);},r=function(t){e.port2.postMessage(t);};}():s&&"onreadystatechange"in s.createElement("script")?function installReadyStateChangeImplementation(){var e=s.documentElement;r=function(t){var i=s.createElement("script");i.onreadystatechange=function(){runIfPresent(t),i.onreadystatechange=null,e.removeChild(i),i=null;},e.appendChild(i);};}():function installSetTimeoutImplementation(){r=function(e){setTimeout(runIfPresent,0,e);};}():function installPostMessageImplementation(){var t="setImmediate$"+Math.random()+"$",i=function(i){i.source===e&&"string"==typeof i.data&&0===i.data.indexOf(t)&&runIfPresent(+i.data.slice(t.length));};e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),r=function(i){e.postMessage(t+i,"*");};}(),u.setImmediate=function setImmediate(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var a={callback:e,args:t};return o[n]=a,r(n),n++},u.clearImmediate=clearImmediate;}function clearImmediate(e){delete o[e];}function runIfPresent(e){if(a)setTimeout(runIfPresent,0,e);else{var t=o[e];if(t){a=!0;try{!function run(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(i,r);}}(t);}finally{clearImmediate(e),a=!1;}}}}}("undefined"==typeof self?void 0===e?this:e:self);}).call(this,i(7),i(11));},function(e,t,i){!function(){var t=i(9),r=i(35),n=i(38),o={FrameSink:t,SoftwareFrameSink:r,WebGLFrameSink:n,attach:function(e,t){return ("webGL"in(t=t||{})?t.webGL:n.isAvailable())?new n(e,t):new r(e,t)}};e.exports=o;}();},function(e,t,i){!function(){var t=i(9),r=i(36);function SoftwareFrameSink(e){var t=e.getContext("2d"),i=null,n=null,o=null;return this.drawFrame=function drawFrame(a){var s=a.format;e.width===s.displayWidth&&e.height===s.displayHeight||(e.width=s.displayWidth,e.height=s.displayHeight),null!==i&&i.width==s.width&&i.height==s.height||function initImageData(e,r){for(var n=(i=t.createImageData(e,r)).data,o=e*r*4,a=0;a<o;a+=4)n[a+3]=255;}(s.width,s.height),r.convertYCbCr(a,i.data);var u,d=s.cropWidth!=s.displayWidth||s.cropHeight!=s.displayHeight;d?(n||function initResampleCanvas(e,t){(n=document.createElement("canvas")).width=e,n.height=t,o=n.getContext("2d");}(s.cropWidth,s.cropHeight),u=o):u=t,u.putImageData(i,-s.cropLeft,-s.cropTop,s.cropLeft,s.cropTop,s.cropWidth,s.cropHeight),d&&t.drawImage(n,0,0,s.displayWidth,s.displayHeight);},this.clear=function(){t.clearRect(0,0,e.width,e.height);},this}SoftwareFrameSink.prototype=Object.create(t.prototype),e.exports=SoftwareFrameSink;}();},function(e,t,i){!function(){var t=i(37);
  /**
  	 * Basic YCbCr->RGB conversion
  	 *
  	 * @author Brion Vibber <brion@pobox.com>
  	 * @copyright 2014-2019
  	 * @license MIT-style
  	 *
  	 * @param {YUVFrame} buffer - input frame buffer
  	 * @param {Uint8ClampedArray} output - array to draw RGBA into
  	 * Assumes that the output array already has alpha channel set to opaque.
  	 */e.exports={convertYCbCr:function convertYCbCr(e,i){var r=0|e.format.width,n=0|e.format.height,o=0|t(e.format.width/e.format.chromaWidth),a=0|t(e.format.height/e.format.chromaHeight),s=e.y.bytes,u=e.u.bytes,d=e.v.bytes,c=0|e.y.stride,f=0|e.u.stride,l=0|e.v.stride,h=r<<2,p=0,_=0,m=0,g=0,y=0,v=0,b=0,T=0,k=0,w=0,P=0,E=0,A=0,x=0,O=0,S=0,R=0,F=0;if(1==o&&1==a)for(b=0,T=h,F=0,S=0;S<n;S+=2){for(m=(_=S*c|0)+c|0,g=F*f|0,y=F*l|0,O=0;O<r;O+=2)k=0|u[g++],E=(409*(w=0|d[y++])|0)-57088|0,A=(100*k|0)+(208*w|0)-34816|0,x=(516*k|0)-70912|0,P=298*s[_++]|0,i[b]=P+E>>8,i[b+1]=P-A>>8,i[b+2]=P+x>>8,b+=4,P=298*s[_++]|0,i[b]=P+E>>8,i[b+1]=P-A>>8,i[b+2]=P+x>>8,b+=4,P=298*s[m++]|0,i[T]=P+E>>8,i[T+1]=P-A>>8,i[T+2]=P+x>>8,T+=4,P=298*s[m++]|0,i[T]=P+E>>8,i[T+1]=P-A>>8,i[T+2]=P+x>>8,T+=4;b+=h,T+=h,F++;}else for(v=0,S=0;S<n;S++)for(R=0,p=S*c|0,g=(F=S>>a)*f|0,y=F*l|0,O=0;O<r;O++)k=0|u[g+(R=O>>o)],E=(409*(w=0|d[y+R])|0)-57088|0,A=(100*k|0)+(208*w|0)-34816|0,x=(516*k|0)-70912|0,P=298*s[p++]|0,i[v]=P+E>>8,i[v+1]=P-A>>8,i[v+2]=P+x>>8,v+=4;}};}();},function(e,t){!function(){/**
     * Convert a ratio into a bit-shift count; for instance a ratio of 2
     * becomes a bit-shift of 1, while a ratio of 1 is a bit-shift of 0.
     *
     * @author Brion Vibber <brion@pobox.com>
     * @copyright 2016
     * @license MIT-style
     *
     * @param {number} ratio - the integer ratio to convert.
     * @returns {number} - number of bits to shift to multiply/divide by the ratio.
     * @throws exception if given a non-power-of-two
     */e.exports=function depower(e){for(var t=0,i=e>>1;0!=i;)i>>=1,t++;if(e!==1<<t)throw"chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got "+e;return t};}();},function(e,t,i){!function(){var t=i(9),r=i(39);function WebGLFrameSink(e){var t,i,n=this,o=WebGLFrameSink.contextForCanvas(e);if(null===o)throw new Error("WebGL unavailable");function compileShader(e,t){var i=o.createShader(e);if(o.shaderSource(i,t),o.compileShader(i),!o.getShaderParameter(i,o.COMPILE_STATUS)){var r=o.getShaderInfoLog(i);throw o.deleteShader(i),new Error("GL shader compilation for "+e+" failed: "+r)}return i}var a,s,u,d,c,f,l,h,p,_,m=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g={},y={},v={};function createOrReuseTexture(e){return g[e]||(g[e]=o.createTexture()),g[e]}function uploadTexture(e,t,i,r){var n=createOrReuseTexture(e);if(o.activeTexture(o.TEXTURE0),WebGLFrameSink.stripe){var a=!g[e+"_temp"],s=createOrReuseTexture(e+"_temp");o.bindTexture(o.TEXTURE_2D,s),a?(o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,t/4,i,0,o.RGBA,o.UNSIGNED_BYTE,r)):o.texSubImage2D(o.TEXTURE_2D,0,0,0,t/4,i,o.RGBA,o.UNSIGNED_BYTE,r);var u=g[e+"_stripe"],d=!u;d&&(u=createOrReuseTexture(e+"_stripe")),o.bindTexture(o.TEXTURE_2D,u),d&&(o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,t,1,0,o.RGBA,o.UNSIGNED_BYTE,function buildStripe(e){if(v[e])return v[e];for(var t=e,i=new Uint32Array(t),r=0;r<t;r+=4)i[r]=255,i[r+1]=65280,i[r+2]=16711680,i[r+3]=4278190080;return v[e]=new Uint8Array(i.buffer)}(t)));}else o.bindTexture(o.TEXTURE_2D,n),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texImage2D(o.TEXTURE_2D,0,o.LUMINANCE,t,i,0,o.LUMINANCE,o.UNSIGNED_BYTE,r);}function unpackTexture(e,t,r){var n=g[e];o.useProgram(i);var l=y[e];l||(o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,n),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,t,r,0,o.RGBA,o.UNSIGNED_BYTE,null),l=y[e]=o.createFramebuffer()),o.bindFramebuffer(o.FRAMEBUFFER,l),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,n,0);var h=g[e+"_temp"];o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,h),o.uniform1i(f,1);var p=g[e+"_stripe"];o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,p),o.uniform1i(c,2),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(s),o.vertexAttribPointer(s,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,u),o.enableVertexAttribArray(d),o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0),o.viewport(0,0,t,r),o.drawArrays(o.TRIANGLES,0,m.length/2),o.bindFramebuffer(o.FRAMEBUFFER,null);}function attachTexture(e,i,r){o.activeTexture(i),o.bindTexture(o.TEXTURE_2D,g[e]),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.uniform1i(o.getUniformLocation(t,e),r);}function initProgram(e,t){var i=compileShader(o.VERTEX_SHADER,e),r=compileShader(o.FRAGMENT_SHADER,t),n=o.createProgram();if(o.attachShader(n,i),o.attachShader(n,r),o.linkProgram(n),!o.getProgramParameter(n,o.LINK_STATUS)){var a=o.getProgramInfoLog(n);throw o.deleteProgram(n),new Error("GL program linking failed: "+a)}return n}return n.drawFrame=function(g){var y=g.format,v=!t||e.width!==y.displayWidth||e.height!==y.displayHeight;if(v&&(e.width=y.displayWidth,e.height=y.displayHeight,n.clear()),t||function init(){if(WebGLFrameSink.stripe){i=initProgram(r.vertexStripe,r.fragmentStripe),o.getAttribLocation(i,"aPosition"),u=o.createBuffer();var e=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]);o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW),d=o.getAttribLocation(i,"aTexturePosition"),c=o.getUniformLocation(i,"uStripe"),f=o.getUniformLocation(i,"uTexture");}t=initProgram(r.vertex,r.fragment),a=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,m,o.STATIC_DRAW),s=o.getAttribLocation(t,"aPosition"),l=o.createBuffer(),h=o.getAttribLocation(t,"aLumaPosition"),p=o.createBuffer(),_=o.getAttribLocation(t,"aChromaPosition");}(),v){var b=function(e,t,i){var r=y.cropLeft/i,n=(y.cropLeft+y.cropWidth)/i,a=(y.cropTop+y.cropHeight)/y.height,s=y.cropTop/y.height,u=new Float32Array([r,a,n,a,r,s,r,s,n,a,n,s]);o.bindBuffer(o.ARRAY_BUFFER,e),o.bufferData(o.ARRAY_BUFFER,u,o.STATIC_DRAW);};b(l,0,g.y.stride),b(p,0,g.u.stride*y.width/y.chromaWidth);}uploadTexture("uTextureY",g.y.stride,y.height,g.y.bytes),uploadTexture("uTextureCb",g.u.stride,y.chromaHeight,g.u.bytes),uploadTexture("uTextureCr",g.v.stride,y.chromaHeight,g.v.bytes),WebGLFrameSink.stripe&&(unpackTexture("uTextureY",g.y.stride,y.height),unpackTexture("uTextureCb",g.u.stride,y.chromaHeight),unpackTexture("uTextureCr",g.v.stride,y.chromaHeight)),o.useProgram(t),o.viewport(0,0,e.width,e.height),attachTexture("uTextureY",o.TEXTURE0,0),attachTexture("uTextureCb",o.TEXTURE1,1),attachTexture("uTextureCr",o.TEXTURE2,2),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(s),o.vertexAttribPointer(s,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(h),o.vertexAttribPointer(h,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,p),o.enableVertexAttribArray(_),o.vertexAttribPointer(_,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,m.length/2);},n.clear=function(){o.viewport(0,0,e.width,e.height),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT);},n.clear(),n}WebGLFrameSink.stripe=-1!==navigator.userAgent.indexOf("Windows"),WebGLFrameSink.contextForCanvas=function(e){var t={alpha:!1,depth:!1,stencil:!1,antialias:!1,preferLowPowerToHighPerformance:!0,failIfMajorPerformanceCaveat:!0};return e.getContext("webgl",t)||e.getContext("experimental-webgl",t)},WebGLFrameSink.isAvailable=function(){var e,t=document.createElement("canvas");t.width=1,t.height=1;try{e=WebGLFrameSink.contextForCanvas(t);}catch(e){return !1}if(e){var i=e.TEXTURE0,r=e.createTexture(),n=new Uint8Array(16),o=WebGLFrameSink.stripe?1:4,a=WebGLFrameSink.stripe?e.RGBA:e.LUMINANCE,s=WebGLFrameSink.stripe?e.NEAREST:e.LINEAR;return e.activeTexture(i),e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s),e.texImage2D(e.TEXTURE_2D,0,a,o,4,0,a,e.UNSIGNED_BYTE,n),!e.getError()}return !1},WebGLFrameSink.prototype=Object.create(t.prototype),e.exports=WebGLFrameSink;}();},function(e,t){e.exports={vertex:"precision lowp float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",fragment:"// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision lowp float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as LUMINANCE textures.\n   float fY = texture2D(uTextureY, vLumaPosition).x;\n   float fCb = texture2D(uTextureCb, vChromaPosition).x;\n   float fCr = texture2D(uTextureCr, vChromaPosition).x;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",vertexStripe:"precision lowp float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",fragmentStripe:"// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision lowp float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(fLuminance, fLuminance, fLuminance, 1);\n}\n"};},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();i(17);var n=i(41),o=i(44),a=function(){function StreamFile(e){var t=e.url,i=void 0===t?"":t,r=e.chunkSize,o=void 0===r?1048576:r,a=e.cacheSize,s=void 0===a?0:a,u=e.progressive,d=void 0===u||u;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,StreamFile),this.length=-1,this.loaded=!1,this.loading=!1,this.seekable=!1,this.buffering=!1,this.seeking=!1,this.progressive=d,Object.defineProperties(this,{offset:{get:function get(){return this._cache.readOffset}},eof:{get:function get(){return this.length===this._cache.readOffset}}}),this.url=i,this.headers={},this._cache=new n({cacheSize:s}),this._backend=null,this._cachever=0,this._chunkSize=o;}return r(StreamFile,[{key:"load",value:function load(){var e=this;return new Promise(function(t,i){if(e.loading)throw new Error("cannot load when loading");if(e.loaded)throw new Error("cannot load when loaded");e.loading=!0,e._openBackend().then(function(i){e.seekable=i.seekable,e.headers=i.headers,e.length=i.length,e.loaded=!0,e.loading=!1,t();}).catch(function(t){"AbortError"!==t.name&&(e.loading=!1),i(t);});})}},{key:"_openBackend",value:function _openBackend(){var e=this;return new Promise(function(t,i){if(e._backend)t(e._backend);else if(e.eof)i(new Error("cannot open at end of file"));else{var r=e._cache,n=e._chunkSize,a=r.bytesReadable(n),s=r.readOffset+a;if(r.seekWrite(s),e.length>=0&&s>=e.length)return void t(null);var u=e._clampToLength(r.writeOffset+r.bytesWritable(n))-r.writeOffset;0===u?t(null):(d=e._backend=new o({url:e.url,offset:e._cache.writeOffset,length:u,cachever:e._cachever,progressive:e.progressive}),c=null,f=function checkOpen(){d!==e._backend?(c(),i(new Error("invalid state"))):(d.on("buffer",function(t){d===e._backend&&e._cache.write(t);}),d.on("done",function(){d===e._backend&&(-1===e.length&&(e.length=e._backend.offset+e._backend.bytesRead),e._backend=null);}),t(d));},l=function checkError(t){d!==e._backend?i(new Error("invalid state")):(e._backend=null,i(t));},c=function oncomplete(){d.off("open",f),d.off("error",l);},d.on("open",f),d.on("error",l),d.on("cachever",function(){e._cachever++;}),d.load());}var d,c,f,l;})}},{key:"_readAhead",value:function _readAhead(){var e=this;return new Promise(function(t,i){e._backend||e.eof?t():e._openBackend().then(function(){t();}).catch(function(e){i(e);});})}},{key:"seek",value:function seek(e){var t=this;return new Promise(function(i,r){if(!t.loaded||t.buffering||t.seeking)throw new Error("invalid state");if(e!==(0|e)||e<0)throw new Error("invalid input");if(t.length>=0&&e>t.length)throw new Error("seek past end of file");if(!t.seekable)throw new Error("seek on non-seekable stream");t._backend&&t.abort(),t._cache.seekRead(e),t._cache.seekWrite(e),t._readAhead().then(i).catch(r);})}},{key:"read",value:function read(e){var t=this;return this.buffer(e).then(function(e){return t.readSync(e)})}},{key:"readSync",value:function readSync(e){var t=this.bytesAvailable(e),i=new Uint8Array(t);if(this.readBytes(i)!==t)throw new Error("failed to read expected data");return i.buffer}},{key:"readBytes",value:function readBytes(e){if(!this.loaded||this.buffering||this.seeking)throw new Error("invalid state");if(!(e instanceof Uint8Array))throw new Error("invalid input");var t=this._cache.readBytes(e);return this._readAhead(),t}},{key:"buffer",value:function buffer(e){var t=this;return new Promise(function(i,r){if(!t.loaded||t.buffering||t.seeking)throw new Error("invalid state");if(e!==(0|e)||e<0)throw new Error("invalid input");var n=t._clampToLength(t.offset+e),o=n-t.offset,a=t.bytesAvailable(o);a>=o?i(a):(t.buffering=!0,t._openBackend().then(function(i){return i?i.bufferToOffset(n).then(function(){return t.buffering=!1,t.buffer(e)}):Promise.resolve(a)}).then(function(e){t.buffering=!1,i(e);}).catch(function(e){"AbortError"!==e.name&&(t.buffering=!1),r(e);}));})}},{key:"bytesAvailable",value:function bytesAvailable(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0;return this._cache.bytesReadable(e)}},{key:"abort",value:function abort(){this.loading&&(this.loading=!1),this.buffering&&(this.buffering=!1),this.seeking&&(this.seeking=!1),this._backend&&(this._backend.abort(),this._backend=null);}},{key:"getBufferedRanges",value:function getBufferedRanges(){return this._cache.ranges()}},{key:"_clampToLength",value:function _clampToLength(e){return this.length<0?e:Math.min(this.length,e)}}]),StreamFile}();e.exports=a;},function(e,t,i){e.exports=i(42);},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=i(43),o=function(){function CachePool(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).cacheSize,t=void 0===e?0:e;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CachePool);var i=new n({eof:!0});this.head=i,this.tail=i,this.readOffset=0,this.readCursor=i,this.writeOffset=0,this.writeCursor=i,this.cacheSize=t;}return r(CachePool,[{key:"bytesReadable",value:function bytesReadable(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,t=this.readOffset,i=this.readCursor.last(function(i){return !i.empty&&i.start<=t+e});return i?Math.min(e,i.end-t):0}},{key:"bytesWritable",value:function bytesWritable(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,t=this.writeOffset,i=this.writeCursor;if(i.eof)return e;var r=i.last(function(i){return i.empty&&i.start<=t+e});return r?Math.min(e,r.end-t):0}},{key:"seekRead",value:function seekRead(e){var t=this.head.first(function(t){return t.contains(e)});if(!t)throw new Error("read seek out of range");this.readOffset=e,this.readCursor=t;}},{key:"seekWrite",value:function seekWrite(e){var t=this.head.first(function(t){return t.contains(e)});if(!t)throw new Error("write seek out of range");this.writeOffset=e,this.writeCursor=t;}},{key:"readBytes",value:function readBytes(e){for(var t=e.byteLength,i=this.bytesReadable(t),r=this.readOffset,n=r+i,o=r,a=this.readCursor;a&&!a.empty&&!(a.start>=n);a=a.next){var s=Math.min(n,a.end),u=e.subarray(o-r,s-r);a.readBytes(u,o,s),o=s;}return this.readOffset=o,this.readCursor=this.readCursor.first(function(e){return e.contains(o)}),i}},{key:"write",value:function write(e){var t=this.bufferItem(e),i=this.writeCursor;if(!i.empty)throw new Error("write cursor not empty");if(!i.contains(t.end)&&i.end!==t.end)throw new Error("write cursor too small");i.start<t.start&&(this.split(i,t.start),i=this.writeCursor),(t.end<i.end||i.eof)&&(this.split(i,t.end),i=this.writeCursor),this.splice(i,i,t,t),this.writeOffset=t.end,this.writeCursor=t.next,this.gc();}},{key:"bufferItem",value:function bufferItem(e){if(e instanceof ArrayBuffer)return new n({start:this.writeOffset,end:this.writeOffset+e.byteLength,buffer:e});if("string"==typeof e)return new n({start:this.writeOffset,end:this.writeOffset+e.length,string:e});throw new Error("invalid input to write")}},{key:"split",value:function split(e,t){var i=e.split(t);this.splice(e,e,i[0],i[1]);}},{key:"ranges",value:function ranges(){for(var ranges=[],e=this.head;e;e=e.next)if(!e.empty){var t=e;e=e.last(function(e){return !e.empty}),ranges.push([t.start,e.end]);}return ranges}},{key:"gc",value:function gc(){for(var e=0,t=[],i=this.head;i;i=i.next)i.empty||(e+=i.length,(i.end<this.readOffset||i.start>this.readOffset+this.chunkSize)&&t.push(i));if(e>this.cacheSize){t.sort(function(e,t){return e.timestamp-t.timestamp});for(var r=0;r<t.length;r++){var n=t[r];if(e<=this.cacheSize)break;this.remove(n),e-=n.length;}}}},{key:"remove",value:function remove(e){var t=new n({start:e.start,end:e.end});this.splice(e,e,t,t),(e=t).prev&&e.prev.empty&&(e=this.consolidate(e.prev)),e.next&&e.next.empty&&!e.next.eof&&(e=this.consolidate(e)),0===e.start&&(this.head=e);}},{key:"consolidate",value:function consolidate(e){var t=e.last(function(e){return e.empty&&!e.eof}),i=new n({start:e.start,end:t.end});return this.splice(e,t,i,i),i}},{key:"splice",value:function splice(e,t,i,r){var n=this;if(e.start!==i.start)throw new Error("invalid splice head");if(!(t.end===r.end||t.eof&&r.eof))throw new Error("invalid splice tail");var o=e.prev,a=t.next;e.prev=null,t.next=null,o&&(o.next=i,i.prev=o),a&&(a.prev=r,r.next=a),e===this.head&&(this.head=i),t===this.tail&&(this.tail=r),this.readCursor=this.head.first(function(e){return e.contains(n.readOffset)}),this.writeCursor=this.head.first(function(e){return e.contains(n.writeOffset)});}},{key:"eof",get:function get(){return this.readCursor.eof}}]),CachePool}();e.exports=o;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=function(){function CacheItem(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buffer,i=void 0===t?void 0:t,r=e.string,n=void 0===r?void 0:r,o=e.start,a=void 0===o?0:o,s=e.end,u=void 0===s?a+(i?i.byteLength:n?n.length:0):s,d=e.prev,c=void 0===d?null:d,f=e.next,l=void 0===f?null:f,h=e.eof,p=void 0!==h&&h,_=e.empty,m=void 0===_?!(i||n):_,g=e.timestamp,y=void 0===g?Date.now():g;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CacheItem),this.start=a,this.end=u,this.prev=c,this.next=l,this.eof=p,this.empty=m,this.timestamp=y,this.buffer=i,this.string=n,Object.defineProperty(this,"length",{get:function get(){return this.end-this.start}});}return r(CacheItem,[{key:"contains",value:function contains(e){return e>=this.start&&(e<this.end||this.eof)}},{key:"readBytes",value:function readBytes(e,t,i){var r=t-this.start,n=i-t;if(this.buffer){var o=new Uint8Array(this.buffer,r,n);e.set(o);}else{if(!this.string)throw new Error("invalid state");for(var a=this.string,s=0;s<n;s++)e[s]=a.charCodeAt(r+s);}this.timestamp=Date.now();}},{key:"split",value:function split(e){if(!this.empty||!this.contains(e))throw new Error("invalid split");var t=new CacheItem({start:this.start,end:e}),i=new CacheItem({start:e,end:this.eof?e:this.end,eof:this.eof});return t.next=i,i.prev=t,[t,i]}},{key:"first",value:function first(e){for(var t=this;t;t=t.next)if(e(t))return t;return null}},{key:"last",value:function last(e){for(var last=null,t=this;t&&e(t);t=t.next)last=t;return last}}]),CacheItem}();e.exports=n;},function(e,t,i){var r=i(45),n=i(46),o=i(47),a=i(48);var s=null;e.exports=function instantiate(e){if(!1===e.progressive)return new a(e);if(s||(s=function autoselect(){return r.supported()?r:o.supported()?o:n.supported()?n:null}()),!s)throw new Error("No supported backend class");return new s(e)};},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}();var n=i(10),o="moz-chunked-arraybuffer",a=function(e){function MozChunkedBackend(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MozChunkedBackend),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MozChunkedBackend.__proto__||Object.getPrototypeOf(MozChunkedBackend)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(MozChunkedBackend,n),r(MozChunkedBackend,[{key:"initXHR",value:function initXHR(){(function get(e,t,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0})(MozChunkedBackend.prototype.__proto__||Object.getPrototypeOf(MozChunkedBackend.prototype),"initXHR",this).call(this),this.xhr.responseType=o;}},{key:"onXHRProgress",value:function onXHRProgress(){var e=this.xhr.response;this.bytesRead+=e.byteLength,this.emit("buffer",e);}}]),MozChunkedBackend}();a.supported=function(){try{var e=new XMLHttpRequest;return e.responseType=o,e.responseType===o}catch(e){return !1}},e.exports=a;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),n=function get(e,t,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0};var o=i(18),a="ms-stream",s=function(e){function MSStreamBackend(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSStreamBackend);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSStreamBackend.__proto__||Object.getPrototypeOf(MSStreamBackend)).call(this,e));return t.stream=null,t.streamReader=null,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(MSStreamBackend,o),r(MSStreamBackend,[{key:"initXHR",value:function initXHR(){n(MSStreamBackend.prototype.__proto__||Object.getPrototypeOf(MSStreamBackend.prototype),"initXHR",this).call(this),this.xhr.responseType=a;}},{key:"onXHRStart",value:function onXHRStart(){var e=this;this.xhr.addEventListener("readystatechange",function checkProgress(){3===e.xhr.readyState&&(e.stream=e.xhr.response,e.xhr.removeEventListener("readystatechange",checkProgress),e.emit("open"));});}},{key:"waitForStream",value:function waitForStream(){var e=this;return new Promise(function(t,i){e.stream?t(e.stream):function(){var r=null;e._onAbort=function(e){r(),i(e);};var n=function checkStart(){t(e.stream);};r=function oncomplete(){e.off("open",n),e._onAbort=null;},e.on("open",n);}();})}},{key:"bufferToOffset",value:function bufferToOffset(e){var t=this;return this.waitForStream().then(function(i){return new Promise(function(r,n){if(t.streamReader)throw new Error("cannot trigger read when reading");if(t.offset>=e||t.eof)r();else{var o=e-t.offset;t.streamReader=new MSStreamReader,t.streamReader.onload=function(e){t.streamReader=null;var i=e.target.result;i.byteLength>0?(t.bytesRead+=i.byteLength,t.emit("buffer",i)):(t.eof=!0,t.emit("done")),r();},t.streamReader.onerror=function(){t.streamReader=null,t.stream=null,t.emit("error"),n(new Error("mystery error streaming"));},t._onAbort=function(e){t.streamReader.abort(),t.streamReader=null,t.stream=null,t.emit("error"),n(e);},t.streamReader.readAsArrayBuffer(i,o);}})})}},{key:"abort",value:function abort(){this.streamReader&&(this.streamReader.abort(),this.streamReader=null),this.stream&&(this.stream.msClose(),this.stream=null),n(MSStreamBackend.prototype.__proto__||Object.getPrototypeOf(MSStreamBackend.prototype),"abort",this).call(this);}}]),MSStreamBackend}();s.supported=function(){try{var e=new XMLHttpRequest;return e.open("GET","/robots.txt"),e.responseType=a,e.responseType===a}catch(e){return !1}},e.exports=s;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),n=function get(e,t,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0};var o=i(10),a=function(e){function BinaryStringBackend(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BinaryStringBackend),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BinaryStringBackend.__proto__||Object.getPrototypeOf(BinaryStringBackend)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(BinaryStringBackend,o),r(BinaryStringBackend,[{key:"initXHR",value:function initXHR(){n(BinaryStringBackend.prototype.__proto__||Object.getPrototypeOf(BinaryStringBackend.prototype),"initXHR",this).call(this),this.xhr.responseType="text",this.xhr.overrideMimeType("text/plain; charset=x-user-defined");}},{key:"onXHRProgress",value:function onXHRProgress(){var e=this.xhr.responseText.slice(this.bytesRead);e.length>0&&(this.bytesRead+=e.length,this.emit("buffer",e));}},{key:"onXHRLoad",value:function onXHRLoad(){this.onXHRProgress(),n(BinaryStringBackend.prototype.__proto__||Object.getPrototypeOf(BinaryStringBackend.prototype),"onXHRLoad",this).call(this);}}]),BinaryStringBackend}();a.supported=function(){try{return !!(new XMLHttpRequest).overrideMimeType}catch(e){return !1}},e.exports=a;},function(e,t,i){var r=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),n=function get(e,t,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0};var o=i(10),a="arraybuffer",s=function(e){function ArrayBufferBackend(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ArrayBufferBackend),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ArrayBufferBackend.__proto__||Object.getPrototypeOf(ArrayBufferBackend)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(ArrayBufferBackend,o),r(ArrayBufferBackend,[{key:"initXHR",value:function initXHR(){n(ArrayBufferBackend.prototype.__proto__||Object.getPrototypeOf(ArrayBufferBackend.prototype),"initXHR",this).call(this),this.xhr.responseType=a;}},{key:"onXHRProgress",value:function onXHRProgress(){}},{key:"onXHRLoad",value:function onXHRLoad(){var e=this.xhr.response;this.bytesRead+=e.byteLength,this.emit("buffer",e),n(ArrayBufferBackend.prototype.__proto__||Object.getPrototypeOf(ArrayBufferBackend.prototype),"onXHRLoad",this).call(this);}}]),ArrayBufferBackend}();s.supported=function(){try{var e=new XMLHttpRequest;return e.responseType=a,e.responseType===a}catch(e){return !1}},e.exports=s;},function(e,t,i){!function webpackUniversalModuleDefinition(t,i){e.exports=i();}(0,function(){return function(e){var t={};function __webpack_require__(i){if(t[i])return t[i].exports;var r=t[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,i){!function(){i(1);var t=i(2),r=i(4);function AudioFeeder(e){this._options=e||{},this._backend=null,this._resampleFractional=0;}AudioFeeder.prototype.rate=0,AudioFeeder.prototype.targetRate=0,AudioFeeder.prototype.channels=0,AudioFeeder.prototype.bufferSize=0,Object.defineProperty(AudioFeeder.prototype,"bufferDuration",{get:function getBufferDuration(){return this.targetRate?this.bufferSize/this.targetRate:0}}),Object.defineProperty(AudioFeeder.prototype,"bufferThreshold",{get:function getBufferThreshold(){return this._backend?this._backend.bufferThreshold/this.targetRate:0},set:function setBufferThreshold(e){if(!this._backend)throw"Invalid state: AudioFeeder cannot set bufferThreshold before init";this._backend.bufferThreshold=Math.round(e*this.targetRate);}}),Object.defineProperty(AudioFeeder.prototype,"playbackPosition",{get:function getPlaybackPosition(){return this._backend?this.getPlaybackState().playbackPosition:0}}),Object.defineProperty(AudioFeeder.prototype,"durationBuffered",{get:function getDurationBuffered(){return this._backend?this.getPlaybackState().samplesQueued/this.targetRate:0}}),Object.defineProperty(AudioFeeder.prototype,"muted",{get:function getMuted(){if(this._backend)return this._backend.muted;throw"Invalid state: cannot get mute before init"},set:function setMuted(e){if(!this._backend)throw"Invalid state: cannot set mute before init";this._backend.muted=e;}}),AudioFeeder.prototype.mute=function(){this.muted=!0;},AudioFeeder.prototype.unmute=function(){this.muted=!1;},Object.defineProperty(AudioFeeder.prototype,"volume",{get:function getVolume(){if(this._backend)return this._backend.volume;throw"Invalid state: cannot get volume before init"},set:function setVolume(e){if(!this._backend)throw"Invalid state: cannot set volume before init";this._backend.volume=e;}}),AudioFeeder.prototype.init=function(e,i){if(this.channels=e,this.rate=i,t.isSupported())this._backend=new t(e,i,this._options);else{if(!r.isSupported())throw"No supported backend";this._backend=new r(e,i,this._options);}this.targetRate=this._backend.rate,this.bufferSize=this._backend.bufferSize,this._backend.onstarved=function(){this.onstarved&&this.onstarved();}.bind(this),this._backend.onbufferlow=function(){this.onbufferlow&&this.onbufferlow();}.bind(this);},AudioFeeder.prototype._resample=function(e){var t=this.rate,i=this.channels,r=this._backend.rate,n=this._backend.channels;if(t==r&&i==n)return e;var o=[],a=Math.trunc(this._resampleFractional),s=e[0].length,u=s*r/t+a,d=Math.round(u);this._resampleFractional-=a,this._resampleFractional+=u-d;for(var c=0;c<n;c++){var f=c;c>=i&&(f=0);for(var l=e[f],h=new Float32Array(d),p=0;p<h.length;p++)h[p]=l[p*s/u|0];o.push(h);}return o},AudioFeeder.prototype.bufferData=function(e){if(!this._backend)throw"Invalid state: AudioFeeder cannot bufferData before init";var t=this._resample(e);this._backend.appendBuffer(t);},AudioFeeder.prototype.getPlaybackState=function(){if(this._backend)return this._backend.getPlaybackState();throw"Invalid state: AudioFeeder cannot getPlaybackState before init"},AudioFeeder.prototype.waitUntilReady=function(e){if(!this._backend)throw"Invalid state: AudioFeeder cannot waitUntilReady before init";this._backend.waitUntilReady(e);},AudioFeeder.prototype.start=function(){if(!this._backend)throw"Invalid state: AudioFeeder cannot start before init";this._backend.start();},AudioFeeder.prototype.stop=function(){if(!this._backend)throw"Invalid state: AudioFeeder cannot stop before init";this._backend.stop();},AudioFeeder.prototype.flush=function(){if(!this._backend)throw"Invalid state: AudioFeeder cannot flush before init";this._backend.flush();},AudioFeeder.prototype.close=function(){this._backend&&(this._backend.close(),this._backend=null);},AudioFeeder.prototype.onstarved=null,AudioFeeder.prototype.onbufferlow=null,AudioFeeder.isSupported=function(){return !!Float32Array&&(t.isSupported()||r.isSupported())},AudioFeeder.initSharedAudioContext=function(){return t.isSupported()?t.initSharedAudioContext():null},e.exports=AudioFeeder;}();},function(e,t){
  /**
  	 * @file Abstraction around a queue of audio buffers.
  	 *
  	 * @author Brion Vibber <brion@pobox.com>
  	 * @copyright (c) 2013-2016 Brion Vibber
  	 * @license MIT
  	 */
  function BufferQueue(e,t){if(e<1||e!==Math.round(e))throw"Invalid channel count for BufferQueue";this.channels=e,this.bufferSize=t,this.flush();}BufferQueue.prototype.flush=function(){this._buffers=[],this._pendingBuffer=this.createBuffer(this.bufferSize),this._pendingPos=0;},BufferQueue.prototype.sampleCount=function(){var e=0;return this._buffers.forEach(function(t){e+=t[0].length;}),e},BufferQueue.prototype.createBuffer=function(e){for(var t=[],i=0;i<this.channels;i++)t[i]=new Float32Array(e);return t},BufferQueue.prototype.validate=function(e){if(e.length!==this.channels)return !1;for(var t,i=0;i<e.length;i++){var r=e[i];if(!(r instanceof Float32Array))return !1;if(0==i)t=r.length;else if(r.length!==t)return !1}return !0},BufferQueue.prototype.appendBuffer=function(e){if(!this.validate(e))throw"Invalid audio buffer passed to BufferQueue.appendBuffer";for(var t=e[0].length,i=this.channels,r=this._pendingPos,n=this._pendingBuffer,o=this.bufferSize,a=0;a<t;a++){for(var s=0;s<i;s++)n[s][r]=e[s][a];++r==o&&(this._buffers.push(n),r=this._pendingPos=0,n=this._pendingBuffer=this.createBuffer(o));}this._pendingPos=r;},BufferQueue.prototype.prependBuffer=function(e){if(!this.validate(e))throw"Invalid audio buffer passed to BufferQueue.prependBuffer";var t=this._buffers.slice(0);t.push(this.trimBuffer(this._pendingBuffer,0,this._pendingPos)),this.flush(),this.appendBuffer(e);for(var i=0;i<t.length;i++)this.appendBuffer(t[i]);},BufferQueue.prototype.nextBuffer=function(){if(this._buffers.length)return this._buffers.shift();var e=this.trimBuffer(this._pendingBuffer,0,this._pendingPos);return this._pendingBuffer=this.createBuffer(this.bufferSize),this._pendingPos=0,e},BufferQueue.prototype.trimBuffer=function(e,t,i){var r=e[0].length,n=t+Math.min(i,r);if(0==t&&n>=r)return e;for(var o=[],a=0;a<this.channels;a++)o[a]=e[a].subarray(t,n);return o},e.exports=BufferQueue;},function(e,t,i){
  /**
  	 * @file Web Audio API backend for AudioFeeder
  	 * @author Brion Vibber <brion@pobox.com>
  	 * @copyright (c) 2013-2016 Brion Vibber
  	 * @license MIT
  	 */
  !function(){var t=window.AudioContext||window.webkitAudioContext,r=i(1),n=i(3);function WebAudioBackend(e,t,i){var n=i.audioContext||WebAudioBackend.initSharedAudioContext();if(this._context=n,this.output=i.output||n.destination,this.rate=n.sampleRate,this.channels=Math.min(e,2),i.bufferSize&&(this.bufferSize=0|i.bufferSize),this.bufferThreshold=2*this.bufferSize,this._bufferQueue=new r(this.channels,this.bufferSize),this._playbackTimeAtBufferTail=n.currentTime,this._queuedTime=0,this._delayedTime=0,this._dropped=0,this._liveBuffer=this._bufferQueue.createBuffer(this.bufferSize),n.createScriptProcessor)this._node=n.createScriptProcessor(this.bufferSize,0,this.channels);else{if(!n.createJavaScriptNode)throw new Error("Bad version of web audio API?");this._node=n.createJavaScriptNode(this.bufferSize,0,this.channels);}}WebAudioBackend.prototype.bufferSize=4096,WebAudioBackend.prototype.bufferThreshold=8192,WebAudioBackend.prototype._volume=1,Object.defineProperty(WebAudioBackend.prototype,"volume",{get:function getVolume(){return this._volume},set:function setVolume(e){this._volume=+e;}}),WebAudioBackend.prototype._muted=!1,Object.defineProperty(WebAudioBackend.prototype,"muted",{get:function getMuted(){return this._muted},set:function setMuted(e){this._muted=!!e;}}),WebAudioBackend.prototype._audioProcess=function(e){var t,i,r,o,a;a="number"==typeof e.playbackTime?e.playbackTime:this._context.currentTime+this.bufferSize/this.rate;var s=this._playbackTimeAtBufferTail;if(s<a&&(this._delayedTime+=a-s),this._bufferQueue.sampleCount()<this.bufferSize&&this.onstarved&&this.onstarved(),this._bufferQueue.sampleCount()<this.bufferSize){for(t=0;t<this.channels;t++)for(r=e.outputBuffer.getChannelData(t),o=0;o<this.bufferSize;o++)r[o]=0;this._dropped++;}else{var u=this.muted?0:this.volume,d=this._bufferQueue.nextBuffer();if(d[0].length<this.bufferSize)throw"Audio buffer not expected length.";for(t=0;t<this.channels;t++)for(i=d[t],this._liveBuffer[t].set(d[t]),r=e.outputBuffer.getChannelData(t),o=0;o<i.length;o++)r[o]=i[o]*u;this._queuedTime+=this.bufferSize/this.rate,this._playbackTimeAtBufferTail=a+this.bufferSize/this.rate,this._bufferQueue.sampleCount()<Math.max(this.bufferSize,this.bufferThreshold)&&this.onbufferlow&&n(this.onbufferlow.bind(this));}},WebAudioBackend.prototype._samplesQueued=function(){return this._bufferQueue.sampleCount()+Math.floor(this._timeAwaitingPlayback()*this.rate)},WebAudioBackend.prototype._timeAwaitingPlayback=function(){return Math.max(0,this._playbackTimeAtBufferTail-this._context.currentTime)},WebAudioBackend.prototype.getPlaybackState=function(){return {playbackPosition:this._queuedTime-this._timeAwaitingPlayback(),samplesQueued:this._samplesQueued(),dropped:this._dropped,delayed:this._delayedTime}},WebAudioBackend.prototype.waitUntilReady=function(e){e();},WebAudioBackend.prototype.appendBuffer=function(e){this._bufferQueue.appendBuffer(e);},WebAudioBackend.prototype.start=function(){this._node.onaudioprocess=this._audioProcess.bind(this),this._node.connect(this.output),this._playbackTimeAtBufferTail=this._context.currentTime;},WebAudioBackend.prototype.stop=function(){if(this._node){var e=this._timeAwaitingPlayback();if(e>0){var t=Math.round(e*this.rate),i=this._liveBuffer?this._liveBuffer[0].length:0;t>i?(this._bufferQueue.prependBuffer(this._liveBuffer),this._bufferQueue.prependBuffer(this._bufferQueue.createBuffer(t-i))):this._bufferQueue.prependBuffer(this._bufferQueue.trimBuffer(this._liveBuffer,i-t,t)),this._playbackTimeAtBufferTail-=e;}this._node.onaudioprocess=null,this._node.disconnect();}},WebAudioBackend.prototype.flush=function(){this._bufferQueue.flush();},WebAudioBackend.prototype.close=function(){this.stop(),this._context=null;},WebAudioBackend.prototype.onstarved=null,WebAudioBackend.prototype.onbufferlow=null,WebAudioBackend.isSupported=function(){return !!t},WebAudioBackend.sharedAudioContext=null,WebAudioBackend.initSharedAudioContext=function(){if(!WebAudioBackend.sharedAudioContext&&WebAudioBackend.isSupported()){var e,i=new t;if(i.createScriptProcessor)e=i.createScriptProcessor(1024,0,2);else{if(!i.createJavaScriptNode)throw new Error("Bad version of web audio API?");e=i.createJavaScriptNode(1024,0,2);}e.connect(i.destination),e.disconnect(),WebAudioBackend.sharedAudioContext=i;}return WebAudioBackend.sharedAudioContext},e.exports=WebAudioBackend;}();},function(e,t){e.exports=function(){if(void 0!==window.setImmediate)return window.setImmediate;if(window&&window.postMessage){var e=[];return window.addEventListener("message",function(t){if(t.source===window){var i=t.data;if("object"==typeof i&&i.nextTickBrowserPingMessage){var r=e.pop();r&&r();}}}),function(t){e.push(t),window.postMessage({nextTickBrowserPingMessage:!0},document.location.toString());}}return function(e){setTimeout(e,0);}}();},function(e,t,i){!function(){var t=i(5),r=i(3),n=function(e,i,n){var o={};"string"==typeof(n=n||{}).base&&(o.swf=n.base+"/"+t),n.bufferSize&&(this.bufferSize=0|n.bufferSize),this._flashaudio=new DynamicAudio(o),this._flashBuffer="",this._cachedFlashState=null,this._cachedFlashTime=0,this._cachedFlashInterval=185,this._waitUntilReadyQueue=[],this.onready=function(){for(this._flashaudio.flashElement.setBufferSize(this.bufferSize),this._flashaudio.flashElement.setBufferThreshold(this.bufferThreshold);this._waitUntilReadyQueue.length;){this._waitUntilReadyQueue.shift().apply(this);}},this.onlog=function(e){console.log("AudioFeeder FlashBackend: "+e);},this.bufferThreshold=2*this.bufferSize;var a={ready:"sync",log:"sync",starved:"sync",bufferlow:"async"};this._callbackName="AudioFeederFlashBackendCallback"+this._flashaudio.id;window[this._callbackName]=function(e){var t=a[e],i=this["on"+e];t&&i&&("async"===t?r(i.bind(this)):(i.apply(this,Array.prototype.slice.call(arguments,1)),this._flushFlashBuffer()));}.bind(this);};n.prototype.rate=44100,n.prototype.channels=2,n.prototype.bufferSize=4096,n.prototype._bufferThreshold=8192,Object.defineProperty(n.prototype,"bufferThreshold",{get:function getBufferThreshold(){return this._bufferThreshold},set:function setBufferThreshold(e){this._bufferThreshold=0|e,this.waitUntilReady(function(){this._flashaudio.flashElement.setBufferThreshold(this._bufferThreshold);}.bind(this));}}),n.prototype._volume=1,Object.defineProperty(n.prototype,"volume",{get:function getVolume(){return this._volume},set:function setVolume(e){this._volume=+e,this.waitUntilReady(this._flashVolumeUpdate.bind(this));}}),n.prototype._muted=!1,Object.defineProperty(n.prototype,"muted",{get:function getMuted(){return this._muted},set:function setMuted(e){this._muted=!!e,this.waitUntilReady(this._flashVolumeUpdate.bind(this));}}),n.prototype._paused=!0,n.prototype._flashVolumeUpdate=function(){this._flashaudio&&this._flashaudio.flashElement&&this._flashaudio.flashElement.setVolume&&this._flashaudio.flashElement.setVolume(this.muted?0:this.volume);},n.prototype._resampleFlash=function(e){for(var t=e[0].length,i=new Float32Array(2*t),r=e[0],n=this.channels>1?e[1]:r,o=0;o<t;o++){var a=o,s=2*o;i[s]=r[a],i[s+1]=n[a];}return i};for(var o=[],a=0;a<256;a++)o[a]=String.fromCharCode(a+57344);function DynamicAudio(e){if(!(this instanceof arguments.callee))return new arguments.callee(arguments);"function"==typeof this.init&&this.init.apply(this,e&&e.callee?e:arguments);}n.prototype._flushFlashBuffer=function(){var e=this._flashBuffer,t=this._flashaudio.flashElement;this._flashBuffer="",e.length>0&&(this._cachedFlashState=t.write(e),this._cachedFlashTime=Date.now());},n.prototype.appendBuffer=function(e){var t=this._resampleFlash(e);if(t.length>0){var i=function binaryString(e){for(var t=new Uint8Array(e),i=t.length,r="",n=0;n<i;n+=8)r+=o[t[n]],r+=o[t[n+1]],r+=o[t[n+2]],r+=o[t[n+3]],r+=o[t[n+4]],r+=o[t[n+5]],r+=o[t[n+6]],r+=o[t[n+7]];return r}(t.buffer);this._flashBuffer+=i,this._flashBuffer.length>=8*this.bufferSize&&this._flushFlashBuffer();}},n.prototype.getPlaybackState=function(){if(this._flashaudio&&this._flashaudio.flashElement&&this._flashaudio.flashElement.write){var e,t=Date.now(),i=this._paused?0:t-this._cachedFlashTime;if(this._cachedFlashState&&i<this._cachedFlashInterval){var r=this._cachedFlashState;e={playbackPosition:r.playbackPosition+i/1e3,samplesQueued:r.samplesQueued-Math.max(0,Math.round(i*this.rate/1e3)),dropped:r.dropped,delayed:r.delayed};}else e=this._flashaudio.flashElement.getPlaybackState(),this._cachedFlashState=e,this._cachedFlashTime=t;return e.samplesQueued+=this._flashBuffer.length/8,e}return {playbackPosition:0,samplesQueued:0,dropped:0,delayed:0}},n.prototype.waitUntilReady=function(e){this._flashaudio&&this._flashaudio.flashElement.write?e.apply(this):this._waitUntilReadyQueue.push(e);},n.prototype.start=function(){this._flushFlashBuffer(),this._flashaudio.flashElement.start(),this._paused=!1,this._cachedFlashState=null;},n.prototype.stop=function(){this._flashaudio.flashElement.stop(),this._paused=!0,this._cachedFlashState=null;},n.prototype.flush=function(){this._flashBuffer="",this._flashaudio.flashElement.flush(),this._cachedFlashState=null;},n.prototype.close=function(){this.stop();var e=this._flashaudio.flashWrapper;e.parentNode.removeChild(e),this._flashaudio=null,delete window[this._callbackName];},n.prototype.onstarved=null,n.prototype.onbufferlow=null,n.isSupported=function(){if(-1!==navigator.userAgent.indexOf("Trident"))try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return !0}catch(e){return !1}return !1},DynamicAudio.nextId=1,DynamicAudio.prototype={nextId:null,swf:t,flashWrapper:null,flashElement:null,init:function(e){this.id=DynamicAudio.nextId++,e&&void 0!==e.swf&&(this.swf=e.swf),this.flashWrapper=document.createElement("div"),this.flashWrapper.id="dynamicaudio-flashwrapper-"+this.id;var t=this.flashWrapper.style;t.position="fixed",t.width="11px",t.height="11px",t.bottom=t.left="0px",t.overflow="hidden",this.flashElement=document.createElement("div"),this.flashElement.id="dynamicaudio-flashelement-"+this.id,this.flashWrapper.appendChild(this.flashElement),document.body.appendChild(this.flashWrapper);var i=this.flashElement.id,r='<param name="FlashVars" value="objectId='+this.id+'">';this.flashWrapper.innerHTML="<object id='"+i+"' width='10' height='10' type='application/x-shockwave-flash' data='"+this.swf+"' style='visibility: visible;'><param name='allowscriptaccess' value='always'>"+r+"</object>",this.flashElement=document.getElementById(i);}},e.exports=n;}();},function(e,t,i){e.exports=i.p+"dynamicaudio.swf?version=2c1ce3bfb7e6fa65c26d726a00017a94";}])});},function(e,t,i){e.exports=i.p+"dynamicaudio.swf?version=2c1ce3bfb7e6fa65c26d726a00017a94";},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=function(){function Bisector(e){(0, n.default)(this,Bisector),this.lower=e.start,this.upper=e.end,this.onprocess=e.process,this.position=0,this.n=0;}return (0, o.default)(Bisector,[{key:"iterate",value:function iterate(){return this.n++,this.position=Math.floor((this.lower+this.upper)/2),this.onprocess(this.lower,this.upper,this.position)}},{key:"start",value:function start(){return this.iterate(),this}},{key:"left",value:function left(){return this.upper=this.position,this.iterate()}},{key:"right",value:function right(){return this.lower=this.position,this.iterate()}}]),Bisector}();t.default=a;},function(e,t,i){var r=i(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(1)),o=r(i(2)),a=r(i(8)),s=function(){function OGVWrapperCodec(e){return (0, n.default)(this,OGVWrapperCodec),this.options=e||{},this.demuxer=null,this.videoDecoder=null,this.audioDecoder=null,this.flushIter=0,this.loadedMetadata=!1,this.processing=!1,Object.defineProperties(this,{duration:{get:function get(){return this.loadedMetadata?this.demuxer.duration:NaN}},hasAudio:{get:function get(){return this.loadedMetadata&&!!this.audioDecoder}},audioReady:{get:function get(){return this.hasAudio&&this.demuxer.audioReady}},audioTimestamp:{get:function get(){return this.demuxer.audioTimestamp}},audioFormat:{get:function get(){return this.hasAudio?this.audioDecoder.audioFormat:null}},audioBuffer:{get:function get(){return this.hasAudio?this.audioDecoder.audioBuffer:null}},hasVideo:{get:function get(){return this.loadedMetadata&&!!this.videoDecoder}},frameReady:{get:function get(){return this.hasVideo&&this.demuxer.frameReady}},frameTimestamp:{get:function get(){return this.demuxer.frameTimestamp}},keyframeTimestamp:{get:function get(){return this.demuxer.keyframeTimestamp}},nextKeyframeTimestamp:{get:function get(){return this.demuxer.nextKeyframeTimestamp}},videoFormat:{get:function get(){return this.hasVideo?this.videoDecoder.videoFormat:null}},frameBuffer:{get:function get(){return this.hasVideo?this.videoDecoder.frameBuffer:null}},seekable:{get:function get(){return this.demuxer.seekable}},demuxerCpuTime:{get:function get(){return this.demuxer?this.demuxer.cpuTime:0}},audioCpuTime:{get:function get(){return this.audioDecoder?this.audioDecoder.cpuTime:0}},videoCpuTime:{get:function get(){return this.videoDecoder?this.videoDecoder.cpuTime:0}}}),this.loadedDemuxerMetadata=!1,this.loadedAudioMetadata=!1,this.loadedVideoMetadata=!1,this.loadedAllMetadata=!1,this.onseek=null,this.videoBytes=0,this.audioBytes=0,this}return (0, o.default)(OGVWrapperCodec,[{key:"flushSafe",value:function flushSafe(e){var t=this,i=this.flushIter;return function(r){t.flushIter<=i&&e(r);}}},{key:"init",value:function init(e){var t,i=this;this.processing=!0,t="video/webm"===this.options.type||"audio/webm"===this.options.type?this.options.wasm?"OGVDemuxerWebMW":"OGVDemuxerWebM":this.options.wasm?"OGVDemuxerOggW":"OGVDemuxerOgg",a.default.loadClass(t,function(t){t().then(function(t){i.demuxer=t,t.onseek=function(e){i.onseek&&i.onseek(e);},t.init(function(){i.processing=!1,e();});});});}},{key:"close",value:function close(){this.demuxer&&(this.demuxer.close(),this.demuxer=null),this.videoDecoder&&(this.videoDecoder.close(),this.videoDecoder=null),this.audioDecoder&&(this.audioDecoder.close(),this.audioDecoder=null);}},{key:"receiveInput",value:function receiveInput(e,t){this.demuxer.receiveInput(e,t);}},{key:"process",value:function process(e){var t=this;if(this.processing)throw new Error("reentrancy fail on OGVWrapperCodec.process");this.processing=!0;var i=function finish(i){t.processing=!1,e(i);},r=function doProcessData(){t.demuxer.process(i);};this.demuxer.loadedMetadata&&!this.loadedDemuxerMetadata?this.loadAudioCodec(function(){t.loadVideoCodec(function(){t.loadedDemuxerMetadata=!0,t.loadedAudioMetadata=!t.audioDecoder,t.loadedVideoMetadata=!t.videoDecoder,t.loadedAllMetadata=t.loadedAudioMetadata&&t.loadedVideoMetadata,i(!0);});}):this.loadedDemuxerMetadata&&!this.loadedAudioMetadata?this.audioDecoder.loadedMetadata?(this.loadedAudioMetadata=!0,this.loadedAllMetadata=this.loadedAudioMetadata&&this.loadedVideoMetadata,i(!0)):this.demuxer.audioReady?this.demuxer.dequeueAudioPacket(function(e,r){t.audioBytes+=e.byteLength,t.audioDecoder.processHeader(e,function(e){i(!0);});}):r():this.loadedAudioMetadata&&!this.loadedVideoMetadata?this.videoDecoder.loadedMetadata?(this.loadedVideoMetadata=!0,this.loadedAllMetadata=this.loadedAudioMetadata&&this.loadedVideoMetadata,i(!0)):this.demuxer.frameReady?(this.processing=!0,this.demuxer.dequeueVideoPacket(function(e){t.videoBytes+=e.byteLength,t.videoDecoder.processHeader(e,function(){i(!0);});})):r():this.loadedVideoMetadata&&!this.loadedMetadata&&this.loadedAllMetadata?(this.loadedMetadata=!0,i(!0)):!this.loadedMetadata||this.hasAudio&&!this.demuxer.audioReady||this.hasVideo&&!this.demuxer.frameReady?r():i(!0);}},{key:"decodeFrame",value:function decodeFrame(e){var t=this,i=this.flushSafe(e),r=this.frameTimestamp,n=this.keyframeTimestamp;this.demuxer.dequeueVideoPacket(function(e){t.videoBytes+=e.byteLength,t.videoDecoder.processFrame(e,function(e){var o=t.videoDecoder.frameBuffer;o&&(o.timestamp=r,o.keyframeTimestamp=n),i(e);});});}},{key:"decodeAudio",value:function decodeAudio(e){var t=this,i=this.flushSafe(e);this.demuxer.dequeueAudioPacket(function(e,r){t.audioBytes+=e.byteLength,t.audioDecoder.processAudio(e,function(e){if(r){var n=t.audioDecoder.audioBuffer,o=[],a=!0,s=!1,u=void 0;try{for(var d,c=n[Symbol.iterator]();!(a=(d=c.next()).done);a=!0){var f=d.value,l=Math.round(r*t.audioFormat.rate/1e9);l>0?o.push(f.subarray(0,f.length-Math.min(l,f.length))):o.push(f.subarray(Math.min(Math.abs(l),f.length),f.length));}}catch(e){s=!0,u=e;}finally{try{a||null==c.return||c.return();}finally{if(s)throw u}}t.audioDecoder.audioBuffer=o;}return i(e)});});}},{key:"discardFrame",value:function discardFrame(e){var t=this;this.demuxer.dequeueVideoPacket(function(i){t.videoBytes+=i.byteLength,e();});}},{key:"discardAudio",value:function discardAudio(e){var t=this;this.demuxer.dequeueAudioPacket(function(i,r){t.audioBytes+=i.byteLength,e();});}},{key:"flush",value:function flush(e){this.flushIter++,this.demuxer.flush(e);}},{key:"sync",value:function sync(){this.videoDecoder&&this.videoDecoder.sync();}},{key:"getKeypointOffset",value:function getKeypointOffset(e,t){this.demuxer.getKeypointOffset(e,t);}},{key:"seekToKeypoint",value:function seekToKeypoint(e,t){this.demuxer.seekToKeypoint(e,this.flushSafe(t));}},{key:"loadAudioCodec",value:function loadAudioCodec(e){var t=this;if(this.demuxer.audioCodec){var i=!!this.options.wasm,r={vorbis:i?"OGVDecoderAudioVorbisW":"OGVDecoderAudioVorbis",opus:i?"OGVDecoderAudioOpusW":"OGVDecoderAudioOpus"}[this.demuxer.audioCodec];this.processing=!0,a.default.loadClass(r,function(i){var r={};t.demuxer.audioFormat&&(r.audioFormat=t.demuxer.audioFormat),i(r).then(function(i){t.audioDecoder=i,i.init(function(){t.loadedAudioMetadata=i.loadedMetadata,t.processing=!1,e();});});},{worker:this.options.worker});}else e();}},{key:"loadVideoCodec",value:function loadVideoCodec(e){var t=this;if(this.demuxer.videoCodec){var i=!!this.options.wasm,r=!!this.options.threading,n={theora:i?"OGVDecoderVideoTheoraW":"OGVDecoderVideoTheora",vp8:i?r?"OGVDecoderVideoVP8MTW":"OGVDecoderVideoVP8W":"OGVDecoderVideoVP8",vp9:i?r?"OGVDecoderVideoVP9MTW":"OGVDecoderVideoVP9W":"OGVDecoderVideoVP9",av1:i?r?"OGVDecoderVideoAV1MTW":"OGVDecoderVideoAV1W":"OGVDecoderVideoAV1"}[this.demuxer.videoCodec];this.processing=!0,a.default.loadClass(n,function(i){var n={};t.demuxer.videoFormat&&(n.videoFormat=t.demuxer.videoFormat),t.options.memoryLimit&&(n.memoryLimit=t.options.memoryLimit),r&&delete window.ENVIRONMENT_IS_PTHREAD,i(n).then(function(i){t.videoDecoder=i,i.init(function(){t.loadedVideoMetadata=i.loadedMetadata,t.processing=!1,e();});});},{worker:this.options.worker&&!this.options.threading});}else e();}}]),OGVWrapperCodec}();t.default=s;}])});
  });

  unwrapExports(ogv);
  var ogv_1 = ogv.ogvjs;

  //
  // -- ogv.js
  // https://github.com/brion/ogv.js
  // Copyright (c) 2013-2019 Brion Vibber
  //
  // Entry point for pre-built ogv.js distribution, can be pulled in
  // via webpack, browserify etc.
  //
  // You'll also need the static assets from the 'dist' subdirectory,
  // for the Flash audio shim and Web Worker modules. At runtime set:
  //
  //  require('ogv').OGVLoader.base = 'path/to/target-dir';
  //
  // if it differs from your HTML's location.
  //

  var ogv$1 = ogv;

  var version = "3.0.0";

  var Tech = videojs.getTech('Tech');
  /**
   * Ogvjs Media Controller - Wrapper for Ogvjs Media API
   *
   * @param {Object=} options Object of option names and values
   * @param {Function=} ready Ready callback function
   * @extends Tech
   * @class Ogvjs
   */

  var Ogvjs =
  /*#__PURE__*/
  function (_Tech) {
    _inheritsLoose(Ogvjs, _Tech);

    function Ogvjs(options, ready) {
      var _this;

      _this = _Tech.call(this, options, ready) || this;

      if (options.source && _this.el_.currentSrc !== options.source.src) {
        // Set initial state of player
        _this.el_.src = options.source.src;
        Ogvjs.setIfAvailable(_this.el_, 'autoplay', options.autoplay);
        Ogvjs.setIfAvailable(_this.el_, 'loop', options.loop);
        Ogvjs.setIfAvailable(_this.el_, 'poster', options.poster);
        Ogvjs.setIfAvailable(_this.el_, 'preload', options.preload);
      }

      _this.triggerReady();

      return _this;
    }
    /**
     * Dispose of Ogvjs media element
     *
     * @method dispose
     */


    var _proto = Ogvjs.prototype;

    _proto.dispose = function dispose() {
      this.el_.removeEventListener('framecallback', this.onFrameUpdate);

      _Tech.prototype.dispose.call(this);
    }
    /**
     * Create the component's DOM element
     *
     * @return {Element}
     * @method createEl
     */
    ;

    _proto.createEl = function createEl() {
      var options = this.options_;

      if (options.base) {
        ogv$1.OGVLoader.base = options.base;
      } else {
        throw new Error('Please specify the base for the ogv.js library');
      }

      var el = new ogv$1.OGVPlayer(options);

      if (!el.hasOwnProperty('preload')) {
        // simulate timeupdate events for older ogv.js versions pre 1.1 versions
        // needed for subtitles. preload is only defined in 1.1 and later,
        this.lastTime = 0;
        el.addEventListener('framecallback', this.onFrameUpdate.bind(this));
      }

      el.className += ' vjs-tech';
      options.tag = el;
      return el;
    };

    _proto.onFrameUpdate = function onFrameUpdate(event) {
      var timeupdateInterval = 0.25;
      var now = this.el_ ? this.el_.currentTime : this.lastTime; // Don't spam time updates on every frame

      if (Math.abs(now - this.lastTime) >= timeupdateInterval) {
        this.lastTime = now;
        this.trigger('timeupdate');
        this.trigger('durationchange');
      }
    }
    /**
     * Play for Ogvjs tech
     *
     * @method play
     */
    ;

    _proto.play = function play() {
      this.el_.play();
    }
    /**
     * Pause for Ogvjs tech
     *
     * @method pause
     */
    ;

    _proto.pause = function pause() {
      this.el_.pause();
    }
    /**
     * Paused for Ogvjs tech
     *
     * @return {Boolean}
     * @method paused
     */
    ;

    _proto.paused = function paused() {
      return this.el_.paused;
    }
    /**
     * Get current time
     *
     * @return {Number}
     * @method currentTime
     */
    ;

    _proto.currentTime = function currentTime() {
      return this.el_.currentTime;
    }
    /**
     * Set current time
     *
     * @param {Number} seconds Current time of video
     * @method setCurrentTime
     */
    ;

    _proto.setCurrentTime = function setCurrentTime(seconds) {
      try {
        this.el_.currentTime = seconds;
      } catch (e) {
        videojs.log(e, 'Video is not ready. (Video.js)');
      }
    }
    /**
     * Get duration
     *
     * @return {Number}
     * @method duration
     */
    ;

    _proto.duration = function duration() {
      return this.el_.duration || 0;
    }
    /**
     * Get a TimeRange object that represents the intersection
     * of the time ranges for which the user agent has all
     * relevant media
     *
     * @return {TimeRangeObject}
     * @method buffered
     */
    ;

    _proto.buffered = function buffered() {
      return this.el_.buffered;
    }
    /**
     * Get volume level
     *
     * @return {Number}
     * @method volume
     */
    ;

    _proto.volume = function volume() {
      return this.el_.hasOwnProperty('volume') ? this.el_.volume : 1;
    }
    /**
     * Set volume level
     *
     * @param {Number} percentAsDecimal Volume percent as a decimal
     * @method setVolume
     */
    ;

    _proto.setVolume = function setVolume(percentAsDecimal) {
      if (this.el_.hasOwnProperty('volume')) {
        this.el_.volume = percentAsDecimal;
      }
    }
    /**
     * Get if muted
     *
     * @return {Boolean}
     * @method muted
     */
    ;

    _proto.muted = function muted() {
      return this.el_.muted;
    }
    /**
     * Set muted
     *
     * @param {Boolean} If player is to be muted or note
     * @method setMuted
     */
    ;

    _proto.setMuted = function setMuted(muted) {
      this.el_.muted = !!muted;
    }
    /**
     * Get player width
     *
     * @return {Number}
     * @method width
     */
    ;

    _proto.width = function width() {
      return this.el_.offsetWidth;
    }
    /**
     * Get player height
     *
     * @return {Number}
     * @method height
     */
    ;

    _proto.height = function height() {
      return this.el_.offsetHeight;
    }
    /**
     * Get/set video
     *
     * @param {Object=} src Source object
     * @return {Object}
     * @method src
     */
    ;

    _proto.src = function src(_src) {
      if (typeof _src === 'undefined') {
        return this.el_.src;
      } // Setting src through `src` instead of `setSrc` will be deprecated


      this.setSrc(_src);
    }
    /**
     * Set video
     *
     * @param {Object} src Source object
     * @deprecated
     * @method setSrc
     */
    ;

    _proto.setSrc = function setSrc(src) {
      this.el_.src = src;
    }
    /**
     * Load media into player
     *
     * @method load
     */
    ;

    _proto.load = function load() {
      this.el_.load();
    }
    /**
     * Get current source
     *
     * @return {Object}
     * @method currentSrc
     */
    ;

    _proto.currentSrc = function currentSrc() {
      if (this.currentSource_) {
        return this.currentSource_.src;
      }

      return this.el_.currentSrc;
    }
    /**
     * Get poster
     *
     * @return {String}
     * @method poster
     */
    ;

    _proto.poster = function poster() {
      return this.el_.poster;
    }
    /**
     * Set poster
     *
     * @param {String} val URL to poster image
     * @method
     */
    ;

    _proto.setPoster = function setPoster(val) {
      this.el_.poster = val;
    }
    /**
     * Get preload attribute
     *
     * @return {String}
     * @method preload
     */
    ;

    _proto.preload = function preload() {
      return this.el_.preload || 'none';
    }
    /**
     * Set preload attribute
     *
     * @param {String} val Value for preload attribute
     * @method setPreload
     */
    ;

    _proto.setPreload = function setPreload(val) {
      if (this.el_.hasOwnProperty('preload')) {
        this.el_.preload = val;
      }
    }
    /**
     * Get autoplay attribute
     *
     * @return {Boolean}
     * @method autoplay
     */
    ;

    _proto.autoplay = function autoplay() {
      return this.el_.autoplay || false;
    }
    /**
     * Set autoplay attribute
     *
     * @param {Boolean} val Value for preload attribute
     * @method setAutoplay
     */
    ;

    _proto.setAutoplay = function setAutoplay(val) {
      if (this.el_.hasOwnProperty('autoplay')) {
        this.el_.autoplay = !!val;
        return;
      }
    }
    /**
     * Get controls attribute
     *
     * @return {Boolean}
     * @method controls
     */
    ;

    _proto.controls = function controls() {
      return this.el_controls || false;
    }
    /**
     * Set controls attribute
     *
     * @param {Boolean} val Value for controls attribute
     * @method setControls
     */
    ;

    _proto.setControls = function setControls(val) {
      if (this.el_.hasOwnProperty('controls')) {
        this.el_.controls = !!val;
      }
    }
    /**
     * Get loop attribute
     *
     * @return {Boolean}
     * @method loop
     */
    ;

    _proto.loop = function loop() {
      return this.el_.loop || false;
    }
    /**
     * Set loop attribute
     *
     * @param {Boolean} val Value for loop attribute
     * @method setLoop
     */
    ;

    _proto.setLoop = function setLoop(val) {
      if (this.el_.hasOwnProperty('loop')) {
        this.el_.loop = !!val;
      }
    }
    /**
     * Get error value
     *
     * @return {String}
     * @method error
     */
    ;

    _proto.error = function error() {
      return this.el_.error;
    }
    /**
     * Get whether or not the player is in the "seeking" state
     *
     * @return {Boolean}
     * @method seeking
     */
    ;

    _proto.seeking = function seeking() {
      return this.el_.seeking;
    }
    /**
     * Get a TimeRanges object that represents the
     * ranges of the media resource to which it is possible
     * for the user agent to seek.
     *
     * @return {TimeRangeObject}
     * @method seekable
     */
    ;

    _proto.seekable = function seekable() {
      return this.el_.seekable;
    }
    /**
     * Get if video ended
     *
     * @return {Boolean}
     * @method ended
     */
    ;

    _proto.ended = function ended() {
      return this.el_.ended;
    }
    /**
     * Get the value of the muted content attribute
     * This attribute has no dynamic effect, it only
     * controls the default state of the element
     *
     * @return {Boolean}
     * @method defaultMuted
     */
    ;

    _proto.defaultMuted = function defaultMuted() {
      return this.el_.defaultMuted || false;
    }
    /**
     * Get desired speed at which the media resource is to play
     *
     * @return {Number}
     * @method playbackRate
     */
    ;

    _proto.playbackRate = function playbackRate() {
      return this.el_.playbackRate || 1;
    }
    /**
     * Returns a TimeRanges object that represents the ranges of the
     * media resource that the user agent has played.
     * @return {TimeRangeObject} the range of points on the media
     * timeline that has been reached through normal playback
     * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-played
     */
    ;

    _proto.played = function played() {
      return this.el_.played;
    }
    /**
     * Set desired speed at which the media resource is to play
     *
     * @param {Number} val Speed at which the media resource is to play
     * @method setPlaybackRate
     */
    ;

    _proto.setPlaybackRate = function setPlaybackRate(val) {
      if (this.el_.hasOwnProperty('playbackRate')) {
        this.el_.playbackRate = val;
      }
    }
    /**
     * Get the current state of network activity for the element, from
     * the list below
     * NETWORK_EMPTY (numeric value 0)
     * NETWORK_IDLE (numeric value 1)
     * NETWORK_LOADING (numeric value 2)
     * NETWORK_NO_SOURCE (numeric value 3)
     *
     * @return {Number}
     * @method networkState
     */
    ;

    _proto.networkState = function networkState() {
      return this.el_.networkState;
    }
    /**
     * Get a value that expresses the current state of the element
     * with respect to rendering the current playback position, from
     * the codes in the list below
     * HAVE_NOTHING (numeric value 0)
     * HAVE_METADATA (numeric value 1)
     * HAVE_CURRENT_DATA (numeric value 2)
     * HAVE_FUTURE_DATA (numeric value 3)
     * HAVE_ENOUGH_DATA (numeric value 4)
     *
     * @return {Number}
     * @method readyState
     */
    ;

    _proto.readyState = function readyState() {
      return this.el_.readyState;
    }
    /**
     * Get width of video
     *
     * @return {Number}
     * @method videoWidth
     */
    ;

    _proto.videoWidth = function videoWidth() {
      return this.el_.videoWidth;
    }
    /**
     * Get height of video
     *
     * @return {Number}
     * @method videoHeight
     */
    ;

    _proto.videoHeight = function videoHeight() {
      return this.el_.videoHeight;
    }
    /**
     * The technology has no native fullscreen
     * This is important on iOS, where we have to fallback to
     * fullWindow mode due to lack of HTML5 fullscreen api
     */
    ;

    _proto.supportsFullScreen = function supportsFullScreen() {
      return false;
    };

    return Ogvjs;
  }(Tech);
  /*
   * Only set a value on an element if it has that property
   *
   * @param {Element} el
   * @param {String} name
   * @param value
   */


  Ogvjs.setIfAvailable = function (el, name, value) {
    if (el.hasOwnProperty(name)) {
      el[name] = value;
    }
  };
  /*
   * Check if Ogvjs video is supported by this browser/device
   *
   * @return {Boolean}
   */


  Ogvjs.isSupported = function () {
    return ogv$1.OGVCompat.supported('OGVPlayer');
  };
  /*
   * Determine if the specified media type can be played back
   * by the Tech
   *
   * @param  {String} type  A media type description
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */


  Ogvjs.canPlayType = function (type) {
    return type.indexOf('/ogg') !== -1 ? 'maybe' : '';
  };
  /*
   * Check if the tech can support the given source
   * @param  {Object} srcObj  The source object
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */


  Ogvjs.canPlaySource = function (srcObj) {
    return Ogvjs.canPlayType(srcObj.type);
  };
  /*
   * Check if the volume can be changed in this browser/device.
   * Volume cannot be changed in a lot of mobile devices.
   * Specifically, it can't be changed from 1 on iOS.
   *
   * @return {Boolean}
   */


  Ogvjs.canControlVolume = function () {
    var p = new ogv$1.OGVPlayer();
    return p.hasOwnProperty('volume');
  };
  /*
   * Check if playbackRate is supported in this browser/device.
   *
   * @return {Number} [description]
   */


  Ogvjs.canControlPlaybackRate = function () {
    return false;
  };
  /*
   * Check to see if native text tracks are supported by this browser/device
   *
   * @return {Boolean}
   */


  Ogvjs.supportsNativeTextTracks = function () {
    return false;
  };
  /**
   * An array of events available on the Ogvjs tech.
   *
   * @private
   * @type {Array}
   */


  Ogvjs.Events = ['loadstart', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'progress', 'play', 'pause', 'ratechange', 'volumechange'];
  /*
   * Set the tech's volume control support status
   *
   * @type {Boolean}
   */

  Ogvjs.prototype.featuresVolumeControl = Ogvjs.canControlVolume();
  /*
   * Set the tech's playbackRate support status
   *
   * @type {Boolean}
   */

  Ogvjs.prototype.featuresPlaybackRate = Ogvjs.canControlPlaybackRate();
  /*
   * Set the the tech's fullscreen resize support status.
   * HTML video is able to automatically resize when going to fullscreen.
   * (No longer appears to be used. Can probably be removed.)
   */

  Ogvjs.prototype.featuresFullscreenResize = true;
  /*
   * Set the tech's progress event support status
   * (this disables the manual progress events of the Tech)
   */

  Ogvjs.prototype.featuresProgressEvents = true;
  /*
   * Sets the tech's status on native text track support
   *
   * @type {Boolean}
   */

  Ogvjs.prototype.featuresNativeTextTracks = Ogvjs.supportsNativeTextTracks(); // Define default values for the plugin's `state` object here.

  Ogvjs.defaultState = {}; // Include the version number.

  Ogvjs.VERSION = version;
  Tech.registerTech('Ogvjs', Ogvjs);

  return Ogvjs;

}));
