/*! For license information please see LICENSES */
webpackJsonp([0],{"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("LoHr"),o=r("fwGk"),i=!1;var a=function(t){i||r("S7ia")},u=r("VU/8")(n.a,o.a,!1,a,"data-v-2a183b29",null);u.options.__file="pages/index.vue",e.default=u.exports},FaYT:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".header[data-v-2a183b29]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.cards[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}",""])},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,u={__proto__:[]}instanceof Array,c=!a&&!u,f={create:a?function(){return I(Object.create(null))}:u?function(){return I({__proto__:null})}:function(){return I({})},has:c?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:c?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},s=Object.getPrototypeOf(Function),p="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,l=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,y=new(p||"function"!=typeof WeakMap?function(){var t=16,e=f.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&f.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?f.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+u()}while(f.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:f.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function u(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function d(t,e,r){var n=y.get(t);if(b(n)){if(!r)return;n=new h,y.set(t,n)}var o=n.get(e);if(b(o)){if(!r)return;o=new h,n.set(e,o)}return o}function v(t,e,r){var n=d(e,r,!1);return!b(n)&&function(t){return!!t}(n.has(t))}function _(t,e,r){var n=d(e,r,!1);if(!b(n))return n.get(t)}function w(t,e,r,n){var o=d(r,n,!0);o.set(t,e)}function m(t,e){var r=[],n=d(t,e,!1);if(b(n))return r;for(var o=n.keys(),a=function(t){var e=M(t,i);if(!P(e))throw new TypeError;var r=e.call(t);if(!j(r))throw new TypeError;return r}(o),u=0;;){var c=R(a);if(!c)return r.length=u,r;var f=A(c);try{r[u]=f}catch(t){try{S(a)}finally{throw t}}u++}}function g(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function b(t){return void 0===t}function O(t){return null===t}function j(t){return"object"==typeof t?null!==t:"function"==typeof t}function k(t,e){switch(g(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=M(t,o);if(void 0!==n){var i=n.call(t,r);if(j(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(P(r)){var n=r.call(t);if(!j(n))return n}var o=t.valueOf;if(P(o)){var n=o.call(t);if(!j(n))return n}}else{var o=t.valueOf;if(P(o)){var n=o.call(t);if(!j(n))return n}var i=t.toString;if(P(i)){var n=i.call(t);if(!j(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function x(t){var e=k(t,3);return function(t){return"symbol"==typeof t}(e)?e:function(t){return""+t}(e)}function E(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function P(t){return"function"==typeof t}function T(t){return"function"==typeof t}function M(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!P(r))throw new TypeError;return r}}function A(t){return t.value}function R(t){var e=t.next();return!e.done&&e}function S(t){var e=t.return;e&&e.call(t)}function D(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===s)return e;if(e!==s)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function I(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(b(r)){if(!E(t))throw new TypeError;if(!T(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!b(o)&&!O(o)){if(!T(o))throw new TypeError;e=o}}return e}(t,e)}if(!E(t))throw new TypeError;if(!j(e))throw new TypeError;if(!j(n)&&!b(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),r=x(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!b(a)&&!O(a)){if(!j(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!j(r))throw new TypeError;if(!b(n)&&!function(t){switch(g(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!j(r))throw new TypeError;b(n)||(n=x(n));return w(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!j(e))throw new TypeError;b(r)||(r=x(r));return function t(e,r,n){var o=v(e,r,n);if(o)return!0;var i=D(r);if(!O(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;b(r)||(r=x(r));return v(t,e,r)}),e("getMetadata",function(t,e,r){if(!j(e))throw new TypeError;b(r)||(r=x(r));return function t(e,r,n){var o=v(e,r,n);if(o)return _(e,r,n);var i=D(r);if(!O(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;b(r)||(r=x(r));return _(t,e,r)}),e("getMetadataKeys",function(t,e){if(!j(t))throw new TypeError;b(e)||(e=x(e));return function t(e,r){var n=m(e,r);var o=D(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new l;var u=[];for(var c=0,f=n;c<f.length;c++){var s=f[c],p=a.has(s);p||(a.add(s),u.push(s))}for(var h=0,y=i;h<y.length;h++){var s=y[h],p=a.has(s);p||(a.add(s),u.push(s))}return u}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!j(t))throw new TypeError;b(e)||(e=x(e));return m(t,e)}),e("deleteMetadata",function(t,e,r){if(!j(e))throw new TypeError;b(r)||(r=x(r));var n=d(e,r,!1);if(b(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=y.get(e);return o.delete(r),o.size>0||(y.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},LoHr:function(t,e,r){"use strict";var n=r("qPzS"),o=(r.n(n),r("ipus")),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.question="このアプリは何なんだ",e}return i(e,t),Object.defineProperty(e.prototype,"result",{get:function(){return"おのれコンビーフぃ！ "+this.question+"！！ 答えるぽよ！！！"},enumerable:!0,configurable:!0}),a([o.a],e.prototype,"people",void 0),e=a([n.Component],e)}(n.Vue);e.a=u},S7ia:function(t,e,r){var n=r("FaYT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("20651492",n,!1,{sourceMap:!1})},"Z+Jb":function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("c+8m"),o=(r.n(n),r("NYxO")),i=a("computed",o.mapState);a("computed",o.mapGetters),a("methods",o.mapActions),a("methods",o.mapMutations);function a(t,e){function r(r,o){return Object(n.createDecorator)(function(n,i){n[t]||(n[t]={});var a,u=((a={})[i]=r,a);n[t][i]=void 0!==o?e(o,u)[i]:e(u)[i]})}return function(t,e){if("string"==typeof e){var n=e,o=t;return r(n,void 0)(o,n)}return r(t,function(t){var e=t&&t.namespace;if("string"==typeof e)return"/"!==e[e.length-1]?e+"/":e}(e))}}},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&"object"==typeof t&&"default"in t?t.default:t}(r("/5sW")),o="undefined"!=typeof Reflect&&Reflect.defineMetadata;function i(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach(function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)})}var a={__proto__:[]}instanceof Array;var u=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function c(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(u.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var c=t.__decorators__;c&&(c.forEach(function(t){return t(e)}),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),s=f instanceof n?f.constructor:n,p=s.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var i=Object.getOwnPropertyDescriptor(e,n);if(!a){if("cid"===n)return;var u=Object.getOwnPropertyDescriptor(r,n);if(!function(t){var e=typeof t;return null==t||"object"!==e&&"function"!==e}(i.value)&&u&&u.value===i.value)return}0,Object.defineProperty(t,n,i)}}})}(p,t,s),o&&function(t,e){i(t,e),Object.getOwnPropertyNames(e.prototype).forEach(function(r){i(t.prototype,e.prototype,r)}),Object.getOwnPropertyNames(e).forEach(function(r){i(t,e,r)})}(p,t),p}function f(t){return"function"==typeof t?c(t):function(e){return c(e,t)}}f.registerHooks=function(t){u.push.apply(u,t)},e.default=f,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.extend({mixins:t})}},fwGk:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("おのれコンビーフぃ！")]),r("p",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),r("p",[r("strong",[t._v(t._s(t.result))])]),r("social-sharing",{staticClass:"twitter-share button common-button",attrs:{title:t.result,hashtags:"おのれコンビーフぃ"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("network",{attrs:{network:"twitter"}},[e("button",[this._v("Tweet")])])},staticRenderFns:[]}})],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},ipus:function(t,e,r){"use strict";var n=r("Z+Jb");r.d(e,"a",function(){return n.a})},qPzS:function(t,e,r){!function(t,n){n(e,r("/5sW"),r("c+8m"),r("I8yv"))}(0,function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})}});