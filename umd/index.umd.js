(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MobXReactMatchMedia"] = factory();
	else
		root["MobXReactMatchMedia"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MatchMediaProvider = exports.setMatchMediaConfig = exports.matchMedia = undefined;
	
	var _matchMedia = __webpack_require__(1);
	
	var _MatchMediaProvider = __webpack_require__(71);
	
	var _MatchMediaProvider2 = _interopRequireDefault(_MatchMediaProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.matchMedia = _matchMedia.matchMedia;
	exports.setMatchMediaConfig = _matchMedia.setMatchMediaConfig;
	exports.MatchMediaProvider = _MatchMediaProvider2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMatchMediaConfig = exports.matchMedia = undefined;
	
	var _matchMediaMock = __webpack_require__(2);
	
	var _matchMediaMock2 = _interopRequireDefault(_matchMediaMock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var matchMedia = _matchMediaMock2.default.create();
	
	var config = null;
	
	var setMatchMediaConfig = function setMatchMediaConfig() {
	  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	  var isClient = typeof window !== 'undefined';
	
	  if (!isClient && req) {
	    config = {
	      type: 'screen',
	      width: req.params.width,
	      height: req.params.height
	    };
	  }
	
	  if (isClient && !req) {
	    config = {
	      type: 'screen',
	      width: window.innerWidth, // eslint-disable-line
	      height: window.innerHeight };
	  }
	
	  if (config) matchMedia.setConfig(config);
	};
	
	exports.matchMedia = matchMedia;
	exports.setMatchMediaConfig = setMatchMediaConfig;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashLangClone = __webpack_require__(3);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashObjectMapValues = __webpack_require__(35);
	
	var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);
	
	var _lodashObjectForOwn = __webpack_require__(59);
	
	var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);
	
	var _MediaQueryListMock = __webpack_require__(61);
	
	var _MediaQueryListMock2 = _interopRequireDefault(_MediaQueryListMock);
	
	exports['default'] = {
	
	  create: function create() {
	    var config = {};
	    var createdMqls = {};
	
	    function matchMediaMock(query) {
	
	      var mql = createdMqls[query];
	
	      if (!mql) {
	        mql = new _MediaQueryListMock2['default'](query, function () {
	          return config;
	        });
	        createdMqls[query] = mql;
	      }
	
	      return mql;
	    }
	
	    matchMediaMock.setConfig = function (newConfig) {
	
	      if (!newConfig) {
	        return;
	      }
	
	      var matchBeforeByQuery = _lodashObjectMapValues2['default'](createdMqls, 'matches');
	
	      config = _lodashLangClone2['default'](newConfig) || {};
	
	      _lodashObjectForOwn2['default'](createdMqls, function (mql, query) {
	
	        if (mql.matches !== matchBeforeByQuery[query]) {
	          mql.callListeners();
	        }
	      });
	    };
	
	    return matchMediaMock;
	  }
	};
	module.exports = exports['default'];
	//# sourceMappingURL=MatchMediaMock.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(4),
	    bindCallback = __webpack_require__(32),
	    isIterateeCall = __webpack_require__(34);
	
	/**
	 * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	 * otherwise they are assigned by reference. If `customizer` is provided it's
	 * invoked to produce the cloned values. If `customizer` returns `undefined`
	 * cloning is handled by the method instead. The `customizer` is bound to
	 * `thisArg` and invoked with up to three argument; (value [, index|key, object]).
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	 * The enumerable properties of `arguments` objects and objects created by
	 * constructors other than `Object` are cloned to plain `Object` objects. An
	 * empty object is returned for uncloneable values such as functions, DOM nodes,
	 * Maps, Sets, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {*} Returns the cloned value.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * var shallow = _.clone(users);
	 * shallow[0] === users[0];
	 * // => true
	 *
	 * var deep = _.clone(users, true);
	 * deep[0] === users[0];
	 * // => false
	 *
	 * // using a customizer callback
	 * var el = _.clone(document.body, function(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(false);
	 *   }
	 * });
	 *
	 * el === document.body
	 * // => false
	 * el.nodeName
	 * // => BODY
	 * el.childNodes.length;
	 * // => 0
	 */
	function clone(value, isDeep, customizer, thisArg) {
	  if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	    isDeep = false;
	  }
	  else if (typeof isDeep == 'function') {
	    thisArg = customizer;
	    customizer = isDeep;
	    isDeep = false;
	  }
	  return typeof customizer == 'function'
	    ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 3))
	    : baseClone(value, isDeep);
	}
	
	module.exports = clone;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(5),
	    arrayEach = __webpack_require__(6),
	    baseAssign = __webpack_require__(7),
	    baseForOwn = __webpack_require__(24),
	    initCloneArray = __webpack_require__(28),
	    initCloneByTag = __webpack_require__(29),
	    initCloneObject = __webpack_require__(31),
	    isArray = __webpack_require__(21),
	    isObject = __webpack_require__(13);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[stringTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[mapTag] = cloneableTags[setTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return arrayCopy(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;
	
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return baseAssign(result, value);
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);
	
	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(8),
	    keys = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(10),
	    isArrayLike = __webpack_require__(15),
	    isObject = __webpack_require__(13),
	    shimKeys = __webpack_require__(19);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(11);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(12),
	    isObjectLike = __webpack_require__(14);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(16),
	    isLength = __webpack_require__(18);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(17);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(20),
	    isArray = __webpack_require__(21),
	    isIndex = __webpack_require__(22),
	    isLength = __webpack_require__(18),
	    keysIn = __webpack_require__(23);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(15),
	    isObjectLike = __webpack_require__(14);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(10),
	    isLength = __webpack_require__(18),
	    isObjectLike = __webpack_require__(14);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(20),
	    isArray = __webpack_require__(21),
	    isIndex = __webpack_require__(22),
	    isLength = __webpack_require__(18),
	    isObject = __webpack_require__(13);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(25),
	    keys = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(26);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(27);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);
	
	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var bufferClone = __webpack_require__(30);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return bufferClone(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Native method references. */
	var ArrayBuffer = global.ArrayBuffer,
	    Uint8Array = global.Uint8Array;
	
	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  var result = new ArrayBuffer(buffer.byteLength),
	      view = new Uint8Array(result);
	
	  view.set(new Uint8Array(buffer));
	  return result;
	}
	
	module.exports = bufferClone;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor;
	}
	
	module.exports = initCloneObject;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(33);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(15),
	    isIndex = __webpack_require__(22),
	    isObject = __webpack_require__(13);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(36);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(37),
	    baseForOwn = __webpack_require__(24);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(38),
	    baseMatchesProperty = __webpack_require__(50),
	    bindCallback = __webpack_require__(32),
	    identity = __webpack_require__(33),
	    property = __webpack_require__(57);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(39),
	    getMatchData = __webpack_require__(47),
	    toObject = __webpack_require__(27);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(40),
	    toObject = __webpack_require__(27);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(41),
	    isObject = __webpack_require__(13),
	    isObjectLike = __webpack_require__(14);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(42),
	    equalByTag = __webpack_require__(44),
	    equalObjects = __webpack_require__(45),
	    isArray = __webpack_require__(21),
	    isTypedArray = __webpack_require__(46);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(43);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(9);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(18),
	    isObjectLike = __webpack_require__(14);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(48),
	    pairs = __webpack_require__(49);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(9),
	    toObject = __webpack_require__(27);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(51),
	    baseIsEqual = __webpack_require__(40),
	    baseSlice = __webpack_require__(52),
	    isArray = __webpack_require__(21),
	    isKey = __webpack_require__(53),
	    isStrictComparable = __webpack_require__(48),
	    last = __webpack_require__(54),
	    toObject = __webpack_require__(27),
	    toPath = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(27);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(21),
	    toObject = __webpack_require__(27);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(56),
	    isArray = __webpack_require__(21);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(17),
	    basePropertyDeep = __webpack_require__(58),
	    isKey = __webpack_require__(53);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(51),
	    toPath = __webpack_require__(55);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(24),
	    createForOwn = __webpack_require__(60);
	
	/**
	 * Iterates over own enumerable properties of an object invoking `iteratee`
	 * for each property. The `iteratee` is bound to `thisArg` and invoked with
	 * three arguments: (value, key, object). Iteratee functions may exit iteration
	 * early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.forOwn(new Foo, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => logs 'a' and 'b' (iteration order is not guaranteed)
	 */
	var forOwn = createForOwn(baseForOwn);
	
	module.exports = forOwn;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(32);
	
	/**
	 * Creates a function for `_.forOwn` or `_.forOwnRight`.
	 *
	 * @private
	 * @param {Function} objectFunc The function to iterate over an object.
	 * @returns {Function} Returns the new each function.
	 */
	function createForOwn(objectFunc) {
	  return function(object, iteratee, thisArg) {
	    if (typeof iteratee != 'function' || thisArg !== undefined) {
	      iteratee = bindCallback(iteratee, thisArg, 3);
	    }
	    return objectFunc(object, iteratee);
	  };
	}
	
	module.exports = createForOwn;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashCollectionIncludes = __webpack_require__(62);
	
	var _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
	
	var _lodashArrayPull = __webpack_require__(68);
	
	var _lodashArrayPull2 = _interopRequireDefault(_lodashArrayPull);
	
	var _cssMediaquery = __webpack_require__(69);
	
	var _cssMediaquery2 = _interopRequireDefault(_cssMediaquery);
	
	var _exenv = __webpack_require__(70);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var MediaQueryListMock = (function () {
	  function MediaQueryListMock(query, getConfig) {
	    _classCallCheck(this, MediaQueryListMock);
	
	    this._getConfig = getConfig;
	    this._query = query;
	    this._listeners = [];
	  }
	
	  _createClass(MediaQueryListMock, [{
	    key: 'matches',
	    get: function () {
	      return _cssMediaquery2['default'].match(this._query, this._getConfig());
	    }
	  }, {
	    key: 'addListener',
	    value: function addListener(listener) {
	      if (!_exenv2['default'].canUseDOM) {
	        return;
	      }
	
	      if (!_lodashCollectionIncludes2['default'](this._listeners, listener)) {
	        this._listeners.push(listener);
	      }
	    }
	  }, {
	    key: 'removeListener',
	    value: function removeListener(listener) {
	      _lodashArrayPull2['default'](this._listeners, listener);
	    }
	  }, {
	    key: 'callListeners',
	    value: function callListeners() {
	      var _this = this;
	
	      this._listeners.forEach(function (listener) {
	        return listener(_this);
	      });
	    }
	  }]);
	
	  return MediaQueryListMock;
	})();
	
	exports['default'] = MediaQueryListMock;
	module.exports = exports['default'];
	//# sourceMappingURL=MediaQueryListMock.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(63),
	    getLength = __webpack_require__(16),
	    isArray = __webpack_require__(21),
	    isIterateeCall = __webpack_require__(34),
	    isLength = __webpack_require__(18),
	    isString = __webpack_require__(65),
	    values = __webpack_require__(66);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `target` is in `collection` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. If `fromIndex` is negative, it's used as the offset
	 * from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @alias contains, include
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {*} target The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	 * // => true
	 *
	 * _.includes('pebbles', 'eb');
	 * // => true
	 */
	function includes(collection, target, fromIndex, guard) {
	  var length = collection ? getLength(collection) : 0;
	  if (!isLength(length)) {
	    collection = values(collection);
	    length = collection.length;
	  }
	  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	    fromIndex = 0;
	  } else {
	    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	  }
	  return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(64);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(14);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(67),
	    keys = __webpack_require__(9);
	
	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return baseValues(object, keys(object));
	}
	
	module.exports = values;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}
	
	module.exports = baseValues;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(63);
	
	/** Used for native method references. */
	var arrayProto = Array.prototype;
	
	/** Native method references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes all provided values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {...*} [values] The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = [1, 2, 3, 1, 2, 3];
	 *
	 * _.pull(array, 2, 3);
	 * console.log(array);
	 * // => [1, 1]
	 */
	function pull() {
	  var args = arguments,
	      array = args[0];
	
	  if (!(array && array.length)) {
	    return array;
	  }
	  var index = 0,
	      indexOf = baseIndexOf,
	      length = args.length;
	
	  while (++index < length) {
	    var fromIndex = 0,
	        value = args[index];
	
	    while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	      splice.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}
	
	module.exports = pull;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	'use strict';
	
	exports.match = matchQuery;
	exports.parse = parseQuery;
	
	// -----------------------------------------------------------------------------
	
	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
	
	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;
	
	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;
	
	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }
	
	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];
	
	            // Missing or falsy values don't match.
	            if (!value) { return false; }
	
	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();
	
	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;
	
	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;
	
	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;
	
	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }
	
	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });
	
	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}
	
	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();
	
	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};
	
	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';
	
	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];
	
	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);
	
	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });
	
	        return parsed;
	    });
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;
	
	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }
	
	    return decimal;
	}
	
	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
	
	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}
	
	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];
	
	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(72);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(83);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _mobx = __webpack_require__(87);
	
	var _matchMedia = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var breakpoints = void 0;
	
	var MatchMediaProvider = (_temp = _class = function (_Component) {
	  _inherits(MatchMediaProvider, _Component);
	
	  function MatchMediaProvider(props) {
	    _classCallCheck(this, MatchMediaProvider);
	
	    var _this = _possibleConstructorReturn(this, (MatchMediaProvider.__proto__ || Object.getPrototypeOf(MatchMediaProvider)).call(this, props));
	
	    _this.handleResize = function (e) {
	      e.preventDefault();
	      _this.matchBreakpoints();
	    };
	
	    _this.matchBreakpoints = function () {
	      (0, _mobx.runInAction)('match breakpoints', function () {
	        (0, _matchMedia.setMatchMediaConfig)();
	        Object.keys(_this.templates).forEach(function (key) {
	          return _this.updateBreakpoints(key, _this.templates[key]);
	        });
	      });
	    };
	
	    _this.updateBreakpoints = (0, _mobx.action)('update breakpoints', function (key, val) {
	      var match = (0, _matchMedia.matchMedia)(val).matches;
	      (0, _mobx.set)(_this.props.breakpoints, _defineProperty({}, key, match));
	    });
	
	    if (!breakpoints) breakpoints = Object.assign({}, (0, _mobx.toJS)(_this.props.breakpoints));
	    if (!_this.templates) _this.templates = Object.assign({}, (0, _mobx.toJS)(breakpoints));
	    return _this;
	  }
	
	  _createClass(MatchMediaProvider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize); // eslint-disable-line
	      this.matchBreakpoints(); // set initials values
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props && this.props.children
	      );
	    }
	  }]);
	
	  return MatchMediaProvider;
	}(_react.Component), _class.propTypes = {
	  children: _propTypes2.default.node,
	  breakpoints: _propTypes2.default.object
	}, _temp);
	exports.default = MatchMediaProvider;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(74);
	} else {
	  module.exports = __webpack_require__(79);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 73 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.3.2
	 * react.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var m=__webpack_require__(75),n=__webpack_require__(76),p=__webpack_require__(77),q=__webpack_require__(78),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
	60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
	function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}var H=G.prototype=new F;
	H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
	function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
	function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a)}
	function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
	h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}
	function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b)}
	var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b)},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
	_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
	(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
	Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.3.2
	 * react.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';
	
	var _assign = __webpack_require__(75);
	var invariant = __webpack_require__(76);
	var emptyObject = __webpack_require__(77);
	var warning = __webpack_require__(80);
	var emptyFunction = __webpack_require__(78);
	var checkPropTypes = __webpack_require__(81);
	
	// TODO: this is special because it gets imported during build.
	
	var ReactVersion = '16.3.2';
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol['for'];
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
	var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
	var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;
	
	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
	    return null;
	  }
	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }
	  return null;
	}
	
	// Relying on the `invariant()` implementation lets us
	// have preserve the format and params in the www builds.
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	var didWarnStateUpdateForUnmountedComponent = {};
	
	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;
	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }
	    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	Component.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	Component.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	        return undefined;
	      }
	    });
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	
	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };
	  {
	    Object.seal(refObject);
	  }
	  return refObject;
	}
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown = void 0;
	var specialPropRefWarningShown = void 0;
	
	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    });
	    // self and source are DEV only properties.
	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    });
	    // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.
	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */
	function createElement(type, config, children) {
	  var propName = void 0;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://reactjs.org/docs/react-api.html#createfactory
	 */
	
	
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	}
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */
	function cloneElement(element, config, children) {
	  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;
	
	  var propName = void 0;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps = void 0;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	
	var ReactDebugCurrentFrame = {};
	
	{
	  // Component that is being worked on
	  ReactDebugCurrentFrame.getCurrentStack = null;
	
	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var impl = ReactDebugCurrentFrame.getCurrentStack;
	    if (impl) {
	      return impl();
	    }
	    return null;
	  };
	}
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	var POOL_SIZE = 10;
	var traverseContextPool = [];
	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}
	
	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;
	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  var invokeCallback = false;
	
	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;
	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }
	    }
	  }
	
	  if (invokeCallback) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child = void 0;
	  var nextName = void 0;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (typeof iteratorFn === 'function') {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
	          didWarnAboutMaps = true;
	        }
	      }
	
	      var iterator = iteratorFn.call(children);
	      var step = void 0;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }
	      var childrenString = '' + children;
	      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
	  return children;
	}
	
	function createContext(defaultValue, calculateChangedBits) {
	  if (calculateChangedBits === undefined) {
	    calculateChangedBits = null;
	  } else {
	    {
	      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
	    }
	  }
	
	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _calculateChangedBits: calculateChangedBits,
	    _defaultValue: defaultValue,
	    _currentValue: defaultValue,
	    _changedBits: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null
	  };
	
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  context.Consumer = context;
	
	  {
	    context._currentRenderer = null;
	  }
	
	  return context;
	}
	
	function forwardRef(render) {
	  {
	    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;
	  }
	
	  return {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };
	}
	
	var describeComponentFrame = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}
	
	function getComponentName(fiber) {
	  var type = fiber.type;
	
	  if (typeof type === 'function') {
	    return type.displayName || type.name;
	  }
	  if (typeof type === 'string') {
	    return type;
	  }
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'ReactFragment';
	    case REACT_PORTAL_TYPE:
	      return 'ReactPortal';
	    case REACT_CALL_TYPE:
	      return 'ReactCall';
	    case REACT_RETURN_TYPE:
	      return 'ReactReturn';
	  }
	  if (typeof type === 'object' && type !== null) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        var functionName = type.render.displayName || type.render.name || '';
	        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    }
	  }
	  return null;
	}
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	var currentlyValidatingElement = void 0;
	var propTypesMisspellWarningShown = void 0;
	
	var getDisplayName = function () {};
	var getStackAddendum = function () {};
	
	{
	  currentlyValidatingElement = null;
	
	  propTypesMisspellWarningShown = false;
	
	  getDisplayName = function (element) {
	    if (element == null) {
	      return '#empty';
	    } else if (typeof element === 'string' || typeof element === 'number') {
	      return '#text';
	    } else if (typeof element.type === 'string') {
	      return element.type;
	    } else if (element.type === REACT_FRAGMENT_TYPE) {
	      return 'React.Fragment';
	    } else {
	      return element.type.displayName || element.type.name || 'Unknown';
	    }
	  };
	
	  getStackAddendum = function () {
	    var stack = '';
	    if (currentlyValidatingElement) {
	      var name = getDisplayName(currentlyValidatingElement);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
	    }
	    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
	    return stack;
	  };
	}
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();
	
	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
	  }
	
	  currentlyValidatingElement = element;
	  {
	    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
	  }
	  currentlyValidatingElement = null;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step = void 0;
	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  var propTypes = componentClass.propTypes;
	  if (propTypes) {
	    currentlyValidatingElement = element;
	    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
	    currentlyValidatingElement = null;
	  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	    propTypesMisspellWarningShown = true;
	    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    !componentClass.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */
	function validateFragmentProps(fragment) {
	  currentlyValidatingElement = fragment;
	
	  var keys = Object.keys(fragment.props);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key !== 'children' && key !== 'key') {
	      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
	      break;
	    }
	  }
	
	  if (fragment.ref !== null) {
	    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
	  }
	
	  currentlyValidatingElement = null;
	}
	
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type);
	
	  // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.
	  if (!validType) {
	    var info = '';
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }
	
	    var sourceInfo = getSourceInfoErrorAddendum(props);
	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }
	
	    info += getStackAddendum() || '';
	
	    var typeString = void 0;
	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else {
	      typeString = typeof type;
	    }
	
	    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	  }
	
	  var element = createElement.apply(this, arguments);
	
	  // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.
	  if (element == null) {
	    return element;
	  }
	
	  // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)
	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }
	
	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }
	
	  return element;
	}
	
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;
	  // Legacy hook: remove it
	  {
	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }
	
	  return validatedFactory;
	}
	
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);
	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }
	  validatePropTypes(newElement);
	  return newElement;
	}
	
	var React = {
	  Children: {
	    map: mapChildren,
	    forEach: forEachChildren,
	    count: countChildren,
	    toArray: toArray,
	    only: onlyChild
	  },
	
	  createRef: createRef,
	  Component: Component,
	  PureComponent: PureComponent,
	
	  createContext: createContext,
	  forwardRef: forwardRef,
	
	  Fragment: REACT_FRAGMENT_TYPE,
	  StrictMode: REACT_STRICT_MODE_TYPE,
	  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
	
	  createElement: createElementWithValidation,
	  cloneElement: cloneElementWithValidation,
	  createFactory: createFactoryWithValidation,
	  isValidElement: isValidElement,
	
	  version: ReactVersion,
	
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: ReactCurrentOwner,
	    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	    assign: _assign
	  }
	};
	
	{
	  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}
	
	
	
	var React$2 = Object.freeze({
		default: React
	});
	
	var React$3 = ( React$2 && React ) || React$2;
	
	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var react = React$3['default'] ? React$3['default'] : React$3;
	
	module.exports = react;
	  })();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(78);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(76);
	  var warning = __webpack_require__(80);
	  var ReactPropTypesSecret = __webpack_require__(82);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(84)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(86)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(78);
	var invariant = __webpack_require__(76);
	var warning = __webpack_require__(80);
	var assign = __webpack_require__(85);
	
	var ReactPropTypesSecret = __webpack_require__(82);
	var checkPropTypes = __webpack_require__(81);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ },
/* 85 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(78);
	var invariant = __webpack_require__(76);
	var ReactPropTypesSecret = __webpack_require__(82);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */
	
	var extendStatics = Object.setPrototypeOf ||
	    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	
	var __assign = Object.assign || function __assign(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}
	
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	
	var enumerableDescriptorCache = {};
	var nonEnumerableDescriptorCache = {};
	function createPropertyInitializerDescriptor(prop, enumerable) {
	    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
	    return (cache[prop] ||
	        (cache[prop] = {
	            configurable: true,
	            enumerable: enumerable,
	            get: function () {
	                initializeInstance(this);
	                return this[prop];
	            },
	            set: function (value) {
	                initializeInstance(this);
	                this[prop] = value;
	            }
	        }));
	}
	function initializeInstance(target) {
	    if (target.__mobxDidRunLazyInitializers === true)
	        return;
	    var decorators = target.__mobxDecorators;
	    if (decorators) {
	        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
	        for (var key in decorators) {
	            var d = decorators[key];
	            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
	        }
	    }
	}
	function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
	    return function decoratorFactory() {
	        var decoratorArguments;
	        var decorator = function decorate(target, prop, descriptor, applyImmediately
	        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
	        // as the instance to apply the deorator to equals the target
	        ) {
	            if (applyImmediately === true) {
	                propertyCreator(target, prop, descriptor, target, decoratorArguments);
	                return null;
	            }
	            if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments))
	                fail$1("This function is a decorator, but it wasn't invoked like a decorator");
	            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
	                var inheritedDecorators = target.__mobxDecorators;
	                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
	            }
	            target.__mobxDecorators[prop] = {
	                prop: prop,
	                propertyCreator: propertyCreator,
	                descriptor: descriptor,
	                decoratorTarget: target,
	                decoratorArguments: decoratorArguments
	            };
	            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
	        };
	        if (quacksLikeADecorator(arguments)) {
	            // @decorator
	            decoratorArguments = EMPTY_ARRAY;
	            return decorator.apply(null, arguments);
	        }
	        else {
	            // @decorator(args)
	            decoratorArguments = Array.prototype.slice.call(arguments);
	            return decorator;
	        }
	    };
	}
	function quacksLikeADecorator(args) {
	    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
	        (args.length === 4 && args[3] === true));
	}
	
	function isSpyEnabled() {
	    return !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = __assign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(__assign({}, change, { spyReportEnd: true }));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    return once(function () {
	        globalState.spyListeners = globalState.spyListeners
	            .filter(function (l) { return l !== listener; });
	    });
	}
	
	function createAction(actionName, fn) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof fn === "function", "`action` can only be invoked on functions");
	        if (typeof actionName !== "string" || !actionName)
	            fail$1("actions should have valid names, got: '" + actionName + "'");
	    }
	    var res = function () {
	        return executeAction(actionName, fn, this, arguments);
	    };
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        endAction(runInfo);
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy) {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy)
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	
	function dontReassignFields() {
	    fail$1(process.env.NODE_ENV !== "production" && "@action fields are not reassignable");
	}
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor) {
	            if (process.env.NODE_ENV !== "production" && descriptor.get !== undefined) {
	                return fail$1("@action cannot be used with getters");
	            }
	            // babel / typescript
	            // @action method() { }
	            if (descriptor.value) {
	                // typescript
	                return {
	                    value: createAction(name, descriptor.value),
	                    enumerable: false,
	                    configurable: true,
	                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
	                };
	            }
	            // babel only: @action method = () => {}
	            var initializer_1 = descriptor.initializer;
	            return {
	                enumerable: false,
	                configurable: true,
	                writable: true,
	                initializer: function () {
	                    // N.B: we can't immediately invoke initializer; this would be wrong
	                    return createAction(name, initializer_1.call(this));
	                }
	            };
	        }
	        // bound instance methods
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function actionFieldDecorator(name) {
	    // Simple property that writes on first invocation to the current instance
	    return function (target, prop, descriptor) {
	        Object.defineProperty(target, prop, {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return undefined;
	            },
	            set: function (value) {
	                addHiddenFinalProp(this, prop, action(name, value));
	            }
	        });
	    };
	}
	function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
	    if (applyToInstance === true) {
	        defineBoundAction(target, propertyName, descriptor.value);
	        return null;
	    }
	    if (descriptor) {
	        // if (descriptor.value)
	        // Typescript / Babel: @action.bound method() { }
	        // also: babel @action.bound method = () => {}
	        return {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
	                return this[propertyName];
	            },
	            set: dontReassignFields
	        };
	    }
	    // field decorator Typescript @action.bound method = () => {}
	    return {
	        enumerable: false,
	        configurable: true,
	        set: function (v) {
	            defineBoundAction(this, propertyName, v);
	        },
	        get: function () {
	            return undefined;
	        }
	    };
	}
	
	var action = function action(arg1, arg2, arg3, arg4) {
	    // action(fn() {})
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    // action("name", fn() {})
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    // @action("name") fn() {}
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    // @action fn() {}
	    if (arg4 === true) {
	        // apply to instance immediately
	        arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
	    }
	    else {
	        return namedActionDecorator(arg2).apply(null, arguments);
	    }
	};
	action.bound = boundActionDecorator;
	function runInAction(arg1, arg2) {
	    // TODO: deprecate?
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
	        if (typeof actionName !== "string" || !actionName)
	            fail$1("actions should have valid names, got: '" + actionName + "'");
	    }
	    return executeAction(actionName, fn, this, undefined);
	}
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	function defineBoundAction(target, propertyName, fn) {
	    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
	}
	
	var toString = Object.prototype.toString;
	function deepEqual(a, b) {
	    return eq(a, b);
	}
	// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
	// Internal recursive comparison function for `isEqual`.
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b)
	        return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null)
	        return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a)
	        return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== "function" && type !== "object" && typeof b != "object")
	        return false;
	    return deepEq(a, b, aStack, bStack);
	}
	// Internal recursive comparison function for `isEqual`.
	function deepEq(a, b, aStack, bStack) {
	    // Unwrap any wrapped objects.
	    a = unwrap(a);
	    b = unwrap(b);
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b))
	        return false;
	    switch (className) {
	        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	        case "[object RegExp]":
	        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	        case "[object String]":
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return "" + a === "" + b;
	        case "[object Number]":
	            // `NaN`s are equivalent, but non-reflexive.
	            // Object(NaN) is equivalent to NaN.
	            if (+a !== +a)
	                return +b !== +b;
	            // An `egal` comparison is performed for other numeric values.
	            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	        case "[object Date]":
	        case "[object Boolean]":
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a === +b;
	        case "[object Symbol]":
	            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
	    }
	    var areArrays = className === "[object Array]";
	    if (!areArrays) {
	        if (typeof a != "object" || typeof b != "object")
	            return false;
	        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	        // from different frames are.
	        var aCtor = a.constructor, bCtor = b.constructor;
	        if (aCtor !== bCtor &&
	            !(typeof aCtor === "function" &&
	                aCtor instanceof aCtor &&
	                typeof bCtor === "function" &&
	                bCtor instanceof bCtor) &&
	            ("constructor" in a && "constructor" in b)) {
	            return false;
	        }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] === a)
	            return bStack[length] === b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        length = a.length;
	        if (length !== b.length)
	            return false;
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (length--) {
	            if (!eq(a[length], b[length], aStack, bStack))
	                return false;
	        }
	    }
	    else {
	        // Deep compare objects.
	        var keys$$1 = Object.keys(a), key;
	        length = keys$$1.length;
	        // Ensure that both objects contain the same number of properties before comparing deep equality.
	        if (Object.keys(b).length !== length)
	            return false;
	        while (length--) {
	            // Deep compare each member
	            key = keys$$1[length];
	            if (!(has$$1(b, key) && eq(a[key], b[key], aStack, bStack)))
	                return false;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	}
	function unwrap(a) {
	    if (isObservableArray(a))
	        return a.peek();
	    if (isES6Map(a) || isObservableMap(a))
	        return iteratorToArray(a.entries());
	    return a;
	}
	function has$$1(a, key) {
	    return Object.prototype.hasOwnProperty.call(a, key);
	}
	
	function identityComparer(a, b) {
	    return a === b;
	}
	function structuralComparer(a, b) {
	    return deepEqual(a, b);
	}
	function defaultComparer(a, b) {
	    return areBothNaN(a, b) || identityComparer(a, b);
	}
	var comparer = {
	    identity: identityComparer,
	    structural: structuralComparer,
	    default: defaultComparer
	};
	
	/**
	 * Creates a named reactive view and keeps it alive, so that the view is always
	 * updated if one of the dependencies changes, even when the view is not further used by something else.
	 * @param view The reactive view
	 * @returns disposer function, which can be used to stop the view from being updated in the future.
	 */
	function autorun(view, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof view === "function", "Autorun expects a function as first argument");
	        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
	    }
	    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
	    var runSync = !opts.scheduler && !opts.delay;
	    var reaction;
	    if (runSync) {
	        // normal autorun
	        reaction = new Reaction(name, function () {
	            this.track(reactionRunner);
	        }, opts.onError);
	    }
	    else {
	        var scheduler_1 = createSchedulerFromOptions(opts);
	        // debounced autorun
	        var isScheduled_1 = false;
	        reaction = new Reaction(name, function () {
	            if (!isScheduled_1) {
	                isScheduled_1 = true;
	                scheduler_1(function () {
	                    isScheduled_1 = false;
	                    if (!reaction.isDisposed)
	                        reaction.track(reactionRunner);
	                });
	            }
	        }, opts.onError);
	    }
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	var run = function (f) { return f(); };
	function createSchedulerFromOptions(opts) {
	    return opts.scheduler
	        ? opts.scheduler
	        : opts.delay ? function (f) { return setTimeout(f, opts.delay); } : run;
	}
	function reaction(expression, effect, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (typeof opts === "boolean") {
	        opts = { fireImmediately: opts };
	        deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
	    }
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof expression === "function", "First argument to reaction should be a function");
	        invariant(typeof opts === "object", "Third argument of reactions should be an object");
	    }
	    var name = opts.name || "Reaction@" + getNextId();
	    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
	    var runSync = !opts.scheduler && !opts.delay;
	    var scheduler = createSchedulerFromOptions(opts);
	    var firstTime = true;
	    var isScheduled = false;
	    var value;
	    var equals = opts.compareStructural
	        ? comparer.structural
	        : opts.equals || comparer.default;
	    var r = new Reaction(name, function () {
	        if (firstTime || runSync) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            scheduler(reactionRunner);
	        }
	    }, opts.onError);
	    function reactionRunner() {
	        isScheduled = false; // Q: move into reaction runner?
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var nextValue = expression(r);
	            changed = firstTime || !equals(value, nextValue);
	            value = nextValue;
	        });
	        if (firstTime && opts.fireImmediately)
	            effectAction(value, r);
	        if (!firstTime && changed === true)
	            effectAction(value, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	function wrapErrorHandler(errorHandler, baseFn) {
	    return function () {
	        try {
	            return baseFn.apply(this, arguments);
	        }
	        catch (e) {
	            errorHandler.call(this, e);
	        }
	    };
	}
	
	/**
	 * A node in the state dependency root that observes other nodes, and can be observed itself.
	 *
	 * ComputedValue will remember the result of the computation for the duration of the batch, or
	 * while being observed.
	 *
	 * During this time it will recompute only when one of its direct dependencies changed,
	 * but only when it is being accessed with `ComputedValue.get()`.
	 *
	 * Implementation description:
	 * 1. First time it's being accessed it will compute and remember result
	 *    give back remembered result until 2. happens
	 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
	 * 3. When it's being accessed, recompute if any shallow dependency changed.
	 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
	 *    go to step 2. either way
	 *
	 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
	 */
	var ComputedValue = /** @class */ (function () {
	    /**
	     * Create a new computed value based on a function expression.
	     *
	     * The `name` property is for debug purposes only.
	     *
	     * The `equals` property specifies the comparer function to use to determine if a newly produced
	     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
	     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
	     * Structural comparison can be convenient if you always produce an new aggregated object and
	     * don't want to notify observers if it is structurally the same.
	     * This is useful for working with vectors, mouse coordinates etc.
	     */
	    function ComputedValue(options) {
	        var _this = this;
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = null; // during tracking it's an array with new observed observers
	        this.isBeingObserved = false;
	        this.isPendingUnobservation = false;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = new CaughtException(null);
	        this.isComputing = false; // to check for cycles
	        this.isRunningSetter = false;
	        this.isTracing = TraceMode.NONE;
	        if (process.env.NODE_ENV === "production" && !options.get)
	            return fail$1("missing option for computed: get");
	        this.derivation = options.get;
	        this.name = options.name || "ComputedValue@" + getNextId();
	        if (options.set)
	            this.setter = createAction(this.name + "-setter", options.set);
	        this.equals =
	            options.equals ||
	                (options.compareStructural || options.struct
	                    ? comparer.structural
	                    : comparer.default);
	        this.scope = options.context;
	        this.requiresReaction = !!options.requiresReaction;
	        if (options.keepAlive === true) {
	            // dangerous: never exposed, so this cmputed value should not depend on observables
	            // that live globally, or it will never get disposed! (nor anything attached to it)
	            autorun(function () { return _this.get(); });
	        }
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () { };
	    ComputedValue.prototype.onBecomeObserved = function () { };
	    /**
	     * Returns the current value of this computed value.
	     * Will evaluate its computation first if needed.
	     */
	    ComputedValue.prototype.get = function () {
	        if (this.isComputing)
	            fail$1("Cycle detected in computation " + this.name + ": " + this.derivation);
	        if (globalState.inBatch === 0) {
	            if (shouldCompute(this)) {
	                this.warnAboutUntrackedRead();
	                startBatch(); // See perf test 'computed memoization'
	                this.value = this.computeValue(false);
	                endBatch();
	            }
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this
	                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, process.env.NODE_ENV !== "production" &&
	                "[ComputedValue '" + this
	                    .name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                name: this.name
	            });
	        }
	        var oldValue = this.value;
	        var wasSuspended = 
	        /* see #1208 */ this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
	        var newValue = this.computeValue(true);
	        var changed = wasSuspended ||
	            isCaughtException(oldValue) ||
	            isCaughtException(newValue) ||
	            !this.equals(oldValue, newValue);
	        if (changed) {
	            this.value = newValue;
	        }
	        return changed;
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            if (globalState.disableErrorBoundaries === true) {
	                res = this.derivation.call(this.scope);
	            }
	            else {
	                try {
	                    res = this.derivation.call(this.scope);
	                }
	                catch (e) {
	                    res = new CaughtException(e);
	                }
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ComputedValue.prototype.suspend = function () {
	        clearObserving(this);
	        this.value = undefined; // don't hold on to computed value!
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.warnAboutUntrackedRead = function () {
	        if (process.env.NODE_ENV === "production")
	            return;
	        if (this.requiresReaction === true) {
	            fail$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
	        }
	        if (this.isTracing !== TraceMode.NONE) {
	            console.log("[mobx.trace] '" + this
	                .name + "' is being read outside a reactive context. Doing a full recompute");
	        }
	        if (globalState.computedRequiresReaction) {
	            console.warn("[mobx] Computed value " + this
	                .name + " is being read outside a reactive context. Doing a full recompute");
	        }
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ComputedValue;
	}());
	ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	
	function hasInterceptors(interceptable) {
	    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	
	function hasListeners(listenable) {
	    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	
	var UNCHANGED = {};
	declareAtom();
	var ObservableValue = /** @class */ (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled()) {
	            // only notify spy if this is a stand-alone observable
	            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    name: this.name,
	                    newValue: newValue,
	                    oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this,
	                type: "update",
	                newValue: newValue
	            });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        // apply modifier
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.value !== newValue ? newValue : UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.dehanceValue(this.value);
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ObservableValue;
	}(Atom));
	ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	
	var ObservableObjectAdministration = /** @class */ (function () {
	    function ObservableObjectAdministration(target, name, defaultEnhancer) {
	        this.target = target;
	        this.name = name;
	        this.defaultEnhancer = defaultEnhancer;
	        this.values = {};
	    }
	    ObservableObjectAdministration.prototype.read = function (owner, key) {
	        if (this.target !== owner) {
	            this.illegalAccess(owner, key);
	            return;
	        }
	        return this.values[key].get();
	    };
	    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
	        var instance = this.target;
	        if (instance !== owner) {
	            this.illegalAccess(owner, key);
	            return;
	        }
	        var observable = this.values[key];
	        if (observable instanceof ComputedValue) {
	            observable.set(newValue);
	            return;
	        }
	        // intercept
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "update",
	                object: instance,
	                name: key,
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        newValue = observable.prepareNewValue(newValue);
	        // notify spy & observers
	        if (newValue !== UNCHANGED) {
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: instance,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableObjectAdministration.prototype.remove = function (key) {
	        if (!this.values[key])
	            return;
	        var target = this.target;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: target,
	                name: key,
	                type: "remove"
	            });
	            if (!change)
	                return;
	        }
	        try {
	            startBatch();
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var oldValue = this.values[key].get();
	            if (this.keys)
	                this.keys.remove(key);
	            delete this.values[key];
	            delete this.target[key];
	            var change = notify || notifySpy
	                ? {
	                    type: "remove",
	                    object: target,
	                    oldValue: oldValue,
	                    name: key
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	        finally {
	            endBatch();
	        }
	    };
	    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
	        /**
	         * This happens if a property is accessed through the prototype chain, but the property was
	         * declared directly as own property on the prototype.
	         *
	         * E.g.:
	         * class A {
	         * }
	         * extendObservable(A.prototype, { x: 1 })
	         *
	         * classB extens A {
	         * }
	         * console.log(new B().x)
	         *
	         * It is unclear whether the property should be considered 'static' or inherited.
	         * Either use `console.log(A.x)`
	         * or: decorate(A, { x: observable })
	         *
	         * When using decorate, the property will always be redeclared as own property on the actual instance
	         */
	        return fail$1("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableObjectAdministration.prototype.getKeys = function () {
	        var _this = this;
	        if (this.keys === undefined) {
	            this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true);
	        }
	        return this.keys.slice();
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name, defaultEnhancer) {
	    if (name === void 0) { name = ""; }
	    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
	    var adm = target.$mobx;
	    if (adm)
	        return adm;
	    process.env.NODE_ENV !== "production" &&
	        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
	    addHiddenFinalProp(target, "$mobx", adm);
	    return adm;
	}
	function defineObservableProperty(target, propName, newValue, enhancer) {
	    var adm = asObservableObject(target);
	    assertPropertyConfigurable(target, propName);
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            object: target,
	            name: propName,
	            type: "add",
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
	    newValue = observable.value; // observableValue might have changed it
	    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
	    if (adm.keys)
	        adm.keys.push(propName);
	    notifyPropertyAddition(adm, target, propName, newValue);
	}
	function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
	propName, options) {
	    var adm = asObservableObject(target);
	    options.name = adm.name + "." + propName;
	    options.context = target;
	    adm.values[propName] = new ComputedValue(options);
	    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
	}
	var observablePropertyConfigs = {};
	var computedPropertyConfigs = {};
	function generateObservablePropConfig(propName) {
	    return (observablePropertyConfigs[propName] ||
	        (observablePropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                return this.$mobx.read(this, propName);
	            },
	            set: function (v) {
	                this.$mobx.write(this, propName, v);
	            }
	        }));
	}
	function getAdministrationForComputedPropOwner(owner) {
	    var adm = owner.$mobx;
	    if (!adm) {
	        // because computed props are declared on proty,
	        // the current instance might not have been initialized yet
	        initializeInstance(owner);
	        return owner.$mobx;
	    }
	    return adm;
	}
	function generateComputedPropConfig(propName) {
	    return (computedPropertyConfigs[propName] ||
	        (computedPropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return getAdministrationForComputedPropOwner(this).read(this, propName);
	            },
	            set: function (v) {
	                getAdministrationForComputedPropOwner(this).write(this, propName, v);
	            }
	        }));
	}
	function notifyPropertyAddition(adm, object, key, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy
	        ? {
	            type: "add",
	            object: object,
	            name: key,
	            newValue: newValue
	        }
	        : null;
	    if (notifySpy)
	        spyReportStart(__assign({}, change, { name: adm.name, key: key }));
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        return isObservableObjectAdministration(thing.$mobx);
	    }
	    return false;
	}
	
	function createDecoratorForEnhancer(enhancer) {
	    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
	        var initialValue = descriptor
	            ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value
	            : undefined;
	        defineObservableProperty(target, propertyName, initialValue, enhancer);
	    });
	    var res = 
	    // Extra process checks, as this happens during module initialization
	    typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production"
	        ? function observableDecorator() {
	            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
	            // and simply return the created prop decorator
	            if (arguments.length < 2)
	                return fail$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
	            return decorator.apply(null, arguments);
	        }
	        : decorator;
	    res.enhancer = enhancer;
	    return res;
	}
	
	function _isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (process.env.NODE_ENV !== "production" &&
	            (isObservableMap(value) || isObservableArray(value)))
	            return fail$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    // For first check, see #701
	    return (isObservableObject(value) ||
	        !!value.$mobx ||
	        isAtom(value) ||
	        isReaction(value) ||
	        isComputedValue(value));
	}
	function isObservable(value) {
	    if (arguments.length !== 1)
	        fail$1(process.env.NODE_ENV !== "production" &&
	            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isObservable(value);
	}
	function isObservableProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail$1(process.env.NODE_ENV !== "production" && "expected a property name as second argument");
	    return _isObservable(value, propName);
	}
	
	function _isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        if (!value.$mobx.values[property])
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	function isComputed(value) {
	    if (arguments.length > 1)
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isComputed(value);
	}
	function isComputedProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "isComputed expected a property name as second argument");
	    return _isComputed(value, propName);
	}
	
	var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
	    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
	    // Optimization: faster on decorator target or instance? Assuming target
	    // Optimiziation: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
	    var options = decoratorArgs[0] || {};
	    defineComputedProperty(instance, propertyName, __assign({}, options, { get: get, set: set }));
	});
	var computedStructDecorator = computedDecorator({ equals: comparer.structural });
	/**
	 * Decorator for class properties: @computed get value() { return expr; }.
	 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
	 */
	var computed = function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        // @computed
	        return computedDecorator.apply(null, arguments);
	    }
	    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
	        // @computed({ options })
	        return computedDecorator.apply(null, arguments);
	    }
	    // computed(expr, options?)
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
	        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
	    }
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.get = arg1;
	    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
	    opts.name = opts.name || arg1.name || ""; /* for generated name */
	    return new ComputedValue(opts);
	};
	computed.struct = computedStructDecorator;
	
	function extendShallowObservable(target, properties, decorators) {
	    deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
	    return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
	}
	function extendObservable(target, properties, decorators, options) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
	        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
	        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
	        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
	        if (decorators)
	            for (var key in decorators)
	                if (!(key in properties))
	                    fail$1("Trying to declare a decorator for unspecified property '" + key + "'");
	    }
	    options = asCreateObservableOptions(options);
	    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
	    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
	    startBatch();
	    try {
	        for (var key in properties) {
	            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
	            if (process.env.NODE_ENV !== "production") {
	                if (Object.getOwnPropertyDescriptor(target, key))
	                    fail$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
	                if (isComputed(descriptor.value))
	                    fail$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
	            }
	            var decorator = decorators && key in decorators
	                ? decorators[key]
	                : descriptor.get ? computedDecorator : defaultDecorator;
	            if (process.env.NODE_ENV !== "production" && typeof decorator !== "function")
	                return fail$1("Not a valid decorator for '" + key + "', got: " + decorator);
	            var resultDescriptor = decorator(target, key, descriptor, true);
	            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
	            )
	                Object.defineProperty(target, key, resultDescriptor);
	        }
	    }
	    finally {
	        endBatch();
	    }
	    return target;
	}
	
	// Predefined bags of create observable options, to avoid allocating temporarily option objects
	// in the majority of cases
	var defaultCreateObservableOptions = {
	    deep: true,
	    name: undefined,
	    defaultDecorator: undefined
	};
	var shallowCreateObservableOptions = {
	    deep: false,
	    name: undefined,
	    defaultDecorator: undefined
	};
	Object.freeze(defaultCreateObservableOptions);
	Object.freeze(shallowCreateObservableOptions);
	function assertValidOption(key) {
	    if (!/^(deep|name|defaultDecorator)$/.test(key))
	        fail$1("invalid option for (extend)observable: " + key);
	}
	function asCreateObservableOptions(thing) {
	    if (thing === null || thing === undefined)
	        return defaultCreateObservableOptions;
	    if (typeof thing === "string")
	        return { name: thing, deep: true };
	    if (process.env.NODE_ENV !== "production") {
	        if (typeof thing !== "object")
	            return fail$1("expected options object");
	        Object.keys(thing).forEach(assertValidOption);
	    }
	    return thing;
	}
	function getEnhancerFromOptions(options) {
	    return options.defaultDecorator
	        ? options.defaultDecorator.enhancer
	        : options.deep === false ? referenceEnhancer : deepEnhancer;
	}
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	/**
	 * Turns an object, array or function into a reactive structure.
	 * @param v the value which should become observable.
	 */
	function createObservable(v, arg2, arg3) {
	    // @observable someProp;
	    if (typeof arguments[1] === "string") {
	        return deepDecorator.apply(null, arguments);
	    }
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    var res = isPlainObject(v)
	        ? observable.object(v, arg2, arg3)
	        : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : v;
	    // this value could be converted to a new observable data structure, return it
	    if (res !== v)
	        return res;
	    // otherwise, just box it
	    fail$1(process.env.NODE_ENV !== "production" &&
	        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
	}
	var observableFactories = {
	    box: function (value, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        var o = asCreateObservableOptions(options);
	        return new ObservableValue(value, getEnhancerFromOptions(o), o.name);
	    },
	    shallowBox: function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowBox");
	        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
	        return observable.box(value, { name: name, deep: false });
	    },
	    array: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        var o = asCreateObservableOptions(options);
	        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    shallowArray: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowArray");
	        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
	        return observable.array(initialValues, { name: name, deep: false });
	    },
	    map: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        var o = asCreateObservableOptions(options);
	        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    shallowMap: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowMap");
	        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
	        return observable.map(initialValues, { name: name, deep: false });
	    },
	    object: function (props, decorators, options) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("object");
	        var o = asCreateObservableOptions(options);
	        return extendObservable({}, props, decorators, o);
	    },
	    shallowObject: function (props, name) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("shallowObject");
	        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
	        return observable.object(props, {}, { name: name, deep: false });
	    },
	    ref: refDecorator,
	    shallow: shallowDecorator,
	    deep: deepDecorator,
	    struct: refStructDecorator
	};
	var observable = createObservable;
	// weird trick to keep our typings nicely with our funcs, and still extend the observable function
	Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
	function incorrectlyUsedAsDecorator(methodName) {
	    fail$1(
	    // process.env.NODE_ENV !== "production" &&
	    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	
	function deepEnhancer(v, _, name) {
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return observable.array(v, { name: name });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name });
	    if (isES6Map(v))
	        return observable.map(v, { name: name });
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, { name: name, deep: false });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name, deep: false });
	    if (isES6Map(v))
	        return observable.map(v, { name: name, deep: false });
	    return fail$1(process.env.NODE_ENV !== "production" &&
	        "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
	}
	function referenceEnhancer(newValue) {
	    // never turn into an observable
	    return newValue;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (process.env.NODE_ENV !== "production" && isObservable(v))
	        throw "observable.struct should not be used with observable values";
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	
	function iteratorSymbol() {
	    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
	}
	
	function declareIterator(prototType, iteratorFactory) {
	    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
	}
	function makeIterable(iterator) {
	    iterator[iteratorSymbol()] = self;
	    return iterator;
	}
	function self() {
	    return this;
	}
	
	/**
	 * During a transaction no views are updated until the end of the transaction.
	 * The transaction will be run synchronously nonetheless.
	 *
	 * @param action a function that updates some reactive state
	 * @returns any value that was returned by the 'action' parameter.
	 */
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    startBatch();
	    try {
	        return action.apply(thisArg);
	    }
	    finally {
	        endBatch();
	    }
	}
	
	var ObservableMapMarker = {};
	var ObservableMap = /** @class */ (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this.$mobx = ObservableMapMarker;
	        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
	        if (typeof Map !== "function") {
	            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
	        }
	        this._data = new Map();
	        this._hasMap = new Map();
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return this._data.has(key);
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (this._hasMap.has(key))
	            return this._hasMap.get(key).get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: this._data.get(key).value,
	                    name: key
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            transaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data.get(key);
	                observable.setNewValue(undefined);
	                _this._data.delete(key);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
	        var entry = this._hasMap.get(key);
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
	            this._hasMap.set(key, entry);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (key, newValue) {
	        var observable = this._data.get(key);
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (key, newValue) {
	        var _this = this;
	        transaction(function () {
	            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + key, false);
	            _this._data.set(key, observable);
	            newValue = observable.value; // value might have been changed
	            _this._updateHasMapEntry(key, true);
	            _this._keys.push(key);
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        if (this.has(key))
	            return this.dehanceValue(this._data.get(key).get());
	        return this.dehanceValue(undefined);
	    };
	    ObservableMap.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableMap.prototype.keys = function () {
	        return this._keys[iteratorSymbol()]();
	    };
	    ObservableMap.prototype.values = function () {
	        var self = this;
	        var nextIndex = 0;
	        return makeIterable({
	            next: function () {
	                return nextIndex < self._keys.length
	                    ? { value: self.get(self._keys[nextIndex++]), done: false }
	                    : { value: undefined, done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.entries = function () {
	        var self = this;
	        var nextIndex = 0;
	        return makeIterable({
	            next: function () {
	                if (nextIndex < self._keys.length) {
	                    var key = self._keys[nextIndex++];
	                    return {
	                        value: [key, self.get(key)],
	                        done: false
	                    };
	                }
	                return { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this._keys.forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
	    };
	    /** Merge another object into this object, returns this. */
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (isPlainObject(other))
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other))
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            else if (other !== null && other !== undefined)
	                fail$1("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                _this._keys.slice().forEach(function (key) { return _this.delete(key); });
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        transaction(function () {
	            // grab all the keys that are present in the new map but not present in the current map
	            // and delete them from the map, then merge the new map
	            // this will cause reactions only on changed values
	            var newKeys = getMapLikeKeys(values);
	            var oldKeys = _this._keys;
	            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
	            missingKeys.forEach(function (k) { return _this.delete(k); });
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a plain object that represents this map.
	     * Note that all the keys being stringified.
	     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
	     */
	    ObservableMap.prototype.toPOJO = function () {
	        var _this = this;
	        var res = {};
	        this._keys.forEach(function (key) { return (res["" + key] = _this.get(key)); });
	        return res;
	    };
	    /**
	     * Returns a shallow non observable object clone of this map.
	     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
	     */
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = new Map();
	        this._keys.forEach(function (key) { return res.set(key, _this.get(key)); });
	        return res;
	    };
	    ObservableMap.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toPOJO();
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return (this.name +
	            "[{ " +
	            this._keys.map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
	            " }]");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	declareIterator(ObservableMap.prototype, function () {
	    return this.entries();
	});
	addHiddenFinalProp(ObservableMap.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Map");
	/* 'var' fixes small-build issue */
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            if (property !== undefined)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "It is not possible to get index atoms from arrays");
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return getAtom(anyThing._keys);
	            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
	            if (!observable)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        if (property && !thing.$mobx)
	            thing[property]; // See #1072
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail$1(process.env.NODE_ENV !== "production" && "please specify a property");
	            var observable = thing.$mobx.values[property];
	            if (!observable)
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing.$mobx)) {
	            // disposer function
	            return thing.$mobx;
	        }
	    }
	    return fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    if (!thing)
	        fail$1("Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    // Initializers run lazily when transpiling to babel, so make sure they are run...
	    initializeInstance(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing); // valid for arrays as well
	    return named.name;
	}
	
	function onBecomeObserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeObserved", thing, arg2, arg3);
	}
	function onBecomeUnobserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
	}
	function interceptHook(hook, thing, arg2, arg3) {
	    var atom = typeof arg2 === "string" ? getAtom(thing, arg2) : getAtom(thing);
	    var cb = typeof arg2 === "string" ? arg3 : arg2;
	    var orig = atom[hook];
	    if (typeof orig !== "function")
	        return fail$1(process.env.NODE_ENV !== "production" && "Not an atom that can be (un)observed");
	    atom[hook] = function () {
	        orig.call(this);
	        cb.call(this);
	    };
	    return function () {
	        atom[hook] = orig;
	    };
	}
	
	/**
	 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
	 *
	 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
	 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
	 */
	var Atom;
	var isAtom;
	function declareAtom() {
	    if (Atom)
	        return;
	    Atom = /** @class */ (function () {
	        /**
	         * Create a new atom. For debugging purposes it is recommended to give it a name.
	         * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	         */
	        function AtomImpl(name) {
	            if (name === void 0) { name = "Atom@" + getNextId(); }
	            this.name = name;
	            this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
	            this.isBeingObserved = false;
	            this.observers = [];
	            this.observersIndexes = {};
	            this.diffValue = 0;
	            this.lastAccessedBy = 0;
	            this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
	        }
	        AtomImpl.prototype.onBecomeUnobserved = function () {
	            // noop
	        };
	        AtomImpl.prototype.onBecomeObserved = function () {
	            /* noop */
	        };
	        /**
	     * Invoke this method to notify mobx that your atom has been used somehow.
	     * Returns true if there is currently a reactive context.
	     */
	        AtomImpl.prototype.reportObserved = function () {
	            return reportObserved(this);
	        };
	        /**
	     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
	     */
	        AtomImpl.prototype.reportChanged = function () {
	            startBatch();
	            propagateChanged(this);
	            endBatch();
	        };
	        AtomImpl.prototype.toString = function () {
	            return this.name;
	        };
	        return AtomImpl;
	    }());
	    isAtom = createInstanceofPredicate("Atom", Atom);
	}
	function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	    var atom = new Atom(name);
	    onBecomeObserved(atom, onBecomeObservedHandler);
	    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
	    return atom;
	}
	
	var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
	// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
	var safariPrototypeSetterInheritanceBug = (function () {
	    var v = false;
	    var p = {};
	    Object.defineProperty(p, "0", {
	        set: function () {
	            v = true;
	        }
	    });
	    Object.create(p)["0"] = 1;
	    return v === false;
	})();
	/**
	 * This array buffer contains two lists of properties, so that all arrays
	 * can recycle their property definitions, which significantly improves performance of creating
	 * properties on the fly.
	 */
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	// Typescript workaround to make sure ObservableArray extends Array
	var StubArray = /** @class */ (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	function inherit(ctor, proto) {
	    if (typeof Object["setPrototypeOf"] !== "undefined") {
	        Object["setPrototypeOf"](ctor.prototype, proto);
	    }
	    else if (typeof ctor.prototype.__proto__ !== "undefined") {
	        ctor.prototype.__proto__ = proto;
	    }
	    else {
	        ctor["prototype"] = proto;
	    }
	}
	inherit(StubArray, Array.prototype);
	// Weex freeze Array.prototype
	// Make them writeable and configurable in prototype chain
	// https://github.com/alibaba/weex/pull/1529
	if (Object.isFrozen(Array)) {
	    
	    [
	        "constructor",
	        "push",
	        "shift",
	        "concat",
	        "pop",
	        "unshift",
	        "replace",
	        "find",
	        "findIndex",
	        "splice",
	        "reverse",
	        "sort"
	    ].forEach(function (key) {
	        Object.defineProperty(StubArray.prototype, key, {
	            configurable: true,
	            writable: true,
	            value: Array.prototype[key]
	        });
	    });
	}
	var ObservableArrayAdministration = /** @class */ (function () {
	    function ObservableArrayAdministration(name, enhancer, array, owned) {
	        this.array = array;
	        this.owned = owned;
	        this.values = [];
	        this.lastKnownLength = 0;
	        this.atom = new Atom(name || "ObservableArray@" + getNextId());
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
	        if (this.dehancer !== undefined && this.values.length > 0)
	            return values.map(this.dehancer);
	        return values;
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined; // No Array.fill everywhere...
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    // adds / removes the necessary numeric properties to this object
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta + 1);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = EMPTY_ARRAY;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems =
	            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta); // create or remove new entries
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return this.dehanceValues(res);
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values
	                .slice(0, index)
	                .concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "update",
	                index: index,
	                newValue: newValue,
	                oldValue: oldValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removed: removed,
	                added: added,
	                removedCount: removed.length,
	                addedCount: added.length
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = /** @class */ (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, enhancer, name, owned) {
	        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	        if (owned === void 0) { owned = false; }
	        var _this = _super.call(this) || this;
	        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
	        addHiddenFinalProp(_this, "$mobx", adm);
	        if (initialValues && initialValues.length) {
	            _this.spliceWithArray(0, 0, initialValues);
	        }
	        if (safariPrototypeSetterInheritanceBug) {
	            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
	            // defined on the instance. After that it works fine, even if this property is deleted.
	            Object.defineProperty(adm.array, "0", ENTRY_0);
	        }
	        return _this;
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.concat = function () {
	        var arrays = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arrays[_i] = arguments[_i];
	        }
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    /**
	     * Converts this array back to a (shallow) javascript structure.
	     * For a deep clone use mobx.toJS
	     */
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        this.$mobx.atom.reportObserved();
	        return this.$mobx.dehanceValues(this.$mobx.values);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        if (arguments.length === 3)
	            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
	        var idx = this.findIndex.apply(this, arguments);
	        return idx === -1 ? undefined : this.get(idx);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        if (arguments.length === 3)
	            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
	        var items = this.peek(), l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return i;
	        return -1;
	    };
	    /*
	     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
	     * since these functions alter the inner structure of the array, the have side effects.
	     * Because the have side effects, they should not be used in computed function,
	     * and for that reason the do not call dependencyState.notifyObserved
	     */
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        // reverse by default mutates in place before returning the result
	        // which makes it both a 'derivation' and a 'mutation'.
	        // so we deviate from the default and just make it an dervitation
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        // sort by default mutates in place before returning the result
	        // which goes against all good practices. Let's not change the array in place!
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.move = function (fromIndex, toIndex) {
	        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
	        function checkIndex(index) {
	            if (index < 0) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
	            }
	            var length = this.$mobx.values.length;
	            if (index >= length) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
	            }
	        }
	        checkIndex.call(this, fromIndex);
	        checkIndex.call(this, toIndex);
	        if (fromIndex === toIndex) {
	            return;
	        }
	        var oldItems = this.$mobx.values;
	        var newItems;
	        if (fromIndex < toIndex) {
	            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex + 1));
	        }
	        else {
	            // toIndex < fromIndex
	            newItems = __spread(oldItems.slice(0, toIndex), [
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
	        }
	        this.replace(newItems);
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.get = function (index) {
	        var impl = this.$mobx;
	        if (impl) {
	            if (index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.dehanceValue(impl.values[index]);
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
	                .values
	                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.set = function (index, newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        if (index < values.length) {
	            // update at index in range
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: this,
	                    index: index,
	                    newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            // add a new item
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            // out of bounds
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    };
	    return ObservableArray;
	}(StubArray));
	declareIterator(ObservableArray.prototype, function () {
	    
	    this.$mobx.atom.reportObserved();
	    var self = this;
	    var nextIndex = 0;
	    return makeIterable({
	        next: function () {
	            return nextIndex < self.length
	                ? { value: self[nextIndex++], done: false }
	                : { done: true, value: undefined };
	        }
	    });
	});
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
	    addHiddenProp(ObservableArray.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Array");
	}
	// Internet Explorer on desktop doesn't support this.....
	// So, let's don't do this to avoid different semantics
	// See #1395
	// addHiddenProp(
	//     ObservableArray.prototype,
	//     typeof Symbol !== "undefined" ? Symbol.isConcatSpreadable as any : "@@isConcatSpreadable",
	//     {
	//         enumerable: false,
	//         configurable: true,
	//         value: true
	//     }
	// )
	/**
	 * Wrap function from prototype
	 */
	
	[
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some",
	    "toString",
	    "toLocaleString"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
	    addHiddenProp(ObservableArray.prototype, funcName, function () {
	        return baseFunc.apply(this.peek(), arguments);
	    });
	});
	/**
	 * We don't want those to show up in `for (const key in ar)` ...
	 */
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "intercept",
	    "observe",
	    "clear",
	    "concat",
	    "get",
	    "replace",
	    "toJS",
	    "toJSON",
	    "peek",
	    "find",
	    "findIndex",
	    "splice",
	    "spliceWithArray",
	    "push",
	    "pop",
	    "set",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "move",
	    "toString",
	    "toLocaleString"
	]);
	// See #364
	var ENTRY_0 = createArrayEntryDescriptor(0);
	function createArrayEntryDescriptor(index) {
	    return {
	        enumerable: false,
	        configurable: false,
	        get: function () {
	            return this.get(index);
	        },
	        set: function (value) {
	            this.set(index, value);
	        }
	    };
	}
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
	}
	
	var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	var EMPTY_OBJECT = {};
	Object.freeze(EMPTY_OBJECT);
	function getGlobal() {
	    return typeof window !== "undefined" ? window : global;
	}
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail$1(message) {
	    invariant(false, message);
	    throw "X"; // unreachable
	}
	function invariant(check, message) {
	    if (!check)
	        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
	}
	/**
	 * Prints a deprecation message, but only one time.
	 * Returns false if the deprecated message was already printed before
	 */
	var deprecatedMessages = [];
	function deprecated(msg, thing) {
	    if (process.env.NODE_ENV === "production")
	        return false;
	    if (thing) {
	        return deprecated("'" + msg + "', use '" + thing + "' instead.");
	    }
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	/**
	 * Makes sure that the provided function is invoked at most once.
	 */
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	
	function makeNonEnumerable(object, propNames) {
	    for (var i = 0; i < propNames.length; i++) {
	        addHiddenProp(object, propNames[i], object[propNames[i]]);
	    }
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object, prop))
	        fail$1("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	function areBothNaN(a, b) {
	    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	/**
	 * Returns whether the argument is an array, disregarding observability.
	 */
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	function isES6Map(thing) {
	    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
	        return true;
	    return false;
	}
	function getMapLikeKeys(map) {
	    if (isPlainObject(map))
	        return Object.keys(map);
	    if (Array.isArray(map))
	        return map.map(function (_a) {
	            var _b = __read(_a, 1), key = _b[0];
	            return key;
	        });
	    if (isES6Map(map) || isObservableMap(map))
	        return iteratorToArray(map.keys());
	    return fail$1("Cannot get keys from '" + map + "'");
	}
	// use Array.from in Mobx 5
	function iteratorToArray(it) {
	    var res = [];
	    while (true) {
	        var r = it.next();
	        if (r.done)
	            break;
	        res.push(r.value);
	    }
	    return res;
	}
	function primitiveSymbol() {
	    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? "" + value : value;
	}
	
	/**
	 * These values will persist if global state is reset
	 */
	var persistentKeys = [
	    "mobxGuid",
	    "spyListeners",
	    "enforceActions",
	    "computedRequiresReaction",
	    "disableErrorBoundaries",
	    "runId"
	];
	var MobXGlobals = /** @class */ (function () {
	    function MobXGlobals() {
	        /**
	         * MobXGlobals version.
	         * MobX compatiblity with other versions loaded in memory as long as this version matches.
	         * It indicates that the global state still stores similar information
	         */
	        this.version = 5;
	        /**
	         * Currently running derivation
	         */
	        this.trackingDerivation = null;
	        /**
	         * Are we running a computation currently? (not a reaction)
	         */
	        this.computationDepth = 0;
	        /**
	         * Each time a derivation is tracked, it is assigned a unique run-id
	         */
	        this.runId = 0;
	        /**
	         * 'guid' for general purpose. Will be persisted amongst resets.
	         */
	        this.mobxGuid = 0;
	        /**
	         * Are we in a batch block? (and how many of them)
	         */
	        this.inBatch = 0;
	        /**
	         * Observables that don't have observers anymore, and are about to be
	         * suspended, unless somebody else accesses it in the same batch
	         *
	         * @type {IObservable[]}
	         */
	        this.pendingUnobservations = [];
	        /**
	         * List of scheduled, not yet executed, reactions.
	         */
	        this.pendingReactions = [];
	        /**
	         * Are we currently processing reactions?
	         */
	        this.isRunningReactions = false;
	        /**
	         * Is it allowed to change observables at this point?
	         * In general, MobX doesn't allow that when running computations and React.render.
	         * To ensure that those functions stay pure.
	         */
	        this.allowStateChanges = true;
	        /**
	         * If strict mode is enabled, state changes are by default not allowed
	         */
	        this.enforceActions = false;
	        /**
	         * Spy callbacks
	         */
	        this.spyListeners = [];
	        /**
	         * Globally attached error handlers that react specifically to errors in reactions
	         */
	        this.globalReactionErrorHandlers = [];
	        /**
	         * Warn if computed values are accessed outside a reactive context
	         */
	        this.computedRequiresReaction = false;
	        /*
	         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
	         * the stack when an exception occurs while debugging.
	         */
	        this.disableErrorBoundaries = false;
	    }
	    return MobXGlobals;
	}());
	var globalState = new MobXGlobals();
	var runInIsolationCalled = false;
	{
	    var global_1 = getGlobal();
	    if (!global_1.__mobxInstanceCount) {
	        global_1.__mobxInstanceCount = 1;
	    }
	    else {
	        global_1.__mobxInstanceCount++;
	        setTimeout(function () {
	            if (!runInIsolationCalled) {
	                fail$1(process.env.NODE_ENV !== "production" &&
	                    "There are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
	            }
	        }, 1);
	    }
	}
	function isolateGlobalState() {
	    runInIsolationCalled = true;
	    getGlobal().__mobxInstanceCount--;
	}
	function getGlobalState() {
	    return globalState;
	}
	/**
	 * For testing purposes only; this will break the internal state of existing observables,
	 * but can be used to get back at a stable state after throwing errors
	 */
	function resetGlobalState() {
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.enforceActions;
	}
	
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = getObservers(node).map(nodeToObserverTree);
	    return result;
	}
	
	function hasObservers(observable) {
	    return observable.observers && observable.observers.length > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	// function invariantObservers(observable: IObservable) {
	//     const list = observable.observers
	//     const map = observable.observersIndexes
	//     const l = list.length
	//     for (let i = 0; i < l; i++) {
	//         const id = list[i].__mapid
	//         if (i) {
	//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
	//         } else {
	//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
	//         }
	//     }
	//     invariant(
	//         list.length === 0 || Object.keys(map).length === list.length - 1,
	//         "INTERNAL ERROR there is no junk in map"
	//     )
	// }
	function addObserver(observable, node) {
	    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
	    // invariantObservers(observable);
	    var l = observable.observers.length;
	    if (l) {
	        // because object assignment is relatively expensive, let's not store data about index 0.
	        observable.observersIndexes[node.__mapid] = l;
	    }
	    observable.observers[l] = node;
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
	}
	function removeObserver(observable, node) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
	    // invariantObservers(observable);
	    if (observable.observers.length === 1) {
	        // deleting last observer
	        observable.observers.length = 0;
	        queueForUnobservation(observable);
	    }
	    else {
	        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
	        var list = observable.observers;
	        var map = observable.observersIndexes;
	        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
	        if (filler !== node) {
	            // otherwise node was the last element, which already got removed from array
	            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
	            if (index) {
	                // map store all indexes but 0, see comment in `addObserver`
	                map[filler.__mapid] = index;
	            }
	            else {
	                delete map[filler.__mapid];
	            }
	            list[index] = filler;
	        }
	        delete map[node.__mapid];
	    }
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
	}
	function queueForUnobservation(observable) {
	    if (observable.isPendingUnobservation === false) {
	        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	/**
	 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
	 * During a batch `onBecomeUnobserved` will be called at most once per observable.
	 * Avoids unnecessary recalculations.
	 */
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        // the batch is actually about to finish, all unobserving should happen here.
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable = list[i];
	            observable.isPendingUnobservation = false;
	            if (observable.observers.length === 0) {
	                if (observable.isBeingObserved) {
	                    // if this observable had reactive observers, trigger the hooks
	                    observable.isBeingObserved = false;
	                    observable.onBecomeUnobserved();
	                }
	                if (observable instanceof ComputedValue) {
	                    // computed values are automatically teared down when the last observer leaves
	                    // this process happens recursively, this computed might be the last observabe of another, etc..
	                    observable.suspend();
	                }
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        /**
	         * Simple optimization, give each derivation run an unique id (runId)
	         * Check if last time this observable was accessed the same runId is used
	         * if this is the case, the relation is already known
	         */
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	            if (!observable.isBeingObserved) {
	                observable.isBeingObserved = true;
	                observable.onBecomeObserved();
	            }
	        }
	        return true;
	    }
	    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
	        queueForUnobservation(observable);
	    }
	    return false;
	}
	// function invariantLOS(observable: IObservable, msg: string) {
	//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
	//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
	//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
	//     throw new Error(
	//         "lowestObserverState is wrong for " +
	//             msg +
	//             " because " +
	//             min +
	//             " < " +
	//             observable.lowestObserverState
	//     )
	// }
	/**
	 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
	 * It will propagate changes to observers from previous run
	 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
	 * Hopefully self reruning autoruns aren't a feature people should depend on
	 * Also most basic use cases should be ok
	 */
	// Called by Atom when its value changes
	function propagateChanged(observable) {
	    // invariantLOS(observable, "changed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	        d.dependenciesState = exports.IDerivationState.STALE;
	    }
	    // invariantLOS(observable, "changed end");
	}
	// Called by ComputedValue when it recalculate and its value changed
	function propagateChangeConfirmed(observable) {
	    // invariantLOS(observable, "confirmed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = exports.IDerivationState.STALE;
	        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
	        )
	            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	    }
	    // invariantLOS(observable, "confirmed end");
	}
	// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
	function propagateMaybeChanged(observable) {
	    // invariantLOS(observable, "maybe start");
	    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	    }
	    // invariantLOS(observable, "maybe end");
	}
	function logTraceInfo(derivation, observable) {
	    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
	    if (derivation.isTracing === TraceMode.BREAK) {
	        var lines = [];
	        printDepTree(getDependencyTree(derivation), lines, 1);
	        // prettier-ignore
	        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
	    }
	}
	function printDepTree(tree, lines, depth) {
	    if (lines.length >= 1000) {
	        lines.push("(and many more)");
	        return;
	    }
	    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
	    if (tree.dependencies)
	        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
	}
	
	(function (IDerivationState) {
	    // before being run or (outside batch and not being observed)
	    // at this point derivation is not holding any data about dependency tree
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    // no shallow dependency changed since last computation
	    // won't recalculate derivation
	    // this is what makes mobx fast
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    // some deep dependency changed, but don't know if shallow dependency changed
	    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
	    // currently only ComputedValue will propagate POSSIBLY_STALE
	    //
	    // having this state is second big optimization:
	    // don't have to recompute on every dependency change, but only when it's needed
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    // A shallow dependency has changed since last computation and the derivation
	    // will need to recompute when it's needed next.
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(exports.IDerivationState || (exports.IDerivationState = {}));
	var TraceMode;
	(function (TraceMode) {
	    TraceMode[TraceMode["NONE"] = 0] = "NONE";
	    TraceMode[TraceMode["LOG"] = 1] = "LOG";
	    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
	})(TraceMode || (TraceMode = {}));
	var CaughtException = /** @class */ (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	        // Empty
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	/**
	 * Finds out whether any dependency of the derivation has actually changed.
	 * If dependenciesState is 1 then it will recalculate dependencies,
	 * if any dependency changed it will propagate it by changing dependenciesState to 2.
	 *
	 * By iterating over the dependencies in the same order that they were reported and
	 * stopping on the first change, all the recalculations are only called for ComputedValues
	 * that will be tracked by derivation. That is because we assume that if the first x
	 * dependencies of the derivation doesn't change then the derivation should run the same way
	 * up until accessing x-th dependency.
	 */
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case exports.IDerivationState.UP_TO_DATE:
	            return false;
	        case exports.IDerivationState.NOT_TRACKING:
	        case exports.IDerivationState.STALE:
	            return true;
	        case exports.IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    if (globalState.disableErrorBoundaries) {
	                        obj.get();
	                    }
	                    else {
	                        try {
	                            obj.get();
	                        }
	                        catch (e) {
	                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
	                            untrackedEnd(prevUntracked);
	                            return true;
	                        }
	                    }
	                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
	                    // and `derivation` is an observer of `obj`
	                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null; // filter out actions inside computations
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers$$1 = atom.observers.length > 0;
	    // Should never be possible to change an observed observable from inside computed, see #798
	    if (globalState.computationDepth > 0 && hasObservers$$1)
	        fail$1(process.env.NODE_ENV !== "production" &&
	            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
	    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
	    if (!globalState.allowStateChanges && (hasObservers$$1 || globalState.enforceActions === "strict"))
	        fail$1(process.env.NODE_ENV !== "production" &&
	            (globalState.enforceActions
	                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
	                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
	                atom.name);
	}
	/**
	 * Executes the provided function `f` and tracks which observables are being accessed.
	 * The tracking information is stored on the `derivation` object and the derivation is registered
	 * as observer of any of the accessed observables.
	 */
	function trackDerivedFunction(derivation, f, context) {
	    // pre allocate array allocation + room for variation in deps
	    // array will be trimmed by bindDependencies
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    if (globalState.disableErrorBoundaries === true) {
	        result = f.call(context);
	    }
	    else {
	        try {
	            result = f.call(context);
	        }
	        catch (e) {
	            result = new CaughtException(e);
	        }
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	/**
	 * diffs newObserving with observing.
	 * update observing to be newObserving with unique observables
	 * notify observers that become observed/unobserved
	 */
	function bindDependencies(derivation) {
	    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
	    var prevObserving = derivation.observing;
	    var observing = (derivation.observing = derivation.newObserving);
	    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
	    // Go through all new observables and check diffValue: (this list can contain duplicates):
	    //   0: first occurrence, change to 1 and keep it
	    //   1: extra occurrence, drop it
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
	        // not hitting the condition
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
	    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
	    //   0: it's not in new observables, unobserve it
	    //   1: it keeps being observed, don't want to notify it. change to 0
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    // Go through all new observables and check diffValue: (now it should be unique)
	    //   0: it was set to 0 in last loop. don't need to do anything.
	    //   1: it wasn't observed, let's observe it. set back to 0
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    // Some new observed derivations may become stale during this derivation computation
	    // so they have had no chance to propagate staleness (#916)
	    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	/**
	 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
	 *
	 */
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	}
	
	function trace() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var enterBreakPoint = false;
	    if (typeof args[args.length - 1] === "boolean")
	        enterBreakPoint = args.pop();
	    var derivation = getAtomFromArgs(args);
	    if (!derivation) {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
	    }
	    if (derivation.isTracing === TraceMode.NONE) {
	        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
	    }
	    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
	}
	function getAtomFromArgs(args) {
	    switch (args.length) {
	        case 0:
	            return globalState.trackingDerivation;
	        case 1:
	            return getAtom(args[0]);
	        case 2:
	            return getAtom(args[0], args[1]);
	    }
	}
	
	var Reaction = /** @class */ (function () {
	    function Reaction(name, onInvalidate, errorHandler) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.errorHandler = errorHandler;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = [];
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	        this.isTracing = TraceMode.NONE;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    /**
	     * internal, use schedule() if you intend to kick off a reaction
	     */
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                try {
	                    this.onInvalidate();
	                    if (this._isTrackPending && isSpyEnabled()) {
	                        // onInvalidate didn't trigger track right away..
	                        spyReport({
	                            name: this.name,
	                            type: "scheduled-reaction"
	                        });
	                    }
	                }
	                catch (e) {
	                    this.reportExceptionInDerivation(e);
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                name: this.name,
	                type: "reaction"
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            // disposed during last run. Clean up everything that was bound after the dispose call.
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        if (globalState.disableErrorBoundaries)
	            throw error;
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
	        console.error(message, error);
	        /** If debugging brought you here, please, read the above message :-). Tnx! */
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                name: this.name,
	                message: message,
	                error: "" + error
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                // if disposed while running, clean up later. Maybe not optimal, but rare case
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.trace = function (enterBreakPoint) {
	        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
	        trace(this, enterBreakPoint);
	    };
	    return Reaction;
	}());
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	/**
	 * Magic number alert!
	 * Defines within how many times a reaction is allowed to re-trigger itself
	 * until it is assumed that this is gonna be a never ending loop...
	 */
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    // Trampolining, if runReactions are already running, new reactions will be picked up
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    // While running reactions, new reactions might be triggered.
	    // Hence we work with two variables and check whether
	    // we converge to no remaining reactions after a while.
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
	                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0); // clear reactions
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	
	function when(predicate, arg1, arg2) {
	    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
	        return whenPromise(predicate, arg1);
	    return _when(predicate, arg1, arg2 || {});
	}
	function _when(predicate, effect, opts) {
	    var timeoutHandle;
	    if (typeof opts.timeout === "number") {
	        timeoutHandle = setTimeout(function () {
	            if (!disposer.$mobx.isDisposed) {
	                disposer();
	                var error = new Error("WHEN_TIMEOUT");
	                if (opts.onError)
	                    opts.onError(error);
	                else
	                    throw error;
	            }
	        }, opts.timeout);
	    }
	    opts.name = opts.name || "When@" + getNextId();
	    var effectAction = createAction(opts.name + "-effect", effect);
	    var disposer = autorun(function (r) {
	        if (predicate()) {
	            r.dispose();
	            if (timeoutHandle)
	                clearTimeout(timeoutHandle);
	            effectAction();
	        }
	    }, opts);
	    return disposer;
	}
	function whenPromise(predicate, opts) {
	    if (process.env.NODE_ENV !== "production" && opts && opts.onError)
	        return fail$1("the options 'onError' and 'promise' cannot be combined");
	    var cancel;
	    var res = new Promise(function (resolve, reject) {
	        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
	        cancel = function () {
	            disposer();
	            reject("WHEN_CANCELLED");
	        };
	    });
	    res.cancel = cancel;
	    return res;
	}
	
	function keys(obj) {
	    if (isObservableObject(obj)) {
	        return obj.$mobx.getKeys();
	    }
	    if (isObservableMap(obj)) {
	        return obj._keys.slice();
	    }
	    return fail$1(process.env.NODE_ENV !== "production" &&
	        "'keys()' can only be used on observable objects and maps");
	}
	function values(obj) {
	    if (isObservableObject(obj)) {
	        return keys(obj).map(function (key) { return obj[key]; });
	    }
	    if (isObservableMap(obj)) {
	        return keys(obj).map(function (key) { return obj.get(key); });
	    }
	    if (isObservableArray(obj)) {
	        return obj.slice();
	    }
	    return fail$1(process.env.NODE_ENV !== "production" &&
	        "'values()' can only be used on observable objects, arrays and maps");
	}
	function set(obj, key, value) {
	    if (arguments.length === 2) {
	        startBatch();
	        var values_1 = key;
	        try {
	            for (var key_1 in values_1)
	                set(obj, key_1, values_1[key_1]);
	        }
	        finally {
	            endBatch();
	        }
	        return;
	    }
	    if (isObservableObject(obj)) {
	        var adm = obj.$mobx;
	        var existingObservable = adm.values[key];
	        if (existingObservable) {
	            existingObservable.set(value);
	        }
	        else {
	            defineObservableProperty(obj, key, value, adm.defaultEnhancer);
	        }
	    }
	    else if (isObservableMap(obj)) {
	        obj.set(key, value);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        startBatch();
	        if (key >= obj.length)
	            obj.length = key + 1;
	        obj[key] = value;
	        endBatch();
	    }
	    else {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'set()' can only be used on observable objects, arrays and maps");
	    }
	}
	function remove(obj, key) {
	    if (isObservableObject(obj)) {
	        
	        obj.$mobx.remove(key);
	    }
	    else if (isObservableMap(obj)) {
	        obj.delete(key);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        obj.splice(key, 1);
	    }
	    else {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'remove()' can only be used on observable objects, arrays and maps");
	    }
	}
	function has$1(obj, key) {
	    if (isObservableObject(obj)) {
	        // return keys(obj).indexOf(key) >= 0
	        var adm = getAdministration(obj);
	        adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
	        return adm.values[key] instanceof ObservableValue;
	    }
	    else if (isObservableMap(obj)) {
	        return obj.has(key);
	    }
	    else if (isObservableArray(obj)) {
	        return key >= 0 && key < obj.length;
	    }
	    else {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'has()' can only be used on observable objects, arrays and maps");
	    }
	}
	function get(obj, key) {
	    if (!has$1(obj, key))
	        return undefined;
	    if (isObservableObject(obj)) {
	        return obj[key];
	    }
	    else if (isObservableMap(obj)) {
	        return obj.get(key);
	    }
	    else if (isObservableArray(obj)) {
	        return obj[key];
	    }
	    else {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "'get()' can only be used on observable objects, arrays and maps");
	    }
	}
	
	function decorate(thing, decorators) {
	    process.env.NODE_ENV !== "production" &&
	        invariant(isPlainObject(decorators), "Decorators should be a key value map");
	    var target = typeof thing === "function" ? thing.prototype : thing;
	    for (var prop in decorators) {
	        var decorator = decorators[prop];
	        process.env.NODE_ENV !== "production" &&
	            invariant(typeof decorator === "function", "Decorate: expected a decorator function for '" + prop + "'");
	        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
	        var newDescriptor = decorator(target, prop, descriptor);
	        if (newDescriptor)
	            Object.defineProperty(target, prop, newDescriptor);
	    }
	    return thing;
	}
	
	function configure(options) {
	    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, arrayBuffer = options.arrayBuffer, reactionScheduler = options.reactionScheduler;
	    if (enforceActions !== undefined) {
	        if (typeof enforceActions !== "boolean" && enforceActions !== "strict")
	            return fail("Invalid configuration for 'enforceActions': " + enforceActions);
	        globalState.enforceActions = enforceActions;
	        globalState.allowStateChanges =
	            enforceActions === true || enforceActions === "strict" ? false : true;
	    }
	    if (computedRequiresReaction !== undefined) {
	        globalState.computedRequiresReaction = !!computedRequiresReaction;
	    }
	    if (options.isolateGlobalState === true) {
	        isolateGlobalState();
	    }
	    if (disableErrorBoundaries !== undefined) {
	        if (disableErrorBoundaries === true)
	            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
	        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
	    }
	    if (typeof arrayBuffer === "number") {
	        reserveArrayBuffer(arrayBuffer);
	    }
	    if (reactionScheduler) {
	        setReactionScheduler(reactionScheduler);
	    }
	}
	
	var generatorId = 0;
	function flow(generator) {
	    if (arguments.length !== 1)
	        fail$1(process.env.NODE_ENV && "Flow expects one 1 argument and cannot be used as decorator");
	    var name = generator.name || "<unnamed flow>";
	    // Implementation based on https://github.com/tj/co/blob/master/index.js
	    return function () {
	        var ctx = this;
	        var args = arguments;
	        var runId = ++generatorId;
	        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
	        var rejector;
	        var pendingPromise = undefined;
	        var res = new Promise(function (resolve, reject) {
	            var stepId = 0;
	            rejector = reject;
	            function onFulfilled(res) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function onRejected(err) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function next(ret) {
	                if (ret && typeof ret.then === "function") {
	                    // an async iterator
	                    ret.then(next, reject);
	                    return;
	                }
	                if (ret.done)
	                    return resolve(ret.value);
	                pendingPromise = Promise.resolve(ret.value);
	                return pendingPromise.then(onFulfilled, onRejected);
	            }
	            onFulfilled(undefined); // kick off the process
	        });
	        res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
	            try {
	                if (pendingPromise)
	                    cancelPromise(pendingPromise);
	                // Finally block can return (or yield) stuff..
	                var res_1 = gen.return();
	                // eat anything that promise would do, it's cancelled!
	                var yieldedPromise = Promise.resolve(res_1.value);
	                yieldedPromise.then(noop, noop);
	                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
	                // reject our original promise
	                rejector(new Error("FLOW_CANCELLED"));
	            }
	            catch (e) {
	                rejector(e); // there could be a throwing finally block
	            }
	        });
	        return res;
	    };
	}
	function cancelPromise(promise) {
	    if (typeof promise.cancel === "function")
	        promise.cancel();
	}
	
	var defaultOptions = {
	    detectCycles: true,
	    exportMapsAsObjects: true
	};
	function toJS(source, options, __alreadySeen) {
	    if (__alreadySeen === void 0) { __alreadySeen = []; }
	    // backward compatibility
	    if (typeof options === "boolean")
	        options = { detectCycles: options };
	    if (!options)
	        options = defaultOptions;
	    var detectCycles = options.detectCycles === true;
	    // optimization: using ES6 map would be more efficient!
	    // optimization: lift this function outside toJS, this makes recursion expensive
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (isObservable(source)) {
	        if (detectCycles && __alreadySeen === null)
	            __alreadySeen = [];
	        if (detectCycles && source !== null && typeof source === "object") {
	            for (var i = 0, l = __alreadySeen.length; i < l; i++)
	                if (__alreadySeen[i][0] === source)
	                    return __alreadySeen[i][1];
	        }
	        if (isObservableArray(source)) {
	            var res = cache([]);
	            var toAdd = source.map(function (value) { return toJS(value, options, __alreadySeen); });
	            res.length = toAdd.length;
	            for (var i = 0, l = toAdd.length; i < l; i++)
	                res[i] = toAdd[i];
	            return res;
	        }
	        if (isObservableObject(source)) {
	            var res = cache({});
	            keys(source); // make sure we track the keys of the object
	            for (var key in source) {
	                res[key] = toJS(source[key], options, __alreadySeen);
	            }
	            return res;
	        }
	        if (isObservableMap(source)) {
	            if (options.exportMapsAsObjects === false) {
	                var res_1 = cache(new Map());
	                source.forEach(function (value, key) {
	                    res_1.set(key, toJS(value, options, __alreadySeen));
	                });
	                return res_1;
	            }
	            else {
	                var res_2 = cache({});
	                source.forEach(function (value, key) {
	                    res_2[key] = toJS(value, options, __alreadySeen);
	                });
	                return res_2;
	            }
	        }
	        if (isObservableValue(source))
	            return toJS(source.get(), options, __alreadySeen);
	    }
	    return source;
	}
	
	function interceptReads(thing, propOrHandler, handler) {
	    var target;
	    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
	        target = getAdministration(thing);
	    }
	    else if (isObservableObject(thing)) {
	        if (typeof propOrHandler !== "string")
	            return fail$1(process.env.NODE_ENV !== "production" &&
	                "InterceptReads can only be used with a specific property, not with an object in general");
	        target = getAdministration(thing, propOrHandler);
	    }
	    else {
	        return fail$1(process.env.NODE_ENV !== "production" &&
	            "Expected observable map, object or array as first array");
	    }
	    if (target.dehancer !== undefined)
	        return fail$1(process.env.NODE_ENV !== "production" && "An intercept reader was already established");
	    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
	    return function () {
	        target.dehancer = undefined;
	    };
	}
	
	/**
	 * (c) Michel Weststrate 2015 - 2016
	 * MIT Licensed
	 *
	 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
	 * this is a good place to start:
	 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
	 *
	 * Source folders:
	 * ===============
	 *
	 * - api/     Most of the public static methods exposed by the module can be found here.
	 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
	 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
	 * - utils/   Utility stuff.
	 *
	 */
	try {
	    // define process.env if needed
	    // if this is not a production build in the first place
	    // (in which case the expression below would be substituted with 'production')
	    process.env.NODE_ENV;
	}
	catch (e) {
	    var g = typeof window !== "undefined" ? window : global;
	    if (typeof process === "undefined")
	        g.process = {};
	    g.process.env = {};
	}
	
	(function () {
	    function testCodeMinification() { }
	    if (testCodeMinification.name !== "testCodeMinification" &&
	        process.env.NODE_ENV !== "production") {
	        console.warn("[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
	    }
	})();
	// This line should come after all the imports as well, for the same reason
	// as noted above. I will file a bug with rollupjs - @rossipedia
	// Devtools support
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    // See: https://github.com/andykog/mobx-devtools/
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
	        spy: spy,
	        extras: {
	            getDebugName: getDebugName
	        }
	    });
	}
	// TODO: remove in some future build
	if (process.env.NODE_ENV !== "production" &&
	    typeof module !== "undefined" &&
	    typeof module.exports !== "undefined") {
	    var warnedAboutDefaultExport_1 = false;
	    Object.defineProperty(module.exports, "default", {
	        enumerable: false,
	        get: function () {
	            if (!warnedAboutDefaultExport_1) {
	                warnedAboutDefaultExport_1 = true;
	                console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
	            }
	            return undefined;
	        }
	    });
	    [
	        "extras",
	        "Atom",
	        "BaseAtom",
	        "asFlat",
	        "asMap",
	        "asReference",
	        "asStructure",
	        "autorunAsync",
	        "createTranformer",
	        "expr",
	        "isModifierDescriptor",
	        "isStrictModeEnabled",
	        "map",
	        "useStrict",
	        "whyRun"
	    ].forEach(function (prop) {
	        Object.defineProperty(module.exports, prop, {
	            enumerable: false,
	            get: function () {
	                fail$1("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
	            },
	            set: function () { }
	        });
	    });
	}
	
	exports.Reaction = Reaction;
	exports.untracked = untracked;
	exports.createAtom = createAtom;
	exports.spy = spy;
	exports.comparer = comparer;
	exports.isObservableObject = isObservableObject;
	exports.isBoxedObservable = isObservableValue;
	exports.isObservableArray = isObservableArray;
	exports.ObservableMap = ObservableMap;
	exports.isObservableMap = isObservableMap;
	exports.transaction = transaction;
	exports.observable = observable;
	exports.computed = computed;
	exports.isObservable = isObservable;
	exports.isObservableProp = isObservableProp;
	exports.isComputed = isComputed;
	exports.isComputedProp = isComputedProp;
	exports.extendObservable = extendObservable;
	exports.extendShallowObservable = extendShallowObservable;
	exports.observe = observe;
	exports.intercept = intercept;
	exports.autorun = autorun;
	exports.reaction = reaction;
	exports.when = when;
	exports.action = action;
	exports.isAction = isAction;
	exports.runInAction = runInAction;
	exports.keys = keys;
	exports.values = values;
	exports.set = set;
	exports.remove = remove;
	exports.has = has$1;
	exports.get = get;
	exports.decorate = decorate;
	exports.configure = configure;
	exports.onBecomeObserved = onBecomeObserved;
	exports.onBecomeUnobserved = onBecomeUnobserved;
	exports.flow = flow;
	exports.toJS = toJS;
	exports.trace = trace;
	exports.getDependencyTree = getDependencyTree;
	exports.getObserverTree = getObserverTree;
	exports._resetGlobalState = resetGlobalState;
	exports._getGlobalState = getGlobalState;
	exports.getDebugName = getDebugName;
	exports.getAtom = getAtom;
	exports._getAdministration = getAdministration;
	exports._allowStateChanges = allowStateChanges;
	exports.isArrayLike = isArrayLike;
	exports._isComputingDerivation = isComputingDerivation;
	exports.onReactionError = onReactionError;
	exports._interceptReads = interceptReads;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73), (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map